(n.d(t, {
    default: () => eO,
    e: () => em
}),
    n(388685),
    n(314940));
var r = n(255367),
    i = n(73800),
    a = n(505266),
    o = n(512722),
    s = n.n(o),
    l = n(108542),
    c = n(278074),
    u = n(979554),
    d = n(314794),
    f = n(399606),
    _ = n(755721),
    p = n(481060),
    h = n(37234),
    m = n(607070),
    g = n(100527),
    E = n(906732),
    b = n(1585),
    y = n(333867),
    O = n(717401),
    v = n(286961),
    I = n(300284),
    T = n(876917),
    S = n(642619),
    A = n(824393),
    N = n(341907),
    C = n(350327),
    R = n(507808),
    P = n(594174),
    w = n(626135),
    D = n(585483),
    L = n(597688),
    x = n(1870),
    k = n(429368),
    M = n(884697),
    j = n(587792),
    U = n(228624),
    G = n(635552),
    B = n(905357),
    V = n(328456),
    F = n(624377),
    Z = n(530618),
    H = n(141011),
    Y = n(372654),
    W = n(197831),
    K = n(508925),
    z = n(755419),
    q = n(616066),
    X = n(216541),
    Q = n(22267),
    J = n(58201),
    $ = n(794324),
    ee = n(302800),
    et = n(215023),
    en = n(981631),
    er = n(474936),
    ei = n(427487),
    ea = n(388032),
    eo = n(854402);
