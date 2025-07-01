(n.d(t, { Z: () => p }), n(388685));
var r,
    s = n(442837),
    i = n(570140),
    l = n(709054),
    o = n(592125);
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
let c = {},
    u = c;
function d() {
    l.default.keys(u).forEach((e) => {
        null == o.Z.getChannel(e) && delete u[e];
    });
}
class f extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        (this.waitFor(o.Z), (u = null != e ? e : c));
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
(a(f, 'displayName', 'CollapsedVoiceChannelStore'), a(f, 'persistKey', 'collapsedChannels'));
let p = new f(i.Z, {
    CONNECTION_OPEN: d,
    OVERLAY_INITIALIZE: d,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        (u[t] ? delete u[t] : (u[t] = !0),
            (u = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            a(e, t, n[t]);
                        }));
                }
                return e;
            })({}, u)));
    }
});
