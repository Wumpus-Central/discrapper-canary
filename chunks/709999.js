r.d(t, { Z: () => eb }), r(47120), r(627341);
var n = r(200651),
    i = r(192379),
    l = r(120356),
    o = r.n(l),
    a = r(512722),
    s = r.n(a),
    c = r(278074),
    d = r(873546),
    u = r(180650),
    p = r(979554),
    f = r(399606),
    h = r(622535),
    b = r(663002),
    C = r(481060),
    m = r(276264),
    g = r(727637),
    v = r(607070),
    x = r(100527),
    j = r(906732),
    _ = r(693728),
    y = r(333867),
    O = r(197115),
    k = r(876917),
    P = r(210887),
    S = r(822857),
    w = r(960919),
    E = r(74538),
    L = r(335131),
    I = r(1870),
    N = r(429368),
    T = r(884697),
    B = r(664018),
    Z = r(228624),
    F = r(635552),
    A = r(905357),
    R = r(724994),
    W = r(297651),
    D = r(390698),
    H = r(813083),
    M = r(680942),
    V = r(558060),
    U = r(237031),
    G = r(385797),
    z = r(453713),
    q = r(616066),
    K = r(216541),
    $ = r(67409),
    J = r(58201),
    X = r(201964),
    Y = r(361110),
    Q = r(956472),
    ee = r(832149),
    et = r(474936),
    er = r(231338),
    en = r(388032),
    ei = r(864544),
    el = r(748241);
