r.d(t, {
    Z: () => eP,
    d: () => eh,
}),
    r(388685),
    r(314940);
var n = r(951288),
    l = r(647438),
    i = r(120356),
    a = r.n(i),
    o = r(278074),
    s = r(873546),
    c = r(979554),
    u = r(685816),
    d = r(311570),
    p = r(399606),
    f = r(622535),
    b = r(481060),
    h = r(727637),
    g = r(607070),
    y = r(100527),
    v = r(906732),
    m = r(333867),
    O = r(767714),
    P = r(876917),
    j = r(567400),
    _ = r(210887),
    E = r(825102),
    x = r(960919),
    C = r(275388),
    S = r(626135),
    I = r(74538),
    A = r(335131),
    w = r(381585),
    R = r(1870),
    T = r(429368),
    N = r(884697),
    L = r(635552),
    k = r(290175),
    D = r(724994),
    M = r(297651),
    Z = r(390698),
    U = r(813083),
    B = r(680942),
    F = r(558060),
    V = r(237031),
    W = r(508925),
    H = r(306092),
    G = r(453713),
    Y = r(325834),
    z = r(143941),
    K = r(616066),
    q = r(216541),
    X = r(22267),
    J = r(67409),
    Q = r(58201),
    $ = r(445794),
    ee = r(466679),
    et = r(201964),
    er = r(361110),
    en = r(29121),
    el = r(956472),
    ei = r(832149),
    ea = r(642909),
    eo = r(215023),
    es = r(981631),
    ec = r(474936),
    eu = r(388032),
    ed = r(670185);
