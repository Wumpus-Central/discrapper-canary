(i.d(t, {
    Z: () => ey,
    d: () => eb
}),
    i(388685),
    i(314940));
var r = i(255367),
    l = i(73800),
    n = i(120356),
    s = i.n(n),
    a = i(512722),
    o = i.n(a),
    c = i(278074),
    d = i(873546),
    u = i(180650),
    p = i(979554),
    h = i(399606),
    g = i(622535),
    m = i(755721),
    v = i(481060),
    b = i(727637),
    O = i(607070),
    f = i(100527),
    x = i(906732),
    C = i(333867),
    j = i(767714),
    y = i(876917),
    _ = i(210887),
    E = i(822857),
    P = i(960919),
    I = i(275388),
    S = i(626135),
    A = i(74538),
    k = i(335131),
    T = i(381585),
    w = i(1870),
    L = i(429368),
    N = i(884697),
    R = i(664018),
    Z = i(228624),
    W = i(635552),
    H = i(290175),
    D = i(905357),
    B = i(724994),
    M = i(297651),
    G = i(390698),
    z = i(813083),
    V = i(680942),
    F = i(558060),
    U = i(237031),
    K = i(508925),
    q = i(306092),
    Q = i(453713),
    X = i(616066),
    Y = i(216541),
    J = i(22267),
    $ = i(67409),
    ee = i(58201),
    et = i(201964),
    ei = i(361110),
    er = i(956472),
    el = i(832149),
    en = i(215023),
    es = i(981631),
    ea = i(474936),
    eo = i(388032),
    ec = i(33588);
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(i);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
                      var r = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, r);
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
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var i,
                r,
                l = {},
                n = Object.keys(e);
            for (r = 0; r < n.length; r++) ((i = n[r]), t.indexOf(i) >= 0 || (l[i] = e[i]));
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (r = 0; r < n.length; r++) ((i = n[r]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]));
    }
    return l;
}
let eh = (e) => {
        var { children: t, onClick: i } = e,
            l = ep(e, ['children', 'onClick']);
        return (0, r.jsx)(
            m.zx,
            eu(
                ed(
                    {
                        fullWidth: !0,
                        look: m.zx.Looks.FILLED,
                        innerClassName: ec.cardButtonInner,
                        onClick: (e) => {
                            (e.stopPropagation(), i(e));
                        }
                    },
                    l
                ),
                { children: t }
            )
        );
    },
    eg = (e) => {
        var { className: t } = e,
            i = ep(e, ['className']);
        return (0, r.jsx)(
            m.zx,
            eu(
                ed(
                    {
                        color: m.Tt.BRAND,
                        look: m.zx.Looks.FILLED,
                        size: m.Ph.ICON,
                        className: s()(ec.previewButton, t),
                        innerClassName: ec.previewButtonInner,
                        'aria-label': eo.intl.string(eo.t.SKNnqq)
                    },
                    i
                ),
                {
                    children: (0, r.jsx)(v.tEF, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }
            )
        );
    },
    em = (e) => {
        let { profileEffectId: t, isHighlighted: i, isPurchased: l } = e;
        return (0, r.jsx)('div', {
            className: ec.profileEffectShopPreview,
            children: (0, r.jsx)(y.Z, {
                profileEffectId: t,
                isHovering: i,
                isPurchased: l && !i,
                removeSetHeight: !0
            })
        });
    },
    ev = (e) => {
        let { isHighlighted: t, isPurchased: i, user: l, item: n } = e;
        return (0, r.jsx)('div', {
            className: ec.avatarContainer,
            children: (0, r.jsx)(X.R, {
                item: n,
                user: l,
                isPurchased: i,
                isHighlighted: t
            })
        });
    },
    eb = (e) => {
        let { showStatus: t, width: i, opacity: l } = e;
        return (0, r.jsxs)('div', {
            className: s()(ec.nameplatePreviewSampleItem, ec.placeholderItem),
            style: { opacity: l },
            children: [
                (0, r.jsx)(v.qEK, {
                    src: null,
                    size: v.EFr.SIZE_32,
                    status: t ? es.Skl.ONLINE : void 0,
                    statusColor: 'var(--border-subtle)',
                    'aria-hidden': !0,
                    imageClassName: ec.nameplatePlaceholderAvatar
                }),
                (0, r.jsx)('div', {
                    className: ec.placeholderBar,
                    style: { maxWidth: null != i ? i : '100px' }
                })
            ]
        });
    },
    eO = (e) => {
        let { user: t, nameplate: i, isHighlighted: l, isPurchased: n } = e;
        return (0, r.jsx)('div', {
            className: ec.nameplatePreviewRootContainer,
            children: (0, r.jsxs)('div', {
                className: ec.nameplatePreviewList,
                children: [
                    (0, r.jsxs)('div', {
                        className: ec.fadeIn,
                        children: [
                            (0, r.jsx)(eb, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, r.jsx)(eb, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, r.jsx)(J.Z, {
                        user: t,
                        nameplate: i,
                        className: ec.nameplatePreviewSampleItem,
                        isHighlighted: l,
                        showPlaceholderUser: !l,
                        showStatus: !0,
                        isPurchased: n
                    }),
                    (0, r.jsxs)('div', {
                        className: ec.fadeOut,
                        children: [
                            (0, r.jsx)(eb, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, r.jsx)(eb, {
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
    ef = (e) => {
        let { tab: t, selectedProduct: i, cardRef: l, children: n } = e,
            { handleCardVisibilityChange: s } = (0, M.E)(i.skuId, t === en.AW.CATALOG ? 'full' : t);
        return (0, r.jsx)(g.$, {
            innerRef: l,
            onChange: s,
            threshold: 0,
            children: n
        });
    },
    ex =
        12633 == i.j
            ? l.memo(function (e) {
                  var { tab: t, product: i, onMount: n } = e,
                      s = ep(e, ['tab', 'product', 'onMount']);
                  let a = (0, h.e7)([w.Z], () => w.Z.purchases),
                      o = (0, L.o)(i, a),
                      c = (0, ee.W)(i, o),
                      d = l.useRef(null),
                      { previewingVariantIndex: u, handleEntering: p, handleLeaving: g } = (0, ei.f)(i),
                      m = (0, et.o)(i, a, u);
                  return (
                      l.useEffect(() => {
                          null == n || n(d, i);
                      }, [n, i]),
                      (0, r.jsx)(ef, {
                          tab: t,
                          selectedProduct: c,
                          cardRef: d,
                          children: (0, r.jsx)(
                              ej,
                              ed(
                                  {
                                      tab: t,
                                      product: i,
                                      selectedVariantIndex: o,
                                      selectedProduct: c,
                                      cardRef: d,
                                      previewingVariantIndex: u,
                                      handleEntering: p,
                                      handleLeaving: g,
                                      firstCollectibleItem: m
                                  },
                                  s
                              )
                          )
                      })
                  );
              })
            : null;
function eC(e) {
    let { product: t, tab: i, selectedProduct: l, selectedVariantIndex: n, cardRef: s, analyticsLocations: a, buildHandlePreviewClick: o, isPremiumUser: c, isPremiumProduct: u, isPurchased: g, isPartiallyOwnedBundle: m, isDisabled: b, discount: O } = e,
        x = (0, T.sp)(),
        y = (0, N.rN)(t),
        [_, A] = (0, h.Wu)([w.Z], () => [w.Z.isClaiming === t.skuId, null != w.Z.isClaiming && w.Z.isClaiming !== t.skuId]),
        L = (0, Z.hv)('CollectiblesShopTallCard'),
        R = (0, N.XM)(l, c, !1),
        H = (0, N.ne)({
            product: l,
            isPartiallyOwnedBundle: m,
            isPurchased: g
        }),
        { enabled: D } = (0, E.WX)({ location: 'collectibles_shop_tall_card' }),
        { handleUseNow: B, isApplying: M } = (0, W.W)({ product: l }),
        z = o(f.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        {
            displayPrices: U,
            checkoutEligiblePrices: K,
            isOrbExclusive: Q,
            shouldCheckoutWithOrbs: X,
            hasSufficientOrbs: Y
        } = (0, er.Ip)({
            product: t,
            isPremiumUser: c,
            tab: i
        });
    if (0 === U.length) return null;
    let J = () =>
            (0, r.jsx)('div', {
                className: ec.hoverUpsellContainer,
                children: (0, r.jsx)(j.Z, {
                    fullWidth: !0,
                    className: ec.__invalid_premiumSubscribeButton,
                    disabled: A,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: eo.intl.string(eo.t.sEAnVF) },
                    subscriptionTier: ea.Si.TIER_2
                })
            }),
        ee = () =>
            (0, r.jsx)(eh, {
                onClick: z,
                children: eo.intl.string(eo.t.FdGl5O)
            }),
        et = () =>
            (0, r.jsx)(eh, {
                onClick: () => {
                    (S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == x ? void 0 : x.sessionId,
                        sku_id: t.skuId,
                        page_type: i,
                        page_section: null == x ? void 0 : x.pageSection,
                        page_category: i === en.AW.HOME || null == x ? void 0 : x.pageCategory,
                        page_index: i === en.AW.CATALOG ? (null == x ? void 0 : x.pageIndex) : void 0,
                        page_size: i === en.AW.CATALOG ? (null == x ? void 0 : x.pageSize) : void 0,
                        tile_type: p.Z[t.type],
                        tile_position: String(null == x ? void 0 : x.tilePosition),
                        cta_name: 'buy button'
                    }),
                        (0, C.Z)({
                            skuId: (0, $.S)({
                                product: t,
                                selectedVariantIndex: n
                            }),
                            analyticsLocations: a,
                            returnRef: s,
                            variantsReturnStyle: L
                        }));
                },
                children: eo.intl.formatToPlainString(eo.t['cNSL/v'], { price: R })
            }),
        ei = () =>
            (0, r.jsx)(eh, {
                onClick: () => {
                    (S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == x ? void 0 : x.sessionId,
                        sku_id: t.skuId,
                        page_type: i,
                        page_section: null == x ? void 0 : x.pageSection,
                        page_category: i === en.AW.HOME || null == x ? void 0 : x.pageCategory,
                        page_index: i === en.AW.CATALOG ? (null == x ? void 0 : x.pageIndex) : void 0,
                        page_size: i === en.AW.CATALOG ? (null == x ? void 0 : x.pageSize) : void 0,
                        tile_type: p.Z[t.type],
                        tile_position: String(null == x ? void 0 : x.tilePosition),
                        cta_name: 'claim with orbs button'
                    }),
                        (0, I.q)({
                            skuId: (0, $.S)({
                                product: t,
                                selectedVariantIndex: n
                            }),
                            onCheckoutSuccess: (e) => {
                                var i;
                                let { entitlements: r } = e;
                                ((0, k.qg)({
                                    variantsReturnStyle: L,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    (0, el.Z)({
                                        product: t,
                                        analyticsLocations: a,
                                        shouldCheckoutWithOrbs: !0,
                                        itemConsumed: null == (i = r[0]) ? void 0 : i.consumed,
                                        purchaseType: en.o8.ORB
                                    }));
                            },
                            analyticsLocations: a
                        }));
                },
                children: eo.intl.format(eo.t.kAgx5O, {
                    orbPrice: K[0].amount,
                    orbIconHook: () => (0, r.jsx)(P.Z, {})
                })
            }),
        ed = () => {
            let e = async () => {
                (S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == x ? void 0 : x.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == x ? void 0 : x.pageSection,
                    page_category: i === en.AW.HOME || null == x ? void 0 : x.pageCategory,
                    page_index: i === en.AW.CATALOG ? (null == x ? void 0 : x.pageIndex) : void 0,
                    page_size: i === en.AW.CATALOG ? (null == x ? void 0 : x.pageSize) : void 0,
                    tile_type: p.Z[t.type],
                    tile_position: String(null == x ? void 0 : x.tilePosition),
                    cta_name: 'claim premium product button'
                }),
                    await (0, k.fK)(t.skuId),
                    (0, el.Z)({
                        product: t,
                        analyticsLocations: a,
                        purchaseType: en.o8.PREMIUM_PURCHASE
                    }));
            };
            return (0, r.jsx)(eh, {
                onClick: e,
                disabled: A,
                submitting: _,
                submittingStartedLabel: eo.intl.string(eo.t['TYw+9v']),
                submittingFinishedLabel: eo.intl.string(eo.t.Pg1UPz),
                children: eo.intl.string(eo.t.zp6caG)
            });
        },
        eu = () =>
            (0, r.jsx)(eh, {
                onClick: B,
                submitting: M,
                children: eo.intl.string(eo.t.MAS7uL)
            }),
        ep = () =>
            (0, r.jsx)(eh, {
                onClick: z,
                children: eo.intl.string(eo.t.GpnHfH)
            });
    return (0, r.jsxs)('div', {
        className: ec.detailsWrapper,
        children: [
            (0, r.jsx)('div', {
                className: ec.innerBlur,
                children: b
                    ? (0, r.jsx)(v.X6q, {
                          variant: 'heading-md/semibold',
                          color: 'header-muted',
                          className: ec.priceTag,
                          children: eo.intl.string(eo.t.wu4gyc)
                      })
                    : g || m
                      ? (0, r.jsx)(G.U, {
                            className: ec.priceTag,
                            isPartiallyPurchased: m
                        })
                      : u
                        ? (0, r.jsx)(v.Text, {
                              variant: 'text-md/semibold',
                              className: ec.priceTag,
                              children: eo.intl.string(eo.t.rt69oq)
                          })
                        : D
                          ? (0, r.jsx)(q.e, {
                                displayPrices: U,
                                isPremiumUser: c,
                                discount: O,
                                hasSufficientOrbs: Y
                            })
                          : (0, r.jsx)(F.Z, {
                                product: l,
                                discount: O,
                                isPremiumUser: c,
                                className: ec.priceTag,
                                hideStrikethroughPrice: !0,
                                nitroIconType: 'default',
                                nitroIconSize: 'md'
                            })
            }),
            (0, r.jsx)('div', {
                className: ec.innerHover,
                children: (0, r.jsxs)('div', {
                    className: ec.buttonsContainer,
                    children: [
                        (() => {
                            if (u && !c && !y) return J();
                            if (!H || b) return ee();
                            if (g) return eu();
                            if (u) return ed();
                            if (X)
                                if (Y) return ei();
                                else return ee();
                            return i === en.AW.ORBS ? ep() : et();
                        })(),
                        u || d.tq || Q || !H || i === en.AW.ORBS
                            ? null
                            : y
                              ? (0, r.jsx)(eg, { onClick: z })
                              : (0, r.jsx)(T.k0, {
                                    newValue: { pageCategory: i === en.AW.HOME || null == x ? void 0 : x.pageCategory },
                                    children: (0, r.jsx)(V.Z, {
                                        product: t,
                                        selectedVariantIndex: n,
                                        returnRef: s,
                                        tooltipDelay: 250
                                    })
                                })
                    ]
                })
            })
        ]
    });
}
let ej =
        12633 == i.j
            ? l.memo(function (e) {
                  let { product: t, user: i, category: n, tab: a, cardRef: d, selectedProduct: g, firstCollectibleItem: m, selectedVariantIndex: C, handleEntering: j, handleLeaving: y, previewingVariantIndex: E, className: P } = e,
                      { analyticsLocations: I } = (0, x.ZP)([f.Z.COLLECTIBLES_SHOP_CARD]),
                      k = (0, T.sp)(),
                      w = (0, b.Z)(d),
                      [L, Z] = l.useState(!1),
                      W = w || L,
                      M = (0, D.T)(t),
                      G = (0, h.e7)([O.Z], () => O.Z.useReducedMotion),
                      V = A.ZP.canUseCollectibles(i),
                      F = l.useMemo(() => (0, N.BH)(t, V), [t, V]),
                      q = (0, N.G1)(t),
                      X = (0, h.e7)([_.Z], () => (0, v.wjy)(_.Z.theme)),
                      J = (0, N.Yq)(t.skuId),
                      $ = n.skuId === u.T.ANIME_V3 && (0, N.WW)(t.skuId),
                      { hoverVariant: ee } = (0, R.E)('CollectiblesShopTallCard'),
                      { isPurchased: et, isPartiallyOwnedBundle: ei } = (0, B.L)(g),
                      { isDisabled: el } = (0, H.G)(g.skuId),
                      ea = null !== E ? E : C,
                      [ep, eh] = l.useState(!1);
                  l.useEffect(() => {
                      let { current: e } = d;
                      if (null == e) return;
                      let t = () => Z(!0),
                          i = (t) => {
                              e.contains(t.relatedTarget) || Z(!1);
                          };
                      return (
                          e.addEventListener('focusin', t),
                          e.addEventListener('focusout', i),
                          e.blur(),
                          () => {
                              (e.removeEventListener('focusin', t), e.removeEventListener('focusout', i));
                          }
                      );
                  }, [d]);
                  let eg = l.useRef(null),
                      { displayPrices: eb, isOrbExclusive: ef } = (0, er.oo)({
                          product: t,
                          isPremiumUser: V,
                          tab: a
                      }),
                      ex = l.useCallback(
                          (e) => (i) => {
                              let r = (0, er.oQ)({ product: t });
                              ((eg.current = i.currentTarget),
                                  S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                                      sku_id: t.skuId,
                                      page_type: a,
                                      page_section: null == k ? void 0 : k.pageSection,
                                      page_category: a === en.AW.HOME ? void 0 : n.name,
                                      page_index: a === en.AW.CATALOG ? (null == k ? void 0 : k.pageIndex) : void 0,
                                      page_size: a === en.AW.CATALOG ? (null == k ? void 0 : k.pageSize) : void 0,
                                      tile_type: p.Z[t.type],
                                      tile_position: String(null == k ? void 0 : k.tilePosition),
                                      cta_name: null
                                  }),
                                  (0, U.T)({
                                      product: t,
                                      category: n,
                                      shouldCheckoutWithOrbs: r,
                                      analyticsLocations: I,
                                      analyticsSource: e,
                                      returnRef: eg,
                                      tab: a
                                  }));
                          },
                          [t, n, a, I, k]
                      ),
                      ej = ex(f.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === eb.length || ((0, N.x6)(t) && null != F && F.discountPercentage < 0)
                      ? null
                      : (0, r.jsx)(v.tEY, {
                            children: (0, r.jsxs)(v.kL8, {
                                className: s()(P, X ? ec.shopCardDark : ec.shopCard, {
                                    [ec.partiallyOwned]: ei && !W,
                                    [ec.shopCardAnimation]: !G && ee !== R.D.NO_MOVEMENT,
                                    [X ? ec.shopCardDarkHighlighted : ec.shopCardHighlighted]: W
                                }),
                                ref: d,
                                onClick: ej,
                                'aria-label': t.name,
                                children: [
                                    q &&
                                        (0, r.jsx)(v.ua7, {
                                            tooltipContentClassName: ec.premiumWheelTooltipContent,
                                            color: v.ua7.Colors.PRIMARY,
                                            text: eo.intl.string(eo.t.nKdAlJ),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    v.IGR,
                                                    eu(ed({}, e), {
                                                        className: ec.premiumWheelBadge,
                                                        text: (0, r.jsx)(v.SrA, {
                                                            size: 'md',
                                                            color: 'currentColor',
                                                            className: ec.premiumWheel
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, r.jsx)('div', {
                                        className: ec.preview,
                                        children: (0, c.EQ)(t.type)
                                            .with(p.Z.PROFILE_EFFECT, () =>
                                                (0, r.jsx)(em, {
                                                    isHighlighted: W,
                                                    profileEffectId: m.id,
                                                    isPurchased: et
                                                })
                                            )
                                            .with(
                                                p.Z.AVATAR_DECORATION,
                                                () => (
                                                    o()(m.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                    (0, r.jsx)(ev, {
                                                        item: m,
                                                        user: i,
                                                        isHighlighted: W,
                                                        isPurchased: et
                                                    })
                                                )
                                            )
                                            .with(p.Z.NAMEPLATE, () =>
                                                (0, r.jsx)(eO, {
                                                    user: i,
                                                    nameplate: m,
                                                    isHighlighted: W,
                                                    isPurchased: et
                                                })
                                            )
                                            .with(p.Z.BUNDLE, () =>
                                                (0, r.jsx)(Y.d, {
                                                    product: t,
                                                    user: i,
                                                    isPurchased: et,
                                                    isHighlighted: W
                                                })
                                            )
                                            .with(p.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[ea];
                                                return null == e
                                                    ? null
                                                    : (0, c.EQ)(e.type)
                                                          .with(p.Z.PROFILE_EFFECT, () => {
                                                              let [t] = e.items;
                                                              return (0, r.jsx)(em, {
                                                                  isHighlighted: W,
                                                                  profileEffectId: t.id,
                                                                  isPurchased: et && !ep
                                                              });
                                                          })
                                                          .with(p.Z.AVATAR_DECORATION, () => {
                                                              let [t] = e.items;
                                                              return (
                                                                  o()(t.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                  (0, r.jsx)(ev, {
                                                                      item: t,
                                                                      user: i,
                                                                      isHighlighted: W,
                                                                      isPurchased: et
                                                                  })
                                                              );
                                                          })
                                                          .otherwise(() => null);
                                            })
                                            .with(p.Z.EXTERNAL_SKU, () =>
                                                (0, r.jsx)(K.b, {
                                                    product: t,
                                                    animationState: W ? 'on' : 'off',
                                                    className: el || (et && !W) ? ec.externalProductDimmed : void 0
                                                })
                                            )
                                            .otherwise(() => null)
                                    }),
                                    (() => {
                                        let e = et ? v.sV5 : el ? v.mBM : null;
                                        return null == e
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: ec.cardStateIconWrapper,
                                                  children: (0, r.jsx)(e, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: s()(ec.cardStateIcon, { [ec.checkmark]: et })
                                                  })
                                              });
                                    })(),
                                    (0, r.jsxs)('div', {
                                        className: s()(ec.cardText, X ? ec.darkCardBackground : ec.lightCardBackground, { [ec.variantsGroup]: t.type === p.Z.VARIANTS_GROUP }),
                                        children: [
                                            (0, r.jsx)(v.Text, {
                                                variant: 'text-lg/bold',
                                                className: ec.productName,
                                                children: M
                                            }),
                                            t.type === p.Z.VARIANTS_GROUP
                                                ? (0, r.jsx)(Q.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: E,
                                                          handleEntering: j,
                                                          handleLeaving: y
                                                      },
                                                      selectedVariantIndex: C,
                                                      setIsHoveringOnSwitch: eh,
                                                      minimal: !W,
                                                      alternativeBackgroundColor: (null == m ? void 0 : m.type) === p.Z.PROFILE_EFFECT
                                                  })
                                                : null,
                                            (0, r.jsx)(eC, {
                                                product: t,
                                                tab: a,
                                                buildHandlePreviewClick: ex,
                                                selectedProduct: g,
                                                selectedVariantIndex: C,
                                                cardRef: d,
                                                analyticsLocations: I,
                                                isPremiumUser: V,
                                                isPremiumProduct: q,
                                                isPartiallyOwnedBundle: ei,
                                                isPurchased: et,
                                                isDisabled: el,
                                                discount: F
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(z.Z, {
                                        category: n,
                                        className: ec.limitedTimeBadge,
                                        display: 'card'
                                    }),
                                    ei || et || !J
                                        ? ef
                                            ? (0, r.jsx)(v.IGR, {
                                                  text: eo.intl.string(eo.t['0TmQRE']),
                                                  disableColor: !0,
                                                  className: ec.badge
                                              })
                                            : $
                                              ? (0, r.jsx)(v.IGR, {
                                                    text: eo.intl.string(eo.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: ec.badge
                                                })
                                              : null
                                        : (0, r.jsx)(v.IGR, {
                                              text: eo.intl.string(eo.t.y2b7CA),
                                              disableColor: !0,
                                              className: ec.badge
                                          })
                                ]
                            })
                        });
              })
            : null,
    ey = 12633 == i.j ? ex : null;
