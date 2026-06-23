"use strict";
n.d(t, { A: () => m });
var i = n(17928),
    r = n(228366),
    s = n(95701),
    a = n(583613),
    o = n(734057),
    l = n(568548),
    u = n(309010),
    c = n(645959);
let d = [],
    _ = new Set();
function h() {
    let e = c.A.getPrivateChannelIds().filter((e) => l.Ay.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, a.in)(e, d) && ((d = e), (_ = new Set(e)), !0);
}
function f() {
    return h();
}
function p(e) {
    let { channelId: t } = e,
        n = o.A.getChannel(t);
    return null != n && !!(0, s.Gw)(n.type) && h();
}
class E extends i.Ay.Store {
    static displayName = "PrivateChannelReadStateStore";
    initialize() {
        this.waitFor(c.A, o.A, u.A, l.Ay);
    }
    getUnreadPrivateChannelIds() {
        return d;
    }
}
let m = new E(r.h, {
    CONNECTION_OPEN: f,
    OVERLAY_INITIALIZE: f,
    MESSAGE_CREATE: p,
    MESSAGE_ACK: p,
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = o.A.getChannel(t);
        return null != n && !!(0, s.Gw)(n.type) && h();
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return !!_.has(t) && h();
    },
    WINDOW_FOCUS: function () {
        let e = o.A.getChannel(u.A.getChannelId());
        return null != e && !!(0, s.Gw)(e.type) && h();
    },
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t },
            } = e,
            n = o.A.getChannel(t);
        return null != n && !!(0, s.Gw)(n.type) && h();
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { id: e } of t) {
            let t = o.A.getChannel(e);
            null != t && (0, s.Gw)(t.type) && (n = !0);
        }
        return !!n && h();
    },
});
