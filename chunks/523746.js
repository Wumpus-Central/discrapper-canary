var i,
    a = r(392711),
    o = r.n(a),
    s = r(442837),
    l = r(544891),
    u = r(570140),
    c = r(592125),
    d = r(944486),
    f = r(914010),
    p = r(981631);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = {},
    m = {};
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Z.getChannelId(),
        r = c.Z.getChannel(n);
    if (null != r && null == r.getGuildId() && null != n && (null == _[n] || e)) {
        var i;
        return (
            (_[n] =
                null !== (i = _[n]) && void 0 !== i
                    ? i
                    : {
                          channelId: n,
                          ringing: []
                      }),
            u.Z.dispatch({
                type: 'CALL_CONNECT',
                channelId: n
            }),
            !0
        );
    }
    return !1;
}
function E() {
    return g(!0);
}
function v(e) {
    let { callStoreInternalState: n } = e;
    (_ = { ...n.calls }), (m = { ...n.enqueuedRings });
}
function y() {
    (_ = {}), (m = {});
}
function b() {
    return g(!0);
}
function I(e) {
    let { channelId: n } = e;
    return g(!1, n);
}
function T(e) {
    let { channel: n } = e;
    if ((null != m[n.id] && delete m[n.id], null == _[n.id])) return !1;
    delete _[n.id];
}
function S(e) {
    let { channelId: n, messageId: r, region: i, ringing: a } = e;
    if (
        ((_[n] = {
            channelId: n,
            messageId: r,
            region: i,
            ringing: a,
            unavailable: !1,
            regionUpdated: !1
        }),
        null != m[n])
    ) {
        let e = m[n];
        delete m[n],
            1 !== e.indexOf('all') && (e = null),
            l.tn.post({
                url: p.ANM.CALL_RING(n),
                body: { recipients: e },
                oldFormErrors: !0,
                rejectWithError: !0
            });
    }
}
function A(e) {
    var n;
    let { channelId: r, recipients: i } = e;
    m[r] = o().union(null !== (n = m[r]) && void 0 !== n ? n : [], null != i ? i : ['all']);
}
function C(e) {
    let { channelId: n, messageId: r, region: i, ringing: a } = e,
        o = _[n],
        s = null != o && (o.regionUpdated || o.region !== i);
    _[n] = {
        ..._[n],
        messageId: r,
        region: i,
        ringing: a,
        regionUpdated: s
    };
}
function N(e) {
    let { channelId: n, unavailable: r } = e,
        i = _[n];
    !0 === r && null != i
        ? (_[n] = {
              ...i,
              unavailable: r
          })
        : (_[n] = {
              channelId: n,
              ringing: [],
              messageId: null,
              region: null,
              regionUpdated: !1,
              unavailable: r
          }),
        null != m[n] && delete m[n];
}
function R(e) {
    let { channelId: n } = e;
    null == n && (m = {});
}
class O extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, d.Z);
    }
    getCall(e) {
        return _[e];
    }
    getCalls() {
        return Object.values(_);
    }
    getMessageId(e) {
        let n = this.getCall(e);
        return null != n ? n.messageId : null;
    }
    isCallActive(e, n) {
        let r = _[e];
        return null != r && !r.unavailable && (null != n ? r.messageId === n : null != r.region);
    }
    isCallUnavailable(e) {
        let n = _[e];
        return null != n && n.unavailable;
    }
    getInternalState() {
        return {
            calls: _,
            enqueuedRings: m
        };
    }
}
h(O, 'displayName', 'CallStore'),
    (n.Z = new O(u.Z, {
        CONNECTION_OPEN: E,
        CONNECTION_CLOSED: y,
        OVERLAY_INITIALIZE: v,
        CONNECTION_RESUMED: b,
        CHANNEL_SELECT: I,
        CHANNEL_DELETE: T,
        CALL_CREATE: S,
        CALL_UPDATE: C,
        CALL_DELETE: N,
        CALL_ENQUEUE_RING: A,
        VOICE_CHANNEL_SELECT: R
    }));
