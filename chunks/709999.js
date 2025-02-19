r.d(t, { Z: () => ed }), r(47120), r(627341);
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
    S = r(210887),
    P = r(74538),
    w = r(335131),
    E = r(1870),
    L = r(429368),
    I = r(884697),
    N = r(664018),
    T = r(228624),
    B = r(635552),
    Z = r(905357),
    F = r(724994),
    A = r(297651),
    R = r(390698),
    W = r(813083),
    H = r(680942),
    M = r(558060),
    D = r(237031),
    V = r(453713),
    U = r(616066),
    G = r(216541),
    z = r(67409),
    q = r(58201),
    $ = r(201964),
    K = r(361110),
    J = r(832149),
    X = r(474936),
    Y = r(388032),
    Q = r(864544),
    ee = r(748241);
function et(e) {
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
function er(e, t) {
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
function en(e, t) {
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
let el = (e) => {
        var { children: t, onClick: r } = e,
            l = en(e, ['children', 'onClick']);
        return (0, n.jsx)(
            m.zxk,
            er(
                et(
                    {
                        fullWidth: !0,
                        look: m.zxk.Looks.FILLED,
                        onClick: (e) => {
                            e.stopPropagation(), r();
                        }
                    },
                    l
                ),
                { children: t }
            )
        );
    },
    ei = (e) => {
        var { className: t } = e,
            r = en(e, ['className']);
        return (0, n.jsx)(
            m.zxk,
            er(
                et(
                    {
                        color: m.Ttl.BRAND,
                        look: m.zxk.Looks.FILLED,
                        size: m.PhG.ICON,
                        className: a()(Q.previewButton, t),
                        innerClassName: Q.previewButtonInner,
                        'aria-label': Y.NW.string(Y.t.SKNnqq)
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
    ea = (e) => {
        let { profileEffectId: t, isHighlighted: r, isPurchased: l } = e;
        return (0, n.jsx)('div', {
            className: Q.profileEffectShopPreview,
            children: (0, n.jsx)(k.Z, {
                profileEffectId: t,
                isHovering: r,
                isPurchased: l && !r,
                removeSetHeight: !0
            })
        });
    },
    eo = (e) => {
        let { isStormMysteryItem: t, isHighlighted: r, isPurchased: l, user: i, item: o } = e;
        return (0, n.jsx)('div', {
            className: a()(Q.avatarContainer, t && Q.mysteryAvatarContainer),
            children: (0, n.jsx)(U.R, {
                item: o,
                user: i,
                isPurchased: l,
                isHighlighted: r
            })
        });
    },
    es = (e) => {
        let { isDarkTheme: t } = e;
        return (0, n.jsx)(j.Z, {
            avatarSize: m.EFr.SIZE_32,
            className: a()(ee.placeholder, Q.nameplatePreviewSampleItem),
            childrenClassName: t ? Q.placeholderItemChildrenDark : Q.placeholderItemChildrenLight,
            doNotAnimate: !0
        });
    },
    ec = (e) => {
        let { user: t, isDarkTheme: r } = e;
        return (0, n.jsx)('div', {
            className: Q.nameplatePreviewRootContainer,
            children: (0, n.jsxs)('div', {
                className: Q.nameplatePreviewList,
                children: [
                    (0, n.jsx)(es, { isDarkTheme: r }),
                    (0, n.jsx)(es, { isDarkTheme: r }),
                    (0, n.jsx)(b.Z, {
                        user: t,
                        className: Q.nameplatePreviewSampleItem,
                        hideClanTag: !0,
                        hideSubtext: !0
                    }),
                    (0, n.jsx)(es, { isDarkTheme: r }),
                    (0, n.jsx)(es, { isDarkTheme: r })
                ]
            })
        });
    },
    ed = function (e) {
        let { product: t, user: r, category: i, onMount: o, isGiftEasterEggEnabled: b, isInFeedView: j } = e,
            { analyticsLocations: k } = (0, _.ZP)([...(j ? [x.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), x.Z.COLLECTIBLES_SHOP_CARD]),
            U = l.useRef(null),
            ee = (0, g.Z)(U),
            [en, es] = l.useState(!1),
            ed = ee || en,
            eu = (0, K.f)(t),
            { previewingVariantIndex: ep } = eu,
            ef = (0, Z.T)(t),
            eh = (0, f.e7)([v.Z], () => v.Z.useReducedMotion),
            eC = P.ZP.canUseCollectibles(r),
            em = l.useMemo(() => (0, I.BH)(t, eC), [t, eC]),
            eb = (0, I.G1)(t),
            eg = (0, I.rN)(t),
            [ev, ex, e_] = (0, f.Wu)([E.Z], () => [E.Z.isClaiming === t.skuId, null != E.Z.isClaiming && E.Z.isClaiming !== t.skuId, E.Z.purchases]),
            ej = (0, $.o)(t, e_, ep),
            ey = (0, f.e7)([S.Z], () => (0, C.wj)(S.Z.theme)),
            eO = (0, I.Yq)(t.skuId),
            { hoverVariant: ek } = (0, N.E)('CollectiblesShopTallCard'),
            eS = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
            eP = (0, T.hv)('CollectiblesShopTallCard'),
            ew = (0, L.o)(t, e_),
            eE = (0, q.W)(t, ew),
            eL = (0, I.XM)(eE, eC, !1),
            { isPurchased: eI, isPartiallyOwnedBundle: eN } = (0, F.L)(eE),
            eT = null !== ep ? ep : ew,
            [eB, eZ] = l.useState(!1),
            { handleCardVisibilityChange: eF } = (0, A.E)(eE.skuId, j ? 'home' : 'full');
        l.useEffect(() => {
            let { current: e } = U;
            if (null == e) return;
            let t = () => es(!0),
                r = (t) => {
                    e.contains(t.relatedTarget) || es(!1);
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
                null == o || o(U);
            }, [o]);
        let eA = l.useRef(null),
            { handleUseNow: eR, isApplying: eW } = (0, B.W)({ product: eE }),
            eH = (e) => (r) => {
                (eA.current = r.currentTarget),
                    (0, D.T)({
                        product: t,
                        category: i,
                        analyticsLocations: k,
                        analyticsSource: e,
                        returnRef: eA
                    });
            },
            eM = eH(x.Z.COLLECTIBLES_SHOP_CARD),
            eD = eH(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            eV = () =>
                (0, n.jsx)('div', {
                    className: Q.hoverUpsellContainer,
                    children: (0, n.jsx)(O.Z, {
                        fullWidth: !0,
                        className: Q.__invalid_premiumSubscribeButton,
                        disabled: ex,
                        onClick: (e) => e.stopPropagation(),
                        buttonText: Y.NW.string(Y.t.sEAnVF),
                        subscriptionTier: X.Si.TIER_2
                    })
                }),
            eU = () =>
                eb || d.tq
                    ? null
                    : eg
                      ? (0, n.jsx)(ei, { onClick: eD })
                      : (0, n.jsx)(H.Z, {
                            product: t,
                            selectedVariantIndex: ew,
                            returnRef: U,
                            isGiftEasterEggEnabled: b,
                            disableCustomColor: !0,
                            tooltipDelay: 250
                        });
        return (0, I.x6)(t) && null != em && em.discountPercentage < 0
            ? null
            : (0, n.jsx)(h.$, {
                  onChange: eF,
                  threshold: 0,
                  children: (0, n.jsx)(m.tEY, {
                      children: (0, n.jsxs)(m.kL8, {
                          className: a()(ey ? Q.shopCardDark : Q.shopCard, {
                              [Q.partiallyOwned]: eN && !ed,
                              [Q.shopCardAnimation]: !eh && ek !== N.D.NO_MOVEMENT,
                              [ey ? Q.shopCardDarkHighlighted : Q.shopCardHighlighted]: ed,
                              [Q.mysteryShopCard]: eS
                          }),
                          ref: U,
                          onClick: eM,
                          'aria-label': t.name,
                          children: [
                              eb &&
                                  (0, n.jsx)(m.ua7, {
                                      tooltipContentClassName: Q.premiumWheelTooltipContent,
                                      color: m.ua7.Colors.PRIMARY,
                                      text: Y.NW.string(Y.t.O2K0xM),
                                      children: (e) =>
                                          (0, n.jsx)(
                                              m.IGR,
                                              er(et({}, e), {
                                                  className: Q.premiumWheelBadge,
                                                  text: (0, n.jsx)(m.SrA, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: Q.premiumWheel
                                                  })
                                              })
                                          )
                                  }),
                              (0, n.jsx)('div', {
                                  className: Q.preview,
                                  children: (0, c.EQ)(t.type)
                                      .with(p.Z.PROFILE_EFFECT, () =>
                                          (0, n.jsx)(ea, {
                                              isHighlighted: ed,
                                              profileEffectId: ej.id,
                                              isPurchased: eI
                                          })
                                      )
                                      .with(
                                          p.Z.AVATAR_DECORATION,
                                          () => (
                                              s()(ej.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                              (0, n.jsx)(eo, {
                                                  item: ej,
                                                  user: r,
                                                  isStormMysteryItem: eS,
                                                  isHighlighted: ed,
                                                  isPurchased: eI
                                              })
                                          )
                                      )
                                      .with(p.Z.NAMEPLATE, () =>
                                          (0, n.jsx)(ec, {
                                              user: r,
                                              isDarkTheme: ey
                                          })
                                      )
                                      .with(p.Z.BUNDLE, () =>
                                          (0, n.jsx)(G.d, {
                                              product: t,
                                              user: r,
                                              isPurchased: eI,
                                              isHighlighted: ed
                                          })
                                      )
                                      .with(p.Z.VARIANTS_GROUP, () => {
                                          if (null == t.variants || 0 === t.variants.length) return null;
                                          let e = t.variants[eT];
                                          return null == e
                                              ? null
                                              : (0, c.EQ)(e.type)
                                                    .with(p.Z.PROFILE_EFFECT, () => {
                                                        let [t] = e.items;
                                                        return (0, n.jsx)(ea, {
                                                            isHighlighted: ed,
                                                            profileEffectId: t.id,
                                                            isPurchased: eI && !eB
                                                        });
                                                    })
                                                    .with(p.Z.AVATAR_DECORATION, () => {
                                                        let [t] = e.items;
                                                        return (
                                                            s()(t.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                            (0, n.jsx)(eo, {
                                                                item: t,
                                                                user: r,
                                                                isStormMysteryItem: eS,
                                                                isHighlighted: ed,
                                                                isPurchased: eI
                                                            })
                                                        );
                                                    })
                                                    .otherwise(() => null);
                                      })
                                      .otherwise(() => null)
                              }),
                              eI
                                  ? (0, n.jsx)('div', {
                                        className: Q.checkmarkWrapper,
                                        children: (0, n.jsx)(m.sV5, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 38,
                                            height: 38,
                                            className: Q.checkmark
                                        })
                                    })
                                  : null,
                              (0, n.jsxs)('div', {
                                  className: a()(Q.cardText, ey ? Q.darkCardBackground : Q.lightCardBackground, { [Q.variantsGroup]: t.type === p.Z.VARIANTS_GROUP }),
                                  children: [
                                      (0, n.jsx)(m.Text, {
                                          variant: 'text-lg/bold',
                                          className: Q.productName,
                                          children: ef
                                      }),
                                      t.type === p.Z.VARIANTS_GROUP
                                          ? (0, n.jsx)(V.P, {
                                                variantGroupProduct: t,
                                                previewingVariantIndexProps: eu,
                                                setIsHoveringOnSwitch: eZ,
                                                purchases: e_,
                                                minimal: !ed,
                                                alternativeBackgroundColor: (null == ej ? void 0 : ej.type) === p.Z.PROFILE_EFFECT
                                            })
                                          : null,
                                      (0, n.jsxs)('div', {
                                          className: Q.detailsWrapper,
                                          children: [
                                              (0, n.jsx)('div', {
                                                  className: eN ? void 0 : Q.innerBlur,
                                                  children:
                                                      eI || eN
                                                          ? (0, n.jsx)(R.U, {
                                                                className: Q.priceTag,
                                                                isPartiallyPurchased: eN
                                                            })
                                                          : eb
                                                            ? (0, n.jsx)(m.Text, {
                                                                  variant: 'text-md/semibold',
                                                                  className: Q.priceTag,
                                                                  children: Y.NW.string(Y.t.rt69oq)
                                                              })
                                                            : (0, n.jsx)(M.Z, {
                                                                  product: eE,
                                                                  discount: em,
                                                                  isPremiumUser: eC,
                                                                  className: Q.priceTag
                                                              })
                                              }),
                                              (0, n.jsx)('div', {
                                                  className: Q.innerHover,
                                                  children: (() => {
                                                      if (eb && !eC && !eg) return eV();
                                                      let e = eb
                                                          ? {
                                                                submitting: ev,
                                                                submittingStartedLabel: Y.NW.string(Y.t['TYw+9v']),
                                                                submittingFinishedLabel: Y.NW.string(Y.t.Pg1UPz),
                                                                onClick: async () => {
                                                                    await (0, w.fK)(t.skuId),
                                                                        (0, J.Z)({
                                                                            product: t,
                                                                            analyticsLocations: k
                                                                        });
                                                                }
                                                            }
                                                          : {
                                                                onClick: () =>
                                                                    (0, y.Z)({
                                                                        skuId: (0, z.S)({
                                                                            product: t,
                                                                            selectedVariantIndex: ew
                                                                        }),
                                                                        analyticsLocations: k,
                                                                        returnRef: U,
                                                                        variantsReturnStyle: eP
                                                                    })
                                                            };
                                                      return (0, n.jsxs)('div', {
                                                          className: Q.buttonsContainer,
                                                          children: [
                                                              eN
                                                                  ? null
                                                                  : eI
                                                                    ? (0, n.jsx)(el, {
                                                                          disabled: ex,
                                                                          onClick: eR,
                                                                          submitting: eW,
                                                                          children: Y.NW.string(Y.t.MAS7uL)
                                                                      })
                                                                    : (0, n.jsx)(el, er(et({ disabled: ex }, e), { children: eb ? Y.NW.string(Y.t.zp6caG) : Y.NW.formatToPlainString(Y.t['cNSL/v'], { price: eL }) })),
                                                              eU()
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
                                  className: Q.limitedTimeBadge,
                                  display: 'card'
                              }),
                              eO &&
                                  !eN &&
                                  !eI &&
                                  i.skuId !== u.T.ROBERT &&
                                  (0, n.jsx)(m.IGR, {
                                      text: Y.NW.string(Y.t.y2b7CA),
                                      disableColor: !0,
                                      className: Q.newBadge
                                  })
                          ]
                      })
                  })
              });
    };
