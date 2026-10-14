(n.d(t, { A: () => g }), n(321073));
var l = n(158390),
    i = n(17928),
    a = n(73153),
    s = n(927813);
let r = s.A.Millis.SECOND,
    d = 10 * s.A.Millis.SECOND,
    c = { status: "idle" },
    o = { status: "loading" },
    u = { status: "error" },
    m = {};
function x(e, t) {
    let n = e.entriesByWidgetId.get(t);
    return (null == n && ((n = { state: c, attempts: 0 }), e.entriesByWidgetId.set(t, n)), n);
}
function h(e, t, n, i) {
    let s = n.filter((t) => e.entriesByWidgetId.get(t)?.state.status !== "success");
    if (0 === s.length) {
        e.backoff?.pending !== !0 && e.backoff?.succeed();
        return;
    }
    let c = [];
    (s.forEach((t) => {
        let n = x(e, t);
        i && n.attempts < 3 ? c.push(t) : (n.state = u);
    }),
        0 !== c.length &&
            ((e.backoff ??= new l.A(r, d, !0)),
            e.backoff.pending ||
                e.backoff.fail(() => a.h.dispatch({ type: "GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED", guildId: t }))));
}
class f extends i.Ay.Store {
    static displayName = "GuildSpaceHydrationStore";
    getHydration(e, t) {
        return m[e]?.entriesByWidgetId.get(t)?.state ?? c;
    }
    hasRequestInFlight(e) {
        return m[e]?.activeRequestId != null;
    }
    getWidgetIdsToHydrate(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = m[e];
        return null == l
            ? [...t]
            : null != l.activeRequestId
              ? []
              : n
                ? [...t]
                : t.filter((e) => "idle" === (l.entriesByWidgetId.get(e)?.state ?? c).status);
    }
}
let g = new f(a.h, {
    GUILD_SPACE_HYDRATE_START: function (e) {
        let t,
            { guildId: n, requestId: l, widgetIds: i } = e,
            a = (null == (t = m[n]) && ((t = { entriesByWidgetId: new Map() }), (m[n] = t)), t);
        ((a.activeRequestId = l),
            (a.activeWidgetIds = i),
            i.forEach((e) => {
                let t = x(a, e);
                "success" !== t.state.status && ((t.state = o), (t.attempts += 1));
            }));
    },
    GUILD_SPACE_HYDRATE_SUCCESS: function (e) {
        let { guildId: t, requestId: n, widgets: l } = e,
            i = m[t];
        if (i?.activeRequestId !== n) return !1;
        let a = i.activeWidgetIds ?? [];
        (delete i.activeRequestId, delete i.activeWidgetIds);
        let s = new Map(
                l.map((e) => {
                    let { id: t, data: n } = e;
                    return [t, n];
                }),
            ),
            r = [];
        (a.forEach((e) => {
            let t = s.get(e);
            if (null != t) {
                let n = x(i, e);
                ((n.state = { status: "success", data: t }), (n.attempts = 0));
            } else r.push(e);
        }),
            h(i, t, r, !0));
    },
    GUILD_SPACE_HYDRATE_FAILURE: function (e) {
        let { guildId: t, requestId: n, retryable: l } = e,
            i = m[t];
        if (i?.activeRequestId !== n) return !1;
        let a = i.activeWidgetIds ?? [];
        (delete i.activeRequestId, delete i.activeWidgetIds, h(i, t, a, l));
    },
    GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            n = m[t];
        if (null == n) return !1;
        n.backoff?.cancel();
        let l = new Set(n.activeWidgetIds ?? []),
            i = [...n.entriesByWidgetId]
                .filter((e) => {
                    let [t, n] = e;
                    return "loading" === n.state.status && !l.has(t);
                })
                .map((e) => {
                    let [, t] = e;
                    return t;
                });
        if (0 === i.length) return !1;
        i.forEach((e) => {
            e.state = c;
        });
    },
    GUILD_SPACE_HYDRATE_RESET_ERRORS: function (e) {
        let { guildId: t, widgetIds: n } = e,
            l = m[t];
        if (null == l) return !1;
        let i = n.filter((e) => l.entriesByWidgetId.get(e)?.state.status === "error");
        if (0 === i.length) return !1;
        i.forEach((e) => l.entriesByWidgetId.delete(e));
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, space: n } = e,
            l = m[t];
        if (null == l) return !1;
        let i = new Set(
                n.widgets.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            ),
            a = [...l.entriesByWidgetId.keys()].filter((e) => !i.has(e));
        if (0 === a.length) return !1;
        a.forEach((e) => l.entriesByWidgetId.delete(e));
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e,
            n = m[t];
        if (null == n || (0 === n.entriesByWidgetId.size && null == n.activeRequestId)) return !1;
        (n.entriesByWidgetId.clear(), delete n.activeRequestId, delete n.activeWidgetIds);
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        if (n) return !1;
        (m[t]?.backoff?.cancel(), delete m[t]);
    },
    LOGOUT: function () {
        (Object.values(m).forEach((e) => e?.backoff?.cancel()), (m = {}));
    },
});
