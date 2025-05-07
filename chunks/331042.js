n.d(t, {
    default: () => ey,
    e: () => eh
}),
    n(388685),
    n(314940);
var r = n(255367),
    i = n(73800),
    o = n(505266),
    a = n(512722),
    s = n.n(a),
    l = n(683305),
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
    O = n(300284),
    v = n(876917),
    I = n(642619),
    S = n(824393),
    T = n(341907),
    A = n(350327),
    N = n(507808),
    C = n(82856),
    P = n(594174),
    R = n(626135),
    w = n(585483),
    D = n(597688),
    L = n(1870),
    x = n(429368),
    k = n(884697),
    M = n(587792),
    j = n(228624),
    U = n(635552),
    G = n(905357),
    B = n(328456),
    F = n(624377),
    V = n(530618),
    Z = n(141011),
    H = n(372654),
    Y = n(197831),
    W = n(508925),
    K = n(755419),
    z = n(616066),
    q = n(216541),
    Q = n(22267),
    X = n(58201),
    J = n(794324),
    $ = n(302800),
    ee = n(215023),
    et = n(981631),
    en = n(474936),
    er = n(694232),
    ei = n(388032),
    eo = n(854402);
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
function es(e) {
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
function el(e, t) {
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
function ec(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : el(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eu = 880,
    ed = (e) => (null != e ? ei.intl.format(ei.t['4kp0AA'], { itemName: e }) : null),
    ef = (e) => {
        let { product: t, pairedProduct: n } = e,
            [i] = t.items,
            o = null == n ? void 0 : n.items[0],
            a = (0, f.e7)([P.default], () => {
                let e = P.default.getCurrentUser();
                return s()(null != e, 'User cannot be undefined'), e;
            });
        return (0, c.EQ)(t.type)
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: eo.profileEffectShopPreview,
                    children: (0, r.jsx)(v.Z, {
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
                                  className: eo.avatarDecorationPairOne,
                                  children: (0, r.jsx)(z.R, {
                                      item: i,
                                      user: a,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: eo.avatarDecorationPairTwo,
                                  children: (0, r.jsx)(z.R, {
                                      item: o,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: eo.avatarDecoration,
                          children: (0, r.jsx)(z.R, {
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
                    className: eo.nameplate,
                    children: (0, r.jsx)(Q.Z, {
                        nameplate: i,
                        user: a,
                        isHighlighted: !0
                    })
                })
            )
            .with(u.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: eo.bundlePreview,
                    children: (0, r.jsx)(q.d, {
                        product: t,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: eo.bundleProfileEffectCard
                    })
                })
            )
            .with(u.Z.EXTERNAL_SKU, () =>
                (0, r.jsx)('div', {
                    className: eo.avatarDecoration,
                    children: (0, r.jsx)(W.b, { product: t })
                })
            )
            .otherwise(() => null);
    },
    e_ = (e) => {
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
                    className: eo.easterEggContainer,
                    style: s,
                    children: (0, r.jsx)(ef, es({}, e))
                }),
                (0, r.jsx)(l.animated.div, {
                    className: eo.easterEggContainer,
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
    ep = (e) => {
        let t = (0, $.v)(e.product.categorySkuId);
        return null != t ? (0, r.jsx)(e_, ec(es({}, e), { displayOptions: t })) : (0, r.jsx)(ef, es({}, e));
    },
    eh = (e) => {
        let { product: t, onClose: n, confettiTarget: o, confettiCanvas: a, hideConfetti: s = !1, analyticsLocations: l, overrideTitle: c, overrideDescription: p, selectedVariantIndex: E, shouldShowPromotionalExperience: b, itemConsumed: y = !0, purchaseType: O = ee.o8.FIAT } = e,
            v = (0, M.o)('CollectiblesCollectedModal'),
            I = (0, X.W)(t, E),
            T = (0, f.e7)([P.default], () => {
                var e, t;
                return null != (t = null == (e = P.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
            }),
            A = i.useMemo(() => {
                if (!v) return;
                let e = I.type === u.Z.AVATAR_DECORATION ? (0, $.R9)(I.skuId, T) : null;
                return null != e ? D.Z.getProduct(e) : void 0;
            }, [v, I.skuId, I.type, T]),
            { confettiColors: N } = (0, F.Z)(I.styles),
            C = (0, f.e7)([h.Z], () => h.Z.useReducedMotion),
            R = i.useRef(null),
            { analyticsLocations: w } = (0, g.ZP)([...l, m.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { collectedModalBackground: L } = (0, J.Ac)(I);
        function x() {
            if (I.skuId === d.a.PREMIUM_TIER_2_3_DAY) {
                let e = ei.intl.formatToPlainString(ei.t['Cz1G9/'], { days: 3 });
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
                        className: eo.bannerContainer,
                        children: [
                            b
                                ? (0, r.jsx)('div', { className: eo.promotionalBanner })
                                : (0, r.jsx)(Z.Z, {
                                      asset: L,
                                      size: (0, H.ML)(eu),
                                      className: eo.decorationBanner,
                                      categoryBannerOverride: (0, ee.ZS)(I.categorySkuId)
                                  }),
                            (0, r.jsx)(ep, {
                                product: I,
                                pairedProduct: A,
                                reducedMotion: C
                            })
                        ]
                    }),
                    (0, r.jsx)(eg, {
                        product: I,
                        pairedProduct: A,
                        onClose: n,
                        analyticsLocations: w,
                        overrideTitle: c,
                        overrideDescription: p,
                        selectedVariantIndex: E,
                        shouldShowPromotionalExperience: b,
                        purchaseType: O
                    }),
                    (0, r.jsx)(_.olH, {
                        onClick: n,
                        className: eo.modalCloseButton,
                        withCircleBackground: !0
                    })
                ]
            });
        }
        return (0, r.jsxs)(g.Gt, {
            value: w,
            children: [
                (0, r.jsx)('div', {
                    className: eo.modalInner,
                    ref: R,
                    children: x()
                }),
                !s &&
                    !C &&
                    (0, r.jsx)(V.Z, {
                        confettiTarget: null != o ? o : R.current,
                        confettiCanvas: a,
                        sprites: (0, H.vK)(I.categorySkuId),
                        colors: null == N ? void 0 : N.map((e) => e.toHexString())
                    })
            ]
        });
    },
    em = 600,
    eg = (e) => {
        var t;
        let { product: n, pairedProduct: o, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: d, shouldShowPromotionalExperience: f } = e,
            p = (0, j.ed)('CollectiblesCollectedModal'),
            h = (0, G.k)(n),
            m = (0, G.k)(o),
            g = null != o,
            E = (0, y.Z)(),
            b = null == E || null == (t = E.giftPurchaseConfirmation) ? void 0 : t.rewardCollectedText(),
            { handleUseNow: O, isApplying: v } = (0, U.W)({
                product: n,
                onSuccess: a,
                onError: a
            }),
            { firstAvatarDecoration: I, firstProfileEffect: S } = (0, B.Rj)(n),
            C = (0, k.x6)(n) ? null != I && null != S : null != I || null != S || n.type === u.Z.NAMEPLATE;
        i.useEffect(() => {
            ee.Vt.ORB_PROFILE_BADGE === n.skuId && (0, A.Ls)([(0, K.X)()], em);
        }, [n.skuId]);
        let P = i.useMemo(
                () =>
                    null != l
                        ? l
                        : ee.Vt.ORB_PROFILE_BADGE === n.skuId
                          ? ei.intl.string(er.default.nvaTQk)
                          : g
                            ? ei.intl.format(new Date() < ee.a$ ? ei.t.BhGU09 : ei.t.Jfv5Qk, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : p && !f
                              ? ei.intl.string(ei.t.IMffmp)
                              : ei.intl.format(ei.t.YNaxMj, { itemName: h }),
                [l, n.skuId, g, p, f, h, m]
            ),
            R = i.useMemo(
                () =>
                    null != d
                        ? d
                        : ee.Vt.ORB_PROFILE_BADGE === n.skuId
                          ? ei.intl.string(er.default.UnPGio)
                          : g
                            ? ei.intl.format(new Date() < ee.a$ ? ei.t['1jBC0t'] : ei.t.qSrp39, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : (0, c.EQ)(null == n ? void 0 : n.type)
                                  .with(u.Z.BUNDLE, () => {
                                      let { itemOneName: e, itemTwoName: t } = (0, B.Ws)(n);
                                      return ei.intl.format(ei.t.fXw44e, {
                                          itemOneName: e,
                                          itemTwoName: t
                                      });
                                  })
                                  .with(u.Z.AVATAR_DECORATION, () => (f && null != b ? b : ed(h)))
                                  .otherwise(() => ed(h)),
                [d, n, g, h, m, f, b]
            ),
            D = i.useMemo(
                () =>
                    ee.Vt.ORB_PROFILE_BADGE === n.skuId
                        ? (0, r.jsxs)('div', {
                              className: eo.buttonRows,
                              children: [
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.BRAND,
                                      onClick: () => {
                                          a(), w.S.dispatch(et.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                                      },
                                      children: ei.intl.string(er.default.yfwZu7)
                                  }),
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.PRIMARY,
                                      onClick: () => {
                                          a(),
                                              (0, N.Y)({
                                                  pageType: et.ZY5.SHOP_ORBS_TAB,
                                                  sectionType: et.jXE.ORBS_BADGE_REDEMPTION_MODAL,
                                                  ctaObject: et.qAy.CTA_TO_QUEST_HOME
                                              }),
                                              (0, T.navigateToQuestHome)();
                                      },
                                      children: ei.intl.string(ei.t['H57f4+'])
                                  })
                              ]
                          })
                        : null,
                [a, n.skuId]
            );
        return (0, r.jsxs)('div', {
            className: eo.collectedInfoContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: eo.collectedTextContainer,
                    children: [
                        (0, r.jsx)(_.X6q, {
                            variant: 'heading-lg/bold',
                            children: P
                        }),
                        (0, r.jsx)(_.Text, {
                            variant: 'text-sm/normal',
                            children: R
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: eo.buttons,
                    children: [
                        g
                            ? (0, r.jsx)(eE, {
                                  onClose: a,
                                  product: o,
                                  analyticsLocations: s
                              })
                            : null != D
                              ? D
                              : (0, r.jsx)(eb, {
                                    product: n,
                                    onClose: a,
                                    isPrimary: C,
                                    analyticsLocations: s
                                }),
                        C
                            ? (0, r.jsx)(_.zxk, {
                                  onClick: O,
                                  submitting: v,
                                  children: ei.intl.string(ei.t.MAS7uL)
                              })
                            : null
                    ]
                })
            ]
        });
    },
    eE = (e) => {
        let { onClose: t, product: n, analyticsLocations: o } = e,
            a = (0, j.hv)('CollectiblesShopGiftButton'),
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, b.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: en.Wt.SHOP_PAGE,
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
            innerClassName: eo.buyButton,
            children: [
                (0, r.jsx)(_.OgN, {
                    color: _.TVs.colors.WHITE,
                    size: 'sm'
                }),
                ei.intl.string(ei.t.ouo4FB)
            ]
        });
    },
    eb = (e) => {
        let { product: t, onClose: n, isPrimary: o, analyticsLocations: a, text: l } = e,
            c = (0, O.Z)({ analyticsLocations: a }),
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
            children: null != l ? l : ei.intl.string(ei.t['2p2aY2'])
        });
    },
    ey = (e) => {
        let { transitionState: t, product: n, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: c, shouldShowPromotionalExperience: u, shouldCheckoutWithOrbs: d, itemConsumed: p, purchaseType: h = ee.o8.FIAT } = e,
            E = (0, f.e7)([L.Z], () => L.Z.purchases),
            b = (0, x.o)(n, E),
            y = (0, X.W)(n, b),
            O = i.useRef(new o.qA()),
            [v, I] = i.useState(null),
            S = (0, $.UY)({
                purchaseType: h,
                skuId: y.skuId
            }),
            { analyticsLocations: T } = (0, g.ZP)([...s, m.Z.COLLECTIBLES_COLLECTED_MODAL]),
            A = i.useMemo(() => (0, k.jm)(y.type, y.skuId), [y.type, y.skuId]);
        return (
            i.useEffect(() => {
                R.default.track(et.rMx.OPEN_MODAL, {
                    type: et.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: T,
                    sku_id: y.skuId,
                    product_type: A
                });
            }, [T, y.skuId, y.items, A]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.O_, {
                        ref: I,
                        className: eo.confettiCanvas,
                        environment: O.current
                    }),
                    (0, r.jsx)(Y.i, { options: S }),
                    d && (0, r.jsx)(C.o, { onClose: a }),
                    (0, r.jsx)(_.Y0X, {
                        hideShadow: !0,
                        transitionState: t,
                        size: _.CgR.DYNAMIC,
                        className: eo.modalRoot,
                        children: (0, r.jsx)(_.hzk, {
                            className: eo.modalContent,
                            scrollbarType: 'none',
                            children: (0, r.jsx)(eh, {
                                product: y,
                                onClose: a,
                                confettiCanvas: v,
                                hideConfetti: null != S,
                                analyticsLocations: T,
                                overrideTitle: l,
                                overrideDescription: c,
                                selectedVariantIndex: b,
                                shouldShowPromotionalExperience: u,
                                itemConsumed: p,
                                purchaseType: h
                            })
                        })
                    })
                ]
            })
        );
    };
