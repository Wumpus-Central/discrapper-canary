n.d(t, { e: () => c });
var i = n(627968),
    l = n(64700);
n(503698);
var s = n(773690),
    r = n(397927),
    a = n(985018),
    d = n(47409);
function o(e) {
    let { testimonial: t, className: n } = e,
        { message: l, profilePic: s, adminTitle: o, emphasisColor: c = "interactive-text-default" } = t;
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: a.intl.format(l, {
                    testimonialHook: (e, t) =>
                        (0, i.jsx)(r.Text, { tag: "span", variant: "text-sm/bold", color: c, children: e }, t),
                }),
            }),
            (0, i.jsxs)("div", {
                className: d.f1,
                children: [
                    (0, i.jsx)(r.euF, { src: s, size: r._3J.SIZE_16, "aria-hidden": !0 }),
                    (0, i.jsx)(r.Text, { variant: "text-sm/medium", color: "text-default", children: o }),
                ],
            }),
        ],
    });
}
function c(e) {
    let { testimonials: t } = e,
        [[n, s], o] = l.useState([0, "right"]),
        c = l.useCallback(() => {
            o((e) => {
                let [n] = e;
                return 0 === n ? [t.length - 1, "left"] : [n - 1, "left"];
            });
        }, [o, t.length]),
        m = l.useCallback(() => {
            o((e) => {
                let [n] = e;
                return [(n + 1) % t.length, "right"];
            });
        }, [o, t.length]),
        N = t[n],
        h = l.useCallback((e, t, n, l) => (0, i.jsx)(u, { item: t, state: n, cleanup: l, direction: s }, e), [s]);
    return (0, i.jsxs)("div", {
        className: d.FD,
        children: [
            (0, i.jsx)("div", {
                className: d.nI,
                children: (0, i.jsx)(r.Fai, { items: [N], renderItem: h, getItemKey: (e) => e.adminTitle }),
            }),
            (0, i.jsx)(r.Text, { variant: "text-lg/bold", className: d.wV, children: "“" }),
            (0, i.jsxs)("div", {
                className: d.Jv,
                children: [
                    (0, i.jsx)(r.K0, {
                        size: "sm",
                        variant: "secondary",
                        icon: r.rJJ,
                        onClick: c,
                        "aria-label": a.intl.string(a.t["13/7kX"]),
                    }),
                    (0, i.jsx)(r.K0, {
                        size: "sm",
                        variant: "secondary",
                        icon: r.EdP,
                        onClick: m,
                        "aria-label": a.intl.string(a.t.PDTjLN),
                    }),
                ],
            }),
        ],
    });
}
function u(e) {
    let { item: t, state: n, cleanup: l, direction: a } = e,
        [c] = (0, r.zhh)(
            () => {
                switch (n) {
                    case r.wLy.ENTERED:
                        return {
                            from: { transform: "right" === a ? "translateX(150%)" : "translate(-150%)" },
                            to: { transform: "translateX(0%)" },
                        };
                    case r.wLy.YEETED:
                        return {
                            from: { transform: "translateX(0%)" },
                            to: { transform: "right" === a ? "translateX(-150%)" : "translate(150%)" },
                            onRest: l,
                        };
                    default:
                        return {};
                }
            },
            "respect-motion-settings",
            [n],
        );
    return (0, i.jsx)(s.animated.div, { style: c, children: (0, i.jsx)(o, { className: d.EV, testimonial: t }) });
}
