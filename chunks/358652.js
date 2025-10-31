n.d(t, { Z: () => y }), n(388685);
var r,
    i,
    l = n(442837),
    o = n(570140),
    a = n(131704),
    s = n(251625),
    c = n(592125),
    u = n(306680),
    d = n(944486),
    p = n(55589);
let h = [],
    f = new Set();
function g() {
    let e = p.Z.getPrivateChannelIds().filter((e) => u.ZP.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, s.EF)(e, h) && ((h = e), (f = new Set(e)), !0);
}
function m() {
    return g();
}
function b(e) {
    let { channelId: t } = e,
        n = c.Z.getChannel(t);
    return null != n && !!(0, a.hv)(n.type) && g();
}
class _ extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, c.Z, d.Z, u.ZP);
    }
    getUnreadPrivateChannelIds() {
        return h;
    }
}
(i = "displayName") in _
    ? Object.defineProperty(_, i, {
          value: "PrivateChannelReadStateStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (_[i] = "PrivateChannelReadStateStore");
let y = new _(o.Z, {
    CONNECTION_OPEN: m,
    OVERLAY_INITIALIZE: m,
    MESSAGE_CREATE: b,
    MESSAGE_ACK: b,
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = c.Z.getChannel(t);
        return null != n && !!(0, a.hv)(n.type) && g();
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return !!f.has(t) && g();
    },
    WINDOW_FOCUS: function () {
        let e = c.Z.getChannel(d.Z.getChannelId());
        return null != e && !!(0, a.hv)(e.type) && g();
    },
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t },
            } = e,
            n = c.Z.getChannel(t);
        return null != n && !!(0, a.hv)(n.type) && g();
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { id: e } of t) {
            let t = c.Z.getChannel(e);
            null != t && (0, a.hv)(t.type) && (n = !0);
        }
        return !!n && g();
    },
});
