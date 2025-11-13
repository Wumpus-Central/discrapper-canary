n(388685);
var r,
    i,
    l,
    a = n(442837),
    s = n(433517),
    o = n(846519),
    c = n(570140),
    u = n(278323),
    d = n(581567),
    p = n(594190),
    f = n(581883),
    h = n(70956),
    g = n(780570),
    m = n(314897),
    _ = n(77498),
    b = n(283595),
    E = n(19780),
    O = n(944486),
    y = n(981631);
let v = "ActivityTrackingStore",
    I = 30 * h.Z.Millis.MINUTE,
    C = 5 * h.Z.Millis.MINUTE,
    S = null != (r = s.K.get(v)) ? r : {},
    T = {},
    N = !1;
function j(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && P(e, !0);
    let n = T[e.applicationId];
    null != n && (n.stop(), delete T[e.applicationId]), delete S[e.applicationId], s.K.set(v, S);
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        r = null != e.updatedAt ? n - e.updatedAt : 0;
    r > I + C && (r = 0);
    let i = (0, g.OT)(e.applicationId, b.Z),
        l = O.Z.getVoiceChannelId(),
        a = m.default.getSessionId(),
        c = E.Z.getMediaSessionId();
    u.Z.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? y.GQo.DISCORD : e.distributor,
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
    null == d && (d = T[e.applicationId] = new o.Xp()).start(I, () => P(e)),
        t || ((S[e.applicationId] = e), s.K.set(v, S));
}
function x() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = p.ZP.getVisibleRunningGames(),
        n = new Set();
    for (let { name: e, distributor: r, exePath: i } of t) {
        let t = _.Z.getGameByName(e);
        null != t &&
            (n.add(t.id),
            t.id in S ||
                P({
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
        this.waitFor(m.default, _.Z, b.Z, E.Z, p.ZP, O.Z, f.Z), this.syncWith([f.Z], x);
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
        RUNNING_GAMES_CHANGE: () => x(),
        CONNECTION_OPEN: function () {
            if (N) return !1;
            for (let e of Object.keys(S)) P(S[e]);
            x(!1), (N = !0);
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
            (r.token = n), s.K.set(v, S);
        },
        ACTIVITY_UPDATE_FAIL: function (e) {
            let { applicationId: t } = e,
                n = S[t];
            if (null == n) return !1;
            (n.token = null), (n.updatedAt = null), s.K.set(v, S);
        },
    });
