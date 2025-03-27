n.d(t, {
    Z: () => eb,
    d: () => ex
}),
    n(47120),
    n(627341);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(278074),
    d = n(873546),
    u = n(180650),
    m = n(979554),
    g = n(399606),
    p = n(622535),
    h = n(481060),
    f = n(727637),
    x = n(607070),
    N = n(100527),
    b = n(906732),
    _ = n(170046),
    E = n(333867),
    j = n(197115),
    C = n(876917),
    O = n(210887),
    v = n(751648),
    S = n(822857),
    T = n(960919),
    I = n(275388),
    y = n(74538),
    A = n(335131),
    P = n(1870),
    R = n(429368),
    D = n(884697),
    Z = n(664018),
    w = n(819570),
    k = n(228624),
    W = n(635552),
    L = n(290175),
    B = n(905357),
    M = n(724994),
    U = n(297651),
    V = n(390698),
    G = n(813083),
    F = n(680942),
    H = n(558060),
    z = n(237031),
    Y = n(508925),
    K = n(306092),
    q = n(453713),
    X = n(616066),
    J = n(216541),
    Q = n(22267),
    $ = n(67409),
    ee = n(58201),
    et = n(201964),
    en = n(361110),
    er = n(956472),
    ei = n(832149),
    es = n(215023),
    ea = n(981631),
    el = n(474936),
    eo = n(388032),
    ec = n(661252);
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function em(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let eg = (e) => {
        var { children: t, onClick: n } = e,
            i = em(e, ['children', 'onClick']);
        return (0, r.jsx)(
            h.zxk,
            eu(
                ed(
                    {
                        fullWidth: !0,
                        look: h.zxk.Looks.FILLED,
                        innerClassName: ec.cardButtonInner,
                        onClick: (e) => {
                            e.stopPropagation(), n(e);
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
            n = em(e, ['className']);
        return (0, r.jsx)(
            h.zxk,
            eu(
                ed(
                    {
                        color: h.Ttl.BRAND,
                        look: h.zxk.Looks.FILLED,
                        size: h.PhG.ICON,
                        className: a()(ec.previewButton, t),
                        innerClassName: ec.previewButtonInner,
                        'aria-label': eo.NW.string(eo.t.SKNnqq)
                    },
                    n
                ),
                {
                    children: (0, r.jsx)(h.tEF, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }
            )
        );
    },
    eh = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: i } = e;
        return (0, r.jsx)('div', {
            className: ec.profileEffectShopPreview,
            children: (0, r.jsx)(C.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: i && !n,
                removeSetHeight: !0
            })
        });
    },
    ef = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: i, user: s, item: l } = e;
        return (0, r.jsx)('div', {
            className: a()(ec.avatarContainer, t && ec.mysteryAvatarContainer),
            children: (0, r.jsx)(X.R, {
                item: l,
                user: s,
                isPurchased: i,
                isHighlighted: n
            })
        });
    },
    ex = (e) => {
        let { showStatus: t, width: n, opacity: i } = e;
        return (0, r.jsxs)('div', {
            className: a()(ec.nameplatePreviewSampleItem, ec.placeholderItem),
            style: { opacity: i },
            children: [
                (0, r.jsx)(h.qEK, {
                    src: null,
                    size: h.EFr.SIZE_32,
                    status: t ? ea.Skl.ONLINE : void 0,
                    statusColor: 'var(--background-modifier-accent)',
                    'aria-hidden': !0
                }),
                (0, r.jsx)('div', {
                    className: ec.placeholderBar,
                    style: { maxWidth: null != n ? n : '100px' }
                })
            ]
        });
    },
    eN = (e) => {
        let { user: t, nameplate: n, isHighlighted: i, isPurchased: s } = e;
        return (0, r.jsx)('div', {
            className: ec.nameplatePreviewRootContainer,
            children: (0, r.jsxs)('div', {
                className: ec.nameplatePreviewList,
                children: [
                    (0, r.jsxs)('div', {
                        className: ec.fadeIn,
                        children: [
                            (0, r.jsx)(ex, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, r.jsx)(ex, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, r.jsx)(Q.Z, {
                        user: t,
                        nameplate: n,
                        className: ec.nameplatePreviewSampleItem,
                        isHighlighted: i,
                        showWumpus: !i,
                        showStatus: !0,
                        isPurchased: s
                    }),
                    (0, r.jsxs)('div', {
                        className: ec.fadeOut,
                        children: [
                            (0, r.jsx)(ex, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, r.jsx)(ex, {
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
    eb =
        12633 == n.j
            ? function (e) {
                  let { product: t, user: n, category: s, onMount: l, isGiftEasterEggEnabled: C, isInFeedView: X, tab: Q } = e,
                      { analyticsLocations: ea } = (0, b.ZP)([...(X ? [N.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), N.Z.COLLECTIBLES_SHOP_CARD]),
                      em = i.useRef(null),
                      ex = (0, f.Z)(em),
                      [eb, e_] = i.useState(!1),
                      eE = ex || eb,
                      ej = (0, en.f)(t),
                      { previewingVariantIndex: eC } = ej,
                      eO = (0, B.T)(t),
                      ev = (0, g.e7)([x.Z], () => x.Z.useReducedMotion),
                      eS = y.ZP.canUseCollectibles(n),
                      eT = i.useMemo(() => (0, D.BH)(t, eS), [t, eS]),
                      eI = (0, D.G1)(t),
                      ey = (0, D.rN)(t),
                      [eA, eP, eR] = (0, g.Wu)([P.Z], () => [P.Z.isClaiming === t.skuId, null != P.Z.isClaiming && P.Z.isClaiming !== t.skuId, P.Z.purchases]),
                      eD = (0, et.o)(t, eR, eC),
                      eZ = (0, g.e7)([O.Z], () => (0, h.wjy)(O.Z.theme)),
                      ew = (0, D.Yq)(t.skuId),
                      ek = s.skuId === u.T.ANIME_V3 && (0, D.WW)(t.skuId),
                      { hoverVariant: eW } = (0, Z.E)('CollectiblesShopTallCard'),
                      eL = s.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
                      eB = (0, k.hv)('CollectiblesShopTallCard'),
                      eM = (0, R.o)(t, eR),
                      eU = (0, ee.W)(t, eM),
                      eV = (0, D.XM)(eU, eS, !1),
                      { isPurchased: eG, isPartiallyOwnedBundle: eF } = (0, M.L)(eU),
                      { isDisabled: eH } = (0, L.G)(eU.skuId),
                      ez = (0, D.ne)({
                          product: eU,
                          isPartiallyOwnedBundle: eF,
                          isPurchased: eG
                      }),
                      eY = null !== eC ? eC : eM,
                      [eK, eq] = i.useState(!1),
                      { enabled: eX } = (0, S.W)({ location: 'collectibles_shop_tall_card' }),
                      eJ = (0, _.N)('CollectiblesShopTallCard'),
                      { handleCardVisibilityChange: eQ } = (0, U.E)(eU.skuId, X ? 'home' : 'full'),
                      e$ = (0, w.E)('shop_tall_card');
                  i.useEffect(() => {
                      let { current: e } = em;
                      if (null == e) return;
                      let t = () => e_(!0),
                          n = (t) => {
                              e.contains(t.relatedTarget) || e_(!1);
                          };
                      return (
                          e.addEventListener('focusin', t),
                          e.addEventListener('focusout', n),
                          e.blur(),
                          () => {
                              e.removeEventListener('focusin', t), e.removeEventListener('focusout', n);
                          }
                      );
                  }, []),
                      i.useEffect(() => {
                          null == l || l(em);
                      }, [l]);
                  let e0 = i.useRef(null),
                      { handleUseNow: e1, isApplying: e2 } = (0, W.W)({ product: eU }),
                      {
                          displayPrices: e6,
                          checkoutEligiblePrices: e3,
                          isOrbExclusive: e8,
                          shouldCheckoutWithOrbs: e4,
                          hasSufficientOrbs: e7
                      } = (0, er.Ip)({
                          product: t,
                          isPremiumUser: eS,
                          tab: Q
                      }),
                      e9 = (e) => (n) => {
                          (e0.current = n.currentTarget),
                              (0, z.T)({
                                  product: t,
                                  category: s,
                                  shouldCheckoutWithOrbs: e4,
                                  analyticsLocations: ea,
                                  analyticsSource: e,
                                  returnRef: e0,
                                  tab: Q
                              });
                      },
                      e5 = e9(N.Z.COLLECTIBLES_SHOP_CARD),
                      te = e9(N.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                      tt = () =>
                          (0, r.jsx)('div', {
                              className: ec.hoverUpsellContainer,
                              children: (0, r.jsx)(j.Z, {
                                  fullWidth: !0,
                                  className: ec.__invalid_premiumSubscribeButton,
                                  disabled: eP,
                                  onClick: (e) => e.stopPropagation(),
                                  buttonText: eo.NW.string(eo.t.sEAnVF),
                                  subscriptionTier: el.Si.TIER_2
                              })
                          });
                  if (0 === e6.length) return null;
                  let tn = () =>
                          eI || d.tq || e8 || t.type === m.Z.NAMEPLATE || !ez || Q === es.AW.ORBS
                              ? null
                              : ey
                                ? (0, r.jsx)(ep, { onClick: te })
                                : (0, r.jsx)(F.Z, {
                                      product: t,
                                      selectedVariantIndex: eM,
                                      returnRef: em,
                                      isGiftEasterEggEnabled: C,
                                      tooltipDelay: 250
                                  }),
                      tr = () =>
                          (0, r.jsx)(eg, {
                              onClick: te,
                              children: eo.NW.string(eo.t.FdGl5O)
                          }),
                      ti = () =>
                          (0, r.jsx)(eg, {
                              onClick: () => {
                                  (0, E.Z)({
                                      skuId: (0, $.S)({
                                          product: t,
                                          selectedVariantIndex: eM
                                      }),
                                      analyticsLocations: ea,
                                      returnRef: em,
                                      variantsReturnStyle: eB
                                  });
                              },
                              children: eo.NW.formatToPlainString(eo.t['cNSL/v'], { price: eV })
                          }),
                      ts = () =>
                          (0, r.jsx)(eg, {
                              onClick: () => {
                                  (0, I.q)({
                                      skuId: (0, $.S)({
                                          product: t,
                                          selectedVariantIndex: eM
                                      }),
                                      onCheckoutSuccess: () => {
                                          (0, A.qg)({
                                              variantsReturnStyle: eB,
                                              location: 'collectible_checkout_with_orb'
                                          }),
                                              (0, ei.Z)({
                                                  product: t,
                                                  analyticsLocations: ea,
                                                  onCloseCallback: () => {
                                                      (0, v.vp)();
                                                  }
                                              });
                                      },
                                      analyticsLocations: ea
                                  }),
                                      (0, v.S6)();
                              },
                              children: eo.NW.format(eo.t.kAgx5O, {
                                  orbPrice: e3[0].amount,
                                  orbIconHook: () => (0, r.jsx)(T.Z, {})
                              })
                          }),
                      ta = () => {
                          let e = async () => {
                              await (0, A.fK)(t.skuId),
                                  (0, ei.Z)({
                                      product: t,
                                      analyticsLocations: ea
                                  });
                          };
                          return (0, r.jsx)(eg, {
                              onClick: e,
                              disabled: eP,
                              submitting: eA,
                              submittingStartedLabel: eo.NW.string(eo.t['TYw+9v']),
                              submittingFinishedLabel: eo.NW.string(eo.t.Pg1UPz),
                              children: eo.NW.string(eo.t.zp6caG)
                          });
                      },
                      tl = () =>
                          (0, r.jsx)(eg, {
                              onClick: e1,
                              submitting: e2,
                              children: eo.NW.string(eo.t.MAS7uL)
                          }),
                      to = () =>
                          (0, r.jsx)(eg, {
                              onClick: te,
                              children: eo.NW.string(eo.t.GpnHfH)
                          }),
                      tc = () => (!eI || eS || ey ? (!ez || eH ? tr() : eG ? tl() : eI ? ta() : e4 ? (e7 ? ts() : tr()) : Q === es.AW.ORBS ? to() : ti()) : tt());
                  return (0, D.x6)(t) && null != eT && eT.discountPercentage < 0
                      ? null
                      : (0, r.jsx)(p.$, {
                            innerRef: em,
                            onChange: eQ,
                            threshold: 0,
                            children: (0, r.jsx)(h.tEY, {
                                children: (0, r.jsxs)(h.kL8, {
                                    className: a()(eZ ? ec.shopCardDark : ec.shopCard, {
                                        [ec.partiallyOwned]: eF && !eE,
                                        [ec.shopCardAnimation]: !ev && eW !== Z.D.NO_MOVEMENT,
                                        [eZ ? ec.shopCardDarkHighlighted : ec.shopCardHighlighted]: eE,
                                        [ec.mysteryShopCard]: eL
                                    }),
                                    ref: em,
                                    onClick: e5,
                                    'aria-label': t.name,
                                    children: [
                                        eI &&
                                            (0, r.jsx)(h.ua7, {
                                                tooltipContentClassName: ec.premiumWheelTooltipContent,
                                                color: h.ua7.Colors.PRIMARY,
                                                text: eo.NW.string(eo.t.O2K0xM),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        h.IGR,
                                                        eu(ed({}, e), {
                                                            className: ec.premiumWheelBadge,
                                                            text: (0, r.jsx)(h.SrA, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: ec.premiumWheel
                                                            })
                                                        })
                                                    )
                                            }),
                                        (0, r.jsx)('div', {
                                            className: ec.preview,
                                            children: (0, c.EQ)(t.type)
                                                .with(m.Z.PROFILE_EFFECT, () =>
                                                    (0, r.jsx)(eh, {
                                                        isHighlighted: eE,
                                                        profileEffectId: eD.id,
                                                        isPurchased: eG
                                                    })
                                                )
                                                .with(
                                                    m.Z.AVATAR_DECORATION,
                                                    () => (
                                                        o()(eD.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                        (0, r.jsx)(ef, {
                                                            item: eD,
                                                            user: n,
                                                            isStormMysteryItem: eL,
                                                            isHighlighted: eE,
                                                            isPurchased: eG
                                                        })
                                                    )
                                                )
                                                .with(m.Z.NAMEPLATE, () =>
                                                    (0, r.jsx)(eN, {
                                                        user: n,
                                                        nameplate: eD,
                                                        isHighlighted: eE,
                                                        isPurchased: eG
                                                    })
                                                )
                                                .with(m.Z.BUNDLE, () =>
                                                    (0, r.jsx)(J.d, {
                                                        product: t,
                                                        user: n,
                                                        isPurchased: eG,
                                                        isHighlighted: eE
                                                    })
                                                )
                                                .with(m.Z.VARIANTS_GROUP, () => {
                                                    if (null == t.variants || 0 === t.variants.length) return null;
                                                    let e = t.variants[eY];
                                                    return null == e
                                                        ? null
                                                        : (0, c.EQ)(e.type)
                                                              .with(m.Z.PROFILE_EFFECT, () => {
                                                                  let [t] = e.items;
                                                                  return (0, r.jsx)(eh, {
                                                                      isHighlighted: eE,
                                                                      profileEffectId: t.id,
                                                                      isPurchased: eG && !eK
                                                                  });
                                                              })
                                                              .with(m.Z.AVATAR_DECORATION, () => {
                                                                  let [t] = e.items;
                                                                  return (
                                                                      o()(t.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                      (0, r.jsx)(ef, {
                                                                          item: t,
                                                                          user: n,
                                                                          isStormMysteryItem: eL,
                                                                          isHighlighted: eE,
                                                                          isPurchased: eG
                                                                      })
                                                                  );
                                                              })
                                                              .otherwise(() => null);
                                                })
                                                .with(m.Z.EXTERNAL_SKU, () =>
                                                    (0, r.jsx)(Y.b, {
                                                        product: t,
                                                        animationState: eE ? 'on' : 'off',
                                                        className: eH || (eG && !eE) ? ec.externalProductDimmed : void 0
                                                    })
                                                )
                                                .otherwise(() => null)
                                        }),
                                        (() => {
                                            let e = eG ? h.sV5 : eH ? h.mBM : null;
                                            return null == e
                                                ? null
                                                : (0, r.jsx)('div', {
                                                      className: ec.cardStateIconWrapper,
                                                      children: (0, r.jsx)(e, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          width: 38,
                                                          height: 38,
                                                          className: a()(ec.cardStateIcon, { [ec.checkmark]: eG })
                                                      })
                                                  });
                                        })(),
                                        (0, r.jsxs)('div', {
                                            className: a()(ec.cardText, eZ ? ec.darkCardBackground : ec.lightCardBackground, { [ec.variantsGroup]: t.type === m.Z.VARIANTS_GROUP }),
                                            children: [
                                                (0, r.jsx)(h.Text, {
                                                    variant: 'text-lg/bold',
                                                    className: ec.productName,
                                                    children: eO
                                                }),
                                                t.type === m.Z.VARIANTS_GROUP
                                                    ? (0, r.jsx)(q.P, {
                                                          variantGroupProduct: t,
                                                          previewingVariantIndexProps: ej,
                                                          setIsHoveringOnSwitch: eq,
                                                          purchases: eR,
                                                          minimal: !eE,
                                                          alternativeBackgroundColor: (null == eD ? void 0 : eD.type) === m.Z.PROFILE_EFFECT
                                                      })
                                                    : null,
                                                (0, r.jsxs)('div', {
                                                    className: ec.detailsWrapper,
                                                    children: [
                                                        (0, r.jsx)('div', {
                                                            className: ez ? ec.innerBlur : void 0,
                                                            children: eH
                                                                ? (0, r.jsx)(h.X6q, {
                                                                      variant: 'heading-md/semibold',
                                                                      color: 'header-muted',
                                                                      className: ec.priceTag,
                                                                      children: eo.NW.string(eo.t.wu4gyc)
                                                                  })
                                                                : eG || eF
                                                                  ? (0, r.jsx)(V.U, {
                                                                        className: ec.priceTag,
                                                                        isPartiallyPurchased: eF
                                                                    })
                                                                  : eI
                                                                    ? (0, r.jsx)(h.Text, {
                                                                          variant: 'text-md/semibold',
                                                                          className: ec.priceTag,
                                                                          children: eo.NW.string(eo.t.rt69oq)
                                                                      })
                                                                    : eX
                                                                      ? (0, r.jsx)(K.e, {
                                                                            displayPrices: e6,
                                                                            isPremiumUser: eS,
                                                                            discount: eT,
                                                                            hasSufficientOrbs: e7
                                                                        })
                                                                      : (0, r.jsx)(H.Z, {
                                                                            product: eU,
                                                                            discount: eT,
                                                                            isPremiumUser: eS,
                                                                            className: ec.priceTag,
                                                                            hideStrikethroughPrice: e$
                                                                        })
                                                        }),
                                                        (0, r.jsx)('div', {
                                                            className: ec.innerHover,
                                                            children: (0, r.jsxs)('div', {
                                                                className: ec.buttonsContainer,
                                                                children: [tc(), tn()]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(G.Z, {
                                            category: s,
                                            className: ec.limitedTimeBadge,
                                            display: 'card'
                                        }),
                                        eF || eG || !ew
                                            ? e8
                                                ? (0, r.jsx)(h.IGR, {
                                                      text: eo.NW.string(eo.t['KUYR+P']),
                                                      disableColor: !0,
                                                      className: ec.badge
                                                  })
                                                : ek
                                                  ? (0, r.jsx)(h.IGR, {
                                                        text: eo.NW.string(eo.t.S6kE9v),
                                                        disableColor: !0,
                                                        className: ec.badge
                                                    })
                                                  : s.skuId === u.T.NAMEPLATE && eJ
                                                    ? (0, r.jsx)(h.IGR, {
                                                          text: eo.NW.string(eo.t['soka7+']),
                                                          disableColor: !0,
                                                          className: ec.badge
                                                      })
                                                    : null
                                            : (0, r.jsx)(h.IGR, {
                                                  text: eo.NW.string(eo.t.y2b7CA),
                                                  disableColor: !0,
                                                  className: ec.badge
                                              })
                                    ]
                                })
                            })
                        });
              }
            : null;
