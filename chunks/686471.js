n.d(t, { A: () => Y });
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
    f = n(129230),
    p = n(857512),
    x = n(993408),
    C = n(212407),
    v = n(775602),
    A = n(620632),
    L = n(403362);
let y = "https://cdn.discordapp.com/";
function b(e) {
    return null != e && e.startsWith(y) && ((0, L.iT)() || null != (0, L.fb)())
        ? `${(0, A.TP)()}/_cdn_storage/${e.slice(y.length)}`
        : e;
}
var _ = n(815280),
    I = n(665414),
    S = n(821609),
    N = n(313217),
    j = n(172218),
    k = n(140735),
    O = n(598047),
    T = n(396583),
    R = n(568631),
    D = n(792996),
    P = n(868102);
let M = r.memo((e) => {
        let { endsAt: t, onCountdownEnd: n } = e,
            s = (0, O.A)(),
            [a, i] = r.useState(!0),
            [, o] = r.useReducer((e) => e + 1, 0),
            u = r.useRef(!1),
            c = r.useCallback((e) => {
                i(e);
            }, []),
            m = (0, j.K)(c, 0),
            h = (0, R.Ty)(t),
            g = (0, R.lF)(h);
        return (
            (0, T.A)(o, g || !(s && a) ? null : 1e3),
            r.useEffect(() => {
                g && !u.current && ((u.current = !0), n());
            }, [g, n]),
            (0, l.jsxs)("div", {
                ref: m,
                className: P.qW,
                role: "timer",
                children: [
                    (0, R.z0)(h).map((e, t) =>
                        (0, l.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    t > 0 && (0, l.jsx)("div", { className: P.kx, "aria-hidden": !0 }),
                                    (0, l.jsx)("div", {
                                        className: P.t8,
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
                                                        className: P.m3,
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
                    (0, l.jsx)(k.A, { children: D.intl.format(D.t.j6IyVe, h) }),
                ],
            })
        );
    }),
    w = r.memo((e) => {
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
                            text: D.intl.format(n ? D.t["97Qza2"] : D.t.ibsiKg, {
                                percent: e.percentOff,
                                collectionName: t,
                            }),
                            ctaText: D.intl.string(D.t["5GoOlx"]),
                        };
                    case g.hE.COLLECTION_SEQUENCED_OFFER:
                        return { text: D.intl.string(D.t["4AE45b"]), ctaText: D.intl.string(D.t.vEZeL1) };
                    default:
                        return { text: null, ctaText: D.intl.string(D.t["5GoOlx"]) };
                }
            })(n, t, (0, N.s)("collection_promotion_countdown_banner"));
        return (0, l.jsxs)("div", {
            className: a()(
                P.kL,
                (function (e) {
                    switch (e) {
                        case I.i.LIGHT:
                            return P.BB;
                        case I.i.DARK:
                            return P.XT;
                        case I.i.GRADIENT_V1:
                            return P.eg;
                        case I.i.TRANSPARENT:
                            return P.JO;
                        default:
                            return P.XT;
                    }
                })(n.countdownStyle),
                { [P.CT]: n.countdownPosition === i.l.LEFT },
            ),
            children: [
                (0, l.jsx)(M, { endsAt: n.endsAt, onCountdownEnd: o }, n.endsAt.getTime()),
                (0, l.jsx)(d.E, { variant: "body-md/semibold", color: "currentColor", className: P.fn, children: u }),
                n.showCountdownCta &&
                    !r &&
                    (0, l.jsx)("div", {
                        className: P.lO,
                        children: (0, l.jsx)(S.$, { variant: "overlay-primary", fullWidth: !0, onClick: s, text: c }),
                    }),
            ],
        });
    });
var B = n(60140),
    H = n(653887),
    U = n(921201);
let G = { x: 0, y: 0 };
function F(e, t, n) {
    return n <= 0 ? 0 : Math.max(-100, Math.min(100, Math.round((((e - t) / n) * 2 - 1) * 100)));
}
let $ = (e) => {
    let { src: t, isVisible: n, eventTargetRef: s, onFirstFrame: i } = e,
        o = r.useRef(null),
        [u, c] = r.useState(null),
        d = u === t,
        m = r.useCallback(() => c(t), [t]);
    r.useLayoutEffect(() => {
        if (!d) return;
        let e = document.createElement("canvas");
        ((e.width = 32), (e.height = 16));
        let t = performance.now() + 2e3,
            n = null,
            l = () => {
                let r = o.current?.querySelector("canvas");
                performance.now() >= t ||
                (null != r &&
                    (function (e, t) {
                        if (0 === e.width || 0 === e.height) return !1;
                        let n = t.getContext("2d", { willReadFrequently: !0 });
                        if (null == n) return !1;
                        (n.clearRect(0, 0, t.width, t.height), n.drawImage(e, 0, 0, t.width, t.height));
                        let { data: l } = n.getImageData(0, 0, t.width, t.height);
                        for (let e = 3; e < l.length; e += 4) if (0 !== l[e]) return !0;
                        return !1;
                    })(r, e))
                    ? i()
                    : (n = requestAnimationFrame(l));
            },
            r = setTimeout(() => {
                n = requestAnimationFrame(l);
            }, 100);
        return () => {
            (clearTimeout(r), null != n && cancelAnimationFrame(n));
        };
    }, [d, i]);
    let [h, g] = r.useState(G);
    r.useEffect(() => {
        let e = s.current;
        if (null == e || !n) return;
        let t = null;
        function l(e) {
            (null != t && cancelAnimationFrame(t),
                (t = requestAnimationFrame(() => {
                    ((t = null), g((t) => (t.x === e.x && t.y === e.y ? t : e)));
                })));
        }
        function r(t) {
            if (null == e) return;
            let n = e.getBoundingClientRect();
            l({ x: F(t.clientX, n.left, n.width), y: F(t.clientY, n.top, n.height) });
        }
        function a() {
            l(G);
        }
        return (
            e.addEventListener("mousemove", r),
            e.addEventListener("mouseleave", a),
            () => {
                (null != t && cancelAnimationFrame(t),
                    e.removeEventListener("mousemove", r),
                    e.removeEventListener("mouseleave", a));
            }
        );
    }, [s, n]);
    let E = n ? h : G,
        f = r.useMemo(() => ({ px: { type: "number", value: E.x }, py: { type: "number", value: E.y } }), [E]);
    return (0, l.jsx)("div", {
        ref: o,
        className: a()(U.x, { [U.L]: !n }),
        children: (0, l.jsx)(H._, { src: t, fit: "fit-width", eventTargetRef: s, dynamicDataBinding: f, onLoad: m }),
    });
};
var V = n(758836),
    K = n(652215),
    W = n(105499);
