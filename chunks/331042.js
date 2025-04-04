n.d(t, {
    default: () => ep,
    e: () => eu
}),
    n(47120),
    n(627341);
var r = n(200651),
    i = n(192379),
    o = n(48026),
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
    y = n(286961),
    v = n(300284),
    O = n(876917),
    I = n(642619),
    S = n(824393),
    T = n(341907),
    N = n(594174),
    A = n(585483),
    C = n(597688),
    R = n(1870),
    P = n(429368),
    w = n(884697),
    D = n(587792),
    L = n(228624),
    x = n(635552),
    M = n(905357),
    k = n(328456),
    j = n(624377),
    U = n(530618),
    G = n(141011),
    B = n(372654),
    F = n(197831),
    V = n(508925),
    Z = n(755419),
    H = n(616066),
    W = n(216541),
    Y = n(22267),
    K = n(58201),
    z = n(794324),
    q = n(302800),
    Q = n(215023),
    X = n(981631),
    J = n(474936),
    $ = n(694232),
    ee = n(388032),
    et = n(854402);
function en(e, t, n) {
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
function er(e) {
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
                en(e, t, n[t]);
            });
    }
    return e;
}
function ei(e, t) {
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
function eo(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ei(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ea = 880,
    es = (e) => {
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
                    className: et.profileEffectShopPreview,
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
                                  className: et.avatarDecorationPairOne,
                                  children: (0, r.jsx)(H.R, {
                                      item: i,
                                      user: a,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: et.avatarDecorationPairTwo,
                                  children: (0, r.jsx)(H.R, {
                                      item: o,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: et.avatarDecoration,
                          children: (0, r.jsx)(H.R, {
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
                    className: et.nameplate,
                    children: (0, r.jsx)(Y.Z, {
                        nameplate: i,
                        user: a,
                        isHighlighted: !0
                    })
                })
            )
            .with(u.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: et.bundlePreview,
                    children: (0, r.jsx)(W.d, {
                        product: t,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: et.bundleProfileEffectCard
                    })
                })
            )
            .with(u.Z.EXTERNAL_SKU, () =>
                (0, r.jsx)('div', {
                    className: et.avatarDecoration,
                    children: (0, r.jsx)(V.b, { product: t })
                })
            )
            .otherwise(() => null);
    },
    el = (e) => {
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
                    className: et.easterEggContainer,
                    style: s,
                    children: (0, r.jsx)(es, er({}, e))
                }),
                (0, r.jsx)(l.animated.div, {
                    className: et.easterEggContainer,
                    style: t ? u : c,
                    children: (0, r.jsx)('img', {
                        src: n.getSrc(),
                        style: n.style,
                        alt: '',
                        'aria-hidden': 'true'
                    })
                })
            ]
        });
    },
    ec = (e) => {
        let t = (0, q.v)(e.product.categorySkuId);
        return null != t ? (0, r.jsx)(el, eo(er({}, e), { displayOptions: t })) : (0, r.jsx)(es, er({}, e));
    },
    eu = (e) => {
        let { product: t, onClose: n, confettiTarget: o, confettiCanvas: a, hideConfetti: s = !1, analyticsLocations: l, overrideTitle: c, overrideDescription: p, selectedVariantIndex: E, shouldShowPromotionalExperience: b, itemConsumed: y = !0, purchaseType: v = Q.o8.FIAT } = e,
            O = (0, D.o)('CollectiblesCollectedModal'),
            I = (0, K.W)(t, E),
            T = (0, f.e7)([N.default], () => {
                var e, t;
                return null != (t = null == (e = N.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
            }),
            A = i.useMemo(() => {
                if (!O) return;
                let e = I.type === u.Z.AVATAR_DECORATION ? (0, q.R9)(I.skuId, T) : null;
                return null != e ? C.Z.getProduct(e) : void 0;
            }, [O, I.skuId, I.type, T]),
            { confettiColors: R } = (0, j.Z)(I.styles),
            P = (0, f.e7)([h.Z], () => h.Z.useReducedMotion),
            w = i.useRef(null),
            { analyticsLocations: L } = (0, g.ZP)([...l, m.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { collectedModalBackground: x } = (0, z.Ac)(I);
        function M() {
            if (I.skuId === d.a.PREMIUM_TIER_2_3_DAY) {
                let e = ee.NW.formatToPlainString(ee.t.fYmir6, { days: 3 });
                return y
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
                        className: et.bannerContainer,
                        children: [
                            b
                                ? (0, r.jsx)('div', { className: et.promotionalBanner })
                                : (0, r.jsx)(G.Z, {
                                      asset: x,
                                      size: (0, B.ML)(ea),
                                      className: et.decorationBanner,
                                      categoryBannerOverride: (0, Q.ZS)(I.categorySkuId)
                                  }),
                            (0, r.jsx)(ec, {
                                product: I,
                                pairedProduct: A,
                                reducedMotion: P
                            })
                        ]
                    }),
                    (0, r.jsx)(ed, {
                        product: I,
                        pairedProduct: A,
                        onClose: n,
                        analyticsLocations: L,
                        overrideTitle: c,
                        overrideDescription: p,
                        selectedVariantIndex: E,
                        shouldShowPromotionalExperience: b,
                        purchaseType: v
                    }),
                    (0, r.jsx)(_.olH, {
                        onClick: n,
                        className: et.modalCloseButton,
                        withCircleBackground: !0
                    })
                ]
            });
        }
        return (0, r.jsxs)(g.Gt, {
            value: L,
            children: [
                (0, r.jsx)('div', {
                    className: et.modalInner,
                    ref: w,
                    children: M()
                }),
                !s &&
                    !P &&
                    (0, r.jsx)(U.Z, {
                        confettiTarget: null != o ? o : w.current,
                        confettiCanvas: a,
                        sprites: (0, B.vK)(I.categorySkuId),
                        colors: null == R ? void 0 : R.map((e) => e.toHexString())
                    })
            ]
        });
    },
    ed = (e) => {
        var t;
        let { product: n, pairedProduct: o, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: d, shouldShowPromotionalExperience: f } = e,
            p = (0, L.ed)('CollectiblesCollectedModal'),
            h = (0, M.k)(n),
            m = (0, M.k)(o),
            g = null != o,
            E = (0, y.Z)(),
            b = null == E || null == (t = E.giftPurchaseConfirmation) ? void 0 : t.rewardCollectedText(),
            { handleUseNow: v, isApplying: O } = (0, x.W)({
                product: n,
                onSuccess: a,
                onError: a
            }),
            { firstAvatarDecoration: I, firstProfileEffect: S } = (0, k.R)(n),
            N = (0, w.x6)(n) ? null != I && null != S : null != I || null != S || n.type === u.Z.NAMEPLATE,
            C = i.useMemo(
                () =>
                    null != l
                        ? l
                        : Q.Vt.ORB_PROFILE_BADGE === n.skuId
                          ? ee.NW.string($.Z.nvaTQk)
                          : g
                            ? ee.NW.format(new Date() < Q.a$ ? ee.t.BhGU09 : ee.t.Jfv5Qk, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : p && !f
                              ? ee.NW.string(ee.t['1xr2SU'])
                              : ee.NW.format(ee.t.YNaxMj, { itemName: h }),
                [l, n.skuId, g, p, f, h, m]
            ),
            R = i.useMemo(
                () =>
                    null != d
                        ? d
                        : Q.Vt.ORB_PROFILE_BADGE === n.skuId
                          ? ee.NW.string($.Z.UnPGio)
                          : g
                            ? ee.NW.format(new Date() < Q.a$ ? ee.t['1jBC0t'] : ee.t.qSrp39, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : (0, c.EQ)(null == n ? void 0 : n.type)
                                  .with(u.Z.BUNDLE, () => ee.NW.string(ee.t.zJPoLy))
                                  .with(u.Z.PROFILE_EFFECT, () => ee.NW.string(ee.t.f9M1YG))
                                  .with(u.Z.NAMEPLATE, () => ee.NW.string(ee.t.lvwvIi))
                                  .otherwise(() => (f && null != b ? b : ee.NW.string(ee.t['44b50t']))),
                [d, n.skuId, null == n ? void 0 : n.type, g, h, m, f, b]
            ),
            P = i.useMemo(
                () =>
                    Q.Vt.ORB_PROFILE_BADGE === n.skuId
                        ? (0, r.jsxs)('div', {
                              className: et.buttonRows,
                              children: [
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.BRAND,
                                      onClick: () => {
                                          a(), A.S.dispatch(X.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, { pendingBadges: [(0, Z.X2)()] });
                                      },
                                      children: ee.NW.string($.Z.yfwZu7)
                                  }),
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.PRIMARY,
                                      onClick: () => {
                                          a(), (0, T.navigateToQuestHome)();
                                      },
                                      children: ee.NW.string(ee.t['H57f4+'])
                                  })
                              ]
                          })
                        : null,
                [a, n.skuId]
            );
        return (0, r.jsxs)('div', {
            className: et.collectedInfoContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: et.collectedTextContainer,
                    children: [
                        (0, r.jsx)(_.X6q, {
                            variant: 'heading-lg/bold',
                            children: C
                        }),
                        (0, r.jsx)(_.Text, {
                            variant: 'text-sm/normal',
                            children: R
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: et.buttons,
                    children: [
                        g
                            ? (0, r.jsx)(ef, {
                                  onClose: a,
                                  product: o,
                                  analyticsLocations: s
                              })
                            : null != P
                              ? P
                              : (0, r.jsx)(e_, {
                                    product: n,
                                    onClose: a,
                                    isPrimary: N,
                                    analyticsLocations: s
                                }),
                        N
                            ? (0, r.jsx)(_.zxk, {
                                  onClick: v,
                                  submitting: O,
                                  children: ee.NW.string(ee.t.MAS7uL)
                              })
                            : null
                    ]
                })
            ]
        });
    },
    ef = (e) => {
        let { onClose: t, product: n, analyticsLocations: o } = e,
            a = (0, L.hv)('CollectiblesShopGiftButton'),
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, b.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: J.Wt.SHOP_PAGE,
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
            innerClassName: et.buyButton,
            children: [
                (0, r.jsx)(_.OgN, {
                    color: _.TVs.colors.WHITE,
                    size: 'sm'
                }),
                ee.NW.string(ee.t.ouo4FB)
            ]
        });
    },
    e_ = (e) => {
        let { product: t, onClose: n, isPrimary: o, analyticsLocations: a, text: l } = e,
            c = (0, v.Z)({ analyticsLocations: a }),
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
            children: null != l ? l : ee.NW.string(ee.t['2p2aY2'])
        });
    },
    ep = (e) => {
        let { transitionState: t, product: n, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: c, shouldShowPromotionalExperience: u, itemConsumed: d, purchaseType: p = Q.o8.FIAT } = e,
            h = (0, f.e7)([R.Z], () => R.Z.purchases),
            m = (0, P.o)(n, h),
            g = (0, K.W)(n, m),
            E = i.useRef(new o.qA()),
            [b, y] = i.useState(null),
            v = (0, q.UY)({
                purchaseType: p,
                skuId: g.skuId
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.O_, {
                    ref: y,
                    className: et.confettiCanvas,
                    environment: E.current
                }),
                (0, r.jsx)(F.i, { options: v }),
                (0, r.jsx)(_.Y0X, {
                    hideShadow: !0,
                    transitionState: t,
                    size: _.CgR.DYNAMIC,
                    className: et.modalRoot,
                    children: (0, r.jsx)(_.hzk, {
                        className: et.modalContent,
                        scrollbarType: 'none',
                        children: (0, r.jsx)(eu, {
                            product: g,
                            onClose: a,
                            confettiCanvas: b,
                            hideConfetti: null != v,
                            analyticsLocations: s,
                            overrideTitle: l,
                            overrideDescription: c,
                            selectedVariantIndex: m,
                            shouldShowPromotionalExperience: u,
                            itemConsumed: d,
                            purchaseType: p
                        })
                    })
                })
            ]
        });
    };
