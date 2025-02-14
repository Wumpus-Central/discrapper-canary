n(47120);
var i,
    l,
    r,
    a,
    s = n(442837),
    o = n(433517),
    d = n(846519),
    c = n(570140),
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
    N = n(944486),
    v = n(981631);
let T = 'ActivityTrackingStore',
    S = 30 * g.Z.Millis.MINUTE,
    A = 5 * g.Z.Millis.MINUTE,
    Z = null !== (i = o.K.get(T)) && void 0 !== i ? i : {},
    x = {},
    b = !1;
function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && y(e, !0);
    let n = x[e.applicationId];
    null != n && (n.stop(), delete x[e.applicationId]), delete Z[e.applicationId], o.K.set(T, Z);
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        i = null != e.updatedAt ? n - e.updatedAt : 0;
    i > S + A && (i = 0);
    let l = (0, _.OT)(e.applicationId, I.Z),
        r = N.Z.getVoiceChannelId(),
        a = f.default.getSessionId(),
        s = C.Z.getMediaSessionId();
    u.Z.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? v.GQo.DISCORD : e.distributor,
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
    let c = x[e.applicationId];
    null == c && (c = x[e.applicationId] = new d.Xp()).start(S, () => y(e)), t || ((Z[e.applicationId] = e), o.K.set(T, Z));
}
function O() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = m.ZP.getVisibleRunningGames(),
        n = new Set();
    for (let { name: e, distributor: i, exePath: l } of t) {
        let t = E.Z.getGameByName(e);
        null != t &&
            (n.add(t.id),
            t.id in Z ||
                y({
                    applicationId: t.id,
                    updatedAt: Date.now(),
                    distributor: i,
                    exePath: (0, h.N6)(null != l ? l : '')
                }));
    }
    for (let t of Object.keys(Z)) n.has(t) || L(Z[t], e);
}
function P() {
    for (let e of Object.keys(Z)) L(Z[e]);
    b = !1;
}
class R extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(m.ZP, p.Z, I.Z), this.syncWith([p.Z], O);
    }
    getActivities() {
        return Z;
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
    new R(c.Z, {
        RUNNING_GAMES_CHANGE: () => O(),
        CONNECTION_OPEN: function () {
            if (b) return !1;
            for (let e of Object.keys(Z)) y(Z[e]);
            O(!1), (b = !0);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            4004 === t && P();
        },
        LOGOUT: P,
        ACTIVITY_UPDATE_SUCCESS: function (e) {
            let { applicationId: t, token: n } = e,
                i = Z[t];
            if (null == i) return !1;
            (i.token = n), o.K.set(T, Z);
        },
        ACTIVITY_UPDATE_FAIL: function (e) {
            let { applicationId: t } = e,
                n = Z[t];
            if (null == n) return !1;
            (n.token = null), (n.updatedAt = null), o.K.set(T, Z);
        }
    });
