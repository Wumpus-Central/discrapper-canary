i.d(t, {
    Z: () => ef,
    d: () => ep,
}),
    i(388685),
    i(314940);
var r = i(951288),
    l = i(647438),
    n = i(120356),
    s = i.n(n),
    a = i(278074),
    o = i(873546),
    d = i(180650),
    u = i(979554),
    c = i(311570),
    p = i(399606),
    g = i(622535),
    m = i(481060),
    h = i(727637),
    v = i(607070),
    x = i(100527),
    f = i(906732),
    y = i(333867),
    P = i(767714),
    C = i(876917),
    _ = i(210887),
    O = i(822857),
    b = i(960919),
    E = i(275388),
    j = i(626135),
    I = i(74538),
    A = i(335131),
    S = i(381585),
    T = i(1870),
    k = i(429368),
    N = i(884697),
    w = i(664018),
    L = i(635552),
    R = i(290175),
    Z = i(724994),
    W = i(297651),
    B = i(390698),
    H = i(813083),
    M = i(680942),
    G = i(558060),
    D = i(237031),
    V = i(508925),
    z = i(306092),
    F = i(453713),
    U = i(616066),
    q = i(216541),
    K = i(22267),
    Q = i(67409),
    X = i(58201),
    Y = i(445794),
    J = i(466679),
    $ = i(201964),
    ee = i(361110),
    et = i(29121),
    ei = i(956472),
    er = i(832149),
    el = i(215023),
    en = i(981631),
    es = i(474936),
    ea = i(388032),
    eo = i(300179);
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let eu = (e) => {
        let { profileEffectId: t, isHighlighted: i, isPurchased: l } = e;
        return (0, r.jsx)("div", {
            className: eo.profileEffectShopPreview,
            children: (0, r.jsx)(C.Z, {
                profileEffectId: t,
                isHovering: i,
                isPurchased: l && !i,
                removeSetHeight: !0,
            }),
        });
    },
    ec = (e) => {
        let { isHighlighted: t, isPurchased: i, user: l, item: n } = e;
        return (0, r.jsx)("div", {
            className: eo.avatarContainer,
            children: (0, r.jsx)(U.R, {
                item: n,
                user: l,
                isPurchased: i,
                isHighlighted: t,
            }),
        });
    },
    ep = (e) => {
        let { showStatus: t, width: i, opacity: l } = e;
        return (0, r.jsxs)("div", {
            className: s()(eo.nameplatePreviewSampleItem, eo.placeholderItem),
            style: { opacity: l },
            children: [
                (0, r.jsx)(m.qEK, {
                    src: null,
                    size: m.EFr.SIZE_32,
                    status: t ? en.Skl.ONLINE : void 0,
                    statusColor: "var(--border-subtle)",
                    "aria-hidden": !0,
                    imageClassName: eo.nameplatePlaceholderAvatar,
                }),
                (0, r.jsx)("div", {
                    className: eo.placeholderBar,
                    style: { maxWidth: null != i ? i : "100px" },
                }),
            ],
        });
    },
    eg = (e) => {
        let { user: t, nameplate: i, isHighlighted: l, isPurchased: n } = e;
        return (0, r.jsx)("div", {
            className: eo.nameplatePreviewRootContainer,
            children: (0, r.jsxs)("div", {
                className: eo.nameplatePreviewList,
                children: [
                    (0, r.jsxs)("div", {
                        className: eo.fadeIn,
                        children: [
                            (0, r.jsx)(ep, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7,
                            }),
                            (0, r.jsx)(ep, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                        ],
                    }),
                    (0, r.jsx)(K.Z, {
                        user: t,
                        nameplate: i,
                        className: eo.nameplatePreviewSampleItem,
                        isHighlighted: l,
                        showPlaceholderUser: !l,
                        showStatus: !0,
                        isPurchased: n,
                    }),
                    (0, r.jsxs)("div", {
                        className: eo.fadeOut,
                        children: [
                            (0, r.jsx)(ep, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                            (0, r.jsx)(ep, {
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
        let { tab: t, selectedProduct: i, cardRef: l, children: n } = e,
            { handleCardVisibilityChange: s } = (0, W.E)(i.skuId, t === el.AW.CATALOG ? "full" : t);
        return (0, r.jsx)(g.$, {
            innerRef: l,
            onChange: s,
            threshold: 0,
            children: n,
        });
    },
    eh =
        12633 == i.j
            ? l.memo(function (e) {
                  var { tab: t, product: i, onMount: n, _isInHeroBlock: s = !1 } = e,
                      a = (function (e, t) {
                          if (null == e) return {};
                          var i,
                              r,
                              l = (function (e, t) {
                                  if (null == e) return {};
                                  var i,
                                      r,
                                      l = {},
                                      n = Object.keys(e);
                                  for (r = 0; r < n.length; r++) (i = n[r]), t.indexOf(i) >= 0 || (l[i] = e[i]);
                                  return l;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < n.length; r++)
                                  (i = n[r]),
                                      !(t.indexOf(i) >= 0) &&
                                          Object.prototype.propertyIsEnumerable.call(e, i) &&
                                          (l[i] = e[i]);
                          }
                          return l;
                      })(e, ["tab", "product", "onMount", "_isInHeroBlock"]);
                  let o = (0, p.e7)([T.Z], () => T.Z.purchases),
                      d = (0, k.o)(i, o),
                      u = (0, X.W)(i, d),
                      c = l.useRef(null),
                      { previewingVariantIndex: g, handleEntering: m, handleLeaving: h } = (0, ee.f)(i),
                      v = (0, $.o)(i, o, g);
                  return (
                      l.useEffect(() => {
                          null == n || n(c, i);
                      }, [n, i]),
                      (0, r.jsx)(em, {
                          tab: t,
                          selectedProduct: u,
                          cardRef: c,
                          children: (0, r.jsx)(
                              ex,
                              ed(
                                  {
                                      tab: t,
                                      product: i,
                                      selectedVariantIndex: d,
                                      selectedProduct: u,
                                      cardRef: c,
                                      previewingVariantIndex: g,
                                      handleEntering: m,
                                      handleLeaving: h,
                                      firstCollectibleItem: v,
                                      _isInHeroBlock: s,
                                  },
                                  a,
                              ),
                          ),
                      })
                  );
              })
            : null;
function ev(e) {
    let {
            product: t,
            tab: i,
            selectedProduct: l,
            selectedVariantIndex: n,
            cardRef: s,
            analyticsLocations: a,
            buildHandlePreviewClick: d,
            isPremiumUser: g,
            isPremiumProduct: h,
            isPurchased: v,
            isPartiallyOwnedBundle: f,
            isDisabled: C,
            discount: _,
        } = e,
        I = (0, S.sp)(),
        k = (0, N.rN)(t),
        [w, R] = (0, p.Wu)([T.Z], () => [
            T.Z.isClaiming === t.skuId,
            null != T.Z.isClaiming && T.Z.isClaiming !== t.skuId,
        ]),
        Z = (0, N.XM)(l, g, !1),
        W = (0, N.ne)({
            product: l,
            isPartiallyOwnedBundle: f,
            isPurchased: v,
        }),
        { enabled: H } = (0, O.WX)({ location: "collectibles_shop_tall_card" }),
        { handleUseNow: D, isApplying: V } = (0, L.W)({ product: l }),
        F = d(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        U = (0, Y.I)(t),
        q = null != U,
        {
            displayPrices: K,
            checkoutEligiblePrices: X,
            isOrbExclusive: J,
            shouldCheckoutWithOrbs: $,
            hasSufficientOrbs: ee,
        } = (0, ei.Ip)({
            product: t,
            isPremiumUser: g,
            tab: i,
            hasDiscountOffer: q,
        });
    if (0 === K.length) return null;
    let et = () =>
        (0, r.jsx)(m.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), F(e);
            },
            text: ea.intl.string(ea.t.FdGl5O),
            fullWidth: !0,
        });
    return (0, r.jsxs)("div", {
        className: eo.detailsWrapper,
        children: [
            (0, r.jsx)("div", {
                className: eo.innerBlur,
                children: C
                    ? (0, r.jsx)(m.Text, {
                          tag: "div",
                          variant: "heading-md/semibold",
                          color: "header-muted",
                          className: eo.priceTag,
                          children: ea.intl.string(ea.t.wu4gyc),
                      })
                    : v || f
                      ? (0, r.jsx)(B.U, {
                            className: eo.priceTag,
                            isPartiallyPurchased: f,
                        })
                      : h
                        ? (0, r.jsx)(m.Text, {
                              variant: "text-md/semibold",
                              className: eo.priceTag,
                              children: ea.intl.string(ea.t.rt69oq),
                          })
                        : H
                          ? (0, r.jsx)(z.e, {
                                displayPrices: K,
                                isPremiumUser: g,
                                discount: _,
                                hasSufficientOrbs: ee,
                                discountOfferAmount: U,
                            })
                          : (0, r.jsx)(G.Z, {
                                product: l,
                                discount: _,
                                isPremiumUser: g,
                                className: eo.priceTag,
                                hideStrikethroughPrice: !0,
                                nitroIconType: "default",
                                nitroIconSize: "md",
                                discountOfferAmount: U,
                            }),
            }),
            (0, r.jsx)("div", {
                className: eo.innerHover,
                children: (0, r.jsxs)("div", {
                    className: eo.buttonsContainer,
                    children: [
                        (() => {
                            if (h && !g && !k)
                                return (0, r.jsx)("div", {
                                    className: eo.hoverUpsellContainer,
                                    children: (0, r.jsx)(P.Z, {
                                        fullWidth: !0,
                                        className: eo.__invalid_premiumSubscribeButton,
                                        disabled: R,
                                        onClick: (e) => e.stopPropagation(),
                                        textOptions: { textOverride: ea.intl.string(ea.t.sEAnVF) },
                                        subscriptionTier: es.Si.TIER_2,
                                    }),
                                });
                            if (!W || C) return et();
                            if (v)
                                return (0, r.jsx)(m.zxk, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(), D();
                                    },
                                    loading: V,
                                    text: ea.intl.string(ea.t.MAS7uL),
                                    fullWidth: !0,
                                });
                            {
                                if (h) {
                                    let e = async () => {
                                        j.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                            collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                            sku_id: t.skuId,
                                            page_type: i,
                                            page_section: null == I ? void 0 : I.pageSection,
                                            page_category: i === el.AW.HOME || null == I ? void 0 : I.pageCategory,
                                            page_index:
                                                i === el.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                                            page_size: i === el.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                                            tile_type: u.Z[t.type],
                                            tile_position: String(null == I ? void 0 : I.tilePosition),
                                            cta_name: "claim premium product button",
                                        }),
                                            await (0, A.fK)(t.skuId),
                                            (0, er.Z)({
                                                product: t,
                                                analyticsLocations: a,
                                                purchaseType: el.o8.PREMIUM_PURCHASE,
                                            });
                                    };
                                    return (0, r.jsx)(m.zxk, {
                                        variant: "primary",
                                        onClick: (t) => {
                                            t.stopPropagation(), e();
                                        },
                                        disabled: R,
                                        loading: w,
                                        loadingStartedLabel: ea.intl.string(ea.t["TYw+9v"]),
                                        loadingFinishedLabel: ea.intl.string(ea.t.Pg1UPz),
                                        text: ea.intl.string(ea.t.zp6caG),
                                        fullWidth: !0,
                                    });
                                }
                                if ($)
                                    if (ee)
                                        return (0, r.jsx)(m.zxk, {
                                            variant: "primary",
                                            text: ea.intl.format(ea.t.kAgx5O, {
                                                orbPrice: X[0].amount,
                                                orbIconHook: () => (0, r.jsx)(b.Z, { className: eo.orbIconAligned }),
                                            }),
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    j.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                                        sku_id: t.skuId,
                                                        page_type: i,
                                                        page_section: null == I ? void 0 : I.pageSection,
                                                        page_category:
                                                            i === el.AW.HOME || null == I ? void 0 : I.pageCategory,
                                                        page_index:
                                                            i === el.AW.CATALOG
                                                                ? null == I
                                                                    ? void 0
                                                                    : I.pageIndex
                                                                : void 0,
                                                        page_size:
                                                            i === el.AW.CATALOG
                                                                ? null == I
                                                                    ? void 0
                                                                    : I.pageSize
                                                                : void 0,
                                                        tile_type: u.Z[t.type],
                                                        tile_position: String(null == I ? void 0 : I.tilePosition),
                                                        cta_name: "claim with orbs button",
                                                    }),
                                                    (0, E.qA)({
                                                        skuId: (0, Q.S)({
                                                            product: t,
                                                            selectedVariantIndex: n,
                                                        }),
                                                        onCheckoutSuccess: (e) => {
                                                            var i;
                                                            let { entitlements: r } = e;
                                                            (0, A.qg)({ variantsReturnStyle: c.v.VARIANTS_GROUP }),
                                                                (0, er.Z)({
                                                                    product: t,
                                                                    analyticsLocations: a,
                                                                    itemConsumed:
                                                                        null == (i = r[0]) ? void 0 : i.consumed,
                                                                    purchaseType: el.o8.ORB,
                                                                });
                                                        },
                                                        analyticsLocations: a,
                                                    });
                                            },
                                            "aria-label": ea.intl.formatToPlainString(ea.t["fNG/09"], {
                                                orbPrice: X[0].amount,
                                            }),
                                            fullWidth: !0,
                                        });
                                    else return et();
                                if (i === el.AW.ORBS)
                                    return (0, r.jsx)(m.zxk, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(), F(e);
                                        },
                                        text: ea.intl.string(ea.t.GpnHfH),
                                        fullWidth: !0,
                                    });
                                let e = q
                                    ? ea.intl.formatToPlainString(ea.t["5U5RBw"], { discountOfferAmount: U })
                                    : ea.intl.formatToPlainString(ea.t["cNSL/v"], { price: Z });
                                return (0, r.jsx)(m.zxk, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            j.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                                sku_id: t.skuId,
                                                page_type: i,
                                                page_section: null == I ? void 0 : I.pageSection,
                                                page_category: i === el.AW.HOME || null == I ? void 0 : I.pageCategory,
                                                page_index:
                                                    i === el.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                                                page_size:
                                                    i === el.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                                                tile_type: u.Z[t.type],
                                                tile_position: String(null == I ? void 0 : I.tilePosition),
                                                cta_name: "buy button",
                                            }),
                                            (0, y.Z)({
                                                skuId: (0, Q.S)({
                                                    product: t,
                                                    selectedVariantIndex: n,
                                                }),
                                                analyticsLocations: a,
                                                returnRef: s,
                                                variantsReturnStyle: c.v.VARIANTS_GROUP,
                                            });
                                    },
                                    text: e,
                                    fullWidth: !0,
                                });
                            }
                        })(),
                        h || o.tq || J || !W || i === el.AW.ORBS
                            ? null
                            : k
                              ? (0, r.jsx)(m.hU, {
                                    variant: "primary",
                                    "aria-label": ea.intl.string(ea.t.SKNnqq),
                                    icon: m.tEF,
                                    onClick: (e) => {
                                        e.stopPropagation(), F(e);
                                    },
                                })
                              : (0, r.jsx)(S.k0, {
                                    newValue: { pageCategory: i === el.AW.HOME || null == I ? void 0 : I.pageCategory },
                                    children: (0, r.jsx)(M.Z, {
                                        primary: !0,
                                        product: t,
                                        selectedVariantIndex: n,
                                        returnRef: s,
                                        tooltipDelay: 250,
                                    }),
                                }),
                    ],
                }),
            }),
        ],
    });
}
let ex =
        12633 == i.j
            ? l.memo(function (e) {
                  let {
                          product: t,
                          user: i,
                          category: n,
                          tab: o,
                          cardRef: c,
                          selectedProduct: g,
                          firstCollectibleItem: y,
                          selectedVariantIndex: P,
                          handleEntering: C,
                          handleLeaving: O,
                          previewingVariantIndex: b,
                          className: E,
                          _isInHeroBlock: A = !1,
                      } = e,
                      { analyticsLocations: T } = (0, f.ZP)([x.Z.COLLECTIBLES_SHOP_CARD]),
                      k = (0, S.sp)(),
                      L = (0, h.Z)(c),
                      W = (0, J.m)(c),
                      B = L || W,
                      M = (0, et.To)(t),
                      G = (0, p.e7)([v.Z], () => v.Z.useReducedMotion),
                      z = I.ZP.canUseCollectibles(i),
                      U = l.useMemo(() => (0, N.BH)(t, z), [t, z]),
                      K = (0, N.G1)(t),
                      Q = (0, p.e7)([_.Z], () => (0, m.wjy)(_.Z.theme)),
                      X = (0, N.Yq)(t.skuId),
                      Y = n.skuId === d.T.ANIME_V3 && (0, N.WW)(t.skuId),
                      { hoverVariant: $ } = (0, w.E)("CollectiblesShopTallCard"),
                      { isPurchased: ee, isPartiallyOwnedBundle: er } = (0, Z.L)(g),
                      { isDisabled: es } = (0, R.G)(g.skuId),
                      ep = null !== b ? b : P,
                      [em, eh] = l.useState(!1),
                      ex = l.useCallback(
                          function (e, t, l) {
                              let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                              return (0, a.EQ)(e.type)
                                  .with(u.Z.PROFILE_EFFECT, () =>
                                      (0, r.jsx)(eu, {
                                          isHighlighted: t,
                                          profileEffectId: e.id,
                                          isPurchased: l && !n,
                                      }),
                                  )
                                  .with(u.Z.AVATAR_DECORATION, () =>
                                      (0, r.jsx)(ec, {
                                          item: e,
                                          user: i,
                                          isHighlighted: t,
                                          isPurchased: l,
                                      }),
                                  )
                                  .with(u.Z.NAMEPLATE, () =>
                                      (0, r.jsx)(eg, {
                                          user: i,
                                          nameplate: e,
                                          isHighlighted: t,
                                          isPurchased: l,
                                      }),
                                  )
                                  .otherwise(() => null);
                          },
                          [i],
                      ),
                      ef = l.useRef(null),
                      { displayPrices: ey, isOrbExclusive: eP } = (0, ei.oo)({
                          product: t,
                          isPremiumUser: z,
                          tab: o,
                      }),
                      eC = l.useCallback(
                          (e) => (i) => {
                              let r = (0, ei.oQ)({ product: t });
                              (ef.current = i.currentTarget),
                                  j.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                                      sku_id: t.skuId,
                                      page_type: o,
                                      page_section: null == k ? void 0 : k.pageSection,
                                      page_category: o === el.AW.HOME ? void 0 : n.name,
                                      page_index: o === el.AW.CATALOG ? (null == k ? void 0 : k.pageIndex) : void 0,
                                      page_size: o === el.AW.CATALOG ? (null == k ? void 0 : k.pageSize) : void 0,
                                      tile_type: u.Z[t.type],
                                      tile_position: String(null == k ? void 0 : k.tilePosition),
                                      cta_name: null,
                                  }),
                                  (0, D.T)({
                                      product: t,
                                      category: n,
                                      shouldCheckoutWithOrbs: r,
                                      analyticsLocations: T,
                                      analyticsSource: e,
                                      returnRef: ef,
                                      tab: o,
                                  });
                          },
                          [t, n, o, T, k],
                      ),
                      e_ = eC(x.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === ey.length || ((0, N.x6)(t) && null != U && U.discountPercentage < 0)
                      ? null
                      : (0, r.jsx)(m.tEY, {
                            children: (0, r.jsxs)(m.kL8, {
                                className: s()(E, Q ? eo.shopCardDark : eo.shopCard, {
                                    [eo.partiallyOwned]: er && !B,
                                    [eo.shopCardAnimation]: !G && $ !== w.D.NO_MOVEMENT,
                                    [Q ? eo.shopCardDarkHighlighted : eo.shopCardHighlighted]: B,
                                }),
                                ref: c,
                                onClick: e_,
                                "aria-label": t.name,
                                children: [
                                    K &&
                                        (0, r.jsx)(m.ua7, {
                                            tooltipContentClassName: eo.premiumWheelTooltipContent,
                                            color: m.ua7.Colors.PRIMARY,
                                            text: ea.intl.string(ea.t.nKdAlJ),
                                            children: (e) => {
                                                var t, i;
                                                return (0, r.jsx)(
                                                    m.IGR,
                                                    ((t = ed({}, e)),
                                                    (i = i =
                                                        {
                                                            className: eo.premiumWheelBadge,
                                                            text: (0, r.jsx)(m.SrA, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: eo.premiumWheel,
                                                            }),
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                              t,
                                                              Object.getOwnPropertyDescriptors(i),
                                                          )
                                                        : (function (e, t) {
                                                              var i = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  i.push.apply(i, r);
                                                              }
                                                              return i;
                                                          })(Object(i)).forEach(function (e) {
                                                              Object.defineProperty(
                                                                  t,
                                                                  e,
                                                                  Object.getOwnPropertyDescriptor(i, e),
                                                              );
                                                          }),
                                                    t),
                                                );
                                            },
                                        }),
                                    (0, r.jsx)(H.Z, {
                                        category: n,
                                        className: eo.limitedTimeBadge,
                                        display: H.k.CARD,
                                    }),
                                    er || ee || !X
                                        ? eP
                                            ? (0, r.jsx)(m.IGR, {
                                                  text: ea.intl.string(ea.t["0TmQRE"]),
                                                  disableColor: !0,
                                                  className: eo.badge,
                                              })
                                            : Y
                                              ? (0, r.jsx)(m.IGR, {
                                                    text: ea.intl.string(ea.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: eo.badge,
                                                })
                                              : null
                                        : (0, r.jsx)(m.IGR, {
                                              text: ea.intl.string(ea.t.y2b7CA),
                                              disableColor: !0,
                                              className: eo.badge,
                                          }),
                                    (0, r.jsx)("div", {
                                        className: eo.preview,
                                        children: (0, a.EQ)(t.type)
                                            .with(u.Z.PROFILE_EFFECT, u.Z.AVATAR_DECORATION, u.Z.NAMEPLATE, () =>
                                                ex(y, B, ee),
                                            )
                                            .with(u.Z.BUNDLE, () =>
                                                (0, r.jsx)(q.d, {
                                                    product: t,
                                                    user: i,
                                                    isPurchased: ee,
                                                    isHighlighted: B,
                                                }),
                                            )
                                            .with(u.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[ep];
                                                if (null == e) return null;
                                                let [i] = e.items;
                                                return ex(i, B, ee, em);
                                            })
                                            .with(u.Z.EXTERNAL_SKU, () =>
                                                (0, r.jsx)(V.b, {
                                                    product: t,
                                                    animationState: B ? "on" : "off",
                                                    className: es || (ee && !B) ? eo.externalProductDimmed : void 0,
                                                }),
                                            )
                                            .otherwise(() => null),
                                    }),
                                    (() => {
                                        let e = ee ? m.sV5 : es ? m.mBM : null;
                                        return null == e
                                            ? null
                                            : (0, r.jsx)("div", {
                                                  className: eo.cardStateIconWrapper,
                                                  children: (0, r.jsx)(e, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      width: 38,
                                                      height: 38,
                                                      className: s()(eo.cardStateIcon, { [eo.checkmark]: ee }),
                                                  }),
                                              });
                                    })(),
                                    (0, r.jsxs)("div", {
                                        className: s()(
                                            eo.cardText,
                                            Q ? eo.darkCardBackground : eo.lightCardBackground,
                                            { [eo.variantsGroup]: t.type === u.Z.VARIANTS_GROUP },
                                        ),
                                        children: [
                                            (0, r.jsx)(m.X6q, {
                                                variant: "text-lg/bold",
                                                className: eo.productName,
                                                children: M,
                                            }),
                                            t.type === u.Z.VARIANTS_GROUP
                                                ? (0, r.jsx)(F.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: b,
                                                          handleEntering: C,
                                                          handleLeaving: O,
                                                      },
                                                      selectedVariantIndex: P,
                                                      setIsHoveringOnSwitch: eh,
                                                      minimal: !B,
                                                      alternativeBackgroundColor:
                                                          (null == y ? void 0 : y.type) === u.Z.PROFILE_EFFECT,
                                                  })
                                                : null,
                                            (0, r.jsx)(ev, {
                                                product: t,
                                                tab: o,
                                                buildHandlePreviewClick: eC,
                                                selectedProduct: g,
                                                selectedVariantIndex: P,
                                                cardRef: c,
                                                analyticsLocations: T,
                                                isPremiumUser: z,
                                                isPremiumProduct: K,
                                                isPartiallyOwnedBundle: er,
                                                isPurchased: ee,
                                                isDisabled: es,
                                                discount: U,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        });
              })
            : null,
    ef = 12633 == i.j ? eh : null;
