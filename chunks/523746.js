n.d(t, { Z: () => D });
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(544891),
    l = n(570140),
    c = n(592125),
    u = n(944486),
    d = n(914010),
    f = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z.getChannelId(),
        n = c.Z.getChannel(t);
    if (null != n && null == n.getGuildId() && null != t && (null == g[t] || e)) {
        var r;
        return (
            (g[t] =
                null !== (r = g[t]) && void 0 !== r
                    ? r
                    : {
                          channelId: t,
                          ringing: []
                      }),
            l.Z.dispatch({
                type: 'CALL_CONNECT',
                channelId: t
            }),
            !0
        );
    }
    return !1;
}
function b() {
    return v(!0);
}
function y(e) {
    let { callStoreInternalState: t } = e;
    (g = _({}, t.calls)), (E = _({}, t.enqueuedRings));
}
function O() {
    (g = {}), (E = {});
}
function S() {
    return v(!0);
}
function I(e) {
    let { channelId: t } = e;
    return v(!1, t);
}
function T(e) {
    let { channel: t } = e;
    if ((null != E[t.id] && delete E[t.id], null == g[t.id])) return !1;
    delete g[t.id];
}
function N(e) {
    let { channelId: t, messageId: n, region: r, ringing: i } = e;
    if (
        ((g[t] = {
            channelId: t,
            messageId: n,
            region: r,
            ringing: i,
            unavailable: !1,
            regionUpdated: !1
        }),
        null != E[t])
    ) {
        let e = E[t];
        delete E[t],
            1 !== e.indexOf('all') && (e = null),
            s.tn.post({
                url: f.ANM.CALL_RING(t),
                body: { recipients: e },
                oldFormErrors: !0,
                rejectWithError: !0
            });
    }
}
function A(e) {
    var t;
    let { channelId: n, recipients: r } = e;
    E[n] = o().union(null !== (t = E[n]) && void 0 !== t ? t : [], null != r ? r : ['all']);
}
function C(e) {
    let { channelId: t, messageId: n, region: r, ringing: i } = e,
        o = g[t],
        a = null != o && (o.regionUpdated || o.region !== r);
    g[t] = m(_({}, g[t]), {
        messageId: n,
        region: r,
        ringing: i,
        regionUpdated: a
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
              unavailable: n
          }),
        null != E[t] && delete E[t];
}
function P(e) {
    let { channelId: t } = e;
    null == t && (E = {});
}
class w extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, u.Z);
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
            enqueuedRings: E
        };
    }
}
p(w, 'displayName', 'CallStore');
let D = new w(l.Z, {
    CONNECTION_OPEN: b,
    CONNECTION_CLOSED: O,
    OVERLAY_INITIALIZE: y,
    CONNECTION_RESUMED: S,
    CHANNEL_SELECT: I,
    CHANNEL_DELETE: T,
    CALL_CREATE: N,
    CALL_UPDATE: C,
    CALL_DELETE: R,
    CALL_ENQUEUE_RING: A,
    VOICE_CHANNEL_SELECT: P
});
