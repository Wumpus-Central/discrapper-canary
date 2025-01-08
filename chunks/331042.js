n.r(e),
    n.d(e, {
        CollectiblesCollectedModalInner: function () {
            return Q;
        }
    }),
    n(47120),
    n(627341);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    s = n(119617),
    l = n(512722),
    c = n.n(l),
    d = n(666912),
    u = n(278074),
    f = n(979554),
    p = n(399606),
    g = n(481060),
    v = n(37234),
    h = n(607070),
    b = n(100527),
    m = n(906732),
    x = n(1585),
    C = n(125988),
    S = n(286961),
    T = n(300284),
    E = n(876917),
    y = n(642619),
    A = n(594174),
    O = n(1870),
    I = n(429368),
    R = n(884697),
    N = n(890249),
    w = n(228624),
    Z = n(318028),
    M = n(635552),
    k = n(905357),
    j = n(328456),
    _ = n(624377),
    L = n(530618),
    P = n(141011),
    D = n(372654),
    B = n(216541),
    F = n(58201),
    H = n(302800),
    U = n(215023),
    z = n(388032),
    V = n(493200),
    Y = n(660097);
let G = (t) => {
        let { product: e, item: n } = t,
            a = (0, p.e7)([A.default], () => {
                let t = A.default.getCurrentUser();
                return c()(null != t, 'User cannot be undefined'), t;
            }),
            { avatarDecorationSrc: i } = (0, C.Z)({
                user: a,
                avatarDecorationOverride: (null == n ? void 0 : n.type) === f.Z.AVATAR_DECORATION ? n : null,
                size: (0, x.y9)(g.AvatarSizes.SIZE_120)
            }),
            o = (0, k.k)(e);
        return (0, u.EQ)(e.type)
            .with(f.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: V.profileEffectShopPreview,
                    children: (0, r.jsx)(E.Z, {
                        forCollectedModal: !0,
                        profileEffectId: n.id
                    })
                })
            )
            .with(
                f.Z.AVATAR_DECORATION,
                () => (
                    c()(n.type === f.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                    (0, r.jsx)(g.Avatar, {
                        size: g.AvatarSizes.SIZE_120,
                        src: Y,
                        avatarDecoration: i,
                        className: V.avatarDecoration,
                        'aria-label': o
                    })
                )
            )
            .with(f.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: V.bundlePreview,
                    children: (0, r.jsx)(B.d, {
                        product: e,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: V.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    X = (t) => {
        let { product: e, item: n, reducedMotion: i, displayOptions: o } = t,
            [s, l] = a.useState(!1),
            c = (0, g.useSpring)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => l(!0), 100)
            }),
            u = (0, g.useSpring)({
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
            f = (0, g.useSpring)(
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
                (0, r.jsx)(d.animated.div, {
                    className: V.easterEggContainer,
                    style: c,
                    children: (0, r.jsx)(G, {
                        product: e,
                        item: n
                    })
                }),
                (0, r.jsx)(d.animated.div, {
                    className: V.easterEggContainer,
                    style: i ? f : u,
                    children: (0, r.jsx)('img', {
                        src: o.imageSrc,
                        style: o.style,
                        alt: '',
                        'aria-hidden': 'true'
                    })
                })
            ]
        });
    },
    W = (t) => {
        let { product: e, item: n, reducedMotion: a = !1 } = t,
            i = (0, H.v)(e.categorySkuId);
        return null != i
            ? (0, r.jsx)(X, {
                  product: e,
                  item: n,
                  reducedMotion: a,
                  displayOptions: i
              })
            : (0, r.jsx)(G, {
                  product: e,
                  item: n
              });
    },
    Q = (t) => {
        var e, n;
        let { product: i, onClose: s, confettiTarget: l, confettiCanvas: d, hideConfetti: C = !1, analyticsLocations: E, title: A, description: O, selectedVariantIndex: I, shouldShowPromotionalExperience: B } = t,
            H = (0, F.W)(i, I),
            { confettiColors: Y } = (0, _.Z)(H.styles),
            G = (0, p.e7)([h.Z], () => h.Z.useReducedMotion),
            X = (0, N.m)('CollectiblesCollectedModal'),
            Q = (0, w.ed)('CollectiblesCollectedModal'),
            K = (0, k.k)(H),
            q = (0, S.Z)(),
            J = null == q ? void 0 : null === (e = q.giftPurchaseConfirmation) || void 0 === e ? void 0 : e.rewardCollectedText(),
            [$] = H.items,
            tt = a.useRef(null),
            { analyticsLocations: te } = (0, m.ZP)([...E, b.Z.COLLECTIBLES_COLLECTED_MODAL]),
            tn = (0, T.Z)({ analyticsLocations: te }),
            tr = a.useCallback(() => {
                if ((s(), (0, v.xf)(), tn(), H.type === f.Z.AVATAR_DECORATION)) {
                    c()($.type === f.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, x.ps)({
                            initialSelectedDecoration: $,
                            analyticsLocations: te
                        });
                    return;
                }
                H.type === f.Z.PROFILE_EFFECT &&
                    (0, y.H)({
                        initialSelectedEffectId: $.id,
                        analyticsLocations: te
                    });
            }, [s, tn, H.type, $, te]),
            { handleUseNow: ta, isApplying: ti } = (0, M.W)({
                product: H,
                onSuccess: s,
                onError: s
            }),
            { firstAvatarDecoration: to, firstProfileEffect: ts } = (0, j.R)(H),
            tl = (0, R.x6)(H) ? null != to && null != ts : null != to || null != ts,
            tc = (0, R.x6)(H) || X,
            { category: td, isFetching: tu } = (0, Z.l)(H.skuId),
            tf = null !== (n = null == td ? void 0 : td.successModalBg) && void 0 !== n ? n : H.banner;
        return (0, r.jsxs)(m.Gt, {
            value: te,
            children: [
                (0, r.jsxs)('div', {
                    className: V.modalInner,
                    ref: tt,
                    children: [
                        (0, r.jsxs)('div', {
                            className: V.bannerContainer,
                            children: [
                                B
                                    ? (0, r.jsx)('div', { className: V.seasonalBanner })
                                    : (0, r.jsx)(P.Z, {
                                          asset: tu ? void 0 : tf,
                                          size: (0, D.ML)(880),
                                          className: V.decorationBanner,
                                          categoryBannerOverride: (0, U.ZS)(H.categorySkuId)
                                      }),
                                (0, r.jsx)(W, {
                                    product: H,
                                    item: $,
                                    reducedMotion: G
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: V.collectedInfoContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: V.collectedTextContainer,
                                    children: [
                                        (0, r.jsx)(g.Heading, {
                                            variant: 'heading-lg/bold',
                                            children: null != A ? A : Q ? z.intl.string(z.t['1xr2SU']) : z.intl.format(z.t.YNaxMj, { itemName: K })
                                        }),
                                        (0, r.jsx)(g.Text, {
                                            variant: 'text-sm/normal',
                                            children:
                                                null != O
                                                    ? O
                                                    : (0, u.EQ)(null == H ? void 0 : H.type)
                                                          .with(f.Z.BUNDLE, () => z.intl.string(z.t.zJPoLy))
                                                          .with(f.Z.PROFILE_EFFECT, () => z.intl.string(z.t.f9M1YG))
                                                          .otherwise(() => (B && null != J ? J : z.intl.string(z.t['44b50t'])))
                                        })
                                    ]
                                }),
                                tc
                                    ? (0, r.jsxs)('div', {
                                          className: V.buttons,
                                          children: [
                                              (0, r.jsx)(g.Button, {
                                                  color: tl ? g.ButtonColors.PRIMARY : g.ButtonColors.BRAND,
                                                  onClick: tr,
                                                  children: z.intl.string(z.t['2p2aY2'])
                                              }),
                                              tl
                                                  ? (0, r.jsx)(g.Button, {
                                                        onClick: ta,
                                                        submitting: ti,
                                                        children: z.intl.string(z.t.MAS7uL)
                                                    })
                                                  : null
                                          ]
                                      })
                                    : (0, r.jsx)(g.Button, {
                                          className: o()({ [V.seaonalButtonGradient]: B }),
                                          onClick: tr,
                                          children: z.intl.string(z.t.MAS7uL)
                                      })
                            ]
                        }),
                        (0, r.jsx)(g.ModalCloseButton, {
                            onClick: s,
                            className: V.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !C &&
                    !G &&
                    (0, r.jsx)(L.Z, {
                        confettiTarget: null != l ? l : tt.current,
                        confettiCanvas: d,
                        sprites: (0, D.vK)(H.categorySkuId),
                        colors: null == Y ? void 0 : Y.map((t) => t.toHexString())
                    })
            ]
        });
    };
e.default = (t) => {
    let { transitionState: e, product: n, onClose: i, analyticsLocations: o, title: l, description: c, shouldShowPromotionalExperience: d } = t,
        u = (0, p.e7)([O.Z], () => O.Z.purchases),
        f = (0, I.o)(n, u),
        v = (0, F.W)(n, f),
        h = a.useRef(new s.qA()),
        [b, m] = a.useState(null),
        x = (0, H.UY)(v.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: m,
                className: V.confettiCanvas,
                environment: h.current
            }),
            (0, r.jsxs)(g.ModalRoot, {
                hideShadow: !0,
                transitionState: e,
                size: g.ModalSize.DYNAMIC,
                className: V.modalRoot,
                children: [
                    null != x &&
                        (0, r.jsx)('img', {
                            src: x.imageSrc,
                            className: V.customConfetti,
                            style: x.style,
                            alt: '',
                            'aria-hidden': 'true'
                        }),
                    (0, r.jsx)(g.ModalContent, {
                        className: V.modalContent,
                        children: (0, r.jsx)(Q, {
                            product: v,
                            onClose: i,
                            confettiCanvas: b,
                            hideConfetti: null != x,
                            analyticsLocations: o,
                            title: l,
                            description: c,
                            selectedVariantIndex: f,
                            shouldShowPromotionalExperience: d
                        })
                    })
                ]
            })
        ]
    });
};
