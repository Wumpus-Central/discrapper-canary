"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(442215),
    a = n(827734),
    o = n(397927),
    c = n(263063),
    d = n(584352);
function u(e) {
    let { guild: t, show: n, active: s, onAnimationStart: u, onAnimationRest: h } = e,
        A = {},
        p = {};
    (A.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (p.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let g = (0, o.rdh)(a.A.unsafe_rawColors.BRAND_500).hex(),
        m = (0, o.rdh)(a.A.unsafe_rawColors.PRIMARY_630).hex();
    s && null == t.icon && ((A.backgroundColor = g), (p.backgroundColor = m));
    let _ = (0, o.pnh)(n, { from: A, enter: p, leave: A, config: { duration: 100 }, onStart: u, onRest: h });
    return (0, i.jsx)(i.Fragment, {
        children: _(
            (e, n, s) =>
                n &&
                (0, i.jsx)(
                    "div",
                    {
                        className: d.qc,
                        children: (0, i.jsx)("div", {
                            className: l()(d.MJ, d.L0),
                            style: { margin: 0 },
                            children: (0, i.jsx)(r.animated.div, {
                                className: d.NG,
                                style: e,
                                children: (0, i.jsx)("div", {
                                    className: d.qJ,
                                    children: (0, i.jsx)("div", {
                                        className: d.jg,
                                        children: (0, i.jsx)(c.Ay, {
                                            guild: t,
                                            size: c.Ay.Sizes.SMOL,
                                            className: d.VL,
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    },
                    s.key,
                ),
        ),
    });
}
