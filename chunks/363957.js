(l.d(t, { A: () => g }), l(321073));
var n = l(158390),
    i = l(17928),
    s = l(73153),
    a = l(927813);
let r = a.A.Millis.SECOND,
    d = 10 * a.A.Millis.SECOND,
    c = { status: "idle" },
    o = { status: "loading" },
    u = { status: "error" },
    m = {};
function x(e, t) {
    let l = e.entriesByWidgetId.get(t);
    return (null == l && ((l = { state: c, attempts: 0 }), e.entriesByWidgetId.set(t, l)), l);
}
function f(e, t, l, i) {
    let a = l.filter((t) => e.entriesByWidgetId.get(t)?.state.status !== "success");
    if (0 === a.length) {
        e.backoff?.pending !== !0 && e.backoff?.succeed();
        return;
    }
    let c = [];
    (a.forEach((t) => {
        let l = x(e, t);
        i && l.attempts < 3 ? c.push(t) : (l.state = u);
    }),
        0 !== c.length &&
            ((e.backoff ??= new n.A(r, d, !0)),
            e.backoff.pending ||
                e.backoff.fail(() => s.h.dispatch({ type: "GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED", guildId: t }))));
}
class h extends i.Ay.Store {
    static displayName = "GuildSpaceHydrationStore";
    getHydration(e, t) {
        return m[e]?.entriesByWidgetId.get(t)?.state ?? c;
    }
    hasRequestInFlight(e) {
        return m[e]?.activeRequestId != null;
    }
    getWidgetIdsToHydrate(e, t) {
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = m[e];
        return null == n
            ? [...t]
            : null != n.activeRequestId
              ? []
              : l
                ? [...t]
                : t.filter((e) => "idle" === (n.entriesByWidgetId.get(e)?.state ?? c).status);
    }
}
let g = new h(s.h, {
    GUILD_SPACE_HYDRATE_START: function (e) {
        let t,
            { guildId: l, requestId: n, widgetIds: i } = e,
            s = (null == (t = m[l]) && ((t = { entriesByWidgetId: new Map() }), (m[l] = t)), t);
        ((s.activeRequestId = n),
            (s.activeWidgetIds = i),
            i.forEach((e) => {
                let t = x(s, e);
                "success" !== t.state.status && ((t.state = o), (t.attempts += 1));
            }));
    },
    GUILD_SPACE_HYDRATE_SUCCESS: function (e) {
        let { guildId: t, requestId: l, widgets: n } = e,
            i = m[t];
        if (i?.activeRequestId !== l) return !1;
        let s = i.activeWidgetIds ?? [];
        (delete i.activeRequestId, delete i.activeWidgetIds);
        let a = new Map(
                n.map((e) => {
                    let { id: t, data: l } = e;
                    return [t, l];
                }),
            ),
            r = [];
        (s.forEach((e) => {
            let t = a.get(e);
            if (null != t) {
                let l = x(i, e);
                ((l.state = { status: "success", data: t }), (l.attempts = 0));
            } else r.push(e);
        }),
            f(i, t, r, !0));
    },
    GUILD_SPACE_HYDRATE_FAILURE: function (e) {
        let { guildId: t, requestId: l, retryable: n } = e,
            i = m[t];
        if (i?.activeRequestId !== l) return !1;
        let s = i.activeWidgetIds ?? [];
        (delete i.activeRequestId, delete i.activeWidgetIds, f(i, t, s, n));
    },
    GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            l = m[t];
        if (null == l) return !1;
        l.backoff?.cancel();
        let n = new Set(l.activeWidgetIds ?? []),
            i = [...l.entriesByWidgetId]
                .filter((e) => {
                    let [t, l] = e;
                    return "loading" === l.state.status && !n.has(t);
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
        let { guildId: t, widgetIds: l } = e,
            n = m[t];
        if (null == n) return !1;
        let i = l.filter((e) => n.entriesByWidgetId.get(e)?.state.status === "error");
        if (0 === i.length) return !1;
        i.forEach((e) => n.entriesByWidgetId.delete(e));
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, space: l } = e,
            n = m[t];
        if (null == n) return !1;
        let i = new Set(
                l.widgets.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            ),
            s = [...n.entriesByWidgetId.keys()].filter((e) => !i.has(e));
        if (0 === s.length) return !1;
        s.forEach((e) => n.entriesByWidgetId.delete(e));
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e,
            l = m[t];
        if (null == l || (0 === l.entriesByWidgetId.size && null == l.activeRequestId)) return !1;
        (l.entriesByWidgetId.clear(), delete l.activeRequestId, delete l.activeWidgetIds);
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: l },
        } = e;
        if (l) return !1;
        (m[t]?.backoff?.cancel(), delete m[t]);
    },
    LOGOUT: function () {
        (Object.values(m).forEach((e) => e?.backoff?.cancel()), (m = {}));
    },
});
