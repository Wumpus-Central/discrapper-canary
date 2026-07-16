"use strict";
n.d(t, { A: () => f });
var i = n(17928),
    r = n(228366),
    a = n(95701),
    s = n(583613),
    l = n(734057),
    o = n(568548),
    d = n(309010),
    c = n(645959);
let u = [],
    _ = new Set();
function E() {
    let e = c.A.getPrivateChannelIds().filter((e) => o.Ay.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, s.in)(e, u) && ((u = e), (_ = new Set(e)), !0);
}
function A() {
    return E();
}
function h(e) {
    let { channelId: t } = e,
        n = l.A.getChannel(t);
    return null != n && !!(0, a.Gw)(n.type) && E();
}
class I extends i.Ay.Store {
    static displayName = "PrivateChannelReadStateStore";
    initialize() {
        this.waitFor(c.A, l.A, d.Ay, o.Ay);
    }
    getUnreadPrivateChannelIds() {
        return u;
    }
}
let f = new I(r.h, {
    CONNECTION_OPEN: A,
    OVERLAY_INITIALIZE: A,
    MESSAGE_CREATE: h,
    MESSAGE_ACK: h,
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = l.A.getChannel(t);
        return null != n && !!(0, a.Gw)(n.type) && E();
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return !!_.has(t) && E();
    },
    WINDOW_FOCUS: function () {
        let e = l.A.getChannel(d.Ay.getChannelId());
        return null != e && !!(0, a.Gw)(e.type) && E();
    },
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t },
            } = e,
            n = l.A.getChannel(t);
        return null != n && !!(0, a.Gw)(n.type) && E();
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { id: e } of t) {
            let t = l.A.getChannel(e);
            null != t && (0, a.Gw)(t.type) && (n = !0);
        }
        return !!n && E();
    },
});
