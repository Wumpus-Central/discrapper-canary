(i.d(t, {
    Z: () => ej,
    d: () => ex
}),
    i(388685),
    i(314940));
var l = i(255367),
    s = i(73800),
    r = i(120356),
    n = i.n(r),
    a = i(512722),
    o = i.n(a),
    d = i(278074),
    c = i(873546),
    u = i(180650),
    p = i(979554),
    h = i(399606),
    g = i(622535),
    m = i(755721),
    v = i(481060),
    x = i(727637),
    C = i(607070),
    _ = i(100527),
    E = i(906732),
    f = i(333867),
    O = i(767714),
    j = i(876917),
    b = i(210887),
    I = i(822857),
    P = i(960919),
    y = i(275388),
    A = i(626135),
    S = i(74538),
    k = i(335131),
    L = i(381585),
    N = i(1870),
    T = i(429368),
    w = i(884697),
    R = i(664018),
    Z = i(228624),
    H = i(635552),
    W = i(290175),
    B = i(905357),
    M = i(724994),
    D = i(297651),
    G = i(390698),
    z = i(813083),
    V = i(680942),
    F = i(558060),
    U = i(237031),
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
    el = i(956472),
    es = i(832149),
    er = i(215023),
    en = i(981631),
    ea = i(474936),
    eo = i(388032),
    ed = i(33588);
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(i);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
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
                      var l = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, l);
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
        l,
        s = (function (e, t) {
            if (null == e) return {};
            var i,
                l,
                s = {},
                r = Object.keys(e);
            for (l = 0; l < r.length; l++) ((i = r[l]), t.indexOf(i) >= 0 || (s[i] = e[i]));
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (l = 0; l < r.length; l++) ((i = r[l]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]));
    }
    return s;
}
let eh = (e) => {
        var { children: t, onClick: i } = e,
            s = ep(e, ['children', 'onClick']);
        return (0, l.jsx)(
            m.zx,
            eu(
                ec(
                    {
                        fullWidth: !0,
                        look: m.zx.Looks.FILLED,
                        innerClassName: ed.cardButtonInner,
                        onClick: (e) => {
                            (e.stopPropagation(), i(e));
                        }
                    },
                    s
                ),
                { children: t }
            )
        );
    },
    eg = (e) => {
        var { className: t } = e,
            i = ep(e, ['className']);
        return (0, l.jsx)(
            m.zx,
            eu(
                ec(
                    {
                        color: m.Tt.BRAND,
                        look: m.zx.Looks.FILLED,
                        size: m.Ph.ICON,
                        className: n()(ed.previewButton, t),
                        innerClassName: ed.previewButtonInner,
                        'aria-label': eo.intl.string(eo.t.SKNnqq)
                    },
                    i
                ),
                {
                    children: (0, l.jsx)(v.tEF, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }
            )
        );
    },
    em = (e) => {
        let { profileEffectId: t, isHighlighted: i, isPurchased: s } = e;
        return (0, l.jsx)('div', {
            className: ed.profileEffectShopPreview,
            children: (0, l.jsx)(j.Z, {
                profileEffectId: t,
                isHovering: i,
                isPurchased: s && !i,
                removeSetHeight: !0
            })
        });
    },
    ev = (e) => {
        let { isHighlighted: t, isPurchased: i, user: s, item: r } = e;
        return (0, l.jsx)('div', {
            className: ed.avatarContainer,
            children: (0, l.jsx)(X.R, {
                item: r,
                user: s,
                isPurchased: i,
                isHighlighted: t
            })
        });
    },
    ex = (e) => {
        let { showStatus: t, width: i, opacity: s } = e;
        return (0, l.jsxs)('div', {
            className: n()(ed.nameplatePreviewSampleItem, ed.placeholderItem),
            style: { opacity: s },
            children: [
                (0, l.jsx)(v.qEK, {
                    src: null,
                    size: v.EFr.SIZE_32,
                    status: t ? en.Skl.ONLINE : void 0,
                    statusColor: 'var(--border-subtle)',
                    'aria-hidden': !0,
                    imageClassName: ed.nameplatePlaceholderAvatar
                }),
                (0, l.jsx)('div', {
                    className: ed.placeholderBar,
                    style: { maxWidth: null != i ? i : '100px' }
                })
            ]
        });
    },
    eC = (e) => {
        let { user: t, nameplate: i, isHighlighted: s, isPurchased: r } = e;
        return (0, l.jsx)('div', {
            className: ed.nameplatePreviewRootContainer,
            children: (0, l.jsxs)('div', {
                className: ed.nameplatePreviewList,
                children: [
                    (0, l.jsxs)('div', {
                        className: ed.fadeIn,
                        children: [
                            (0, l.jsx)(ex, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, l.jsx)(ex, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, l.jsx)(J.Z, {
                        user: t,
                        nameplate: i,
                        className: ed.nameplatePreviewSampleItem,
                        isHighlighted: s,
                        showPlaceholderUser: !s,
                        showStatus: !0,
                        isPurchased: r
                    }),
                    (0, l.jsxs)('div', {
                        className: ed.fadeOut,
                        children: [
                            (0, l.jsx)(ex, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, l.jsx)(ex, {
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
    e_ = (e) => {
        let { tab: t, selectedProduct: i, cardRef: s, children: r } = e,
            { handleCardVisibilityChange: n } = (0, D.E)(i.skuId, t === er.AW.CATALOG ? 'full' : t);
        return (0, l.jsx)(g.$, {
            innerRef: s,
            onChange: n,
            threshold: 0,
            children: r
        });
    },
    eE =
        12633 == i.j
            ? s.memo(function (e) {
                  var { tab: t, product: i, onMount: r } = e,
                      n = ep(e, ['tab', 'product', 'onMount']);
                  let a = (0, h.e7)([N.Z], () => N.Z.purchases),
                      o = (0, T.o)(i, a),
                      d = (0, ee.W)(i, o),
                      c = s.useRef(null),
                      { previewingVariantIndex: u, handleEntering: p, handleLeaving: g } = (0, ei.f)(i),
                      m = (0, et.o)(i, a, u);
                  return (
                      s.useEffect(() => {
                          null == r || r(c, i);
                      }, [r, i]),
                      (0, l.jsx)(e_, {
                          tab: t,
                          selectedProduct: d,
                          cardRef: c,
                          children: (0, l.jsx)(
                              eO,
                              ec(
                                  {
                                      tab: t,
                                      product: i,
                                      selectedVariantIndex: o,
                                      selectedProduct: d,
                                      cardRef: c,
                                      previewingVariantIndex: u,
                                      handleEntering: p,
                                      handleLeaving: g,
                                      firstCollectibleItem: m
                                  },
                                  n
                              )
                          )
                      })
                  );
              })
            : null;
function ef(e) {
    let { product: t, tab: i, selectedProduct: s, selectedVariantIndex: r, cardRef: n, analyticsLocations: a, buildHandlePreviewClick: o, isPremiumUser: d, isPremiumProduct: u, isPurchased: g, isPartiallyOwnedBundle: m, isDisabled: x, discount: C } = e,
        E = (0, L.sp)(),
        j = (0, w.rN)(t),
        [b, S] = (0, h.Wu)([N.Z], () => [N.Z.isClaiming === t.skuId, null != N.Z.isClaiming && N.Z.isClaiming !== t.skuId]),
        T = (0, Z.hv)('CollectiblesShopTallCard'),
        R = (0, w.XM)(s, d, !1),
        W = (0, w.ne)({
            product: s,
            isPartiallyOwnedBundle: m,
            isPurchased: g
        }),
        { enabled: B } = (0, I.WX)({ location: 'collectibles_shop_tall_card' }),
        { handleUseNow: M, isApplying: D } = (0, H.W)({ product: s }),
        z = o(_.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        {
            displayPrices: U,
            checkoutEligiblePrices: q,
            isOrbExclusive: Q,
            shouldCheckoutWithOrbs: X,
            hasSufficientOrbs: Y
        } = (0, el.Ip)({
            product: t,
            isPremiumUser: d,
            tab: i
        });
    if (0 === U.length) return null;
    let J = () =>
            (0, l.jsx)('div', {
                className: ed.hoverUpsellContainer,
                children: (0, l.jsx)(O.Z, {
                    fullWidth: !0,
                    className: ed.__invalid_premiumSubscribeButton,
                    disabled: S,
                    onClick: (e) => e.stopPropagation(),
                    textOptions: { textOverride: eo.intl.string(eo.t.sEAnVF) },
                    subscriptionTier: ea.Si.TIER_2
                })
            }),
        ee = () =>
            (0, l.jsx)(eh, {
                onClick: z,
                children: eo.intl.string(eo.t.FdGl5O)
            }),
        et = () =>
            (0, l.jsx)(eh, {
                onClick: () => {
                    (A.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                        sku_id: t.skuId,
                        page_type: i,
                        page_section: null == E ? void 0 : E.pageSection,
                        page_category: i === er.AW.HOME || null == E ? void 0 : E.pageCategory,
                        page_index: i === er.AW.CATALOG ? (null == E ? void 0 : E.pageIndex) : void 0,
                        page_size: i === er.AW.CATALOG ? (null == E ? void 0 : E.pageSize) : void 0,
                        tile_type: p.Z[t.type],
                        tile_position: String(null == E ? void 0 : E.tilePosition),
                        cta_name: 'buy button'
                    }),
                        (0, f.Z)({
                            skuId: (0, $.S)({
                                product: t,
                                selectedVariantIndex: r
                            }),
                            analyticsLocations: a,
                            returnRef: n,
                            variantsReturnStyle: T
                        }));
                },
                children: eo.intl.formatToPlainString(eo.t['cNSL/v'], { price: R })
            }),
        ei = () =>
            (0, l.jsx)(eh, {
                onClick: () => {
                    (A.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                        sku_id: t.skuId,
                        page_type: i,
                        page_section: null == E ? void 0 : E.pageSection,
                        page_category: i === er.AW.HOME || null == E ? void 0 : E.pageCategory,
                        page_index: i === er.AW.CATALOG ? (null == E ? void 0 : E.pageIndex) : void 0,
                        page_size: i === er.AW.CATALOG ? (null == E ? void 0 : E.pageSize) : void 0,
                        tile_type: p.Z[t.type],
                        tile_position: String(null == E ? void 0 : E.tilePosition),
                        cta_name: 'claim with orbs button'
                    }),
                        (0, y.q)({
                            skuId: (0, $.S)({
                                product: t,
                                selectedVariantIndex: r
                            }),
                            onCheckoutSuccess: (e) => {
                                var i;
                                let { entitlements: l } = e;
                                ((0, k.qg)({
                                    variantsReturnStyle: T,
                                    location: 'collectible_checkout_with_orb'
                                }),
                                    (0, es.Z)({
                                        product: t,
                                        analyticsLocations: a,
                                        shouldCheckoutWithOrbs: !0,
                                        itemConsumed: null == (i = l[0]) ? void 0 : i.consumed,
                                        purchaseType: er.o8.ORB
                                    }));
                            },
                            analyticsLocations: a
                        }));
                },
                children: eo.intl.format(eo.t.kAgx5O, {
                    orbPrice: q[0].amount,
                    orbIconHook: () => (0, l.jsx)(P.Z, {})
                })
            }),
        ec = () => {
            let e = async () => {
                (A.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == E ? void 0 : E.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == E ? void 0 : E.pageSection,
                    page_category: i === er.AW.HOME || null == E ? void 0 : E.pageCategory,
                    page_index: i === er.AW.CATALOG ? (null == E ? void 0 : E.pageIndex) : void 0,
                    page_size: i === er.AW.CATALOG ? (null == E ? void 0 : E.pageSize) : void 0,
                    tile_type: p.Z[t.type],
                    tile_position: String(null == E ? void 0 : E.tilePosition),
                    cta_name: 'claim premium product button'
                }),
                    await (0, k.fK)(t.skuId),
                    (0, es.Z)({
                        product: t,
                        analyticsLocations: a,
                        purchaseType: er.o8.PREMIUM_PURCHASE
                    }));
            };
            return (0, l.jsx)(eh, {
                onClick: e,
                disabled: S,
                submitting: b,
                submittingStartedLabel: eo.intl.string(eo.t['TYw+9v']),
                submittingFinishedLabel: eo.intl.string(eo.t.Pg1UPz),
                children: eo.intl.string(eo.t.zp6caG)
            });
        },
        eu = () =>
            (0, l.jsx)(eh, {
                onClick: M,
                submitting: D,
                children: eo.intl.string(eo.t.MAS7uL)
            }),
        ep = () =>
            (0, l.jsx)(eh, {
                onClick: z,
                children: eo.intl.string(eo.t.GpnHfH)
            });
    return (0, l.jsxs)('div', {
        className: ed.detailsWrapper,
        children: [
            (0, l.jsx)('div', {
                className: ed.innerBlur,
                children: x
                    ? (0, l.jsx)(v.X6q, {
                          variant: 'heading-md/semibold',
                          color: 'header-muted',
                          className: ed.priceTag,
                          children: eo.intl.string(eo.t.wu4gyc)
                      })
                    : g || m
                      ? (0, l.jsx)(G.U, {
                            className: ed.priceTag,
                            isPartiallyPurchased: m
                        })
                      : u
                        ? (0, l.jsx)(v.Text, {
                              variant: 'text-md/semibold',
                              className: ed.priceTag,
                              children: eo.intl.string(eo.t.rt69oq)
                          })
                        : B
                          ? (0, l.jsx)(K.e, {
                                displayPrices: U,
                                isPremiumUser: d,
                                discount: C,
                                hasSufficientOrbs: Y
                            })
                          : (0, l.jsx)(F.Z, {
                                product: s,
                                discount: C,
                                isPremiumUser: d,
                                className: ed.priceTag,
                                hideStrikethroughPrice: !0,
                                nitroIconType: 'default',
                                nitroIconSize: 'md'
                            })
            }),
            (0, l.jsx)('div', {
                className: ed.innerHover,
                children: (0, l.jsxs)('div', {
                    className: ed.buttonsContainer,
                    children: [
                        (() => {
                            if (u && !d && !j) return J();
                            if (!W || x) return ee();
                            if (g) return eu();
                            if (u) return ec();
                            if (X)
                                if (Y) return ei();
                                else return ee();
                            return i === er.AW.ORBS ? ep() : et();
                        })(),
                        u || c.tq || Q || !W || i === er.AW.ORBS
                            ? null
                            : j
                              ? (0, l.jsx)(eg, { onClick: z })
                              : (0, l.jsx)(L.k0, {
                                    newValue: { pageCategory: i === er.AW.HOME || null == E ? void 0 : E.pageCategory },
                                    children: (0, l.jsx)(V.Z, {
                                        product: t,
                                        selectedVariantIndex: r,
                                        returnRef: n,
                                        tooltipDelay: 250
                                    })
                                })
                    ]
                })
            })
        ]
    });
}
let eO =
        12633 == i.j
            ? s.memo(function (e) {
                  let { product: t, user: i, category: r, tab: a, cardRef: c, selectedProduct: g, firstCollectibleItem: m, selectedVariantIndex: f, handleEntering: O, handleLeaving: j, previewingVariantIndex: I, className: P } = e,
                      { analyticsLocations: y } = (0, E.ZP)([_.Z.COLLECTIBLES_SHOP_CARD]),
                      k = (0, L.sp)(),
                      N = (0, x.Z)(c),
                      [T, Z] = s.useState(!1),
                      H = N || T,
                      D = (0, B.T)(t),
                      G = (0, h.e7)([C.Z], () => C.Z.useReducedMotion),
                      V = S.ZP.canUseCollectibles(i),
                      F = s.useMemo(() => (0, w.BH)(t, V), [t, V]),
                      K = (0, w.G1)(t),
                      X = (0, h.e7)([b.Z], () => (0, v.wjy)(b.Z.theme)),
                      J = (0, w.Yq)(t.skuId),
                      $ = r.skuId === u.T.ANIME_V3 && (0, w.WW)(t.skuId),
                      { hoverVariant: ee } = (0, R.E)('CollectiblesShopTallCard'),
                      { isPurchased: et, isPartiallyOwnedBundle: ei } = (0, M.L)(g),
                      { isDisabled: es } = (0, W.G)(g.skuId),
                      ea = null !== I ? I : f,
                      [ep, eh] = s.useState(!1);
                  s.useEffect(() => {
                      let { current: e } = c;
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
                  }, [c]);
                  let eg = s.useRef(null),
                      { displayPrices: ex, isOrbExclusive: e_ } = (0, el.oo)({
                          product: t,
                          isPremiumUser: V,
                          tab: a
                      }),
                      eE = s.useCallback(
                          (e) => (i) => {
                              let l = (0, el.oQ)({ product: t });
                              ((eg.current = i.currentTarget),
                                  A.default.track(en.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                      collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                                      sku_id: t.skuId,
                                      page_type: a,
                                      page_section: null == k ? void 0 : k.pageSection,
                                      page_category: a === er.AW.HOME ? void 0 : r.name,
                                      page_index: a === er.AW.CATALOG ? (null == k ? void 0 : k.pageIndex) : void 0,
                                      page_size: a === er.AW.CATALOG ? (null == k ? void 0 : k.pageSize) : void 0,
                                      tile_type: p.Z[t.type],
                                      tile_position: String(null == k ? void 0 : k.tilePosition),
                                      cta_name: null
                                  }),
                                  (0, U.T)({
                                      product: t,
                                      category: r,
                                      shouldCheckoutWithOrbs: l,
                                      analyticsLocations: y,
                                      analyticsSource: e,
                                      returnRef: eg,
                                      tab: a
                                  }));
                          },
                          [t, r, a, y, k]
                      ),
                      eO = eE(_.Z.COLLECTIBLES_SHOP_CARD);
                  return 0 === ex.length || ((0, w.x6)(t) && null != F && F.discountPercentage < 0)
                      ? null
                      : (0, l.jsx)(v.tEY, {
                            children: (0, l.jsxs)(v.kL8, {
                                className: n()(P, X ? ed.shopCardDark : ed.shopCard, {
                                    [ed.partiallyOwned]: ei && !H,
                                    [ed.shopCardAnimation]: !G && ee !== R.D.NO_MOVEMENT,
                                    [X ? ed.shopCardDarkHighlighted : ed.shopCardHighlighted]: H
                                }),
                                ref: c,
                                onClick: eO,
                                'aria-label': t.name,
                                children: [
                                    K &&
                                        (0, l.jsx)(v.ua7, {
                                            tooltipContentClassName: ed.premiumWheelTooltipContent,
                                            color: v.ua7.Colors.PRIMARY,
                                            text: eo.intl.string(eo.t.nKdAlJ),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    v.IGR,
                                                    eu(ec({}, e), {
                                                        className: ed.premiumWheelBadge,
                                                        text: (0, l.jsx)(v.SrA, {
                                                            size: 'md',
                                                            color: 'currentColor',
                                                            className: ed.premiumWheel
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, l.jsx)('div', {
                                        className: ed.preview,
                                        children: (0, d.EQ)(t.type)
                                            .with(p.Z.PROFILE_EFFECT, () =>
                                                (0, l.jsx)(em, {
                                                    isHighlighted: H,
                                                    profileEffectId: m.id,
                                                    isPurchased: et
                                                })
                                            )
                                            .with(
                                                p.Z.AVATAR_DECORATION,
                                                () => (
                                                    o()(m.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                    (0, l.jsx)(ev, {
                                                        item: m,
                                                        user: i,
                                                        isHighlighted: H,
                                                        isPurchased: et
                                                    })
                                                )
                                            )
                                            .with(p.Z.NAMEPLATE, () =>
                                                (0, l.jsx)(eC, {
                                                    user: i,
                                                    nameplate: m,
                                                    isHighlighted: H,
                                                    isPurchased: et
                                                })
                                            )
                                            .with(p.Z.BUNDLE, () =>
                                                (0, l.jsx)(Y.d, {
                                                    product: t,
                                                    user: i,
                                                    isPurchased: et,
                                                    isHighlighted: H
                                                })
                                            )
                                            .with(p.Z.VARIANTS_GROUP, () => {
                                                if (null == t.variants || 0 === t.variants.length) return null;
                                                let e = t.variants[ea];
                                                return null == e
                                                    ? null
                                                    : (0, d.EQ)(e.type)
                                                          .with(p.Z.PROFILE_EFFECT, () => {
                                                              let [t] = e.items;
                                                              return (0, l.jsx)(em, {
                                                                  isHighlighted: H,
                                                                  profileEffectId: t.id,
                                                                  isPurchased: et && !ep
                                                              });
                                                          })
                                                          .with(p.Z.AVATAR_DECORATION, () => {
                                                              let [t] = e.items;
                                                              return (
                                                                  o()(t.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                  (0, l.jsx)(ev, {
                                                                      item: t,
                                                                      user: i,
                                                                      isHighlighted: H,
                                                                      isPurchased: et
                                                                  })
                                                              );
                                                          })
                                                          .with(p.Z.NAMEPLATE, () => {
                                                              let [t] = e.items;
                                                              return (0, l.jsx)(eC, {
                                                                  user: i,
                                                                  nameplate: t,
                                                                  isHighlighted: H,
                                                                  isPurchased: et
                                                              });
                                                          })
                                                          .otherwise(() => null);
                                            })
                                            .with(p.Z.EXTERNAL_SKU, () =>
                                                (0, l.jsx)(q.b, {
                                                    product: t,
                                                    animationState: H ? 'on' : 'off',
                                                    className: es || (et && !H) ? ed.externalProductDimmed : void 0
                                                })
                                            )
                                            .otherwise(() => null)
                                    }),
                                    (() => {
                                        let e = et ? v.sV5 : es ? v.mBM : null;
                                        return null == e
                                            ? null
                                            : (0, l.jsx)('div', {
                                                  className: ed.cardStateIconWrapper,
                                                  children: (0, l.jsx)(e, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: n()(ed.cardStateIcon, { [ed.checkmark]: et })
                                                  })
                                              });
                                    })(),
                                    (0, l.jsxs)('div', {
                                        className: n()(ed.cardText, X ? ed.darkCardBackground : ed.lightCardBackground, { [ed.variantsGroup]: t.type === p.Z.VARIANTS_GROUP }),
                                        children: [
                                            (0, l.jsx)(v.Text, {
                                                variant: 'text-lg/bold',
                                                className: ed.productName,
                                                children: D
                                            }),
                                            t.type === p.Z.VARIANTS_GROUP
                                                ? (0, l.jsx)(Q.P, {
                                                      variantGroupProduct: t,
                                                      previewingVariantIndexProps: {
                                                          previewingVariantIndex: I,
                                                          handleEntering: O,
                                                          handleLeaving: j
                                                      },
                                                      selectedVariantIndex: f,
                                                      setIsHoveringOnSwitch: eh,
                                                      minimal: !H,
                                                      alternativeBackgroundColor: (null == m ? void 0 : m.type) === p.Z.PROFILE_EFFECT
                                                  })
                                                : null,
                                            (0, l.jsx)(ef, {
                                                product: t,
                                                tab: a,
                                                buildHandlePreviewClick: eE,
                                                selectedProduct: g,
                                                selectedVariantIndex: f,
                                                cardRef: c,
                                                analyticsLocations: y,
                                                isPremiumUser: V,
                                                isPremiumProduct: K,
                                                isPartiallyOwnedBundle: ei,
                                                isPurchased: et,
                                                isDisabled: es,
                                                discount: F
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(z.Z, {
                                        category: r,
                                        className: ed.limitedTimeBadge,
                                        display: 'card'
                                    }),
                                    ei || et || !J
                                        ? e_
                                            ? (0, l.jsx)(v.IGR, {
                                                  text: eo.intl.string(eo.t['0TmQRE']),
                                                  disableColor: !0,
                                                  className: ed.badge
                                              })
                                            : $
                                              ? (0, l.jsx)(v.IGR, {
                                                    text: eo.intl.string(eo.t.S6kE9v),
                                                    disableColor: !0,
                                                    className: ed.badge
                                                })
                                              : null
                                        : (0, l.jsx)(v.IGR, {
                                              text: eo.intl.string(eo.t.y2b7CA),
                                              disableColor: !0,
                                              className: ed.badge
                                          })
                                ]
                            })
                        });
              })
            : null,
    ej = 12633 == i.j ? eE : null;
