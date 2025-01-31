n.d(t, { Z: () => g }), n(47120);
var i,
    l = n(442837),
    r = n(570140),
    s = n(709054),
    a = n(592125);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = {},
    u = d;
function c() {
    s.default.keys(u).forEach((e) => {
        null == a.Z.getChannel(e) && delete u[e];
    });
}
class h extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.Z), (u = null != e ? e : d);
    }
    getState() {
        return u;
    }
    getCollapsed() {
        return u;
    }
    isCollapsed(e) {
        return u[e] || !1;
    }
}
o(h, 'displayName', 'CollapsedVoiceChannelStore'), o(h, 'persistKey', 'collapsedChannels');
let g = new h(r.Z, {
    CONNECTION_OPEN: c,
    OVERLAY_INITIALIZE: c,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        u[t] ? delete u[t] : (u[t] = !0), (u = { ...u });
    }
});