let Y = (e) => {
    let {
            heroBlock: t,
            collectionPromotion: n,
            handleTransition: s,
            tab: A,
            onPromotionEnd: L,
            hideCards: y = !1,
            forceHideCountdownCta: I = !1,
        } = e,
        S = r.useRef(null),
        N = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        j = (0, p.uM)(),
        { analyticsLocations: k } = (0, h.Ay)(m.A.COLLECTIBLES_SHOP_HERO),
        O = (0, C.Kk)(t),
        { bannerDisplayConfig: T, logoDisplayConfig: R } = O,
        P = b(O.heroLogo),
        M = b(O.heroBannerStatic),
        H = b(O.heroBannerAnimated),
        U = b(O.heroBannerRive),
        {
            shouldRenderRive: G,
            isRiveLoaded: F,
            handleRiveLoad: Y,
        } = (function (e) {
            let { heroBannerRive: t, promotionType: n } = e,
                l = (0, o.bG)([v.Ay], () => v.Ay.useReducedMotion),
                s = null != t && n === g.hE.COLLECTION_SEQUENCED_OFFER && !l,
                [a, i] = r.useState(null);
            s || null == a || i(null);
            let u = r.useCallback(() => {
                i(t ?? null);
            }, [t]);
            return { shouldRenderRive: s, isRiveLoaded: s && a === t, handleRiveLoad: u };
        })({ heroBannerRive: U, promotionType: n.type }),
        z = T?.responsive ?? !1,
        q = T?.backgroundStyle,
        { sourceButton: X, ctaName: Q } = (function (e) {
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
        Z = r.useCallback(() => {
            (s({ sourceButton: X, categorySkuId: t.categorySkuId, isInternalShopDeeplink: !0 }),
                f.default.track(K.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: j?.sessionId,
                    sku_id: t.categorySkuId,
                    page_type: A,
                    page_section: j?.pageSection,
                    page_category: j?.pageCategory,
                    cta_name: Q,
                }));
        }, [s, X, t.categorySkuId, j, A, Q]);
    if (null == N) return null;
    let J = n.countdownPosition === i.l.LEFT,
        ee = (0, l.jsx)(w, {
            collectionName: t.name,
            collectionPromotion: n,
            forceHideCountdownCta: I,
            onShopSale: Z,
            onCountdownEnd: L,
        });
    return (0, l.jsx)(h.f5, {
        value: k,
        children: (0, l.jsxs)("div", {
            ref: S,
            className: W.os,
            children: [
                (0, l.jsxs)("div", {
                    className: a()(W.vK, { [W.cN]: F, [W.no]: z }),
                    style: null != q ? { background: q } : void 0,
                    children: [
                        !F && null != M && (0, l.jsx)(_.A, { bannerStatic: M, bannerAnimated: H, isResponsive: z }),
                        G && null != U && (0, l.jsx)($, { src: U, isVisible: F, eventTargetRef: S, onFirstFrame: Y }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: W.xX,
                    children: [
                        (0, l.jsxs)("div", {
                            className: a()(W.uZ, W.bC, {
                                [W.no]: z,
                                [W.BI]: A === V.G2.COLLECTION_INDEX && n.type === g.hE.COLLECTION_SEQUENCED_OFFER,
                            }),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: W.Hw,
                                    children: [
                                        (0, x.HF)(t.unpublishedAt) &&
                                            (0, l.jsx)("div", {
                                                className: W.v0,
                                                children: (0, l.jsx)(u.E, {
                                                    type: { text: D.intl.string(D.t["h/uBCR"]) },
                                                    variant: "inverted",
                                                }),
                                            }),
                                        (0, l.jsxs)("div", {
                                            className: W.Wq,
                                            children: [
                                                null != P &&
                                                    (0, l.jsx)("img", {
                                                        className: W.rm,
                                                        draggable: !1,
                                                        src: P,
                                                        alt: t.name,
                                                        style: R?.toDesktopStyles(),
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
                                                        className: W.Tm,
                                                        style: { color: t.bannerTextColor ?? void 0 },
                                                        children: t.summary,
                                                    }),
                                            ],
                                        }),
                                        J && ee,
                                    ],
                                }),
                                !J && (0, l.jsx)("div", { className: W.pv, children: ee }),
                            ],
                        }),
                        !y &&
                            (0, l.jsx)(B.A, {
                                heroBlockRecord: t,
                                tab: A,
                                isBlockLoading: !1,
                                layout: A === V.G2.HOME ? "hscroll" : "feed",
                                onViewAll: Z,
                            }),
                    ],
                }),
            ],
        }),
    });
};
