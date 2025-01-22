n(47120);
var i,
    r = n(442837),
    l = n(570140),
    o = n(709054),
    s = n(592125);
function a(e, t, n) {
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
let u = {},
    d = u;
function c() {
    o.default.keys(d).forEach((e) => {
        null == s.Z.getChannel(e) && delete d[e];
    });
}
class h extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), (d = null != e ? e : u);
    }
    getState() {
        return d;
    }
    getCollapsed() {
        return d;
    }
    isCollapsed(e) {
        return d[e] || !1;
    }
}
a(h, 'displayName', 'CollapsedVoiceChannelStore'),
    a(h, 'persistKey', 'collapsedChannels'),
    (t.Z = new h(l.Z, {
        CONNECTION_OPEN: c,
        OVERLAY_INITIALIZE: c,
        CHANNEL_COLLAPSE: function (e) {
            let { channelId: t } = e;
            d[t] ? delete d[t] : (d[t] = !0), (d = { ...d });
        }
    }));
