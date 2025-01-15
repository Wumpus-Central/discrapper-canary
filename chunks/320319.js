n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
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
    O = n(736606);
let R = {
        xMin: -80,
        xMax: 80,
        yMin: -150,
        yMax: -20
    },
    P = r.memo((e) => {
        let { name: t, canReveal: n = !0, dismissibleContentType: s, forceShadow: E, cardType: b, confettiCanvas: I } = e,
            B = null == e ? void 0 : e.onCtaClick,
            D = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
            [Z, L] = r.useState(!1),
            [M, k] = r.useState(!1),
            w = (0, f.yQ)(),
            U = (0, f.IB)(),
            [F, V] = r.useState(!1),
            [G, H] = r.useState((t === T.u.FREE_BOOST || t === T.u.TENURE_REWARD_COLLECTIBLE) && U && (null == w ? void 0 : w.nitroTenureStatus) === N.EB.REDEEMABLE);
        r.useEffect(() => {
            (t === T.u.FREE_BOOST || t === T.u.TENURE_REWARD_COLLECTIBLE) && U && (null == w ? void 0 : w.nitroTenureStatus) === N.EB.REDEEMABLE && H(!0);
        }, [U, t, w]);
        let Y = r.useCallback(() => {
                V(!0);
            }, []),
            W = b === S.R0.CARD_CAROUSEL_FIRST_ROW || b === S.R0.CARD_CAROUSEL_SECOND_ROW || b === S.R0.CARD_CAROUSEL_THIRD_ROW,
            z = (0, T.Z)(),
            [K, q] = (0, p.cv)((null != s && n) || s === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [s] : []);
        r.useEffect(
            () => () => {
                K === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && F && (0, h.EW)(K);
            },
            [K, F]
        ),
            r.useEffect(() => {
                K === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && F && (0, h.EW)(K);
            }, [K, F]);
        let { easterEggLevel: Q, isEasterEggTriggered: X, onHover: J, onUnhover: $ } = (0, C.Z)(5),
            ee = (0, l.debounce)(() => {
                x.default.track(v.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                    card_type: (0, l.snakeCase)(t),
                    is_tenure_reward: t === T.u.FREE_BOOST || t === T.u.TENURE_REWARD_COLLECTIBLE,
                    reward_status: null == w ? void 0 : w.nitroTenureStatus
                });
            }, 800),
            et = (0, l.debounce)(() => {
                null != B &&
                    x.default.track(v.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                        card_type: (0, l.snakeCase)(t),
                        function_name: (0, l.snakeCase)(B.name)
                    });
            }, 800),
            en = r.useRef(null);
        e = {
            onMouseEnter: ee,
            ...e,
            onCtaClick:
                null != B
                    ? () => {
                          null == B || B(), et();
                      }
                    : void 0
        };
        let ei = K !== s || null == s || M || s === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
        return (r.useEffect(() => {
            D && Z && (k(!0), x.default.track(v.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != s && q(A.L.TAKE_ACTION));
        }, [D, Z, s, t, q]),
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
                      className: a()(O.flipCardContainer, { [O.forceShadow]: E }),
                      onMouseEnter: J,
                      onFocus: J,
                      onMouseLeave: $,
                      onBlur: $,
                      children: (0, i.jsxs)('div', {
                          className: a()(O.flipCard, {
                              [O.partialFlipCard]: !X,
                              [O.ultraFlipCard]: X,
                              [O.rotateCard]: X && 3 === Q,
                              [O.reducedMotion]: D
                          }),
                          children: [
                              (0, i.jsx)('div', {
                                  className: O.flipCardFront,
                                  children: (0, i.jsx)(y, {
                                      ...e,
                                      className: O.topCover
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: O.flipCardBack,
                                  children: (0, i.jsx)(y, {
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
                            className: a()({
                                [O.noFlipCardContainer]: !W,
                                [O.noFlipCardContainerCarousel]: W,
                                [O.forceShadow]: E,
                                [O.reducedMotion]: D
                            }),
                            children: [
                                (0, i.jsx)(y, {
                                    ...e,
                                    ref: t === T.u.FREE_BOOST || t === T.u.TENURE_REWARD_COLLECTIBLE ? en : void 0
                                }),
                                G &&
                                    (0, i.jsx)(_.Z, {
                                        speedValues: R,
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
                        className: a()(O.flipCardContainer, { [O.forceShadow]: E }),
                        children: (0, i.jsxs)(u.Clickable, {
                            onClick: () => L(!0),
                            className: a()(O.flipCard, O.clickable, {
                                [O.flipped]: Z,
                                [O.partialFlipCard]: !M && !Z,
                                [O.reducedMotion]: D
                            }),
                            onTransitionEnd: (e) => {
                                if (!!Z && 'transform' === e.propertyName && !!e.target.classList.contains(O.flipCard)) k(!0), x.default.track(v.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != s && q(A.L.TAKE_ACTION);
                            },
                            children: [
                                (0, i.jsx)('div', {
                                    className: O.flipCardHidden,
                                    'aria-hidden': !0,
                                    children: (0, i.jsx)(y, { ...e })
                                }),
                                (0, i.jsx)('div', {
                                    className: O.flipCardFront,
                                    children: (0, i.jsx)(y, {
                                        ...z.upcomingDropUntimed,
                                        pillText: ''
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: O.flipCardBack,
                                    children: (0, i.jsx)(y, {
                                        ...e,
                                        description: ''
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: O.flipCardButtonContainer,
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
let y = r.forwardRef((e, t) => {
    var n;
    let { title: r, titleClassName: s = '', subtitle: l = '', description: o = '', descriptionCta: c = '', isPremiumGetCta: d, onCtaClick: m, onMouseEnter: g, className: h, perkComponent: p, cardVariant: x, cardType: f, onClick: _, backgroundImage: C, pillText: T, perkImage: N, imageOverlayText: v } = e,
        A = f === S.R0.CARD_CAROUSEL_FIRST_ROW || f === S.R0.CARD_CAROUSEL_SECOND_ROW || f === S.R0.CARD_CAROUSEL_THIRD_ROW,
        j = '' !== o || '' !== c || ('' !== l && x === S.zW.REWARD),
        R = (0, E._)(x);
    return (0, i.jsxs)(u.Clickable, {
        className: a()(O.card, h, null === (n = R.cardContainer) || void 0 === n ? void 0 : n.className, {
            [O.clickable]: null != _,
            [O.hideOverflow]: A
        }),
        onMouseEnter: g,
        style: { backgroundImage: null != C ? 'url('.concat(C, ')') : void 0 },
        onClick: _,
        children: [
            null != T &&
                (0, i.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    className: O.pill,
                    children: T
                }),
            (0, i.jsx)('div', { ref: t }),
            (0, i.jsx)(b.Z, {
                title: r,
                titleClassName: s,
                subtitle: l,
                perkImage: N,
                isCarousel: A,
                descriptionCta: c,
                onCtaClick: m,
                perkComponent: p,
                subtitleClassName: O.cardSubtitle,
                cardVariant: x,
                imageOverlayText: v
            }),
            j &&
                (0, i.jsx)(I.Z, {
                    title: r,
                    titleClassName: s,
                    subtitle: l,
                    description: o,
                    descriptionCta: c,
                    isPremiumGetCta: d,
                    onCtaClick: m,
                    cardVariant: x,
                    perkComponent: p
                }),
            (0, i.jsx)('div', {
                className: a()(O.cover, O.above),
                ref: t
            })
        ]
    });
});
(y.displayName = 'PerkCardContent'), (t.Z = P);
