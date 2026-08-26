i.d(t, { A: () => E }), i(321073);
var n = i(158390),
    l = i(17928),
    a = i(228366),
    r = i(927813);
let s = r.A.Millis.SECOND,
    c = 10 * r.A.Millis.SECOND,
    d = { status: "idle" },
    u = { status: "loading" },
    o = { status: "error" },
    f = {};
function g(e, t) {
    let i = e.entriesByWidgetId.get(t);
    return null == i && ((i = { state: d, attempts: 0 }), e.entriesByWidgetId.set(t, i)), i;
}
function h(e, t, i, l) {
    if (0 === i.length) {
        e.backoff?.pending !== !0 && e.backoff?.succeed();
        return;
    }
    let r = [];
    i.forEach((t) => {
        let i = g(e, t);
        l && i.attempts < 3 ? r.push(t) : (i.state = o);
    }),
        0 !== r.length &&
            ((e.backoff ??= new n.A(s, c, !0)),
            e.backoff.pending ||
                e.backoff.fail(() => a.h.dispatch({ type: "GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED", guildId: t })));
}
class m extends l.Ay.Store {
    static displayName = "GuildSpaceHydrationStore";
    getHydration(e, t) {
        return f[e]?.entriesByWidgetId.get(t)?.state ?? d;
    }
    getWidgetIdsToHydrate(e, t) {
        let i = f[e];
        return null == i
            ? [...t]
            : null != i.activeRequestId
              ? []
              : t.filter((e) => "idle" === (i.entriesByWidgetId.get(e)?.state ?? d).status);
    }
}
let E = new m(a.h, {
    GUILD_SPACE_HYDRATE_START: function (e) {
        let t,
            { guildId: i, requestId: n, widgetIds: l } = e,
            a = (null == (t = f[i]) && ((t = { entriesByWidgetId: new Map() }), (f[i] = t)), t);
        (a.activeRequestId = n),
            (a.activeWidgetIds = l),
            l.forEach((e) => {
                let t = g(a, e);
                (t.state = u), (t.attempts += 1);
            });
    },
    GUILD_SPACE_HYDRATE_SUCCESS: function (e) {
        let { guildId: t, requestId: i, widgets: n } = e,
            l = f[t];
        if (l?.activeRequestId !== i) return !1;
        let a = l.activeWidgetIds ?? [];
        delete l.activeRequestId, delete l.activeWidgetIds;
        let r = new Map(
                n.map((e) => {
                    let { id: t, data: i } = e;
                    return [t, i];
                }),
            ),
            s = [];
        a.forEach((e) => {
            let t = r.get(e);
            if (null != t) {
                let i = g(l, e);
                (i.state = { status: "success", data: t }), (i.attempts = 0);
            } else s.push(e);
        }),
            h(l, t, s, !0);
    },
    GUILD_SPACE_HYDRATE_FAILURE: function (e) {
        let { guildId: t, requestId: i, retryable: n } = e,
            l = f[t];
        if (l?.activeRequestId !== i) return !1;
        let a = l.activeWidgetIds ?? [];
        delete l.activeRequestId, delete l.activeWidgetIds, h(l, t, a, n);
    },
    GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            i = f[t];
        if (null == i) return !1;
        i.backoff?.cancel();
        let n = new Set(i.activeWidgetIds ?? []),
            l = [...i.entriesByWidgetId]
                .filter((e) => {
                    let [t, i] = e;
                    return "loading" === i.state.status && !n.has(t);
                })
                .map((e) => {
                    let [, t] = e;
                    return t;
                });
        if (0 === l.length) return !1;
        l.forEach((e) => {
            e.state = d;
        });
    },
    GUILD_SPACE_HYDRATE_RESET_ERRORS: function (e) {
        let { guildId: t, widgetIds: i } = e,
            n = f[t];
        if (null == n) return !1;
        let l = i.filter((e) => n.entriesByWidgetId.get(e)?.state.status === "error");
        if (0 === l.length) return !1;
        l.forEach((e) => n.entriesByWidgetId.delete(e));
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, space: i } = e,
            n = f[t];
        if (null == n) return !1;
        let l = new Set(
                i.widgets.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            ),
            a = [...n.entriesByWidgetId.keys()].filter((e) => !l.has(e));
        if (0 === a.length) return !1;
        a.forEach((e) => n.entriesByWidgetId.delete(e));
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e,
            i = f[t];
        if (null == i || (0 === i.entriesByWidgetId.size && null == i.activeRequestId)) return !1;
        i.entriesByWidgetId.clear(), delete i.activeRequestId, delete i.activeWidgetIds;
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i) return !1;
        f[t]?.backoff?.cancel(), delete f[t];
    },
    LOGOUT: function () {
        Object.values(f).forEach((e) => e?.backoff?.cancel()), (f = {});
    },
});
