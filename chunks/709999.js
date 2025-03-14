n.d(t, {
    Z: () => eh,
    d: () => eg
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
    D = n(819570),
    Z = n(228624),
    w = n(635552),
    k = n(905357),
    W = n(724994),
    L = n(297651),
    B = n(390698),
    M = n(813083),
    U = n(680942),
    V = n(558060),
    G = n(237031),
    F = n(508925),
    H = n(385797),
    z = n(453713),
    Y = n(616066),
    K = n(216541),
    q = n(22267),
    X = n(67409),
    J = n(58201),
    Q = n(201964),
    $ = n(361110),
    ee = n(956472),
    et = n(832149),
    en = n(474936),
    er = n(231338),
    ei = n(388032),
    es = n(661252);
function ea(e) {
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
function el(e, t) {
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
function eo(e, t) {
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
let ec = (e) => {
        var { children: t, onClick: n } = e,
            i = eo(e, ['children', 'onClick']);
        return (0, r.jsx)(
            h.zxk,
            el(
                ea(
                    {
                        fullWidth: !0,
                        look: h.zxk.Looks.FILLED,
                        innerClassName: es.cardButtonInner,
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
    ed = (e) => {
        var { className: t } = e,
            n = eo(e, ['className']);
        return (0, r.jsx)(
            h.zxk,
            el(
                ea(
                    {
                        color: h.Ttl.BRAND,
                        look: h.zxk.Looks.FILLED,
                        size: h.PhG.ICON,
                        className: a()(es.previewButton, t),
                        innerClassName: es.previewButtonInner,
                        'aria-label': ei.NW.string(ei.t.SKNnqq)
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
    eu = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: i } = e;
        return (0, r.jsx)('div', {
            className: es.profileEffectShopPreview,
            children: (0, r.jsx)(C.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: i && !n,
                removeSetHeight: !0
            })
        });
    },
    em = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: i, user: s, item: l } = e;
        return (0, r.jsx)('div', {
            className: a()(es.avatarContainer, t && es.mysteryAvatarContainer),
            children: (0, r.jsx)(Y.R, {
                item: l,
                user: s,
                isPurchased: i,
                isHighlighted: n
            })
        });
    },
    eg = (e) => {
        let { isDarkTheme: t } = e;
        return (0, r.jsx)(_.Z, {
            avatarSize: h.EFr.SIZE_32,
            className: a()(es.nameplatePreviewSampleItem, es.placeholderItem),
            childrenClassName: t ? es.placeholderItemChildrenDark : es.placeholderItemChildrenLight,
            doNotAnimate: !0
        });
    },
    ep = (e) => {
        let { user: t, isDarkTheme: n, nameplate: i, isHighlighted: s, isPurchased: a } = e;
        return (0, r.jsx)('div', {
            className: es.nameplatePreviewRootContainer,
            children: (0, r.jsxs)('div', {
                className: es.nameplatePreviewList,
                children: [
                    (0, r.jsx)(eg, { isDarkTheme: n }),
                    (0, r.jsx)(eg, { isDarkTheme: n }),
                    (0, r.jsx)(q.Z, {
                        user: t,
                        nameplate: i,
                        className: es.nameplatePreviewSampleItem,
                        isHighlighted: s,
                        showWumpus: !s,
                        showStatus: !0,
                        isPurchased: a
                    }),
                    (0, r.jsx)(eg, { isDarkTheme: n }),
                    (0, r.jsx)(eg, { isDarkTheme: n })
                ]
            })
        });
    },
    eh =
        12633 == n.j
            ? function (e) {
                  let { product: t, user: n, category: s, onMount: l, isGiftEasterEggEnabled: _, isInFeedView: C, tab: Y } = e,
                      { analyticsLocations: q } = (0, N.ZP)([...(C ? [x.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), x.Z.COLLECTIBLES_SHOP_CARD]),
                      eo = i.useRef(null),
                      eg = (0, f.Z)(eo),
                      [eh, ef] = i.useState(!1),
                      eb = eg || eh,
                      ex = (0, $.f)(t),
                      { previewingVariantIndex: eN } = ex,
                      e_ = (0, k.T)(t),
                      eE = (0, g.e7)([b.Z], () => b.Z.useReducedMotion),
                      ej = T.ZP.canUseCollectibles(n),
                      eC = i.useMemo(() => (0, P.BH)(t, ej), [t, ej]),
                      eO = (0, P.G1)(t),
                      ev = (0, P.rN)(t),
                      [eS, eT, eI] = (0, g.Wu)([y.Z], () => [y.Z.isClaiming === t.skuId, null != y.Z.isClaiming && y.Z.isClaiming !== t.skuId, y.Z.purchases]),
                      ey = (0, Q.o)(t, eI, eN),
                      eA = (0, g.e7)([O.Z], () => (0, h.wjy)(O.Z.theme)),
                      eP = (0, P.Yq)(t.skuId),
                      eR = s.skuId === u.T.ANIME_V3 && (0, P.WW)(t.skuId),
                      { hoverVariant: eD } = (0, R.E)('CollectiblesShopTallCard'),
                      eZ = s.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
                      ew = (0, Z.hv)('CollectiblesShopTallCard'),
                      ek = (0, A.o)(t, eI),
                      eW = (0, J.W)(t, ek),
                      eL = (0, P.XM)(eW, ej, !1),
                      { isPurchased: eB, isPartiallyOwnedBundle: eM } = (0, W.L)(eW),
                      eU = (0, P.ne)({
                          product: eW,
                          isPartiallyOwnedBundle: eM,
                          isPurchased: eB
                      }),
                      eV = null !== eN ? eN : ek,
                      [eG, eF] = i.useState(!1),
                      { enabled: eH } = (0, v.W)({ location: 'collectibles_shop_tall_card' }),
                      { handleCardVisibilityChange: ez } = (0, L.E)(eW.skuId, C ? 'home' : 'full'),
                      eY = (0, D.E)('shop_tall_card');
                  i.useEffect(() => {
                      let { current: e } = eo;
                      if (null == e) return;
                      let t = () => ef(!0),
                          n = (t) => {
                              e.contains(t.relatedTarget) || ef(!1);
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
                          null == l || l(eo);
                      }, [l]);
                  let eK = i.useRef(null),
                      { handleUseNow: eq, isApplying: eX } = (0, w.W)({ product: eW }),
                      {
                          displayPrices: eJ,
                          checkoutEligiblePrices: eQ,
                          isOrbExclusive: e$,
                          shouldCheckoutWithOrbs: e0
                      } = (0, ee.Ip)({
                          product: t,
                          isPremiumUser: ej,
                          tab: Y
                      }),
                      e1 = (e) => (n) => {
                          (eK.current = n.currentTarget),
                              (0, G.T)({
                                  product: t,
                                  category: s,
                                  shouldCheckoutWithOrbs: e0,
                                  analyticsLocations: q,
                                  analyticsSource: e,
                                  returnRef: eK,
                                  tab: Y
                              });
                      },
                      e2 = e1(x.Z.COLLECTIBLES_SHOP_CARD),
                      e6 = e1(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                      e3 = () =>
                          (0, r.jsx)('div', {
                              className: es.hoverUpsellContainer,
                              children: (0, r.jsx)(j.Z, {
                                  fullWidth: !0,
                                  className: es.__invalid_premiumSubscribeButton,
                                  disabled: eT,
                                  onClick: (e) => e.stopPropagation(),
                                  buttonText: ei.NW.string(ei.t.sEAnVF),
                                  subscriptionTier: en.Si.TIER_2
                              })
                          });
                  if (0 === eJ.length) return null;
                  let e8 = () =>
                      eO || d.tq || e$ || t.type === m.Z.NAMEPLATE || !eU
                          ? null
                          : ev
                            ? (0, r.jsx)(ed, { onClick: e6 })
                            : (0, r.jsx)(U.Z, {
                                  product: t,
                                  selectedVariantIndex: ek,
                                  returnRef: eo,
                                  isGiftEasterEggEnabled: _,
                                  disableCustomColor: !0,
                                  tooltipDelay: 250
                              });
                  return (0, P.x6)(t) && null != eC && eC.discountPercentage < 0
                      ? null
                      : (0, r.jsx)(p.$, {
                            onChange: ez,
                            threshold: 0,
                            children: (0, r.jsx)(h.tEY, {
                                children: (0, r.jsxs)(h.kL8, {
                                    className: a()(eA ? es.shopCardDark : es.shopCard, {
                                        [es.partiallyOwned]: eM && !eb,
                                        [es.shopCardAnimation]: !eE && eD !== R.D.NO_MOVEMENT,
                                        [eA ? es.shopCardDarkHighlighted : es.shopCardHighlighted]: eb,
                                        [es.mysteryShopCard]: eZ
                                    }),
                                    ref: eo,
                                    onClick: e2,
                                    'aria-label': t.name,
                                    children: [
                                        eO &&
                                            (0, r.jsx)(h.ua7, {
                                                tooltipContentClassName: es.premiumWheelTooltipContent,
                                                color: h.ua7.Colors.PRIMARY,
                                                text: ei.NW.string(ei.t.O2K0xM),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        h.IGR,
                                                        el(ea({}, e), {
                                                            className: es.premiumWheelBadge,
                                                            text: (0, r.jsx)(h.SrA, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: es.premiumWheel
                                                            })
                                                        })
                                                    )
                                            }),
                                        (0, r.jsx)('div', {
                                            className: es.preview,
                                            children: (0, c.EQ)(t.type)
                                                .with(m.Z.PROFILE_EFFECT, () =>
                                                    (0, r.jsx)(eu, {
                                                        isHighlighted: eb,
                                                        profileEffectId: ey.id,
                                                        isPurchased: eB
                                                    })
                                                )
                                                .with(
                                                    m.Z.AVATAR_DECORATION,
                                                    () => (
                                                        o()(ey.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                        (0, r.jsx)(em, {
                                                            item: ey,
                                                            user: n,
                                                            isStormMysteryItem: eZ,
                                                            isHighlighted: eb,
                                                            isPurchased: eB
                                                        })
                                                    )
                                                )
                                                .with(m.Z.NAMEPLATE, () =>
                                                    (0, r.jsx)(ep, {
                                                        user: n,
                                                        isDarkTheme: eA,
                                                        nameplate: ey,
                                                        isHighlighted: eb,
                                                        isPurchased: eB
                                                    })
                                                )
                                                .with(m.Z.BUNDLE, () =>
                                                    (0, r.jsx)(K.d, {
                                                        product: t,
                                                        user: n,
                                                        isPurchased: eB,
                                                        isHighlighted: eb
                                                    })
                                                )
                                                .with(m.Z.VARIANTS_GROUP, () => {
                                                    if (null == t.variants || 0 === t.variants.length) return null;
                                                    let e = t.variants[eV];
                                                    return null == e
                                                        ? null
                                                        : (0, c.EQ)(e.type)
                                                              .with(m.Z.PROFILE_EFFECT, () => {
                                                                  let [t] = e.items;
                                                                  return (0, r.jsx)(eu, {
                                                                      isHighlighted: eb,
                                                                      profileEffectId: t.id,
                                                                      isPurchased: eB && !eG
                                                                  });
                                                              })
                                                              .with(m.Z.AVATAR_DECORATION, () => {
                                                                  let [t] = e.items;
                                                                  return (
                                                                      o()(t.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                      (0, r.jsx)(em, {
                                                                          item: t,
                                                                          user: n,
                                                                          isStormMysteryItem: eZ,
                                                                          isHighlighted: eb,
                                                                          isPurchased: eB
                                                                      })
                                                                  );
                                                              })
                                                              .otherwise(() => null);
                                                })
                                                .with(m.Z.EXTERNAL_SKU, () => (0, r.jsx)(F.b, { product: t }))
                                                .otherwise(() => null)
                                        }),
                                        eB
                                            ? (0, r.jsx)('div', {
                                                  className: es.checkmarkWrapper,
                                                  children: (0, r.jsx)(h.sV5, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: es.checkmark
                                                  })
                                              })
                                            : null,
                                        (0, r.jsxs)('div', {
                                            className: a()(es.cardText, eA ? es.darkCardBackground : es.lightCardBackground, { [es.variantsGroup]: t.type === m.Z.VARIANTS_GROUP }),
                                            children: [
                                                (0, r.jsx)(h.Text, {
                                                    variant: 'text-lg/bold',
                                                    className: es.productName,
                                                    children: e_
                                                }),
                                                t.type === m.Z.VARIANTS_GROUP
                                                    ? (0, r.jsx)(z.P, {
                                                          variantGroupProduct: t,
                                                          previewingVariantIndexProps: ex,
                                                          setIsHoveringOnSwitch: eF,
                                                          purchases: eI,
                                                          minimal: !eb,
                                                          alternativeBackgroundColor: (null == ey ? void 0 : ey.type) === m.Z.PROFILE_EFFECT
                                                      })
                                                    : null,
                                                (0, r.jsxs)('div', {
                                                    className: es.detailsWrapper,
                                                    children: [
                                                        (0, r.jsx)('div', {
                                                            className: eU ? es.innerBlur : void 0,
                                                            children:
                                                                eB || eM
                                                                    ? (0, r.jsx)(B.U, {
                                                                          className: es.priceTag,
                                                                          isPartiallyPurchased: eM
                                                                      })
                                                                    : eO
                                                                      ? (0, r.jsx)(h.Text, {
                                                                            variant: 'text-md/semibold',
                                                                            className: es.priceTag,
                                                                            children: ei.NW.string(ei.t.rt69oq)
                                                                        })
                                                                      : eH
                                                                        ? (0, r.jsx)(H.Z, {
                                                                              displayPrices: eJ,
                                                                              isPremiumUser: ej
                                                                          })
                                                                        : (0, r.jsx)(V.Z, {
                                                                              product: eW,
                                                                              discount: eC,
                                                                              isPremiumUser: ej,
                                                                              className: es.priceTag,
                                                                              hideStrikethroughPrice: eY
                                                                          })
                                                        }),
                                                        (0, r.jsx)('div', {
                                                            className: es.innerHover,
                                                            children: (() => {
                                                                var e;
                                                                if (eO && !ej && !ev) return e3();
                                                                let n = eH && (null === (e = eQ[0]) || void 0 === e ? void 0 : e.currency) === er.pK.DISCORD_ORB,
                                                                    i = eO
                                                                        ? {
                                                                              submitting: eS,
                                                                              submittingStartedLabel: ei.NW.string(ei.t['TYw+9v']),
                                                                              submittingFinishedLabel: ei.NW.string(ei.t.Pg1UPz),
                                                                              onClick: async () => {
                                                                                  await (0, I.fK)(t.skuId),
                                                                                      (0, et.Z)({
                                                                                          product: t,
                                                                                          analyticsLocations: q
                                                                                      });
                                                                              }
                                                                          }
                                                                        : {
                                                                              onClick: (e) => {
                                                                                  n
                                                                                      ? e6(e)
                                                                                      : (0, E.Z)({
                                                                                            skuId: (0, X.S)({
                                                                                                product: t,
                                                                                                selectedVariantIndex: ek
                                                                                            }),
                                                                                            analyticsLocations: q,
                                                                                            returnRef: eo,
                                                                                            variantsReturnStyle: ew
                                                                                        });
                                                                              }
                                                                          };
                                                                return (0, r.jsxs)('div', {
                                                                    className: es.buttonsContainer,
                                                                    children: [
                                                                        eU
                                                                            ? eB
                                                                                ? (0, r.jsx)(ec, {
                                                                                      disabled: eT,
                                                                                      onClick: eq,
                                                                                      submitting: eX,
                                                                                      children: ei.NW.string(ei.t.MAS7uL)
                                                                                  })
                                                                                : (0, r.jsx)(
                                                                                      ec,
                                                                                      el(ea({ disabled: eT }, i), {
                                                                                          children: eO
                                                                                              ? ei.NW.string(ei.t.zp6caG)
                                                                                              : n
                                                                                                ? ei.NW.format(ei.t.kAgx5O, {
                                                                                                      orbPrice: eQ[0].amount,
                                                                                                      orbIconHook: () => (0, r.jsx)(S.Z, {})
                                                                                                  })
                                                                                                : ei.NW.formatToPlainString(ei.t['cNSL/v'], { price: eL })
                                                                                      })
                                                                                  )
                                                                            : null,
                                                                        e8()
                                                                    ]
                                                                });
                                                            })()
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(M.Z, {
                                            category: s,
                                            className: es.limitedTimeBadge,
                                            display: 'card'
                                        }),
                                        eM || eB || !eP
                                            ? e$
                                                ? (0, r.jsx)(h.IGR, {
                                                      text: ei.NW.string(ei.t.Q2K5pa),
                                                      disableColor: !0,
                                                      className: es.badge
                                                  })
                                                : eR
                                                  ? (0, r.jsx)(h.IGR, {
                                                        text: ei.NW.string(ei.t.S6kE9v),
                                                        disableColor: !0,
                                                        className: es.badge
                                                    })
                                                  : null
                                            : (0, r.jsx)(h.IGR, {
                                                  text: ei.NW.string(ei.t.y2b7CA),
                                                  disableColor: !0,
                                                  className: es.badge
                                              })
                                    ]
                                })
                            })
                        });
              }
            : null;
