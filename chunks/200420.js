n.d(t, { A: () => B });
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
    g = n(688810),
    h = n(604913),
    E = n(287809),
    f = n(129230),
    p = n(857512),
    x = n(993408),
    C = n(212407),
    A = n(815280),
    v = n(665414),
    b = n(821609),
    L = n(313217),
    y = n(172218),
    _ = n(140735),
    I = n(598047),
    S = n(396583),
    k = n(568631),
    j = n(792996),
    N = n(868102);
let O = r.memo((e) => {
        let { endsAt: t, onCountdownEnd: n } = e,
            s = (0, I.A)(),
            [a, i] = r.useState(!0),
            [, o] = r.useReducer((e) => e + 1, 0),
            u = r.useRef(!1),
            c = r.useCallback((e) => {
                i(e);
            }, []),
            m = (0, y.K)(c, 0),
            g = (0, k.Ty)(t),
            h = (0, k.lF)(g);
        return (
            (0, S.A)(o, h || !(s && a) ? null : 1e3),
            r.useEffect(() => {
                h && !u.current && ((u.current = !0), n());
            }, [h, n]),
            (0, l.jsxs)("div", {
                ref: m,
                className: N.qW,
                role: "timer",
                children: [
                    (0, k.z0)(g).map((e, t) =>
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
                    (0, l.jsx)(_.A, { children: j.intl.format(j.t.j6IyVe, g) }),
                ],
            })
        );
    }),
    T = r.memo((e) => {
        let {
                collectionName: t,
                collectionPromotion: n,
                forceHideCountdownCta: r = !1,
                onShopSale: s,
                onCountdownEnd: o,
            } = e,
            { text: u, ctaText: c } = (function (e, t, n) {
                switch (e.type) {
                    case h.hE.COLLECTION_SALE:
                        return {
                            text: j.intl.format(n ? j.t["97Qza2"] : j.t.ibsiKg, {
                                percent: e.percentOff,
                                collectionName: t,
                            }),
                            ctaText: j.intl.string(j.t["5GoOlx"]),
                        };
                    case h.hE.COLLECTION_SEQUENCED_OFFER:
                        return { text: j.intl.string(j.t["4AE45b"]), ctaText: j.intl.string(j.t.vEZeL1) };
                    default:
                        return { text: null, ctaText: j.intl.string(j.t["5GoOlx"]) };
                }
            })(n, t, (0, L.s)("collection_promotion_countdown_banner"));
        return (0, l.jsxs)("div", {
            className: a()(
                N.kL,
                (function (e) {
                    switch (e) {
                        case v.i.LIGHT:
                            return N.BB;
                        case v.i.DARK:
                            return N.XT;
                        case v.i.GRADIENT_V1:
                            return N.eg;
                        case v.i.TRANSPARENT:
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
                        children: (0, l.jsx)(b.$, { variant: "overlay-primary", fullWidth: !0, onClick: s, text: c }),
                    }),
            ],
        });
    });
var R = n(60140),
    D = n(758836),
    P = n(652215),
    M = n(105499);
let B = (e) => {
    let {
            heroBlock: t,
            collectionPromotion: n,
            handleTransition: s,
            tab: v,
            onPromotionEnd: b,
            hideCards: L = !1,
            forceHideCountdownCta: y = !1,
        } = e,
        _ = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        I = (0, p.uM)(),
        { analyticsLocations: S } = (0, g.Ay)(m.A.COLLECTIBLES_SHOP_HERO),
        {
            bannerDisplayConfig: k,
            logoDisplayConfig: N,
            heroLogo: O,
            heroBannerStatic: B,
            heroBannerAnimated: w,
        } = (0, C.Kk)(t),
        H = k?.responsive ?? !1,
        U = k?.backgroundStyle,
        { sourceButton: G, ctaName: F } = (function (e) {
            switch (e.type) {
                case h.hE.COLLECTION_SALE:
                    return { sourceButton: "shop collection sale hero", ctaName: "shop collection sale hero button" };
                case h.hE.COLLECTION_SEQUENCED_OFFER:
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
                f.default.track(P.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: I?.sessionId,
                    sku_id: t.categorySkuId,
                    page_type: v,
                    page_section: I?.pageSection,
                    page_category: I?.pageCategory,
                    cta_name: F,
                }));
        }, [s, G, t.categorySkuId, I, v, F]);
    if (null == _) return null;
    let V = n.countdownPosition === i.l.LEFT,
        K = (0, l.jsx)(T, {
            collectionName: t.name,
            collectionPromotion: n,
            forceHideCountdownCta: y,
            onShopSale: $,
            onCountdownEnd: b,
        });
    return (0, l.jsx)(g.f5, {
        value: S,
        children: (0, l.jsxs)("div", {
            className: M.os,
            children: [
                (0, l.jsx)("div", {
                    className: a()(M.vK, { [M.no]: H }),
                    style: null != U ? { background: U } : void 0,
                    children: null != B && (0, l.jsx)(A.A, { bannerStatic: B, bannerAnimated: w, isResponsive: H }),
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
                                                    type: { text: j.intl.string(j.t["h/uBCR"]) },
                                                    variant: "inverted",
                                                }),
                                            }),
                                        (0, l.jsxs)("div", {
                                            className: M.Wq,
                                            children: [
                                                null != O &&
                                                    (0, l.jsx)("img", {
                                                        className: M.rm,
                                                        draggable: !1,
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
                            (0, l.jsx)(R.A, {
                                heroBlockRecord: t,
                                tab: v,
                                isBlockLoading: !1,
                                layout: v === D.G2.HOME ? "hscroll" : "feed",
                                onViewAll: $,
                            }),
                    ],
                }),
            ],
        }),
    });
};
