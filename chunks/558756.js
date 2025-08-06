n.d(t, { W: () => d });
var r = n(255367),
    i = n(442837),
    o = n(755721),
    a = n(481060),
    s = n(9156),
    l = n(388032);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = (e) => {
    let { className: t, channel: c, user: d } = e,
        f = (0, i.e7)([s.ZP], () => s.ZP.isChannelMuted(null, c.id));
    if (!d.bot) return null;
    function _() {
        (0, a.ZDy)(async () => {
            let { default: e } = await n.e("83545").then(n.bind(n, 53149));
            return (t) => (0, r.jsx)(e, u({ channelId: c.id }, t));
        });
    }
    return (0, r.jsx)(o.zx, {
        className: t,
        size: o.Ph.SMALL,
        color: f ? o.zx.Colors.PRIMARY : o.zx.Colors.RED,
        onClick: _,
        children: f ? l.intl.string(l.t.YqAjX1) : l.intl.string(l.t["w4m94+"]),
    });
};
