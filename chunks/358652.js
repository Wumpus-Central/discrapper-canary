n.d(t, { Z: () => x }), n(47120);
var i,
    l,
    r,
    a = n(442837),
    o = n(570140),
    s = n(131704),
    c = n(251625),
    d = n(592125),
    u = n(306680),
    h = n(944486),
    p = n(55589);
let g = [],
    m = new Set();
function f() {
    let e = p.Z.getPrivateChannelIds().filter((e) => u.ZP.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, c.EF)(e, g) && ((g = e), (m = new Set(e)), !0);
}
function _() {
    return f();
}
function v(e) {
    let { channelId: t } = e,
        n = d.Z.getChannel(t);
    return !!(null != n && (0, s.hv)(n.type)) && f();
}
class C extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, d.Z, h.Z, u.ZP);
    }
    getUnreadPrivateChannelIds() {
        return g;
    }
}
(r = 'PrivateChannelReadStateStore'),
    (l = 'displayName') in C
        ? Object.defineProperty(C, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[l] = r);
let x = new C(o.Z, {
    CONNECTION_OPEN: _,
    OVERLAY_INITIALIZE: _,
    MESSAGE_CREATE: v,
    MESSAGE_ACK: v,
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = d.Z.getChannel(t);
        return !!(null != n && (0, s.hv)(n.type)) && f();
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t }
        } = e;
        return !!m.has(t) && f();
    },
    WINDOW_FOCUS: function () {
        let e = d.Z.getChannel(h.Z.getChannelId());
        return !!(null != e && (0, s.hv)(e.type)) && f();
    },
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t }
            } = e,
            n = d.Z.getChannel(t);
        return !!(null != n && (0, s.hv)(n.type)) && f();
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { id: e } of t) {
            let t = d.Z.getChannel(e);
            null != t && (0, s.hv)(t.type) && (n = !0);
        }
        return !!n && f();
    }
});
