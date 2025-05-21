s.d(t, {
    Z: () => eb,
    d: () => ef
}),
    s(388685),
    s(314940);
var l = s(255367),
    i = s(73800),
    r = s(120356),
    n = s.n(r),
    o = s(512722),
    a = s.n(o),
    C = s(278074),
    d = s(873546),
    c = s(180650),
    u = s(979554),
    p = s(399606),
    h = s(622535),
    x = s(481060),
    f = s(727637),
    j = s(607070),
    m = s(100527),
    g = s(906732),
    L = s(170046),
    v = s(333867),
    b = s(767714),
    E = s(876917),
    Z = s(210887),
    F = s(822857),
    w = s(960919),
    y = s(275388),
    O = s(74538),
    P = s(335131),
    k = s(1870),
    N = s(429368),
    I = s(884697),
    R = s(664018),
    _ = s(819570),
    M = s(228624),
    S = s(635552),
    A = s(290175),
    T = s(905357),
    H = s(724994),
    B = s(297651),
    D = s(390698),
    V = s(813083),
    U = s(680942),
    G = s(558060),
    W = s(237031),
    z = s(508925),
    q = s(306092),
    K = s(453713),
    Y = s(616066),
    X = s(216541),
    Q = s(22267),
    J = s(67409),
    $ = s(58201),
    ee = s(201964),
    et = s(361110),
    es = s(956472),
    el = s(832149),
    ei = s(215023),
    er = s(981631),
    en = s(474936),
    eo = s(388032),
    ea = s(33588);
