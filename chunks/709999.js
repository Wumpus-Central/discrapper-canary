n.d(t, {
    Z: () => eN,
    d: () => ef
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
    L = n(905357),
    B = n(724994),
    M = n(297651),
    U = n(390698),
    V = n(813083),
    G = n(680942),
    F = n(558060),
    H = n(237031),
    z = n(508925),
    Y = n(306092),
    K = n(453713),
    q = n(616066),
    X = n(216541),
    J = n(22267),
    Q = n(67409),
    $ = n(58201),
    ee = n(201964),
    et = n(361110),
    en = n(956472),
    er = n(832149),
    ei = n(215023),
    es = n(981631),
    ea = n(474936),
    el = n(388032),
    eo = n(661252);
function ec(e) {
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
function ed(e, t) {
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
function eu(e, t) {
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
let em = (e) => {
        var { children: t, onClick: n } = e,
            i = eu(e, ['children', 'onClick']);
        return (0, r.jsx)(
            h.zxk,
            ed(
                ec(
                    {
                        fullWidth: !0,
                        look: h.zxk.Looks.FILLED,
                        innerClassName: eo.cardButtonInner,
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
    eg = (e) => {
        var { className: t } = e,
            n = eu(e, ['className']);
        return (0, r.jsx)(
            h.zxk,
            ed(
                ec(
                    {
                        color: h.Ttl.BRAND,
                        look: h.zxk.Looks.FILLED,
                        size: h.PhG.ICON,
                        className: a()(eo.previewButton, t),
                        innerClassName: eo.previewButtonInner,
                        'aria-label': el.NW.string(el.t.SKNnqq)
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
    ep = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: i } = e;
        return (0, r.jsx)('div', {
            className: eo.profileEffectShopPreview,
            children: (0, r.jsx)(C.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: i && !n,
                removeSetHeight: !0
            })
        });
    },
    eh = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: i, user: s, item: l } = e;
        return (0, r.jsx)('div', {
            className: a()(eo.avatarContainer, t && eo.mysteryAvatarContainer),
            children: (0, r.jsx)(q.R, {
                item: l,
                user: s,
                isPurchased: i,
                isHighlighted: n
            })
        });
    },
    ef = (e) => {
        let { showStatus: t, width: n, opacity: i } = e;
        return (0, r.jsxs)('div', {
            className: a()(eo.nameplatePreviewSampleItem, eo.placeholderItem),
            style: { opacity: i },
            children: [
                (0, r.jsx)(h.qEK, {
                    src: null,
                    size: h.EFr.SIZE_32,
                    status: t ? es.Skl.ONLINE : void 0,
                    statusColor: 'var(--background-modifier-accent)',
                    'aria-hidden': !0
                }),
                (0, r.jsx)('div', {
                    className: eo.placeholderBar,
                    style: { maxWidth: null != n ? n : '100px' }
                })
            ]
        });
    },
    ex = (e) => {
        let { user: t, nameplate: n, isHighlighted: i, isPurchased: s } = e;
        return (0, r.jsx)('div', {
            className: eo.nameplatePreviewRootContainer,
            children: (0, r.jsxs)('div', {
                className: eo.nameplatePreviewList,
                children: [
                    (0, r.jsxs)('div', {
                        className: eo.fadeIn,
                        children: [
                            (0, r.jsx)(ef, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, r.jsx)(ef, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, r.jsx)(J.Z, {
                        user: t,
                        nameplate: n,
                        className: eo.nameplatePreviewSampleItem,
                        isHighlighted: i,
                        showWumpus: !i,
                        showStatus: !0,
                        isPurchased: s
                    }),
                    (0, r.jsxs)('div', {
                        className: eo.fadeOut,
                        children: [
                            (0, r.jsx)(ef, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, r.jsx)(ef, {
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
    eN =
        12633 == n.j
            ? function (e) {
                  let { product: t, user: n, category: s, onMount: l, isGiftEasterEggEnabled: C, isInFeedView: q, tab: J } = e,
                      { analyticsLocations: es } = (0, b.ZP)([...(q ? [N.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), N.Z.COLLECTIBLES_SHOP_CARD]),
                      eu = i.useRef(null),
                      ef = (0, f.Z)(eu),
                      [eN, eb] = i.useState(!1),
                      e_ = ef || eN,
                      eE = (0, et.f)(t),
                      { previewingVariantIndex: ej } = eE,
                      eC = (0, L.T)(t),
                      eO = (0, g.e7)([x.Z], () => x.Z.useReducedMotion),
                      ev = y.ZP.canUseCollectibles(n),
                      eS = i.useMemo(() => (0, D.BH)(t, ev), [t, ev]),
                      eT = (0, D.G1)(t),
                      eI = (0, D.rN)(t),
                      [ey, eA, eP] = (0, g.Wu)([P.Z], () => [P.Z.isClaiming === t.skuId, null != P.Z.isClaiming && P.Z.isClaiming !== t.skuId, P.Z.purchases]),
                      eR = (0, ee.o)(t, eP, ej),
                      eD = (0, g.e7)([O.Z], () => (0, h.wjy)(O.Z.theme)),
                      eZ = (0, D.Yq)(t.skuId),
                      ew = s.skuId === u.T.ANIME_V3 && (0, D.WW)(t.skuId),
                      { hoverVariant: ek } = (0, Z.E)('CollectiblesShopTallCard'),
                      eW = s.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
                      eL = (0, k.hv)('CollectiblesShopTallCard'),
                      eB = (0, R.o)(t, eP),
                      eM = (0, $.W)(t, eB),
                      eU = (0, D.XM)(eM, ev, !1),
                      { isPurchased: eV, isPartiallyOwnedBundle: eG } = (0, B.L)(eM),
                      eF = (0, D.ne)({
                          product: eM,
                          isPartiallyOwnedBundle: eG,
                          isPurchased: eV
                      }),
                      eH = null !== ej ? ej : eB,
                      [ez, eY] = i.useState(!1),
                      { enabled: eK } = (0, S.W)({ location: 'collectibles_shop_tall_card' }),
                      eq = (0, _.N)('CollectiblesShopTallCard'),
                      { handleCardVisibilityChange: eX } = (0, M.E)(eM.skuId, q ? 'home' : 'full'),
                      eJ = (0, w.E)('shop_tall_card');
                  i.useEffect(() => {
                      let { current: e } = eu;
                      if (null == e) return;
                      let t = () => eb(!0),
                          n = (t) => {
                              e.contains(t.relatedTarget) || eb(!1);
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
                          null == l || l(eu);
                      }, [l]);
                  let eQ = i.useRef(null),
                      { handleUseNow: e$, isApplying: e0 } = (0, W.W)({ product: eM }),
                      {
                          displayPrices: e1,
                          checkoutEligiblePrices: e2,
                          isOrbExclusive: e6,
                          shouldCheckoutWithOrbs: e3,
                          hasSufficientOrbs: e8
                      } = (0, en.Ip)({
                          product: t,
                          isPremiumUser: ev,
                          tab: J
                      }),
                      e4 = (e) => (n) => {
                          (eQ.current = n.currentTarget),
                              (0, H.T)({
                                  product: t,
                                  category: s,
                                  shouldCheckoutWithOrbs: e3,
                                  analyticsLocations: es,
                                  analyticsSource: e,
                                  returnRef: eQ,
                                  tab: J
                              });
                      },
                      e7 = e4(N.Z.COLLECTIBLES_SHOP_CARD),
                      e9 = e4(N.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                      e5 = () =>
                          (0, r.jsx)('div', {
                              className: eo.hoverUpsellContainer,
                              children: (0, r.jsx)(j.Z, {
                                  fullWidth: !0,
                                  className: eo.__invalid_premiumSubscribeButton,
                                  disabled: eA,
                                  onClick: (e) => e.stopPropagation(),
                                  buttonText: el.NW.string(el.t.sEAnVF),
                                  subscriptionTier: ea.Si.TIER_2
                              })
                          });
                  if (0 === e1.length) return null;
                  let te = () =>
                          eT || d.tq || e6 || t.type === m.Z.NAMEPLATE || !eF || J === ei.AW.ORBS
                              ? null
                              : eI
                                ? (0, r.jsx)(eg, { onClick: e9 })
                                : (0, r.jsx)(G.Z, {
                                      product: t,
                                      selectedVariantIndex: eB,
                                      returnRef: eu,
                                      isGiftEasterEggEnabled: C,
                                      tooltipDelay: 250
                                  }),
                      tt = () =>
                          (0, r.jsx)(em, {
                              onClick: e9,
                              children: el.NW.string(el.t.FdGl5O)
                          }),
                      tn = () =>
                          (0, r.jsx)(em, {
                              onClick: () => {
                                  (0, E.Z)({
                                      skuId: (0, Q.S)({
                                          product: t,
                                          selectedVariantIndex: eB
                                      }),
                                      analyticsLocations: es,
                                      returnRef: eu,
                                      variantsReturnStyle: eL
                                  });
                              },
                              children: el.NW.formatToPlainString(el.t['cNSL/v'], { price: eU })
                          }),
                      tr = () =>
                          (0, r.jsx)(em, {
                              onClick: () => {
                                  (0, I.q)({
                                      skuId: (0, Q.S)({
                                          product: t,
                                          selectedVariantIndex: eB
                                      }),
                                      onCheckoutSuccess: () => {
                                          (0, A.qg)({
                                              variantsReturnStyle: eL,
                                              location: 'collectible_checkout_with_orb'
                                          }),
                                              (0, er.Z)({
                                                  product: t,
                                                  analyticsLocations: es,
                                                  onCloseCallback: () => {
                                                      (0, v.vp)();
                                                  }
                                              });
                                      },
                                      analyticsLocations: es
                                  }),
                                      (0, v.S6)();
                              },
                              children: el.NW.format(el.t.kAgx5O, {
                                  orbPrice: e2[0].amount,
                                  orbIconHook: () => (0, r.jsx)(T.Z, {})
                              })
                          }),
                      ti = () => {
                          let e = async () => {
                              await (0, A.fK)(t.skuId),
                                  (0, er.Z)({
                                      product: t,
                                      analyticsLocations: es
                                  });
                          };
                          return (0, r.jsx)(em, {
                              onClick: e,
                              disabled: eA,
                              submitting: ey,
                              submittingStartedLabel: el.NW.string(el.t['TYw+9v']),
                              submittingFinishedLabel: el.NW.string(el.t.Pg1UPz),
                              children: el.NW.string(el.t.zp6caG)
                          });
                      },
                      ts = () =>
                          (0, r.jsx)(em, {
                              onClick: e$,
                              submitting: e0,
                              children: el.NW.string(el.t.MAS7uL)
                          }),
                      ta = () =>
                          (0, r.jsx)(em, {
                              onClick: e9,
                              children: el.NW.string(el.t.GpnHfH)
                          }),
                      tl = () => (!eT || ev || eI ? (eF ? (eV ? ts() : eT ? ti() : e3 ? (e8 ? tr() : tt()) : J === ei.AW.ORBS ? ta() : tn()) : tt()) : e5());
                  return (0, D.x6)(t) && null != eS && eS.discountPercentage < 0
                      ? null
                      : (0, r.jsx)(p.$, {
                            innerRef: eu,
                            onChange: eX,
                            threshold: 0,
                            children: (0, r.jsx)(h.tEY, {
                                children: (0, r.jsxs)(h.kL8, {
                                    className: a()(eD ? eo.shopCardDark : eo.shopCard, {
                                        [eo.partiallyOwned]: eG && !e_,
                                        [eo.shopCardAnimation]: !eO && ek !== Z.D.NO_MOVEMENT,
                                        [eD ? eo.shopCardDarkHighlighted : eo.shopCardHighlighted]: e_,
                                        [eo.mysteryShopCard]: eW
                                    }),
                                    ref: eu,
                                    onClick: e7,
                                    'aria-label': t.name,
                                    children: [
                                        eT &&
                                            (0, r.jsx)(h.ua7, {
                                                tooltipContentClassName: eo.premiumWheelTooltipContent,
                                                color: h.ua7.Colors.PRIMARY,
                                                text: el.NW.string(el.t.O2K0xM),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        h.IGR,
                                                        ed(ec({}, e), {
                                                            className: eo.premiumWheelBadge,
                                                            text: (0, r.jsx)(h.SrA, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: eo.premiumWheel
                                                            })
                                                        })
                                                    )
                                            }),
                                        (0, r.jsx)('div', {
                                            className: eo.preview,
                                            children: (0, c.EQ)(t.type)
                                                .with(m.Z.PROFILE_EFFECT, () =>
                                                    (0, r.jsx)(ep, {
                                                        isHighlighted: e_,
                                                        profileEffectId: eR.id,
                                                        isPurchased: eV
                                                    })
                                                )
                                                .with(
                                                    m.Z.AVATAR_DECORATION,
                                                    () => (
                                                        o()(eR.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                        (0, r.jsx)(eh, {
                                                            item: eR,
                                                            user: n,
                                                            isStormMysteryItem: eW,
                                                            isHighlighted: e_,
                                                            isPurchased: eV
                                                        })
                                                    )
                                                )
                                                .with(m.Z.NAMEPLATE, () =>
                                                    (0, r.jsx)(ex, {
                                                        user: n,
                                                        nameplate: eR,
                                                        isHighlighted: e_,
                                                        isPurchased: eV
                                                    })
                                                )
                                                .with(m.Z.BUNDLE, () =>
                                                    (0, r.jsx)(X.d, {
                                                        product: t,
                                                        user: n,
                                                        isPurchased: eV,
                                                        isHighlighted: e_
                                                    })
                                                )
                                                .with(m.Z.VARIANTS_GROUP, () => {
                                                    if (null == t.variants || 0 === t.variants.length) return null;
                                                    let e = t.variants[eH];
                                                    return null == e
                                                        ? null
                                                        : (0, c.EQ)(e.type)
                                                              .with(m.Z.PROFILE_EFFECT, () => {
                                                                  let [t] = e.items;
                                                                  return (0, r.jsx)(ep, {
                                                                      isHighlighted: e_,
                                                                      profileEffectId: t.id,
                                                                      isPurchased: eV && !ez
                                                                  });
                                                              })
                                                              .with(m.Z.AVATAR_DECORATION, () => {
                                                                  let [t] = e.items;
                                                                  return (
                                                                      o()(t.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                      (0, r.jsx)(eh, {
                                                                          item: t,
                                                                          user: n,
                                                                          isStormMysteryItem: eW,
                                                                          isHighlighted: e_,
                                                                          isPurchased: eV
                                                                      })
                                                                  );
                                                              })
                                                              .otherwise(() => null);
                                                })
                                                .with(m.Z.EXTERNAL_SKU, () =>
                                                    (0, r.jsx)(z.b, {
                                                        product: t,
                                                        animationState: e_ ? 'on' : 'off'
                                                    })
                                                )
                                                .otherwise(() => null)
                                        }),
                                        eV
                                            ? (0, r.jsx)('div', {
                                                  className: eo.checkmarkWrapper,
                                                  children: (0, r.jsx)(h.sV5, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: eo.checkmark
                                                  })
                                              })
                                            : null,
                                        (0, r.jsxs)('div', {
                                            className: a()(eo.cardText, eD ? eo.darkCardBackground : eo.lightCardBackground, { [eo.variantsGroup]: t.type === m.Z.VARIANTS_GROUP }),
                                            children: [
                                                (0, r.jsx)(h.Text, {
                                                    variant: 'text-lg/bold',
                                                    className: eo.productName,
                                                    children: eC
                                                }),
                                                t.type === m.Z.VARIANTS_GROUP
                                                    ? (0, r.jsx)(K.P, {
                                                          variantGroupProduct: t,
                                                          previewingVariantIndexProps: eE,
                                                          setIsHoveringOnSwitch: eY,
                                                          purchases: eP,
                                                          minimal: !e_,
                                                          alternativeBackgroundColor: (null == eR ? void 0 : eR.type) === m.Z.PROFILE_EFFECT
                                                      })
                                                    : null,
                                                (0, r.jsxs)('div', {
                                                    className: eo.detailsWrapper,
                                                    children: [
                                                        (0, r.jsx)('div', {
                                                            className: eF ? eo.innerBlur : void 0,
                                                            children:
                                                                eV || eG
                                                                    ? (0, r.jsx)(U.U, {
                                                                          className: eo.priceTag,
                                                                          isPartiallyPurchased: eG
                                                                      })
                                                                    : eT
                                                                      ? (0, r.jsx)(h.Text, {
                                                                            variant: 'text-md/semibold',
                                                                            className: eo.priceTag,
                                                                            children: el.NW.string(el.t.rt69oq)
                                                                        })
                                                                      : eK
                                                                        ? (0, r.jsx)(Y.e, {
                                                                              displayPrices: e1,
                                                                              isPremiumUser: ev,
                                                                              discount: eS
                                                                          })
                                                                        : (0, r.jsx)(F.Z, {
                                                                              product: eM,
                                                                              discount: eS,
                                                                              isPremiumUser: ev,
                                                                              className: eo.priceTag,
                                                                              hideStrikethroughPrice: eJ
                                                                          })
                                                        }),
                                                        (0, r.jsx)('div', {
                                                            className: eo.innerHover,
                                                            children: (0, r.jsxs)('div', {
                                                                className: eo.buttonsContainer,
                                                                children: [tl(), te()]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(V.Z, {
                                            category: s,
                                            className: eo.limitedTimeBadge,
                                            display: 'card'
                                        }),
                                        eG || eV || !eZ
                                            ? e6
                                                ? (0, r.jsx)(h.IGR, {
                                                      text: el.NW.string(el.t['KUYR+P']),
                                                      disableColor: !0,
                                                      className: eo.badge
                                                  })
                                                : ew
                                                  ? (0, r.jsx)(h.IGR, {
                                                        text: el.NW.string(el.t.S6kE9v),
                                                        disableColor: !0,
                                                        className: eo.badge
                                                    })
                                                  : s.skuId === u.T.NAMEPLATE && eq
                                                    ? (0, r.jsx)(h.IGR, {
                                                          text: el.NW.string(el.t['soka7+']),
                                                          disableColor: !0,
                                                          className: eo.badge
                                                      })
                                                    : null
                                            : (0, r.jsx)(h.IGR, {
                                                  text: el.NW.string(el.t.y2b7CA),
                                                  disableColor: !0,
                                                  className: eo.badge
                                              })
                                    ]
                                })
                            })
                        });
              }
            : null;
