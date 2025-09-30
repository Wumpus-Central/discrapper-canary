r.d(t, {
    Z: () => ej,
    d: () => eg,
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
    g = r(727637),
    h = r(607070),
    y = r(100527),
    m = r(906732),
    v = r(333867),
    O = r(767714),
    j = r(876917),
    P = r(567400),
    _ = r(210887),
    E = r(825102),
    C = r(960919),
    x = r(275388),
    S = r(626135),
    A = r(74538),
    I = r(335131),
    R = r(381585),
    w = r(1870),
    N = r(429368),
    T = r(884697),
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
    Y = r(453713),
    G = r(325834),
    z = r(143941),
    K = r(616066),
    q = r(216541),
    J = r(22267),
    X = r(67409),
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
    ed = r(300179);
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
        let { profileEffectId: t, isHighlighted: r, isPurchased: l } = e;
        return (0, n.jsx)("div", {
            className: ed.profileEffectShopPreview,
            children: (0, n.jsx)(j.Z, {
                profileEffectId: t,
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
    eg = (e) => {
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
    eh = (e) => {
        let { user: t, nameplate: r, isHighlighted: l, isPurchased: i } = e;
        return (0, n.jsx)("div", {
            className: ed.nameplatePreviewRootContainer,
            children: (0, n.jsxs)("div", {
                className: ed.nameplatePreviewList,
                children: [
                    (0, n.jsxs)("div", {
                        className: ed.fadeIn,
                        children: [
                            (0, n.jsx)(eg, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7,
                            }),
                            (0, n.jsx)(eg, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                        ],
                    }),
                    (0, n.jsx)(J.Z, {
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
                            (0, n.jsx)(eg, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                            (0, n.jsx)(eg, {
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
    em = l.memo(function (e) {
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
        let s = (0, p.e7)([w.Z], () => w.Z.purchases),
            c = (0, N.o)(r, s),
            u = (0, Q.W)(r, c),
            d = l.useRef(null),
            { previewingVariantIndex: f, handleEntering: b, handleLeaving: g } = (0, er.f)(r),
            h = (0, et.o)(r, s, f);
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
                            handleLeaving: g,
                            firstCollectibleItem: h,
                            shopBlockType: a,
                        },
                        o,
                    ),
                ),
            })
        );
    });
function ev(e) {
    let {
            product: t,
            tab: r,
            selectedProduct: l,
            selectedVariantIndex: i,
            cardRef: a,
            analyticsLocations: o,
            buildHandlePreviewClick: u,
            isPremiumUser: f,
            isPremiumProduct: g,
            isPurchased: h,
            isPartiallyOwnedBundle: m,
            isDisabled: j,
            discount: P,
        } = e,
        _ = (0, R.sp)(),
        A = (0, T.rN)(t),
        [N, k] = (0, p.Wu)([w.Z], () => [
            w.Z.isClaiming === t.skuId,
            null != w.Z.isClaiming && w.Z.isClaiming !== t.skuId,
        ]),
        D = (0, T.XM)(l, f, !1),
        M = (0, T.ne)({
            product: l,
            isPartiallyOwnedBundle: m,
            isPurchased: h,
        }),
        { enabled: U } = (0, E.WX)({ location: "collectibles_shop_tall_card" }),
        { handleUseNow: V, isApplying: W } = (0, L.W)({ product: l }),
        Y = u(y.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        G = (0, $.Iw)(t),
        z = null != G,
        {
            displayPrices: K,
            checkoutEligiblePrices: q,
            isOrbExclusive: J,
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
                e.stopPropagation(), Y(e);
            },
            text: eu.intl.string(eu.t.FdGl5O),
            fullWidth: !0,
        });
    return (0, n.jsxs)("div", {
        className: ed.detailsWrapper,
        children: [
            (0, n.jsx)("div", {
                className: ed.innerBlur,
                children: j
                    ? (0, n.jsx)(b.Text, {
                          tag: "div",
                          variant: "heading-md/semibold",
                          color: "header-muted",
                          className: ed.priceTag,
                          children: eu.intl.string(eu.t.wu4gyc),
                      })
                    : h || m
                      ? (0, n.jsx)(Z.U, {
                            className: ed.priceTag,
                            isPartiallyPurchased: m,
                        })
                      : g
                        ? (0, n.jsx)(b.Text, {
                              variant: "text-md/semibold",
                              className: ed.priceTag,
                              children: eu.intl.string(eu.t.rt69oq),
                          })
                        : U
                          ? (0, n.jsx)(H.e, {
                                displayPrices: K,
                                isPremiumUser: f,
                                discount: P,
                                hasSufficientOrbs: ee,
                                discountOfferAmount: G,
                            })
                          : (0, n.jsx)(F.Z, {
                                product: l,
                                discount: P,
                                isPremiumUser: f,
                                className: ed.priceTag,
                                hideStrikethroughPrice: !0,
                                nitroIconType: "default",
                                nitroIconSize: "md",
                                discountOfferAmount: G,
                            }),
            }),
            (0, n.jsx)("div", {
                className: ed.innerHover,
                children: (0, n.jsxs)(b.hE2, {
                    wrap: !1,
                    fullWidth: !0,
                    children: [
                        (() => {
                            if (g && !f && !A)
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
                            if (!M || j) return et();
                            if (h)
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
                                if (g) {
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
                                            await (0, I.fK)(t.skuId),
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
                                        loading: N,
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
                                                orbIconHook: () => (0, n.jsx)(C.Z, { className: ed.orbIconAligned }),
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
                                                    (0, x.qA)({
                                                        skuId: (0, X.S)({
                                                            product: t,
                                                            selectedVariantIndex: i,
                                                        }),
                                                        onCheckoutSuccess: (e) => {
                                                            var r;
                                                            let { entitlements: n } = e;
                                                            (0, I.qg)({ variantsReturnStyle: d.v.VARIANTS_GROUP }),
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
                                            e.stopPropagation(), Y(e);
                                        },
                                        text: eu.intl.string(eu.t.GpnHfH),
                                        fullWidth: !0,
                                    });
                                let e = z
                                    ? eu.intl.formatToPlainString(eu.t["5U5RBw"], { discountOfferAmount: G })
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
                                            (0, v.Z)({
                                                skuId: (0, X.S)({
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
                        g || s.tq || J || !M || r === eo.AW.ORBS
                            ? null
                            : A
                              ? (0, n.jsx)(b.hU, {
                                    variant: "primary",
                                    "aria-label": eu.intl.string(eu.t.SKNnqq),
                                    icon: b.tEF,
                                    onClick: (e) => {
                                        e.stopPropagation(), Y(e);
                                    },
                                })
                              : (0, n.jsx)(R.k0, {
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
                firstCollectibleItem: v,
                selectedVariantIndex: O,
                handleEntering: j,
                handleLeaving: E,
                previewingVariantIndex: C,
                className: x,
                shopBlockType: I,
            } = e,
            { analyticsLocations: w } = (0, m.ZP)([y.Z.COLLECTIBLES_SHOP_CARD]),
            N = (0, R.sp)(),
            L = (0, ea.G)("CollectiblesShopTallCard"),
            M = null != I && I === u.z.HERO && L ? eo.Ch.THUMBNAIL : eo.Ch.DEFAULT,
            Z = (0, P.Y)({ location: "CollectiblesShopTallCard" }),
            B = (0, g.Z)(d),
            F = (0, ee.m)(d),
            H = B || F,
            K = (0, en.To)(t),
            J = (0, p.e7)([h.Z], () => h.Z.useReducedMotion),
            X = A.ZP.canUseCollectibles(r),
            Q = l.useMemo(() => (0, T.BH)(t, X), [t, X]),
            $ = (0, T.G1)(t),
            et = (0, p.e7)([_.Z], () => (0, b.wjy)(_.Z.theme)),
            er = (0, T.Yq)(t.skuId),
            ei = i.skuId === eo.bu && (0, T.WW)(t.skuId),
            { isPurchased: ec, isPartiallyOwnedBundle: eg } = (0, D.L)(f),
            { isDisabled: ey } = (0, k.G)(f.skuId),
            em = null !== C ? C : O,
            [eO, ej] = l.useState(!1),
            eP = l.useCallback(
                function (e, t, l) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return (0, o.EQ)(e.type)
                        .with(c.Z.PROFILE_EFFECT, () =>
                            (0, n.jsx)(ef, {
                                isHighlighted: t,
                                profileEffectId: e.id,
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
                            (0, n.jsx)(eh, {
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
            { displayPrices: eE, isOrbExclusive: eC } = (0, el.oo)({
                product: t,
                isPremiumUser: X,
                tab: s,
            }),
            ex = l.useCallback(
                (e) => (r) => {
                    let n = (0, el.oQ)({ product: t });
                    (e_.current = r.currentTarget),
                        S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == N ? void 0 : N.sessionId,
                            sku_id: t.skuId,
                            page_type: s,
                            page_section: null == N ? void 0 : N.pageSection,
                            page_category: s === eo.AW.HOME ? void 0 : i.name,
                            page_index: s === eo.AW.CATALOG ? (null == N ? void 0 : N.pageIndex) : void 0,
                            page_size: s === eo.AW.CATALOG ? (null == N ? void 0 : N.pageSize) : void 0,
                            tile_type: c.Z[t.type],
                            tile_position: String(null == N ? void 0 : N.tilePosition),
                            cta_name: null,
                        }),
                        (0, V.T)({
                            product: t,
                            category: i,
                            shouldCheckoutWithOrbs: n,
                            analyticsLocations: w,
                            analyticsSource: e,
                            returnRef: e_,
                            tab: s,
                            variantType: M,
                        });
                },
                [t, i, s, w, N, M],
            ),
            eS = ex(y.Z.COLLECTIBLES_SHOP_CARD);
        if (0 === eE.length || ((0, T.x6)(t) && null != Q && Q.discountPercentage < 0)) return null;
        let eA = a()(ed.badge, { [ed.badgeLeftAligned]: Z });
        return (0, n.jsx)(b.tEY, {
            children: (0, n.jsxs)(b.kL8, {
                className: a()(x, et ? ed.shopCardDark : ed.shopCard, {
                    [ed.partiallyOwned]: eg && !H,
                    [ed.shopCardAnimation]: !J,
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
                        shopBlockType: I,
                    }),
                    Z &&
                        (0, n.jsx)(z.a, {
                            product: t,
                            className: ed.wishlistButton,
                            isCardHovered: H,
                        }),
                    eg || ec || !er
                        ? eC
                            ? (0, n.jsx)(b.IGR, {
                                  text: eu.intl.string(eu.t["0TmQRE"]),
                                  disableColor: !0,
                                  className: eA,
                              })
                            : ei
                              ? (0, n.jsx)(b.IGR, {
                                    text: eu.intl.string(eu.t.S6kE9v),
                                    disableColor: !0,
                                    className: eA,
                                })
                              : null
                        : (0, n.jsx)(b.IGR, {
                              text: eu.intl.string(eu.t.y2b7CA),
                              disableColor: !0,
                              className: eA,
                          }),
                    (0, n.jsx)("div", {
                        className: a()(ed.preview, { [ed.previewThumbnailVariant]: M === eo.Ch.THUMBNAIL }),
                        children: (0, o.EQ)(t.type)
                            .with(c.Z.PROFILE_EFFECT, c.Z.AVATAR_DECORATION, c.Z.NAMEPLATE, () => eP(v, H, ec))
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
                                let e = t.variants[em];
                                if (null == e) return null;
                                let [r] = e.items;
                                return eP(r, H, ec, eO);
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
                                    ? (0, n.jsx)(Y.P, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: {
                                              previewingVariantIndex: C,
                                              handleEntering: j,
                                              handleLeaving: E,
                                          },
                                          selectedVariantIndex: O,
                                          setIsHoveringOnSwitch: ej,
                                          minimal: !H,
                                          alternativeBackgroundColor:
                                              (null == v ? void 0 : v.type) === c.Z.PROFILE_EFFECT,
                                      })
                                    : (0, n.jsx)(G.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: {
                                              previewingVariantIndex: C,
                                              handleEntering: j,
                                              handleLeaving: E,
                                          },
                                          selectedVariantIndex: O,
                                          setIsHoveringOnSwitch: ej,
                                      })
                                : null,
                            (0, n.jsx)(ev, {
                                product: t,
                                tab: s,
                                buildHandlePreviewClick: ex,
                                selectedProduct: f,
                                selectedVariantIndex: O,
                                cardRef: d,
                                analyticsLocations: w,
                                isPremiumUser: X,
                                isPremiumProduct: $,
                                isPartiallyOwnedBundle: eg,
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
    ej = em;
