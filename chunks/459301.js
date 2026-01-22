i.d(e, { m: () => Y });
var n = i(627968),
    l = i(64700),
    s = i(517846),
    r = i(158954),
    u = i(192308),
    a = i(732955),
    o = i(462887),
    T = i(890138),
    A = i(736653),
    S = i(793574),
    E = i(688810),
    d = i(857586),
    _ = i(757036),
    I = i(602450),
    g = i(144605),
    c = i(927766),
    N = i(557571),
    O = i(18640),
    C = i(236698),
    L = i(976860),
    R = i(392943),
    b = i(954571),
    D = i(840065),
    P = i(715999),
    p = i(934370),
    m = i(450987),
    G = i(623375),
    V = i(652215),
    y = i(788868),
    v = i(985018),
    f = i(895431),
    h = i(458017),
    M = i(120499),
    X = i(684399),
    U = i(446115);
let Y = () => {
        let t = (0, o.q)((0, A.Ay)()),
            { analyticsLocations: e } = (0, E.Ay)(S.A.CF_WARP_SETTINGS);
        return (
            (0, l.useEffect)(() => {
                b.default.track(V.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: y.e.PRIVACY_PERK_SETTINGS,
                    location_stack: e,
                });
            }, [e]),
            (0, n.jsxs)("div", {
                className: h.V1,
                children: [
                    (0, n.jsxs)(r.hLv, {
                        color: "pink",
                        children: [
                            (0, n.jsx)("div", {
                                className: h.N1,
                                children: (0, n.jsxs)("div", {
                                    className: h.wx,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: h.QF,
                                            children: [
                                                (0, n.jsx)(R.A, { color: t ? "black" : "white" }),
                                                (0, n.jsx)("div", { className: h.zN }),
                                                (0, n.jsx)("img", {
                                                    src: t ? X : M,
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
                                className: h.hQ,
                                children: [
                                    (0, n.jsx)("img", {
                                        src: U,
                                        width: "100",
                                        alt: "Private browsing perk logo",
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: h.Qs,
                                        children: [(0, n.jsx)(p.F, {}), (0, n.jsx)(P.q, {})],
                                    }),
                                    (0, n.jsx)("div", { className: h.yP }),
                                    (0, n.jsx)("div", {
                                        className: h.OQ,
                                        children: (0, n.jsx)(k, {}),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(G.u, {}),
                ],
            })
        );
    },
    k = () => {
        let { installationStatus: t, isWeb: e, setInstallationStatus: i } = (0, N.lV)(),
            o = (0, _.L)(),
            A = (0, l.useRef)(!1);
        if (
            ((0, l.useEffect)(
                () => () => {
                    A.current ||
                        C.Ay.fireSurveyAction(
                            o ? s.w.WARP_VPN_SETTINGS_BOUNCE_NITRO : s.w.WARP_VPN_SETTINGS_BOUNCE_NON_NITRO,
                        );
                },
                [A, o],
            ),
            e)
        )
            return (0, n.jsx)(c.X, {
                onClick: () => {
                    A.current = !0;
                },
            });
        if (!o)
            return (0, n.jsxs)("div", {
                className: h._u,
                children: [
                    (0, n.jsx)(d.A, {
                        buttonTextOverride: v.intl.string(v.t["8x0jKT"]),
                        subscriptionTier: y.pe.TIER_2,
                        fullWidth: !0,
                        size: "sm",
                        premiumModalAnalyticsLocation: { page: S.A.CF_WARP_SETTINGS },
                        onClick: () => {
                            A.current = !0;
                        },
                    }),
                    (0, n.jsx)(a.$nd, {
                        variant: "secondary",
                        text: v.intl.string(v.t.ZnqyZ2),
                        size: "sm",
                        onClick: () => {
                            (0, u.closeModal)(D.USER_SETTINGS_MODAL_KEY),
                                (0, L.pX)(V.BVt.APPLICATION_STORE),
                                (A.current = !0);
                        },
                    }),
                ],
            });
        switch (t) {
            case I.Lk.ERROR:
            case I.Lk.NOT_INSTALLED:
                return (0, n.jsx)(m.y, { onClick: () => (A.current = !0) });
            case I.Lk.INSTALLED:
                return (0, n.jsx)(O.X, {});
            case I.Lk.ZERO_TRUST:
                break;
            case I.Lk.EXISTING_INSTALLATION:
                return (0, n.jsx)(a.$nd, {
                    variant: "primary",
                    onClick: () => {
                        (0, T.u)(V.HAw.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !0 }),
                            i(I.Lk.READY_FOR_LICENSE),
                            (A.current = !0);
                    },
                    text: v.intl.string(f.default.J09UWz),
                });
            case I.Lk.INSTALLING:
            case I.Lk.READY_FOR_LICENSE:
            case I.Lk.WAITING_FOR_TERMS:
            case I.Lk.INSTALLING_TIMEOUT:
                return (0, n.jsx)("div", {
                    className: h.u1,
                    children: (0, n.jsx)(r.y$y, { type: r.tVU.SPINNING_CIRCLE }),
                });
        }
        return null;
    };
