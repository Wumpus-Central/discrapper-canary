n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(382222),
    r = n(827734),
    o = n(397927),
    c = n(263063),
    d = n(142163);
function u(e) {
    let { guild: t, show: n, active: l, onAnimationStart: u, onAnimationRest: h } = e,
        A = {},
        _ = {};
    (A.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (_.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let m = (0, o.rdh)(r.A.unsafe_rawColors.BRAND_500).hex(),
        g = (0, o.rdh)(r.A.unsafe_rawColors.PRIMARY_630).hex();
    l && null == t.icon && ((A.backgroundColor = m), (_.backgroundColor = g));
    let p = (0, o.pnh)(n, { from: A, enter: _, leave: A, config: { duration: 100 }, onStart: u, onRest: h });
    return (0, i.jsx)(i.Fragment, {
        children: p(
            (e, n, l) =>
                n &&
                (0, i.jsx)(
                    "div",
                    {
                        className: d.qc,
                        children: (0, i.jsx)("div", {
                            className: s()(d.MJ, d.L0),
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
                    l.key,
                ),
        ),
    });
}
