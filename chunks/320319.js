n.d(t, { Z: () => M }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(392711),
    o = n(990547),
    c = n(399606),
    d = n(704215),
    u = n(481060),
    m = n(607070),
    g = n(213609),
    _ = n(605236),
    p = n(706140),
    f = n(626135),
    h = n(314684),
    x = n(715627),
    E = n(404615),
    C = n(238108),
    b = n(32173),
    v = n(391110),
    T = n(484239),
    N = n(658370),
    I = n(735825),
    R = n(981631),
    j = n(921944),
    S = n(388032),
    A = n(510040);
let P = {
        xMin: -80,
        xMax: 80,
        yMin: -150,
        yMax: -20
    },
    Z = r.memo((e) => {
        let { name: t, canReveal: n = !0, dismissibleContentType: a, forceShadow: E, cardType: T, confettiCanvas: N } = e,
            M = null == e ? void 0 : e.onCtaClick,
            B = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
            [y, k] = r.useState(!1),
            [O, L] = r.useState(!1),
            D = (0, h.yQ)(),
            U = (0, h.IB)(),
            [G, V] = r.useState(!1),
            [H, F] = r.useState((t === b.u.FREE_BOOST || t === b.u.TENURE_REWARD_COLLECTIBLE) && U && (null == D ? void 0 : D.nitroTenureStatus) === I.EB.REDEEMABLE);
        r.useEffect(() => {
            (t === b.u.FREE_BOOST || t === b.u.TENURE_REWARD_COLLECTIBLE) && U && (null == D ? void 0 : D.nitroTenureStatus) === I.EB.REDEEMABLE && F(!0);
        }, [U, t, D]);
        let W = r.useCallback(() => {
                V(!0);
            }, []),
            z = T === v.R0.CARD_CAROUSEL_FIRST_ROW || T === v.R0.CARD_CAROUSEL_SECOND_ROW || T === v.R0.CARD_CAROUSEL_THIRD_ROW,
            Y = (0, b.Z)(),
            [q, Q] = (0, p.cv)((null != a && n) || a === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [a] : []);
        r.useEffect(
            () => () => {
                q === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && G && (0, _.EW)(q);
            },
            [q, G]
        ),
            r.useEffect(() => {
                q === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && G && (0, _.EW)(q);
            }, [q, G]);
        let { easterEggLevel: K, isEasterEggTriggered: X, onHover: J, onUnhover: $ } = (0, C.Z)(5),
            ee = (0, l.debounce)(() => {
                f.default.track(R.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                    card_type: (0, l.snakeCase)(t),
                    is_tenure_reward: t === b.u.FREE_BOOST || t === b.u.TENURE_REWARD_COLLECTIBLE,
                    reward_status: null == D ? void 0 : D.nitroTenureStatus
                });
            }, 800),
            et = (0, l.debounce)(() => {
                null != M &&
                    f.default.track(R.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
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
        let ei = q !== a || null == a || O || a === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
        return (r.useEffect(() => {
            B && y && (L(!0), f.default.track(R.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != a && Q(j.L.TAKE_ACTION));
        }, [B, y, a, t, Q]),
        (0, g.Z)(
            {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
                properties: {
                    user_tenure_reward_id: null == D ? void 0 : D.tenureRewardStatusId,
                    tenure_reward_id: null == D ? void 0 : D.tenureRewardSkuId,
                    reward_type: null == D ? void 0 : D.tenureRewardType,
                    redeemable_at: null == D ? void 0 : D.redeemableAt,
                    reward_status: null == D ? void 0 : D.nitroTenureStatus
                }
            },
            { disableTrack: (t !== b.u.FREE_BOOST && t !== b.u.TENURE_REWARD_COLLECTIBLE) || null == D }
        ),
        (0, g.Z)({
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: t }
        }),
        n)
            ? t === b.u.UPCOMING_DROP_UNTIMED
                ? (0, i.jsx)('div', {
                      className: s()(A.flipCardContainer, { [A.forceShadow]: E }),
                      onMouseEnter: J,
                      onFocus: J,
                      onMouseLeave: $,
                      onBlur: $,
                      children: (0, i.jsxs)('div', {
                          className: s()(A.flipCard, {
                              [A.partialFlipCard]: !X,
                              [A.ultraFlipCard]: X,
                              [A.rotateCard]: X && 3 === K,
                              [A.reducedMotion]: B
                          }),
                          children: [
                              (0, i.jsx)('div', {
                                  className: A.flipCardFront,
                                  children: (0, i.jsx)(w, {
                                      ...e,
                                      className: A.topCover
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: A.flipCardBack,
                                  children: (0, i.jsx)(w, {
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
                                (0, i.jsx)(w, {
                                    ...e,
                                    ref: t === b.u.FREE_BOOST || t === b.u.TENURE_REWARD_COLLECTIBLE ? en : void 0
                                }),
                                H &&
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
                        children: (0, i.jsxs)(u.P3F, {
                            onClick: () => k(!0),
                            className: s()(A.flipCard, A.clickable, {
                                [A.flipped]: y,
                                [A.partialFlipCard]: !O && !y,
                                [A.reducedMotion]: B
                            }),
                            onTransitionEnd: (e) => {
                                y && 'transform' === e.propertyName && e.target.classList.contains(A.flipCard) && (L(!0), f.default.track(R.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != a && Q(j.L.TAKE_ACTION));
                            },
                            children: [
                                (0, i.jsx)('div', {
                                    className: A.flipCardHidden,
                                    'aria-hidden': !0,
                                    children: (0, i.jsx)(w, { ...e })
                                }),
                                (0, i.jsx)('div', {
                                    className: A.flipCardFront,
                                    children: (0, i.jsx)(w, {
                                        ...Y.upcomingDropUntimed,
                                        pillText: ''
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: A.flipCardBack,
                                    children: (0, i.jsx)(w, {
                                        ...e,
                                        description: ''
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: A.flipCardButtonContainer,
                                    children: (0, i.jsx)(u.zxk, {
                                        onClick: () => k(!0),
                                        children: S.intl.string(S.t.dcztdX)
                                    })
                                })
                            ]
                        })
                    })
            : (0, i.jsx)(Z, {
                  ...Y.upcomingDropUntimed,
                  forceShadow: E
              });
    });
Z.displayName = 'PerkDiscoverabilityCard';
let w = r.forwardRef((e, t) => {
    var n;
    let { title: r, titleClassName: a = '', subtitle: l = '', description: o = '', descriptionCta: c = '', isPremiumGetCta: d, onCtaClick: m, onMouseEnter: g, className: _, perkComponent: p, cardVariant: f, cardType: h, onClick: x, backgroundImage: C, pillText: b, perkImage: I, imageOverlayText: R } = e,
        j = h === v.R0.CARD_CAROUSEL_FIRST_ROW || h === v.R0.CARD_CAROUSEL_SECOND_ROW || h === v.R0.CARD_CAROUSEL_THIRD_ROW,
        S = '' !== o || '' !== c || ('' !== l && f === v.zW.REWARD),
        P = (0, E._)(f);
    return (0, i.jsxs)(u.P3F, {
        className: s()(A.card, _, null === (n = P.cardContainer) || void 0 === n ? void 0 : n.className, {
            [A.clickable]: null != x,
            [A.hideOverflow]: j
        }),
        onMouseEnter: g,
        style: { backgroundImage: null != C ? 'url('.concat(C, ')') : void 0 },
        onClick: x,
        children: [
            null != b &&
                (0, i.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    className: A.pill,
                    children: b
                }),
            (0, i.jsx)('div', { ref: t }),
            (0, i.jsx)(T.Z, {
                title: r,
                titleClassName: a,
                subtitle: l,
                perkImage: I,
                isCarousel: j,
                descriptionCta: c,
                onCtaClick: m,
                perkComponent: p,
                subtitleClassName: A.cardSubtitle,
                cardVariant: f,
                imageOverlayText: R
            }),
            S &&
                (0, i.jsx)(N.Z, {
                    title: r,
                    titleClassName: a,
                    subtitle: l,
                    description: o,
                    descriptionCta: c,
                    isPremiumGetCta: d,
                    onCtaClick: m,
                    cardVariant: f,
                    perkComponent: p
                }),
            (0, i.jsx)('div', {
                className: s()(A.cover, A.above),
                ref: t
            })
        ]
    });
});
w.displayName = 'PerkCardContent';
let M = Z;
