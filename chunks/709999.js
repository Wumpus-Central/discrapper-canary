i.d(t, {
    Z: () => ef,
    d: () => ec,
}),
    i(388685),
    i(314940);
var r = i(951288),
    n = i(647438),
    l = i(120356),
    s = i.n(l),
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
    f = i(100527),
    x = i(906732),
    y = i(333867),
    P = i(767714),
    C = i(876917),
    _ = i(210887),
    b = i(822857),
    O = i(960919),
    E = i(275388),
    j = i(626135),
    I = i(74538),
    A = i(335131),
    S = i(381585),
    T = i(1870),
    k = i(429368),
    N = i(884697),
    L = i(664018),
    w = i(635552),
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
    J = i(201964),
    $ = i(361110),
    ee = i(29121),
    et = i(956472),
    ei = i(832149),
    er = i(215023),
    en = i(981631),
    el = i(474936),
    es = i(388032),
    ea = i(300179);
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
        let { profileEffectId: t, isHighlighted: i, isPurchased: n } = e;
        return (0, r.jsx)("div", {
            className: ea.profileEffectShopPreview,
            children: (0, r.jsx)(C.Z, {
                profileEffectId: t,
                isHovering: i,
                isPurchased: n && !i,
                removeSetHeight: !0,
            }),
        });
    },
    eu = (e) => {
        let { isHighlighted: t, isPurchased: i, user: n, item: l } = e;
        return (0, r.jsx)("div", {
            className: ea.avatarContainer,
            children: (0, r.jsx)(U.R, {
                item: l,
                user: n,
                isPurchased: i,
                isHighlighted: t,
            }),
        });
    },
    ec = (e) => {
        let { showStatus: t, width: i, opacity: n } = e;
        return (0, r.jsxs)("div", {
            className: s()(ea.nameplatePreviewSampleItem, ea.placeholderItem),
            style: { opacity: n },
            children: [
                (0, r.jsx)(m.qEK, {
                    src: null,
                    size: m.EFr.SIZE_32,
                    status: t ? en.Skl.ONLINE : void 0,
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
        let { user: t, nameplate: i, isHighlighted: n, isPurchased: l } = e;
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
                    (0, r.jsx)(K.Z, {
                        user: t,
                        nameplate: i,
                        className: ea.nameplatePreviewSampleItem,
                        isHighlighted: n,
                        showPlaceholderUser: !n,
                        showStatus: !0,
                        isPurchased: l,
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
        let { tab: t, selectedProduct: i, cardRef: n, children: l } = e,
            { handleCardVisibilityChange: s } = (0, W.E)(i.skuId, t === er.AW.CATALOG ? "full" : t);
        return (0, r.jsx)(g.$, {
            innerRef: n,
            onChange: s,
            threshold: 0,
            children: l,
        });
    },
    em =
        12633 == i.j
            ? n.memo(function (e) {
                  var { tab: t, product: i, onMount: l, _isInHeroBlock: s = !1 } = e,
                      a = (function (e, t) {
                          if (null == e) return {};
                          var i,
                              r,
                              n = (function (e, t) {
                                  if (null == e) return {};
                                  var i,
                                      r,
                                      n = {},
                                      l = Object.keys(e);
                                  for (r = 0; r < l.length; r++) (i = l[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
                                  return n;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < l.length; r++)
                                  (i = l[r]),
                                      !(t.indexOf(i) >= 0) &&
                                          Object.prototype.propertyIsEnumerable.call(e, i) &&
                                          (n[i] = e[i]);
                          }
                          return n;
                      })(e, ["tab", "product", "onMount", "_isInHeroBlock"]);
                  let o = (0, p.e7)([T.Z], () => T.Z.purchases),
                      d = (0, k.o)(i, o),
                      u = (0, X.W)(i, d),
                      c = n.useRef(null),
                      { previewingVariantIndex: g, handleEntering: m, handleLeaving: h } = (0, $.f)(i),
                      v = (0, J.o)(i, o, g);
                  return (
                      n.useEffect(() => {
                          null == l || l(c, i);
                      }, [l, i]),
                      (0, r.jsx)(eg, {
                          tab: t,
                          selectedProduct: u,
                          cardRef: c,
                          children: (0, r.jsx)(
                              ev,
                              eo(
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
function eh(e) {
    let {
            product: t,
            tab: i,
            selectedProduct: n,
            selectedVariantIndex: l,
            cardRef: s,
            analyticsLocations: a,
            buildHandlePreviewClick: d,
            isPremiumUser: g,
            isPremiumProduct: h,
            isPurchased: v,
            isPartiallyOwnedBundle: x,
            isDisabled: C,
            discount: _,
        } = e,
        I = (0, S.sp)(),
        k = (0, N.rN)(t),
        [L, R] = (0, p.Wu)([T.Z], () => [
            T.Z.isClaiming === t.skuId,
            null != T.Z.isClaiming && T.Z.isClaiming !== t.skuId,
        ]),
        Z = (0, N.XM)(n, g, !1),
        W = (0, N.ne)({
            product: n,
            isPartiallyOwnedBundle: x,
            isPurchased: v,
        }),
        { enabled: H } = (0, b.WX)({ location: "collectibles_shop_tall_card" }),
        { handleUseNow: D, isApplying: V } = (0, w.W)({ product: n }),
        F = d(f.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        U = (0, Y.I)(t),
        q = null != U,
        {
            displayPrices: K,
            checkoutEligiblePrices: X,
            isOrbExclusive: J,
            shouldCheckoutWithOrbs: $,
            hasSufficientOrbs: ee,
        } = (0, et.Ip)({
            product: t,
            isPremiumUser: g,
            tab: i,
            hasDiscountOffer: q,
        });
    if (0 === K.length) return null;
    let eo = () =>
        (0, r.jsx)(m.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), F(e);
            },
            text: es.intl.string(es.t.FdGl5O),
            fullWidth: !0,
        });
    return (0, r.jsxs)("div", {
        className: ea.detailsWrapper,
        children: [
            (0, r.jsx)("div", {
                className: ea.innerBlur,
                children: C
                    ? (0, r.jsx)(m.Text, {
                          tag: "div",
                          variant: "heading-md/semibold",
                          color: "header-muted",
                          className: ea.priceTag,
                          children: es.intl.string(es.t.wu4gyc),
                      })
                    : v || x
                      ? (0, r.jsx)(B.U, {
                            className: ea.priceTag,
                            isPartiallyPurchased: x,
                        })
                      : h
                        ? (0, r.jsx)(m.Text, {
                              variant: "text-md/semibold",
                              className: ea.priceTag,
                              children: es.intl.string(es.t.rt69oq),
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
                                product: n,
                                discount: _,
                                isPremiumUser: g,
                                className: ea.priceTag,
                                hideStrikethroughPrice: !0,
                                nitroIconType: "default",
                                nitroIconSize: "md",
                                discountOfferAmount: U,
                            }),
            }),
            (0, r.jsx)("div", {
                className: ea.innerHover,
                children: (0, r.jsxs)("div", {
                    className: ea.buttonsContainer,
                    children: [
                        (() => {
                            if (h && !g && !k)
                                return (0, r.jsx)("div", {
                                    className: ea.hoverUpsellContainer,
                                    children: (0, r.jsx)(P.Z, {
                                        fullWidth: !0,
                                        className: ea.__invalid_premiumSubscribeButton,
                                        disabled: R,
                                        onClick: (e) => e.stopPropagation(),
                                        textOptions: { textOverride: es.intl.string(es.t.sEAnVF) },
                                        subscriptionTier: el.Si.TIER_2,
                                    }),
                                });
                            if (!W || C) return eo();
                            if (v)
                                return (0, r.jsx)(m.zxk, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(), D();
                                    },
                                    loading: V,
                                    text: es.intl.string(es.t.MAS7uL),
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
                                            page_category: i === er.AW.HOME || null == I ? void 0 : I.pageCategory,
                                            page_index:
                                                i === er.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                                            page_size: i === er.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                                            tile_type: u.Z[t.type],
                                            tile_position: String(null == I ? void 0 : I.tilePosition),
                                            cta_name: "claim premium product button",
                                        }),
                                            await (0, A.fK)(t.skuId),
                                            (0, ei.Z)({
                                                product: t,
                                                analyticsLocations: a,
                                                purchaseType: er.o8.PREMIUM_PURCHASE,
                                            });
                                    };
                                    return (0, r.jsx)(m.zxk, {
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
                                }
                                if ($)
                                    if (ee)
                                        return (0, r.jsx)(m.zxk, {
                                            variant: "primary",
                                            text: es.intl.format(es.t.kAgx5O, {
                                                orbPrice: X[0].amount,
                                                orbIconHook: () => (0, r.jsx)(O.Z, { className: ea.orbIconAligned }),
                                            }),
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    j.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                                        sku_id: t.skuId,
                                                        page_type: i,
                                                        page_section: null == I ? void 0 : I.pageSection,
                                                        page_category:
                                                            i === er.AW.HOME || null == I ? void 0 : I.pageCategory,
                                                        page_index:
                                                            i === er.AW.CATALOG
                                                                ? null == I
                                                                    ? void 0
                                                                    : I.pageIndex
                                                                : void 0,
                                                        page_size:
                                                            i === er.AW.CATALOG
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
                                                            selectedVariantIndex: l,
                                                        }),
                                                        onCheckoutSuccess: (e) => {
                                                            var i;
                                                            let { entitlements: r } = e;
                                                            (0, A.qg)({ variantsReturnStyle: c.v.VARIANTS_GROUP }),
                                                                (0, ei.Z)({
                                                                    product: t,
                                                                    analyticsLocations: a,
                                                                    itemConsumed:
                                                                        null == (i = r[0]) ? void 0 : i.consumed,
                                                                    purchaseType: er.o8.ORB,
                                                                });
                                                        },
                                                        analyticsLocations: a,
                                                    });
                                            },
                                            "aria-label": es.intl.formatToPlainString(es.t["fNG/09"], {
                                                orbPrice: X[0].amount,
                                            }),
                                            fullWidth: !0,
                                        });
                                    else return eo();
                                if (i === er.AW.ORBS)
                                    return (0, r.jsx)(m.zxk, {
                                        variant: "primary",
                                        onClick: (e) => {
                                            e.stopPropagation(), F(e);
                                        },
                                        text: es.intl.string(es.t.GpnHfH),
                                        fullWidth: !0,
                                    });
                                let e = q
                                    ? es.intl.formatToPlainString(es.t["5U5RBw"], { discountOfferAmount: U })
                                    : es.intl.formatToPlainString(es.t["cNSL/v"], { price: Z });
                                return (0, r.jsx)(m.zxk, {
                                    variant: "primary",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            j.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                                sku_id: t.skuId,
                                                page_type: i,
                                                page_section: null == I ? void 0 : I.pageSection,
                                                page_category: i === er.AW.HOME || null == I ? void 0 : I.pageCategory,
                                                page_index:
                                                    i === er.AW.CATALOG ? (null == I ? void 0 : I.pageIndex) : void 0,
                                                page_size:
                                                    i === er.AW.CATALOG ? (null == I ? void 0 : I.pageSize) : void 0,
                                                tile_type: u.Z[t.type],
                                                tile_position: String(null == I ? void 0 : I.tilePosition),
                                                cta_name: "buy button",
                                            }),
                                            (0, y.Z)({
                                                skuId: (0, Q.S)({
                                                    product: t,
                                                    selectedVariantIndex: l,
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
                        h || o.tq || J || !W || i === er.AW.ORBS
                            ? null
                            : k
                              ? (0, r.jsx)(m.hU, {
                                    variant: "primary",
                                    "aria-label": es.intl.string(es.t.SKNnqq),
                                    icon: m.tEF,
                                    onClick: (e) => {
                                        e.stopPropagation(), F(e);
                                    },
                                })
                              : (0, r.jsx)(S.k0, {
                                    newValue: { pageCategory: i === er.AW.HOME || null == I ? void 0 : I.pageCategory },
                                    children: (0, r.jsx)(M.Z, {
                                        primary: !0,
                                        product: t,
                                        selectedVariantIndex: l,
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
            ? n.memo(function (e) {
                  let {
                          product: t,
                          user: i,
                          category: l,
                          tab: o,
                          cardRef: c,
                          selectedProduct: g,
                          firstCollectibleItem: y,
                          selectedVariantIndex: P,
                          handleEntering: C,
                          handleLeaving: b,
                          previewingVariantIndex: O,
                          className: E,
                          _isInHeroBlock: A = !1,
                      } = e,
                      { analyticsLocations: T } = (0, x.ZP)([f.Z.COLLECTIBLES_SHOP_CARD]),
                      k = (0, S.sp)(),
                      w = (0, h.Z)(c),
                      [W, B] = n.useState(!1),
                      M = w || W,
                      G = (0, ee.To)(t),
                      z = (0, p.e7)([v.Z], () => v.Z.useReducedMotion),
                      U = I.ZP.canUseCollectibles(i),
                      K = n.useMemo(() => (0, N.BH)(t, U), [t, U]),
                      Q = (0, N.G1)(t),
                      X = (0, p.e7)([_.Z], () => (0, m.wjy)(_.Z.theme)),
                      Y = (0, N.Yq)(t.skuId),
                      J = l.skuId === d.T.ANIME_V3 && (0, N.WW)(t.skuId),
                      { hoverVariant: $ } = (0, L.E)("CollectiblesShopTallCard"),
                      { isPurchased: ei, isPartiallyOwnedBundle: el } = (0, Z.L)(g),
                      { isDisabled: ec } = (0, R.G)(g.skuId),
                      eg = null !== O ? O : P,
                      [em, ev] = n.useState(!1),
                      ef = n.useCallback(
                          function (e, t, n) {
                              let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                              return (0, a.EQ)(e.type)
                                  .with(u.Z.PROFILE_EFFECT, () =>
                                      (0, r.jsx)(ed, {
                                          isHighlighted: t,
                                          profileEffectId: e.id,
                                          isPurchased: n && !l,
                                      }),
                                  )
                                  .with(u.Z.AVATAR_DECORATION, () =>
                                      (0, r.jsx)(eu, {
                                          item: e,
                                          user: i,
                                          isHighlighted: t,
                                          isPurchased: n,
                                      }),
                                  )
                                  .with(u.Z.NAMEPLATE, () =>
                                      (0, r.jsx)(ep, {
                                          user: i,
                                          nameplate: e,
                                          isHighlighted: t,
                                          isPurchased: n,
                                      }),
                                  )
                                  .otherwise(() => null);
                          },
                          [i],
                      );
                  n.useEffect(() => {
                      let { current: e } = c;
                      if (null == e) return;
                      let t = () => B(!0),
                          i = (t) => {
                              e.contains(t.relatedTarget) || B(!1);
                          };
                      return (
                          e.addEventListener("focusin", t),
                          e.addEventListener("focusout", i),
                          e.blur(),
                          () => {
                              e.removeEventListener("focusin", t), e.removeEventListener("focusout", i);
                          }
                      );
                  }, [c]);
                  let ex = n.useRef(null),
                      { displayPrices: ey, isOrbExclusive: eP } = (0, et.oo)({
                          product: t,
                          isPremiumUser: U,
                          tab: o,
                      }),
                      eC = n.useCallback(
                          (e) => (i) => {
                              let r = (0, et.oQ)({ product: t });
                              (ex.current = i.currentTarget),
                                  j.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                                      sku_id: t.skuId,
                                      page_type: o,
                                      page_section: null == k ? void 0 : k.pageSection,
                                      page_category: o === er.AW.HOME ? void 0 : l.name,
                                      page_index: o === er.AW.CATALOG ? (null == k ? void 0 : k.pageIndex) : void 0,
                                      page_size: o === er.AW.CATALOG ? (null == k ? void 0 : k.pageSize) : void 0,
                                      tile_type: u.Z[t.type],
                                      tile_position: String(null == k ? void 0 : k.tilePosition),
                                      cta_name: null,
                                  }),
                                  (0, D.T)({
                                      product: t,
                                      category: l,
                                      shouldCheckoutWithOrbs: r,
                                      analyticsLocations: T,
                                      analyticsSource: e,
                                      returnRef: ex,
                                      tab: o,
                                  });
                          },
                          [t, l, o, T, k],
                      ),
                      e_ = eC(f.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === ey.length || ((0, N.x6)(t) && null != K && K.discountPercentage < 0)
                      ? null
                      : (0, r.jsx)(m.tEY, {
                            children: (0, r.jsxs)(m.kL8, {
                                className: s()(E, X ? ea.shopCardDark : ea.shopCard, {
                                    [ea.partiallyOwned]: el && !M,
                                    [ea.shopCardAnimation]: !z && $ !== L.D.NO_MOVEMENT,
                                    [X ? ea.shopCardDarkHighlighted : ea.shopCardHighlighted]: M,
                                }),
                                ref: c,
                                onClick: e_,
                                "aria-label": t.name,
                                children: [
                                    Q &&
                                        (0, r.jsx)(m.ua7, {
                                            tooltipContentClassName: ea.premiumWheelTooltipContent,
                                            color: m.ua7.Colors.PRIMARY,
                                            text: es.intl.string(es.t.nKdAlJ),
                                            children: (e) => {
                                                var t, i;
                                                return (0, r.jsx)(
                                                    m.IGR,
                                                    ((t = eo({}, e)),
                                                    (i = i =
                                                        {
                                                            className: ea.premiumWheelBadge,
                                                            text: (0, r.jsx)(m.SrA, {
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
                                    (0, r.jsx)(H.Z, {
                                        category: l,
                                        className: ea.limitedTimeBadge,
                                        display: H.k.CARD,
                                    }),
                                    el || ei || !Y
                                        ? eP
                                            ? (0, r.jsx)(m.IGR, {
                                                  text: es.intl.string(es.t["0TmQRE"]),
                                                  disableColor: !0,
                                                  className: ea.badge,
                                              })
                                            : J
                                              ? (0, r.jsx)(m.IGR, {
                                                    text: es.intl.string(es.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: ea.badge,
                                                })
                                              : null
                                        : (0, r.jsx)(m.IGR, {
                                              text: es.intl.string(es.t.y2b7CA),
                                              disableColor: !0,
                                              className: ea.badge,
                                          }),
                                    (0, r.jsx)("div", {
                                        className: ea.preview,
                                        children: (0, a.EQ)(t.type)
                                            .with(u.Z.PROFILE_EFFECT, u.Z.AVATAR_DECORATION, u.Z.NAMEPLATE, () =>
                                                ef(y, M, ei),
                                            )
                                            .with(u.Z.BUNDLE, () =>
                                                (0, r.jsx)(q.d, {
                                                    product: t,
                                                    user: i,
                                                    isPurchased: ei,
                                                    isHighlighted: M,
                                                }),
                                            )
                                            .with(u.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[eg];
                                                if (null == e) return null;
                                                let [i] = e.items;
                                                return ef(i, M, ei, em);
                                            })
                                            .with(u.Z.EXTERNAL_SKU, () =>
                                                (0, r.jsx)(V.b, {
                                                    product: t,
                                                    animationState: M ? "on" : "off",
                                                    className: ec || (ei && !M) ? ea.externalProductDimmed : void 0,
                                                }),
                                            )
                                            .otherwise(() => null),
                                    }),
                                    (() => {
                                        let e = ei ? m.sV5 : ec ? m.mBM : null;
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
                                            X ? ea.darkCardBackground : ea.lightCardBackground,
                                            { [ea.variantsGroup]: t.type === u.Z.VARIANTS_GROUP },
                                        ),
                                        children: [
                                            (0, r.jsx)(m.X6q, {
                                                variant: "text-lg/bold",
                                                className: ea.productName,
                                                children: G,
                                            }),
                                            t.type === u.Z.VARIANTS_GROUP
                                                ? (0, r.jsx)(F.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: O,
                                                          handleEntering: C,
                                                          handleLeaving: b,
                                                      },
                                                      selectedVariantIndex: P,
                                                      setIsHoveringOnSwitch: ev,
                                                      minimal: !M,
                                                      alternativeBackgroundColor:
                                                          (null == y ? void 0 : y.type) === u.Z.PROFILE_EFFECT,
                                                  })
                                                : null,
                                            (0, r.jsx)(eh, {
                                                product: t,
                                                tab: o,
                                                buildHandlePreviewClick: eC,
                                                selectedProduct: g,
                                                selectedVariantIndex: P,
                                                cardRef: c,
                                                analyticsLocations: T,
                                                isPremiumUser: U,
                                                isPremiumProduct: Q,
                                                isPartiallyOwnedBundle: el,
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
    ef = 12633 == i.j ? em : null;
