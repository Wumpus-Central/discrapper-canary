(i.d(t, {
    Z: () => ey,
    d: () => eg
}),
    i(388685),
    i(314940));
var r = i(255367),
    l = i(73800),
    s = i(120356),
    n = i.n(s),
    a = i(512722),
    o = i.n(a),
    d = i(278074),
    u = i(873546),
    c = i(180650),
    p = i(979554),
    g = i(399606),
    h = i(622535),
    m = i(481060),
    v = i(727637),
    f = i(607070),
    x = i(100527),
    y = i(906732),
    C = i(333867),
    P = i(767714),
    _ = i(876917),
    b = i(210887),
    O = i(822857),
    E = i(960919),
    j = i(275388),
    A = i(626135),
    I = i(74538),
    T = i(335131),
    S = i(381585),
    k = i(1870),
    N = i(429368),
    w = i(884697),
    L = i(664018),
    R = i(228624),
    Z = i(635552),
    W = i(290175),
    H = i(905357),
    B = i(724994),
    M = i(297651),
    D = i(390698),
    G = i(813083),
    V = i(680942),
    z = i(558060),
    F = i(237031),
    U = i(262786),
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
    es = i(215023),
    en = i(981631),
    ea = i(474936),
    eo = i(388032),
    ed = i(33588);
