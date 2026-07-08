"use strict";
n.d(t, {
    E$: () => h,
    VR: () => m,
    ZH: () => f,
    f0: () => T,
    iD: () => A,
    oG: () => I,
    tB: () => E,
    tO: () =>
        function e(t, n, i) {
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            return E.put(t, n, { url: c.RQ.NOTIFICATIONS_PLAYER, query: { connection_id: i } }).catch((s) =>
                a <= 0 ? Promise.reject(s) : (0, r.BK)(5e3).then(() => e(t, n, i, a - 1)),
            );
        },
    v7: () => p,
}),
    n(142703);
var i = n(636537),
    r = n(451988),
    a = n(228366),
    s = n(927813),
    l = n(738533),
    o = n(723702),
    d = n(210528),
    c = n(272984),
    u = n(652215);
function _(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
    return e((i = { ...i, headers: { authorization: `Bearer ${n}` } }))
        .then((e) => (202 === e.status ? Promise.reject(e) : e))
        .catch((n) => {
            let s = !0 !== i.onlyRetryOnAuthorizationErrors && 202 === n.status;
            return (401 === n.status || s) && a > 0
                ? (202 === n.status ? (0, r.BK)(5e3) : Promise.resolve())
                      .then(() => A(t))
                      .then((n) => {
                          let {
                              body: { access_token: r },
                          } = n;
                          return _(e, t, r, i, a - 1);
                      })
                      .then((e) => new Promise((t) => setImmediate(() => t(e))))
                : Promise.reject(n);
        });
}
let E = { get: _.bind(null, i.Bo.get), put: _.bind(null, i.Bo.put) };
function A(e) {
    return i.Bo.get({ url: u.Rsh.CONNECTION_ACCESS_TOKEN(u.fg2.SPOTIFY, e), oldFormErrors: !0, rejectWithError: !1 })
        .catch((t) => {
            if (t.body?.code === u.t02.CONNECTION_REVOKED)
                a.h.dispatch({ type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: e });
            else if (429 === t.status) {
                let n = t.headers["retry-after"] * s.A.Millis.SECOND,
                    i = isNaN(n) || 0 === n ? 5e3 : n;
                return (0, r.BK)(i).then(() => A(e));
            }
            return Promise.reject(t);
        })
        .then((t) => {
            let { access_token: n } = t.body;
            return a.h.dispatch({ type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: e, accessToken: n }), t;
        });
}
function h(e, t) {
    return E.get(e, t, { url: c.RQ.PROFILE }).then(
        (t) => (
            a.h.dispatch({ type: "SPOTIFY_PROFILE_UPDATE", accountId: e, isPremium: "premium" === t.body.product }), t
        ),
    );
}
function I(e, t) {
    return E.get(e, t, { url: c.RQ.PLAYER_DEVICES }).then(
        (t) => (t.body && a.h.dispatch({ type: "SPOTIFY_SET_DEVICES", accountId: e, devices: t.body.devices }), t),
    );
}
function f(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        s = c.RQ.PLAYER_OPEN(i, n, !1),
        { deviceId: l, position: o, contextUri: d, repeat: u } = r;
    return E.put(e, t, {
        url: c.RQ.PLAYER_PLAY,
        query: { device_id: l },
        body: {
            context_uri: null != d ? d : void 0,
            uris: null == d ? [s] : void 0,
            offset: null != d ? { uri: s } : void 0,
            position_ms: null != o ? o : 0,
        },
    })
        .then((n) =>
            null == u
                ? n
                : E.put(e, t, { url: c.RQ.PLAYER_REPEAT, query: { device_id: l, state: u ? "context" : "off" } }),
        )
        .then((e) => (a.h.dispatch({ type: "SPOTIFY_PLAYER_PLAY", id: n, position: null != o ? o : 0 }), e));
}
function p(e, t) {
    return E.put(e, t, { url: c.RQ.PLAYER_PAUSE }).then((e) => (a.h.dispatch({ type: "SPOTIFY_PLAYER_PAUSE" }), e));
}
function T() {
    !d.A.isProtocolRegistered() &&
        (0, o.isDesktop)() &&
        l.A.isProtocolRegistered(c.gY).then((e) => {
            a.h.dispatch({ type: "SPOTIFY_SET_PROTOCOL_REGISTERED", isRegistered: e });
        });
}
function m(e, t) {
    a.h.dispatch({ type: "SPOTIFY_SET_ACTIVE_DEVICE", accountId: e, deviceId: t });
}
