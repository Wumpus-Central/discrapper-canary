i.d(t, {
    Z: () => eP,
    d: () => eh,
}),
    i(388685),
    i(314940);
var l = i(951288),
    r = i(647438),
    n = i(120356),
    a = i.n(n),
    s = i(278074),
    o = i(873546),
    d = i(979554),
    c = i(685816),
    u = i(311570),
    p = i(399606),
    g = i(622535),
    h = i(481060),
    m = i(607070),
    v = i(100527),
    x = i(906732),
    f = i(104505),
    C = i(333867),
    P = i(767714),
    _ = i(876917),
    y = i(567400),
    I = i(210887),
    O = i(825102),
    S = i(960919),
    b = i(275388),
    j = i(626135),
    E = i(74538),
    A = i(335131),
    k = i(381585),
    T = i(1870),
    L = i(429368),
    N = i(884697),
    w = i(635552),
    R = i(290175),
    Z = i(724994),
    H = i(297651),
    W = i(390698),
    B = i(813083),
    M = i(680942),
    U = i(558060),
    D = i(237031),
    G = i(508925),
    z = i(306092),
    V = i(453713),
    F = i(325834),
    K = i(143941),
    q = i(616066),
    Y = i(216541),
    Q = i(22267),
    X = i(67409),
    J = i(58201),
    $ = i(445794),
    ee = i(201964),
    et = i(361110),
    ei = i(29121),
    el = i(956472),
    er = i(832149),
    en = i(642909),
    ea = i(215023),
    es = i(981631),
    eo = i(474936),
    ed = i(388032),
    ec = i(300179);
