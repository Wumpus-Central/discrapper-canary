s.d(t, {
    Z: () => eg,
    d: () => ej
}),
    s(47120),
    s(627341);
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
    b = s(876917),
    Z = s(210887),
    F = s(751648),
    N = s(822857),
    y = s(960919),
    w = s(275388),
    O = s(74538),
    k = s(335131),
    P = s(1870),
    S = s(429368),
    _ = s(884697),
    I = s(664018),
    M = s(819570),
    R = s(228624),
    T = s(635552),
    A = s(290175),
    H = s(905357),
    B = s(724994),
    W = s(297651),
    D = s(390698),
    V = s(813083),
    U = s(680942),
    G = s(558060),
    z = s(237031),
    q = s(508925),
    K = s(306092),
    Y = s(453713),
    X = s(616066),
    Q = s(216541),
    $ = s(22267),
    J = s(67409),
    ee = s(58201),
    et = s(201964),
    es = s(361110),
    el = s(956472),
    ei = s(832149),
    er = s(215023),
    eo = s(981631),
    en = s(474936),
    ea = s(388032),
    eC = s(33588);
function ed(e) {
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
function ec(e, t) {
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
function eu(e, t) {
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
let ep = (e) => {
        var { children: t, onClick: s } = e,
            i = eu(e, ['children', 'onClick']);
        return (0, l.jsx)(
            x.zxk,
            ec(
                ed(
                    {
                        fullWidth: !0,
                        look: x.zxk.Looks.FILLED,
                        innerClassName: eC.cardButtonInner,
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
    eh = (e) => {
        var { className: t } = e,
            s = eu(e, ['className']);
        return (0, l.jsx)(
            x.zxk,
            ec(
                ed(
                    {
                        color: x.Ttl.BRAND,
                        look: x.zxk.Looks.FILLED,
                        size: x.PhG.ICON,
                        className: o()(eC.previewButton, t),
                        innerClassName: eC.previewButtonInner,
                        'aria-label': ea.NW.string(ea.t.SKNnqq)
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
    ex = (e) => {
        let { profileEffectId: t, isHighlighted: s, isPurchased: i } = e;
        return (0, l.jsx)('div', {
            className: eC.profileEffectShopPreview,
            children: (0, l.jsx)(b.Z, {
                profileEffectId: t,
                isHovering: s,
                isPurchased: i && !s,
                removeSetHeight: !0
            })
        });
    },
    ef = (e) => {
        let { isStormMysteryItem: t, isHighlighted: s, isPurchased: i, user: r, item: n } = e;
        return (0, l.jsx)('div', {
            className: o()(eC.avatarContainer, t && eC.mysteryAvatarContainer),
            children: (0, l.jsx)(X.R, {
                item: n,
                user: r,
                isPurchased: i,
                isHighlighted: s
            })
        });
    },
    ej = (e) => {
        let { showStatus: t, width: s, opacity: i } = e;
        return (0, l.jsxs)('div', {
            className: o()(eC.nameplatePreviewSampleItem, eC.placeholderItem),
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
                    className: eC.placeholderBar,
                    style: { maxWidth: null != s ? s : '100px' }
                })
            ]
        });
    },
    em = (e) => {
        let { user: t, nameplate: s, isHighlighted: i, isPurchased: r } = e;
        return (0, l.jsx)('div', {
            className: eC.nameplatePreviewRootContainer,
            children: (0, l.jsxs)('div', {
                className: eC.nameplatePreviewList,
                children: [
                    (0, l.jsxs)('div', {
                        className: eC.fadeIn,
                        children: [
                            (0, l.jsx)(ej, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, l.jsx)(ej, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, l.jsx)($.Z, {
                        user: t,
                        nameplate: s,
                        className: eC.nameplatePreviewSampleItem,
                        isHighlighted: i,
                        showWumpus: !i,
                        showStatus: !0,
                        isPurchased: r
                    }),
                    (0, l.jsxs)('div', {
                        className: eC.fadeOut,
                        children: [
                            (0, l.jsx)(ej, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, l.jsx)(ej, {
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
    eg =
        12633 == s.j
            ? function (e) {
                  let { product: t, user: s, category: r, onMount: n, isGiftEasterEggEnabled: b, isInFeedView: X, tab: $ } = e,
                      { analyticsLocations: eo } = (0, g.ZP)([...(X ? [m.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), m.Z.COLLECTIBLES_SHOP_CARD]),
                      eu = i.useRef(null),
                      ej = (0, f.Z)(eu),
                      [eg, eL] = i.useState(!1),
                      ev = ej || eg,
                      eE = (0, es.f)(t),
                      { previewingVariantIndex: eb } = eE,
                      eZ = (0, H.T)(t),
                      eF = (0, p.e7)([j.Z], () => j.Z.useReducedMotion),
                      eN = O.ZP.canUseCollectibles(s),
                      ey = i.useMemo(() => (0, _.BH)(t, eN), [t, eN]),
                      ew = (0, _.G1)(t),
                      eO = (0, _.rN)(t),
                      [ek, eP, eS] = (0, p.Wu)([P.Z], () => [P.Z.isClaiming === t.skuId, null != P.Z.isClaiming && P.Z.isClaiming !== t.skuId, P.Z.purchases]),
                      e_ = (0, et.o)(t, eS, eb),
                      eI = (0, p.e7)([Z.Z], () => (0, x.wjy)(Z.Z.theme)),
                      eM = (0, _.Yq)(t.skuId),
                      eR = r.skuId === c.T.ANIME_V3 && (0, _.WW)(t.skuId),
                      { hoverVariant: eT } = (0, I.E)('CollectiblesShopTallCard'),
                      eA = r.skuId === c.T.STORM && '1268362891946627103' === t.skuId,
                      eH = (0, R.hv)('CollectiblesShopTallCard'),
                      eB = (0, S.o)(t, eS),
                      eW = (0, ee.W)(t, eB),
                      eD = (0, _.XM)(eW, eN, !1),
                      { isPurchased: eV, isPartiallyOwnedBundle: eU } = (0, B.L)(eW),
                      { isDisabled: eG } = (0, A.G)(eW.skuId),
                      ez = (0, _.ne)({
                          product: eW,
                          isPartiallyOwnedBundle: eU,
                          isPurchased: eV
                      }),
                      eq = null !== eb ? eb : eB,
                      [eK, eY] = i.useState(!1),
                      { enabled: eX } = (0, N.W)({ location: 'collectibles_shop_tall_card' }),
                      eQ = (0, L.N)('CollectiblesShopTallCard'),
                      { handleCardVisibilityChange: e$ } = (0, W.E)(eW.skuId, X ? 'home' : 'full'),
                      eJ = (0, M.E)('shop_tall_card');
                  i.useEffect(() => {
                      let { current: e } = eu;
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
                          null == n || n(eu);
                      }, [n]);
                  let e1 = i.useRef(null),
                      { handleUseNow: e2, isApplying: e5 } = (0, T.W)({ product: eW }),
                      {
                          displayPrices: e8,
                          checkoutEligiblePrices: e9,
                          isOrbExclusive: e0,
                          shouldCheckoutWithOrbs: e7,
                          hasSufficientOrbs: e6
                      } = (0, el.Ip)({
                          product: t,
                          isPremiumUser: eN,
                          tab: $
                      }),
                      e3 = (e) => (s) => {
                          (e1.current = s.currentTarget),
                              (0, z.T)({
                                  product: t,
                                  category: r,
                                  shouldCheckoutWithOrbs: e7,
                                  analyticsLocations: eo,
                                  analyticsSource: e,
                                  returnRef: e1,
                                  tab: $
                              });
                      },
                      e4 = e3(m.Z.COLLECTIBLES_SHOP_CARD),
                      te = e3(m.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                      tt = () =>
                          (0, l.jsx)('div', {
                              className: eC.hoverUpsellContainer,
                              children: (0, l.jsx)(E.Z, {
                                  fullWidth: !0,
                                  className: eC.__invalid_premiumSubscribeButton,
                                  disabled: eP,
                                  onClick: (e) => e.stopPropagation(),
                                  buttonText: ea.NW.string(ea.t.sEAnVF),
                                  subscriptionTier: en.Si.TIER_2
                              })
                          });
                  if (0 === e8.length) return null;
                  let ts = () =>
                          ew || d.tq || e0 || t.type === u.Z.NAMEPLATE || !ez || $ === er.AW.ORBS
                              ? null
                              : eO
                                ? (0, l.jsx)(eh, { onClick: te })
                                : (0, l.jsx)(U.Z, {
                                      product: t,
                                      selectedVariantIndex: eB,
                                      returnRef: eu,
                                      isGiftEasterEggEnabled: b,
                                      tooltipDelay: 250
                                  }),
                      tl = () =>
                          (0, l.jsx)(ep, {
                              onClick: te,
                              children: ea.NW.string(ea.t.FdGl5O)
                          }),
                      ti = () =>
                          (0, l.jsx)(ep, {
                              onClick: () => {
                                  (0, v.Z)({
                                      skuId: (0, J.S)({
                                          product: t,
                                          selectedVariantIndex: eB
                                      }),
                                      analyticsLocations: eo,
                                      returnRef: eu,
                                      variantsReturnStyle: eH
                                  });
                              },
                              children: ea.NW.formatToPlainString(ea.t['cNSL/v'], { price: eD })
                          }),
                      tr = () =>
                          (0, l.jsx)(ep, {
                              onClick: () => {
                                  (0, w.q)({
                                      skuId: (0, J.S)({
                                          product: t,
                                          selectedVariantIndex: eB
                                      }),
                                      onCheckoutSuccess: () => {
                                          (0, k.qg)({
                                              variantsReturnStyle: eH,
                                              location: 'collectible_checkout_with_orb'
                                          }),
                                              (0, ei.Z)({
                                                  product: t,
                                                  analyticsLocations: eo,
                                                  onCloseCallback: () => {
                                                      (0, F.vp)();
                                                  },
                                                  purchaseType: er.o8.ORB
                                              });
                                      },
                                      analyticsLocations: eo
                                  }),
                                      (0, F.S6)();
                              },
                              children: ea.NW.format(ea.t.kAgx5O, {
                                  orbPrice: e9[0].amount,
                                  orbIconHook: () => (0, l.jsx)(y.Z, {})
                              })
                          }),
                      to = () => {
                          let e = async () => {
                              await (0, k.fK)(t.skuId),
                                  (0, ei.Z)({
                                      product: t,
                                      analyticsLocations: eo,
                                      purchaseType: er.o8.PREMIUM_PURCHASE
                                  });
                          };
                          return (0, l.jsx)(ep, {
                              onClick: e,
                              disabled: eP,
                              submitting: ek,
                              submittingStartedLabel: ea.NW.string(ea.t['TYw+9v']),
                              submittingFinishedLabel: ea.NW.string(ea.t.Pg1UPz),
                              children: ea.NW.string(ea.t.zp6caG)
                          });
                      },
                      tn = () =>
                          (0, l.jsx)(ep, {
                              onClick: e2,
                              submitting: e5,
                              children: ea.NW.string(ea.t.MAS7uL)
                          }),
                      ta = () =>
                          (0, l.jsx)(ep, {
                              onClick: te,
                              children: ea.NW.string(ea.t.GpnHfH)
                          }),
                      tC = () => {
                          if (ew && !eN && !eO) return tt();
                          if (!ez || eG) return tl();
                          if (eV) return tn();
                          if (ew) return to();
                          if (e7)
                              if (e6) return tr();
                              else return tl();
                          return $ === er.AW.ORBS ? ta() : ti();
                      };
                  return (0, _.x6)(t) && null != ey && ey.discountPercentage < 0
                      ? null
                      : (0, l.jsx)(h.$, {
                            innerRef: eu,
                            onChange: e$,
                            threshold: 0,
                            children: (0, l.jsx)(x.tEY, {
                                children: (0, l.jsxs)(x.kL8, {
                                    className: o()(eI ? eC.shopCardDark : eC.shopCard, {
                                        [eC.partiallyOwned]: eU && !ev,
                                        [eC.shopCardAnimation]: !eF && eT !== I.D.NO_MOVEMENT,
                                        [eI ? eC.shopCardDarkHighlighted : eC.shopCardHighlighted]: ev,
                                        [eC.mysteryShopCard]: eA
                                    }),
                                    ref: eu,
                                    onClick: e4,
                                    'aria-label': t.name,
                                    children: [
                                        ew &&
                                            (0, l.jsx)(x.ua7, {
                                                tooltipContentClassName: eC.premiumWheelTooltipContent,
                                                color: x.ua7.Colors.PRIMARY,
                                                text: ea.NW.string(ea.t.O2K0xM),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        x.IGR,
                                                        ec(ed({}, e), {
                                                            className: eC.premiumWheelBadge,
                                                            text: (0, l.jsx)(x.SrA, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: eC.premiumWheel
                                                            })
                                                        })
                                                    )
                                            }),
                                        (0, l.jsx)('div', {
                                            className: eC.preview,
                                            children: (0, C.EQ)(t.type)
                                                .with(u.Z.PROFILE_EFFECT, () =>
                                                    (0, l.jsx)(ex, {
                                                        isHighlighted: ev,
                                                        profileEffectId: e_.id,
                                                        isPurchased: eV
                                                    })
                                                )
                                                .with(
                                                    u.Z.AVATAR_DECORATION,
                                                    () => (
                                                        a()(e_.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                        (0, l.jsx)(ef, {
                                                            item: e_,
                                                            user: s,
                                                            isStormMysteryItem: eA,
                                                            isHighlighted: ev,
                                                            isPurchased: eV
                                                        })
                                                    )
                                                )
                                                .with(u.Z.NAMEPLATE, () =>
                                                    (0, l.jsx)(em, {
                                                        user: s,
                                                        nameplate: e_,
                                                        isHighlighted: ev,
                                                        isPurchased: eV
                                                    })
                                                )
                                                .with(u.Z.BUNDLE, () =>
                                                    (0, l.jsx)(Q.d, {
                                                        product: t,
                                                        user: s,
                                                        isPurchased: eV,
                                                        isHighlighted: ev
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
                                                                  return (0, l.jsx)(ex, {
                                                                      isHighlighted: ev,
                                                                      profileEffectId: t.id,
                                                                      isPurchased: eV && !eK
                                                                  });
                                                              })
                                                              .with(u.Z.AVATAR_DECORATION, () => {
                                                                  let [t] = e.items;
                                                                  return (
                                                                      a()(t.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                      (0, l.jsx)(ef, {
                                                                          item: t,
                                                                          user: s,
                                                                          isStormMysteryItem: eA,
                                                                          isHighlighted: ev,
                                                                          isPurchased: eV
                                                                      })
                                                                  );
                                                              })
                                                              .otherwise(() => null);
                                                })
                                                .with(u.Z.EXTERNAL_SKU, () =>
                                                    (0, l.jsx)(q.b, {
                                                        product: t,
                                                        animationState: ev ? 'on' : 'off',
                                                        className: eG || (eV && !ev) ? eC.externalProductDimmed : void 0
                                                    })
                                                )
                                                .otherwise(() => null)
                                        }),
                                        (() => {
                                            let e = eV ? x.sV5 : eG ? x.mBM : null;
                                            return null == e
                                                ? null
                                                : (0, l.jsx)('div', {
                                                      className: eC.cardStateIconWrapper,
                                                      children: (0, l.jsx)(e, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          width: 38,
                                                          height: 38,
                                                          className: o()(eC.cardStateIcon, { [eC.checkmark]: eV })
                                                      })
                                                  });
                                        })(),
                                        (0, l.jsxs)('div', {
                                            className: o()(eC.cardText, eI ? eC.darkCardBackground : eC.lightCardBackground, { [eC.variantsGroup]: t.type === u.Z.VARIANTS_GROUP }),
                                            children: [
                                                (0, l.jsx)(x.Text, {
                                                    variant: 'text-lg/bold',
                                                    className: eC.productName,
                                                    children: eZ
                                                }),
                                                t.type === u.Z.VARIANTS_GROUP
                                                    ? (0, l.jsx)(Y.P, {
                                                          variantGroupProduct: t,
                                                          previewingVariantIndexProps: eE,
                                                          setIsHoveringOnSwitch: eY,
                                                          purchases: eS,
                                                          minimal: !ev,
                                                          alternativeBackgroundColor: (null == e_ ? void 0 : e_.type) === u.Z.PROFILE_EFFECT
                                                      })
                                                    : null,
                                                (0, l.jsxs)('div', {
                                                    className: eC.detailsWrapper,
                                                    children: [
                                                        (0, l.jsx)('div', {
                                                            className: ez ? eC.innerBlur : void 0,
                                                            children: eG
                                                                ? (0, l.jsx)(x.X6q, {
                                                                      variant: 'heading-md/semibold',
                                                                      color: 'header-muted',
                                                                      className: eC.priceTag,
                                                                      children: ea.NW.string(ea.t.wu4gyc)
                                                                  })
                                                                : eV || eU
                                                                  ? (0, l.jsx)(D.U, {
                                                                        className: eC.priceTag,
                                                                        isPartiallyPurchased: eU
                                                                    })
                                                                  : ew
                                                                    ? (0, l.jsx)(x.Text, {
                                                                          variant: 'text-md/semibold',
                                                                          className: eC.priceTag,
                                                                          children: ea.NW.string(ea.t.rt69oq)
                                                                      })
                                                                    : eX
                                                                      ? (0, l.jsx)(K.e, {
                                                                            displayPrices: e8,
                                                                            isPremiumUser: eN,
                                                                            discount: ey,
                                                                            hasSufficientOrbs: e6
                                                                        })
                                                                      : (0, l.jsx)(G.Z, {
                                                                            product: eW,
                                                                            discount: ey,
                                                                            isPremiumUser: eN,
                                                                            className: eC.priceTag,
                                                                            hideStrikethroughPrice: eJ
                                                                        })
                                                        }),
                                                        (0, l.jsx)('div', {
                                                            className: eC.innerHover,
                                                            children: (0, l.jsxs)('div', {
                                                                className: eC.buttonsContainer,
                                                                children: [tC(), ts()]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, l.jsx)(V.Z, {
                                            category: r,
                                            className: eC.limitedTimeBadge,
                                            display: 'card'
                                        }),
                                        eU || eV || !eM
                                            ? e0
                                                ? (0, l.jsx)(x.IGR, {
                                                      text: ea.NW.string(ea.t['KUYR+P']),
                                                      disableColor: !0,
                                                      className: eC.badge
                                                  })
                                                : eR
                                                  ? (0, l.jsx)(x.IGR, {
                                                        text: ea.NW.string(ea.t.S6kE9v),
                                                        disableColor: !0,
                                                        className: eC.badge
                                                    })
                                                  : r.skuId === c.T.NAMEPLATE && eQ
                                                    ? (0, l.jsx)(x.IGR, {
                                                          text: ea.NW.string(ea.t['soka7+']),
                                                          disableColor: !0,
                                                          className: eC.badge
                                                      })
                                                    : null
                                            : (0, l.jsx)(x.IGR, {
                                                  text: ea.NW.string(ea.t.y2b7CA),
                                                  disableColor: !0,
                                                  className: eC.badge
                                              })
                                    ]
                                })
                            })
                        });
              }
            : null;
