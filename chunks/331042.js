n.d(t, {
    default: () => eg,
    e: () => ef
}),
    n(388685),
    n(314940);
var r = n(200651),
    i = n(192379),
    o = n(48026),
    a = n(512722),
    s = n.n(a),
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
    A = n(594174),
    C = n(626135),
    P = n(585483),
    R = n(597688),
    w = n(1870),
    D = n(429368),
    L = n(884697),
    x = n(587792),
    M = n(228624),
    k = n(635552),
    j = n(905357),
    U = n(328456),
    G = n(624377),
    B = n(530618),
    V = n(141011),
    F = n(372654),
    Z = n(197831),
    H = n(508925),
    W = n(755419),
    Y = n(616066),
    K = n(216541),
    z = n(22267),
    q = n(58201),
    Q = n(794324),
    X = n(302800),
    J = n(215023),
    $ = n(981631),
    ee = n(474936),
    et = n(694232),
    en = n(388032),
    er = n(854402);
function ei(e, t, n) {
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
                ei(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
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
function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ea(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let el = 880,
    ec = (e) => {
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
                    className: er.profileEffectShopPreview,
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
                                  className: er.avatarDecorationPairOne,
                                  children: (0, r.jsx)(Y.R, {
                                      item: i,
                                      user: a,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: er.avatarDecorationPairTwo,
                                  children: (0, r.jsx)(Y.R, {
                                      item: o,
                                      avatarSize: _.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: er.avatarDecoration,
                          children: (0, r.jsx)(Y.R, {
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
                    className: er.nameplate,
                    children: (0, r.jsx)(z.Z, {
                        nameplate: i,
                        user: a,
                        isHighlighted: !0
                    })
                })
            )
            .with(u.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: er.bundlePreview,
                    children: (0, r.jsx)(K.d, {
                        product: t,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: er.bundleProfileEffectCard
                    })
                })
            )
            .with(u.Z.EXTERNAL_SKU, () =>
                (0, r.jsx)('div', {
                    className: er.avatarDecoration,
                    children: (0, r.jsx)(H.b, { product: t })
                })
            )
            .otherwise(() => null);
    },
    eu = (e) => {
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
                    className: er.easterEggContainer,
                    style: s,
                    children: (0, r.jsx)(ec, eo({}, e))
                }),
                (0, r.jsx)(l.animated.div, {
                    className: er.easterEggContainer,
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
    ed = (e) => {
        let t = (0, X.v)(e.product.categorySkuId);
        return null != t ? (0, r.jsx)(eu, es(eo({}, e), { displayOptions: t })) : (0, r.jsx)(ec, eo({}, e));
    },
    ef = (e) => {
        let { product: t, onClose: n, confettiTarget: o, confettiCanvas: a, hideConfetti: s = !1, analyticsLocations: l, overrideTitle: c, overrideDescription: p, selectedVariantIndex: E, shouldShowPromotionalExperience: b, itemConsumed: y = !0, purchaseType: v = J.o8.FIAT } = e,
            O = (0, x.o)('CollectiblesCollectedModal'),
            I = (0, q.W)(t, E),
            T = (0, f.e7)([A.default], () => {
                var e, t;
                return null != (t = null == (e = A.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
            }),
            N = i.useMemo(() => {
                if (!O) return;
                let e = I.type === u.Z.AVATAR_DECORATION ? (0, X.R9)(I.skuId, T) : null;
                return null != e ? R.Z.getProduct(e) : void 0;
            }, [O, I.skuId, I.type, T]),
            { confettiColors: C } = (0, G.Z)(I.styles),
            P = (0, f.e7)([h.Z], () => h.Z.useReducedMotion),
            w = i.useRef(null),
            { analyticsLocations: D } = (0, g.ZP)([...l, m.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { collectedModalBackground: L } = (0, Q.Ac)(I);
        function M() {
            if (I.skuId === d.a.PREMIUM_TIER_2_3_DAY) {
                let e = en.NW.formatToPlainString(en.t.fYmir6, { days: 3 });
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
                        className: er.bannerContainer,
                        children: [
                            b
                                ? (0, r.jsx)('div', { className: er.promotionalBanner })
                                : (0, r.jsx)(V.Z, {
                                      asset: L,
                                      size: (0, F.ML)(el),
                                      className: er.decorationBanner,
                                      categoryBannerOverride: (0, J.ZS)(I.categorySkuId)
                                  }),
                            (0, r.jsx)(ed, {
                                product: I,
                                pairedProduct: N,
                                reducedMotion: P
                            })
                        ]
                    }),
                    (0, r.jsx)(ep, {
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
                        className: er.modalCloseButton,
                        withCircleBackground: !0
                    })
                ]
            });
        }
        return (0, r.jsxs)(g.Gt, {
            value: D,
            children: [
                (0, r.jsx)('div', {
                    className: er.modalInner,
                    ref: w,
                    children: M()
                }),
                !s &&
                    !P &&
                    (0, r.jsx)(B.Z, {
                        confettiTarget: null != o ? o : w.current,
                        confettiCanvas: a,
                        sprites: (0, F.vK)(I.categorySkuId),
                        colors: null == C ? void 0 : C.map((e) => e.toHexString())
                    })
            ]
        });
    },
    e_ = 600,
    ep = (e) => {
        var t;
        let { product: n, pairedProduct: o, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: d, shouldShowPromotionalExperience: f } = e,
            p = (0, M.ed)('CollectiblesCollectedModal'),
            h = (0, j.k)(n),
            m = (0, j.k)(o),
            g = null != o,
            E = (0, y.Z)(),
            b = null == E || null == (t = E.giftPurchaseConfirmation) ? void 0 : t.rewardCollectedText(),
            { handleUseNow: v, isApplying: O } = (0, k.W)({
                product: n,
                onSuccess: a,
                onError: a
            }),
            { firstAvatarDecoration: I, firstProfileEffect: S } = (0, U.R)(n),
            A = (0, L.x6)(n) ? null != I && null != S : null != I || null != S || n.type === u.Z.NAMEPLATE;
        i.useEffect(() => {
            J.Vt.ORB_PROFILE_BADGE === n.skuId && (0, N.Ls)([(0, W.X2)()], e_);
        }, [n.skuId]);
        let C = i.useMemo(
                () =>
                    null != l
                        ? l
                        : J.Vt.ORB_PROFILE_BADGE === n.skuId
                          ? en.NW.string(et.Z.nvaTQk)
                          : g
                            ? en.NW.format(new Date() < J.a$ ? en.t.BhGU09 : en.t.Jfv5Qk, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : p && !f
                              ? en.NW.string(en.t['1xr2SU'])
                              : en.NW.format(en.t.YNaxMj, { itemName: h }),
                [l, n.skuId, g, p, f, h, m]
            ),
            R = i.useMemo(
                () =>
                    null != d
                        ? d
                        : J.Vt.ORB_PROFILE_BADGE === n.skuId
                          ? en.NW.string(et.Z.UnPGio)
                          : g
                            ? en.NW.format(new Date() < J.a$ ? en.t['1jBC0t'] : en.t.qSrp39, {
                                  purchased_item: h,
                                  suggested_item: m
                              })
                            : (0, c.EQ)(null == n ? void 0 : n.type)
                                  .with(u.Z.BUNDLE, () => en.NW.string(en.t.zJPoLy))
                                  .with(u.Z.PROFILE_EFFECT, () => en.NW.string(en.t.f9M1YG))
                                  .with(u.Z.NAMEPLATE, () => en.NW.string(en.t.lvwvIi))
                                  .otherwise(() => (f && null != b ? b : en.NW.string(en.t['44b50t']))),
                [d, n.skuId, null == n ? void 0 : n.type, g, h, m, f, b]
            ),
            w = i.useMemo(
                () =>
                    J.Vt.ORB_PROFILE_BADGE === n.skuId
                        ? (0, r.jsxs)('div', {
                              className: er.buttonRows,
                              children: [
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.BRAND,
                                      onClick: () => {
                                          a(), P.S.dispatch($.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                                      },
                                      children: en.NW.string(et.Z.yfwZu7)
                                  }),
                                  (0, r.jsx)(_.zxk, {
                                      color: _.Ttl.PRIMARY,
                                      onClick: () => {
                                          a(), (0, T.navigateToQuestHome)();
                                      },
                                      children: en.NW.string(en.t['H57f4+'])
                                  })
                              ]
                          })
                        : null,
                [a, n.skuId]
            );
        return (0, r.jsxs)('div', {
            className: er.collectedInfoContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: er.collectedTextContainer,
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
                    className: er.buttons,
                    children: [
                        g
                            ? (0, r.jsx)(eh, {
                                  onClose: a,
                                  product: o,
                                  analyticsLocations: s
                              })
                            : null != w
                              ? w
                              : (0, r.jsx)(em, {
                                    product: n,
                                    onClose: a,
                                    isPrimary: A,
                                    analyticsLocations: s
                                }),
                        A
                            ? (0, r.jsx)(_.zxk, {
                                  onClick: v,
                                  submitting: O,
                                  children: en.NW.string(en.t.MAS7uL)
                              })
                            : null
                    ]
                })
            ]
        });
    },
    eh = (e) => {
        let { onClose: t, product: n, analyticsLocations: o } = e,
            a = (0, M.hv)('CollectiblesShopGiftButton'),
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, b.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: ee.Wt.SHOP_PAGE,
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
            innerClassName: er.buyButton,
            children: [
                (0, r.jsx)(_.OgN, {
                    color: _.TVs.colors.WHITE,
                    size: 'sm'
                }),
                en.NW.string(en.t.ouo4FB)
            ]
        });
    },
    em = (e) => {
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
            children: null != l ? l : en.NW.string(en.t['2p2aY2'])
        });
    },
    eg = (e) => {
        let { transitionState: t, product: n, onClose: a, analyticsLocations: s, overrideTitle: l, overrideDescription: c, shouldShowPromotionalExperience: u, itemConsumed: d, purchaseType: p = J.o8.FIAT } = e,
            h = (0, f.e7)([w.Z], () => w.Z.purchases),
            E = (0, D.o)(n, h),
            b = (0, q.W)(n, E),
            y = i.useRef(new o.qA()),
            [v, O] = i.useState(null),
            I = (0, X.UY)({
                purchaseType: p,
                skuId: b.skuId
            }),
            { analyticsLocations: S } = (0, g.ZP)([...s, m.Z.COLLECTIBLES_COLLECTED_MODAL]),
            T = i.useMemo(() => (0, L.jm)(b.type, b.skuId), [b.type, b.skuId]);
        return (
            i.useEffect(() => {
                C.default.track($.rMx.OPEN_MODAL, {
                    type: $.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: S,
                    sku_id: b.skuId,
                    product_type: T
                });
            }, [S, b.skuId, b.items, T]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.O_, {
                        ref: O,
                        className: er.confettiCanvas,
                        environment: y.current
                    }),
                    (0, r.jsx)(Z.i, { options: I }),
                    (0, r.jsx)(_.Y0X, {
                        hideShadow: !0,
                        transitionState: t,
                        size: _.CgR.DYNAMIC,
                        className: er.modalRoot,
                        children: (0, r.jsx)(_.hzk, {
                            className: er.modalContent,
                            scrollbarType: 'none',
                            children: (0, r.jsx)(ef, {
                                product: b,
                                onClose: a,
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
