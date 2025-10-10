i.d(t, {
    Z: () => eC,
    d: () => ep,
}),
    i(388685),
    i(314940);
var l = i(951288),
    n = i(647438),
    r = i(120356),
    a = i.n(r),
    s = i(278074),
    o = i(873546),
    d = i(979554),
    u = i(685816),
    c = i(311570),
    p = i(399606),
    g = i(622535),
    h = i(481060),
    m = i(607070),
    v = i(100527),
    x = i(906732),
    C = i(104505),
    _ = i(333867),
    f = i(767714),
    y = i(876917),
    P = i(567400),
    I = i(210887),
    O = i(960919),
    b = i(275388),
    E = i(626135),
    S = i(74538),
    A = i(335131),
    j = i(381585),
    T = i(1870),
    k = i(429368),
    L = i(884697),
    N = i(635552),
    w = i(290175),
    R = i(724994),
    Z = i(297651),
    H = i(390698),
    W = i(813083),
    B = i(680942),
    G = i(409116),
    M = i(237031),
    U = i(508925),
    D = i(453713),
    V = i(325834),
    z = i(143941),
    F = i(616066),
    K = i(216541),
    q = i(22267),
    Y = i(67409),
    Q = i(58201),
    X = i(445794),
    J = i(201964),
    $ = i(361110),
    ee = i(29121),
    et = i(956472),
    ei = i(832149),
    el = i(642909),
    en = i(215023),
    er = i(981631),
    ea = i(474936),
    es = i(388032),
    eo = i(300179);
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let eu = (e) => {
        let { skuId: t, isHighlighted: i, isPurchased: n } = e;
        return (0, l.jsx)("div", {
            className: eo.profileEffectShopPreview,
            children: (0, l.jsx)(y.Z, {
                skuId: t,
                isHighlighted: i,
                isPurchased: n && !i,
                removeSetHeight: !0,
            }),
        });
    },
    ec = (e) => {
        let { isHighlighted: t, isPurchased: i, user: n, item: r } = e;
        return (0, l.jsx)("div", {
            className: eo.avatarContainer,
            children: (0, l.jsx)(F.R, {
                item: r,
                user: n,
                isPurchased: i,
                isHighlighted: t,
            }),
        });
    },
    ep = (e) => {
        let { showStatus: t, width: i, opacity: n } = e;
        return (0, l.jsxs)("div", {
            className: a()(eo.nameplatePreviewSampleItem, eo.placeholderItem),
            style: { opacity: n },
            children: [
                (0, l.jsx)(h.qEK, {
                    src: null,
                    size: h.EFr.SIZE_32,
                    status: t ? er.Skl.ONLINE : void 0,
                    statusColor: "var(--border-subtle)",
                    "aria-hidden": !0,
                    imageClassName: eo.nameplatePlaceholderAvatar,
                }),
                (0, l.jsx)("div", {
                    className: eo.placeholderBar,
                    style: { maxWidth: null != i ? i : "100px" },
                }),
            ],
        });
    },
    eg = (e) => {
        let { user: t, nameplate: i, isHighlighted: n, isPurchased: r } = e;
        return (0, l.jsx)("div", {
            className: eo.nameplatePreviewRootContainer,
            children: (0, l.jsxs)("div", {
                className: eo.nameplatePreviewList,
                children: [
                    (0, l.jsxs)("div", {
                        className: eo.fadeIn,
                        children: [
                            (0, l.jsx)(ep, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7,
                            }),
                            (0, l.jsx)(ep, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                        ],
                    }),
                    (0, l.jsx)(q.Z, {
                        user: t,
                        nameplate: i,
                        className: eo.nameplatePreviewSampleItem,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        showStatus: !0,
                        isPurchased: r,
                    }),
                    (0, l.jsxs)("div", {
                        className: eo.fadeOut,
                        children: [
                            (0, l.jsx)(ep, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                            (0, l.jsx)(ep, {
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
    eh = (e) => {
        let { tab: t, selectedProduct: i, cardRef: n, children: r } = e,
            { handleCardVisibilityChange: a } = (0, Z.E)(i.skuId, t === en.AW.CATALOG ? "full" : t);
        return (0, l.jsx)(g.$, {
            innerRef: n,
            onChange: a,
            threshold: 0,
            children: r,
        });
    },
    em = n.memo(function (e) {
        var { tab: t, product: i, onMount: r, shopBlockType: a } = e,
            s = (function (e, t) {
                if (null == e) return {};
                var i,
                    l,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var i,
                            l,
                            n = {},
                            r = Object.keys(e);
                        for (l = 0; l < r.length; l++) (i = r[l]), t.indexOf(i) >= 0 || (n[i] = e[i]);
                        return n;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < r.length; l++)
                        (i = r[l]),
                            !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
                }
                return n;
            })(e, ["tab", "product", "onMount", "shopBlockType"]);
        let o = (0, p.e7)([T.Z], () => T.Z.purchases),
            d = (0, k.o)(i, o),
            u = (0, Q.W)(i, d),
            c = n.useRef(null),
            { previewingVariantIndex: g, handleEntering: h, handleLeaving: m } = (0, $.f)(i),
            v = (0, J.o)(i, o, g);
        return (
            n.useEffect(() => {
                null == r || r(c, i);
            }, [r, i]),
            (0, l.jsx)(eh, {
                tab: t,
                selectedProduct: u,
                cardRef: c,
                children: (0, l.jsx)(
                    ex,
                    ed(
                        {
                            tab: t,
                            product: i,
                            selectedVariantIndex: d,
                            selectedProduct: u,
                            cardRef: c,
                            previewingVariantIndex: g,
                            handleEntering: h,
                            handleLeaving: m,
                            firstCollectibleItem: v,
                            shopBlockType: a,
                        },
                        s,
                    ),
                ),
            })
        );
    });
function ev(e) {
    let {
            product: t,
            tab: i,
            selectedProduct: n,
            selectedVariantIndex: r,
            cardRef: a,
            analyticsLocations: s,
            buildHandlePreviewClick: u,
            isPremiumUser: g,
            isPremiumProduct: m,
            isPurchased: x,
            isPartiallyOwnedBundle: C,
            isDisabled: y,
            discount: P,
        } = e,
        I = (0, j.sp)(),
        S = (0, L.rN)(t),
        [k, w] = (0, p.Wu)([T.Z], () => [
            T.Z.isClaiming === t.skuId,
            null != T.Z.isClaiming && T.Z.isClaiming !== t.skuId,
        ]),
        R = (0, L.XM)(n, g, !1),
        Z = (0, L.ne)({
            product: n,
            isPartiallyOwnedBundle: C,
            isPurchased: x,
        }),
        { handleUseNow: W, isApplying: M } = (0, N.W)({ product: n }),
        U = u(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        D = (0, X.Iw)(t),
        V = null != D,
        {
            displayPrices: z,
            checkoutEligiblePrices: F,
            isOrbExclusive: K,
            shouldCheckoutWithOrbs: q,
            hasSufficientOrbs: Q,
        } = (0, et.Ip)({
            product: t,
            isPremiumUser: g,
            tab: i,
            hasDiscountOffer: V,
        });
    if (0 === z.length) return null;
    let J = () =>
        (0, l.jsx)(h.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), U(e);
            },
            text: es.intl.string(es.t.FdGl5O),
            fullWidth: !0,
        });
    return (0, l.jsxs)("div", {
        className: eo.detailsWrapper,
        children: [
            (0, l.jsx)("div", {
                className: eo.innerBlur,
                children: y
                    ? (0, l.jsx)(h.Text, {
                          tag: "div",
                          variant: "heading-md/semibold",
                          color: "header-muted",
                          className: eo.priceTag,
                          children: es.intl.string(es.t.wu4gyc),
                      })
                    : x || C
                      ? (0, l.jsx)(H.U, {
                            className: eo.priceTag,
                            isPartiallyPurchased: C,
                        })
                      : m
                        ? (0, l.jsx)(h.Text, {
                              variant: "text-md/semibold",
                              className: eo.priceTag,
                              children: es.intl.string(es.t.rt69oq),
                          })
                        : (0, l.jsx)("div", {
                              className: eo.priceLine,
                              children: z.map((e, t) =>
                                  (0, l.jsx)(
                                      G.F,
                                      {
                                          price: e,
                                          discount: P,
                                          discountOfferAmount: D,
                                          nitroIconType: g ? "default" : void 0,
                                          nitroIconSize: "md",
                                          className:
                                              e.currency !== er.pKx.DISCORD_ORB || Q ? void 0 : eo.insufficientOrbs,
                                      },
                                      t,
                                  ),
                              ),
                          }),
            }),
            (0, l.jsx)("div", {
                className: eo.innerHover,
                children: (0, l.jsxs)(h.hE2, {
                    wrap: !1,
                    fullWidth: !0,
                    children: [
                        (() => {
                            if (m && !g && !S)
                                return (0, l.jsx)("div", {
                                    className: eo.hoverUpsellContainer,
                                    children: (0, l.jsx)(f.Z, {
                                        fullWidth: !0,
                                        className: eo.__invalid_premiumSubscribeButton,
                                        disabled: w,
                                        onClick: (e) => e.stopPropagation(),
                                        textOptions: { textOverride: es.intl.string(es.t.sEAnVF) },
                                        subscriptionTier: ea.Si.TIER_2,
                                    }),
                                });
                            if (!Z || y) return J();
                            if (x)
                                return (0, l.jsx)(h.zxk, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(), W();
                                    },
                                    loading: M,
                                    text: es.intl.string(es.t.MAS7uL),
                                    fullWidth: !0,
                                });
                            {
                                if (m) {
                                    let e = async () => {
                                        E.default.track(er.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                            collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                            sku_id: t.skuId,
                                            page_type: i,
                                            page_section: null == I ? void 0 : I.pageSection,
                                            page_category: i === en.AW.HOME || null == I ? void 0 : I.pageCategory,
                                            page_index:
                                                i === en.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                                            page_size: i === en.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                                            tile_type: d.Z[t.type],
                                            tile_position: String(null == I ? void 0 : I.tilePosition),
                                            cta_name: "claim premium product button",
                                        }),
                                            await (0, A.fK)(t.skuId),
                                            (0, ei.Z)({
                                                product: t,
                                                analyticsLocations: s,
                                                purchaseType: en.o8.PREMIUM_PURCHASE,
                                            });
                                    };
                                    return (0, l.jsx)(h.zxk, {
                                        variant: "primary",
                                        onClick: (t) => {
                                            t.stopPropagation(), e();
                                        },
                                        disabled: w,
                                        loading: k,
                                        loadingStartedLabel: es.intl.string(es.t["TYw+9v"]),
                                        loadingFinishedLabel: es.intl.string(es.t.Pg1UPz),
                                        text: es.intl.string(es.t.zp6caG),
                                        fullWidth: !0,
                                    });
                                }
                                if (q)
                                    if (Q)
                                        return (0, l.jsx)(h.zxk, {
                                            variant: "primary",
                                            text: es.intl.format(es.t.kAgx5O, {
                                                orbPrice: F[0].amount,
                                                orbIconHook: () => (0, l.jsx)(O.Z, { className: eo.orbIconAligned }),
                                            }),
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    E.default.track(er.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                                        sku_id: t.skuId,
                                                        page_type: i,
                                                        page_section: null == I ? void 0 : I.pageSection,
                                                        page_category:
                                                            i === en.AW.HOME || null == I ? void 0 : I.pageCategory,
                                                        page_index:
                                                            i === en.AW.CATALOG
                                                                ? null == I
                                                                    ? void 0
                                                                    : I.pageIndex
                                                                : void 0,
                                                        page_size:
                                                            i === en.AW.CATALOG
                                                                ? null == I
                                                                    ? void 0
                                                                    : I.pageSize
                                                                : void 0,
                                                        tile_type: d.Z[t.type],
                                                        tile_position: String(null == I ? void 0 : I.tilePosition),
                                                        cta_name: "claim with orbs button",
                                                    }),
                                                    (0, b.qA)({
                                                        skuId: (0, Y.S)({
                                                            product: t,
                                                            selectedVariantIndex: r,
                                                        }),
                                                        onCheckoutSuccess: (e) => {
                                                            var i;
                                                            let { entitlements: l } = e;
                                                            (0, A.qg)({ variantsReturnStyle: c.v.VARIANTS_GROUP }),
                                                                (0, ei.Z)({
                                                                    product: t,
                                                                    analyticsLocations: s,
                                                                    itemConsumed:
                                                                        null == (i = l[0]) ? void 0 : i.consumed,
                                                                    purchaseType: en.o8.ORB,
                                                                });
                                                        },
                                                        analyticsLocations: s,
                                                    });
                                            },
                                            "aria-label": es.intl.formatToPlainString(es.t["fNG/09"], {
                                                orbPrice: F[0].amount,
                                            }),
                                            fullWidth: !0,
                                        });
                                    else return J();
                                if (i === en.AW.ORBS)
                                    return (0, l.jsx)(h.zxk, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(), U(e);
                                        },
                                        text: es.intl.string(es.t.GpnHfH),
                                        fullWidth: !0,
                                    });
                                let e = V
                                    ? es.intl.formatToPlainString(es.t["5U5RBw"], { discountOfferAmount: D })
                                    : es.intl.formatToPlainString(es.t["cNSL/v"], { price: R });
                                return (0, l.jsx)(h.zxk, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            E.default.track(er.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                                sku_id: t.skuId,
                                                page_type: i,
                                                page_section: null == I ? void 0 : I.pageSection,
                                                page_category: i === en.AW.HOME || null == I ? void 0 : I.pageCategory,
                                                page_index:
                                                    i === en.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                                                page_size:
                                                    i === en.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                                                tile_type: d.Z[t.type],
                                                tile_position: String(null == I ? void 0 : I.tilePosition),
                                                cta_name: "buy button",
                                            }),
                                            (0, _.Z)({
                                                skuId: (0, Y.S)({
                                                    product: t,
                                                    selectedVariantIndex: r,
                                                }),
                                                analyticsLocations: s,
                                                returnRef: a,
                                                variantsReturnStyle: c.v.VARIANTS_GROUP,
                                            });
                                    },
                                    text: e,
                                    fullWidth: !0,
                                });
                            }
                        })(),
                        m || o.tq || K || !Z || i === en.AW.ORBS
                            ? null
                            : S
                              ? (0, l.jsx)(h.hU, {
                                    variant: "primary",
                                    "aria-label": es.intl.string(es.t.SKNnqq),
                                    icon: h.tEF,
                                    onClick: (e) => {
                                        e.stopPropagation(), U(e);
                                    },
                                })
                              : (0, l.jsx)(j.k0, {
                                    newValue: { pageCategory: i === en.AW.HOME || null == I ? void 0 : I.pageCategory },
                                    children: (0, l.jsx)(B.Z, {
                                        primary: !0,
                                        product: t,
                                        selectedVariantIndex: r,
                                        returnRef: a,
                                        tooltipDelay: 250,
                                    }),
                                }),
                    ],
                }),
            }),
        ],
    });
}
let ex = n.memo(function (e) {
        let {
                product: t,
                user: i,
                category: r,
                tab: o,
                cardRef: c,
                selectedProduct: g,
                firstCollectibleItem: _,
                selectedVariantIndex: f,
                handleEntering: y,
                handleLeaving: O,
                previewingVariantIndex: b,
                className: A,
                shopBlockType: T,
            } = e,
            { analyticsLocations: k } = (0, x.ZP)([v.Z.COLLECTIBLES_SHOP_CARD]),
            N = (0, j.sp)(),
            Z = (0, el.G)("CollectiblesShopTallCard"),
            H = null != T && T === u.z.HERO && Z ? en.Ch.THUMBNAIL : en.Ch.DEFAULT,
            B = (0, P.Y)({ location: "CollectiblesShopTallCard" }),
            { isHoveringOrFocusing: G } = (0, C.Z)(c),
            F = (0, ee.To)(t),
            q = (0, p.e7)([m.Z], () => m.Z.useReducedMotion),
            Y = S.ZP.canUseCollectibles(i),
            Q = n.useMemo(() => (0, L.BH)(t, Y), [t, Y]),
            X = (0, L.G1)(t),
            J = (0, p.e7)([I.Z], () => (0, h.wjy)(I.Z.theme)),
            $ = (0, L.Yq)(t.skuId),
            ei = r.skuId === en.bu && (0, L.WW)(t.skuId),
            { isPurchased: ea, isPartiallyOwnedBundle: ep } = (0, R.L)(g),
            { isDisabled: eh } = (0, w.G)(g.skuId),
            em = null !== b ? b : f,
            [ex, eC] = n.useState(!1),
            e_ = n.useCallback(
                function (e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return (0, s.EQ)(e.type)
                        .with(d.Z.PROFILE_EFFECT, () =>
                            (0, l.jsx)(eu, {
                                isHighlighted: t,
                                skuId: e.skuId,
                                isPurchased: n && !r,
                            }),
                        )
                        .with(d.Z.AVATAR_DECORATION, () =>
                            (0, l.jsx)(ec, {
                                item: e,
                                user: i,
                                isHighlighted: t,
                                isPurchased: n,
                            }),
                        )
                        .with(d.Z.NAMEPLATE, () =>
                            (0, l.jsx)(eg, {
                                user: i,
                                nameplate: e,
                                isHighlighted: t,
                                isPurchased: n,
                            }),
                        )
                        .otherwise(() => null);
                },
                [i],
            ),
            ef = n.useRef(null),
            { displayPrices: ey, isOrbExclusive: eP } = (0, et.oo)({
                product: t,
                isPremiumUser: Y,
                tab: o,
            }),
            eI = n.useCallback(
                (e) => (i) => {
                    let l = (0, et.oQ)({ product: t });
                    (ef.current = i.currentTarget),
                        E.default.track(er.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == N ? void 0 : N.sessionId,
                            sku_id: t.skuId,
                            page_type: o,
                            page_section: null == N ? void 0 : N.pageSection,
                            page_category: o === en.AW.HOME ? void 0 : r.name,
                            page_index: o === en.AW.CATALOG ? (null == N ? void 0 : N.pageIndex) : void 0,
                            page_size: o === en.AW.CATALOG ? (null == N ? void 0 : N.pageSize) : void 0,
                            tile_type: d.Z[t.type],
                            tile_position: String(null == N ? void 0 : N.tilePosition),
                            cta_name: null,
                        }),
                        (0, M.T)({
                            product: t,
                            category: r,
                            shouldCheckoutWithOrbs: l,
                            analyticsLocations: k,
                            analyticsSource: e,
                            returnRef: ef,
                            tab: o,
                            variantType: H,
                        });
                },
                [t, r, o, k, N, H],
            ),
            eO = eI(v.Z.COLLECTIBLES_SHOP_CARD);
        if (0 === ey.length || ((0, L.x6)(t) && null != Q && Q.discountPercentage < 0)) return null;
        let eb = a()(eo.badge, { [eo.badgeLeftAligned]: B });
        return (0, l.jsx)(h.tEY, {
            children: (0, l.jsxs)(h.kL8, {
                className: a()(A, J ? eo.shopCardDark : eo.shopCard, {
                    [eo.partiallyOwned]: ep && !G,
                    [eo.shopCardAnimation]: !q,
                    [J ? eo.shopCardDarkHighlighted : eo.shopCardHighlighted]: G,
                }),
                ref: c,
                onClick: eO,
                "aria-label": t.name,
                children: [
                    X &&
                        (0, l.jsx)(h.ua7, {
                            tooltipContentClassName: eo.premiumWheelTooltipContent,
                            color: h.ua7.Colors.PRIMARY,
                            text: es.intl.string(es.t.nKdAlJ),
                            children: (e) => {
                                var t, i;
                                return (0, l.jsx)(
                                    h.IGR,
                                    ((t = ed({}, e)),
                                    (i = i =
                                        {
                                            className: a()(eo.premiumWheelBadge, { [eo.badgeLeftAligned]: B }),
                                            text: (0, l.jsx)(h.SrA, {
                                                size: "md",
                                                color: "currentColor",
                                                className: eo.premiumWheel,
                                            }),
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var i = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var l = Object.getOwnPropertySymbols(e);
                                                  i.push.apply(i, l);
                                              }
                                              return i;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    t),
                                );
                            },
                        }),
                    (0, l.jsx)(W.Z, {
                        category: r,
                        className: a()(eo.limitedTimeBadge, { [eo.badgeLeftAligned]: B }),
                        display: W.k.CARD,
                        shopBlockType: T,
                    }),
                    B &&
                        (0, l.jsx)(z.a, {
                            product: t,
                            selectedVariantIndex: f,
                            className: eo.wishlistButton,
                            isCardHovered: G,
                        }),
                    ep || ea || !$
                        ? eP
                            ? (0, l.jsx)(h.IGR, {
                                  text: es.intl.string(es.t["0TmQRE"]),
                                  disableColor: !0,
                                  className: eb,
                              })
                            : ei
                              ? (0, l.jsx)(h.IGR, {
                                    text: es.intl.string(es.t.S6kE9v),
                                    disableColor: !0,
                                    className: eb,
                                })
                              : null
                        : (0, l.jsx)(h.IGR, {
                              text: es.intl.string(es.t.y2b7CA),
                              disableColor: !0,
                              className: eb,
                          }),
                    (0, l.jsx)("div", {
                        className: a()(eo.preview, { [eo.previewThumbnailVariant]: H === en.Ch.THUMBNAIL }),
                        children: (0, s.EQ)(t.type)
                            .with(d.Z.PROFILE_EFFECT, d.Z.AVATAR_DECORATION, d.Z.NAMEPLATE, () => e_(_, G, ea))
                            .with(d.Z.BUNDLE, () =>
                                (0, l.jsx)(K.d, {
                                    product: t,
                                    user: i,
                                    isPurchased: ea,
                                    isHighlighted: G,
                                }),
                            )
                            .with(d.Z.VARIANTS_GROUP, () => {
                                if (null == t.variants || 0 === t.variants.length) return null;
                                let e = t.variants[em];
                                if (null == e) return null;
                                let [i] = e.items;
                                return e_(i, G, ea, ex);
                            })
                            .with(d.Z.EXTERNAL_SKU, () =>
                                (0, l.jsx)(U.b, {
                                    product: t,
                                    animationState: G ? "on" : "off",
                                    className: eh || (ea && !G) ? eo.externalProductDimmed : void 0,
                                }),
                            )
                            .otherwise(() => null),
                    }),
                    (() => {
                        let e = ea ? h.sV5 : eh ? h.mBM : null;
                        return null == e
                            ? null
                            : (0, l.jsx)("div", {
                                  className: eo.cardStateIconWrapper,
                                  children: (0, l.jsx)(e, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 38,
                                      height: 38,
                                      className: a()(eo.cardStateIcon, { [eo.checkmark]: ea }),
                                  }),
                              });
                    })(),
                    (0, l.jsxs)("div", {
                        className: a()(eo.cardText, J ? eo.darkCardBackground : eo.lightCardBackground, {
                            [eo.variantsGroup]: t.type === d.Z.VARIANTS_GROUP,
                            [eo.thumbnailVariant]: t.type === d.Z.VARIANTS_GROUP && H === en.Ch.THUMBNAIL,
                        }),
                        children: [
                            (0, l.jsx)(h.X6q, {
                                variant: "text-lg/bold",
                                className: eo.productName,
                                children: F,
                            }),
                            t.type === d.Z.VARIANTS_GROUP
                                ? H === en.Ch.DEFAULT
                                    ? (0, l.jsx)(D.P, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: {
                                              previewingVariantIndex: b,
                                              handleEntering: y,
                                              handleLeaving: O,
                                          },
                                          selectedVariantIndex: f,
                                          setIsHoveringOnSwitch: eC,
                                          minimal: !G,
                                          alternativeBackgroundColor:
                                              (null == _ ? void 0 : _.type) === d.Z.PROFILE_EFFECT,
                                      })
                                    : (0, l.jsx)(V.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: {
                                              previewingVariantIndex: b,
                                              handleEntering: y,
                                              handleLeaving: O,
                                          },
                                          selectedVariantIndex: f,
                                          setIsHoveringOnSwitch: eC,
                                      })
                                : null,
                            (0, l.jsx)(ev, {
                                product: t,
                                tab: o,
                                buildHandlePreviewClick: eI,
                                selectedProduct: g,
                                selectedVariantIndex: f,
                                cardRef: c,
                                analyticsLocations: k,
                                isPremiumUser: Y,
                                isPremiumProduct: X,
                                isPartiallyOwnedBundle: ep,
                                isPurchased: ea,
                                isDisabled: eh,
                                discount: Q,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    eC = em;
