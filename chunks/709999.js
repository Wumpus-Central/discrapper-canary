n.d(t, { Z: () => ex }), n(388685), n(314940);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(278074),
    s = n(979554),
    c = n(311570),
    d = n(399606),
    u = n(622535),
    m = n(28664),
    p = n(481060),
    h = n(607070),
    x = n(100527),
    g = n(906732),
    f = n(104505),
    b = n(333867),
    v = n(767714),
    j = n(876917),
    _ = n(567400),
    y = n(210887),
    C = n(960919),
    S = n(275388),
    E = n(626135),
    T = n(74538),
    O = n(335131),
    N = n(381585),
    P = n(1870),
    I = n(429368),
    w = n(884697),
    k = n(635552),
    R = n(290175),
    A = n(724994),
    D = n(297651),
    Z = n(390698),
    L = n(813083),
    M = n(680942),
    U = n(409116),
    B = n(237031),
    F = n(786040),
    G = n(508925),
    z = n(453713),
    H = n(143941),
    V = n(616066),
    W = n(216541),
    K = n(396728),
    q = n(67409),
    Y = n(58201),
    J = n(445794),
    X = n(694364),
    Q = n(201964),
    $ = n(361110),
    ee = n(29121),
    et = n(956472),
    en = n(832149),
    ea = n(215023),
    er = n(981631),
    el = n(474936),
    ei = n(388032),
    eo = n(300179);
let es = (e) => {
        let { skuId: t, isHighlighted: n, isPurchased: r } = e;
        return (0, a.jsx)("div", {
            className: eo.profileEffectShopPreview,
            children: (0, a.jsx)(j.Z, {
                skuId: t,
                isHighlighted: n,
                isPurchased: r && !n,
                removeSetHeight: !0,
            }),
        });
    },
    ec = (e) => {
        let { isHighlighted: t, isPurchased: n, user: r, item: l } = e;
        return (0, a.jsx)("div", {
            className: eo.avatarContainer,
            children: (0, a.jsx)(V.R, {
                item: l,
                user: r,
                isPurchased: n,
                isHighlighted: t,
            }),
        });
    },
    ed = (e) => {
        let { user: t, nameplate: n, isHighlighted: r, isPurchased: l } = e;
        return (0, a.jsx)("div", {
            className: eo.nameplateContainer,
            children: (0, a.jsx)(K.Z, {
                user: t,
                nameplate: n,
                isHighlighted: r,
                isPurchased: l,
            }),
        });
    },
    eu = (e) => {
        let { tab: t, selectedProduct: n, cardRef: r, children: l } = e,
            { handleCardVisibilityChange: i } = (0, D.E)(n.skuId, t === ea.AW.CATALOG ? "full" : t);
        return (0, a.jsx)(u.$, {
            innerRef: r,
            onChange: i,
            threshold: 0,
            children: l,
        });
    },
    em = r.memo(function (e) {
        var { tab: t, product: n, onMount: l, shopBlockType: i } = e,
            o = (function (e, t) {
                if (null == e) return {};
                var n,
                    a,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            a,
                            r = {},
                            l = Object.keys(e);
                        for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < l.length; a++)
                        (n = l[a]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ["tab", "product", "onMount", "shopBlockType"]);
        let s = (0, I.o)(n),
            c = (0, Y.W)(n, s),
            d = r.useRef(null),
            { previewingVariantIndex: u, handleEntering: m, handleLeaving: p } = (0, $.f)(n),
            h = (0, Q.o)(n, u);
        return (
            r.useEffect(() => {
                null == l || l(d, n);
            }, [l, n]),
            (0, a.jsx)(eu, {
                tab: t,
                selectedProduct: c,
                cardRef: d,
                children: (0, a.jsx)(
                    eh,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })(
                        {
                            tab: t,
                            product: n,
                            selectedVariantIndex: s,
                            selectedProduct: c,
                            cardRef: d,
                            previewingVariantIndex: u,
                            handleEntering: m,
                            handleLeaving: p,
                            firstCollectibleItem: h,
                            shopBlockType: i,
                        },
                        o,
                    ),
                ),
            })
        );
    });
