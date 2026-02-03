n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(92674),
    a = n(827734),
    o = n(397927),
    c = n(263063),
    u = n(211170);

function d(e) {
    let { guild: t, show: n, active: l, onAnimationStart: d, onAnimationRest: p } = e,
        h = {},
        g = {};
    (h.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (g.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let f = (0, o.rdh)(a.A.unsafe_rawColors.BRAND_500).hex(),
        m = (0, o.rdh)(a.A.unsafe_rawColors.PRIMARY_630).hex();
    l && null == t.icon && ((h.backgroundColor = f), (g.backgroundColor = m));
    let b = (0, o.pnh)(n, {
        from: h,
        enter: g,
        leave: h,
        config: {
            duration: 100,
        },
        onStart: d,
        onRest: p,
    });
    return (0, r.jsx)(r.Fragment, {
        children: b(
            (e, n, l) =>
                n &&
                (0, r.jsx)(
                    "div",
                    {
                        className: u.qc,
                        children: (0, r.jsx)("div", {
                            className: i()(u.MJ, u.L0),
                            style: {
                                margin: 0,
                            },
                            children: (0, r.jsx)(s.animated.div, {
                                className: u.NG,
                                style: e,
                                children: (0, r.jsx)("div", {
                                    className: u.qJ,
                                    children: (0, r.jsx)("div", {
                                        className: u.jg,
                                        children: (0, r.jsx)(c.A, {
                                            guild: t,
                                            size: c.A.Sizes.SMOL,
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