function eC(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = s[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
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
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, l);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              }),
        e
    );
}
function ec(e, t) {
    if (null == e) return {};
    var s,
        l,
        i = (function (e, t) {
            if (null == e) return {};
            var s,
                l,
                i = {},
                r = Object.keys(e);
            for (l = 0; l < r.length; l++) (s = r[l]), t.indexOf(s) >= 0 || (i[s] = e[s]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (l = 0; l < r.length; l++) (s = r[l]), !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (i[s] = e[s]);
    }
    return i;
}
let eu = (e) => {
        var { children: t, onClick: s } = e,
            i = ec(e, ['children', 'onClick']);
        return (0, l.jsx)(
            x.zxk,
            ed(
                eC(
                    {
                        fullWidth: !0,
                        look: x.zxk.Looks.FILLED,
                        innerClassName: ea.cardButtonInner,
                        onClick: (e) => {
                            e.stopPropagation(), s(e);
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
            s = ec(e, ['className']);
        return (0, l.jsx)(
            x.zxk,
            ed(
                eC(
                    {
                        color: x.Ttl.BRAND,
                        look: x.zxk.Looks.FILLED,
                        size: x.PhG.ICON,
                        className: n()(ea.previewButton, t),
                        innerClassName: ea.previewButtonInner,
                        'aria-label': eo.intl.string(eo.t.SKNnqq)
                    },
                    s
                ),
                {
                    children: (0, l.jsx)(x.tEF, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }
            )
        );
    },
    eh = (e) => {
        let { profileEffectId: t, isHighlighted: s, isPurchased: i } = e;
        return (0, l.jsx)('div', {
            className: ea.profileEffectShopPreview,
            children: (0, l.jsx)(E.Z, {
                profileEffectId: t,
                isHovering: s,
                isPurchased: i && !s,
                removeSetHeight: !0
            })
        });
    },
    ex = (e) => {
        let { isHighlighted: t, isPurchased: s, user: i, item: r } = e;
        return (0, l.jsx)('div', {
            className: ea.avatarContainer,
            children: (0, l.jsx)(Y.R, {
                item: r,
                user: i,
                isPurchased: s,
                isHighlighted: t
            })
        });
    },
    ef = (e) => {
        let { showStatus: t, width: s, opacity: i } = e;
        return (0, l.jsxs)('div', {
            className: n()(ea.nameplatePreviewSampleItem, ea.placeholderItem),
            style: { opacity: i },
            children: [
                (0, l.jsx)(x.qEK, {
                    src: null,
                    size: x.EFr.SIZE_32,
                    status: t ? er.Skl.ONLINE : void 0,
                    statusColor: 'var(--background-modifier-accent)',
                    'aria-hidden': !0
                }),
                (0, l.jsx)('div', {
                    className: ea.placeholderBar,
                    style: { maxWidth: null != s ? s : '100px' }
                })
            ]
        });
    },
    ej = (e) => {
        let { user: t, nameplate: s, isHighlighted: i, isPurchased: r } = e;
        return (0, l.jsx)('div', {
            className: ea.nameplatePreviewRootContainer,
            children: (0, l.jsxs)('div', {
                className: ea.nameplatePreviewList,
                children: [
                    (0, l.jsxs)('div', {
                        className: ea.fadeIn,
                        children: [
                            (0, l.jsx)(ef, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, l.jsx)(ef, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, l.jsx)(Q.Z, {
                        user: t,
                        nameplate: s,
                        className: ea.nameplatePreviewSampleItem,
                        isHighlighted: i,
                        showWumpus: !i,
                        showStatus: !0,
                        isPurchased: r
                    }),
                    (0, l.jsxs)('div', {
                        className: ea.fadeOut,
                        children: [
                            (0, l.jsx)(ef, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, l.jsx)(ef, {
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
    em = (e) => {
        let { tab: t, selectedProduct: s, cardRef: i, children: r } = e,
            { handleCardVisibilityChange: n } = (0, B.E)(s.skuId, t === ei.AW.CATALOG ? 'full' : t);
        return (0, l.jsx)(h.$, {
            innerRef: i,
            onChange: n,
            threshold: 0,
            children: r
        });
    },
    eg =
        12633 == s.j
            ? i.memo(function (e) {
                  var { tab: t, product: s, onMount: r } = e,
                      n = ec(e, ['tab', 'product', 'onMount']);
                  let o = (0, p.e7)([k.Z], () => k.Z.purchases),
                      a = (0, N.o)(s, o),
                      C = (0, $.W)(s, a),
                      d = i.useRef(null),
                      { previewingVariantIndex: c, handleEntering: u, handleLeaving: h } = (0, et.f)(s),
                      x = (0, ee.o)(s, o, c);
                  return (
                      i.useEffect(() => {
                          null == r || r(d, s);
                      }, [r, s]),
                      (0, l.jsx)(em, {
                          tab: t,
                          selectedProduct: C,
                          cardRef: d,
                          children: (0, l.jsx)(
                              ev,
                              eC(
                                  {
                                      tab: t,
                                      product: s,
                                      selectedVariantIndex: a,
                                      selectedProduct: C,
                                      cardRef: d,
                                      previewingVariantIndex: c,
                                      handleEntering: u,
                                      handleLeaving: h,
                                      firstCollectibleItem: x
                                  },
                                  n
                              )
                          )
                      })
                  );
              })
            : null;
function eL(e) {
    let { product: t, isGiftEasterEggEnabled: s, tab: i, selectedProduct: r, selectedVariantIndex: n, cardRef: o, analyticsLocations: a, buildHandlePreviewClick: C, isPremiumUser: c, isPremiumProduct: h, isPurchased: f, isPartiallyOwnedBundle: j, isDisabled: g, discount: L } = e,
        E = (0, I.rN)(t),
        [Z, O] = (0, p.Wu)([k.Z], () => [k.Z.isClaiming === t.skuId, null != k.Z.isClaiming && k.Z.isClaiming !== t.skuId]),
        N = (0, M.hv)('CollectiblesShopTallCard'),
        R = (0, I.XM)(r, c, !1),
        A = (0, I.ne)({
            product: r,
            isPartiallyOwnedBundle: j,
            isPurchased: f
        }),
        { enabled: T } = (0, F.WX)({ location: 'collectibles_shop_tall_card' }),
        H = (0, _.E)('shop_tall_card'),
        { handleUseNow: B, isApplying: V } = (0, S.W)({ product: r }),
        W = C(m.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        {
            displayPrices: z,
            checkoutEligiblePrices: K,
            isOrbExclusive: Y,
            shouldCheckoutWithOrbs: X,
            hasSufficientOrbs: Q
        } = (0, es.Ip)({
            product: t,
            isPremiumUser: c,
            tab: i
        });
    if (0 === z.length) return null;
    let $ = () =>
            (0, l.jsx)('div', {
                className: ea.hoverUpsellContainer,
                children: (0, l.jsx)(b.Z, {
                    fullWidth: !0,
                    className: ea.__invalid_premiumSubscribeButton,
                    disabled: O,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: eo.intl.string(eo.t.sEAnVF) },
                    subscriptionTier: en.Si.TIER_2
                })
            }),
        ee = () =>
            (0, l.jsx)(eu, {
                onClick: W,
                children: eo.intl.string(eo.t.FdGl5O)
            }),
        et = () =>
            (0, l.jsx)(eu, {
                onClick: () => {
                    (0, v.Z)({
                        skuId: (0, J.S)({
                            product: t,
                            selectedVariantIndex: n
                        }),
                        analyticsLocations: a,
                        returnRef: o,
                        variantsReturnStyle: N
                    });
                },
                children: eo.intl.formatToPlainString(eo.t['cNSL/v'], { price: R })
            }),
        er = () =>
            (0, l.jsx)(eu, {
                onClick: () => {
                    (0, y.q)({
                        skuId: (0, J.S)({
                            product: t,
                            selectedVariantIndex: n
                        }),
                        onCheckoutSuccess: (e) => {
                            var s;
                            let { entitlements: l } = e;
                            (0, P.qg)({
                                variantsReturnStyle: N,
                                location: 'collectible_checkout_with_orb'
                            }),
                                (0, el.Z)({
                                    product: t,
                                    analyticsLocations: a,
                                    shouldCheckoutWithOrbs: !0,
                                    itemConsumed: null == (s = l[0]) ? void 0 : s.consumed,
                                    purchaseType: ei.o8.ORB
                                });
                        },
                        analyticsLocations: a
                    });
                },
                children: eo.intl.format(eo.t.kAgx5O, {
                    orbPrice: K[0].amount,
                    orbIconHook: () => (0, l.jsx)(w.Z, {})
                })
            }),
        eC = () => {
            let e = async () => {
                await (0, P.fK)(t.skuId),
                    (0, el.Z)({
                        product: t,
                        analyticsLocations: a,
                        purchaseType: ei.o8.PREMIUM_PURCHASE
                    });
            };
            return (0, l.jsx)(eu, {
                onClick: e,
                disabled: O,
                submitting: Z,
                submittingStartedLabel: eo.intl.string(eo.t['TYw+9v']),
                submittingFinishedLabel: eo.intl.string(eo.t.Pg1UPz),
                children: eo.intl.string(eo.t.zp6caG)
            });
        },
        ed = () =>
            (0, l.jsx)(eu, {
                onClick: B,
                submitting: V,
                children: eo.intl.string(eo.t.MAS7uL)
            }),
        ec = () =>
            (0, l.jsx)(eu, {
                onClick: W,
                children: eo.intl.string(eo.t.GpnHfH)
            });
    return (0, l.jsxs)('div', {
        className: ea.detailsWrapper,
        children: [
            (0, l.jsx)('div', {
                className: ea.innerBlur,
                children: g
                    ? (0, l.jsx)(x.X6q, {
                          variant: 'heading-md/semibold',
                          color: 'header-muted',
                          className: ea.priceTag,
                          children: eo.intl.string(eo.t.wu4gyc)
                      })
                    : f || j
                      ? (0, l.jsx)(D.U, {
                            className: ea.priceTag,
                            isPartiallyPurchased: j
                        })
                      : h
                        ? (0, l.jsx)(x.Text, {
                              variant: 'text-md/semibold',
                              className: ea.priceTag,
                              children: eo.intl.string(eo.t.rt69oq)
                          })
                        : T
                          ? (0, l.jsx)(q.e, {
                                displayPrices: z,
                                isPremiumUser: c,
                                discount: L,
                                hasSufficientOrbs: Q
                            })
                          : (0, l.jsx)(G.Z, {
                                product: r,
                                discount: L,
                                isPremiumUser: c,
                                className: ea.priceTag,
                                hideStrikethroughPrice: H
                            })
            }),
            (0, l.jsx)('div', {
                className: ea.innerHover,
                children: (0, l.jsxs)('div', {
                    className: ea.buttonsContainer,
                    children: [
                        (() => {
                            if (h && !c && !E) return $();
                            if (!A || g) return ee();
                            if (f) return ed();
                            if (h) return eC();
                            if (X)
                                if (Q) return er();
                                else return ee();
                            return i === ei.AW.ORBS ? ec() : et();
                        })(),
                        h || d.tq || Y || t.type === u.Z.NAMEPLATE || !A || i === ei.AW.ORBS
                            ? null
                            : E
                              ? (0, l.jsx)(ep, { onClick: W })
                              : (0, l.jsx)(U.Z, {
                                    product: t,
                                    selectedVariantIndex: n,
                                    returnRef: o,
                                    isGiftEasterEggEnabled: s,
                                    tooltipDelay: 250
                                })
                    ]
                })
            })
        ]
    });
}
let ev =
        12633 == s.j
            ? i.memo(function (e) {
                  let { product: t, user: s, category: r, isGiftEasterEggEnabled: o, tab: d, cardRef: h, selectedProduct: v, firstCollectibleItem: b, selectedVariantIndex: E, handleEntering: F, handleLeaving: w, previewingVariantIndex: y, className: P } = e,
                      { analyticsLocations: k } = (0, g.ZP)([m.Z.COLLECTIBLES_SHOP_CARD]),
                      N = (0, f.Z)(h),
                      [_, M] = i.useState(!1),
                      S = N || _,
                      B = (0, T.T)(t),
                      D = (0, p.e7)([j.Z], () => j.Z.useReducedMotion),
                      U = O.ZP.canUseCollectibles(s),
                      G = i.useMemo(() => (0, I.BH)(t, U), [t, U]),
                      q = (0, I.G1)(t),
                      Y = (0, p.e7)([Z.Z], () => (0, x.wjy)(Z.Z.theme)),
                      Q = (0, I.Yq)(t.skuId),
                      J = r.skuId === c.T.ANIME_V3 && (0, I.WW)(t.skuId),
                      { hoverVariant: $ } = (0, R.E)('CollectiblesShopTallCard'),
                      { isPurchased: ee, isPartiallyOwnedBundle: et } = (0, H.L)(v),
                      { isDisabled: el } = (0, A.G)(v.skuId),
                      ei = null !== y ? y : E,
                      [er, en] = i.useState(!1),
                      ec = (0, L.N)('CollectiblesShopTallCard');
                  i.useEffect(() => {
                      let { current: e } = h;
                      if (null == e) return;
                      let t = () => M(!0),
                          s = (t) => {
                              e.contains(t.relatedTarget) || M(!1);
                          };
                      return (
                          e.addEventListener('focusin', t),
                          e.addEventListener('focusout', s),
                          e.blur(),
                          () => {
                              e.removeEventListener('focusin', t), e.removeEventListener('focusout', s);
                          }
                      );
                  }, [h]);
                  let eu = i.useRef(null),
                      { displayPrices: ep, isOrbExclusive: ef } = (0, es.oo)({
                          product: t,
                          isPremiumUser: U,
                          tab: d
                      }),
                      em = i.useCallback(
                          (e) => (s) => {
                              let l = (0, es.oQ)({ product: t });
                              (eu.current = s.currentTarget),
                                  (0, W.T)({
                                      product: t,
                                      category: r,
                                      shouldCheckoutWithOrbs: l,
                                      analyticsLocations: k,
                                      analyticsSource: e,
                                      returnRef: eu,
                                      tab: d
                                  });
                          },
                          [t, r, d, k]
                      ),
                      eg = em(m.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === ep.length || ((0, I.x6)(t) && null != G && G.discountPercentage < 0)
                      ? null
                      : (0, l.jsx)(x.tEY, {
                            children: (0, l.jsxs)(x.kL8, {
                                className: n()(P, Y ? ea.shopCardDark : ea.shopCard, {
                                    [ea.partiallyOwned]: et && !S,
                                    [ea.shopCardAnimation]: !D && $ !== R.D.NO_MOVEMENT,
                                    [Y ? ea.shopCardDarkHighlighted : ea.shopCardHighlighted]: S
                                }),
                                ref: h,
                                onClick: eg,
                                'aria-label': t.name,
                                children: [
                                    q &&
                                        (0, l.jsx)(x.ua7, {
                                            tooltipContentClassName: ea.premiumWheelTooltipContent,
                                            color: x.ua7.Colors.PRIMARY,
                                            text: eo.intl.string(eo.t.nKdAlJ),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    x.IGR,
                                                    ed(eC({}, e), {
                                                        className: ea.premiumWheelBadge,
                                                        text: (0, l.jsx)(x.SrA, {
                                                            size: 'md',
                                                            color: 'currentColor',
                                                            className: ea.premiumWheel
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, l.jsx)('div', {
                                        className: ea.preview,
                                        children: (0, C.EQ)(t.type)
                                            .with(u.Z.PROFILE_EFFECT, () =>
                                                (0, l.jsx)(eh, {
                                                    isHighlighted: S,
                                                    profileEffectId: b.id,
                                                    isPurchased: ee
                                                })
                                            )
                                            .with(
                                                u.Z.AVATAR_DECORATION,
                                                () => (
                                                    a()(b.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                    (0, l.jsx)(ex, {
                                                        item: b,
                                                        user: s,
                                                        isHighlighted: S,
                                                        isPurchased: ee
                                                    })
                                                )
                                            )
                                            .with(u.Z.NAMEPLATE, () =>
                                                (0, l.jsx)(ej, {
                                                    user: s,
                                                    nameplate: b,
                                                    isHighlighted: S,
                                                    isPurchased: ee
                                                })
                                            )
                                            .with(u.Z.BUNDLE, () =>
                                                (0, l.jsx)(X.d, {
                                                    product: t,
                                                    user: s,
                                                    isPurchased: ee,
                                                    isHighlighted: S
                                                })
                                            )
                                            .with(u.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[ei];
                                                return null == e
                                                    ? null
                                                    : (0, C.EQ)(e.type)
                                                          .with(u.Z.PROFILE_EFFECT, () => {
                                                              let [t] = e.items;
                                                              return (0, l.jsx)(eh, {
                                                                  isHighlighted: S,
                                                                  profileEffectId: t.id,
                                                                  isPurchased: ee && !er
                                                              });
                                                          })
                                                          .with(u.Z.AVATAR_DECORATION, () => {
                                                              let [t] = e.items;
                                                              return (
                                                                  a()(t.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                  (0, l.jsx)(ex, {
                                                                      item: t,
                                                                      user: s,
                                                                      isHighlighted: S,
                                                                      isPurchased: ee
                                                                  })
                                                              );
                                                          })
                                                          .otherwise(() => null);
                                            })
                                            .with(u.Z.EXTERNAL_SKU, () =>
                                                (0, l.jsx)(z.b, {
                                                    product: t,
                                                    animationState: S ? 'on' : 'off',
                                                    className: el || (ee && !S) ? ea.externalProductDimmed : void 0
                                                })
                                            )
                                            .otherwise(() => null)
                                    }),
                                    (() => {
                                        let e = ee ? x.sV5 : el ? x.mBM : null;
                                        return null == e
                                            ? null
                                            : (0, l.jsx)('div', {
                                                  className: ea.cardStateIconWrapper,
                                                  children: (0, l.jsx)(e, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: n()(ea.cardStateIcon, { [ea.checkmark]: ee })
                                                  })
                                              });
                                    })(),
                                    (0, l.jsxs)('div', {
                                        className: n()(ea.cardText, Y ? ea.darkCardBackground : ea.lightCardBackground, { [ea.variantsGroup]: t.type === u.Z.VARIANTS_GROUP }),
                                        children: [
                                            (0, l.jsx)(x.Text, {
                                                variant: 'text-lg/bold',
                                                className: ea.productName,
                                                children: B
                                            }),
                                            t.type === u.Z.VARIANTS_GROUP
                                                ? (0, l.jsx)(K.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: y,
                                                          handleEntering: F,
                                                          handleLeaving: w
                                                      },
                                                      selectedVariantIndex: E,
                                                      setIsHoveringOnSwitch: en,
                                                      minimal: !S,
                                                      alternativeBackgroundColor: (null == b ? void 0 : b.type) === u.Z.PROFILE_EFFECT
                                                  })
                                                : null,
                                            (0, l.jsx)(eL, {
                                                product: t,
                                                isGiftEasterEggEnabled: o,
                                                tab: d,
                                                buildHandlePreviewClick: em,
                                                selectedProduct: v,
                                                selectedVariantIndex: E,
                                                cardRef: h,
                                                analyticsLocations: k,
                                                isPremiumUser: U,
                                                isPremiumProduct: q,
                                                isPartiallyOwnedBundle: et,
                                                isPurchased: ee,
                                                isDisabled: el,
                                                discount: G
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(V.Z, {
                                        category: r,
                                        className: ea.limitedTimeBadge,
                                        display: 'card'
                                    }),
                                    et || ee || !Q
                                        ? ef
                                            ? (0, l.jsx)(x.IGR, {
                                                  text: eo.intl.string(eo.t['KUYR+P']),
                                                  disableColor: !0,
                                                  className: ea.badge
                                              })
                                            : J
                                              ? (0, l.jsx)(x.IGR, {
                                                    text: eo.intl.string(eo.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: ea.badge
                                                })
                                              : r.skuId === c.T.NAMEPLATE && ec
                                                ? (0, l.jsx)(x.IGR, {
                                                      text: eo.intl.string(eo.t['soka7+']),
                                                      disableColor: !0,
                                                      className: ea.badge
                                                  })
                                                : null
                                        : (0, l.jsx)(x.IGR, {
                                              text: eo.intl.string(eo.t.y2b7CA),
                                              disableColor: !0,
                                              className: ea.badge
                                          })
                                ]
                            })
                        });
              })
            : null,
    eb = 12633 == s.j ? eg : null;
