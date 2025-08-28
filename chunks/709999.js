n.d(t, {
    Z: () => eT,
    d: () => eE,
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
    d = n(311570),
    f = n(399606),
    _ = n(622535),
    p = n(481060),
    h = n(727637),
    m = n(607070),
    g = n(100527),
    E = n(906732),
    b = n(333867),
    y = n(767714),
    O = n(876917),
    v = n(210887),
    I = n(822857),
    T = n(960919),
    S = n(275388),
    A = n(626135),
    C = n(74538),
    N = n(335131),
    R = n(381585),
    P = n(1870),
    w = n(429368),
    D = n(884697),
    x = n(635552),
    L = n(290175),
    j = n(724994),
    M = n(297651),
    k = n(390698),
    U = n(813083),
    G = n(680942),
    B = n(558060),
    Z = n(237031),
    F = n(508925),
    V = n(306092),
    H = n(453713),
    Y = n(325834),
    W = n(616066),
    K = n(216541),
    z = n(22267),
    q = n(67409),
    X = n(58201),
    Q = n(445794),
    J = n(466679),
    $ = n(201964),
    ee = n(361110),
    et = n(29121),
    en = n(956472),
    er = n(832149),
    ei = n(215023),
    ea = n(981631),
    eo = n(474936),
    es = n(388032),
    el = n(300179);
function ec(e, t, n) {
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
function eu(e) {
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
                ec(e, t, n[t]);
            });
    }
    return e;
}
function ed(e, t) {
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
function ef(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ed(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function e_(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ep(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ep(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let eh = 250,
    em = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: i } = e;
        return (0, r.jsx)("div", {
            className: el.profileEffectShopPreview,
            children: (0, r.jsx)(O.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: i && !n,
                removeSetHeight: !0,
            }),
        });
    },
    eg = (e) => {
        let { isHighlighted: t, isPurchased: n, user: i, item: a } = e;
        return (0, r.jsx)("div", {
            className: el.avatarContainer,
            children: (0, r.jsx)(W.R, {
                item: a,
                user: i,
                isPurchased: n,
                isHighlighted: t,
            }),
        });
    },
    eE = (e) => {
        let { showStatus: t, width: n, opacity: i } = e,
            a = "var(--border-subtle)";
        return (0, r.jsxs)("div", {
            className: o()(el.nameplatePreviewSampleItem, el.placeholderItem),
            style: { opacity: i },
            children: [
                (0, r.jsx)(p.qEK, {
                    src: null,
                    size: p.EFr.SIZE_32,
                    status: t ? ea.Skl.ONLINE : void 0,
                    statusColor: a,
                    "aria-hidden": !0,
                    imageClassName: el.nameplatePlaceholderAvatar,
                }),
                (0, r.jsx)("div", {
                    className: el.placeholderBar,
                    style: { maxWidth: null != n ? n : "100px" },
                }),
            ],
        });
    },
    eb = (e) => {
        let { user: t, nameplate: n, isHighlighted: i, isPurchased: a } = e;
        return (0, r.jsx)("div", {
            className: el.nameplatePreviewRootContainer,
            children: (0, r.jsxs)("div", {
                className: el.nameplatePreviewList,
                children: [
                    (0, r.jsxs)("div", {
                        className: el.fadeIn,
                        children: [
                            (0, r.jsx)(eE, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7,
                            }),
                            (0, r.jsx)(eE, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                        ],
                    }),
                    (0, r.jsx)(z.Z, {
                        user: t,
                        nameplate: n,
                        className: el.nameplatePreviewSampleItem,
                        isHighlighted: i,
                        showPlaceholderUser: !i,
                        showStatus: !0,
                        isPurchased: a,
                    }),
                    (0, r.jsxs)("div", {
                        className: el.fadeOut,
                        children: [
                            (0, r.jsx)(eE, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                            (0, r.jsx)(eE, {
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
        let { tab: t, selectedProduct: n, cardRef: i, children: a } = e,
            { handleCardVisibilityChange: o } = (0, M.E)(n.skuId, t === ei.AW.CATALOG ? "full" : t);
        return (0, r.jsx)(_.$, {
            innerRef: i,
            onChange: o,
            threshold: 0,
            children: a,
        });
    },
    eO = i.memo(function (e) {
        var { tab: t, product: n, onMount: a, variantType: o = ei.Ch.DEFAULT } = e,
            s = e_(e, ["tab", "product", "onMount", "variantType"]);
        let l = (0, f.e7)([P.Z], () => P.Z.purchases),
            c = (0, w.o)(n, l),
            u = (0, X.W)(n, c),
            d = i.useRef(null),
            { previewingVariantIndex: _, handleEntering: p, handleLeaving: h } = (0, ee.f)(n),
            m = (0, $.o)(n, l, _);
        return (
            i.useEffect(() => {
                null == a || a(d, n);
            }, [a, n]),
            (0, r.jsx)(ey, {
                tab: t,
                selectedProduct: u,
                cardRef: d,
                children: (0, r.jsx)(
                    eI,
                    eu(
                        {
                            tab: t,
                            product: n,
                            selectedVariantIndex: c,
                            selectedProduct: u,
                            cardRef: d,
                            previewingVariantIndex: _,
                            handleEntering: p,
                            handleLeaving: h,
                            firstCollectibleItem: m,
                            variantType: o,
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
            tab: n,
            selectedProduct: i,
            selectedVariantIndex: a,
            cardRef: o,
            analyticsLocations: s,
            buildHandlePreviewClick: c,
            isPremiumUser: _,
            isPremiumProduct: h,
            isPurchased: m,
            isPartiallyOwnedBundle: E,
            isDisabled: O,
            discount: v,
        } = e,
        C = (0, R.sp)(),
        w = (0, D.rN)(t),
        [L, j] = (0, f.Wu)([P.Z], () => [
            P.Z.isClaiming === t.skuId,
            null != P.Z.isClaiming && P.Z.isClaiming !== t.skuId,
        ]),
        M = (0, D.XM)(i, _, !1),
        U = (0, D.ne)({
            product: i,
            isPartiallyOwnedBundle: E,
            isPurchased: m,
        }),
        { enabled: Z } = (0, I.WX)({ location: "collectibles_shop_tall_card" }),
        { handleUseNow: F, isApplying: H } = (0, x.W)({ product: i }),
        Y = c(g.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        W = (0, Q.Iw)(t),
        K = null != W,
        {
            displayPrices: z,
            checkoutEligiblePrices: X,
            isOrbExclusive: J,
            shouldCheckoutWithOrbs: $,
            hasSufficientOrbs: ee,
        } = (0, en.Ip)({
            product: t,
            isPremiumUser: _,
            tab: n,
            hasDiscountOffer: K,
        });
    if (0 === z.length) return null;
    let et = () =>
            (0, r.jsx)("div", {
                className: el.hoverUpsellContainer,
                children: (0, r.jsx)(y.Z, {
                    fullWidth: !0,
                    className: el.__invalid_premiumSubscribeButton,
                    disabled: j,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: es.intl.string(es.t.sEAnVF) },
                    subscriptionTier: eo.Si.TIER_2,
                }),
            }),
        ec = () =>
            O
                ? (0, r.jsx)(p.Text, {
                      tag: "div",
                      variant: "heading-md/semibold",
                      color: "header-muted",
                      className: el.priceTag,
                      children: es.intl.string(es.t.wu4gyc),
                  })
                : m || E
                  ? (0, r.jsx)(k.U, {
                        className: el.priceTag,
                        isPartiallyPurchased: E,
                    })
                  : h
                    ? (0, r.jsx)(p.Text, {
                          variant: "text-md/semibold",
                          className: el.priceTag,
                          children: es.intl.string(es.t.rt69oq),
                      })
                    : Z
                      ? (0, r.jsx)(V.e, {
                            displayPrices: z,
                            isPremiumUser: _,
                            discount: v,
                            hasSufficientOrbs: ee,
                            discountOfferAmount: W,
                        })
                      : (0, r.jsx)(B.Z, {
                            product: i,
                            discount: v,
                            isPremiumUser: _,
                            className: el.priceTag,
                            hideStrikethroughPrice: !0,
                            nitroIconType: "default",
                            nitroIconSize: "md",
                            discountOfferAmount: W,
                        }),
        eu = () =>
            h || l.tq || J || !U || n === ei.AW.ORBS
                ? null
                : w
                  ? (0, r.jsx)(p.hU, {
                        variant: "primary",
                        "aria-label": es.intl.string(es.t.SKNnqq),
                        icon: p.tEF,
                        onClick: (e) => {
                            e.stopPropagation(), Y(e);
                        },
                    })
                  : (0, r.jsx)(R.k0, {
                        newValue: { pageCategory: n === ei.AW.HOME || null == C ? void 0 : C.pageCategory },
                        children: (0, r.jsx)(G.Z, {
                            primary: !0,
                            product: t,
                            selectedVariantIndex: a,
                            returnRef: o,
                            tooltipDelay: eh,
                        }),
                    }),
        ed = () =>
            (0, r.jsx)(p.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), Y(e);
                },
                text: es.intl.string(es.t.FdGl5O),
                fullWidth: !0,
            }),
        ef = () => {
            let e = () => {
                    A.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == C ? void 0 : C.sessionId,
                        sku_id: t.skuId,
                        page_type: n,
                        page_section: null == C ? void 0 : C.pageSection,
                        page_category: n === ei.AW.HOME || null == C ? void 0 : C.pageCategory,
                        page_index: n === ei.AW.CATALOG ? (null == C ? void 0 : C.pageIndex) : void 0,
                        page_size: n === ei.AW.CATALOG ? (null == C ? void 0 : C.pageSize) : void 0,
                        tile_type: u.Z[t.type],
                        tile_position: String(null == C ? void 0 : C.tilePosition),
                        cta_name: "buy button",
                    }),
                        (0, b.Z)({
                            skuId: (0, q.S)({
                                product: t,
                                selectedVariantIndex: a,
                            }),
                            analyticsLocations: s,
                            returnRef: o,
                            variantsReturnStyle: d.v.VARIANTS_GROUP,
                        });
                },
                i = K
                    ? es.intl.formatToPlainString(es.t["5U5RBw"], { discountOfferAmount: W })
                    : es.intl.formatToPlainString(es.t["cNSL/v"], { price: M });
            return (0, r.jsx)(p.zxk, {
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
                A.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == C ? void 0 : C.sessionId,
                    sku_id: t.skuId,
                    page_type: n,
                    page_section: null == C ? void 0 : C.pageSection,
                    page_category: n === ei.AW.HOME || null == C ? void 0 : C.pageCategory,
                    page_index: n === ei.AW.CATALOG ? (null == C ? void 0 : C.pageIndex) : void 0,
                    page_size: n === ei.AW.CATALOG ? (null == C ? void 0 : C.pageSize) : void 0,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == C ? void 0 : C.tilePosition),
                    cta_name: "claim with orbs button",
                }),
                    (0, S.qA)({
                        skuId: (0, q.S)({
                            product: t,
                            selectedVariantIndex: a,
                        }),
                        onCheckoutSuccess: (e) => {
                            var n;
                            let { entitlements: r } = e;
                            (0, N.qg)({ variantsReturnStyle: d.v.VARIANTS_GROUP }),
                                (0, er.Z)({
                                    product: t,
                                    analyticsLocations: s,
                                    itemConsumed: null == (n = r[0]) ? void 0 : n.consumed,
                                    purchaseType: ei.o8.ORB,
                                });
                        },
                        analyticsLocations: s,
                    });
            };
            return (0, r.jsx)(p.zxk, {
                variant: "primary",
                text: es.intl.format(es.t.kAgx5O, {
                    orbPrice: X[0].amount,
                    orbIconHook: () => (0, r.jsx)(T.Z, { className: el.orbIconAligned }),
                }),
                onClick: (t) => {
                    t.stopPropagation(), e();
                },
                "aria-label": es.intl.formatToPlainString(es.t["fNG/09"], { orbPrice: X[0].amount }),
                fullWidth: !0,
            });
        },
        ep = () => {
            let e = async () => {
                A.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == C ? void 0 : C.sessionId,
                    sku_id: t.skuId,
                    page_type: n,
                    page_section: null == C ? void 0 : C.pageSection,
                    page_category: n === ei.AW.HOME || null == C ? void 0 : C.pageCategory,
                    page_index: n === ei.AW.CATALOG ? (null == C ? void 0 : C.pageIndex) : void 0,
                    page_size: n === ei.AW.CATALOG ? (null == C ? void 0 : C.pageSize) : void 0,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == C ? void 0 : C.tilePosition),
                    cta_name: "claim premium product button",
                }),
                    await (0, N.fK)(t.skuId),
                    (0, er.Z)({
                        product: t,
                        analyticsLocations: s,
                        purchaseType: ei.o8.PREMIUM_PURCHASE,
                    });
            };
            return (0, r.jsx)(p.zxk, {
                variant: "primary",
                onClick: (t) => {
                    t.stopPropagation(), e();
                },
                disabled: j,
                loading: L,
                loadingStartedLabel: es.intl.string(es.t["TYw+9v"]),
                loadingFinishedLabel: es.intl.string(es.t.Pg1UPz),
                text: es.intl.string(es.t.zp6caG),
                fullWidth: !0,
            });
        },
        em = () =>
            (0, r.jsx)(p.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), F();
                },
                loading: H,
                text: es.intl.string(es.t.MAS7uL),
                fullWidth: !0,
            }),
        eg = () =>
            (0, r.jsx)(p.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), Y(e);
                },
                text: es.intl.string(es.t.GpnHfH),
                fullWidth: !0,
            }),
        eE = () => {
            if (h && !_ && !w) return et();
            if (!U || O) return ed();
            if (m) return em();
            if (h) return ep();
            if ($)
                if (ee) return e_();
                else return ed();
            return n === ei.AW.ORBS ? eg() : ef();
        };
    return (0, r.jsxs)("div", {
        className: el.detailsWrapper,
        children: [
            (0, r.jsx)("div", {
                className: el.innerBlur,
                children: ec(),
            }),
            (0, r.jsx)("div", {
                className: el.innerHover,
                children: (0, r.jsxs)(p.hE2, {
                    wrap: !1,
                    fullWidth: !0,
                    children: [eE(), eu()],
                }),
            }),
        ],
    });
}
let eI = i.memo(function (e) {
        let {
                product: t,
                user: n,
                category: a,
                tab: l,
                cardRef: d,
                selectedProduct: _,
                firstCollectibleItem: b,
                selectedVariantIndex: y,
                handleEntering: O,
                handleLeaving: I,
                previewingVariantIndex: T,
                className: S,
                variantType: N = ei.Ch.DEFAULT,
            } = e,
            { analyticsLocations: P } = (0, E.ZP)([g.Z.COLLECTIBLES_SHOP_CARD]),
            w = (0, R.sp)(),
            x = (0, h.Z)(d),
            M = (0, J.m)(d),
            k = x || M,
            G = (0, et.To)(t),
            B = (0, f.e7)([m.Z], () => m.Z.useReducedMotion),
            V = C.ZP.canUseCollectibles(n),
            W = i.useMemo(() => (0, D.BH)(t, V), [t, V]),
            z = (0, D.G1)(t),
            q = (0, f.e7)([v.Z], () => (0, p.wjy)(v.Z.theme)),
            X = (0, D.Yq)(t.skuId),
            Q = a.skuId === c.T.ANIME_V3 && (0, D.WW)(t.skuId),
            { isPurchased: $, isPartiallyOwnedBundle: ee } = (0, j.L)(_),
            { isDisabled: er } = (0, L.G)(_.skuId),
            eo = null !== T ? T : y,
            [ec, ed] = i.useState(!1),
            e_ = k,
            ep = i.useCallback(
                function (e, t, i) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return (0, s.EQ)(e.type)
                        .with(u.Z.PROFILE_EFFECT, () =>
                            (0, r.jsx)(em, {
                                isHighlighted: t,
                                profileEffectId: e.id,
                                isPurchased: i && !a,
                            }),
                        )
                        .with(u.Z.AVATAR_DECORATION, () =>
                            (0, r.jsx)(eg, {
                                item: e,
                                user: n,
                                isHighlighted: t,
                                isPurchased: i,
                            }),
                        )
                        .with(u.Z.NAMEPLATE, () =>
                            (0, r.jsx)(eb, {
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
            eh = i.useRef(null),
            { displayPrices: eE, isOrbExclusive: ey } = (0, en.oo)({
                product: t,
                isPremiumUser: V,
                tab: l,
            }),
            eO = i.useCallback(
                (e) => (n) => {
                    let r = (0, en.oQ)({ product: t });
                    (eh.current = n.currentTarget),
                        A.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == w ? void 0 : w.sessionId,
                            sku_id: t.skuId,
                            page_type: l,
                            page_section: null == w ? void 0 : w.pageSection,
                            page_category: l === ei.AW.HOME ? void 0 : a.name,
                            page_index: l === ei.AW.CATALOG ? (null == w ? void 0 : w.pageIndex) : void 0,
                            page_size: l === ei.AW.CATALOG ? (null == w ? void 0 : w.pageSize) : void 0,
                            tile_type: u.Z[t.type],
                            tile_position: String(null == w ? void 0 : w.tilePosition),
                            cta_name: null,
                        }),
                        (0, Z.T)({
                            product: t,
                            category: a,
                            shouldCheckoutWithOrbs: r,
                            analyticsLocations: P,
                            analyticsSource: e,
                            returnRef: eh,
                            tab: l,
                        });
                },
                [t, a, l, P, w],
            ),
            eI = eO(g.Z.COLLECTIBLES_SHOP_CARD);
        if (0 === eE.length) return null;
        let eT = () => {
                let e = $ ? p.sV5 : er ? p.mBM : null;
                return null == e
                    ? null
                    : (0, r.jsx)("div", {
                          className: el.cardStateIconWrapper,
                          children: (0, r.jsx)(e, {
                              size: "custom",
                              color: "currentColor",
                              width: 38,
                              height: 38,
                              className: o()(el.cardStateIcon, { [el.checkmark]: $ }),
                          }),
                      });
            },
            eS = (e) =>
                (0, r.jsxs)("div", {
                    className: o()(el.cardText, q ? el.darkCardBackground : el.lightCardBackground, {
                        [el.variantsGroup]: t.type === u.Z.VARIANTS_GROUP,
                        [el.thumbnailVariant]: t.type === u.Z.VARIANTS_GROUP && e === ei.Ch.THUMBNAIL,
                    }),
                    children: [
                        (0, r.jsx)(p.X6q, {
                            variant: "text-lg/bold",
                            className: el.productName,
                            children: G,
                        }),
                        t.type === u.Z.VARIANTS_GROUP
                            ? e === ei.Ch.DEFAULT
                                ? (0, r.jsx)(H.P, {
                                      variantGroupProduct: t,
                                      previewingVariantIndexProps: {
                                          previewingVariantIndex: T,
                                          handleEntering: O,
                                          handleLeaving: I,
                                      },
                                      selectedVariantIndex: y,
                                      setIsHoveringOnSwitch: ed,
                                      minimal: !k,
                                      alternativeBackgroundColor: (null == b ? void 0 : b.type) === u.Z.PROFILE_EFFECT,
                                  })
                                : (0, r.jsx)(Y.r, {
                                      variantGroupProduct: t,
                                      previewingVariantIndexProps: {
                                          previewingVariantIndex: T,
                                          handleEntering: O,
                                          handleLeaving: I,
                                      },
                                      selectedVariantIndex: y,
                                      setIsHoveringOnSwitch: ed,
                                  })
                            : null,
                        (0, r.jsx)(ev, {
                            product: t,
                            tab: l,
                            buildHandlePreviewClick: eO,
                            selectedProduct: _,
                            selectedVariantIndex: y,
                            cardRef: d,
                            analyticsLocations: P,
                            isPremiumUser: V,
                            isPremiumProduct: z,
                            isPartiallyOwnedBundle: ee,
                            isPurchased: $,
                            isDisabled: er,
                            discount: W,
                        }),
                    ],
                });
        return (0, D.x6)(t) && null != W && W.discountPercentage < 0
            ? null
            : (0, r.jsx)(p.tEY, {
                  children: (0, r.jsxs)(p.kL8, {
                      className: o()(S, q ? el.shopCardDark : el.shopCard, {
                          [el.partiallyOwned]: ee && !k,
                          [el.shopCardAnimation]: !B,
                          [q ? el.shopCardDarkHighlighted : el.shopCardHighlighted]: k,
                      }),
                      ref: d,
                      onClick: eI,
                      "aria-label": t.name,
                      children: [
                          z &&
                              (0, r.jsx)(p.ua7, {
                                  tooltipContentClassName: el.premiumWheelTooltipContent,
                                  color: p.ua7.Colors.PRIMARY,
                                  text: es.intl.string(es.t.nKdAlJ),
                                  children: (e) =>
                                      (0, r.jsx)(
                                          p.IGR,
                                          ef(eu({}, e), {
                                              className: el.premiumWheelBadge,
                                              text: (0, r.jsx)(p.SrA, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: el.premiumWheel,
                                              }),
                                          }),
                                      ),
                              }),
                          (0, r.jsx)(U.Z, {
                              category: a,
                              className: el.limitedTimeBadge,
                              display: U.k.CARD,
                          }),
                          ee || $ || !X
                              ? ey
                                  ? (0, r.jsx)(p.IGR, {
                                        text: es.intl.string(es.t["0TmQRE"]),
                                        disableColor: !0,
                                        className: el.badge,
                                    })
                                  : Q
                                    ? (0, r.jsx)(p.IGR, {
                                          text: es.intl.string(es.t.S6kE9v),
                                          disableColor: !0,
                                          className: el.badge,
                                      })
                                    : null
                              : (0, r.jsx)(p.IGR, {
                                    text: es.intl.string(es.t.y2b7CA),
                                    disableColor: !0,
                                    className: el.badge,
                                }),
                          (0, r.jsx)("div", {
                              className: el.preview,
                              children: (0, s.EQ)(t.type)
                                  .with(u.Z.PROFILE_EFFECT, u.Z.AVATAR_DECORATION, u.Z.NAMEPLATE, () => ep(b, e_, $))
                                  .with(u.Z.BUNDLE, () =>
                                      (0, r.jsx)(K.d, {
                                          product: t,
                                          user: n,
                                          isPurchased: $,
                                          isHighlighted: k,
                                      }),
                                  )
                                  .with(u.Z.VARIANTS_GROUP, () => {
                                      if (null == t.variants || 0 === t.variants.length) return null;
                                      let e = t.variants[eo];
                                      if (null == e) return null;
                                      let [n] = e.items;
                                      return ep(n, e_, $, ec);
                                  })
                                  .with(u.Z.EXTERNAL_SKU, () =>
                                      (0, r.jsx)(F.b, {
                                          product: t,
                                          animationState: e_ ? "on" : "off",
                                          className: er || ($ && !e_) ? el.externalProductDimmed : void 0,
                                      }),
                                  )
                                  .otherwise(() => null),
                          }),
                          eT(),
                          eS(N),
                      ],
                  }),
              });
    }),
    eT = eO;
