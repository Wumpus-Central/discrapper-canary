(l.d(t, { A: () => g }), l(321073));
var n = l(158390),
    i = l(17928),
    a = l(228366),
    r = l(927813);
let s = r.A.Millis.SECOND,
    d = 10 * r.A.Millis.SECOND,
    c = { status: "idle" },
    u = { status: "loading" },
    o = { status: "error" },
    f = {};
function m(e, t) {
    let l = e.entriesByWidgetId.get(t);
    return (null == l && ((l = { state: c, attempts: 0 }), e.entriesByWidgetId.set(t, l)), l);
}
function h(e, t, l, i) {
    if (0 === l.length) {
        e.backoff?.pending !== !0 && e.backoff?.succeed();
        return;
    }
    let r = [];
    (l.forEach((t) => {
        let l = m(e, t);
        i && l.attempts < 3 ? r.push(t) : (l.state = o);
    }),
        0 !== r.length &&
            ((e.backoff ??= new n.A(s, d, !0)),
            e.backoff.pending ||
                e.backoff.fail(() => a.h.dispatch({ type: "GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED", guildId: t }))));
}
class x extends i.Ay.Store {
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
let g = new x(a.h, {
    GUILD_SPACE_HYDRATE_START: function (e) {
        let t,
            { guildId: l, requestId: n, widgetIds: i } = e,
            a = (null == (t = f[l]) && ((t = { entriesByWidgetId: new Map() }), (f[l] = t)), t);
        ((a.activeRequestId = n),
            (a.activeWidgetIds = i),
            i.forEach((e) => {
                let t = m(a, e);
                ((t.state = u), (t.attempts += 1));
            }));
    },
    GUILD_SPACE_HYDRATE_SUCCESS: function (e) {
        let { guildId: t, requestId: l, widgets: n } = e,
            i = f[t];
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
                let l = m(i, e);
                ((l.state = { status: "success", data: t }), (l.attempts = 0));
            } else s.push(e);
        }),
            h(i, t, s, !0));
    },
    GUILD_SPACE_HYDRATE_FAILURE: function (e) {
        let { guildId: t, requestId: l, retryable: n } = e,
            i = f[t];
        if (i?.activeRequestId !== l) return !1;
        let a = i.activeWidgetIds ?? [];
        (delete i.activeRequestId, delete i.activeWidgetIds, h(i, t, a, n));
    },
    GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            l = f[t];
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
            n = f[t];
        if (null == n) return !1;
        let i = l.filter((e) => n.entriesByWidgetId.get(e)?.state.status === "error");
        if (0 === i.length) return !1;
        i.forEach((e) => n.entriesByWidgetId.delete(e));
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, space: l } = e,
            n = f[t];
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
            l = f[t];
        if (null == l || (0 === l.entriesByWidgetId.size && null == l.activeRequestId)) return !1;
        (l.entriesByWidgetId.clear(), delete l.activeRequestId, delete l.activeWidgetIds);
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: l },
        } = e;
        if (l) return !1;
        (f[t]?.backoff?.cancel(), delete f[t]);
    },
    LOGOUT: function () {
        (Object.values(f).forEach((e) => e?.backoff?.cancel()), (f = {}));
    },
});
