n.d(t, { A: () => v });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(158954),
    o = n(311907),
    d = n(902592),
    c = n(869146),
    u = n(734340),
    m = n(550730),
    h = n(903796),
    x = n(439895),
    p = n(652215),
    g = n(751156);
let f = (e) => {
        let { setTab: t } = e,
            n = (0, o.bG)([c.A], () => c.A.getWindowOpen(p.MLl.DEVTOOLS_POPOUT));
        return (0, a.jsxs)("div", {
            className: g.Qs,
            children: [
                (0, a.jsx)(r.DUT, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, a.jsx)("div", {
                        className: l()(g.vK, g.Dg),
                        children: (0, a.jsx)(r.EYj, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, a.jsx)(r.DUT, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, a.jsx)("div", {
                        className: l()(g.vK, g.st),
                        children: (0, a.jsx)(r.EYj, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, a.jsx)(r.DUT, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, a.jsx)("div", {
                        className: l()(g.vK, g.Dg),
                        children: (0, a.jsx)(r.EYj, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Frames",
                        }),
                    }),
                }),
                (0, a.jsx)(r.DUT, {
                    onClick: () => {
                        t(4);
                    },
                    children: (0, a.jsx)("div", {
                        className: l()(g.vK, g.IP),
                        children: (0, a.jsx)(r.EYj, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Products",
                        }),
                    }),
                }),
                !n &&
                    (0, a.jsx)("div", {
                        style: { marginTop: 16 },
                        children: (0, a.jsx)(r.wx6, {
                            type: "warning",
                            children: (0, a.jsxs)(r.BJc, {
                                gap: 8,
                                children: [
                                    (0, a.jsx)(r.EYj, { variant: "text-md/semibold", children: "Not enough space?" }),
                                    (0, a.jsx)(r.EYj, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, a.jsx)(r.$nd, {
                                        size: "sm",
                                        icon: r.tfB,
                                        variant: "secondary",
                                        onClick: d.openDevToolsPopout,
                                        text: "Popout DevTools",
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        });
    },
    v = () => {
        let [e, t] = i.useState(0);
        return (0, a.jsxs)(r.IpV, {
            className: g.iE,
            children: [
                (0, a.jsxs)("div", {
                    className: g.C$,
                    children: [
                        (0, a.jsx)(r.DZT, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                        0 !== e && (0, a.jsx)(r.$nd, { variant: "primary", onClick: () => t(0), text: "Back" }),
                    ],
                }),
                (() => {
                    switch (e) {
                        case 1:
                            return (0, a.jsx)(m.A, {});
                        case 2:
                            return (0, a.jsx)(u.A, {});
                        case 3:
                            return (0, a.jsx)(h.A, {});
                        case 4:
                            return (0, a.jsx)(x.A, {});
                        default:
                            return (0, a.jsx)(f, { setTab: t });
                    }
                })(),
            ],
        });
    };
