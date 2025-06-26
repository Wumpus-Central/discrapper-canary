i.d(t, {
    Z: () => eb,
    d: () => ej
}),
    i(388685),
    i(314940);
var s = i(255367),
    l = i(73800),
    r = i(120356),
    n = i.n(r),
    o = i(512722),
    a = i.n(o),
    d = i(278074),
    C = i(873546),
    c = i(180650),
    u = i(979554),
    p = i(399606),
    h = i(622535),
    x = i(481060),
    f = i(727637),
    g = i(607070),
    j = i(100527),
    m = i(906732),
    v = i(170046),
    L = i(333867),
    _ = i(767714),
    E = i(876917),
    b = i(210887),
    y = i(822857),
    O = i(960919),
    k = i(275388),
    Z = i(626135),
    I = i(74538),
    F = i(335131),
    P = i(381585),
    A = i(1870),
    w = i(429368),
    S = i(884697),
    M = i(664018),
    N = i(819570),
    T = i(228624),
    R = i(635552),
    H = i(290175),
    B = i(905357),
    D = i(724994),
    V = i(297651),
    W = i(390698),
    G = i(813083),
    U = i(680942),
    z = i(558060),
    q = i(237031),
    K = i(508925),
    Q = i(306092),
    X = i(453713),
    Y = i(616066),
    J = i(216541),
    $ = i(22267),
    ee = i(67409),
    et = i(58201),
    ei = i(201964),
    es = i(361110),
    el = i(956472),
    er = i(832149),
    en = i(215023),
    eo = i(981631),
    ea = i(474936),
    ed = i(388032),
    eC = i(33588);
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(i);
        'function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                })
            )),
            s.forEach(function (t) {
                var s;
                (s = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = s);
            });
    }
    return e;
}
function eu(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, s);
                  }
                  return i;
              })(Object(t)).forEach(function (i) {
                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              }),
        e
    );
}
function ep(e, t) {
    if (null == e) return {};
    var i,
        s,
        l = (function (e, t) {
            if (null == e) return {};
            var i,
                s,
                l = {},
                r = Object.keys(e);
            for (s = 0; s < r.length; s++) (i = r[s]), t.indexOf(i) >= 0 || (l[i] = e[i]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    }
    return l;
}
let eh = (e) => {
        var { children: t, onClick: i } = e,
            l = ep(e, ['children', 'onClick']);
        return (0, s.jsx)(
            x.zxk,
            eu(
                ec(
                    {
                        fullWidth: !0,
                        look: x.zxk.Looks.FILLED,
                        innerClassName: eC.cardButtonInner,
                        onClick: (e) => {
                            e.stopPropagation(), i(e);
                        }
                    },
                    l
                ),
                { children: t }
            )
        );
    },
    ex = (e) => {
        var { className: t } = e,
            i = ep(e, ['className']);
        return (0, s.jsx)(
            x.zxk,
            eu(
                ec(
                    {
                        color: x.Ttl.BRAND,
                        look: x.zxk.Looks.FILLED,
                        size: x.PhG.ICON,
                        className: n()(eC.previewButton, t),
                        innerClassName: eC.previewButtonInner,
                        'aria-label': ed.intl.string(ed.t.SKNnqq)
                    },
                    i
                ),
                {
                    children: (0, s.jsx)(x.tEF, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }
            )
        );
    },
    ef = (e) => {
        let { profileEffectId: t, isHighlighted: i, isPurchased: l } = e;
        return (0, s.jsx)('div', {
            className: eC.profileEffectShopPreview,
            children: (0, s.jsx)(E.Z, {
                profileEffectId: t,
                isHovering: i,
                isPurchased: l && !i,
                removeSetHeight: !0
            })
        });
    },
    eg = (e) => {
        let { isHighlighted: t, isPurchased: i, user: l, item: r } = e;
        return (0, s.jsx)('div', {
            className: eC.avatarContainer,
            children: (0, s.jsx)(Y.R, {
                item: r,
                user: l,
                isPurchased: i,
                isHighlighted: t
            })
        });
    },
    ej = (e) => {
        let { showStatus: t, width: i, opacity: l } = e;
        return (0, s.jsxs)('div', {
            className: n()(eC.nameplatePreviewSampleItem, eC.placeholderItem),
            style: { opacity: l },
            children: [
                (0, s.jsx)(x.qEK, {
                    src: null,
                    size: x.EFr.SIZE_32,
                    status: t ? eo.Skl.ONLINE : void 0,
                    statusColor: 'var(--background-mod-subtle)',
                    'aria-hidden': !0,
                    imageClassName: eC.nameplatePlaceholderAvatar
                }),
                (0, s.jsx)('div', {
                    className: eC.placeholderBar,
                    style: { maxWidth: null != i ? i : '100px' }
                })
            ]
        });
    },
    em = (e) => {
        let { user: t, nameplate: i, isHighlighted: l, isPurchased: r } = e;
        return (0, s.jsx)('div', {
            className: eC.nameplatePreviewRootContainer,
            children: (0, s.jsxs)('div', {
                className: eC.nameplatePreviewList,
                children: [
                    (0, s.jsxs)('div', {
                        className: eC.fadeIn,
                        children: [
                            (0, s.jsx)(ej, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, s.jsx)(ej, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, s.jsx)($.Z, {
                        user: t,
                        nameplate: i,
                        className: eC.nameplatePreviewSampleItem,
                        isHighlighted: l,
                        showPlaceholderUser: !l,
                        showStatus: !0,
                        isPurchased: r
                    }),
                    (0, s.jsxs)('div', {
                        className: eC.fadeOut,
                        children: [
                            (0, s.jsx)(ej, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, s.jsx)(ej, {
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
    ev = (e) => {
        let { tab: t, selectedProduct: i, cardRef: l, children: r } = e,
            { handleCardVisibilityChange: n } = (0, V.E)(i.skuId, t === en.AW.CATALOG ? 'full' : t);
        return (0, s.jsx)(h.$, {
            innerRef: l,
            onChange: n,
            threshold: 0,
            children: r
        });
    },
    eL =
        12633 == i.j
            ? l.memo(function (e) {
                  var { tab: t, product: i, onMount: r } = e,
                      n = ep(e, ['tab', 'product', 'onMount']);
                  let o = (0, p.e7)([A.Z], () => A.Z.purchases),
                      a = (0, w.o)(i, o),
                      d = (0, et.W)(i, a),
                      C = l.useRef(null),
                      { previewingVariantIndex: c, handleEntering: u, handleLeaving: h } = (0, es.f)(i),
                      x = (0, ei.o)(i, o, c);
                  return (
                      l.useEffect(() => {
                          null == r || r(C, i);
                      }, [r, i]),
                      (0, s.jsx)(ev, {
                          tab: t,
                          selectedProduct: d,
                          cardRef: C,
                          children: (0, s.jsx)(
                              eE,
                              ec(
                                  {
                                      tab: t,
                                      product: i,
                                      selectedVariantIndex: a,
                                      selectedProduct: d,
                                      cardRef: C,
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
function e_(e) {
    let { product: t, isGiftEasterEggEnabled: i, tab: l, selectedProduct: r, selectedVariantIndex: n, cardRef: o, analyticsLocations: a, buildHandlePreviewClick: d, isPremiumUser: c, isPremiumProduct: h, isPurchased: f, isPartiallyOwnedBundle: g, isDisabled: m, discount: v } = e,
        E = (0, P.sp)(),
        b = (0, S.rN)(t),
        [I, w] = (0, p.Wu)([A.Z], () => [A.Z.isClaiming === t.skuId, null != A.Z.isClaiming && A.Z.isClaiming !== t.skuId]),
        M = (0, T.hv)('CollectiblesShopTallCard'),
        H = (0, S.XM)(r, c, !1),
        B = (0, S.ne)({
            product: r,
            isPartiallyOwnedBundle: g,
            isPurchased: f
        }),
        { enabled: D } = (0, y.WX)({ location: 'collectibles_shop_tall_card' }),
        V = (0, N.E)('shop_tall_card'),
        { handleUseNow: G, isApplying: q } = (0, R.W)({ product: r }),
        K = d(j.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        {
            displayPrices: X,
            checkoutEligiblePrices: Y,
            isOrbExclusive: J,
            shouldCheckoutWithOrbs: $,
            hasSufficientOrbs: et
        } = (0, el.Ip)({
            product: t,
            isPremiumUser: c,
            tab: l
        });
    if (0 === X.length) return null;
    let ei = () =>
            (0, s.jsx)('div', {
                className: eC.hoverUpsellContainer,
                children: (0, s.jsx)(_.Z, {
                    fullWidth: !0,
                    className: eC.__invalid_premiumSubscribeButton,
                    disabled: w,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: ed.intl.string(ed.t.sEAnVF) },
                    subscriptionTier: ea.Si.TIER_2
                })
            }),
        es = () =>
            (0, s.jsx)(eh, {
                onClick: K,
                children: ed.intl.string(ed.t.FdGl5O)
            }),
        ec = () =>
            (0, s.jsx)(eh, {
                onClick: () => {
                    Z.default.track(eo.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                        sku_id: t.skuId,
                        page_type: l,
                        page_section: null == E ? void 0 : E.pageSection,
                        page_category: l === en.AW.HOME || null == E ? void 0 : E.pageCategory,
                        page_index: l === en.AW.CATALOG ? (null == E ? void 0 : E.pageIndex) : void 0,
                        page_size: l === en.AW.CATALOG ? (null == E ? void 0 : E.pageSize) : void 0,
                        tile_type: u.Z[t.type],
                        tile_position: String(null == E ? void 0 : E.tilePosition),
                        cta_name: 'buy button'
                    }),
                        (0, L.Z)({
                            skuId: (0, ee.S)({
                                product: t,
                                selectedVariantIndex: n
                            }),
                            analyticsLocations: a,
                            returnRef: o,
                            variantsReturnStyle: M
                        });
                },
                children: ed.intl.formatToPlainString(ed.t['cNSL/v'], { price: H })
            }),
        eu = () =>
            (0, s.jsx)(eh, {
                onClick: () => {
                    Z.default.track(eo.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                        sku_id: t.skuId,
                        page_type: l,
                        page_section: null == E ? void 0 : E.pageSection,
                        page_category: l === en.AW.HOME || null == E ? void 0 : E.pageCategory,
                        page_index: l === en.AW.CATALOG ? (null == E ? void 0 : E.pageIndex) : void 0,
                        page_size: l === en.AW.CATALOG ? (null == E ? void 0 : E.pageSize) : void 0,
                        tile_type: u.Z[t.type],
                        tile_position: String(null == E ? void 0 : E.tilePosition),
                        cta_name: 'claim with orbs button'
                    }),
                        (0, k.q)({
                            skuId: (0, ee.S)({
                                product: t,
                                selectedVariantIndex: n
                            }),
                            onCheckoutSuccess: (e) => {
                                var i;
                                let { entitlements: s } = e;
                                (0, F.qg)({
                                    variantsReturnStyle: M,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    (0, er.Z)({
                                        product: t,
                                        analyticsLocations: a,
                                        shouldCheckoutWithOrbs: !0,
                                        itemConsumed: null == (i = s[0]) ? void 0 : i.consumed,
                                        purchaseType: en.o8.ORB
                                    });
                            },
                            analyticsLocations: a
                        });
                },
                children: ed.intl.format(ed.t.kAgx5O, {
                    orbPrice: Y[0].amount,
                    orbIconHook: () => (0, s.jsx)(O.Z, {})
                })
            }),
        ep = () => {
            let e = async () => {
                Z.default.track(eo.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                    sku_id: t.skuId,
                    page_type: l,
                    page_section: null == E ? void 0 : E.pageSection,
                    page_category: l === en.AW.HOME || null == E ? void 0 : E.pageCategory,
                    page_index: l === en.AW.CATALOG ? (null == E ? void 0 : E.pageIndex) : void 0,
                    page_size: l === en.AW.CATALOG ? (null == E ? void 0 : E.pageSize) : void 0,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == E ? void 0 : E.tilePosition),
                    cta_name: 'claim premium product button'
                }),
                    await (0, F.fK)(t.skuId),
                    (0, er.Z)({
                        product: t,
                        analyticsLocations: a,
                        purchaseType: en.o8.PREMIUM_PURCHASE
                    });
            };
            return (0, s.jsx)(eh, {
                onClick: e,
                disabled: w,
                submitting: I,
                submittingStartedLabel: ed.intl.string(ed.t['TYw+9v']),
                submittingFinishedLabel: ed.intl.string(ed.t.Pg1UPz),
                children: ed.intl.string(ed.t.zp6caG)
            });
        },
        ef = () =>
            (0, s.jsx)(eh, {
                onClick: G,
                submitting: q,
                children: ed.intl.string(ed.t.MAS7uL)
            }),
        eg = () =>
            (0, s.jsx)(eh, {
                onClick: K,
                children: ed.intl.string(ed.t.GpnHfH)
            });
    return (0, s.jsxs)('div', {
        className: eC.detailsWrapper,
        children: [
            (0, s.jsx)('div', {
                className: eC.innerBlur,
                children: m
                    ? (0, s.jsx)(x.X6q, {
                          variant: 'heading-md/semibold',
                          color: 'header-muted',
                          className: eC.priceTag,
                          children: ed.intl.string(ed.t.wu4gyc)
                      })
                    : f || g
                      ? (0, s.jsx)(W.U, {
                            className: eC.priceTag,
                            isPartiallyPurchased: g
                        })
                      : h
                        ? (0, s.jsx)(x.Text, {
                              variant: 'text-md/semibold',
                              className: eC.priceTag,
                              children: ed.intl.string(ed.t.rt69oq)
                          })
                        : D
                          ? (0, s.jsx)(Q.e, {
                                displayPrices: X,
                                isPremiumUser: c,
                                discount: v,
                                hasSufficientOrbs: et
                            })
                          : (0, s.jsx)(z.Z, {
                                product: r,
                                discount: v,
                                isPremiumUser: c,
                                className: eC.priceTag,
                                hideStrikethroughPrice: V
                            })
            }),
            (0, s.jsx)('div', {
                className: eC.innerHover,
                children: (0, s.jsxs)('div', {
                    className: eC.buttonsContainer,
                    children: [
                        (() => {
                            if (h && !c && !b) return ei();
                            if (!B || m) return es();
                            if (f) return ef();
                            if (h) return ep();
                            if ($)
                                if (et) return eu();
                                else return es();
                            return l === en.AW.ORBS ? eg() : ec();
                        })(),
                        h || C.tq || J || !B || l === en.AW.ORBS
                            ? null
                            : b
                              ? (0, s.jsx)(ex, { onClick: K })
                              : (0, s.jsx)(P.k0, {
                                    newValue: { pageCategory: l === en.AW.HOME || null == E ? void 0 : E.pageCategory },
                                    children: (0, s.jsx)(U.Z, {
                                        product: t,
                                        selectedVariantIndex: n,
                                        returnRef: o,
                                        isGiftEasterEggEnabled: i,
                                        tooltipDelay: 250
                                    })
                                })
                    ]
                })
            })
        ]
    });
}
let eE =
        12633 == i.j
            ? l.memo(function (e) {
                  let { product: t, user: i, category: r, isGiftEasterEggEnabled: o, tab: C, cardRef: h, selectedProduct: L, firstCollectibleItem: _, selectedVariantIndex: E, handleEntering: y, handleLeaving: O, previewingVariantIndex: k, className: F } = e,
                      { analyticsLocations: A } = (0, m.ZP)([j.Z.COLLECTIBLES_SHOP_CARD]),
                      w = (0, P.sp)(),
                      N = (0, f.Z)(h),
                      [T, R] = l.useState(!1),
                      V = N || T,
                      W = (0, B.T)(t),
                      U = (0, p.e7)([g.Z], () => g.Z.useReducedMotion),
                      z = I.ZP.canUseCollectibles(i),
                      Q = l.useMemo(() => (0, S.BH)(t, z), [t, z]),
                      Y = (0, S.G1)(t),
                      $ = (0, p.e7)([b.Z], () => (0, x.wjy)(b.Z.theme)),
                      ee = (0, S.Yq)(t.skuId),
                      et = r.skuId === c.T.ANIME_V3 && (0, S.WW)(t.skuId),
                      { hoverVariant: ei } = (0, M.E)('CollectiblesShopTallCard'),
                      { isPurchased: es, isPartiallyOwnedBundle: er } = (0, D.L)(L),
                      { isDisabled: ea } = (0, H.G)(L.skuId),
                      ep = null !== k ? k : E,
                      [eh, ex] = l.useState(!1),
                      ej = (0, v.N)('CollectiblesShopTallCard');
                  l.useEffect(() => {
                      let { current: e } = h;
                      if (null == e) return;
                      let t = () => R(!0),
                          i = (t) => {
                              e.contains(t.relatedTarget) || R(!1);
                          };
                      return (
                          e.addEventListener('focusin', t),
                          e.addEventListener('focusout', i),
                          e.blur(),
                          () => {
                              e.removeEventListener('focusin', t), e.removeEventListener('focusout', i);
                          }
                      );
                  }, [h]);
                  let ev = l.useRef(null),
                      { displayPrices: eL, isOrbExclusive: eE } = (0, el.oo)({
                          product: t,
                          isPremiumUser: z,
                          tab: C
                      }),
                      eb = l.useCallback(
                          (e) => (i) => {
                              let s = (0, el.oQ)({ product: t });
                              (ev.current = i.currentTarget),
                                  Z.default.track(eo.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == w ? void 0 : w.sessionId,
                                      sku_id: t.skuId,
                                      page_type: C,
                                      page_section: null == w ? void 0 : w.pageSection,
                                      page_category: C === en.AW.HOME ? void 0 : r.name,
                                      page_index: C === en.AW.CATALOG ? (null == w ? void 0 : w.pageIndex) : void 0,
                                      page_size: C === en.AW.CATALOG ? (null == w ? void 0 : w.pageSize) : void 0,
                                      tile_type: u.Z[t.type],
                                      tile_position: String(null == w ? void 0 : w.tilePosition),
                                      cta_name: null
                                  }),
                                  (0, q.T)({
                                      product: t,
                                      category: r,
                                      shouldCheckoutWithOrbs: s,
                                      analyticsLocations: A,
                                      analyticsSource: e,
                                      returnRef: ev,
                                      tab: C
                                  });
                          },
                          [t, r, C, A, w]
                      ),
                      ey = eb(j.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === eL.length || ((0, S.x6)(t) && null != Q && Q.discountPercentage < 0)
                      ? null
                      : (0, s.jsx)(x.tEY, {
                            children: (0, s.jsxs)(x.kL8, {
                                className: n()(F, $ ? eC.shopCardDark : eC.shopCard, {
                                    [eC.partiallyOwned]: er && !V,
                                    [eC.shopCardAnimation]: !U && ei !== M.D.NO_MOVEMENT,
                                    [$ ? eC.shopCardDarkHighlighted : eC.shopCardHighlighted]: V
                                }),
                                ref: h,
                                onClick: ey,
                                'aria-label': t.name,
                                children: [
                                    Y &&
                                        (0, s.jsx)(x.ua7, {
                                            tooltipContentClassName: eC.premiumWheelTooltipContent,
                                            color: x.ua7.Colors.PRIMARY,
                                            text: ed.intl.string(ed.t.nKdAlJ),
                                            children: (e) =>
                                                (0, s.jsx)(
                                                    x.IGR,
                                                    eu(ec({}, e), {
                                                        className: eC.premiumWheelBadge,
                                                        text: (0, s.jsx)(x.SrA, {
                                                            size: 'md',
                                                            color: 'currentColor',
                                                            className: eC.premiumWheel
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, s.jsx)('div', {
                                        className: eC.preview,
                                        children: (0, d.EQ)(t.type)
                                            .with(u.Z.PROFILE_EFFECT, () =>
                                                (0, s.jsx)(ef, {
                                                    isHighlighted: V,
                                                    profileEffectId: _.id,
                                                    isPurchased: es
                                                })
                                            )
                                            .with(
                                                u.Z.AVATAR_DECORATION,
                                                () => (
                                                    a()(_.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                    (0, s.jsx)(eg, {
                                                        item: _,
                                                        user: i,
                                                        isHighlighted: V,
                                                        isPurchased: es
                                                    })
                                                )
                                            )
                                            .with(u.Z.NAMEPLATE, () =>
                                                (0, s.jsx)(em, {
                                                    user: i,
                                                    nameplate: _,
                                                    isHighlighted: V,
                                                    isPurchased: es
                                                })
                                            )
                                            .with(u.Z.BUNDLE, () =>
                                                (0, s.jsx)(J.d, {
                                                    product: t,
                                                    user: i,
                                                    isPurchased: es,
                                                    isHighlighted: V
                                                })
                                            )
                                            .with(u.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[ep];
                                                return null == e
                                                    ? null
                                                    : (0, d.EQ)(e.type)
                                                          .with(u.Z.PROFILE_EFFECT, () => {
                                                              let [t] = e.items;
                                                              return (0, s.jsx)(ef, {
                                                                  isHighlighted: V,
                                                                  profileEffectId: t.id,
                                                                  isPurchased: es && !eh
                                                              });
                                                          })
                                                          .with(u.Z.AVATAR_DECORATION, () => {
                                                              let [t] = e.items;
                                                              return (
                                                                  a()(t.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                  (0, s.jsx)(eg, {
                                                                      item: t,
                                                                      user: i,
                                                                      isHighlighted: V,
                                                                      isPurchased: es
                                                                  })
                                                              );
                                                          })
                                                          .otherwise(() => null);
                                            })
                                            .with(u.Z.EXTERNAL_SKU, () =>
                                                (0, s.jsx)(K.b, {
                                                    product: t,
                                                    animationState: V ? 'on' : 'off',
                                                    className: ea || (es && !V) ? eC.externalProductDimmed : void 0
                                                })
                                            )
                                            .otherwise(() => null)
                                    }),
                                    (() => {
                                        let e = es ? x.sV5 : ea ? x.mBM : null;
                                        return null == e
                                            ? null
                                            : (0, s.jsx)('div', {
                                                  className: eC.cardStateIconWrapper,
                                                  children: (0, s.jsx)(e, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: n()(eC.cardStateIcon, { [eC.checkmark]: es })
                                                  })
                                              });
                                    })(),
                                    (0, s.jsxs)('div', {
                                        className: n()(eC.cardText, $ ? eC.darkCardBackground : eC.lightCardBackground, { [eC.variantsGroup]: t.type === u.Z.VARIANTS_GROUP }),
                                        children: [
                                            (0, s.jsx)(x.Text, {
                                                variant: 'text-lg/bold',
                                                className: eC.productName,
                                                children: W
                                            }),
                                            t.type === u.Z.VARIANTS_GROUP
                                                ? (0, s.jsx)(X.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: k,
                                                          handleEntering: y,
                                                          handleLeaving: O
                                                      },
                                                      selectedVariantIndex: E,
                                                      setIsHoveringOnSwitch: ex,
                                                      minimal: !V,
                                                      alternativeBackgroundColor: (null == _ ? void 0 : _.type) === u.Z.PROFILE_EFFECT
                                                  })
                                                : null,
                                            (0, s.jsx)(e_, {
                                                product: t,
                                                isGiftEasterEggEnabled: o,
                                                tab: C,
                                                buildHandlePreviewClick: eb,
                                                selectedProduct: L,
                                                selectedVariantIndex: E,
                                                cardRef: h,
                                                analyticsLocations: A,
                                                isPremiumUser: z,
                                                isPremiumProduct: Y,
                                                isPartiallyOwnedBundle: er,
                                                isPurchased: es,
                                                isDisabled: ea,
                                                discount: Q
                                            })
                                        ]
                                    }),
                                    (0, s.jsx)(G.Z, {
                                        category: r,
                                        className: eC.limitedTimeBadge,
                                        display: 'card'
                                    }),
                                    er || es || !ee
                                        ? eE
                                            ? (0, s.jsx)(x.IGR, {
                                                  text: ed.intl.string(ed.t['0TmQRE']),
                                                  disableColor: !0,
                                                  className: eC.badge
                                              })
                                            : et
                                              ? (0, s.jsx)(x.IGR, {
                                                    text: ed.intl.string(ed.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: eC.badge
                                                })
                                              : r.skuId === c.T.NAMEPLATE && ej
                                                ? (0, s.jsx)(x.IGR, {
                                                      text: ed.intl.string(ed.t['soka7+']),
                                                      disableColor: !0,
                                                      className: eC.badge
                                                  })
                                                : null
                                        : (0, s.jsx)(x.IGR, {
                                              text: ed.intl.string(ed.t.y2b7CA),
                                              disableColor: !0,
                                              className: eC.badge
                                          })
                                ]
                            })
                        });
              })
            : null,
    eb = 12633 == i.j ? eL : null;
