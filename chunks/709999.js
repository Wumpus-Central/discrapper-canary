n.d(t, {
    Z: () => eC,
    d: () => eO,
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
    z = n(616066),
    q = n(216541),
    X = n(22267),
    Q = n(67409),
    J = n(58201),
    $ = n(445794),
    ee = n(466679),
    et = n(201964),
    en = n(361110),
    er = n(29121),
    ei = n(956472),
    ea = n(832149),
    eo = n(642909),
    es = n(215023),
    el = n(981631),
    ec = n(474936),
    eu = n(388032),
    ed = n(300179);
function ef(e, t, n) {
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
function e_(e) {
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
                ef(e, t, n[t]);
            });
    }
    return e;
}
function ep(e, t) {
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
function eh(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ep(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function em(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eg(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eg(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let eE = 250,
    eb = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: i } = e;
        return (0, r.jsx)("div", {
            className: ed.profileEffectShopPreview,
            children: (0, r.jsx)(v.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: i && !n,
                removeSetHeight: !0,
            }),
        });
    },
    ey = (e) => {
        let { isHighlighted: t, isPurchased: n, user: i, item: a } = e;
        return (0, r.jsx)("div", {
            className: ed.avatarContainer,
            children: (0, r.jsx)(z.R, {
                item: a,
                user: i,
                isPurchased: n,
                isHighlighted: t,
            }),
        });
    },
    eO = (e) => {
        let { showStatus: t, width: n, opacity: i } = e,
            a = "var(--border-subtle)";
        return (0, r.jsxs)("div", {
            className: o()(ed.nameplatePreviewSampleItem, ed.placeholderItem),
            style: { opacity: i },
            children: [
                (0, r.jsx)(h.qEK, {
                    src: null,
                    size: h.EFr.SIZE_32,
                    status: t ? el.Skl.ONLINE : void 0,
                    statusColor: a,
                    "aria-hidden": !0,
                    imageClassName: ed.nameplatePlaceholderAvatar,
                }),
                (0, r.jsx)("div", {
                    className: ed.placeholderBar,
                    style: { maxWidth: null != n ? n : "100px" },
                }),
            ],
        });
    },
    ev = (e) => {
        let { user: t, nameplate: n, isHighlighted: i, isPurchased: a } = e;
        return (0, r.jsx)("div", {
            className: ed.nameplatePreviewRootContainer,
            children: (0, r.jsxs)("div", {
                className: ed.nameplatePreviewList,
                children: [
                    (0, r.jsxs)("div", {
                        className: ed.fadeIn,
                        children: [
                            (0, r.jsx)(eO, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7,
                            }),
                            (0, r.jsx)(eO, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                        ],
                    }),
                    (0, r.jsx)(X.Z, {
                        user: t,
                        nameplate: n,
                        className: ed.nameplatePreviewSampleItem,
                        isHighlighted: i,
                        showPlaceholderUser: !i,
                        showStatus: !0,
                        isPurchased: a,
                    }),
                    (0, r.jsxs)("div", {
                        className: ed.fadeOut,
                        children: [
                            (0, r.jsx)(eO, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                            (0, r.jsx)(eO, {
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
    eI = (e) => {
        let { tab: t, selectedProduct: n, cardRef: i, children: a } = e,
            { handleCardVisibilityChange: o } = (0, U.E)(n.skuId, t === es.AW.CATALOG ? "full" : t);
        return (0, r.jsx)(p.$, {
            innerRef: i,
            onChange: o,
            threshold: 0,
            children: a,
        });
    },
    eT = i.memo(function (e) {
        var { tab: t, product: n, onMount: a, shopBlockType: o } = e,
            s = em(e, ["tab", "product", "onMount", "shopBlockType"]);
        let l = (0, _.e7)([D.Z], () => D.Z.purchases),
            c = (0, x.o)(n, l),
            u = (0, J.W)(n, c),
            d = i.useRef(null),
            { previewingVariantIndex: f, handleEntering: p, handleLeaving: h } = (0, en.f)(n),
            m = (0, et.o)(n, l, f);
        return (
            i.useEffect(() => {
                null == a || a(d, n);
            }, [a, n]),
            (0, r.jsx)(eI, {
                tab: t,
                selectedProduct: u,
                cardRef: d,
                children: (0, r.jsx)(
                    eA,
                    e_(
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
function eS(e) {
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
        W = (0, $.Iw)(t),
        K = null != W,
        {
            displayPrices: z,
            checkoutEligiblePrices: q,
            isOrbExclusive: X,
            shouldCheckoutWithOrbs: J,
            hasSufficientOrbs: ee,
        } = (0, ei.Ip)({
            product: t,
            isPremiumUser: d,
            tab: n,
            hasDiscountOffer: K,
        });
    if (0 === z.length) return null;
    let et = () =>
            (0, r.jsx)("div", {
                className: ed.hoverUpsellContainer,
                children: (0, r.jsx)(O.Z, {
                    fullWidth: !0,
                    className: ed.__invalid_premiumSubscribeButton,
                    disabled: x,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: eu.intl.string(eu.t.sEAnVF) },
                    subscriptionTier: ec.Si.TIER_2,
                }),
            }),
        en = () =>
            b
                ? (0, r.jsx)(h.Text, {
                      tag: "div",
                      variant: "heading-md/semibold",
                      color: "header-muted",
                      className: ed.priceTag,
                      children: eu.intl.string(eu.t.wu4gyc),
                  })
                : m || g
                  ? (0, r.jsx)(G.U, {
                        className: ed.priceTag,
                        isPartiallyPurchased: g,
                    })
                  : p
                    ? (0, r.jsx)(h.Text, {
                          variant: "text-md/semibold",
                          className: ed.priceTag,
                          children: eu.intl.string(eu.t.rt69oq),
                      })
                    : U
                      ? (0, r.jsx)(Y.e, {
                            displayPrices: z,
                            isPremiumUser: d,
                            discount: v,
                            hasSufficientOrbs: ee,
                            discountOfferAmount: W,
                        })
                      : (0, r.jsx)(F.Z, {
                            product: i,
                            discount: v,
                            isPremiumUser: d,
                            className: ed.priceTag,
                            hideStrikethroughPrice: !0,
                            nitroIconType: "default",
                            nitroIconSize: "md",
                            discountOfferAmount: W,
                        }),
        er = () =>
            p || l.tq || X || !k || n === es.AW.ORBS
                ? null
                : T
                  ? (0, r.jsx)(h.hU, {
                        variant: "primary",
                        "aria-label": eu.intl.string(eu.t.SKNnqq),
                        icon: h.tEF,
                        onClick: (e) => {
                            e.stopPropagation(), H(e);
                        },
                    })
                  : (0, r.jsx)(w.k0, {
                        newValue: { pageCategory: n === es.AW.HOME || null == I ? void 0 : I.pageCategory },
                        children: (0, r.jsx)(Z.Z, {
                            primary: !0,
                            product: t,
                            selectedVariantIndex: a,
                            returnRef: o,
                            tooltipDelay: eE,
                        }),
                    }),
        eo = () =>
            (0, r.jsx)(h.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), H(e);
                },
                text: eu.intl.string(eu.t.FdGl5O),
                fullWidth: !0,
            }),
        ef = () => {
            let e = () => {
                    N.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                        sku_id: t.skuId,
                        page_type: n,
                        page_section: null == I ? void 0 : I.pageSection,
                        page_category: n === es.AW.HOME || null == I ? void 0 : I.pageCategory,
                        page_index: n === es.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                        page_size: n === es.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                        tile_type: u.Z[t.type],
                        tile_position: String(null == I ? void 0 : I.tilePosition),
                        cta_name: "buy button",
                    }),
                        (0, y.Z)({
                            skuId: (0, Q.S)({
                                product: t,
                                selectedVariantIndex: a,
                            }),
                            analyticsLocations: s,
                            returnRef: o,
                            variantsReturnStyle: f.v.VARIANTS_GROUP,
                        });
                },
                i = K
                    ? eu.intl.formatToPlainString(eu.t["5U5RBw"], { discountOfferAmount: W })
                    : eu.intl.formatToPlainString(eu.t["cNSL/v"], { price: M });
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
                N.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                    sku_id: t.skuId,
                    page_type: n,
                    page_section: null == I ? void 0 : I.pageSection,
                    page_category: n === es.AW.HOME || null == I ? void 0 : I.pageCategory,
                    page_index: n === es.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                    page_size: n === es.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == I ? void 0 : I.tilePosition),
                    cta_name: "claim with orbs button",
                }),
                    (0, C.qA)({
                        skuId: (0, Q.S)({
                            product: t,
                            selectedVariantIndex: a,
                        }),
                        onCheckoutSuccess: (e) => {
                            var n;
                            let { entitlements: r } = e;
                            (0, P.qg)({ variantsReturnStyle: f.v.VARIANTS_GROUP }),
                                (0, ea.Z)({
                                    product: t,
                                    analyticsLocations: s,
                                    itemConsumed: null == (n = r[0]) ? void 0 : n.consumed,
                                    purchaseType: es.o8.ORB,
                                });
                        },
                        analyticsLocations: s,
                    });
            };
            return (0, r.jsx)(h.zxk, {
                variant: "primary",
                text: eu.intl.format(eu.t.kAgx5O, {
                    orbPrice: q[0].amount,
                    orbIconHook: () => (0, r.jsx)(A.Z, { className: ed.orbIconAligned }),
                }),
                onClick: (t) => {
                    t.stopPropagation(), e();
                },
                "aria-label": eu.intl.formatToPlainString(eu.t["fNG/09"], { orbPrice: q[0].amount }),
                fullWidth: !0,
            });
        },
        ep = () => {
            let e = async () => {
                N.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                    sku_id: t.skuId,
                    page_type: n,
                    page_section: null == I ? void 0 : I.pageSection,
                    page_category: n === es.AW.HOME || null == I ? void 0 : I.pageCategory,
                    page_index: n === es.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                    page_size: n === es.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == I ? void 0 : I.tilePosition),
                    cta_name: "claim premium product button",
                }),
                    await (0, P.fK)(t.skuId),
                    (0, ea.Z)({
                        product: t,
                        analyticsLocations: s,
                        purchaseType: es.o8.PREMIUM_PURCHASE,
                    });
            };
            return (0, r.jsx)(h.zxk, {
                variant: "primary",
                onClick: (t) => {
                    t.stopPropagation(), e();
                },
                disabled: x,
                loading: R,
                loadingStartedLabel: eu.intl.string(eu.t["TYw+9v"]),
                loadingFinishedLabel: eu.intl.string(eu.t.Pg1UPz),
                text: eu.intl.string(eu.t.zp6caG),
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
                text: eu.intl.string(eu.t.MAS7uL),
                fullWidth: !0,
            }),
        em = () =>
            (0, r.jsx)(h.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), H(e);
                },
                text: eu.intl.string(eu.t.GpnHfH),
                fullWidth: !0,
            }),
        eg = () => {
            if (p && !d && !T) return et();
            if (!k || b) return eo();
            if (m) return eh();
            if (p) return ep();
            if (J)
                if (ee) return e_();
                else return eo();
            return n === es.AW.ORBS ? em() : ef();
        };
    return (0, r.jsxs)("div", {
        className: ed.detailsWrapper,
        children: [
            (0, r.jsx)("div", {
                className: ed.innerBlur,
                children: en(),
            }),
            (0, r.jsx)("div", {
                className: ed.innerHover,
                children: (0, r.jsxs)(h.hE2, {
                    wrap: !1,
                    fullWidth: !0,
                    children: [eg(), er()],
                }),
            }),
        ],
    });
}
let eA = i.memo(function (e) {
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
            j = (0, eo.G)("CollectiblesShopTallCard"),
            U = null != P && P === d.z.HERO && j ? es.Ch.THUMBNAIL : es.Ch.DEFAULT,
            G = (0, I.O)({ location: "CollectiblesShopTallCard" }),
            Z = (0, m.Z)(f),
            F = (0, ee.m)(f),
            Y = Z || F,
            z = (0, er.To)(t),
            X = (0, _.e7)([g.Z], () => g.Z.useReducedMotion),
            Q = R.ZP.canUseCollectibles(n),
            J = i.useMemo(() => (0, L.BH)(t, Q), [t, Q]),
            $ = (0, L.G1)(t),
            et = (0, _.e7)([T.Z], () => (0, h.wjy)(T.Z.theme)),
            en = (0, L.Yq)(t.skuId),
            ea = a.skuId === c.T.ANIME_V3 && (0, L.WW)(t.skuId),
            { isPurchased: ec, isPartiallyOwnedBundle: ef } = (0, k.L)(p),
            { isDisabled: ep } = (0, M.G)(p.skuId),
            em = null !== A ? A : O,
            [eg, eE] = i.useState(!1),
            eO = Y,
            eI = i.useCallback(
                function (e, t, i) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return (0, s.EQ)(e.type)
                        .with(u.Z.PROFILE_EFFECT, () =>
                            (0, r.jsx)(eb, {
                                isHighlighted: t,
                                profileEffectId: e.id,
                                isPurchased: i && !a,
                            }),
                        )
                        .with(u.Z.AVATAR_DECORATION, () =>
                            (0, r.jsx)(ey, {
                                item: e,
                                user: n,
                                isHighlighted: t,
                                isPurchased: i,
                            }),
                        )
                        .with(u.Z.NAMEPLATE, () =>
                            (0, r.jsx)(ev, {
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
            eT = i.useRef(null),
            { displayPrices: eA, isOrbExclusive: eC } = (0, ei.oo)({
                product: t,
                isPremiumUser: Q,
                tab: l,
            }),
            eN = i.useCallback(
                (e) => (n) => {
                    let r = (0, ei.oQ)({ product: t });
                    (eT.current = n.currentTarget),
                        N.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == x ? void 0 : x.sessionId,
                            sku_id: t.skuId,
                            page_type: l,
                            page_section: null == x ? void 0 : x.pageSection,
                            page_category: l === es.AW.HOME ? void 0 : a.name,
                            page_index: l === es.AW.CATALOG ? (null == x ? void 0 : x.pageIndex) : void 0,
                            page_size: l === es.AW.CATALOG ? (null == x ? void 0 : x.pageSize) : void 0,
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
                            returnRef: eT,
                            tab: l,
                            variantType: U,
                        });
                },
                [t, a, l, D, x, U],
            ),
            eR = eN(E.Z.COLLECTIBLES_SHOP_CARD);
        if (0 === eA.length) return null;
        let eP = () => {
                let e = ec ? h.sV5 : ep ? h.mBM : null;
                return null == e
                    ? null
                    : (0, r.jsx)("div", {
                          className: ed.cardStateIconWrapper,
                          children: (0, r.jsx)(e, {
                              size: "custom",
                              color: "currentColor",
                              width: 38,
                              height: 38,
                              className: o()(ed.cardStateIcon, { [ed.checkmark]: ec }),
                          }),
                      });
            },
            ew = (e) =>
                (0, r.jsxs)("div", {
                    className: o()(ed.cardText, et ? ed.darkCardBackground : ed.lightCardBackground, {
                        [ed.variantsGroup]: t.type === u.Z.VARIANTS_GROUP,
                        [ed.thumbnailVariant]: t.type === u.Z.VARIANTS_GROUP && e === es.Ch.THUMBNAIL,
                    }),
                    children: [
                        (0, r.jsx)(h.X6q, {
                            variant: "text-lg/bold",
                            className: ed.productName,
                            children: z,
                        }),
                        t.type === u.Z.VARIANTS_GROUP
                            ? e === es.Ch.DEFAULT
                                ? (0, r.jsx)(W.P, {
                                      variantGroupProduct: t,
                                      previewingVariantIndexProps: {
                                          previewingVariantIndex: A,
                                          handleEntering: v,
                                          handleLeaving: S,
                                      },
                                      selectedVariantIndex: O,
                                      setIsHoveringOnSwitch: eE,
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
                                      setIsHoveringOnSwitch: eE,
                                  })
                            : null,
                        (0, r.jsx)(eS, {
                            product: t,
                            tab: l,
                            buildHandlePreviewClick: eN,
                            selectedProduct: p,
                            selectedVariantIndex: O,
                            cardRef: f,
                            analyticsLocations: D,
                            isPremiumUser: Q,
                            isPremiumProduct: $,
                            isPartiallyOwnedBundle: ef,
                            isPurchased: ec,
                            isDisabled: ep,
                            discount: J,
                        }),
                    ],
                });
        if ((0, L.x6)(t) && null != J && J.discountPercentage < 0) return null;
        let eD = o()(ed.badge, { [ed.badgeLeftAligned]: G });
        return (0, r.jsx)(h.tEY, {
            children: (0, r.jsxs)(h.kL8, {
                className: o()(C, et ? ed.shopCardDark : ed.shopCard, {
                    [ed.partiallyOwned]: ef && !Y,
                    [ed.shopCardAnimation]: !X,
                    [et ? ed.shopCardDarkHighlighted : ed.shopCardHighlighted]: Y,
                }),
                ref: f,
                onClick: eR,
                "aria-label": t.name,
                children: [
                    $ &&
                        (0, r.jsx)(h.ua7, {
                            tooltipContentClassName: ed.premiumWheelTooltipContent,
                            color: h.ua7.Colors.PRIMARY,
                            text: eu.intl.string(eu.t.nKdAlJ),
                            children: (e) =>
                                (0, r.jsx)(
                                    h.IGR,
                                    eh(e_({}, e), {
                                        className: o()(ed.premiumWheelBadge, { [ed.badgeLeftAligned]: G }),
                                        text: (0, r.jsx)(h.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: ed.premiumWheel,
                                        }),
                                    }),
                                ),
                        }),
                    (0, r.jsx)(B.Z, {
                        category: a,
                        className: o()(ed.limitedTimeBadge, { [ed.badgeLeftAligned]: G }),
                        display: B.k.CARD,
                        shopBlockType: P,
                    }),
                    ef || ec || !en
                        ? eC
                            ? (0, r.jsx)(h.IGR, {
                                  text: eu.intl.string(eu.t["0TmQRE"]),
                                  disableColor: !0,
                                  className: eD,
                              })
                            : ea
                              ? (0, r.jsx)(h.IGR, {
                                    text: eu.intl.string(eu.t.S6kE9v),
                                    disableColor: !0,
                                    className: eD,
                                })
                              : null
                        : (0, r.jsx)(h.IGR, {
                              text: eu.intl.string(eu.t.y2b7CA),
                              disableColor: !0,
                              className: eD,
                          }),
                    (0, r.jsx)("div", {
                        className: ed.preview,
                        children: (0, s.EQ)(t.type)
                            .with(u.Z.PROFILE_EFFECT, u.Z.AVATAR_DECORATION, u.Z.NAMEPLATE, () => eI(y, eO, ec))
                            .with(u.Z.BUNDLE, () =>
                                (0, r.jsx)(q.d, {
                                    product: t,
                                    user: n,
                                    isPurchased: ec,
                                    isHighlighted: Y,
                                }),
                            )
                            .with(u.Z.VARIANTS_GROUP, () => {
                                if (null == t.variants || 0 === t.variants.length) return null;
                                let e = t.variants[em];
                                if (null == e) return null;
                                let [n] = e.items;
                                return eI(n, eO, ec, eg);
                            })
                            .with(u.Z.EXTERNAL_SKU, () =>
                                (0, r.jsx)(H.b, {
                                    product: t,
                                    animationState: eO ? "on" : "off",
                                    className: ep || (ec && !eO) ? ed.externalProductDimmed : void 0,
                                }),
                            )
                            .otherwise(() => null),
                    }),
                    eP(),
                    ew(U),
                ],
            }),
        });
    }),
    eC = eT;