function ep(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let ef = (e) => {
        let { skuId: t, isHighlighted: r, isPurchased: l } = e;
        return (0, n.jsx)("div", {
            className: ed.profileEffectShopPreview,
            children: (0, n.jsx)(P.Z, {
                skuId: t,
                isHovering: r,
                isPurchased: l && !r,
                removeSetHeight: !0,
            }),
        });
    },
    eb = (e) => {
        let { isHighlighted: t, isPurchased: r, user: l, item: i } = e;
        return (0, n.jsx)("div", {
            className: ed.avatarContainer,
            children: (0, n.jsx)(K.R, {
                item: i,
                user: l,
                isPurchased: r,
                isHighlighted: t,
            }),
        });
    },
    eh = (e) => {
        let { showStatus: t, width: r, opacity: l } = e;
        return (0, n.jsxs)("div", {
            className: a()(ed.nameplatePreviewSampleItem, ed.placeholderItem),
            style: { opacity: l },
            children: [
                (0, n.jsx)(b.qEK, {
                    src: null,
                    size: b.EFr.SIZE_32,
                    status: t ? es.Skl.ONLINE : void 0,
                    statusColor: "var(--border-subtle)",
                    "aria-hidden": !0,
                    imageClassName: ed.nameplatePlaceholderAvatar,
                }),
                (0, n.jsx)("div", {
                    className: ed.placeholderBar,
                    style: { maxWidth: null != r ? r : "100px" },
                }),
            ],
        });
    },
    eg = (e) => {
        let { user: t, nameplate: r, isHighlighted: l, isPurchased: i } = e;
        return (0, n.jsx)("div", {
            className: ed.nameplatePreviewRootContainer,
            children: (0, n.jsxs)("div", {
                className: ed.nameplatePreviewList,
                children: [
                    (0, n.jsxs)("div", {
                        className: ed.fadeIn,
                        children: [
                            (0, n.jsx)(eh, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7,
                            }),
                            (0, n.jsx)(eh, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                        ],
                    }),
                    (0, n.jsx)(X.Z, {
                        user: t,
                        nameplate: r,
                        className: ed.nameplatePreviewSampleItem,
                        isHighlighted: l,
                        showPlaceholderUser: !l,
                        showStatus: !0,
                        isPurchased: i,
                    }),
                    (0, n.jsxs)("div", {
                        className: ed.fadeOut,
                        children: [
                            (0, n.jsx)(eh, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                            (0, n.jsx)(eh, {
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
    ey = (e) => {
        let { tab: t, selectedProduct: r, cardRef: l, children: i } = e,
            { handleCardVisibilityChange: a } = (0, M.E)(r.skuId, t === eo.AW.CATALOG ? "full" : t);
        return (0, n.jsx)(f.$, {
            innerRef: l,
            onChange: a,
            threshold: 0,
            children: i,
        });
    },
    ev = l.memo(function (e) {
        var { tab: t, product: r, onMount: i, shopBlockType: a } = e,
            o = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            l = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                }
                return l;
            })(e, ["tab", "product", "onMount", "shopBlockType"]);
        let s = (0, p.e7)([R.Z], () => R.Z.purchases),
            c = (0, T.o)(r, s),
            u = (0, Q.W)(r, c),
            d = l.useRef(null),
            { previewingVariantIndex: f, handleEntering: b, handleLeaving: h } = (0, er.f)(r),
            g = (0, et.o)(r, s, f);
        return (
            l.useEffect(() => {
                null == i || i(d, r);
            }, [i, r]),
            (0, n.jsx)(ey, {
                tab: t,
                selectedProduct: u,
                cardRef: d,
                children: (0, n.jsx)(
                    eO,
                    ep(
                        {
                            tab: t,
                            product: r,
                            selectedVariantIndex: c,
                            selectedProduct: u,
                            cardRef: d,
                            previewingVariantIndex: f,
                            handleEntering: b,
                            handleLeaving: h,
                            firstCollectibleItem: g,
                            shopBlockType: a,
                        },
                        o,
                    ),
                ),
            })
        );
    });
function em(e) {
    let {
            product: t,
            tab: r,
            selectedProduct: l,
            selectedVariantIndex: i,
            cardRef: a,
            analyticsLocations: o,
            buildHandlePreviewClick: u,
            isPremiumUser: f,
            isPremiumProduct: h,
            isPurchased: g,
            isPartiallyOwnedBundle: v,
            isDisabled: P,
            discount: j,
        } = e,
        _ = (0, w.sp)(),
        I = (0, N.rN)(t),
        [T, k] = (0, p.Wu)([R.Z], () => [
            R.Z.isClaiming === t.skuId,
            null != R.Z.isClaiming && R.Z.isClaiming !== t.skuId,
        ]),
        D = (0, N.XM)(l, f, !1),
        M = (0, N.ne)({
            product: l,
            isPartiallyOwnedBundle: v,
            isPurchased: g,
        }),
        { enabled: U } = (0, E.WX)({ location: "collectibles_shop_tall_card" }),
        { handleUseNow: V, isApplying: W } = (0, L.W)({ product: l }),
        G = u(y.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        Y = (0, $.Iw)(t),
        z = null != Y,
        {
            displayPrices: K,
            checkoutEligiblePrices: q,
            isOrbExclusive: X,
            shouldCheckoutWithOrbs: Q,
            hasSufficientOrbs: ee,
        } = (0, el.Ip)({
            product: t,
            isPremiumUser: f,
            tab: r,
            hasDiscountOffer: z,
        });
    if (0 === K.length) return null;
    let et = () =>
        (0, n.jsx)(b.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), G(e);
            },
            text: eu.intl.string(eu.t.FdGl5O),
            fullWidth: !0,
        });
    return (0, n.jsxs)("div", {
        className: ed.detailsWrapper,
        children: [
            (0, n.jsx)("div", {
                className: ed.innerBlur,
                children: P
                    ? (0, n.jsx)(b.Text, {
                          tag: "div",
                          variant: "heading-md/semibold",
                          color: "header-muted",
                          className: ed.priceTag,
                          children: eu.intl.string(eu.t.wu4gyc),
                      })
                    : g || v
                      ? (0, n.jsx)(Z.U, {
                            className: ed.priceTag,
                            isPartiallyPurchased: v,
                        })
                      : h
                        ? (0, n.jsx)(b.Text, {
                              variant: "text-md/semibold",
                              className: ed.priceTag,
                              children: eu.intl.string(eu.t.rt69oq),
                          })
                        : U
                          ? (0, n.jsx)(H.e, {
                                displayPrices: K,
                                isPremiumUser: f,
                                discount: j,
                                hasSufficientOrbs: ee,
                                discountOfferAmount: Y,
                            })
                          : (0, n.jsx)(F.Z, {
                                product: l,
                                discount: j,
                                isPremiumUser: f,
                                className: ed.priceTag,
                                hideStrikethroughPrice: !0,
                                nitroIconType: "default",
                                nitroIconSize: "md",
                                discountOfferAmount: Y,
                            }),
            }),
            (0, n.jsx)("div", {
                className: ed.innerHover,
                children: (0, n.jsxs)(b.hE2, {
                    wrap: !1,
                    fullWidth: !0,
                    children: [
                        (() => {
                            if (h && !f && !I)
                                return (0, n.jsx)("div", {
                                    className: ed.hoverUpsellContainer,
                                    children: (0, n.jsx)(O.Z, {
                                        fullWidth: !0,
                                        className: ed.__invalid_premiumSubscribeButton,
                                        disabled: k,
                                        onClick: (e) => e.stopPropagation(),
                                        textOptions: { textOverride: eu.intl.string(eu.t.sEAnVF) },
                                        subscriptionTier: ec.Si.TIER_2,
                                    }),
                                });
                            if (!M || P) return et();
                            if (g)
                                return (0, n.jsx)(b.zxk, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(), V();
                                    },
                                    loading: W,
                                    text: eu.intl.string(eu.t.MAS7uL),
                                    fullWidth: !0,
                                });
                            {
                                if (h) {
                                    let e = async () => {
                                        S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                            collectibles_shop_session_id: null == _ ? void 0 : _.sessionId,
                                            sku_id: t.skuId,
                                            page_type: r,
                                            page_section: null == _ ? void 0 : _.pageSection,
                                            page_category: r === eo.AW.HOME || null == _ ? void 0 : _.pageCategory,
                                            page_index:
                                                r === eo.AW.CATALOG ? (null == _ ? void 0 : _.pageIndex) : void 0,
                                            page_size: r === eo.AW.CATALOG ? (null == _ ? void 0 : _.pageSize) : void 0,
                                            tile_type: c.Z[t.type],
                                            tile_position: String(null == _ ? void 0 : _.tilePosition),
                                            cta_name: "claim premium product button",
                                        }),
                                            await (0, A.fK)(t.skuId),
                                            (0, ei.Z)({
                                                product: t,
                                                analyticsLocations: o,
                                                purchaseType: eo.o8.PREMIUM_PURCHASE,
                                            });
                                    };
                                    return (0, n.jsx)(b.zxk, {
                                        variant: "primary",
                                        onClick: (t) => {
                                            t.stopPropagation(), e();
                                        },
                                        disabled: k,
                                        loading: T,
                                        loadingStartedLabel: eu.intl.string(eu.t["TYw+9v"]),
                                        loadingFinishedLabel: eu.intl.string(eu.t.Pg1UPz),
                                        text: eu.intl.string(eu.t.zp6caG),
                                        fullWidth: !0,
                                    });
                                }
                                if (Q)
                                    if (ee)
                                        return (0, n.jsx)(b.zxk, {
                                            variant: "primary",
                                            text: eu.intl.format(eu.t.kAgx5O, {
                                                orbPrice: q[0].amount,
                                                orbIconHook: () => (0, n.jsx)(x.Z, { className: ed.orbIconAligned }),
                                            }),
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == _ ? void 0 : _.sessionId,
                                                        sku_id: t.skuId,
                                                        page_type: r,
                                                        page_section: null == _ ? void 0 : _.pageSection,
                                                        page_category:
                                                            r === eo.AW.HOME || null == _ ? void 0 : _.pageCategory,
                                                        page_index:
                                                            r === eo.AW.CATALOG
                                                                ? null == _
                                                                    ? void 0
                                                                    : _.pageIndex
                                                                : void 0,
                                                        page_size:
                                                            r === eo.AW.CATALOG
                                                                ? null == _
                                                                    ? void 0
                                                                    : _.pageSize
                                                                : void 0,
                                                        tile_type: c.Z[t.type],
                                                        tile_position: String(null == _ ? void 0 : _.tilePosition),
                                                        cta_name: "claim with orbs button",
                                                    }),
                                                    (0, C.qA)({
                                                        skuId: (0, J.S)({
                                                            product: t,
                                                            selectedVariantIndex: i,
                                                        }),
                                                        onCheckoutSuccess: (e) => {
                                                            var r;
                                                            let { entitlements: n } = e;
                                                            (0, A.qg)({ variantsReturnStyle: d.v.VARIANTS_GROUP }),
                                                                (0, ei.Z)({
                                                                    product: t,
                                                                    analyticsLocations: o,
                                                                    itemConsumed:
                                                                        null == (r = n[0]) ? void 0 : r.consumed,
                                                                    purchaseType: eo.o8.ORB,
                                                                });
                                                        },
                                                        analyticsLocations: o,
                                                    });
                                            },
                                            "aria-label": eu.intl.formatToPlainString(eu.t["fNG/09"], {
                                                orbPrice: q[0].amount,
                                            }),
                                            fullWidth: !0,
                                        });
                                    else return et();
                                if (r === eo.AW.ORBS)
                                    return (0, n.jsx)(b.zxk, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(), G(e);
                                        },
                                        text: eu.intl.string(eu.t.GpnHfH),
                                        fullWidth: !0,
                                    });
                                let e = z
                                    ? eu.intl.formatToPlainString(eu.t["5U5RBw"], { discountOfferAmount: Y })
                                    : eu.intl.formatToPlainString(eu.t["cNSL/v"], { price: D });
                                return (0, n.jsx)(b.zxk, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                collectibles_shop_session_id: null == _ ? void 0 : _.sessionId,
                                                sku_id: t.skuId,
                                                page_type: r,
                                                page_section: null == _ ? void 0 : _.pageSection,
                                                page_category: r === eo.AW.HOME || null == _ ? void 0 : _.pageCategory,
                                                page_index:
                                                    r === eo.AW.CATALOG ? (null == _ ? void 0 : _.pageIndex) : void 0,
                                                page_size:
                                                    r === eo.AW.CATALOG ? (null == _ ? void 0 : _.pageSize) : void 0,
                                                tile_type: c.Z[t.type],
                                                tile_position: String(null == _ ? void 0 : _.tilePosition),
                                                cta_name: "buy button",
                                            }),
                                            (0, m.Z)({
                                                skuId: (0, J.S)({
                                                    product: t,
                                                    selectedVariantIndex: i,
                                                }),
                                                analyticsLocations: o,
                                                returnRef: a,
                                                variantsReturnStyle: d.v.VARIANTS_GROUP,
                                            });
                                    },
                                    text: e,
                                    fullWidth: !0,
                                });
                            }
                        })(),
                        h || s.tq || X || !M || r === eo.AW.ORBS
                            ? null
                            : I
                              ? (0, n.jsx)(b.hU, {
                                    variant: "primary",
                                    "aria-label": eu.intl.string(eu.t.SKNnqq),
                                    icon: b.tEF,
                                    onClick: (e) => {
                                        e.stopPropagation(), G(e);
                                    },
                                })
                              : (0, n.jsx)(w.k0, {
                                    newValue: { pageCategory: r === eo.AW.HOME || null == _ ? void 0 : _.pageCategory },
                                    children: (0, n.jsx)(B.Z, {
                                        primary: !0,
                                        product: t,
                                        selectedVariantIndex: i,
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
let eO = l.memo(function (e) {
        let {
                product: t,
                user: r,
                category: i,
                tab: s,
                cardRef: d,
                selectedProduct: f,
                firstCollectibleItem: m,
                selectedVariantIndex: O,
                handleEntering: P,
                handleLeaving: E,
                previewingVariantIndex: x,
                className: C,
                shopBlockType: A,
            } = e,
            { analyticsLocations: R } = (0, v.ZP)([y.Z.COLLECTIBLES_SHOP_CARD]),
            T = (0, w.sp)(),
            L = (0, ea.G)("CollectiblesShopTallCard"),
            M = null != A && A === u.z.HERO && L ? eo.Ch.THUMBNAIL : eo.Ch.DEFAULT,
            Z = (0, j.Y)({ location: "CollectiblesShopTallCard" }),
            B = (0, h.Z)(d),
            F = (0, ee.m)(d),
            H = B || F,
            K = (0, en.To)(t),
            X = (0, p.e7)([g.Z], () => g.Z.useReducedMotion),
            J = I.ZP.canUseCollectibles(r),
            Q = l.useMemo(() => (0, N.BH)(t, J), [t, J]),
            $ = (0, N.G1)(t),
            et = (0, p.e7)([_.Z], () => (0, b.wjy)(_.Z.theme)),
            er = (0, N.Yq)(t.skuId),
            ei = i.skuId === eo.bu && (0, N.WW)(t.skuId),
            { isPurchased: ec, isPartiallyOwnedBundle: eh } = (0, D.L)(f),
            { isDisabled: ey } = (0, k.G)(f.skuId),
            ev = null !== x ? x : O,
            [eO, eP] = l.useState(!1),
            ej = l.useCallback(
                function (e, t, l) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return (0, o.EQ)(e.type)
                        .with(c.Z.PROFILE_EFFECT, () =>
                            (0, n.jsx)(ef, {
                                isHighlighted: t,
                                skuId: e.skuId,
                                isPurchased: l && !i,
                            }),
                        )
                        .with(c.Z.AVATAR_DECORATION, () =>
                            (0, n.jsx)(eb, {
                                item: e,
                                user: r,
                                isHighlighted: t,
                                isPurchased: l,
                            }),
                        )
                        .with(c.Z.NAMEPLATE, () =>
                            (0, n.jsx)(eg, {
                                user: r,
                                nameplate: e,
                                isHighlighted: t,
                                isPurchased: l,
                            }),
                        )
                        .otherwise(() => null);
                },
                [r],
            ),
            e_ = l.useRef(null),
            { displayPrices: eE, isOrbExclusive: ex } = (0, el.oo)({
                product: t,
                isPremiumUser: J,
                tab: s,
            }),
            eC = l.useCallback(
                (e) => (r) => {
                    let n = (0, el.oQ)({ product: t });
                    (e_.current = r.currentTarget),
                        S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                            sku_id: t.skuId,
                            page_type: s,
                            page_section: null == T ? void 0 : T.pageSection,
                            page_category: s === eo.AW.HOME ? void 0 : i.name,
                            page_index: s === eo.AW.CATALOG ? (null == T ? void 0 : T.pageIndex) : void 0,
                            page_size: s === eo.AW.CATALOG ? (null == T ? void 0 : T.pageSize) : void 0,
                            tile_type: c.Z[t.type],
                            tile_position: String(null == T ? void 0 : T.tilePosition),
                            cta_name: null,
                        }),
                        (0, V.T)({
                            product: t,
                            category: i,
                            shouldCheckoutWithOrbs: n,
                            analyticsLocations: R,
                            analyticsSource: e,
                            returnRef: e_,
                            tab: s,
                            variantType: M,
                        });
                },
                [t, i, s, R, T, M],
            ),
            eS = eC(y.Z.COLLECTIBLES_SHOP_CARD);
        if (0 === eE.length || ((0, N.x6)(t) && null != Q && Q.discountPercentage < 0)) return null;
        let eI = a()(ed.badge, { [ed.badgeLeftAligned]: Z });
        return (0, n.jsx)(b.tEY, {
            children: (0, n.jsxs)(b.kL8, {
                className: a()(C, et ? ed.shopCardDark : ed.shopCard, {
                    [ed.partiallyOwned]: eh && !H,
                    [ed.shopCardAnimation]: !X,
                    [et ? ed.shopCardDarkHighlighted : ed.shopCardHighlighted]: H,
                }),
                ref: d,
                onClick: eS,
                "aria-label": t.name,
                children: [
                    $ &&
                        (0, n.jsx)(b.ua7, {
                            tooltipContentClassName: ed.premiumWheelTooltipContent,
                            color: b.ua7.Colors.PRIMARY,
                            text: eu.intl.string(eu.t.nKdAlJ),
                            children: (e) => {
                                var t, r;
                                return (0, n.jsx)(
                                    b.IGR,
                                    ((t = ep({}, e)),
                                    (r = r =
                                        {
                                            className: a()(ed.premiumWheelBadge, { [ed.badgeLeftAligned]: Z }),
                                            text: (0, n.jsx)(b.SrA, {
                                                size: "md",
                                                color: "currentColor",
                                                className: ed.premiumWheel,
                                            }),
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                        : (function (e, t) {
                                              var r = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var n = Object.getOwnPropertySymbols(e);
                                                  r.push.apply(r, n);
                                              }
                                              return r;
                                          })(Object(r)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                          }),
                                    t),
                                );
                            },
                        }),
                    (0, n.jsx)(U.Z, {
                        category: i,
                        className: a()(ed.limitedTimeBadge, { [ed.badgeLeftAligned]: Z }),
                        display: U.k.CARD,
                        shopBlockType: A,
                    }),
                    Z &&
                        (0, n.jsx)(z.a, {
                            product: t,
                            selectedVariantIndex: O,
                            className: ed.wishlistButton,
                            isCardHovered: H,
                        }),
                    eh || ec || !er
                        ? ex
                            ? (0, n.jsx)(b.IGR, {
                                  text: eu.intl.string(eu.t["0TmQRE"]),
                                  disableColor: !0,
                                  className: eI,
                              })
                            : ei
                              ? (0, n.jsx)(b.IGR, {
                                    text: eu.intl.string(eu.t.S6kE9v),
                                    disableColor: !0,
                                    className: eI,
                                })
                              : null
                        : (0, n.jsx)(b.IGR, {
                              text: eu.intl.string(eu.t.y2b7CA),
                              disableColor: !0,
                              className: eI,
                          }),
                    (0, n.jsx)("div", {
                        className: a()(ed.preview, { [ed.previewThumbnailVariant]: M === eo.Ch.THUMBNAIL }),
                        children: (0, o.EQ)(t.type)
                            .with(c.Z.PROFILE_EFFECT, c.Z.AVATAR_DECORATION, c.Z.NAMEPLATE, () => ej(m, H, ec))
                            .with(c.Z.BUNDLE, () =>
                                (0, n.jsx)(q.d, {
                                    product: t,
                                    user: r,
                                    isPurchased: ec,
                                    isHighlighted: H,
                                }),
                            )
                            .with(c.Z.VARIANTS_GROUP, () => {
                                if (null == t.variants || 0 === t.variants.length) return null;
                                let e = t.variants[ev];
                                if (null == e) return null;
                                let [r] = e.items;
                                return ej(r, H, ec, eO);
                            })
                            .with(c.Z.EXTERNAL_SKU, () =>
                                (0, n.jsx)(W.b, {
                                    product: t,
                                    animationState: H ? "on" : "off",
                                    className: ey || (ec && !H) ? ed.externalProductDimmed : void 0,
                                }),
                            )
                            .otherwise(() => null),
                    }),
                    (() => {
                        let e = ec ? b.sV5 : ey ? b.mBM : null;
                        return null == e
                            ? null
                            : (0, n.jsx)("div", {
                                  className: ed.cardStateIconWrapper,
                                  children: (0, n.jsx)(e, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 38,
                                      height: 38,
                                      className: a()(ed.cardStateIcon, { [ed.checkmark]: ec }),
                                  }),
                              });
                    })(),
                    (0, n.jsxs)("div", {
                        className: a()(ed.cardText, et ? ed.darkCardBackground : ed.lightCardBackground, {
                            [ed.variantsGroup]: t.type === c.Z.VARIANTS_GROUP,
                            [ed.thumbnailVariant]: t.type === c.Z.VARIANTS_GROUP && M === eo.Ch.THUMBNAIL,
                        }),
                        children: [
                            (0, n.jsx)(b.X6q, {
                                variant: "text-lg/bold",
                                className: ed.productName,
                                children: K,
                            }),
                            t.type === c.Z.VARIANTS_GROUP
                                ? M === eo.Ch.DEFAULT
                                    ? (0, n.jsx)(G.P, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: {
                                              previewingVariantIndex: x,
                                              handleEntering: P,
                                              handleLeaving: E,
                                          },
                                          selectedVariantIndex: O,
                                          setIsHoveringOnSwitch: eP,
                                          minimal: !H,
                                          alternativeBackgroundColor:
                                              (null == m ? void 0 : m.type) === c.Z.PROFILE_EFFECT,
                                      })
                                    : (0, n.jsx)(Y.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: {
                                              previewingVariantIndex: x,
                                              handleEntering: P,
                                              handleLeaving: E,
                                          },
                                          selectedVariantIndex: O,
                                          setIsHoveringOnSwitch: eP,
                                      })
                                : null,
                            (0, n.jsx)(em, {
                                product: t,
                                tab: s,
                                buildHandlePreviewClick: eC,
                                selectedProduct: f,
                                selectedVariantIndex: O,
                                cardRef: d,
                                analyticsLocations: R,
                                isPremiumUser: J,
                                isPremiumProduct: $,
                                isPartiallyOwnedBundle: eh,
                                isPurchased: ec,
                                isDisabled: ey,
                                discount: Q,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    eP = ev;
