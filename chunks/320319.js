n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(392711),
    o = n(990547),
    c = n(399606),
    d = n(704215),
    u = n(481060),
    g = n(607070),
    m = n(213609),
    f = n(605236),
    p = n(706140),
    _ = n(626135),
    h = n(314684),
    x = n(715627),
    E = n(404615),
    b = n(238108),
    C = n(32173),
    v = n(391110),
    T = n(484239),
    N = n(658370),
    I = n(735825),
    S = n(981631),
    R = n(921944),
    j = n(388032),
    A = n(506829);
let P = {
        xMin: -80,
        xMax: 80,
        yMin: -150,
        yMax: -20
    },
    O = r.memo((e) => {
        let { name: t, canReveal: n = !0, dismissibleContentType: a, forceShadow: E, cardType: T, confettiCanvas: N } = e,
            M = null == e ? void 0 : e.onCtaClick,
            B = (0, c.e7)([g.Z], () => g.Z.useReducedMotion),
            [y, w] = r.useState(!1),
            [k, L] = r.useState(!1),
            U = (0, h.yQ)(),
            D = (0, h.IB)(),
            [G, H] = r.useState(!1),
            [V, F] = r.useState((t === C.u.FREE_BOOST || t === C.u.TENURE_REWARD_COLLECTIBLE) && D && (null == U ? void 0 : U.nitroTenureStatus) === I.EB.REDEEMABLE);
        r.useEffect(() => {
            (t === C.u.FREE_BOOST || t === C.u.TENURE_REWARD_COLLECTIBLE) && D && (null == U ? void 0 : U.nitroTenureStatus) === I.EB.REDEEMABLE && F(!0);
        }, [D, t, U]);
        let W = r.useCallback(() => {
                H(!0);
            }, []),
            z = T === v.R0.CARD_CAROUSEL_FIRST_ROW || T === v.R0.CARD_CAROUSEL_SECOND_ROW || T === v.R0.CARD_CAROUSEL_THIRD_ROW,
            Y = (0, C.Z)(),
            [K, Q] = (0, p.cv)((null != a && n) || a === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [a] : []);
        r.useEffect(
            () => () => {
                K === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && G && (0, f.EW)(K);
            },
            [K, G]
        ),
            r.useEffect(() => {
                K === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && G && (0, f.EW)(K);
            }, [K, G]);
        let { easterEggLevel: q, isEasterEggTriggered: J, onHover: X, onUnhover: $ } = (0, b.Z)(5),
            ee = (0, l.debounce)(() => {
                _.default.track(S.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                    card_type: (0, l.snakeCase)(t),
                    is_tenure_reward: t === C.u.FREE_BOOST || t === C.u.TENURE_REWARD_COLLECTIBLE,
                    reward_status: null == U ? void 0 : U.nitroTenureStatus
                });
            }, 800),
            et = (0, l.debounce)(() => {
                null != M &&
                    _.default.track(S.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                        card_type: (0, l.snakeCase)(t),
                        function_name: (0, l.snakeCase)(M.name)
                    });
            }, 800),
            en = r.useRef(null);
        e = {
            onMouseEnter: ee,
            ...e,
            onCtaClick:
                null != M
                    ? () => {
                          null == M || M(), et();
                      }
                    : void 0
        };
        let ei = K !== a || null == a || k || a === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
        return (r.useEffect(() => {
            B && y && (L(!0), _.default.track(S.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != a && Q(R.L.TAKE_ACTION));
        }, [B, y, a, t, Q]),
        (0, m.Z)(
            {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
                properties: {
                    user_tenure_reward_id: null == U ? void 0 : U.tenureRewardStatusId,
                    tenure_reward_id: null == U ? void 0 : U.tenureRewardSkuId,
                    reward_type: null == U ? void 0 : U.tenureRewardType,
                    redeemable_at: null == U ? void 0 : U.redeemableAt,
                    reward_status: null == U ? void 0 : U.nitroTenureStatus
                }
            },
            { disableTrack: (t !== C.u.FREE_BOOST && t !== C.u.TENURE_REWARD_COLLECTIBLE) || null == U }
        ),
        (0, m.Z)({
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: t }
        }),
        n)
            ? t === C.u.UPCOMING_DROP_UNTIMED
                ? (0, i.jsx)('div', {
                      className: s()(A.flipCardContainer, { [A.forceShadow]: E }),
                      onMouseEnter: X,
                      onFocus: X,
                      onMouseLeave: $,
                      onBlur: $,
                      children: (0, i.jsxs)('div', {
                          className: s()(A.flipCard, {
                              [A.partialFlipCard]: !J,
                              [A.ultraFlipCard]: J,
                              [A.rotateCard]: J && 3 === q,
                              [A.reducedMotion]: B
                          }),
                          children: [
                              (0, i.jsx)('div', {
                                  className: A.flipCardFront,
                                  children: (0, i.jsx)(Z, {
                                      ...e,
                                      className: A.topCover
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: A.flipCardBack,
                                  children: (0, i.jsx)(Z, {
                                      ...e,
                                      className: A.topCover
                                  })
                              })
                          ]
                      })
                  })
                : ei
                  ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)('div', {
                            className: s()({
                                [A.noFlipCardContainer]: !z,
                                [A.noFlipCardContainerCarousel]: z,
                                [A.forceShadow]: E,
                                [A.reducedMotion]: B
                            }),
                            children: [
                                (0, i.jsx)(Z, {
                                    ...e,
                                    ref: t === C.u.FREE_BOOST || t === C.u.TENURE_REWARD_COLLECTIBLE ? en : void 0
                                }),
                                V &&
                                    (0, i.jsx)(x.Z, {
                                        speedValues: P,
                                        numBursts: 3,
                                        particlesPerBurst: 15,
                                        confettiTarget: en.current,
                                        offsetXPercentageMax: -30,
                                        offsetXPercentageMin: -70,
                                        offsetYPercentageMax: 40,
                                        offsetYPercentageMin: 20,
                                        customConfettiCanvas: N,
                                        dragCoefficientValue: 0.0166,
                                        onAnimationEnd: W
                                    })
                            ]
                        })
                    })
                  : (0, i.jsx)('div', {
                        className: s()(A.flipCardContainer, { [A.forceShadow]: E }),
                        children: (0, i.jsxs)(u.Clickable, {
                            onClick: () => w(!0),
                            className: s()(A.flipCard, A.clickable, {
                                [A.flipped]: y,
                                [A.partialFlipCard]: !k && !y,
                                [A.reducedMotion]: B
                            }),
                            onTransitionEnd: (e) => {
                                if (!!y && 'transform' === e.propertyName && !!e.target.classList.contains(A.flipCard)) L(!0), _.default.track(S.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != a && Q(R.L.TAKE_ACTION);
                            },
                            children: [
                                (0, i.jsx)('div', {
                                    className: A.flipCardHidden,
                                    'aria-hidden': !0,
                                    children: (0, i.jsx)(Z, { ...e })
                                }),
                                (0, i.jsx)('div', {
                                    className: A.flipCardFront,
                                    children: (0, i.jsx)(Z, {
                                        ...Y.upcomingDropUntimed,
                                        pillText: ''
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: A.flipCardBack,
                                    children: (0, i.jsx)(Z, {
                                        ...e,
                                        description: ''
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: A.flipCardButtonContainer,
                                    children: (0, i.jsx)(u.Button, {
                                        onClick: () => w(!0),
                                        children: j.intl.string(j.t.dcztdX)
                                    })
                                })
                            ]
                        })
                    })
            : (0, i.jsx)(O, {
                  ...Y.upcomingDropUntimed,
                  forceShadow: E
              });
    });
O.displayName = 'PerkDiscoverabilityCard';
let Z = r.forwardRef((e, t) => {
    var n;
    let { title: r, titleClassName: a = '', subtitle: l = '', description: o = '', descriptionCta: c = '', isPremiumGetCta: d, onCtaClick: g, onMouseEnter: m, className: f, perkComponent: p, cardVariant: _, cardType: h, onClick: x, backgroundImage: b, pillText: C, perkImage: I, imageOverlayText: S } = e,
        R = h === v.R0.CARD_CAROUSEL_FIRST_ROW || h === v.R0.CARD_CAROUSEL_SECOND_ROW || h === v.R0.CARD_CAROUSEL_THIRD_ROW,
        j = '' !== o || '' !== c || ('' !== l && _ === v.zW.REWARD),
        P = (0, E._)(_);
    return (0, i.jsxs)(u.Clickable, {
        className: s()(A.card, f, null === (n = P.cardContainer) || void 0 === n ? void 0 : n.className, {
            [A.clickable]: null != x,
            [A.hideOverflow]: R
        }),
        onMouseEnter: m,
        style: { backgroundImage: null != b ? 'url('.concat(b, ')') : void 0 },
        onClick: x,
        children: [
            null != C &&
                (0, i.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    className: A.pill,
                    children: C
                }),
            (0, i.jsx)('div', { ref: t }),
            (0, i.jsx)(T.Z, {
                title: r,
                titleClassName: a,
                subtitle: l,
                perkImage: I,
                isCarousel: R,
                descriptionCta: c,
                onCtaClick: g,
                perkComponent: p,
                subtitleClassName: A.cardSubtitle,
                cardVariant: _,
                imageOverlayText: S
            }),
            j &&
                (0, i.jsx)(N.Z, {
                    title: r,
                    titleClassName: a,
                    subtitle: l,
                    description: o,
                    descriptionCta: c,
                    isPremiumGetCta: d,
                    onCtaClick: g,
                    cardVariant: _,
                    perkComponent: p
                }),
            (0, i.jsx)('div', {
                className: s()(A.cover, A.above),
                ref: t
            })
        ]
    });
});
(Z.displayName = 'PerkCardContent'), (t.Z = O);
