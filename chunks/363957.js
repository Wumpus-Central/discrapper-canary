(l.d(t, { A: () => g }), l(321073));
var n = l(158390),
    i = l(17928),
    a = l(228366),
    r = l(927813);
let s = r.A.Millis.SECOND,
    d = 10 * r.A.Millis.SECOND,
    o = { status: "idle" },
    c = { status: "loading" },
    u = { status: "error" },
    m = {};
function f(e, t) {
    let l = e.entriesByWidgetId.get(t);
    return (null == l && ((l = { state: o, attempts: 0 }), e.entriesByWidgetId.set(t, l)), l);
}
function x(e, t, l, i) {
    if (0 === l.length) {
        e.backoff?.pending !== !0 && e.backoff?.succeed();
        return;
    }
    let r = [];
    (l.forEach((t) => {
        let l = f(e, t);
        i && l.attempts < 3 ? r.push(t) : (l.state = u);
    }),
        0 !== r.length &&
            ((e.backoff ??= new n.A(s, d, !0)),
            e.backoff.pending ||
                e.backoff.fail(() => a.h.dispatch({ type: "GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED", guildId: t }))));
}
class h extends i.Ay.Store {
    static displayName = "GuildSpaceHydrationStore";
    getHydration(e, t) {
        return m[e]?.entriesByWidgetId.get(t)?.state ?? o;
    }
    getWidgetIdsToHydrate(e, t) {
        let l = m[e];
        return null == l
            ? [...t]
            : null != l.activeRequestId
              ? []
              : t.filter((e) => "idle" === (l.entriesByWidgetId.get(e)?.state ?? o).status);
    }
}
let g = new h(a.h, {
    GUILD_SPACE_HYDRATE_START: function (e) {
        let t,
            { guildId: l, requestId: n, widgetIds: i } = e,
            a = (null == (t = m[l]) && ((t = { entriesByWidgetId: new Map() }), (m[l] = t)), t);
        ((a.activeRequestId = n),
            (a.activeWidgetIds = i),
            i.forEach((e) => {
                let t = f(a, e);
                ((t.state = c), (t.attempts += 1));
            }));
    },
    GUILD_SPACE_HYDRATE_SUCCESS: function (e) {
        let { guildId: t, requestId: l, widgets: n } = e,
            i = m[t];
        if (i?.activeRequestId !== l) return !1;
        let a = i.activeWidgetIds ?? [];
        (delete i.activeRequestId, delete i.activeWidgetIds);
        let r = new Map(
                n.map((e) => {
                    let { id: t, data: l } = e;
                    return [t, l];
                }),
            ),
            s = [];
        (a.forEach((e) => {
            let t = r.get(e);
            if (null != t) {
                let l = f(i, e);
                ((l.state = { status: "success", data: t }), (l.attempts = 0));
            } else s.push(e);
        }),
            x(i, t, s, !0));
    },
    GUILD_SPACE_HYDRATE_FAILURE: function (e) {
        let { guildId: t, requestId: l, retryable: n } = e,
            i = m[t];
        if (i?.activeRequestId !== l) return !1;
        let a = i.activeWidgetIds ?? [];
        (delete i.activeRequestId, delete i.activeWidgetIds, x(i, t, a, n));
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
            e.state = o;
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
            a = [...n.entriesByWidgetId.keys()].filter((e) => !i.has(e));
        if (0 === a.length) return !1;
        a.forEach((e) => n.entriesByWidgetId.delete(e));
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
