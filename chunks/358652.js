n.d(t, { Z: () => O }), n(388685);
var r,
    i,
    l = n(442837),
    a = n(570140),
    o = n(131704),
    s = n(251625),
    c = n(592125),
    u = n(306680),
    d = n(944486),
    f = n(55589);
let h = [],
    p = new Set();
function g() {
    let e = f.Z.getPrivateChannelIds().filter((e) => u.ZP.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, s.EF)(e, h) && ((h = e), (p = new Set(e)), !0);
}
function b() {
    return g();
}
function m(e) {
    let { channelId: t } = e,
        n = c.Z.getChannel(t);
    return null != n && !!(0, o.hv)(n.type) && g();
}
class y extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, c.Z, d.Z, u.ZP);
    }
    getUnreadPrivateChannelIds() {
        return h;
    }
}
(i = "displayName") in y
    ? Object.defineProperty(y, i, {
          value: "PrivateChannelReadStateStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (y[i] = "PrivateChannelReadStateStore");
let O = new y(a.Z, {
    CONNECTION_OPEN: b,
    OVERLAY_INITIALIZE: b,
    MESSAGE_CREATE: m,
    MESSAGE_ACK: m,
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = c.Z.getChannel(t);
        return null != n && !!(0, o.hv)(n.type) && g();
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return !!p.has(t) && g();
    },
    WINDOW_FOCUS: function () {
        let e = c.Z.getChannel(d.Z.getChannelId());
        return null != e && !!(0, o.hv)(e.type) && g();
    },
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t },
            } = e,
            n = c.Z.getChannel(t);
        return null != n && !!(0, o.hv)(n.type) && g();
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { id: e } of t) {
            let t = c.Z.getChannel(e);
            null != t && (0, o.hv)(t.type) && (n = !0);
        }
        return !!n && g();
    },
});
