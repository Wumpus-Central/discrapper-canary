n.d(t, { Z: () => O });
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(544891),
    l = n(570140),
    u = n(592125),
    c = n(944486),
    d = n(914010),
    f = n(981631);
function _(e, t, n) {
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
let p = {},
    h = {};
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z.getChannelId(),
        n = u.Z.getChannel(t);
    if (null != n && null == n.getGuildId() && null != t && (null == p[t] || e)) {
        var i;
        return (
            (p[t] =
                null !== (i = p[t]) && void 0 !== i
                    ? i
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
function g() {
    return m(!0);
}
function E(e) {
    let { callStoreInternalState: t } = e;
    (p = { ...t.calls }), (h = { ...t.enqueuedRings });
}
function v() {
    (p = {}), (h = {});
}
function y() {
    return m(!0);
}
function I(e) {
    let { channelId: t } = e;
    return m(!1, t);
}
function b(e) {
    let { channel: t } = e;
    if ((null != h[t.id] && delete h[t.id], null == p[t.id])) return !1;
    delete p[t.id];
}
function T(e) {
    let { channelId: t, messageId: n, region: i, ringing: r } = e;
    if (
        ((p[t] = {
            channelId: t,
            messageId: n,
            region: i,
            ringing: r,
            unavailable: !1,
            regionUpdated: !1
        }),
        null != h[t])
    ) {
        let e = h[t];
        delete h[t],
            1 !== e.indexOf('all') && (e = null),
            o.tn.post({
                url: f.ANM.CALL_RING(t),
                body: { recipients: e },
                oldFormErrors: !0,
                rejectWithError: !0
            });
    }
}
function S(e) {
    var t;
    let { channelId: n, recipients: i } = e;
    h[n] = a().union(null !== (t = h[n]) && void 0 !== t ? t : [], null != i ? i : ['all']);
}
function A(e) {
    let { channelId: t, messageId: n, region: i, ringing: r } = e,
        a = p[t],
        s = null != a && (a.regionUpdated || a.region !== i);
    p[t] = {
        ...p[t],
        messageId: n,
        region: i,
        ringing: r,
        regionUpdated: s
    };
}
function N(e) {
    let { channelId: t, unavailable: n } = e,
        i = p[t];
    !0 === n && null != i
        ? (p[t] = {
              ...i,
              unavailable: n
          })
        : (p[t] = {
              channelId: t,
              ringing: [],
              messageId: null,
              region: null,
              regionUpdated: !1,
              unavailable: n
          }),
        null != h[t] && delete h[t];
}
function C(e) {
    let { channelId: t } = e;
    null == t && (h = {});
}
class R extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z);
    }
    getCall(e) {
        return p[e];
    }
    getCalls() {
        return Object.values(p);
    }
    getMessageId(e) {
        let t = this.getCall(e);
        return null != t ? t.messageId : null;
    }
    isCallActive(e, t) {
        let n = p[e];
        return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region);
    }
    isCallUnavailable(e) {
        let t = p[e];
        return null != t && t.unavailable;
    }
    getInternalState() {
        return {
            calls: p,
            enqueuedRings: h
        };
    }
}
_(R, 'displayName', 'CallStore');
let O = new R(l.Z, {
    CONNECTION_OPEN: g,
    CONNECTION_CLOSED: v,
    OVERLAY_INITIALIZE: E,
    CONNECTION_RESUMED: y,
    CHANNEL_SELECT: I,
    CHANNEL_DELETE: b,
    CALL_CREATE: T,
    CALL_UPDATE: A,
    CALL_DELETE: N,
    CALL_ENQUEUE_RING: S,
    VOICE_CHANNEL_SELECT: C
});
