n.d(t, { Z: () => g }), n(47120);
var i,
    s = n(442837),
    l = n(570140),
    r = n(709054),
    a = n(592125);
function d(e, t, n) {
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
let o = {},
    h = o;
function u() {
    r.default.keys(h).forEach((e) => {
        null == a.Z.getChannel(e) && delete h[e];
    });
}
class c extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.Z), (h = null != e ? e : o);
    }
    getState() {
        return h;
    }
    getCollapsed() {
        return h;
    }
    isCollapsed(e) {
        return h[e] || !1;
    }
}
d(c, 'displayName', 'CollapsedVoiceChannelStore'), d(c, 'persistKey', 'collapsedChannels');
let g = new c(l.Z, {
    CONNECTION_OPEN: u,
    OVERLAY_INITIALIZE: u,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        h[t] ? delete h[t] : (h[t] = !0),
            (h = (function (e) {
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
                            d(e, t, n[t]);
                        });
                }
                return e;
            })({}, h));
    }
});
