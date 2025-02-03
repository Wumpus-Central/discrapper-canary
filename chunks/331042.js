n.d(t, {
    default: () => q,
    e: () => z
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
    C = n(890249),
    R = n(228624),
    O = n(318028),
    D = n(635552),
    x = n(905357),
    L = n(328456),
    P = n(624377),
    w = n(530618),
    M = n(141011),
    k = n(372654),
    U = n(216541),
    G = n(58201),
    B = n(302800),
    Z = n(215023),
    F = n(388032),
    V = n(493200),
    j = n(660097);
let H = 880,
    Y = (e) => {
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
            s = (0, x.k)(t);
        return (0, u.EQ)(t.type)
            .with(c.Z.PROFILE_EFFECT, () =>
                (0, i.jsx)('div', {
                    className: V.profileEffectShopPreview,
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
                        src: j,
                        avatarDecoration: a,
                        className: V.avatarDecoration,
                        'aria-label': s
                    })
                )
            )
            .with(c.Z.BUNDLE, () =>
                (0, i.jsx)('div', {
                    className: V.bundlePreview,
                    children: (0, i.jsx)(U.d, {
                        product: t,
                        user: r,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: V.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    W = (e) => {
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
                    className: V.easterEggContainer,
                    style: c,
                    children: (0, i.jsx)(Y, {
                        product: t,
                        item: n
                    })
                }),
                (0, i.jsx)(l.animated.div, {
                    className: V.easterEggContainer,
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
    K = (e) => {
        let { product: t, item: n, reducedMotion: r = !1 } = e,
            a = (0, B.v)(t.categorySkuId);
        return null != a
            ? (0, i.jsx)(W, {
                  product: t,
                  item: n,
                  reducedMotion: r,
                  displayOptions: a
              })
            : (0, i.jsx)(Y, {
                  product: t,
                  item: n
              });
    },
    z = (e) => {
        var t, n;
        let { product: a, onClose: s, confettiTarget: l, confettiCanvas: E, hideConfetti: I = !1, analyticsLocations: T, title: S, description: A, selectedVariantIndex: U, shouldShowPromotionalExperience: B } = e,
            j = (0, G.W)(a, U),
            { confettiColors: Y } = (0, P.Z)(j.styles),
            W = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
            z = (0, C.m)('CollectiblesCollectedModal'),
            q = (0, R.ed)('CollectiblesCollectedModal'),
            Q = (0, x.k)(j),
            X = (0, v.Z)(),
            J = null == X ? void 0 : null === (t = X.giftPurchaseConfirmation) || void 0 === t ? void 0 : t.rewardCollectedText(),
            [$] = j.items,
            ee = r.useRef(null),
            { analyticsLocations: et } = (0, m.ZP)([...T, h.Z.COLLECTIBLES_COLLECTED_MODAL]),
            en = (0, y.Z)({ analyticsLocations: et }),
            ei = r.useCallback(() => {
                if ((s(), (0, _.xf)(), en(), j.type === c.Z.AVATAR_DECORATION)) {
                    o()($.type === c.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, g.ps)({
                            initialSelectedDecoration: $,
                            analyticsLocations: et
                        });
                    return;
                }
                j.type === c.Z.PROFILE_EFFECT &&
                    (0, b.H)({
                        initialSelectedEffectId: $.id,
                        analyticsLocations: et
                    });
            }, [s, en, j.type, $, et]),
            { handleUseNow: er, isApplying: ea } = (0, D.W)({
                product: j,
                onSuccess: s,
                onError: s
            }),
            { firstAvatarDecoration: es, firstProfileEffect: eo } = (0, L.R)(j),
            el = (0, N.x6)(j) ? null != es && null != eo : null != es || null != eo,
            eu = (0, N.x6)(j) || z,
            { category: ec, isFetching: ed } = (0, O.l)(j.skuId),
            ef = null !== (n = null == ec ? void 0 : ec.successModalBg) && void 0 !== n ? n : j.banner,
            e_ = ed ? void 0 : ef;
        return (0, i.jsxs)(m.Gt, {
            value: et,
            children: [
                (0, i.jsxs)('div', {
                    className: V.modalInner,
                    ref: ee,
                    children: [
                        (0, i.jsxs)('div', {
                            className: V.bannerContainer,
                            children: [
                                B
                                    ? (0, i.jsx)('div', { className: V.promotionalBanner })
                                    : (0, i.jsx)(M.Z, {
                                          asset: e_,
                                          size: (0, k.ML)(H),
                                          className: V.decorationBanner,
                                          categoryBannerOverride: (0, Z.ZS)(j.categorySkuId)
                                      }),
                                (0, i.jsx)(K, {
                                    product: j,
                                    item: $,
                                    reducedMotion: W
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: V.collectedInfoContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: V.collectedTextContainer,
                                    children: [
                                        (0, i.jsx)(f.X6q, {
                                            variant: 'heading-lg/bold',
                                            children: null != S ? S : q && !B ? F.intl.string(F.t['1xr2SU']) : F.intl.format(F.t.YNaxMj, { itemName: Q })
                                        }),
                                        (0, i.jsx)(f.Text, {
                                            variant: 'text-sm/normal',
                                            children:
                                                null != A
                                                    ? A
                                                    : (0, u.EQ)(null == j ? void 0 : j.type)
                                                          .with(c.Z.BUNDLE, () => F.intl.string(F.t.zJPoLy))
                                                          .with(c.Z.PROFILE_EFFECT, () => F.intl.string(F.t.f9M1YG))
                                                          .otherwise(() => (B && null != J ? J : F.intl.string(F.t['44b50t'])))
                                        })
                                    ]
                                }),
                                eu
                                    ? (0, i.jsxs)('div', {
                                          className: V.buttons,
                                          children: [
                                              (0, i.jsx)(f.zxk, {
                                                  color: el ? f.Ttl.PRIMARY : f.Ttl.BRAND,
                                                  onClick: ei,
                                                  children: F.intl.string(F.t['2p2aY2'])
                                              }),
                                              el
                                                  ? (0, i.jsx)(f.zxk, {
                                                        onClick: er,
                                                        submitting: ea,
                                                        children: F.intl.string(F.t.MAS7uL)
                                                    })
                                                  : null
                                          ]
                                      })
                                    : (0, i.jsx)(f.zxk, {
                                          onClick: ei,
                                          children: F.intl.string(F.t.MAS7uL)
                                      })
                            ]
                        }),
                        (0, i.jsx)(f.olH, {
                            onClick: s,
                            className: V.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !I &&
                    !W &&
                    (0, i.jsx)(w.Z, {
                        confettiTarget: null != l ? l : ee.current,
                        confettiCanvas: E,
                        sprites: (0, k.vK)(j.categorySkuId),
                        colors: null == Y ? void 0 : Y.map((e) => e.toHexString())
                    })
            ]
        });
    },
    q = (e) => {
        let { transitionState: t, product: n, onClose: s, analyticsLocations: o, title: l, description: u, shouldShowPromotionalExperience: c } = e,
            _ = (0, d.e7)([S.Z], () => S.Z.purchases),
            p = (0, A.o)(n, _),
            h = (0, G.W)(n, p),
            m = r.useRef(new a.qA()),
            [g, E] = r.useState(null),
            v = (0, B.UY)(h.skuId);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.O_, {
                    ref: E,
                    className: V.confettiCanvas,
                    environment: m.current
                }),
                (0, i.jsxs)(f.Y0X, {
                    hideShadow: !0,
                    transitionState: t,
                    size: f.CgR.DYNAMIC,
                    className: V.modalRoot,
                    children: [
                        null != v &&
                            (0, i.jsx)('img', {
                                src: v.imageSrc,
                                className: V.customConfetti,
                                style: v.style,
                                alt: '',
                                'aria-hidden': 'true'
                            }),
                        (0, i.jsx)(f.hzk, {
                            className: V.modalContent,
                            scrollbarType: 'none',
                            children: (0, i.jsx)(z, {
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
