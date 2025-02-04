n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(392711),
    o = n(990547),
    c = n(399606),
    d = n(704215),
    u = n(481060),
    m = n(607070),
    h = n(213609),
    g = n(605236),
    _ = n(706140),
    x = n(626135),
    p = n(314684),
    E = n(715627),
    C = n(404615),
    f = n(238108),
    T = n(32173),
    N = n(391110),
    I = n(484239),
    S = n(658370),
    b = n(735825),
    v = n(981631),
    j = n(921944),
    A = n(388032),
    O = n(506829);
let R = {
        xMin: -80,
        xMax: 80,
        yMin: -150,
        yMax: -20
    },
    P = s.memo((e) => {
        let { name: t, canReveal: n = !0, dismissibleContentType: r, forceShadow: C, cardType: I, confettiCanvas: S } = e,
            y = null == e ? void 0 : e.onCtaClick,
            Z = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
            [k, L] = s.useState(!1),
            [B, M] = s.useState(!1),
            w = (0, p.yQ)(),
            V = (0, p.IB)(),
            [U, G] = s.useState(!1),
            [F, H] = s.useState((t === T.u.FREE_BOOST || t === T.u.TENURE_REWARD_COLLECTIBLE) && V && (null == w ? void 0 : w.nitroTenureStatus) === b.EB.REDEEMABLE);
        s.useEffect(() => {
            (t === T.u.FREE_BOOST || t === T.u.TENURE_REWARD_COLLECTIBLE) && V && (null == w ? void 0 : w.nitroTenureStatus) === b.EB.REDEEMABLE && H(!0);
        }, [V, t, w]);
        let z = s.useCallback(() => {
                G(!0);
            }, []),
            Y = I === N.R0.CARD_CAROUSEL_FIRST_ROW || I === N.R0.CARD_CAROUSEL_SECOND_ROW || I === N.R0.CARD_CAROUSEL_THIRD_ROW,
            W = (0, T.Z)(),
            [K, X] = (0, _.cv)((null != r && n) || r === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [r] : []);
        s.useEffect(
            () => () => {
                K === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && U && (0, g.EW)(K);
            },
            [K, U]
        ),
            s.useEffect(() => {
                K === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && U && (0, g.EW)(K);
            }, [K, U]);
        let { easterEggLevel: q, isEasterEggTriggered: Q, onHover: J, onUnhover: $ } = (0, f.Z)(5),
            ee = (0, a.debounce)(() => {
                x.default.track(v.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                    card_type: (0, a.snakeCase)(t),
                    is_tenure_reward: t === T.u.FREE_BOOST || t === T.u.TENURE_REWARD_COLLECTIBLE,
                    reward_status: null == w ? void 0 : w.nitroTenureStatus
                });
            }, 800),
            et = (0, a.debounce)(() => {
                null != y &&
                    x.default.track(v.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                        card_type: (0, a.snakeCase)(t),
                        function_name: (0, a.snakeCase)(y.name)
                    });
            }, 800),
            en = s.useRef(null);
        e = {
            onMouseEnter: ee,
            ...e,
            onCtaClick:
                null != y
                    ? () => {
                          null == y || y(), et();
                      }
                    : void 0
        };
        let ei = K !== r || null == r || B || r === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
        return (s.useEffect(() => {
            Z && k && (M(!0), x.default.track(v.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != r && X(j.L.TAKE_ACTION));
        }, [Z, k, r, t, X]),
        (0, h.Z)(
            {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
                properties: {
                    user_tenure_reward_id: null == w ? void 0 : w.tenureRewardStatusId,
                    tenure_reward_id: null == w ? void 0 : w.tenureRewardSkuId,
                    reward_type: null == w ? void 0 : w.tenureRewardType,
                    redeemable_at: null == w ? void 0 : w.redeemableAt,
                    reward_status: null == w ? void 0 : w.nitroTenureStatus
                }
            },
            { disableTrack: (t !== T.u.FREE_BOOST && t !== T.u.TENURE_REWARD_COLLECTIBLE) || null == w }
        ),
        (0, h.Z)({
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: t }
        }),
        n)
            ? t === T.u.UPCOMING_DROP_UNTIMED
                ? (0, i.jsx)('div', {
                      className: l()(O.flipCardContainer, { [O.forceShadow]: C }),
                      onMouseEnter: J,
                      onFocus: J,
                      onMouseLeave: $,
                      onBlur: $,
                      children: (0, i.jsxs)('div', {
                          className: l()(O.flipCard, {
                              [O.partialFlipCard]: !Q,
                              [O.ultraFlipCard]: Q,
                              [O.rotateCard]: Q && 3 === q,
                              [O.reducedMotion]: Z
                          }),
                          children: [
                              (0, i.jsx)('div', {
                                  className: O.flipCardFront,
                                  children: (0, i.jsx)(D, {
                                      ...e,
                                      className: O.topCover
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: O.flipCardBack,
                                  children: (0, i.jsx)(D, {
                                      ...e,
                                      className: O.topCover
                                  })
                              })
                          ]
                      })
                  })
                : ei
                  ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)('div', {
                            className: l()({
                                [O.noFlipCardContainer]: !Y,
                                [O.noFlipCardContainerCarousel]: Y,
                                [O.forceShadow]: C,
                                [O.reducedMotion]: Z
                            }),
                            children: [
                                (0, i.jsx)(D, {
                                    ...e,
                                    ref: t === T.u.FREE_BOOST || t === T.u.TENURE_REWARD_COLLECTIBLE ? en : void 0
                                }),
                                F &&
                                    (0, i.jsx)(E.Z, {
                                        speedValues: R,
                                        numBursts: 3,
                                        particlesPerBurst: 15,
                                        confettiTarget: en.current,
                                        offsetXPercentageMax: -30,
                                        offsetXPercentageMin: -70,
                                        offsetYPercentageMax: 40,
                                        offsetYPercentageMin: 20,
                                        customConfettiCanvas: S,
                                        dragCoefficientValue: 0.0166,
                                        onAnimationEnd: z
                                    })
                            ]
                        })
                    })
                  : (0, i.jsx)('div', {
                        className: l()(O.flipCardContainer, { [O.forceShadow]: C }),
                        children: (0, i.jsxs)(u.P3F, {
                            onClick: () => L(!0),
                            className: l()(O.flipCard, O.clickable, {
                                [O.flipped]: k,
                                [O.partialFlipCard]: !B && !k,
                                [O.reducedMotion]: Z
                            }),
                            onTransitionEnd: (e) => {
                                k && 'transform' === e.propertyName && e.target.classList.contains(O.flipCard) && (M(!0), x.default.track(v.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != r && X(j.L.TAKE_ACTION));
                            },
                            children: [
                                (0, i.jsx)('div', {
                                    className: O.flipCardHidden,
                                    'aria-hidden': !0,
                                    children: (0, i.jsx)(D, { ...e })
                                }),
                                (0, i.jsx)('div', {
                                    className: O.flipCardFront,
                                    children: (0, i.jsx)(D, {
                                        ...W.upcomingDropUntimed,
                                        pillText: ''
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: O.flipCardBack,
                                    children: (0, i.jsx)(D, {
                                        ...e,
                                        description: ''
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: O.flipCardButtonContainer,
                                    children: (0, i.jsx)(u.zxk, {
                                        onClick: () => L(!0),
                                        children: A.intl.string(A.t.dcztdX)
                                    })
                                })
                            ]
                        })
                    })
            : (0, i.jsx)(P, {
                  ...W.upcomingDropUntimed,
                  forceShadow: C
              });
    });
P.displayName = 'PerkDiscoverabilityCard';
let D = s.forwardRef((e, t) => {
    var n;
    let { title: s, titleClassName: r = '', subtitle: a = '', description: o = '', descriptionCta: c = '', isPremiumGetCta: d, onCtaClick: m, onMouseEnter: h, className: g, perkComponent: _, cardVariant: x, cardType: p, onClick: E, backgroundImage: f, pillText: T, perkImage: b, imageOverlayText: v } = e,
        j = p === N.R0.CARD_CAROUSEL_FIRST_ROW || p === N.R0.CARD_CAROUSEL_SECOND_ROW || p === N.R0.CARD_CAROUSEL_THIRD_ROW,
        A = '' !== o || '' !== c || ('' !== a && x === N.zW.REWARD),
        R = (0, C._)(x);
    return (0, i.jsxs)(u.P3F, {
        className: l()(O.card, g, null === (n = R.cardContainer) || void 0 === n ? void 0 : n.className, {
            [O.clickable]: null != E,
            [O.hideOverflow]: j
        }),
        onMouseEnter: h,
        style: { backgroundImage: null != f ? 'url('.concat(f, ')') : void 0 },
        onClick: E,
        children: [
            null != T &&
                (0, i.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    className: O.pill,
                    children: T
                }),
            (0, i.jsx)('div', { ref: t }),
            (0, i.jsx)(I.Z, {
                title: s,
                titleClassName: r,
                subtitle: a,
                perkImage: b,
                isCarousel: j,
                descriptionCta: c,
                onCtaClick: m,
                perkComponent: _,
                subtitleClassName: O.cardSubtitle,
                cardVariant: x,
                imageOverlayText: v
            }),
            A &&
                (0, i.jsx)(S.Z, {
                    title: s,
                    titleClassName: r,
                    subtitle: a,
                    description: o,
                    descriptionCta: c,
                    isPremiumGetCta: d,
                    onCtaClick: m,
                    cardVariant: x,
                    perkComponent: _
                }),
            (0, i.jsx)('div', {
                className: l()(O.cover, O.above),
                ref: t
            })
        ]
    });
});
D.displayName = 'PerkCardContent';
let y = P;
