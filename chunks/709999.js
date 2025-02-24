r.d(t, { Z: () => eC }), r(47120), r(627341);
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
    Z = r(82681),
    F = r(228624),
    A = r(635552),
    R = r(905357),
    W = r(724994),
    D = r(297651),
    H = r(390698),
    M = r(813083),
    V = r(680942),
    U = r(558060),
    G = r(237031),
    z = r(385797),
    q = r(453713),
    K = r(616066),
    $ = r(216541),
    J = r(67409),
    X = r(58201),
    Y = r(201964),
    Q = r(361110),
    ee = r(956472),
    et = r(832149),
    er = r(474936),
    en = r(231338),
    ei = r(388032),
    el = r(864544),
    eo = r(748241);
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
function es(e, t) {
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
function ec(e, t) {
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
let ed = (e) => {
        var { children: t, onClick: r } = e,
            i = ec(e, ['children', 'onClick']);
        return (0, n.jsx)(
            C.zxk,
            es(
                ea(
                    {
                        fullWidth: !0,
                        look: C.zxk.Looks.FILLED,
                        innerClassName: el.cardButtonInner,
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
    eu = (e) => {
        var { className: t } = e,
            r = ec(e, ['className']);
        return (0, n.jsx)(
            C.zxk,
            es(
                ea(
                    {
                        color: C.Ttl.BRAND,
                        look: C.zxk.Looks.FILLED,
                        size: C.PhG.ICON,
                        className: o()(el.previewButton, t),
                        innerClassName: el.previewButtonInner,
                        'aria-label': ei.NW.string(ei.t.SKNnqq)
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
    ep = (e) => {
        let { profileEffectId: t, isHighlighted: r, isPurchased: i } = e;
        return (0, n.jsx)('div', {
            className: el.profileEffectShopPreview,
            children: (0, n.jsx)(k.Z, {
                profileEffectId: t,
                isHovering: r,
                isPurchased: i && !r,
                removeSetHeight: !0
            })
        });
    },
    ef = (e) => {
        let { isStormMysteryItem: t, isHighlighted: r, isPurchased: i, user: l, item: a } = e;
        return (0, n.jsx)('div', {
            className: o()(el.avatarContainer, t && el.mysteryAvatarContainer),
            children: (0, n.jsx)(K.R, {
                item: a,
                user: l,
                isPurchased: i,
                isHighlighted: r
            })
        });
    },
    eh = (e) => {
        let { isDarkTheme: t } = e;
        return (0, n.jsx)(j.Z, {
            avatarSize: C.EFr.SIZE_32,
            className: o()(eo.placeholder, el.nameplatePreviewSampleItem),
            childrenClassName: t ? el.placeholderItemChildrenDark : el.placeholderItemChildrenLight,
            doNotAnimate: !0
        });
    },
    eb = (e) => {
        let { user: t, isDarkTheme: r } = e;
        return (0, n.jsx)('div', {
            className: el.nameplatePreviewRootContainer,
            children: (0, n.jsxs)('div', {
                className: el.nameplatePreviewList,
                children: [
                    (0, n.jsx)(eh, { isDarkTheme: r }),
                    (0, n.jsx)(eh, { isDarkTheme: r }),
                    (0, n.jsx)(m.Z, {
                        user: t,
                        className: el.nameplatePreviewSampleItem,
                        hideClanTag: !0,
                        hideSubtext: !0
                    }),
                    (0, n.jsx)(eh, { isDarkTheme: r }),
                    (0, n.jsx)(eh, { isDarkTheme: r })
                ]
            })
        });
    },
    eC = function (e) {
        let { product: t, user: r, category: l, onMount: a, isGiftEasterEggEnabled: m, isInFeedView: j, tab: k } = e,
            { analyticsLocations: K } = (0, _.ZP)([...(j ? [x.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), x.Z.COLLECTIBLES_SHOP_CARD]),
            eo = i.useRef(null),
            ec = (0, g.Z)(eo),
            [eh, eC] = i.useState(!1),
            em = ec || eh,
            eg = (0, Q.f)(t),
            { previewingVariantIndex: ev } = eg,
            ex = (0, R.T)(t),
            e_ = (0, f.e7)([v.Z], () => v.Z.useReducedMotion),
            ej = w.ZP.canUseCollectibles(r),
            ey = i.useMemo(() => (0, N.BH)(t, ej), [t, ej]),
            eO = (0, N.G1)(t),
            ek = (0, N.rN)(t),
            [eP, eS, eE] = (0, f.Wu)([I.Z], () => [I.Z.isClaiming === t.skuId, null != I.Z.isClaiming && I.Z.isClaiming !== t.skuId, I.Z.purchases]),
            ew = (0, Y.o)(t, eE, ev),
            eL = (0, f.e7)([P.Z], () => (0, b.wj)(P.Z.theme)),
            eI = (0, N.Yq)(t.skuId),
            eT = (0, Z.I)('CollectiblesShopTallCard') && (0, N.WW)(t.skuId),
            { hoverVariant: eN } = (0, B.E)('CollectiblesShopTallCard'),
            eB = l.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
            eZ = (0, F.hv)('CollectiblesShopTallCard'),
            eF = (0, T.o)(t, eE),
            eA = (0, X.W)(t, eF),
            eR = (0, N.XM)(eA, ej, !1),
            { isPurchased: eW, isPartiallyOwnedBundle: eD } = (0, W.L)(eA),
            eH = null !== ev ? ev : eF,
            [eM, eV] = i.useState(!1),
            { enabled: eU } = (0, S.W)({ location: 'collectibles_shop_tall_card' }),
            { handleCardVisibilityChange: eG } = (0, D.E)(eA.skuId, j ? 'home' : 'full');
        i.useEffect(() => {
            let { current: e } = eo;
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
            i.useEffect(() => {
                null == a || a(eo);
            }, [a]);
        let ez = i.useRef(null),
            { handleUseNow: eq, isApplying: eK } = (0, A.W)({ product: eA }),
            e$ = (e) => (r) => {
                (ez.current = r.currentTarget),
                    (0, G.T)({
                        product: t,
                        category: l,
                        analyticsLocations: K,
                        analyticsSource: e,
                        returnRef: ez,
                        tab: k
                    });
            },
            eJ = e$(x.Z.COLLECTIBLES_SHOP_CARD),
            eX = e$(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            eY = () =>
                (0, n.jsx)('div', {
                    className: el.hoverUpsellContainer,
                    children: (0, n.jsx)(O.Z, {
                        fullWidth: !0,
                        className: el.__invalid_premiumSubscribeButton,
                        disabled: eS,
                        onClick: (e) => e.stopPropagation(),
                        buttonText: ei.NW.string(ei.t.sEAnVF),
                        subscriptionTier: er.Si.TIER_2
                    })
                }),
            {
                displayPrices: eQ,
                checkoutEligiblePrices: e1,
                isOrbExclusive: e0
            } = (0, ee.I)({
                product: t,
                isPremiumUser: ej,
                tab: k
            });
        if (0 === eQ.length) return null;
        let e2 = () =>
            eO || d.tq
                ? null
                : ek
                  ? (0, n.jsx)(eu, { onClick: eX })
                  : (0, n.jsx)(V.Z, {
                        product: t,
                        selectedVariantIndex: eF,
                        returnRef: eo,
                        isGiftEasterEggEnabled: m,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    });
        return (0, N.x6)(t) && null != ey && ey.discountPercentage < 0
            ? null
            : (0, n.jsx)(h.$, {
                  onChange: eG,
                  threshold: 0,
                  children: (0, n.jsx)(C.tEY, {
                      children: (0, n.jsxs)(C.kL8, {
                          className: o()(eL ? el.shopCardDark : el.shopCard, {
                              [el.partiallyOwned]: eD && !em,
                              [el.shopCardAnimation]: !e_ && eN !== B.D.NO_MOVEMENT,
                              [eL ? el.shopCardDarkHighlighted : el.shopCardHighlighted]: em,
                              [el.mysteryShopCard]: eB
                          }),
                          ref: eo,
                          onClick: eJ,
                          'aria-label': t.name,
                          children: [
                              eO &&
                                  (0, n.jsx)(C.ua7, {
                                      tooltipContentClassName: el.premiumWheelTooltipContent,
                                      color: C.ua7.Colors.PRIMARY,
                                      text: ei.NW.string(ei.t.O2K0xM),
                                      children: (e) =>
                                          (0, n.jsx)(
                                              C.IGR,
                                              es(ea({}, e), {
                                                  className: el.premiumWheelBadge,
                                                  text: (0, n.jsx)(C.SrA, {
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
                                          (0, n.jsx)(ep, {
                                              isHighlighted: em,
                                              profileEffectId: ew.id,
                                              isPurchased: eW
                                          })
                                      )
                                      .with(
                                          p.Z.AVATAR_DECORATION,
                                          () => (
                                              s()(ew.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                              (0, n.jsx)(ef, {
                                                  item: ew,
                                                  user: r,
                                                  isStormMysteryItem: eB,
                                                  isHighlighted: em,
                                                  isPurchased: eW
                                              })
                                          )
                                      )
                                      .with(p.Z.NAMEPLATE, () =>
                                          (0, n.jsx)(eb, {
                                              user: r,
                                              isDarkTheme: eL
                                          })
                                      )
                                      .with(p.Z.BUNDLE, () =>
                                          (0, n.jsx)($.d, {
                                              product: t,
                                              user: r,
                                              isPurchased: eW,
                                              isHighlighted: em
                                          })
                                      )
                                      .with(p.Z.VARIANTS_GROUP, () => {
                                          if (null == t.variants || 0 === t.variants.length) return null;
                                          let e = t.variants[eH];
                                          return null == e
                                              ? null
                                              : (0, c.EQ)(e.type)
                                                    .with(p.Z.PROFILE_EFFECT, () => {
                                                        let [t] = e.items;
                                                        return (0, n.jsx)(ep, {
                                                            isHighlighted: em,
                                                            profileEffectId: t.id,
                                                            isPurchased: eW && !eM
                                                        });
                                                    })
                                                    .with(p.Z.AVATAR_DECORATION, () => {
                                                        let [t] = e.items;
                                                        return (
                                                            s()(t.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                            (0, n.jsx)(ef, {
                                                                item: t,
                                                                user: r,
                                                                isStormMysteryItem: eB,
                                                                isHighlighted: em,
                                                                isPurchased: eW
                                                            })
                                                        );
                                                    })
                                                    .otherwise(() => null);
                                      })
                                      .otherwise(() => null)
                              }),
                              eW
                                  ? (0, n.jsx)('div', {
                                        className: el.checkmarkWrapper,
                                        children: (0, n.jsx)(C.sV5, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 38,
                                            height: 38,
                                            className: el.checkmark
                                        })
                                    })
                                  : null,
                              (0, n.jsxs)('div', {
                                  className: o()(el.cardText, eL ? el.darkCardBackground : el.lightCardBackground, { [el.variantsGroup]: t.type === p.Z.VARIANTS_GROUP }),
                                  children: [
                                      (0, n.jsx)(C.Text, {
                                          variant: 'text-lg/bold',
                                          className: el.productName,
                                          children: ex
                                      }),
                                      t.type === p.Z.VARIANTS_GROUP
                                          ? (0, n.jsx)(q.P, {
                                                variantGroupProduct: t,
                                                previewingVariantIndexProps: eg,
                                                setIsHoveringOnSwitch: eV,
                                                purchases: eE,
                                                minimal: !em,
                                                alternativeBackgroundColor: (null == ew ? void 0 : ew.type) === p.Z.PROFILE_EFFECT
                                            })
                                          : null,
                                      (0, n.jsxs)('div', {
                                          className: el.detailsWrapper,
                                          children: [
                                              (0, n.jsx)('div', {
                                                  className: eD ? void 0 : el.innerBlur,
                                                  children:
                                                      eW || eD
                                                          ? (0, n.jsx)(H.U, {
                                                                className: el.priceTag,
                                                                isPartiallyPurchased: eD
                                                            })
                                                          : eO
                                                            ? (0, n.jsx)(C.Text, {
                                                                  variant: 'text-md/semibold',
                                                                  className: el.priceTag,
                                                                  children: ei.NW.string(ei.t.rt69oq)
                                                              })
                                                            : eU
                                                              ? (0, n.jsx)(z.Z, {
                                                                    displayPrices: eQ,
                                                                    isPremiumUser: ej
                                                                })
                                                              : (0, n.jsx)(U.Z, {
                                                                    product: eA,
                                                                    discount: ey,
                                                                    isPremiumUser: ej,
                                                                    className: el.priceTag
                                                                })
                                              }),
                                              (0, n.jsx)('div', {
                                                  className: el.innerHover,
                                                  children: (() => {
                                                      var e;
                                                      if (eO && !ej && !ek) return eY();
                                                      let r = eU && (null === (e = e1[0]) || void 0 === e ? void 0 : e.currency) === en.pK.DISCORD_ORB,
                                                          i = eO
                                                              ? {
                                                                    submitting: eP,
                                                                    submittingStartedLabel: ei.NW.string(ei.t['TYw+9v']),
                                                                    submittingFinishedLabel: ei.NW.string(ei.t.Pg1UPz),
                                                                    onClick: async () => {
                                                                        await (0, L.fK)(t.skuId),
                                                                            (0, et.Z)({
                                                                                product: t,
                                                                                analyticsLocations: K
                                                                            });
                                                                    }
                                                                }
                                                              : {
                                                                    onClick: (e) => {
                                                                        r
                                                                            ? eX(e)
                                                                            : (0, y.Z)({
                                                                                  skuId: (0, J.S)({
                                                                                      product: t,
                                                                                      selectedVariantIndex: eF
                                                                                  }),
                                                                                  analyticsLocations: K,
                                                                                  returnRef: eo,
                                                                                  variantsReturnStyle: eZ
                                                                              });
                                                                    }
                                                                };
                                                      return (0, n.jsxs)('div', {
                                                          className: el.buttonsContainer,
                                                          children: [
                                                              eD
                                                                  ? null
                                                                  : eW
                                                                    ? (0, n.jsx)(ed, {
                                                                          disabled: eS,
                                                                          onClick: eq,
                                                                          submitting: eK,
                                                                          children: ei.NW.string(ei.t.MAS7uL)
                                                                      })
                                                                    : (0, n.jsx)(
                                                                          ed,
                                                                          es(ea({ disabled: eS }, i), {
                                                                              children: eO
                                                                                  ? ei.NW.string(ei.t.zp6caG)
                                                                                  : r
                                                                                    ? ei.NW.format(ei.t.kAgx5O, {
                                                                                          orbPrice: e1[0].amount,
                                                                                          orbIconHook: () => (0, n.jsx)(E.Z, {})
                                                                                      })
                                                                                    : ei.NW.formatToPlainString(ei.t['cNSL/v'], { price: eR })
                                                                          })
                                                                      ),
                                                              e2()
                                                          ]
                                                      });
                                                  })()
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, n.jsx)(M.Z, {
                                  category: l,
                                  className: el.limitedTimeBadge,
                                  display: 'card'
                              }),
                              eD || eW || !eI
                                  ? e0
                                      ? (0, n.jsx)(C.IGR, {
                                            text: ei.NW.string(ei.t.Q2K5pa),
                                            disableColor: !0,
                                            className: el.badge
                                        })
                                      : eT
                                        ? (0, n.jsx)(C.IGR, {
                                              text: ei.NW.string(ei.t.S6kE9v),
                                              disableColor: !0,
                                              className: el.badge
                                          })
                                        : null
                                  : (0, n.jsx)(C.IGR, {
                                        text: ei.NW.string(ei.t.y2b7CA),
                                        disableColor: !0,
                                        className: el.badge
                                    })
                          ]
                      })
                  })
              });
    };
