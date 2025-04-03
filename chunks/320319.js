n.d(t, { Z: () => w }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n(990547),
    c = n(399606),
    d = n(704215),
    u = n(481060),
    m = n(607070),
    g = n(213609),
    p = n(605236),
    h = n(706140),
    f = n(626135),
    b = n(314684),
    N = n(715627),
    x = n(404615),
    _ = n(238108),
    E = n(32173),
    j = n(391110),
    O = n(484239),
    C = n(658370),
    S = n(735825),
    v = n(981631),
    T = n(921944),
    I = n(388032),
    y = n(344253);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = {
        xMin: -80,
        xMax: 80,
        yMin: -150,
        yMax: -20
    },
    D = i.memo((e) => {
        let { name: t, canReveal: n = !0, dismissibleContentType: s, forceShadow: x, cardType: O, confettiCanvas: C } = e,
            w = null == e ? void 0 : e.onCtaClick,
            k = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
            [W, L] = i.useState(!1),
            [B, M] = i.useState(!1),
            U = (0, b.Er)(),
            V = (0, b.IB)(),
            [G, F] = i.useState(!1),
            [H, z] = i.useState(t === E.u.TENURE_REWARD_COLLECTIBLE && V && (null == U ? void 0 : U.nitroTenureStatus) === S.EB.REDEEMABLE);
        i.useEffect(() => {
            t === E.u.TENURE_REWARD_COLLECTIBLE && V && (null == U ? void 0 : U.nitroTenureStatus) === S.EB.REDEEMABLE && z(!0);
        }, [V, t, U]);
        let Y = i.useCallback(() => {
                F(!0);
            }, []),
            K = O === j.R0.CARD_CAROUSEL_FIRST_ROW || O === j.R0.CARD_CAROUSEL_SECOND_ROW || O === j.R0.CARD_CAROUSEL_THIRD_ROW,
            q = (0, E.Z)(),
            [X, J] = (0, h.cv)((null != s && n) || s === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [s] : []);
        i.useEffect(
            () => () => {
                X === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && G && (0, p.EW)(X);
            },
            [X, G]
        ),
            i.useEffect(() => {
                X === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && G && (0, p.EW)(X);
            }, [X, G]);
        let { easterEggLevel: Q, isEasterEggTriggered: $, onHover: ee, onUnhover: et } = (0, _.Z)(5),
            en = (0, l.debounce)(() => {
                f.default.track(v.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                    card_type: (0, l.snakeCase)(t),
                    is_tenure_reward: t === E.u.TENURE_REWARD_COLLECTIBLE,
                    reward_status: null == U ? void 0 : U.nitroTenureStatus
                });
            }, 800),
            er = (0, l.debounce)(() => {
                null != w &&
                    f.default.track(v.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                        card_type: (0, l.snakeCase)(t),
                        function_name: (0, l.snakeCase)(w.name)
                    });
            }, 800),
            ei = i.useRef(null);
        e = P(A({ onMouseEnter: en }, e), {
            onCtaClick:
                null != w
                    ? () => {
                          null == w || w(), er();
                      }
                    : void 0
        });
        let es = X !== s || null == s || B || s === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
        return (i.useEffect(() => {
            k && W && (M(!0), f.default.track(v.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != s && J(T.L.TAKE_ACTION));
        }, [k, W, s, t, J]),
        (0, g.Z)(
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
            { disableTrack: t !== E.u.TENURE_REWARD_COLLECTIBLE || null == U }
        ),
        (0, g.Z)({
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: t }
        }),
        n)
            ? t === E.u.UPCOMING_DROP_UNTIMED
                ? (0, r.jsx)('div', {
                      className: y.hoverWrapper,
                      onMouseEnter: ee,
                      onFocus: ee,
                      onMouseLeave: et,
                      onBlur: et,
                      children: (0, r.jsx)('div', {
                          className: a()(y.flipCardContainer, { [y.forceShadow]: x }),
                          children: (0, r.jsxs)('div', {
                              className: a()(y.flipCard, {
                                  [y.partialFlipCard]: !$,
                                  [y.ultraFlipCard]: $,
                                  [y.rotateCard]: $ && 3 === Q,
                                  [y.reducedMotion]: k
                              }),
                              children: [
                                  (0, r.jsx)('div', {
                                      className: y.flipCardFront,
                                      children: (0, r.jsx)(Z, P(A({}, e), { className: y.topCover }))
                                  }),
                                  (0, r.jsx)('div', {
                                      className: y.flipCardBack,
                                      children: (0, r.jsx)(Z, P(A({}, e), { className: y.topCover }))
                                  })
                              ]
                          })
                      })
                  })
                : es
                  ? (0, r.jsx)('div', {
                        className: y.hoverWrapper,
                        children: (0, r.jsxs)('div', {
                            className: a()({
                                [y.noFlipCardContainer]: !K,
                                [y.noFlipCardContainerCarousel]: K,
                                [y.forceShadow]: x,
                                [y.reducedMotion]: k
                            }),
                            children: [
                                (0, r.jsx)(Z, P(A({}, e), { ref: t === E.u.TENURE_REWARD_COLLECTIBLE ? ei : void 0 })),
                                H &&
                                    (0, r.jsx)(N.Z, {
                                        speedValues: R,
                                        numBursts: 3,
                                        particlesPerBurst: 15,
                                        confettiTarget: ei.current,
                                        offsetXPercentageMax: -30,
                                        offsetXPercentageMin: -70,
                                        offsetYPercentageMax: 40,
                                        offsetYPercentageMin: 20,
                                        customConfettiCanvas: C,
                                        dragCoefficientValue: 0.0166,
                                        onAnimationEnd: Y
                                    })
                            ]
                        })
                    })
                  : (0, r.jsx)('div', {
                        className: y.hoverWrapper,
                        children: (0, r.jsx)('div', {
                            className: a()(y.flipCardContainer, { [y.forceShadow]: x }),
                            children: (0, r.jsxs)(u.P3F, {
                                onClick: () => L(!0),
                                className: a()(y.flipCard, y.clickable, {
                                    [y.flipped]: W,
                                    [y.partialFlipCard]: !B && !W,
                                    [y.reducedMotion]: k
                                }),
                                onTransitionEnd: (e) => {
                                    W && 'transform' === e.propertyName && e.target.classList.contains(y.flipCard) && (M(!0), f.default.track(v.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != s && J(T.L.TAKE_ACTION));
                                },
                                children: [
                                    (0, r.jsx)('div', {
                                        className: y.flipCardHidden,
                                        'aria-hidden': !0,
                                        children: (0, r.jsx)(Z, A({}, e))
                                    }),
                                    (0, r.jsx)('div', {
                                        className: y.flipCardFront,
                                        children: (0, r.jsx)(Z, P(A({}, q.upcomingDropUntimed), { pillText: '' }))
                                    }),
                                    (0, r.jsx)('div', {
                                        className: y.flipCardBack,
                                        children: (0, r.jsx)(Z, P(A({}, e), { description: '' }))
                                    }),
                                    (0, r.jsx)('div', {
                                        className: y.flipCardButtonContainer,
                                        children: (0, r.jsx)(u.zxk, {
                                            onClick: () => L(!0),
                                            children: I.NW.string(I.t.dcztdX)
                                        })
                                    })
                                ]
                            })
                        })
                    })
            : (0, r.jsx)(D, P(A({}, q.upcomingDropUntimed), { forceShadow: x }));
    });
