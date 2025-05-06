s.d(t, {
    Z: () => em,
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
    F = s(197115),
    Z = s(876917),
    E = s(210887),
    b = s(822857),
    w = s(960919),
    O = s(275388),
    y = s(74538),
    k = s(335131),
    P = s(1870),
    N = s(429368),
    _ = s(884697),
    R = s(664018),
    S = s(819570),
    I = s(228624),
    M = s(635552),
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
    em =
        12633 == s.j
            ? function (e) {
                  let { product: t, user: s, category: r, onMount: o, isGiftEasterEggEnabled: Z, tab: Y } = e,
                      { analyticsLocations: Q } = (0, g.ZP)([m.Z.COLLECTIBLES_SHOP_CARD]),
                      er = i.useRef(null),
                      ec = (0, f.Z)(er),
                      [ef, em] = i.useState(!1),
                      eg = ec || ef,
                      eL = (0, et.f)(t),
                      { previewingVariantIndex: ev } = eL,
                      eF = (0, T.T)(t),
                      eZ = (0, p.e7)([j.Z], () => j.Z.useReducedMotion),
                      eE = y.ZP.canUseCollectibles(s),
                      eb = i.useMemo(() => (0, _.BH)(t, eE), [t, eE]),
                      ew = (0, _.G1)(t),
                      eO = (0, _.rN)(t),
                      [ey, ek, eP] = (0, p.Wu)([P.Z], () => [P.Z.isClaiming === t.skuId, null != P.Z.isClaiming && P.Z.isClaiming !== t.skuId, P.Z.purchases]),
                      eN = (0, ee.o)(t, eP, ev),
                      e_ = (0, p.e7)([E.Z], () => (0, x.wjy)(E.Z.theme)),
                      eR = (0, _.Yq)(t.skuId),
                      eS = r.skuId === c.T.ANIME_V3 && (0, _.WW)(t.skuId),
                      { hoverVariant: eI } = (0, R.E)('CollectiblesShopTallCard'),
                      eM = (0, I.hv)('CollectiblesShopTallCard'),
                      eA = (0, N.o)(t, eP),
                      eT = (0, $.W)(t, eA),
                      eH = (0, _.XM)(eT, eE, !1),
                      { isPurchased: eB, isPartiallyOwnedBundle: eD } = (0, H.L)(eT),
                      { isDisabled: eV } = (0, A.G)(eT.skuId),
                      eU = (0, _.ne)({
                          product: eT,
                          isPartiallyOwnedBundle: eD,
                          isPurchased: eB
                      }),
                      eG = null !== ev ? ev : eA,
                      [eW, ez] = i.useState(!1),
                      { enabled: eq } = (0, b.W)({ location: 'collectibles_shop_tall_card' }),
                      eK = (0, L.N)('CollectiblesShopTallCard'),
                      { handleCardVisibilityChange: eY } = (0, B.E)(eT.skuId, Y === ei.AW.CATALOG ? 'full' : Y),
                      eX = (0, S.E)('shop_tall_card');
                  i.useEffect(() => {
                      let { current: e } = er;
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
                  }, []),
                      i.useEffect(() => {
                          null == o || o(er);
                      }, [o]);
                  let eQ = i.useRef(null),
                      { handleUseNow: eJ, isApplying: e$ } = (0, M.W)({ product: eT }),
                      {
                          displayPrices: e1,
                          checkoutEligiblePrices: e2,
                          isOrbExclusive: e5,
                          shouldCheckoutWithOrbs: e8,
                          hasSufficientOrbs: e9
                      } = (0, es.Ip)({
                          product: t,
                          isPremiumUser: eE,
                          tab: Y
                      }),
                      e0 = (e) => (s) => {
                          (eQ.current = s.currentTarget),
                              (0, W.T)({
                                  product: t,
                                  category: r,
                                  shouldCheckoutWithOrbs: e8,
                                  analyticsLocations: Q,
                                  analyticsSource: e,
                                  returnRef: eQ,
                                  tab: Y
                              });
                      },
                      e7 = e0(m.Z.COLLECTIBLES_SHOP_CARD),
                      e3 = e0(m.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                      e6 = () =>
                          (0, l.jsx)('div', {
                              className: ea.hoverUpsellContainer,
                              children: (0, l.jsx)(F.Z, {
                                  fullWidth: !0,
                                  className: ea.__invalid_premiumSubscribeButton,
                                  disabled: ek,
                                  onClick: (e) => e.stopPropagation(),
                                  textOptions: { textOverride: eo.intl.string(eo.t.sEAnVF) },
                                  subscriptionTier: en.Si.TIER_2
                              })
                          });
                  if (0 === e1.length) return null;
                  let e4 = () =>
                          ew || d.tq || e5 || t.type === u.Z.NAMEPLATE || !eU || Y === ei.AW.ORBS
                              ? null
                              : eO
                                ? (0, l.jsx)(ep, { onClick: e3 })
                                : (0, l.jsx)(U.Z, {
                                      product: t,
                                      selectedVariantIndex: eA,
                                      returnRef: er,
                                      isGiftEasterEggEnabled: Z,
                                      tooltipDelay: 250
                                  }),
                      te = () =>
                          (0, l.jsx)(eu, {
                              onClick: e3,
                              children: eo.intl.string(eo.t.FdGl5O)
                          }),
                      tt = () =>
                          (0, l.jsx)(eu, {
                              onClick: () => {
                                  (0, v.Z)({
                                      skuId: (0, J.S)({
                                          product: t,
                                          selectedVariantIndex: eA
                                      }),
                                      analyticsLocations: Q,
                                      returnRef: er,
                                      variantsReturnStyle: eM
                                  });
                              },
                              children: eo.intl.formatToPlainString(eo.t['cNSL/v'], { price: eH })
                          }),
                      ts = () =>
                          (0, l.jsx)(eu, {
                              onClick: () => {
                                  (0, O.q)({
                                      skuId: (0, J.S)({
                                          product: t,
                                          selectedVariantIndex: eA
                                      }),
                                      onCheckoutSuccess: (e) => {
                                          var s;
                                          let { entitlements: l } = e;
                                          (0, k.qg)({
                                              variantsReturnStyle: eM,
                                              location: 'collectible_checkout_with_orb'
                                          }),
                                              (0, el.Z)({
                                                  product: t,
                                                  analyticsLocations: Q,
                                                  shouldCheckoutWithOrbs: !0,
                                                  itemConsumed: null == (s = l[0]) ? void 0 : s.consumed,
                                                  purchaseType: ei.o8.ORB
                                              });
                                      },
                                      analyticsLocations: Q
                                  });
                              },
                              children: eo.intl.format(eo.t.kAgx5O, {
                                  orbPrice: e2[0].amount,
                                  orbIconHook: () => (0, l.jsx)(w.Z, {})
                              })
                          }),
                      tl = () => {
                          let e = async () => {
                              await (0, k.fK)(t.skuId),
                                  (0, el.Z)({
                                      product: t,
                                      analyticsLocations: Q,
                                      purchaseType: ei.o8.PREMIUM_PURCHASE
                                  });
                          };
                          return (0, l.jsx)(eu, {
                              onClick: e,
                              disabled: ek,
                              submitting: ey,
                              submittingStartedLabel: eo.intl.string(eo.t['TYw+9v']),
                              submittingFinishedLabel: eo.intl.string(eo.t.Pg1UPz),
                              children: eo.intl.string(eo.t.zp6caG)
                          });
                      },
                      ti = () =>
                          (0, l.jsx)(eu, {
                              onClick: eJ,
                              submitting: e$,
                              children: eo.intl.string(eo.t.MAS7uL)
                          }),
                      tr = () =>
                          (0, l.jsx)(eu, {
                              onClick: e3,
                              children: eo.intl.string(eo.t.GpnHfH)
                          }),
                      tn = () => {
                          if (ew && !eE && !eO) return e6();
                          if (!eU || eV) return te();
                          if (eB) return ti();
                          if (ew) return tl();
                          if (e8)
                              if (e9) return ts();
                              else return te();
                          return Y === ei.AW.ORBS ? tr() : tt();
                      };
                  return (0, _.x6)(t) && null != eb && eb.discountPercentage < 0
                      ? null
                      : (0, l.jsx)(h.$, {
                            innerRef: er,
                            onChange: eY,
                            threshold: 0,
                            children: (0, l.jsx)(x.tEY, {
                                children: (0, l.jsxs)(x.kL8, {
                                    className: n()(e_ ? ea.shopCardDark : ea.shopCard, {
                                        [ea.partiallyOwned]: eD && !eg,
                                        [ea.shopCardAnimation]: !eZ && eI !== R.D.NO_MOVEMENT,
                                        [e_ ? ea.shopCardDarkHighlighted : ea.shopCardHighlighted]: eg
                                    }),
                                    ref: er,
                                    onClick: e7,
                                    'aria-label': t.name,
                                    children: [
                                        ew &&
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
                                                        profileEffectId: eN.id,
                                                        isPurchased: eB
                                                    })
                                                )
                                                .with(
                                                    u.Z.AVATAR_DECORATION,
                                                    () => (
                                                        a()(eN.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                        (0, l.jsx)(ex, {
                                                            item: eN,
                                                            user: s,
                                                            isHighlighted: eg,
                                                            isPurchased: eB
                                                        })
                                                    )
                                                )
                                                .with(u.Z.NAMEPLATE, () =>
                                                    (0, l.jsx)(ej, {
                                                        user: s,
                                                        nameplate: eN,
                                                        isHighlighted: eg,
                                                        isPurchased: eB
                                                    })
                                                )
                                                .with(u.Z.BUNDLE, () =>
                                                    (0, l.jsx)(X.d, {
                                                        product: t,
                                                        user: s,
                                                        isPurchased: eB,
                                                        isHighlighted: eg
                                                    })
                                                )
                                                .with(u.Z.VARIANTS_GROUP, () => {
                                                    if (null == t.variants || 0 === t.variants.length) return null;
                                                    let e = t.variants[eG];
                                                    return null == e
                                                        ? null
                                                        : (0, C.EQ)(e.type)
                                                              .with(u.Z.PROFILE_EFFECT, () => {
                                                                  let [t] = e.items;
                                                                  return (0, l.jsx)(eh, {
                                                                      isHighlighted: eg,
                                                                      profileEffectId: t.id,
                                                                      isPurchased: eB && !eW
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
                                                                          isPurchased: eB
                                                                      })
                                                                  );
                                                              })
                                                              .otherwise(() => null);
                                                })
                                                .with(u.Z.EXTERNAL_SKU, () =>
                                                    (0, l.jsx)(z.b, {
                                                        product: t,
                                                        animationState: eg ? 'on' : 'off',
                                                        className: eV || (eB && !eg) ? ea.externalProductDimmed : void 0
                                                    })
                                                )
                                                .otherwise(() => null)
                                        }),
                                        (() => {
                                            let e = eB ? x.sV5 : eV ? x.mBM : null;
                                            return null == e
                                                ? null
                                                : (0, l.jsx)('div', {
                                                      className: ea.cardStateIconWrapper,
                                                      children: (0, l.jsx)(e, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          width: 38,
                                                          height: 38,
                                                          className: n()(ea.cardStateIcon, { [ea.checkmark]: eB })
                                                      })
                                                  });
                                        })(),
                                        (0, l.jsxs)('div', {
                                            className: n()(ea.cardText, e_ ? ea.darkCardBackground : ea.lightCardBackground, { [ea.variantsGroup]: t.type === u.Z.VARIANTS_GROUP }),
                                            children: [
                                                (0, l.jsx)(x.Text, {
                                                    variant: 'text-lg/bold',
                                                    className: ea.productName,
                                                    children: eF
                                                }),
                                                t.type === u.Z.VARIANTS_GROUP
                                                    ? (0, l.jsx)(K.P, {
                                                          variantGroupProduct: t,
                                                          previewingVariantIndexProps: eL,
                                                          setIsHoveringOnSwitch: ez,
                                                          purchases: eP,
                                                          minimal: !eg,
                                                          alternativeBackgroundColor: (null == eN ? void 0 : eN.type) === u.Z.PROFILE_EFFECT
                                                      })
                                                    : null,
                                                (0, l.jsxs)('div', {
                                                    className: ea.detailsWrapper,
                                                    children: [
                                                        (0, l.jsx)('div', {
                                                            className: ea.innerBlur,
                                                            children: eV
                                                                ? (0, l.jsx)(x.X6q, {
                                                                      variant: 'heading-md/semibold',
                                                                      color: 'header-muted',
                                                                      className: ea.priceTag,
                                                                      children: eo.intl.string(eo.t.wu4gyc)
                                                                  })
                                                                : eB || eD
                                                                  ? (0, l.jsx)(D.U, {
                                                                        className: ea.priceTag,
                                                                        isPartiallyPurchased: eD
                                                                    })
                                                                  : ew
                                                                    ? (0, l.jsx)(x.Text, {
                                                                          variant: 'text-md/semibold',
                                                                          className: ea.priceTag,
                                                                          children: eo.intl.string(eo.t.rt69oq)
                                                                      })
                                                                    : eq
                                                                      ? (0, l.jsx)(q.e, {
                                                                            displayPrices: e1,
                                                                            isPremiumUser: eE,
                                                                            discount: eb,
                                                                            hasSufficientOrbs: e9
                                                                        })
                                                                      : (0, l.jsx)(G.Z, {
                                                                            product: eT,
                                                                            discount: eb,
                                                                            isPremiumUser: eE,
                                                                            className: ea.priceTag,
                                                                            hideStrikethroughPrice: eX
                                                                        })
                                                        }),
                                                        (0, l.jsx)('div', {
                                                            className: ea.innerHover,
                                                            children: (0, l.jsxs)('div', {
                                                                className: ea.buttonsContainer,
                                                                children: [tn(), e4()]
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
                                        eD || eB || !eR
                                            ? e5
                                                ? (0, l.jsx)(x.IGR, {
                                                      text: eo.intl.string(eo.t['KUYR+P']),
                                                      disableColor: !0,
                                                      className: ea.badge
                                                  })
                                                : eS
                                                  ? (0, l.jsx)(x.IGR, {
                                                        text: eo.intl.string(eo.t.S6kE9v),
                                                        disableColor: !0,
                                                        className: ea.badge
                                                    })
                                                  : r.skuId === c.T.NAMEPLATE && eK
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
                            })
                        });
              }
            : null;
