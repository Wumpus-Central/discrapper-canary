n.d(t, { A: () => b }), n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(158954),
    o = n(311907),
    c = n(902592),
    d = n(996958),
    u = n(869146),
    m = n(680108),
    p = n(439895),
    h = n(652215),
    f = n(569885);
let x = (e) => {
        let { setTab: t } = e,
            n = (0, o.bG)([u.A], () => u.A.getWindowOpen(h.MLl.DEVTOOLS_POPOUT));
        return (0, a.jsxs)("div", {
            className: f.Qs,
            children: [
                (0, a.jsx)(s.DUT, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, a.jsx)("div", {
                        className: r()(f.vK, f.Dg),
                        children: (0, a.jsx)(s.EYj, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, a.jsx)(s.DUT, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, a.jsx)("div", {
                        className: r()(f.vK, f.st),
                        children: (0, a.jsx)(s.EYj, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, a.jsx)(s.DUT, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, a.jsx)("div", {
                        className: r()(f.vK, f.IP),
                        children: (0, a.jsx)(s.EYj, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Products",
                        }),
                    }),
                }),
                !n &&
                    (0, a.jsx)("div", {
                        style: { marginTop: 16 },
                        children: (0, a.jsx)(s.wx6, {
                            type: "warning",
                            children: (0, a.jsxs)(s.BJc, {
                                gap: 8,
                                children: [
                                    (0, a.jsx)(s.EYj, {
                                        variant: "text-md/semibold",
                                        children: "Not enough space?",
                                    }),
                                    (0, a.jsx)(s.EYj, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, a.jsx)(s.$nd, {
                                        size: "sm",
                                        icon: s.tfB,
                                        variant: "secondary",
                                        onClick: c.openDevToolsPopout,
                                        text: "Popout DevTools",
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        });
    },
    b = () => {
        let [e, t] = l.useState(0);
        return (0, a.jsxs)(s.IpV, {
            className: f.iE,
            children: [
                (0, a.jsxs)("div", {
                    className: f.C$,
                    children: [
                        (0, a.jsx)(s.DZT, {
                            variant: "heading-xxl/medium",
                            children: "Collectibles DevTools",
                        }),
                        0 !== e &&
                            (0, a.jsx)(s.$nd, {
                                variant: "primary",
                                onClick: () => t(0),
                                text: "Back",
                            }),
                    ],
                }),
                (() => {
                    switch (e) {
                        case 1:
                            return (0, a.jsx)(m.A, {});
                        case 2:
                            return (0, a.jsx)(d.A, {});
                        case 3:
                            return (0, a.jsx)(p.A, {});
                        default:
                            return (0, a.jsx)(x, { setTab: t });
                    }
                })(),
            ],
        });
    };
