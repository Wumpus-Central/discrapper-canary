n.d(t, {
    default: () => q,
    e: () => W
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
    E = n(286961),
    v = n(300284),
    y = n(876917),
    I = n(642619),
    T = n(594174),
    b = n(1870),
    S = n(429368),
    A = n(884697),
    N = n(228624),
    C = n(318028),
    R = n(635552),
    O = n(905357),
    D = n(328456),
    L = n(624377),
    x = n(530618),
    P = n(141011),
    w = n(372654),
    M = n(616066),
    k = n(216541),
    U = n(58201),
    G = n(302800),
    B = n(215023),
    Z = n(388032),
    F = n(205596);
let V = 880,
    j = (e) => {
        let { product: t } = e,
            [n] = t.items,
            r = (0, d.e7)([T.default], () => {
                let e = T.default.getCurrentUser();
                return o()(null != e, 'User cannot be undefined'), e;
            });
        return (0, u.EQ)(t.type)
            .with(c.Z.PROFILE_EFFECT, () =>
                (0, i.jsx)('div', {
                    className: F.profileEffectShopPreview,
                    children: (0, i.jsx)(y.Z, {
                        forCollectedModal: !0,
                        profileEffectId: n.id
                    })
                })
            )
            .with(
                c.Z.AVATAR_DECORATION,
                () => (
                    o()(n.type === c.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                    (0, i.jsx)('div', {
                        className: F.avatarDecoration,
                        children: (0, i.jsx)(M.R, {
                            item: n,
                            user: r,
                            avatarSize: f.EFr.SIZE_120,
                            isPurchased: !1,
                            isHighlighted: !0
                        })
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
    H = (e) => {
        let { product: t, reducedMotion: n, displayOptions: a } = e,
            [s, o] = r.useState(!1),
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
                onRest: () => setTimeout(() => o(!0), 100)
            }),
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
                reverse: s
            }),
            d = (0, f.q_F)(
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
                    style: u,
                    children: (0, i.jsx)(j, { product: t })
                }),
                (0, i.jsx)(l.animated.div, {
                    className: F.easterEggContainer,
                    style: n ? d : c,
                    children: (0, i.jsx)('img', {
                        src: a.imageSrc,
                        style: a.style,
                        alt: '',
                        'aria-hidden': 'true'
                    })
                })
            ]
        });
    },
    Y = (e) => {
        let { product: t, reducedMotion: n = !1 } = e,
            r = (0, G.v)(t.categorySkuId);
        return null != r
            ? (0, i.jsx)(H, {
                  product: t,
                  reducedMotion: n,
                  displayOptions: r
              })
            : (0, i.jsx)(j, { product: t });
    },
    W = (e) => {
        var t;
        let { product: n, onClose: a, confettiTarget: s, confettiCanvas: o, hideConfetti: l = !1, analyticsLocations: u, overrideTitle: c, overrideDescription: _, selectedVariantIndex: g, shouldShowPromotionalExperience: E } = e,
            v = (0, U.W)(n, g),
            { confettiColors: y } = (0, L.Z)(v.styles),
            I = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
            T = r.useRef(null),
            { analyticsLocations: b } = (0, m.ZP)([...u, h.Z.COLLECTIBLES_COLLECTED_MODAL]),
            { category: S, isFetching: A } = (0, C.l)(v.skuId),
            N = null !== (t = null == S ? void 0 : S.successModalBg) && void 0 !== t ? t : v.banner,
            R = A ? void 0 : N;
        return (0, i.jsxs)(m.Gt, {
            value: b,
            children: [
                (0, i.jsxs)('div', {
                    className: F.modalInner,
                    ref: T,
                    children: [
                        (0, i.jsxs)('div', {
                            className: F.bannerContainer,
                            children: [
                                E
                                    ? (0, i.jsx)('div', { className: F.promotionalBanner })
                                    : (0, i.jsx)(P.Z, {
                                          asset: R,
                                          size: (0, w.ML)(V),
                                          className: F.decorationBanner,
                                          categoryBannerOverride: (0, B.ZS)(v.categorySkuId)
                                      }),
                                (0, i.jsx)(Y, {
                                    product: v,
                                    reducedMotion: I
                                })
                            ]
                        }),
                        (0, i.jsx)(K, {
                            product: n,
                            onClose: a,
                            analyticsLocations: b,
                            overrideTitle: c,
                            overrideDescription: _,
                            selectedVariantIndex: g,
                            shouldShowPromotionalExperience: E
                        }),
                        (0, i.jsx)(f.olH, {
                            onClick: a,
                            className: F.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !l &&
                    !I &&
                    (0, i.jsx)(x.Z, {
                        confettiTarget: null != s ? s : T.current,
                        confettiCanvas: o,
                        sprites: (0, w.vK)(v.categorySkuId),
                        colors: null == y ? void 0 : y.map((e) => e.toHexString())
                    })
            ]
        });
    },
    K = (e) => {
        var t;
        let { product: n, onClose: a, analyticsLocations: s, overrideTitle: o, overrideDescription: l, shouldShowPromotionalExperience: d } = e,
            _ = (0, N.ed)('CollectiblesCollectedModal'),
            p = (0, O.k)(n),
            h = (0, E.Z)(),
            m = null == h ? void 0 : null === (t = h.giftPurchaseConfirmation) || void 0 === t ? void 0 : t.rewardCollectedText(),
            { handleUseNow: g, isApplying: v } = (0, R.W)({
                product: n,
                onSuccess: a,
                onError: a
            }),
            { firstAvatarDecoration: y, firstProfileEffect: I } = (0, D.R)(n),
            T = (0, A.x6)(n) ? null != y && null != I : null != y || null != I,
            b = r.useMemo(() => (null != o ? o : _ && !d ? Z.intl.string(Z.t['1xr2SU']) : Z.intl.format(Z.t.YNaxMj, { itemName: p })), [o, _, d, p]),
            S = r.useMemo(
                () =>
                    null != l
                        ? l
                        : (0, u.EQ)(null == n ? void 0 : n.type)
                              .with(c.Z.BUNDLE, () => Z.intl.string(Z.t.zJPoLy))
                              .with(c.Z.PROFILE_EFFECT, () => Z.intl.string(Z.t.f9M1YG))
                              .otherwise(() => (d && null != m ? m : Z.intl.string(Z.t['44b50t']))),
                [l, null == n ? void 0 : n.type, m, d]
            );
        return (0, i.jsxs)('div', {
            className: F.collectedInfoContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: F.collectedTextContainer,
                    children: [
                        (0, i.jsx)(f.X6q, {
                            variant: 'heading-lg/bold',
                            children: b
                        }),
                        (0, i.jsx)(f.Text, {
                            variant: 'text-sm/normal',
                            children: S
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: F.buttons,
                    children: [
                        (0, i.jsx)(z, {
                            product: n,
                            onClose: a,
                            hasRequiredProductItems: T,
                            analyticsLocations: s
                        }),
                        T
                            ? (0, i.jsx)(f.zxk, {
                                  onClick: g,
                                  submitting: v,
                                  children: Z.intl.string(Z.t.MAS7uL)
                              })
                            : null
                    ]
                })
            ]
        });
    },
    z = (e) => {
        let { product: t, onClose: n, hasRequiredProductItems: a, analyticsLocations: s } = e,
            l = (0, v.Z)({ analyticsLocations: s }),
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
                    (0, I.H)({
                        initialSelectedEffectId: u.id,
                        analyticsLocations: s
                    });
            }, [n, l, t.type, u, s]);
        return (0, i.jsx)(f.zxk, {
            color: a ? f.Ttl.PRIMARY : f.Ttl.BRAND,
            onClick: d,
            children: Z.intl.string(Z.t['2p2aY2'])
        });
    },
    q = (e) => {
        let { transitionState: t, product: n, onClose: s, analyticsLocations: o, overrideTitle: l, overrideDescription: u, shouldShowPromotionalExperience: c } = e,
            _ = (0, d.e7)([b.Z], () => b.Z.purchases),
            p = (0, S.o)(n, _),
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
                            children: (0, i.jsx)(W, {
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
