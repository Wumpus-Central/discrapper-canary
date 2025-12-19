n.d(t, { Z: () => p });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(236726),
    o = n(481060),
    c = n(313201),
    d = n(921944),
    u = n(388032),
    m = n(312529);
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
        b = (0, c.Dt)(),
        g = r.useRef(null),
        v = (0, o.q_F)({
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
        className: l()(m.container, f),
        style: v,
        children: (0, a.jsxs)("aside", {
            "aria-labelledby": b,
            className: m.content,
            children: [
                (0, a.jsxs)("div", {
                    className: m.headerRow,
                    children: [
                        (0, a.jsx)(o.P3F, {
                            innerRef: g,
                            "aria-label": u.intl.string(u.t.WAI6xu),
                            className: m.closeButton,
                            onClick: () => {
                                t(d.L.USER_DISMISS);
                            },
                            children: (0, a.jsx)(o.Dio, { color: "currentColor" }),
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
                (0, a.jsx)(o.Ttm, {
                    className: m.scroller,
                    fade: !0,
                    children: (0, a.jsx)("div", {
                        className: l()(m.scrollerContent, x),
                        children: p,
                    }),
                }),
            ],
        }),
    });
}
