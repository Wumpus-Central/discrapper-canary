i.d(t, {
    Z: () => e_,
    d: () => eg,
}),
    i(388685),
    i(314940);
var l = i(951288),
    n = i(647438),
    r = i(120356),
    a = i.n(r),
    s = i(278074),
    o = i(979554),
    d = i(685816),
    u = i(311570),
    c = i(399606),
    p = i(622535),
    g = i(28664),
    h = i(481060),
    m = i(607070),
    v = i(100527),
    x = i(906732),
    C = i(104505),
    _ = i(333867),
    f = i(767714),
    y = i(876917),
    I = i(567400),
    A = i(210887),
    P = i(960919),
    S = i(275388),
    E = i(626135),
    O = i(74538),
    b = i(335131),
    T = i(381585),
    j = i(1870),
    L = i(429368),
    k = i(884697),
    N = i(635552),
    R = i(290175),
    w = i(724994),
    Z = i(297651),
    B = i(390698),
    H = i(813083),
    W = i(680942),
    G = i(409116),
    M = i(237031),
    U = i(786040),
    V = i(508925),
    D = i(453713),
    F = i(325834),
    z = i(143941),
    K = i(616066),
    q = i(216541),
    Q = i(22267),
    Y = i(67409),
    X = i(58201),
    J = i(445794),
    $ = i(694364),
    ee = i(201964),
    et = i(361110),
    ei = i(29121),
    el = i(956472),
    en = i(832149),
    er = i(642909),
    ea = i(215023),
    es = i(981631),
    eo = i(474936),
    ed = i(388032),
    eu = i(300179);
