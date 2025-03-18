n.d(t, {
    default: () => eu,
    e: () => ea
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
    b = n(333867),
    v = n(286961),
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
    F = n(616066),
    V = n(216541),
    Z = n(22267),
    H = n(58201),
    W = n(794324),
    Y = n(302800),
    K = n(215023),
    z = n(474936),
    q = n(689408),
    Q = n(388032),
    X = n(567863);
function J(e, t, n) {
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
function $(e) {
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
                J(e, t, n[t]);
            });
    }
    return e;
}
function ee(e, t) {
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
function et(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ee(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let en = 880,
    er = (e) => {
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
                    className: X.profileEffectShopPreview,
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
                                  className: X.avatarDecorationPairOne,
                                  children: (0, r.jsx)(F.R, {
                                      item: i,
                                      user: a,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: X.avatarDecorationPairTwo,
                                  children: (0, r.jsx)(F.R, {
                                      item: o,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: X.avatarDecoration,
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
                    className: X.nameplate,
                    children: (0, r.jsx)(Z.Z, {
                        nameplate: i,
                        user: a,
                        isHighlighted: !0
                    })
                })
            )
            .with(u.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: X.bundlePreview,
                    children: (0, r.jsx)(V.d, {
                        product: t,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: X.bundleProfileEffectCard
                    })
                })
            )
            .with(u.Z.EXTERNAL_SKU, () =>
                (0, r.jsx)('div', {
                    className: X.avatarDecoration,
                    children: (0, r.jsx)(B.b, { product: t })
                })
            )
            .otherwise(() => null);
    },
    ei = (e) => {
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
                    className: X.easterEggContainer,
                    style: s,
                    children: (0, r.jsx)(er, $({}, e))
                }),
                (0, r.jsx)(l.animated.div, {
                    className: X.easterEggContainer,
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
    eo = (e) => {
        let t = (0, Y.v)(e.product.categorySkuId);
        return null != t ? (0, r.jsx)(ei, et($({}, e), { displayOptions: t })) : (0, r.jsx)(er, $({}, e));
    },
    ea = (e) => {
        let { product: t, onClose: n, confettiTarget: o, confettiCanvas: a, hideConfetti: s = !1, analyticsLocations: l, overrideTitle: c, overrideDescription: p, selectedVariantIndex: E, shouldShowPromotionalExperience: b, itemConsumed: v = !0 } = e,
            y = (0, w.o)('CollectiblesCollectedModal'),
            O = (0, H.W)(t, E),
            I = (0, f.e7)([N.default], () => {
                var e, t;
                return null !== (t = null === (e = N.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t;
            }),
            T = i.useMemo(() => {
                if (!y) return;
                let e = O.type === u.Z.AVATAR_DECORATION ? (0, Y.R9)(O.skuId, I) : null;
                return null != e ? A.Z.getProduct(e) : void 0;
            }, [y, O.skuId, O.type, I]),
            { confettiColors: C } = (0, k.Z)(O.styles),
            R = (0, f.e7)([h.Z], () => h.Z.useReducedMotion),
            P = i.useRef(null),
            { analyticsLocations: D } = (0, g.ZP)([...l, m.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { collectedModalBackground: L } = (0, W.Ac)(O);
        function x() {
            if (O.skuId === d.a.PREMIUM_TIER_2_3_DAY) {
                let e = Q.NW.formatToPlainString(Q.t.fYmir6, { days: 3 });
                return v
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
                        className: X.bannerContainer,
                        children: [
                            b
                                ? (0, r.jsx)('div', { className: X.promotionalBanner })
                                : (0, r.jsx)(U.Z, {
                                      asset: L,
                                      size: (0, G.ML)(en),
                                      className: X.decorationBanner,
                                      categoryBannerOverride: (0, K.ZS)(O.categorySkuId)
                                  }),
                            (0, r.jsx)(eo, {
                                product: O,
                                pairedProduct: T,
                                reducedMotion: R
                            })
                        ]
                    }),
                    (0, r.jsx)(es, {
                        product: O,
                        pairedProduct: T,
                        onClose: n,
                        analyticsLocations: D,
                        overrideTitle: c,
                        overrideDescription: p,
                        selectedVariantIndex: E,
                        shouldShowPromotionalExperience: b
                    }),
                    (0, r.jsx)(_.olH, {
                        onClick: n,
                        className: X.modalCloseButton,
                        withCircleBackground: !0
                    })
                ]
            });
        }
        return (0, r.jsxs)(g.Gt, {
            value: D,
            children: [
                (0, r.jsx)('div', {
                    className: X.modalInner,
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
    es = (e) => {
        var t;
        let { product: n, pairedProduct: o, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: d, shouldShowPromotionalExperience: f } = e,
            p = (0, D.ed)('CollectiblesCollectedModal'),
            h = (0, x.k)(n),
            m = (0, x.k)(o),
            g = null != o,
            E = (0, v.Z)(),
            b = null == E ? void 0 : null === (t = E.giftPurchaseConfirmation) || void 0 === t ? void 0 : t.rewardCollectedText(),
            { handleUseNow: y, isApplying: O } = (0, L.W)({
                product: n,
                onSuccess: a,
                onError: a
            }),
            { firstAvatarDecoration: I, firstProfileEffect: S } = (0, M.R)(n),
            N = (0, P.x6)(n) ? null != I && null != S : null != I || null != S || n.type === u.Z.NAMEPLATE,
            A = i.useMemo(
                () =>
                    null != l
                        ? l
                        : K.xJ === n.skuId
                          ? Q.NW.string(q.Z.nvaTQk)
                          : g
                            ? Q.NW.format(new Date() < K.a$ ? Q.t.BhGU09 : Q.t.Jfv5Qk, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : p && !f
                              ? Q.NW.string(Q.t['1xr2SU'])
                              : Q.NW.format(Q.t.YNaxMj, { itemName: h }),
                [l, n.skuId, g, p, f, h, m]
            ),
            C = i.useMemo(
                () =>
                    null != d
                        ? d
                        : K.xJ === n.skuId
                          ? Q.NW.string(q.Z.UnPGio)
                          : g
                            ? Q.NW.format(new Date() < K.a$ ? Q.t['1jBC0t'] : Q.t.qSrp39, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : (0, c.EQ)(null == n ? void 0 : n.type)
                                  .with(u.Z.BUNDLE, () => Q.NW.string(Q.t.zJPoLy))
                                  .with(u.Z.PROFILE_EFFECT, () => Q.NW.string(Q.t.f9M1YG))
                                  .with(u.Z.NAMEPLATE, () => Q.NW.string(Q.t.lvwvIi))
                                  .otherwise(() => (f && null != b ? b : Q.NW.string(Q.t['44b50t']))),
                [d, n.skuId, null == n ? void 0 : n.type, g, h, m, f, b]
            ),
            R = i.useMemo(
                () =>
                    K.xJ === n.skuId
                        ? (0, r.jsxs)('div', {
                              className: X.buttonRows,
                              children: [
                                  (0, r.jsx)(ec, {
                                      text: Q.NW.string(q.Z.yfwZu7),
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
                                      children: Q.NW.string(Q.t['H57f4+'])
                                  })
                              ]
                          })
                        : null,
                [s, a, n]
            );
        return (0, r.jsxs)('div', {
            className: X.collectedInfoContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: X.collectedTextContainer,
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
                    className: X.buttons,
                    children: [
                        g
                            ? (0, r.jsx)(el, {
                                  onClose: a,
                                  product: o,
                                  analyticsLocations: s
                              })
                            : null != R
                              ? R
                              : (0, r.jsx)(ec, {
                                    product: n,
                                    onClose: a,
                                    isPrimary: N,
                                    analyticsLocations: s
                                }),
                        N
                            ? (0, r.jsx)(_.zxk, {
                                  onClick: y,
                                  submitting: O,
                                  children: Q.NW.string(Q.t.MAS7uL)
                              })
                            : null
                    ]
                })
            ]
        });
    },
    el = (e) => {
        let { onClose: t, product: n, analyticsLocations: o } = e,
            a = (0, D.hv)('CollectiblesShopGiftButton'),
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, b.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: z.Wt.SHOP_PAGE,
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
            innerClassName: X.buyButton,
            children: [
                (0, r.jsx)(_.OgN, {
                    color: _.TVs.colors.WHITE,
                    size: 'sm'
                }),
                Q.NW.string(Q.t.ouo4FB)
            ]
        });
    },
    ec = (e) => {
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
            children: null != l ? l : Q.NW.string(Q.t['2p2aY2'])
        });
    },
    eu = (e) => {
        let { transitionState: t, product: n, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: c, shouldShowPromotionalExperience: u, itemConsumed: d } = e,
            p = (0, f.e7)([C.Z], () => C.Z.purchases),
            h = (0, R.o)(n, p),
            m = (0, H.W)(n, h),
            g = i.useRef(new o.qA()),
            [E, b] = i.useState(null),
            v = (0, Y.UY)(m.skuId);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.O_, {
                    ref: b,
                    className: X.confettiCanvas,
                    environment: g.current
                }),
                (0, r.jsxs)(_.Y0X, {
                    hideShadow: !0,
                    transitionState: t,
                    size: _.CgR.DYNAMIC,
                    className: X.modalRoot,
                    children: [
                        null != v &&
                            (0, r.jsx)('img', {
                                src: v.imageSrc,
                                className: X.customConfetti,
                                style: v.style,
                                alt: '',
                                'aria-hidden': 'true'
                            }),
                        (0, r.jsx)(_.hzk, {
                            className: X.modalContent,
                            scrollbarType: 'none',
                            children: (0, r.jsx)(ea, {
                                product: m,
                                onClose: a,
                                confettiCanvas: E,
                                hideConfetti: null != v,
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
