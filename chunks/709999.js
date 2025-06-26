i.d(t, {
    Z: () => eE,
    d: () => eg
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
    v = i(333867),
    L = i(767714),
    _ = i(876917),
    E = i(210887),
    b = i(822857),
    y = i(960919),
    O = i(275388),
    Z = i(626135),
    k = i(74538),
    F = i(335131),
    I = i(381585),
    P = i(1870),
    w = i(429368),
    A = i(884697),
    S = i(664018),
    M = i(819570),
    N = i(228624),
    T = i(635552),
    R = i(290175),
    H = i(905357),
    B = i(724994),
    D = i(297651),
    V = i(390698),
    W = i(813083),
    G = i(680942),
    U = i(558060),
    z = i(237031),
    q = i(508925),
    K = i(306092),
    Q = i(453713),
    X = i(616066),
    Y = i(216541),
    J = i(22267),
    $ = i(67409),
    ee = i(58201),
    et = i(201964),
    ei = i(361110),
    es = i(956472),
    el = i(832149),
    er = i(215023),
    en = i(981631),
    eo = i(474936),
    ea = i(388032),
    ed = i(33588);
function eC(e) {
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
function ec(e, t) {
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
function eu(e, t) {
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
let ep = (e) => {
        var { children: t, onClick: i } = e,
            l = eu(e, ['children', 'onClick']);
        return (0, s.jsx)(
            x.zxk,
            ec(
                eC(
                    {
                        fullWidth: !0,
                        look: x.zxk.Looks.FILLED,
                        innerClassName: ed.cardButtonInner,
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
    eh = (e) => {
        var { className: t } = e,
            i = eu(e, ['className']);
        return (0, s.jsx)(
            x.zxk,
            ec(
                eC(
                    {
                        color: x.Ttl.BRAND,
                        look: x.zxk.Looks.FILLED,
                        size: x.PhG.ICON,
                        className: n()(ed.previewButton, t),
                        innerClassName: ed.previewButtonInner,
                        'aria-label': ea.intl.string(ea.t.SKNnqq)
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
    ex = (e) => {
        let { profileEffectId: t, isHighlighted: i, isPurchased: l } = e;
        return (0, s.jsx)('div', {
            className: ed.profileEffectShopPreview,
            children: (0, s.jsx)(_.Z, {
                profileEffectId: t,
                isHovering: i,
                isPurchased: l && !i,
                removeSetHeight: !0
            })
        });
    },
    ef = (e) => {
        let { isHighlighted: t, isPurchased: i, user: l, item: r } = e;
        return (0, s.jsx)('div', {
            className: ed.avatarContainer,
            children: (0, s.jsx)(X.R, {
                item: r,
                user: l,
                isPurchased: i,
                isHighlighted: t
            })
        });
    },
    eg = (e) => {
        let { showStatus: t, width: i, opacity: l } = e;
        return (0, s.jsxs)('div', {
            className: n()(ed.nameplatePreviewSampleItem, ed.placeholderItem),
            style: { opacity: l },
            children: [
                (0, s.jsx)(x.qEK, {
                    src: null,
                    size: x.EFr.SIZE_32,
                    status: t ? en.Skl.ONLINE : void 0,
                    statusColor: 'var(--background-mod-subtle)',
                    'aria-hidden': !0,
                    imageClassName: ed.nameplatePlaceholderAvatar
                }),
                (0, s.jsx)('div', {
                    className: ed.placeholderBar,
                    style: { maxWidth: null != i ? i : '100px' }
                })
            ]
        });
    },
    ej = (e) => {
        let { user: t, nameplate: i, isHighlighted: l, isPurchased: r } = e;
        return (0, s.jsx)('div', {
            className: ed.nameplatePreviewRootContainer,
            children: (0, s.jsxs)('div', {
                className: ed.nameplatePreviewList,
                children: [
                    (0, s.jsxs)('div', {
                        className: ed.fadeIn,
                        children: [
                            (0, s.jsx)(eg, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, s.jsx)(eg, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, s.jsx)(J.Z, {
                        user: t,
                        nameplate: i,
                        className: ed.nameplatePreviewSampleItem,
                        isHighlighted: l,
                        showPlaceholderUser: !l,
                        showStatus: !0,
                        isPurchased: r
                    }),
                    (0, s.jsxs)('div', {
                        className: ed.fadeOut,
                        children: [
                            (0, s.jsx)(eg, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, s.jsx)(eg, {
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
        let { tab: t, selectedProduct: i, cardRef: l, children: r } = e,
            { handleCardVisibilityChange: n } = (0, D.E)(i.skuId, t === er.AW.CATALOG ? 'full' : t);
        return (0, s.jsx)(h.$, {
            innerRef: l,
            onChange: n,
            threshold: 0,
            children: r
        });
    },
    ev =
        12633 == i.j
            ? l.memo(function (e) {
                  var { tab: t, product: i, onMount: r } = e,
                      n = eu(e, ['tab', 'product', 'onMount']);
                  let o = (0, p.e7)([P.Z], () => P.Z.purchases),
                      a = (0, w.o)(i, o),
                      d = (0, ee.W)(i, a),
                      C = l.useRef(null),
                      { previewingVariantIndex: c, handleEntering: u, handleLeaving: h } = (0, ei.f)(i),
                      x = (0, et.o)(i, o, c);
                  return (
                      l.useEffect(() => {
                          null == r || r(C, i);
                      }, [r, i]),
                      (0, s.jsx)(em, {
                          tab: t,
                          selectedProduct: d,
                          cardRef: C,
                          children: (0, s.jsx)(
                              e_,
                              eC(
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
function eL(e) {
    let { product: t, isGiftEasterEggEnabled: i, tab: l, selectedProduct: r, selectedVariantIndex: n, cardRef: o, analyticsLocations: a, buildHandlePreviewClick: d, isPremiumUser: c, isPremiumProduct: h, isPurchased: f, isPartiallyOwnedBundle: g, isDisabled: m, discount: _ } = e,
        E = (0, I.sp)(),
        k = (0, A.rN)(t),
        [w, S] = (0, p.Wu)([P.Z], () => [P.Z.isClaiming === t.skuId, null != P.Z.isClaiming && P.Z.isClaiming !== t.skuId]),
        R = (0, N.hv)('CollectiblesShopTallCard'),
        H = (0, A.XM)(r, c, !1),
        B = (0, A.ne)({
            product: r,
            isPartiallyOwnedBundle: g,
            isPurchased: f
        }),
        { enabled: D } = (0, b.WX)({ location: 'collectibles_shop_tall_card' }),
        W = (0, M.E)('shop_tall_card'),
        { handleUseNow: z, isApplying: q } = (0, T.W)({ product: r }),
        Q = d(j.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        {
            displayPrices: X,
            checkoutEligiblePrices: Y,
            isOrbExclusive: J,
            shouldCheckoutWithOrbs: ee,
            hasSufficientOrbs: et
        } = (0, es.Ip)({
            product: t,
            isPremiumUser: c,
            tab: l
        });
    if (0 === X.length) return null;
    let ei = () =>
            (0, s.jsx)('div', {
                className: ed.hoverUpsellContainer,
                children: (0, s.jsx)(L.Z, {
                    fullWidth: !0,
                    className: ed.__invalid_premiumSubscribeButton,
                    disabled: S,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: ea.intl.string(ea.t.sEAnVF) },
                    subscriptionTier: eo.Si.TIER_2
                })
            }),
        eC = () =>
            (0, s.jsx)(ep, {
                onClick: Q,
                children: ea.intl.string(ea.t.FdGl5O)
            }),
        ec = () =>
            (0, s.jsx)(ep, {
                onClick: () => {
                    Z.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                        sku_id: t.skuId,
                        page_type: l,
                        page_section: null == E ? void 0 : E.pageSection,
                        page_category: l === er.AW.HOME || null == E ? void 0 : E.pageCategory,
                        page_index: l === er.AW.CATALOG ? (null == E ? void 0 : E.pageIndex) : void 0,
                        page_size: l === er.AW.CATALOG ? (null == E ? void 0 : E.pageSize) : void 0,
                        tile_type: u.Z[t.type],
                        tile_position: String(null == E ? void 0 : E.tilePosition),
                        cta_name: 'buy button'
                    }),
                        (0, v.Z)({
                            skuId: (0, $.S)({
                                product: t,
                                selectedVariantIndex: n
                            }),
                            analyticsLocations: a,
                            returnRef: o,
                            variantsReturnStyle: R
                        });
                },
                children: ea.intl.formatToPlainString(ea.t['cNSL/v'], { price: H })
            }),
        eu = () =>
            (0, s.jsx)(ep, {
                onClick: () => {
                    Z.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                        sku_id: t.skuId,
                        page_type: l,
                        page_section: null == E ? void 0 : E.pageSection,
                        page_category: l === er.AW.HOME || null == E ? void 0 : E.pageCategory,
                        page_index: l === er.AW.CATALOG ? (null == E ? void 0 : E.pageIndex) : void 0,
                        page_size: l === er.AW.CATALOG ? (null == E ? void 0 : E.pageSize) : void 0,
                        tile_type: u.Z[t.type],
                        tile_position: String(null == E ? void 0 : E.tilePosition),
                        cta_name: 'claim with orbs button'
                    }),
                        (0, O.q)({
                            skuId: (0, $.S)({
                                product: t,
                                selectedVariantIndex: n
                            }),
                            onCheckoutSuccess: (e) => {
                                var i;
                                let { entitlements: s } = e;
                                (0, F.qg)({
                                    variantsReturnStyle: R,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    (0, el.Z)({
                                        product: t,
                                        analyticsLocations: a,
                                        shouldCheckoutWithOrbs: !0,
                                        itemConsumed: null == (i = s[0]) ? void 0 : i.consumed,
                                        purchaseType: er.o8.ORB
                                    });
                            },
                            analyticsLocations: a
                        });
                },
                children: ea.intl.format(ea.t.kAgx5O, {
                    orbPrice: Y[0].amount,
                    orbIconHook: () => (0, s.jsx)(y.Z, {})
                })
            }),
        ex = () => {
            let e = async () => {
                Z.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                    sku_id: t.skuId,
                    page_type: l,
                    page_section: null == E ? void 0 : E.pageSection,
                    page_category: l === er.AW.HOME || null == E ? void 0 : E.pageCategory,
                    page_index: l === er.AW.CATALOG ? (null == E ? void 0 : E.pageIndex) : void 0,
                    page_size: l === er.AW.CATALOG ? (null == E ? void 0 : E.pageSize) : void 0,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == E ? void 0 : E.tilePosition),
                    cta_name: 'claim premium product button'
                }),
                    await (0, F.fK)(t.skuId),
                    (0, el.Z)({
                        product: t,
                        analyticsLocations: a,
                        purchaseType: er.o8.PREMIUM_PURCHASE
                    });
            };
            return (0, s.jsx)(ep, {
                onClick: e,
                disabled: S,
                submitting: w,
                submittingStartedLabel: ea.intl.string(ea.t['TYw+9v']),
                submittingFinishedLabel: ea.intl.string(ea.t.Pg1UPz),
                children: ea.intl.string(ea.t.zp6caG)
            });
        },
        ef = () =>
            (0, s.jsx)(ep, {
                onClick: z,
                submitting: q,
                children: ea.intl.string(ea.t.MAS7uL)
            }),
        eg = () =>
            (0, s.jsx)(ep, {
                onClick: Q,
                children: ea.intl.string(ea.t.GpnHfH)
            });
    return (0, s.jsxs)('div', {
        className: ed.detailsWrapper,
        children: [
            (0, s.jsx)('div', {
                className: ed.innerBlur,
                children: m
                    ? (0, s.jsx)(x.X6q, {
                          variant: 'heading-md/semibold',
                          color: 'header-muted',
                          className: ed.priceTag,
                          children: ea.intl.string(ea.t.wu4gyc)
                      })
                    : f || g
                      ? (0, s.jsx)(V.U, {
                            className: ed.priceTag,
                            isPartiallyPurchased: g
                        })
                      : h
                        ? (0, s.jsx)(x.Text, {
                              variant: 'text-md/semibold',
                              className: ed.priceTag,
                              children: ea.intl.string(ea.t.rt69oq)
                          })
                        : D
                          ? (0, s.jsx)(K.e, {
                                displayPrices: X,
                                isPremiumUser: c,
                                discount: _,
                                hasSufficientOrbs: et
                            })
                          : (0, s.jsx)(U.Z, {
                                product: r,
                                discount: _,
                                isPremiumUser: c,
                                className: ed.priceTag,
                                hideStrikethroughPrice: W
                            })
            }),
            (0, s.jsx)('div', {
                className: ed.innerHover,
                children: (0, s.jsxs)('div', {
                    className: ed.buttonsContainer,
                    children: [
                        (() => {
                            if (h && !c && !k) return ei();
                            if (!B || m) return eC();
                            if (f) return ef();
                            if (h) return ex();
                            if (ee)
                                if (et) return eu();
                                else return eC();
                            return l === er.AW.ORBS ? eg() : ec();
                        })(),
                        h || C.tq || J || !B || l === er.AW.ORBS
                            ? null
                            : k
                              ? (0, s.jsx)(eh, { onClick: Q })
                              : (0, s.jsx)(I.k0, {
                                    newValue: { pageCategory: l === er.AW.HOME || null == E ? void 0 : E.pageCategory },
                                    children: (0, s.jsx)(G.Z, {
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
let e_ =
        12633 == i.j
            ? l.memo(function (e) {
                  let { product: t, user: i, category: r, isGiftEasterEggEnabled: o, tab: C, cardRef: h, selectedProduct: v, firstCollectibleItem: L, selectedVariantIndex: _, handleEntering: b, handleLeaving: y, previewingVariantIndex: O, className: F } = e,
                      { analyticsLocations: P } = (0, m.ZP)([j.Z.COLLECTIBLES_SHOP_CARD]),
                      w = (0, I.sp)(),
                      M = (0, f.Z)(h),
                      [N, T] = l.useState(!1),
                      D = M || N,
                      V = (0, H.T)(t),
                      G = (0, p.e7)([g.Z], () => g.Z.useReducedMotion),
                      U = k.ZP.canUseCollectibles(i),
                      K = l.useMemo(() => (0, A.BH)(t, U), [t, U]),
                      X = (0, A.G1)(t),
                      J = (0, p.e7)([E.Z], () => (0, x.wjy)(E.Z.theme)),
                      $ = (0, A.Yq)(t.skuId),
                      ee = r.skuId === c.T.ANIME_V3 && (0, A.WW)(t.skuId),
                      { hoverVariant: et } = (0, S.E)('CollectiblesShopTallCard'),
                      { isPurchased: ei, isPartiallyOwnedBundle: el } = (0, B.L)(v),
                      { isDisabled: eo } = (0, R.G)(v.skuId),
                      eu = null !== O ? O : _,
                      [ep, eh] = l.useState(!1);
                  l.useEffect(() => {
                      let { current: e } = h;
                      if (null == e) return;
                      let t = () => T(!0),
                          i = (t) => {
                              e.contains(t.relatedTarget) || T(!1);
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
                  let eg = l.useRef(null),
                      { displayPrices: em, isOrbExclusive: ev } = (0, es.oo)({
                          product: t,
                          isPremiumUser: U,
                          tab: C
                      }),
                      e_ = l.useCallback(
                          (e) => (i) => {
                              let s = (0, es.oQ)({ product: t });
                              (eg.current = i.currentTarget),
                                  Z.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == w ? void 0 : w.sessionId,
                                      sku_id: t.skuId,
                                      page_type: C,
                                      page_section: null == w ? void 0 : w.pageSection,
                                      page_category: C === er.AW.HOME ? void 0 : r.name,
                                      page_index: C === er.AW.CATALOG ? (null == w ? void 0 : w.pageIndex) : void 0,
                                      page_size: C === er.AW.CATALOG ? (null == w ? void 0 : w.pageSize) : void 0,
                                      tile_type: u.Z[t.type],
                                      tile_position: String(null == w ? void 0 : w.tilePosition),
                                      cta_name: null
                                  }),
                                  (0, z.T)({
                                      product: t,
                                      category: r,
                                      shouldCheckoutWithOrbs: s,
                                      analyticsLocations: P,
                                      analyticsSource: e,
                                      returnRef: eg,
                                      tab: C
                                  });
                          },
                          [t, r, C, P, w]
                      ),
                      eE = e_(j.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === em.length || ((0, A.x6)(t) && null != K && K.discountPercentage < 0)
                      ? null
                      : (0, s.jsx)(x.tEY, {
                            children: (0, s.jsxs)(x.kL8, {
                                className: n()(F, J ? ed.shopCardDark : ed.shopCard, {
                                    [ed.partiallyOwned]: el && !D,
                                    [ed.shopCardAnimation]: !G && et !== S.D.NO_MOVEMENT,
                                    [J ? ed.shopCardDarkHighlighted : ed.shopCardHighlighted]: D
                                }),
                                ref: h,
                                onClick: eE,
                                'aria-label': t.name,
                                children: [
                                    X &&
                                        (0, s.jsx)(x.ua7, {
                                            tooltipContentClassName: ed.premiumWheelTooltipContent,
                                            color: x.ua7.Colors.PRIMARY,
                                            text: ea.intl.string(ea.t.nKdAlJ),
                                            children: (e) =>
                                                (0, s.jsx)(
                                                    x.IGR,
                                                    ec(eC({}, e), {
                                                        className: ed.premiumWheelBadge,
                                                        text: (0, s.jsx)(x.SrA, {
                                                            size: 'md',
                                                            color: 'currentColor',
                                                            className: ed.premiumWheel
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, s.jsx)('div', {
                                        className: ed.preview,
                                        children: (0, d.EQ)(t.type)
                                            .with(u.Z.PROFILE_EFFECT, () =>
                                                (0, s.jsx)(ex, {
                                                    isHighlighted: D,
                                                    profileEffectId: L.id,
                                                    isPurchased: ei
                                                })
                                            )
                                            .with(
                                                u.Z.AVATAR_DECORATION,
                                                () => (
                                                    a()(L.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                    (0, s.jsx)(ef, {
                                                        item: L,
                                                        user: i,
                                                        isHighlighted: D,
                                                        isPurchased: ei
                                                    })
                                                )
                                            )
                                            .with(u.Z.NAMEPLATE, () =>
                                                (0, s.jsx)(ej, {
                                                    user: i,
                                                    nameplate: L,
                                                    isHighlighted: D,
                                                    isPurchased: ei
                                                })
                                            )
                                            .with(u.Z.BUNDLE, () =>
                                                (0, s.jsx)(Y.d, {
                                                    product: t,
                                                    user: i,
                                                    isPurchased: ei,
                                                    isHighlighted: D
                                                })
                                            )
                                            .with(u.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[eu];
                                                return null == e
                                                    ? null
                                                    : (0, d.EQ)(e.type)
                                                          .with(u.Z.PROFILE_EFFECT, () => {
                                                              let [t] = e.items;
                                                              return (0, s.jsx)(ex, {
                                                                  isHighlighted: D,
                                                                  profileEffectId: t.id,
                                                                  isPurchased: ei && !ep
                                                              });
                                                          })
                                                          .with(u.Z.AVATAR_DECORATION, () => {
                                                              let [t] = e.items;
                                                              return (
                                                                  a()(t.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                  (0, s.jsx)(ef, {
                                                                      item: t,
                                                                      user: i,
                                                                      isHighlighted: D,
                                                                      isPurchased: ei
                                                                  })
                                                              );
                                                          })
                                                          .otherwise(() => null);
                                            })
                                            .with(u.Z.EXTERNAL_SKU, () =>
                                                (0, s.jsx)(q.b, {
                                                    product: t,
                                                    animationState: D ? 'on' : 'off',
                                                    className: eo || (ei && !D) ? ed.externalProductDimmed : void 0
                                                })
                                            )
                                            .otherwise(() => null)
                                    }),
                                    (() => {
                                        let e = ei ? x.sV5 : eo ? x.mBM : null;
                                        return null == e
                                            ? null
                                            : (0, s.jsx)('div', {
                                                  className: ed.cardStateIconWrapper,
                                                  children: (0, s.jsx)(e, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: n()(ed.cardStateIcon, { [ed.checkmark]: ei })
                                                  })
                                              });
                                    })(),
                                    (0, s.jsxs)('div', {
                                        className: n()(ed.cardText, J ? ed.darkCardBackground : ed.lightCardBackground, { [ed.variantsGroup]: t.type === u.Z.VARIANTS_GROUP }),
                                        children: [
                                            (0, s.jsx)(x.Text, {
                                                variant: 'text-lg/bold',
                                                className: ed.productName,
                                                children: V
                                            }),
                                            t.type === u.Z.VARIANTS_GROUP
                                                ? (0, s.jsx)(Q.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: O,
                                                          handleEntering: b,
                                                          handleLeaving: y
                                                      },
                                                      selectedVariantIndex: _,
                                                      setIsHoveringOnSwitch: eh,
                                                      minimal: !D,
                                                      alternativeBackgroundColor: (null == L ? void 0 : L.type) === u.Z.PROFILE_EFFECT
                                                  })
                                                : null,
                                            (0, s.jsx)(eL, {
                                                product: t,
                                                isGiftEasterEggEnabled: o,
                                                tab: C,
                                                buildHandlePreviewClick: e_,
                                                selectedProduct: v,
                                                selectedVariantIndex: _,
                                                cardRef: h,
                                                analyticsLocations: P,
                                                isPremiumUser: U,
                                                isPremiumProduct: X,
                                                isPartiallyOwnedBundle: el,
                                                isPurchased: ei,
                                                isDisabled: eo,
                                                discount: K
                                            })
                                        ]
                                    }),
                                    (0, s.jsx)(W.Z, {
                                        category: r,
                                        className: ed.limitedTimeBadge,
                                        display: 'card'
                                    }),
                                    el || ei || !$
                                        ? ev
                                            ? (0, s.jsx)(x.IGR, {
                                                  text: ea.intl.string(ea.t['0TmQRE']),
                                                  disableColor: !0,
                                                  className: ed.badge
                                              })
                                            : ee
                                              ? (0, s.jsx)(x.IGR, {
                                                    text: ea.intl.string(ea.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: ed.badge
                                                })
                                              : null
                                        : (0, s.jsx)(x.IGR, {
                                              text: ea.intl.string(ea.t.y2b7CA),
                                              disableColor: !0,
                                              className: ed.badge
                                          })
                                ]
                            })
                        });
              })
            : null,
    eE = 12633 == i.j ? ev : null;
