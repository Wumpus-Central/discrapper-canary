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
    p = n(129230),
    f = n(857512),
    x = n(993408),
    C = n(212407),
    A = n(815280),
    v = n(665414),
    b = n(821609),
    L = n(313217),
    _ = n(172218),
    y = n(140735),
    I = n(598047),
    S = n(396583),
    N = n(568631),
    k = n(792996),
    j = n(868102);
let O = r.memo((e) => {
        let { endsAt: t, onCountdownEnd: n } = e,
            s = (0, I.A)(),
            [a, i] = r.useState(!0),
            [, o] = r.useReducer((e) => e + 1, 0),
            u = r.useRef(!1),
            c = r.useCallback((e) => {
                i(e);
            }, []),
            m = (0, _.K)(c, 0),
            g = (0, N.Ty)(t),
            h = (0, N.lF)(g);
        return (
            (0, S.A)(o, h || !(s && a) ? null : 1e3),
            r.useEffect(() => {
                h && !u.current && ((u.current = !0), n());
            }, [h, n]),
            (0, l.jsxs)("div", {
                ref: m,
                className: j.qW,
                role: "timer",
                children: [
                    (0, N.z0)(g).map((e, t) =>
                        (0, l.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    t > 0 && (0, l.jsx)("div", { className: j.kx, "aria-hidden": !0 }),
                                    (0, l.jsx)("div", {
                                        className: j.t8,
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
                                                        className: j.m3,
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
                    (0, l.jsx)(y.A, { children: k.intl.format(k.t.j6IyVe, g) }),
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
                            text: k.intl.format(n ? k.t["97Qza2"] : k.t.ibsiKg, {
                                percent: e.percentOff,
                                collectionName: t,
                            }),
                            ctaText: k.intl.string(k.t["5GoOlx"]),
                        };
                    case h.hE.COLLECTION_SEQUENCED_OFFER:
                        return { text: k.intl.string(k.t["4AE45b"]), ctaText: k.intl.string(k.t.vEZeL1) };
                    default:
                        return { text: null, ctaText: k.intl.string(k.t["5GoOlx"]) };
                }
            })(n, t, (0, L.s)("collection_promotion_countdown_banner"));
        return (0, l.jsxs)("div", {
            className: a()(
                j.kL,
                (function (e) {
                    switch (e) {
                        case v.i.LIGHT:
                            return j.BB;
                        case v.i.DARK:
                            return j.XT;
                        case v.i.GRADIENT_V1:
                            return j.eg;
                        case v.i.TRANSPARENT:
                            return j.JO;
                        default:
                            return j.XT;
                    }
                })(n.countdownStyle),
                { [j.CT]: n.countdownPosition === i.l.LEFT },
            ),
            children: [
                (0, l.jsx)(O, { endsAt: n.endsAt, onCountdownEnd: o }, n.endsAt.getTime()),
                (0, l.jsx)(d.E, { variant: "body-md/semibold", color: "currentColor", className: j.fn, children: u }),
                n.showCountdownCta &&
                    !r &&
                    (0, l.jsx)("div", {
                        className: j.lO,
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
            forceHideCountdownCta: _ = !1,
        } = e,
        y = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        I = (0, f.uM)(),
        { analyticsLocations: S } = (0, g.Ay)(m.A.COLLECTIBLES_SHOP_HERO),
        {
            bannerDisplayConfig: N,
            logoDisplayConfig: j,
            heroLogo: O,
            heroBannerStatic: B,
            heroBannerAnimated: w,
        } = (0, C.Kk)(t),
        H = N?.responsive ?? !1,
        U = N?.backgroundStyle,
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
                p.default.track(P.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: I?.sessionId,
                    sku_id: t.categorySkuId,
                    page_type: v,
                    page_section: I?.pageSection,
                    page_category: I?.pageCategory,
                    cta_name: F,
                }));
        }, [s, G, t.categorySkuId, I, v, F]);
    if (null == y) return null;
    let V = n.countdownPosition === i.l.LEFT,
        K = (0, l.jsx)(T, {
            collectionName: t.name,
            collectionPromotion: n,
            forceHideCountdownCta: _,
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
                            className: a()(M.uZ, M.bC, {
                                [M.no]: H,
                                [M.BI]: v === D.G2.COLLECTION_INDEX && n.type === h.hE.COLLECTION_SEQUENCED_OFFER,
                            }),
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
                                                        draggable: !1,
                                                        src: O,
                                                        alt: t.name,
                                                        style: j?.toDesktopStyles(),
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
