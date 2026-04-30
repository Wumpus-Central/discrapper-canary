"use strict";
n.d(t, {
    E$: () => p,
    VR: () => I,
    ZH: () => m,
    f0: () => A,
    iD: () => h,
    oG: () => E,
    tB: () => f,
    tO: () =>
        function e(t, n, i) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            return f
                .put(t, n, { url: c.RQ.NOTIFICATIONS_PLAYER, query: { connection_id: i } })
                .catch((a) => (s <= 0 ? Promise.reject(a) : (0, r.BK)(5e3).then(() => e(t, n, i, s - 1))));
        },
    v7: () => g,
}),
    n(142703);
var i = n(636537),
    r = n(451988),
    s = n(228366),
    a = n(927813),
    o = n(738533),
    l = n(723702),
    u = n(210528),
    c = n(272984),
    d = n(652215);
function _(e, t, n, i) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
    return e((i = { ...i, headers: { authorization: `Bearer ${n}` } }))
        .then((e) => (202 === e.status ? Promise.reject(e) : e))
        .catch((n) => {
            let a = !0 !== i.onlyRetryOnAuthorizationErrors && 202 === n.status;
            return (401 === n.status || a) && s > 0
                ? (202 === n.status ? (0, r.BK)(5e3) : Promise.resolve())
                      .then(() => h(t))
                      .then((n) => {
                          let {
                              body: { access_token: r },
                          } = n;
                          return _(e, t, r, i, s - 1);
                      })
                      .then((e) => new Promise((t) => setImmediate(() => t(e))))
                : Promise.reject(n);
        });
}
let f = { get: _.bind(null, i.Bo.get), put: _.bind(null, i.Bo.put) };
function h(e) {
    return i.Bo.get({ url: d.Rsh.CONNECTION_ACCESS_TOKEN(d.fg2.SPOTIFY, e), oldFormErrors: !0, rejectWithError: !1 })
        .catch((t) => {
            if (t.body?.code === d.t02.CONNECTION_REVOKED)
                s.h.dispatch({ type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: e });
            else if (429 === t.status) {
                let n = t.headers["retry-after"] * a.A.Millis.SECOND,
                    i = isNaN(n) || 0 === n ? 5e3 : n;
                return (0, r.BK)(i).then(() => h(e));
            }
            return Promise.reject(t);
        })
        .then((t) => {
            let { access_token: n } = t.body;
            return s.h.dispatch({ type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: e, accessToken: n }), t;
        });
}
function p(e, t) {
    return f
        .get(e, t, { url: c.RQ.PROFILE })
        .then(
            (t) => (
                s.h.dispatch({ type: "SPOTIFY_PROFILE_UPDATE", accountId: e, isPremium: "premium" === t.body.product }),
                t
            ),
        );
}
function E(e, t) {
    return f
        .get(e, t, { url: c.RQ.PLAYER_DEVICES })
        .then(
            (t) => (t.body && s.h.dispatch({ type: "SPOTIFY_SET_DEVICES", accountId: e, devices: t.body.devices }), t),
        );
}
function m(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        a = c.RQ.PLAYER_OPEN(i, n, !1),
        { deviceId: o, position: l, contextUri: u, repeat: d } = r;
    return f
        .put(e, t, {
            url: c.RQ.PLAYER_PLAY,
            query: { device_id: o },
            body: {
                context_uri: null != u ? u : void 0,
                uris: null == u ? [a] : void 0,
                offset: null != u ? { uri: a } : void 0,
                position_ms: null != l ? l : 0,
            },
        })
        .then((n) =>
            null == d
                ? n
                : f.put(e, t, { url: c.RQ.PLAYER_REPEAT, query: { device_id: o, state: d ? "context" : "off" } }),
        )
        .then((e) => (s.h.dispatch({ type: "SPOTIFY_PLAYER_PLAY", id: n, position: null != l ? l : 0 }), e));
}
function g(e, t) {
    return f.put(e, t, { url: c.RQ.PLAYER_PAUSE }).then((e) => (s.h.dispatch({ type: "SPOTIFY_PLAYER_PAUSE" }), e));
}
function A() {
    !u.A.isProtocolRegistered() &&
        (0, l.isDesktop)() &&
        o.A.isProtocolRegistered(c.gY).then((e) => {
            s.h.dispatch({ type: "SPOTIFY_SET_PROTOCOL_REGISTERED", isRegistered: e });
        });
}
function I(e, t) {
    s.h.dispatch({ type: "SPOTIFY_SET_ACTIVE_DEVICE", accountId: e, deviceId: t });
}