function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
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
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function es(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    }
    return i;
}
let ec = (e) => {
        var { children: t, onClick: r } = e,
            i = es(e, ['children', 'onClick']);
        return (0, n.jsx)(
            C.zxk,
            ea(
                eo(
                    {
                        fullWidth: !0,
                        look: C.zxk.Looks.FILLED,
                        innerClassName: ei.cardButtonInner,
                        onClick: (e) => {
                            e.stopPropagation(), r(e);
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
            r = es(e, ['className']);
        return (0, n.jsx)(
            C.zxk,
            ea(
                eo(
                    {
                        color: C.Ttl.BRAND,
                        look: C.zxk.Looks.FILLED,
                        size: C.PhG.ICON,
                        className: o()(ei.previewButton, t),
                        innerClassName: ei.previewButtonInner,
                        'aria-label': en.NW.string(en.t.SKNnqq)
                    },
                    r
                ),
                {
                    children: (0, n.jsx)(C.tEF, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }
            )
        );
    },
    eu = (e) => {
        let { profileEffectId: t, isHighlighted: r, isPurchased: i } = e;
        return (0, n.jsx)('div', {
            className: ei.profileEffectShopPreview,
            children: (0, n.jsx)(k.Z, {
                profileEffectId: t,
                isHovering: r,
                isPurchased: i && !r,
                removeSetHeight: !0
            })
        });
    },
    ep = (e) => {
        let { isStormMysteryItem: t, isHighlighted: r, isPurchased: i, user: l, item: a } = e;
        return (0, n.jsx)('div', {
            className: o()(ei.avatarContainer, t && ei.mysteryAvatarContainer),
            children: (0, n.jsx)(q.R, {
                item: a,
                user: l,
                isPurchased: i,
                isHighlighted: r
            })
        });
    },
    ef = (e) => {
        let { isDarkTheme: t } = e;
        return (0, n.jsx)(_.Z, {
            avatarSize: C.EFr.SIZE_32,
            className: o()(el.placeholder, ei.nameplatePreviewSampleItem),
            childrenClassName: t ? ei.placeholderItemChildrenDark : ei.placeholderItemChildrenLight,
            doNotAnimate: !0
        });
    },
    eh = (e) => {
        let { user: t, isDarkTheme: r } = e;
        return (0, n.jsx)('div', {
            className: ei.nameplatePreviewRootContainer,
            children: (0, n.jsxs)('div', {
                className: ei.nameplatePreviewList,
                children: [
                    (0, n.jsx)(ef, { isDarkTheme: r }),
                    (0, n.jsx)(ef, { isDarkTheme: r }),
                    (0, n.jsx)(m.Z, {
                        user: t,
                        className: ei.nameplatePreviewSampleItem,
                        hideClanTag: !0,
                        hideSubtext: !0
                    }),
                    (0, n.jsx)(ef, { isDarkTheme: r }),
                    (0, n.jsx)(ef, { isDarkTheme: r })
                ]
            })
        });
    },
    eb = function (e) {
        let { product: t, user: r, category: l, onMount: a, isGiftEasterEggEnabled: m, isInFeedView: _, tab: k } = e,
            { analyticsLocations: q } = (0, j.ZP)([...(_ ? [x.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), x.Z.COLLECTIBLES_SHOP_CARD]),
            el = i.useRef(null),
            es = (0, g.Z)(el),
            [ef, eb] = i.useState(!1),
            eC = es || ef,
            em = (0, Y.f)(t),
            { previewingVariantIndex: eg } = em,
            ev = (0, A.T)(t),
            ex = (0, f.e7)([v.Z], () => v.Z.useReducedMotion),
            ej = E.ZP.canUseCollectibles(r),
            e_ = i.useMemo(() => (0, T.BH)(t, ej), [t, ej]),
            ey = (0, T.G1)(t),
            eO = (0, T.rN)(t),
            [ek, eP, eS] = (0, f.Wu)([I.Z], () => [I.Z.isClaiming === t.skuId, null != I.Z.isClaiming && I.Z.isClaiming !== t.skuId, I.Z.purchases]),
            ew = (0, X.o)(t, eS, eg),
            eE = (0, f.e7)([P.Z], () => (0, b.wj)(P.Z.theme)),
            eL = (0, T.Yq)(t.skuId),
            eI = l.skuId === u.T.ANIME_V3 && (0, T.WW)(t.skuId),
            { hoverVariant: eN } = (0, B.E)('CollectiblesShopTallCard'),
            eT = l.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
            eB = (0, Z.hv)('CollectiblesShopTallCard'),
            eZ = (0, N.o)(t, eS),
            eF = (0, J.W)(t, eZ),
            eA = (0, T.XM)(eF, ej, !1),
            { isPurchased: eR, isPartiallyOwnedBundle: eW } = (0, R.L)(eF),
            eD = null !== eg ? eg : eZ,
            [eH, eM] = i.useState(!1),
            { enabled: eV } = (0, S.W)({ location: 'collectibles_shop_tall_card' }),
            { handleCardVisibilityChange: eU } = (0, W.E)(eF.skuId, _ ? 'home' : 'full');
        i.useEffect(() => {
            let { current: e } = el;
            if (null == e) return;
            let t = () => eb(!0),
                r = (t) => {
                    e.contains(t.relatedTarget) || eb(!1);
                };
            return (
                e.addEventListener('focusin', t),
                e.addEventListener('focusout', r),
                e.blur(),
                () => {
                    e.removeEventListener('focusin', t), e.removeEventListener('focusout', r);
                }
            );
        }, []),
            i.useEffect(() => {
                null == a || a(el);
            }, [a]);
        let eG = i.useRef(null),
            { handleUseNow: ez, isApplying: eq } = (0, F.W)({ product: eF }),
            eK = (e) => (r) => {
                (eG.current = r.currentTarget),
                    (0, U.T)({
                        product: t,
                        category: l,
                        analyticsLocations: q,
                        analyticsSource: e,
                        returnRef: eG,
                        tab: k
                    });
            },
            e$ = eK(x.Z.COLLECTIBLES_SHOP_CARD),
            eJ = eK(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            eX = () =>
                (0, n.jsx)('div', {
                    className: ei.hoverUpsellContainer,
                    children: (0, n.jsx)(O.Z, {
                        fullWidth: !0,
                        className: ei.__invalid_premiumSubscribeButton,
                        disabled: eP,
                        onClick: (e) => e.stopPropagation(),
                        buttonText: en.NW.string(en.t.sEAnVF),
                        subscriptionTier: et.Si.TIER_2
                    })
                }),
            {
                displayPrices: eY,
                checkoutEligiblePrices: eQ,
                isOrbExclusive: e1
            } = (0, Q.I)({
                product: t,
                isPremiumUser: ej,
                tab: k
            });
        if (0 === eY.length) return null;
        let e0 = () =>
            ey || d.tq
                ? null
                : eO
                  ? (0, n.jsx)(ed, { onClick: eJ })
                  : (0, n.jsx)(M.Z, {
                        product: t,
                        selectedVariantIndex: eZ,
                        returnRef: el,
                        isGiftEasterEggEnabled: m,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    });
        return (0, T.x6)(t) && null != e_ && e_.discountPercentage < 0
            ? null
            : (0, n.jsx)(h.$, {
                  onChange: eU,
                  threshold: 0,
                  children: (0, n.jsx)(C.tEY, {
                      children: (0, n.jsxs)(C.kL8, {
                          className: o()(eE ? ei.shopCardDark : ei.shopCard, {
                              [ei.partiallyOwned]: eW && !eC,
                              [ei.shopCardAnimation]: !ex && eN !== B.D.NO_MOVEMENT,
                              [eE ? ei.shopCardDarkHighlighted : ei.shopCardHighlighted]: eC,
                              [ei.mysteryShopCard]: eT
                          }),
                          ref: el,
                          onClick: e$,
                          'aria-label': t.name,
                          children: [
                              ey &&
                                  (0, n.jsx)(C.ua7, {
                                      tooltipContentClassName: ei.premiumWheelTooltipContent,
                                      color: C.ua7.Colors.PRIMARY,
                                      text: en.NW.string(en.t.O2K0xM),
                                      children: (e) =>
                                          (0, n.jsx)(
                                              C.IGR,
                                              ea(eo({}, e), {
                                                  className: ei.premiumWheelBadge,
                                                  text: (0, n.jsx)(C.SrA, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: ei.premiumWheel
                                                  })
                                              })
                                          )
                                  }),
                              (0, n.jsx)('div', {
                                  className: ei.preview,
                                  children: (0, c.EQ)(t.type)
                                      .with(p.Z.PROFILE_EFFECT, () =>
                                          (0, n.jsx)(eu, {
                                              isHighlighted: eC,
                                              profileEffectId: ew.id,
                                              isPurchased: eR
                                          })
                                      )
                                      .with(
                                          p.Z.AVATAR_DECORATION,
                                          () => (
                                              s()(ew.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                              (0, n.jsx)(ep, {
                                                  item: ew,
                                                  user: r,
                                                  isStormMysteryItem: eT,
                                                  isHighlighted: eC,
                                                  isPurchased: eR
                                              })
                                          )
                                      )
                                      .with(p.Z.NAMEPLATE, () =>
                                          (0, n.jsx)(eh, {
                                              user: r,
                                              isDarkTheme: eE
                                          })
                                      )
                                      .with(p.Z.BUNDLE, () =>
                                          (0, n.jsx)(K.d, {
                                              product: t,
                                              user: r,
                                              isPurchased: eR,
                                              isHighlighted: eC
                                          })
                                      )
                                      .with(p.Z.VARIANTS_GROUP, () => {
                                          if (null == t.variants || 0 === t.variants.length) return null;
                                          let e = t.variants[eD];
                                          return null == e
                                              ? null
                                              : (0, c.EQ)(e.type)
                                                    .with(p.Z.PROFILE_EFFECT, () => {
                                                        let [t] = e.items;
                                                        return (0, n.jsx)(eu, {
                                                            isHighlighted: eC,
                                                            profileEffectId: t.id,
                                                            isPurchased: eR && !eH
                                                        });
                                                    })
                                                    .with(p.Z.AVATAR_DECORATION, () => {
                                                        let [t] = e.items;
                                                        return (
                                                            s()(t.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                            (0, n.jsx)(ep, {
                                                                item: t,
                                                                user: r,
                                                                isStormMysteryItem: eT,
                                                                isHighlighted: eC,
                                                                isPurchased: eR
                                                            })
                                                        );
                                                    })
                                                    .otherwise(() => null);
                                      })
                                      .otherwise(() => null)
                              }),
                              eR
                                  ? (0, n.jsx)('div', {
                                        className: ei.checkmarkWrapper,
                                        children: (0, n.jsx)(C.sV5, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 38,
                                            height: 38,
                                            className: ei.checkmark
                                        })
                                    })
                                  : null,
                              (0, n.jsxs)('div', {
                                  className: o()(ei.cardText, eE ? ei.darkCardBackground : ei.lightCardBackground, { [ei.variantsGroup]: t.type === p.Z.VARIANTS_GROUP }),
                                  children: [
                                      (0, n.jsx)(C.Text, {
                                          variant: 'text-lg/bold',
                                          className: ei.productName,
                                          children: ev
                                      }),
                                      t.type === p.Z.VARIANTS_GROUP
                                          ? (0, n.jsx)(z.P, {
                                                variantGroupProduct: t,
                                                previewingVariantIndexProps: em,
                                                setIsHoveringOnSwitch: eM,
                                                purchases: eS,
                                                minimal: !eC,
                                                alternativeBackgroundColor: (null == ew ? void 0 : ew.type) === p.Z.PROFILE_EFFECT
                                            })
                                          : null,
                                      (0, n.jsxs)('div', {
                                          className: ei.detailsWrapper,
                                          children: [
                                              (0, n.jsx)('div', {
                                                  className: eW ? void 0 : ei.innerBlur,
                                                  children:
                                                      eR || eW
                                                          ? (0, n.jsx)(D.U, {
                                                                className: ei.priceTag,
                                                                isPartiallyPurchased: eW
                                                            })
                                                          : ey
                                                            ? (0, n.jsx)(C.Text, {
                                                                  variant: 'text-md/semibold',
                                                                  className: ei.priceTag,
                                                                  children: en.NW.string(en.t.rt69oq)
                                                              })
                                                            : eV
                                                              ? (0, n.jsx)(G.Z, {
                                                                    displayPrices: eY,
                                                                    isPremiumUser: ej
                                                                })
                                                              : (0, n.jsx)(V.Z, {
                                                                    product: eF,
                                                                    discount: e_,
                                                                    isPremiumUser: ej,
                                                                    className: ei.priceTag
                                                                })
                                              }),
                                              (0, n.jsx)('div', {
                                                  className: ei.innerHover,
                                                  children: (() => {
                                                      var e;
                                                      if (ey && !ej && !eO) return eX();
                                                      let r = eV && (null === (e = eQ[0]) || void 0 === e ? void 0 : e.currency) === er.pK.DISCORD_ORB,
                                                          i = ey
                                                              ? {
                                                                    submitting: ek,
                                                                    submittingStartedLabel: en.NW.string(en.t['TYw+9v']),
                                                                    submittingFinishedLabel: en.NW.string(en.t.Pg1UPz),
                                                                    onClick: async () => {
                                                                        await (0, L.fK)(t.skuId),
                                                                            (0, ee.Z)({
                                                                                product: t,
                                                                                analyticsLocations: q
                                                                            });
                                                                    }
                                                                }
                                                              : {
                                                                    onClick: (e) => {
                                                                        r
                                                                            ? eJ(e)
                                                                            : (0, y.Z)({
                                                                                  skuId: (0, $.S)({
                                                                                      product: t,
                                                                                      selectedVariantIndex: eZ
                                                                                  }),
                                                                                  analyticsLocations: q,
                                                                                  returnRef: el,
                                                                                  variantsReturnStyle: eB
                                                                              });
                                                                    }
                                                                };
                                                      return (0, n.jsxs)('div', {
                                                          className: ei.buttonsContainer,
                                                          children: [
                                                              eW
                                                                  ? null
                                                                  : eR
                                                                    ? (0, n.jsx)(ec, {
                                                                          disabled: eP,
                                                                          onClick: ez,
                                                                          submitting: eq,
                                                                          children: en.NW.string(en.t.MAS7uL)
                                                                      })
                                                                    : (0, n.jsx)(
                                                                          ec,
                                                                          ea(eo({ disabled: eP }, i), {
                                                                              children: ey
                                                                                  ? en.NW.string(en.t.zp6caG)
                                                                                  : r
                                                                                    ? en.NW.format(en.t.kAgx5O, {
                                                                                          orbPrice: eQ[0].amount,
                                                                                          orbIconHook: () => (0, n.jsx)(w.Z, {})
                                                                                      })
                                                                                    : en.NW.formatToPlainString(en.t['cNSL/v'], { price: eA })
                                                                          })
                                                                      ),
                                                              e0()
                                                          ]
                                                      });
                                                  })()
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, n.jsx)(H.Z, {
                                  category: l,
                                  className: ei.limitedTimeBadge,
                                  display: 'card'
                              }),
                              eW || eR || !eL
                                  ? e1
                                      ? (0, n.jsx)(C.IGR, {
                                            text: en.NW.string(en.t.Q2K5pa),
                                            disableColor: !0,
                                            className: ei.badge
                                        })
                                      : eI
                                        ? (0, n.jsx)(C.IGR, {
                                              text: en.NW.string(en.t.S6kE9v),
                                              disableColor: !0,
                                              className: ei.badge
                                          })
                                        : null
                                  : (0, n.jsx)(C.IGR, {
                                        text: en.NW.string(en.t.y2b7CA),
                                        disableColor: !0,
                                        className: ei.badge
                                    })
                          ]
                      })
                  })
              });
    };
