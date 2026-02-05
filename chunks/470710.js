"use strict";
n.d(t, { A: () => N });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(562465),
    o = n(73153),
    l = n(734057),
    u = n(309010),
    c = n(967198),
    d = n(652215);
let _ = {},
    f = {};
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.A.getChannelId(),
        n = l.A.getChannel(t);
    return (
        null != n &&
        null == n.getGuildId() &&
        null != t &&
        (null == _[t] || !!e) &&
        ((_[t] = _[t] ?? { channelId: t, ringing: [] }), o.h.dispatch({ type: "CALL_CONNECT", channelId: t }), !0)
    );
}
function h() {
    return p(!0);
}
function m(e) {
    let { callStoreInternalState: t } = e;
    (_ = { ...t.calls }), (f = { ...t.enqueuedRings });
}
function g() {
    (_ = {}), (f = {});
}
function E() {
    return p(!0);
}
function A(e) {
    let { channelId: t } = e;
    return p(!1, t);
}
function I(e) {
    let { channel: t } = e;
    if ((null != f[t.id] && delete f[t.id], null == _[t.id])) return !1;
    delete _[t.id];
}
function T(e) {
    let { channelId: t, messageId: n, region: r, ringing: i } = e;
    if (
        ((_[t] = { channelId: t, messageId: n, region: r, ringing: i, unavailable: !1, regionUpdated: !1 }),
        null != f[t])
    ) {
        let e = f[t];
        delete f[t],
            1 !== e.indexOf("all") && (e = null),
            s.Bo.post({ url: d.Rsh.CALL_RING(t), body: { recipients: e }, oldFormErrors: !0, rejectWithError: !0 });
    }
}
function y(e) {
    let { channelId: t, recipients: n } = e;
    f[t] = i().union(f[t] ?? [], n ?? ["all"]);
}
function S(e) {
    let { channelId: t, messageId: n, region: r, ringing: i } = e,
        a = _[t],
        s = null != a && (a.regionUpdated || a.region !== r);
    _[t] = { ..._[t], messageId: n, region: r, ringing: i, regionUpdated: s };
}
function v(e) {
    let { channelId: t, unavailable: n } = e,
        r = _[t];
    !0 === n && null != r
        ? (_[t] = { ...r, unavailable: n })
        : (_[t] = { channelId: t, ringing: [], messageId: null, region: null, regionUpdated: !1, unavailable: n }),
        null != f[t] && delete f[t];
}
function C(e) {
    let { channelId: t } = e;
    null == t && (f = {});
}
class b extends a.Ay.Store {
    static displayName = "CallStore";
    initialize() {
        this.waitFor(l.A, u.A, c.A);
    }
    getCall(e) {
        return _[e];
    }
    getCalls() {
        return Object.values(_);
    }
    getMessageId(e) {
        let t = this.getCall(e);
        return null != t ? t.messageId : null;
    }
    isCallActive(e, t) {
        let n = _[e];
        return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region);
    }
    isCallUnavailable(e) {
        let t = _[e];
        return null != t && t.unavailable;
    }
    getInternalState() {
        return { calls: _, enqueuedRings: f };
    }
}
let N = new b(o.h, {
    CONNECTION_OPEN: h,
    CONNECTION_CLOSED: g,
    OVERLAY_INITIALIZE: m,
    CONNECTION_RESUMED: E,
    CHANNEL_SELECT: A,
    CHANNEL_DELETE: I,
    CALL_CREATE: T,
    CALL_UPDATE: S,
    CALL_DELETE: v,
    CALL_ENQUEUE_RING: y,
    VOICE_CHANNEL_SELECT: C,
});
