n.d(t, { e: () => g });
var i = n(627968),
    l = n(64700);
n(503698);
var s = n(419354),
    r = n(834730),
    a = n(97808),
    d = n(778712),
    o = n(518009),
    c = n(408278),
    u = n(477155),
    m = n(935286),
    N = n(717421),
    h = n(985018),
    I = n(926081);
function E(e) {
    let { testimonial: t, className: n } = e,
        { message: l, profilePic: s, adminTitle: o, emphasisColor: c = "interactive-text-default" } = t;
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)(r.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: h.intl.format(l, {
                    testimonialHook: (e, t) =>
                        (0, i.jsx)(r.E, { tag: "span", variant: "text-sm/bold", color: c, children: e }, t),
                }),
            }),
            (0, i.jsxs)("div", {
                className: I.f1,
                children: [
                    (0, i.jsx)(a.eu, { src: s, size: d._3.SIZE_16, "aria-hidden": !0 }),
                    (0, i.jsx)(r.E, { variant: "text-sm/medium", color: "text-default", children: o }),
                ],
            }),
        ],
    });
}
function g(e) {
    let { testimonials: t } = e,
        [[n, s], a] = l.useState([0, "right"]),
        d = l.useCallback(() => {
            a((e) => {
                let [n] = e;
                return 0 === n ? [t.length - 1, "left"] : [n - 1, "left"];
            });
        }, [a, t.length]),
        N = l.useCallback(() => {
            a((e) => {
                let [n] = e;
                return [(n + 1) % t.length, "right"];
            });
        }, [a, t.length]),
        E = t[n],
        g = l.useCallback((e, t, n, l) => (0, i.jsx)(A, { item: t, state: n, cleanup: l, direction: s }, e), [s]);
    return (0, i.jsxs)("div", {
        className: I.FD,
        children: [
            (0, i.jsx)("div", {
                className: I.nI,
                children: (0, i.jsx)(o.F, { items: [E], renderItem: g, getItemKey: (e) => e.adminTitle }),
            }),
            (0, i.jsx)(r.E, { variant: "text-lg/bold", className: I.wV, children: "“" }),
            (0, i.jsxs)("div", {
                className: I.Jv,
                children: [
                    (0, i.jsx)(c.K, {
                        size: "sm",
                        variant: "secondary",
                        icon: u.r,
                        onClick: d,
                        "aria-label": h.intl.string(h.t["13/7kX"]),
                    }),
                    (0, i.jsx)(c.K, {
                        size: "sm",
                        variant: "secondary",
                        icon: m.E,
                        onClick: N,
                        "aria-label": h.intl.string(h.t.PDTjLN),
                    }),
                ],
            }),
        ],
    });
}
function A(e) {
    let { item: t, state: n, cleanup: l, direction: r } = e,
        [a] = (0, N.z)(
            () => {
                switch (n) {
                    case o.wL.ENTERED:
                        return {
                            from: { transform: "right" === r ? "translateX(150%)" : "translate(-150%)" },
                            to: { transform: "translateX(0%)" },
                        };
                    case o.wL.YEETED:
                        return {
                            from: { transform: "translateX(0%)" },
                            to: { transform: "right" === r ? "translateX(-150%)" : "translate(150%)" },
                            onRest: l,
                        };
                    default:
                        return {};
                }
            },
            "respect-motion-settings",
            [n],
        );
    return (0, i.jsx)(s.animated.div, { style: a, children: (0, i.jsx)(E, { className: I.EV, testimonial: t }) });
}
