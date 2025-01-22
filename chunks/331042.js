r.r(n),
    r.d(n, {
        CollectiblesCollectedModalInner: function () {
            return ee;
        }
    });
var i = r(47120);
var a = r(627341);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(119617),
    d = r(512722),
    f = r.n(d),
    p = r(642128),
    h = r(278074),
    _ = r(979554),
    m = r(399606),
    g = r(481060),
    E = r(37234),
    v = r(607070),
    y = r(100527),
    b = r(906732),
    I = r(1585),
    T = r(125988),
    S = r(286961),
    A = r(300284),
    C = r(876917),
    N = r(642619),
    R = r(594174),
    O = r(1870),
    D = r(429368),
    L = r(884697),
    x = r(890249),
    w = r(228624),
    P = r(318028),
    M = r(635552),
    k = r(905357),
    U = r(328456),
    B = r(624377),
    G = r(530618),
    Z = r(141011),
    F = r(372654),
    V = r(216541),
    j = r(58201),
    H = r(302800),
    Y = r(215023),
    W = r(388032),
    K = r(493200),
    z = r(660097);
let q = 880,
    Q = (e) => {
        let { transitionState: n, product: r, onClose: i, analyticsLocations: a, title: l, description: u, shouldShowPromotionalExperience: d } = e,
            f = (0, m.e7)([O.Z], () => O.Z.purchases),
            p = (0, D.o)(r, f),
            h = (0, j.W)(r, p),
            _ = s.useRef(new c.qA()),
            [E, v] = s.useState(null),
            y = (0, H.UY)(h.skuId);
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(c.O_, {
                    ref: v,
                    className: K.confettiCanvas,
                    environment: _.current
                }),
                (0, o.jsxs)(g.ModalRoot, {
                    hideShadow: !0,
                    transitionState: n,
                    size: g.ModalSize.DYNAMIC,
                    className: K.modalRoot,
                    children: [
                        null != y &&
                            (0, o.jsx)('img', {
                                src: y.imageSrc,
                                className: K.customConfetti,
                                style: y.style,
                                alt: '',
                                'aria-hidden': 'true'
                            }),
                        (0, o.jsx)(g.ModalContent, {
                            className: K.modalContent,
                            children: (0, o.jsx)(ee, {
                                product: h,
                                onClose: i,
                                confettiCanvas: E,
                                hideConfetti: null != y,
                                analyticsLocations: a,
                                title: l,
                                description: u,
                                selectedVariantIndex: p,
                                shouldShowPromotionalExperience: d
                            })
                        })
                    ]
                })
            ]
        });
    },
    X = (e) => {
        let { product: n, item: r } = e,
            i = (0, m.e7)([R.default], () => {
                let e = R.default.getCurrentUser();
                return f()(null != e, 'User cannot be undefined'), e;
            }),
            { avatarDecorationSrc: a } = (0, T.Z)({
                user: i,
                avatarDecorationOverride: (null == r ? void 0 : r.type) === _.Z.AVATAR_DECORATION ? r : null,
                size: (0, I.y9)(g.AvatarSizes.SIZE_120)
            }),
            s = (0, k.k)(n);
        return (0, h.EQ)(n.type)
            .with(_.Z.PROFILE_EFFECT, () =>
                (0, o.jsx)('div', {
                    className: K.profileEffectShopPreview,
                    children: (0, o.jsx)(C.Z, {
                        forCollectedModal: !0,
                        profileEffectId: r.id
                    })
                })
            )
            .with(
                _.Z.AVATAR_DECORATION,
                () => (
                    f()(r.type === _.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                    (0, o.jsx)(g.Avatar, {
                        size: g.AvatarSizes.SIZE_120,
                        src: z,
                        avatarDecoration: a,
                        className: K.avatarDecoration,
                        'aria-label': s
                    })
                )
            )
            .with(_.Z.BUNDLE, () =>
                (0, o.jsx)('div', {
                    className: K.bundlePreview,
                    children: (0, o.jsx)(V.d, {
                        product: n,
                        user: i,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: K.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    J = (e) => {
        let { product: n, item: r, reducedMotion: i, displayOptions: a } = e,
            [l, u] = s.useState(!1),
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
                onRest: () => setTimeout(() => u(!0), 100)
            }),
            d = (0, g.useSpring)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                reverse: l
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
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(p.animated.div, {
                    className: K.easterEggContainer,
                    style: c,
                    children: (0, o.jsx)(X, {
                        product: n,
                        item: r
                    })
                }),
                (0, o.jsx)(p.animated.div, {
                    className: K.easterEggContainer,
                    style: i ? f : d,
                    children: (0, o.jsx)('img', {
                        src: a.imageSrc,
                        style: a.style,
                        alt: '',
                        'aria-hidden': 'true'
                    })
                })
            ]
        });
    },
    $ = (e) => {
        let { product: n, item: r, reducedMotion: i = !1 } = e,
            a = (0, H.v)(n.categorySkuId);
        return null != a
            ? (0, o.jsx)(J, {
                  product: n,
                  item: r,
                  reducedMotion: i,
                  displayOptions: a
              })
            : (0, o.jsx)(X, {
                  product: n,
                  item: r
              });
    },
    ee = (e) => {
        var n, r;
        let { product: i, onClose: a, confettiTarget: l, confettiCanvas: c, hideConfetti: d = !1, analyticsLocations: p, title: T, description: C, selectedVariantIndex: R, shouldShowPromotionalExperience: O } = e,
            D = (0, j.W)(i, R),
            { confettiColors: V } = (0, B.Z)(D.styles),
            H = (0, m.e7)([v.Z], () => v.Z.useReducedMotion),
            z = (0, x.m)('CollectiblesCollectedModal'),
            Q = (0, w.ed)('CollectiblesCollectedModal'),
            X = (0, k.k)(D),
            J = (0, S.Z)(),
            ee = null == J ? void 0 : null === (n = J.giftPurchaseConfirmation) || void 0 === n ? void 0 : n.rewardCollectedText(),
            [et] = D.items,
            en = s.useRef(null),
            { analyticsLocations: er } = (0, b.ZP)([...p, y.Z.COLLECTIBLES_COLLECTED_MODAL]),
            ei = (0, A.Z)({ analyticsLocations: er }),
            ea = s.useCallback(() => {
                if ((a(), (0, E.xf)(), ei(), D.type === _.Z.AVATAR_DECORATION)) {
                    f()(et.type === _.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, I.ps)({
                            initialSelectedDecoration: et,
                            analyticsLocations: er
                        });
                    return;
                }
                D.type === _.Z.PROFILE_EFFECT &&
                    (0, N.H)({
                        initialSelectedEffectId: et.id,
                        analyticsLocations: er
                    });
            }, [a, ei, D.type, et, er]),
            { handleUseNow: eo, isApplying: es } = (0, M.W)({
                product: D,
                onSuccess: a,
                onError: a
            }),
            { firstAvatarDecoration: el, firstProfileEffect: eu } = (0, U.R)(D),
            ec = (0, L.x6)(D) ? null != el && null != eu : null != el || null != eu,
            ed = (0, L.x6)(D) || z,
            { category: ef, isFetching: ep } = (0, P.l)(D.skuId),
            eh = null !== (r = null == ef ? void 0 : ef.successModalBg) && void 0 !== r ? r : D.banner,
            e_ = ep ? void 0 : eh;
        return (0, o.jsxs)(b.Gt, {
            value: er,
            children: [
                (0, o.jsxs)('div', {
                    className: K.modalInner,
                    ref: en,
                    children: [
                        (0, o.jsxs)('div', {
                            className: K.bannerContainer,
                            children: [
                                O
                                    ? (0, o.jsx)('div', { className: K.seasonalBanner })
                                    : (0, o.jsx)(Z.Z, {
                                          asset: e_,
                                          size: (0, F.ML)(q),
                                          className: K.decorationBanner,
                                          categoryBannerOverride: (0, Y.ZS)(D.categorySkuId)
                                      }),
                                (0, o.jsx)($, {
                                    product: D,
                                    item: et,
                                    reducedMotion: H
                                })
                            ]
                        }),
                        (0, o.jsxs)('div', {
                            className: K.collectedInfoContainer,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: K.collectedTextContainer,
                                    children: [
                                        (0, o.jsx)(g.Heading, {
                                            variant: 'heading-lg/bold',
                                            children: null != T ? T : Q ? W.intl.string(W.t['1xr2SU']) : W.intl.format(W.t.YNaxMj, { itemName: X })
                                        }),
                                        (0, o.jsx)(g.Text, {
                                            variant: 'text-sm/normal',
                                            children:
                                                null != C
                                                    ? C
                                                    : (0, h.EQ)(null == D ? void 0 : D.type)
                                                          .with(_.Z.BUNDLE, () => W.intl.string(W.t.zJPoLy))
                                                          .with(_.Z.PROFILE_EFFECT, () => W.intl.string(W.t.f9M1YG))
                                                          .otherwise(() => (O && null != ee ? ee : W.intl.string(W.t['44b50t'])))
                                        })
                                    ]
                                }),
                                ed
                                    ? (0, o.jsxs)('div', {
                                          className: K.buttons,
                                          children: [
                                              (0, o.jsx)(g.Button, {
                                                  color: ec ? g.ButtonColors.PRIMARY : g.ButtonColors.BRAND,
                                                  onClick: ea,
                                                  children: W.intl.string(W.t['2p2aY2'])
                                              }),
                                              ec
                                                  ? (0, o.jsx)(g.Button, {
                                                        onClick: eo,
                                                        submitting: es,
                                                        children: W.intl.string(W.t.MAS7uL)
                                                    })
                                                  : null
                                          ]
                                      })
                                    : (0, o.jsx)(g.Button, {
                                          className: u()({ [K.seaonalButtonGradient]: O }),
                                          onClick: ea,
                                          children: W.intl.string(W.t.MAS7uL)
                                      })
                            ]
                        }),
                        (0, o.jsx)(g.ModalCloseButton, {
                            onClick: a,
                            className: K.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !d &&
                    !H &&
                    (0, o.jsx)(G.Z, {
                        confettiTarget: null != l ? l : en.current,
                        confettiCanvas: c,
                        sprites: (0, F.vK)(D.categorySkuId),
                        colors: null == V ? void 0 : V.map((e) => e.toHexString())
                    })
            ]
        });
    };
n.default = Q;
