s.d(t, {
    Z: () => eL,
    d: () => em
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
    b = s(210887),
    E = s(751648),
    w = s(822857),
    y = s(82856),
    k = s(960919),
    O = s(275388),
    P = s(74538),
    N = s(335131),
    _ = s(1870),
    R = s(429368),
    S = s(884697),
    M = s(664018),
    I = s(819570),
    A = s(228624),
    T = s(635552),
    H = s(290175),
    B = s(905357),
    D = s(724994),
    V = s(297651),
    U = s(390698),
    G = s(813083),
    W = s(680942),
    z = s(558060),
    q = s(237031),
    K = s(508925),
    Y = s(306092),
    X = s(453713),
    Q = s(616066),
    $ = s(216541),
    J = s(22267),
    ee = s(67409),
    et = s(58201),
    es = s(201964),
    el = s(361110),
    ei = s(956472),
    er = s(832149),
    en = s(215023),
    eo = s(981631),
    ea = s(474936),
    eC = s(388032),
    ed = s(33588);
function ec(e) {
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
function eu(e, t) {
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
function ep(e, t) {
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
let eh = (e) => {
        var { children: t, onClick: s } = e,
            i = ep(e, ['children', 'onClick']);
        return (0, l.jsx)(
            x.zxk,
            eu(
                ec(
                    {
                        fullWidth: !0,
                        look: x.zxk.Looks.FILLED,
                        innerClassName: ed.cardButtonInner,
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
    ex = (e) => {
        var { className: t } = e,
            s = ep(e, ['className']);
        return (0, l.jsx)(
            x.zxk,
            eu(
                ec(
                    {
                        color: x.Ttl.BRAND,
                        look: x.zxk.Looks.FILLED,
                        size: x.PhG.ICON,
                        className: n()(ed.previewButton, t),
                        innerClassName: ed.previewButtonInner,
                        'aria-label': eC.intl.string(eC.t.SKNnqq)
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
    ef = (e) => {
        let { profileEffectId: t, isHighlighted: s, isPurchased: i } = e;
        return (0, l.jsx)('div', {
            className: ed.profileEffectShopPreview,
            children: (0, l.jsx)(Z.Z, {
                profileEffectId: t,
                isHovering: s,
                isPurchased: i && !s,
                removeSetHeight: !0
            })
        });
    },
    ej = (e) => {
        let { isHighlighted: t, isPurchased: s, user: i, item: r } = e;
        return (0, l.jsx)('div', {
            className: ed.avatarContainer,
            children: (0, l.jsx)(Q.R, {
                item: r,
                user: i,
                isPurchased: s,
                isHighlighted: t
            })
        });
    },
    em = (e) => {
        let { showStatus: t, width: s, opacity: i } = e;
        return (0, l.jsxs)('div', {
            className: n()(ed.nameplatePreviewSampleItem, ed.placeholderItem),
            style: { opacity: i },
            children: [
                (0, l.jsx)(x.qEK, {
                    src: null,
                    size: x.EFr.SIZE_32,
                    status: t ? eo.Skl.ONLINE : void 0,
                    statusColor: 'var(--background-modifier-accent)',
                    'aria-hidden': !0
                }),
                (0, l.jsx)('div', {
                    className: ed.placeholderBar,
                    style: { maxWidth: null != s ? s : '100px' }
                })
            ]
        });
    },
    eg = (e) => {
        let { user: t, nameplate: s, isHighlighted: i, isPurchased: r } = e;
        return (0, l.jsx)('div', {
            className: ed.nameplatePreviewRootContainer,
            children: (0, l.jsxs)('div', {
                className: ed.nameplatePreviewList,
                children: [
                    (0, l.jsxs)('div', {
                        className: ed.fadeIn,
                        children: [
                            (0, l.jsx)(em, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, l.jsx)(em, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, l.jsx)(J.Z, {
                        user: t,
                        nameplate: s,
                        className: ed.nameplatePreviewSampleItem,
                        isHighlighted: i,
                        showWumpus: !i,
                        showStatus: !0,
                        isPurchased: r
                    }),
                    (0, l.jsxs)('div', {
                        className: ed.fadeOut,
                        children: [
                            (0, l.jsx)(em, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, l.jsx)(em, {
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
    eL =
        12633 == s.j
            ? function (e) {
                  let { product: t, user: s, category: r, onMount: o, isGiftEasterEggEnabled: Z, tab: Q } = e,
                      { analyticsLocations: J } = (0, g.ZP)([m.Z.COLLECTIBLES_SHOP_CARD]),
                      eo = i.useRef(null),
                      ep = (0, f.Z)(eo),
                      [em, eL] = i.useState(!1),
                      ev = ep || em,
                      eF = (0, el.f)(t),
                      { previewingVariantIndex: eZ } = eF,
                      eb = (0, B.T)(t),
                      eE = (0, p.e7)([j.Z], () => j.Z.useReducedMotion),
                      ew = P.ZP.canUseCollectibles(s),
                      ey = i.useMemo(() => (0, S.BH)(t, ew), [t, ew]),
                      ek = (0, S.G1)(t),
                      eO = (0, S.rN)(t),
                      [eP, eN, e_] = (0, p.Wu)([_.Z], () => [_.Z.isClaiming === t.skuId, null != _.Z.isClaiming && _.Z.isClaiming !== t.skuId, _.Z.purchases]),
                      eR = (0, es.o)(t, e_, eZ),
                      eS = (0, p.e7)([b.Z], () => (0, x.wjy)(b.Z.theme)),
                      eM = (0, S.Yq)(t.skuId),
                      eI = r.skuId === c.T.ANIME_V3 && (0, S.WW)(t.skuId),
                      { hoverVariant: eA } = (0, M.E)('CollectiblesShopTallCard'),
                      eT = (0, A.hv)('CollectiblesShopTallCard'),
                      eH = (0, R.o)(t, e_),
                      eB = (0, et.W)(t, eH),
                      eD = (0, S.XM)(eB, ew, !1),
                      { isPurchased: eV, isPartiallyOwnedBundle: eU } = (0, D.L)(eB),
                      { isDisabled: eG } = (0, H.G)(eB.skuId),
                      eW = (0, S.ne)({
                          product: eB,
                          isPartiallyOwnedBundle: eU,
                          isPurchased: eV
                      }),
                      ez = null !== eZ ? eZ : eH,
                      [eq, eK] = i.useState(!1),
                      { enabled: eY } = (0, w.W)({ location: 'collectibles_shop_tall_card' }),
                      eX = (0, L.N)('CollectiblesShopTallCard'),
                      { handleCardVisibilityChange: eQ } = (0, V.E)(eB.skuId, Q === en.AW.CATALOG ? 'full' : Q),
                      e$ = (0, I.E)('shop_tall_card');
                  i.useEffect(() => {
                      let { current: e } = eo;
                      if (null == e) return;
                      let t = () => eL(!0),
                          s = (t) => {
                              e.contains(t.relatedTarget) || eL(!1);
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
                          null == o || o(eo);
                      }, [o]);
                  let eJ = i.useRef(null),
                      { handleUseNow: e1, isApplying: e2 } = (0, T.W)({ product: eB }),
                      {
                          displayPrices: e5,
                          checkoutEligiblePrices: e8,
                          isOrbExclusive: e9,
                          shouldCheckoutWithOrbs: e0,
                          hasSufficientOrbs: e7
                      } = (0, ei.Ip)({
                          product: t,
                          isPremiumUser: ew,
                          tab: Q
                      }),
                      e3 = (e) => (s) => {
                          (eJ.current = s.currentTarget),
                              (0, q.T)({
                                  product: t,
                                  category: r,
                                  shouldCheckoutWithOrbs: e0,
                                  analyticsLocations: J,
                                  analyticsSource: e,
                                  returnRef: eJ,
                                  tab: Q
                              });
                      },
                      e6 = e3(m.Z.COLLECTIBLES_SHOP_CARD),
                      e4 = e3(m.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                      te = () =>
                          (0, l.jsx)('div', {
                              className: ed.hoverUpsellContainer,
                              children: (0, l.jsx)(F.Z, {
                                  fullWidth: !0,
                                  className: ed.__invalid_premiumSubscribeButton,
                                  disabled: eN,
                                  onClick: (e) => e.stopPropagation(),
                                  buttonText: eC.intl.string(eC.t.sEAnVF),
                                  subscriptionTier: ea.Si.TIER_2
                              })
                          });
                  if (0 === e5.length) return null;
                  let tt = () =>
                          ek || d.tq || e9 || t.type === u.Z.NAMEPLATE || !eW || Q === en.AW.ORBS
                              ? null
                              : eO
                                ? (0, l.jsx)(ex, { onClick: e4 })
                                : (0, l.jsx)(W.Z, {
                                      product: t,
                                      selectedVariantIndex: eH,
                                      returnRef: eo,
                                      isGiftEasterEggEnabled: Z,
                                      tooltipDelay: 250
                                  }),
                      ts = () =>
                          (0, l.jsx)(eh, {
                              onClick: e4,
                              children: eC.intl.string(eC.t.FdGl5O)
                          }),
                      tl = () =>
                          (0, l.jsx)(eh, {
                              onClick: () => {
                                  (0, v.Z)({
                                      skuId: (0, ee.S)({
                                          product: t,
                                          selectedVariantIndex: eH
                                      }),
                                      analyticsLocations: J,
                                      returnRef: eo,
                                      variantsReturnStyle: eT
                                  });
                              },
                              children: eC.intl.formatToPlainString(eC.t['cNSL/v'], { price: eD })
                          }),
                      ti = () =>
                          (0, l.jsx)(eh, {
                              onClick: () => {
                                  (0, O.q)({
                                      skuId: (0, ee.S)({
                                          product: t,
                                          selectedVariantIndex: eH
                                      }),
                                      onCheckoutSuccess: (e) => {
                                          var s;
                                          let { entitlements: l } = e;
                                          (0, N.qg)({
                                              variantsReturnStyle: eT,
                                              location: 'collectible_checkout_with_orb'
                                          }),
                                              (0, er.Z)({
                                                  product: t,
                                                  analyticsLocations: J,
                                                  onCloseCallback: () => {
                                                      (0, y.vp)();
                                                  },
                                                  itemConsumed: null == (s = l[0]) ? void 0 : s.consumed,
                                                  purchaseType: en.o8.ORB
                                              });
                                      },
                                      analyticsLocations: J
                                  }),
                                      (0, E.S6)();
                              },
                              children: eC.intl.format(eC.t.kAgx5O, {
                                  orbPrice: e8[0].amount,
                                  orbIconHook: () => (0, l.jsx)(k.Z, {})
                              })
                          }),
                      tr = () => {
                          let e = async () => {
                              await (0, N.fK)(t.skuId),
                                  (0, er.Z)({
                                      product: t,
                                      analyticsLocations: J,
                                      purchaseType: en.o8.PREMIUM_PURCHASE
                                  });
                          };
                          return (0, l.jsx)(eh, {
                              onClick: e,
                              disabled: eN,
                              submitting: eP,
                              submittingStartedLabel: eC.intl.string(eC.t['TYw+9v']),
                              submittingFinishedLabel: eC.intl.string(eC.t.Pg1UPz),
                              children: eC.intl.string(eC.t.zp6caG)
                          });
                      },
                      tn = () =>
                          (0, l.jsx)(eh, {
                              onClick: e1,
                              submitting: e2,
                              children: eC.intl.string(eC.t.MAS7uL)
                          }),
                      to = () =>
                          (0, l.jsx)(eh, {
                              onClick: e4,
                              children: eC.intl.string(eC.t.GpnHfH)
                          }),
                      ta = () => {
                          if (ek && !ew && !eO) return te();
                          if (!eW || eG) return ts();
                          if (eV) return tn();
                          if (ek) return tr();
                          if (e0)
                              if (e7) return ti();
                              else return ts();
                          return Q === en.AW.ORBS ? to() : tl();
                      };
                  return (0, S.x6)(t) && null != ey && ey.discountPercentage < 0
                      ? null
                      : (0, l.jsx)(h.$, {
                            innerRef: eo,
                            onChange: eQ,
                            threshold: 0,
                            children: (0, l.jsx)(x.tEY, {
                                children: (0, l.jsxs)(x.kL8, {
                                    className: n()(eS ? ed.shopCardDark : ed.shopCard, {
                                        [ed.partiallyOwned]: eU && !ev,
                                        [ed.shopCardAnimation]: !eE && eA !== M.D.NO_MOVEMENT,
                                        [eS ? ed.shopCardDarkHighlighted : ed.shopCardHighlighted]: ev
                                    }),
                                    ref: eo,
                                    onClick: e6,
                                    'aria-label': t.name,
                                    children: [
                                        ek &&
                                            (0, l.jsx)(x.ua7, {
                                                tooltipContentClassName: ed.premiumWheelTooltipContent,
                                                color: x.ua7.Colors.PRIMARY,
                                                text: eC.intl.string(eC.t.O2K0xM),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        x.IGR,
                                                        eu(ec({}, e), {
                                                            className: ed.premiumWheelBadge,
                                                            text: (0, l.jsx)(x.SrA, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: ed.premiumWheel
                                                            })
                                                        })
                                                    )
                                            }),
                                        (0, l.jsx)('div', {
                                            className: ed.preview,
                                            children: (0, C.EQ)(t.type)
                                                .with(u.Z.PROFILE_EFFECT, () =>
                                                    (0, l.jsx)(ef, {
                                                        isHighlighted: ev,
                                                        profileEffectId: eR.id,
                                                        isPurchased: eV
                                                    })
                                                )
                                                .with(
                                                    u.Z.AVATAR_DECORATION,
                                                    () => (
                                                        a()(eR.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                        (0, l.jsx)(ej, {
                                                            item: eR,
                                                            user: s,
                                                            isHighlighted: ev,
                                                            isPurchased: eV
                                                        })
                                                    )
                                                )
                                                .with(u.Z.NAMEPLATE, () =>
                                                    (0, l.jsx)(eg, {
                                                        user: s,
                                                        nameplate: eR,
                                                        isHighlighted: ev,
                                                        isPurchased: eV
                                                    })
                                                )
                                                .with(u.Z.BUNDLE, () =>
                                                    (0, l.jsx)($.d, {
                                                        product: t,
                                                        user: s,
                                                        isPurchased: eV,
                                                        isHighlighted: ev
                                                    })
                                                )
                                                .with(u.Z.VARIANTS_GROUP, () => {
                                                    if (null == t.variants || 0 === t.variants.length) return null;
                                                    let e = t.variants[ez];
                                                    return null == e
                                                        ? null
                                                        : (0, C.EQ)(e.type)
                                                              .with(u.Z.PROFILE_EFFECT, () => {
                                                                  let [t] = e.items;
                                                                  return (0, l.jsx)(ef, {
                                                                      isHighlighted: ev,
                                                                      profileEffectId: t.id,
                                                                      isPurchased: eV && !eq
                                                                  });
                                                              })
                                                              .with(u.Z.AVATAR_DECORATION, () => {
                                                                  let [t] = e.items;
                                                                  return (
                                                                      a()(t.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                      (0, l.jsx)(ej, {
                                                                          item: t,
                                                                          user: s,
                                                                          isHighlighted: ev,
                                                                          isPurchased: eV
                                                                      })
                                                                  );
                                                              })
                                                              .otherwise(() => null);
                                                })
                                                .with(u.Z.EXTERNAL_SKU, () =>
                                                    (0, l.jsx)(K.b, {
                                                        product: t,
                                                        animationState: ev ? 'on' : 'off',
                                                        className: eG || (eV && !ev) ? ed.externalProductDimmed : void 0
                                                    })
                                                )
                                                .otherwise(() => null)
                                        }),
                                        (() => {
                                            let e = eV ? x.sV5 : eG ? x.mBM : null;
                                            return null == e
                                                ? null
                                                : (0, l.jsx)('div', {
                                                      className: ed.cardStateIconWrapper,
                                                      children: (0, l.jsx)(e, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          width: 38,
                                                          height: 38,
                                                          className: n()(ed.cardStateIcon, { [ed.checkmark]: eV })
                                                      })
                                                  });
                                        })(),
                                        (0, l.jsxs)('div', {
                                            className: n()(ed.cardText, eS ? ed.darkCardBackground : ed.lightCardBackground, { [ed.variantsGroup]: t.type === u.Z.VARIANTS_GROUP }),
                                            children: [
                                                (0, l.jsx)(x.Text, {
                                                    variant: 'text-lg/bold',
                                                    className: ed.productName,
                                                    children: eb
                                                }),
                                                t.type === u.Z.VARIANTS_GROUP
                                                    ? (0, l.jsx)(X.P, {
                                                          variantGroupProduct: t,
                                                          previewingVariantIndexProps: eF,
                                                          setIsHoveringOnSwitch: eK,
                                                          purchases: e_,
                                                          minimal: !ev,
                                                          alternativeBackgroundColor: (null == eR ? void 0 : eR.type) === u.Z.PROFILE_EFFECT
                                                      })
                                                    : null,
                                                (0, l.jsxs)('div', {
                                                    className: ed.detailsWrapper,
                                                    children: [
                                                        (0, l.jsx)('div', {
                                                            className: ed.innerBlur,
                                                            children: eG
                                                                ? (0, l.jsx)(x.X6q, {
                                                                      variant: 'heading-md/semibold',
                                                                      color: 'header-muted',
                                                                      className: ed.priceTag,
                                                                      children: eC.intl.string(eC.t.wu4gyc)
                                                                  })
                                                                : eV || eU
                                                                  ? (0, l.jsx)(U.U, {
                                                                        className: ed.priceTag,
                                                                        isPartiallyPurchased: eU
                                                                    })
                                                                  : ek
                                                                    ? (0, l.jsx)(x.Text, {
                                                                          variant: 'text-md/semibold',
                                                                          className: ed.priceTag,
                                                                          children: eC.intl.string(eC.t.rt69oq)
                                                                      })
                                                                    : eY
                                                                      ? (0, l.jsx)(Y.e, {
                                                                            displayPrices: e5,
                                                                            isPremiumUser: ew,
                                                                            discount: ey,
                                                                            hasSufficientOrbs: e7
                                                                        })
                                                                      : (0, l.jsx)(z.Z, {
                                                                            product: eB,
                                                                            discount: ey,
                                                                            isPremiumUser: ew,
                                                                            className: ed.priceTag,
                                                                            hideStrikethroughPrice: e$
                                                                        })
                                                        }),
                                                        (0, l.jsx)('div', {
                                                            className: ed.innerHover,
                                                            children: (0, l.jsxs)('div', {
                                                                className: ed.buttonsContainer,
                                                                children: [ta(), tt()]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, l.jsx)(G.Z, {
                                            category: r,
                                            className: ed.limitedTimeBadge,
                                            display: 'card'
                                        }),
                                        eU || eV || !eM
                                            ? e9
                                                ? (0, l.jsx)(x.IGR, {
                                                      text: eC.intl.string(eC.t['KUYR+P']),
                                                      disableColor: !0,
                                                      className: ed.badge
                                                  })
                                                : eI
                                                  ? (0, l.jsx)(x.IGR, {
                                                        text: eC.intl.string(eC.t.S6kE9v),
                                                        disableColor: !0,
                                                        className: ed.badge
                                                    })
                                                  : r.skuId === c.T.NAMEPLATE && eX
                                                    ? (0, l.jsx)(x.IGR, {
                                                          text: eC.intl.string(eC.t['soka7+']),
                                                          disableColor: !0,
                                                          className: ed.badge
                                                      })
                                                    : null
                                            : (0, l.jsx)(x.IGR, {
                                                  text: eC.intl.string(eC.t.y2b7CA),
                                                  disableColor: !0,
                                                  className: ed.badge
                                              })
                                    ]
                                })
                            })
                        });
              }
            : null;
