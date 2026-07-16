"use strict";
n.d(t, { A: () => I });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(636537),
    l = n(228366),
    o = n(734057),
    d = n(309010),
    c = n(967198),
    u = n(652215);
let _ = {},
    E = {};
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Ay.getChannelId(),
        n = o.A.getChannel(t);
    return (
        null != n &&
        null == n.getGuildId() &&
        null != t &&
        (null == _[t] || !!e) &&
        ((_[t] = _[t] ?? { channelId: t, ringing: [] }), l.h.dispatch({ type: "CALL_CONNECT", channelId: t }), !0)
    );
}
class h extends a.Ay.Store {
    static displayName = "CallStore";
    initialize() {
        this.waitFor(o.A, d.Ay, c.A);
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
        return { calls: _, enqueuedRings: E };
    }
}
let I = new h(l.h, {
    CONNECTION_OPEN: function () {
        return A(!0);
    },
    CONNECTION_CLOSED: function () {
        (_ = {}), (E = {});
    },
    OVERLAY_INITIALIZE: function (e) {
        let { callStoreInternalState: t } = e;
        (_ = { ...t.calls }), (E = { ...t.enqueuedRings });
    },
    CONNECTION_RESUMED: function () {
        return A(!0);
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return A(!1, t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if ((null != E[t.id] && delete E[t.id], null == _[t.id])) return !1;
        delete _[t.id];
    },
    CALL_CREATE: function (e) {
        let { channelId: t, messageId: n, region: i, ongoingRings: r } = e;
        if (
            ((_[t] = {
                channelId: t,
                messageId: n,
                region: i,
                ringing: Object.keys(r),
                unavailable: !1,
                regionUpdated: !1,
            }),
            null != E[t])
        ) {
            let e = E[t];
            delete E[t],
                1 !== e.indexOf("all") && (e = null),
                s.Bo.post({ url: u.Rsh.CALL_RING(t), body: { recipients: e }, oldFormErrors: !0, rejectWithError: !0 });
        }
    },
    CALL_UPDATE: function (e) {
        let { channelId: t, messageId: n, region: i, ongoingRings: r } = e,
            a = _[t],
            s = null != a && (a.regionUpdated || a.region !== i);
        _[t] = { ..._[t], messageId: n, region: i, ringing: Object.keys(r), regionUpdated: s };
    },
    CALL_DELETE: function (e) {
        let { channelId: t, unavailable: n } = e,
            i = _[t];
        !0 === n && null != i
            ? (_[t] = { ...i, unavailable: n })
            : (_[t] = { channelId: t, ringing: [], messageId: null, region: null, regionUpdated: !1, unavailable: n }),
            null != E[t] && delete E[t];
    },
    CALL_ENQUEUE_RING: function (e) {
        let { channelId: t, recipients: n } = e;
        E[t] = r().union(E[t] ?? [], n ?? ["all"]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        null == t && (E = {});
    },
});
