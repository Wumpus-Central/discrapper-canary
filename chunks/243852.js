n(47120);
var i,
    l,
    r,
    a,
    s = n(442837),
    o = n(433517),
    c = n(846519),
    d = n(570140),
    u = n(278323),
    h = n(581567),
    m = n(594190),
    p = n(581883),
    g = n(70956),
    _ = n(780570),
    f = n(314897),
    E = n(77498),
    I = n(283595),
    C = n(19780),
    v = n(944486),
    N = n(981631);
let T = 'ActivityTrackingStore',
    S = 30 * g.Z.Millis.MINUTE,
    Z = 5 * g.Z.Millis.MINUTE,
    A = null !== (i = o.K.get(T)) && void 0 !== i ? i : {},
    b = {},
    x = !1;
function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && y(e, !0);
    let n = b[e.applicationId];
    null != n && (n.stop(), delete b[e.applicationId]), delete A[e.applicationId], o.K.set(T, A);
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        i = null != e.updatedAt ? n - e.updatedAt : 0;
    i > S + Z && (i = 0);
    let l = (0, _.OT)(e.applicationId, I.Z),
        r = v.Z.getVoiceChannelId(),
        a = f.default.getSessionId(),
        s = C.Z.getMediaSessionId();
    u.Z.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? N.GQo.DISCORD : e.distributor,
        shareActivity: l,
        token: e.token,
        duration: Math.floor(i / 1000),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: r,
        sessionId: a,
        mediaSessionId: s
    }),
        (e.updatedAt = n);
    let d = b[e.applicationId];
    null == d && (d = b[e.applicationId] = new c.Xp()).start(S, () => y(e)), t || ((A[e.applicationId] = e), o.K.set(T, A));
}
function P() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = m.ZP.getVisibleRunningGames(),
        n = new Set();
    for (let { name: e, distributor: i, exePath: l } of t) {
        let t = E.Z.getGameByName(e);
        null != t &&
            (n.add(t.id),
            t.id in A ||
                y({
                    applicationId: t.id,
                    updatedAt: Date.now(),
                    distributor: i,
                    exePath: (0, h.N6)(null != l ? l : '')
                }));
    }
    for (let t of Object.keys(A)) n.has(t) || L(A[t], e);
}
function O() {
    for (let e of Object.keys(A)) L(A[e]);
    x = !1;
}
class R extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(m.ZP, p.Z, I.Z), this.syncWith([p.Z], P);
    }
    getActivities() {
        return A;
    }
}
(a = 'ActivityTrackingStore'),
    (r = 'displayName') in R
        ? Object.defineProperty(R, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (R[r] = a),
    new R(d.Z, {
        RUNNING_GAMES_CHANGE: () => P(),
        CONNECTION_OPEN: function () {
            if (x) return !1;
            for (let e of Object.keys(A)) y(A[e]);
            P(!1), (x = !0);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            4004 === t && O();
        },
        LOGOUT: O,
        ACTIVITY_UPDATE_SUCCESS: function (e) {
            let { applicationId: t, token: n } = e,
                i = A[t];
            if (null == i) return !1;
            (i.token = n), o.K.set(T, A);
        },
        ACTIVITY_UPDATE_FAIL: function (e) {
            let { applicationId: t } = e,
                n = A[t];
            if (null == n) return !1;
            (n.token = null), (n.updatedAt = null), o.K.set(T, A);
        }
    });
