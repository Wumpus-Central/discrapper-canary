n.d(t, {
    default: () => eE,
    e: () => e_
}),
    n(388685),
    n(314940);
var r = n(200651),
    i = n(192379),
    a = n(995899),
    o = n(512722),
    s = n.n(o),
    l = n(200100),
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
    N = n(350327),
    A = n(507808),
    C = n(594174),
    R = n(626135),
    P = n(585483),
    w = n(597688),
    D = n(1870),
    L = n(429368),
    x = n(884697),
    M = n(587792),
    k = n(228624),
    j = n(635552),
    U = n(905357),
    G = n(328456),
    B = n(624377),
    F = n(530618),
    V = n(141011),
    Z = n(372654),
    H = n(197831),
    W = n(508925),
    Y = n(755419),
    K = n(616066),
    z = n(216541),
    q = n(22267),
    Q = n(58201),
    X = n(794324),
    J = n(302800),
    $ = n(215023),
    ee = n(981631),
    et = n(474936),
    en = n(694232),
    er = n(388032),
    ei = n(854402);
function ea(e, t, n) {
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
function eo(e) {
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
                ea(e, t, n[t]);
            });
    }
    return e;
}
function es(e, t) {
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
function el(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : es(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ec = 880,
    eu = (e) => {
        let { product: t, pairedProduct: n } = e,
            [i] = t.items,
            a = null == n ? void 0 : n.items[0],
            o = (0, f.e7)([C.default], () => {
                let e = C.default.getCurrentUser();
                return s()(null != e, 'User cannot be undefined'), e;
            });
        return (0, c.EQ)(t.type)
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: ei.profileEffectShopPreview,
                    children: (0, r.jsx)(O.Z, {
                        forCollectedModal: !0,
                        profileEffectId: i.id
                    })
                })
            )
            .with(u.Z.AVATAR_DECORATION, () =>
                (s()(i.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'), null != a && a.type === u.Z.AVATAR_DECORATION)
                    ? (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)('div', {
                                  className: ei.avatarDecorationPairOne,
                                  children: (0, r.jsx)(K.R, {
                                      item: i,
                                      user: o,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: ei.avatarDecorationPairTwo,
                                  children: (0, r.jsx)(K.R, {
                                      item: a,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: ei.avatarDecoration,
                          children: (0, r.jsx)(K.R, {
                              item: i,
                              user: o,
                              avatarSize: _.EFr.SIZE_120,
                              isPurchased: !1,
                              isHighlighted: !0
                          })
                      })
            )
            .with(u.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    className: ei.nameplate,
                    children: (0, r.jsx)(q.Z, {
                        nameplate: i,
                        user: o,
                        isHighlighted: !0
                    })
                })
            )
            .with(u.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: ei.bundlePreview,
                    children: (0, r.jsx)(z.d, {
                        product: t,
                        user: o,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: ei.bundleProfileEffectCard
                    })
                })
            )
            .with(u.Z.EXTERNAL_SKU, () =>
                (0, r.jsx)('div', {
                    className: ei.avatarDecoration,
                    children: (0, r.jsx)(W.b, { product: t })
                })
            )
            .otherwise(() => null);
    },
    ed = (e) => {
        let { reducedMotion: t, displayOptions: n } = e,
            [a, o] = i.useState(!1),
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
                onRest: () => setTimeout(() => o(!0), 100)
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
                reverse: a
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
                    className: ei.easterEggContainer,
                    style: s,
                    children: (0, r.jsx)(eu, eo({}, e))
                }),
                (0, r.jsx)(l.animated.div, {
                    className: ei.easterEggContainer,
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
    ef = (e) => {
        let t = (0, J.v)(e.product.categorySkuId);
        return null != t ? (0, r.jsx)(ed, el(eo({}, e), { displayOptions: t })) : (0, r.jsx)(eu, eo({}, e));
    },
    e_ = (e) => {
        let { product: t, onClose: n, confettiTarget: a, confettiCanvas: o, hideConfetti: s = !1, analyticsLocations: l, overrideTitle: c, overrideDescription: p, selectedVariantIndex: E, shouldShowPromotionalExperience: b, itemConsumed: y = !0, purchaseType: v = $.o8.FIAT } = e,
            O = (0, M.o)('CollectiblesCollectedModal'),
            I = (0, Q.W)(t, E),
            T = (0, f.e7)([C.default], () => {
                var e, t;
                return null != (t = null == (e = C.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
            }),
            N = i.useMemo(() => {
                if (!O) return;
                let e = I.type === u.Z.AVATAR_DECORATION ? (0, J.R9)(I.skuId, T) : null;
                return null != e ? w.Z.getProduct(e) : void 0;
            }, [O, I.skuId, I.type, T]),
            { confettiColors: A } = (0, B.Z)(I.styles),
            R = (0, f.e7)([h.Z], () => h.Z.useReducedMotion),
            P = i.useRef(null),
            { analyticsLocations: D } = (0, g.ZP)([...l, m.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { collectedModalBackground: L } = (0, X.Ac)(I);
        function x() {
            if (I.skuId === d.a.PREMIUM_TIER_2_3_DAY) {
                let e = er.NW.formatToPlainString(er.t['Cz1G9/'], { days: 3 });
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
                        className: ei.bannerContainer,
                        children: [
                            b
                                ? (0, r.jsx)('div', { className: ei.promotionalBanner })
                                : (0, r.jsx)(V.Z, {
                                      asset: L,
                                      size: (0, Z.ML)(ec),
                                      className: ei.decorationBanner,
                                      categoryBannerOverride: (0, $.ZS)(I.categorySkuId)
                                  }),
                            (0, r.jsx)(ef, {
                                product: I,
                                pairedProduct: N,
                                reducedMotion: R
                            })
                        ]
                    }),
                    (0, r.jsx)(eh, {
                        product: I,
                        pairedProduct: N,
                        onClose: n,
                        analyticsLocations: D,
                        overrideTitle: c,
                        overrideDescription: p,
                        selectedVariantIndex: E,
                        shouldShowPromotionalExperience: b,
                        purchaseType: v
                    }),
                    (0, r.jsx)(_.olH, {
                        onClick: n,
                        className: ei.modalCloseButton,
                        withCircleBackground: !0
                    })
                ]
            });
        }
        return (0, r.jsxs)(g.Gt, {
            value: D,
            children: [
                (0, r.jsx)('div', {
                    className: ei.modalInner,
                    ref: P,
                    children: x()
                }),
                !s &&
                    !R &&
                    (0, r.jsx)(F.Z, {
                        confettiTarget: null != a ? a : P.current,
                        confettiCanvas: o,
                        sprites: (0, Z.vK)(I.categorySkuId),
                        colors: null == A ? void 0 : A.map((e) => e.toHexString())
                    })
            ]
        });
    },
    ep = 600,
    eh = (e) => {
        var t;
        let { product: n, pairedProduct: a, onClose: o, analyticsLocations: s, overrideTitle: l, overrideDescription: d, shouldShowPromotionalExperience: f } = e,
            p = (0, k.ed)('CollectiblesCollectedModal'),
            h = (0, U.k)(n),
            m = (0, U.k)(a),
            g = null != a,
            E = (0, y.Z)(),
            b = null == E || null == (t = E.giftPurchaseConfirmation) ? void 0 : t.rewardCollectedText(),
            { handleUseNow: v, isApplying: O } = (0, j.W)({
                product: n,
                onSuccess: o,
                onError: o
            }),
            { firstAvatarDecoration: I, firstProfileEffect: S } = (0, G.R)(n),
            C = (0, x.x6)(n) ? null != I && null != S : null != I || null != S || n.type === u.Z.NAMEPLATE;
        i.useEffect(() => {
            $.Vt.ORB_PROFILE_BADGE === n.skuId && (0, N.Ls)([(0, Y.X2)()], ep);
        }, [n.skuId]);
        let R = i.useMemo(
                () =>
                    null != l
                        ? l
                        : $.Vt.ORB_PROFILE_BADGE === n.skuId
                          ? er.NW.string(en.Z.nvaTQk)
                          : g
                            ? er.NW.format(new Date() < $.a$ ? er.t.BhGU09 : er.t.Jfv5Qk, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : p && !f
                              ? er.NW.string(er.t['1xr2SU'])
                              : er.NW.format(er.t.YNaxMj, { itemName: h }),
                [l, n.skuId, g, p, f, h, m]
            ),
            w = i.useMemo(
                () =>
                    null != d
                        ? d
                        : $.Vt.ORB_PROFILE_BADGE === n.skuId
                          ? er.NW.string(en.Z.UnPGio)
                          : g
                            ? er.NW.format(new Date() < $.a$ ? er.t['1jBC0t'] : er.t.qSrp39, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : (0, c.EQ)(null == n ? void 0 : n.type)
                                  .with(u.Z.BUNDLE, () => er.NW.string(er.t.zJPoLy))
                                  .with(u.Z.PROFILE_EFFECT, () => er.NW.string(er.t.f9M1YG))
                                  .with(u.Z.NAMEPLATE, () => er.NW.string(er.t.lvwvIi))
                                  .otherwise(() => (f && null != b ? b : er.NW.string(er.t['44b50t']))),
                [d, n.skuId, null == n ? void 0 : n.type, g, h, m, f, b]
            ),
            D = i.useMemo(
                () =>
                    $.Vt.ORB_PROFILE_BADGE === n.skuId
                        ? (0, r.jsxs)('div', {
                              className: ei.buttonRows,
                              children: [
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.BRAND,
                                      onClick: () => {
                                          o(), P.S.dispatch(ee.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                                      },
                                      children: er.NW.string(en.Z.yfwZu7)
                                  }),
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.PRIMARY,
                                      onClick: () => {
                                          o(),
                                              (0, A.Y)({
                                                  pageType: ee.ZY5.SHOP_ORBS_TAB,
                                                  sectionType: ee.jXE.ORBS_BADGE_REDEMPTION_MODAL,
                                                  ctaObject: ee.qAy.CTA_TO_QUEST_HOME
                                              }),
                                              (0, T.navigateToQuestHome)();
                                      },
                                      children: er.NW.string(er.t['H57f4+'])
                                  })
                              ]
                          })
                        : null,
                [o, n.skuId]
            );
        return (0, r.jsxs)('div', {
            className: ei.collectedInfoContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: ei.collectedTextContainer,
                    children: [
                        (0, r.jsx)(_.X6q, {
                            variant: 'heading-lg/bold',
                            children: R
                        }),
                        (0, r.jsx)(_.Text, {
                            variant: 'text-sm/normal',
                            children: w
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: ei.buttons,
                    children: [
                        g
                            ? (0, r.jsx)(em, {
                                  onClose: o,
                                  product: a,
                                  analyticsLocations: s
                              })
                            : null != D
                              ? D
                              : (0, r.jsx)(eg, {
                                    product: n,
                                    onClose: o,
                                    isPrimary: C,
                                    analyticsLocations: s
                                }),
                        C
                            ? (0, r.jsx)(_.zxk, {
                                  onClick: v,
                                  submitting: O,
                                  children: er.NW.string(er.t.MAS7uL)
                              })
                            : null
                    ]
                })
            ]
        });
    },
    em = (e) => {
        let { onClose: t, product: n, analyticsLocations: a } = e,
            o = (0, k.hv)('CollectiblesShopGiftButton'),
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, b.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: et.Wt.SHOP_PAGE,
                            analyticsLocations: a,
                            variantsReturnStyle: o,
                            onClose: (e) => {
                                e && t();
                            }
                        });
                },
                [n.skuId, a, o, t]
            );
        return (0, r.jsxs)(_.zxk, {
            color: _.Ttl.PRIMARY,
            onClick: s,
            innerClassName: ei.buyButton,
            children: [
                (0, r.jsx)(_.OgN, {
                    color: _.TVs.colors.WHITE,
                    size: 'sm'
                }),
                er.NW.string(er.t.ouo4FB)
            ]
        });
    },
    eg = (e) => {
        let { product: t, onClose: n, isPrimary: a, analyticsLocations: o, text: l } = e,
            c = (0, v.Z)({ analyticsLocations: o }),
            [d] = t.items,
            f = i.useCallback(() => {
                if ((n(), (0, p.xf)(), c(), t.type === u.Z.AVATAR_DECORATION)) {
                    s()(d.type === u.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, E.ps)({
                            initialSelectedDecoration: d,
                            analyticsLocations: o
                        });
                    return;
                }
                t.type === u.Z.PROFILE_EFFECT &&
                    (0, I.H)({
                        initialSelectedEffectId: d.id,
                        analyticsLocations: o
                    });
            }, [n, c, t.type, d, o]);
        return (0, r.jsx)(_.zxk, {
            color: a ? _.Ttl.PRIMARY : _.Ttl.BRAND,
            onClick: f,
            children: null != l ? l : er.NW.string(er.t['2p2aY2'])
        });
    },
    eE = (e) => {
        let { transitionState: t, product: n, onClose: o, analyticsLocations: s, overrideTitle: l, overrideDescription: c, shouldShowPromotionalExperience: u, itemConsumed: d, purchaseType: p = $.o8.FIAT } = e,
            h = (0, f.e7)([D.Z], () => D.Z.purchases),
            E = (0, L.o)(n, h),
            b = (0, Q.W)(n, E),
            y = i.useRef(new a.qA()),
            [v, O] = i.useState(null),
            I = (0, J.UY)({
                purchaseType: p,
                skuId: b.skuId
            }),
            { analyticsLocations: S } = (0, g.ZP)([...s, m.Z.COLLECTIBLES_COLLECTED_MODAL]),
            T = i.useMemo(() => (0, x.jm)(b.type, b.skuId), [b.type, b.skuId]);
        return (
            i.useEffect(() => {
                R.default.track(ee.rMx.OPEN_MODAL, {
                    type: ee.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: S,
                    sku_id: b.skuId,
                    product_type: T
                });
            }, [S, b.skuId, b.items, T]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.O_, {
                        ref: O,
                        className: ei.confettiCanvas,
                        environment: y.current
                    }),
                    (0, r.jsx)(H.i, { options: I }),
                    (0, r.jsx)(_.Y0X, {
                        hideShadow: !0,
                        transitionState: t,
                        size: _.CgR.DYNAMIC,
                        className: ei.modalRoot,
                        children: (0, r.jsx)(_.hzk, {
                            className: ei.modalContent,
                            scrollbarType: 'none',
                            children: (0, r.jsx)(e_, {
                                product: b,
                                onClose: o,
                                confettiCanvas: v,
                                hideConfetti: null != I,
                                analyticsLocations: S,
                                overrideTitle: l,
                                overrideDescription: c,
                                selectedVariantIndex: E,
                                shouldShowPromotionalExperience: u,
                                itemConsumed: d,
                                purchaseType: p
                            })
                        })
                    })
                ]
            })
        );
    };
