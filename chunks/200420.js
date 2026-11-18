n.d(t, { A: () => w });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(619953),
    o = n(855986),
    u = n(805251),
    c = n(534514),
    d = n(834730),
    m = n(793574),
    h = n(688810),
    g = n(604913),
    E = n(287809),
    p = n(129230),
    f = n(857512),
    x = n(993408),
    A = n(212407),
    v = n(815280),
    C = n(665414),
    y = n(821609),
    L = n(313217),
    _ = n(172218),
    b = n(140735),
    S = n(598047),
    I = n(396583),
    j = n(568631),
    k = n(792996),
    N = n(868102);
let O = r.memo((e) => {
        let { endsAt: t, onCountdownEnd: n } = e,
            s = (0, S.A)(),
            [a, i] = r.useState(!0),
            [, o] = r.useReducer((e) => e + 1, 0),
            u = r.useRef(!1),
            c = r.useCallback((e) => {
                i(e);
            }, []),
            m = (0, _.K)(c, 0),
            h = (0, j.Ty)(t),
            g = (0, j.lF)(h);
        return (
            (0, I.A)(o, g || !(s && a) ? null : 1e3),
            r.useEffect(() => {
                g && !u.current && ((u.current = !0), n());
            }, [g, n]),
            (0, l.jsxs)("div", {
                ref: m,
                className: N.qW,
                role: "timer",
                children: [
                    (0, j.z0)(h).map((e, t) =>
                        (0, l.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    t > 0 && (0, l.jsx)("div", { className: N.kx, "aria-hidden": !0 }),
                                    (0, l.jsx)("div", {
                                        className: N.t8,
                                        "aria-hidden": !0,
                                        children: e
                                            .split("")
                                            .map((e, t) =>
                                                (0, l.jsx)(
                                                    d.E,
                                                    {
                                                        tag: "span",
                                                        variant: "heading-xl/semibold",
                                                        color: "currentColor",
                                                        className: N.m3,
                                                        children: e,
                                                    },
                                                    t,
                                                ),
                                            ),
                                    }),
                                ],
                            },
                            t,
                        ),
                    ),
                    (0, l.jsx)(b.A, { children: k.intl.format(k.t.j6IyVe, h) }),
                ],
            })
        );
    }),
    R = r.memo((e) => {
        let {
                collectionName: t,
                collectionPromotion: n,
                forceHideCountdownCta: r = !1,
                onShopSale: s,
                onCountdownEnd: o,
            } = e,
            { text: u, ctaText: c } = (function (e, t, n) {
                switch (e.type) {
                    case g.hE.COLLECTION_SALE:
                        return {
                            text: k.intl.format(n ? k.t["97Qza2"] : k.t.ibsiKg, {
                                percent: e.percentOff,
                                collectionName: t,
                            }),
                            ctaText: k.intl.string(k.t["5GoOlx"]),
                        };
                    case g.hE.COLLECTION_SEQUENCED_OFFER:
                        return { text: k.intl.string(k.t["4AE45b"]), ctaText: k.intl.string(k.t.vEZeL1) };
                    default:
                        return { text: null, ctaText: k.intl.string(k.t["5GoOlx"]) };
                }
            })(n, t, (0, L.s)("collection_promotion_countdown_banner"));
        return (0, l.jsxs)("div", {
            className: a()(
                N.kL,
                (function (e) {
                    switch (e) {
                        case C.i.LIGHT:
                            return N.BB;
                        case C.i.DARK:
                            return N.XT;
                        case C.i.GRADIENT_V1:
                            return N.eg;
                        case C.i.TRANSPARENT:
                            return N.JO;
                        default:
                            return N.XT;
                    }
                })(n.countdownStyle),
                { [N.CT]: n.countdownPosition === i.l.LEFT },
            ),
            children: [
                (0, l.jsx)(O, { endsAt: n.endsAt, onCountdownEnd: o }, n.endsAt.getTime()),
                (0, l.jsx)(d.E, { variant: "body-md/semibold", color: "currentColor", className: N.fn, children: u }),
                n.showCountdownCta &&
                    !r &&
                    (0, l.jsx)("div", {
                        className: N.lO,
                        children: (0, l.jsx)(y.$, { variant: "overlay-primary", fullWidth: !0, onClick: s, text: c }),
                    }),
            ],
        });
    });
var T = n(60140),
    D = n(758836),
    P = n(652215),
    M = n(105499);
