n.d(t, {
    Z: () => eI,
    d: () => eg,
}),
    n(388685),
    n(314940);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(873546),
    c = n(180650),
    u = n(979554),
    d = n(311570),
    f = n(399606),
    _ = n(622535),
    p = n(481060),
    h = n(727637),
    m = n(607070),
    g = n(100527),
    E = n(906732),
    b = n(333867),
    y = n(767714),
    O = n(876917),
    v = n(210887),
    I = n(822857),
    T = n(960919),
    S = n(275388),
    A = n(626135),
    C = n(74538),
    N = n(335131),
    R = n(381585),
    P = n(1870),
    w = n(429368),
    D = n(884697),
    x = n(635552),
    L = n(290175),
    j = n(724994),
    M = n(297651),
    k = n(390698),
    U = n(813083),
    G = n(680942),
    B = n(558060),
    Z = n(237031),
    F = n(508925),
    V = n(306092),
    H = n(453713),
    Y = n(616066),
    W = n(216541),
    K = n(22267),
    z = n(67409),
    q = n(58201),
    X = n(445794),
    Q = n(466679),
    J = n(201964),
    $ = n(361110),
    ee = n(29121),
    et = n(956472),
    en = n(832149),
    er = n(215023),
    ei = n(981631),
    ea = n(474936),
    eo = n(388032),
    es = n(300179);
