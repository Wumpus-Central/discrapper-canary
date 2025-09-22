n.d(t, {
    Z: () => eN,
    d: () => ev,
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
    d = n(685816),
    f = n(311570),
    _ = n(399606),
    p = n(622535),
    h = n(481060),
    m = n(727637),
    g = n(607070),
    E = n(100527),
    b = n(906732),
    y = n(333867),
    O = n(767714),
    v = n(876917),
    I = n(959840),
    T = n(210887),
    S = n(825102),
    A = n(960919),
    C = n(275388),
    N = n(626135),
    R = n(74538),
    P = n(335131),
    w = n(381585),
    D = n(1870),
    x = n(429368),
    L = n(884697),
    j = n(635552),
    M = n(290175),
    k = n(724994),
    U = n(297651),
    G = n(390698),
    B = n(813083),
    Z = n(680942),
    F = n(558060),
    V = n(237031),
    H = n(508925),
    Y = n(306092),
    W = n(453713),
    K = n(325834),
    z = n(143941),
    q = n(616066),
    X = n(216541),
    Q = n(22267),
    J = n(67409),
    $ = n(58201),
    ee = n(445794),
    et = n(466679),
    en = n(201964),
    er = n(361110),
    ei = n(29121),
    ea = n(956472),
    eo = n(832149),
    es = n(642909),
    el = n(215023),
    ec = n(981631),
    eu = n(474936),
    ed = n(388032),
    ef = n(300179);
function e_(e, t, n) {
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
function ep(e) {
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
                e_(e, t, n[t]);
            });
    }
    return e;
}
function eh(e, t) {
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
function em(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eh(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eg(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eE(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eE(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let eb = 250,
    ey = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: i } = e;
        return (0, r.jsx)("div", {
            className: ef.profileEffectShopPreview,
            children: (0, r.jsx)(v.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: i && !n,
                removeSetHeight: !0,
            }),
        });
    },
    eO = (e) => {
        let { isHighlighted: t, isPurchased: n, user: i, item: a } = e;
        return (0, r.jsx)("div", {
            className: ef.avatarContainer,
            children: (0, r.jsx)(q.R, {
                item: a,
                user: i,
                isPurchased: n,
                isHighlighted: t,
            }),
        });
    },
    ev = (e) => {
        let { showStatus: t, width: n, opacity: i } = e,
            a = "var(--border-subtle)";
        return (0, r.jsxs)("div", {
            className: o()(ef.nameplatePreviewSampleItem, ef.placeholderItem),
            style: { opacity: i },
            children: [
                (0, r.jsx)(h.qEK, {
                    src: null,
                    size: h.EFr.SIZE_32,
                    status: t ? ec.Skl.ONLINE : void 0,
                    statusColor: a,
                    "aria-hidden": !0,
                    imageClassName: ef.nameplatePlaceholderAvatar,
                }),
                (0, r.jsx)("div", {
                    className: ef.placeholderBar,
                    style: { maxWidth: null != n ? n : "100px" },
                }),
            ],
        });
    },
    eI = (e) => {
        let { user: t, nameplate: n, isHighlighted: i, isPurchased: a } = e;
        return (0, r.jsx)("div", {
            className: ef.nameplatePreviewRootContainer,
            children: (0, r.jsxs)("div", {
                className: ef.nameplatePreviewList,
                children: [
                    (0, r.jsxs)("div", {
                        className: ef.fadeIn,
                        children: [
                            (0, r.jsx)(ev, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7,
                            }),
                            (0, r.jsx)(ev, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                        ],
                    }),
                    (0, r.jsx)(Q.Z, {
                        user: t,
                        nameplate: n,
                        className: ef.nameplatePreviewSampleItem,
                        isHighlighted: i,
                        showPlaceholderUser: !i,
                        showStatus: !0,
                        isPurchased: a,
                    }),
                    (0, r.jsxs)("div", {
                        className: ef.fadeOut,
                        children: [
                            (0, r.jsx)(ev, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                            (0, r.jsx)(ev, {
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
    eT = (e) => {
        let { tab: t, selectedProduct: n, cardRef: i, children: a } = e,
            { handleCardVisibilityChange: o } = (0, U.E)(n.skuId, t === el.AW.CATALOG ? "full" : t);
        return (0, r.jsx)(p.$, {
            innerRef: i,
            onChange: o,
            threshold: 0,
            children: a,
        });
    },
    eS = i.memo(function (e) {
        var { tab: t, product: n, onMount: a, shopBlockType: o } = e,
            s = eg(e, ["tab", "product", "onMount", "shopBlockType"]);
        let l = (0, _.e7)([D.Z], () => D.Z.purchases),
            c = (0, x.o)(n, l),
            u = (0, $.W)(n, c),
            d = i.useRef(null),
            { previewingVariantIndex: f, handleEntering: p, handleLeaving: h } = (0, er.f)(n),
            m = (0, en.o)(n, l, f);
        return (
            i.useEffect(() => {
                null == a || a(d, n);
            }, [a, n]),
            (0, r.jsx)(eT, {
                tab: t,
                selectedProduct: u,
                cardRef: d,
                children: (0, r.jsx)(
                    eC,
                    ep(
                        {
                            tab: t,
                            product: n,
                            selectedVariantIndex: c,
                            selectedProduct: u,
                            cardRef: d,
                            previewingVariantIndex: f,
                            handleEntering: p,
                            handleLeaving: h,
                            firstCollectibleItem: m,
                            shopBlockType: o,
                        },
                        s,
                    ),
                ),
            })
        );
    });
function eA(e) {
    let {
            product: t,
            tab: n,
            selectedProduct: i,
            selectedVariantIndex: a,
            cardRef: o,
            analyticsLocations: s,
            buildHandlePreviewClick: c,
            isPremiumUser: d,
            isPremiumProduct: p,
            isPurchased: m,
            isPartiallyOwnedBundle: g,
            isDisabled: b,
            discount: v,
        } = e,
        I = (0, w.sp)(),
        T = (0, L.rN)(t),
        [R, x] = (0, _.Wu)([D.Z], () => [
            D.Z.isClaiming === t.skuId,
            null != D.Z.isClaiming && D.Z.isClaiming !== t.skuId,
        ]),
        M = (0, L.XM)(i, d, !1),
        k = (0, L.ne)({
            product: i,
            isPartiallyOwnedBundle: g,
            isPurchased: m,
        }),
        { enabled: U } = (0, S.WX)({ location: "collectibles_shop_tall_card" }),
        { handleUseNow: B, isApplying: V } = (0, j.W)({ product: i }),
        H = c(E.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        W = (0, ee.Iw)(t),
        K = null != W,
        {
            displayPrices: z,
            checkoutEligiblePrices: q,
            isOrbExclusive: X,
            shouldCheckoutWithOrbs: Q,
            hasSufficientOrbs: $,
        } = (0, ea.Ip)({
            product: t,
            isPremiumUser: d,
            tab: n,
            hasDiscountOffer: K,
        });
    if (0 === z.length) return null;
    let et = () =>
            (0, r.jsx)("div", {
                className: ef.hoverUpsellContainer,
                children: (0, r.jsx)(O.Z, {
                    fullWidth: !0,
                    className: ef.__invalid_premiumSubscribeButton,
                    disabled: x,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: ed.intl.string(ed.t.sEAnVF) },
                    subscriptionTier: eu.Si.TIER_2,
                }),
            }),
        en = () =>
            b
                ? (0, r.jsx)(h.Text, {
                      tag: "div",
                      variant: "heading-md/semibold",
                      color: "header-muted",
                      className: ef.priceTag,
                      children: ed.intl.string(ed.t.wu4gyc),
                  })
                : m || g
                  ? (0, r.jsx)(G.U, {
                        className: ef.priceTag,
                        isPartiallyPurchased: g,
                    })
                  : p
                    ? (0, r.jsx)(h.Text, {
                          variant: "text-md/semibold",
                          className: ef.priceTag,
                          children: ed.intl.string(ed.t.rt69oq),
                      })
                    : U
                      ? (0, r.jsx)(Y.e, {
                            displayPrices: z,
                            isPremiumUser: d,
                            discount: v,
                            hasSufficientOrbs: $,
                            discountOfferAmount: W,
                        })
                      : (0, r.jsx)(F.Z, {
                            product: i,
                            discount: v,
                            isPremiumUser: d,
                            className: ef.priceTag,
                            hideStrikethroughPrice: !0,
                            nitroIconType: "default",
                            nitroIconSize: "md",
                            discountOfferAmount: W,
                        }),
        er = () =>
            p || l.tq || X || !k || n === el.AW.ORBS
                ? null
                : T
                  ? (0, r.jsx)(h.hU, {
                        variant: "primary",
                        "aria-label": ed.intl.string(ed.t.SKNnqq),
                        icon: h.tEF,
                        onClick: (e) => {
                            e.stopPropagation(), H(e);
                        },
                    })
                  : (0, r.jsx)(w.k0, {
                        newValue: { pageCategory: n === el.AW.HOME || null == I ? void 0 : I.pageCategory },
                        children: (0, r.jsx)(Z.Z, {
                            primary: !0,
                            product: t,
                            selectedVariantIndex: a,
                            returnRef: o,
                            tooltipDelay: eb,
                        }),
                    }),
        ei = () =>
            (0, r.jsx)(h.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), H(e);
                },
                text: ed.intl.string(ed.t.FdGl5O),
                fullWidth: !0,
            }),
        es = () => {
            let e = () => {
                    N.default.track(ec.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                        sku_id: t.skuId,
                        page_type: n,
                        page_section: null == I ? void 0 : I.pageSection,
                        page_category: n === el.AW.HOME || null == I ? void 0 : I.pageCategory,
                        page_index: n === el.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                        page_size: n === el.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                        tile_type: u.Z[t.type],
                        tile_position: String(null == I ? void 0 : I.tilePosition),
                        cta_name: "buy button",
                    }),
                        (0, y.Z)({
                            skuId: (0, J.S)({
                                product: t,
                                selectedVariantIndex: a,
                            }),
                            analyticsLocations: s,
                            returnRef: o,
                            variantsReturnStyle: f.v.VARIANTS_GROUP,
                        });
                },
                i = K
                    ? ed.intl.formatToPlainString(ed.t["5U5RBw"], { discountOfferAmount: W })
                    : ed.intl.formatToPlainString(ed.t["cNSL/v"], { price: M });
            return (0, r.jsx)(h.zxk, {
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
                N.default.track(ec.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                    sku_id: t.skuId,
                    page_type: n,
                    page_section: null == I ? void 0 : I.pageSection,
                    page_category: n === el.AW.HOME || null == I ? void 0 : I.pageCategory,
                    page_index: n === el.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                    page_size: n === el.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == I ? void 0 : I.tilePosition),
                    cta_name: "claim with orbs button",
                }),
                    (0, C.qA)({
                        skuId: (0, J.S)({
                            product: t,
                            selectedVariantIndex: a,
                        }),
                        onCheckoutSuccess: (e) => {
                            var n;
                            let { entitlements: r } = e;
                            (0, P.qg)({ variantsReturnStyle: f.v.VARIANTS_GROUP }),
                                (0, eo.Z)({
                                    product: t,
                                    analyticsLocations: s,
                                    itemConsumed: null == (n = r[0]) ? void 0 : n.consumed,
                                    purchaseType: el.o8.ORB,
                                });
                        },
                        analyticsLocations: s,
                    });
            };
            return (0, r.jsx)(h.zxk, {
                variant: "primary",
                text: ed.intl.format(ed.t.kAgx5O, {
                    orbPrice: q[0].amount,
                    orbIconHook: () => (0, r.jsx)(A.Z, { className: ef.orbIconAligned }),
                }),
                onClick: (t) => {
                    t.stopPropagation(), e();
                },
                "aria-label": ed.intl.formatToPlainString(ed.t["fNG/09"], { orbPrice: q[0].amount }),
                fullWidth: !0,
            });
        },
        ep = () => {
            let e = async () => {
                N.default.track(ec.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                    sku_id: t.skuId,
                    page_type: n,
                    page_section: null == I ? void 0 : I.pageSection,
                    page_category: n === el.AW.HOME || null == I ? void 0 : I.pageCategory,
                    page_index: n === el.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                    page_size: n === el.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == I ? void 0 : I.tilePosition),
                    cta_name: "claim premium product button",
                }),
                    await (0, P.fK)(t.skuId),
                    (0, eo.Z)({
                        product: t,
                        analyticsLocations: s,
                        purchaseType: el.o8.PREMIUM_PURCHASE,
                    });
            };
            return (0, r.jsx)(h.zxk, {
                variant: "primary",
                onClick: (t) => {
                    t.stopPropagation(), e();
                },
                disabled: x,
                loading: R,
                loadingStartedLabel: ed.intl.string(ed.t["TYw+9v"]),
                loadingFinishedLabel: ed.intl.string(ed.t.Pg1UPz),
                text: ed.intl.string(ed.t.zp6caG),
                fullWidth: !0,
            });
        },
        eh = () =>
            (0, r.jsx)(h.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), B();
                },
                loading: V,
                text: ed.intl.string(ed.t.MAS7uL),
                fullWidth: !0,
            }),
        em = () =>
            (0, r.jsx)(h.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), H(e);
                },
                text: ed.intl.string(ed.t.GpnHfH),
                fullWidth: !0,
            }),
        eg = () => {
            if (p && !d && !T) return et();
            if (!k || b) return ei();
            if (m) return eh();
            if (p) return ep();
            if (Q)
                if ($) return e_();
                else return ei();
            return n === el.AW.ORBS ? em() : es();
        };
    return (0, r.jsxs)("div", {
        className: ef.detailsWrapper,
        children: [
            (0, r.jsx)("div", {
                className: ef.innerBlur,
                children: en(),
            }),
            (0, r.jsx)("div", {
                className: ef.innerHover,
                children: (0, r.jsxs)(h.hE2, {
                    wrap: !1,
                    fullWidth: !0,
                    children: [eg(), er()],
                }),
            }),
        ],
    });
}
let eC = i.memo(function (e) {
        let {
                product: t,
                user: n,
                category: a,
                tab: l,
                cardRef: f,
                selectedProduct: p,
                firstCollectibleItem: y,
                selectedVariantIndex: O,
                handleEntering: v,
                handleLeaving: S,
                previewingVariantIndex: A,
                className: C,
                shopBlockType: P,
            } = e,
            { analyticsLocations: D } = (0, b.ZP)([E.Z.COLLECTIBLES_SHOP_CARD]),
            x = (0, w.sp)(),
            j = (0, es.G)("CollectiblesShopTallCard"),
            U = null != P && P === d.z.HERO && j ? el.Ch.THUMBNAIL : el.Ch.DEFAULT,
            G = (0, I.O)({ location: "CollectiblesShopTallCard" }),
            Z = (0, m.Z)(f),
            F = (0, et.m)(f),
            Y = Z || F,
            q = (0, ei.To)(t),
            Q = (0, _.e7)([g.Z], () => g.Z.useReducedMotion),
            J = R.ZP.canUseCollectibles(n),
            $ = i.useMemo(() => (0, L.BH)(t, J), [t, J]),
            ee = (0, L.G1)(t),
            en = (0, _.e7)([T.Z], () => (0, h.wjy)(T.Z.theme)),
            er = (0, L.Yq)(t.skuId),
            eo = a.skuId === c.T.ANIME_V3 && (0, L.WW)(t.skuId),
            { isPurchased: eu, isPartiallyOwnedBundle: e_ } = (0, k.L)(p),
            { isDisabled: eh } = (0, M.G)(p.skuId),
            eg = null !== A ? A : O,
            [eE, eb] = i.useState(!1),
            ev = Y,
            eT = i.useCallback(
                function (e, t, i) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return (0, s.EQ)(e.type)
                        .with(u.Z.PROFILE_EFFECT, () =>
                            (0, r.jsx)(ey, {
                                isHighlighted: t,
                                profileEffectId: e.id,
                                isPurchased: i && !a,
                            }),
                        )
                        .with(u.Z.AVATAR_DECORATION, () =>
                            (0, r.jsx)(eO, {
                                item: e,
                                user: n,
                                isHighlighted: t,
                                isPurchased: i,
                            }),
                        )
                        .with(u.Z.NAMEPLATE, () =>
                            (0, r.jsx)(eI, {
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
            eS = i.useRef(null),
            { displayPrices: eC, isOrbExclusive: eN } = (0, ea.oo)({
                product: t,
                isPremiumUser: J,
                tab: l,
            }),
            eR = i.useCallback(
                (e) => (n) => {
                    let r = (0, ea.oQ)({ product: t });
                    (eS.current = n.currentTarget),
                        N.default.track(ec.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == x ? void 0 : x.sessionId,
                            sku_id: t.skuId,
                            page_type: l,
                            page_section: null == x ? void 0 : x.pageSection,
                            page_category: l === el.AW.HOME ? void 0 : a.name,
                            page_index: l === el.AW.CATALOG ? (null == x ? void 0 : x.pageIndex) : void 0,
                            page_size: l === el.AW.CATALOG ? (null == x ? void 0 : x.pageSize) : void 0,
                            tile_type: u.Z[t.type],
                            tile_position: String(null == x ? void 0 : x.tilePosition),
                            cta_name: null,
                        }),
                        (0, V.T)({
                            product: t,
                            category: a,
                            shouldCheckoutWithOrbs: r,
                            analyticsLocations: D,
                            analyticsSource: e,
                            returnRef: eS,
                            tab: l,
                            variantType: U,
                        });
                },
                [t, a, l, D, x, U],
            ),
            eP = eR(E.Z.COLLECTIBLES_SHOP_CARD);
        if (0 === eC.length) return null;
        let ew = () => {
                let e = eu ? h.sV5 : eh ? h.mBM : null;
                return null == e
                    ? null
                    : (0, r.jsx)("div", {
                          className: ef.cardStateIconWrapper,
                          children: (0, r.jsx)(e, {
                              size: "custom",
                              color: "currentColor",
                              width: 38,
                              height: 38,
                              className: o()(ef.cardStateIcon, { [ef.checkmark]: eu }),
                          }),
                      });
            },
            eD = (e) =>
                (0, r.jsxs)("div", {
                    className: o()(ef.cardText, en ? ef.darkCardBackground : ef.lightCardBackground, {
                        [ef.variantsGroup]: t.type === u.Z.VARIANTS_GROUP,
                        [ef.thumbnailVariant]: t.type === u.Z.VARIANTS_GROUP && e === el.Ch.THUMBNAIL,
                    }),
                    children: [
                        (0, r.jsx)(h.X6q, {
                            variant: "text-lg/bold",
                            className: ef.productName,
                            children: q,
                        }),
                        t.type === u.Z.VARIANTS_GROUP
                            ? e === el.Ch.DEFAULT
                                ? (0, r.jsx)(W.P, {
                                      variantGroupProduct: t,
                                      previewingVariantIndexProps: {
                                          previewingVariantIndex: A,
                                          handleEntering: v,
                                          handleLeaving: S,
                                      },
                                      selectedVariantIndex: O,
                                      setIsHoveringOnSwitch: eb,
                                      minimal: !Y,
                                      alternativeBackgroundColor: (null == y ? void 0 : y.type) === u.Z.PROFILE_EFFECT,
                                  })
                                : (0, r.jsx)(K.r, {
                                      variantGroupProduct: t,
                                      previewingVariantIndexProps: {
                                          previewingVariantIndex: A,
                                          handleEntering: v,
                                          handleLeaving: S,
                                      },
                                      selectedVariantIndex: O,
                                      setIsHoveringOnSwitch: eb,
                                  })
                            : null,
                        (0, r.jsx)(eA, {
                            product: t,
                            tab: l,
                            buildHandlePreviewClick: eR,
                            selectedProduct: p,
                            selectedVariantIndex: O,
                            cardRef: f,
                            analyticsLocations: D,
                            isPremiumUser: J,
                            isPremiumProduct: ee,
                            isPartiallyOwnedBundle: e_,
                            isPurchased: eu,
                            isDisabled: eh,
                            discount: $,
                        }),
                    ],
                });
        if ((0, L.x6)(t) && null != $ && $.discountPercentage < 0) return null;
        let ex = o()(ef.badge, { [ef.badgeLeftAligned]: G });
        return (0, r.jsx)(h.tEY, {
            children: (0, r.jsxs)(h.kL8, {
                className: o()(C, en ? ef.shopCardDark : ef.shopCard, {
                    [ef.partiallyOwned]: e_ && !Y,
                    [ef.shopCardAnimation]: !Q,
                    [en ? ef.shopCardDarkHighlighted : ef.shopCardHighlighted]: Y,
                }),
                ref: f,
                onClick: eP,
                "aria-label": t.name,
                children: [
                    ee &&
                        (0, r.jsx)(h.ua7, {
                            tooltipContentClassName: ef.premiumWheelTooltipContent,
                            color: h.ua7.Colors.PRIMARY,
                            text: ed.intl.string(ed.t.nKdAlJ),
                            children: (e) =>
                                (0, r.jsx)(
                                    h.IGR,
                                    em(ep({}, e), {
                                        className: o()(ef.premiumWheelBadge, { [ef.badgeLeftAligned]: G }),
                                        text: (0, r.jsx)(h.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: ef.premiumWheel,
                                        }),
                                    }),
                                ),
                        }),
                    (0, r.jsx)(B.Z, {
                        category: a,
                        className: o()(ef.limitedTimeBadge, { [ef.badgeLeftAligned]: G }),
                        display: B.k.CARD,
                        shopBlockType: P,
                    }),
                    G &&
                        !(0, L.x6)(t) &&
                        !eu &&
                        Y &&
                        (0, r.jsx)(z.s, {
                            skuId: t.skuId,
                            className: ef.wishlistButton,
                        }),
                    e_ || eu || !er
                        ? eN
                            ? (0, r.jsx)(h.IGR, {
                                  text: ed.intl.string(ed.t["0TmQRE"]),
                                  disableColor: !0,
                                  className: ex,
                              })
                            : eo
                              ? (0, r.jsx)(h.IGR, {
                                    text: ed.intl.string(ed.t.S6kE9v),
                                    disableColor: !0,
                                    className: ex,
                                })
                              : null
                        : (0, r.jsx)(h.IGR, {
                              text: ed.intl.string(ed.t.y2b7CA),
                              disableColor: !0,
                              className: ex,
                          }),
                    (0, r.jsx)("div", {
                        className: ef.preview,
                        children: (0, s.EQ)(t.type)
                            .with(u.Z.PROFILE_EFFECT, u.Z.AVATAR_DECORATION, u.Z.NAMEPLATE, () => eT(y, ev, eu))
                            .with(u.Z.BUNDLE, () =>
                                (0, r.jsx)(X.d, {
                                    product: t,
                                    user: n,
                                    isPurchased: eu,
                                    isHighlighted: Y,
                                }),
                            )
                            .with(u.Z.VARIANTS_GROUP, () => {
                                if (null == t.variants || 0 === t.variants.length) return null;
                                let e = t.variants[eg];
                                if (null == e) return null;
                                let [n] = e.items;
                                return eT(n, ev, eu, eE);
                            })
                            .with(u.Z.EXTERNAL_SKU, () =>
                                (0, r.jsx)(H.b, {
                                    product: t,
                                    animationState: ev ? "on" : "off",
                                    className: eh || (eu && !ev) ? ef.externalProductDimmed : void 0,
                                }),
                            )
                            .otherwise(() => null),
                    }),
                    ew(),
                    eD(U),
                ],
            }),
        });
    }),
    eN = eS;
