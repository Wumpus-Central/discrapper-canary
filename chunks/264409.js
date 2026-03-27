"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(382222),
    r = n(827734),
    o = n(397927),
    c = n(263063),
    d = n(142163);
function u(e) {
    let { guild: t, show: n, active: s, onAnimationStart: u, onAnimationRest: h } = e,
        A = {},
        m = {};
    (A.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (m.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let _ = (0, o.rdh)(r.A.unsafe_rawColors.BRAND_500).hex(),
        p = (0, o.rdh)(r.A.unsafe_rawColors.PRIMARY_630).hex();
    s && null == t.icon && ((A.backgroundColor = _), (m.backgroundColor = p));
    let g = (0, o.pnh)(n, { from: A, enter: m, leave: A, config: { duration: 100 }, onStart: u, onRest: h });
    return (0, i.jsx)(i.Fragment, {
        children: g(
            (e, n, s) =>
                n &&
                (0, i.jsx)(
                    "div",
                    {
                        className: d.qc,
                        children: (0, i.jsx)("div", {
                            className: l()(d.MJ, d.L0),
                            style: { margin: 0 },
                            children: (0, i.jsx)(a.animated.div, {
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
