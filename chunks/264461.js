a.d(t, { A: () => k });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(939249),
    o = a(834730),
    d = a(683071),
    c = a(331322),
    u = a(821609),
    m = a(811893),
    h = a(573613),
    p = a(534514),
    x = a(311907),
    g = a(538064),
    v = a(265059),
    b = a(902592),
    _ = a(869146),
    f = a(734340),
    j = a(550730),
    A = a(903796),
    y = a(439895),
    C = a(652215),
    E = a(410724);
let S = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 },
    N = (e) => {
        let { setTab: t } = e,
            a = (0, x.bG)([_.A], () => _.A.getWindowOpen(C.MLl.DEVTOOLS_POPOUT));
        return (0, n.jsxs)("div", {
            className: E.Qs,
            children: [
                (0, n.jsx)(r.D, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, n.jsx)("div", {
                        className: s()(E.vK, E.Dg),
                        children: (0, n.jsx)(o.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, n.jsx)(r.D, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, n.jsx)("div", {
                        className: s()(E.vK, E.st),
                        children: (0, n.jsx)(o.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, n.jsx)(r.D, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, n.jsx)("div", {
                        className: s()(E.vK, E.Dg),
                        children: (0, n.jsx)(o.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Frames",
                        }),
                    }),
                }),
                (0, n.jsx)(r.D, {
                    onClick: () => {
                        t(4);
                    },
                    children: (0, n.jsx)("div", {
                        className: s()(E.vK, E.IP),
                        children: (0, n.jsx)(o.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Products",
                        }),
                    }),
                }),
                !a &&
                    (0, n.jsx)("div", {
                        style: { marginTop: 16 },
                        children: (0, n.jsx)(d.w, {
                            type: "warning",
                            children: (0, n.jsxs)(c.B, {
                                gap: 8,
                                children: [
                                    (0, n.jsx)(o.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                    (0, n.jsx)(o.E, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, n.jsx)(u.$, {
                                        size: "sm",
                                        icon: m.t,
                                        variant: "secondary",
                                        onClick: b.openDevToolsPopout,
                                        text: "Popout DevTools",
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        });
    },
    k = () => {
        let [e, t] = l.useState(() => {
            let e = v.A.lastOpenSubTabId;
            return null != e && e in S ? S[e] : 0;
        });
        return (
            l.useEffect(() => {
                null != v.A.lastOpenSubTabId && (0, g.Jt)({ lastOpenSubTabId: null });
            }, []),
            (0, n.jsxs)(h.Ip, {
                className: E.iE,
                children: [
                    (0, n.jsxs)("div", {
                        className: E.C$,
                        children: [
                            (0, n.jsx)(p.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                            0 !== e && (0, n.jsx)(u.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                        ],
                    }),
                    (() => {
                        switch (e) {
                            case 1:
                                return (0, n.jsx)(j.A, {});
                            case 2:
                                return (0, n.jsx)(f.A, {});
                            case 3:
                                return (0, n.jsx)(A.A, {});
                            case 4:
                                return (0, n.jsx)(y.A, {});
                            default:
                                return (0, n.jsx)(N, { setTab: t });
                        }
                    })(),
                ],
            })
        );
    };
