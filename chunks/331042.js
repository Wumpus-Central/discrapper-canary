n.d(t, {
    default: () => ee,
    e: () => Q
}),
    n(47120),
    n(627341);
var i = n(200651),
    r = n(192379),
    a = n(119617),
    s = n(512722),
    o = n.n(s),
    l = n(642128),
    u = n(278074),
    c = n(979554),
    d = n(399606),
    f = n(481060),
    _ = n(37234),
    p = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(1585),
    E = n(333867),
    v = n(286961),
    y = n(300284),
    I = n(876917),
    T = n(642619),
    b = n(594174),
    S = n(597688),
    A = n(1870),
    N = n(429368),
    C = n(884697),
    R = n(587792),
    O = n(228624),
    D = n(318028),
    L = n(635552),
    x = n(905357),
    w = n(328456),
    P = n(624377),
    M = n(530618),
    k = n(141011),
    U = n(372654),
    G = n(616066),
    B = n(216541),
    Z = n(58201),
    F = n(302800),
    V = n(215023),
    j = n(474936),
    H = n(388032),
    Y = n(205596);
let W = 880,
    K = (e) => {
        let { product: t, pairedProduct: n } = e,
            [r] = t.items,
            a = null == n ? void 0 : n.items[0],
            s = (0, d.e7)([b.default], () => {
                let e = b.default.getCurrentUser();
                return o()(null != e, 'User cannot be undefined'), e;
            });
        return (0, u.EQ)(t.type)
            .with(c.Z.PROFILE_EFFECT, () =>
                (0, i.jsx)('div', {
                    className: Y.profileEffectShopPreview,
                    children: (0, i.jsx)(I.Z, {
                        forCollectedModal: !0,
                        profileEffectId: r.id
                    })
                })
            )
            .with(c.Z.AVATAR_DECORATION, () =>
                (o()(r.type === c.Z.AVATAR_DECORATION, 'ts-match already checked the type'), null != a && a.type === c.Z.AVATAR_DECORATION)
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)('div', {
                                  className: Y.avatarDecorationPairOne,
                                  children: (0, i.jsx)(G.R, {
                                      item: r,
                                      user: s,
                                      avatarSize: f.EFr.SIZE_120,
                                      isPurchased: !1,
                                      isHighlighted: !0
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: Y.avatarDecorationPairTwo,
                                  children: (0, i.jsx)(G.R, {
                                      item: a,
                                      avatarSize: f.EFr.SIZE_120,
                                      isPurchased: !1
                                  })
                              })
                          ]
                      })
                    : (0, i.jsx)('div', {
                          className: Y.avatarDecoration,
                          children: (0, i.jsx)(G.R, {
                              item: r,
                              user: s,
                              avatarSize: f.EFr.SIZE_120,
                              isPurchased: !1,
                              isHighlighted: !0
                          })
                      })
            )
            .with(c.Z.BUNDLE, () =>
                (0, i.jsx)('div', {
                    className: Y.bundlePreview,
                    children: (0, i.jsx)(B.d, {
                        product: t,
                        user: s,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: Y.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    z = (e) => {
        let { reducedMotion: t, displayOptions: n } = e,
            [a, s] = r.useState(!1),
            o = (0, f.q_F)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => s(!0), 100)
            }),
            u = (0, f.q_F)({
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
            c = (0, f.q_F)(
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
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.animated.div, {
                    className: Y.easterEggContainer,
                    style: o,
                    children: (0, i.jsx)(K, { ...e })
                }),
                (0, i.jsx)(l.animated.div, {
                    className: Y.easterEggContainer,
                    style: t ? c : u,
                    children: (0, i.jsx)('img', {
                        src: n.imageSrc,
                        style: n.style,
                        alt: '',
                        'aria-hidden': 'true'
                    })
                })
            ]
        });
    },
    q = (e) => {
        let t = (0, F.v)(e.product.categorySkuId);
        return null != t
            ? (0, i.jsx)(z, {
                  ...e,
                  displayOptions: t
              })
            : (0, i.jsx)(K, { ...e });
    },
    Q = (e) => {
        var t;
        let { product: n, onClose: a, confettiTarget: s, confettiCanvas: o, hideConfetti: l = !1, analyticsLocations: u, overrideTitle: _, overrideDescription: g, selectedVariantIndex: E, shouldShowPromotionalExperience: v } = e,
            y = (0, R.o)('CollectiblesCollectedModal'),
            I = (0, Z.W)(n, E),
            T = (0, d.e7)([b.default], () => {
                var e, t;
                return null !== (t = null === (e = b.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t;
            }),
            A = r.useMemo(() => {
                if (!y) return;
                let e = I.type === c.Z.AVATAR_DECORATION ? (0, F.R9)(I.skuId, T) : null;
                return null != e ? S.Z.getProduct(e) : void 0;
            }, [y, I.skuId, I.type, T]),
            { confettiColors: N } = (0, P.Z)(I.styles),
            C = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
            O = r.useRef(null),
            { analyticsLocations: L } = (0, m.ZP)([...u, h.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { category: x, isFetching: w } = (0, D.l)(I.skuId),
            G = null !== (t = null == x ? void 0 : x.successModalBg) && void 0 !== t ? t : I.banner,
            B = w ? void 0 : G;
        return (0, i.jsxs)(m.Gt, {
            value: L,
            children: [
                (0, i.jsxs)('div', {
                    className: Y.modalInner,
                    ref: O,
                    children: [
                        (0, i.jsxs)('div', {
                            className: Y.bannerContainer,
                            children: [
                                v
                                    ? (0, i.jsx)('div', { className: Y.promotionalBanner })
                                    : (0, i.jsx)(k.Z, {
                                          asset: B,
                                          size: (0, U.ML)(W),
                                          className: Y.decorationBanner,
                                          categoryBannerOverride: (0, V.ZS)(I.categorySkuId)
                                      }),
                                (0, i.jsx)(q, {
                                    product: I,
                                    pairedProduct: A,
                                    reducedMotion: C
                                })
                            ]
                        }),
                        (0, i.jsx)(X, {
                            product: I,
                            pairedProduct: A,
                            onClose: a,
                            analyticsLocations: L,
                            overrideTitle: _,
                            overrideDescription: g,
                            selectedVariantIndex: E,
                            shouldShowPromotionalExperience: v
                        }),
                        (0, i.jsx)(f.olH, {
                            onClick: a,
                            className: Y.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !l &&
                    !C &&
                    (0, i.jsx)(M.Z, {
                        confettiTarget: null != s ? s : O.current,
                        confettiCanvas: o,
                        sprites: (0, U.vK)(I.categorySkuId),
                        colors: null == N ? void 0 : N.map((e) => e.toHexString())
                    })
            ]
        });
    },
    X = (e) => {
        var t;
        let { product: n, pairedProduct: a, onClose: s, analyticsLocations: o, overrideTitle: l, overrideDescription: d, shouldShowPromotionalExperience: _ } = e,
            p = (0, O.ed)('CollectiblesCollectedModal'),
            h = (0, x.k)(n),
            m = (0, x.k)(a),
            g = null != a,
            E = (0, v.Z)(),
            y = null == E ? void 0 : null === (t = E.giftPurchaseConfirmation) || void 0 === t ? void 0 : t.rewardCollectedText(),
            { handleUseNow: I, isApplying: T } = (0, L.W)({
                product: n,
                onSuccess: s,
                onError: s
            }),
            { firstAvatarDecoration: b, firstProfileEffect: S } = (0, w.R)(n),
            A = (0, C.x6)(n) ? null != b && null != S : null != b || null != S,
            N = r.useMemo(
                () =>
                    null != l
                        ? l
                        : g
                          ? H.intl.format(new Date() < V.a$ ? H.t.BhGU09 : H.t.Jfv5Qk, {
                                purchased_item: h,
                                suggested_item: m
                            })
                          : p && !_
                            ? H.intl.string(H.t['1xr2SU'])
                            : H.intl.format(H.t.YNaxMj, { itemName: h }),
                [l, p, _, h, m, g]
            ),
            R = r.useMemo(
                () =>
                    null != d
                        ? d
                        : g
                          ? H.intl.format(new Date() < V.a$ ? H.t['1jBC0t'] : H.t.qSrp39, {
                                purchased_item: h,
                                suggested_item: m
                            })
                          : (0, u.EQ)(null == n ? void 0 : n.type)
                                .with(c.Z.BUNDLE, () => H.intl.string(H.t.zJPoLy))
                                .with(c.Z.PROFILE_EFFECT, () => H.intl.string(H.t.f9M1YG))
                                .otherwise(() => (_ && null != y ? y : H.intl.string(H.t['44b50t']))),
                [d, null == n ? void 0 : n.type, y, _, h, m, g]
            );
        return (0, i.jsxs)('div', {
            className: Y.collectedInfoContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: Y.collectedTextContainer,
                    children: [
                        (0, i.jsx)(f.X6q, {
                            variant: 'heading-lg/bold',
                            children: N
                        }),
                        (0, i.jsx)(f.Text, {
                            variant: 'text-sm/normal',
                            children: R
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: Y.buttons,
                    children: [
                        g
                            ? (0, i.jsx)(J, {
                                  onClose: s,
                                  product: a,
                                  analyticsLocations: o
                              })
                            : (0, i.jsx)($, {
                                  product: n,
                                  onClose: s,
                                  hasRequiredProductItems: A,
                                  analyticsLocations: o
                              }),
                        A
                            ? (0, i.jsx)(f.zxk, {
                                  onClick: I,
                                  submitting: T,
                                  children: H.intl.string(H.t.MAS7uL)
                              })
                            : null
                    ]
                })
            ]
        });
    },
    J = (e) => {
        let { onClose: t, product: n, analyticsLocations: a } = e,
            s = (0, O.hv)('CollectiblesShopGiftButton'),
            o = r.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, E.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: j.Wt.SHOP_PAGE,
                            analyticsLocations: a,
                            variantsReturnStyle: s,
                            onClose: (e) => {
                                e && t();
                            }
                        });
                },
                [n.skuId, a, s, t]
            );
        return (0, i.jsxs)(f.zxk, {
            color: f.Ttl.PRIMARY,
            onClick: o,
            innerClassName: Y.buyButton,
            children: [
                (0, i.jsx)(f.OgN, {
                    color: f.TVs.colors.WHITE,
                    size: 'sm'
                }),
                H.intl.string(H.t.ouo4FB)
            ]
        });
    },
    $ = (e) => {
        let { product: t, onClose: n, hasRequiredProductItems: a, analyticsLocations: s } = e,
            l = (0, y.Z)({ analyticsLocations: s }),
            [u] = t.items,
            d = r.useCallback(() => {
                if ((n(), (0, _.xf)(), l(), t.type === c.Z.AVATAR_DECORATION)) {
                    o()(u.type === c.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, g.ps)({
                            initialSelectedDecoration: u,
                            analyticsLocations: s
                        });
                    return;
                }
                t.type === c.Z.PROFILE_EFFECT &&
                    (0, T.H)({
                        initialSelectedEffectId: u.id,
                        analyticsLocations: s
                    });
            }, [n, l, t.type, u, s]);
        return (0, i.jsx)(f.zxk, {
            color: a ? f.Ttl.PRIMARY : f.Ttl.BRAND,
            onClick: d,
            children: H.intl.string(H.t['2p2aY2'])
        });
    },
    ee = (e) => {
        let { transitionState: t, product: n, onClose: s, analyticsLocations: o, overrideTitle: l, overrideDescription: u, shouldShowPromotionalExperience: c } = e,
            _ = (0, d.e7)([A.Z], () => A.Z.purchases),
            p = (0, N.o)(n, _),
            h = (0, Z.W)(n, p),
            m = r.useRef(new a.qA()),
            [g, E] = r.useState(null),
            v = (0, F.UY)(h.skuId);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.O_, {
                    ref: E,
                    className: Y.confettiCanvas,
                    environment: m.current
                }),
                (0, i.jsxs)(f.Y0X, {
                    hideShadow: !0,
                    transitionState: t,
                    size: f.CgR.DYNAMIC,
                    className: Y.modalRoot,
                    children: [
                        null != v &&
                            (0, i.jsx)('img', {
                                src: v.imageSrc,
                                className: Y.customConfetti,
                                style: v.style,
                                alt: '',
                                'aria-hidden': 'true'
                            }),
                        (0, i.jsx)(f.hzk, {
                            className: Y.modalContent,
                            scrollbarType: 'none',
                            children: (0, i.jsx)(Q, {
                                product: h,
                                onClose: s,
                                confettiCanvas: g,
                                hideConfetti: null != v,
                                analyticsLocations: o,
                                overrideTitle: l,
                                overrideDescription: u,
                                selectedVariantIndex: p,
                                shouldShowPromotionalExperience: c
                            })
                        })
                    ]
                })
            ]
        });
    };
