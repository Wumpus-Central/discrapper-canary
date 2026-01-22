n(896048);
var r,
    i,
    l,
    a = n(311907),
    s = n(506774),
    o = n(451988),
    c = n(73153),
    u = n(308368),
    d = n(973522),
    p = n(15285),
    f = n(617617),
    h = n(927813),
    A = n(674378),
    g = n(961350),
    m = n(760751),
    b = n(189081),
    _ = n(383501),
    E = n(309010),
    O = n(652215);
let y = "ActivityTrackingStore",
    I = 30 * h.A.Millis.MINUTE,
    v = 5 * h.A.Millis.MINUTE,
    S = null != (r = s.w.get(y)) ? r : {},
    C = {},
    N = !1;

function T(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && j(e, !0);
    let n = C[e.applicationId];
    null != n && (n.stop(), delete C[e.applicationId]), delete S[e.applicationId], s.w.set(y, S);
}

function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        r = null != e.updatedAt ? n - e.updatedAt : 0;
    r > I + v && (r = 0);
    let i = (0, A.kv)(e.applicationId, b.A),
        l = E.A.getVoiceChannelId(),
        a = g.default.getSessionId(),
        c = _.A.getMediaSessionId();
    u.A.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? O.d3x.DISCORD : e.distributor,
        shareActivity: i,
        token: e.token,
        duration: Math.floor(r / 1e3),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: l,
        sessionId: a,
        mediaSessionId: c,
    }),
        (e.updatedAt = n);
    let d = C[e.applicationId];
    null == d && (d = C[e.applicationId] = new o.IX()).start(I, () => j(e)),
        t || ((S[e.applicationId] = e), s.w.set(y, S));
}

function x() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = p.Ay.getVisibleRunningGames(),
        n = new Set();
    for (let { name: e, distributor: r, exePath: i } of t) {
        let t = m.A.getGameByName(e);
        null != t &&
            (n.add(t.id),
            t.id in S ||
                j({
                    applicationId: t.id,
                    updatedAt: Date.now(),
                    distributor: r,
                    exePath: (0, d.Ic)(null != i ? i : ""),
                }));
    }
    for (let t of Object.keys(S)) n.has(t) || T(S[t], e);
}

function P() {
    for (let e of Object.keys(S)) T(S[e]);
    N = !1;
}
class w extends (i = a.Ay.Store) {
    initialize() {
        this.waitFor(g.default, m.A, b.A, _.A, p.Ay, E.A, f.A), this.syncWith([f.A], x);
    }
    getActivities() {
        return S;
    }
}
(l = "displayName") in w
    ? Object.defineProperty(w, l, {
          value: "ActivityTrackingStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (w[l] = "ActivityTrackingStore"),
    new w(c.h, {
        RUNNING_GAMES_CHANGE: () => x(),
        CONNECTION_OPEN: function () {
            if (N) return !1;
            for (let e of Object.keys(S)) j(S[e]);
            x(!1), (N = !0);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            4004 === t && P();
        },
        LOGOUT: P,
        ACTIVITY_UPDATE_SUCCESS: function (e) {
            let { applicationId: t, token: n } = e,
                r = S[t];
            if (null == r) return !1;
            (r.token = n), s.w.set(y, S);
        },
        ACTIVITY_UPDATE_FAIL: function (e) {
            let { applicationId: t } = e,
                n = S[t];
            if (null == n) return !1;
            (n.token = null), (n.updatedAt = null), s.w.set(y, S);
        },
    });
