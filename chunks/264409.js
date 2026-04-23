n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(419354),
    r = n(827734),
    o = n(602853),
    d = n(866323),
    c = n(263063),
    u = n(273923);
function h(e) {
    let { guild: t, show: n, active: l, onAnimationStart: h, onAnimationRest: A } = e,
        _ = {},
        m = {};
    (_.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (m.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let g = (0, o.r)(r.A.unsafe_rawColors.BRAND_500).hex(),
        p = (0, o.r)(r.A.unsafe_rawColors.PRIMARY_630).hex();
    l && null == t.icon && ((_.backgroundColor = g), (m.backgroundColor = p));
    let f = (0, d.p)(n, { from: _, enter: m, leave: _, config: { duration: 100 }, onStart: h, onRest: A });
    return (0, i.jsx)(i.Fragment, {
        children: f(
            (e, n, l) =>
                n &&
                (0, i.jsx)(
                    "div",
                    {
                        className: u.qc,
                        children: (0, i.jsx)("div", {
                            className: s()(u.MJ, u.L0),
                            style: { margin: 0 },
                            children: (0, i.jsx)(a.animated.div, {
                                className: u.NG,
                                style: e,
                                children: (0, i.jsx)("div", {
                                    className: u.qJ,
                                    children: (0, i.jsx)("div", {
                                        className: u.jg,
                                        children: (0, i.jsx)(c.Ay, {
                                            guild: t,
                                            size: c.Ay.Sizes.SMOL,
                                            className: u.VL,
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
