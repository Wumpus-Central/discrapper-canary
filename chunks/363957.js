i.d(t, { A: () => x }), i(321073);
var n = i(158390),
    s = i(17928),
    l = i(228366),
    r = i(927813);
let a = r.A.Millis.SECOND,
    d = 10 * r.A.Millis.SECOND,
    c = { status: "idle" },
    o = { status: "loading" },
    u = { status: "error" },
    f = {};
function g(e, t) {
    let i = e.entriesByWidgetId.get(t);
    return null == i && ((i = { state: c, attempts: 0 }), e.entriesByWidgetId.set(t, i)), i;
}
function m(e, t, i, s) {
    if (0 === i.length) {
        e.backoff?.pending !== !0 && e.backoff?.succeed();
        return;
    }
    let r = [];
    i.forEach((t) => {
        let i = g(e, t);
        s && i.attempts < 3 ? r.push(t) : (i.state = u);
    }),
        0 !== r.length &&
            ((e.backoff ??= new n.A(a, d, !0)),
            e.backoff.pending ||
                e.backoff.fail(() => l.h.dispatch({ type: "GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED", guildId: t })));
}
class h extends s.Ay.Store {
    static displayName = "GuildSpaceHydrationStore";
    getHydration(e, t) {
        return f[e]?.entriesByWidgetId.get(t)?.state ?? c;
    }
    getWidgetIdsToHydrate(e, t) {
        let i = f[e];
        return null == i
            ? [...t]
            : null != i.activeRequestId
              ? []
              : t.filter((e) => "idle" === (i.entriesByWidgetId.get(e)?.state ?? c).status);
    }
}
let x = new h(l.h, {
    GUILD_SPACE_HYDRATE_START: function (e) {
        let t,
            { guildId: i, requestId: n, widgetIds: s } = e,
            l = (null == (t = f[i]) && ((t = { entriesByWidgetId: new Map() }), (f[i] = t)), t);
        (l.activeRequestId = n),
            (l.activeWidgetIds = s),
            s.forEach((e) => {
                let t = g(l, e);
                (t.state = o), (t.attempts += 1);
            });
    },
    GUILD_SPACE_HYDRATE_SUCCESS: function (e) {
        let { guildId: t, requestId: i, widgets: n } = e,
            s = f[t];
        if (s?.activeRequestId !== i) return !1;
        let l = s.activeWidgetIds ?? [];
        delete s.activeRequestId, delete s.activeWidgetIds;
        let r = new Map(
                n.map((e) => {
                    let { id: t, data: i } = e;
                    return [t, i];
                }),
            ),
            a = [];
        l.forEach((e) => {
            let t = r.get(e);
            if (null != t) {
                let i = g(s, e);
                (i.state = { status: "success", data: t }), (i.attempts = 0);
            } else a.push(e);
        }),
            m(s, t, a, !0);
    },
    GUILD_SPACE_HYDRATE_FAILURE: function (e) {
        let { guildId: t, requestId: i, retryable: n } = e,
            s = f[t];
        if (s?.activeRequestId !== i) return !1;
        let l = s.activeWidgetIds ?? [];
        delete s.activeRequestId, delete s.activeWidgetIds, m(s, t, l, n);
    },
    GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            i = f[t];
        if (null == i) return !1;
        i.backoff?.cancel();
        let n = new Set(i.activeWidgetIds ?? []),
            s = [...i.entriesByWidgetId]
                .filter((e) => {
                    let [t, i] = e;
                    return "loading" === i.state.status && !n.has(t);
                })
                .map((e) => {
                    let [, t] = e;
                    return t;
                });
        if (0 === s.length) return !1;
        s.forEach((e) => {
            e.state = c;
        });
    },
    GUILD_SPACE_HYDRATE_RESET_ERRORS: function (e) {
        let { guildId: t, widgetIds: i } = e,
            n = f[t];
        if (null == n) return !1;
        let s = i.filter((e) => n.entriesByWidgetId.get(e)?.state.status === "error");
        if (0 === s.length) return !1;
        s.forEach((e) => n.entriesByWidgetId.delete(e));
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, space: i } = e,
            n = f[t];
        if (null == n) return !1;
        let s = new Set(
                i.widgets.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            ),
            l = [...n.entriesByWidgetId.keys()].filter((e) => !s.has(e));
        if (0 === l.length) return !1;
        l.forEach((e) => n.entriesByWidgetId.delete(e));
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