function eu(e) {
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
            className: ed.profileEffectShopPreview,
            children: (0, r.jsx)(_.Z, {
                profileEffectId: t,
                isHovering: i,
                isPurchased: l && !i,
                removeSetHeight: !0
            })
        });
    },
    ep = (e) => {
        let { isHighlighted: t, isPurchased: i, user: l, item: s } = e;
        return (0, r.jsx)('div', {
            className: ed.avatarContainer,
            children: (0, r.jsx)(X.R, {
                item: s,
                user: l,
                isPurchased: i,
                isHighlighted: t
            })
        });
    },
    eg = (e) => {
        let { showStatus: t, width: i, opacity: l } = e;
        return (0, r.jsxs)('div', {
            className: n()(ed.nameplatePreviewSampleItem, ed.placeholderItem),
            style: { opacity: l },
            children: [
                (0, r.jsx)(m.qEK, {
                    src: null,
                    size: m.EFr.SIZE_32,
                    status: t ? en.Skl.ONLINE : void 0,
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
    eh = (e) => {
        let { user: t, nameplate: i, isHighlighted: l, isPurchased: s } = e;
        return (0, r.jsx)('div', {
            className: ed.nameplatePreviewRootContainer,
            children: (0, r.jsxs)('div', {
                className: ed.nameplatePreviewList,
                children: [
                    (0, r.jsxs)('div', {
                        className: ed.fadeIn,
                        children: [
                            (0, r.jsx)(eg, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, r.jsx)(eg, {
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
                        isPurchased: s
                    }),
                    (0, r.jsxs)('div', {
                        className: ed.fadeOut,
                        children: [
                            (0, r.jsx)(eg, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, r.jsx)(eg, {
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
        let { tab: t, selectedProduct: i, cardRef: l, children: s } = e,
            { handleCardVisibilityChange: n } = (0, M.E)(i.skuId, t === es.AW.CATALOG ? 'full' : t);
        return (0, r.jsx)(h.$, {
            innerRef: l,
            onChange: n,
            threshold: 0,
            children: s
        });
    },
    ev =
        12633 == i.j
            ? l.memo(function (e) {
                  var { tab: t, product: i, onMount: s } = e,
                      n = (function (e, t) {
                          if (null == e) return {};
                          var i,
                              r,
                              l = (function (e, t) {
                                  if (null == e) return {};
                                  var i,
                                      r,
                                      l = {},
                                      s = Object.keys(e);
                                  for (r = 0; r < s.length; r++) ((i = s[r]), t.indexOf(i) >= 0 || (l[i] = e[i]));
                                  return l;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var s = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < s.length; r++) ((i = s[r]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]));
                          }
                          return l;
                      })(e, ['tab', 'product', 'onMount']);
                  let a = (0, g.e7)([k.Z], () => k.Z.purchases),
                      o = (0, N.o)(i, a),
                      d = (0, ee.W)(i, o),
                      u = l.useRef(null),
                      { previewingVariantIndex: c, handleEntering: p, handleLeaving: h } = (0, ei.f)(i),
                      m = (0, et.o)(i, a, c);
                  return (
                      l.useEffect(() => {
                          null == s || s(u, i);
                      }, [s, i]),
                      (0, r.jsx)(em, {
                          tab: t,
                          selectedProduct: d,
                          cardRef: u,
                          children: (0, r.jsx)(
                              ex,
                              eu(
                                  {
                                      tab: t,
                                      product: i,
                                      selectedVariantIndex: o,
                                      selectedProduct: d,
                                      cardRef: u,
                                      previewingVariantIndex: c,
                                      handleEntering: p,
                                      handleLeaving: h,
                                      firstCollectibleItem: m
                                  },
                                  n
                              )
                          )
                      })
                  );
              })
            : null;
function ef(e) {
    let { product: t, tab: i, selectedProduct: l, selectedVariantIndex: s, cardRef: n, analyticsLocations: a, buildHandlePreviewClick: o, isPremiumUser: d, isPremiumProduct: c, isPurchased: h, isPartiallyOwnedBundle: v, isDisabled: f, discount: y } = e,
        _ = (0, S.sp)(),
        b = (0, w.rN)(t),
        [I, N] = (0, g.Wu)([k.Z], () => [k.Z.isClaiming === t.skuId, null != k.Z.isClaiming && k.Z.isClaiming !== t.skuId]),
        L = (0, R.hv)('CollectiblesShopTallCard'),
        W = (0, w.XM)(l, d, !1),
        H = (0, w.ne)({
            product: l,
            isPartiallyOwnedBundle: v,
            isPurchased: h
        }),
        { enabled: B } = (0, O.WX)({ location: 'collectibles_shop_tall_card' }),
        { handleUseNow: M, isApplying: G } = (0, Z.W)({ product: l }),
        F = o(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        q = (0, U._)(t.eligibleOffers),
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
                children: (0, r.jsx)(P.Z, {
                    fullWidth: !0,
                    className: ed.__invalid_premiumSubscribeButton,
                    disabled: N,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: eo.intl.string(eo.t.sEAnVF) },
                    subscriptionTier: ea.Si.TIER_2
                })
            }),
        eu = () =>
            (0, r.jsx)(m.zxk, {
                variant: 'primary',
                onClick: (e) => {
                    (e.stopPropagation(), F(e));
                },
                text: eo.intl.string(eo.t.FdGl5O),
                fullWidth: !0
            }),
        ec = () => {
            let e = () => {
                    (A.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == _ ? void 0 : _.sessionId,
                        sku_id: t.skuId,
                        page_type: i,
                        page_section: null == _ ? void 0 : _.pageSection,
                        page_category: i === es.AW.HOME || null == _ ? void 0 : _.pageCategory,
                        page_index: i === es.AW.CATALOG ? (null == _ ? void 0 : _.pageIndex) : void 0,
                        page_size: i === es.AW.CATALOG ? (null == _ ? void 0 : _.pageSize) : void 0,
                        tile_type: p.Z[t.type],
                        tile_position: String(null == _ ? void 0 : _.tilePosition),
                        cta_name: 'buy button'
                    }),
                        (0, C.Z)({
                            skuId: (0, $.S)({
                                product: t,
                                selectedVariantIndex: s
                            }),
                            analyticsLocations: a,
                            returnRef: n,
                            variantsReturnStyle: L
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
                (A.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == _ ? void 0 : _.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == _ ? void 0 : _.pageSection,
                    page_category: i === es.AW.HOME || null == _ ? void 0 : _.pageCategory,
                    page_index: i === es.AW.CATALOG ? (null == _ ? void 0 : _.pageIndex) : void 0,
                    page_size: i === es.AW.CATALOG ? (null == _ ? void 0 : _.pageSize) : void 0,
                    tile_type: p.Z[t.type],
                    tile_position: String(null == _ ? void 0 : _.tilePosition),
                    cta_name: 'claim with orbs button'
                }),
                    (0, j.qA)({
                        skuId: (0, $.S)({
                            product: t,
                            selectedVariantIndex: s
                        }),
                        onCheckoutSuccess: (e) => {
                            var i;
                            let { entitlements: r } = e;
                            ((0, T.qg)({
                                variantsReturnStyle: L,
                                location: 'collectible_checkout_with_orb'
                            }),
                                (0, el.Z)({
                                    product: t,
                                    analyticsLocations: a,
                                    itemConsumed: null == (i = r[0]) ? void 0 : i.consumed,
                                    purchaseType: es.o8.ORB
                                }));
                        },
                        analyticsLocations: a
                    }));
            };
            return (0, r.jsx)(m.zxk, {
                variant: 'primary',
                text: eo.intl.format(eo.t.kAgx5O, {
                    orbPrice: Y[0].amount,
                    orbIconHook: () => (0, r.jsx)(E.Z, { className: ed.orbIconAligned })
                }),
                onClick: (t) => {
                    (t.stopPropagation(), e());
                },
                'aria-label': eo.intl.formatToPlainString(eo.t['fNG/09'], { orbPrice: Y[0].amount }),
                fullWidth: !0
            });
        },
        eg = () => {
            let e = async () => {
                (A.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == _ ? void 0 : _.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == _ ? void 0 : _.pageSection,
                    page_category: i === es.AW.HOME || null == _ ? void 0 : _.pageCategory,
                    page_index: i === es.AW.CATALOG ? (null == _ ? void 0 : _.pageIndex) : void 0,
                    page_size: i === es.AW.CATALOG ? (null == _ ? void 0 : _.pageSize) : void 0,
                    tile_type: p.Z[t.type],
                    tile_position: String(null == _ ? void 0 : _.tilePosition),
                    cta_name: 'claim premium product button'
                }),
                    await (0, T.fK)(t.skuId),
                    (0, el.Z)({
                        product: t,
                        analyticsLocations: a,
                        purchaseType: es.o8.PREMIUM_PURCHASE
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
        eh = () =>
            (0, r.jsx)(m.zxk, {
                variant: 'primary',
                onClick: (e) => {
                    (e.stopPropagation(), M());
                },
                loading: G,
                text: eo.intl.string(eo.t.MAS7uL),
                fullWidth: !0
            }),
        em = () =>
            (0, r.jsx)(m.zxk, {
                variant: 'primary',
                onClick: (e) => {
                    (e.stopPropagation(), F(e));
                },
                text: eo.intl.string(eo.t.GpnHfH),
                fullWidth: !0
            });
    return (0, r.jsxs)('div', {
        className: ed.detailsWrapper,
        children: [
            (0, r.jsx)('div', {
                className: ed.innerBlur,
                children: f
                    ? (0, r.jsx)(m.Text, {
                          tag: 'div',
                          variant: 'heading-md/semibold',
                          color: 'header-muted',
                          className: ed.priceTag,
                          children: eo.intl.string(eo.t.wu4gyc)
                      })
                    : h || v
                      ? (0, r.jsx)(D.U, {
                            className: ed.priceTag,
                            isPartiallyPurchased: v
                        })
                      : c
                        ? (0, r.jsx)(m.Text, {
                              variant: 'text-md/semibold',
                              className: ed.priceTag,
                              children: eo.intl.string(eo.t.rt69oq)
                          })
                        : B
                          ? (0, r.jsx)(K.e, {
                                displayPrices: X,
                                isPremiumUser: d,
                                discount: y,
                                hasSufficientOrbs: et,
                                discountOfferAmount: q
                            })
                          : (0, r.jsx)(z.Z, {
                                product: l,
                                discount: y,
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
                            if (c && !d && !b) return ei();
                            if (!H || f) return eu();
                            if (h) return eh();
                            if (c) return eg();
                            if (ee)
                                if (et) return ep();
                                else return eu();
                            return i === es.AW.ORBS ? em() : ec();
                        })(),
                        c || u.tq || J || !H || i === es.AW.ORBS
                            ? null
                            : b
                              ? (0, r.jsx)(m.hU, {
                                    variant: 'primary',
                                    'aria-label': eo.intl.string(eo.t.SKNnqq),
                                    icon: m.tEF,
                                    onClick: (e) => {
                                        (e.stopPropagation(), F(e));
                                    }
                                })
                              : (0, r.jsx)(S.k0, {
                                    newValue: { pageCategory: i === es.AW.HOME || null == _ ? void 0 : _.pageCategory },
                                    children: (0, r.jsx)(V.Z, {
                                        primary: !0,
                                        product: t,
                                        selectedVariantIndex: s,
                                        returnRef: n,
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
                  let { product: t, user: i, category: s, tab: a, cardRef: u, selectedProduct: h, firstCollectibleItem: C, selectedVariantIndex: P, handleEntering: _, handleLeaving: O, previewingVariantIndex: E, className: j } = e,
                      { analyticsLocations: T } = (0, y.ZP)([x.Z.COLLECTIBLES_SHOP_CARD]),
                      k = (0, S.sp)(),
                      N = (0, v.Z)(u),
                      [R, Z] = l.useState(!1),
                      M = N || R,
                      D = (0, H.T)(t),
                      V = (0, g.e7)([f.Z], () => f.Z.useReducedMotion),
                      z = I.ZP.canUseCollectibles(i),
                      U = l.useMemo(() => (0, w.BH)(t, z), [t, z]),
                      K = (0, w.G1)(t),
                      X = (0, g.e7)([b.Z], () => (0, m.wjy)(b.Z.theme)),
                      J = (0, w.Yq)(t.skuId),
                      $ = s.skuId === c.T.ANIME_V3 && (0, w.WW)(t.skuId),
                      { hoverVariant: ee } = (0, L.E)('CollectiblesShopTallCard'),
                      { isPurchased: et, isPartiallyOwnedBundle: ei } = (0, B.L)(h),
                      { isDisabled: el } = (0, W.G)(h.skuId),
                      ea = null !== E ? E : P,
                      [eg, em] = l.useState(!1);
                  l.useEffect(() => {
                      let { current: e } = u;
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
                  }, [u]);
                  let ev = l.useRef(null),
                      { displayPrices: ex, isOrbExclusive: ey } = (0, er.oo)({
                          product: t,
                          isPremiumUser: z,
                          tab: a
                      }),
                      eC = l.useCallback(
                          (e) => (i) => {
                              let r = (0, er.oQ)({ product: t });
                              ((ev.current = i.currentTarget),
                                  A.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                                      sku_id: t.skuId,
                                      page_type: a,
                                      page_section: null == k ? void 0 : k.pageSection,
                                      page_category: a === es.AW.HOME ? void 0 : s.name,
                                      page_index: a === es.AW.CATALOG ? (null == k ? void 0 : k.pageIndex) : void 0,
                                      page_size: a === es.AW.CATALOG ? (null == k ? void 0 : k.pageSize) : void 0,
                                      tile_type: p.Z[t.type],
                                      tile_position: String(null == k ? void 0 : k.tilePosition),
                                      cta_name: null
                                  }),
                                  (0, F.T)({
                                      product: t,
                                      category: s,
                                      shouldCheckoutWithOrbs: r,
                                      analyticsLocations: T,
                                      analyticsSource: e,
                                      returnRef: ev,
                                      tab: a
                                  }));
                          },
                          [t, s, a, T, k]
                      ),
                      eP = eC(x.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === ex.length || ((0, w.x6)(t) && null != U && U.discountPercentage < 0)
                      ? null
                      : (0, r.jsx)(m.tEY, {
                            children: (0, r.jsxs)(m.kL8, {
                                className: n()(j, X ? ed.shopCardDark : ed.shopCard, {
                                    [ed.partiallyOwned]: ei && !M,
                                    [ed.shopCardAnimation]: !V && ee !== L.D.NO_MOVEMENT,
                                    [X ? ed.shopCardDarkHighlighted : ed.shopCardHighlighted]: M
                                }),
                                ref: u,
                                onClick: eP,
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
                                                    ((t = eu({}, e)),
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
                                    (0, r.jsx)(G.Z, {
                                        category: s,
                                        className: ed.limitedTimeBadge,
                                        display: 'card'
                                    }),
                                    ei || et || !J
                                        ? ey
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
                                                (0, r.jsx)(ec, {
                                                    isHighlighted: M,
                                                    profileEffectId: C.id,
                                                    isPurchased: et
                                                })
                                            )
                                            .with(
                                                p.Z.AVATAR_DECORATION,
                                                () => (
                                                    o()(C.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                    (0, r.jsx)(ep, {
                                                        item: C,
                                                        user: i,
                                                        isHighlighted: M,
                                                        isPurchased: et
                                                    })
                                                )
                                            )
                                            .with(p.Z.NAMEPLATE, () =>
                                                (0, r.jsx)(eh, {
                                                    user: i,
                                                    nameplate: C,
                                                    isHighlighted: M,
                                                    isPurchased: et
                                                })
                                            )
                                            .with(p.Z.BUNDLE, () =>
                                                (0, r.jsx)(Y.d, {
                                                    product: t,
                                                    user: i,
                                                    isPurchased: et,
                                                    isHighlighted: M
                                                })
                                            )
                                            .with(p.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[ea];
                                                return null == e
                                                    ? null
                                                    : (0, d.EQ)(e.type)
                                                          .with(p.Z.PROFILE_EFFECT, () => {
                                                              let [t] = e.items;
                                                              return (0, r.jsx)(ec, {
                                                                  isHighlighted: M,
                                                                  profileEffectId: t.id,
                                                                  isPurchased: et && !eg
                                                              });
                                                          })
                                                          .with(p.Z.AVATAR_DECORATION, () => {
                                                              let [t] = e.items;
                                                              return (
                                                                  o()(t.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                  (0, r.jsx)(ep, {
                                                                      item: t,
                                                                      user: i,
                                                                      isHighlighted: M,
                                                                      isPurchased: et
                                                                  })
                                                              );
                                                          })
                                                          .with(p.Z.NAMEPLATE, () => {
                                                              let [t] = e.items;
                                                              return (0, r.jsx)(eh, {
                                                                  user: i,
                                                                  nameplate: t,
                                                                  isHighlighted: M,
                                                                  isPurchased: et
                                                              });
                                                          })
                                                          .otherwise(() => null);
                                            })
                                            .with(p.Z.EXTERNAL_SKU, () =>
                                                (0, r.jsx)(q.b, {
                                                    product: t,
                                                    animationState: M ? 'on' : 'off',
                                                    className: el || (et && !M) ? ed.externalProductDimmed : void 0
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
                                                      className: n()(ed.cardStateIcon, { [ed.checkmark]: et })
                                                  })
                                              });
                                    })(),
                                    (0, r.jsxs)('div', {
                                        className: n()(ed.cardText, X ? ed.darkCardBackground : ed.lightCardBackground, { [ed.variantsGroup]: t.type === p.Z.VARIANTS_GROUP }),
                                        children: [
                                            (0, r.jsx)(m.X6q, {
                                                variant: 'text-lg/bold',
                                                className: ed.productName,
                                                children: D
                                            }),
                                            t.type === p.Z.VARIANTS_GROUP
                                                ? (0, r.jsx)(Q.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: E,
                                                          handleEntering: _,
                                                          handleLeaving: O
                                                      },
                                                      selectedVariantIndex: P,
                                                      setIsHoveringOnSwitch: em,
                                                      minimal: !M,
                                                      alternativeBackgroundColor: (null == C ? void 0 : C.type) === p.Z.PROFILE_EFFECT
                                                  })
                                                : null,
                                            (0, r.jsx)(ef, {
                                                product: t,
                                                tab: a,
                                                buildHandlePreviewClick: eC,
                                                selectedProduct: h,
                                                selectedVariantIndex: P,
                                                cardRef: u,
                                                analyticsLocations: T,
                                                isPremiumUser: z,
                                                isPremiumProduct: K,
                                                isPartiallyOwnedBundle: ei,
                                                isPurchased: et,
                                                isDisabled: el,
                                                discount: U
                                            })
                                        ]
                                    })
                                ]
                            })
                        });
              })
            : null,
    ey = 12633 == i.j ? ev : null;
