n.d(t, {
    default: () => eo,
    e: () => et
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
    _ = n(37234),
    p = n(607070),
    h = n(100527),
    g = n(906732),
    m = n(1585),
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
    D = n(635552),
    w = n(905357),
    L = n(328456),
    x = n(624377),
    M = n(530618),
    k = n(141011),
    j = n(372654),
    U = n(616066),
    G = n(216541),
    B = n(22267),
    V = n(58201),
    F = n(302800),
    Z = n(215023),
    H = n(474936),
    W = n(388032),
    Y = n(945610);
function K(e, t, n) {
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
function z(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
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
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let X = 880,
    J = (e) => {
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
                    className: Y.profileEffectShopPreview,
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
                                  className: Y.avatarDecorationPairOne,
                                  children: (0, r.jsx)(U.R, {
                                      item: i,
                                      user: a,
                                      avatarSize: f.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: Y.avatarDecorationPairTwo,
                                  children: (0, r.jsx)(U.R, {
                                      item: o,
                                      avatarSize: f.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: Y.avatarDecoration,
                          children: (0, r.jsx)(U.R, {
                              item: i,
                              user: a,
                              avatarSize: f.EFr.SIZE_120,
                              isPurchased: !1,
                              isHighlighted: !0
                          })
                      })
            )
            .with(u.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    className: Y.nameplate,
                    children: (0, r.jsx)(B.Z, {
                        nameplate: i,
                        user: a,
                        isHighlighted: !0
                    })
                })
            )
            .with(u.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: Y.bundlePreview,
                    children: (0, r.jsx)(G.d, {
                        product: t,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: Y.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    $ = (e) => {
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
                    className: Y.easterEggContainer,
                    style: s,
                    children: (0, r.jsx)(J, z({}, e))
                }),
                (0, r.jsx)(l.animated.div, {
                    className: Y.easterEggContainer,
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
    ee = (e) => {
        let t = (0, F.v)(e.product.categorySkuId);
        return null != t ? (0, r.jsx)($, Q(z({}, e), { displayOptions: t })) : (0, r.jsx)(J, z({}, e));
    },
    et = (e) => {
        var t;
        let { product: n, onClose: o, confettiTarget: a, confettiCanvas: s, hideConfetti: l = !1, analyticsLocations: c, overrideTitle: _, overrideDescription: m, selectedVariantIndex: E, shouldShowPromotionalExperience: v } = e,
            b = (0, C.o)('CollectiblesCollectedModal'),
            y = (0, V.W)(n, E),
            O = (0, d.e7)([S.default], () => {
                var e, t;
                return null !== (t = null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t;
            }),
            T = i.useMemo(() => {
                if (!b) return;
                let e = y.type === u.Z.AVATAR_DECORATION ? (0, F.R9)(y.skuId, O) : null;
                return null != e ? I.Z.getProduct(e) : void 0;
            }, [b, y.skuId, y.type, O]),
            { confettiColors: N } = (0, x.Z)(y.styles),
            A = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
            R = i.useRef(null),
            { analyticsLocations: D } = (0, g.ZP)([...c, h.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { category: w, isFetching: L } = (0, P.l)(y.skuId),
            U = null !== (t = null == w ? void 0 : w.successModalBg) && void 0 !== t ? t : y.banner,
            G = L ? void 0 : U;
        return (0, r.jsxs)(g.Gt, {
            value: D,
            children: [
                (0, r.jsxs)('div', {
                    className: Y.modalInner,
                    ref: R,
                    children: [
                        (0, r.jsxs)('div', {
                            className: Y.bannerContainer,
                            children: [
                                v
                                    ? (0, r.jsx)('div', { className: Y.promotionalBanner })
                                    : (0, r.jsx)(k.Z, {
                                          asset: G,
                                          size: (0, j.ML)(X),
                                          className: Y.decorationBanner,
                                          categoryBannerOverride: (0, Z.ZS)(y.categorySkuId)
                                      }),
                                (0, r.jsx)(ee, {
                                    product: y,
                                    pairedProduct: T,
                                    reducedMotion: A
                                })
                            ]
                        }),
                        (0, r.jsx)(en, {
                            product: y,
                            pairedProduct: T,
                            onClose: o,
                            analyticsLocations: D,
                            overrideTitle: _,
                            overrideDescription: m,
                            selectedVariantIndex: E,
                            shouldShowPromotionalExperience: v
                        }),
                        (0, r.jsx)(f.olH, {
                            onClick: o,
                            className: Y.modalCloseButton,
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
    en = (e) => {
        var t;
        let { product: n, pairedProduct: o, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: d, shouldShowPromotionalExperience: _ } = e,
            p = (0, R.ed)('CollectiblesCollectedModal'),
            h = (0, w.k)(n),
            g = (0, w.k)(o),
            m = null != o,
            E = (0, v.Z)(),
            b = null == E ? void 0 : null === (t = E.giftPurchaseConfirmation) || void 0 === t ? void 0 : t.rewardCollectedText(),
            { handleUseNow: y, isApplying: O } = (0, D.W)({
                product: n,
                onSuccess: a,
                onError: a
            }),
            { firstAvatarDecoration: S, firstProfileEffect: I } = (0, L.R)(n),
            T = (0, A.x6)(n) ? null != S && null != I : null != S || null != I,
            N = i.useMemo(
                () =>
                    null != l
                        ? l
                        : m
                          ? W.NW.format(new Date() < Z.a$ ? W.t.BhGU09 : W.t.Jfv5Qk, {
                                purchased_item: h,
                                suggested_item: g
                            })
                          : p && !_
                            ? W.NW.string(W.t['1xr2SU'])
                            : W.NW.format(W.t.YNaxMj, { itemName: h }),
                [l, p, _, h, g, m]
            ),
            C = i.useMemo(
                () =>
                    null != d
                        ? d
                        : m
                          ? W.NW.format(new Date() < Z.a$ ? W.t['1jBC0t'] : W.t.qSrp39, {
                                purchased_item: h,
                                suggested_item: g
                            })
                          : (0, c.EQ)(null == n ? void 0 : n.type)
                                .with(u.Z.BUNDLE, () => W.NW.string(W.t.zJPoLy))
                                .with(u.Z.PROFILE_EFFECT, () => W.NW.string(W.t.f9M1YG))
                                .otherwise(() => (_ && null != b ? b : W.NW.string(W.t['44b50t']))),
                [d, null == n ? void 0 : n.type, b, _, h, g, m]
            );
        return (0, r.jsxs)('div', {
            className: Y.collectedInfoContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: Y.collectedTextContainer,
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
                    className: Y.buttons,
                    children: [
                        m
                            ? (0, r.jsx)(er, {
                                  onClose: a,
                                  product: o,
                                  analyticsLocations: s
                              })
                            : (0, r.jsx)(ei, {
                                  product: n,
                                  onClose: a,
                                  hasRequiredProductItems: T,
                                  analyticsLocations: s
                              }),
                        T
                            ? (0, r.jsx)(f.zxk, {
                                  onClick: y,
                                  submitting: O,
                                  children: W.NW.string(W.t.MAS7uL)
                              })
                            : null
                    ]
                })
            ]
        });
    },
    er = (e) => {
        let { onClose: t, product: n, analyticsLocations: o } = e,
            a = (0, R.hv)('CollectiblesShopGiftButton'),
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, E.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: H.Wt.SHOP_PAGE,
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
            innerClassName: Y.buyButton,
            children: [
                (0, r.jsx)(f.OgN, {
                    color: f.TVs.colors.WHITE,
                    size: 'sm'
                }),
                W.NW.string(W.t.ouo4FB)
            ]
        });
    },
    ei = (e) => {
        let { product: t, onClose: n, hasRequiredProductItems: o, analyticsLocations: a } = e,
            l = (0, b.Z)({ analyticsLocations: a }),
            [c] = t.items,
            d = i.useCallback(() => {
                if ((n(), (0, _.xf)(), l(), t.type === u.Z.AVATAR_DECORATION)) {
                    s()(c.type === u.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, m.ps)({
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
            children: W.NW.string(W.t['2p2aY2'])
        });
    },
    eo = (e) => {
        let { transitionState: t, product: n, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: c, shouldShowPromotionalExperience: u } = e,
            _ = (0, d.e7)([T.Z], () => T.Z.purchases),
            p = (0, N.o)(n, _),
            h = (0, V.W)(n, p),
            g = i.useRef(new o.qA()),
            [m, E] = i.useState(null),
            v = (0, F.UY)(h.skuId);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.O_, {
                    ref: E,
                    className: Y.confettiCanvas,
                    environment: g.current
                }),
                (0, r.jsxs)(f.Y0X, {
                    hideShadow: !0,
                    transitionState: t,
                    size: f.CgR.DYNAMIC,
                    className: Y.modalRoot,
                    children: [
                        null != v &&
                            (0, r.jsx)('img', {
                                src: v.imageSrc,
                                className: Y.customConfetti,
                                style: v.style,
                                alt: '',
                                'aria-hidden': 'true'
                            }),
                        (0, r.jsx)(f.hzk, {
                            className: Y.modalContent,
                            scrollbarType: 'none',
                            children: (0, r.jsx)(et, {
                                product: h,
                                onClose: a,
                                confettiCanvas: m,
                                hideConfetti: null != v,
                                analyticsLocations: s,
                                overrideTitle: l,
                                overrideDescription: c,
                                selectedVariantIndex: p,
                                shouldShowPromotionalExperience: u
                            })
                        })
                    ]
                })
            ]
        });
    };
