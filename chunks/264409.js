n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(563495),
    r = n(827734),
    o = n(397927),
    d = n(263063),
    c = n(211170);
function u(e) {
    let { guild: t, show: n, active: l, onAnimationStart: u, onAnimationRest: h } = e,
        A = {},
        g = {};
    (A.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (g.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let m = (0, o.rdh)(r.A.unsafe_rawColors.BRAND_500).hex(),
        p = (0, o.rdh)(r.A.unsafe_rawColors.PRIMARY_630).hex();
    l && null == t.icon && ((A.backgroundColor = m), (g.backgroundColor = p));
    let _ = (0, o.pnh)(n, { from: A, enter: g, leave: A, config: { duration: 100 }, onStart: u, onRest: h });
    return (0, i.jsx)(i.Fragment, {
        children: _(
            (e, n, l) =>
                n &&
                (0, i.jsx)(
                    "div",
                    {
                        className: c.qc,
                        children: (0, i.jsx)("div", {
                            className: s()(c.MJ, c.L0),
                            style: { margin: 0 },
                            children: (0, i.jsx)(a.animated.div, {
                                className: c.NG,
                                style: e,
                                children: (0, i.jsx)("div", {
                                    className: c.qJ,
                                    children: (0, i.jsx)("div", {
                                        className: c.jg,
                                        children: (0, i.jsx)(d.A, { guild: t, size: d.A.Sizes.SMOL, className: c.VL }),
                                    }),
                                }),
                            }),
                        }),
                    },
                    l.key,
                ),
        ),
    });
}
