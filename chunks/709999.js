(i.d(t, {
    Z: () => eC,
    d: () => ep
}),
    i(388685),
    i(314940));
var r = i(255367),
    l = i(73800),
    a = i(120356),
    s = i.n(a),
    n = i(512722),
    o = i.n(n),
    d = i(278074),
    c = i(873546),
    u = i(180650),
    p = i(979554),
    h = i(399606),
    g = i(622535),
    m = i(481060),
    v = i(727637),
    x = i(607070),
    C = i(100527),
    f = i(906732),
    _ = i(333867),
    E = i(767714),
    O = i(876917),
    P = i(210887),
    b = i(822857),
    j = i(960919),
    y = i(275388),
    I = i(626135),
    A = i(74538),
    S = i(335131),
    k = i(381585),
    T = i(1870),
    N = i(429368),
    L = i(884697),
    w = i(664018),
    R = i(228624),
    Z = i(635552),
    W = i(290175),
    H = i(905357),
    M = i(724994),
    G = i(297651),
    B = i(390698),
    D = i(813083),
    z = i(680942),
    V = i(558060),
    U = i(237031),
    F = i(508925),
    q = i(306092),
    K = i(453713),
    Q = i(616066),
    X = i(216541),
    Y = i(22267),
    J = i(67409),
    $ = i(58201),
    ee = i(201964),
    et = i(361110),
    ei = i(956472),
    er = i(832149),
    el = i(215023),
    ea = i(981631),
    es = i(474936),
    en = i(388032),
    eo = i(33588);
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(i);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let ec = (e) => {
        let { profileEffectId: t, isHighlighted: i, isPurchased: l } = e;
        return (0, r.jsx)('div', {
            className: eo.profileEffectShopPreview,
            children: (0, r.jsx)(O.Z, {
                profileEffectId: t,
                isHovering: i,
                isPurchased: l && !i,
                removeSetHeight: !0
            })
        });
    },
    eu = (e) => {
        let { isHighlighted: t, isPurchased: i, user: l, item: a } = e;
        return (0, r.jsx)('div', {
            className: eo.avatarContainer,
            children: (0, r.jsx)(Q.R, {
                item: a,
                user: l,
                isPurchased: i,
                isHighlighted: t
            })
        });
    },
    ep = (e) => {
        let { showStatus: t, width: i, opacity: l } = e;
        return (0, r.jsxs)('div', {
            className: s()(eo.nameplatePreviewSampleItem, eo.placeholderItem),
            style: { opacity: l },
            children: [
                (0, r.jsx)(m.qEK, {
                    src: null,
                    size: m.EFr.SIZE_32,
                    status: t ? ea.Skl.ONLINE : void 0,
                    statusColor: 'var(--border-subtle)',
                    'aria-hidden': !0,
                    imageClassName: eo.nameplatePlaceholderAvatar
                }),
                (0, r.jsx)('div', {
                    className: eo.placeholderBar,
                    style: { maxWidth: null != i ? i : '100px' }
                })
            ]
        });
    },
    eh = (e) => {
        let { user: t, nameplate: i, isHighlighted: l, isPurchased: a } = e;
        return (0, r.jsx)('div', {
            className: eo.nameplatePreviewRootContainer,
            children: (0, r.jsxs)('div', {
                className: eo.nameplatePreviewList,
                children: [
                    (0, r.jsxs)('div', {
                        className: eo.fadeIn,
                        children: [
                            (0, r.jsx)(ep, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, r.jsx)(ep, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, r.jsx)(Y.Z, {
                        user: t,
                        nameplate: i,
                        className: eo.nameplatePreviewSampleItem,
                        isHighlighted: l,
                        showPlaceholderUser: !l,
                        showStatus: !0,
                        isPurchased: a
                    }),
                    (0, r.jsxs)('div', {
                        className: eo.fadeOut,
                        children: [
                            (0, r.jsx)(ep, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, r.jsx)(ep, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            })
                        ]
                    })
                ]
            })
        });
    },
    eg = (e) => {
        let { tab: t, selectedProduct: i, cardRef: l, children: a } = e,
            { handleCardVisibilityChange: s } = (0, G.E)(i.skuId, t === el.AW.CATALOG ? 'full' : t);
        return (0, r.jsx)(g.$, {
            innerRef: l,
            onChange: s,
            threshold: 0,
            children: a
        });
    },
    em =
        12633 == i.j
            ? l.memo(function (e) {
                  var { tab: t, product: i, onMount: a } = e,
                      s = (function (e, t) {
                          if (null == e) return {};
                          var i,
                              r,
                              l = (function (e, t) {
                                  if (null == e) return {};
                                  var i,
                                      r,
                                      l = {},
                                      a = Object.keys(e);
                                  for (r = 0; r < a.length; r++) ((i = a[r]), t.indexOf(i) >= 0 || (l[i] = e[i]));
                                  return l;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < a.length; r++) ((i = a[r]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]));
                          }
                          return l;
                      })(e, ['tab', 'product', 'onMount']);
                  let n = (0, h.e7)([T.Z], () => T.Z.purchases),
                      o = (0, N.o)(i, n),
                      d = (0, $.W)(i, o),
                      c = l.useRef(null),
                      { previewingVariantIndex: u, handleEntering: p, handleLeaving: g } = (0, et.f)(i),
                      m = (0, ee.o)(i, n, u);
                  return (
                      l.useEffect(() => {
                          null == a || a(c, i);
                      }, [a, i]),
                      (0, r.jsx)(eg, {
                          tab: t,
                          selectedProduct: d,
                          cardRef: c,
                          children: (0, r.jsx)(
                              ex,
                              ed(
                                  {
                                      tab: t,
                                      product: i,
                                      selectedVariantIndex: o,
                                      selectedProduct: d,
                                      cardRef: c,
                                      previewingVariantIndex: u,
                                      handleEntering: p,
                                      handleLeaving: g,
                                      firstCollectibleItem: m
                                  },
                                  s
                              )
                          )
                      })
                  );
              })
            : null;
function ev(e) {
    let { product: t, tab: i, selectedProduct: l, selectedVariantIndex: a, cardRef: s, analyticsLocations: n, buildHandlePreviewClick: o, isPremiumUser: d, isPremiumProduct: u, isPurchased: g, isPartiallyOwnedBundle: v, isDisabled: x, discount: f } = e,
        O = (0, k.sp)(),
        P = (0, L.rN)(t),
        [A, N] = (0, h.Wu)([T.Z], () => [T.Z.isClaiming === t.skuId, null != T.Z.isClaiming && T.Z.isClaiming !== t.skuId]),
        w = (0, R.hv)('CollectiblesShopTallCard'),
        W = (0, L.XM)(l, d, !1),
        H = (0, L.ne)({
            product: l,
            isPartiallyOwnedBundle: v,
            isPurchased: g
        }),
        { enabled: M } = (0, b.WX)({ location: 'collectibles_shop_tall_card' }),
        { handleUseNow: G, isApplying: D } = (0, Z.W)({ product: l }),
        U = o(C.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        {
            displayPrices: F,
            checkoutEligiblePrices: K,
            isOrbExclusive: Q,
            shouldCheckoutWithOrbs: X,
            hasSufficientOrbs: Y
        } = (0, ei.Ip)({
            product: t,
            isPremiumUser: d,
            tab: i
        });
    if (0 === F.length) return null;
    let $ = () =>
            (0, r.jsx)('div', {
                className: eo.hoverUpsellContainer,
                children: (0, r.jsx)(E.Z, {
                    fullWidth: !0,
                    className: eo.__invalid_premiumSubscribeButton,
                    disabled: N,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: en.intl.string(en.t.sEAnVF) },
                    subscriptionTier: es.Si.TIER_2
                })
            }),
        ee = () =>
            (0, r.jsx)(m.zxk, {
                variant: 'primary',
                onClick: (e) => {
                    (e.stopPropagation(), U(e));
                },
                text: en.intl.string(en.t.FdGl5O),
                fullWidth: !0
            }),
        et = () => {
            let e = () => {
                (I.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == O ? void 0 : O.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == O ? void 0 : O.pageSection,
                    page_category: i === el.AW.HOME || null == O ? void 0 : O.pageCategory,
                    page_index: i === el.AW.CATALOG ? (null == O ? void 0 : O.pageIndex) : void 0,
                    page_size: i === el.AW.CATALOG ? (null == O ? void 0 : O.pageSize) : void 0,
                    tile_type: p.Z[t.type],
                    tile_position: String(null == O ? void 0 : O.tilePosition),
                    cta_name: 'buy button'
                }),
                    (0, _.Z)({
                        skuId: (0, J.S)({
                            product: t,
                            selectedVariantIndex: a
                        }),
                        analyticsLocations: n,
                        returnRef: s,
                        variantsReturnStyle: w
                    }));
            };
            return (0, r.jsx)(m.zxk, {
                variant: 'primary',
                onClick: (t) => {
                    (t.stopPropagation(), e());
                },
                text: en.intl.formatToPlainString(en.t['cNSL/v'], { price: W }),
                fullWidth: !0
            });
        },
        ed = () => {
            let e = () => {
                (I.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == O ? void 0 : O.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == O ? void 0 : O.pageSection,
                    page_category: i === el.AW.HOME || null == O ? void 0 : O.pageCategory,
                    page_index: i === el.AW.CATALOG ? (null == O ? void 0 : O.pageIndex) : void 0,
                    page_size: i === el.AW.CATALOG ? (null == O ? void 0 : O.pageSize) : void 0,
                    tile_type: p.Z[t.type],
                    tile_position: String(null == O ? void 0 : O.tilePosition),
                    cta_name: 'claim with orbs button'
                }),
                    (0, y.q)({
                        skuId: (0, J.S)({
                            product: t,
                            selectedVariantIndex: a
                        }),
                        onCheckoutSuccess: (e) => {
                            var i;
                            let { entitlements: r } = e;
                            ((0, S.qg)({
                                variantsReturnStyle: w,
                                location: 'collectible_checkout_with_orb'
                            }),
                                (0, er.Z)({
                                    product: t,
                                    analyticsLocations: n,
                                    shouldCheckoutWithOrbs: !0,
                                    itemConsumed: null == (i = r[0]) ? void 0 : i.consumed,
                                    purchaseType: el.o8.ORB
                                }));
                        },
                        analyticsLocations: n
                    }));
            };
            return (0, r.jsx)(m.zxk, {
                variant: 'primary',
                text: en.intl.format(en.t.kAgx5O, {
                    orbPrice: K[0].amount,
                    orbIconHook: () => (0, r.jsx)(j.Z, { className: eo.orbIconAligned })
                }),
                onClick: (t) => {
                    (t.stopPropagation(), e());
                },
                'aria-label': en.intl.formatToPlainString(en.t['fNG/09'], { orbPrice: K[0].amount }),
                fullWidth: !0
            });
        },
        ec = () => {
            let e = async () => {
                (I.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == O ? void 0 : O.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == O ? void 0 : O.pageSection,
                    page_category: i === el.AW.HOME || null == O ? void 0 : O.pageCategory,
                    page_index: i === el.AW.CATALOG ? (null == O ? void 0 : O.pageIndex) : void 0,
                    page_size: i === el.AW.CATALOG ? (null == O ? void 0 : O.pageSize) : void 0,
                    tile_type: p.Z[t.type],
                    tile_position: String(null == O ? void 0 : O.tilePosition),
                    cta_name: 'claim premium product button'
                }),
                    await (0, S.fK)(t.skuId),
                    (0, er.Z)({
                        product: t,
                        analyticsLocations: n,
                        purchaseType: el.o8.PREMIUM_PURCHASE
                    }));
            };
            return (0, r.jsx)(m.zxk, {
                variant: 'primary',
                onClick: (t) => {
                    (t.stopPropagation(), e());
                },
                disabled: N,
                loading: A,
                loadingStartedLabel: en.intl.string(en.t['TYw+9v']),
                loadingFinishedLabel: en.intl.string(en.t.Pg1UPz),
                text: en.intl.string(en.t.zp6caG),
                fullWidth: !0
            });
        },
        eu = () =>
            (0, r.jsx)(m.zxk, {
                variant: 'primary',
                onClick: (e) => {
                    (e.stopPropagation(), G());
                },
                loading: D,
                text: en.intl.string(en.t.MAS7uL),
                fullWidth: !0
            }),
        ep = () =>
            (0, r.jsx)(m.zxk, {
                variant: 'primary',
                onClick: (e) => {
                    (e.stopPropagation(), U(e));
                },
                text: en.intl.string(en.t.GpnHfH),
                fullWidth: !0
            });
    return (0, r.jsxs)('div', {
        className: eo.detailsWrapper,
        children: [
            (0, r.jsx)('div', {
                className: eo.innerBlur,
                children: x
                    ? (0, r.jsx)(m.Text, {
                          tag: 'div',
                          variant: 'heading-md/semibold',
                          color: 'header-muted',
                          className: eo.priceTag,
                          children: en.intl.string(en.t.wu4gyc)
                      })
                    : g || v
                      ? (0, r.jsx)(B.U, {
                            className: eo.priceTag,
                            isPartiallyPurchased: v
                        })
                      : u
                        ? (0, r.jsx)(m.Text, {
                              variant: 'text-md/semibold',
                              className: eo.priceTag,
                              children: en.intl.string(en.t.rt69oq)
                          })
                        : M
                          ? (0, r.jsx)(q.e, {
                                displayPrices: F,
                                isPremiumUser: d,
                                discount: f,
                                hasSufficientOrbs: Y
                            })
                          : (0, r.jsx)(V.Z, {
                                product: l,
                                discount: f,
                                isPremiumUser: d,
                                className: eo.priceTag,
                                hideStrikethroughPrice: !0,
                                nitroIconType: 'default',
                                nitroIconSize: 'md'
                            })
            }),
            (0, r.jsx)('div', {
                className: eo.innerHover,
                children: (0, r.jsxs)('div', {
                    className: eo.buttonsContainer,
                    children: [
                        (() => {
                            if (u && !d && !P) return $();
                            if (!H || x) return ee();
                            if (g) return eu();
                            if (u) return ec();
                            if (X)
                                if (Y) return ed();
                                else return ee();
                            return i === el.AW.ORBS ? ep() : et();
                        })(),
                        u || c.tq || Q || !H || i === el.AW.ORBS
                            ? null
                            : P
                              ? (0, r.jsx)(m.hU, {
                                    variant: 'primary',
                                    'aria-label': en.intl.string(en.t.SKNnqq),
                                    icon: m.tEF,
                                    onClick: (e) => {
                                        (e.stopPropagation(), U(e));
                                    }
                                })
                              : (0, r.jsx)(k.k0, {
                                    newValue: { pageCategory: i === el.AW.HOME || null == O ? void 0 : O.pageCategory },
                                    children: (0, r.jsx)(z.Z, {
                                        product: t,
                                        selectedVariantIndex: a,
                                        returnRef: s,
                                        tooltipDelay: 250
                                    })
                                })
                    ]
                })
            })
        ]
    });
}
let ex =
        12633 == i.j
            ? l.memo(function (e) {
                  let { product: t, user: i, category: a, tab: n, cardRef: c, selectedProduct: g, firstCollectibleItem: _, selectedVariantIndex: E, handleEntering: O, handleLeaving: b, previewingVariantIndex: j, className: y } = e,
                      { analyticsLocations: S } = (0, f.ZP)([C.Z.COLLECTIBLES_SHOP_CARD]),
                      T = (0, k.sp)(),
                      N = (0, v.Z)(c),
                      [R, Z] = l.useState(!1),
                      G = N || R,
                      B = (0, H.T)(t),
                      z = (0, h.e7)([x.Z], () => x.Z.useReducedMotion),
                      V = A.ZP.canUseCollectibles(i),
                      q = l.useMemo(() => (0, L.BH)(t, V), [t, V]),
                      Q = (0, L.G1)(t),
                      Y = (0, h.e7)([P.Z], () => (0, m.wjy)(P.Z.theme)),
                      J = (0, L.Yq)(t.skuId),
                      $ = a.skuId === u.T.ANIME_V3 && (0, L.WW)(t.skuId),
                      { hoverVariant: ee } = (0, w.E)('CollectiblesShopTallCard'),
                      { isPurchased: et, isPartiallyOwnedBundle: er } = (0, M.L)(g),
                      { isDisabled: es } = (0, W.G)(g.skuId),
                      ep = null !== j ? j : E,
                      [eg, em] = l.useState(!1);
                  l.useEffect(() => {
                      let { current: e } = c;
                      if (null == e) return;
                      let t = () => Z(!0),
                          i = (t) => {
                              e.contains(t.relatedTarget) || Z(!1);
                          };
                      return (
                          e.addEventListener('focusin', t),
                          e.addEventListener('focusout', i),
                          e.blur(),
                          () => {
                              (e.removeEventListener('focusin', t), e.removeEventListener('focusout', i));
                          }
                      );
                  }, [c]);
                  let ex = l.useRef(null),
                      { displayPrices: eC, isOrbExclusive: ef } = (0, ei.oo)({
                          product: t,
                          isPremiumUser: V,
                          tab: n
                      }),
                      e_ = l.useCallback(
                          (e) => (i) => {
                              let r = (0, ei.oQ)({ product: t });
                              ((ex.current = i.currentTarget),
                                  I.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                                      sku_id: t.skuId,
                                      page_type: n,
                                      page_section: null == T ? void 0 : T.pageSection,
                                      page_category: n === el.AW.HOME ? void 0 : a.name,
                                      page_index: n === el.AW.CATALOG ? (null == T ? void 0 : T.pageIndex) : void 0,
                                      page_size: n === el.AW.CATALOG ? (null == T ? void 0 : T.pageSize) : void 0,
                                      tile_type: p.Z[t.type],
                                      tile_position: String(null == T ? void 0 : T.tilePosition),
                                      cta_name: null
                                  }),
                                  (0, U.T)({
                                      product: t,
                                      category: a,
                                      shouldCheckoutWithOrbs: r,
                                      analyticsLocations: S,
                                      analyticsSource: e,
                                      returnRef: ex,
                                      tab: n
                                  }));
                          },
                          [t, a, n, S, T]
                      ),
                      eE = e_(C.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === eC.length || ((0, L.x6)(t) && null != q && q.discountPercentage < 0)
                      ? null
                      : (0, r.jsx)(m.tEY, {
                            children: (0, r.jsxs)(m.kL8, {
                                className: s()(y, Y ? eo.shopCardDark : eo.shopCard, {
                                    [eo.partiallyOwned]: er && !G,
                                    [eo.shopCardAnimation]: !z && ee !== w.D.NO_MOVEMENT,
                                    [Y ? eo.shopCardDarkHighlighted : eo.shopCardHighlighted]: G
                                }),
                                ref: c,
                                onClick: eE,
                                'aria-label': t.name,
                                children: [
                                    Q &&
                                        (0, r.jsx)(m.ua7, {
                                            tooltipContentClassName: eo.premiumWheelTooltipContent,
                                            color: m.ua7.Colors.PRIMARY,
                                            text: en.intl.string(en.t.nKdAlJ),
                                            children: (e) => {
                                                var t, i;
                                                return (0, r.jsx)(
                                                    m.IGR,
                                                    ((t = ed({}, e)),
                                                    (i = i =
                                                        {
                                                            className: eo.premiumWheelBadge,
                                                            text: (0, r.jsx)(m.SrA, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: eo.premiumWheel
                                                            })
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                                        : (function (e, t) {
                                                              var i = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  i.push.apply(i, r);
                                                              }
                                                              return i;
                                                          })(Object(i)).forEach(function (e) {
                                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                                          }),
                                                    t)
                                                );
                                            }
                                        }),
                                    (0, r.jsx)(D.Z, {
                                        category: a,
                                        className: eo.limitedTimeBadge,
                                        display: 'card'
                                    }),
                                    er || et || !J
                                        ? ef
                                            ? (0, r.jsx)(m.IGR, {
                                                  text: en.intl.string(en.t['0TmQRE']),
                                                  disableColor: !0,
                                                  className: eo.badge
                                              })
                                            : $
                                              ? (0, r.jsx)(m.IGR, {
                                                    text: en.intl.string(en.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: eo.badge
                                                })
                                              : null
                                        : (0, r.jsx)(m.IGR, {
                                              text: en.intl.string(en.t.y2b7CA),
                                              disableColor: !0,
                                              className: eo.badge
                                          }),
                                    (0, r.jsx)('div', {
                                        className: eo.preview,
                                        children: (0, d.EQ)(t.type)
                                            .with(p.Z.PROFILE_EFFECT, () =>
                                                (0, r.jsx)(ec, {
                                                    isHighlighted: G,
                                                    profileEffectId: _.id,
                                                    isPurchased: et
                                                })
                                            )
                                            .with(
                                                p.Z.AVATAR_DECORATION,
                                                () => (
                                                    o()(_.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                    (0, r.jsx)(eu, {
                                                        item: _,
                                                        user: i,
                                                        isHighlighted: G,
                                                        isPurchased: et
                                                    })
                                                )
                                            )
                                            .with(p.Z.NAMEPLATE, () =>
                                                (0, r.jsx)(eh, {
                                                    user: i,
                                                    nameplate: _,
                                                    isHighlighted: G,
                                                    isPurchased: et
                                                })
                                            )
                                            .with(p.Z.BUNDLE, () =>
                                                (0, r.jsx)(X.d, {
                                                    product: t,
                                                    user: i,
                                                    isPurchased: et,
                                                    isHighlighted: G
                                                })
                                            )
                                            .with(p.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[ep];
                                                return null == e
                                                    ? null
                                                    : (0, d.EQ)(e.type)
                                                          .with(p.Z.PROFILE_EFFECT, () => {
                                                              let [t] = e.items;
                                                              return (0, r.jsx)(ec, {
                                                                  isHighlighted: G,
                                                                  profileEffectId: t.id,
                                                                  isPurchased: et && !eg
                                                              });
                                                          })
                                                          .with(p.Z.AVATAR_DECORATION, () => {
                                                              let [t] = e.items;
                                                              return (
                                                                  o()(t.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                  (0, r.jsx)(eu, {
                                                                      item: t,
                                                                      user: i,
                                                                      isHighlighted: G,
                                                                      isPurchased: et
                                                                  })
                                                              );
                                                          })
                                                          .with(p.Z.NAMEPLATE, () => {
                                                              let [t] = e.items;
                                                              return (0, r.jsx)(eh, {
                                                                  user: i,
                                                                  nameplate: t,
                                                                  isHighlighted: G,
                                                                  isPurchased: et
                                                              });
                                                          })
                                                          .otherwise(() => null);
                                            })
                                            .with(p.Z.EXTERNAL_SKU, () =>
                                                (0, r.jsx)(F.b, {
                                                    product: t,
                                                    animationState: G ? 'on' : 'off',
                                                    className: es || (et && !G) ? eo.externalProductDimmed : void 0
                                                })
                                            )
                                            .otherwise(() => null)
                                    }),
                                    (() => {
                                        let e = et ? m.sV5 : es ? m.mBM : null;
                                        return null == e
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: eo.cardStateIconWrapper,
                                                  children: (0, r.jsx)(e, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: s()(eo.cardStateIcon, { [eo.checkmark]: et })
                                                  })
                                              });
                                    })(),
                                    (0, r.jsxs)('div', {
                                        className: s()(eo.cardText, Y ? eo.darkCardBackground : eo.lightCardBackground, { [eo.variantsGroup]: t.type === p.Z.VARIANTS_GROUP }),
                                        children: [
                                            (0, r.jsx)(m.X6q, {
                                                variant: 'text-lg/bold',
                                                className: eo.productName,
                                                children: B
                                            }),
                                            t.type === p.Z.VARIANTS_GROUP
                                                ? (0, r.jsx)(K.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: j,
                                                          handleEntering: O,
                                                          handleLeaving: b
                                                      },
                                                      selectedVariantIndex: E,
                                                      setIsHoveringOnSwitch: em,
                                                      minimal: !G,
                                                      alternativeBackgroundColor: (null == _ ? void 0 : _.type) === p.Z.PROFILE_EFFECT
                                                  })
                                                : null,
                                            (0, r.jsx)(ev, {
                                                product: t,
                                                tab: n,
                                                buildHandlePreviewClick: e_,
                                                selectedProduct: g,
                                                selectedVariantIndex: E,
                                                cardRef: c,
                                                analyticsLocations: S,
                                                isPremiumUser: V,
                                                isPremiumProduct: Q,
                                                isPartiallyOwnedBundle: er,
                                                isPurchased: et,
                                                isDisabled: es,
                                                discount: q
                                            })
                                        ]
                                    })
                                ]
                            })
                        });
              })
            : null,
    eC = 12633 == i.j ? em : null;
