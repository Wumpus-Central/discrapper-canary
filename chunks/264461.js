n.d(t, { A: () => j });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(158954),
    o = n(311907),
    d = n(538064),
    c = n(265059),
    u = n(902592),
    m = n(869146),
    h = n(734340),
    x = n(550730),
    p = n(903796),
    g = n(439895),
    f = n(652215),
    v = n(410724);
let _ = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 },
    b = (e) => {
        let { setTab: t } = e,
            n = (0, o.bG)([m.A], () => m.A.getWindowOpen(f.MLl.DEVTOOLS_POPOUT));
        return (0, a.jsxs)("div", {
            className: v.Qs,
            children: [
                (0, a.jsx)(r.DUT, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, a.jsx)("div", {
                        className: l()(v.vK, v.Dg),
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
                        className: l()(v.vK, v.st),
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
                        className: l()(v.vK, v.Dg),
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
                        className: l()(v.vK, v.IP),
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
                                        onClick: u.openDevToolsPopout,
                                        text: "Popout DevTools",
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        });
    },
    j = () => {
        let [e, t] = i.useState(() => {
            let e = c.A.lastOpenSubTabId;
            return null != e && e in _ ? _[e] : 0;
        });
        return (
            i.useEffect(() => {
                null != c.A.lastOpenSubTabId && (0, d.Jt)({ lastOpenSubTabId: null });
            }, []),
            (0, a.jsxs)(r.IpV, {
                className: v.iE,
                children: [
                    (0, a.jsxs)("div", {
                        className: v.C$,
                        children: [
                            (0, a.jsx)(r.DZT, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                            0 !== e && (0, a.jsx)(r.$nd, { variant: "primary", onClick: () => t(0), text: "Back" }),
                        ],
                    }),
                    (() => {
                        switch (e) {
                            case 1:
                                return (0, a.jsx)(x.A, {});
                            case 2:
                                return (0, a.jsx)(h.A, {});
                            case 3:
                                return (0, a.jsx)(p.A, {});
                            case 4:
                                return (0, a.jsx)(g.A, {});
                            default:
                                return (0, a.jsx)(b, { setTab: t });
                        }
                    })(),
                ],
            })
        );
    };
