i.d(t, {
    Z: () => ef,
    d: () => ec,
}),
    i(388685),
    i(314940);
var r = i(255367),
    l = i(73800),
    n = i(120356),
    s = i.n(n),
    a = i(278074),
    o = i(873546),
    d = i(180650),
    u = i(979554),
    c = i(399606),
    p = i(622535),
    g = i(481060),
    h = i(727637),
    m = i(607070),
    v = i(100527),
    f = i(906732),
    x = i(333867),
    y = i(767714),
    C = i(876917),
    _ = i(210887),
    b = i(822857),
    P = i(960919),
    E = i(275388),
    O = i(626135),
    j = i(74538),
    I = i(335131),
    A = i(381585),
    S = i(1870),
    T = i(429368),
    k = i(884697),
    L = i(664018),
    N = i(228624),
    w = i(635552),
    R = i(290175),
    Z = i(905357),
    W = i(724994),
    B = i(297651),
    H = i(390698),
    M = i(813083),
    G = i(680942),
    D = i(558060),
    z = i(237031),
    F = i(262786),
    V = i(508925),
    U = i(306092),
    q = i(453713),
    K = i(616066),
    Q = i(216541),
    X = i(22267),
    Y = i(67409),
    J = i(58201),
    $ = i(201964),
    ee = i(361110),
    et = i(956472),
    ei = i(832149),
    er = i(215023),
    el = i(981631),
    en = i(474936),
    es = i(388032),
    ea = i(726773);
