s.d(t, {
    Z: () => eL,
    d: () => em
}),
    s(388685),
    s(314940);
var l = s(200651),
    i = s(192379),
    r = s(120356),
    o = s.n(r),
    n = s(512722),
    a = s.n(n),
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
    E = s(197115),
    Z = s(876917),
    F = s(210887),
    N = s(751648),
    b = s(822857),
    w = s(82856),
    O = s(960919),
    y = s(275388),
    k = s(74538),
    P = s(335131),
    _ = s(1870),
    S = s(429368),
    R = s(884697),
    M = s(664018),
    I = s(819570),
    T = s(228624),
    A = s(635552),
    H = s(290175),
    B = s(905357),
    W = s(724994),
    D = s(297651),
    V = s(390698),
    U = s(813083),
    G = s(680942),
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
    eo = s(215023),
    en = s(981631),
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
                        className: o()(ed.previewButton, t),
                        innerClassName: ed.previewButtonInner,
                        'aria-label': eC.NW.string(eC.t.SKNnqq)
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
            className: o()(ed.nameplatePreviewSampleItem, ed.placeholderItem),
            style: { opacity: i },
            children: [
                (0, l.jsx)(x.qEK, {
                    src: null,
                    size: x.EFr.SIZE_32,
                    status: t ? en.Skl.ONLINE : void 0,
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
                  let { product: t, user: s, category: r, onMount: n, isGiftEasterEggEnabled: Z, isInFeedView: Q, tab: J } = e,
                      { analyticsLocations: en } = (0, g.ZP)([...(Q ? [m.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), m.Z.COLLECTIBLES_SHOP_CARD]),
                      ep = i.useRef(null),
                      em = (0, f.Z)(ep),
                      [eL, ev] = i.useState(!1),
                      eE = em || eL,
                      eZ = (0, el.f)(t),
                      { previewingVariantIndex: eF } = eZ,
                      eN = (0, B.T)(t),
                      eb = (0, p.e7)([j.Z], () => j.Z.useReducedMotion),
                      ew = k.ZP.canUseCollectibles(s),
                      eO = i.useMemo(() => (0, R.BH)(t, ew), [t, ew]),
                      ey = (0, R.G1)(t),
                      ek = (0, R.rN)(t),
                      [eP, e_, eS] = (0, p.Wu)([_.Z], () => [_.Z.isClaiming === t.skuId, null != _.Z.isClaiming && _.Z.isClaiming !== t.skuId, _.Z.purchases]),
                      eR = (0, es.o)(t, eS, eF),
                      eM = (0, p.e7)([F.Z], () => (0, x.wjy)(F.Z.theme)),
                      eI = (0, R.Yq)(t.skuId),
                      eT = r.skuId === c.T.ANIME_V3 && (0, R.WW)(t.skuId),
                      { hoverVariant: eA } = (0, M.E)('CollectiblesShopTallCard'),
                      eH = (0, T.hv)('CollectiblesShopTallCard'),
                      eB = (0, S.o)(t, eS),
                      eW = (0, et.W)(t, eB),
                      eD = (0, R.XM)(eW, ew, !1),
                      { isPurchased: eV, isPartiallyOwnedBundle: eU } = (0, W.L)(eW),
                      { isDisabled: eG } = (0, H.G)(eW.skuId),
                      ez = (0, R.ne)({
                          product: eW,
                          isPartiallyOwnedBundle: eU,
                          isPurchased: eV
                      }),
                      eq = null !== eF ? eF : eB,
                      [eK, eY] = i.useState(!1),
                      { enabled: eX } = (0, b.W)({ location: 'collectibles_shop_tall_card' }),
                      eQ = (0, L.N)('CollectiblesShopTallCard'),
                      { handleCardVisibilityChange: e$ } = (0, D.E)(eW.skuId, Q ? 'home' : 'full'),
                      eJ = (0, I.E)('shop_tall_card');
                  i.useEffect(() => {
                      let { current: e } = ep;
                      if (null == e) return;
                      let t = () => ev(!0),
                          s = (t) => {
                              e.contains(t.relatedTarget) || ev(!1);
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
                          null == n || n(ep);
                      }, [n]);
                  let e1 = i.useRef(null),
                      { handleUseNow: e2, isApplying: e5 } = (0, A.W)({ product: eW }),
                      {
                          displayPrices: e8,
                          checkoutEligiblePrices: e9,
                          isOrbExclusive: e0,
                          shouldCheckoutWithOrbs: e7,
                          hasSufficientOrbs: e3
                      } = (0, ei.Ip)({
                          product: t,
                          isPremiumUser: ew,
                          tab: J
                      }),
                      e6 = (e) => (s) => {
                          (e1.current = s.currentTarget),
                              (0, q.T)({
                                  product: t,
                                  category: r,
                                  shouldCheckoutWithOrbs: e7,
                                  analyticsLocations: en,
                                  analyticsSource: e,
                                  returnRef: e1,
                                  tab: J
                              });
                      },
                      e4 = e6(m.Z.COLLECTIBLES_SHOP_CARD),
                      te = e6(m.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                      tt = () =>
                          (0, l.jsx)('div', {
                              className: ed.hoverUpsellContainer,
                              children: (0, l.jsx)(E.Z, {
                                  fullWidth: !0,
                                  className: ed.__invalid_premiumSubscribeButton,
                                  disabled: e_,
                                  onClick: (e) => e.stopPropagation(),
                                  buttonText: eC.NW.string(eC.t.sEAnVF),
                                  subscriptionTier: ea.Si.TIER_2
                              })
                          });
                  if (0 === e8.length) return null;
                  let ts = () =>
                          ey || d.tq || e0 || t.type === u.Z.NAMEPLATE || !ez || J === eo.AW.ORBS
                              ? null
                              : ek
                                ? (0, l.jsx)(ex, { onClick: te })
                                : (0, l.jsx)(G.Z, {
                                      product: t,
                                      selectedVariantIndex: eB,
                                      returnRef: ep,
                                      isGiftEasterEggEnabled: Z,
                                      tooltipDelay: 250
                                  }),
                      tl = () =>
                          (0, l.jsx)(eh, {
                              onClick: te,
                              children: eC.NW.string(eC.t.FdGl5O)
                          }),
                      ti = () =>
                          (0, l.jsx)(eh, {
                              onClick: () => {
                                  (0, v.Z)({
                                      skuId: (0, ee.S)({
                                          product: t,
                                          selectedVariantIndex: eB
                                      }),
                                      analyticsLocations: en,
                                      returnRef: ep,
                                      variantsReturnStyle: eH
                                  });
                              },
                              children: eC.NW.formatToPlainString(eC.t['cNSL/v'], { price: eD })
                          }),
                      tr = () =>
                          (0, l.jsx)(eh, {
                              onClick: () => {
                                  (0, y.q)({
                                      skuId: (0, ee.S)({
                                          product: t,
                                          selectedVariantIndex: eB
                                      }),
                                      onCheckoutSuccess: (e) => {
                                          var s;
                                          let { entitlements: l } = e;
                                          (0, P.qg)({
                                              variantsReturnStyle: eH,
                                              location: 'collectible_checkout_with_orb'
                                          }),
                                              (0, er.Z)({
                                                  product: t,
                                                  analyticsLocations: en,
                                                  onCloseCallback: () => {
                                                      (0, w.vp)();
                                                  },
                                                  itemConsumed: null == (s = l[0]) ? void 0 : s.consumed,
                                                  purchaseType: eo.o8.ORB
                                              });
                                      },
                                      analyticsLocations: en
                                  }),
                                      (0, N.S6)();
                              },
                              children: eC.NW.format(eC.t.kAgx5O, {
                                  orbPrice: e9[0].amount,
                                  orbIconHook: () => (0, l.jsx)(O.Z, {})
                              })
                          }),
                      to = () => {
                          let e = async () => {
                              await (0, P.fK)(t.skuId),
                                  (0, er.Z)({
                                      product: t,
                                      analyticsLocations: en,
                                      purchaseType: eo.o8.PREMIUM_PURCHASE
                                  });
                          };
                          return (0, l.jsx)(eh, {
                              onClick: e,
                              disabled: e_,
                              submitting: eP,
                              submittingStartedLabel: eC.NW.string(eC.t['TYw+9v']),
                              submittingFinishedLabel: eC.NW.string(eC.t.Pg1UPz),
                              children: eC.NW.string(eC.t.zp6caG)
                          });
                      },
                      tn = () =>
                          (0, l.jsx)(eh, {
                              onClick: e2,
                              submitting: e5,
                              children: eC.NW.string(eC.t.MAS7uL)
                          }),
                      ta = () =>
                          (0, l.jsx)(eh, {
                              onClick: te,
                              children: eC.NW.string(eC.t.GpnHfH)
                          }),
                      tC = () => {
                          if (ey && !ew && !ek) return tt();
                          if (!ez || eG) return tl();
                          if (eV) return tn();
                          if (ey) return to();
                          if (e7)
                              if (e3) return tr();
                              else return tl();
                          return J === eo.AW.ORBS ? ta() : ti();
                      };
                  return (0, R.x6)(t) && null != eO && eO.discountPercentage < 0
                      ? null
                      : (0, l.jsx)(h.$, {
                            innerRef: ep,
                            onChange: e$,
                            threshold: 0,
                            children: (0, l.jsx)(x.tEY, {
                                children: (0, l.jsxs)(x.kL8, {
                                    className: o()(eM ? ed.shopCardDark : ed.shopCard, {
                                        [ed.partiallyOwned]: eU && !eE,
                                        [ed.shopCardAnimation]: !eb && eA !== M.D.NO_MOVEMENT,
                                        [eM ? ed.shopCardDarkHighlighted : ed.shopCardHighlighted]: eE
                                    }),
                                    ref: ep,
                                    onClick: e4,
                                    'aria-label': t.name,
                                    children: [
                                        ey &&
                                            (0, l.jsx)(x.ua7, {
                                                tooltipContentClassName: ed.premiumWheelTooltipContent,
                                                color: x.ua7.Colors.PRIMARY,
                                                text: eC.NW.string(eC.t.O2K0xM),
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
                                                        isHighlighted: eE,
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
                                                            isHighlighted: eE,
                                                            isPurchased: eV
                                                        })
                                                    )
                                                )
                                                .with(u.Z.NAMEPLATE, () =>
                                                    (0, l.jsx)(eg, {
                                                        user: s,
                                                        nameplate: eR,
                                                        isHighlighted: eE,
                                                        isPurchased: eV
                                                    })
                                                )
                                                .with(u.Z.BUNDLE, () =>
                                                    (0, l.jsx)($.d, {
                                                        product: t,
                                                        user: s,
                                                        isPurchased: eV,
                                                        isHighlighted: eE
                                                    })
                                                )
                                                .with(u.Z.VARIANTS_GROUP, () => {
                                                    if (null == t.variants || 0 === t.variants.length) return null;
                                                    let e = t.variants[eq];
                                                    return null == e
                                                        ? null
                                                        : (0, C.EQ)(e.type)
                                                              .with(u.Z.PROFILE_EFFECT, () => {
                                                                  let [t] = e.items;
                                                                  return (0, l.jsx)(ef, {
                                                                      isHighlighted: eE,
                                                                      profileEffectId: t.id,
                                                                      isPurchased: eV && !eK
                                                                  });
                                                              })
                                                              .with(u.Z.AVATAR_DECORATION, () => {
                                                                  let [t] = e.items;
                                                                  return (
                                                                      a()(t.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                      (0, l.jsx)(ej, {
                                                                          item: t,
                                                                          user: s,
                                                                          isHighlighted: eE,
                                                                          isPurchased: eV
                                                                      })
                                                                  );
                                                              })
                                                              .otherwise(() => null);
                                                })
                                                .with(u.Z.EXTERNAL_SKU, () =>
                                                    (0, l.jsx)(K.b, {
                                                        product: t,
                                                        animationState: eE ? 'on' : 'off',
                                                        className: eG || (eV && !eE) ? ed.externalProductDimmed : void 0
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
                                                          className: o()(ed.cardStateIcon, { [ed.checkmark]: eV })
                                                      })
                                                  });
                                        })(),
                                        (0, l.jsxs)('div', {
                                            className: o()(ed.cardText, eM ? ed.darkCardBackground : ed.lightCardBackground, { [ed.variantsGroup]: t.type === u.Z.VARIANTS_GROUP }),
                                            children: [
                                                (0, l.jsx)(x.Text, {
                                                    variant: 'text-lg/bold',
                                                    className: ed.productName,
                                                    children: eN
                                                }),
                                                t.type === u.Z.VARIANTS_GROUP
                                                    ? (0, l.jsx)(X.P, {
                                                          variantGroupProduct: t,
                                                          previewingVariantIndexProps: eZ,
                                                          setIsHoveringOnSwitch: eY,
                                                          purchases: eS,
                                                          minimal: !eE,
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
                                                                      children: eC.NW.string(eC.t.wu4gyc)
                                                                  })
                                                                : eV || eU
                                                                  ? (0, l.jsx)(V.U, {
                                                                        className: ed.priceTag,
                                                                        isPartiallyPurchased: eU
                                                                    })
                                                                  : ey
                                                                    ? (0, l.jsx)(x.Text, {
                                                                          variant: 'text-md/semibold',
                                                                          className: ed.priceTag,
                                                                          children: eC.NW.string(eC.t.rt69oq)
                                                                      })
                                                                    : eX
                                                                      ? (0, l.jsx)(Y.e, {
                                                                            displayPrices: e8,
                                                                            isPremiumUser: ew,
                                                                            discount: eO,
                                                                            hasSufficientOrbs: e3
                                                                        })
                                                                      : (0, l.jsx)(z.Z, {
                                                                            product: eW,
                                                                            discount: eO,
                                                                            isPremiumUser: ew,
                                                                            className: ed.priceTag,
                                                                            hideStrikethroughPrice: eJ
                                                                        })
                                                        }),
                                                        (0, l.jsx)('div', {
                                                            className: ed.innerHover,
                                                            children: (0, l.jsxs)('div', {
                                                                className: ed.buttonsContainer,
                                                                children: [tC(), ts()]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, l.jsx)(U.Z, {
                                            category: r,
                                            className: ed.limitedTimeBadge,
                                            display: 'card'
                                        }),
                                        eU || eV || !eI
                                            ? e0
                                                ? (0, l.jsx)(x.IGR, {
                                                      text: eC.NW.string(eC.t['KUYR+P']),
                                                      disableColor: !0,
                                                      className: ed.badge
                                                  })
                                                : eT
                                                  ? (0, l.jsx)(x.IGR, {
                                                        text: eC.NW.string(eC.t.S6kE9v),
                                                        disableColor: !0,
                                                        className: ed.badge
                                                    })
                                                  : r.skuId === c.T.NAMEPLATE && eQ
                                                    ? (0, l.jsx)(x.IGR, {
                                                          text: eC.NW.string(eC.t['soka7+']),
                                                          disableColor: !0,
                                                          className: ed.badge
                                                      })
                                                    : null
                                            : (0, l.jsx)(x.IGR, {
                                                  text: eC.NW.string(eC.t.y2b7CA),
                                                  disableColor: !0,
                                                  className: ed.badge
                                              })
                                    ]
                                })
                            })
                        });
              }
            : null;
