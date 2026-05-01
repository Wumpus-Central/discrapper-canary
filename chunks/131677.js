n.d(t, { A: () => h });
var i = n(17928),
    a = n(228366),
    r = n(95701),
    s = n(583613),
    l = n(734057),
    o = n(222823),
    d = n(309010),
    c = n(567761);
let _ = [],
    E = new Set();
function u() {
    let e = c.default.getPrivateChannelIds().filter((e) => o.Ay.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, s.in)(e, _) && ((_ = e), (E = new Set(e)), !0);
}
function A() {
    return u();
}
function I(e) {
    let { channelId: t } = e,
        n = l.A.getChannel(t);
    return null != n && !!(0, r.Gw)(n.type) && u();
}
class T extends i.Ay.Store {
    static displayName = "PrivateChannelReadStateStore";
    initialize() {
        this.waitFor(c.default, l.A, d.A, o.Ay);
    }
    getUnreadPrivateChannelIds() {
        return _;
    }
}
let h = new T(a.h, {
    CONNECTION_OPEN: A,
    OVERLAY_INITIALIZE: A,
    MESSAGE_CREATE: I,
    MESSAGE_ACK: I,
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = l.A.getChannel(t);
        return null != n && !!(0, r.Gw)(n.type) && u();
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return !!E.has(t) && u();
    },
    WINDOW_FOCUS: function () {
        let e = l.A.getChannel(d.A.getChannelId());
        return null != e && !!(0, r.Gw)(e.type) && u();
    },
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t },
            } = e,
            n = l.A.getChannel(t);
        return null != n && !!(0, r.Gw)(n.type) && u();
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { id: e } of t) {
            let t = l.A.getChannel(e);
            null != t && (0, r.Gw)(t.type) && (n = !0);
        }
        return !!n && u();
    },
});
