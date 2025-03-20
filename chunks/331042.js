n.d(t, {
    default: () => e_,
    e: () => ec
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
    V = n(508925),
    Z = n(616066),
    H = n(216541),
    W = n(22267),
    Y = n(58201),
    K = n(794324),
    z = n(302800),
    q = n(215023),
    Q = n(981631),
    X = n(474936),
    J = n(802460),
    $ = n(388032),
    ee = n(567863);
function et(e, t, n) {
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
function en(e) {
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
                et(e, t, n[t]);
            });
    }
    return e;
}
function er(e, t) {
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
function ei(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : er(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eo = 880,
    ea = (e) => {
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
                    className: ee.profileEffectShopPreview,
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
                                  className: ee.avatarDecorationPairOne,
                                  children: (0, r.jsx)(Z.R, {
                                      item: i,
                                      user: a,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: ee.avatarDecorationPairTwo,
                                  children: (0, r.jsx)(Z.R, {
                                      item: o,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: ee.avatarDecoration,
                          children: (0, r.jsx)(Z.R, {
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
                    className: ee.nameplate,
                    children: (0, r.jsx)(W.Z, {
                        nameplate: i,
                        user: a,
                        isHighlighted: !0
                    })
                })
            )
            .with(u.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: ee.bundlePreview,
                    children: (0, r.jsx)(H.d, {
                        product: t,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: ee.bundleProfileEffectCard
                    })
                })
            )
            .with(u.Z.EXTERNAL_SKU, () =>
                (0, r.jsx)('div', {
                    className: ee.avatarDecoration,
                    children: (0, r.jsx)(V.b, { product: t })
                })
            )
            .otherwise(() => null);
    },
    es = (e) => {
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
                    className: ee.easterEggContainer,
                    style: s,
                    children: (0, r.jsx)(ea, en({}, e))
                }),
                (0, r.jsx)(l.animated.div, {
                    className: ee.easterEggContainer,
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
    el = (e) => {
        let t = (0, z.v)(e.product.categorySkuId);
        return null != t ? (0, r.jsx)(es, ei(en({}, e), { displayOptions: t })) : (0, r.jsx)(ea, en({}, e));
    },
    ec = (e) => {
        let { product: t, onClose: n, confettiTarget: o, confettiCanvas: a, hideConfetti: s = !1, analyticsLocations: l, overrideTitle: c, overrideDescription: p, selectedVariantIndex: E, shouldShowPromotionalExperience: b, itemConsumed: v = !0 } = e,
            y = (0, L.o)('CollectiblesCollectedModal'),
            O = (0, Y.W)(t, E),
            I = (0, f.e7)([A.default], () => {
                var e, t;
                return null !== (t = null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t;
            }),
            T = i.useMemo(() => {
                if (!y) return;
                let e = O.type === u.Z.AVATAR_DECORATION ? (0, z.R9)(O.skuId, I) : null;
                return null != e ? R.Z.getProduct(e) : void 0;
            }, [y, O.skuId, O.type, I]),
            { confettiColors: N } = (0, U.Z)(O.styles),
            C = (0, f.e7)([h.Z], () => h.Z.useReducedMotion),
            P = i.useRef(null),
            { analyticsLocations: w } = (0, g.ZP)([...l, m.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { collectedModalBackground: D } = (0, K.Ac)(O);
        function x() {
            if (O.skuId === d.a.PREMIUM_TIER_2_3_DAY) {
                let e = $.NW.formatToPlainString($.t.fYmir6, { days: 3 });
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
                        className: ee.bannerContainer,
                        children: [
                            b
                                ? (0, r.jsx)('div', { className: ee.promotionalBanner })
                                : (0, r.jsx)(B.Z, {
                                      asset: D,
                                      size: (0, F.ML)(eo),
                                      className: ee.decorationBanner,
                                      categoryBannerOverride: (0, q.ZS)(O.categorySkuId)
                                  }),
                            (0, r.jsx)(el, {
                                product: O,
                                pairedProduct: T,
                                reducedMotion: C
                            })
                        ]
                    }),
                    (0, r.jsx)(eu, {
                        product: O,
                        pairedProduct: T,
                        onClose: n,
                        analyticsLocations: w,
                        overrideTitle: c,
                        overrideDescription: p,
                        selectedVariantIndex: E,
                        shouldShowPromotionalExperience: b
                    }),
                    (0, r.jsx)(_.olH, {
                        onClick: n,
                        className: ee.modalCloseButton,
                        withCircleBackground: !0
                    })
                ]
            });
        }
        return (0, r.jsxs)(g.Gt, {
            value: w,
            children: [
                (0, r.jsx)('div', {
                    className: ee.modalInner,
                    ref: P,
                    children: x()
                }),
                !s &&
                    !C &&
                    (0, r.jsx)(G.Z, {
                        confettiTarget: null != o ? o : P.current,
                        confettiCanvas: a,
                        sprites: (0, F.vK)(O.categorySkuId),
                        colors: null == N ? void 0 : N.map((e) => e.toHexString())
                    })
            ]
        });
    },
    eu = (e) => {
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
                        : q.xJ === n.skuId
                          ? $.NW.string(J.Z.nvaTQk)
                          : g
                            ? $.NW.format(new Date() < q.a$ ? $.t.BhGU09 : $.t.Jfv5Qk, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : p && !f
                              ? $.NW.string($.t['1xr2SU'])
                              : $.NW.format($.t.YNaxMj, { itemName: h }),
                [l, n.skuId, g, p, f, h, m]
            ),
            P = i.useMemo(
                () =>
                    null != d
                        ? d
                        : q.xJ === n.skuId
                          ? $.NW.string(J.Z.UnPGio)
                          : g
                            ? $.NW.format(new Date() < q.a$ ? $.t['1jBC0t'] : $.t.qSrp39, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : (0, c.EQ)(null == n ? void 0 : n.type)
                                  .with(u.Z.BUNDLE, () => $.NW.string($.t.zJPoLy))
                                  .with(u.Z.PROFILE_EFFECT, () => $.NW.string($.t.f9M1YG))
                                  .with(u.Z.NAMEPLATE, () => $.NW.string($.t.lvwvIi))
                                  .otherwise(() => (f && null != b ? b : $.NW.string($.t['44b50t']))),
                [d, n.skuId, null == n ? void 0 : n.type, g, h, m, f, b]
            ),
            w = i.useMemo(
                () =>
                    q.xJ === n.skuId
                        ? (0, r.jsxs)('div', {
                              className: ee.buttonRows,
                              children: [
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.BRAND,
                                      onClick: () => {
                                          a(), C.S.dispatch(Q.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, { highlightBadge: N.l.ORB_PROFILE_BADGE });
                                      },
                                      children: $.NW.string(J.Z.yfwZu7)
                                  }),
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.PRIMARY,
                                      onClick: () => {
                                          (0, T.navigateToQuestHome)();
                                      },
                                      children: $.NW.string($.t['H57f4+'])
                                  })
                              ]
                          })
                        : null,
                [a, n.skuId]
            );
        return (0, r.jsxs)('div', {
            className: ee.collectedInfoContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: ee.collectedTextContainer,
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
                    className: ee.buttons,
                    children: [
                        g
                            ? (0, r.jsx)(ed, {
                                  onClose: a,
                                  product: o,
                                  analyticsLocations: s
                              })
                            : null != w
                              ? w
                              : (0, r.jsx)(ef, {
                                    product: n,
                                    onClose: a,
                                    isPrimary: A,
                                    analyticsLocations: s
                                }),
                        A
                            ? (0, r.jsx)(_.zxk, {
                                  onClick: y,
                                  submitting: O,
                                  children: $.NW.string($.t.MAS7uL)
                              })
                            : null
                    ]
                })
            ]
        });
    },
    ed = (e) => {
        let { onClose: t, product: n, analyticsLocations: o } = e,
            a = (0, x.hv)('CollectiblesShopGiftButton'),
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, b.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: X.Wt.SHOP_PAGE,
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
            innerClassName: ee.buyButton,
            children: [
                (0, r.jsx)(_.OgN, {
                    color: _.TVs.colors.WHITE,
                    size: 'sm'
                }),
                $.NW.string($.t.ouo4FB)
            ]
        });
    },
    ef = (e) => {
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
            children: null != l ? l : $.NW.string($.t['2p2aY2'])
        });
    },
    e_ = (e) => {
        let { transitionState: t, product: n, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: c, shouldShowPromotionalExperience: u, itemConsumed: d } = e,
            p = (0, f.e7)([P.Z], () => P.Z.purchases),
            h = (0, w.o)(n, p),
            m = (0, Y.W)(n, h),
            g = i.useRef(new o.qA()),
            [E, b] = i.useState(null),
            v = (0, z.UY)(m.skuId);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.O_, {
                    ref: b,
                    className: ee.confettiCanvas,
                    environment: g.current
                }),
                (0, r.jsxs)(_.Y0X, {
                    hideShadow: !0,
                    transitionState: t,
                    size: _.CgR.DYNAMIC,
                    className: ee.modalRoot,
                    children: [
                        null != v &&
                            (0, r.jsx)('img', {
                                src: v.imageSrc,
                                className: ee.customConfetti,
                                style: v.style,
                                alt: '',
                                'aria-hidden': 'true'
                            }),
                        (0, r.jsx)(_.hzk, {
                            className: ee.modalContent,
                            scrollbarType: 'none',
                            children: (0, r.jsx)(ec, {
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
