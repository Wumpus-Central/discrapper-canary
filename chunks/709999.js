(i.d(t, {
    Z: () => eC,
    d: () => eh
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
    f = i(100527),
    C = i(906732),
    _ = i(333867),
    O = i(767714),
    E = i(876917),
    P = i(210887),
    b = i(822857),
    y = i(960919),
    j = i(275388),
    A = i(626135),
    I = i(74538),
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
    B = i(297651),
    G = i(390698),
    D = i(813083),
    z = i(680942),
    V = i(558060),
    U = i(237031),
    F = i(262786),
    q = i(508925),
    K = i(306092),
    Q = i(453713),
    X = i(616066),
    Y = i(216541),
    J = i(22267),
    $ = i(67409),
    ee = i(58201),
    et = i(201964),
    ei = i(361110),
    er = i(956472),
    el = i(832149),
    ea = i(215023),
    es = i(981631),
    en = i(474936),
    eo = i(388032),
    ed = i(33588);
function ec(e) {
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
let eu = (e) => {
        let { profileEffectId: t, isHighlighted: i, isPurchased: l } = e;
        return (0, r.jsx)('div', {
            className: ed.profileEffectShopPreview,
            children: (0, r.jsx)(E.Z, {
                profileEffectId: t,
                isHovering: i,
                isPurchased: l && !i,
                removeSetHeight: !0
            })
        });
    },
    ep = (e) => {
        let { isHighlighted: t, isPurchased: i, user: l, item: a } = e;
        return (0, r.jsx)('div', {
            className: ed.avatarContainer,
            children: (0, r.jsx)(X.R, {
                item: a,
                user: l,
                isPurchased: i,
                isHighlighted: t
            })
        });
    },
    eh = (e) => {
        let { showStatus: t, width: i, opacity: l } = e;
        return (0, r.jsxs)('div', {
            className: s()(ed.nameplatePreviewSampleItem, ed.placeholderItem),
            style: { opacity: l },
            children: [
                (0, r.jsx)(m.qEK, {
                    src: null,
                    size: m.EFr.SIZE_32,
                    status: t ? es.Skl.ONLINE : void 0,
                    statusColor: 'var(--border-subtle)',
                    'aria-hidden': !0,
                    imageClassName: ed.nameplatePlaceholderAvatar
                }),
                (0, r.jsx)('div', {
                    className: ed.placeholderBar,
                    style: { maxWidth: null != i ? i : '100px' }
                })
            ]
        });
    },
    eg = (e) => {
        let { user: t, nameplate: i, isHighlighted: l, isPurchased: a } = e;
        return (0, r.jsx)('div', {
            className: ed.nameplatePreviewRootContainer,
            children: (0, r.jsxs)('div', {
                className: ed.nameplatePreviewList,
                children: [
                    (0, r.jsxs)('div', {
                        className: ed.fadeIn,
                        children: [
                            (0, r.jsx)(eh, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, r.jsx)(eh, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, r.jsx)(J.Z, {
                        user: t,
                        nameplate: i,
                        className: ed.nameplatePreviewSampleItem,
                        isHighlighted: l,
                        showPlaceholderUser: !l,
                        showStatus: !0,
                        isPurchased: a
                    }),
                    (0, r.jsxs)('div', {
                        className: ed.fadeOut,
                        children: [
                            (0, r.jsx)(eh, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, r.jsx)(eh, {
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
    em = (e) => {
        let { tab: t, selectedProduct: i, cardRef: l, children: a } = e,
            { handleCardVisibilityChange: s } = (0, B.E)(i.skuId, t === ea.AW.CATALOG ? 'full' : t);
        return (0, r.jsx)(g.$, {
            innerRef: l,
            onChange: s,
            threshold: 0,
            children: a
        });
    },
    ev =
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
                      d = (0, ee.W)(i, o),
                      c = l.useRef(null),
                      { previewingVariantIndex: u, handleEntering: p, handleLeaving: g } = (0, ei.f)(i),
                      m = (0, et.o)(i, n, u);
                  return (
                      l.useEffect(() => {
                          null == a || a(c, i);
                      }, [a, i]),
                      (0, r.jsx)(em, {
                          tab: t,
                          selectedProduct: d,
                          cardRef: c,
                          children: (0, r.jsx)(
                              ef,
                              ec(
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
function ex(e) {
    let { product: t, tab: i, selectedProduct: l, selectedVariantIndex: a, cardRef: s, analyticsLocations: n, buildHandlePreviewClick: o, isPremiumUser: d, isPremiumProduct: u, isPurchased: g, isPartiallyOwnedBundle: v, isDisabled: x, discount: C } = e,
        E = (0, k.sp)(),
        P = (0, L.rN)(t),
        [I, N] = (0, h.Wu)([T.Z], () => [T.Z.isClaiming === t.skuId, null != T.Z.isClaiming && T.Z.isClaiming !== t.skuId]),
        w = (0, R.hv)('CollectiblesShopTallCard'),
        W = (0, L.XM)(l, d, !1),
        H = (0, L.ne)({
            product: l,
            isPartiallyOwnedBundle: v,
            isPurchased: g
        }),
        { enabled: M } = (0, b.WX)({ location: 'collectibles_shop_tall_card' }),
        { handleUseNow: B, isApplying: D } = (0, Z.W)({ product: l }),
        U = o(f.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        q = (0, F._)(t.eligibleOffers),
        Q = null != q,
        {
            displayPrices: X,
            checkoutEligiblePrices: Y,
            isOrbExclusive: J,
            shouldCheckoutWithOrbs: ee,
            hasSufficientOrbs: et
        } = (0, er.Ip)({
            product: t,
            isPremiumUser: d,
            tab: i,
            hasDiscountOffer: Q
        });
    if (0 === X.length) return null;
    let ei = () =>
            (0, r.jsx)('div', {
                className: ed.hoverUpsellContainer,
                children: (0, r.jsx)(O.Z, {
                    fullWidth: !0,
                    className: ed.__invalid_premiumSubscribeButton,
                    disabled: N,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: eo.intl.string(eo.t.sEAnVF) },
                    subscriptionTier: en.Si.TIER_2
                })
            }),
        ec = () =>
            (0, r.jsx)(m.zxk, {
                variant: 'primary',
                onClick: (e) => {
                    (e.stopPropagation(), U(e));
                },
                text: eo.intl.string(eo.t.FdGl5O),
                fullWidth: !0
            }),
        eu = () => {
            let e = () => {
                    (A.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                        sku_id: t.skuId,
                        page_type: i,
                        page_section: null == E ? void 0 : E.pageSection,
                        page_category: i === ea.AW.HOME || null == E ? void 0 : E.pageCategory,
                        page_index: i === ea.AW.CATALOG ? (null == E ? void 0 : E.pageIndex) : void 0,
                        page_size: i === ea.AW.CATALOG ? (null == E ? void 0 : E.pageSize) : void 0,
                        tile_type: p.Z[t.type],
                        tile_position: String(null == E ? void 0 : E.tilePosition),
                        cta_name: 'buy button'
                    }),
                        (0, _.Z)({
                            skuId: (0, $.S)({
                                product: t,
                                selectedVariantIndex: a
                            }),
                            analyticsLocations: n,
                            returnRef: s,
                            variantsReturnStyle: w
                        }));
                },
                l = Q ? eo.intl.formatToPlainString(eo.t['5U5RBw'], { discountOfferAmount: q }) : eo.intl.formatToPlainString(eo.t['cNSL/v'], { price: W });
            return (0, r.jsx)(m.zxk, {
                variant: 'primary',
                onClick: (t) => {
                    (t.stopPropagation(), e());
                },
                text: l,
                fullWidth: !0
            });
        },
        ep = () => {
            let e = () => {
                (A.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == E ? void 0 : E.pageSection,
                    page_category: i === ea.AW.HOME || null == E ? void 0 : E.pageCategory,
                    page_index: i === ea.AW.CATALOG ? (null == E ? void 0 : E.pageIndex) : void 0,
                    page_size: i === ea.AW.CATALOG ? (null == E ? void 0 : E.pageSize) : void 0,
                    tile_type: p.Z[t.type],
                    tile_position: String(null == E ? void 0 : E.tilePosition),
                    cta_name: 'claim with orbs button'
                }),
                    (0, j.q)({
                        skuId: (0, $.S)({
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
                                (0, el.Z)({
                                    product: t,
                                    analyticsLocations: n,
                                    shouldCheckoutWithOrbs: !0,
                                    itemConsumed: null == (i = r[0]) ? void 0 : i.consumed,
                                    purchaseType: ea.o8.ORB
                                }));
                        },
                        analyticsLocations: n
                    }));
            };
            return (0, r.jsx)(m.zxk, {
                variant: 'primary',
                text: eo.intl.format(eo.t.kAgx5O, {
                    orbPrice: Y[0].amount,
                    orbIconHook: () => (0, r.jsx)(y.Z, { className: ed.orbIconAligned })
                }),
                onClick: (t) => {
                    (t.stopPropagation(), e());
                },
                'aria-label': eo.intl.formatToPlainString(eo.t['fNG/09'], { orbPrice: Y[0].amount }),
                fullWidth: !0
            });
        },
        eh = () => {
            let e = async () => {
                (A.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == E ? void 0 : E.pageSection,
                    page_category: i === ea.AW.HOME || null == E ? void 0 : E.pageCategory,
                    page_index: i === ea.AW.CATALOG ? (null == E ? void 0 : E.pageIndex) : void 0,
                    page_size: i === ea.AW.CATALOG ? (null == E ? void 0 : E.pageSize) : void 0,
                    tile_type: p.Z[t.type],
                    tile_position: String(null == E ? void 0 : E.tilePosition),
                    cta_name: 'claim premium product button'
                }),
                    await (0, S.fK)(t.skuId),
                    (0, el.Z)({
                        product: t,
                        analyticsLocations: n,
                        purchaseType: ea.o8.PREMIUM_PURCHASE
                    }));
            };
            return (0, r.jsx)(m.zxk, {
                variant: 'primary',
                onClick: (t) => {
                    (t.stopPropagation(), e());
                },
                disabled: N,
                loading: I,
                loadingStartedLabel: eo.intl.string(eo.t['TYw+9v']),
                loadingFinishedLabel: eo.intl.string(eo.t.Pg1UPz),
                text: eo.intl.string(eo.t.zp6caG),
                fullWidth: !0
            });
        },
        eg = () =>
            (0, r.jsx)(m.zxk, {
                variant: 'primary',
                onClick: (e) => {
                    (e.stopPropagation(), B());
                },
                loading: D,
                text: eo.intl.string(eo.t.MAS7uL),
                fullWidth: !0
            }),
        em = () =>
            (0, r.jsx)(m.zxk, {
                variant: 'primary',
                onClick: (e) => {
                    (e.stopPropagation(), U(e));
                },
                text: eo.intl.string(eo.t.GpnHfH),
                fullWidth: !0
            });
    return (0, r.jsxs)('div', {
        className: ed.detailsWrapper,
        children: [
            (0, r.jsx)('div', {
                className: ed.innerBlur,
                children: x
                    ? (0, r.jsx)(m.Text, {
                          tag: 'div',
                          variant: 'heading-md/semibold',
                          color: 'header-muted',
                          className: ed.priceTag,
                          children: eo.intl.string(eo.t.wu4gyc)
                      })
                    : g || v
                      ? (0, r.jsx)(G.U, {
                            className: ed.priceTag,
                            isPartiallyPurchased: v
                        })
                      : u
                        ? (0, r.jsx)(m.Text, {
                              variant: 'text-md/semibold',
                              className: ed.priceTag,
                              children: eo.intl.string(eo.t.rt69oq)
                          })
                        : M
                          ? (0, r.jsx)(K.e, {
                                displayPrices: X,
                                isPremiumUser: d,
                                discount: C,
                                hasSufficientOrbs: et,
                                discountOfferAmount: q
                            })
                          : (0, r.jsx)(V.Z, {
                                product: l,
                                discount: C,
                                isPremiumUser: d,
                                className: ed.priceTag,
                                hideStrikethroughPrice: !0,
                                nitroIconType: 'default',
                                nitroIconSize: 'md',
                                discountOfferAmount: q
                            })
            }),
            (0, r.jsx)('div', {
                className: ed.innerHover,
                children: (0, r.jsxs)('div', {
                    className: ed.buttonsContainer,
                    children: [
                        (() => {
                            if (u && !d && !P) return ei();
                            if (!H || x) return ec();
                            if (g) return eg();
                            if (u) return eh();
                            if (ee)
                                if (et) return ep();
                                else return ec();
                            return i === ea.AW.ORBS ? em() : eu();
                        })(),
                        u || c.tq || J || !H || i === ea.AW.ORBS
                            ? null
                            : P
                              ? (0, r.jsx)(m.hU, {
                                    variant: 'primary',
                                    'aria-label': eo.intl.string(eo.t.SKNnqq),
                                    icon: m.tEF,
                                    onClick: (e) => {
                                        (e.stopPropagation(), U(e));
                                    }
                                })
                              : (0, r.jsx)(k.k0, {
                                    newValue: { pageCategory: i === ea.AW.HOME || null == E ? void 0 : E.pageCategory },
                                    children: (0, r.jsx)(z.Z, {
                                        primary: !0,
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
let ef =
        12633 == i.j
            ? l.memo(function (e) {
                  let { product: t, user: i, category: a, tab: n, cardRef: c, selectedProduct: g, firstCollectibleItem: _, selectedVariantIndex: O, handleEntering: E, handleLeaving: b, previewingVariantIndex: y, className: j } = e,
                      { analyticsLocations: S } = (0, C.ZP)([f.Z.COLLECTIBLES_SHOP_CARD]),
                      T = (0, k.sp)(),
                      N = (0, v.Z)(c),
                      [R, Z] = l.useState(!1),
                      B = N || R,
                      G = (0, H.T)(t),
                      z = (0, h.e7)([x.Z], () => x.Z.useReducedMotion),
                      V = I.ZP.canUseCollectibles(i),
                      F = l.useMemo(() => (0, L.BH)(t, V), [t, V]),
                      K = (0, L.G1)(t),
                      X = (0, h.e7)([P.Z], () => (0, m.wjy)(P.Z.theme)),
                      J = (0, L.Yq)(t.skuId),
                      $ = a.skuId === u.T.ANIME_V3 && (0, L.WW)(t.skuId),
                      { hoverVariant: ee } = (0, w.E)('CollectiblesShopTallCard'),
                      { isPurchased: et, isPartiallyOwnedBundle: ei } = (0, M.L)(g),
                      { isDisabled: el } = (0, W.G)(g.skuId),
                      en = null !== y ? y : O,
                      [eh, em] = l.useState(!1);
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
                  let ev = l.useRef(null),
                      { displayPrices: ef, isOrbExclusive: eC } = (0, er.oo)({
                          product: t,
                          isPremiumUser: V,
                          tab: n
                      }),
                      e_ = l.useCallback(
                          (e) => (i) => {
                              let r = (0, er.oQ)({ product: t });
                              ((ev.current = i.currentTarget),
                                  A.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                                      sku_id: t.skuId,
                                      page_type: n,
                                      page_section: null == T ? void 0 : T.pageSection,
                                      page_category: n === ea.AW.HOME ? void 0 : a.name,
                                      page_index: n === ea.AW.CATALOG ? (null == T ? void 0 : T.pageIndex) : void 0,
                                      page_size: n === ea.AW.CATALOG ? (null == T ? void 0 : T.pageSize) : void 0,
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
                                      returnRef: ev,
                                      tab: n
                                  }));
                          },
                          [t, a, n, S, T]
                      ),
                      eO = e_(f.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === ef.length || ((0, L.x6)(t) && null != F && F.discountPercentage < 0)
                      ? null
                      : (0, r.jsx)(m.tEY, {
                            children: (0, r.jsxs)(m.kL8, {
                                className: s()(j, X ? ed.shopCardDark : ed.shopCard, {
                                    [ed.partiallyOwned]: ei && !B,
                                    [ed.shopCardAnimation]: !z && ee !== w.D.NO_MOVEMENT,
                                    [X ? ed.shopCardDarkHighlighted : ed.shopCardHighlighted]: B
                                }),
                                ref: c,
                                onClick: eO,
                                'aria-label': t.name,
                                children: [
                                    K &&
                                        (0, r.jsx)(m.ua7, {
                                            tooltipContentClassName: ed.premiumWheelTooltipContent,
                                            color: m.ua7.Colors.PRIMARY,
                                            text: eo.intl.string(eo.t.nKdAlJ),
                                            children: (e) => {
                                                var t, i;
                                                return (0, r.jsx)(
                                                    m.IGR,
                                                    ((t = ec({}, e)),
                                                    (i = i =
                                                        {
                                                            className: ed.premiumWheelBadge,
                                                            text: (0, r.jsx)(m.SrA, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: ed.premiumWheel
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
                                        className: ed.limitedTimeBadge,
                                        display: 'card'
                                    }),
                                    ei || et || !J
                                        ? eC
                                            ? (0, r.jsx)(m.IGR, {
                                                  text: eo.intl.string(eo.t['0TmQRE']),
                                                  disableColor: !0,
                                                  className: ed.badge
                                              })
                                            : $
                                              ? (0, r.jsx)(m.IGR, {
                                                    text: eo.intl.string(eo.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: ed.badge
                                                })
                                              : null
                                        : (0, r.jsx)(m.IGR, {
                                              text: eo.intl.string(eo.t.y2b7CA),
                                              disableColor: !0,
                                              className: ed.badge
                                          }),
                                    (0, r.jsx)('div', {
                                        className: ed.preview,
                                        children: (0, d.EQ)(t.type)
                                            .with(p.Z.PROFILE_EFFECT, () =>
                                                (0, r.jsx)(eu, {
                                                    isHighlighted: B,
                                                    profileEffectId: _.id,
                                                    isPurchased: et
                                                })
                                            )
                                            .with(
                                                p.Z.AVATAR_DECORATION,
                                                () => (
                                                    o()(_.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                    (0, r.jsx)(ep, {
                                                        item: _,
                                                        user: i,
                                                        isHighlighted: B,
                                                        isPurchased: et
                                                    })
                                                )
                                            )
                                            .with(p.Z.NAMEPLATE, () =>
                                                (0, r.jsx)(eg, {
                                                    user: i,
                                                    nameplate: _,
                                                    isHighlighted: B,
                                                    isPurchased: et
                                                })
                                            )
                                            .with(p.Z.BUNDLE, () =>
                                                (0, r.jsx)(Y.d, {
                                                    product: t,
                                                    user: i,
                                                    isPurchased: et,
                                                    isHighlighted: B
                                                })
                                            )
                                            .with(p.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[en];
                                                return null == e
                                                    ? null
                                                    : (0, d.EQ)(e.type)
                                                          .with(p.Z.PROFILE_EFFECT, () => {
                                                              let [t] = e.items;
                                                              return (0, r.jsx)(eu, {
                                                                  isHighlighted: B,
                                                                  profileEffectId: t.id,
                                                                  isPurchased: et && !eh
                                                              });
                                                          })
                                                          .with(p.Z.AVATAR_DECORATION, () => {
                                                              let [t] = e.items;
                                                              return (
                                                                  o()(t.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                  (0, r.jsx)(ep, {
                                                                      item: t,
                                                                      user: i,
                                                                      isHighlighted: B,
                                                                      isPurchased: et
                                                                  })
                                                              );
                                                          })
                                                          .with(p.Z.NAMEPLATE, () => {
                                                              let [t] = e.items;
                                                              return (0, r.jsx)(eg, {
                                                                  user: i,
                                                                  nameplate: t,
                                                                  isHighlighted: B,
                                                                  isPurchased: et
                                                              });
                                                          })
                                                          .otherwise(() => null);
                                            })
                                            .with(p.Z.EXTERNAL_SKU, () =>
                                                (0, r.jsx)(q.b, {
                                                    product: t,
                                                    animationState: B ? 'on' : 'off',
                                                    className: el || (et && !B) ? ed.externalProductDimmed : void 0
                                                })
                                            )
                                            .otherwise(() => null)
                                    }),
                                    (() => {
                                        let e = et ? m.sV5 : el ? m.mBM : null;
                                        return null == e
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: ed.cardStateIconWrapper,
                                                  children: (0, r.jsx)(e, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: s()(ed.cardStateIcon, { [ed.checkmark]: et })
                                                  })
                                              });
                                    })(),
                                    (0, r.jsxs)('div', {
                                        className: s()(ed.cardText, X ? ed.darkCardBackground : ed.lightCardBackground, { [ed.variantsGroup]: t.type === p.Z.VARIANTS_GROUP }),
                                        children: [
                                            (0, r.jsx)(m.X6q, {
                                                variant: 'text-lg/bold',
                                                className: ed.productName,
                                                children: G
                                            }),
                                            t.type === p.Z.VARIANTS_GROUP
                                                ? (0, r.jsx)(Q.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: y,
                                                          handleEntering: E,
                                                          handleLeaving: b
                                                      },
                                                      selectedVariantIndex: O,
                                                      setIsHoveringOnSwitch: em,
                                                      minimal: !B,
                                                      alternativeBackgroundColor: (null == _ ? void 0 : _.type) === p.Z.PROFILE_EFFECT
                                                  })
                                                : null,
                                            (0, r.jsx)(ex, {
                                                product: t,
                                                tab: n,
                                                buildHandlePreviewClick: e_,
                                                selectedProduct: g,
                                                selectedVariantIndex: O,
                                                cardRef: c,
                                                analyticsLocations: S,
                                                isPremiumUser: V,
                                                isPremiumProduct: K,
                                                isPartiallyOwnedBundle: ei,
                                                isPurchased: et,
                                                isDisabled: el,
                                                discount: F
                                            })
                                        ]
                                    })
                                ]
                            })
                        });
              })
            : null,
    eC = 12633 == i.j ? ev : null;
