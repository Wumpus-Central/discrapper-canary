n.d(t, { A: () => M });
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
    v = n(212407),
    A = n(815280),
    C = n(665414),
    y = n(821609),
    L = n(172218),
    _ = n(140735),
    b = n(598047),
    S = n(396583),
    I = n(568631),
    j = n(792996),
    k = n(868102);
let N = r.memo((e) => {
        let { endsAt: t, onCountdownEnd: n } = e,
            s = (0, b.A)(),
            [a, i] = r.useState(!0),
            [, o] = r.useReducer((e) => e + 1, 0),
            u = r.useRef(!1),
            c = r.useCallback((e) => {
                i(e);
            }, []),
            m = (0, L.K)(c, 0),
            h = (0, I.Ty)(t),
            g = (0, I.lF)(h);
        return (
            (0, S.A)(o, g || !(s && a) ? null : 1e3),
            r.useEffect(() => {
                g && !u.current && ((u.current = !0), n());
            }, [g, n]),
            (0, l.jsxs)("div", {
                ref: m,
                className: k.qW,
                role: "timer",
                children: [
                    (0, I.z0)(h).map((e, t) =>
                        (0, l.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    t > 0 && (0, l.jsx)("div", { className: k.kx, "aria-hidden": !0 }),
                                    (0, l.jsx)("div", {
                                        className: k.t8,
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
                                                        className: k.m3,
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
                    (0, l.jsx)(_.A, { children: j.intl.format(j.t.j6IyVe, h) }),
                ],
            })
        );
    }),
    O = r.memo((e) => {
        let {
                collectionName: t,
                collectionPromotion: n,
                forceHideCountdownCta: r = !1,
                onShopSale: s,
                onCountdownEnd: o,
            } = e,
            { text: u, ctaText: c } = (function (e, t) {
                switch (e.type) {
                    case g.hE.COLLECTION_SALE:
                        return {
                            text: j.intl.format(j.t["97Qza2"], { percent: e.percentOff, collectionName: t }),
                            ctaText: j.intl.string(j.t["5GoOlx"]),
                        };
                    case g.hE.COLLECTION_SEQUENCED_OFFER:
                        return { text: j.intl.string(j.t["4AE45b"]), ctaText: j.intl.string(j.t.vEZeL1) };
                    default:
                        return { text: null, ctaText: j.intl.string(j.t["5GoOlx"]) };
                }
            })(n, t);
        return (0, l.jsxs)("div", {
            className: a()(
                k.kL,
                (function (e) {
                    switch (e) {
                        case C.i.LIGHT:
                            return k.BB;
                        case C.i.DARK:
                            return k.XT;
                        case C.i.GRADIENT_V1:
                            return k.eg;
                        case C.i.TRANSPARENT:
                            return k.JO;
                        default:
                            return k.XT;
                    }
                })(n.countdownStyle),
                { [k.CT]: n.countdownPosition === i.l.LEFT },
            ),
            children: [
                (0, l.jsx)(N, { endsAt: n.endsAt, onCountdownEnd: o }, n.endsAt.getTime()),
                (0, l.jsx)(d.E, { variant: "body-md/semibold", color: "currentColor", className: k.fn, children: u }),
                n.showCountdownCta &&
                    !r &&
                    (0, l.jsx)("div", {
                        className: k.lO,
                        children: (0, l.jsx)(y.$, { variant: "overlay-primary", fullWidth: !0, onClick: s, text: c }),
                    }),
            ],
        });
    });
var R = n(60140),
    T = n(758836),
    D = n(652215),
    P = n(105499);
let M = (e) => {
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
            bannerDisplayConfig: k,
            logoDisplayConfig: N,
            heroLogo: M,
            heroBannerStatic: w,
            heroBannerAnimated: B,
        } = (0, v.Kk)(t),
        H = k?.responsive ?? !1,
        U = k?.backgroundStyle,
        { sourceButton: G, ctaName: $ } = (function (e) {
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
        F = r.useCallback(() => {
            (s({ sourceButton: G, categorySkuId: t.categorySkuId, isInternalShopDeeplink: !0 }),
                p.default.track(D.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: S?.sessionId,
                    sku_id: t.categorySkuId,
                    page_type: C,
                    page_section: S?.pageSection,
                    page_category: S?.pageCategory,
                    cta_name: $,
                }));
        }, [s, G, t.categorySkuId, S, C, $]);
    if (null == b) return null;
    let V = n.countdownPosition === i.l.LEFT,
        K = (0, l.jsx)(O, {
            collectionName: t.name,
            collectionPromotion: n,
            forceHideCountdownCta: _,
            onShopSale: F,
            onCountdownEnd: y,
        });
    return (0, l.jsx)(h.f5, {
        value: I,
        children: (0, l.jsxs)("div", {
            className: P.os,
            children: [
                (0, l.jsx)("div", {
                    className: a()(P.vK, { [P.no]: H }),
                    style: null != U ? { background: U } : void 0,
                    children: null != w && (0, l.jsx)(A.A, { bannerStatic: w, bannerAnimated: B, isResponsive: H }),
                }),
                (0, l.jsxs)("div", {
                    className: P.xX,
                    children: [
                        (0, l.jsxs)("div", {
                            className: a()(P.uZ, P.bC, { [P.no]: H }),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: P.Hw,
                                    children: [
                                        (0, x.HF)(t.unpublishedAt) &&
                                            (0, l.jsx)("div", {
                                                className: P.v0,
                                                children: (0, l.jsx)(u.E, {
                                                    type: { text: j.intl.string(j.t["h/uBCR"]) },
                                                    variant: "inverted",
                                                }),
                                            }),
                                        (0, l.jsxs)("div", {
                                            className: P.Wq,
                                            children: [
                                                null != M &&
                                                    (0, l.jsx)("img", {
                                                        className: P.rm,
                                                        src: M,
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
                                                        className: P.Tm,
                                                        style: { color: t.bannerTextColor ?? void 0 },
                                                        children: t.summary,
                                                    }),
                                            ],
                                        }),
                                        V && K,
                                    ],
                                }),
                                !V && (0, l.jsx)("div", { className: P.pv, children: K }),
                            ],
                        }),
                        !L &&
                            (0, l.jsx)(R.A, {
                                heroBlockRecord: t,
                                tab: C,
                                isBlockLoading: !1,
                                layout: C === T.G2.HOME ? "hscroll" : "feed",
                                onViewAll: F,
                            }),
                    ],
                }),
            ],
        }),
    });
};
