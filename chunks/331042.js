n.d(t, {
    default: () => z,
    e: () => K
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
    E = n(125988),
    v = n(286961),
    y = n(300284),
    I = n(876917),
    b = n(642619),
    T = n(594174),
    S = n(1870),
    A = n(429368),
    N = n(884697),
    C = n(228624),
    R = n(318028),
    O = n(635552),
    D = n(905357),
    x = n(328456),
    L = n(624377),
    P = n(530618),
    w = n(141011),
    M = n(372654),
    k = n(216541),
    U = n(58201),
    G = n(302800),
    B = n(215023),
    Z = n(388032),
    F = n(493200),
    V = n(660097);
let j = 880,
    H = (e) => {
        let { product: t, item: n } = e,
            r = (0, d.e7)([T.default], () => {
                let e = T.default.getCurrentUser();
                return o()(null != e, 'User cannot be undefined'), e;
            }),
            { avatarDecorationSrc: a } = (0, E.Z)({
                user: r,
                avatarDecorationOverride: (null == n ? void 0 : n.type) === c.Z.AVATAR_DECORATION ? n : null,
                size: (0, g.y9)(f.EFr.SIZE_120)
            }),
            s = (0, D.k)(t);
        return (0, u.EQ)(t.type)
            .with(c.Z.PROFILE_EFFECT, () =>
                (0, i.jsx)('div', {
                    className: F.profileEffectShopPreview,
                    children: (0, i.jsx)(I.Z, {
                        forCollectedModal: !0,
                        profileEffectId: n.id
                    })
                })
            )
            .with(
                c.Z.AVATAR_DECORATION,
                () => (
                    o()(n.type === c.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                    (0, i.jsx)(f.qEK, {
                        size: f.EFr.SIZE_120,
                        src: V,
                        avatarDecoration: a,
                        className: F.avatarDecoration,
                        'aria-label': s
                    })
                )
            )
            .with(c.Z.BUNDLE, () =>
                (0, i.jsx)('div', {
                    className: F.bundlePreview,
                    children: (0, i.jsx)(k.d, {
                        product: t,
                        user: r,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: F.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    Y = (e) => {
        let { product: t, item: n, reducedMotion: a, displayOptions: s } = e,
            [o, u] = r.useState(!1),
            c = (0, f.q_F)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => u(!0), 100)
            }),
            d = (0, f.q_F)({
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
            _ = (0, f.q_F)(
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
                    className: F.easterEggContainer,
                    style: c,
                    children: (0, i.jsx)(H, {
                        product: t,
                        item: n
                    })
                }),
                (0, i.jsx)(l.animated.div, {
                    className: F.easterEggContainer,
                    style: a ? _ : d,
                    children: (0, i.jsx)('img', {
                        src: s.imageSrc,
                        style: s.style,
                        alt: '',
                        'aria-hidden': 'true'
                    })
                })
            ]
        });
    },
    W = (e) => {
        let { product: t, item: n, reducedMotion: r = !1 } = e,
            a = (0, G.v)(t.categorySkuId);
        return null != a
            ? (0, i.jsx)(Y, {
                  product: t,
                  item: n,
                  reducedMotion: r,
                  displayOptions: a
              })
            : (0, i.jsx)(H, {
                  product: t,
                  item: n
              });
    },
    K = (e) => {
        var t, n;
        let { product: a, onClose: s, confettiTarget: l, confettiCanvas: E, hideConfetti: I = !1, analyticsLocations: T, title: S, description: A, selectedVariantIndex: k, shouldShowPromotionalExperience: G } = e,
            V = (0, U.W)(a, k),
            { confettiColors: H } = (0, L.Z)(V.styles),
            Y = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
            K = (0, C.ed)('CollectiblesCollectedModal'),
            z = (0, D.k)(V),
            q = (0, v.Z)(),
            Q = null == q ? void 0 : null === (t = q.giftPurchaseConfirmation) || void 0 === t ? void 0 : t.rewardCollectedText(),
            [X] = V.items,
            J = r.useRef(null),
            { analyticsLocations: $ } = (0, m.ZP)([...T, h.Z.COLLECTIBLES_COLLECTED_MODAL]),
            ee = (0, y.Z)({ analyticsLocations: $ }),
            et = r.useCallback(() => {
                if ((s(), (0, _.xf)(), ee(), V.type === c.Z.AVATAR_DECORATION)) {
                    o()(X.type === c.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, g.ps)({
                            initialSelectedDecoration: X,
                            analyticsLocations: $
                        });
                    return;
                }
                V.type === c.Z.PROFILE_EFFECT &&
                    (0, b.H)({
                        initialSelectedEffectId: X.id,
                        analyticsLocations: $
                    });
            }, [s, ee, V.type, X, $]),
            { handleUseNow: en, isApplying: ei } = (0, O.W)({
                product: V,
                onSuccess: s,
                onError: s
            }),
            { firstAvatarDecoration: er, firstProfileEffect: ea } = (0, x.R)(V),
            es = (0, N.x6)(V) ? null != er && null != ea : null != er || null != ea,
            { category: eo, isFetching: el } = (0, R.l)(V.skuId),
            eu = null !== (n = null == eo ? void 0 : eo.successModalBg) && void 0 !== n ? n : V.banner,
            ec = el ? void 0 : eu;
        return (0, i.jsxs)(m.Gt, {
            value: $,
            children: [
                (0, i.jsxs)('div', {
                    className: F.modalInner,
                    ref: J,
                    children: [
                        (0, i.jsxs)('div', {
                            className: F.bannerContainer,
                            children: [
                                G
                                    ? (0, i.jsx)('div', { className: F.promotionalBanner })
                                    : (0, i.jsx)(w.Z, {
                                          asset: ec,
                                          size: (0, M.ML)(j),
                                          className: F.decorationBanner,
                                          categoryBannerOverride: (0, B.ZS)(V.categorySkuId)
                                      }),
                                (0, i.jsx)(W, {
                                    product: V,
                                    item: X,
                                    reducedMotion: Y
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: F.collectedInfoContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: F.collectedTextContainer,
                                    children: [
                                        (0, i.jsx)(f.X6q, {
                                            variant: 'heading-lg/bold',
                                            children: null != S ? S : K && !G ? Z.intl.string(Z.t['1xr2SU']) : Z.intl.format(Z.t.YNaxMj, { itemName: z })
                                        }),
                                        (0, i.jsx)(f.Text, {
                                            variant: 'text-sm/normal',
                                            children:
                                                null != A
                                                    ? A
                                                    : (0, u.EQ)(null == V ? void 0 : V.type)
                                                          .with(c.Z.BUNDLE, () => Z.intl.string(Z.t.zJPoLy))
                                                          .with(c.Z.PROFILE_EFFECT, () => Z.intl.string(Z.t.f9M1YG))
                                                          .otherwise(() => (G && null != Q ? Q : Z.intl.string(Z.t['44b50t'])))
                                        })
                                    ]
                                }),
                                (0, i.jsxs)('div', {
                                    className: F.buttons,
                                    children: [
                                        (0, i.jsx)(f.zxk, {
                                            color: es ? f.Ttl.PRIMARY : f.Ttl.BRAND,
                                            onClick: et,
                                            children: Z.intl.string(Z.t['2p2aY2'])
                                        }),
                                        es
                                            ? (0, i.jsx)(f.zxk, {
                                                  onClick: en,
                                                  submitting: ei,
                                                  children: Z.intl.string(Z.t.MAS7uL)
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)(f.olH, {
                            onClick: s,
                            className: F.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !I &&
                    !Y &&
                    (0, i.jsx)(P.Z, {
                        confettiTarget: null != l ? l : J.current,
                        confettiCanvas: E,
                        sprites: (0, M.vK)(V.categorySkuId),
                        colors: null == H ? void 0 : H.map((e) => e.toHexString())
                    })
            ]
        });
    },
    z = (e) => {
        let { transitionState: t, product: n, onClose: s, analyticsLocations: o, title: l, description: u, shouldShowPromotionalExperience: c } = e,
            _ = (0, d.e7)([S.Z], () => S.Z.purchases),
            p = (0, A.o)(n, _),
            h = (0, U.W)(n, p),
            m = r.useRef(new a.qA()),
            [g, E] = r.useState(null),
            v = (0, G.UY)(h.skuId);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.O_, {
                    ref: E,
                    className: F.confettiCanvas,
                    environment: m.current
                }),
                (0, i.jsxs)(f.Y0X, {
                    hideShadow: !0,
                    transitionState: t,
                    size: f.CgR.DYNAMIC,
                    className: F.modalRoot,
                    children: [
                        null != v &&
                            (0, i.jsx)('img', {
                                src: v.imageSrc,
                                className: F.customConfetti,
                                style: v.style,
                                alt: '',
                                'aria-hidden': 'true'
                            }),
                        (0, i.jsx)(f.hzk, {
                            className: F.modalContent,
                            scrollbarType: 'none',
                            children: (0, i.jsx)(K, {
                                product: h,
                                onClose: s,
                                confettiCanvas: g,
                                hideConfetti: null != v,
                                analyticsLocations: o,
                                title: l,
                                description: u,
                                selectedVariantIndex: p,
                                shouldShowPromotionalExperience: c
                            })
                        })
                    ]
                })
            ]
        });
    };
