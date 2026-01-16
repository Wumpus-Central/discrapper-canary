n(388685);
var r,
    i,
    l,
    a = n(442837),
    o = n(433517),
    s = n(846519),
    c = n(570140),
    u = n(278323),
    d = n(581567),
    p = n(594190),
    f = n(581883),
    g = n(70956),
    h = n(780570),
    m = n(314897),
    b = n(404577),
    E = n(283595),
    _ = n(19780),
    O = n(944486),
    v = n(981631);
let I = "ActivityTrackingStore",
    y = 30 * g.Z.Millis.MINUTE,
    C = 5 * g.Z.Millis.MINUTE,
    S = null != (r = o.K.get(I)) ? r : {},
    T = {},
    N = !1;
function j(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && x(e, !0);
    let n = T[e.applicationId];
    null != n && (n.stop(), delete T[e.applicationId]), delete S[e.applicationId], o.K.set(I, S);
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        r = null != e.updatedAt ? n - e.updatedAt : 0;
    r > y + C && (r = 0);
    let i = (0, h.OT)(e.applicationId, E.Z),
        l = O.Z.getVoiceChannelId(),
        a = m.default.getSessionId(),
        c = _.Z.getMediaSessionId();
    u.Z.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? v.GQo.DISCORD : e.distributor,
        shareActivity: i,
        token: e.token,
        duration: Math.floor(r / 1000),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: l,
        sessionId: a,
        mediaSessionId: c,
    }),
        (e.updatedAt = n);
    let d = T[e.applicationId];
    null == d && (d = T[e.applicationId] = new s.Xp()).start(y, () => x(e)),
        t || ((S[e.applicationId] = e), o.K.set(I, S));
}
function P() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = p.ZP.getVisibleRunningGames(),
        n = new Set();
    for (let { name: e, distributor: r, exePath: i } of t) {
        let t = b.Z.getGameByName(e);
        null != t &&
            (n.add(t.id),
            t.id in S ||
                x({
                    applicationId: t.id,
                    updatedAt: Date.now(),
                    distributor: r,
                    exePath: (0, d.N6)(null != i ? i : ""),
                }));
    }
    for (let t of Object.keys(S)) n.has(t) || j(S[t], e);
}
function A() {
    for (let e of Object.keys(S)) j(S[e]);
    N = !1;
}
class Z extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(m.default, b.Z, E.Z, _.Z, p.ZP, O.Z, f.Z), this.syncWith([f.Z], P);
    }
    getActivities() {
        return S;
    }
}
(l = "displayName") in Z
    ? Object.defineProperty(Z, l, {
          value: "ActivityTrackingStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (Z[l] = "ActivityTrackingStore"),
    new Z(c.Z, {
        RUNNING_GAMES_CHANGE: () => P(),
        CONNECTION_OPEN: function () {
            if (N) return !1;
            for (let e of Object.keys(S)) x(S[e]);
            P(!1), (N = !0);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            4004 === t && A();
        },
        LOGOUT: A,
        ACTIVITY_UPDATE_SUCCESS: function (e) {
            let { applicationId: t, token: n } = e,
                r = S[t];
            if (null == r) return !1;
            (r.token = n), o.K.set(I, S);
        },
        ACTIVITY_UPDATE_FAIL: function (e) {
            let { applicationId: t } = e,
                n = S[t];
            if (null == n) return !1;
            (n.token = null), (n.updatedAt = null), o.K.set(I, S);
        },
    });
