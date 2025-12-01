n.d(t, { Z: () => m }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(709054),
    s = n(592125);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = {},
    d = u;
function f(e) {
    let { channelId: t } = e;
    d[t] ? delete d[t] : (d[t] = !0), (d = c({}, d));
}
function p() {
    o.default.keys(d).forEach((e) => {
        null == s.Z.getChannel(e) && delete d[e];
    });
}
class _ extends (r = i.ZP.PersistedStore) {
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
l(_, "displayName", "CollapsedVoiceChannelStore"), l(_, "persistKey", "collapsedChannels");
let m = new _(a.Z, {
    CONNECTION_OPEN: p,
    OVERLAY_INITIALIZE: p,
    CHANNEL_COLLAPSE: f,
});