function ep(e) {
    let {
            product: t,
            tab: n,
            selectedProduct: r,
            selectedVariantIndex: l,
            cardRef: i,
            analyticsLocations: o,
            buildHandlePreviewClick: u,
            isPremiumUser: m,
            isPremiumProduct: h,
            isPurchased: g,
            isPartiallyOwnedBundle: f,
            isDisabled: j,
            discount: _,
        } = e,
        y = (0, N.sp)(),
        T = (0, w.rN)(t),
        [I, R] = (0, d.Wu)([P.Z], () => [
            P.Z.isClaiming === t.skuId,
            null != P.Z.isClaiming && P.Z.isClaiming !== t.skuId,
        ]),
        A = (0, w.XM)(r, m, !1),
        D = (0, w.ne)({
            product: r,
            isPartiallyOwnedBundle: f,
            isPurchased: g,
        }),
        L = (0, X.J)(t, n === ea.AW.ORBS ? F.tA.ORBS : void 0),
        { handleUseNow: B, isApplying: G } = (0, k.W)({ product: r }),
        z = u(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        H = (0, J.Iw)(t),
        V = null != H,
        {
            displayPrices: W,
            checkoutEligiblePrices: K,
            shouldCheckoutWithOrbs: Y,
            hasSufficientOrbs: Q,
        } = (0, et.Ip)({
            product: t,
            isPremiumUser: m,
            tab: n,
            hasDiscountOffer: V,
        });
    if (0 === W.length) return null;
    let $ = () =>
        (0, a.jsx)(p.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), z(e);
            },
            text: ei.intl.string(ei.t.FdGl5A),
            fullWidth: !0,
        });
    return (0, a.jsxs)("div", {
        className: eo.detailsWrapper,
        children: [
            (0, a.jsx)("div", {
                className: eo.innerBlur,
                children: j
                    ? (0, a.jsx)(p.Text, {
                          tag: "div",
                          variant: "heading-md/semibold",
                          color: "header-muted",
                          className: eo.priceTag,
                          children: ei.intl.string(ei.t.wu4gyV),
                      })
                    : g || f
                      ? (0, a.jsx)(Z.U, {
                            className: eo.priceTag,
                            isPartiallyPurchased: f,
                        })
                      : h
                        ? (0, a.jsx)(p.Text, {
                              variant: "text-md/semibold",
                              className: eo.priceTag,
                              children: ei.intl.string(ei.t.rt69oo),
                          })
                        : (0, a.jsx)("div", {
                              className: eo.priceLine,
                              children: W.map((e, t) =>
                                  (0, a.jsx)(
                                      U.F,
                                      {
                                          price: e,
                                          discount: _,
                                          discountOfferAmount: H,
                                          nitroIconType: m ? "default" : void 0,
                                          nitroIconSize: "md",
                                          className:
                                              e.currency !== er.pKx.DISCORD_ORB || Q ? void 0 : eo.insufficientOrbs,
                                      },
                                      t,
                                  ),
                              ),
                          }),
            }),
            (0, a.jsx)("div", {
                className: eo.innerHover,
                children: (0, a.jsxs)(p.ButtonGroup, {
                    wrap: !1,
                    fullWidth: !0,
                    children: [
                        (() => {
                            if (h && !m && !T)
                                return (0, a.jsx)("div", {
                                    className: eo.hoverUpsellContainer,
                                    children: (0, a.jsx)(v.Z, {
                                        fullWidth: !0,
                                        className: eo.__invalid_premiumSubscribeButton,
                                        disabled: R,
                                        onClick: (e) => e.stopPropagation(),
                                        textOptions: { textOverride: ei.intl.string(ei.t.sEAnVH) },
                                        subscriptionTier: el.Si.TIER_2,
                                    }),
                                });
                            if (!D || j) return $();
                            if (g)
                                return (0, a.jsx)(p.Button, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(), B();
                                    },
                                    loading: G,
                                    text: ei.intl.string(ei.t.MAS7uK),
                                    fullWidth: !0,
                                });
                            {
                                if (h) {
                                    let e = async () => {
                                        E.default.track(er.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                            collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
                                            sku_id: t.skuId,
                                            page_type: n,
                                            page_section: null == y ? void 0 : y.pageSection,
                                            page_category: n === ea.AW.HOME || null == y ? void 0 : y.pageCategory,
                                            page_index:
                                                n === ea.AW.CATALOG ? (null == y ? void 0 : y.pageIndex) : void 0,
                                            page_size: n === ea.AW.CATALOG ? (null == y ? void 0 : y.pageSize) : void 0,
                                            tile_type: s.Z[t.type],
                                            tile_position: String(null == y ? void 0 : y.tilePosition),
                                            cta_name: "claim premium product button",
                                        }),
                                            await (0, O.fK)(t.skuId),
                                            (0, en.Z)({
                                                product: t,
                                                analyticsLocations: o,
                                                purchaseType: ea.o8.PREMIUM_PURCHASE,
                                            });
                                    };
                                    return (0, a.jsx)(p.Button, {
                                        variant: "primary",
                                        onClick: (t) => {
                                            t.stopPropagation(), e();
                                        },
                                        disabled: R,
                                        loading: I,
                                        loadingStartedLabel: ei.intl.string(ei.t["TYw+9s"]),
                                        loadingFinishedLabel: ei.intl.string(ei.t.Pg1UP5),
                                        text: ei.intl.string(ei.t.zp6caO),
                                        fullWidth: !0,
                                    });
                                }
                                if (Y)
                                    if (Q)
                                        return (0, a.jsx)(p.Button, {
                                            variant: "primary",
                                            text: ei.intl.format(ei.t.kAgx5L, {
                                                orbPrice: K[0].amount,
                                                orbIconHook: () => (0, a.jsx)(C.Z, { className: eo.orbIconAligned }),
                                            }),
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    E.default.track(er.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
                                                        sku_id: t.skuId,
                                                        page_type: n,
                                                        page_section: null == y ? void 0 : y.pageSection,
                                                        page_category:
                                                            n === ea.AW.HOME || null == y ? void 0 : y.pageCategory,
                                                        page_index:
                                                            n === ea.AW.CATALOG
                                                                ? null == y
                                                                    ? void 0
                                                                    : y.pageIndex
                                                                : void 0,
                                                        page_size:
                                                            n === ea.AW.CATALOG
                                                                ? null == y
                                                                    ? void 0
                                                                    : y.pageSize
                                                                : void 0,
                                                        tile_type: s.Z[t.type],
                                                        tile_position: String(null == y ? void 0 : y.tilePosition),
                                                        cta_name: "claim with orbs button",
                                                    }),
                                                    (0, S.qA)({
                                                        skuId: (0, q.S)({
                                                            product: t,
                                                            selectedVariantIndex: l,
                                                        }),
                                                        onCheckoutSuccess: (e) => {
                                                            var n;
                                                            let { entitlements: a } = e;
                                                            (0, O.qg)({ variantsReturnStyle: c.v.VARIANTS_GROUP }),
                                                                (0, en.Z)({
                                                                    product: t,
                                                                    analyticsLocations: o,
                                                                    itemConsumed:
                                                                        null == (n = a[0]) ? void 0 : n.consumed,
                                                                    purchaseType: ea.o8.ORB,
                                                                });
                                                        },
                                                        analyticsLocations: o,
                                                    });
                                            },
                                            "aria-label": ei.intl.formatToPlainString(ei.t["fNG/05"], {
                                                orbPrice: K[0].amount,
                                            }),
                                            fullWidth: !0,
                                        });
                                    else return $();
                                if (n === ea.AW.ORBS)
                                    return (0, a.jsx)(p.Button, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(), z(e);
                                        },
                                        text: ei.intl.string(ei.t.GpnHfH),
                                        fullWidth: !0,
                                    });
                                let e = V
                                    ? ei.intl.formatToPlainString(ei.t["5U5RB5"], { discountOfferAmount: H })
                                    : ei.intl.formatToPlainString(ei.t["cNSL/j"], { price: A });
                                return (0, a.jsx)(p.Button, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            E.default.track(er.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
                                                sku_id: t.skuId,
                                                page_type: n,
                                                page_section: null == y ? void 0 : y.pageSection,
                                                page_category: n === ea.AW.HOME || null == y ? void 0 : y.pageCategory,
                                                page_index:
                                                    n === ea.AW.CATALOG ? (null == y ? void 0 : y.pageIndex) : void 0,
                                                page_size:
                                                    n === ea.AW.CATALOG ? (null == y ? void 0 : y.pageSize) : void 0,
                                                tile_type: s.Z[t.type],
                                                tile_position: String(null == y ? void 0 : y.tilePosition),
                                                cta_name: "buy button",
                                            }),
                                            (0, b.Z)({
                                                skuId: (0, q.S)({
                                                    product: t,
                                                    selectedVariantIndex: l,
                                                }),
                                                analyticsLocations: o,
                                                returnRef: i,
                                                variantsReturnStyle: c.v.VARIANTS_GROUP,
                                            });
                                    },
                                    text: e,
                                    fullWidth: !0,
                                });
                            }
                        })(),
                        L
                            ? (0, a.jsx)(N.k0, {
                                  newValue: { pageCategory: n === ea.AW.HOME || null == y ? void 0 : y.pageCategory },
                                  children: (0, a.jsx)(M.Z, {
                                      primary: !0,
                                      product: t,
                                      selectedVariantIndex: l,
                                      returnRef: i,
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
let eh = r.memo(function (e) {
        let {
                product: t,
                user: n,
                category: l,
                tab: c,
                cardRef: u,
                selectedProduct: b,
                firstCollectibleItem: v,
                selectedVariantIndex: j,
                handleEntering: C,
                handleLeaving: S,
                previewingVariantIndex: O,
                className: P,
                shopBlockType: I,
            } = e,
            { analyticsLocations: k } = (0, g.ZP)([x.Z.COLLECTIBLES_SHOP_CARD]),
            D = (0, N.sp)(),
            Z = (0, _.Y)({ location: "CollectiblesShopTallCard" }),
            { isHoveringOrFocusing: M } = (0, f.Z)(u),
            U = (0, ee.To)(t),
            F = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
            V = T.ZP.canUseCollectibles(n),
            K = r.useMemo(() => (0, w.BH)(t, V), [t, V]),
            q = (0, w.G1)(t),
            Y = (0, d.e7)([y.Z], () => (0, p.wjy)(y.Z.theme)),
            { isPurchased: J, isPartiallyOwnedBundle: X } = (0, A.L)(b),
            { isDisabled: Q } = (0, R.G)(b.skuId),
            $ = null !== O ? O : j,
            [en, el] = r.useState(!1),
            eu = r.useCallback(
                function (e, t, r) {
                    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return (0, o.EQ)(e.type)
                        .with(s.Z.PROFILE_EFFECT, () =>
                            (0, a.jsx)(es, {
                                isHighlighted: t,
                                skuId: e.skuId,
                                isPurchased: r && !l,
                            }),
                        )
                        .with(s.Z.AVATAR_DECORATION, () =>
                            (0, a.jsx)(ec, {
                                item: e,
                                user: n,
                                isHighlighted: t,
                                isPurchased: r,
                            }),
                        )
                        .with(s.Z.NAMEPLATE, () =>
                            (0, a.jsx)(ed, {
                                user: n,
                                nameplate: e,
                                isHighlighted: t,
                                isPurchased: r,
                            }),
                        )
                        .otherwise(() => null);
                },
                [n],
            ),
            em = r.useRef(null),
            { displayPrices: eh, isOrbExclusive: ex } = (0, et.oo)({
                product: t,
                isPremiumUser: V,
                tab: c,
            }),
            eg = r.useCallback(
                (e) => (n) => {
                    let a = (0, et.oQ)({ product: t });
                    (em.current = n.currentTarget),
                        E.default.track(er.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == D ? void 0 : D.sessionId,
                            sku_id: t.skuId,
                            page_type: c,
                            page_section: null == D ? void 0 : D.pageSection,
                            page_category: c === ea.AW.HOME ? void 0 : l.name,
                            page_index: c === ea.AW.CATALOG ? (null == D ? void 0 : D.pageIndex) : void 0,
                            page_size: c === ea.AW.CATALOG ? (null == D ? void 0 : D.pageSize) : void 0,
                            tile_type: s.Z[t.type],
                            tile_position: String(null == D ? void 0 : D.tilePosition),
                            cta_name: null,
                        }),
                        (0, B.T)({
                            product: t,
                            category: l,
                            shouldCheckoutWithOrbs: a,
                            analyticsLocations: k,
                            analyticsSource: e,
                            returnRef: em,
                            tab: c,
                        });
                },
                [t, l, c, k, D],
            ),
            ef = eg(x.Z.COLLECTIBLES_SHOP_CARD);
        if (0 === eh.length || ((0, w.x6)(t) && null != K && K.discountPercentage < 0)) return null;
        let eb = i()(eo.badge, { [eo.badgeLeftAligned]: Z });
        return (0, a.jsx)(p.tEY, {
            children: (0, a.jsxs)(p.kL8, {
                className: i()(P, Y ? eo.shopCardDark : eo.shopCard, {
                    [eo.partiallyOwned]: X && !M,
                    [eo.shopCardAnimation]: !F,
                    [Y ? eo.shopCardDarkHighlighted : eo.shopCardHighlighted]: M,
                }),
                ref: u,
                onClick: ef,
                "aria-label": t.name,
                children: [
                    q &&
                        (0, a.jsx)(m.u, {
                            text: ei.intl.string(ei.t.nKdAlO),
                            children: (0, a.jsx)(p.IGR, {
                                className: i()(eo.premiumWheelBadge, { [eo.badgeLeftAligned]: Z }),
                                text: (0, a.jsx)(p.SrA, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eo.premiumWheel,
                                }),
                            }),
                        }),
                    (0, a.jsx)(L.Z, {
                        category: l,
                        className: i()(eo.limitedTimeBadge, { [eo.badgeLeftAligned]: Z }),
                        display: L.k.CARD,
                        shopBlockType: I,
                    }),
                    Z &&
                        (0, a.jsx)(H.a, {
                            product: t,
                            selectedVariantIndex: j,
                            className: eo.wishlistButton,
                            isCardHovered: M,
                        }),
                    !X && !J && (0, w.Yq)(t.skuId)
                        ? (0, a.jsx)(p.IGR, {
                              text: ei.intl.string(ei.t.y2b7CA),
                              disableColor: !0,
                              className: eb,
                          })
                        : ex
                          ? (0, a.jsx)(p.IGR, {
                                text: ei.intl.string(ei.t["0TmQRG"]),
                                disableColor: !0,
                                className: eb,
                            })
                          : null,
                    (0, a.jsx)("div", {
                        className: eo.preview,
                        children: (0, o.EQ)(t.type)
                            .with(s.Z.PROFILE_EFFECT, s.Z.AVATAR_DECORATION, s.Z.NAMEPLATE, () => eu(v, M, J))
                            .with(s.Z.BUNDLE, () =>
                                (0, a.jsx)(W.d, {
                                    product: t,
                                    user: n,
                                    isPurchased: J,
                                    isHighlighted: M,
                                }),
                            )
                            .with(s.Z.VARIANTS_GROUP, () => {
                                if (null == t.variants || 0 === t.variants.length) return null;
                                let e = t.variants[$];
                                if (null == e) return null;
                                let [n] = e.items;
                                return eu(n, M, J, en);
                            })
                            .with(s.Z.EXTERNAL_SKU, () =>
                                (0, a.jsx)(G.b, {
                                    product: t,
                                    animationState: M ? "on" : "off",
                                    className: Q || (J && !M) ? eo.externalProductDimmed : void 0,
                                }),
                            )
                            .otherwise(() => null),
                    }),
                    (() => {
                        let e = J ? p.sV5 : Q ? p.mBM : null;
                        return null == e
                            ? null
                            : (0, a.jsx)("div", {
                                  className: eo.cardStateIconWrapper,
                                  children: (0, a.jsx)(e, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 38,
                                      height: 38,
                                      className: i()(eo.cardStateIcon, { [eo.checkmark]: J }),
                                  }),
                              });
                    })(),
                    (0, a.jsxs)("div", {
                        className: i()(eo.cardText, Y ? eo.darkCardBackground : eo.lightCardBackground, {
                            [eo.variantsGroup]: t.type === s.Z.VARIANTS_GROUP,
                        }),
                        children: [
                            (0, a.jsx)(p.Heading, {
                                variant: "text-lg/bold",
                                className: eo.productName,
                                children: U,
                            }),
                            t.type === s.Z.VARIANTS_GROUP
                                ? (0, a.jsx)(z.P, {
                                      variantGroupProduct: t,
                                      previewingVariantIndexProps: {
                                          previewingVariantIndex: O,
                                          handleEntering: C,
                                          handleLeaving: S,
                                      },
                                      selectedVariantIndex: j,
                                      setIsHoveringOnSwitch: el,
                                      minimal: !M,
                                      alternativeBackgroundColor: (null == v ? void 0 : v.type) === s.Z.PROFILE_EFFECT,
                                  })
                                : null,
                            (0, a.jsx)(ep, {
                                product: t,
                                tab: c,
                                buildHandlePreviewClick: eg,
                                selectedProduct: b,
                                selectedVariantIndex: j,
                                cardRef: u,
                                analyticsLocations: k,
                                isPremiumUser: V,
                                isPremiumProduct: q,
                                isPartiallyOwnedBundle: X,
                                isPurchased: J,
                                isDisabled: Q,
                                discount: K,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    ex = em;
