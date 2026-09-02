l.d(t, { A: () => E }), l(321073);
var i = l(158390),
    n = l(17928),
    a = l(228366),
    s = l(927813);
let r = s.A.Millis.SECOND,
    d = 10 * s.A.Millis.SECOND,
    c = { status: "idle" },
    u = { status: "loading" },
    o = { status: "error" },
    f = {};
function h(e, t) {
    let l = e.entriesByWidgetId.get(t);
    return null == l && ((l = { state: c, attempts: 0 }), e.entriesByWidgetId.set(t, l)), l;
}
function m(e, t, l, n) {
    if (0 === l.length) {
        e.backoff?.pending !== !0 && e.backoff?.succeed();
        return;
    }
    let s = [];
    l.forEach((t) => {
        let l = h(e, t);
        n && l.attempts < 3 ? s.push(t) : (l.state = o);
    }),
        0 !== s.length &&
            ((e.backoff ??= new i.A(r, d, !0)),
            e.backoff.pending ||
                e.backoff.fail(() => a.h.dispatch({ type: "GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED", guildId: t })));
}
class g extends n.Ay.Store {
    static displayName = "GuildSpaceHydrationStore";
    getHydration(e, t) {
        return f[e]?.entriesByWidgetId.get(t)?.state ?? c;
    }
    getWidgetIdsToHydrate(e, t) {
        let l = f[e];
        return null == l
            ? [...t]
            : null != l.activeRequestId
              ? []
              : t.filter((e) => "idle" === (l.entriesByWidgetId.get(e)?.state ?? c).status);
    }
}
let E = new g(a.h, {
    GUILD_SPACE_HYDRATE_START: function (e) {
        let t,
            { guildId: l, requestId: i, widgetIds: n } = e,
            a = (null == (t = f[l]) && ((t = { entriesByWidgetId: new Map() }), (f[l] = t)), t);
        (a.activeRequestId = i),
            (a.activeWidgetIds = n),
            n.forEach((e) => {
                let t = h(a, e);
                (t.state = u), (t.attempts += 1);
            });
    },
    GUILD_SPACE_HYDRATE_SUCCESS: function (e) {
        let { guildId: t, requestId: l, widgets: i } = e,
            n = f[t];
        if (n?.activeRequestId !== l) return !1;
        let a = n.activeWidgetIds ?? [];
        delete n.activeRequestId, delete n.activeWidgetIds;
        let s = new Map(
                i.map((e) => {
                    let { id: t, data: l } = e;
                    return [t, l];
                }),
            ),
            r = [];
        a.forEach((e) => {
            let t = s.get(e);
            if (null != t) {
                let l = h(n, e);
                (l.state = { status: "success", data: t }), (l.attempts = 0);
            } else r.push(e);
        }),
            m(n, t, r, !0);
    },
    GUILD_SPACE_HYDRATE_FAILURE: function (e) {
        let { guildId: t, requestId: l, retryable: i } = e,
            n = f[t];
        if (n?.activeRequestId !== l) return !1;
        let a = n.activeWidgetIds ?? [];
        delete n.activeRequestId, delete n.activeWidgetIds, m(n, t, a, i);
    },
    GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            l = f[t];
        if (null == l) return !1;
        l.backoff?.cancel();
        let i = new Set(l.activeWidgetIds ?? []),
            n = [...l.entriesByWidgetId]
                .filter((e) => {
                    let [t, l] = e;
                    return "loading" === l.state.status && !i.has(t);
                })
                .map((e) => {
                    let [, t] = e;
                    return t;
                });
        if (0 === n.length) return !1;
        n.forEach((e) => {
            e.state = c;
        });
    },
    GUILD_SPACE_HYDRATE_RESET_ERRORS: function (e) {
        let { guildId: t, widgetIds: l } = e,
            i = f[t];
        if (null == i) return !1;
        let n = l.filter((e) => i.entriesByWidgetId.get(e)?.state.status === "error");
        if (0 === n.length) return !1;
        n.forEach((e) => i.entriesByWidgetId.delete(e));
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, space: l } = e,
            i = f[t];
        if (null == i) return !1;
        let n = new Set(
                l.widgets.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            ),
            a = [...i.entriesByWidgetId.keys()].filter((e) => !n.has(e));
        if (0 === a.length) return !1;
        a.forEach((e) => i.entriesByWidgetId.delete(e));
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e,
            l = f[t];
        if (null == l || (0 === l.entriesByWidgetId.size && null == l.activeRequestId)) return !1;
        l.entriesByWidgetId.clear(), delete l.activeRequestId, delete l.activeWidgetIds;
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: l },
        } = e;
        if (l) return !1;
        f[t]?.backoff?.cancel(), delete f[t];
    },
    LOGOUT: function () {
        Object.values(f).forEach((e) => e?.backoff?.cancel()), (f = {});
    },
});
