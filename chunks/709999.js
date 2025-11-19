n.d(t, { Z: () => ex }), n(388685), n(314940);
var a = n(54381),
    l = n(473749),
    i = n(120356),
    r = n.n(i),
    s = n(278074),
    o = n(979554),
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
    N = n(74538),
    T = n(335131),
    O = n(381585),
    P = n(1870),
    I = n(429368),
    w = n(884697),
    k = n(635552),
    A = n(290175),
    R = n(724994),
    Z = n(297651),
    D = n(390698),
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
    el = n(981631),
    ei = n(474936),
    er = n(388032),
    es = n(300179);
let eo = (e) => {
        let { skuId: t, isHighlighted: n, isPurchased: l } = e;
        return (0, a.jsx)("div", {
            className: es.profileEffectShopPreview,
            children: (0, a.jsx)(j.Z, {
                skuId: t,
                isHighlighted: n,
                isPurchased: l && !n,
                removeSetHeight: !0,
            }),
        });
    },
    ec = (e) => {
        let { isHighlighted: t, isPurchased: n, user: l, item: i } = e;
        return (0, a.jsx)("div", {
            className: es.avatarContainer,
            children: (0, a.jsx)(V.R, {
                item: i,
                user: l,
                isPurchased: n,
                isHighlighted: t,
            }),
        });
    },
    ed = (e) => {
        let { user: t, nameplate: n, isHighlighted: l, isPurchased: i } = e;
        return (0, a.jsx)("div", {
            className: es.nameplateContainer,
            children: (0, a.jsx)(K.Z, {
                user: t,
                nameplate: n,
                isHighlighted: l,
                isPurchased: i,
            }),
        });
    },
    eu = (e) => {
        let { tab: t, selectedProduct: n, cardRef: l, children: i } = e,
            { handleCardVisibilityChange: r } = (0, Z.E)(n.skuId, t === ea.AW.CATALOG ? "full" : t);
        return (0, a.jsx)(u.$, {
            innerRef: l,
            onChange: r,
            threshold: 0,
            children: i,
        });
    },
    em = l.memo(function (e) {
        var { tab: t, product: n, onMount: i } = e,
            r = (function (e, t) {
                if (null == e) return {};
                var n,
                    a,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            a,
                            l = {},
                            i = Object.keys(e);
                        for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < i.length; a++)
                        (n = i[a]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ["tab", "product", "onMount"]);
        let s = (0, I.o)(n),
            o = (0, Y.W)(n, s),
            c = l.useRef(null),
            { previewingVariantIndex: d, handleEntering: u, handleLeaving: m } = (0, $.f)(n),
            p = (0, Q.o)(n, d);
        return (
            l.useEffect(() => {
                null == i || i(c, n);
            }, [i, n]),
            (0, a.jsx)(eu, {
                tab: t,
                selectedProduct: o,
                cardRef: c,
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
                            selectedProduct: o,
                            cardRef: c,
                            previewingVariantIndex: d,
                            handleEntering: u,
                            handleLeaving: m,
                            firstCollectibleItem: p,
                        },
                        r,
                    ),
                ),
            })
        );
    });
