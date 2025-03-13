n.d(t, {
    Z: () => ep,
    d: () => em
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
    b = n(607070),
    x = n(100527),
    N = n(906732),
    _ = n(693728),
    E = n(333867),
    j = n(197115),
    C = n(876917),
    O = n(210887),
    v = n(822857),
    S = n(960919),
    T = n(74538),
    I = n(335131),
    y = n(1870),
    A = n(429368),
    P = n(884697),
    R = n(664018),
    D = n(228624),
    Z = n(635552),
    w = n(905357),
    k = n(724994),
    W = n(297651),
    L = n(390698),
    B = n(813083),
    M = n(680942),
    U = n(558060),
    V = n(237031),
    G = n(508925),
    F = n(385797),
    H = n(453713),
    z = n(616066),
    Y = n(216541),
    K = n(22267),
    q = n(67409),
    X = n(58201),
    J = n(201964),
    Q = n(361110),
    $ = n(956472),
    ee = n(832149),
    et = n(474936),
    en = n(231338),
    er = n(388032),
    ei = n(661252);
function es(e) {
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
function ea(e, t) {
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
function el(e, t) {
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
let eo = (e) => {
        var { children: t, onClick: n } = e,
            i = el(e, ['children', 'onClick']);
        return (0, r.jsx)(
            h.zxk,
            ea(
                es(
                    {
                        fullWidth: !0,
                        look: h.zxk.Looks.FILLED,
                        innerClassName: ei.cardButtonInner,
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
    ec = (e) => {
        var { className: t } = e,
            n = el(e, ['className']);
        return (0, r.jsx)(
            h.zxk,
            ea(
                es(
                    {
                        color: h.Ttl.BRAND,
                        look: h.zxk.Looks.FILLED,
                        size: h.PhG.ICON,
                        className: a()(ei.previewButton, t),
                        innerClassName: ei.previewButtonInner,
                        'aria-label': er.NW.string(er.t.SKNnqq)
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
    ed = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: i } = e;
        return (0, r.jsx)('div', {
            className: ei.profileEffectShopPreview,
            children: (0, r.jsx)(C.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: i && !n,
                removeSetHeight: !0
            })
        });
    },
    eu = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: i, user: s, item: l } = e;
        return (0, r.jsx)('div', {
            className: a()(ei.avatarContainer, t && ei.mysteryAvatarContainer),
            children: (0, r.jsx)(z.R, {
                item: l,
                user: s,
                isPurchased: i,
                isHighlighted: n
            })
        });
    },
    em = (e) => {
        let { isDarkTheme: t } = e;
        return (0, r.jsx)(_.Z, {
            avatarSize: h.EFr.SIZE_32,
            className: a()(ei.nameplatePreviewSampleItem, ei.placeholderItem),
            childrenClassName: t ? ei.placeholderItemChildrenDark : ei.placeholderItemChildrenLight,
            doNotAnimate: !0
        });
    },
    eg = (e) => {
        let { user: t, isDarkTheme: n, nameplate: i, isHighlighted: s, isPurchased: a } = e;
        return (0, r.jsx)('div', {
            className: ei.nameplatePreviewRootContainer,
            children: (0, r.jsxs)('div', {
                className: ei.nameplatePreviewList,
                children: [
                    (0, r.jsx)(em, { isDarkTheme: n }),
                    (0, r.jsx)(em, { isDarkTheme: n }),
                    (0, r.jsx)(K.Z, {
                        user: t,
                        nameplate: i,
                        className: ei.nameplatePreviewSampleItem,
                        isHighlighted: s,
                        showWumpus: !s,
                        showStatus: !0,
                        isPurchased: a
                    }),
                    (0, r.jsx)(em, { isDarkTheme: n }),
                    (0, r.jsx)(em, { isDarkTheme: n })
                ]
            })
        });
    },
    ep =
        12633 == n.j
            ? function (e) {
                  let { product: t, user: n, category: s, onMount: l, isGiftEasterEggEnabled: _, isInFeedView: C, tab: z } = e,
                      { analyticsLocations: K } = (0, N.ZP)([...(C ? [x.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), x.Z.COLLECTIBLES_SHOP_CARD]),
                      el = i.useRef(null),
                      em = (0, f.Z)(el),
                      [ep, eh] = i.useState(!1),
                      ef = em || ep,
                      eb = (0, Q.f)(t),
                      { previewingVariantIndex: ex } = eb,
                      eN = (0, w.T)(t),
                      e_ = (0, g.e7)([b.Z], () => b.Z.useReducedMotion),
                      eE = T.ZP.canUseCollectibles(n),
                      ej = i.useMemo(() => (0, P.BH)(t, eE), [t, eE]),
                      eC = (0, P.G1)(t),
                      eO = (0, P.rN)(t),
                      [ev, eS, eT] = (0, g.Wu)([y.Z], () => [y.Z.isClaiming === t.skuId, null != y.Z.isClaiming && y.Z.isClaiming !== t.skuId, y.Z.purchases]),
                      eI = (0, J.o)(t, eT, ex),
                      ey = (0, g.e7)([O.Z], () => (0, h.wjy)(O.Z.theme)),
                      eA = (0, P.Yq)(t.skuId),
                      eP = s.skuId === u.T.ANIME_V3 && (0, P.WW)(t.skuId),
                      { hoverVariant: eR } = (0, R.E)('CollectiblesShopTallCard'),
                      eD = s.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
                      eZ = (0, D.hv)('CollectiblesShopTallCard'),
                      ew = (0, A.o)(t, eT),
                      ek = (0, X.W)(t, ew),
                      eW = (0, P.XM)(ek, eE, !1),
                      { isPurchased: eL, isPartiallyOwnedBundle: eB } = (0, k.L)(ek),
                      eM = (0, P.ne)({
                          product: ek,
                          isPartiallyOwnedBundle: eB,
                          isPurchased: eL
                      }),
                      eU = null !== ex ? ex : ew,
                      [eV, eG] = i.useState(!1),
                      { enabled: eF } = (0, v.W)({ location: 'collectibles_shop_tall_card' }),
                      { handleCardVisibilityChange: eH } = (0, W.E)(ek.skuId, C ? 'home' : 'full');
                  i.useEffect(() => {
                      let { current: e } = el;
                      if (null == e) return;
                      let t = () => eh(!0),
                          n = (t) => {
                              e.contains(t.relatedTarget) || eh(!1);
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
                          null == l || l(el);
                      }, [l]);
                  let ez = i.useRef(null),
                      { handleUseNow: eY, isApplying: eK } = (0, Z.W)({ product: ek }),
                      {
                          displayPrices: eq,
                          checkoutEligiblePrices: eX,
                          isOrbExclusive: eJ,
                          shouldCheckoutWithOrbs: eQ
                      } = (0, $.Ip)({
                          product: t,
                          isPremiumUser: eE,
                          tab: z
                      }),
                      e$ = (e) => (n) => {
                          (ez.current = n.currentTarget),
                              (0, V.T)({
                                  product: t,
                                  category: s,
                                  shouldCheckoutWithOrbs: eQ,
                                  analyticsLocations: K,
                                  analyticsSource: e,
                                  returnRef: ez,
                                  tab: z
                              });
                      },
                      e0 = e$(x.Z.COLLECTIBLES_SHOP_CARD),
                      e1 = e$(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                      e2 = () =>
                          (0, r.jsx)('div', {
                              className: ei.hoverUpsellContainer,
                              children: (0, r.jsx)(j.Z, {
                                  fullWidth: !0,
                                  className: ei.__invalid_premiumSubscribeButton,
                                  disabled: eS,
                                  onClick: (e) => e.stopPropagation(),
                                  buttonText: er.NW.string(er.t.sEAnVF),
                                  subscriptionTier: et.Si.TIER_2
                              })
                          });
                  if (0 === eq.length) return null;
                  let e6 = () =>
                      eC || d.tq || eJ || t.type === m.Z.NAMEPLATE || !eM
                          ? null
                          : eO
                            ? (0, r.jsx)(ec, { onClick: e1 })
                            : (0, r.jsx)(M.Z, {
                                  product: t,
                                  selectedVariantIndex: ew,
                                  returnRef: el,
                                  isGiftEasterEggEnabled: _,
                                  disableCustomColor: !0,
                                  tooltipDelay: 250
                              });
                  return (0, P.x6)(t) && null != ej && ej.discountPercentage < 0
                      ? null
                      : (0, r.jsx)(p.$, {
                            onChange: eH,
                            threshold: 0,
                            children: (0, r.jsx)(h.tEY, {
                                children: (0, r.jsxs)(h.kL8, {
                                    className: a()(ey ? ei.shopCardDark : ei.shopCard, {
                                        [ei.partiallyOwned]: eB && !ef,
                                        [ei.shopCardAnimation]: !e_ && eR !== R.D.NO_MOVEMENT,
                                        [ey ? ei.shopCardDarkHighlighted : ei.shopCardHighlighted]: ef,
                                        [ei.mysteryShopCard]: eD
                                    }),
                                    ref: el,
                                    onClick: e0,
                                    'aria-label': t.name,
                                    children: [
                                        eC &&
                                            (0, r.jsx)(h.ua7, {
                                                tooltipContentClassName: ei.premiumWheelTooltipContent,
                                                color: h.ua7.Colors.PRIMARY,
                                                text: er.NW.string(er.t.O2K0xM),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        h.IGR,
                                                        ea(es({}, e), {
                                                            className: ei.premiumWheelBadge,
                                                            text: (0, r.jsx)(h.SrA, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: ei.premiumWheel
                                                            })
                                                        })
                                                    )
                                            }),
                                        (0, r.jsx)('div', {
                                            className: ei.preview,
                                            children: (0, c.EQ)(t.type)
                                                .with(m.Z.PROFILE_EFFECT, () =>
                                                    (0, r.jsx)(ed, {
                                                        isHighlighted: ef,
                                                        profileEffectId: eI.id,
                                                        isPurchased: eL
                                                    })
                                                )
                                                .with(
                                                    m.Z.AVATAR_DECORATION,
                                                    () => (
                                                        o()(eI.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                        (0, r.jsx)(eu, {
                                                            item: eI,
                                                            user: n,
                                                            isStormMysteryItem: eD,
                                                            isHighlighted: ef,
                                                            isPurchased: eL
                                                        })
                                                    )
                                                )
                                                .with(m.Z.NAMEPLATE, () =>
                                                    (0, r.jsx)(eg, {
                                                        user: n,
                                                        isDarkTheme: ey,
                                                        nameplate: eI,
                                                        isHighlighted: ef,
                                                        isPurchased: eL
                                                    })
                                                )
                                                .with(m.Z.BUNDLE, () =>
                                                    (0, r.jsx)(Y.d, {
                                                        product: t,
                                                        user: n,
                                                        isPurchased: eL,
                                                        isHighlighted: ef
                                                    })
                                                )
                                                .with(m.Z.VARIANTS_GROUP, () => {
                                                    if (null == t.variants || 0 === t.variants.length) return null;
                                                    let e = t.variants[eU];
                                                    return null == e
                                                        ? null
                                                        : (0, c.EQ)(e.type)
                                                              .with(m.Z.PROFILE_EFFECT, () => {
                                                                  let [t] = e.items;
                                                                  return (0, r.jsx)(ed, {
                                                                      isHighlighted: ef,
                                                                      profileEffectId: t.id,
                                                                      isPurchased: eL && !eV
                                                                  });
                                                              })
                                                              .with(m.Z.AVATAR_DECORATION, () => {
                                                                  let [t] = e.items;
                                                                  return (
                                                                      o()(t.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                      (0, r.jsx)(eu, {
                                                                          item: t,
                                                                          user: n,
                                                                          isStormMysteryItem: eD,
                                                                          isHighlighted: ef,
                                                                          isPurchased: eL
                                                                      })
                                                                  );
                                                              })
                                                              .otherwise(() => null);
                                                })
                                                .with(m.Z.EXTERNAL_SKU, () => (0, r.jsx)(G.b, { product: t }))
                                                .otherwise(() => null)
                                        }),
                                        eL
                                            ? (0, r.jsx)('div', {
                                                  className: ei.checkmarkWrapper,
                                                  children: (0, r.jsx)(h.sV5, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: ei.checkmark
                                                  })
                                              })
                                            : null,
                                        (0, r.jsxs)('div', {
                                            className: a()(ei.cardText, ey ? ei.darkCardBackground : ei.lightCardBackground, { [ei.variantsGroup]: t.type === m.Z.VARIANTS_GROUP }),
                                            children: [
                                                (0, r.jsx)(h.Text, {
                                                    variant: 'text-lg/bold',
                                                    className: ei.productName,
                                                    children: eN
                                                }),
                                                t.type === m.Z.VARIANTS_GROUP
                                                    ? (0, r.jsx)(H.P, {
                                                          variantGroupProduct: t,
                                                          previewingVariantIndexProps: eb,
                                                          setIsHoveringOnSwitch: eG,
                                                          purchases: eT,
                                                          minimal: !ef,
                                                          alternativeBackgroundColor: (null == eI ? void 0 : eI.type) === m.Z.PROFILE_EFFECT
                                                      })
                                                    : null,
                                                (0, r.jsxs)('div', {
                                                    className: ei.detailsWrapper,
                                                    children: [
                                                        (0, r.jsx)('div', {
                                                            className: eM ? ei.innerBlur : void 0,
                                                            children:
                                                                eL || eB
                                                                    ? (0, r.jsx)(L.U, {
                                                                          className: ei.priceTag,
                                                                          isPartiallyPurchased: eB
                                                                      })
                                                                    : eC
                                                                      ? (0, r.jsx)(h.Text, {
                                                                            variant: 'text-md/semibold',
                                                                            className: ei.priceTag,
                                                                            children: er.NW.string(er.t.rt69oq)
                                                                        })
                                                                      : eF
                                                                        ? (0, r.jsx)(F.Z, {
                                                                              displayPrices: eq,
                                                                              isPremiumUser: eE
                                                                          })
                                                                        : (0, r.jsx)(U.Z, {
                                                                              product: ek,
                                                                              discount: ej,
                                                                              isPremiumUser: eE,
                                                                              className: ei.priceTag
                                                                          })
                                                        }),
                                                        (0, r.jsx)('div', {
                                                            className: ei.innerHover,
                                                            children: (() => {
                                                                var e;
                                                                if (eC && !eE && !eO) return e2();
                                                                let n = eF && (null === (e = eX[0]) || void 0 === e ? void 0 : e.currency) === en.pK.DISCORD_ORB,
                                                                    i = eC
                                                                        ? {
                                                                              submitting: ev,
                                                                              submittingStartedLabel: er.NW.string(er.t['TYw+9v']),
                                                                              submittingFinishedLabel: er.NW.string(er.t.Pg1UPz),
                                                                              onClick: async () => {
                                                                                  await (0, I.fK)(t.skuId),
                                                                                      (0, ee.Z)({
                                                                                          product: t,
                                                                                          analyticsLocations: K
                                                                                      });
                                                                              }
                                                                          }
                                                                        : {
                                                                              onClick: (e) => {
                                                                                  n
                                                                                      ? e1(e)
                                                                                      : (0, E.Z)({
                                                                                            skuId: (0, q.S)({
                                                                                                product: t,
                                                                                                selectedVariantIndex: ew
                                                                                            }),
                                                                                            analyticsLocations: K,
                                                                                            returnRef: el,
                                                                                            variantsReturnStyle: eZ
                                                                                        });
                                                                              }
                                                                          };
                                                                return (0, r.jsxs)('div', {
                                                                    className: ei.buttonsContainer,
                                                                    children: [
                                                                        eM
                                                                            ? eL
                                                                                ? (0, r.jsx)(eo, {
                                                                                      disabled: eS,
                                                                                      onClick: eY,
                                                                                      submitting: eK,
                                                                                      children: er.NW.string(er.t.MAS7uL)
                                                                                  })
                                                                                : (0, r.jsx)(
                                                                                      eo,
                                                                                      ea(es({ disabled: eS }, i), {
                                                                                          children: eC
                                                                                              ? er.NW.string(er.t.zp6caG)
                                                                                              : n
                                                                                                ? er.NW.format(er.t.kAgx5O, {
                                                                                                      orbPrice: eX[0].amount,
                                                                                                      orbIconHook: () => (0, r.jsx)(S.Z, {})
                                                                                                  })
                                                                                                : er.NW.formatToPlainString(er.t['cNSL/v'], { price: eW })
                                                                                      })
                                                                                  )
                                                                            : null,
                                                                        e6()
                                                                    ]
                                                                });
                                                            })()
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(B.Z, {
                                            category: s,
                                            className: ei.limitedTimeBadge,
                                            display: 'card'
                                        }),
                                        eB || eL || !eA
                                            ? eJ
                                                ? (0, r.jsx)(h.IGR, {
                                                      text: er.NW.string(er.t.Q2K5pa),
                                                      disableColor: !0,
                                                      className: ei.badge
                                                  })
                                                : eP
                                                  ? (0, r.jsx)(h.IGR, {
                                                        text: er.NW.string(er.t.S6kE9v),
                                                        disableColor: !0,
                                                        className: ei.badge
                                                    })
                                                  : null
                                            : (0, r.jsx)(h.IGR, {
                                                  text: er.NW.string(er.t.y2b7CA),
                                                  disableColor: !0,
                                                  className: ei.badge
                                              })
                                    ]
                                })
                            })
                        });
              }
            : null;
