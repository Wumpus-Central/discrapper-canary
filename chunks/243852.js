n(47120);
var i,
    r,
    l,
    a,
    s,
    o = n(442837),
    c = n(433517),
    d = n(846519),
    u = n(570140),
    h = n(278323),
    m = n(581567),
    p = n(594190),
    g = n(581883),
    f = n(70956),
    _ = n(780570),
    E = n(314897),
    I = n(77498),
    C = n(283595),
    N = n(19780),
    v = n(944486),
    S = n(981631);
let T = 'ActivityTrackingStore',
    b = 30 * f.Z.Millis.MINUTE,
    A = 5 * f.Z.Millis.MINUTE,
    Z = null !== (i = c.K.get(T)) && void 0 !== i ? i : {},
    x = {},
    L = !1;
function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && O(e, !0);
    let n = x[e.applicationId];
    null != n && (n.stop(), delete x[e.applicationId]), delete Z[e.applicationId], c.K.set(T, Z);
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        i = null != e.updatedAt ? n - e.updatedAt : 0;
    i > b + A && (i = 0);
    let r = (0, _.OT)(e.applicationId, C.Z),
        l = v.Z.getVoiceChannelId(),
        a = E.default.getSessionId(),
        s = N.Z.getMediaSessionId();
    h.Z.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? S.GQo.DISCORD : e.distributor,
        shareActivity: r,
        token: e.token,
        duration: Math.floor(i / 1000),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: l,
        sessionId: a,
        mediaSessionId: s
    }),
        (e.updatedAt = n);
    let o = x[e.applicationId];
    null == o && (o = x[e.applicationId] = new d.Xp()).start(b, () => O(e)), !t && ((Z[e.applicationId] = e), c.K.set(T, Z));
}
function y() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = p.ZP.getVisibleRunningGames(),
        n = new Set();
    for (let { name: e, distributor: i, exePath: r } of t) {
        let t = I.Z.getGameByName(e);
        if (null != t)
            n.add(t.id),
                !(t.id in Z) &&
                    O({
                        applicationId: t.id,
                        updatedAt: Date.now(),
                        distributor: i,
                        exePath: (0, m.N6)(null != r ? r : '')
                    });
    }
    for (let t of Object.keys(Z)) !n.has(t) && P(Z[t], e);
}
function R() {
    for (let e of Object.keys(Z)) P(Z[e]);
    L = !1;
}
class j extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, g.Z, C.Z), this.syncWith([g.Z], y);
    }
    getActivities() {
        return Z;
    }
}
(s = 'ActivityTrackingStore'),
    (a = 'displayName') in (l = j)
        ? Object.defineProperty(l, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = s),
    new j(u.Z, {
        RUNNING_GAMES_CHANGE: () => y(),
        CONNECTION_OPEN: function () {
            if (L) return !1;
            for (let e of Object.keys(Z)) O(Z[e]);
            y(!1), (L = !0);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            4004 === t && R();
        },
        LOGOUT: R,
        ACTIVITY_UPDATE_SUCCESS: function (e) {
            let { applicationId: t, token: n } = e,
                i = Z[t];
            if (null == i) return !1;
            (i.token = n), c.K.set(T, Z);
        },
        ACTIVITY_UPDATE_FAIL: function (e) {
            let { applicationId: t } = e,
                n = Z[t];
            if (null == n) return !1;
            (n.token = null), (n.updatedAt = null), c.K.set(T, Z);
        }
    });
