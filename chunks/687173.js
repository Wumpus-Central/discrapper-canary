n.d(t, {
    A: () => p,
});
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(92674),
    o = n(397927),
    c = n(915089),
    d = n(49999),
    u = n(985018),
    m = n(501785);

function p(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: r,
            children: p,
            height: h,
            className: x,
            contentClassName: g,
        } = e,
        f = (0, c.GV)(),
        b = l.useRef(null),
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
                null != b.current && b.current.focus();
            },
        });
    return (0, a.jsx)(s.animated.div, {
        className: i()(m.kL, x),
        style: v,
        children: (0, a.jsxs)("aside", {
            "aria-labelledby": f,
            className: m.Qs,
            children: [
                (0, a.jsxs)("div", {
                    className: m.U1,
                    children: [
                        (0, a.jsx)(o.DUT, {
                            innerRef: b,
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
                            id: f,
                            variant: "heading-lg/semibold",
                            children: n,
                        }),
                    ],
                }),
                null != r &&
                    (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: r,
                    }),
                (0, a.jsx)(o.HOs, {
                    className: m.XG,
                    fade: !0,
                    children: (0, a.jsx)("div", {
                        className: i()(m.gT, g),
                        children: p,
                    }),
                }),
            ],
        }),
    });
}
