n.d(t, {
    default: () => ey,
    e: () => eh
}),
    n(388685),
    n(314940);
var r = n(255367),
    i = n(73800),
    a = n(505266),
    o = n(512722),
    s = n.n(o),
    l = n(524979),
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
    y = n(717401),
    O = n(286961),
    v = n(300284),
    I = n(876917),
    T = n(642619),
    S = n(824393),
    A = n(341907),
    N = n(350327),
    C = n(507808),
    R = n(594174),
    P = n(626135),
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
    V = n(624377),
    F = n(530618),
    Z = n(141011),
    H = n(372654),
    Y = n(197831),
    W = n(508925),
    K = n(755419),
    z = n(616066),
    q = n(216541),
    X = n(22267),
    Q = n(58201),
    J = n(794324),
    $ = n(302800),
    ee = n(215023),
    et = n(981631),
    en = n(474936),
    er = n(427487),
    ei = n(388032),
    ea = n(854402);
function eo(e, t, n) {
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
                eo(e, t, n[t]);
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
            a = null == n ? void 0 : n.items[0],
            o = (0, f.e7)([R.default], () => {
                let e = R.default.getCurrentUser();
                return s()(null != e, 'User cannot be undefined'), e;
            });
        return (0, c.EQ)(t.type)
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: ea.profileEffectShopPreview,
                    children: (0, r.jsx)(I.Z, {
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
                                  className: ea.avatarDecorationPairOne,
                                  children: (0, r.jsx)(z.R, {
                                      item: i,
                                      user: o,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: ea.avatarDecorationPairTwo,
                                  children: (0, r.jsx)(z.R, {
                                      item: a,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: ea.avatarDecoration,
                          children: (0, r.jsx)(z.R, {
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
                    className: ea.nameplate,
                    children: (0, r.jsx)(X.Z, {
                        nameplate: i,
                        user: o,
                        nameplatePreviewSize: 'xlarge',
                        isHighlighted: !0
                    })
                })
            )
            .with(u.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: ea.bundlePreview,
                    children: (0, r.jsx)(q.d, {
                        product: t,
                        user: o,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: ea.bundleProfileEffectCard
                    })
                })
            )
            .with(u.Z.EXTERNAL_SKU, () =>
                (0, r.jsx)('div', {
                    className: ea.avatarDecoration,
                    children: (0, r.jsx)(W.b, { product: t })
                })
            )
            .otherwise(() => null);
    },
    e_ = (e) => {
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
                    className: ea.easterEggContainer,
                    style: s,
                    children: (0, r.jsx)(ef, es({}, e))
                }),
                (0, r.jsx)(l.animated.div, {
                    className: ea.easterEggContainer,
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
        let { product: t, onClose: n, confettiTarget: a, confettiCanvas: o, hideConfetti: s = !1, analyticsLocations: l, overrideTitle: c, overrideDescription: p, selectedVariantIndex: E, shouldShowPromotionalExperience: b, itemConsumed: v = !0, purchaseType: I = ee.o8.FIAT } = e,
            T = (0, M.o)('CollectiblesCollectedModal'),
            A = (0, Q.W)(t, E),
            N = (0, f.e7)([R.default], () => {
                var e, t;
                return null != (t = null == (e = R.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
            }),
            C = i.useMemo(() => {
                if (!T) return;
                let e = A.type === u.Z.AVATAR_DECORATION ? (0, $.R9)(A.skuId, N) : null;
                return null != e ? D.Z.getProduct(e) : void 0;
            }, [T, A.skuId, A.type, N]),
            { confettiColors: P } = (0, V.Z)(A.styles),
            w = (0, f.e7)([h.Z], () => h.Z.useReducedMotion),
            L = i.useRef(null),
            { analyticsLocations: x } = (0, g.ZP)([...l, m.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { collectedModalBackground: k } = (0, J.Ac)(A),
            j = (0, O.Z)();
        function U() {
            var e;
            if (A.skuId === d.a.PREMIUM_TIER_2_3_DAY) {
                let e = ei.intl.formatToPlainString(ei.t['Cz1G9/'], { days: 3 });
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
            let t = (0, y.Tl)(null == j || null == (e = j.planSelection) ? void 0 : e.gradientConfig);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        className: ea.bannerContainer,
                        children: [
                            b
                                ? (0, r.jsx)('div', {
                                      className: ea.promotionalBanner,
                                      style: t
                                  })
                                : (0, r.jsx)(Z.Z, {
                                      asset: k,
                                      size: (0, H.ML)(eu),
                                      className: ea.decorationBanner,
                                      categoryBannerOverride: (0, ee.ZS)(A.categorySkuId)
                                  }),
                            (0, r.jsx)(ep, {
                                product: A,
                                pairedProduct: C,
                                reducedMotion: w
                            })
                        ]
                    }),
                    (0, r.jsx)(eg, {
                        product: A,
                        pairedProduct: C,
                        onClose: n,
                        analyticsLocations: x,
                        overrideTitle: c,
                        overrideDescription: p,
                        selectedVariantIndex: E,
                        shouldShowPromotionalExperience: b,
                        purchaseType: I
                    }),
                    (0, r.jsx)(_.olH, {
                        onClick: n,
                        className: ea.modalCloseButton,
                        withCircleBackground: !0
                    })
                ]
            });
        }
        return (0, r.jsxs)(g.Gt, {
            value: x,
            children: [
                (0, r.jsx)('div', {
                    className: ea.modalInner,
                    ref: L,
                    children: U()
                }),
                !s &&
                    !w &&
                    (0, r.jsx)(F.Z, {
                        confettiTarget: null != a ? a : L.current,
                        confettiCanvas: o,
                        sprites: (0, H.vK)(A.categorySkuId),
                        colors: null == P ? void 0 : P.map((e) => e.toHexString())
                    })
            ]
        });
    },
    em = 600,
    eg = (e) => {
        var t;
        let { product: n, pairedProduct: a, onClose: o, analyticsLocations: s, overrideTitle: l, overrideDescription: d, shouldShowPromotionalExperience: f } = e,
            p = (0, j.ed)('CollectiblesCollectedModal'),
            h = (0, G.k)(n),
            m = (0, G.k)(a),
            g = null != a,
            E = (0, O.Z)(),
            b = null == E || null == (t = E.giftPurchaseConfirmation) ? void 0 : t.rewardCollectedText(),
            { handleUseNow: y, isApplying: v } = (0, U.W)({
                product: n,
                onSuccess: o,
                onError: o
            }),
            { firstAvatarDecoration: I, firstProfileEffect: T } = (0, B.Rj)(n),
            S = (0, k.x6)(n) ? null != I && null != T : null != I || null != T || n.type === u.Z.NAMEPLATE;
        i.useEffect(() => {
            ee.Vt.ORB_PROFILE_BADGE === n.skuId && (0, N.Ls)([(0, K.X)()], em);
        }, [n.skuId]);
        let R = i.useMemo(
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
            P = i.useMemo(
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
                              className: ea.buttonRows,
                              children: [
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.BRAND,
                                      onClick: () => {
                                          o(), w.S.dispatch(et.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                                      },
                                      children: ei.intl.string(er.default.yfwZu7)
                                  }),
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.PRIMARY,
                                      onClick: () => {
                                          o(),
                                              (0, C.Y)({
                                                  pageType: et.ZY5.SHOP_ORBS_TAB,
                                                  sectionType: et.jXE.ORBS_BADGE_REDEMPTION_MODAL,
                                                  ctaObject: et.qAy.CTA_TO_QUEST_HOME
                                              }),
                                              (0, A.navigateToQuestHome)();
                                      },
                                      children: ei.intl.string(ei.t['H57f4+'])
                                  })
                              ]
                          })
                        : null,
                [o, n.skuId]
            );
        return (0, r.jsxs)('div', {
            className: ea.collectedInfoContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: ea.collectedTextContainer,
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
                    className: ea.buttons,
                    children: [
                        g
                            ? (0, r.jsx)(eE, {
                                  onClose: o,
                                  product: a,
                                  analyticsLocations: s
                              })
                            : null != D
                              ? D
                              : (0, r.jsx)(eb, {
                                    product: n,
                                    onClose: o,
                                    isPrimary: S,
                                    analyticsLocations: s
                                }),
                        S
                            ? (0, r.jsx)(_.zxk, {
                                  onClick: y,
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
        let { onClose: t, product: n, analyticsLocations: a } = e,
            o = (0, j.hv)('CollectiblesShopGiftButton'),
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, b.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: en.Wt.SHOP_PAGE,
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
            innerClassName: ea.buyButton,
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
                    (0, T.H)({
                        initialSelectedEffectId: d.id,
                        analyticsLocations: o
                    });
            }, [n, c, t.type, d, o]);
        return (0, r.jsx)(_.zxk, {
            color: a ? _.Ttl.PRIMARY : _.Ttl.BRAND,
            onClick: f,
            children: null != l ? l : ei.intl.string(ei.t['2p2aY2'])
        });
    },
    ey = (e) => {
        let { transitionState: t, product: n, onClose: o, analyticsLocations: s, overrideTitle: l, overrideDescription: c, shouldShowPromotionalExperience: u, itemConsumed: d, purchaseType: p = ee.o8.FIAT } = e,
            h = (0, f.e7)([L.Z], () => L.Z.purchases),
            E = (0, x.o)(n, h),
            b = (0, Q.W)(n, E),
            y = i.useRef(new a.qA()),
            [O, v] = i.useState(null),
            I = (0, $.UY)({
                purchaseType: p,
                skuId: b.skuId
            }),
            { analyticsLocations: T } = (0, g.ZP)([...s, m.Z.COLLECTIBLES_COLLECTED_MODAL]),
            S = i.useMemo(() => (0, k.jm)(b.type, b.skuId), [b.type, b.skuId]);
        return (
            i.useEffect(() => {
                P.default.track(et.rMx.OPEN_MODAL, {
                    type: et.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: T,
                    sku_id: b.skuId,
                    product_type: S
                });
            }, [T, b.skuId, b.items, S]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.O_, {
                        ref: v,
                        className: ea.confettiCanvas,
                        environment: y.current
                    }),
                    (0, r.jsx)(Y.i, { options: I }),
                    (0, r.jsx)(_.Y0X, {
                        hideShadow: !0,
                        transitionState: t,
                        size: _.CgR.DYNAMIC,
                        className: ea.modalRoot,
                        parentComponent: 'CollectiblesCollectedModal',
                        children: (0, r.jsx)(_.hzk, {
                            className: ea.modalContent,
                            scrollbarType: 'none',
                            children: (0, r.jsx)(eh, {
                                product: b,
                                onClose: o,
                                confettiCanvas: O,
                                hideConfetti: null != I,
                                analyticsLocations: T,
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
