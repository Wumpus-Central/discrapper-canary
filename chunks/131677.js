n.d(t, { A: () => y }), n(896048);
var r,
    l,
    i = n(311907),
    a = n(73153),
    s = n(95701),
    o = n(583613),
    c = n(734057),
    u = n(222823),
    d = n(309010),
    f = n(645959);
let p = [],
    h = new Set();
function b() {
    let e = f.A.getPrivateChannelIds().filter((e) => u.Ay.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, o.in)(e, p) && ((p = e), (h = new Set(e)), !0);
}
function g() {
    return b();
}
function m(e) {
    let { channelId: t } = e,
        n = c.A.getChannel(t);
    return null != n && !!(0, s.Gw)(n.type) && b();
}
class A extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(f.A, c.A, d.A, u.Ay);
    }
    getUnreadPrivateChannelIds() {
        return p;
    }
}
(l = "displayName") in A
    ? Object.defineProperty(A, l, {
          value: "PrivateChannelReadStateStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (A[l] = "PrivateChannelReadStateStore");
let y = new A(a.h, {
    CONNECTION_OPEN: g,
    OVERLAY_INITIALIZE: g,
    MESSAGE_CREATE: m,
    MESSAGE_ACK: m,
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = c.A.getChannel(t);
        return null != n && !!(0, s.Gw)(n.type) && b();
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return !!h.has(t) && b();
    },
    WINDOW_FOCUS: function () {
        let e = c.A.getChannel(d.A.getChannelId());
        return null != e && !!(0, s.Gw)(e.type) && b();
    },
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t },
            } = e,
            n = c.A.getChannel(t);
        return null != n && !!(0, s.Gw)(n.type) && b();
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { id: e } of t) {
            let t = c.A.getChannel(e);
            null != t && (0, s.Gw)(t.type) && (n = !0);
        }
        return !!n && b();
    },
});
