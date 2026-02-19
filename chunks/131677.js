"use strict";
n.d(t, { A: () => _ });
var i = n(311907),
    s = n(73153),
    l = n(95701),
    r = n(583613),
    a = n(734057),
    o = n(222823),
    c = n(309010),
    d = n(645959);
let u = [],
    h = new Set();
function A() {
    let e = d.default.getPrivateChannelIds().filter((e) => o.Ay.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, r.in)(e, u) && ((u = e), (h = new Set(e)), !0);
}
function p() {
    return A();
}
function g(e) {
    let { channelId: t } = e,
        n = a.A.getChannel(t);
    return null != n && !!(0, l.Gw)(n.type) && A();
}
class m extends i.Ay.Store {
    static displayName = "PrivateChannelReadStateStore";
    initialize() {
        this.waitFor(d.default, a.A, c.A, o.Ay);
    }
    getUnreadPrivateChannelIds() {
        return u;
    }
}
let _ = new m(s.h, {
    CONNECTION_OPEN: p,
    OVERLAY_INITIALIZE: p,
    MESSAGE_CREATE: g,
    MESSAGE_ACK: g,
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = a.A.getChannel(t);
        return null != n && !!(0, l.Gw)(n.type) && A();
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return !!h.has(t) && A();
    },
    WINDOW_FOCUS: function () {
        let e = a.A.getChannel(c.A.getChannelId());
        return null != e && !!(0, l.Gw)(e.type) && A();
    },
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t },
            } = e,
            n = a.A.getChannel(t);
        return null != n && !!(0, l.Gw)(n.type) && A();
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { id: e } of t) {
            let t = a.A.getChannel(e);
            null != t && (0, l.Gw)(t.type) && (n = !0);
        }
        return !!n && A();
    },
});
