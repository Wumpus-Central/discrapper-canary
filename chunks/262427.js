n.d(t, { A: () => u, J: () => c });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(278416),
    s = n(834730),
    o = n(870746);
function u(e) {
    let {
        className: t,
        gradientColor: n = "default",
        children: i,
        Icon: s = a.TagIcon,
        iconSize: u = "xs",
        customGraphic: c,
    } = e;
    return (0, l.jsxs)("div", {
        className: r()(
            o.jt,
            o.qw,
            { [o.p3]: "nitro-pink" === n, [o.U1]: "green" === n, [o.Uq]: "collectibles" === n },
            t,
        ),
        children: [
            null != c
                ? (0, l.jsx)("div", { className: o.B4, children: c })
                : null != s
                  ? (0, l.jsx)(s, { size: u, color: "currentColor" })
                  : null,
            i,
        ],
    });
}
function c(e) {
    let { text: t, gradientColor: n, Icon: i = a.TagIcon, iconSize: c, customGraphic: d, className: p } = e;
    return (0, l.jsx)(u, {
        className: r()(o.Cu, p),
        gradientColor: n,
        ...(null != d ? { customGraphic: d } : { Icon: i, iconSize: c }),
        children: (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "currentColor", className: o.Ct, children: t }),
    });
}