function eu(e) {
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
let ep = (e) => {
        let { skuId: t, isHighlighted: i, isPurchased: r } = e;
        return (0, l.jsx)("div", {
            className: ec.profileEffectShopPreview,
            children: (0, l.jsx)(_.Z, {
                skuId: t,
                isHighlighted: i,
                isPurchased: r && !i,
                removeSetHeight: !0,
            }),
        });
    },
    eg = (e) => {
        let { isHighlighted: t, isPurchased: i, user: r, item: n } = e;
        return (0, l.jsx)("div", {
            className: ec.avatarContainer,
            children: (0, l.jsx)(q.R, {
                item: n,
                user: r,
                isPurchased: i,
                isHighlighted: t,
            }),
        });
    },
    eh = (e) => {
        let { showStatus: t, width: i, opacity: r } = e;
        return (0, l.jsxs)("div", {
            className: a()(ec.nameplatePreviewSampleItem, ec.placeholderItem),
            style: { opacity: r },
            children: [
                (0, l.jsx)(h.qEK, {
                    src: null,
                    size: h.EFr.SIZE_32,
                    status: t ? es.Skl.ONLINE : void 0,
                    statusColor: "var(--border-subtle)",
                    "aria-hidden": !0,
                    imageClassName: ec.nameplatePlaceholderAvatar,
                }),
                (0, l.jsx)("div", {
                    className: ec.placeholderBar,
                    style: { maxWidth: null != i ? i : "100px" },
                }),
            ],
        });
    },
    em = (e) => {
        let { user: t, nameplate: i, isHighlighted: r, isPurchased: n } = e;
        return (0, l.jsx)("div", {
            className: ec.nameplatePreviewRootContainer,
            children: (0, l.jsxs)("div", {
                className: ec.nameplatePreviewList,
                children: [
                    (0, l.jsxs)("div", {
                        className: ec.fadeIn,
                        children: [
                            (0, l.jsx)(eh, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7,
                            }),
                            (0, l.jsx)(eh, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                        ],
                    }),
                    (0, l.jsx)(Q.Z, {
                        user: t,
                        nameplate: i,
                        className: ec.nameplatePreviewSampleItem,
                        isHighlighted: r,
                        showPlaceholderUser: !r,
                        showStatus: !0,
                        isPurchased: n,
                    }),
                    (0, l.jsxs)("div", {
                        className: ec.fadeOut,
                        children: [
                            (0, l.jsx)(eh, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                            (0, l.jsx)(eh, {
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
    ev = (e) => {
        let { tab: t, selectedProduct: i, cardRef: r, children: n } = e,
            { handleCardVisibilityChange: a } = (0, H.E)(i.skuId, t === ea.AW.CATALOG ? "full" : t);
        return (0, l.jsx)(g.$, {
            innerRef: r,
            onChange: a,
            threshold: 0,
            children: n,
        });
    },
    ex = r.memo(function (e) {
        var { tab: t, product: i, onMount: n, shopBlockType: a } = e,
            s = (function (e, t) {
                if (null == e) return {};
                var i,
                    l,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var i,
                            l,
                            r = {},
                            n = Object.keys(e);
                        for (l = 0; l < n.length; l++) (i = n[l]), t.indexOf(i) >= 0 || (r[i] = e[i]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < n.length; l++)
                        (i = n[l]),
                            !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
                }
                return r;
            })(e, ["tab", "product", "onMount", "shopBlockType"]);
        let o = (0, p.e7)([T.Z], () => T.Z.purchases),
            d = (0, L.o)(i, o),
            c = (0, J.W)(i, d),
            u = r.useRef(null),
            { previewingVariantIndex: g, handleEntering: h, handleLeaving: m } = (0, et.f)(i),
            v = (0, ee.o)(i, o, g);
        return (
            r.useEffect(() => {
                null == n || n(u, i);
            }, [n, i]),
            (0, l.jsx)(ev, {
                tab: t,
                selectedProduct: c,
                cardRef: u,
                children: (0, l.jsx)(
                    eC,
                    eu(
                        {
                            tab: t,
                            product: i,
                            selectedVariantIndex: d,
                            selectedProduct: c,
                            cardRef: u,
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
function ef(e) {
    let {
            product: t,
            tab: i,
            selectedProduct: r,
            selectedVariantIndex: n,
            cardRef: a,
            analyticsLocations: s,
            buildHandlePreviewClick: c,
            isPremiumUser: g,
            isPremiumProduct: m,
            isPurchased: x,
            isPartiallyOwnedBundle: f,
            isDisabled: _,
            discount: y,
        } = e,
        I = (0, k.sp)(),
        E = (0, N.rN)(t),
        [L, R] = (0, p.Wu)([T.Z], () => [
            T.Z.isClaiming === t.skuId,
            null != T.Z.isClaiming && T.Z.isClaiming !== t.skuId,
        ]),
        Z = (0, N.XM)(r, g, !1),
        H = (0, N.ne)({
            product: r,
            isPartiallyOwnedBundle: f,
            isPurchased: x,
        }),
        { enabled: B } = (0, O.WX)({ location: "collectibles_shop_tall_card" }),
        { handleUseNow: D, isApplying: G } = (0, w.W)({ product: r }),
        V = c(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        F = (0, $.Iw)(t),
        K = null != F,
        {
            displayPrices: q,
            checkoutEligiblePrices: Y,
            isOrbExclusive: Q,
            shouldCheckoutWithOrbs: J,
            hasSufficientOrbs: ee,
        } = (0, el.Ip)({
            product: t,
            isPremiumUser: g,
            tab: i,
            hasDiscountOffer: K,
        });
    if (0 === q.length) return null;
    let et = () =>
        (0, l.jsx)(h.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), V(e);
            },
            text: ed.intl.string(ed.t.FdGl5O),
            fullWidth: !0,
        });
    return (0, l.jsxs)("div", {
        className: ec.detailsWrapper,
        children: [
            (0, l.jsx)("div", {
                className: ec.innerBlur,
                children: _
                    ? (0, l.jsx)(h.Text, {
                          tag: "div",
                          variant: "heading-md/semibold",
                          color: "header-muted",
                          className: ec.priceTag,
                          children: ed.intl.string(ed.t.wu4gyc),
                      })
                    : x || f
                      ? (0, l.jsx)(W.U, {
                            className: ec.priceTag,
                            isPartiallyPurchased: f,
                        })
                      : m
                        ? (0, l.jsx)(h.Text, {
                              variant: "text-md/semibold",
                              className: ec.priceTag,
                              children: ed.intl.string(ed.t.rt69oq),
                          })
                        : B
                          ? (0, l.jsx)(z.e, {
                                displayPrices: q,
                                isPremiumUser: g,
                                discount: y,
                                hasSufficientOrbs: ee,
                                discountOfferAmount: F,
                            })
                          : (0, l.jsx)(U.Z, {
                                product: r,
                                discount: y,
                                isPremiumUser: g,
                                className: ec.priceTag,
                                hideStrikethroughPrice: !0,
                                nitroIconType: "default",
                                nitroIconSize: "md",
                                discountOfferAmount: F,
                            }),
            }),
            (0, l.jsx)("div", {
                className: ec.innerHover,
                children: (0, l.jsxs)(h.hE2, {
                    wrap: !1,
                    fullWidth: !0,
                    children: [
                        (() => {
                            if (m && !g && !E)
                                return (0, l.jsx)("div", {
                                    className: ec.hoverUpsellContainer,
                                    children: (0, l.jsx)(P.Z, {
                                        fullWidth: !0,
                                        className: ec.__invalid_premiumSubscribeButton,
                                        disabled: R,
                                        onClick: (e) => e.stopPropagation(),
                                        textOptions: { textOverride: ed.intl.string(ed.t.sEAnVF) },
                                        subscriptionTier: eo.Si.TIER_2,
                                    }),
                                });
                            if (!H || _) return et();
                            if (x)
                                return (0, l.jsx)(h.zxk, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(), D();
                                    },
                                    loading: G,
                                    text: ed.intl.string(ed.t.MAS7uL),
                                    fullWidth: !0,
                                });
                            {
                                if (m) {
                                    let e = async () => {
                                        j.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                            collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                            sku_id: t.skuId,
                                            page_type: i,
                                            page_section: null == I ? void 0 : I.pageSection,
                                            page_category: i === ea.AW.HOME || null == I ? void 0 : I.pageCategory,
                                            page_index:
                                                i === ea.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                                            page_size: i === ea.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                                            tile_type: d.Z[t.type],
                                            tile_position: String(null == I ? void 0 : I.tilePosition),
                                            cta_name: "claim premium product button",
                                        }),
                                            await (0, A.fK)(t.skuId),
                                            (0, er.Z)({
                                                product: t,
                                                analyticsLocations: s,
                                                purchaseType: ea.o8.PREMIUM_PURCHASE,
                                            });
                                    };
                                    return (0, l.jsx)(h.zxk, {
                                        variant: "primary",
                                        onClick: (t) => {
                                            t.stopPropagation(), e();
                                        },
                                        disabled: R,
                                        loading: L,
                                        loadingStartedLabel: ed.intl.string(ed.t["TYw+9v"]),
                                        loadingFinishedLabel: ed.intl.string(ed.t.Pg1UPz),
                                        text: ed.intl.string(ed.t.zp6caG),
                                        fullWidth: !0,
                                    });
                                }
                                if (J)
                                    if (ee)
                                        return (0, l.jsx)(h.zxk, {
                                            variant: "primary",
                                            text: ed.intl.format(ed.t.kAgx5O, {
                                                orbPrice: Y[0].amount,
                                                orbIconHook: () => (0, l.jsx)(S.Z, { className: ec.orbIconAligned }),
                                            }),
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    j.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                                        sku_id: t.skuId,
                                                        page_type: i,
                                                        page_section: null == I ? void 0 : I.pageSection,
                                                        page_category:
                                                            i === ea.AW.HOME || null == I ? void 0 : I.pageCategory,
                                                        page_index:
                                                            i === ea.AW.CATALOG
                                                                ? null == I
                                                                    ? void 0
                                                                    : I.pageIndex
                                                                : void 0,
                                                        page_size:
                                                            i === ea.AW.CATALOG
                                                                ? null == I
                                                                    ? void 0
                                                                    : I.pageSize
                                                                : void 0,
                                                        tile_type: d.Z[t.type],
                                                        tile_position: String(null == I ? void 0 : I.tilePosition),
                                                        cta_name: "claim with orbs button",
                                                    }),
                                                    (0, b.qA)({
                                                        skuId: (0, X.S)({
                                                            product: t,
                                                            selectedVariantIndex: n,
                                                        }),
                                                        onCheckoutSuccess: (e) => {
                                                            var i;
                                                            let { entitlements: l } = e;
                                                            (0, A.qg)({ variantsReturnStyle: u.v.VARIANTS_GROUP }),
                                                                (0, er.Z)({
                                                                    product: t,
                                                                    analyticsLocations: s,
                                                                    itemConsumed:
                                                                        null == (i = l[0]) ? void 0 : i.consumed,
                                                                    purchaseType: ea.o8.ORB,
                                                                });
                                                        },
                                                        analyticsLocations: s,
                                                    });
                                            },
                                            "aria-label": ed.intl.formatToPlainString(ed.t["fNG/09"], {
                                                orbPrice: Y[0].amount,
                                            }),
                                            fullWidth: !0,
                                        });
                                    else return et();
                                if (i === ea.AW.ORBS)
                                    return (0, l.jsx)(h.zxk, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(), V(e);
                                        },
                                        text: ed.intl.string(ed.t.GpnHfH),
                                        fullWidth: !0,
                                    });
                                let e = K
                                    ? ed.intl.formatToPlainString(ed.t["5U5RBw"], { discountOfferAmount: F })
                                    : ed.intl.formatToPlainString(ed.t["cNSL/v"], { price: Z });
                                return (0, l.jsx)(h.zxk, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            j.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                                sku_id: t.skuId,
                                                page_type: i,
                                                page_section: null == I ? void 0 : I.pageSection,
                                                page_category: i === ea.AW.HOME || null == I ? void 0 : I.pageCategory,
                                                page_index:
                                                    i === ea.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                                                page_size:
                                                    i === ea.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                                                tile_type: d.Z[t.type],
                                                tile_position: String(null == I ? void 0 : I.tilePosition),
                                                cta_name: "buy button",
                                            }),
                                            (0, C.Z)({
                                                skuId: (0, X.S)({
                                                    product: t,
                                                    selectedVariantIndex: n,
                                                }),
                                                analyticsLocations: s,
                                                returnRef: a,
                                                variantsReturnStyle: u.v.VARIANTS_GROUP,
                                            });
                                    },
                                    text: e,
                                    fullWidth: !0,
                                });
                            }
                        })(),
                        m || o.tq || Q || !H || i === ea.AW.ORBS
                            ? null
                            : E
                              ? (0, l.jsx)(h.hU, {
                                    variant: "primary",
                                    "aria-label": ed.intl.string(ed.t.SKNnqq),
                                    icon: h.tEF,
                                    onClick: (e) => {
                                        e.stopPropagation(), V(e);
                                    },
                                })
                              : (0, l.jsx)(k.k0, {
                                    newValue: { pageCategory: i === ea.AW.HOME || null == I ? void 0 : I.pageCategory },
                                    children: (0, l.jsx)(M.Z, {
                                        primary: !0,
                                        product: t,
                                        selectedVariantIndex: n,
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
let eC = r.memo(function (e) {
        let {
                product: t,
                user: i,
                category: n,
                tab: o,
                cardRef: u,
                selectedProduct: g,
                firstCollectibleItem: C,
                selectedVariantIndex: P,
                handleEntering: _,
                handleLeaving: O,
                previewingVariantIndex: S,
                className: b,
                shopBlockType: A,
            } = e,
            { analyticsLocations: T } = (0, x.ZP)([v.Z.COLLECTIBLES_SHOP_CARD]),
            L = (0, k.sp)(),
            w = (0, en.G)("CollectiblesShopTallCard"),
            H = null != A && A === c.z.HERO && w ? ea.Ch.THUMBNAIL : ea.Ch.DEFAULT,
            W = (0, y.Y)({ location: "CollectiblesShopTallCard" }),
            { isHoveringOrFocusing: M } = (0, f.Z)(u),
            U = (0, ei.To)(t),
            z = (0, p.e7)([m.Z], () => m.Z.useReducedMotion),
            q = E.ZP.canUseCollectibles(i),
            Q = r.useMemo(() => (0, N.BH)(t, q), [t, q]),
            X = (0, N.G1)(t),
            J = (0, p.e7)([I.Z], () => (0, h.wjy)(I.Z.theme)),
            $ = (0, N.Yq)(t.skuId),
            ee = n.skuId === ea.bu && (0, N.WW)(t.skuId),
            { isPurchased: et, isPartiallyOwnedBundle: er } = (0, Z.L)(g),
            { isDisabled: eo } = (0, R.G)(g.skuId),
            eh = null !== S ? S : P,
            [ev, ex] = r.useState(!1),
            eC = r.useCallback(
                function (e, t, r) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return (0, s.EQ)(e.type)
                        .with(d.Z.PROFILE_EFFECT, () =>
                            (0, l.jsx)(ep, {
                                isHighlighted: t,
                                skuId: e.skuId,
                                isPurchased: r && !n,
                            }),
                        )
                        .with(d.Z.AVATAR_DECORATION, () =>
                            (0, l.jsx)(eg, {
                                item: e,
                                user: i,
                                isHighlighted: t,
                                isPurchased: r,
                            }),
                        )
                        .with(d.Z.NAMEPLATE, () =>
                            (0, l.jsx)(em, {
                                user: i,
                                nameplate: e,
                                isHighlighted: t,
                                isPurchased: r,
                            }),
                        )
                        .otherwise(() => null);
                },
                [i],
            ),
            eP = r.useRef(null),
            { displayPrices: e_, isOrbExclusive: ey } = (0, el.oo)({
                product: t,
                isPremiumUser: q,
                tab: o,
            }),
            eI = r.useCallback(
                (e) => (i) => {
                    let l = (0, el.oQ)({ product: t });
                    (eP.current = i.currentTarget),
                        j.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                            sku_id: t.skuId,
                            page_type: o,
                            page_section: null == L ? void 0 : L.pageSection,
                            page_category: o === ea.AW.HOME ? void 0 : n.name,
                            page_index: o === ea.AW.CATALOG ? (null == L ? void 0 : L.pageIndex) : void 0,
                            page_size: o === ea.AW.CATALOG ? (null == L ? void 0 : L.pageSize) : void 0,
                            tile_type: d.Z[t.type],
                            tile_position: String(null == L ? void 0 : L.tilePosition),
                            cta_name: null,
                        }),
                        (0, D.T)({
                            product: t,
                            category: n,
                            shouldCheckoutWithOrbs: l,
                            analyticsLocations: T,
                            analyticsSource: e,
                            returnRef: eP,
                            tab: o,
                            variantType: H,
                        });
                },
                [t, n, o, T, L, H],
            ),
            eO = eI(v.Z.COLLECTIBLES_SHOP_CARD);
        if (0 === e_.length || ((0, N.x6)(t) && null != Q && Q.discountPercentage < 0)) return null;
        let eS = a()(ec.badge, { [ec.badgeLeftAligned]: W });
        return (0, l.jsx)(h.tEY, {
            children: (0, l.jsxs)(h.kL8, {
                className: a()(b, J ? ec.shopCardDark : ec.shopCard, {
                    [ec.partiallyOwned]: er && !M,
                    [ec.shopCardAnimation]: !z,
                    [J ? ec.shopCardDarkHighlighted : ec.shopCardHighlighted]: M,
                }),
                ref: u,
                onClick: eO,
                "aria-label": t.name,
                children: [
                    X &&
                        (0, l.jsx)(h.ua7, {
                            tooltipContentClassName: ec.premiumWheelTooltipContent,
                            color: h.ua7.Colors.PRIMARY,
                            text: ed.intl.string(ed.t.nKdAlJ),
                            children: (e) => {
                                var t, i;
                                return (0, l.jsx)(
                                    h.IGR,
                                    ((t = eu({}, e)),
                                    (i = i =
                                        {
                                            className: a()(ec.premiumWheelBadge, { [ec.badgeLeftAligned]: W }),
                                            text: (0, l.jsx)(h.SrA, {
                                                size: "md",
                                                color: "currentColor",
                                                className: ec.premiumWheel,
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
                    (0, l.jsx)(B.Z, {
                        category: n,
                        className: a()(ec.limitedTimeBadge, { [ec.badgeLeftAligned]: W }),
                        display: B.k.CARD,
                        shopBlockType: A,
                    }),
                    W &&
                        (0, l.jsx)(K.a, {
                            product: t,
                            selectedVariantIndex: P,
                            className: ec.wishlistButton,
                            isCardHovered: M,
                        }),
                    er || et || !$
                        ? ey
                            ? (0, l.jsx)(h.IGR, {
                                  text: ed.intl.string(ed.t["0TmQRE"]),
                                  disableColor: !0,
                                  className: eS,
                              })
                            : ee
                              ? (0, l.jsx)(h.IGR, {
                                    text: ed.intl.string(ed.t.S6kE9v),
                                    disableColor: !0,
                                    className: eS,
                                })
                              : null
                        : (0, l.jsx)(h.IGR, {
                              text: ed.intl.string(ed.t.y2b7CA),
                              disableColor: !0,
                              className: eS,
                          }),
                    (0, l.jsx)("div", {
                        className: a()(ec.preview, { [ec.previewThumbnailVariant]: H === ea.Ch.THUMBNAIL }),
                        children: (0, s.EQ)(t.type)
                            .with(d.Z.PROFILE_EFFECT, d.Z.AVATAR_DECORATION, d.Z.NAMEPLATE, () => eC(C, M, et))
                            .with(d.Z.BUNDLE, () =>
                                (0, l.jsx)(Y.d, {
                                    product: t,
                                    user: i,
                                    isPurchased: et,
                                    isHighlighted: M,
                                }),
                            )
                            .with(d.Z.VARIANTS_GROUP, () => {
                                if (null == t.variants || 0 === t.variants.length) return null;
                                let e = t.variants[eh];
                                if (null == e) return null;
                                let [i] = e.items;
                                return eC(i, M, et, ev);
                            })
                            .with(d.Z.EXTERNAL_SKU, () =>
                                (0, l.jsx)(G.b, {
                                    product: t,
                                    animationState: M ? "on" : "off",
                                    className: eo || (et && !M) ? ec.externalProductDimmed : void 0,
                                }),
                            )
                            .otherwise(() => null),
                    }),
                    (() => {
                        let e = et ? h.sV5 : eo ? h.mBM : null;
                        return null == e
                            ? null
                            : (0, l.jsx)("div", {
                                  className: ec.cardStateIconWrapper,
                                  children: (0, l.jsx)(e, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 38,
                                      height: 38,
                                      className: a()(ec.cardStateIcon, { [ec.checkmark]: et }),
                                  }),
                              });
                    })(),
                    (0, l.jsxs)("div", {
                        className: a()(ec.cardText, J ? ec.darkCardBackground : ec.lightCardBackground, {
                            [ec.variantsGroup]: t.type === d.Z.VARIANTS_GROUP,
                            [ec.thumbnailVariant]: t.type === d.Z.VARIANTS_GROUP && H === ea.Ch.THUMBNAIL,
                        }),
                        children: [
                            (0, l.jsx)(h.X6q, {
                                variant: "text-lg/bold",
                                className: ec.productName,
                                children: U,
                            }),
                            t.type === d.Z.VARIANTS_GROUP
                                ? H === ea.Ch.DEFAULT
                                    ? (0, l.jsx)(V.P, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: {
                                              previewingVariantIndex: S,
                                              handleEntering: _,
                                              handleLeaving: O,
                                          },
                                          selectedVariantIndex: P,
                                          setIsHoveringOnSwitch: ex,
                                          minimal: !M,
                                          alternativeBackgroundColor:
                                              (null == C ? void 0 : C.type) === d.Z.PROFILE_EFFECT,
                                      })
                                    : (0, l.jsx)(F.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: {
                                              previewingVariantIndex: S,
                                              handleEntering: _,
                                              handleLeaving: O,
                                          },
                                          selectedVariantIndex: P,
                                          setIsHoveringOnSwitch: ex,
                                      })
                                : null,
                            (0, l.jsx)(ef, {
                                product: t,
                                tab: o,
                                buildHandlePreviewClick: eI,
                                selectedProduct: g,
                                selectedVariantIndex: P,
                                cardRef: u,
                                analyticsLocations: T,
                                isPremiumUser: q,
                                isPremiumProduct: X,
                                isPartiallyOwnedBundle: er,
                                isPurchased: et,
                                isDisabled: eo,
                                discount: Q,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    eP = ex;
