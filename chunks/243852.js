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
    h = n(70956),
    g = n(780570),
    m = n(314897),
    b = n(77498),
    _ = n(283595),
    O = n(19780),
    E = n(944486),
    y = n(981631);
let v = "ActivityTrackingStore",
    I = 30 * h.Z.Millis.MINUTE,
    C = 5 * h.Z.Millis.MINUTE,
    S = null != (r = o.K.get(v)) ? r : {},
    N = {},
    T = !1;
function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && j(e, !0);
    let n = N[e.applicationId];
    null != n && (n.stop(), delete N[e.applicationId]), delete S[e.applicationId], o.K.set(v, S);
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        r = null != e.updatedAt ? n - e.updatedAt : 0;
    r > I + C && (r = 0);
    let i = (0, g.OT)(e.applicationId, _.Z),
        l = E.Z.getVoiceChannelId(),
        a = m.default.getSessionId(),
        c = O.Z.getMediaSessionId();
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
    let d = N[e.applicationId];
    null == d && (d = N[e.applicationId] = new s.Xp()).start(I, () => j(e)),
        t || ((S[e.applicationId] = e), o.K.set(v, S));
}
function A() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = p.ZP.getVisibleRunningGames(),
        n = new Set();
    for (let { name: e, distributor: r, exePath: i } of t) {
        let t = b.Z.getGameByName(e);
        null != t &&
            (n.add(t.id),
            t.id in S ||
                j({
                    applicationId: t.id,
                    updatedAt: Date.now(),
                    distributor: r,
                    exePath: (0, d.N6)(null != i ? i : ""),
                }));
    }
    for (let t of Object.keys(S)) n.has(t) || P(S[t], e);
}
function x() {
    for (let e of Object.keys(S)) P(S[e]);
    T = !1;
}
class Z extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, f.Z, _.Z), this.syncWith([f.Z], A);
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
        RUNNING_GAMES_CHANGE: () => A(),
        CONNECTION_OPEN: function () {
            if (T) return !1;
            for (let e of Object.keys(S)) j(S[e]);
            A(!1), (T = !0);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            4004 === t && x();
        },
        LOGOUT: x,
        ACTIVITY_UPDATE_SUCCESS: function (e) {
            let { applicationId: t, token: n } = e,
                r = S[t];
            if (null == r) return !1;
            (r.token = n), o.K.set(v, S);
        },
        ACTIVITY_UPDATE_FAIL: function (e) {
            let { applicationId: t } = e,
                n = S[t];
            if (null == n) return !1;
            (n.token = null), (n.updatedAt = null), o.K.set(v, S);
        },
    });