D.displayName = 'PerkDiscoverabilityCard';
let Z = i.forwardRef((e, t) => {
    var n;
    let { title: i, titleClassName: s = '', subtitle: l = '', description: o = '', descriptionCta: c = '', isPremiumGetCta: d, onCtaClick: m, onMouseEnter: g, className: p, perkComponent: h, cardVariant: f, cardType: b, onClick: N, backgroundImage: _, pillText: E, perkImage: S, imageOverlayText: v } = e,
        T = b === j.R0.CARD_CAROUSEL_FIRST_ROW || b === j.R0.CARD_CAROUSEL_SECOND_ROW || b === j.R0.CARD_CAROUSEL_THIRD_ROW,
        I = '' !== o || '' !== c || ('' !== l && f === j.zW.REWARD),
        A = (0, x._)(f);
    return (0, r.jsxs)(u.P3F, {
        className: a()(y.card, p, null == (n = A.cardContainer) ? void 0 : n.className, {
            [y.clickable]: null != N,
            [y.hideOverflow]: T
        }),
        onMouseEnter: g,
        style: { backgroundImage: null != _ ? 'url('.concat(_, ')') : void 0 },
        onClick: N,
        children: [
            null != E &&
                (0, r.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    className: y.pill,
                    children: E
                }),
            (0, r.jsx)('div', { ref: t }),
            (0, r.jsx)(O.Z, {
                title: i,
                titleClassName: s,
                subtitle: l,
                perkImage: S,
                isCarousel: T,
                descriptionCta: c,
                onCtaClick: m,
                perkComponent: h,
                subtitleClassName: y.cardSubtitle,
                cardVariant: f,
                imageOverlayText: v
            }),
            I &&
                (0, r.jsx)(C.Z, {
                    title: i,
                    titleClassName: s,
                    subtitle: l,
                    description: o,
                    descriptionCta: c,
                    isPremiumGetCta: d,
                    onCtaClick: m,
                    cardVariant: f,
                    perkComponent: h
                }),
            (0, r.jsx)('div', {
                className: a()(y.cover, y.above),
                ref: t
            })
        ]
    });
});
Z.displayName = 'PerkCardContent';
let w = D;
