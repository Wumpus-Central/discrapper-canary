n.d(t, {
    default: () => ed,
    e: () => es
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
    d = n(314794),
    f = n(399606),
    _ = n(481060),
    p = n(37234),
    h = n(607070),
    m = n(100527),
    g = n(906732),
    E = n(1585),
    v = n(333867),
    b = n(286961),
    y = n(300284),
    O = n(876917),
    I = n(642619),
    S = n(824393),
    T = n(341907),
    N = n(594174),
    A = n(597688),
    C = n(1870),
    R = n(429368),
    P = n(884697),
    w = n(587792),
    D = n(228624),
    L = n(635552),
    x = n(905357),
    M = n(328456),
    k = n(624377),
    j = n(530618),
    U = n(141011),
    G = n(372654),
    B = n(508925),
    V = n(755419),
    F = n(616066),
    Z = n(216541),
    H = n(22267),
    W = n(58201),
    Y = n(794324),
    K = n(302800),
    z = n(215023),
    q = n(474936),
    Q = n(689408),
    X = n(388032),
    J = n(567863);
function $(e, t, n) {
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
function ee(e) {
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
                $(e, t, n[t]);
            });
    }
    return e;
}
function et(e, t) {
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
function en(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : et(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let er = 880,
    ei = (e) => {
        let { product: t, pairedProduct: n } = e,
            [i] = t.items,
            o = null == n ? void 0 : n.items[0],
            a = (0, f.e7)([N.default], () => {
                let e = N.default.getCurrentUser();
                return s()(null != e, 'User cannot be undefined'), e;
            });
        return (0, c.EQ)(t.type)
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: J.profileEffectShopPreview,
                    children: (0, r.jsx)(O.Z, {
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
                                  className: J.avatarDecorationPairOne,
                                  children: (0, r.jsx)(F.R, {
                                      item: i,
                                      user: a,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: J.avatarDecorationPairTwo,
                                  children: (0, r.jsx)(F.R, {
                                      item: o,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: J.avatarDecoration,
                          children: (0, r.jsx)(F.R, {
                              item: i,
                              user: a,
                              avatarSize: _.EFr.SIZE_120,
                              isPurchased: !1,
                              isHighlighted: !0
                          })
                      })
            )
            .with(u.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    className: J.nameplate,
                    children: (0, r.jsx)(H.Z, {
                        nameplate: i,
                        user: a,
                        isHighlighted: !0
                    })
                })
            )
            .with(u.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: J.bundlePreview,
                    children: (0, r.jsx)(Z.d, {
                        product: t,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: J.bundleProfileEffectCard
                    })
                })
            )
            .with(u.Z.EXTERNAL_SKU, () =>
                (0, r.jsx)('div', {
                    className: J.avatarDecoration,
                    children: (0, r.jsx)(B.b, { product: t })
                })
            )
            .otherwise(() => null);
    },
    eo = (e) => {
        let { reducedMotion: t, displayOptions: n } = e,
            [o, a] = i.useState(!1),
            s = (0, _.q_F)({
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
            c = (0, _.q_F)({
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
            u = (0, _.q_F)(
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
                    className: J.easterEggContainer,
                    style: s,
                    children: (0, r.jsx)(ei, ee({}, e))
                }),
                (0, r.jsx)(l.animated.div, {
                    className: J.easterEggContainer,
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
    ea = (e) => {
        let t = (0, K.v)(e.product.categorySkuId);
        return null != t ? (0, r.jsx)(eo, en(ee({}, e), { displayOptions: t })) : (0, r.jsx)(ei, ee({}, e));
    },
    es = (e) => {
        let { product: t, onClose: n, confettiTarget: o, confettiCanvas: a, hideConfetti: s = !1, analyticsLocations: l, overrideTitle: c, overrideDescription: p, selectedVariantIndex: E, shouldShowPromotionalExperience: v, itemConsumed: b = !0 } = e,
            y = (0, w.o)('CollectiblesCollectedModal'),
            O = (0, W.W)(t, E),
            I = (0, f.e7)([N.default], () => {
                var e, t;
                return null !== (t = null === (e = N.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t;
            }),
            T = i.useMemo(() => {
                if (!y) return;
                let e = O.type === u.Z.AVATAR_DECORATION ? (0, K.R9)(O.skuId, I) : null;
                return null != e ? A.Z.getProduct(e) : void 0;
            }, [y, O.skuId, O.type, I]),
            { confettiColors: C } = (0, k.Z)(O.styles),
            R = (0, f.e7)([h.Z], () => h.Z.useReducedMotion),
            P = i.useRef(null),
            { analyticsLocations: D } = (0, g.ZP)([...l, m.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { collectedModalBackground: L } = (0, Y.Ac)(O);
        function x() {
            if (O.skuId === d.a.PREMIUM_TIER_2_3_DAY) {
                let e = X.NW.formatToPlainString(X.t.fYmir6, { days: 3 });
                return b
                    ? (0, r.jsx)(S.j, {
                          duration: e,
                          onClose: n
                      })
                    : (0, r.jsx)(S.h, {
                          duration: e,
                          onClose: n
                      });
            }
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        className: J.bannerContainer,
                        children: [
                            v
                                ? (0, r.jsx)('div', { className: J.promotionalBanner })
                                : (0, r.jsx)(U.Z, {
                                      asset: L,
                                      size: (0, G.ML)(er),
                                      className: J.decorationBanner,
                                      categoryBannerOverride: (0, z.ZS)(O.categorySkuId)
                                  }),
                            (0, r.jsx)(ea, {
                                product: O,
                                pairedProduct: T,
                                reducedMotion: R
                            })
                        ]
                    }),
                    (0, r.jsx)(el, {
                        product: O,
                        pairedProduct: T,
                        onClose: n,
                        analyticsLocations: D,
                        overrideTitle: c,
                        overrideDescription: p,
                        selectedVariantIndex: E,
                        shouldShowPromotionalExperience: v
                    }),
                    (0, r.jsx)(_.olH, {
                        onClick: n,
                        className: J.modalCloseButton,
                        withCircleBackground: !0
                    })
                ]
            });
        }
        return (0, r.jsxs)(g.Gt, {
            value: D,
            children: [
                (0, r.jsx)('div', {
                    className: J.modalInner,
                    ref: P,
                    children: x()
                }),
                !s &&
                    !R &&
                    (0, r.jsx)(j.Z, {
                        confettiTarget: null != o ? o : P.current,
                        confettiCanvas: a,
                        sprites: (0, G.vK)(O.categorySkuId),
                        colors: null == C ? void 0 : C.map((e) => e.toHexString())
                    })
            ]
        });
    },
    el = (e) => {
        var t;
        let { product: n, pairedProduct: o, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: d, shouldShowPromotionalExperience: f } = e,
            p = (0, D.ed)('CollectiblesCollectedModal'),
            h = (0, x.k)(n),
            m = (0, x.k)(o),
            g = null != o,
            E = (0, b.Z)(),
            v = null == E ? void 0 : null === (t = E.giftPurchaseConfirmation) || void 0 === t ? void 0 : t.rewardCollectedText(),
            { handleUseNow: y, isApplying: O } = (0, L.W)({
                product: n,
                onSuccess: a,
                onError: a
            }),
            { firstAvatarDecoration: I, firstProfileEffect: S } = (0, M.R)(n),
            N = (0, P.x6)(n) ? null != I && null != S : null != I || null != S,
            A = i.useMemo(
                () =>
                    null != l
                        ? l
                        : V.xJ === n.skuId
                          ? X.NW.string(Q.Z.nvaTQk)
                          : g
                            ? X.NW.format(new Date() < z.a$ ? X.t.BhGU09 : X.t.Jfv5Qk, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : p && !f
                              ? X.NW.string(X.t['1xr2SU'])
                              : X.NW.format(X.t.YNaxMj, { itemName: h }),
                [l, n.skuId, g, p, f, h, m]
            ),
            C = i.useMemo(
                () =>
                    null != d
                        ? d
                        : V.xJ === n.skuId
                          ? X.NW.string(Q.Z.UnPGio)
                          : g
                            ? X.NW.format(new Date() < z.a$ ? X.t['1jBC0t'] : X.t.qSrp39, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : (0, c.EQ)(null == n ? void 0 : n.type)
                                  .with(u.Z.BUNDLE, () => X.NW.string(X.t.zJPoLy))
                                  .with(u.Z.PROFILE_EFFECT, () => X.NW.string(X.t.f9M1YG))
                                  .otherwise(() => (f && null != v ? v : X.NW.string(X.t['44b50t']))),
                [d, n.skuId, null == n ? void 0 : n.type, g, h, m, f, v]
            ),
            R = i.useMemo(
                () =>
                    V.xJ === n.skuId
                        ? (0, r.jsxs)('div', {
                              className: J.buttonRows,
                              children: [
                                  (0, r.jsx)(eu, {
                                      text: X.NW.string(Q.Z.yfwZu7),
                                      product: n,
                                      onClose: a,
                                      isPrimary: !1,
                                      analyticsLocations: s
                                  }),
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.PRIMARY,
                                      onClick: () => {
                                          (0, T.navigateToQuestHome)();
                                      },
                                      children: X.NW.string(X.t['H57f4+'])
                                  })
                              ]
                          })
                        : null,
                [s, a, n]
            );
        return (0, r.jsxs)('div', {
            className: J.collectedInfoContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: J.collectedTextContainer,
                    children: [
                        (0, r.jsx)(_.X6q, {
                            variant: 'heading-lg/bold',
                            children: A
                        }),
                        (0, r.jsx)(_.Text, {
                            variant: 'text-sm/normal',
                            children: C
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: J.buttons,
                    children: [
                        g
                            ? (0, r.jsx)(ec, {
                                  onClose: a,
                                  product: o,
                                  analyticsLocations: s
                              })
                            : null != R
                              ? R
                              : (0, r.jsx)(eu, {
                                    product: n,
                                    onClose: a,
                                    isPrimary: N,
                                    analyticsLocations: s
                                }),
                        N
                            ? (0, r.jsx)(_.zxk, {
                                  onClick: y,
                                  submitting: O,
                                  children: X.NW.string(X.t.MAS7uL)
                              })
                            : null
                    ]
                })
            ]
        });
    },
    ec = (e) => {
        let { onClose: t, product: n, analyticsLocations: o } = e,
            a = (0, D.hv)('CollectiblesShopGiftButton'),
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, v.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: q.Wt.SHOP_PAGE,
                            analyticsLocations: o,
                            variantsReturnStyle: a,
                            onClose: (e) => {
                                e && t();
                            }
                        });
                },
                [n.skuId, o, a, t]
            );
        return (0, r.jsxs)(_.zxk, {
            color: _.Ttl.PRIMARY,
            onClick: s,
            innerClassName: J.buyButton,
            children: [
                (0, r.jsx)(_.OgN, {
                    color: _.TVs.colors.WHITE,
                    size: 'sm'
                }),
                X.NW.string(X.t.ouo4FB)
            ]
        });
    },
    eu = (e) => {
        let { product: t, onClose: n, isPrimary: o, analyticsLocations: a, text: l } = e,
            c = (0, y.Z)({ analyticsLocations: a }),
            [d] = t.items,
            f = i.useCallback(() => {
                if ((n(), (0, p.xf)(), c(), t.type === u.Z.AVATAR_DECORATION)) {
                    s()(d.type === u.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, E.ps)({
                            initialSelectedDecoration: d,
                            analyticsLocations: a
                        });
                    return;
                }
                t.type === u.Z.PROFILE_EFFECT &&
                    (0, I.H)({
                        initialSelectedEffectId: d.id,
                        analyticsLocations: a
                    });
            }, [n, c, t.type, d, a]);
        return (0, r.jsx)(_.zxk, {
            color: o ? _.Ttl.PRIMARY : _.Ttl.BRAND,
            onClick: f,
            children: null != l ? l : X.NW.string(X.t['2p2aY2'])
        });
    },
    ed = (e) => {
        let { transitionState: t, product: n, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: c, shouldShowPromotionalExperience: u, itemConsumed: d } = e,
            p = (0, f.e7)([C.Z], () => C.Z.purchases),
            h = (0, R.o)(n, p),
            m = (0, W.W)(n, h),
            g = i.useRef(new o.qA()),
            [E, v] = i.useState(null),
            b = (0, K.UY)(m.skuId);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.O_, {
                    ref: v,
                    className: J.confettiCanvas,
                    environment: g.current
                }),
                (0, r.jsxs)(_.Y0X, {
                    hideShadow: !0,
                    transitionState: t,
                    size: _.CgR.DYNAMIC,
                    className: J.modalRoot,
                    children: [
                        null != b &&
                            (0, r.jsx)('img', {
                                src: b.imageSrc,
                                className: J.customConfetti,
                                style: b.style,
                                alt: '',
                                'aria-hidden': 'true'
                            }),
                        (0, r.jsx)(_.hzk, {
                            className: J.modalContent,
                            scrollbarType: 'none',
                            children: (0, r.jsx)(es, {
                                product: m,
                                onClose: a,
                                confettiCanvas: E,
                                hideConfetti: null != b,
                                analyticsLocations: s,
                                overrideTitle: l,
                                overrideDescription: c,
                                selectedVariantIndex: h,
                                shouldShowPromotionalExperience: u,
                                itemConsumed: d
                            })
                        })
                    ]
                })
            ]
        });
    };
