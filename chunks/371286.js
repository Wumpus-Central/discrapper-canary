n.d(t, { Z: () => u });
var a = n(54381),
    l = n(473749),
    i = n(205120),
    r = n(481060),
    s = n(313201),
    o = n(921944),
    c = n(388032),
    d = n(18845);
function u(e) {
    let { markAsDismissed: t, heading: n, subheading: u, children: m, height: p } = e,
        h = (0, s.Dt)(),
        x = l.useRef(null),
        f = (0, r.q_F)({
            from: {
                transform: "translate3d(-110%, 0, 0)",
                height: p,
            },
            to: {
                transform: "translate3d(0, 0, 0)",
                height: p,
            },
            config: {
                mass: 1,
                stiffness: 100,
                damping: 15,
            },
            onRest: () => {
                null != x.current && x.current.focus();
            },
        });
    return (0, a.jsx)(i.animated.div, {
        className: d.container,
        style: f,
        children: (0, a.jsxs)("aside", {
            "aria-labelledby": h,
            className: d.content,
            children: [
                (0, a.jsxs)("div", {
                    className: d.headerRow,
                    children: [
                        (0, a.jsx)(r.P3F, {
                            innerRef: x,
                            "aria-label": c.intl.string(c.t.WAI6xu),
                            className: d.closeButton,
                            onClick: () => {
                                t(o.L.USER_DISMISS);
                            },
                            children: (0, a.jsx)(r.Dio, { color: "currentColor" }),
                        }),
                        (0, a.jsx)(r.Heading, {
                            id: h,
                            variant: "heading-lg/semibold",
                            children: n,
                        }),
                    ],
                }),
                null != u &&
                    (0, a.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: u,
                    }),
                (0, a.jsx)(r.Ttm, {
                    className: d.scroller,
                    fade: !0,
                    children: (0, a.jsx)("div", {
                        className: d.scrollerContent,
                        children: m,
                    }),
                }),
            ],
        }),
    });
}
