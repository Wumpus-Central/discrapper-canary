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
    g = i(481060),
    h = i(607070),
    m = i(100527),
    v = i(906732),
    x = i(104505),
    C = i(333867),
    _ = i(767714),
    f = i(876917),
    y = i(567400),
    O = i(210887),
    P = i(960919),
    I = i(275388),
    b = i(626135),
    A = i(74538),
    S = i(335131),
    E = i(381585),
    j = i(1870),
    T = i(429368),
    L = i(884697),
    k = i(635552),
    N = i(290175),
    w = i(724994),
    R = i(297651),
    Z = i(390698),
    B = i(813083),
    H = i(680942),
    W = i(409116),
    M = i(237031),
    G = i(786040),
    U = i(508925),
    D = i(453713),
    V = i(325834),
    F = i(143941),
    z = i(616066),
    K = i(216541),
    q = i(22267),
    Y = i(67409),
    Q = i(58201),
    J = i(445794),
    X = i(694364),
    $ = i(201964),
    ee = i(361110),
    et = i(29121),
    ei = i(956472),
    el = i(832149),
    en = i(642909),
    er = i(215023),
    ea = i(981631),
    es = i(474936),
    eo = i(388032),
    ed = i(300179);
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
let ec = (e) => {
        let { skuId: t, isHighlighted: i, isPurchased: n } = e;
        return (0, l.jsx)("div", {
            className: ed.profileEffectShopPreview,
            children: (0, l.jsx)(f.Z, {
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
            className: ed.avatarContainer,
            children: (0, l.jsx)(z.R, {
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
            className: a()(ed.nameplatePreviewSampleItem, ed.placeholderItem),
            style: { opacity: n },
            children: [
                (0, l.jsx)(g.qEK, {
                    src: null,
                    size: g.EFr.SIZE_32,
                    status: t ? ea.Skl.ONLINE : void 0,
                    statusColor: "var(--border-subtle)",
                    "aria-hidden": !0,
                    imageClassName: ed.nameplatePlaceholderAvatar,
                }),
                (0, l.jsx)("div", {
                    className: ed.placeholderBar,
                    style: { maxWidth: null != i ? i : "100px" },
                }),
            ],
        });
    },
    eh = (e) => {
        let { user: t, nameplate: i, isHighlighted: n, isPurchased: r } = e;
        return (0, l.jsx)("div", {
            className: ed.nameplatePreviewRootContainer,
            children: (0, l.jsxs)("div", {
                className: ed.nameplatePreviewList,
                children: [
                    (0, l.jsxs)("div", {
                        className: ed.fadeIn,
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
                    (0, l.jsx)(q.Z, {
                        user: t,
                        nameplate: i,
                        className: ed.nameplatePreviewSampleItem,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        showStatus: !0,
                        isPurchased: r,
                    }),
                    (0, l.jsxs)("div", {
                        className: ed.fadeOut,
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
            { handleCardVisibilityChange: a } = (0, R.E)(i.skuId, t === er.AW.CATALOG ? "full" : t);
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
        let o = (0, c.e7)([j.Z], () => j.Z.purchases),
            d = (0, T.o)(i, o),
            u = (0, Q.W)(i, d),
            p = n.useRef(null),
            { previewingVariantIndex: g, handleEntering: h, handleLeaving: m } = (0, ee.f)(i),
            v = (0, $.o)(i, o, g);
        return (
            n.useEffect(() => {
                null == r || r(p, i);
            }, [r, i]),
            (0, l.jsx)(em, {
                tab: t,
                selectedProduct: u,
                cardRef: p,
                children: (0, l.jsx)(
                    eC,
                    eu(
                        {
                            tab: t,
                            product: i,
                            selectedVariantIndex: d,
                            selectedProduct: u,
                            cardRef: p,
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
            isPremiumProduct: h,
            isPurchased: v,
            isPartiallyOwnedBundle: x,
            isDisabled: f,
            discount: y,
        } = e,
        O = (0, E.sp)(),
        A = (0, L.rN)(t),
        [T, N] = (0, c.Wu)([j.Z], () => [
            j.Z.isClaiming === t.skuId,
            null != j.Z.isClaiming && j.Z.isClaiming !== t.skuId,
        ]),
        w = (0, L.XM)(n, p, !1),
        R = (0, L.ne)({
            product: n,
            isPartiallyOwnedBundle: x,
            isPurchased: v,
        }),
        B = (0, X.J)(t, i === er.AW.ORBS ? G.tA.ORBS : void 0),
        { handleUseNow: M, isApplying: U } = (0, k.W)({ product: n }),
        D = d(m.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        V = (0, J.Iw)(t),
        F = null != V,
        {
            displayPrices: z,
            checkoutEligiblePrices: K,
            shouldCheckoutWithOrbs: q,
            hasSufficientOrbs: Q,
        } = (0, ei.Ip)({
            product: t,
            isPremiumUser: p,
            tab: i,
            hasDiscountOffer: F,
        });
    if (0 === z.length) return null;
    let $ = () =>
        (0, l.jsx)(g.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), D(e);
            },
            text: eo.intl.string(eo.t.FdGl5O),
            fullWidth: !0,
        });
    return (0, l.jsxs)("div", {
        className: ed.detailsWrapper,
        children: [
            (0, l.jsx)("div", {
                className: ed.innerBlur,
                children: f
                    ? (0, l.jsx)(g.Text, {
                          tag: "div",
                          variant: "heading-md/semibold",
                          color: "header-muted",
                          className: ed.priceTag,
                          children: eo.intl.string(eo.t.wu4gyc),
                      })
                    : v || x
                      ? (0, l.jsx)(Z.U, {
                            className: ed.priceTag,
                            isPartiallyPurchased: x,
                        })
                      : h
                        ? (0, l.jsx)(g.Text, {
                              variant: "text-md/semibold",
                              className: ed.priceTag,
                              children: eo.intl.string(eo.t.rt69oq),
                          })
                        : (0, l.jsx)("div", {
                              className: ed.priceLine,
                              children: z.map((e, t) =>
                                  (0, l.jsx)(
                                      W.F,
                                      {
                                          price: e,
                                          discount: y,
                                          discountOfferAmount: V,
                                          nitroIconType: p ? "default" : void 0,
                                          nitroIconSize: "md",
                                          className:
                                              e.currency !== ea.pKx.DISCORD_ORB || Q ? void 0 : ed.insufficientOrbs,
                                      },
                                      t,
                                  ),
                              ),
                          }),
            }),
            (0, l.jsx)("div", {
                className: ed.innerHover,
                children: (0, l.jsxs)(g.ButtonGroup, {
                    wrap: !1,
                    fullWidth: !0,
                    children: [
                        (() => {
                            if (h && !p && !A)
                                return (0, l.jsx)("div", {
                                    className: ed.hoverUpsellContainer,
                                    children: (0, l.jsx)(_.Z, {
                                        fullWidth: !0,
                                        className: ed.__invalid_premiumSubscribeButton,
                                        disabled: N,
                                        onClick: (e) => e.stopPropagation(),
                                        textOptions: { textOverride: eo.intl.string(eo.t.sEAnVF) },
                                        subscriptionTier: es.Si.TIER_2,
                                    }),
                                });
                            if (!R || f) return $();
                            if (v)
                                return (0, l.jsx)(g.Button, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(), M();
                                    },
                                    loading: U,
                                    text: eo.intl.string(eo.t.MAS7uL),
                                    fullWidth: !0,
                                });
                            {
                                if (h) {
                                    let e = async () => {
                                        b.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                            collectibles_shop_session_id: null == O ? void 0 : O.sessionId,
                                            sku_id: t.skuId,
                                            page_type: i,
                                            page_section: null == O ? void 0 : O.pageSection,
                                            page_category: i === er.AW.HOME || null == O ? void 0 : O.pageCategory,
                                            page_index:
                                                i === er.AW.CATALOG ? (null == O ? void 0 : O.pageIndex) : void 0,
                                            page_size: i === er.AW.CATALOG ? (null == O ? void 0 : O.pageSize) : void 0,
                                            tile_type: o.Z[t.type],
                                            tile_position: String(null == O ? void 0 : O.tilePosition),
                                            cta_name: "claim premium product button",
                                        }),
                                            await (0, S.fK)(t.skuId),
                                            (0, el.Z)({
                                                product: t,
                                                analyticsLocations: s,
                                                purchaseType: er.o8.PREMIUM_PURCHASE,
                                            });
                                    };
                                    return (0, l.jsx)(g.Button, {
                                        variant: "primary",
                                        onClick: (t) => {
                                            t.stopPropagation(), e();
                                        },
                                        disabled: N,
                                        loading: T,
                                        loadingStartedLabel: eo.intl.string(eo.t["TYw+9v"]),
                                        loadingFinishedLabel: eo.intl.string(eo.t.Pg1UPz),
                                        text: eo.intl.string(eo.t.zp6caG),
                                        fullWidth: !0,
                                    });
                                }
                                if (q)
                                    if (Q)
                                        return (0, l.jsx)(g.Button, {
                                            variant: "primary",
                                            text: eo.intl.format(eo.t.kAgx5O, {
                                                orbPrice: K[0].amount,
                                                orbIconHook: () => (0, l.jsx)(P.Z, { className: ed.orbIconAligned }),
                                            }),
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    b.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == O ? void 0 : O.sessionId,
                                                        sku_id: t.skuId,
                                                        page_type: i,
                                                        page_section: null == O ? void 0 : O.pageSection,
                                                        page_category:
                                                            i === er.AW.HOME || null == O ? void 0 : O.pageCategory,
                                                        page_index:
                                                            i === er.AW.CATALOG
                                                                ? null == O
                                                                    ? void 0
                                                                    : O.pageIndex
                                                                : void 0,
                                                        page_size:
                                                            i === er.AW.CATALOG
                                                                ? null == O
                                                                    ? void 0
                                                                    : O.pageSize
                                                                : void 0,
                                                        tile_type: o.Z[t.type],
                                                        tile_position: String(null == O ? void 0 : O.tilePosition),
                                                        cta_name: "claim with orbs button",
                                                    }),
                                                    (0, I.qA)({
                                                        skuId: (0, Y.S)({
                                                            product: t,
                                                            selectedVariantIndex: r,
                                                        }),
                                                        onCheckoutSuccess: (e) => {
                                                            var i;
                                                            let { entitlements: l } = e;
                                                            (0, S.qg)({ variantsReturnStyle: u.v.VARIANTS_GROUP }),
                                                                (0, el.Z)({
                                                                    product: t,
                                                                    analyticsLocations: s,
                                                                    itemConsumed:
                                                                        null == (i = l[0]) ? void 0 : i.consumed,
                                                                    purchaseType: er.o8.ORB,
                                                                });
                                                        },
                                                        analyticsLocations: s,
                                                    });
                                            },
                                            "aria-label": eo.intl.formatToPlainString(eo.t["fNG/09"], {
                                                orbPrice: K[0].amount,
                                            }),
                                            fullWidth: !0,
                                        });
                                    else return $();
                                if (i === er.AW.ORBS)
                                    return (0, l.jsx)(g.Button, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(), D(e);
                                        },
                                        text: eo.intl.string(eo.t.GpnHfH),
                                        fullWidth: !0,
                                    });
                                let e = F
                                    ? eo.intl.formatToPlainString(eo.t["5U5RBw"], { discountOfferAmount: V })
                                    : eo.intl.formatToPlainString(eo.t["cNSL/v"], { price: w });
                                return (0, l.jsx)(g.Button, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            b.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                collectibles_shop_session_id: null == O ? void 0 : O.sessionId,
                                                sku_id: t.skuId,
                                                page_type: i,
                                                page_section: null == O ? void 0 : O.pageSection,
                                                page_category: i === er.AW.HOME || null == O ? void 0 : O.pageCategory,
                                                page_index:
                                                    i === er.AW.CATALOG ? (null == O ? void 0 : O.pageIndex) : void 0,
                                                page_size:
                                                    i === er.AW.CATALOG ? (null == O ? void 0 : O.pageSize) : void 0,
                                                tile_type: o.Z[t.type],
                                                tile_position: String(null == O ? void 0 : O.tilePosition),
                                                cta_name: "buy button",
                                            }),
                                            (0, C.Z)({
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
                        B
                            ? (0, l.jsx)(E.k0, {
                                  newValue: { pageCategory: i === er.AW.HOME || null == O ? void 0 : O.pageCategory },
                                  children: (0, l.jsx)(H.Z, {
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
                selectedProduct: C,
                firstCollectibleItem: _,
                selectedVariantIndex: f,
                handleEntering: P,
                handleLeaving: I,
                previewingVariantIndex: S,
                className: j,
                shopBlockType: T,
            } = e,
            { analyticsLocations: k } = (0, v.ZP)([m.Z.COLLECTIBLES_SHOP_CARD]),
            R = (0, E.sp)(),
            Z = (0, en.G)("CollectiblesShopTallCard"),
            H = null != T && T === d.z.HERO && Z ? er.Ch.THUMBNAIL : er.Ch.DEFAULT,
            W = (0, y.Y)({ location: "CollectiblesShopTallCard" }),
            { isHoveringOrFocusing: G } = (0, x.Z)(p),
            z = (0, et.To)(t),
            q = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
            Y = A.ZP.canUseCollectibles(i),
            Q = n.useMemo(() => (0, L.BH)(t, Y), [t, Y]),
            J = (0, L.G1)(t),
            X = (0, c.e7)([O.Z], () => (0, g.wjy)(O.Z.theme)),
            $ = (0, L.Yq)(t.skuId),
            ee = r.skuId === er.bu && (0, L.WW)(t.skuId),
            { isPurchased: el, isPartiallyOwnedBundle: es } = (0, w.L)(C),
            { isDisabled: eg } = (0, N.G)(C.skuId),
            em = null !== S ? S : f,
            [ev, eC] = n.useState(!1),
            e_ = n.useCallback(
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
            ef = n.useRef(null),
            { displayPrices: ey, isOrbExclusive: eO } = (0, ei.oo)({
                product: t,
                isPremiumUser: Y,
                tab: u,
            }),
            eP = n.useCallback(
                (e) => (i) => {
                    let l = (0, ei.oQ)({ product: t });
                    (ef.current = i.currentTarget),
                        b.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == R ? void 0 : R.sessionId,
                            sku_id: t.skuId,
                            page_type: u,
                            page_section: null == R ? void 0 : R.pageSection,
                            page_category: u === er.AW.HOME ? void 0 : r.name,
                            page_index: u === er.AW.CATALOG ? (null == R ? void 0 : R.pageIndex) : void 0,
                            page_size: u === er.AW.CATALOG ? (null == R ? void 0 : R.pageSize) : void 0,
                            tile_type: o.Z[t.type],
                            tile_position: String(null == R ? void 0 : R.tilePosition),
                            cta_name: null,
                        }),
                        (0, M.T)({
                            product: t,
                            category: r,
                            shouldCheckoutWithOrbs: l,
                            analyticsLocations: k,
                            analyticsSource: e,
                            returnRef: ef,
                            tab: u,
                            variantType: H,
                        });
                },
                [t, r, u, k, R, H],
            ),
            eI = eP(m.Z.COLLECTIBLES_SHOP_CARD);
        if (0 === ey.length || ((0, L.x6)(t) && null != Q && Q.discountPercentage < 0)) return null;
        let eb = a()(ed.badge, { [ed.badgeLeftAligned]: W });
        return (0, l.jsx)(g.tEY, {
            children: (0, l.jsxs)(g.kL8, {
                className: a()(j, X ? ed.shopCardDark : ed.shopCard, {
                    [ed.partiallyOwned]: es && !G,
                    [ed.shopCardAnimation]: !q,
                    [X ? ed.shopCardDarkHighlighted : ed.shopCardHighlighted]: G,
                }),
                ref: p,
                onClick: eI,
                "aria-label": t.name,
                children: [
                    J &&
                        (0, l.jsx)(g.aML, {
                            "data-migration-pending": !0,
                            tooltipContentClassName: ed.premiumWheelTooltipContent,
                            color: g.aML.Colors.PRIMARY,
                            text: eo.intl.string(eo.t.nKdAlJ),
                            children: (e) => {
                                var t, i;
                                return (0, l.jsx)(
                                    g.IGR,
                                    ((t = eu({}, e)),
                                    (i = i =
                                        {
                                            className: a()(ed.premiumWheelBadge, { [ed.badgeLeftAligned]: W }),
                                            text: (0, l.jsx)(g.SrA, {
                                                size: "md",
                                                color: "currentColor",
                                                className: ed.premiumWheel,
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
                        category: r,
                        className: a()(ed.limitedTimeBadge, { [ed.badgeLeftAligned]: W }),
                        display: B.k.CARD,
                        shopBlockType: T,
                    }),
                    W &&
                        (0, l.jsx)(F.a, {
                            product: t,
                            selectedVariantIndex: f,
                            className: ed.wishlistButton,
                            isCardHovered: G,
                        }),
                    es || el || !$
                        ? eO
                            ? (0, l.jsx)(g.IGR, {
                                  text: eo.intl.string(eo.t["0TmQRE"]),
                                  disableColor: !0,
                                  className: eb,
                              })
                            : ee
                              ? (0, l.jsx)(g.IGR, {
                                    text: eo.intl.string(eo.t.S6kE9v),
                                    disableColor: !0,
                                    className: eb,
                                })
                              : null
                        : (0, l.jsx)(g.IGR, {
                              text: eo.intl.string(eo.t.y2b7CA),
                              disableColor: !0,
                              className: eb,
                          }),
                    (0, l.jsx)("div", {
                        className: a()(ed.preview, { [ed.previewThumbnailVariant]: H === er.Ch.THUMBNAIL }),
                        children: (0, s.EQ)(t.type)
                            .with(o.Z.PROFILE_EFFECT, o.Z.AVATAR_DECORATION, o.Z.NAMEPLATE, () => e_(_, G, el))
                            .with(o.Z.BUNDLE, () =>
                                (0, l.jsx)(K.d, {
                                    product: t,
                                    user: i,
                                    isPurchased: el,
                                    isHighlighted: G,
                                }),
                            )
                            .with(o.Z.VARIANTS_GROUP, () => {
                                if (null == t.variants || 0 === t.variants.length) return null;
                                let e = t.variants[em];
                                if (null == e) return null;
                                let [i] = e.items;
                                return e_(i, G, el, ev);
                            })
                            .with(o.Z.EXTERNAL_SKU, () =>
                                (0, l.jsx)(U.b, {
                                    product: t,
                                    animationState: G ? "on" : "off",
                                    className: eg || (el && !G) ? ed.externalProductDimmed : void 0,
                                }),
                            )
                            .otherwise(() => null),
                    }),
                    (() => {
                        let e = el ? g.sV5 : eg ? g.mBM : null;
                        return null == e
                            ? null
                            : (0, l.jsx)("div", {
                                  className: ed.cardStateIconWrapper,
                                  children: (0, l.jsx)(e, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 38,
                                      height: 38,
                                      className: a()(ed.cardStateIcon, { [ed.checkmark]: el }),
                                  }),
                              });
                    })(),
                    (0, l.jsxs)("div", {
                        className: a()(ed.cardText, X ? ed.darkCardBackground : ed.lightCardBackground, {
                            [ed.variantsGroup]: t.type === o.Z.VARIANTS_GROUP,
                            [ed.thumbnailVariant]: t.type === o.Z.VARIANTS_GROUP && H === er.Ch.THUMBNAIL,
                        }),
                        children: [
                            (0, l.jsx)(g.Heading, {
                                variant: "text-lg/bold",
                                className: ed.productName,
                                children: z,
                            }),
                            t.type === o.Z.VARIANTS_GROUP
                                ? H === er.Ch.DEFAULT
                                    ? (0, l.jsx)(D.P, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: {
                                              previewingVariantIndex: S,
                                              handleEntering: P,
                                              handleLeaving: I,
                                          },
                                          selectedVariantIndex: f,
                                          setIsHoveringOnSwitch: eC,
                                          minimal: !G,
                                          alternativeBackgroundColor:
                                              (null == _ ? void 0 : _.type) === o.Z.PROFILE_EFFECT,
                                      })
                                    : (0, l.jsx)(V.r, {
                                          variantGroupProduct: t,
                                          previewingVariantIndexProps: {
                                              previewingVariantIndex: S,
                                              handleEntering: P,
                                              handleLeaving: I,
                                          },
                                          selectedVariantIndex: f,
                                          setIsHoveringOnSwitch: eC,
                                      })
                                : null,
                            (0, l.jsx)(ex, {
                                product: t,
                                tab: u,
                                buildHandlePreviewClick: eP,
                                selectedProduct: C,
                                selectedVariantIndex: f,
                                cardRef: p,
                                analyticsLocations: k,
                                isPremiumUser: Y,
                                isPremiumProduct: J,
                                isPartiallyOwnedBundle: es,
                                isPurchased: el,
                                isDisabled: eg,
                                discount: Q,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    e_ = ev;
