s.d(t, {
    Z: () => ev,
    d: () => ef
}),
    s(388685),
    s(314940);
var l = s(255367),
    i = s(73800),
    r = s(120356),
    n = s.n(r),
    o = s(512722),
    a = s.n(o),
    C = s(278074),
    d = s(873546),
    c = s(180650),
    u = s(979554),
    p = s(399606),
    h = s(622535),
    x = s(481060),
    f = s(727637),
    j = s(607070),
    m = s(100527),
    g = s(906732),
    L = s(170046),
    v = s(333867),
    b = s(767714),
    Z = s(876917),
    F = s(210887),
    E = s(822857),
    w = s(960919),
    O = s(275388),
    y = s(74538),
    k = s(335131),
    P = s(1870),
    N = s(429368),
    I = s(884697),
    _ = s(664018),
    R = s(819570),
    M = s(228624),
    S = s(635552),
    A = s(290175),
    T = s(905357),
    H = s(724994),
    B = s(297651),
    D = s(390698),
    V = s(813083),
    U = s(680942),
    G = s(558060),
    W = s(237031),
    z = s(508925),
    q = s(306092),
    K = s(453713),
    Y = s(616066),
    X = s(216541),
    Q = s(22267),
    J = s(67409),
    $ = s(58201),
    ee = s(201964),
    et = s(361110),
    es = s(956472),
    el = s(832149),
    ei = s(215023),
    er = s(981631),
    en = s(474936),
    eo = s(388032),
    ea = s(33588);
