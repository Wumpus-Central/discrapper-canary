"use strict";
n.d(t, { A: () => f });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(636537),
    o = n(228366),
    l = n(734057),
    d = n(309010),
    _ = n(967198),
    u = n(652215);
let c = {},
    E = {};
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.A.getChannelId(),
        n = l.A.getChannel(t);
    return (
        null != n &&
        null == n.getGuildId() &&
        null != t &&
        (null == c[t] || !!e) &&
        ((c[t] = c[t] ?? { channelId: t, ringing: [] }), o.h.dispatch({ type: "CALL_CONNECT", channelId: t }), !0)
    );
}
class m extends s.Ay.Store {
    static displayName = "CallStore";
    initialize() {
        this.waitFor(l.A, d.A, _.A);
    }
    getCall(e) {
        return c[e];
    }
    getCalls() {
        return Object.values(c);
    }
    getMessageId(e) {
        let t = this.getCall(e);
        return null != t ? t.messageId : null;
    }
    isCallActive(e, t) {
        let n = c[e];
        return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region);
    }
    isCallUnavailable(e) {
        let t = c[e];
        return null != t && t.unavailable;
    }
    getInternalState() {
        return { calls: c, enqueuedRings: E };
    }
}
let f = new m(o.h, {
    CONNECTION_OPEN: function () {
        return h(!0);
    },
    CONNECTION_CLOSED: function () {
        (c = {}), (E = {});
    },
    OVERLAY_INITIALIZE: function (e) {
        let { callStoreInternalState: t } = e;
        (c = { ...t.calls }), (E = { ...t.enqueuedRings });
    },
    CONNECTION_RESUMED: function () {
        return h(!0);
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return h(!1, t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if ((null != E[t.id] && delete E[t.id], null == c[t.id])) return !1;
        delete c[t.id];
    },
    CALL_CREATE: function (e) {
        let { channelId: t, messageId: n, region: i, ongoingRings: r } = e;
        if (
            ((c[t] = {
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
                a.Bo.post({ url: u.Rsh.CALL_RING(t), body: { recipients: e }, oldFormErrors: !0, rejectWithError: !0 });
        }
    },
    CALL_UPDATE: function (e) {
        let { channelId: t, messageId: n, region: i, ongoingRings: r } = e,
            s = c[t],
            a = null != s && (s.regionUpdated || s.region !== i);
        c[t] = { ...c[t], messageId: n, region: i, ringing: Object.keys(r), regionUpdated: a };
    },
    CALL_DELETE: function (e) {
        let { channelId: t, unavailable: n } = e,
            i = c[t];
        !0 === n && null != i
            ? (c[t] = { ...i, unavailable: n })
            : (c[t] = { channelId: t, ringing: [], messageId: null, region: null, regionUpdated: !1, unavailable: n }),
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
