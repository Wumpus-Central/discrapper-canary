var i = n(311907),
    r = n(506774),
    a = n(451988),
    l = n(73153),
    s = n(308368),
    o = n(973522),
    d = n(15285),
    c = n(617617),
    u = n(927813),
    A = n(674378),
    h = n(961350),
    _ = n(760751),
    m = n(189081),
    p = n(383501),
    g = n(309010),
    E = n(652215);
let f = "ActivityTrackingStore",
    I = 30 * u.A.Millis.MINUTE,
    C = 5 * u.A.Millis.MINUTE,
    N = r.w.get(f) ?? {},
    T = {},
    S = !1;
function x(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && v(e, !0);
    let n = T[e.applicationId];
    null != n && (n.stop(), delete T[e.applicationId]), delete N[e.applicationId], r.w.set(f, N);
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        i = null != e.updatedAt ? n - e.updatedAt : 0;
    i > I + C && (i = 0);
    let l = (0, A.kv)(e.applicationId, m.A),
        o = g.A.getVoiceChannelId(),
        d = h.default.getSessionId(),
        c = p.A.getMediaSessionId();
    s.A.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? E.d3x.DISCORD : e.distributor,
        shareActivity: l,
        token: e.token,
        duration: Math.floor(i / 1e3),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: o,
        sessionId: d,
        mediaSessionId: c,
    }),
        (e.updatedAt = n);
    let u = T[e.applicationId];
    null == u && (u = T[e.applicationId] = new a.IX()).start(I, () => v(e)),
        t || ((N[e.applicationId] = e), r.w.set(f, N));
}
function b() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = d.Ay.getVisibleRunningGames(),
        n = new Set();
    for (let { name: e, distributor: i, exePath: r } of t) {
        let t = _.A.getGameByName(e);
        null != t &&
            (n.add(t.id),
            t.id in N ||
                v({ applicationId: t.id, updatedAt: Date.now(), distributor: i, exePath: (0, o.Ic)(r ?? "") }));
    }
    for (let t of Object.keys(N)) n.has(t) || x(N[t], e);
}
function y() {
    for (let e of Object.keys(N)) x(N[e]);
    S = !1;
}
class L extends i.Ay.Store {
    static displayName = "ActivityTrackingStore";
    initialize() {
        this.waitFor(h.default, _.A, m.A, p.A, d.Ay, g.A, c.A), this.syncWith([c.A], b);
    }
    getActivities() {
        return N;
    }
}
new L(l.h, {
    RUNNING_GAMES_CHANGE: () => b(),
    CONNECTION_OPEN: function () {
        if (S) return !1;
        for (let e of Object.keys(N)) v(N[e]);
        b(!1), (S = !0);
    },
    CONNECTION_CLOSED: function (e) {
        let { code: t } = e;
        4004 === t && y();
    },
    LOGOUT: y,
    ACTIVITY_UPDATE_SUCCESS: function (e) {
        let { applicationId: t, token: n } = e,
            i = N[t];
        if (null == i) return !1;
        (i.token = n), r.w.set(f, N);
    },
    ACTIVITY_UPDATE_FAIL: function (e) {
        let { applicationId: t } = e,
            n = N[t];
        if (null == n) return !1;
        (n.token = null), (n.updatedAt = null), r.w.set(f, N);
    },
});