function eC(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = s[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function ed(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, l);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              }),
        e
    );
}
function ec(e, t) {
    if (null == e) return {};
    var s,
        l,
        i = (function (e, t) {
            if (null == e) return {};
            var s,
                l,
                i = {},
                r = Object.keys(e);
            for (l = 0; l < r.length; l++) (s = r[l]), t.indexOf(s) >= 0 || (i[s] = e[s]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (l = 0; l < r.length; l++) (s = r[l]), !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (i[s] = e[s]);
    }
    return i;
}
let eu = (e) => {
        var { children: t, onClick: s } = e,
            i = ec(e, ['children', 'onClick']);
        return (0, l.jsx)(
            x.zxk,
            ed(
                eC(
                    {
                        fullWidth: !0,
                        look: x.zxk.Looks.FILLED,
                        innerClassName: ea.cardButtonInner,
                        onClick: (e) => {
                            e.stopPropagation(), s(e);
                        }
                    },
                    i
                ),
                { children: t }
            )
        );
    },
    ep = (e) => {
        var { className: t } = e,
            s = ec(e, ['className']);
        return (0, l.jsx)(
            x.zxk,
            ed(
                eC(
                    {
                        color: x.Ttl.BRAND,
                        look: x.zxk.Looks.FILLED,
                        size: x.PhG.ICON,
                        className: n()(ea.previewButton, t),
                        innerClassName: ea.previewButtonInner,
                        'aria-label': eo.intl.string(eo.t.SKNnqq)
                    },
                    s
                ),
                {
                    children: (0, l.jsx)(x.tEF, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }
            )
        );
    },
    eh = (e) => {
        let { profileEffectId: t, isHighlighted: s, isPurchased: i } = e;
        return (0, l.jsx)('div', {
            className: ea.profileEffectShopPreview,
            children: (0, l.jsx)(Z.Z, {
                profileEffectId: t,
                isHovering: s,
                isPurchased: i && !s,
                removeSetHeight: !0
            })
        });
    },
    ex = (e) => {
        let { isHighlighted: t, isPurchased: s, user: i, item: r } = e;
        return (0, l.jsx)('div', {
            className: ea.avatarContainer,
            children: (0, l.jsx)(Y.R, {
                item: r,
                user: i,
                isPurchased: s,
                isHighlighted: t
            })
        });
    },
    ef = (e) => {
        let { showStatus: t, width: s, opacity: i } = e;
        return (0, l.jsxs)('div', {
            className: n()(ea.nameplatePreviewSampleItem, ea.placeholderItem),
            style: { opacity: i },
            children: [
                (0, l.jsx)(x.qEK, {
                    src: null,
                    size: x.EFr.SIZE_32,
                    status: t ? er.Skl.ONLINE : void 0,
                    statusColor: 'var(--background-modifier-accent)',
                    'aria-hidden': !0
                }),
                (0, l.jsx)('div', {
                    className: ea.placeholderBar,
                    style: { maxWidth: null != s ? s : '100px' }
                })
            ]
        });
    },
    ej = (e) => {
        let { user: t, nameplate: s, isHighlighted: i, isPurchased: r } = e;
        return (0, l.jsx)('div', {
            className: ea.nameplatePreviewRootContainer,
            children: (0, l.jsxs)('div', {
                className: ea.nameplatePreviewList,
                children: [
                    (0, l.jsxs)('div', {
                        className: ea.fadeIn,
                        children: [
                            (0, l.jsx)(ef, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, l.jsx)(ef, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, l.jsx)(Q.Z, {
                        user: t,
                        nameplate: s,
                        className: ea.nameplatePreviewSampleItem,
                        isHighlighted: i,
                        showWumpus: !i,
                        showStatus: !0,
                        isPurchased: r
                    }),
                    (0, l.jsxs)('div', {
                        className: ea.fadeOut,
                        children: [
                            (0, l.jsx)(ef, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, l.jsx)(ef, {
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
        let { tab: t, selectedProduct: s, cardRef: i, children: r } = e,
            { handleCardVisibilityChange: n } = (0, B.E)(s.skuId, t === ei.AW.CATALOG ? 'full' : t);
        return (0, l.jsx)(h.$, {
            innerRef: i,
            onChange: n,
            threshold: 0,
            children: r
        });
    },
    eg =
        12633 == s.j
            ? i.memo(function (e) {
                  var { tab: t, product: s, onMount: r } = e,
                      n = ec(e, ['tab', 'product', 'onMount']);
                  let o = (0, p.e7)([P.Z], () => P.Z.purchases),
                      a = (0, N.o)(s, o),
                      C = (0, $.W)(s, a),
                      d = i.useRef(null),
                      { previewingVariantIndex: c, handleEntering: u, handleLeaving: h } = (0, et.f)(s),
                      x = (0, ee.o)(s, o, c);
                  return (
                      i.useEffect(() => {
                          null == r || r(d, s);
                      }, [r, s]),
                      (0, l.jsx)(em, {
                          tab: t,
                          selectedProduct: C,
                          cardRef: d,
                          children: (0, l.jsx)(
                              eL,
                              eC(
                                  {
                                      tab: t,
                                      product: s,
                                      selectedVariantIndex: a,
                                      selectedProduct: C,
                                      cardRef: d,
                                      previewingVariantIndex: c,
                                      handleEntering: u,
                                      handleLeaving: h,
                                      firstCollectibleItem: x
                                  },
                                  n
                              )
                          )
                      })
                  );
              })
            : null,
    eL =
        12633 == s.j
            ? i.memo(function (e) {
                  let { product: t, user: s, category: r, isGiftEasterEggEnabled: o, tab: h, cardRef: Z, selectedProduct: N, firstCollectibleItem: B, selectedVariantIndex: Y, handleEntering: Q, handleLeaving: $, previewingVariantIndex: ee, className: et } = e,
                      { analyticsLocations: er } = (0, g.ZP)([m.Z.COLLECTIBLES_SHOP_CARD]),
                      ec = (0, f.Z)(Z),
                      [ef, em] = i.useState(!1),
                      eg = ec || ef,
                      eL = (0, T.T)(t),
                      ev = (0, p.e7)([j.Z], () => j.Z.useReducedMotion),
                      eb = y.ZP.canUseCollectibles(s),
                      eZ = i.useMemo(() => (0, I.BH)(t, eb), [t, eb]),
                      eF = (0, I.G1)(t),
                      eE = (0, I.rN)(t),
                      [ew, eO] = (0, p.Wu)([P.Z], () => [P.Z.isClaiming === t.skuId, null != P.Z.isClaiming && P.Z.isClaiming !== t.skuId]),
                      ey = (0, p.e7)([F.Z], () => (0, x.wjy)(F.Z.theme)),
                      ek = (0, I.Yq)(t.skuId),
                      eP = r.skuId === c.T.ANIME_V3 && (0, I.WW)(t.skuId),
                      { hoverVariant: eN } = (0, _.E)('CollectiblesShopTallCard'),
                      eI = (0, M.hv)('CollectiblesShopTallCard'),
                      e_ = (0, I.XM)(N, eb, !1),
                      { isPurchased: eR, isPartiallyOwnedBundle: eM } = (0, H.L)(N),
                      { isDisabled: eS } = (0, A.G)(N.skuId),
                      eA = (0, I.ne)({
                          product: N,
                          isPartiallyOwnedBundle: eM,
                          isPurchased: eR
                      }),
                      eT = null !== ee ? ee : Y,
                      [eH, eB] = i.useState(!1),
                      { enabled: eD } = (0, E.W)({ location: 'collectibles_shop_tall_card' }),
                      eV = (0, L.N)('CollectiblesShopTallCard'),
                      eU = (0, R.E)('shop_tall_card');
                  i.useEffect(() => {
                      let { current: e } = Z;
                      if (null == e) return;
                      let t = () => em(!0),
                          s = (t) => {
                              e.contains(t.relatedTarget) || em(!1);
                          };
                      return (
                          e.addEventListener('focusin', t),
                          e.addEventListener('focusout', s),
                          e.blur(),
                          () => {
                              e.removeEventListener('focusin', t), e.removeEventListener('focusout', s);
                          }
                      );
                  }, [Z]);
                  let eG = i.useRef(null),
                      { handleUseNow: eW, isApplying: ez } = (0, S.W)({ product: N }),
                      {
                          displayPrices: eq,
                          checkoutEligiblePrices: eK,
                          isOrbExclusive: eY,
                          shouldCheckoutWithOrbs: eX,
                          hasSufficientOrbs: eQ
                      } = (0, es.Ip)({
                          product: t,
                          isPremiumUser: eb,
                          tab: h
                      }),
                      eJ = (e) => (s) => {
                          (eG.current = s.currentTarget),
                              (0, W.T)({
                                  product: t,
                                  category: r,
                                  shouldCheckoutWithOrbs: eX,
                                  analyticsLocations: er,
                                  analyticsSource: e,
                                  returnRef: eG,
                                  tab: h
                              });
                      },
                      e$ = eJ(m.Z.COLLECTIBLES_SHOP_CARD),
                      e1 = eJ(m.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                      e2 = () =>
                          (0, l.jsx)('div', {
                              className: ea.hoverUpsellContainer,
                              children: (0, l.jsx)(b.Z, {
                                  fullWidth: !0,
                                  className: ea.__invalid_premiumSubscribeButton,
                                  disabled: eO,
                                  onClick: (e) => e.stopPropagation(),
                                  textOptions: { textOverride: eo.intl.string(eo.t.sEAnVF) },
                                  subscriptionTier: en.Si.TIER_2
                              })
                          });
                  if (0 === eq.length) return null;
                  let e5 = () =>
                          eF || d.tq || eY || t.type === u.Z.NAMEPLATE || !eA || h === ei.AW.ORBS
                              ? null
                              : eE
                                ? (0, l.jsx)(ep, { onClick: e1 })
                                : (0, l.jsx)(U.Z, {
                                      product: t,
                                      selectedVariantIndex: Y,
                                      returnRef: Z,
                                      isGiftEasterEggEnabled: o,
                                      tooltipDelay: 250
                                  }),
                      e8 = () =>
                          (0, l.jsx)(eu, {
                              onClick: e1,
                              children: eo.intl.string(eo.t.FdGl5O)
                          }),
                      e9 = () =>
                          (0, l.jsx)(eu, {
                              onClick: () => {
                                  (0, v.Z)({
                                      skuId: (0, J.S)({
                                          product: t,
                                          selectedVariantIndex: Y
                                      }),
                                      analyticsLocations: er,
                                      returnRef: Z,
                                      variantsReturnStyle: eI
                                  });
                              },
                              children: eo.intl.formatToPlainString(eo.t['cNSL/v'], { price: e_ })
                          }),
                      e0 = () =>
                          (0, l.jsx)(eu, {
                              onClick: () => {
                                  (0, O.q)({
                                      skuId: (0, J.S)({
                                          product: t,
                                          selectedVariantIndex: Y
                                      }),
                                      onCheckoutSuccess: (e) => {
                                          var s;
                                          let { entitlements: l } = e;
                                          (0, k.qg)({
                                              variantsReturnStyle: eI,
                                              location: 'collectible_checkout_with_orb'
                                          }),
                                              (0, el.Z)({
                                                  product: t,
                                                  analyticsLocations: er,
                                                  shouldCheckoutWithOrbs: !0,
                                                  itemConsumed: null == (s = l[0]) ? void 0 : s.consumed,
                                                  purchaseType: ei.o8.ORB
                                              });
                                      },
                                      analyticsLocations: er
                                  });
                              },
                              children: eo.intl.format(eo.t.kAgx5O, {
                                  orbPrice: eK[0].amount,
                                  orbIconHook: () => (0, l.jsx)(w.Z, {})
                              })
                          }),
                      e7 = () => {
                          let e = async () => {
                              await (0, k.fK)(t.skuId),
                                  (0, el.Z)({
                                      product: t,
                                      analyticsLocations: er,
                                      purchaseType: ei.o8.PREMIUM_PURCHASE
                                  });
                          };
                          return (0, l.jsx)(eu, {
                              onClick: e,
                              disabled: eO,
                              submitting: ew,
                              submittingStartedLabel: eo.intl.string(eo.t['TYw+9v']),
                              submittingFinishedLabel: eo.intl.string(eo.t.Pg1UPz),
                              children: eo.intl.string(eo.t.zp6caG)
                          });
                      },
                      e3 = () =>
                          (0, l.jsx)(eu, {
                              onClick: eW,
                              submitting: ez,
                              children: eo.intl.string(eo.t.MAS7uL)
                          }),
                      e6 = () =>
                          (0, l.jsx)(eu, {
                              onClick: e1,
                              children: eo.intl.string(eo.t.GpnHfH)
                          }),
                      e4 = () => {
                          if (eF && !eb && !eE) return e2();
                          if (!eA || eS) return e8();
                          if (eR) return e3();
                          if (eF) return e7();
                          if (eX)
                              if (eQ) return e0();
                              else return e8();
                          return h === ei.AW.ORBS ? e6() : e9();
                      };
                  return (0, I.x6)(t) && null != eZ && eZ.discountPercentage < 0
                      ? null
                      : (0, l.jsx)(x.tEY, {
                            children: (0, l.jsxs)(x.kL8, {
                                className: n()(et, ey ? ea.shopCardDark : ea.shopCard, {
                                    [ea.partiallyOwned]: eM && !eg,
                                    [ea.shopCardAnimation]: !ev && eN !== _.D.NO_MOVEMENT,
                                    [ey ? ea.shopCardDarkHighlighted : ea.shopCardHighlighted]: eg
                                }),
                                ref: Z,
                                onClick: e$,
                                'aria-label': t.name,
                                children: [
                                    eF &&
                                        (0, l.jsx)(x.ua7, {
                                            tooltipContentClassName: ea.premiumWheelTooltipContent,
                                            color: x.ua7.Colors.PRIMARY,
                                            text: eo.intl.string(eo.t.nKdAlJ),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    x.IGR,
                                                    ed(eC({}, e), {
                                                        className: ea.premiumWheelBadge,
                                                        text: (0, l.jsx)(x.SrA, {
                                                            size: 'md',
                                                            color: 'currentColor',
                                                            className: ea.premiumWheel
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, l.jsx)('div', {
                                        className: ea.preview,
                                        children: (0, C.EQ)(t.type)
                                            .with(u.Z.PROFILE_EFFECT, () =>
                                                (0, l.jsx)(eh, {
                                                    isHighlighted: eg,
                                                    profileEffectId: B.id,
                                                    isPurchased: eR
                                                })
                                            )
                                            .with(
                                                u.Z.AVATAR_DECORATION,
                                                () => (
                                                    a()(B.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                    (0, l.jsx)(ex, {
                                                        item: B,
                                                        user: s,
                                                        isHighlighted: eg,
                                                        isPurchased: eR
                                                    })
                                                )
                                            )
                                            .with(u.Z.NAMEPLATE, () =>
                                                (0, l.jsx)(ej, {
                                                    user: s,
                                                    nameplate: B,
                                                    isHighlighted: eg,
                                                    isPurchased: eR
                                                })
                                            )
                                            .with(u.Z.BUNDLE, () =>
                                                (0, l.jsx)(X.d, {
                                                    product: t,
                                                    user: s,
                                                    isPurchased: eR,
                                                    isHighlighted: eg
                                                })
                                            )
                                            .with(u.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[eT];
                                                return null == e
                                                    ? null
                                                    : (0, C.EQ)(e.type)
                                                          .with(u.Z.PROFILE_EFFECT, () => {
                                                              let [t] = e.items;
                                                              return (0, l.jsx)(eh, {
                                                                  isHighlighted: eg,
                                                                  profileEffectId: t.id,
                                                                  isPurchased: eR && !eH
                                                              });
                                                          })
                                                          .with(u.Z.AVATAR_DECORATION, () => {
                                                              let [t] = e.items;
                                                              return (
                                                                  a()(t.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                  (0, l.jsx)(ex, {
                                                                      item: t,
                                                                      user: s,
                                                                      isHighlighted: eg,
                                                                      isPurchased: eR
                                                                  })
                                                              );
                                                          })
                                                          .otherwise(() => null);
                                            })
                                            .with(u.Z.EXTERNAL_SKU, () =>
                                                (0, l.jsx)(z.b, {
                                                    product: t,
                                                    animationState: eg ? 'on' : 'off',
                                                    className: eS || (eR && !eg) ? ea.externalProductDimmed : void 0
                                                })
                                            )
                                            .otherwise(() => null)
                                    }),
                                    (() => {
                                        let e = eR ? x.sV5 : eS ? x.mBM : null;
                                        return null == e
                                            ? null
                                            : (0, l.jsx)('div', {
                                                  className: ea.cardStateIconWrapper,
                                                  children: (0, l.jsx)(e, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: n()(ea.cardStateIcon, { [ea.checkmark]: eR })
                                                  })
                                              });
                                    })(),
                                    (0, l.jsxs)('div', {
                                        className: n()(ea.cardText, ey ? ea.darkCardBackground : ea.lightCardBackground, { [ea.variantsGroup]: t.type === u.Z.VARIANTS_GROUP }),
                                        children: [
                                            (0, l.jsx)(x.Text, {
                                                variant: 'text-lg/bold',
                                                className: ea.productName,
                                                children: eL
                                            }),
                                            t.type === u.Z.VARIANTS_GROUP
                                                ? (0, l.jsx)(K.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: ee,
                                                          handleEntering: Q,
                                                          handleLeaving: $
                                                      },
                                                      selectedVariantIndex: Y,
                                                      setIsHoveringOnSwitch: eB,
                                                      minimal: !eg,
                                                      alternativeBackgroundColor: (null == B ? void 0 : B.type) === u.Z.PROFILE_EFFECT
                                                  })
                                                : null,
                                            (0, l.jsxs)('div', {
                                                className: ea.detailsWrapper,
                                                children: [
                                                    (0, l.jsx)('div', {
                                                        className: ea.innerBlur,
                                                        children: eS
                                                            ? (0, l.jsx)(x.X6q, {
                                                                  variant: 'heading-md/semibold',
                                                                  color: 'header-muted',
                                                                  className: ea.priceTag,
                                                                  children: eo.intl.string(eo.t.wu4gyc)
                                                              })
                                                            : eR || eM
                                                              ? (0, l.jsx)(D.U, {
                                                                    className: ea.priceTag,
                                                                    isPartiallyPurchased: eM
                                                                })
                                                              : eF
                                                                ? (0, l.jsx)(x.Text, {
                                                                      variant: 'text-md/semibold',
                                                                      className: ea.priceTag,
                                                                      children: eo.intl.string(eo.t.rt69oq)
                                                                  })
                                                                : eD
                                                                  ? (0, l.jsx)(q.e, {
                                                                        displayPrices: eq,
                                                                        isPremiumUser: eb,
                                                                        discount: eZ,
                                                                        hasSufficientOrbs: eQ
                                                                    })
                                                                  : (0, l.jsx)(G.Z, {
                                                                        product: N,
                                                                        discount: eZ,
                                                                        isPremiumUser: eb,
                                                                        className: ea.priceTag,
                                                                        hideStrikethroughPrice: eU
                                                                    })
                                                    }),
                                                    (0, l.jsx)('div', {
                                                        className: ea.innerHover,
                                                        children: (0, l.jsxs)('div', {
                                                            className: ea.buttonsContainer,
                                                            children: [e4(), e5()]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(V.Z, {
                                        category: r,
                                        className: ea.limitedTimeBadge,
                                        display: 'card'
                                    }),
                                    eM || eR || !ek
                                        ? eY
                                            ? (0, l.jsx)(x.IGR, {
                                                  text: eo.intl.string(eo.t['KUYR+P']),
                                                  disableColor: !0,
                                                  className: ea.badge
                                              })
                                            : eP
                                              ? (0, l.jsx)(x.IGR, {
                                                    text: eo.intl.string(eo.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: ea.badge
                                                })
                                              : r.skuId === c.T.NAMEPLATE && eV
                                                ? (0, l.jsx)(x.IGR, {
                                                      text: eo.intl.string(eo.t['soka7+']),
                                                      disableColor: !0,
                                                      className: ea.badge
                                                  })
                                                : null
                                        : (0, l.jsx)(x.IGR, {
                                              text: eo.intl.string(eo.t.y2b7CA),
                                              disableColor: !0,
                                              className: ea.badge
                                          })
                                ]
                            })
                        });
              })
            : null,
    ev = 12633 == s.j ? eg : null;
