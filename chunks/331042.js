n.d(t, {
    default: () => ei,
    e: () => ee
}),
    n(47120),
    n(627341);
var r = n(200651),
    i = n(192379),
    o = n(119617),
    a = n(512722),
    s = n.n(a),
    l = n(642128),
    c = n(278074),
    u = n(979554),
    d = n(399606),
    f = n(481060),
    p = n(37234),
    _ = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(1585),
    E = n(333867),
    v = n(286961),
    b = n(300284),
    y = n(876917),
    O = n(642619),
    S = n(594174),
    I = n(597688),
    T = n(1870),
    N = n(429368),
    A = n(884697),
    C = n(587792),
    R = n(228624),
    P = n(318028),
    w = n(635552),
    D = n(905357),
    x = n(328456),
    L = n(624377),
    M = n(530618),
    k = n(141011),
    j = n(372654),
    U = n(616066),
    G = n(216541),
    B = n(58201),
    Z = n(302800),
    F = n(215023),
    V = n(474936),
    H = n(388032),
    W = n(945610);
function Y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                Y(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Q = 880,
    X = (e) => {
        let { product: t, pairedProduct: n } = e,
            [i] = t.items,
            o = null == n ? void 0 : n.items[0],
            a = (0, d.e7)([S.default], () => {
                let e = S.default.getCurrentUser();
                return s()(null != e, 'User cannot be undefined'), e;
            });
        return (0, c.EQ)(t.type)
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: W.profileEffectShopPreview,
                    children: (0, r.jsx)(y.Z, {
                        forCollectedModal: !0,
                        profileEffectId: i.id
                    })
                })
            )
            .with(u.Z.AVATAR_DECORATION, () =>
                (s()(i.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'), null != o && o.type === u.Z.AVATAR_DECORATION)
                    ? (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)('div', {
                                  className: W.avatarDecorationPairOne,
                                  children: (0, r.jsx)(U.R, {
                                      item: i,
                                      user: a,
                                      avatarSize: f.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: W.avatarDecorationPairTwo,
                                  children: (0, r.jsx)(U.R, {
                                      item: o,
                                      avatarSize: f.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: W.avatarDecoration,
                          children: (0, r.jsx)(U.R, {
                              item: i,
                              user: a,
                              avatarSize: f.EFr.SIZE_120,
                              isPurchased: !1,
                              isHighlighted: !0
                          })
                      })
            )
            .with(u.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: W.bundlePreview,
                    children: (0, r.jsx)(G.d, {
                        product: t,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: W.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    J = (e) => {
        let { reducedMotion: t, displayOptions: n } = e,
            [o, a] = i.useState(!1),
            s = (0, f.q_F)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => a(!0), 100)
            }),
            c = (0, f.q_F)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                reverse: o
            }),
            u = (0, f.q_F)(
                {
                    from: {
                        transform: 'translateX(50%)',
                        right: '50%',
                        opacity: 1
                    },
                    to: {
                        transform: 'translateX(50%)',
                        right: '50%',
                        opacity: 0
                    },
                    config: { duration: 300 },
                    delay: 600
                },
                'animate-always'
            );
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.animated.div, {
                    className: W.easterEggContainer,
                    style: s,
                    children: (0, r.jsx)(X, K({}, e))
                }),
                (0, r.jsx)(l.animated.div, {
                    className: W.easterEggContainer,
                    style: t ? u : c,
                    children: (0, r.jsx)('img', {
                        src: n.imageSrc,
                        style: n.style,
                        alt: '',
                        'aria-hidden': 'true'
                    })
                })
            ]
        });
    },
    $ = (e) => {
        let t = (0, Z.v)(e.product.categorySkuId);
        return null != t ? (0, r.jsx)(J, q(K({}, e), { displayOptions: t })) : (0, r.jsx)(X, K({}, e));
    },
    ee = (e) => {
        var t;
        let { product: n, onClose: o, confettiTarget: a, confettiCanvas: s, hideConfetti: l = !1, analyticsLocations: c, overrideTitle: p, overrideDescription: g, selectedVariantIndex: E, shouldShowPromotionalExperience: v } = e,
            b = (0, C.o)('CollectiblesCollectedModal'),
            y = (0, B.W)(n, E),
            O = (0, d.e7)([S.default], () => {
                var e, t;
                return null !== (t = null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t;
            }),
            T = i.useMemo(() => {
                if (!b) return;
                let e = y.type === u.Z.AVATAR_DECORATION ? (0, Z.R9)(y.skuId, O) : null;
                return null != e ? I.Z.getProduct(e) : void 0;
            }, [b, y.skuId, y.type, O]),
            { confettiColors: N } = (0, L.Z)(y.styles),
            A = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
            R = i.useRef(null),
            { analyticsLocations: w } = (0, m.ZP)([...c, h.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { category: D, isFetching: x } = (0, P.l)(y.skuId),
            U = null !== (t = null == D ? void 0 : D.successModalBg) && void 0 !== t ? t : y.banner,
            G = x ? void 0 : U;
        return (0, r.jsxs)(m.Gt, {
            value: w,
            children: [
                (0, r.jsxs)('div', {
                    className: W.modalInner,
                    ref: R,
                    children: [
                        (0, r.jsxs)('div', {
                            className: W.bannerContainer,
                            children: [
                                v
                                    ? (0, r.jsx)('div', { className: W.promotionalBanner })
                                    : (0, r.jsx)(k.Z, {
                                          asset: G,
                                          size: (0, j.ML)(Q),
                                          className: W.decorationBanner,
                                          categoryBannerOverride: (0, F.ZS)(y.categorySkuId)
                                      }),
                                (0, r.jsx)($, {
                                    product: y,
                                    pairedProduct: T,
                                    reducedMotion: A
                                })
                            ]
                        }),
                        (0, r.jsx)(et, {
                            product: y,
                            pairedProduct: T,
                            onClose: o,
                            analyticsLocations: w,
                            overrideTitle: p,
                            overrideDescription: g,
                            selectedVariantIndex: E,
                            shouldShowPromotionalExperience: v
                        }),
                        (0, r.jsx)(f.olH, {
                            onClick: o,
                            className: W.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !l &&
                    !A &&
                    (0, r.jsx)(M.Z, {
                        confettiTarget: null != a ? a : R.current,
                        confettiCanvas: s,
                        sprites: (0, j.vK)(y.categorySkuId),
                        colors: null == N ? void 0 : N.map((e) => e.toHexString())
                    })
            ]
        });
    },
    et = (e) => {
        var t;
        let { product: n, pairedProduct: o, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: d, shouldShowPromotionalExperience: p } = e,
            _ = (0, R.ed)('CollectiblesCollectedModal'),
            h = (0, D.k)(n),
            m = (0, D.k)(o),
            g = null != o,
            E = (0, v.Z)(),
            b = null == E ? void 0 : null === (t = E.giftPurchaseConfirmation) || void 0 === t ? void 0 : t.rewardCollectedText(),
            { handleUseNow: y, isApplying: O } = (0, w.W)({
                product: n,
                onSuccess: a,
                onError: a
            }),
            { firstAvatarDecoration: S, firstProfileEffect: I } = (0, x.R)(n),
            T = (0, A.x6)(n) ? null != S && null != I : null != S || null != I,
            N = i.useMemo(
                () =>
                    null != l
                        ? l
                        : g
                          ? H.NW.format(new Date() < F.a$ ? H.t.BhGU09 : H.t.Jfv5Qk, {
                                purchased_item: h,
                                suggested_item: m
                            })
                          : _ && !p
                            ? H.NW.string(H.t['1xr2SU'])
                            : H.NW.format(H.t.YNaxMj, { itemName: h }),
                [l, _, p, h, m, g]
            ),
            C = i.useMemo(
                () =>
                    null != d
                        ? d
                        : g
                          ? H.NW.format(new Date() < F.a$ ? H.t['1jBC0t'] : H.t.qSrp39, {
                                purchased_item: h,
                                suggested_item: m
                            })
                          : (0, c.EQ)(null == n ? void 0 : n.type)
                                .with(u.Z.BUNDLE, () => H.NW.string(H.t.zJPoLy))
                                .with(u.Z.PROFILE_EFFECT, () => H.NW.string(H.t.f9M1YG))
                                .otherwise(() => (p && null != b ? b : H.NW.string(H.t['44b50t']))),
                [d, null == n ? void 0 : n.type, b, p, h, m, g]
            );
        return (0, r.jsxs)('div', {
            className: W.collectedInfoContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: W.collectedTextContainer,
                    children: [
                        (0, r.jsx)(f.X6q, {
                            variant: 'heading-lg/bold',
                            children: N
                        }),
                        (0, r.jsx)(f.Text, {
                            variant: 'text-sm/normal',
                            children: C
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: W.buttons,
                    children: [
                        g
                            ? (0, r.jsx)(en, {
                                  onClose: a,
                                  product: o,
                                  analyticsLocations: s
                              })
                            : (0, r.jsx)(er, {
                                  product: n,
                                  onClose: a,
                                  hasRequiredProductItems: T,
                                  analyticsLocations: s
                              }),
                        T
                            ? (0, r.jsx)(f.zxk, {
                                  onClick: y,
                                  submitting: O,
                                  children: H.NW.string(H.t.MAS7uL)
                              })
                            : null
                    ]
                })
            ]
        });
    },
    en = (e) => {
        let { onClose: t, product: n, analyticsLocations: o } = e,
            a = (0, R.hv)('CollectiblesShopGiftButton'),
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, E.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: V.Wt.SHOP_PAGE,
                            analyticsLocations: o,
                            variantsReturnStyle: a,
                            onClose: (e) => {
                                e && t();
                            }
                        });
                },
                [n.skuId, o, a, t]
            );
        return (0, r.jsxs)(f.zxk, {
            color: f.Ttl.PRIMARY,
            onClick: s,
            innerClassName: W.buyButton,
            children: [
                (0, r.jsx)(f.OgN, {
                    color: f.TVs.colors.WHITE,
                    size: 'sm'
                }),
                H.NW.string(H.t.ouo4FB)
            ]
        });
    },
    er = (e) => {
        let { product: t, onClose: n, hasRequiredProductItems: o, analyticsLocations: a } = e,
            l = (0, b.Z)({ analyticsLocations: a }),
            [c] = t.items,
            d = i.useCallback(() => {
                if ((n(), (0, p.xf)(), l(), t.type === u.Z.AVATAR_DECORATION)) {
                    s()(c.type === u.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, g.ps)({
                            initialSelectedDecoration: c,
                            analyticsLocations: a
                        });
                    return;
                }
                t.type === u.Z.PROFILE_EFFECT &&
                    (0, O.H)({
                        initialSelectedEffectId: c.id,
                        analyticsLocations: a
                    });
            }, [n, l, t.type, c, a]);
        return (0, r.jsx)(f.zxk, {
            color: o ? f.Ttl.PRIMARY : f.Ttl.BRAND,
            onClick: d,
            children: H.NW.string(H.t['2p2aY2'])
        });
    },
    ei = (e) => {
        let { transitionState: t, product: n, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: c, shouldShowPromotionalExperience: u } = e,
            p = (0, d.e7)([T.Z], () => T.Z.purchases),
            _ = (0, N.o)(n, p),
            h = (0, B.W)(n, _),
            m = i.useRef(new o.qA()),
            [g, E] = i.useState(null),
            v = (0, Z.UY)(h.skuId);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.O_, {
                    ref: E,
                    className: W.confettiCanvas,
                    environment: m.current
                }),
                (0, r.jsxs)(f.Y0X, {
                    hideShadow: !0,
                    transitionState: t,
                    size: f.CgR.DYNAMIC,
                    className: W.modalRoot,
                    children: [
                        null != v &&
                            (0, r.jsx)('img', {
                                src: v.imageSrc,
                                className: W.customConfetti,
                                style: v.style,
                                alt: '',
                                'aria-hidden': 'true'
                            }),
                        (0, r.jsx)(f.hzk, {
                            className: W.modalContent,
                            scrollbarType: 'none',
                            children: (0, r.jsx)(ee, {
                                product: h,
                                onClose: a,
                                confettiCanvas: g,
                                hideConfetti: null != v,
                                analyticsLocations: s,
                                overrideTitle: l,
                                overrideDescription: c,
                                selectedVariantIndex: _,
                                shouldShowPromotionalExperience: u
                            })
                        })
                    ]
                })
            ]
        });
    };
