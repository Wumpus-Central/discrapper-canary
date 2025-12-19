n.d(t, { i: () => d }), n(388685);
var l = n(54381),
    i = n(473749);
n(120356);
var r = n(620792),
    s = n(481060),
    a = n(388032),
    o = n(298596);
function c(e) {
    let { testimonial: t, className: n } = e,
        { message: i, profilePic: r, adminTitle: c, emphasisColor: d = "interactive-text-default" } = t;
    return (0, l.jsxs)("div", {
        className: n,
        children: [
            (0, l.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: a.intl.format(i, {
                    testimonialHook: (e, t) =>
                        (0, l.jsx)(
                            s.Text,
                            {
                                tag: "span",
                                variant: "text-sm/bold",
                                color: d,
                                children: e,
                            },
                            t,
                        ),
                }),
            }),
            (0, l.jsxs)("div", {
                className: o.userContainer,
                children: [
                    (0, l.jsx)(s.qEK, {
                        src: r,
                        size: s.EFr.SIZE_16,
                        "aria-hidden": !0,
                    }),
                    (0, l.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: c,
                    }),
                ],
            }),
        ],
    });
}
function d(e) {
    let { testimonials: t } = e,
        [[n, r], c] = i.useState([0, "right"]),
        d = i.useCallback(() => {
            c((e) => {
                let [n] = e;
                return 0 === n ? [t.length - 1, "left"] : [n - 1, "left"];
            });
        }, [c, t.length]),
        m = i.useCallback(() => {
            c((e) => {
                let [n] = e;
                return [(n + 1) % t.length, "right"];
            });
        }, [c, t.length]),
        g = t[n],
        f = i.useCallback(
            (e, t, n, i) =>
                (0, l.jsx)(
                    u,
                    {
                        item: t,
                        state: n,
                        cleanup: i,
                        direction: r,
                    },
                    e,
                ),
            [r],
        );
    return (0, l.jsxs)("div", {
        className: o.testimonialHeroContainer,
        children: [
            (0, l.jsx)("div", {
                className: o.animatedContainer,
                children: (0, l.jsx)(s.W3x, {
                    items: [g],
                    renderItem: f,
                    getItemKey: (e) => e.adminTitle,
                }),
            }),
            (0, l.jsx)(s.Text, {
                variant: "text-lg/bold",
                className: o.heroQuotes,
                children: "\u201C",
            }),
            (0, l.jsxs)("div", {
                className: o.testimonialsControls,
                children: [
                    (0, l.jsx)(s.hU, {
                        size: "sm",
                        variant: "secondary",
                        icon: s.whL,
                        onClick: d,
                        "aria-label": a.intl.string(a.t["13/7kX"]),
                    }),
                    (0, l.jsx)(s.hU, {
                        size: "sm",
                        variant: "secondary",
                        icon: s.ZSh,
                        onClick: m,
                        "aria-label": a.intl.string(a.t.PDTjLN),
                    }),
                ],
            }),
        ],
    });
}
function u(e) {
    let { item: t, state: n, cleanup: i, direction: a } = e,
        [d] = (0, s.q_F)(
            () => {
                switch (n) {
                    case s.pJH.ENTERED:
                        return {
                            from: { transform: "right" === a ? "translateX(150%)" : "translate(-150%)" },
                            to: { transform: "translateX(0%)" },
                        };
                    case s.pJH.YEETED:
                        return {
                            from: { transform: "translateX(0%)" },
                            to: { transform: "right" === a ? "translateX(-150%)" : "translate(150%)" },
                            onRest: i,
                        };
                    default:
                        return {};
                }
            },
            "respect-motion-settings",
            [n],
        );
    return (0, l.jsx)(r.animated.div, {
        style: d,
        children: (0, l.jsx)(c, {
            className: o.testimonial,
            testimonial: t,
        }),
    });
}
