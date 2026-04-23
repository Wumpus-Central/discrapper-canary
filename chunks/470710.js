"use strict";
n.d(t, { A: () => E });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(562465),
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
class h extends s.Ay.Store {
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
let E = new h(o.h, {
    CONNECTION_OPEN: function () {
        return p(!0);
    },
    CONNECTION_CLOSED: function () {
        (_ = {}), (f = {});
    },
    OVERLAY_INITIALIZE: function (e) {
        let { callStoreInternalState: t } = e;
        (_ = { ...t.calls }), (f = { ...t.enqueuedRings });
    },
    CONNECTION_RESUMED: function () {
        return p(!0);
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return p(!1, t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if ((null != f[t.id] && delete f[t.id], null == _[t.id])) return !1;
        delete _[t.id];
    },
    CALL_CREATE: function (e) {
        let { channelId: t, messageId: n, region: r, ongoingRings: i } = e;
        if (
            ((_[t] = {
                channelId: t,
                messageId: n,
                region: r,
                ringing: Object.keys(i),
                unavailable: !1,
                regionUpdated: !1,
            }),
            null != f[t])
        ) {
            let e = f[t];
            delete f[t],
                1 !== e.indexOf("all") && (e = null),
                a.Bo.post({ url: d.Rsh.CALL_RING(t), body: { recipients: e }, oldFormErrors: !0, rejectWithError: !0 });
        }
    },
    CALL_UPDATE: function (e) {
        let { channelId: t, messageId: n, region: r, ongoingRings: i } = e,
            s = _[t],
            a = null != s && (s.regionUpdated || s.region !== r);
        _[t] = { ..._[t], messageId: n, region: r, ringing: Object.keys(i), regionUpdated: a };
    },
    CALL_DELETE: function (e) {
        let { channelId: t, unavailable: n } = e,
            r = _[t];
        !0 === n && null != r
            ? (_[t] = { ...r, unavailable: n })
            : (_[t] = { channelId: t, ringing: [], messageId: null, region: null, regionUpdated: !1, unavailable: n }),
            null != f[t] && delete f[t];
    },
    CALL_ENQUEUE_RING: function (e) {
        let { channelId: t, recipients: n } = e;
        f[t] = i().union(f[t] ?? [], n ?? ["all"]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        null == t && (f = {});
    },
});
