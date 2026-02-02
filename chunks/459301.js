i.d(e, {
    m: () => X,
});
var n = i(627968),
    l = i(64700),
    s = i(517846),
    r = i(158954),
    u = i(732955),
    a = i(462887),
    o = i(890138),
    d = i(736653),
    T = i(793574),
    A = i(688810),
    S = i(857586),
    c = i(757036),
    E = i(602450),
    g = i(144605),
    _ = i(927766),
    I = i(557571),
    O = i(18640),
    N = i(236698),
    C = i(976860),
    b = i(392943),
    p = i(954571),
    L = i(12901),
    D = i(715999),
    m = i(934370),
    R = i(450987),
    f = i(623375),
    P = i(652215),
    v = i(788868),
    y = i(985018),
    G = i(895431),
    V = i(458017),
    h = i(120499),
    U = i(684399),
    M = i(446115);
let X = () => {
        let t = (0, a.q)((0, d.Ay)()),
            { analyticsLocations: e } = (0, A.Ay)(T.A.CF_WARP_SETTINGS);
        return (
            (0, l.useEffect)(() => {
                p.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: v.e.PRIVACY_PERK_SETTINGS,
                    location_stack: e,
                });
            }, [e]),
            (0, n.jsxs)("div", {
                className: V.V1,
                children: [
                    (0, n.jsxs)(r.hLv, {
                        color: "pink",
                        children: [
                            (0, n.jsx)("div", {
                                className: V.N1,
                                children: (0, n.jsxs)("div", {
                                    className: V.wx,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: V.QF,
                                            children: [
                                                (0, n.jsx)(b.A, {
                                                    color: t ? "black" : "white",
                                                }),
                                                (0, n.jsx)("div", {
                                                    className: V.zN,
                                                }),
                                                (0, n.jsx)("img", {
                                                    src: t ? U : h,
                                                    alt: "Cloudflare",
                                                    width: 103,
                                                    height: 15,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(g.q, {}),
                                    ],
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: V.hQ,
                                children: [
                                    (0, n.jsx)("img", {
                                        src: M,
                                        width: "100",
                                        alt: "Private browsing perk logo",
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: V.Qs,
                                        children: [(0, n.jsx)(m.F, {}), (0, n.jsx)(D.q, {})],
                                    }),
                                    (0, n.jsx)("div", {
                                        className: V.yP,
                                    }),
                                    (0, n.jsx)("div", {
                                        className: V.OQ,
                                        children: (0, n.jsx)(x, {}),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(f.u, {}),
                ],
            })
        );
    },
    x = () => {
        let { installationStatus: t, isWeb: e, setInstallationStatus: i } = (0, I.lV)(),
            a = (0, c.L)(),
            d = (0, l.useRef)(!1);
        if (
            ((0, l.useEffect)(
                () => () => {
                    d.current ||
                        N.Ay.fireSurveyAction(
                            a ? s.w.WARP_VPN_SETTINGS_BOUNCE_NITRO : s.w.WARP_VPN_SETTINGS_BOUNCE_NON_NITRO,
                        );
                },
                [d, a],
            ),
            e)
        )
            return (0, n.jsx)(_.X, {
                onClick: () => {
                    d.current = !0;
                },
            });
        if (!a)
            return (0, n.jsxs)("div", {
                className: V._u,
                children: [
                    (0, n.jsx)(S.A, {
                        buttonTextOverride: y.intl.string(y.t["8x0jKT"]),
                        subscriptionTier: v.pe.TIER_2,
                        fullWidth: !0,
                        size: "sm",
                        premiumModalAnalyticsLocation: {
                            page: T.A.CF_WARP_SETTINGS,
                        },
                        onClick: () => {
                            d.current = !0;
                        },
                    }),
                    (0, n.jsx)(u.$nd, {
                        variant: "secondary",
                        text: y.intl.string(y.t.ZnqyZ2),
                        size: "sm",
                        onClick: () => {
                            (0, L.default)(), (0, C.pX)(P.BVt.APPLICATION_STORE), (d.current = !0);
                        },
                    }),
                ],
            });
        switch (t) {
            case E.Lk.ERROR:
            case E.Lk.NOT_INSTALLED:
                return (0, n.jsx)(R.y, {
                    onClick: () => (d.current = !0),
                });
            case E.Lk.INSTALLED:
                return (0, n.jsx)(O.X, {});
            case E.Lk.ZERO_TRUST:
                break;
            case E.Lk.EXISTING_INSTALLATION:
                return (0, n.jsx)(u.$nd, {
                    variant: "primary",
                    onClick: () => {
                        (0, o.u)(P.HAw.NITRO_WARP_CTA_CLICKED, {
                            is_enable_warp: !0,
                        }),
                            i(E.Lk.READY_FOR_LICENSE),
                            (d.current = !0);
                    },
                    text: y.intl.string(G.default.J09UWz),
                });
            case E.Lk.INSTALLING:
            case E.Lk.READY_FOR_LICENSE:
            case E.Lk.WAITING_FOR_TERMS:
            case E.Lk.INSTALLING_TIMEOUT:
                return (0, n.jsx)("div", {
                    className: V.u1,
                    children: (0, n.jsx)(r.y$y, {
                        type: r.tVU.SPINNING_CIRCLE,
                    }),
                });
        }
        return null;
    };
