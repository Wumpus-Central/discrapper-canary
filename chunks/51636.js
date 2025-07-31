(n.d(t, { Z: () => y }), n(388685), n(953529));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n(990547),
    c = n(399606),
    d = n(481060),
    u = n(607070),
    m = n(213609),
    p = n(706140),
    g = n(626135),
    h = n(404615),
    f = n(238108),
    b = n(22189),
    x = n(391110),
    _ = n(484239),
    j = n(658370),
    O = n(981631),
    C = n(921944),
    E = n(388032),
    v = n(593595);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function T(e, t) {
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
let N = r.memo((e) => {
    let { name: t, canReveal: n = !0, dismissibleContentType: s, forceShadow: h, cardType: _ } = e,
        j = null == e ? void 0 : e.onCtaClick,
        y = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
        [A, P] = r.useState(!1),
        [R, D] = r.useState(!1),
        Z = _ === x.gM.CARD_CAROUSEL_FIRST_ROW || _ === x.gM.CARD_CAROUSEL_SECOND_ROW || _ === x.gM.CARD_CAROUSEL_THIRD_ROW,
        w = (0, b.Z)(),
        [k, L] = (0, p.cv)(null != s && n ? [s] : []),
        { easterEggLevel: B, isEasterEggTriggered: M, onHover: U, onUnhover: V } = (0, f.Z)(5),
        G = (0, l.debounce)(() => {
            g.default.track(O.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, { card_type: (0, l.snakeCase)(t) });
        }, 800),
        F = (0, l.debounce)(() => {
            null != j &&
                g.default.track(O.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(t),
                    function_name: (0, l.snakeCase)(j.name)
                });
        }, 800);
    e = T(S({ onMouseEnter: G }, e), {
        onCtaClick:
            null != j
                ? () => {
                      (null == j || j(), F());
                  }
                : void 0
    });
    let H = k !== s || null == s || R;
    return (r.useEffect(() => {
        y && A && (D(!0), g.default.track(O.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != s && L(C.L.TAKE_ACTION));
    }, [y, A, s, t, L]),
    (0, m.Z)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t }
    }),
    n)
        ? t === b.I.UPCOMING_DROP_UNTIMED
            ? (0, i.jsx)('div', {
                  className: v.hoverWrapper,
                  onMouseEnter: U,
                  onFocus: U,
                  onMouseLeave: V,
                  onBlur: V,
                  children: (0, i.jsx)('div', {
                      className: a()(v.flipCardContainer, { [v.forceShadow]: h }),
                      children: (0, i.jsxs)('div', {
                          className: a()(v.flipCard, {
                              [v.partialFlipCard]: !M,
                              [v.ultraFlipCard]: M,
                              [v.rotateCard]: M && 3 === B,
                              [v.reducedMotion]: y
                          }),
                          children: [
                              (0, i.jsx)('div', {
                                  className: v.flipCardFront,
                                  children: (0, i.jsx)(I, T(S({}, e), { className: v.topCover }))
                              }),
                              (0, i.jsx)('div', {
                                  className: v.flipCardBack,
                                  children: (0, i.jsx)(I, T(S({}, e), { className: v.topCover }))
                              })
                          ]
                      })
                  })
              })
            : H
              ? (0, i.jsx)('div', {
                    className: v.hoverWrapper,
                    children: (0, i.jsx)('div', {
                        className: a()({
                            [v.noFlipCardContainer]: !Z,
                            [v.noFlipCardContainerCarousel]: Z,
                            [v.forceShadow]: h,
                            [v.reducedMotion]: y
                        }),
                        children: (0, i.jsx)(I, S({}, e))
                    })
                })
              : (0, i.jsx)('div', {
                    className: v.hoverWrapper,
                    children: (0, i.jsx)('div', {
                        className: a()(v.flipCardContainer, { [v.forceShadow]: h }),
                        children: (0, i.jsxs)(d.P3F, {
                            onClick: () => P(!0),
                            className: a()(v.flipCard, v.clickable, {
                                [v.flipped]: A,
                                [v.partialFlipCard]: !R && !A,
                                [v.reducedMotion]: y
                            }),
                            onTransitionEnd: (e) => {
                                A && 'transform' === e.propertyName && e.target.classList.contains(v.flipCard) && (D(!0), g.default.track(O.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != s && L(C.L.TAKE_ACTION));
                            },
                            children: [
                                (0, i.jsx)('div', {
                                    className: v.flipCardHidden,
                                    'aria-hidden': !0,
                                    children: (0, i.jsx)(I, S({}, e))
                                }),
                                (0, i.jsx)('div', {
                                    className: v.flipCardFront,
                                    children: (0, i.jsx)(I, T(S({}, w.upcomingDropUntimed), { pillText: '' }))
                                }),
                                (0, i.jsx)('div', {
                                    className: v.flipCardBack,
                                    children: (0, i.jsx)(I, T(S({}, e), { description: '' }))
                                }),
                                (0, i.jsx)('div', {
                                    className: v.flipCardButtonContainer,
                                    children: (0, i.jsx)(d.zxk, {
                                        variant: 'primary',
                                        text: E.intl.string(E.t.dcztdX),
                                        onClick: () => P(!0)
                                    })
                                })
                            ]
                        })
                    })
                })
        : (0, i.jsx)(N, T(S({}, w.upcomingDropUntimed), { forceShadow: h }));
});
N.displayName = 'PremiumPerkCard';
let I = r.forwardRef((e, t) => {
    var n;
    let { title: r, titleClassName: s = '', subtitle: l = '', description: o = '', descriptionCta: c = '', isPremiumGetCta: u, onCtaClick: m, onMouseEnter: p, className: g, perkComponent: f, cardVariant: b, cardType: O, onClick: C, backgroundImage: E, pillText: S, perkImage: T, imageOverlayText: N, hasNitroGradientBackground: I } = e,
        y = O === x.gM.CARD_CAROUSEL_FIRST_ROW || O === x.gM.CARD_CAROUSEL_SECOND_ROW || O === x.gM.CARD_CAROUSEL_THIRD_ROW,
        A = '' !== o || '' !== c || ('' !== l && b === x.zW.REWARD),
        P = (0, h._)(b);
    return (0, i.jsxs)(d.P3F, {
        className: a()(v.card, g, null == (n = P.cardContainer) ? void 0 : n.className, {
            [v.clickable]: null != C,
            [v.hideOverflow]: y,
            [v.nitroGradientBackground]: I
        }),
        onMouseEnter: p,
        style: { backgroundImage: null != E ? 'url('.concat(E, ')') : void 0 },
        onClick: C,
        children: [
            null != S &&
                (0, i.jsx)(d.Text, {
                    variant: 'text-xs/semibold',
                    className: v.pill,
                    children: S
                }),
            (0, i.jsx)('div', { ref: t }),
            (0, i.jsx)(_.Z, {
                title: r,
                titleClassName: s,
                subtitle: l,
                perkImage: T,
                isCarousel: y,
                descriptionCta: c,
                onCtaClick: m,
                perkComponent: f,
                subtitleClassName: v.cardSubtitle,
                cardVariant: b,
                imageOverlayText: N
            }),
            A &&
                (0, i.jsx)(j.Z, {
                    title: r,
                    titleClassName: s,
                    subtitle: l,
                    description: o,
                    descriptionCta: c,
                    isPremiumGetCta: u,
                    onCtaClick: m,
                    cardVariant: b,
                    perkComponent: f
                }),
            (0, i.jsx)('div', {
                className: a()(v.cover, v.above),
                ref: t
            })
        ]
    });
});
I.displayName = 'PerkCardContent';
let y = N;
