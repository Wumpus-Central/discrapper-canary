n.d(t, {
    A: () => p,
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(108531),
    o = n(397927),
    c = n(915089),
    d = n(49999),
    u = n(985018),
    m = n(501785);

function p(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: i,
            children: p,
            height: h,
            className: f,
            contentClassName: x,
        } = e,
        b = (0, c.GV)(),
        g = l.useRef(null),
        v = (0, o.zhh)({
            from: {
                transform: "translate3d(-110%, 0, 0)",
                height: h,
            },
            to: {
                transform: "translate3d(0, 0, 0)",
                height: h,
            },
            config: {
                mass: 1,
                stiffness: 100,
                damping: 15,
            },
            onRest: () => {
                null != g.current && g.current.focus();
            },
        });
    return (0, a.jsx)(s.animated.div, {
        className: r()(m.kL, f),
        style: v,
        children: (0, a.jsxs)("aside", {
            "aria-labelledby": b,
            className: m.Qs,
            children: [
                (0, a.jsxs)("div", {
                    className: m.U1,
                    children: [
                        (0, a.jsx)(o.DUT, {
                            innerRef: g,
                            "aria-label": u.intl.string(u.t.WAI6xu),
                            className: m.b,
                            onClick: () => {
                                t(d.i.USER_DISMISS);
                            },
                            children: (0, a.jsx)(o.PGe, {
                                color: "currentColor",
                            }),
                        }),
                        (0, a.jsx)(o.Heading, {
                            id: b,
                            variant: "heading-lg/semibold",
                            children: n,
                        }),
                    ],
                }),
                null != i &&
                    (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: i,
                    }),
                (0, a.jsx)(o.HOs, {
                    className: m.XG,
                    fade: !0,
                    children: (0, a.jsx)("div", {
                        className: r()(m.gT, x),
                        children: p,
                    }),
                }),
            ],
        }),
    });
}
