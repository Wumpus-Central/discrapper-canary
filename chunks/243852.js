n(388685);
var r,
    i,
    l,
    a,
    o = n(442837),
    s = n(433517),
    c = n(846519),
    u = n(570140),
    d = n(278323),
    p = n(581567),
    h = n(594190),
    f = n(581883),
    g = n(70956),
    m = n(780570),
    b = n(314897),
    _ = n(77498),
    E = n(283595),
    O = n(19780),
    y = n(944486),
    I = n(981631);
let v = 'ActivityTrackingStore',
    C = 30 * g.Z.Millis.MINUTE,
    S = 5 * g.Z.Millis.MINUTE,
    N = null != (r = s.K.get(v)) ? r : {},
    T = {},
    P = !1;
function j(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && A(e, !0);
    let n = T[e.applicationId];
    null != n && (n.stop(), delete T[e.applicationId]), delete N[e.applicationId], s.K.set(v, N);
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        r = null != e.updatedAt ? n - e.updatedAt : 0;
    r > C + S && (r = 0);
    let i = (0, m.OT)(e.applicationId, E.Z),
        l = y.Z.getVoiceChannelId(),
        a = b.default.getSessionId(),
        o = O.Z.getMediaSessionId();
    d.Z.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? I.GQo.DISCORD : e.distributor,
        shareActivity: i,
        token: e.token,
        duration: Math.floor(r / 1000),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: l,
        sessionId: a,
        mediaSessionId: o
    }),
        (e.updatedAt = n);
    let u = T[e.applicationId];
    null == u && (u = T[e.applicationId] = new c.Xp()).start(C, () => A(e)), t || ((N[e.applicationId] = e), s.K.set(v, N));
}
function Z() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = h.ZP.getVisibleRunningGames(),
        n = new Set();
    for (let { name: e, distributor: r, exePath: i } of t) {
        let t = _.Z.getGameByName(e);
        null != t &&
            (n.add(t.id),
            t.id in N ||
                A({
                    applicationId: t.id,
                    updatedAt: Date.now(),
                    distributor: r,
                    exePath: (0, p.N6)(null != i ? i : '')
                }));
    }
    for (let t of Object.keys(N)) n.has(t) || j(N[t], e);
}
function x() {
    for (let e of Object.keys(N)) j(N[e]);
    P = !1;
}
class w extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(h.ZP, f.Z, E.Z), this.syncWith([f.Z], Z);
    }
    getActivities() {
        return N;
    }
}
(a = 'ActivityTrackingStore'),
    (l = 'displayName') in w
        ? Object.defineProperty(w, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (w[l] = a),
    new w(u.Z, {
        RUNNING_GAMES_CHANGE: () => Z(),
        CONNECTION_OPEN: function () {
            if (P) return !1;
            for (let e of Object.keys(N)) A(N[e]);
            Z(!1), (P = !0);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            4004 === t && x();
        },
        LOGOUT: x,
        ACTIVITY_UPDATE_SUCCESS: function (e) {
            let { applicationId: t, token: n } = e,
                r = N[t];
            if (null == r) return !1;
            (r.token = n), s.K.set(v, N);
        },
        ACTIVITY_UPDATE_FAIL: function (e) {
            let { applicationId: t } = e,
                n = N[t];
            if (null == n) return !1;
            (n.token = null), (n.updatedAt = null), s.K.set(v, N);
        }
    });
