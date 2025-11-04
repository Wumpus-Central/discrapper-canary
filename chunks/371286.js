n.d(t, { Z: () => u });
var a = n(951288),
    r = n(647438),
    i = n(358458),
    l = n(481060),
    s = n(313201),
    o = n(921944),
    c = n(388032),
    d = n(18845);
function u(e) {
    let { markAsDismissed: t, heading: n, subheading: u, children: m, height: p } = e,
        h = (0, s.Dt)(),
        x = r.useRef(null),
        g = (0, l.q_F)({
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
        style: g,
        children: (0, a.jsxs)("aside", {
            "aria-labelledby": h,
            className: d.content,
            children: [
                (0, a.jsxs)("div", {
                    className: d.headerRow,
                    children: [
                        (0, a.jsx)(l.P3F, {
                            innerRef: x,
                            "aria-label": c.intl.string(c.t.WAI6xu),
                            className: d.closeButton,
                            onClick: () => {
                                t(o.L.USER_DISMISS);
                            },
                            children: (0, a.jsx)(l.Dio, { color: "currentColor" }),
                        }),
                        (0, a.jsx)(l.Heading, {
                            id: h,
                            variant: "heading-lg/semibold",
                            children: n,
                        }),
                    ],
                }),
                null != u &&
                    (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: u,
                    }),
                (0, a.jsx)(l.Ttm, {
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
