n.d(t, { A: () => D });
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(562465),
    l = n(73153),
    c = n(734057),
    u = n(309010),
    d = n(967198),
    f = n(652215);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = {},
    E = {};
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.A.getChannelId(),
        n = c.A.getChannel(t);
    if (null != n && null == n.getGuildId() && null != t && (null == g[t] || e)) {
        var r;
        return (
            (g[t] =
                null != (r = g[t])
                    ? r
                    : {
                          channelId: t,
                          ringing: [],
                      }),
            l.h.dispatch({
                type: "CALL_CONNECT",
                channelId: t,
            }),
            !0
        );
    }
    return !1;
}
function y() {
    return b(!0);
}
function O(e) {
    let { callStoreInternalState: t } = e;
    (g = _({}, t.calls)), (E = _({}, t.enqueuedRings));
}
function A() {
    (g = {}), (E = {});
}
function v() {
    return b(!0);
}
function S(e) {
    let { channelId: t } = e;
    return b(!1, t);
}
function I(e) {
    let { channel: t } = e;
    if ((null != E[t.id] && delete E[t.id], null == g[t.id])) return !1;
    delete g[t.id];
}
function T(e) {
    let { channelId: t, messageId: n, region: r, ringing: i } = e;
    if (
        ((g[t] = {
            channelId: t,
            messageId: n,
            region: r,
            ringing: i,
            unavailable: !1,
            regionUpdated: !1,
        }),
        null != E[t])
    ) {
        let e = E[t];
        delete E[t],
            1 !== e.indexOf("all") && (e = null),
            o.Bo.post({
                url: f.Rsh.CALL_RING(t),
                body: { recipients: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
    }
}
function C(e) {
    var t;
    let { channelId: n, recipients: r } = e;
    E[n] = a().union(null != (t = E[n]) ? t : [], null != r ? r : ["all"]);
}
function N(e) {
    let { channelId: t, messageId: n, region: r, ringing: i } = e,
        a = g[t],
        s = null != a && (a.regionUpdated || a.region !== r);
    g[t] = m(_({}, g[t]), {
        messageId: n,
        region: r,
        ringing: i,
        regionUpdated: s,
    });
}
function R(e) {
    let { channelId: t, unavailable: n } = e,
        r = g[t];
    !0 === n && null != r
        ? (g[t] = m(_({}, r), { unavailable: n }))
        : (g[t] = {
              channelId: t,
              ringing: [],
              messageId: null,
              region: null,
              regionUpdated: !1,
              unavailable: n,
          }),
        null != E[t] && delete E[t];
}
function w(e) {
    let { channelId: t } = e;
    null == t && (E = {});
}
class P extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(c.A, u.A, d.A);
    }
    getCall(e) {
        return g[e];
    }
    getCalls() {
        return Object.values(g);
    }
    getMessageId(e) {
        let t = this.getCall(e);
        return null != t ? t.messageId : null;
    }
    isCallActive(e, t) {
        let n = g[e];
        return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region);
    }
    isCallUnavailable(e) {
        let t = g[e];
        return null != t && t.unavailable;
    }
    getInternalState() {
        return {
            calls: g,
            enqueuedRings: E,
        };
    }
}
p(P, "displayName", "CallStore");
let D = new P(l.h, {
    CONNECTION_OPEN: y,
    CONNECTION_CLOSED: A,
    OVERLAY_INITIALIZE: O,
    CONNECTION_RESUMED: v,
    CHANNEL_SELECT: S,
    CHANNEL_DELETE: I,
    CALL_CREATE: T,
    CALL_UPDATE: N,
    CALL_DELETE: R,
    CALL_ENQUEUE_RING: C,
    VOICE_CHANNEL_SELECT: w,
});
