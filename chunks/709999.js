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
    m = i(481060),
    v = i(727637),
    b = i(607070),
    O = i(100527),
    f = i(906732),
    x = i(333867),
    C = i(767714),
    j = i(876917),
    y = i(210887),
    _ = i(822857),
    E = i(960919),
    P = i(275388),
    I = i(626135),
    S = i(74538),
    A = i(335131),
    k = i(381585),
    w = i(1870),
    L = i(429368),
    T = i(884697),
    N = i(664018),
    R = i(819570),
    Z = i(228624),
    W = i(635552),
    H = i(290175),
    D = i(905357),
    B = i(724994),
    M = i(297651),
    G = i(390698),
    V = i(813083),
    z = i(680942),
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
            m.zxk,
            eu(
                ed(
                    {
                        fullWidth: !0,
                        look: m.zxk.Looks.FILLED,
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
            m.zxk,
            eu(
                ed(
                    {
                        color: m.Ttl.BRAND,
                        look: m.zxk.Looks.FILLED,
                        size: m.PhG.ICON,
                        className: s()(ec.previewButton, t),
                        innerClassName: ec.previewButtonInner,
                        'aria-label': eo.intl.string(eo.t.SKNnqq)
                    },
                    i
                ),
                {
                    children: (0, r.jsx)(m.tEF, {
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
            children: (0, r.jsx)(j.Z, {
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
                (0, r.jsx)(m.qEK, {
                    src: null,
                    size: m.EFr.SIZE_32,
                    status: t ? es.Skl.ONLINE : void 0,
                    statusColor: 'var(--background-mod-subtle)',
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
    let { product: t, tab: i, selectedProduct: l, selectedVariantIndex: n, cardRef: s, analyticsLocations: a, buildHandlePreviewClick: o, isPremiumUser: c, isPremiumProduct: u, isPurchased: g, isPartiallyOwnedBundle: v, isDisabled: b, discount: f } = e,
        j = (0, k.sp)(),
        y = (0, T.rN)(t),
        [S, L] = (0, h.Wu)([w.Z], () => [w.Z.isClaiming === t.skuId, null != w.Z.isClaiming && w.Z.isClaiming !== t.skuId]),
        N = (0, Z.hv)('CollectiblesShopTallCard'),
        H = (0, T.XM)(l, c, !1),
        D = (0, T.ne)({
            product: l,
            isPartiallyOwnedBundle: v,
            isPurchased: g
        }),
        { enabled: B } = (0, _.WX)({ location: 'collectibles_shop_tall_card' }),
        M = (0, R.E)('shop_tall_card'),
        { handleUseNow: V, isApplying: U } = (0, W.W)({ product: l }),
        K = o(O.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        {
            displayPrices: Q,
            checkoutEligiblePrices: X,
            isOrbExclusive: Y,
            shouldCheckoutWithOrbs: J,
            hasSufficientOrbs: ee
        } = (0, er.Ip)({
            product: t,
            isPremiumUser: c,
            tab: i
        });
    if (0 === Q.length) return null;
    let et = () =>
            (0, r.jsx)('div', {
                className: ec.hoverUpsellContainer,
                children: (0, r.jsx)(C.Z, {
                    fullWidth: !0,
                    className: ec.__invalid_premiumSubscribeButton,
                    disabled: L,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: eo.intl.string(eo.t.sEAnVF) },
                    subscriptionTier: ea.Si.TIER_2
                })
            }),
        ei = () =>
            (0, r.jsx)(eh, {
                onClick: K,
                children: eo.intl.string(eo.t.FdGl5O)
            }),
        ed = () =>
            (0, r.jsx)(eh, {
                onClick: () => {
                    (I.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                        sku_id: t.skuId,
                        page_type: i,
                        page_section: null == j ? void 0 : j.pageSection,
                        page_category: i === en.AW.HOME || null == j ? void 0 : j.pageCategory,
                        page_index: i === en.AW.CATALOG ? (null == j ? void 0 : j.pageIndex) : void 0,
                        page_size: i === en.AW.CATALOG ? (null == j ? void 0 : j.pageSize) : void 0,
                        tile_type: p.Z[t.type],
                        tile_position: String(null == j ? void 0 : j.tilePosition),
                        cta_name: 'buy button'
                    }),
                        (0, x.Z)({
                            skuId: (0, $.S)({
                                product: t,
                                selectedVariantIndex: n
                            }),
                            analyticsLocations: a,
                            returnRef: s,
                            variantsReturnStyle: N
                        }));
                },
                children: eo.intl.formatToPlainString(eo.t['cNSL/v'], { price: H })
            }),
        eu = () =>
            (0, r.jsx)(eh, {
                onClick: () => {
                    (I.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                        sku_id: t.skuId,
                        page_type: i,
                        page_section: null == j ? void 0 : j.pageSection,
                        page_category: i === en.AW.HOME || null == j ? void 0 : j.pageCategory,
                        page_index: i === en.AW.CATALOG ? (null == j ? void 0 : j.pageIndex) : void 0,
                        page_size: i === en.AW.CATALOG ? (null == j ? void 0 : j.pageSize) : void 0,
                        tile_type: p.Z[t.type],
                        tile_position: String(null == j ? void 0 : j.tilePosition),
                        cta_name: 'claim with orbs button'
                    }),
                        (0, P.q)({
                            skuId: (0, $.S)({
                                product: t,
                                selectedVariantIndex: n
                            }),
                            onCheckoutSuccess: (e) => {
                                var i;
                                let { entitlements: r } = e;
                                ((0, A.qg)({
                                    variantsReturnStyle: N,
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
                    orbPrice: X[0].amount,
                    orbIconHook: () => (0, r.jsx)(E.Z, {})
                })
            }),
        ep = () => {
            let e = async () => {
                (I.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == j ? void 0 : j.pageSection,
                    page_category: i === en.AW.HOME || null == j ? void 0 : j.pageCategory,
                    page_index: i === en.AW.CATALOG ? (null == j ? void 0 : j.pageIndex) : void 0,
                    page_size: i === en.AW.CATALOG ? (null == j ? void 0 : j.pageSize) : void 0,
                    tile_type: p.Z[t.type],
                    tile_position: String(null == j ? void 0 : j.tilePosition),
                    cta_name: 'claim premium product button'
                }),
                    await (0, A.fK)(t.skuId),
                    (0, el.Z)({
                        product: t,
                        analyticsLocations: a,
                        purchaseType: en.o8.PREMIUM_PURCHASE
                    }));
            };
            return (0, r.jsx)(eh, {
                onClick: e,
                disabled: L,
                submitting: S,
                submittingStartedLabel: eo.intl.string(eo.t['TYw+9v']),
                submittingFinishedLabel: eo.intl.string(eo.t.Pg1UPz),
                children: eo.intl.string(eo.t.zp6caG)
            });
        },
        em = () =>
            (0, r.jsx)(eh, {
                onClick: V,
                submitting: U,
                children: eo.intl.string(eo.t.MAS7uL)
            }),
        ev = () =>
            (0, r.jsx)(eh, {
                onClick: K,
                children: eo.intl.string(eo.t.GpnHfH)
            });
    return (0, r.jsxs)('div', {
        className: ec.detailsWrapper,
        children: [
            (0, r.jsx)('div', {
                className: ec.innerBlur,
                children: b
                    ? (0, r.jsx)(m.X6q, {
                          variant: 'heading-md/semibold',
                          color: 'header-muted',
                          className: ec.priceTag,
                          children: eo.intl.string(eo.t.wu4gyc)
                      })
                    : g || v
                      ? (0, r.jsx)(G.U, {
                            className: ec.priceTag,
                            isPartiallyPurchased: v
                        })
                      : u
                        ? (0, r.jsx)(m.Text, {
                              variant: 'text-md/semibold',
                              className: ec.priceTag,
                              children: eo.intl.string(eo.t.rt69oq)
                          })
                        : B
                          ? (0, r.jsx)(q.e, {
                                displayPrices: Q,
                                isPremiumUser: c,
                                discount: f,
                                hasSufficientOrbs: ee
                            })
                          : (0, r.jsx)(F.Z, {
                                product: l,
                                discount: f,
                                isPremiumUser: c,
                                className: ec.priceTag,
                                hideStrikethroughPrice: M
                            })
            }),
            (0, r.jsx)('div', {
                className: ec.innerHover,
                children: (0, r.jsxs)('div', {
                    className: ec.buttonsContainer,
                    children: [
                        (() => {
                            if (u && !c && !y) return et();
                            if (!D || b) return ei();
                            if (g) return em();
                            if (u) return ep();
                            if (J)
                                if (ee) return eu();
                                else return ei();
                            return i === en.AW.ORBS ? ev() : ed();
                        })(),
                        u || d.tq || Y || !D || i === en.AW.ORBS
                            ? null
                            : y
                              ? (0, r.jsx)(eg, { onClick: K })
                              : (0, r.jsx)(k.k0, {
                                    newValue: { pageCategory: i === en.AW.HOME || null == j ? void 0 : j.pageCategory },
                                    children: (0, r.jsx)(z.Z, {
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
                  let { product: t, user: i, category: n, tab: a, cardRef: d, selectedProduct: g, firstCollectibleItem: x, selectedVariantIndex: C, handleEntering: j, handleLeaving: _, previewingVariantIndex: E, className: P } = e,
                      { analyticsLocations: A } = (0, f.ZP)([O.Z.COLLECTIBLES_SHOP_CARD]),
                      w = (0, k.sp)(),
                      L = (0, v.Z)(d),
                      [R, Z] = l.useState(!1),
                      W = L || R,
                      M = (0, D.T)(t),
                      G = (0, h.e7)([b.Z], () => b.Z.useReducedMotion),
                      z = S.ZP.canUseCollectibles(i),
                      F = l.useMemo(() => (0, T.BH)(t, z), [t, z]),
                      q = (0, T.G1)(t),
                      X = (0, h.e7)([y.Z], () => (0, m.wjy)(y.Z.theme)),
                      J = (0, T.Yq)(t.skuId),
                      $ = n.skuId === u.T.ANIME_V3 && (0, T.WW)(t.skuId),
                      { hoverVariant: ee } = (0, N.E)('CollectiblesShopTallCard'),
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
                          isPremiumUser: z,
                          tab: a
                      }),
                      ex = l.useCallback(
                          (e) => (i) => {
                              let r = (0, er.oQ)({ product: t });
                              ((eg.current = i.currentTarget),
                                  I.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == w ? void 0 : w.sessionId,
                                      sku_id: t.skuId,
                                      page_type: a,
                                      page_section: null == w ? void 0 : w.pageSection,
                                      page_category: a === en.AW.HOME ? void 0 : n.name,
                                      page_index: a === en.AW.CATALOG ? (null == w ? void 0 : w.pageIndex) : void 0,
                                      page_size: a === en.AW.CATALOG ? (null == w ? void 0 : w.pageSize) : void 0,
                                      tile_type: p.Z[t.type],
                                      tile_position: String(null == w ? void 0 : w.tilePosition),
                                      cta_name: null
                                  }),
                                  (0, U.T)({
                                      product: t,
                                      category: n,
                                      shouldCheckoutWithOrbs: r,
                                      analyticsLocations: A,
                                      analyticsSource: e,
                                      returnRef: eg,
                                      tab: a
                                  }));
                          },
                          [t, n, a, A, w]
                      ),
                      ej = ex(O.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === eb.length || ((0, T.x6)(t) && null != F && F.discountPercentage < 0)
                      ? null
                      : (0, r.jsx)(m.tEY, {
                            children: (0, r.jsxs)(m.kL8, {
                                className: s()(P, X ? ec.shopCardDark : ec.shopCard, {
                                    [ec.partiallyOwned]: ei && !W,
                                    [ec.shopCardAnimation]: !G && ee !== N.D.NO_MOVEMENT,
                                    [X ? ec.shopCardDarkHighlighted : ec.shopCardHighlighted]: W
                                }),
                                ref: d,
                                onClick: ej,
                                'aria-label': t.name,
                                children: [
                                    q &&
                                        (0, r.jsx)(m.ua7, {
                                            tooltipContentClassName: ec.premiumWheelTooltipContent,
                                            color: m.ua7.Colors.PRIMARY,
                                            text: eo.intl.string(eo.t.nKdAlJ),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    m.IGR,
                                                    eu(ed({}, e), {
                                                        className: ec.premiumWheelBadge,
                                                        text: (0, r.jsx)(m.SrA, {
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
                                                    profileEffectId: x.id,
                                                    isPurchased: et
                                                })
                                            )
                                            .with(
                                                p.Z.AVATAR_DECORATION,
                                                () => (
                                                    o()(x.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                    (0, r.jsx)(ev, {
                                                        item: x,
                                                        user: i,
                                                        isHighlighted: W,
                                                        isPurchased: et
                                                    })
                                                )
                                            )
                                            .with(p.Z.NAMEPLATE, () =>
                                                (0, r.jsx)(eO, {
                                                    user: i,
                                                    nameplate: x,
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
                                        let e = et ? m.sV5 : el ? m.mBM : null;
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
                                            (0, r.jsx)(m.Text, {
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
                                                          handleLeaving: _
                                                      },
                                                      selectedVariantIndex: C,
                                                      setIsHoveringOnSwitch: eh,
                                                      minimal: !W,
                                                      alternativeBackgroundColor: (null == x ? void 0 : x.type) === p.Z.PROFILE_EFFECT
                                                  })
                                                : null,
                                            (0, r.jsx)(eC, {
                                                product: t,
                                                tab: a,
                                                buildHandlePreviewClick: ex,
                                                selectedProduct: g,
                                                selectedVariantIndex: C,
                                                cardRef: d,
                                                analyticsLocations: A,
                                                isPremiumUser: z,
                                                isPremiumProduct: q,
                                                isPartiallyOwnedBundle: ei,
                                                isPurchased: et,
                                                isDisabled: el,
                                                discount: F
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(V.Z, {
                                        category: n,
                                        className: ec.limitedTimeBadge,
                                        display: 'card'
                                    }),
                                    ei || et || !J
                                        ? ef
                                            ? (0, r.jsx)(m.IGR, {
                                                  text: eo.intl.string(eo.t['0TmQRE']),
                                                  disableColor: !0,
                                                  className: ec.badge
                                              })
                                            : $
                                              ? (0, r.jsx)(m.IGR, {
                                                    text: eo.intl.string(eo.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: ec.badge
                                                })
                                              : null
                                        : (0, r.jsx)(m.IGR, {
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
