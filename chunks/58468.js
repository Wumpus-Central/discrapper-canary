n.d(t, { Z: () => g }), n(388685);
var l,
    i = n(442837),
    r = n(570140),
    a = n(709054),
    u = n(592125);
function s(e, t, n) {
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
    d = o;
function c() {
    a.default.keys(d).forEach((e) => {
        null == u.Z.getChannel(e) && delete d[e];
    });
}
class f extends (l = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(u.Z), (d = null != e ? e : o);
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
s(f, 'displayName', 'CollapsedVoiceChannelStore'), s(f, 'persistKey', 'collapsedChannels');
let g = new f(r.Z, {
    CONNECTION_OPEN: c,
    OVERLAY_INITIALIZE: c,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        d[t] ? delete d[t] : (d[t] = !0),
            (d = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        l.forEach(function (t) {
                            s(e, t, n[t]);
                        });
                }
                return e;
            })({}, d));
    }
});
