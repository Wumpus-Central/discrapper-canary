"use strict";
n.d(t, {
    E$: () => E,
    VR: () => S,
    ZH: () => I,
    f0: () => y,
    iD: () => m,
    oG: () => A,
    tB: () => h,
    tO: () => g,
    v7: () => T,
}),
    n(142703);
var r = n(562465),
    i = n(451988),
    a = n(73153),
    s = n(927813),
    o = n(25171),
    l = n(723702),
    u = n(210528),
    c = n(272984),
    d = n(652215);
let _ = 5e3,
    f = 5e3;
function p(e, t, n, r) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
    return e((r = { ...r, headers: { authorization: `Bearer ${n}` } }))
        .then((e) => (202 === e.status ? Promise.reject(e) : e))
        .catch((n) => {
            let s = !0 !== r.onlyRetryOnAuthorizationErrors && 202 === n.status;
            return (401 === n.status || s) && a > 0
                ? (202 === n.status ? (0, i.BK)(_) : Promise.resolve())
                      .then(() => m(t))
                      .then((n) => {
                          let {
                              body: { access_token: i },
                          } = n;
                          return p(e, t, i, r, a - 1);
                      })
                      .then((e) => new Promise((t) => setImmediate(() => t(e))))
                : Promise.reject(n);
        });
}
let h = { get: p.bind(null, r.Bo.get), put: p.bind(null, r.Bo.put) };
function m(e) {
    return r.Bo.get({ url: d.Rsh.CONNECTION_ACCESS_TOKEN(d.fg2.SPOTIFY, e), oldFormErrors: !0, rejectWithError: !1 })
        .catch((t) => {
            if (t.body?.code === d.t02.CONNECTION_REVOKED)
                a.h.dispatch({ type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: e });
            else if (429 === t.status) {
                let n = t.headers["retry-after"] * s.A.Millis.SECOND,
                    r = isNaN(n) || 0 === n ? f : n;
                return (0, i.BK)(r).then(() => m(e));
            }
            return Promise.reject(t);
        })
        .then((t) => {
            let { access_token: n } = t.body;
            return a.h.dispatch({ type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: e, accessToken: n }), t;
        });
}
function g(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
    return h
        .put(e, t, { url: c.RQ.NOTIFICATIONS_PLAYER, query: { connection_id: n } })
        .catch((a) => (r <= 0 ? Promise.reject(a) : (0, i.BK)(_).then(() => g(e, t, n, r - 1))));
}
function E(e, t) {
    return h
        .get(e, t, { url: c.RQ.PROFILE })
        .then(
            (t) => (
                a.h.dispatch({ type: "SPOTIFY_PROFILE_UPDATE", accountId: e, isPremium: "premium" === t.body.product }),
                t
            ),
        );
}
function A(e, t) {
    return h
        .get(e, t, { url: c.RQ.PLAYER_DEVICES })
        .then(
            (t) => (t.body && a.h.dispatch({ type: "SPOTIFY_SET_DEVICES", accountId: e, devices: t.body.devices }), t),
        );
}
function I(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        s = c.RQ.PLAYER_OPEN(r, n, !1),
        { deviceId: o, position: l, contextUri: u, repeat: d } = i;
    return h
        .put(e, t, {
            url: c.RQ.PLAYER_PLAY,
            query: { device_id: o },
            body: {
                context_uri: null != u ? u : void 0,
                uris: null == u ? [s] : void 0,
                offset: null != u ? { uri: s } : void 0,
                position_ms: null != l ? l : 0,
            },
        })
        .then((n) =>
            null == d
                ? n
                : h.put(e, t, { url: c.RQ.PLAYER_REPEAT, query: { device_id: o, state: d ? "context" : "off" } }),
        )
        .then((e) => (a.h.dispatch({ type: "SPOTIFY_PLAYER_PLAY", id: n, position: null != l ? l : 0 }), e));
}
function T(e, t) {
    return h.put(e, t, { url: c.RQ.PLAYER_PAUSE }).then((e) => (a.h.dispatch({ type: "SPOTIFY_PLAYER_PAUSE" }), e));
}
function y() {
    !u.A.isProtocolRegistered() &&
        (0, l.isDesktop)() &&
        o.A.isProtocolRegistered(c.gY).then((e) => {
            a.h.dispatch({ type: "SPOTIFY_SET_PROTOCOL_REGISTERED", isRegistered: e });
        });
}
function S(e, t) {
    a.h.dispatch({ type: "SPOTIFY_SET_ACTIVE_DEVICE", accountId: e, deviceId: t });
}
