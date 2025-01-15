n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(392711),
    o = n(990547),
    c = n(399606),
    d = n(704215),
    u = n(481060),
    m = n(607070),
    g = n(213609),
    h = n(605236),
    p = n(706140),
    x = n(626135),
    f = n(314684),
    _ = n(715627),
    E = n(404615),
    C = n(238108),
    T = n(32173),
    S = n(391110),
    b = n(484239),
    I = n(658370),
    N = n(735825),
    v = n(981631),
    A = n(921944),
    j = n(388032),
    R = n(506829);
let O = {
        xMin: -80,
        xMax: 80,
        yMin: -150,
        yMax: -20
    },
    P = s.memo((e) => {
        let { name: t, canReveal: n = !0, dismissibleContentType: r, forceShadow: E, cardType: b, confettiCanvas: I } = e,
            D = null == e ? void 0 : e.onCtaClick,
            B = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
            [Z, L] = s.useState(!1),
            [M, k] = s.useState(!1),
            w = (0, f.yQ)(),
            F = (0, f.IB)(),
            [U, V] = s.useState(!1),
            [G, H] = s.useState((t === T.u.FREE_BOOST || t === T.u.TENURE_REWARD_COLLECTIBLE) && F && (null == w ? void 0 : w.nitroTenureStatus) === N.EB.REDEEMABLE);
        s.useEffect(() => {
            (t === T.u.FREE_BOOST || t === T.u.TENURE_REWARD_COLLECTIBLE) && F && (null == w ? void 0 : w.nitroTenureStatus) === N.EB.REDEEMABLE && H(!0);
        }, [F, t, w]);
        let Y = s.useCallback(() => {
                V(!0);
            }, []),
            W = b === S.R0.CARD_CAROUSEL_FIRST_ROW || b === S.R0.CARD_CAROUSEL_SECOND_ROW || b === S.R0.CARD_CAROUSEL_THIRD_ROW,
            z = (0, T.Z)(),
            [K, q] = (0, p.cv)((null != r && n) || r === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [r] : []);
        s.useEffect(
            () => () => {
                K === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && U && (0, h.EW)(K);
            },
            [K, U]
        ),
            s.useEffect(() => {
                K === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && U && (0, h.EW)(K);
            }, [K, U]);
        let { easterEggLevel: Q, isEasterEggTriggered: X, onHover: J, onUnhover: $ } = (0, C.Z)(5),
            ee = (0, l.debounce)(() => {
                x.default.track(v.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                    card_type: (0, l.snakeCase)(t),
                    is_tenure_reward: t === T.u.FREE_BOOST || t === T.u.TENURE_REWARD_COLLECTIBLE,
                    reward_status: null == w ? void 0 : w.nitroTenureStatus
                });
            }, 800),
            et = (0, l.debounce)(() => {
                null != D &&
                    x.default.track(v.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                        card_type: (0, l.snakeCase)(t),
                        function_name: (0, l.snakeCase)(D.name)
                    });
            }, 800),
            en = s.useRef(null);
        e = {
            onMouseEnter: ee,
            ...e,
            onCtaClick:
                null != D
                    ? () => {
                          null == D || D(), et();
                      }
                    : void 0
        };
        let ei = K !== r || null == r || M || r === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
        return (s.useEffect(() => {
            B && Z && (k(!0), x.default.track(v.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != r && q(A.L.TAKE_ACTION));
        }, [B, Z, r, t, q]),
        (0, g.Z)(
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
        (0, g.Z)({
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: t }
        }),
        n)
            ? t === T.u.UPCOMING_DROP_UNTIMED
                ? (0, i.jsx)('div', {
                      className: a()(R.flipCardContainer, { [R.forceShadow]: E }),
                      onMouseEnter: J,
                      onFocus: J,
                      onMouseLeave: $,
                      onBlur: $,
                      children: (0, i.jsxs)('div', {
                          className: a()(R.flipCard, {
                              [R.partialFlipCard]: !X,
                              [R.ultraFlipCard]: X,
                              [R.rotateCard]: X && 3 === Q,
                              [R.reducedMotion]: B
                          }),
                          children: [
                              (0, i.jsx)('div', {
                                  className: R.flipCardFront,
                                  children: (0, i.jsx)(y, {
                                      ...e,
                                      className: R.topCover
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: R.flipCardBack,
                                  children: (0, i.jsx)(y, {
                                      ...e,
                                      className: R.topCover
                                  })
                              })
                          ]
                      })
                  })
                : ei
                  ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)('div', {
                            className: a()({
                                [R.noFlipCardContainer]: !W,
                                [R.noFlipCardContainerCarousel]: W,
                                [R.forceShadow]: E,
                                [R.reducedMotion]: B
                            }),
                            children: [
                                (0, i.jsx)(y, {
                                    ...e,
                                    ref: t === T.u.FREE_BOOST || t === T.u.TENURE_REWARD_COLLECTIBLE ? en : void 0
                                }),
                                G &&
                                    (0, i.jsx)(_.Z, {
                                        speedValues: O,
                                        numBursts: 3,
                                        particlesPerBurst: 15,
                                        confettiTarget: en.current,
                                        offsetXPercentageMax: -30,
                                        offsetXPercentageMin: -70,
                                        offsetYPercentageMax: 40,
                                        offsetYPercentageMin: 20,
                                        customConfettiCanvas: I,
                                        dragCoefficientValue: 0.0166,
                                        onAnimationEnd: Y
                                    })
                            ]
                        })
                    })
                  : (0, i.jsx)('div', {
                        className: a()(R.flipCardContainer, { [R.forceShadow]: E }),
                        children: (0, i.jsxs)(u.Clickable, {
                            onClick: () => L(!0),
                            className: a()(R.flipCard, R.clickable, {
                                [R.flipped]: Z,
                                [R.partialFlipCard]: !M && !Z,
                                [R.reducedMotion]: B
                            }),
                            onTransitionEnd: (e) => {
                                if (!!Z && 'transform' === e.propertyName && !!e.target.classList.contains(R.flipCard)) k(!0), x.default.track(v.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != r && q(A.L.TAKE_ACTION);
                            },
                            children: [
                                (0, i.jsx)('div', {
                                    className: R.flipCardHidden,
                                    'aria-hidden': !0,
                                    children: (0, i.jsx)(y, { ...e })
                                }),
                                (0, i.jsx)('div', {
                                    className: R.flipCardFront,
                                    children: (0, i.jsx)(y, {
                                        ...z.upcomingDropUntimed,
                                        pillText: ''
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: R.flipCardBack,
                                    children: (0, i.jsx)(y, {
                                        ...e,
                                        description: ''
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: R.flipCardButtonContainer,
                                    children: (0, i.jsx)(u.Button, {
                                        onClick: () => L(!0),
                                        children: j.intl.string(j.t.dcztdX)
                                    })
                                })
                            ]
                        })
                    })
            : (0, i.jsx)(P, {
                  ...z.upcomingDropUntimed,
                  forceShadow: E
              });
    });
P.displayName = 'PerkDiscoverabilityCard';
let y = s.forwardRef((e, t) => {
    var n;
    let { title: s, titleClassName: r = '', subtitle: l = '', description: o = '', descriptionCta: c = '', isPremiumGetCta: d, onCtaClick: m, onMouseEnter: g, className: h, perkComponent: p, cardVariant: x, cardType: f, onClick: _, backgroundImage: C, pillText: T, perkImage: N, imageOverlayText: v } = e,
        A = f === S.R0.CARD_CAROUSEL_FIRST_ROW || f === S.R0.CARD_CAROUSEL_SECOND_ROW || f === S.R0.CARD_CAROUSEL_THIRD_ROW,
        j = '' !== o || '' !== c || ('' !== l && x === S.zW.REWARD),
        O = (0, E._)(x);
    return (0, i.jsxs)(u.Clickable, {
        className: a()(R.card, h, null === (n = O.cardContainer) || void 0 === n ? void 0 : n.className, {
            [R.clickable]: null != _,
            [R.hideOverflow]: A
        }),
        onMouseEnter: g,
        style: { backgroundImage: null != C ? 'url('.concat(C, ')') : void 0 },
        onClick: _,
        children: [
            null != T &&
                (0, i.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    className: R.pill,
                    children: T
                }),
            (0, i.jsx)('div', { ref: t }),
            (0, i.jsx)(b.Z, {
                title: s,
                titleClassName: r,
                subtitle: l,
                perkImage: N,
                isCarousel: A,
                descriptionCta: c,
                onCtaClick: m,
                perkComponent: p,
                subtitleClassName: R.cardSubtitle,
                cardVariant: x,
                imageOverlayText: v
            }),
            j &&
                (0, i.jsx)(I.Z, {
                    title: s,
                    titleClassName: r,
                    subtitle: l,
                    description: o,
                    descriptionCta: c,
                    isPremiumGetCta: d,
                    onCtaClick: m,
                    cardVariant: x,
                    perkComponent: p
                }),
            (0, i.jsx)('div', {
                className: a()(R.cover, R.above),
                ref: t
            })
        ]
    });
});
(y.displayName = 'PerkCardContent'), (t.Z = P);