function ep(e) {
    let {
            product: t,
            tab: n,
            selectedProduct: l,
            selectedVariantIndex: i,
            cardRef: r,
            analyticsLocations: s,
            buildHandlePreviewClick: u,
            isPremiumUser: m,
            isPremiumProduct: h,
            isPurchased: g,
            isPartiallyOwnedBundle: f,
            isDisabled: j,
            discount: _,
        } = e,
        y = (0, O.sp)(),
        N = (0, w.rN)(t),
        [I, A] = (0, d.Wu)([P.Z], () => [
            P.Z.isClaiming === t.skuId,
            null != P.Z.isClaiming && P.Z.isClaiming !== t.skuId,
        ]),
        R = (0, w.XM)(l, m, !1),
        Z = (0, w.ne)({
            product: l,
            isPartiallyOwnedBundle: f,
            isPurchased: g,
        }),
        L = (0, X.J)(t, n === ea.AW.ORBS ? F.tA.ORBS : void 0),
        { handleUseNow: B, isApplying: G } = (0, k.W)({ product: l }),
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
            hasDiscountOffer: V,
            prioritizedCurrency: n === ea.AW.ORBS ? F.tA.ORBS : void 0,
        });
    if (0 === W.length) return null;
    let $ = () =>
        (0, a.jsx)(p.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), z(e);
            },
            text: er.intl.string(er.t.FdGl5A),
            fullWidth: !0,
        });
    return (0, a.jsxs)("div", {
        className: es.detailsWrapper,
        children: [
            (0, a.jsx)("div", {
                className: es.innerBlur,
                children: j
                    ? (0, a.jsx)(p.Text, {
                          tag: "div",
                          variant: "heading-md/semibold",
                          color: "header-muted",
                          className: es.priceTag,
                          children: er.intl.string(er.t.wu4gyV),
                      })
                    : g || f
                      ? (0, a.jsx)(D.U, {
                            className: es.priceTag,
                            isPartiallyPurchased: f,
                        })
                      : h
                        ? (0, a.jsx)(p.Text, {
                              variant: "text-md/semibold",
                              className: es.priceTag,
                              children: er.intl.string(er.t.rt69oo),
                          })
                        : (0, a.jsx)("div", {
                              className: es.priceLine,
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
                                              e.currency !== el.pKx.DISCORD_ORB || Q ? void 0 : es.insufficientOrbs,
                                      },
                                      t,
                                  ),
                              ),
                          }),
            }),
            (0, a.jsx)("div", {
                className: es.innerHover,
                children: (0, a.jsxs)(p.ButtonGroup, {
                    wrap: !1,
                    fullWidth: !0,
                    children: [
                        (() => {
                            if (h && !m && !N)
                                return (0, a.jsx)("div", {
                                    className: es.hoverUpsellContainer,
                                    children: (0, a.jsx)(v.Z, {
                                        fullWidth: !0,
                                        className: es.__invalid_premiumSubscribeButton,
                                        disabled: A,
                                        onClick: (e) => e.stopPropagation(),
                                        textOptions: { textOverride: er.intl.string(er.t.sEAnVH) },
                                        subscriptionTier: ei.Si.TIER_2,
                                    }),
                                });
                            if (!Z || j) return $();
                            if (g)
                                return (0, a.jsx)(p.Button, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(), B();
                                    },
                                    loading: G,
                                    text: er.intl.string(er.t.MAS7uK),
                                    fullWidth: !0,
                                });
                            {
                                if (h) {
                                    let e = async () => {
                                        E.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                            collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
                                            sku_id: t.skuId,
                                            page_type: n,
                                            page_section: null == y ? void 0 : y.pageSection,
                                            page_category: n === ea.AW.HOME || null == y ? void 0 : y.pageCategory,
                                            page_index:
                                                n === ea.AW.CATALOG ? (null == y ? void 0 : y.pageIndex) : void 0,
                                            page_size: n === ea.AW.CATALOG ? (null == y ? void 0 : y.pageSize) : void 0,
                                            tile_type: o.Z[t.type],
                                            tile_position: String(null == y ? void 0 : y.tilePosition),
                                            cta_name: "claim premium product button",
                                        }),
                                            await (0, T.fK)(t.skuId),
                                            (0, en.Z)({
                                                product: t,
                                                analyticsLocations: s,
                                                purchaseType: ea.o8.PREMIUM_PURCHASE,
                                            });
                                    };
                                    return (0, a.jsx)(p.Button, {
                                        variant: "primary",
                                        onClick: (t) => {
                                            t.stopPropagation(), e();
                                        },
                                        disabled: A,
                                        loading: I,
                                        loadingStartedLabel: er.intl.string(er.t["TYw+9s"]),
                                        loadingFinishedLabel: er.intl.string(er.t.Pg1UP5),
                                        text: er.intl.string(er.t.zp6caO),
                                        fullWidth: !0,
                                    });
                                }
                                if (Y)
                                    if (Q)
                                        return (0, a.jsx)(p.Button, {
                                            variant: "primary",
                                            text: er.intl.format(er.t.kAgx5L, {
                                                orbPrice: K[0].amount,
                                                orbIconHook: () => (0, a.jsx)(C.Z, { className: es.orbIconAligned }),
                                            }),
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    E.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                                        tile_type: o.Z[t.type],
                                                        tile_position: String(null == y ? void 0 : y.tilePosition),
                                                        cta_name: "claim with orbs button",
                                                    }),
                                                    (0, S.qA)({
                                                        skuId: (0, q.S)({
                                                            product: t,
                                                            selectedVariantIndex: i,
                                                        }),
                                                        onCheckoutSuccess: (e) => {
                                                            var n;
                                                            let { entitlements: a } = e;
                                                            (0, T.qg)({ variantsReturnStyle: c.v.VARIANTS_GROUP }),
                                                                (0, en.Z)({
                                                                    product: t,
                                                                    analyticsLocations: s,
                                                                    itemConsumed:
                                                                        null == (n = a[0]) ? void 0 : n.consumed,
                                                                    purchaseType: ea.o8.ORB,
                                                                });
                                                        },
                                                        analyticsLocations: s,
                                                    });
                                            },
                                            "aria-label": er.intl.formatToPlainString(er.t["fNG/05"], {
                                                orbPrice: K[0].amount,
                                            }),
                                            fullWidth: !0,
                                        });
                                    else if (K.length > 1)
                                        return (0, a.jsx)(p.Button, {
                                            variant: "primary",
                                            onClick: (e) => {
                                                e.stopPropagation(), z(e);
                                            },
                                            text: er.intl.string(er.t.GpnHfH),
                                            fullWidth: !0,
                                        });
                                    else return $();
                                let e = V
                                    ? er.intl.formatToPlainString(er.t["5U5RB5"], { discountOfferAmount: H })
                                    : er.intl.formatToPlainString(er.t["cNSL/j"], { price: R });
                                return (0, a.jsx)(p.Button, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            E.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
                                                sku_id: t.skuId,
                                                page_type: n,
                                                page_section: null == y ? void 0 : y.pageSection,
                                                page_category: n === ea.AW.HOME || null == y ? void 0 : y.pageCategory,
                                                page_index:
                                                    n === ea.AW.CATALOG ? (null == y ? void 0 : y.pageIndex) : void 0,
                                                page_size:
                                                    n === ea.AW.CATALOG ? (null == y ? void 0 : y.pageSize) : void 0,
                                                tile_type: o.Z[t.type],
                                                tile_position: String(null == y ? void 0 : y.tilePosition),
                                                cta_name: "buy button",
                                            }),
                                            (0, b.Z)({
                                                skuId: (0, q.S)({
                                                    product: t,
                                                    selectedVariantIndex: i,
                                                }),
                                                analyticsLocations: s,
                                                returnRef: r,
                                                variantsReturnStyle: c.v.VARIANTS_GROUP,
                                            });
                                    },
                                    text: e,
                                    fullWidth: !0,
                                });
                            }
                        })(),
                        L
                            ? (0, a.jsx)(O.k0, {
                                  newValue: { pageCategory: n === ea.AW.HOME || null == y ? void 0 : y.pageCategory },
                                  children: (0, a.jsx)(M.Z, {
                                      primary: !0,
                                      product: t,
                                      selectedVariantIndex: i,
                                      returnRef: r,
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
let eh = l.memo(function (e) {
        let {
                product: t,
                user: n,
                category: i,
                tab: c,
                cardRef: u,
                selectedProduct: b,
                firstCollectibleItem: v,
                selectedVariantIndex: j,
                handleEntering: C,
                handleLeaving: S,
                previewingVariantIndex: T,
                className: P,
                skipLimitedTimeCheck: I,
            } = e,
            { analyticsLocations: k } = (0, g.ZP)([x.Z.COLLECTIBLES_SHOP_CARD]),
            Z = (0, O.sp)(),
            D = (0, _.Y)({ location: "CollectiblesShopTallCard" }),
            { isHoveringOrFocusing: M } = (0, f.Z)(u),
            U = (0, ee.To)(t),
            V = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
            K = N.ZP.canUseCollectibles(n),
            q = l.useMemo(() => (0, w.BH)(t, K), [t, K]),
            Y = (0, w.G1)(t),
            J = (0, d.e7)([y.Z], () => (0, p.wjy)(y.Z.theme)),
            { isPurchased: X, isPartiallyOwnedBundle: Q } = (0, R.L)(b),
            { isDisabled: $ } = (0, A.G)(b.skuId),
            en = null !== T ? T : j,
            [ei, eu] = l.useState(!1),
            em = l.useCallback(
                function (e, t, l) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return (0, s.EQ)(e.type)
                        .with(o.Z.PROFILE_EFFECT, () =>
                            (0, a.jsx)(eo, {
                                isHighlighted: t,
                                skuId: e.skuId,
                                isPurchased: l && !i,
                            }),
                        )
                        .with(o.Z.AVATAR_DECORATION, () =>
                            (0, a.jsx)(ec, {
                                item: e,
                                user: n,
                                isHighlighted: t,
                                isPurchased: l,
                            }),
                        )
                        .with(o.Z.NAMEPLATE, () =>
                            (0, a.jsx)(ed, {
                                user: n,
                                nameplate: e,
                                isHighlighted: t,
                                isPurchased: l,
                            }),
                        )
                        .otherwise(() => null);
                },
                [n],
            ),
            eh = l.useRef(null),
            { displayPrices: ex, isOrbExclusive: eg } = (0, et.oo)({
                product: t,
                isPremiumUser: K,
                prioritizedCurrency: c === ea.AW.ORBS ? F.tA.ORBS : void 0,
            }),
            ef = l.useCallback(
                (e) => (n) => {
                    let a = (0, et.oQ)({ product: t });
                    (eh.current = n.currentTarget),
                        E.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == Z ? void 0 : Z.sessionId,
                            sku_id: t.skuId,
                            page_type: c,
                            page_section: null == Z ? void 0 : Z.pageSection,
                            page_category: c === ea.AW.HOME ? void 0 : i.name,
                            page_index: c === ea.AW.CATALOG ? (null == Z ? void 0 : Z.pageIndex) : void 0,
                            page_size: c === ea.AW.CATALOG ? (null == Z ? void 0 : Z.pageSize) : void 0,
                            tile_type: o.Z[t.type],
                            tile_position: String(null == Z ? void 0 : Z.tilePosition),
                            cta_name: null,
                        }),
                        (0, B.T)({
                            product: t,
                            category: i,
                            shouldCheckoutWithOrbs: a,
                            analyticsLocations: k,
                            analyticsSource: e,
                            returnRef: eh,
                            tab: c,
                        });
                },
                [t, i, c, k, Z],
            ),
            eb = ef(x.Z.COLLECTIBLES_SHOP_CARD);
        if (0 === ex.length || ((0, w.x6)(t) && null != q && q.discountPercentage < 0)) return null;
        let ev = r()(es.badge, { [es.badgeLeftAligned]: D });
        return (0, a.jsx)(p.tEY, {
            children: (0, a.jsxs)(p.kL8, {
                className: r()(P, J ? es.shopCardDark : es.shopCard, {
                    [es.partiallyOwned]: Q && !M,
                    [es.shopCardAnimation]: !V,
                    [J ? es.shopCardDarkHighlighted : es.shopCardHighlighted]: M,
                }),
                ref: u,
                onClick: eb,
                "aria-label": t.name,
                children: [
                    Y &&
                        (0, a.jsx)(m.u, {
                            text: er.intl.string(er.t.nKdAlO),
                            children: (0, a.jsx)(p.IGR, {
                                className: r()(es.premiumWheelBadge, { [es.badgeLeftAligned]: D }),
                                text: (0, a.jsx)(p.SrA, {
                                    size: "md",
                                    color: "currentColor",
                                    className: es.premiumWheel,
                                }),
                            }),
                        }),
                    !I &&
                        (0, a.jsx)(L.Z, {
                            category: i,
                            className: r()(es.limitedTimeBadge, { [es.badgeLeftAligned]: D }),
                        }),
                    D &&
                        (0, a.jsx)(H.a, {
                            product: t,
                            selectedVariantIndex: j,
                            className: es.wishlistButton,
                            isCardHovered: M,
                        }),
                    !Q && !X && (0, w.Yq)(t.skuId)
                        ? (0, a.jsx)(p.IGR, {
                              text: er.intl.string(er.t.y2b7CA),
                              disableColor: !0,
                              className: ev,
                          })
                        : eg
                          ? (0, a.jsx)(p.IGR, {
                                text: er.intl.string(er.t["0TmQRG"]),
                                disableColor: !0,
                                className: ev,
                            })
                          : null,
                    (0, a.jsx)("div", {
                        className: es.preview,
                        children: (0, s.EQ)(t.type)
                            .with(o.Z.PROFILE_EFFECT, o.Z.AVATAR_DECORATION, o.Z.NAMEPLATE, () => em(v, M, X))
                            .with(o.Z.BUNDLE, () =>
                                (0, a.jsx)(W.d, {
                                    product: t,
                                    user: n,
                                    isPurchased: X,
                                    isHighlighted: M,
                                }),
                            )
                            .with(o.Z.VARIANTS_GROUP, () => {
                                if (null == t.variants || 0 === t.variants.length) return null;
                                let e = t.variants[en];
                                if (null == e) return null;
                                let [n] = e.items;
                                return em(n, M, X, ei);
                            })
                            .with(o.Z.EXTERNAL_SKU, () =>
                                (0, a.jsx)(G.b, {
                                    product: t,
                                    animationState: M ? "on" : "off",
                                    className: $ || (X && !M) ? es.externalProductDimmed : void 0,
                                }),
                            )
                            .otherwise(() => null),
                    }),
                    (() => {
                        let e = X ? p.sV5 : $ ? p.mBM : null;
                        return null == e
                            ? null
                            : (0, a.jsx)("div", {
                                  className: es.cardStateIconWrapper,
                                  children: (0, a.jsx)(e, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 38,
                                      height: 38,
                                      className: r()(es.cardStateIcon, { [es.checkmark]: X }),
                                  }),
                              });
                    })(),
                    (0, a.jsxs)("div", {
                        className: r()(es.cardText, J ? es.darkCardBackground : es.lightCardBackground, {
                            [es.variantsGroup]: t.type === o.Z.VARIANTS_GROUP,
                        }),
                        children: [
                            (0, a.jsx)(p.Heading, {
                                variant: "text-lg/bold",
                                className: es.productName,
                                children: U,
                            }),
                            t.type === o.Z.VARIANTS_GROUP
                                ? (0, a.jsx)(z.P, {
                                      variantGroupProduct: t,
                                      previewingVariantIndexProps: {
                                          previewingVariantIndex: T,
                                          handleEntering: C,
                                          handleLeaving: S,
                                      },
                                      selectedVariantIndex: j,
                                      setIsHoveringOnSwitch: eu,
                                      minimal: !M,
                                      alternativeBackgroundColor: (null == v ? void 0 : v.type) === o.Z.PROFILE_EFFECT,
                                  })
                                : null,
                            (0, a.jsx)(ep, {
                                product: t,
                                tab: c,
                                buildHandlePreviewClick: ef,
                                selectedProduct: b,
                                selectedVariantIndex: j,
                                cardRef: u,
                                analyticsLocations: k,
                                isPremiumUser: K,
                                isPremiumProduct: Y,
                                isPartiallyOwnedBundle: Q,
                                isPurchased: X,
                                isDisabled: $,
                                discount: q,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    ex = em;
