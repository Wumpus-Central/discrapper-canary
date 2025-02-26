r.d(t, { Z: () => ef }), r(47120), r(627341);
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
    b = r(481060),
    m = r(727637),
    C = r(607070),
    g = r(100527),
    v = r(906732),
    x = r(693728),
    j = r(333867),
    _ = r(197115),
    y = r(876917),
    O = r(210887),
    k = r(822857),
    P = r(960919),
    S = r(74538),
    w = r(335131),
    E = r(1870),
    I = r(429368),
    L = r(884697),
    N = r(664018),
    T = r(228624),
    B = r(635552),
    Z = r(905357),
    F = r(724994),
    A = r(297651),
    R = r(390698),
    W = r(813083),
    D = r(680942),
    H = r(558060),
    M = r(237031),
    V = r(385797),
    U = r(453713),
    G = r(616066),
    z = r(216541),
    q = r(22267),
    K = r(67409),
    $ = r(58201),
    J = r(201964),
    X = r(361110),
    Y = r(956472),
    Q = r(832149),
    ee = r(474936),
    et = r(231338),
    er = r(388032),
    en = r(864544);
function el(e) {
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
function ei(e, t) {
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
function eo(e, t) {
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
let ea = (e) => {
        var { children: t, onClick: r } = e,
            l = eo(e, ['children', 'onClick']);
        return (0, n.jsx)(
            b.zxk,
            ei(
                el(
                    {
                        fullWidth: !0,
                        look: b.zxk.Looks.FILLED,
                        innerClassName: en.cardButtonInner,
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
    es = (e) => {
        var { className: t } = e,
            r = eo(e, ['className']);
        return (0, n.jsx)(
            b.zxk,
            ei(
                el(
                    {
                        color: b.Ttl.BRAND,
                        look: b.zxk.Looks.FILLED,
                        size: b.PhG.ICON,
                        className: o()(en.previewButton, t),
                        innerClassName: en.previewButtonInner,
                        'aria-label': er.NW.string(er.t.SKNnqq)
                    },
                    r
                ),
                {
                    children: (0, n.jsx)(b.tEF, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }
            )
        );
    },
    ec = (e) => {
        let { profileEffectId: t, isHighlighted: r, isPurchased: l } = e;
        return (0, n.jsx)('div', {
            className: en.profileEffectShopPreview,
            children: (0, n.jsx)(y.Z, {
                profileEffectId: t,
                isHovering: r,
                isPurchased: l && !r,
                removeSetHeight: !0
            })
        });
    },
    ed = (e) => {
        let { isStormMysteryItem: t, isHighlighted: r, isPurchased: l, user: i, item: a } = e;
        return (0, n.jsx)('div', {
            className: o()(en.avatarContainer, t && en.mysteryAvatarContainer),
            children: (0, n.jsx)(G.R, {
                item: a,
                user: i,
                isPurchased: l,
                isHighlighted: r
            })
        });
    },
    eu = (e) => {
        let { isDarkTheme: t } = e;
        return (0, n.jsx)(x.Z, {
            avatarSize: b.EFr.SIZE_32,
            className: o()(en.nameplatePreviewSampleItem, en.placeholderItem),
            childrenClassName: t ? en.placeholderItemChildrenDark : en.placeholderItemChildrenLight,
            doNotAnimate: !0
        });
    },
    ep = (e) => {
        let { user: t, isDarkTheme: r, nameplate: l, isHighlighted: i } = e;
        return (0, n.jsx)('div', {
            className: en.nameplatePreviewRootContainer,
            children: (0, n.jsxs)('div', {
                className: en.nameplatePreviewList,
                children: [
                    (0, n.jsx)(eu, { isDarkTheme: r }),
                    (0, n.jsx)(eu, { isDarkTheme: r }),
                    (0, n.jsx)(q.Z, {
                        user: t,
                        nameplate: l,
                        className: en.nameplatePreviewSampleItem,
                        isHighlighted: i,
                        showWumpus: !i
                    }),
                    (0, n.jsx)(eu, { isDarkTheme: r }),
                    (0, n.jsx)(eu, { isDarkTheme: r })
                ]
            })
        });
    },
    ef = function (e) {
        let { product: t, user: r, category: i, onMount: a, isGiftEasterEggEnabled: x, isInFeedView: y, tab: G } = e,
            { analyticsLocations: q } = (0, v.ZP)([...(y ? [g.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), g.Z.COLLECTIBLES_SHOP_CARD]),
            eo = l.useRef(null),
            eu = (0, m.Z)(eo),
            [ef, eh] = l.useState(!1),
            eb = eu || ef,
            em = (0, X.f)(t),
            { previewingVariantIndex: eC } = em,
            eg = (0, Z.T)(t),
            ev = (0, f.e7)([C.Z], () => C.Z.useReducedMotion),
            ex = S.ZP.canUseCollectibles(r),
            ej = l.useMemo(() => (0, L.BH)(t, ex), [t, ex]),
            e_ = (0, L.G1)(t),
            ey = (0, L.rN)(t),
            [eO, ek, eP] = (0, f.Wu)([E.Z], () => [E.Z.isClaiming === t.skuId, null != E.Z.isClaiming && E.Z.isClaiming !== t.skuId, E.Z.purchases]),
            eS = (0, J.o)(t, eP, eC),
            ew = (0, f.e7)([O.Z], () => (0, b.wjy)(O.Z.theme)),
            eE = (0, L.Yq)(t.skuId),
            eI = i.skuId === u.T.ANIME_V3 && (0, L.WW)(t.skuId),
            { hoverVariant: eL } = (0, N.E)('CollectiblesShopTallCard'),
            eN = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
            eT = (0, T.hv)('CollectiblesShopTallCard'),
            eB = (0, I.o)(t, eP),
            eZ = (0, $.W)(t, eB),
            eF = (0, L.XM)(eZ, ex, !1),
            { isPurchased: eA, isPartiallyOwnedBundle: eR } = (0, F.L)(eZ),
            eW = null !== eC ? eC : eB,
            [eD, eH] = l.useState(!1),
            { enabled: eM } = (0, k.W)({ location: 'collectibles_shop_tall_card' }),
            { handleCardVisibilityChange: eV } = (0, A.E)(eZ.skuId, y ? 'home' : 'full');
        l.useEffect(() => {
            let { current: e } = eo;
            if (null == e) return;
            let t = () => eh(!0),
                r = (t) => {
                    e.contains(t.relatedTarget) || eh(!1);
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
                null == a || a(eo);
            }, [a]);
        let eU = l.useRef(null),
            { handleUseNow: eG, isApplying: ez } = (0, B.W)({ product: eZ }),
            eq = (e) => (r) => {
                (eU.current = r.currentTarget),
                    (0, M.T)({
                        product: t,
                        category: i,
                        analyticsLocations: q,
                        analyticsSource: e,
                        returnRef: eU,
                        tab: G
                    });
            },
            eK = eq(g.Z.COLLECTIBLES_SHOP_CARD),
            e$ = eq(g.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            eJ = () =>
                (0, n.jsx)('div', {
                    className: en.hoverUpsellContainer,
                    children: (0, n.jsx)(_.Z, {
                        fullWidth: !0,
                        className: en.__invalid_premiumSubscribeButton,
                        disabled: ek,
                        onClick: (e) => e.stopPropagation(),
                        buttonText: er.NW.string(er.t.sEAnVF),
                        subscriptionTier: ee.Si.TIER_2
                    })
                }),
            {
                displayPrices: eX,
                checkoutEligiblePrices: eY,
                isOrbExclusive: eQ
            } = (0, Y.I)({
                product: t,
                isPremiumUser: ex,
                tab: G
            });
        if (0 === eX.length) return null;
        let e1 = () =>
            e_ || d.tq
                ? null
                : ey
                  ? (0, n.jsx)(es, { onClick: e$ })
                  : (0, n.jsx)(D.Z, {
                        product: t,
                        selectedVariantIndex: eB,
                        returnRef: eo,
                        isGiftEasterEggEnabled: x,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    });
        return (0, L.x6)(t) && null != ej && ej.discountPercentage < 0
            ? null
            : (0, n.jsx)(h.$, {
                  onChange: eV,
                  threshold: 0,
                  children: (0, n.jsx)(b.tEY, {
                      children: (0, n.jsxs)(b.kL8, {
                          className: o()(ew ? en.shopCardDark : en.shopCard, {
                              [en.partiallyOwned]: eR && !eb,
                              [en.shopCardAnimation]: !ev && eL !== N.D.NO_MOVEMENT,
                              [ew ? en.shopCardDarkHighlighted : en.shopCardHighlighted]: eb,
                              [en.mysteryShopCard]: eN
                          }),
                          ref: eo,
                          onClick: eK,
                          'aria-label': t.name,
                          children: [
                              e_ &&
                                  (0, n.jsx)(b.ua7, {
                                      tooltipContentClassName: en.premiumWheelTooltipContent,
                                      color: b.ua7.Colors.PRIMARY,
                                      text: er.NW.string(er.t.O2K0xM),
                                      children: (e) =>
                                          (0, n.jsx)(
                                              b.IGR,
                                              ei(el({}, e), {
                                                  className: en.premiumWheelBadge,
                                                  text: (0, n.jsx)(b.SrA, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: en.premiumWheel
                                                  })
                                              })
                                          )
                                  }),
                              (0, n.jsx)('div', {
                                  className: en.preview,
                                  children: (0, c.EQ)(t.type)
                                      .with(p.Z.PROFILE_EFFECT, () =>
                                          (0, n.jsx)(ec, {
                                              isHighlighted: eb,
                                              profileEffectId: eS.id,
                                              isPurchased: eA
                                          })
                                      )
                                      .with(
                                          p.Z.AVATAR_DECORATION,
                                          () => (
                                              s()(eS.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                              (0, n.jsx)(ed, {
                                                  item: eS,
                                                  user: r,
                                                  isStormMysteryItem: eN,
                                                  isHighlighted: eb,
                                                  isPurchased: eA
                                              })
                                          )
                                      )
                                      .with(p.Z.NAMEPLATE, () =>
                                          (0, n.jsx)(ep, {
                                              user: r,
                                              isDarkTheme: ew,
                                              nameplate: eS,
                                              isHighlighted: eb
                                          })
                                      )
                                      .with(p.Z.BUNDLE, () =>
                                          (0, n.jsx)(z.d, {
                                              product: t,
                                              user: r,
                                              isPurchased: eA,
                                              isHighlighted: eb
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
                                                        return (0, n.jsx)(ec, {
                                                            isHighlighted: eb,
                                                            profileEffectId: t.id,
                                                            isPurchased: eA && !eD
                                                        });
                                                    })
                                                    .with(p.Z.AVATAR_DECORATION, () => {
                                                        let [t] = e.items;
                                                        return (
                                                            s()(t.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                            (0, n.jsx)(ed, {
                                                                item: t,
                                                                user: r,
                                                                isStormMysteryItem: eN,
                                                                isHighlighted: eb,
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
                                        className: en.checkmarkWrapper,
                                        children: (0, n.jsx)(b.sV5, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 38,
                                            height: 38,
                                            className: en.checkmark
                                        })
                                    })
                                  : null,
                              (0, n.jsxs)('div', {
                                  className: o()(en.cardText, ew ? en.darkCardBackground : en.lightCardBackground, { [en.variantsGroup]: t.type === p.Z.VARIANTS_GROUP }),
                                  children: [
                                      (0, n.jsx)(b.Text, {
                                          variant: 'text-lg/bold',
                                          className: en.productName,
                                          children: eg
                                      }),
                                      t.type === p.Z.VARIANTS_GROUP
                                          ? (0, n.jsx)(U.P, {
                                                variantGroupProduct: t,
                                                previewingVariantIndexProps: em,
                                                setIsHoveringOnSwitch: eH,
                                                purchases: eP,
                                                minimal: !eb,
                                                alternativeBackgroundColor: (null == eS ? void 0 : eS.type) === p.Z.PROFILE_EFFECT
                                            })
                                          : null,
                                      (0, n.jsxs)('div', {
                                          className: en.detailsWrapper,
                                          children: [
                                              (0, n.jsx)('div', {
                                                  className: eR ? void 0 : en.innerBlur,
                                                  children:
                                                      eA || eR
                                                          ? (0, n.jsx)(R.U, {
                                                                className: en.priceTag,
                                                                isPartiallyPurchased: eR
                                                            })
                                                          : e_
                                                            ? (0, n.jsx)(b.Text, {
                                                                  variant: 'text-md/semibold',
                                                                  className: en.priceTag,
                                                                  children: er.NW.string(er.t.rt69oq)
                                                              })
                                                            : eM
                                                              ? (0, n.jsx)(V.Z, {
                                                                    displayPrices: eX,
                                                                    isPremiumUser: ex
                                                                })
                                                              : (0, n.jsx)(H.Z, {
                                                                    product: eZ,
                                                                    discount: ej,
                                                                    isPremiumUser: ex,
                                                                    className: en.priceTag
                                                                })
                                              }),
                                              (0, n.jsx)('div', {
                                                  className: en.innerHover,
                                                  children: (() => {
                                                      var e;
                                                      if (e_ && !ex && !ey) return eJ();
                                                      let r = eM && (null === (e = eY[0]) || void 0 === e ? void 0 : e.currency) === et.pK.DISCORD_ORB,
                                                          l = e_
                                                              ? {
                                                                    submitting: eO,
                                                                    submittingStartedLabel: er.NW.string(er.t['TYw+9v']),
                                                                    submittingFinishedLabel: er.NW.string(er.t.Pg1UPz),
                                                                    onClick: async () => {
                                                                        await (0, w.fK)(t.skuId),
                                                                            (0, Q.Z)({
                                                                                product: t,
                                                                                analyticsLocations: q
                                                                            });
                                                                    }
                                                                }
                                                              : {
                                                                    onClick: (e) => {
                                                                        r
                                                                            ? e$(e)
                                                                            : (0, j.Z)({
                                                                                  skuId: (0, K.S)({
                                                                                      product: t,
                                                                                      selectedVariantIndex: eB
                                                                                  }),
                                                                                  analyticsLocations: q,
                                                                                  returnRef: eo,
                                                                                  variantsReturnStyle: eT
                                                                              });
                                                                    }
                                                                };
                                                      return (0, n.jsxs)('div', {
                                                          className: en.buttonsContainer,
                                                          children: [
                                                              eR
                                                                  ? null
                                                                  : eA
                                                                    ? (0, n.jsx)(ea, {
                                                                          disabled: ek,
                                                                          onClick: eG,
                                                                          submitting: ez,
                                                                          children: er.NW.string(er.t.MAS7uL)
                                                                      })
                                                                    : (0, n.jsx)(
                                                                          ea,
                                                                          ei(el({ disabled: ek }, l), {
                                                                              children: e_
                                                                                  ? er.NW.string(er.t.zp6caG)
                                                                                  : r
                                                                                    ? er.NW.format(er.t.kAgx5O, {
                                                                                          orbPrice: eY[0].amount,
                                                                                          orbIconHook: () => (0, n.jsx)(P.Z, {})
                                                                                      })
                                                                                    : er.NW.formatToPlainString(er.t['cNSL/v'], { price: eF })
                                                                          })
                                                                      ),
                                                              e1()
                                                          ]
                                                      });
                                                  })()
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, n.jsx)(W.Z, {
                                  category: i,
                                  className: en.limitedTimeBadge,
                                  display: 'card'
                              }),
                              eR || eA || !eE
                                  ? eQ
                                      ? (0, n.jsx)(b.IGR, {
                                            text: er.NW.string(er.t.Q2K5pa),
                                            disableColor: !0,
                                            className: en.badge
                                        })
                                      : eI
                                        ? (0, n.jsx)(b.IGR, {
                                              text: er.NW.string(er.t.S6kE9v),
                                              disableColor: !0,
                                              className: en.badge
                                          })
                                        : null
                                  : (0, n.jsx)(b.IGR, {
                                        text: er.NW.string(er.t.y2b7CA),
                                        disableColor: !0,
                                        className: en.badge
                                    })
                          ]
                      })
                  })
              });
    };