let ec = (e) => {
        let { skuId: t, isHighlighted: i, isPurchased: n } = e;
        return (0, l.jsx)("div", {
            className: eu.profileEffectShopPreview,
            children: (0, l.jsx)(y.Z, {
                skuId: t,
                isHighlighted: i,
                isPurchased: n && !i,
                removeSetHeight: !0,
            }),
        });
    },
    ep = (e) => {
        let { isHighlighted: t, isPurchased: i, user: n, item: r } = e;
        return (0, l.jsx)("div", {
            className: eu.avatarContainer,
            children: (0, l.jsx)(K.R, {
                item: r,
                user: n,
                isPurchased: i,
                isHighlighted: t,
            }),
        });
    },
    eg = (e) => {
        let { showStatus: t, width: i, opacity: n } = e;
        return (0, l.jsxs)("div", {
            className: a()(eu.nameplatePreviewSampleItem, eu.placeholderItem),
            style: { opacity: n },
            children: [
                (0, l.jsx)(h.qEK, {
                    src: null,
                    size: h.EFr.SIZE_32,
                    status: t ? es.Skl.ONLINE : void 0,
                    statusColor: "var(--border-subtle)",
                    "aria-hidden": !0,
                    imageClassName: eu.nameplatePlaceholderAvatar,
                }),
                (0, l.jsx)("div", {
                    className: eu.placeholderBar,
                    style: { maxWidth: null != i ? i : "100px" },
                }),
            ],
        });
    },
    eh = (e) => {
        let { user: t, nameplate: i, isHighlighted: n, isPurchased: r } = e;
        return (0, l.jsx)("div", {
            className: eu.nameplatePreviewRootContainer,
            children: (0, l.jsxs)("div", {
                className: eu.nameplatePreviewList,
                children: [
                    (0, l.jsxs)("div", {
                        className: eu.fadeIn,
                        children: [
                            (0, l.jsx)(eg, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7,
                            }),
                            (0, l.jsx)(eg, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                        ],
                    }),
                    (0, l.jsx)(Q.Z, {
                        user: t,
                        nameplate: i,
                        className: eu.nameplatePreviewSampleItem,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        showStatus: !0,
                        isPurchased: r,
                    }),
                    (0, l.jsxs)("div", {
                        className: eu.fadeOut,
                        children: [
                            (0, l.jsx)(eg, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                            (0, l.jsx)(eg, {
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
    em = (e) => {
        let { tab: t, selectedProduct: i, cardRef: n, children: r } = e,
            { handleCardVisibilityChange: a } = (0, Z.E)(i.skuId, t === ea.AW.CATALOG ? "full" : t);
        return (0, l.jsx)(p.$, {
            innerRef: n,
            onChange: a,
            threshold: 0,
            children: r,
        });
    },
    ev = n.memo(function (e) {
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
        let o = (0, L.o)(i),
            d = (0, X.W)(i, o),
            u = n.useRef(null),
            { previewingVariantIndex: c, handleEntering: p, handleLeaving: g } = (0, et.f)(i),
            h = (0, ee.o)(i, c);
        return (
            n.useEffect(() => {
                null == r || r(u, i);
            }, [r, i]),
            (0, l.jsx)(em, {
                tab: t,
                selectedProduct: d,
                cardRef: u,
                children: (0, l.jsx)(
                    eC,
                    (function (e) {
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
                    })(
                        {
                            tab: t,
                            product: i,
                            selectedVariantIndex: o,
                            selectedProduct: d,
                            cardRef: u,
                            previewingVariantIndex: c,
                            handleEntering: p,
                            handleLeaving: g,
                            firstCollectibleItem: h,
                            shopBlockType: a,
                        },
                        s,
                    ),
                ),
            })
        );
    });
function ex(e) {
    let {
            product: t,
            tab: i,
            selectedProduct: n,
            selectedVariantIndex: r,
            cardRef: a,
            analyticsLocations: s,
            buildHandlePreviewClick: d,
            isPremiumUser: p,
            isPremiumProduct: g,
            isPurchased: m,
            isPartiallyOwnedBundle: x,
            isDisabled: C,
            discount: y,
        } = e,
        I = (0, T.sp)(),
        A = (0, k.rN)(t),
        [O, L] = (0, c.Wu)([j.Z], () => [
            j.Z.isClaiming === t.skuId,
            null != j.Z.isClaiming && j.Z.isClaiming !== t.skuId,
        ]),
        R = (0, k.XM)(n, p, !1),
        w = (0, k.ne)({
            product: n,
            isPartiallyOwnedBundle: x,
            isPurchased: m,
        }),
        Z = (0, $.J)(t, i === ea.AW.ORBS ? U.tA.ORBS : void 0),
        { handleUseNow: H, isApplying: M } = (0, N.W)({ product: n }),
        V = d(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        D = (0, J.Iw)(t),
        F = null != D,
        {
            displayPrices: z,
            checkoutEligiblePrices: K,
            shouldCheckoutWithOrbs: q,
            hasSufficientOrbs: Q,
        } = (0, el.Ip)({
            product: t,
            isPremiumUser: p,
            tab: i,
            hasDiscountOffer: F,
        });
    if (0 === z.length) return null;
    let X = () =>
        (0, l.jsx)(h.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), V(e);
            },
            text: ed.intl.string(ed.t.FdGl5A),
            fullWidth: !0,
        });
    return (0, l.jsxs)("div", {
        className: eu.detailsWrapper,
        children: [
            (0, l.jsx)("div", {
                className: eu.innerBlur,
                children: C
                    ? (0, l.jsx)(h.Text, {
                          tag: "div",
                          variant: "heading-md/semibold",
                          color: "header-muted",
                          className: eu.priceTag,
                          children: ed.intl.string(ed.t.wu4gyV),
                      })
                    : m || x
                      ? (0, l.jsx)(B.U, {
                            className: eu.priceTag,
                            isPartiallyPurchased: x,
                        })
                      : g
                        ? (0, l.jsx)(h.Text, {
                              variant: "text-md/semibold",
                              className: eu.priceTag,
                              children: ed.intl.string(ed.t.rt69oo),
                          })
                        : (0, l.jsx)("div", {
                              className: eu.priceLine,
                              children: z.map((e, t) =>
                                  (0, l.jsx)(
                                      G.F,
                                      {
                                          price: e,
                                          discount: y,
                                          discountOfferAmount: D,
                                          nitroIconType: p ? "default" : void 0,
                                          nitroIconSize: "md",
                                          className:
                                              e.currency !== es.pKx.DISCORD_ORB || Q ? void 0 : eu.insufficientOrbs,
                                      },
                                      t,
                                  ),
                              ),
                          }),
            }),
            (0, l.jsx)("div", {
                className: eu.innerHover,
                children: (0, l.jsxs)(h.ButtonGroup, {
                    wrap: !1,
                    fullWidth: !0,
                    children: [
                        (() => {
                            if (g && !p && !A)
                                return (0, l.jsx)("div", {
                                    className: eu.hoverUpsellContainer,
                                    children: (0, l.jsx)(f.Z, {
                                        fullWidth: !0,
                                        className: eu.__invalid_premiumSubscribeButton,
                                        disabled: L,
                                        onClick: (e) => e.stopPropagation(),
                                        textOptions: { textOverride: ed.intl.string(ed.t.sEAnVH) },
                                        subscriptionTier: eo.Si.TIER_2,
                                    }),
                                });
                            if (!w || C) return X();
                            if (m)
                                return (0, l.jsx)(h.Button, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(), H();
                                    },
                                    loading: M,
                                    text: ed.intl.string(ed.t.MAS7uK),
                                    fullWidth: !0,
                                });
                            {
                                if (g) {
                                    let e = async () => {
                                        E.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                            collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                            sku_id: t.skuId,
                                            page_type: i,
                                            page_section: null == I ? void 0 : I.pageSection,
                                            page_category: i === ea.AW.HOME || null == I ? void 0 : I.pageCategory,
                                            page_index:
                                                i === ea.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                                            page_size: i === ea.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                                            tile_type: o.Z[t.type],
                                            tile_position: String(null == I ? void 0 : I.tilePosition),
                                            cta_name: "claim premium product button",
                                        }),
                                            await (0, b.fK)(t.skuId),
                                            (0, en.Z)({
                                                product: t,
                                                analyticsLocations: s,
                                                purchaseType: ea.o8.PREMIUM_PURCHASE,
                                            });
                                    };
                                    return (0, l.jsx)(h.Button, {
                                        variant: "primary",
                                        onClick: (t) => {
                                            t.stopPropagation(), e();
                                        },
                                        disabled: L,
                                        loading: O,
                                        loadingStartedLabel: ed.intl.string(ed.t["TYw+9s"]),
                                        loadingFinishedLabel: ed.intl.string(ed.t.Pg1UP5),
                                        text: ed.intl.string(ed.t.zp6caO),
                                        fullWidth: !0,
                                    });
                                }
                                if (q)
                                    if (Q)
                                        return (0, l.jsx)(h.Button, {
                                            variant: "primary",
                                            text: ed.intl.format(ed.t.kAgx5L, {
                                                orbPrice: K[0].amount,
                                                orbIconHook: () => (0, l.jsx)(P.Z, { className: eu.orbIconAligned }),
                                            }),
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    E.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                                        tile_type: o.Z[t.type],
                                                        tile_position: String(null == I ? void 0 : I.tilePosition),
                                                        cta_name: "claim with orbs button",
                                                    }),
                                                    (0, S.qA)({
                                                        skuId: (0, Y.S)({
                                                            product: t,
                                                            selectedVariantIndex: r,
                                                        }),
                                                        onCheckoutSuccess: (e) => {
                                                            var i;
                                                            let { entitlements: l } = e;
                                                            (0, b.qg)({ variantsReturnStyle: u.v.VARIANTS_GROUP }),
                                                                (0, en.Z)({
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
                                            "aria-label": ed.intl.formatToPlainString(ed.t["fNG/05"], {
                                                orbPrice: K[0].amount,
                                            }),
                                            fullWidth: !0,
                                        });
                                    else return X();
                                if (i === ea.AW.ORBS)
                                    return (0, l.jsx)(h.Button, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(), V(e);
                                        },
                                        text: ed.intl.string(ed.t.GpnHfH),
                                        fullWidth: !0,
                                    });
                                let e = F
                                    ? ed.intl.formatToPlainString(ed.t["5U5RB5"], { discountOfferAmount: D })
                                    : ed.intl.formatToPlainString(ed.t["cNSL/j"], { price: R });
                                return (0, l.jsx)(h.Button, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            E.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                                sku_id: t.skuId,
                                                page_type: i,
                                                page_section: null == I ? void 0 : I.pageSection,
                                                page_category: i === ea.AW.HOME || null == I ? void 0 : I.pageCategory,
                                                page_index:
                                                    i === ea.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                                                page_size:
                                                    i === ea.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                                                tile_type: o.Z[t.type],
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
                                                variantsReturnStyle: u.v.VARIANTS_GROUP,
                                            });
                                    },
                                    text: e,
                                    fullWidth: !0,
                                });
                            }
                        })(),
                        Z
                            ? (0, l.jsx)(T.k0, {
                                  newValue: { pageCategory: i === ea.AW.HOME || null == I ? void 0 : I.pageCategory },
                                  children: (0, l.jsx)(W.Z, {
                                      primary: !0,
                                      product: t,
                                      selectedVariantIndex: r,
                                      returnRef: a,
                                      tooltipDelay: 250,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let eC = n.memo(function (e) {
        let {
                product: t,
                user: i,
                category: r,
                tab: u,
                cardRef: p,
                selectedProduct: _,
                firstCollectibleItem: f,
                selectedVariantIndex: y,
                handleEntering: P,
                handleLeaving: S,
                previewingVariantIndex: b,
                className: j,
                shopBlockType: L,
            } = e,
            { analyticsLocations: N } = (0, x.ZP)([v.Z.COLLECTIBLES_SHOP_CARD]),
            Z = (0, T.sp)(),
            B = (0, er.G)("CollectiblesShopTallCard"),
            W = null != L && L === d.z.HERO && B ? ea.Ch.THUMBNAIL : ea.Ch.DEFAULT,
            G = (0, I.Y)({ location: "CollectiblesShopTallCard" }),
            { isHoveringOrFocusing: U } = (0, C.Z)(p),
            K = (0, ei.To)(t),
            Q = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
            Y = O.ZP.canUseCollectibles(i),
            X = n.useMemo(() => (0, k.BH)(t, Y), [t, Y]),
            J = (0, k.G1)(t),
            $ = (0, c.e7)([A.Z], () => (0, h.wjy)(A.Z.theme)),
            { isPurchased: ee, isPartiallyOwnedBundle: et } = (0, w.L)(_),
            { isDisabled: en } = (0, R.G)(_.skuId),
            eo = null !== b ? b : y,
            [eg, em] = n.useState(!1),
            ev = n.useCallback(
                function (e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return (0, s.EQ)(e.type)
                        .with(o.Z.PROFILE_EFFECT, () =>
                            (0, l.jsx)(ec, {
                                isHighlighted: t,
                                skuId: e.skuId,
                                isPurchased: n && !r,
                            }),
                        )
                        .with(o.Z.AVATAR_DECORATION, () =>
                            (0, l.jsx)(ep, {
                                item: e,
                                user: i,
                                isHighlighted: t,
                                isPurchased: n,
                            }),
                        )
                        .with(o.Z.NAMEPLATE, () =>
                            (0, l.jsx)(eh, {
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
            eC = n.useRef(null),
            { displayPrices: e_, isOrbExclusive: ef } = (0, el.oo)({
                product: t,
                isPremiumUser: Y,
                tab: u,
            }),
            ey = n.useCallback(
                (e) => (i) => {
                    let l = (0, el.oQ)({ product: t });
                    (eC.current = i.currentTarget),
                        E.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == Z ? void 0 : Z.sessionId,
                            sku_id: t.skuId,
                            page_type: u,
                            page_section: null == Z ? void 0 : Z.pageSection,
                            page_category: u === ea.AW.HOME ? void 0 : r.name,
                            page_index: u === ea.AW.CATALOG ? (null == Z ? void 0 : Z.pageIndex) : void 0,
                            page_size: u === ea.AW.CATALOG ? (null == Z ? void 0 : Z.pageSize) : void 0,
                            tile_type: o.Z[t.type],
                            tile_position: String(null == Z ? void 0 : Z.tilePosition),
                            cta_name: null,
                        }),
                        (0, M.T)({
                            product: t,
                            category: r,
                            shouldCheckoutWithOrbs: l,
                            analyticsLocations: N,
                            analyticsSource: e,
                            returnRef: eC,
                            tab: u,
                            variantType: W,
                        });
                },
                [t, r, u, N, Z, W],
            ),
            eI = ey(v.Z.COLLECTIBLES_SHOP_CARD);
        if (0 === e_.length || ((0, k.x6)(t) && null != X && X.discountPercentage < 0)) return null;
        let eA = a()(eu.badge, { [eu.badgeLeftAligned]: G });
        return (0, l.jsx)(h.tEY, {
            children: (0, l.jsxs)(h.kL8, {
                className: a()(j, $ ? eu.shopCardDark : eu.shopCard, {
                    [eu.partiallyOwned]: et && !U,
                    [eu.shopCardAnimation]: !Q,
                    [$ ? eu.shopCardDarkHighlighted : eu.shopCardHighlighted]: U,
                }),
                ref: p,
                onClick: eI,
                "aria-label": t.name,
                children: [
                    J &&
                        (0, l.jsx)(g.u, {
                            text: ed.intl.string(ed.t.nKdAlO),
                            children: (0, l.jsx)(h.IGR, {
                                className: a()(eu.premiumWheelBadge, { [eu.badgeLeftAligned]: G }),
                                text: (0, l.jsx)(h.SrA, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eu.premiumWheel,
                                }),
                            }),
                        }),
                    (0, l.jsx)(H.Z, {
                        category: r,
                        className: a()(eu.limitedTimeBadge, { [eu.badgeLeftAligned]: G }),
                        display: H.k.CARD,
                        shopBlockType: L,
                    }),
                    G &&
                        (0, l.jsx)(z.a, {
                            product: t,
                            selectedVariantIndex: y,
                            className: eu.wishlistButton,
                            isCardHovered: U,
                        }),
                    !et && !ee && (0, k.Yq)(t.skuId)
                        ? (0, l.jsx)(h.IGR, {
                              text: ed.intl.string(ed.t.y2b7CA),
                              disableColor: !0,
                              className: eA,
                          })
                        : ef
                          ? (0, l.jsx)(h.IGR, {
                                text: ed.intl.string(ed.t["0TmQRG"]),
                                disableColor: !0,
                                className: eA,
                            })
                          : null,
                    (0, l.jsx)("div", {
                        className: a()(eu.preview, { [eu.previewThumbnailVariant]: W === ea.Ch.THUMBNAIL }),
                        children: (0, s.EQ)(t.type)
                            .with(o.Z.PROFILE_EFFECT, o.Z.AVATAR_DECORATION, o.Z.NAMEPLATE, () => ev(f, U, ee))
                            .with(o.Z.BUNDLE, () =>
                                (0, l.jsx)(q.d, {
                                    product: t,
                                    user: i,
                                    isPurchased: ee,
                                    isHighlighted: U,
                                }),
                            )
                            .with(o.Z.VARIANTS_GROUP, () => {
                                if (null == t.variants || 0 === t.variants.length) return null;
                                let e = t.variants[eo];
                                if (null == e) return null;
                                let [i] = e.items;
                                return ev(i, U, ee, eg);
                            })
                            .with(o.Z.EXTERNAL_SKU, () =>
                                (0, l.jsx)(V.b, {
                                    product: t,
                                    animationState: U ? "on" : "off",
                                    className: en || (ee && !U) ? eu.externalProductDimmed : void 0,
                                }),
                            )
                            .otherwise(() => null),
                    }),
                    (() => {
                        let e = ee ? h.sV5 : en ? h.mBM : null;
                        return null == e
                            ? null
                            : (0, l.jsx)("div", {
                                  className: eu.cardStateIconWrapper,
                                  children: (0, l.jsx)(e, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 38,
                                      height: 38,
                                      className: a()(eu.cardStateIcon, { [eu.checkmark]: ee }),
                                  }),
                              });
                    })(),
                    (0, l.jsxs)("div", {
                        className: a()(eu.cardText, $ ? eu.darkCardBackground : eu.lightCardBackground, {
                            [eu.variantsGroup]: t.type === o.Z.VARIANTS_GROUP,
                            [eu.thumbnailVariant]: t.type === o.Z.VARIANTS_GROUP && W === ea.Ch.THUMBNAIL,
                        }),
                        children: [
                            (0, l.jsx)(h.Heading, {
                                variant: "text-lg/bold",
                                className: eu.productName,
                                children: K,
                            }),
                            t.type === o.Z.VARIANTS_GROUP
                                ? W === ea.Ch.DEFAULT
                                    ? (0, l.jsx)(D.P, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: {
                                              previewingVariantIndex: b,
                                              handleEntering: P,
                                              handleLeaving: S,
                                          },
                                          selectedVariantIndex: y,
                                          setIsHoveringOnSwitch: em,
                                          minimal: !U,
                                          alternativeBackgroundColor:
                                              (null == f ? void 0 : f.type) === o.Z.PROFILE_EFFECT,
                                      })
                                    : (0, l.jsx)(F.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: {
                                              previewingVariantIndex: b,
                                              handleEntering: P,
                                              handleLeaving: S,
                                          },
                                          selectedVariantIndex: y,
                                          setIsHoveringOnSwitch: em,
                                      })
                                : null,
                            (0, l.jsx)(ex, {
                                product: t,
                                tab: u,
                                buildHandlePreviewClick: ey,
                                selectedProduct: _,
                                selectedVariantIndex: y,
                                cardRef: p,
                                analyticsLocations: N,
                                isPremiumUser: Y,
                                isPremiumProduct: J,
                                isPartiallyOwnedBundle: et,
                                isPurchased: ee,
                                isDisabled: en,
                                discount: X,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    e_ = ev;
