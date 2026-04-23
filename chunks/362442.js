var i = n(311907),
    r = n(506774),
    a = n(451988),
    l = n(73153),
    s = n(308368),
    o = n(973522),
    d = n(15285),
    u = n(617617),
    c = n(927813),
    A = n(674378),
    h = n(961350),
    _ = n(760751),
    E = n(189081),
    p = n(383501),
    m = n(309010),
    g = n(652215);
let I = "ActivityTrackingStore",
    C = 30 * c.A.Millis.MINUTE,
    f = 5 * c.A.Millis.MINUTE,
    T = r.w.get(I) ?? {},
    S = {},
    N = !1;
function O(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && L(e, !0);
    let n = S[e.applicationId];
    null != n && (n.stop(), delete S[e.applicationId]), delete T[e.applicationId], r.w.set(I, T);
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        i = null != e.updatedAt ? n - e.updatedAt : 0;
    i > C + f && (i = 0);
    let l = (0, A.kv)(e.applicationId, E.A),
        o = m.A.getVoiceChannelId(),
        d = h.default.getSessionId(),
        u = p.A.getMediaSessionId();
    s.A.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? g.d3x.DISCORD : e.distributor,
        shareActivity: l,
        token: e.token,
        duration: Math.floor(i / 1e3),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: o,
        sessionId: d,
        mediaSessionId: u,
    }),
        (e.updatedAt = n);
    let c = S[e.applicationId];
    null == c && (c = S[e.applicationId] = new a.IX()).start(C, () => L(e)),
        t || ((T[e.applicationId] = e), r.w.set(I, T));
}
function y() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = d.Ay.getVisibleRunningGames(),
        n = new Set();
    for (let e of t) {
        let t = _.A.findGame(e);
        null != t &&
            (n.add(t.id),
            t.id in T ||
                L({
                    applicationId: t.id,
                    updatedAt: Date.now(),
                    distributor: e.distributor,
                    exePath: (0, o.Ic)(e.exePath ?? ""),
                }));
    }
    for (let t of Object.keys(T)) n.has(t) || O(T[t], e);
}
function v() {
    for (let e of Object.keys(T)) O(T[e]);
    N = !1;
}
class b extends i.Ay.Store {
    static displayName = "ActivityTrackingStore";
    initialize() {
        this.waitFor(h.default, _.A, E.A, p.A, d.Ay, m.A, u.A), this.syncWith([u.A], y);
    }
    getActivities() {
        return T;
    }
}
new b(l.h, {
    RUNNING_GAMES_CHANGE: () => y(),
    CONNECTION_OPEN: function () {
        if (N) return !1;
        for (let e of Object.keys(T)) L(T[e]);
        y(!1), (N = !0);
    },
    CONNECTION_CLOSED: function (e) {
        let { code: t } = e;
        4004 === t && v();
    },
    LOGOUT: v,
    ACTIVITY_UPDATE_SUCCESS: function (e) {
        let { applicationId: t, token: n } = e,
            i = T[t];
        if (null == i) return !1;
        (i.token = n), r.w.set(I, T);
    },
    ACTIVITY_UPDATE_FAIL: function (e) {
        let { applicationId: t } = e,
            n = T[t];
        if (null == n) return !1;
        (n.token = null), (n.updatedAt = null), r.w.set(I, T);
    },
});
