i.d(e, { m: () => X });
var n = i(627968),
    l = i(64700),
    s = i(517846),
    r = i(158954),
    a = i(732955),
    u = i(462887),
    o = i(890138),
    d = i(736653),
    A = i(793574),
    T = i(688810),
    S = i(857586),
    E = i(757036),
    g = i(602450),
    _ = i(144605),
    c = i(927766),
    I = i(557571),
    C = i(18640),
    N = i(236698),
    O = i(976860),
    L = i(392943),
    b = i(954571),
    D = i(12901),
    R = i(715999),
    m = i(934370),
    p = i(450987),
    y = i(623375),
    P = i(652215),
    v = i(788868),
    G = i(985018),
    f = i(895431),
    V = i(458017),
    h = i(120499),
    U = i(684399),
    M = i(446115);
let X = () => {
        let t = (0, u.q)((0, d.Ay)()),
            { analyticsLocations: e } = (0, T.Ay)(A.A.CF_WARP_SETTINGS);
        return (
            (0, l.useEffect)(() => {
                b.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, { type: v.e.PRIVACY_PERK_SETTINGS, location_stack: e });
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
                                                (0, n.jsx)(L.A, { color: t ? "black" : "white" }),
                                                (0, n.jsx)("div", { className: V.zN }),
                                                (0, n.jsx)("img", {
                                                    src: t ? U : h,
                                                    alt: "Cloudflare",
                                                    width: 103,
                                                    height: 15,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(_.q, {}),
                                    ],
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: V.hQ,
                                children: [
                                    (0, n.jsx)("img", { src: M, width: "100", alt: "Private browsing perk logo" }),
                                    (0, n.jsxs)("div", {
                                        className: V.Qs,
                                        children: [(0, n.jsx)(m.F, {}), (0, n.jsx)(R.q, {})],
                                    }),
                                    (0, n.jsx)("div", { className: V.yP }),
                                    (0, n.jsx)("div", { className: V.OQ, children: (0, n.jsx)(x, {}) }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(y.u, {}),
                ],
            })
        );
    },
    x = () => {
        let { installationStatus: t, isWeb: e, setInstallationStatus: i } = (0, I.lV)(),
            u = (0, E.L)(),
            d = (0, l.useRef)(!1);
        if (
            ((0, l.useEffect)(
                () => () => {
                    d.current ||
                        N.Ay.fireSurveyAction(
                            u ? s.w.WARP_VPN_SETTINGS_BOUNCE_NITRO : s.w.WARP_VPN_SETTINGS_BOUNCE_NON_NITRO,
                        );
                },
                [d, u],
            ),
            e)
        )
            return (0, n.jsx)(c.X, {
                onClick: () => {
                    d.current = !0;
                },
            });
        if (!u)
            return (0, n.jsxs)("div", {
                className: V._u,
                children: [
                    (0, n.jsx)(S.A, {
                        buttonTextOverride: G.intl.string(G.t["8x0jKT"]),
                        subscriptionTier: v.pe.TIER_2,
                        fullWidth: !0,
                        size: "sm",
                        premiumModalAnalyticsLocation: { page: A.A.CF_WARP_SETTINGS },
                        onClick: () => {
                            d.current = !0;
                        },
                    }),
                    (0, n.jsx)(a.$nd, {
                        variant: "secondary",
                        text: G.intl.string(G.t.ZnqyZ2),
                        size: "sm",
                        onClick: () => {
                            (0, D.default)(), (0, O.pX)(P.BVt.APPLICATION_STORE), (d.current = !0);
                        },
                    }),
                ],
            });
        switch (t) {
            case g.Lk.ERROR:
            case g.Lk.NOT_INSTALLED:
                return (0, n.jsx)(p.y, { onClick: () => (d.current = !0) });
            case g.Lk.INSTALLED:
                return (0, n.jsx)(C.X, {});
            case g.Lk.ZERO_TRUST:
                break;
            case g.Lk.EXISTING_INSTALLATION:
                return (0, n.jsx)(a.$nd, {
                    variant: "primary",
                    onClick: () => {
                        (0, o.u)(P.HAw.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !0 }),
                            i(g.Lk.READY_FOR_LICENSE),
                            (d.current = !0);
                    },
                    text: G.intl.string(f.default.J09UWz),
                });
            case g.Lk.INSTALLING:
            case g.Lk.READY_FOR_LICENSE:
            case g.Lk.WAITING_FOR_TERMS:
            case g.Lk.INSTALLING_TIMEOUT:
                return (0, n.jsx)("div", {
                    className: V.u1,
                    children: (0, n.jsx)(r.y$y, { type: r.tVU.SPINNING_CIRCLE }),
                });
        }
        return null;
    };
