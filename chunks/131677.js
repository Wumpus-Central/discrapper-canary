n.d(t, { A: () => p });
var i = n(311907),
    l = n(73153),
    s = n(95701),
    a = n(583613),
    r = n(734057),
    o = n(222823),
    d = n(309010),
    c = n(645959);
let u = [],
    h = new Set();
function A() {
    let e = c.default.getPrivateChannelIds().filter((e) => o.Ay.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, a.in)(e, u) && ((u = e), (h = new Set(e)), !0);
}
function _() {
    return A();
}
function m(e) {
    let { channelId: t } = e,
        n = r.A.getChannel(t);
    return null != n && !!(0, s.Gw)(n.type) && A();
}
class g extends i.Ay.Store {
    static displayName = "PrivateChannelReadStateStore";
    initialize() {
        this.waitFor(c.default, r.A, d.A, o.Ay);
    }
    getUnreadPrivateChannelIds() {
        return u;
    }
}
let p = new g(l.h, {
    CONNECTION_OPEN: _,
    OVERLAY_INITIALIZE: _,
    MESSAGE_CREATE: m,
    MESSAGE_ACK: m,
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = r.A.getChannel(t);
        return null != n && !!(0, s.Gw)(n.type) && A();
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return !!h.has(t) && A();
    },
    WINDOW_FOCUS: function () {
        let e = r.A.getChannel(d.A.getChannelId());
        return null != e && !!(0, s.Gw)(e.type) && A();
    },
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t },
            } = e,
            n = r.A.getChannel(t);
        return null != n && !!(0, s.Gw)(n.type) && A();
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { id: e } of t) {
            let t = r.A.getChannel(e);
            null != t && (0, s.Gw)(t.type) && (n = !0);
        }
        return !!n && A();
    },
});
