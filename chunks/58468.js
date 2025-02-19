n.d(t, { Z: () => f }), n(47120);
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
a(h, 'displayName', 'CollapsedVoiceChannelStore'), a(h, 'persistKey', 'collapsedChannels');
let f = new h(l.Z, {
    CONNECTION_OPEN: c,
    OVERLAY_INITIALIZE: c,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        d[t] ? delete d[t] : (d[t] = !0),
            (d = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            a(e, t, n[t]);
                        });
                }
                return e;
            })({}, d));
    }
});
