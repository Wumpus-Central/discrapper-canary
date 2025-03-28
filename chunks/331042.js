n.d(t, {
    default: () => eh,
    e: () => ed
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
    N = n(317257),
    A = n(594174),
    C = n(585483),
    R = n(597688),
    P = n(1870),
    w = n(429368),
    D = n(884697),
    L = n(587792),
    x = n(228624),
    M = n(635552),
    k = n(905357),
    j = n(328456),
    U = n(624377),
    G = n(530618),
    B = n(141011),
    F = n(372654),
    V = n(197831),
    Z = n(508925),
    H = n(755419),
    W = n(616066),
    Y = n(216541),
    K = n(22267),
    z = n(58201),
    q = n(794324),
    Q = n(302800),
    X = n(215023),
    J = n(981631),
    $ = n(474936),
    ee = n(320988),
    et = n(388032),
    en = n(567863);
function er(e, t, n) {
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
function ei(e) {
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
                er(e, t, n[t]);
            });
    }
    return e;
}
function eo(e, t) {
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
function ea(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eo(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let es = 880,
    el = (e) => {
        let { product: t, pairedProduct: n } = e,
            [i] = t.items,
            o = null == n ? void 0 : n.items[0],
            a = (0, f.e7)([A.default], () => {
                let e = A.default.getCurrentUser();
                return s()(null != e, 'User cannot be undefined'), e;
            });
        return (0, c.EQ)(t.type)
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: en.profileEffectShopPreview,
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
                                  className: en.avatarDecorationPairOne,
                                  children: (0, r.jsx)(W.R, {
                                      item: i,
                                      user: a,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: en.avatarDecorationPairTwo,
                                  children: (0, r.jsx)(W.R, {
                                      item: o,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: en.avatarDecoration,
                          children: (0, r.jsx)(W.R, {
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
                    className: en.nameplate,
                    children: (0, r.jsx)(K.Z, {
                        nameplate: i,
                        user: a,
                        isHighlighted: !0
                    })
                })
            )
            .with(u.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: en.bundlePreview,
                    children: (0, r.jsx)(Y.d, {
                        product: t,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: en.bundleProfileEffectCard
                    })
                })
            )
            .with(u.Z.EXTERNAL_SKU, () =>
                (0, r.jsx)('div', {
                    className: en.avatarDecoration,
                    children: (0, r.jsx)(Z.b, { product: t })
                })
            )
            .otherwise(() => null);
    },
    ec = (e) => {
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
                    className: en.easterEggContainer,
                    style: s,
                    children: (0, r.jsx)(el, ei({}, e))
                }),
                (0, r.jsx)(l.animated.div, {
                    className: en.easterEggContainer,
                    style: t ? u : c,
                    children: (0, r.jsx)('img', {
                        src: n.src,
                        style: n.style,
                        alt: '',
                        'aria-hidden': 'true'
                    })
                })
            ]
        });
    },
    eu = (e) => {
        let t = (0, Q.v)(e.product.categorySkuId);
        return null != t ? (0, r.jsx)(ec, ea(ei({}, e), { displayOptions: t })) : (0, r.jsx)(el, ei({}, e));
    },
    ed = (e) => {
        let { product: t, onClose: n, confettiTarget: o, confettiCanvas: a, hideConfetti: s = !1, analyticsLocations: l, overrideTitle: c, overrideDescription: p, selectedVariantIndex: E, shouldShowPromotionalExperience: b, itemConsumed: v = !0, purchaseType: y = X.o8.FIAT } = e,
            O = (0, L.o)('CollectiblesCollectedModal'),
            I = (0, z.W)(t, E),
            T = (0, f.e7)([A.default], () => {
                var e, t;
                return null !== (t = null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t;
            }),
            N = i.useMemo(() => {
                if (!O) return;
                let e = I.type === u.Z.AVATAR_DECORATION ? (0, Q.R9)(I.skuId, T) : null;
                return null != e ? R.Z.getProduct(e) : void 0;
            }, [O, I.skuId, I.type, T]),
            { confettiColors: C } = (0, U.Z)(I.styles),
            P = (0, f.e7)([h.Z], () => h.Z.useReducedMotion),
            w = i.useRef(null),
            { analyticsLocations: D } = (0, g.ZP)([...l, m.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { collectedModalBackground: x } = (0, q.Ac)(I);
        function M() {
            if (I.skuId === d.a.PREMIUM_TIER_2_3_DAY) {
                let e = et.NW.formatToPlainString(et.t.fYmir6, { days: 3 });
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
                        className: en.bannerContainer,
                        children: [
                            b
                                ? (0, r.jsx)('div', { className: en.promotionalBanner })
                                : (0, r.jsx)(B.Z, {
                                      asset: x,
                                      size: (0, F.ML)(es),
                                      className: en.decorationBanner,
                                      categoryBannerOverride: (0, X.ZS)(I.categorySkuId)
                                  }),
                            (0, r.jsx)(eu, {
                                product: I,
                                pairedProduct: N,
                                reducedMotion: P
                            })
                        ]
                    }),
                    (0, r.jsx)(ef, {
                        product: I,
                        pairedProduct: N,
                        onClose: n,
                        analyticsLocations: D,
                        overrideTitle: c,
                        overrideDescription: p,
                        selectedVariantIndex: E,
                        shouldShowPromotionalExperience: b,
                        purchaseType: y
                    }),
                    (0, r.jsx)(_.olH, {
                        onClick: n,
                        className: en.modalCloseButton,
                        withCircleBackground: !0
                    })
                ]
            });
        }
        return (0, r.jsxs)(g.Gt, {
            value: D,
            children: [
                (0, r.jsx)('div', {
                    className: en.modalInner,
                    ref: w,
                    children: M()
                }),
                !s &&
                    !P &&
                    (0, r.jsx)(G.Z, {
                        confettiTarget: null != o ? o : w.current,
                        confettiCanvas: a,
                        sprites: (0, F.vK)(I.categorySkuId),
                        colors: null == C ? void 0 : C.map((e) => e.toHexString())
                    })
            ]
        });
    },
    ef = (e) => {
        var t;
        let { product: n, pairedProduct: o, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: d, shouldShowPromotionalExperience: f } = e,
            p = (0, x.ed)('CollectiblesCollectedModal'),
            h = (0, k.k)(n),
            m = (0, k.k)(o),
            g = null != o,
            E = (0, v.Z)(),
            b = null == E ? void 0 : null === (t = E.giftPurchaseConfirmation) || void 0 === t ? void 0 : t.rewardCollectedText(),
            { handleUseNow: y, isApplying: O } = (0, M.W)({
                product: n,
                onSuccess: a,
                onError: a
            }),
            { firstAvatarDecoration: I, firstProfileEffect: S } = (0, j.R)(n),
            A = (0, D.x6)(n) ? null != I && null != S : null != I || null != S || n.type === u.Z.NAMEPLATE,
            R = i.useMemo(
                () =>
                    null != l
                        ? l
                        : X.xJ === n.skuId
                          ? et.NW.string(ee.Z.nvaTQk)
                          : g
                            ? et.NW.format(new Date() < X.a$ ? et.t.BhGU09 : et.t.Jfv5Qk, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : p && !f
                              ? et.NW.string(et.t['1xr2SU'])
                              : et.NW.format(et.t.YNaxMj, { itemName: h }),
                [l, n.skuId, g, p, f, h, m]
            ),
            P = i.useMemo(
                () =>
                    null != d
                        ? d
                        : X.xJ === n.skuId
                          ? et.NW.string(ee.Z.UnPGio)
                          : g
                            ? et.NW.format(new Date() < X.a$ ? et.t['1jBC0t'] : et.t.qSrp39, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : (0, c.EQ)(null == n ? void 0 : n.type)
                                  .with(u.Z.BUNDLE, () => et.NW.string(et.t.zJPoLy))
                                  .with(u.Z.PROFILE_EFFECT, () => et.NW.string(et.t.f9M1YG))
                                  .with(u.Z.NAMEPLATE, () => et.NW.string(et.t.lvwvIi))
                                  .otherwise(() => (f && null != b ? b : et.NW.string(et.t['44b50t']))),
                [d, n.skuId, null == n ? void 0 : n.type, g, h, m, f, b]
            ),
            w = i.useMemo(
                () =>
                    X.xJ === n.skuId
                        ? (0, r.jsxs)('div', {
                              className: en.buttonRows,
                              children: [
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.BRAND,
                                      onClick: () => {
                                          a(),
                                              C.S.dispatch(J.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {
                                                  highlightBadge: N.l.ORB_PROFILE_BADGE,
                                                  pendingBadges: [(0, H.X2)()]
                                              });
                                      },
                                      children: et.NW.string(ee.Z.yfwZu7)
                                  }),
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.PRIMARY,
                                      onClick: () => {
                                          a(), (0, T.navigateToQuestHome)();
                                      },
                                      children: et.NW.string(et.t['H57f4+'])
                                  })
                              ]
                          })
                        : null,
                [a, n.skuId]
            );
        return (0, r.jsxs)('div', {
            className: en.collectedInfoContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: en.collectedTextContainer,
                    children: [
                        (0, r.jsx)(_.X6q, {
                            variant: 'heading-lg/bold',
                            children: R
                        }),
                        (0, r.jsx)(_.Text, {
                            variant: 'text-sm/normal',
                            children: P
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: en.buttons,
                    children: [
                        g
                            ? (0, r.jsx)(e_, {
                                  onClose: a,
                                  product: o,
                                  analyticsLocations: s
                              })
                            : null != w
                              ? w
                              : (0, r.jsx)(ep, {
                                    product: n,
                                    onClose: a,
                                    isPrimary: A,
                                    analyticsLocations: s
                                }),
                        A
                            ? (0, r.jsx)(_.zxk, {
                                  onClick: y,
                                  submitting: O,
                                  children: et.NW.string(et.t.MAS7uL)
                              })
                            : null
                    ]
                })
            ]
        });
    },
    e_ = (e) => {
        let { onClose: t, product: n, analyticsLocations: o } = e,
            a = (0, x.hv)('CollectiblesShopGiftButton'),
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, b.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: $.Wt.SHOP_PAGE,
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
            innerClassName: en.buyButton,
            children: [
                (0, r.jsx)(_.OgN, {
                    color: _.TVs.colors.WHITE,
                    size: 'sm'
                }),
                et.NW.string(et.t.ouo4FB)
            ]
        });
    },
    ep = (e) => {
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
            children: null != l ? l : et.NW.string(et.t['2p2aY2'])
        });
    },
    eh = (e) => {
        let { transitionState: t, product: n, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: c, shouldShowPromotionalExperience: u, itemConsumed: d, purchaseType: p = X.o8.FIAT } = e,
            h = (0, f.e7)([P.Z], () => P.Z.purchases),
            m = (0, w.o)(n, h),
            g = (0, z.W)(n, m),
            E = i.useRef(new o.qA()),
            [b, v] = i.useState(null),
            y = (0, Q.UY)({
                purchaseType: p,
                skuId: g.skuId
            });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.O_, {
                    ref: v,
                    className: en.confettiCanvas,
                    environment: E.current
                }),
                (0, r.jsx)(V.i, { options: y }),
                (0, r.jsx)(_.Y0X, {
                    hideShadow: !0,
                    transitionState: t,
                    size: _.CgR.DYNAMIC,
                    className: en.modalRoot,
                    children: (0, r.jsx)(_.hzk, {
                        className: en.modalContent,
                        scrollbarType: 'none',
                        children: (0, r.jsx)(ed, {
                            product: g,
                            onClose: a,
                            confettiCanvas: b,
                            hideConfetti: null != y,
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