function es(e, t, n) {
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
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                es(e, t, n[t]);
            }));
    }
    return e;
}
function ec(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function eu(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ec(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ed = 880,
    ef = (e) => (null != e ? ea.intl.format(ea.t['4kp0AA'], { itemName: e }) : null),
    e_ = (e) => {
        let { product: t, pairedProduct: n } = e,
            [i] = t.items,
            a = null == n ? void 0 : n.items[0],
            o = (0, f.e7)([P.default], () => {
                let e = P.default.getCurrentUser();
                return (s()(null != e, 'User cannot be undefined'), e);
            });
        return (0, c.EQ)(t.type)
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: eo.profileEffectShopPreview,
                    children: (0, r.jsx)(T.Z, {
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
                                  className: eo.avatarDecorationPairOne,
                                  children: (0, r.jsx)(q.R, {
                                      item: i,
                                      user: o,
                                      avatarSize: p.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: eo.avatarDecorationPairTwo,
                                  children: (0, r.jsx)(q.R, {
                                      item: a,
                                      avatarSize: p.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: eo.avatarDecoration,
                          children: (0, r.jsx)(q.R, {
                              item: i,
                              user: o,
                              avatarSize: p.EFr.SIZE_120,
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
                        user: o,
                        nameplatePreviewSize: 'xlarge',
                        isHighlighted: !0
                    })
                })
            )
            .with(u.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: eo.bundlePreview,
                    children: (0, r.jsx)(X.d, {
                        product: t,
                        user: o,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: eo.bundleProfileEffectCard
                    })
                })
            )
            .with(u.Z.EXTERNAL_SKU, () =>
                (0, r.jsx)('div', {
                    className: eo.avatarDecoration,
                    children: (0, r.jsx)(K.b, { product: t })
                })
            )
            .otherwise(() => null);
    },
    ep = (e) => {
        let { reducedMotion: t, displayOptions: n } = e,
            [a, o] = i.useState(!1),
            s = (0, p.q_F)({
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
            c = (0, p.q_F)({
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
            u = (0, p.q_F)(
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
                    children: (0, r.jsx)(e_, el({}, e))
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
    eh = (e) => {
        let t = (0, ee.v)(e.product.categorySkuId);
        return null != t ? (0, r.jsx)(ep, eu(el({}, e), { displayOptions: t })) : (0, r.jsx)(e_, el({}, e));
    },
    em = (e) => {
        let { product: t, onClose: n, confettiTarget: a, confettiCanvas: o, hideConfetti: s = !1, analyticsLocations: l, overrideTitle: c, overrideDescription: _, selectedVariantIndex: h, shouldShowPromotionalExperience: b, itemConsumed: y = !0, purchaseType: I = et.o8.FIAT } = e,
            T = (0, j.o)('CollectiblesCollectedModal'),
            S = (0, J.W)(t, h),
            N = (0, f.e7)([P.default], () => {
                var e, t;
                return null != (t = null == (e = P.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
            }),
            C = i.useMemo(() => {
                if (!T) return;
                let e = S.type === u.Z.AVATAR_DECORATION ? (0, ee.R9)(S.skuId, N) : null;
                return null != e ? L.Z.getProduct(e) : void 0;
            }, [T, S.skuId, S.type, N]),
            { confettiColors: R } = (0, F.Z)(S.styles),
            w = (0, f.e7)([m.Z], () => m.Z.useReducedMotion),
            D = i.useRef(null),
            { analyticsLocations: x } = (0, E.ZP)([...l, g.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { collectedModalBackground: k } = (0, $.Ac)(S),
            M = (0, v.Z)();
        function U() {
            var e;
            if (S.skuId === d.a.PREMIUM_TIER_2_3_DAY) {
                let e = ea.intl.formatToPlainString(ea.t['Cz1G9/'], { days: 3 });
                return y
                    ? (0, r.jsx)(A.j, {
                          duration: e,
                          onClose: n
                      })
                    : (0, r.jsx)(A.h, {
                          duration: e,
                          onClose: n
                      });
            }
            let t = (0, O.Tl)(null == M || null == (e = M.planSelection) ? void 0 : e.gradientConfig);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        className: eo.bannerContainer,
                        children: [
                            b
                                ? (0, r.jsx)('div', {
                                      className: eo.promotionalBanner,
                                      style: t
                                  })
                                : (0, r.jsx)(H.Z, {
                                      asset: k,
                                      size: (0, Y.ML)(ed),
                                      className: eo.decorationBanner,
                                      categoryBannerOverride: (0, et.ZS)(S.categorySkuId)
                                  }),
                            (0, r.jsx)(eh, {
                                product: S,
                                pairedProduct: C,
                                reducedMotion: w
                            })
                        ]
                    }),
                    (0, r.jsx)(eE, {
                        product: S,
                        pairedProduct: C,
                        onClose: n,
                        analyticsLocations: x,
                        overrideTitle: c,
                        overrideDescription: _,
                        selectedVariantIndex: h,
                        shouldShowPromotionalExperience: b,
                        purchaseType: I
                    }),
                    (0, r.jsx)(p.olH, {
                        onClick: n,
                        className: eo.modalCloseButton,
                        withCircleBackground: !0
                    })
                ]
            });
        }
        return (0, r.jsxs)(E.Gt, {
            value: x,
            children: [
                (0, r.jsx)('div', {
                    className: eo.modalInner,
                    ref: D,
                    children: U()
                }),
                !s &&
                    !w &&
                    (0, r.jsx)(Z.Z, {
                        confettiTarget: null != a ? a : D.current,
                        confettiCanvas: o,
                        sprites: (0, Y.vK)(S.categorySkuId),
                        colors: null == R ? void 0 : R.map((e) => e.toHexString())
                    })
            ]
        });
    },
    eg = 600,
    eE = (e) => {
        var t;
        let { product: n, pairedProduct: a, onClose: o, analyticsLocations: s, overrideTitle: l, overrideDescription: d, shouldShowPromotionalExperience: f } = e,
            _ = (0, U.ed)('CollectiblesCollectedModal'),
            h = (0, B.k)(n),
            m = (0, B.k)(a),
            g = null != a,
            E = (0, v.Z)(),
            b = null == E || null == (t = E.giftPurchaseConfirmation) ? void 0 : t.rewardCollectedText(),
            { handleUseNow: y, isApplying: O } = (0, G.W)({
                product: n,
                onSuccess: o,
                onError: o
            }),
            { firstAvatarDecoration: I, firstProfileEffect: T } = (0, V.Rj)(n),
            S = (0, M.x6)(n) ? null != I && null != T : null != I || null != T || n.type === u.Z.NAMEPLATE;
        i.useEffect(() => {
            et.Vt.ORB_PROFILE_BADGE === n.skuId && (0, C.Ls)([(0, z.X)()], eg);
        }, [n.skuId]);
        let A = i.useMemo(
                () =>
                    null != l
                        ? l
                        : et.Vt.ORB_PROFILE_BADGE === n.skuId
                          ? ea.intl.string(ei.default.nvaTQk)
                          : g
                            ? ea.intl.format(new Date() < et.a$ ? ea.t.BhGU09 : ea.t.Jfv5Qk, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : _ && !f
                              ? ea.intl.string(ea.t.IMffmp)
                              : ea.intl.format(ea.t.YNaxMj, { itemName: h }),
                [l, n.skuId, g, _, f, h, m]
            ),
            P = i.useMemo(
                () =>
                    null != d
                        ? d
                        : et.Vt.ORB_PROFILE_BADGE === n.skuId
                          ? ea.intl.string(ei.default.UnPGio)
                          : g
                            ? ea.intl.format(new Date() < et.a$ ? ea.t['1jBC0t'] : ea.t.qSrp39, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : (0, c.EQ)(null == n ? void 0 : n.type)
                                  .with(u.Z.BUNDLE, () => {
                                      let { itemOneName: e, itemTwoName: t } = (0, V.Ws)(n);
                                      return ea.intl.format(ea.t.fXw44e, {
                                          itemOneName: e,
                                          itemTwoName: t
                                      });
                                  })
                                  .with(u.Z.AVATAR_DECORATION, () => (f && null != b ? b : ef(h)))
                                  .otherwise(() => ef(h)),
                [d, n, g, h, m, f, b]
            ),
            w = i.useMemo(
                () =>
                    et.Vt.ORB_PROFILE_BADGE === n.skuId
                        ? (0, r.jsxs)(p.hE2, {
                              fullWidth: !0,
                              children: [
                                  (0, r.jsx)(p.zxk, {
                                      variant: 'primary',
                                      text: ea.intl.string(ei.default.yfwZu7),
                                      onClick: () => {
                                          (o(), D.S.dispatch(en.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                                      }
                                  }),
                                  (0, r.jsx)(p.zxk, {
                                      variant: 'secondary',
                                      text: ea.intl.string(ea.t['H57f4+']),
                                      onClick: () => {
                                          (o(),
                                              (0, R.Y)({
                                                  pageType: en.ZY5.SHOP_ORBS_TAB,
                                                  sectionType: en.jXE.ORBS_BADGE_REDEMPTION_MODAL,
                                                  ctaObject: en.qAy.CTA_TO_QUEST_HOME
                                              }),
                                              (0, N.navigateToQuestHome)());
                                      }
                                  })
                              ]
                          })
                        : null,
                [o, n.skuId]
            );
        return (0, r.jsxs)('div', {
            className: eo.collectedInfoContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: eo.collectedTextContainer,
                    children: [
                        (0, r.jsx)(p.X6q, {
                            variant: 'heading-lg/bold',
                            children: A
                        }),
                        (0, r.jsx)(p.Text, {
                            variant: 'text-sm/normal',
                            children: P
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: eo.buttons,
                    children: [
                        g
                            ? (0, r.jsx)(eb, {
                                  onClose: o,
                                  product: a,
                                  analyticsLocations: s
                              })
                            : null != w
                              ? w
                              : (0, r.jsx)(ey, {
                                    product: n,
                                    onClose: o,
                                    isPrimary: S,
                                    analyticsLocations: s
                                }),
                        S
                            ? (0, r.jsx)(p.zxk, {
                                  variant: 'primary',
                                  text: ea.intl.string(ea.t.MAS7uL),
                                  onClick: y,
                                  loading: O
                              })
                            : null
                    ]
                })
            ]
        });
    },
    eb = (e) => {
        let { onClose: t, product: n, analyticsLocations: a } = e,
            o = (0, U.hv)('CollectiblesShopGiftButton'),
            s = i.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        (0, y.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: er.Wt.SHOP_PAGE,
                            analyticsLocations: a,
                            variantsReturnStyle: o,
                            onClose: (e) => {
                                e && t();
                            }
                        }));
                },
                [n.skuId, a, o, t]
            );
        return (0, r.jsxs)(_.zx, {
            color: _.Tt.PRIMARY,
            onClick: s,
            innerClassName: eo.buyButton,
            children: [
                (0, r.jsx)(p.OgN, {
                    color: p.TVs.colors.WHITE,
                    size: 'sm'
                }),
                ea.intl.string(ea.t.ouo4FB)
            ]
        });
    },
    ey = (e) => {
        let { product: t, onClose: n, isPrimary: a, analyticsLocations: o, text: l } = e,
            c = (0, I.Z)({ analyticsLocations: o }),
            [d] = t.items,
            f = i.useCallback(() => {
                if ((n(), (0, h.xf)(), c(), t.type === u.Z.AVATAR_DECORATION)) {
                    (s()(d.type === u.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, b.ps)({
                            initialSelectedDecoration: d,
                            analyticsLocations: o
                        }));
                    return;
                }
                t.type === u.Z.PROFILE_EFFECT &&
                    (0, S.H)({
                        initialSelectedEffectId: d.id,
                        analyticsLocations: o
                    });
            }, [n, c, t.type, d, o]);
        return (0, r.jsx)(p.zxk, {
            variant: a ? 'secondary' : 'primary',
            fullWidth: !0,
            text: null != l ? l : ea.intl.string(ea.t['2p2aY2']),
            onClick: f
        });
    },
    eO = (e) => {
        let { transitionState: t, product: n, onClose: o, analyticsLocations: s, overrideTitle: l, overrideDescription: c, shouldShowPromotionalExperience: u, itemConsumed: d, purchaseType: _ = et.o8.FIAT } = e,
            h = (0, f.e7)([x.Z], () => x.Z.purchases),
            m = (0, k.o)(n, h),
            b = (0, J.W)(n, m),
            y = i.useRef(new a.qA()),
            [O, v] = i.useState(null),
            I = (0, ee.UY)({
                purchaseType: _,
                skuId: b.skuId
            }),
            { analyticsLocations: T } = (0, E.ZP)([...s, g.Z.COLLECTIBLES_COLLECTED_MODAL]),
            S = i.useMemo(() => (0, M.jm)(b.type, b.skuId), [b.type, b.skuId]);
        return (
            i.useEffect(() => {
                w.default.track(en.rMx.OPEN_MODAL, {
                    type: en.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: T,
                    sku_id: b.skuId,
                    product_type: S
                });
            }, [T, b.skuId, b.items, S]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.O_, {
                        ref: v,
                        className: eo.confettiCanvas,
                        environment: y.current
                    }),
                    (0, r.jsx)(W.i, { options: I }),
                    (0, r.jsx)(p.Y0X, {
                        hideShadow: !0,
                        transitionState: t,
                        size: p.CgR.DYNAMIC,
                        className: eo.modalRoot,
                        parentComponent: 'CollectiblesCollectedModal',
                        children: (0, r.jsx)(p.hzk, {
                            className: eo.modalContent,
                            scrollbarType: 'none',
                            children: (0, r.jsx)(em, {
                                product: b,
                                onClose: o,
                                confettiCanvas: O,
                                hideConfetti: null != I,
                                analyticsLocations: T,
                                overrideTitle: l,
                                overrideDescription: c,
                                selectedVariantIndex: m,
                                shouldShowPromotionalExperience: u,
                                itemConsumed: d,
                                purchaseType: _
                            })
                        })
                    })
                ]
            })
        );
    };
