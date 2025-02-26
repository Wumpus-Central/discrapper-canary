r.d(t, { Z: () => eh }), r(47120), r(627341);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(512722),
    s = r.n(a),
    c = r(278074),
    d = r(873546),
    u = r(180650),
    p = r(979554),
    f = r(399606),
    h = r(622535),
    b = r(663002),
    m = r(481060),
    C = r(727637),
    g = r(607070),
    v = r(100527),
    x = r(906732),
    j = r(693728),
    _ = r(333867),
    y = r(197115),
    O = r(876917),
    k = r(210887),
    P = r(822857),
    S = r(960919),
    w = r(74538),
    E = r(335131),
    I = r(1870),
    L = r(429368),
    N = r(884697),
    T = r(664018),
    B = r(228624),
    Z = r(635552),
    F = r(905357),
    A = r(724994),
    R = r(297651),
    W = r(390698),
    D = r(813083),
    H = r(680942),
    M = r(558060),
    V = r(237031),
    U = r(385797),
    G = r(453713),
    z = r(616066),
    q = r(216541),
    K = r(22267),
    $ = r(67409),
    J = r(58201),
    X = r(201964),
    Y = r(361110),
    Q = r(956472),
    ee = r(832149),
    et = r(474936),
    er = r(231338),
    en = r(388032),
    el = r(864544);