function eo(e) {
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
let ed = (e) => {
        let { profileEffectId: t, isHighlighted: i, isPurchased: l } = e;
        return (0, r.jsx)("div", {
            className: ea.profileEffectShopPreview,
            children: (0, r.jsx)(C.Z, {
                profileEffectId: t,
                isHovering: i,
                isPurchased: l && !i,
                removeSetHeight: !0,
            }),
        });
    },
    eu = (e) => {
        let { isHighlighted: t, isPurchased: i, user: l, item: n } = e;
        return (0, r.jsx)("div", {
            className: ea.avatarContainer,
            children: (0, r.jsx)(K.R, {
                item: n,
                user: l,
                isPurchased: i,
                isHighlighted: t,
            }),
        });
    },
    ec = (e) => {
        let { showStatus: t, width: i, opacity: l } = e;
        return (0, r.jsxs)("div", {
            className: s()(ea.nameplatePreviewSampleItem, ea.placeholderItem),
            style: { opacity: l },
            children: [
                (0, r.jsx)(g.qEK, {
                    src: null,
                    size: g.EFr.SIZE_32,
                    status: t ? el.Skl.ONLINE : void 0,
                    statusColor: "var(--border-subtle)",
                    "aria-hidden": !0,
                    imageClassName: ea.nameplatePlaceholderAvatar,
                }),
                (0, r.jsx)("div", {
                    className: ea.placeholderBar,
                    style: { maxWidth: null != i ? i : "100px" },
                }),
            ],
        });
    },
    ep = (e) => {
        let { user: t, nameplate: i, isHighlighted: l, isPurchased: n } = e;
        return (0, r.jsx)("div", {
            className: ea.nameplatePreviewRootContainer,
            children: (0, r.jsxs)("div", {
                className: ea.nameplatePreviewList,
                children: [
                    (0, r.jsxs)("div", {
                        className: ea.fadeIn,
                        children: [
                            (0, r.jsx)(ec, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7,
                            }),
                            (0, r.jsx)(ec, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                        ],
                    }),
                    (0, r.jsx)(X.Z, {
                        user: t,
                        nameplate: i,
                        className: ea.nameplatePreviewSampleItem,
                        isHighlighted: l,
                        showPlaceholderUser: !l,
                        showStatus: !0,
                        isPurchased: n,
                    }),
                    (0, r.jsxs)("div", {
                        className: ea.fadeOut,
                        children: [
                            (0, r.jsx)(ec, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85,
                            }),
                            (0, r.jsx)(ec, {
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
    eg = (e) => {
        let { tab: t, selectedProduct: i, cardRef: l, children: n } = e,
            { handleCardVisibilityChange: s } = (0, B.E)(i.skuId, t === er.AW.CATALOG ? "full" : t);
        return (0, r.jsx)(p.$, {
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
                  let o = (0, c.e7)([S.Z], () => S.Z.purchases),
                      d = (0, T.o)(i, o),
                      u = (0, J.W)(i, d),
                      p = l.useRef(null),
                      { previewingVariantIndex: g, handleEntering: h, handleLeaving: m } = (0, ee.f)(i),
                      v = (0, $.o)(i, o, g);
                  return (
                      l.useEffect(() => {
                          null == n || n(p, i);
                      }, [n, i]),
                      (0, r.jsx)(eg, {
                          tab: t,
                          selectedProduct: u,
                          cardRef: p,
                          children: (0, r.jsx)(
                              ev,
                              eo(
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
                                      _isInHeroBlock: s,
                                  },
                                  a,
                              ),
                          ),
                      })
                  );
              })
            : null;
function em(e) {
    let {
            product: t,
            tab: i,
            selectedProduct: l,
            selectedVariantIndex: n,
            cardRef: s,
            analyticsLocations: a,
            buildHandlePreviewClick: d,
            isPremiumUser: p,
            isPremiumProduct: h,
            isPurchased: m,
            isPartiallyOwnedBundle: f,
            isDisabled: C,
            discount: _,
        } = e,
        j = (0, A.sp)(),
        T = (0, k.rN)(t),
        [L, R] = (0, c.Wu)([S.Z], () => [
            S.Z.isClaiming === t.skuId,
            null != S.Z.isClaiming && S.Z.isClaiming !== t.skuId,
        ]),
        Z = (0, N.hv)("CollectiblesShopTallCard"),
        W = (0, k.XM)(l, p, !1),
        B = (0, k.ne)({
            product: l,
            isPartiallyOwnedBundle: f,
            isPurchased: m,
        }),
        { enabled: M } = (0, b.WX)({ location: "collectibles_shop_tall_card" }),
        { handleUseNow: z, isApplying: V } = (0, w.W)({ product: l }),
        q = d(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        K = (0, F._)(t.eligibleOffers),
        Q = null != K,
        {
            displayPrices: X,
            checkoutEligiblePrices: J,
            isOrbExclusive: $,
            shouldCheckoutWithOrbs: ee,
            hasSufficientOrbs: eo,
        } = (0, et.Ip)({
            product: t,
            isPremiumUser: p,
            tab: i,
            hasDiscountOffer: Q,
        });
    if (0 === X.length) return null;
    let ed = () =>
            (0, r.jsx)("div", {
                className: ea.hoverUpsellContainer,
                children: (0, r.jsx)(y.Z, {
                    fullWidth: !0,
                    className: ea.__invalid_premiumSubscribeButton,
                    disabled: R,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: es.intl.string(es.t.sEAnVF) },
                    subscriptionTier: en.Si.TIER_2,
                }),
            }),
        eu = () =>
            (0, r.jsx)(g.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), q(e);
                },
                text: es.intl.string(es.t.FdGl5O),
                fullWidth: !0,
            }),
        ec = () => {
            let e = () => {
                    O.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                        sku_id: t.skuId,
                        page_type: i,
                        page_section: null == j ? void 0 : j.pageSection,
                        page_category: i === er.AW.HOME || null == j ? void 0 : j.pageCategory,
                        page_index: i === er.AW.CATALOG ? (null == j ? void 0 : j.pageIndex) : void 0,
                        page_size: i === er.AW.CATALOG ? (null == j ? void 0 : j.pageSize) : void 0,
                        tile_type: u.Z[t.type],
                        tile_position: String(null == j ? void 0 : j.tilePosition),
                        cta_name: "buy button",
                    }),
                        (0, x.Z)({
                            skuId: (0, Y.S)({
                                product: t,
                                selectedVariantIndex: n,
                            }),
                            analyticsLocations: a,
                            returnRef: s,
                            variantsReturnStyle: Z,
                        });
                },
                l = Q
                    ? es.intl.formatToPlainString(es.t["5U5RBw"], { discountOfferAmount: K })
                    : es.intl.formatToPlainString(es.t["cNSL/v"], { price: W });
            return (0, r.jsx)(g.zxk, {
                variant: "primary",
                onClick: (t) => {
                    t.stopPropagation(), e();
                },
                text: l,
                fullWidth: !0,
            });
        },
        ep = () => {
            let e = () => {
                O.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == j ? void 0 : j.pageSection,
                    page_category: i === er.AW.HOME || null == j ? void 0 : j.pageCategory,
                    page_index: i === er.AW.CATALOG ? (null == j ? void 0 : j.pageIndex) : void 0,
                    page_size: i === er.AW.CATALOG ? (null == j ? void 0 : j.pageSize) : void 0,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == j ? void 0 : j.tilePosition),
                    cta_name: "claim with orbs button",
                }),
                    (0, E.qA)({
                        skuId: (0, Y.S)({
                            product: t,
                            selectedVariantIndex: n,
                        }),
                        onCheckoutSuccess: (e) => {
                            var i;
                            let { entitlements: r } = e;
                            (0, I.qg)({
                                variantsReturnStyle: Z,
                                location: "collectible_checkout_with_orb",
                            }),
                                (0, ei.Z)({
                                    product: t,
                                    analyticsLocations: a,
                                    itemConsumed: null == (i = r[0]) ? void 0 : i.consumed,
                                    purchaseType: er.o8.ORB,
                                });
                        },
                        analyticsLocations: a,
                    });
            };
            return (0, r.jsx)(g.zxk, {
                variant: "primary",
                text: es.intl.format(es.t.kAgx5O, {
                    orbPrice: J[0].amount,
                    orbIconHook: () => (0, r.jsx)(P.Z, { className: ea.orbIconAligned }),
                }),
                onClick: (t) => {
                    t.stopPropagation(), e();
                },
                "aria-label": es.intl.formatToPlainString(es.t["fNG/09"], { orbPrice: J[0].amount }),
                fullWidth: !0,
            });
        },
        eg = () => {
            let e = async () => {
                O.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == j ? void 0 : j.pageSection,
                    page_category: i === er.AW.HOME || null == j ? void 0 : j.pageCategory,
                    page_index: i === er.AW.CATALOG ? (null == j ? void 0 : j.pageIndex) : void 0,
                    page_size: i === er.AW.CATALOG ? (null == j ? void 0 : j.pageSize) : void 0,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == j ? void 0 : j.tilePosition),
                    cta_name: "claim premium product button",
                }),
                    await (0, I.fK)(t.skuId),
                    (0, ei.Z)({
                        product: t,
                        analyticsLocations: a,
                        purchaseType: er.o8.PREMIUM_PURCHASE,
                    });
            };
            return (0, r.jsx)(g.zxk, {
                variant: "primary",
                onClick: (t) => {
                    t.stopPropagation(), e();
                },
                disabled: R,
                loading: L,
                loadingStartedLabel: es.intl.string(es.t["TYw+9v"]),
                loadingFinishedLabel: es.intl.string(es.t.Pg1UPz),
                text: es.intl.string(es.t.zp6caG),
                fullWidth: !0,
            });
        },
        eh = () =>
            (0, r.jsx)(g.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), z();
                },
                loading: V,
                text: es.intl.string(es.t.MAS7uL),
                fullWidth: !0,
            }),
        em = () =>
            (0, r.jsx)(g.zxk, {
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), q(e);
                },
                text: es.intl.string(es.t.GpnHfH),
                fullWidth: !0,
            });
    return (0, r.jsxs)("div", {
        className: ea.detailsWrapper,
        children: [
            (0, r.jsx)("div", {
                className: ea.innerBlur,
                children: C
                    ? (0, r.jsx)(g.Text, {
                          tag: "div",
                          variant: "heading-md/semibold",
                          color: "header-muted",
                          className: ea.priceTag,
                          children: es.intl.string(es.t.wu4gyc),
                      })
                    : m || f
                      ? (0, r.jsx)(H.U, {
                            className: ea.priceTag,
                            isPartiallyPurchased: f,
                        })
                      : h
                        ? (0, r.jsx)(g.Text, {
                              variant: "text-md/semibold",
                              className: ea.priceTag,
                              children: es.intl.string(es.t.rt69oq),
                          })
                        : M
                          ? (0, r.jsx)(U.e, {
                                displayPrices: X,
                                isPremiumUser: p,
                                discount: _,
                                hasSufficientOrbs: eo,
                                discountOfferAmount: K,
                            })
                          : (0, r.jsx)(D.Z, {
                                product: l,
                                discount: _,
                                isPremiumUser: p,
                                className: ea.priceTag,
                                hideStrikethroughPrice: !0,
                                nitroIconType: "default",
                                nitroIconSize: "md",
                                discountOfferAmount: K,
                            }),
            }),
            (0, r.jsx)("div", {
                className: ea.innerHover,
                children: (0, r.jsxs)("div", {
                    className: ea.buttonsContainer,
                    children: [
                        (() => {
                            if (h && !p && !T) return ed();
                            if (!B || C) return eu();
                            if (m) return eh();
                            if (h) return eg();
                            if (ee)
                                if (eo) return ep();
                                else return eu();
                            return i === er.AW.ORBS ? em() : ec();
                        })(),
                        h || o.tq || $ || !B || i === er.AW.ORBS
                            ? null
                            : T
                              ? (0, r.jsx)(g.hU, {
                                    variant: "primary",
                                    "aria-label": es.intl.string(es.t.SKNnqq),
                                    icon: g.tEF,
                                    onClick: (e) => {
                                        e.stopPropagation(), q(e);
                                    },
                                })
                              : (0, r.jsx)(A.k0, {
                                    newValue: { pageCategory: i === er.AW.HOME || null == j ? void 0 : j.pageCategory },
                                    children: (0, r.jsx)(G.Z, {
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
let ev =
        12633 == i.j
            ? l.memo(function (e) {
                  let {
                          product: t,
                          user: i,
                          category: n,
                          tab: o,
                          cardRef: p,
                          selectedProduct: x,
                          firstCollectibleItem: y,
                          selectedVariantIndex: C,
                          handleEntering: b,
                          handleLeaving: P,
                          previewingVariantIndex: E,
                          className: I,
                          _isInHeroBlock: S = !1,
                      } = e,
                      { analyticsLocations: T } = (0, f.ZP)([v.Z.COLLECTIBLES_SHOP_CARD]),
                      N = (0, A.sp)(),
                      w = (0, h.Z)(p),
                      [B, H] = l.useState(!1),
                      G = w || B,
                      D = (0, Z.T)(t),
                      F = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
                      U = j.ZP.canUseCollectibles(i),
                      K = l.useMemo(() => (0, k.BH)(t, U), [t, U]),
                      X = (0, k.G1)(t),
                      Y = (0, c.e7)([_.Z], () => (0, g.wjy)(_.Z.theme)),
                      J = (0, k.Yq)(t.skuId),
                      $ = n.skuId === d.T.ANIME_V3 && (0, k.WW)(t.skuId),
                      { hoverVariant: ee } = (0, L.E)("CollectiblesShopTallCard"),
                      { isPurchased: ei, isPartiallyOwnedBundle: en } = (0, W.L)(x),
                      { isDisabled: ec } = (0, R.G)(x.skuId),
                      eg = null !== E ? E : C,
                      [eh, ev] = l.useState(!1),
                      ef = l.useCallback(
                          function (e, t, l) {
                              let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                              return (0, a.EQ)(e.type)
                                  .with(u.Z.PROFILE_EFFECT, () =>
                                      (0, r.jsx)(ed, {
                                          isHighlighted: t,
                                          profileEffectId: e.id,
                                          isPurchased: l && !n,
                                      }),
                                  )
                                  .with(u.Z.AVATAR_DECORATION, () =>
                                      (0, r.jsx)(eu, {
                                          item: e,
                                          user: i,
                                          isHighlighted: t,
                                          isPurchased: l,
                                      }),
                                  )
                                  .with(u.Z.NAMEPLATE, () =>
                                      (0, r.jsx)(ep, {
                                          user: i,
                                          nameplate: e,
                                          isHighlighted: t,
                                          isPurchased: l,
                                      }),
                                  )
                                  .otherwise(() => null);
                          },
                          [i],
                      );
                  l.useEffect(() => {
                      let { current: e } = p;
                      if (null == e) return;
                      let t = () => H(!0),
                          i = (t) => {
                              e.contains(t.relatedTarget) || H(!1);
                          };
                      return (
                          e.addEventListener("focusin", t),
                          e.addEventListener("focusout", i),
                          e.blur(),
                          () => {
                              e.removeEventListener("focusin", t), e.removeEventListener("focusout", i);
                          }
                      );
                  }, [p]);
                  let ex = l.useRef(null),
                      { displayPrices: ey, isOrbExclusive: eC } = (0, et.oo)({
                          product: t,
                          isPremiumUser: U,
                          tab: o,
                      }),
                      e_ = l.useCallback(
                          (e) => (i) => {
                              let r = (0, et.oQ)({ product: t });
                              (ex.current = i.currentTarget),
                                  O.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == N ? void 0 : N.sessionId,
                                      sku_id: t.skuId,
                                      page_type: o,
                                      page_section: null == N ? void 0 : N.pageSection,
                                      page_category: o === er.AW.HOME ? void 0 : n.name,
                                      page_index: o === er.AW.CATALOG ? (null == N ? void 0 : N.pageIndex) : void 0,
                                      page_size: o === er.AW.CATALOG ? (null == N ? void 0 : N.pageSize) : void 0,
                                      tile_type: u.Z[t.type],
                                      tile_position: String(null == N ? void 0 : N.tilePosition),
                                      cta_name: null,
                                  }),
                                  (0, z.T)({
                                      product: t,
                                      category: n,
                                      shouldCheckoutWithOrbs: r,
                                      analyticsLocations: T,
                                      analyticsSource: e,
                                      returnRef: ex,
                                      tab: o,
                                  });
                          },
                          [t, n, o, T, N],
                      ),
                      eb = e_(v.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === ey.length || ((0, k.x6)(t) && null != K && K.discountPercentage < 0)
                      ? null
                      : (0, r.jsx)(g.tEY, {
                            children: (0, r.jsxs)(g.kL8, {
                                className: s()(I, Y ? ea.shopCardDark : ea.shopCard, {
                                    [ea.partiallyOwned]: en && !G,
                                    [ea.shopCardAnimation]: !F && ee !== L.D.NO_MOVEMENT,
                                    [Y ? ea.shopCardDarkHighlighted : ea.shopCardHighlighted]: G,
                                }),
                                ref: p,
                                onClick: eb,
                                "aria-label": t.name,
                                children: [
                                    X &&
                                        (0, r.jsx)(g.ua7, {
                                            tooltipContentClassName: ea.premiumWheelTooltipContent,
                                            color: g.ua7.Colors.PRIMARY,
                                            text: es.intl.string(es.t.nKdAlJ),
                                            children: (e) => {
                                                var t, i;
                                                return (0, r.jsx)(
                                                    g.IGR,
                                                    ((t = eo({}, e)),
                                                    (i = i =
                                                        {
                                                            className: ea.premiumWheelBadge,
                                                            text: (0, r.jsx)(g.SrA, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: ea.premiumWheel,
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
                                    (0, r.jsx)(M.Z, {
                                        category: n,
                                        className: ea.limitedTimeBadge,
                                        display: "card",
                                    }),
                                    en || ei || !J
                                        ? eC
                                            ? (0, r.jsx)(g.IGR, {
                                                  text: es.intl.string(es.t["0TmQRE"]),
                                                  disableColor: !0,
                                                  className: ea.badge,
                                              })
                                            : $
                                              ? (0, r.jsx)(g.IGR, {
                                                    text: es.intl.string(es.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: ea.badge,
                                                })
                                              : null
                                        : (0, r.jsx)(g.IGR, {
                                              text: es.intl.string(es.t.y2b7CA),
                                              disableColor: !0,
                                              className: ea.badge,
                                          }),
                                    (0, r.jsx)("div", {
                                        className: ea.preview,
                                        children: (0, a.EQ)(t.type)
                                            .with(u.Z.PROFILE_EFFECT, u.Z.AVATAR_DECORATION, u.Z.NAMEPLATE, () =>
                                                ef(y, G, ei),
                                            )
                                            .with(u.Z.BUNDLE, () =>
                                                (0, r.jsx)(Q.d, {
                                                    product: t,
                                                    user: i,
                                                    isPurchased: ei,
                                                    isHighlighted: G,
                                                }),
                                            )
                                            .with(u.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[eg];
                                                if (null == e) return null;
                                                let [i] = e.items;
                                                return ef(i, G, ei, eh);
                                            })
                                            .with(u.Z.EXTERNAL_SKU, () =>
                                                (0, r.jsx)(V.b, {
                                                    product: t,
                                                    animationState: G ? "on" : "off",
                                                    className: ec || (ei && !G) ? ea.externalProductDimmed : void 0,
                                                }),
                                            )
                                            .otherwise(() => null),
                                    }),
                                    (() => {
                                        let e = ei ? g.sV5 : ec ? g.mBM : null;
                                        return null == e
                                            ? null
                                            : (0, r.jsx)("div", {
                                                  className: ea.cardStateIconWrapper,
                                                  children: (0, r.jsx)(e, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      width: 38,
                                                      height: 38,
                                                      className: s()(ea.cardStateIcon, { [ea.checkmark]: ei }),
                                                  }),
                                              });
                                    })(),
                                    (0, r.jsxs)("div", {
                                        className: s()(
                                            ea.cardText,
                                            Y ? ea.darkCardBackground : ea.lightCardBackground,
                                            { [ea.variantsGroup]: t.type === u.Z.VARIANTS_GROUP },
                                        ),
                                        children: [
                                            (0, r.jsx)(g.X6q, {
                                                variant: "text-lg/bold",
                                                className: ea.productName,
                                                children: D,
                                            }),
                                            t.type === u.Z.VARIANTS_GROUP
                                                ? (0, r.jsx)(q.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: E,
                                                          handleEntering: b,
                                                          handleLeaving: P,
                                                      },
                                                      selectedVariantIndex: C,
                                                      setIsHoveringOnSwitch: ev,
                                                      minimal: !G,
                                                      alternativeBackgroundColor:
                                                          (null == y ? void 0 : y.type) === u.Z.PROFILE_EFFECT,
                                                  })
                                                : null,
                                            (0, r.jsx)(em, {
                                                product: t,
                                                tab: o,
                                                buildHandlePreviewClick: e_,
                                                selectedProduct: x,
                                                selectedVariantIndex: C,
                                                cardRef: p,
                                                analyticsLocations: T,
                                                isPremiumUser: U,
                                                isPremiumProduct: X,
                                                isPartiallyOwnedBundle: en,
                                                isPurchased: ei,
                                                isDisabled: ec,
                                                discount: K,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        });
              })
            : null,
    ef = 12633 == i.j ? eh : null;