let w = (e) => {
    let {
            heroBlock: t,
            collectionPromotion: n,
            handleTransition: s,
            tab: C,
            onPromotionEnd: y,
            hideCards: L = !1,
            forceHideCountdownCta: _ = !1,
        } = e,
        b = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        S = (0, f.uM)(),
        { analyticsLocations: I } = (0, h.Ay)(m.A.COLLECTIBLES_SHOP_HERO),
        {
            bannerDisplayConfig: j,
            logoDisplayConfig: N,
            heroLogo: O,
            heroBannerStatic: w,
            heroBannerAnimated: B,
        } = (0, A.Kk)(t),
        H = j?.responsive ?? !1,
        U = j?.backgroundStyle,
        { sourceButton: G, ctaName: F } = (function (e) {
            switch (e.type) {
                case g.hE.COLLECTION_SALE:
                    return { sourceButton: "shop collection sale hero", ctaName: "shop collection sale hero button" };
                case g.hE.COLLECTION_SEQUENCED_OFFER:
                    return {
                        sourceButton: "shop collection sequenced offer hero",
                        ctaName: "shop collection sequenced offer hero button",
                    };
                default:
                    return { sourceButton: "shop collection sale hero", ctaName: "shop collection sale hero button" };
            }
        })(n),
        $ = r.useCallback(() => {
            (s({ sourceButton: G, categorySkuId: t.categorySkuId, isInternalShopDeeplink: !0 }),
                p.default.track(P.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: S?.sessionId,
                    sku_id: t.categorySkuId,
                    page_type: C,
                    page_section: S?.pageSection,
                    page_category: S?.pageCategory,
                    cta_name: F,
                }));
        }, [s, G, t.categorySkuId, S, C, F]);
    if (null == b) return null;
    let V = n.countdownPosition === i.l.LEFT,
        K = (0, l.jsx)(R, {
            collectionName: t.name,
            collectionPromotion: n,
            forceHideCountdownCta: _,
            onShopSale: $,
            onCountdownEnd: y,
        });
    return (0, l.jsx)(h.f5, {
        value: I,
        children: (0, l.jsxs)("div", {
            className: M.os,
            children: [
                (0, l.jsx)("div", {
                    className: a()(M.vK, { [M.no]: H }),
                    style: null != U ? { background: U } : void 0,
                    children: null != w && (0, l.jsx)(v.A, { bannerStatic: w, bannerAnimated: B, isResponsive: H }),
                }),
                (0, l.jsxs)("div", {
                    className: M.xX,
                    children: [
                        (0, l.jsxs)("div", {
                            className: a()(M.uZ, M.bC, { [M.no]: H }),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: M.Hw,
                                    children: [
                                        (0, x.HF)(t.unpublishedAt) &&
                                            (0, l.jsx)("div", {
                                                className: M.v0,
                                                children: (0, l.jsx)(u.E, {
                                                    type: { text: k.intl.string(k.t["h/uBCR"]) },
                                                    variant: "inverted",
                                                }),
                                            }),
                                        (0, l.jsxs)("div", {
                                            className: M.Wq,
                                            children: [
                                                null != O &&
                                                    (0, l.jsx)("img", {
                                                        className: M.rm,
                                                        src: O,
                                                        alt: t.name,
                                                        style: N?.toDesktopStyles(),
                                                    }),
                                                null != t.title &&
                                                    (0, l.jsx)(c.D, {
                                                        variant: "heading-xxl/semibold",
                                                        color: "text-strong",
                                                        children: t.title,
                                                    }),
                                                null != t.summary &&
                                                    "" !== t.summary &&
                                                    (0, l.jsx)(d.E, {
                                                        variant: "body-md/normal",
                                                        className: M.Tm,
                                                        style: { color: t.bannerTextColor ?? void 0 },
                                                        children: t.summary,
                                                    }),
                                            ],
                                        }),
                                        V && K,
                                    ],
                                }),
                                !V && (0, l.jsx)("div", { className: M.pv, children: K }),
                            ],
                        }),
                        !L &&
                            (0, l.jsx)(T.A, {
                                heroBlockRecord: t,
                                tab: C,
                                isBlockLoading: !1,
                                layout: C === D.G2.HOME ? "hscroll" : "feed",
                                onViewAll: $,
                            }),
                    ],
                }),
            ],
        }),
    });
};
