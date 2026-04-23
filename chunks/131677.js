n.d(t, { A: () => p });
var i = n(17928),
    l = n(228366),
    s = n(95701),
    r = n(583613),
    a = n(734057),
    o = n(222823),
    d = n(309010),
    c = n(567761);
let u = [],
    h = new Set();
function A() {
    let e = c.default.getPrivateChannelIds().filter((e) => o.Ay.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, r.in)(e, u) && ((u = e), (h = new Set(e)), !0);
}
function _() {
    return A();
}
function g(e) {
    let { channelId: t } = e,
        n = a.A.getChannel(t);
    return null != n && !!(0, s.Gw)(n.type) && A();
}
class m extends i.Ay.Store {
    static displayName = "PrivateChannelReadStateStore";
    initialize() {
        this.waitFor(c.default, a.A, d.A, o.Ay);
    }
    getUnreadPrivateChannelIds() {
        return u;
    }
}
let p = new m(l.h, {
    CONNECTION_OPEN: _,
    OVERLAY_INITIALIZE: _,
    MESSAGE_CREATE: g,
    MESSAGE_ACK: g,
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = a.A.getChannel(t);
        return null != n && !!(0, s.Gw)(n.type) && A();
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return !!h.has(t) && A();
    },
    WINDOW_FOCUS: function () {
        let e = a.A.getChannel(d.A.getChannelId());
        return null != e && !!(0, s.Gw)(e.type) && A();
    },
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t },
            } = e,
            n = a.A.getChannel(t);
        return null != n && !!(0, s.Gw)(n.type) && A();
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { id: e } of t) {
            let t = a.A.getChannel(e);
            null != t && (0, s.Gw)(t.type) && (n = !0);
        }
        return !!n && A();
    },
});
