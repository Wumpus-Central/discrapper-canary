i.d(t, {
    Z: () => ey,
    d: () => em
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
    v = i(635316),
    L = i(170046),
    _ = i(333867),
    E = i(767714),
    b = i(876917),
    y = i(210887),
    O = i(822857),
    Z = i(960919),
    k = i(275388),
    A = i(626135),
    I = i(74538),
    P = i(335131),
    F = i(381585),
    w = i(1870),
    S = i(429368),
    M = i(884697),
    N = i(664018),
    T = i(819570),
    R = i(228624),
    H = i(635552),
    B = i(290175),
    D = i(905357),
    V = i(724994),
    W = i(297651),
    G = i(390698),
    U = i(813083),
    z = i(680942),
    q = i(558060),
    K = i(237031),
    Q = i(508925),
    X = i(306092),
    Y = i(453713),
    J = i(616066),
    $ = i(216541),
    ee = i(22267),
    et = i(67409),
    ei = i(58201),
    es = i(201964),
    el = i(361110),
    er = i(956472),
    en = i(832149),
    eo = i(215023),
    ea = i(981631),
    ed = i(474936),
    eC = i(388032),
    ec = i(33588);
function eu(e) {
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
function ep(e, t) {
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
function eh(e, t) {
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
let ex = (e) => {
        var { children: t, onClick: i } = e,
            l = eh(e, ['children', 'onClick']);
        return (0, s.jsx)(
            x.zxk,
            ep(
                eu(
                    {
                        fullWidth: !0,
                        look: x.zxk.Looks.FILLED,
                        innerClassName: ec.cardButtonInner,
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
    ef = (e) => {
        var { className: t } = e,
            i = eh(e, ['className']);
        return (0, s.jsx)(
            x.zxk,
            ep(
                eu(
                    {
                        color: x.Ttl.BRAND,
                        look: x.zxk.Looks.FILLED,
                        size: x.PhG.ICON,
                        className: n()(ec.previewButton, t),
                        innerClassName: ec.previewButtonInner,
                        'aria-label': eC.intl.string(eC.t.SKNnqq)
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
    eg = (e) => {
        let { profileEffectId: t, isHighlighted: i, isPurchased: l } = e;
        return (0, s.jsx)('div', {
            className: ec.profileEffectShopPreview,
            children: (0, s.jsx)(b.Z, {
                profileEffectId: t,
                isHovering: i,
                isPurchased: l && !i,
                removeSetHeight: !0
            })
        });
    },
    ej = (e) => {
        let { isHighlighted: t, isPurchased: i, user: l, item: r } = e;
        return (0, s.jsx)('div', {
            className: ec.avatarContainer,
            children: (0, s.jsx)(J.R, {
                item: r,
                user: l,
                isPurchased: i,
                isHighlighted: t
            })
        });
    },
    em = (e) => {
        let { showStatus: t, width: i, opacity: l } = e;
        return (0, s.jsxs)('div', {
            className: n()(ec.nameplatePreviewSampleItem, ec.placeholderItem),
            style: { opacity: l },
            children: [
                (0, s.jsx)(x.qEK, {
                    src: null,
                    size: x.EFr.SIZE_32,
                    status: t ? ea.Skl.ONLINE : void 0,
                    statusColor: 'var(--background-modifier-accent)',
                    'aria-hidden': !0,
                    imageClassName: ec.nameplatePlaceholderAvatar
                }),
                (0, s.jsx)('div', {
                    className: ec.placeholderBar,
                    style: { maxWidth: null != i ? i : '100px' }
                })
            ]
        });
    },
    ev = (e) => {
        let { user: t, nameplate: i, isHighlighted: l, isPurchased: r } = e;
        return (0, s.jsx)('div', {
            className: ec.nameplatePreviewRootContainer,
            children: (0, s.jsxs)('div', {
                className: ec.nameplatePreviewList,
                children: [
                    (0, s.jsxs)('div', {
                        className: ec.fadeIn,
                        children: [
                            (0, s.jsx)(em, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, s.jsx)(em, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, s.jsx)(ee.Z, {
                        user: t,
                        nameplate: i,
                        className: ec.nameplatePreviewSampleItem,
                        isHighlighted: l,
                        showPlaceholderUser: !l,
                        showStatus: !0,
                        isPurchased: r
                    }),
                    (0, s.jsxs)('div', {
                        className: ec.fadeOut,
                        children: [
                            (0, s.jsx)(em, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, s.jsx)(em, {
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
    eL = (e) => {
        let { tab: t, selectedProduct: i, cardRef: l, children: r } = e,
            { handleCardVisibilityChange: n } = (0, W.E)(i.skuId, t === eo.AW.CATALOG ? 'full' : t);
        return (0, s.jsx)(h.$, {
            innerRef: l,
            onChange: n,
            threshold: 0,
            children: r
        });
    },
    e_ =
        12633 == i.j
            ? l.memo(function (e) {
                  var { tab: t, product: i, onMount: r } = e,
                      n = eh(e, ['tab', 'product', 'onMount']);
                  let o = (0, p.e7)([w.Z], () => w.Z.purchases),
                      a = (0, S.o)(i, o),
                      d = (0, ei.W)(i, a),
                      C = l.useRef(null),
                      { previewingVariantIndex: c, handleEntering: u, handleLeaving: h } = (0, el.f)(i),
                      x = (0, es.o)(i, o, c);
                  return (
                      l.useEffect(() => {
                          null == r || r(C, i);
                      }, [r, i]),
                      (0, s.jsx)(eL, {
                          tab: t,
                          selectedProduct: d,
                          cardRef: C,
                          children: (0, s.jsx)(
                              eb,
                              eu(
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
function eE(e) {
    let { product: t, isGiftEasterEggEnabled: i, tab: l, selectedProduct: r, selectedVariantIndex: n, cardRef: o, analyticsLocations: a, buildHandlePreviewClick: d, isPremiumUser: c, isPremiumProduct: h, isPurchased: f, isPartiallyOwnedBundle: g, isDisabled: m, discount: L } = e,
        b = (0, F.sp)(),
        y = (0, M.rN)(t),
        [I, S] = (0, p.Wu)([w.Z], () => [w.Z.isClaiming === t.skuId, null != w.Z.isClaiming && w.Z.isClaiming !== t.skuId]),
        N = (0, R.hv)('CollectiblesShopTallCard'),
        B = (0, M.XM)(r, c, !1),
        D = (0, M.ne)({
            product: r,
            isPartiallyOwnedBundle: g,
            isPurchased: f
        }),
        { enabled: V } = (0, O.WX)({ location: 'collectibles_shop_tall_card' }),
        W = (0, T.E)('shop_tall_card'),
        U = (0, v.v)('CollectiblesShopTallCard'),
        { handleUseNow: K, isApplying: Q } = (0, H.W)({ product: r }),
        Y = d(j.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        {
            displayPrices: J,
            checkoutEligiblePrices: $,
            isOrbExclusive: ee,
            shouldCheckoutWithOrbs: ei,
            hasSufficientOrbs: es
        } = (0, er.Ip)({
            product: t,
            isPremiumUser: c,
            tab: l
        });
    if (0 === J.length) return null;
    let el = () =>
            (0, s.jsx)('div', {
                className: ec.hoverUpsellContainer,
                children: (0, s.jsx)(E.Z, {
                    fullWidth: !0,
                    className: ec.__invalid_premiumSubscribeButton,
                    disabled: S,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: eC.intl.string(eC.t.sEAnVF) },
                    subscriptionTier: ed.Si.TIER_2
                })
            }),
        eu = () =>
            (0, s.jsx)(ex, {
                onClick: Y,
                children: eC.intl.string(eC.t.FdGl5O)
            }),
        ep = () =>
            (0, s.jsx)(ex, {
                onClick: () => {
                    A.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                        sku_id: t.skuId,
                        page_type: l,
                        page_section: null == b ? void 0 : b.pageSection,
                        page_category: l === eo.AW.HOME || null == b ? void 0 : b.pageCategory,
                        page_index: l === eo.AW.CATALOG ? (null == b ? void 0 : b.pageIndex) : void 0,
                        page_size: l === eo.AW.CATALOG ? (null == b ? void 0 : b.pageSize) : void 0,
                        tile_type: u.Z[t.type],
                        tile_position: String(null == b ? void 0 : b.tilePosition),
                        cta_name: 'buy button'
                    }),
                        (0, _.Z)({
                            skuId: (0, et.S)({
                                product: t,
                                selectedVariantIndex: n
                            }),
                            analyticsLocations: a,
                            returnRef: o,
                            variantsReturnStyle: N
                        });
                },
                children: eC.intl.formatToPlainString(eC.t['cNSL/v'], { price: B })
            }),
        eh = () =>
            (0, s.jsx)(ex, {
                onClick: () => {
                    A.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                        sku_id: t.skuId,
                        page_type: l,
                        page_section: null == b ? void 0 : b.pageSection,
                        page_category: l === eo.AW.HOME || null == b ? void 0 : b.pageCategory,
                        page_index: l === eo.AW.CATALOG ? (null == b ? void 0 : b.pageIndex) : void 0,
                        page_size: l === eo.AW.CATALOG ? (null == b ? void 0 : b.pageSize) : void 0,
                        tile_type: u.Z[t.type],
                        tile_position: String(null == b ? void 0 : b.tilePosition),
                        cta_name: 'claim with orbs button'
                    }),
                        (0, k.q)({
                            skuId: (0, et.S)({
                                product: t,
                                selectedVariantIndex: n
                            }),
                            onCheckoutSuccess: (e) => {
                                var i;
                                let { entitlements: s } = e;
                                (0, P.qg)({
                                    variantsReturnStyle: N,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    (0, en.Z)({
                                        product: t,
                                        analyticsLocations: a,
                                        shouldCheckoutWithOrbs: !0,
                                        itemConsumed: null == (i = s[0]) ? void 0 : i.consumed,
                                        purchaseType: eo.o8.ORB
                                    });
                            },
                            analyticsLocations: a
                        });
                },
                children: eC.intl.format(eC.t.kAgx5O, {
                    orbPrice: $[0].amount,
                    orbIconHook: () => (0, s.jsx)(Z.Z, {})
                })
            }),
        eg = () => {
            let e = async () => {
                A.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                    sku_id: t.skuId,
                    page_type: l,
                    page_section: null == b ? void 0 : b.pageSection,
                    page_category: l === eo.AW.HOME || null == b ? void 0 : b.pageCategory,
                    page_index: l === eo.AW.CATALOG ? (null == b ? void 0 : b.pageIndex) : void 0,
                    page_size: l === eo.AW.CATALOG ? (null == b ? void 0 : b.pageSize) : void 0,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == b ? void 0 : b.tilePosition),
                    cta_name: 'claim premium product button'
                }),
                    await (0, P.fK)(t.skuId),
                    (0, en.Z)({
                        product: t,
                        analyticsLocations: a,
                        purchaseType: eo.o8.PREMIUM_PURCHASE
                    });
            };
            return (0, s.jsx)(ex, {
                onClick: e,
                disabled: S,
                submitting: I,
                submittingStartedLabel: eC.intl.string(eC.t['TYw+9v']),
                submittingFinishedLabel: eC.intl.string(eC.t.Pg1UPz),
                children: eC.intl.string(eC.t.zp6caG)
            });
        },
        ej = () =>
            (0, s.jsx)(ex, {
                onClick: K,
                submitting: Q,
                children: eC.intl.string(eC.t.MAS7uL)
            }),
        em = () =>
            (0, s.jsx)(ex, {
                onClick: Y,
                children: eC.intl.string(eC.t.GpnHfH)
            });
    return (0, s.jsxs)('div', {
        className: ec.detailsWrapper,
        children: [
            (0, s.jsx)('div', {
                className: ec.innerBlur,
                children: m
                    ? (0, s.jsx)(x.X6q, {
                          variant: 'heading-md/semibold',
                          color: 'header-muted',
                          className: ec.priceTag,
                          children: eC.intl.string(eC.t.wu4gyc)
                      })
                    : f || g
                      ? (0, s.jsx)(G.U, {
                            className: ec.priceTag,
                            isPartiallyPurchased: g
                        })
                      : h
                        ? (0, s.jsx)(x.Text, {
                              variant: 'text-md/semibold',
                              className: ec.priceTag,
                              children: eC.intl.string(eC.t.rt69oq)
                          })
                        : V
                          ? (0, s.jsx)(X.e, {
                                displayPrices: J,
                                isPremiumUser: c,
                                discount: L,
                                hasSufficientOrbs: es
                            })
                          : (0, s.jsx)(q.Z, {
                                product: r,
                                discount: L,
                                isPremiumUser: c,
                                className: ec.priceTag,
                                hideStrikethroughPrice: W
                            })
            }),
            (0, s.jsx)('div', {
                className: ec.innerHover,
                children: (0, s.jsxs)('div', {
                    className: ec.buttonsContainer,
                    children: [
                        (() => {
                            if (h && !c && !y) return el();
                            if (!D || m) return eu();
                            if (f) return ej();
                            if (h) return eg();
                            if (ei)
                                if (es) return eh();
                                else return eu();
                            return l === eo.AW.ORBS ? em() : ep();
                        })(),
                        h || C.tq || ee || (t.type === u.Z.NAMEPLATE && !U) || !D || l === eo.AW.ORBS
                            ? null
                            : y
                              ? (0, s.jsx)(ef, { onClick: Y })
                              : (0, s.jsx)(F.k0, {
                                    newValue: { pageCategory: l === eo.AW.HOME || null == b ? void 0 : b.pageCategory },
                                    children: (0, s.jsx)(z.Z, {
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
let eb =
        12633 == i.j
            ? l.memo(function (e) {
                  let { product: t, user: i, category: r, isGiftEasterEggEnabled: o, tab: C, cardRef: h, selectedProduct: v, firstCollectibleItem: _, selectedVariantIndex: E, handleEntering: b, handleLeaving: O, previewingVariantIndex: Z, className: k } = e,
                      { analyticsLocations: P } = (0, m.ZP)([j.Z.COLLECTIBLES_SHOP_CARD]),
                      w = (0, F.sp)(),
                      S = (0, f.Z)(h),
                      [T, R] = l.useState(!1),
                      H = S || T,
                      W = (0, D.T)(t),
                      G = (0, p.e7)([g.Z], () => g.Z.useReducedMotion),
                      z = I.ZP.canUseCollectibles(i),
                      q = l.useMemo(() => (0, M.BH)(t, z), [t, z]),
                      X = (0, M.G1)(t),
                      J = (0, p.e7)([y.Z], () => (0, x.wjy)(y.Z.theme)),
                      ee = (0, M.Yq)(t.skuId),
                      et = r.skuId === c.T.ANIME_V3 && (0, M.WW)(t.skuId),
                      { hoverVariant: ei } = (0, N.E)('CollectiblesShopTallCard'),
                      { isPurchased: es, isPartiallyOwnedBundle: el } = (0, V.L)(v),
                      { isDisabled: en } = (0, B.G)(v.skuId),
                      ed = null !== Z ? Z : E,
                      [eh, ex] = l.useState(!1),
                      ef = (0, L.N)('CollectiblesShopTallCard');
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
                  let em = l.useRef(null),
                      { displayPrices: eL, isOrbExclusive: e_ } = (0, er.oo)({
                          product: t,
                          isPremiumUser: z,
                          tab: C
                      }),
                      eb = l.useCallback(
                          (e) => (i) => {
                              let s = (0, er.oQ)({ product: t });
                              (em.current = i.currentTarget),
                                  A.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == w ? void 0 : w.sessionId,
                                      sku_id: t.skuId,
                                      page_type: C,
                                      page_section: null == w ? void 0 : w.pageSection,
                                      page_category: C === eo.AW.HOME ? void 0 : r.name,
                                      page_index: C === eo.AW.CATALOG ? (null == w ? void 0 : w.pageIndex) : void 0,
                                      page_size: C === eo.AW.CATALOG ? (null == w ? void 0 : w.pageSize) : void 0,
                                      tile_type: u.Z[t.type],
                                      tile_position: String(null == w ? void 0 : w.tilePosition),
                                      cta_name: null
                                  }),
                                  (0, K.T)({
                                      product: t,
                                      category: r,
                                      shouldCheckoutWithOrbs: s,
                                      analyticsLocations: P,
                                      analyticsSource: e,
                                      returnRef: em,
                                      tab: C
                                  });
                          },
                          [t, r, C, P, w]
                      ),
                      ey = eb(j.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === eL.length || ((0, M.x6)(t) && null != q && q.discountPercentage < 0)
                      ? null
                      : (0, s.jsx)(x.tEY, {
                            children: (0, s.jsxs)(x.kL8, {
                                className: n()(k, J ? ec.shopCardDark : ec.shopCard, {
                                    [ec.partiallyOwned]: el && !H,
                                    [ec.shopCardAnimation]: !G && ei !== N.D.NO_MOVEMENT,
                                    [J ? ec.shopCardDarkHighlighted : ec.shopCardHighlighted]: H
                                }),
                                ref: h,
                                onClick: ey,
                                'aria-label': t.name,
                                children: [
                                    X &&
                                        (0, s.jsx)(x.ua7, {
                                            tooltipContentClassName: ec.premiumWheelTooltipContent,
                                            color: x.ua7.Colors.PRIMARY,
                                            text: eC.intl.string(eC.t.nKdAlJ),
                                            children: (e) =>
                                                (0, s.jsx)(
                                                    x.IGR,
                                                    ep(eu({}, e), {
                                                        className: ec.premiumWheelBadge,
                                                        text: (0, s.jsx)(x.SrA, {
                                                            size: 'md',
                                                            color: 'currentColor',
                                                            className: ec.premiumWheel
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, s.jsx)('div', {
                                        className: ec.preview,
                                        children: (0, d.EQ)(t.type)
                                            .with(u.Z.PROFILE_EFFECT, () =>
                                                (0, s.jsx)(eg, {
                                                    isHighlighted: H,
                                                    profileEffectId: _.id,
                                                    isPurchased: es
                                                })
                                            )
                                            .with(
                                                u.Z.AVATAR_DECORATION,
                                                () => (
                                                    a()(_.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                    (0, s.jsx)(ej, {
                                                        item: _,
                                                        user: i,
                                                        isHighlighted: H,
                                                        isPurchased: es
                                                    })
                                                )
                                            )
                                            .with(u.Z.NAMEPLATE, () =>
                                                (0, s.jsx)(ev, {
                                                    user: i,
                                                    nameplate: _,
                                                    isHighlighted: H,
                                                    isPurchased: es
                                                })
                                            )
                                            .with(u.Z.BUNDLE, () =>
                                                (0, s.jsx)($.d, {
                                                    product: t,
                                                    user: i,
                                                    isPurchased: es,
                                                    isHighlighted: H
                                                })
                                            )
                                            .with(u.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[ed];
                                                return null == e
                                                    ? null
                                                    : (0, d.EQ)(e.type)
                                                          .with(u.Z.PROFILE_EFFECT, () => {
                                                              let [t] = e.items;
                                                              return (0, s.jsx)(eg, {
                                                                  isHighlighted: H,
                                                                  profileEffectId: t.id,
                                                                  isPurchased: es && !eh
                                                              });
                                                          })
                                                          .with(u.Z.AVATAR_DECORATION, () => {
                                                              let [t] = e.items;
                                                              return (
                                                                  a()(t.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                  (0, s.jsx)(ej, {
                                                                      item: t,
                                                                      user: i,
                                                                      isHighlighted: H,
                                                                      isPurchased: es
                                                                  })
                                                              );
                                                          })
                                                          .otherwise(() => null);
                                            })
                                            .with(u.Z.EXTERNAL_SKU, () =>
                                                (0, s.jsx)(Q.b, {
                                                    product: t,
                                                    animationState: H ? 'on' : 'off',
                                                    className: en || (es && !H) ? ec.externalProductDimmed : void 0
                                                })
                                            )
                                            .otherwise(() => null)
                                    }),
                                    (() => {
                                        let e = es ? x.sV5 : en ? x.mBM : null;
                                        return null == e
                                            ? null
                                            : (0, s.jsx)('div', {
                                                  className: ec.cardStateIconWrapper,
                                                  children: (0, s.jsx)(e, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: n()(ec.cardStateIcon, { [ec.checkmark]: es })
                                                  })
                                              });
                                    })(),
                                    (0, s.jsxs)('div', {
                                        className: n()(ec.cardText, J ? ec.darkCardBackground : ec.lightCardBackground, { [ec.variantsGroup]: t.type === u.Z.VARIANTS_GROUP }),
                                        children: [
                                            (0, s.jsx)(x.Text, {
                                                variant: 'text-lg/bold',
                                                className: ec.productName,
                                                children: W
                                            }),
                                            t.type === u.Z.VARIANTS_GROUP
                                                ? (0, s.jsx)(Y.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: Z,
                                                          handleEntering: b,
                                                          handleLeaving: O
                                                      },
                                                      selectedVariantIndex: E,
                                                      setIsHoveringOnSwitch: ex,
                                                      minimal: !H,
                                                      alternativeBackgroundColor: (null == _ ? void 0 : _.type) === u.Z.PROFILE_EFFECT
                                                  })
                                                : null,
                                            (0, s.jsx)(eE, {
                                                product: t,
                                                isGiftEasterEggEnabled: o,
                                                tab: C,
                                                buildHandlePreviewClick: eb,
                                                selectedProduct: v,
                                                selectedVariantIndex: E,
                                                cardRef: h,
                                                analyticsLocations: P,
                                                isPremiumUser: z,
                                                isPremiumProduct: X,
                                                isPartiallyOwnedBundle: el,
                                                isPurchased: es,
                                                isDisabled: en,
                                                discount: q
                                            })
                                        ]
                                    }),
                                    (0, s.jsx)(U.Z, {
                                        category: r,
                                        className: ec.limitedTimeBadge,
                                        display: 'card'
                                    }),
                                    el || es || !ee
                                        ? e_
                                            ? (0, s.jsx)(x.IGR, {
                                                  text: eC.intl.string(eC.t['0TmQRE']),
                                                  disableColor: !0,
                                                  className: ec.badge
                                              })
                                            : et
                                              ? (0, s.jsx)(x.IGR, {
                                                    text: eC.intl.string(eC.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: ec.badge
                                                })
                                              : r.skuId === c.T.NAMEPLATE && ef
                                                ? (0, s.jsx)(x.IGR, {
                                                      text: eC.intl.string(eC.t['soka7+']),
                                                      disableColor: !0,
                                                      className: ec.badge
                                                  })
                                                : null
                                        : (0, s.jsx)(x.IGR, {
                                              text: eC.intl.string(eC.t.y2b7CA),
                                              disableColor: !0,
                                              className: ec.badge
                                          })
                                ]
                            })
                        });
              })
            : null,
    ey = 12633 == i.j ? e_ : null;