function ei(e) {
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
function ea(e, t) {
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
let es = (e) => {
        var { children: t, onClick: r } = e,
            l = ea(e, ['children', 'onClick']);
        return (0, n.jsx)(
            m.zxk,
            eo(
                ei(
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
    ec = (e) => {
        var { className: t } = e,
            r = ea(e, ['className']);
        return (0, n.jsx)(
            m.zxk,
            eo(
                ei(
                    {
                        color: m.Ttl.BRAND,
                        look: m.zxk.Looks.FILLED,
                        size: m.PhG.ICON,
                        className: o()(el.previewButton, t),
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
    ed = (e) => {
        let { profileEffectId: t, isHighlighted: r, isPurchased: l } = e;
        return (0, n.jsx)('div', {
            className: el.profileEffectShopPreview,
            children: (0, n.jsx)(O.Z, {
                profileEffectId: t,
                isHovering: r,
                isPurchased: l && !r,
                removeSetHeight: !0
            })
        });
    },
    eu = (e) => {
        let { isStormMysteryItem: t, isHighlighted: r, isPurchased: l, user: i, item: a } = e;
        return (0, n.jsx)('div', {
            className: o()(el.avatarContainer, t && el.mysteryAvatarContainer),
            children: (0, n.jsx)(z.R, {
                item: a,
                user: i,
                isPurchased: l,
                isHighlighted: r
            })
        });
    },
    ep = (e) => {
        let { isDarkTheme: t } = e;
        return (0, n.jsx)(j.Z, {
            avatarSize: m.EFr.SIZE_32,
            className: o()(el.nameplatePreviewSampleItem, el.placeholderItem),
            childrenClassName: t ? el.placeholderItemChildrenDark : el.placeholderItemChildrenLight,
            doNotAnimate: !0
        });
    },
    ef = (e) => {
        let { user: t, isDarkTheme: r, nameplate: l, isHighlighted: i } = e;
        return (0, n.jsx)('div', {
            className: el.nameplatePreviewRootContainer,
            children: (0, n.jsxs)('div', {
                className: el.nameplatePreviewList,
                children: [
                    (0, n.jsx)(ep, { isDarkTheme: r }),
                    (0, n.jsx)(ep, { isDarkTheme: r }),
                    (0, n.jsx)(K.Z, {
                        user: t,
                        nameplate: l,
                        className: el.nameplatePreviewSampleItem,
                        isHighlighted: i,
                        showWumpus: !i
                    }),
                    (0, n.jsx)(ep, { isDarkTheme: r }),
                    (0, n.jsx)(ep, { isDarkTheme: r })
                ]
            })
        });
    },
    eh = function (e) {
        let { product: t, user: r, category: i, onMount: a, isGiftEasterEggEnabled: j, isInFeedView: O, tab: z } = e,
            { analyticsLocations: K } = (0, x.ZP)([...(O ? [v.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), v.Z.COLLECTIBLES_SHOP_CARD]),
            ea = l.useRef(null),
            ep = (0, C.Z)(ea),
            [eh, eb] = l.useState(!1),
            em = ep || eh,
            eC = (0, Y.f)(t),
            { previewingVariantIndex: eg } = eC,
            ev = (0, F.T)(t),
            ex = (0, f.e7)([g.Z], () => g.Z.useReducedMotion),
            ej = w.ZP.canUseCollectibles(r),
            e_ = l.useMemo(() => (0, N.BH)(t, ej), [t, ej]),
            ey = (0, N.G1)(t),
            eO = (0, N.rN)(t),
            [ek, eP, eS] = (0, f.Wu)([I.Z], () => [I.Z.isClaiming === t.skuId, null != I.Z.isClaiming && I.Z.isClaiming !== t.skuId, I.Z.purchases]),
            ew = (0, X.o)(t, eS, eg),
            eE = (0, f.e7)([k.Z], () => (0, b.wj)(k.Z.theme)),
            eI = (0, N.Yq)(t.skuId),
            eL = i.skuId === u.T.ANIME_V3 && (0, N.WW)(t.skuId),
            { hoverVariant: eN } = (0, T.E)('CollectiblesShopTallCard'),
            eT = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
            eB = (0, B.hv)('CollectiblesShopTallCard'),
            eZ = (0, L.o)(t, eS),
            eF = (0, J.W)(t, eZ),
            eA = (0, N.XM)(eF, ej, !1),
            { isPurchased: eR, isPartiallyOwnedBundle: eW } = (0, A.L)(eF),
            eD = null !== eg ? eg : eZ,
            [eH, eM] = l.useState(!1),
            { enabled: eV } = (0, P.W)({ location: 'collectibles_shop_tall_card' }),
            { handleCardVisibilityChange: eU } = (0, R.E)(eF.skuId, O ? 'home' : 'full');
        l.useEffect(() => {
            let { current: e } = ea;
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
            l.useEffect(() => {
                null == a || a(ea);
            }, [a]);
        let eG = l.useRef(null),
            { handleUseNow: ez, isApplying: eq } = (0, Z.W)({ product: eF }),
            eK = (e) => (r) => {
                (eG.current = r.currentTarget),
                    (0, V.T)({
                        product: t,
                        category: i,
                        analyticsLocations: K,
                        analyticsSource: e,
                        returnRef: eG,
                        tab: z
                    });
            },
            e$ = eK(v.Z.COLLECTIBLES_SHOP_CARD),
            eJ = eK(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            eX = () =>
                (0, n.jsx)('div', {
                    className: el.hoverUpsellContainer,
                    children: (0, n.jsx)(y.Z, {
                        fullWidth: !0,
                        className: el.__invalid_premiumSubscribeButton,
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
                tab: z
            });
        if (0 === eY.length) return null;
        let e0 = () =>
            ey || d.tq
                ? null
                : eO
                  ? (0, n.jsx)(ec, { onClick: eJ })
                  : (0, n.jsx)(H.Z, {
                        product: t,
                        selectedVariantIndex: eZ,
                        returnRef: ea,
                        isGiftEasterEggEnabled: j,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    });
        return (0, N.x6)(t) && null != e_ && e_.discountPercentage < 0
            ? null
            : (0, n.jsx)(h.$, {
                  onChange: eU,
                  threshold: 0,
                  children: (0, n.jsx)(m.tEY, {
                      children: (0, n.jsxs)(m.kL8, {
                          className: o()(eE ? el.shopCardDark : el.shopCard, {
                              [el.partiallyOwned]: eW && !em,
                              [el.shopCardAnimation]: !ex && eN !== T.D.NO_MOVEMENT,
                              [eE ? el.shopCardDarkHighlighted : el.shopCardHighlighted]: em,
                              [el.mysteryShopCard]: eT
                          }),
                          ref: ea,
                          onClick: e$,
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
                                              eo(ei({}, e), {
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
                                          (0, n.jsx)(ed, {
                                              isHighlighted: em,
                                              profileEffectId: ew.id,
                                              isPurchased: eR
                                          })
                                      )
                                      .with(
                                          p.Z.AVATAR_DECORATION,
                                          () => (
                                              s()(ew.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                              (0, n.jsx)(eu, {
                                                  item: ew,
                                                  user: r,
                                                  isStormMysteryItem: eT,
                                                  isHighlighted: em,
                                                  isPurchased: eR
                                              })
                                          )
                                      )
                                      .with(p.Z.NAMEPLATE, () =>
                                          (0, n.jsx)(ef, {
                                              user: r,
                                              isDarkTheme: eE,
                                              nameplate: ew,
                                              isHighlighted: em
                                          })
                                      )
                                      .with(p.Z.BUNDLE, () =>
                                          (0, n.jsx)(q.d, {
                                              product: t,
                                              user: r,
                                              isPurchased: eR,
                                              isHighlighted: em
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
                                                        return (0, n.jsx)(ed, {
                                                            isHighlighted: em,
                                                            profileEffectId: t.id,
                                                            isPurchased: eR && !eH
                                                        });
                                                    })
                                                    .with(p.Z.AVATAR_DECORATION, () => {
                                                        let [t] = e.items;
                                                        return (
                                                            s()(t.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                            (0, n.jsx)(eu, {
                                                                item: t,
                                                                user: r,
                                                                isStormMysteryItem: eT,
                                                                isHighlighted: em,
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
                                  className: o()(el.cardText, eE ? el.darkCardBackground : el.lightCardBackground, { [el.variantsGroup]: t.type === p.Z.VARIANTS_GROUP }),
                                  children: [
                                      (0, n.jsx)(m.Text, {
                                          variant: 'text-lg/bold',
                                          className: el.productName,
                                          children: ev
                                      }),
                                      t.type === p.Z.VARIANTS_GROUP
                                          ? (0, n.jsx)(G.P, {
                                                variantGroupProduct: t,
                                                previewingVariantIndexProps: eC,
                                                setIsHoveringOnSwitch: eM,
                                                purchases: eS,
                                                minimal: !em,
                                                alternativeBackgroundColor: (null == ew ? void 0 : ew.type) === p.Z.PROFILE_EFFECT
                                            })
                                          : null,
                                      (0, n.jsxs)('div', {
                                          className: el.detailsWrapper,
                                          children: [
                                              (0, n.jsx)('div', {
                                                  className: eW ? void 0 : el.innerBlur,
                                                  children:
                                                      eR || eW
                                                          ? (0, n.jsx)(W.U, {
                                                                className: el.priceTag,
                                                                isPartiallyPurchased: eW
                                                            })
                                                          : ey
                                                            ? (0, n.jsx)(m.Text, {
                                                                  variant: 'text-md/semibold',
                                                                  className: el.priceTag,
                                                                  children: en.NW.string(en.t.rt69oq)
                                                              })
                                                            : eV
                                                              ? (0, n.jsx)(U.Z, {
                                                                    displayPrices: eY,
                                                                    isPremiumUser: ej
                                                                })
                                                              : (0, n.jsx)(M.Z, {
                                                                    product: eF,
                                                                    discount: e_,
                                                                    isPremiumUser: ej,
                                                                    className: el.priceTag
                                                                })
                                              }),
                                              (0, n.jsx)('div', {
                                                  className: el.innerHover,
                                                  children: (() => {
                                                      var e;
                                                      if (ey && !ej && !eO) return eX();
                                                      let r = eV && (null === (e = eQ[0]) || void 0 === e ? void 0 : e.currency) === er.pK.DISCORD_ORB,
                                                          l = ey
                                                              ? {
                                                                    submitting: ek,
                                                                    submittingStartedLabel: en.NW.string(en.t['TYw+9v']),
                                                                    submittingFinishedLabel: en.NW.string(en.t.Pg1UPz),
                                                                    onClick: async () => {
                                                                        await (0, E.fK)(t.skuId),
                                                                            (0, ee.Z)({
                                                                                product: t,
                                                                                analyticsLocations: K
                                                                            });
                                                                    }
                                                                }
                                                              : {
                                                                    onClick: (e) => {
                                                                        r
                                                                            ? eJ(e)
                                                                            : (0, _.Z)({
                                                                                  skuId: (0, $.S)({
                                                                                      product: t,
                                                                                      selectedVariantIndex: eZ
                                                                                  }),
                                                                                  analyticsLocations: K,
                                                                                  returnRef: ea,
                                                                                  variantsReturnStyle: eB
                                                                              });
                                                                    }
                                                                };
                                                      return (0, n.jsxs)('div', {
                                                          className: el.buttonsContainer,
                                                          children: [
                                                              eW
                                                                  ? null
                                                                  : eR
                                                                    ? (0, n.jsx)(es, {
                                                                          disabled: eP,
                                                                          onClick: ez,
                                                                          submitting: eq,
                                                                          children: en.NW.string(en.t.MAS7uL)
                                                                      })
                                                                    : (0, n.jsx)(
                                                                          es,
                                                                          eo(ei({ disabled: eP }, l), {
                                                                              children: ey
                                                                                  ? en.NW.string(en.t.zp6caG)
                                                                                  : r
                                                                                    ? en.NW.format(en.t.kAgx5O, {
                                                                                          orbPrice: eQ[0].amount,
                                                                                          orbIconHook: () => (0, n.jsx)(S.Z, {})
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
                              (0, n.jsx)(D.Z, {
                                  category: i,
                                  className: el.limitedTimeBadge,
                                  display: 'card'
                              }),
                              eW || eR || !eI
                                  ? e1
                                      ? (0, n.jsx)(m.IGR, {
                                            text: en.NW.string(en.t.Q2K5pa),
                                            disableColor: !0,
                                            className: el.badge
                                        })
                                      : eL
                                        ? (0, n.jsx)(m.IGR, {
                                              text: en.NW.string(en.t.S6kE9v),
                                              disableColor: !0,
                                              className: el.badge
                                          })
                                        : null
                                  : (0, n.jsx)(m.IGR, {
                                        text: en.NW.string(en.t.y2b7CA),
                                        disableColor: !0,
                                        className: el.badge
                                    })
                          ]
                      })
                  })
              });
    };
