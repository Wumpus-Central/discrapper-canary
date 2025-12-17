n.d(t, { Z: () => u });
var a = n(54381),
    r = n(473749),
    l = n(236726),
    i = n(481060),
    s = n(313201),
    o = n(921944),
    c = n(388032),
    d = n(312529);
function u(e) {
    let { markAsDismissed: t, heading: n, subheading: u, children: m, height: p } = e,
        h = (0, s.Dt)(),
        f = r.useRef(null),
        x = (0, i.q_F)({
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
                null != f.current && f.current.focus();
            },
        });
    return (0, a.jsx)(l.animated.div, {
        className: d.container,
        style: x,
        children: (0, a.jsxs)("aside", {
            "aria-labelledby": h,
            className: d.content,
            children: [
                (0, a.jsxs)("div", {
                    className: d.headerRow,
                    children: [
                        (0, a.jsx)(i.P3F, {
                            innerRef: f,
                            "aria-label": c.intl.string(c.t.WAI6xu),
                            className: d.closeButton,
                            onClick: () => {
                                t(o.L.USER_DISMISS);
                            },
                            children: (0, a.jsx)(i.Dio, { color: "currentColor" }),
                        }),
                        (0, a.jsx)(i.Heading, {
                            id: h,
                            variant: "heading-lg/semibold",
                            children: n,
                        }),
                    ],
                }),
                null != u &&
                    (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u,
                    }),
                (0, a.jsx)(i.Ttm, {
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
