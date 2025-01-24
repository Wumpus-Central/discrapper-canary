r.r(n),
    r.d(n, {
        CollectiblesCollectedModalInner: function () {
            return J;
        }
    });
var i = r(47120);
var a = r(627341);
var o = r(200651),
    s = r(192379),
    l = r(119617),
    u = r(512722),
    c = r.n(u),
    d = r(642128),
    f = r(278074),
    p = r(979554),
    h = r(399606),
    _ = r(481060),
    m = r(37234),
    g = r(607070),
    E = r(100527),
    v = r(906732),
    y = r(1585),
    b = r(125988),
    I = r(286961),
    T = r(300284),
    S = r(876917),
    A = r(642619),
    C = r(594174),
    N = r(1870),
    R = r(429368),
    O = r(884697),
    D = r(890249),
    L = r(228624),
    x = r(318028),
    w = r(635552),
    P = r(905357),
    M = r(328456),
    k = r(624377),
    U = r(530618),
    B = r(141011),
    G = r(372654),
    Z = r(216541),
    F = r(58201),
    V = r(302800),
    j = r(215023),
    H = r(388032),
    Y = r(493200),
    W = r(660097);
let K = 880,
    z = (e) => {
        let { transitionState: n, product: r, onClose: i, analyticsLocations: a, title: u, description: c, shouldShowPromotionalExperience: d } = e,
            f = (0, h.e7)([N.Z], () => N.Z.purchases),
            p = (0, R.o)(r, f),
            m = (0, F.W)(r, p),
            g = s.useRef(new l.qA()),
            [E, v] = s.useState(null),
            y = (0, V.UY)(m.skuId);
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(l.O_, {
                    ref: v,
                    className: Y.confettiCanvas,
                    environment: g.current
                }),
                (0, o.jsxs)(_.ModalRoot, {
                    hideShadow: !0,
                    transitionState: n,
                    size: _.ModalSize.DYNAMIC,
                    className: Y.modalRoot,
                    children: [
                        null != y &&
                            (0, o.jsx)('img', {
                                src: y.imageSrc,
                                className: Y.customConfetti,
                                style: y.style,
                                alt: '',
                                'aria-hidden': 'true'
                            }),
                        (0, o.jsx)(_.ModalContent, {
                            className: Y.modalContent,
                            scrollbarType: 'none',
                            children: (0, o.jsx)(J, {
                                product: m,
                                onClose: i,
                                confettiCanvas: E,
                                hideConfetti: null != y,
                                analyticsLocations: a,
                                title: u,
                                description: c,
                                selectedVariantIndex: p,
                                shouldShowPromotionalExperience: d
                            })
                        })
                    ]
                })
            ]
        });
    },
    q = (e) => {
        let { product: n, item: r } = e,
            i = (0, h.e7)([C.default], () => {
                let e = C.default.getCurrentUser();
                return c()(null != e, 'User cannot be undefined'), e;
            }),
            { avatarDecorationSrc: a } = (0, b.Z)({
                user: i,
                avatarDecorationOverride: (null == r ? void 0 : r.type) === p.Z.AVATAR_DECORATION ? r : null,
                size: (0, y.y9)(_.AvatarSizes.SIZE_120)
            }),
            s = (0, P.k)(n);
        return (0, f.EQ)(n.type)
            .with(p.Z.PROFILE_EFFECT, () =>
                (0, o.jsx)('div', {
                    className: Y.profileEffectShopPreview,
                    children: (0, o.jsx)(S.Z, {
                        forCollectedModal: !0,
                        profileEffectId: r.id
                    })
                })
            )
            .with(
                p.Z.AVATAR_DECORATION,
                () => (
                    c()(r.type === p.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                    (0, o.jsx)(_.Avatar, {
                        size: _.AvatarSizes.SIZE_120,
                        src: W,
                        avatarDecoration: a,
                        className: Y.avatarDecoration,
                        'aria-label': s
                    })
                )
            )
            .with(p.Z.BUNDLE, () =>
                (0, o.jsx)('div', {
                    className: Y.bundlePreview,
                    children: (0, o.jsx)(Z.d, {
                        product: n,
                        user: i,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: Y.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    Q = (e) => {
        let { product: n, item: r, reducedMotion: i, displayOptions: a } = e,
            [l, u] = s.useState(!1),
            c = (0, _.useSpring)({
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
            f = (0, _.useSpring)({
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
            p = (0, _.useSpring)(
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
                (0, o.jsx)(d.animated.div, {
                    className: Y.easterEggContainer,
                    style: c,
                    children: (0, o.jsx)(q, {
                        product: n,
                        item: r
                    })
                }),
                (0, o.jsx)(d.animated.div, {
                    className: Y.easterEggContainer,
                    style: i ? p : f,
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
    X = (e) => {
        let { product: n, item: r, reducedMotion: i = !1 } = e,
            a = (0, V.v)(n.categorySkuId);
        return null != a
            ? (0, o.jsx)(Q, {
                  product: n,
                  item: r,
                  reducedMotion: i,
                  displayOptions: a
              })
            : (0, o.jsx)(q, {
                  product: n,
                  item: r
              });
    },
    J = (e) => {
        var n, r;
        let { product: i, onClose: a, confettiTarget: l, confettiCanvas: u, hideConfetti: d = !1, analyticsLocations: b, title: S, description: C, selectedVariantIndex: N, shouldShowPromotionalExperience: R } = e,
            Z = (0, F.W)(i, N),
            { confettiColors: V } = (0, k.Z)(Z.styles),
            W = (0, h.e7)([g.Z], () => g.Z.useReducedMotion),
            z = (0, D.m)('CollectiblesCollectedModal'),
            q = (0, L.ed)('CollectiblesCollectedModal'),
            Q = (0, P.k)(Z),
            J = (0, I.Z)(),
            $ = null == J ? void 0 : null === (n = J.giftPurchaseConfirmation) || void 0 === n ? void 0 : n.rewardCollectedText(),
            [ee] = Z.items,
            et = s.useRef(null),
            { analyticsLocations: en } = (0, v.ZP)([...b, E.Z.COLLECTIBLES_COLLECTED_MODAL]),
            er = (0, T.Z)({ analyticsLocations: en }),
            ei = s.useCallback(() => {
                if ((a(), (0, m.xf)(), er(), Z.type === p.Z.AVATAR_DECORATION)) {
                    c()(ee.type === p.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, y.ps)({
                            initialSelectedDecoration: ee,
                            analyticsLocations: en
                        });
                    return;
                }
                Z.type === p.Z.PROFILE_EFFECT &&
                    (0, A.H)({
                        initialSelectedEffectId: ee.id,
                        analyticsLocations: en
                    });
            }, [a, er, Z.type, ee, en]),
            { handleUseNow: ea, isApplying: eo } = (0, w.W)({
                product: Z,
                onSuccess: a,
                onError: a
            }),
            { firstAvatarDecoration: es, firstProfileEffect: el } = (0, M.R)(Z),
            eu = (0, O.x6)(Z) ? null != es && null != el : null != es || null != el,
            ec = (0, O.x6)(Z) || z,
            { category: ed, isFetching: ef } = (0, x.l)(Z.skuId),
            ep = null !== (r = null == ed ? void 0 : ed.successModalBg) && void 0 !== r ? r : Z.banner,
            eh = ef ? void 0 : ep;
        return (0, o.jsxs)(v.Gt, {
            value: en,
            children: [
                (0, o.jsxs)('div', {
                    className: Y.modalInner,
                    ref: et,
                    children: [
                        (0, o.jsxs)('div', {
                            className: Y.bannerContainer,
                            children: [
                                R
                                    ? (0, o.jsx)('div', { className: Y.promotionalBanner })
                                    : (0, o.jsx)(B.Z, {
                                          asset: eh,
                                          size: (0, G.ML)(K),
                                          className: Y.decorationBanner,
                                          categoryBannerOverride: (0, j.ZS)(Z.categorySkuId)
                                      }),
                                (0, o.jsx)(X, {
                                    product: Z,
                                    item: ee,
                                    reducedMotion: W
                                })
                            ]
                        }),
                        (0, o.jsxs)('div', {
                            className: Y.collectedInfoContainer,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: Y.collectedTextContainer,
                                    children: [
                                        (0, o.jsx)(_.Heading, {
                                            variant: 'heading-lg/bold',
                                            children: null != S ? S : q ? H.intl.string(H.t['1xr2SU']) : H.intl.format(H.t.YNaxMj, { itemName: Q })
                                        }),
                                        (0, o.jsx)(_.Text, {
                                            variant: 'text-sm/normal',
                                            children:
                                                null != C
                                                    ? C
                                                    : (0, f.EQ)(null == Z ? void 0 : Z.type)
                                                          .with(p.Z.BUNDLE, () => H.intl.string(H.t.zJPoLy))
                                                          .with(p.Z.PROFILE_EFFECT, () => H.intl.string(H.t.f9M1YG))
                                                          .otherwise(() => (R && null != $ ? $ : H.intl.string(H.t['44b50t'])))
                                        })
                                    ]
                                }),
                                ec
                                    ? (0, o.jsxs)('div', {
                                          className: Y.buttons,
                                          children: [
                                              (0, o.jsx)(_.Button, {
                                                  color: eu ? _.ButtonColors.PRIMARY : _.ButtonColors.BRAND,
                                                  onClick: ei,
                                                  children: H.intl.string(H.t['2p2aY2'])
                                              }),
                                              eu
                                                  ? (0, o.jsx)(_.Button, {
                                                        onClick: ea,
                                                        submitting: eo,
                                                        children: H.intl.string(H.t.MAS7uL)
                                                    })
                                                  : null
                                          ]
                                      })
                                    : (0, o.jsx)(_.Button, {
                                          onClick: ei,
                                          children: H.intl.string(H.t.MAS7uL)
                                      })
                            ]
                        }),
                        (0, o.jsx)(_.ModalCloseButton, {
                            onClick: a,
                            className: Y.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !d &&
                    !W &&
                    (0, o.jsx)(U.Z, {
                        confettiTarget: null != l ? l : et.current,
                        confettiCanvas: u,
                        sprites: (0, G.vK)(Z.categorySkuId),
                        colors: null == V ? void 0 : V.map((e) => e.toHexString())
                    })
            ]
        });
    };
n.default = z;
