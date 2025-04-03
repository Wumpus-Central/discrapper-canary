n.d(t, { Z: () => v }), n(47120);
var r,
    i,
    l,
    o = n(442837),
    a = n(570140),
    s = n(131704),
    c = n(251625),
    u = n(592125),
    d = n(306680),
    p = n(944486),
    h = n(55589);
let f = [],
    g = new Set();
function m() {
    let e = h.Z.getPrivateChannelIds().filter((e) => d.ZP.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, c.EF)(e, f) && ((f = e), (g = new Set(e)), !0);
}
function b() {
    return m();
}
function y(e) {
    let { channelId: t } = e,
        n = u.Z.getChannel(t);
    return null != n && !!(0, s.hv)(n.type) && m();
}
class _ extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, u.Z, p.Z, d.ZP);
    }
    getUnreadPrivateChannelIds() {
        return f;
    }
}
(l = 'PrivateChannelReadStateStore'),
    (i = 'displayName') in _
        ? Object.defineProperty(_, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[i] = l);
let v = new _(a.Z, {
    CONNECTION_OPEN: b,
    OVERLAY_INITIALIZE: b,
    MESSAGE_CREATE: y,
    MESSAGE_ACK: y,
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = u.Z.getChannel(t);
        return null != n && !!(0, s.hv)(n.type) && m();
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t }
        } = e;
        return !!g.has(t) && m();
    },
    WINDOW_FOCUS: function () {
        let e = u.Z.getChannel(p.Z.getChannelId());
        return null != e && !!(0, s.hv)(e.type) && m();
    },
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t }
            } = e,
            n = u.Z.getChannel(t);
        return null != n && !!(0, s.hv)(n.type) && m();
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { id: e } of t) {
            let t = u.Z.getChannel(e);
            null != t && (0, s.hv)(t.type) && (n = !0);
        }
        return !!n && m();
    }
});
