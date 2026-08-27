i.d(e, { A: () => x }), i(321073);
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
function h(t, e) {
    let i = t.entriesByWidgetId.get(e);
    return null == i && ((i = { state: d, attempts: 0 }), t.entriesByWidgetId.set(e, i)), i;
}
function g(t, e, i, l) {
    if (0 === i.length) {
        t.backoff?.pending !== !0 && t.backoff?.succeed();
        return;
    }
    let r = [];
    i.forEach((e) => {
        let i = h(t, e);
        l && i.attempts < 3 ? r.push(e) : (i.state = o);
    }),
        0 !== r.length &&
            ((t.backoff ??= new n.A(s, c, !0)),
            t.backoff.pending ||
                t.backoff.fail(() => a.h.dispatch({ type: "GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED", guildId: e })));
}
class m extends l.Ay.Store {
    static displayName = "GuildSpaceHydrationStore";
    getHydration(t, e) {
        return f[t]?.entriesByWidgetId.get(e)?.state ?? d;
    }
    getWidgetIdsToHydrate(t, e) {
        let i = f[t];
        return null == i
            ? [...e]
            : null != i.activeRequestId
              ? []
              : e.filter((t) => "idle" === (i.entriesByWidgetId.get(t)?.state ?? d).status);
    }
}
let x = new m(a.h, {
    GUILD_SPACE_HYDRATE_START: function (t) {
        let e,
            { guildId: i, requestId: n, widgetIds: l } = t,
            a = (null == (e = f[i]) && ((e = { entriesByWidgetId: new Map() }), (f[i] = e)), e);
        (a.activeRequestId = n),
            (a.activeWidgetIds = l),
            l.forEach((t) => {
                let e = h(a, t);
                (e.state = u), (e.attempts += 1);
            });
    },
    GUILD_SPACE_HYDRATE_SUCCESS: function (t) {
        let { guildId: e, requestId: i, widgets: n } = t,
            l = f[e];
        if (l?.activeRequestId !== i) return !1;
        let a = l.activeWidgetIds ?? [];
        delete l.activeRequestId, delete l.activeWidgetIds;
        let r = new Map(
                n.map((t) => {
                    let { id: e, data: i } = t;
                    return [e, i];
                }),
            ),
            s = [];
        a.forEach((t) => {
            let e = r.get(t);
            if (null != e) {
                let i = h(l, t);
                (i.state = { status: "success", data: e }), (i.attempts = 0);
            } else s.push(t);
        }),
            g(l, e, s, !0);
    },
    GUILD_SPACE_HYDRATE_FAILURE: function (t) {
        let { guildId: e, requestId: i, retryable: n } = t,
            l = f[e];
        if (l?.activeRequestId !== i) return !1;
        let a = l.activeWidgetIds ?? [];
        delete l.activeRequestId, delete l.activeWidgetIds, g(l, e, a, n);
    },
    GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED: function (t) {
        let { guildId: e } = t,
            i = f[e];
        if (null == i) return !1;
        i.backoff?.cancel();
        let n = new Set(i.activeWidgetIds ?? []),
            l = [...i.entriesByWidgetId]
                .filter((t) => {
                    let [e, i] = t;
                    return "loading" === i.state.status && !n.has(e);
                })
                .map((t) => {
                    let [, e] = t;
                    return e;
                });
        if (0 === l.length) return !1;
        l.forEach((t) => {
            t.state = d;
        });
    },
    GUILD_SPACE_HYDRATE_RESET_ERRORS: function (t) {
        let { guildId: e, widgetIds: i } = t,
            n = f[e];
        if (null == n) return !1;
        let l = i.filter((t) => n.entriesByWidgetId.get(t)?.state.status === "error");
        if (0 === l.length) return !1;
        l.forEach((t) => n.entriesByWidgetId.delete(t));
    },
    GUILD_SPACE_FETCH_SUCCESS: function (t) {
        let { guildId: e, space: i } = t,
            n = f[e];
        if (null == n) return !1;
        let l = new Set(
                i.widgets.map((t) => {
                    let { id: e } = t;
                    return e;
                }),
            ),
            a = [...n.entriesByWidgetId.keys()].filter((t) => !l.has(t));
        if (0 === a.length) return !1;
        a.forEach((t) => n.entriesByWidgetId.delete(t));
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (t) {
        let { guildId: e } = t,
            i = f[e];
        if (null == i || (0 === i.entriesByWidgetId.size && null == i.activeRequestId)) return !1;
        i.entriesByWidgetId.clear(), delete i.activeRequestId, delete i.activeWidgetIds;
    },
    GUILD_DELETE: function (t) {
        let {
            guild: { id: e, unavailable: i },
        } = t;
        if (i) return !1;
        f[e]?.backoff?.cancel(), delete f[e];
    },
    LOGOUT: function () {
        Object.values(f).forEach((t) => t?.backoff?.cancel()), (f = {});
    },
});
