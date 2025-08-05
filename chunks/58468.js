(t.d(n, { Z: () => f }), t(388685));
var l,
    i = t(442837),
    r = t(570140),
    a = t(709054),
    u = t(592125);
function s(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let o = {},
    d = o;
function c() {
    a.default.keys(d).forEach((e) => {
        null == u.Z.getChannel(e) && delete d[e];
    });
}
class g extends (l = i.ZP.PersistedStore) {
    initialize(e) {
        (this.waitFor(u.Z), (d = null != e ? e : o));
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
(s(g, 'displayName', 'CollapsedVoiceChannelStore'), s(g, 'persistKey', 'collapsedChannels'));
let f = new g(r.Z, {
    CONNECTION_OPEN: c,
    OVERLAY_INITIALIZE: c,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: n } = e;
        (d[n] ? delete d[n] : (d[n] = !0),
            (d = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        l = Object.keys(t);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        l.forEach(function (n) {
                            s(e, n, t[n]);
                        }));
                }
                return e;
            })({}, d)));
    }
});
