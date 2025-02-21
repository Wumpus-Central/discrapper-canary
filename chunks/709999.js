r.d(t, { Z: () => eC }), r(47120), r(627341);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    a = r.n(i),
    o = r(512722),
    s = r.n(o),
    c = r(278074),
    d = r(873546),
    u = r(180650),
    p = r(979554),
    f = r(399606),
    h = r(622535),
    C = r(663002),
    m = r(481060),
    b = r(276264),
    g = r(727637),
    v = r(607070),
    x = r(100527),
    _ = r(906732),
    j = r(693728),
    y = r(333867),
    O = r(197115),
    k = r(876917),
    P = r(210887),
    S = r(822857),
    E = r(960919),
    w = r(74538),
    L = r(335131),
    I = r(1870),
    T = r(429368),
    N = r(884697),
    B = r(664018),
    Z = r(228624),
    F = r(635552),
    A = r(905357),
    R = r(724994),
    W = r(297651),
    H = r(390698),
    D = r(813083),
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
    el = r(864544),
    ei = r(748241);
function ea(e) {
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
function eo(e, t) {
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
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    }
    return l;
}
let ec = (e) => {
        var { children: t, onClick: r } = e,
            l = es(e, ['children', 'onClick']);
        return (0, n.jsx)(
            m.zxk,
            eo(
                ea(
                    {
                        fullWidth: !0,
                        look: m.zxk.Looks.FILLED,
                        innerClassName: el.cardButtonInner,
                        onClick: (e) => {
                            e.stopPropagation(), r(e);
                        }
                    },
                    l
                ),
                { children: t }
            )
        );
    },
    ed = (e) => {
        var { className: t } = e,
            r = es(e, ['className']);
        return (0, n.jsx)(
            m.zxk,
            eo(
                ea(
                    {
                        color: m.Ttl.BRAND,
                        look: m.zxk.Looks.FILLED,
                        size: m.PhG.ICON,
                        className: a()(el.previewButton, t),
                        innerClassName: el.previewButtonInner,
                        'aria-label': en.NW.string(en.t.SKNnqq)
                    },
                    r
                ),
                {
                    children: (0, n.jsx)(m.tEF, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }
            )
        );
    },
    eu = (e) => {
        let { profileEffectId: t, isHighlighted: r, isPurchased: l } = e;
        return (0, n.jsx)('div', {
            className: el.profileEffectShopPreview,
            children: (0, n.jsx)(k.Z, {
                profileEffectId: t,
                isHovering: r,
                isPurchased: l && !r,
                removeSetHeight: !0
            })
        });
    },
    ep = (e) => {
        let { isStormMysteryItem: t, isHighlighted: r, isPurchased: l, user: i, item: o } = e;
        return (0, n.jsx)('div', {
            className: a()(el.avatarContainer, t && el.mysteryAvatarContainer),
            children: (0, n.jsx)(q.R, {
                item: o,
                user: i,
                isPurchased: l,
                isHighlighted: r
            })
        });
    },
    ef = (e) => {
        let { isDarkTheme: t } = e;
        return (0, n.jsx)(j.Z, {
            avatarSize: m.EFr.SIZE_32,
            className: a()(ei.placeholder, el.nameplatePreviewSampleItem),
            childrenClassName: t ? el.placeholderItemChildrenDark : el.placeholderItemChildrenLight,
            doNotAnimate: !0
        });
    },
    eh = (e) => {
        let { user: t, isDarkTheme: r } = e;
        return (0, n.jsx)('div', {
            className: el.nameplatePreviewRootContainer,
            children: (0, n.jsxs)('div', {
                className: el.nameplatePreviewList,
                children: [
                    (0, n.jsx)(ef, { isDarkTheme: r }),
                    (0, n.jsx)(ef, { isDarkTheme: r }),
                    (0, n.jsx)(b.Z, {
                        user: t,
                        className: el.nameplatePreviewSampleItem,
                        hideClanTag: !0,
                        hideSubtext: !0
                    }),
                    (0, n.jsx)(ef, { isDarkTheme: r }),
                    (0, n.jsx)(ef, { isDarkTheme: r })
                ]
            })
        });
    },
    eC = function (e) {
        let { product: t, user: r, category: i, onMount: o, isGiftEasterEggEnabled: b, isInFeedView: j, tab: k } = e,
            { analyticsLocations: q } = (0, _.ZP)([...(j ? [x.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), x.Z.COLLECTIBLES_SHOP_CARD]),
            ei = l.useRef(null),
            es = (0, g.Z)(ei),
            [ef, eC] = l.useState(!1),
            em = es || ef,
            eb = (0, Y.f)(t),
            { previewingVariantIndex: eg } = eb,
            ev = (0, A.T)(t),
            ex = (0, f.e7)([v.Z], () => v.Z.useReducedMotion),
            e_ = w.ZP.canUseCollectibles(r),
            ej = l.useMemo(() => (0, N.BH)(t, e_), [t, e_]),
            ey = (0, N.G1)(t),
            eO = (0, N.rN)(t),
            [ek, eP, eS] = (0, f.Wu)([I.Z], () => [I.Z.isClaiming === t.skuId, null != I.Z.isClaiming && I.Z.isClaiming !== t.skuId, I.Z.purchases]),
            eE = (0, X.o)(t, eS, eg),
            ew = (0, f.e7)([P.Z], () => (0, C.wj)(P.Z.theme)),
            eL = (0, N.Yq)(t.skuId),
            { hoverVariant: eI } = (0, B.E)('CollectiblesShopTallCard'),
            eT = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
            eN = (0, Z.hv)('CollectiblesShopTallCard'),
            eB = (0, T.o)(t, eS),
            eZ = (0, J.W)(t, eB),
            eF = (0, N.XM)(eZ, e_, !1),
            { isPurchased: eA, isPartiallyOwnedBundle: eR } = (0, R.L)(eZ),
            eW = null !== eg ? eg : eB,
            [eH, eD] = l.useState(!1),
            { enabled: eM } = (0, S.W)({ location: 'collectibles_shop_tall_card' }),
            { handleCardVisibilityChange: eV } = (0, W.E)(eZ.skuId, j ? 'home' : 'full');
        l.useEffect(() => {
            let { current: e } = ei;
            if (null == e) return;
            let t = () => eC(!0),
                r = (t) => {
                    e.contains(t.relatedTarget) || eC(!1);
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
            l.useEffect(() => {
                null == o || o(ei);
            }, [o]);
        let eU = l.useRef(null),
            { handleUseNow: eG, isApplying: ez } = (0, F.W)({ product: eZ }),
            eq = (e) => (r) => {
                (eU.current = r.currentTarget),
                    (0, U.T)({
                        product: t,
                        category: i,
                        analyticsLocations: q,
                        analyticsSource: e,
                        returnRef: eU,
                        tab: k
                    });
            },
            eK = eq(x.Z.COLLECTIBLES_SHOP_CARD),
            e$ = eq(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            eJ = () =>
                (0, n.jsx)('div', {
                    className: el.hoverUpsellContainer,
                    children: (0, n.jsx)(O.Z, {
                        fullWidth: !0,
                        className: el.__invalid_premiumSubscribeButton,
                        disabled: eP,
                        onClick: (e) => e.stopPropagation(),
                        buttonText: en.NW.string(en.t.sEAnVF),
                        subscriptionTier: et.Si.TIER_2
                    })
                }),
            { displayPrices: eX, checkoutEligiblePrices: eY } = (0, Q.I)({
                product: t,
                isPremiumUser: e_,
                tab: k
            });
        if (0 === eX.length) return null;
        let eQ = () =>
            ey || d.tq
                ? null
                : eO
                  ? (0, n.jsx)(ed, { onClick: e$ })
                  : (0, n.jsx)(M.Z, {
                        product: t,
                        selectedVariantIndex: eB,
                        returnRef: ei,
                        isGiftEasterEggEnabled: b,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    });
        return (0, N.x6)(t) && null != ej && ej.discountPercentage < 0
            ? null
            : (0, n.jsx)(h.$, {
                  onChange: eV,
                  threshold: 0,
                  children: (0, n.jsx)(m.tEY, {
                      children: (0, n.jsxs)(m.kL8, {
                          className: a()(ew ? el.shopCardDark : el.shopCard, {
                              [el.partiallyOwned]: eR && !em,
                              [el.shopCardAnimation]: !ex && eI !== B.D.NO_MOVEMENT,
                              [ew ? el.shopCardDarkHighlighted : el.shopCardHighlighted]: em,
                              [el.mysteryShopCard]: eT
                          }),
                          ref: ei,
                          onClick: eK,
                          'aria-label': t.name,
                          children: [
                              ey &&
                                  (0, n.jsx)(m.ua7, {
                                      tooltipContentClassName: el.premiumWheelTooltipContent,
                                      color: m.ua7.Colors.PRIMARY,
                                      text: en.NW.string(en.t.O2K0xM),
                                      children: (e) =>
                                          (0, n.jsx)(
                                              m.IGR,
                                              eo(ea({}, e), {
                                                  className: el.premiumWheelBadge,
                                                  text: (0, n.jsx)(m.SrA, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: el.premiumWheel
                                                  })
                                              })
                                          )
                                  }),
                              (0, n.jsx)('div', {
                                  className: el.preview,
                                  children: (0, c.EQ)(t.type)
                                      .with(p.Z.PROFILE_EFFECT, () =>
                                          (0, n.jsx)(eu, {
                                              isHighlighted: em,
                                              profileEffectId: eE.id,
                                              isPurchased: eA
                                          })
                                      )
                                      .with(
                                          p.Z.AVATAR_DECORATION,
                                          () => (
                                              s()(eE.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                              (0, n.jsx)(ep, {
                                                  item: eE,
                                                  user: r,
                                                  isStormMysteryItem: eT,
                                                  isHighlighted: em,
                                                  isPurchased: eA
                                              })
                                          )
                                      )
                                      .with(p.Z.NAMEPLATE, () =>
                                          (0, n.jsx)(eh, {
                                              user: r,
                                              isDarkTheme: ew
                                          })
                                      )
                                      .with(p.Z.BUNDLE, () =>
                                          (0, n.jsx)(K.d, {
                                              product: t,
                                              user: r,
                                              isPurchased: eA,
                                              isHighlighted: em
                                          })
                                      )
                                      .with(p.Z.VARIANTS_GROUP, () => {
                                          if (null == t.variants || 0 === t.variants.length) return null;
                                          let e = t.variants[eW];
                                          return null == e
                                              ? null
                                              : (0, c.EQ)(e.type)
                                                    .with(p.Z.PROFILE_EFFECT, () => {
                                                        let [t] = e.items;
                                                        return (0, n.jsx)(eu, {
                                                            isHighlighted: em,
                                                            profileEffectId: t.id,
                                                            isPurchased: eA && !eH
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
                                                                isHighlighted: em,
                                                                isPurchased: eA
                                                            })
                                                        );
                                                    })
                                                    .otherwise(() => null);
                                      })
                                      .otherwise(() => null)
                              }),
                              eA
                                  ? (0, n.jsx)('div', {
                                        className: el.checkmarkWrapper,
                                        children: (0, n.jsx)(m.sV5, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 38,
                                            height: 38,
                                            className: el.checkmark
                                        })
                                    })
                                  : null,
                              (0, n.jsxs)('div', {
                                  className: a()(el.cardText, ew ? el.darkCardBackground : el.lightCardBackground, { [el.variantsGroup]: t.type === p.Z.VARIANTS_GROUP }),
                                  children: [
                                      (0, n.jsx)(m.Text, {
                                          variant: 'text-lg/bold',
                                          className: el.productName,
                                          children: ev
                                      }),
                                      t.type === p.Z.VARIANTS_GROUP
                                          ? (0, n.jsx)(z.P, {
                                                variantGroupProduct: t,
                                                previewingVariantIndexProps: eb,
                                                setIsHoveringOnSwitch: eD,
                                                purchases: eS,
                                                minimal: !em,
                                                alternativeBackgroundColor: (null == eE ? void 0 : eE.type) === p.Z.PROFILE_EFFECT
                                            })
                                          : null,
                                      (0, n.jsxs)('div', {
                                          className: el.detailsWrapper,
                                          children: [
                                              (0, n.jsx)('div', {
                                                  className: eR ? void 0 : el.innerBlur,
                                                  children:
                                                      eA || eR
                                                          ? (0, n.jsx)(H.U, {
                                                                className: el.priceTag,
                                                                isPartiallyPurchased: eR
                                                            })
                                                          : ey
                                                            ? (0, n.jsx)(m.Text, {
                                                                  variant: 'text-md/semibold',
                                                                  className: el.priceTag,
                                                                  children: en.NW.string(en.t.rt69oq)
                                                              })
                                                            : eM
                                                              ? (0, n.jsx)(G.Z, {
                                                                    displayPrices: eX,
                                                                    isPremiumUser: e_
                                                                })
                                                              : (0, n.jsx)(V.Z, {
                                                                    product: eZ,
                                                                    discount: ej,
                                                                    isPremiumUser: e_,
                                                                    className: el.priceTag
                                                                })
                                              }),
                                              (0, n.jsx)('div', {
                                                  className: el.innerHover,
                                                  children: (() => {
                                                      var e;
                                                      if (ey && !e_ && !eO) return eJ();
                                                      let r = eM && (null === (e = eY[0]) || void 0 === e ? void 0 : e.currency) === er.pK.DISCORD_ORB,
                                                          l = ey
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
                                                                            ? e$(e)
                                                                            : (0, y.Z)({
                                                                                  skuId: (0, $.S)({
                                                                                      product: t,
                                                                                      selectedVariantIndex: eB
                                                                                  }),
                                                                                  analyticsLocations: q,
                                                                                  returnRef: ei,
                                                                                  variantsReturnStyle: eN
                                                                              });
                                                                    }
                                                                };
                                                      return (0, n.jsxs)('div', {
                                                          className: el.buttonsContainer,
                                                          children: [
                                                              eR
                                                                  ? null
                                                                  : eA
                                                                    ? (0, n.jsx)(ec, {
                                                                          disabled: eP,
                                                                          onClick: eG,
                                                                          submitting: ez,
                                                                          children: en.NW.string(en.t.MAS7uL)
                                                                      })
                                                                    : (0, n.jsx)(
                                                                          ec,
                                                                          eo(ea({ disabled: eP }, l), {
                                                                              children: ey
                                                                                  ? en.NW.string(en.t.zp6caG)
                                                                                  : r
                                                                                    ? en.NW.format(en.t.kAgx5O, {
                                                                                          orbPrice: eY[0].amount,
                                                                                          orbIconHook: () => (0, n.jsx)(E.Z, {})
                                                                                      })
                                                                                    : en.NW.formatToPlainString(en.t['cNSL/v'], { price: eF })
                                                                          })
                                                                      ),
                                                              eQ()
                                                          ]
                                                      });
                                                  })()
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, n.jsx)(D.Z, {
                                  category: i,
                                  className: el.limitedTimeBadge,
                                  display: 'card'
                              }),
                              eL &&
                                  !eR &&
                                  !eA &&
                                  i.skuId !== u.T.ROBERT &&
                                  (0, n.jsx)(m.IGR, {
                                      text: en.NW.string(en.t.y2b7CA),
                                      disableColor: !0,
                                      className: el.newBadge
                                  })
                          ]
                      })
                  })
              });
    };
