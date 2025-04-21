n.d(t, { Z: () => w }), n(388685), n(953529);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
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
    _ = n(715627),
    x = n(404615),
    E = n(238108),
    j = n(32173),
    C = n(391110),
    O = n(484239),
    S = n(658370),
    v = n(735825),
    T = n(981631),
    I = n(921944),
    N = n(388032),
    y = n(344253);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
    D = r.memo((e) => {
        let { name: t, canReveal: n = !0, dismissibleContentType: s, forceShadow: x, cardType: O, confettiCanvas: S } = e,
            w = null == e ? void 0 : e.onCtaClick,
            k = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
            [L, B] = r.useState(!1),
            [M, U] = r.useState(!1),
            V = (0, b.Er)(),
            G = (0, b.IB)(),
            [F, H] = r.useState(!1),
            [z, Y] = r.useState(t === j.u.TENURE_REWARD_COLLECTIBLE && G && (null == V ? void 0 : V.nitroTenureStatus) === v.EB.REDEEMABLE);
        r.useEffect(() => {
            t === j.u.TENURE_REWARD_COLLECTIBLE && G && (null == V ? void 0 : V.nitroTenureStatus) === v.EB.REDEEMABLE && Y(!0);
        }, [G, t, V]);
        let W = r.useCallback(() => {
                H(!0);
            }, []),
            K = O === C.R0.CARD_CAROUSEL_FIRST_ROW || O === C.R0.CARD_CAROUSEL_SECOND_ROW || O === C.R0.CARD_CAROUSEL_THIRD_ROW,
            q = (0, j.Z)(),
            [X, Q] = (0, h.cv)((null != s && n) || s === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [s] : []);
        r.useEffect(
            () => () => {
                X === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && F && (0, p.EW)(X);
            },
            [X, F]
        ),
            r.useEffect(() => {
                X === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && F && (0, p.EW)(X);
            }, [X, F]);
        let { easterEggLevel: J, isEasterEggTriggered: $, onHover: ee, onUnhover: et } = (0, E.Z)(5),
            en = (0, a.debounce)(() => {
                f.default.track(T.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                    card_type: (0, a.snakeCase)(t),
                    is_tenure_reward: t === j.u.TENURE_REWARD_COLLECTIBLE,
                    reward_status: null == V ? void 0 : V.nitroTenureStatus
                });
            }, 800),
            ei = (0, a.debounce)(() => {
                null != w &&
                    f.default.track(T.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                        card_type: (0, a.snakeCase)(t),
                        function_name: (0, a.snakeCase)(w.name)
                    });
            }, 800),
            er = r.useRef(null);
        e = P(A({ onMouseEnter: en }, e), {
            onCtaClick:
                null != w
                    ? () => {
                          null == w || w(), ei();
                      }
                    : void 0
        });
        let es = X !== s || null == s || M || s === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
        return (r.useEffect(() => {
            k && L && (U(!0), f.default.track(T.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != s && Q(I.L.TAKE_ACTION));
        }, [k, L, s, t, Q]),
        (0, g.Z)(
            {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
                properties: {
                    user_tenure_reward_id: null == V ? void 0 : V.tenureRewardStatusId,
                    tenure_reward_id: null == V ? void 0 : V.tenureRewardSkuId,
                    reward_type: null == V ? void 0 : V.tenureRewardType,
                    redeemable_at: null == V ? void 0 : V.redeemableAt,
                    reward_status: null == V ? void 0 : V.nitroTenureStatus
                }
            },
            { disableTrack: t !== j.u.TENURE_REWARD_COLLECTIBLE || null == V }
        ),
        (0, g.Z)({
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: t }
        }),
        n)
            ? t === j.u.UPCOMING_DROP_UNTIMED
                ? (0, i.jsx)('div', {
                      className: y.hoverWrapper,
                      onMouseEnter: ee,
                      onFocus: ee,
                      onMouseLeave: et,
                      onBlur: et,
                      children: (0, i.jsx)('div', {
                          className: l()(y.flipCardContainer, { [y.forceShadow]: x }),
                          children: (0, i.jsxs)('div', {
                              className: l()(y.flipCard, {
                                  [y.partialFlipCard]: !$,
                                  [y.ultraFlipCard]: $,
                                  [y.rotateCard]: $ && 3 === J,
                                  [y.reducedMotion]: k
                              }),
                              children: [
                                  (0, i.jsx)('div', {
                                      className: y.flipCardFront,
                                      children: (0, i.jsx)(Z, P(A({}, e), { className: y.topCover }))
                                  }),
                                  (0, i.jsx)('div', {
                                      className: y.flipCardBack,
                                      children: (0, i.jsx)(Z, P(A({}, e), { className: y.topCover }))
                                  })
                              ]
                          })
                      })
                  })
                : es
                  ? (0, i.jsx)('div', {
                        className: y.hoverWrapper,
                        children: (0, i.jsxs)('div', {
                            className: l()({
                                [y.noFlipCardContainer]: !K,
                                [y.noFlipCardContainerCarousel]: K,
                                [y.forceShadow]: x,
                                [y.reducedMotion]: k
                            }),
                            children: [
                                (0, i.jsx)(Z, P(A({}, e), { ref: t === j.u.TENURE_REWARD_COLLECTIBLE ? er : void 0 })),
                                z &&
                                    (0, i.jsx)(_.Z, {
                                        speedValues: R,
                                        numBursts: 3,
                                        particlesPerBurst: 15,
                                        confettiTarget: er.current,
                                        offsetXPercentageMax: -30,
                                        offsetXPercentageMin: -70,
                                        offsetYPercentageMax: 40,
                                        offsetYPercentageMin: 20,
                                        customConfettiCanvas: S,
                                        dragCoefficientValue: 0.0166,
                                        onAnimationEnd: W
                                    })
                            ]
                        })
                    })
                  : (0, i.jsx)('div', {
                        className: y.hoverWrapper,
                        children: (0, i.jsx)('div', {
                            className: l()(y.flipCardContainer, { [y.forceShadow]: x }),
                            children: (0, i.jsxs)(u.P3F, {
                                onClick: () => B(!0),
                                className: l()(y.flipCard, y.clickable, {
                                    [y.flipped]: L,
                                    [y.partialFlipCard]: !M && !L,
                                    [y.reducedMotion]: k
                                }),
                                onTransitionEnd: (e) => {
                                    L && 'transform' === e.propertyName && e.target.classList.contains(y.flipCard) && (U(!0), f.default.track(T.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != s && Q(I.L.TAKE_ACTION));
                                },
                                children: [
                                    (0, i.jsx)('div', {
                                        className: y.flipCardHidden,
                                        'aria-hidden': !0,
                                        children: (0, i.jsx)(Z, A({}, e))
                                    }),
                                    (0, i.jsx)('div', {
                                        className: y.flipCardFront,
                                        children: (0, i.jsx)(Z, P(A({}, q.upcomingDropUntimed), { pillText: '' }))
                                    }),
                                    (0, i.jsx)('div', {
                                        className: y.flipCardBack,
                                        children: (0, i.jsx)(Z, P(A({}, e), { description: '' }))
                                    }),
                                    (0, i.jsx)('div', {
                                        className: y.flipCardButtonContainer,
                                        children: (0, i.jsx)(u.zxk, {
                                            onClick: () => B(!0),
                                            children: N.intl.string(N.t.dcztdX)
                                        })
                                    })
                                ]
                            })
                        })
                    })
            : (0, i.jsx)(D, P(A({}, q.upcomingDropUntimed), { forceShadow: x }));
    });