function el(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                el(e, t, n[t]);
            });
    }
    return e;
}
function eu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ed(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eu(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ef(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = e_(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function e_(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let ep = 250,
    eh = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: i } = e;
        return (0, r.jsx)("div", {
            className: es.profileEffectShopPreview,
            children: (0, r.jsx)(O.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: i && !n,
                removeSetHeight: !0,
            }),
        });
    },
    em = (e) => {
        let { isHighlighted: t, isPurchased: n, user: i, item: a } = e;
        return (0, r.jsx)("div", {
            className: es.avatarContainer,
            children: (0, r.jsx)(Y.R, {
                item: a,
                user: i,
                isPurchased: n,
                isHighlighted: t,
            }),
        });
    },
    eg = (e) => {
        let { showStatus: t, width: n, opacity: i } = e,
            a = "var(--border-subtle)";
        return (0, r.jsxs)("div", {
            className: o()(es.nameplatePreviewSampleItem, es.placeholderItem),
            style: { opacity: i },
            children: [
                (0, r.jsx)(p.qEK, {
                    src: null,
                    size: p.EFr.SIZE_32,
                    status: t ? ei.Skl.ONLINE : void 0,
                    statusColor: a,
                    "aria-hidden": !0,
                    imageClassName: es.nameplatePlaceholderAvatar,
                }),
                (0, r.jsx)("div", {
                    className: es.placeholderBar,
                    style: { maxWidth: null != n ? n : "100px" },
                }),
            ],
        });
    },
    eE = (e) => {
        let { user: t, nameplate: n, isHighlighted: i, isPurchased: a } = e;
        return (0, r.jsx)("div", {
            className: es.nameplatePreviewRootContainer,
            children: (0, r.jsxs)("div", {
                className: es.nameplatePreviewList,
                children: [
                    (0, r.jsxs)("div", {
                        className: es.fadeIn,
                        children: [
                            (0, r.jsx)(eg, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7,
                            }),
                            (0, r.jsx)(eg, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                        ],
                    }),
                    (0, r.jsx)(K.Z, {
                        user: t,
                        nameplate: n,
                        className: es.nameplatePreviewSampleItem,
                        isHighlighted: i,
                        showPlaceholderUser: !i,
                        showStatus: !0,
                        isPurchased: a,
                    }),
                    (0, r.jsxs)("div", {
                        className: es.fadeOut,
                        children: [
                            (0, r.jsx)(eg, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                            (0, r.jsx)(eg, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7,
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    eb = (e) => {
        let { tab: t, selectedProduct: n, cardRef: i, children: a } = e,
            { handleCardVisibilityChange: o } = (0, M.E)(n.skuId, t === er.AW.CATALOG ? "full" : t);
        return (0, r.jsx)(_.$, {
            innerRef: i,
            onChange: o,
            threshold: 0,
            children: a,
        });
    },
    ey = i.memo(function (e) {
        var { tab: t, product: n, onMount: a, _isInHeroBlock: o = !1 } = e,
            s = ef(e, ["tab", "product", "onMount", "_isInHeroBlock"]);
        let l = (0, f.e7)([P.Z], () => P.Z.purchases),
            c = (0, w.o)(n, l),
            u = (0, q.W)(n, c),
            d = i.useRef(null),
            { previewingVariantIndex: _, handleEntering: p, handleLeaving: h } = (0, $.f)(n),
            m = (0, J.o)(n, l, _);
        return (
            i.useEffect(() => {
                null == a || a(d, n);
            }, [a, n]),
            (0, r.jsx)(eb, {
                tab: t,
                selectedProduct: u,
                cardRef: d,
                children: (0, r.jsx)(
                    ev,
                    ec(
                        {
                            tab: t,
                            product: n,
                            selectedVariantIndex: c,
                            selectedProduct: u,
                            cardRef: d,
                            previewingVariantIndex: _,
                            handleEntering: p,
                            handleLeaving: h,
                            firstCollectibleItem: m,
                            _isInHeroBlock: o,
                        },
                        s,
                    ),
                ),
            })
        );
    });
function eO(e) {
    let {
            product: t,
            tab: n,
            selectedProduct: i,
            selectedVariantIndex: a,
            cardRef: o,
            analyticsLocations: s,
            buildHandlePreviewClick: c,
            isPremiumUser: _,
            isPremiumProduct: h,
            isPurchased: m,
            isPartiallyOwnedBundle: E,
            isDisabled: O,
            discount: v,
        } = e,
        C = (0, R.sp)(),
        w = (0, D.rN)(t),
        [L, j] = (0, f.Wu)([P.Z], () => [
            P.Z.isClaiming === t.skuId,
            null != P.Z.isClaiming && P.Z.isClaiming !== t.skuId,
        ]),
        M = (0, D.XM)(i, _, !1),
        U = (0, D.ne)({
            product: i,
            isPartiallyOwnedBundle: E,
            isPurchased: m,
        }),
        { enabled: Z } = (0, I.WX)({ location: "collectibles_shop_tall_card" }),
        { handleUseNow: F, isApplying: H } = (0, x.W)({ product: i }),
        Y = c(g.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        W = (0, X.Iw)(t),
        K = null != W,
        {
            displayPrices: q,
            checkoutEligiblePrices: Q,
            isOrbExclusive: J,
            shouldCheckoutWithOrbs: $,
            hasSufficientOrbs: ee,
        } = (0, et.Ip)({
            product: t,
            isPremiumUser: _,
            tab: n,
            hasDiscountOffer: K,
        });
    if (0 === q.length) return null;
    let el = () =>
            (0, r.jsx)("div", {
                className: es.hoverUpsellContainer,
                children: (0, r.jsx)(y.Z, {
                    fullWidth: !0,
                    className: es.__invalid_premiumSubscribeButton,
                    disabled: j,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: eo.intl.string(eo.t.sEAnVF) },
                    subscriptionTier: ea.Si.TIER_2,
                }),
            }),
        ec = () =>
            O
                ? (0, r.jsx)(p.Text, {
                      tag: "div",
                      variant: "heading-md/semibold",
                      color: "header-muted",
                      className: es.priceTag,
                      children: eo.intl.string(eo.t.wu4gyc),
                  })
                : m || E
                  ? (0, r.jsx)(k.U, {
                        className: es.priceTag,
                        isPartiallyPurchased: E,
                    })
                  : h
                    ? (0, r.jsx)(p.Text, {
                          variant: "text-md/semibold",
                          className: es.priceTag,
                          children: eo.intl.string(eo.t.rt69oq),
                      })
                    : Z
                      ? (0, r.jsx)(V.e, {
                            displayPrices: q,
                            isPremiumUser: _,
                            discount: v,
                            hasSufficientOrbs: ee,
                            discountOfferAmount: W,
                        })
                      : (0, r.jsx)(B.Z, {
                            product: i,
                            discount: v,
                            isPremiumUser: _,
                            className: es.priceTag,
                            hideStrikethroughPrice: !0,
                            nitroIconType: "default",
                            nitroIconSize: "md",
                            discountOfferAmount: W,
                        }),
        eu = () =>
            h || l.tq || J || !U || n === er.AW.ORBS
                ? null
                : w
                  ? (0, r.jsx)(p.hU, {
                        variant: "primary",
                        "aria-label": eo.intl.string(eo.t.SKNnqq),
                        icon: p.tEF,
                        onClick: (e) => {
                            e.stopPropagation(), Y(e);
                        },
                    })
                  : (0, r.jsx)(R.k0, {
                        newValue: { pageCategory: n === er.AW.HOME || null == C ? void 0 : C.pageCategory },
                        children: (0, r.jsx)(G.Z, {
                            primary: !0,
                            product: t,
                            selectedVariantIndex: a,
                            returnRef: o,
                            tooltipDelay: ep,
                        }),
                    }),
        ed = () =>
            (0, r.jsx)(p.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), Y(e);
                },
                text: eo.intl.string(eo.t.FdGl5O),
                fullWidth: !0,
            }),
        ef = () => {
            let e = () => {
                    A.default.track(ei.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == C ? void 0 : C.sessionId,
                        sku_id: t.skuId,
                        page_type: n,
                        page_section: null == C ? void 0 : C.pageSection,
                        page_category: n === er.AW.HOME || null == C ? void 0 : C.pageCategory,
                        page_index: n === er.AW.CATALOG ? (null == C ? void 0 : C.pageIndex) : void 0,
                        page_size: n === er.AW.CATALOG ? (null == C ? void 0 : C.pageSize) : void 0,
                        tile_type: u.Z[t.type],
                        tile_position: String(null == C ? void 0 : C.tilePosition),
                        cta_name: "buy button",
                    }),
                        (0, b.Z)({
                            skuId: (0, z.S)({
                                product: t,
                                selectedVariantIndex: a,
                            }),
                            analyticsLocations: s,
                            returnRef: o,
                            variantsReturnStyle: d.v.VARIANTS_GROUP,
                        });
                },
                i = K
                    ? eo.intl.formatToPlainString(eo.t["5U5RBw"], { discountOfferAmount: W })
                    : eo.intl.formatToPlainString(eo.t["cNSL/v"], { price: M });
            return (0, r.jsx)(p.zxk, {
                variant: "primary",
                onClick: (t) => {
                    t.stopPropagation(), e();
                },
                text: i,
                fullWidth: !0,
            });
        },
        e_ = () => {
            let e = () => {
                A.default.track(ei.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == C ? void 0 : C.sessionId,
                    sku_id: t.skuId,
                    page_type: n,
                    page_section: null == C ? void 0 : C.pageSection,
                    page_category: n === er.AW.HOME || null == C ? void 0 : C.pageCategory,
                    page_index: n === er.AW.CATALOG ? (null == C ? void 0 : C.pageIndex) : void 0,
                    page_size: n === er.AW.CATALOG ? (null == C ? void 0 : C.pageSize) : void 0,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == C ? void 0 : C.tilePosition),
                    cta_name: "claim with orbs button",
                }),
                    (0, S.qA)({
                        skuId: (0, z.S)({
                            product: t,
                            selectedVariantIndex: a,
                        }),
                        onCheckoutSuccess: (e) => {
                            var n;
                            let { entitlements: r } = e;
                            (0, N.qg)({ variantsReturnStyle: d.v.VARIANTS_GROUP }),
                                (0, en.Z)({
                                    product: t,
                                    analyticsLocations: s,
                                    itemConsumed: null == (n = r[0]) ? void 0 : n.consumed,
                                    purchaseType: er.o8.ORB,
                                });
                        },
                        analyticsLocations: s,
                    });
            };
            return (0, r.jsx)(p.zxk, {
                variant: "primary",
                text: eo.intl.format(eo.t.kAgx5O, {
                    orbPrice: Q[0].amount,
                    orbIconHook: () => (0, r.jsx)(T.Z, { className: es.orbIconAligned }),
                }),
                onClick: (t) => {
                    t.stopPropagation(), e();
                },
                "aria-label": eo.intl.formatToPlainString(eo.t["fNG/09"], { orbPrice: Q[0].amount }),
                fullWidth: !0,
            });
        },
        eh = () => {
            let e = async () => {
                A.default.track(ei.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == C ? void 0 : C.sessionId,
                    sku_id: t.skuId,
                    page_type: n,
                    page_section: null == C ? void 0 : C.pageSection,
                    page_category: n === er.AW.HOME || null == C ? void 0 : C.pageCategory,
                    page_index: n === er.AW.CATALOG ? (null == C ? void 0 : C.pageIndex) : void 0,
                    page_size: n === er.AW.CATALOG ? (null == C ? void 0 : C.pageSize) : void 0,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == C ? void 0 : C.tilePosition),
                    cta_name: "claim premium product button",
                }),
                    await (0, N.fK)(t.skuId),
                    (0, en.Z)({
                        product: t,
                        analyticsLocations: s,
                        purchaseType: er.o8.PREMIUM_PURCHASE,
                    });
            };
            return (0, r.jsx)(p.zxk, {
                variant: "primary",
                onClick: (t) => {
                    t.stopPropagation(), e();
                },
                disabled: j,
                loading: L,
                loadingStartedLabel: eo.intl.string(eo.t["TYw+9v"]),
                loadingFinishedLabel: eo.intl.string(eo.t.Pg1UPz),
                text: eo.intl.string(eo.t.zp6caG),
                fullWidth: !0,
            });
        },
        em = () =>
            (0, r.jsx)(p.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), F();
                },
                loading: H,
                text: eo.intl.string(eo.t.MAS7uL),
                fullWidth: !0,
            }),
        eg = () =>
            (0, r.jsx)(p.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), Y(e);
                },
                text: eo.intl.string(eo.t.GpnHfH),
                fullWidth: !0,
            }),
        eE = () => {
            if (h && !_ && !w) return el();
            if (!U || O) return ed();
            if (m) return em();
            if (h) return eh();
            if ($)
                if (ee) return e_();
                else return ed();
            return n === er.AW.ORBS ? eg() : ef();
        };
    return (0, r.jsxs)("div", {
        className: es.detailsWrapper,
        children: [
            (0, r.jsx)("div", {
                className: es.innerBlur,
                children: ec(),
            }),
            (0, r.jsx)("div", {
                className: es.innerHover,
                children: (0, r.jsxs)(p.hE2, {
                    wrap: !1,
                    fullWidth: !0,
                    children: [eE(), eu()],
                }),
            }),
        ],
    });
}
let ev = i.memo(function (e) {
        let {
                product: t,
                user: n,
                category: a,
                tab: l,
                cardRef: d,
                selectedProduct: _,
                firstCollectibleItem: b,
                selectedVariantIndex: y,
                handleEntering: O,
                handleLeaving: I,
                previewingVariantIndex: T,
                className: S,
                _isInHeroBlock: N = !1,
            } = e,
            { analyticsLocations: P } = (0, E.ZP)([g.Z.COLLECTIBLES_SHOP_CARD]),
            w = (0, R.sp)(),
            x = (0, h.Z)(d),
            M = (0, Q.m)(d),
            k = x || M,
            G = (0, ee.To)(t),
            B = (0, f.e7)([m.Z], () => m.Z.useReducedMotion),
            V = C.ZP.canUseCollectibles(n),
            Y = i.useMemo(() => (0, D.BH)(t, V), [t, V]),
            K = (0, D.G1)(t),
            z = (0, f.e7)([v.Z], () => (0, p.wjy)(v.Z.theme)),
            q = (0, D.Yq)(t.skuId),
            X = a.skuId === c.T.ANIME_V3 && (0, D.WW)(t.skuId),
            { isPurchased: J, isPartiallyOwnedBundle: $ } = (0, j.L)(_),
            { isDisabled: en } = (0, L.G)(_.skuId),
            ea = null !== T ? T : y,
            [el, eu] = i.useState(!1),
            ef = k,
            e_ = i.useCallback(
                function (e, t, i) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return (0, s.EQ)(e.type)
                        .with(u.Z.PROFILE_EFFECT, () =>
                            (0, r.jsx)(eh, {
                                isHighlighted: t,
                                profileEffectId: e.id,
                                isPurchased: i && !a,
                            }),
                        )
                        .with(u.Z.AVATAR_DECORATION, () =>
                            (0, r.jsx)(em, {
                                item: e,
                                user: n,
                                isHighlighted: t,
                                isPurchased: i,
                            }),
                        )
                        .with(u.Z.NAMEPLATE, () =>
                            (0, r.jsx)(eE, {
                                user: n,
                                nameplate: e,
                                isHighlighted: t,
                                isPurchased: i,
                            }),
                        )
                        .otherwise(() => null);
                },
                [n],
            ),
            ep = i.useRef(null),
            { displayPrices: eg, isOrbExclusive: eb } = (0, et.oo)({
                product: t,
                isPremiumUser: V,
                tab: l,
            }),
            ey = i.useCallback(
                (e) => (n) => {
                    let r = (0, et.oQ)({ product: t });
                    (ep.current = n.currentTarget),
                        A.default.track(ei.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == w ? void 0 : w.sessionId,
                            sku_id: t.skuId,
                            page_type: l,
                            page_section: null == w ? void 0 : w.pageSection,
                            page_category: l === er.AW.HOME ? void 0 : a.name,
                            page_index: l === er.AW.CATALOG ? (null == w ? void 0 : w.pageIndex) : void 0,
                            page_size: l === er.AW.CATALOG ? (null == w ? void 0 : w.pageSize) : void 0,
                            tile_type: u.Z[t.type],
                            tile_position: String(null == w ? void 0 : w.tilePosition),
                            cta_name: null,
                        }),
                        (0, Z.T)({
                            product: t,
                            category: a,
                            shouldCheckoutWithOrbs: r,
                            analyticsLocations: P,
                            analyticsSource: e,
                            returnRef: ep,
                            tab: l,
                        });
                },
                [t, a, l, P, w],
            ),
            ev = ey(g.Z.COLLECTIBLES_SHOP_CARD);
        if (0 === eg.length) return null;
        let eI = () => {
                let e = J ? p.sV5 : en ? p.mBM : null;
                return null == e
                    ? null
                    : (0, r.jsx)("div", {
                          className: es.cardStateIconWrapper,
                          children: (0, r.jsx)(e, {
                              size: "custom",
                              color: "currentColor",
                              width: 38,
                              height: 38,
                              className: o()(es.cardStateIcon, { [es.checkmark]: J }),
                          }),
                      });
            },
            eT = () =>
                (0, r.jsxs)("div", {
                    className: o()(es.cardText, z ? es.darkCardBackground : es.lightCardBackground, {
                        [es.variantsGroup]: t.type === u.Z.VARIANTS_GROUP,
                    }),
                    children: [
                        (0, r.jsx)(p.X6q, {
                            variant: "text-lg/bold",
                            className: es.productName,
                            children: G,
                        }),
                        t.type === u.Z.VARIANTS_GROUP
                            ? (0, r.jsx)(H.P, {
                                  variantGroupProduct: t,
                                  previewingVariantIndexProps: {
                                      previewingVariantIndex: T,
                                      handleEntering: O,
                                      handleLeaving: I,
                                  },
                                  selectedVariantIndex: y,
                                  setIsHoveringOnSwitch: eu,
                                  minimal: !k,
                                  alternativeBackgroundColor: (null == b ? void 0 : b.type) === u.Z.PROFILE_EFFECT,
                              })
                            : null,
                        (0, r.jsx)(eO, {
                            product: t,
                            tab: l,
                            buildHandlePreviewClick: ey,
                            selectedProduct: _,
                            selectedVariantIndex: y,
                            cardRef: d,
                            analyticsLocations: P,
                            isPremiumUser: V,
                            isPremiumProduct: K,
                            isPartiallyOwnedBundle: $,
                            isPurchased: J,
                            isDisabled: en,
                            discount: Y,
                        }),
                    ],
                });
        return (0, D.x6)(t) && null != Y && Y.discountPercentage < 0
            ? null
            : (0, r.jsx)(p.tEY, {
                  children: (0, r.jsxs)(p.kL8, {
                      className: o()(S, z ? es.shopCardDark : es.shopCard, {
                          [es.partiallyOwned]: $ && !k,
                          [es.shopCardAnimation]: !B,
                          [z ? es.shopCardDarkHighlighted : es.shopCardHighlighted]: k,
                      }),
                      ref: d,
                      onClick: ev,
                      "aria-label": t.name,
                      children: [
                          K &&
                              (0, r.jsx)(p.ua7, {
                                  tooltipContentClassName: es.premiumWheelTooltipContent,
                                  color: p.ua7.Colors.PRIMARY,
                                  text: eo.intl.string(eo.t.nKdAlJ),
                                  children: (e) =>
                                      (0, r.jsx)(
                                          p.IGR,
                                          ed(ec({}, e), {
                                              className: es.premiumWheelBadge,
                                              text: (0, r.jsx)(p.SrA, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: es.premiumWheel,
                                              }),
                                          }),
                                      ),
                              }),
                          (0, r.jsx)(U.Z, {
                              category: a,
                              className: es.limitedTimeBadge,
                              display: U.k.CARD,
                          }),
                          $ || J || !q
                              ? eb
                                  ? (0, r.jsx)(p.IGR, {
                                        text: eo.intl.string(eo.t["0TmQRE"]),
                                        disableColor: !0,
                                        className: es.badge,
                                    })
                                  : X
                                    ? (0, r.jsx)(p.IGR, {
                                          text: eo.intl.string(eo.t.S6kE9v),
                                          disableColor: !0,
                                          className: es.badge,
                                      })
                                    : null
                              : (0, r.jsx)(p.IGR, {
                                    text: eo.intl.string(eo.t.y2b7CA),
                                    disableColor: !0,
                                    className: es.badge,
                                }),
                          (0, r.jsx)("div", {
                              className: es.preview,
                              children: (0, s.EQ)(t.type)
                                  .with(u.Z.PROFILE_EFFECT, u.Z.AVATAR_DECORATION, u.Z.NAMEPLATE, () => e_(b, ef, J))
                                  .with(u.Z.BUNDLE, () =>
                                      (0, r.jsx)(W.d, {
                                          product: t,
                                          user: n,
                                          isPurchased: J,
                                          isHighlighted: k,
                                      }),
                                  )
                                  .with(u.Z.VARIANTS_GROUP, () => {
                                      if (null == t.variants || 0 === t.variants.length) return null;
                                      let e = t.variants[ea];
                                      if (null == e) return null;
                                      let [n] = e.items;
                                      return e_(n, ef, J, el);
                                  })
                                  .with(u.Z.EXTERNAL_SKU, () =>
                                      (0, r.jsx)(F.b, {
                                          product: t,
                                          animationState: ef ? "on" : "off",
                                          className: en || (J && !ef) ? es.externalProductDimmed : void 0,
                                      }),
                                  )
                                  .otherwise(() => null),
                          }),
                          eI(),
                          eT(),
                      ],
                  }),
              });
    }),
    eI = ey;
