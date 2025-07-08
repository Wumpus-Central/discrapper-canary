(i.d(t, {
    Z: () => ej,
    d: () => ev
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
    T = i(1870),
    w = i(429368),
    L = i(884697),
    N = i(664018),
    R = i(228624),
    Z = i(635552),
    W = i(290175),
    H = i(905357),
    D = i(724994),
    B = i(297651),
    M = i(390698),
    G = i(813083),
    z = i(680942),
    V = i(558060),
    F = i(237031),
    U = i(508925),
    K = i(306092),
    q = i(453713),
    Q = i(616066),
    X = i(216541),
    Y = i(22267),
    J = i(67409),
    $ = i(58201),
    ee = i(201964),
    et = i(361110),
    ei = i(956472),
    er = i(832149),
    el = i(215023),
    en = i(981631),
    es = i(474936),
    ea = i(388032),
    eo = i(33588);
function ec(e) {
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
function ed(e, t) {
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
function eu(e, t) {
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
let ep = (e) => {
        var { children: t, onClick: i } = e,
            l = eu(e, ['children', 'onClick']);
        return (0, r.jsx)(
            m.zxk,
            ed(
                ec(
                    {
                        fullWidth: !0,
                        look: m.zxk.Looks.FILLED,
                        innerClassName: eo.cardButtonInner,
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
    eh = (e) => {
        var { className: t } = e,
            i = eu(e, ['className']);
        return (0, r.jsx)(
            m.zxk,
            ed(
                ec(
                    {
                        color: m.Ttl.BRAND,
                        look: m.zxk.Looks.FILLED,
                        size: m.PhG.ICON,
                        className: s()(eo.previewButton, t),
                        innerClassName: eo.previewButtonInner,
                        'aria-label': ea.intl.string(ea.t.SKNnqq)
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
    eg = (e) => {
        let { profileEffectId: t, isHighlighted: i, isPurchased: l } = e;
        return (0, r.jsx)('div', {
            className: eo.profileEffectShopPreview,
            children: (0, r.jsx)(j.Z, {
                profileEffectId: t,
                isHovering: i,
                isPurchased: l && !i,
                removeSetHeight: !0
            })
        });
    },
    em = (e) => {
        let { isHighlighted: t, isPurchased: i, user: l, item: n } = e;
        return (0, r.jsx)('div', {
            className: eo.avatarContainer,
            children: (0, r.jsx)(Q.R, {
                item: n,
                user: l,
                isPurchased: i,
                isHighlighted: t
            })
        });
    },
    ev = (e) => {
        let { showStatus: t, width: i, opacity: l } = e;
        return (0, r.jsxs)('div', {
            className: s()(eo.nameplatePreviewSampleItem, eo.placeholderItem),
            style: { opacity: l },
            children: [
                (0, r.jsx)(m.qEK, {
                    src: null,
                    size: m.EFr.SIZE_32,
                    status: t ? en.Skl.ONLINE : void 0,
                    statusColor: 'var(--border-subtle)',
                    'aria-hidden': !0,
                    imageClassName: eo.nameplatePlaceholderAvatar
                }),
                (0, r.jsx)('div', {
                    className: eo.placeholderBar,
                    style: { maxWidth: null != i ? i : '100px' }
                })
            ]
        });
    },
    eb = (e) => {
        let { user: t, nameplate: i, isHighlighted: l, isPurchased: n } = e;
        return (0, r.jsx)('div', {
            className: eo.nameplatePreviewRootContainer,
            children: (0, r.jsxs)('div', {
                className: eo.nameplatePreviewList,
                children: [
                    (0, r.jsxs)('div', {
                        className: eo.fadeIn,
                        children: [
                            (0, r.jsx)(ev, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, r.jsx)(ev, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, r.jsx)(Y.Z, {
                        user: t,
                        nameplate: i,
                        className: eo.nameplatePreviewSampleItem,
                        isHighlighted: l,
                        showPlaceholderUser: !l,
                        showStatus: !0,
                        isPurchased: n
                    }),
                    (0, r.jsxs)('div', {
                        className: eo.fadeOut,
                        children: [
                            (0, r.jsx)(ev, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, r.jsx)(ev, {
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
    eO = (e) => {
        let { tab: t, selectedProduct: i, cardRef: l, children: n } = e,
            { handleCardVisibilityChange: s } = (0, B.E)(i.skuId, t === el.AW.CATALOG ? 'full' : t);
        return (0, r.jsx)(g.$, {
            innerRef: l,
            onChange: s,
            threshold: 0,
            children: n
        });
    },
    ef =
        12633 == i.j
            ? l.memo(function (e) {
                  var { tab: t, product: i, onMount: n } = e,
                      s = eu(e, ['tab', 'product', 'onMount']);
                  let a = (0, h.e7)([T.Z], () => T.Z.purchases),
                      o = (0, w.o)(i, a),
                      c = (0, $.W)(i, o),
                      d = l.useRef(null),
                      { previewingVariantIndex: u, handleEntering: p, handleLeaving: g } = (0, et.f)(i),
                      m = (0, ee.o)(i, a, u);
                  return (
                      l.useEffect(() => {
                          null == n || n(d, i);
                      }, [n, i]),
                      (0, r.jsx)(eO, {
                          tab: t,
                          selectedProduct: c,
                          cardRef: d,
                          children: (0, r.jsx)(
                              eC,
                              ec(
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
function ex(e) {
    let { product: t, tab: i, selectedProduct: l, selectedVariantIndex: n, cardRef: s, analyticsLocations: a, buildHandlePreviewClick: o, isPremiumUser: c, isPremiumProduct: u, isPurchased: g, isPartiallyOwnedBundle: v, isDisabled: b, discount: f } = e,
        j = (0, k.sp)(),
        y = (0, L.rN)(t),
        [S, w] = (0, h.Wu)([T.Z], () => [T.Z.isClaiming === t.skuId, null != T.Z.isClaiming && T.Z.isClaiming !== t.skuId]),
        N = (0, R.hv)('CollectiblesShopTallCard'),
        W = (0, L.XM)(l, c, !1),
        H = (0, L.ne)({
            product: l,
            isPartiallyOwnedBundle: v,
            isPurchased: g
        }),
        { enabled: D } = (0, _.WX)({ location: 'collectibles_shop_tall_card' }),
        { handleUseNow: B, isApplying: G } = (0, Z.W)({ product: l }),
        F = o(O.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        {
            displayPrices: U,
            checkoutEligiblePrices: q,
            isOrbExclusive: Q,
            shouldCheckoutWithOrbs: X,
            hasSufficientOrbs: Y
        } = (0, ei.Ip)({
            product: t,
            isPremiumUser: c,
            tab: i
        });
    if (0 === U.length) return null;
    let $ = () =>
            (0, r.jsx)('div', {
                className: eo.hoverUpsellContainer,
                children: (0, r.jsx)(C.Z, {
                    fullWidth: !0,
                    className: eo.__invalid_premiumSubscribeButton,
                    disabled: w,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: ea.intl.string(ea.t.sEAnVF) },
                    subscriptionTier: es.Si.TIER_2
                })
            }),
        ee = () =>
            (0, r.jsx)(ep, {
                onClick: F,
                children: ea.intl.string(ea.t.FdGl5O)
            }),
        et = () =>
            (0, r.jsx)(ep, {
                onClick: () => {
                    (I.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                        sku_id: t.skuId,
                        page_type: i,
                        page_section: null == j ? void 0 : j.pageSection,
                        page_category: i === el.AW.HOME || null == j ? void 0 : j.pageCategory,
                        page_index: i === el.AW.CATALOG ? (null == j ? void 0 : j.pageIndex) : void 0,
                        page_size: i === el.AW.CATALOG ? (null == j ? void 0 : j.pageSize) : void 0,
                        tile_type: p.Z[t.type],
                        tile_position: String(null == j ? void 0 : j.tilePosition),
                        cta_name: 'buy button'
                    }),
                        (0, x.Z)({
                            skuId: (0, J.S)({
                                product: t,
                                selectedVariantIndex: n
                            }),
                            analyticsLocations: a,
                            returnRef: s,
                            variantsReturnStyle: N
                        }));
                },
                children: ea.intl.formatToPlainString(ea.t['cNSL/v'], { price: W })
            }),
        ec = () =>
            (0, r.jsx)(ep, {
                onClick: () => {
                    (I.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                        sku_id: t.skuId,
                        page_type: i,
                        page_section: null == j ? void 0 : j.pageSection,
                        page_category: i === el.AW.HOME || null == j ? void 0 : j.pageCategory,
                        page_index: i === el.AW.CATALOG ? (null == j ? void 0 : j.pageIndex) : void 0,
                        page_size: i === el.AW.CATALOG ? (null == j ? void 0 : j.pageSize) : void 0,
                        tile_type: p.Z[t.type],
                        tile_position: String(null == j ? void 0 : j.tilePosition),
                        cta_name: 'claim with orbs button'
                    }),
                        (0, P.q)({
                            skuId: (0, J.S)({
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
                                    (0, er.Z)({
                                        product: t,
                                        analyticsLocations: a,
                                        shouldCheckoutWithOrbs: !0,
                                        itemConsumed: null == (i = r[0]) ? void 0 : i.consumed,
                                        purchaseType: el.o8.ORB
                                    }));
                            },
                            analyticsLocations: a
                        }));
                },
                children: ea.intl.format(ea.t.kAgx5O, {
                    orbPrice: q[0].amount,
                    orbIconHook: () => (0, r.jsx)(E.Z, {})
                })
            }),
        ed = () => {
            let e = async () => {
                (I.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == j ? void 0 : j.pageSection,
                    page_category: i === el.AW.HOME || null == j ? void 0 : j.pageCategory,
                    page_index: i === el.AW.CATALOG ? (null == j ? void 0 : j.pageIndex) : void 0,
                    page_size: i === el.AW.CATALOG ? (null == j ? void 0 : j.pageSize) : void 0,
                    tile_type: p.Z[t.type],
                    tile_position: String(null == j ? void 0 : j.tilePosition),
                    cta_name: 'claim premium product button'
                }),
                    await (0, A.fK)(t.skuId),
                    (0, er.Z)({
                        product: t,
                        analyticsLocations: a,
                        purchaseType: el.o8.PREMIUM_PURCHASE
                    }));
            };
            return (0, r.jsx)(ep, {
                onClick: e,
                disabled: w,
                submitting: S,
                submittingStartedLabel: ea.intl.string(ea.t['TYw+9v']),
                submittingFinishedLabel: ea.intl.string(ea.t.Pg1UPz),
                children: ea.intl.string(ea.t.zp6caG)
            });
        },
        eu = () =>
            (0, r.jsx)(ep, {
                onClick: B,
                submitting: G,
                children: ea.intl.string(ea.t.MAS7uL)
            }),
        eg = () =>
            (0, r.jsx)(ep, {
                onClick: F,
                children: ea.intl.string(ea.t.GpnHfH)
            });
    return (0, r.jsxs)('div', {
        className: eo.detailsWrapper,
        children: [
            (0, r.jsx)('div', {
                className: eo.innerBlur,
                children: b
                    ? (0, r.jsx)(m.X6q, {
                          variant: 'heading-md/semibold',
                          color: 'header-muted',
                          className: eo.priceTag,
                          children: ea.intl.string(ea.t.wu4gyc)
                      })
                    : g || v
                      ? (0, r.jsx)(M.U, {
                            className: eo.priceTag,
                            isPartiallyPurchased: v
                        })
                      : u
                        ? (0, r.jsx)(m.Text, {
                              variant: 'text-md/semibold',
                              className: eo.priceTag,
                              children: ea.intl.string(ea.t.rt69oq)
                          })
                        : D
                          ? (0, r.jsx)(K.e, {
                                displayPrices: U,
                                isPremiumUser: c,
                                discount: f,
                                hasSufficientOrbs: Y
                            })
                          : (0, r.jsx)(V.Z, {
                                product: l,
                                discount: f,
                                isPremiumUser: c,
                                className: eo.priceTag,
                                hideStrikethroughPrice: !0,
                                nitroIconType: 'default',
                                nitroIconSize: 'md'
                            })
            }),
            (0, r.jsx)('div', {
                className: eo.innerHover,
                children: (0, r.jsxs)('div', {
                    className: eo.buttonsContainer,
                    children: [
                        (() => {
                            if (u && !c && !y) return $();
                            if (!H || b) return ee();
                            if (g) return eu();
                            if (u) return ed();
                            if (X)
                                if (Y) return ec();
                                else return ee();
                            return i === el.AW.ORBS ? eg() : et();
                        })(),
                        u || d.tq || Q || !H || i === el.AW.ORBS
                            ? null
                            : y
                              ? (0, r.jsx)(eh, { onClick: F })
                              : (0, r.jsx)(k.k0, {
                                    newValue: { pageCategory: i === el.AW.HOME || null == j ? void 0 : j.pageCategory },
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
let eC =
        12633 == i.j
            ? l.memo(function (e) {
                  let { product: t, user: i, category: n, tab: a, cardRef: d, selectedProduct: g, firstCollectibleItem: x, selectedVariantIndex: C, handleEntering: j, handleLeaving: _, previewingVariantIndex: E, className: P } = e,
                      { analyticsLocations: A } = (0, f.ZP)([O.Z.COLLECTIBLES_SHOP_CARD]),
                      T = (0, k.sp)(),
                      w = (0, v.Z)(d),
                      [R, Z] = l.useState(!1),
                      B = w || R,
                      M = (0, H.T)(t),
                      z = (0, h.e7)([b.Z], () => b.Z.useReducedMotion),
                      V = S.ZP.canUseCollectibles(i),
                      K = l.useMemo(() => (0, L.BH)(t, V), [t, V]),
                      Q = (0, L.G1)(t),
                      Y = (0, h.e7)([y.Z], () => (0, m.wjy)(y.Z.theme)),
                      J = (0, L.Yq)(t.skuId),
                      $ = n.skuId === u.T.ANIME_V3 && (0, L.WW)(t.skuId),
                      { hoverVariant: ee } = (0, N.E)('CollectiblesShopTallCard'),
                      { isPurchased: et, isPartiallyOwnedBundle: er } = (0, D.L)(g),
                      { isDisabled: es } = (0, W.G)(g.skuId),
                      eu = null !== E ? E : C,
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
                  let ev = l.useRef(null),
                      { displayPrices: eO, isOrbExclusive: ef } = (0, ei.oo)({
                          product: t,
                          isPremiumUser: V,
                          tab: a
                      }),
                      eC = l.useCallback(
                          (e) => (i) => {
                              let r = (0, ei.oQ)({ product: t });
                              ((ev.current = i.currentTarget),
                                  I.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                                      sku_id: t.skuId,
                                      page_type: a,
                                      page_section: null == T ? void 0 : T.pageSection,
                                      page_category: a === el.AW.HOME ? void 0 : n.name,
                                      page_index: a === el.AW.CATALOG ? (null == T ? void 0 : T.pageIndex) : void 0,
                                      page_size: a === el.AW.CATALOG ? (null == T ? void 0 : T.pageSize) : void 0,
                                      tile_type: p.Z[t.type],
                                      tile_position: String(null == T ? void 0 : T.tilePosition),
                                      cta_name: null
                                  }),
                                  (0, F.T)({
                                      product: t,
                                      category: n,
                                      shouldCheckoutWithOrbs: r,
                                      analyticsLocations: A,
                                      analyticsSource: e,
                                      returnRef: ev,
                                      tab: a
                                  }));
                          },
                          [t, n, a, A, T]
                      ),
                      ej = eC(O.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === eO.length || ((0, L.x6)(t) && null != K && K.discountPercentage < 0)
                      ? null
                      : (0, r.jsx)(m.tEY, {
                            children: (0, r.jsxs)(m.kL8, {
                                className: s()(P, Y ? eo.shopCardDark : eo.shopCard, {
                                    [eo.partiallyOwned]: er && !B,
                                    [eo.shopCardAnimation]: !z && ee !== N.D.NO_MOVEMENT,
                                    [Y ? eo.shopCardDarkHighlighted : eo.shopCardHighlighted]: B
                                }),
                                ref: d,
                                onClick: ej,
                                'aria-label': t.name,
                                children: [
                                    Q &&
                                        (0, r.jsx)(m.ua7, {
                                            tooltipContentClassName: eo.premiumWheelTooltipContent,
                                            color: m.ua7.Colors.PRIMARY,
                                            text: ea.intl.string(ea.t.nKdAlJ),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    m.IGR,
                                                    ed(ec({}, e), {
                                                        className: eo.premiumWheelBadge,
                                                        text: (0, r.jsx)(m.SrA, {
                                                            size: 'md',
                                                            color: 'currentColor',
                                                            className: eo.premiumWheel
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, r.jsx)('div', {
                                        className: eo.preview,
                                        children: (0, c.EQ)(t.type)
                                            .with(p.Z.PROFILE_EFFECT, () =>
                                                (0, r.jsx)(eg, {
                                                    isHighlighted: B,
                                                    profileEffectId: x.id,
                                                    isPurchased: et
                                                })
                                            )
                                            .with(
                                                p.Z.AVATAR_DECORATION,
                                                () => (
                                                    o()(x.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                    (0, r.jsx)(em, {
                                                        item: x,
                                                        user: i,
                                                        isHighlighted: B,
                                                        isPurchased: et
                                                    })
                                                )
                                            )
                                            .with(p.Z.NAMEPLATE, () =>
                                                (0, r.jsx)(eb, {
                                                    user: i,
                                                    nameplate: x,
                                                    isHighlighted: B,
                                                    isPurchased: et
                                                })
                                            )
                                            .with(p.Z.BUNDLE, () =>
                                                (0, r.jsx)(X.d, {
                                                    product: t,
                                                    user: i,
                                                    isPurchased: et,
                                                    isHighlighted: B
                                                })
                                            )
                                            .with(p.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[eu];
                                                return null == e
                                                    ? null
                                                    : (0, c.EQ)(e.type)
                                                          .with(p.Z.PROFILE_EFFECT, () => {
                                                              let [t] = e.items;
                                                              return (0, r.jsx)(eg, {
                                                                  isHighlighted: B,
                                                                  profileEffectId: t.id,
                                                                  isPurchased: et && !ep
                                                              });
                                                          })
                                                          .with(p.Z.AVATAR_DECORATION, () => {
                                                              let [t] = e.items;
                                                              return (
                                                                  o()(t.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                  (0, r.jsx)(em, {
                                                                      item: t,
                                                                      user: i,
                                                                      isHighlighted: B,
                                                                      isPurchased: et
                                                                  })
                                                              );
                                                          })
                                                          .otherwise(() => null);
                                            })
                                            .with(p.Z.EXTERNAL_SKU, () =>
                                                (0, r.jsx)(U.b, {
                                                    product: t,
                                                    animationState: B ? 'on' : 'off',
                                                    className: es || (et && !B) ? eo.externalProductDimmed : void 0
                                                })
                                            )
                                            .otherwise(() => null)
                                    }),
                                    (() => {
                                        let e = et ? m.sV5 : es ? m.mBM : null;
                                        return null == e
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: eo.cardStateIconWrapper,
                                                  children: (0, r.jsx)(e, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: s()(eo.cardStateIcon, { [eo.checkmark]: et })
                                                  })
                                              });
                                    })(),
                                    (0, r.jsxs)('div', {
                                        className: s()(eo.cardText, Y ? eo.darkCardBackground : eo.lightCardBackground, { [eo.variantsGroup]: t.type === p.Z.VARIANTS_GROUP }),
                                        children: [
                                            (0, r.jsx)(m.Text, {
                                                variant: 'text-lg/bold',
                                                className: eo.productName,
                                                children: M
                                            }),
                                            t.type === p.Z.VARIANTS_GROUP
                                                ? (0, r.jsx)(q.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: E,
                                                          handleEntering: j,
                                                          handleLeaving: _
                                                      },
                                                      selectedVariantIndex: C,
                                                      setIsHoveringOnSwitch: eh,
                                                      minimal: !B,
                                                      alternativeBackgroundColor: (null == x ? void 0 : x.type) === p.Z.PROFILE_EFFECT
                                                  })
                                                : null,
                                            (0, r.jsx)(ex, {
                                                product: t,
                                                tab: a,
                                                buildHandlePreviewClick: eC,
                                                selectedProduct: g,
                                                selectedVariantIndex: C,
                                                cardRef: d,
                                                analyticsLocations: A,
                                                isPremiumUser: V,
                                                isPremiumProduct: Q,
                                                isPartiallyOwnedBundle: er,
                                                isPurchased: et,
                                                isDisabled: es,
                                                discount: K
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(G.Z, {
                                        category: n,
                                        className: eo.limitedTimeBadge,
                                        display: 'card'
                                    }),
                                    er || et || !J
                                        ? ef
                                            ? (0, r.jsx)(m.IGR, {
                                                  text: ea.intl.string(ea.t['0TmQRE']),
                                                  disableColor: !0,
                                                  className: eo.badge
                                              })
                                            : $
                                              ? (0, r.jsx)(m.IGR, {
                                                    text: ea.intl.string(ea.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: eo.badge
                                                })
                                              : null
                                        : (0, r.jsx)(m.IGR, {
                                              text: ea.intl.string(ea.t.y2b7CA),
                                              disableColor: !0,
                                              className: eo.badge
                                          })
                                ]
                            })
                        });
              })
            : null,
    ej = 12633 == i.j ? ef : null;