D.displayName = 'PerkDiscoverabilityCard';
let Z = r.forwardRef((e, t) => {
    var n;
    let { title: r, titleClassName: s = '', subtitle: a = '', description: o = '', descriptionCta: c = '', isPremiumGetCta: d, onCtaClick: m, onMouseEnter: g, className: p, perkComponent: h, cardVariant: f, cardType: b, onClick: _, backgroundImage: E, pillText: j, perkImage: v, imageOverlayText: T } = e,
        I = b === C.R0.CARD_CAROUSEL_FIRST_ROW || b === C.R0.CARD_CAROUSEL_SECOND_ROW || b === C.R0.CARD_CAROUSEL_THIRD_ROW,
        N = '' !== o || '' !== c || ('' !== a && f === C.zW.REWARD),
        A = (0, x._)(f);
    return (0, i.jsxs)(u.P3F, {
        className: l()(y.card, p, null == (n = A.cardContainer) ? void 0 : n.className, {
            [y.clickable]: null != _,
            [y.hideOverflow]: I
        }),
        onMouseEnter: g,
        style: { backgroundImage: null != E ? 'url('.concat(E, ')') : void 0 },
        onClick: _,
        children: [
            null != j &&
                (0, i.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    className: y.pill,
                    children: j
                }),
            (0, i.jsx)('div', { ref: t }),
            (0, i.jsx)(O.Z, {
                title: r,
                titleClassName: s,
                subtitle: a,
                perkImage: v,
                isCarousel: I,
                descriptionCta: c,
                onCtaClick: m,
                perkComponent: h,
                subtitleClassName: y.cardSubtitle,
                cardVariant: f,
                imageOverlayText: T
            }),
            N &&
                (0, i.jsx)(S.Z, {
                    title: r,
                    titleClassName: s,
                    subtitle: a,
                    description: o,
                    descriptionCta: c,
                    isPremiumGetCta: d,
                    onCtaClick: m,
                    cardVariant: f,
                    perkComponent: h
                }),
            (0, i.jsx)('div', {
                className: l()(y.cover, y.above),
                ref: t
            })
        ]
    });
});
Z.displayName = 'PerkCardContent';
let w = D;
