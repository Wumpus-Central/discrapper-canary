var i = n(311907),
    a = n(506774),
    l = n(451988),
    r = n(73153),
    s = n(308368),
    o = n(973522),
    d = n(15285),
    c = n(617617),
    u = n(927813),
    A = n(674378),
    h = n(961350),
    _ = n(760751),
    m = n(189081),
    g = n(383501),
    p = n(309010),
    E = n(652215);
let I = "ActivityTrackingStore",
    f = 30 * u.A.Millis.MINUTE,
    C = 5 * u.A.Millis.MINUTE,
    T = a.w.get(I) ?? {},
    N = {},
    S = !1;
function x(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && v(e, !0);
    let n = N[e.applicationId];
    null != n && (n.stop(), delete N[e.applicationId]), delete T[e.applicationId], a.w.set(I, T);
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        i = null != e.updatedAt ? n - e.updatedAt : 0;
    i > f + C && (i = 0);
    let r = (0, A.kv)(e.applicationId, m.A),
        o = p.A.getVoiceChannelId(),
        d = h.default.getSessionId(),
        c = g.A.getMediaSessionId();
    s.A.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? E.d3x.DISCORD : e.distributor,
        shareActivity: r,
        token: e.token,
        duration: Math.floor(i / 1e3),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: o,
        sessionId: d,
        mediaSessionId: c,
    }),
        (e.updatedAt = n);
    let u = N[e.applicationId];
    null == u && (u = N[e.applicationId] = new l.IX()).start(f, () => v(e)),
        t || ((T[e.applicationId] = e), a.w.set(I, T));
}
function b() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = d.Ay.getVisibleRunningGames(),
        n = new Set();
    for (let e of t) {
        let t = _.A.findGame(e);
        null != t &&
            (n.add(t.id),
            t.id in T ||
                v({
                    applicationId: t.id,
                    updatedAt: Date.now(),
                    distributor: e.distributor,
                    exePath: (0, o.Ic)(e.exePath ?? ""),
                }));
    }
    for (let t of Object.keys(T)) n.has(t) || x(T[t], e);
}
function y() {
    for (let e of Object.keys(T)) x(T[e]);
    S = !1;
}
class O extends i.Ay.Store {
    static displayName = "ActivityTrackingStore";
    initialize() {
        this.waitFor(h.default, _.A, m.A, g.A, d.Ay, p.A, c.A), this.syncWith([c.A], b);
    }
    getActivities() {
        return T;
    }
}
new O(r.h, {
    RUNNING_GAMES_CHANGE: () => b(),
    CONNECTION_OPEN: function () {
        if (S) return !1;
        for (let e of Object.keys(T)) v(T[e]);
        b(!1), (S = !0);
    },
    CONNECTION_CLOSED: function (e) {
        let { code: t } = e;
        4004 === t && y();
    },
    LOGOUT: y,
    ACTIVITY_UPDATE_SUCCESS: function (e) {
        let { applicationId: t, token: n } = e,
            i = T[t];
        if (null == i) return !1;
        (i.token = n), a.w.set(I, T);
    },
    ACTIVITY_UPDATE_FAIL: function (e) {
        let { applicationId: t } = e,
            n = T[t];
        if (null == n) return !1;
        (n.token = null), (n.updatedAt = null), a.w.set(I, T);
    },
});
