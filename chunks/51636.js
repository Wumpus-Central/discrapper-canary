(n.d(t, { Z: () => y }), n(388685), n(953529));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n(990547),
    c = n(399606),
    d = n(481060),
    u = n(607070),
    m = n(213609),
    g = n(706140),
    p = n(626135),
    h = n(404615),
    f = n(238108),
    b = n(22189),
    _ = n(391110),
    x = n(484239),
    E = n(658370),
    j = n(981631),
    C = n(921944),
    O = n(388032),
    S = n(593595);
function v(e) {
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
let I = r.memo((e) => {
    let { name: t, canReveal: n = !0, dismissibleContentType: s, forceShadow: h, cardType: x } = e,
        E = null == e ? void 0 : e.onCtaClick,
        y = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
        [A, P] = r.useState(!1),
        [R, D] = r.useState(!1),
        Z = x === _.gM.CARD_CAROUSEL_FIRST_ROW || x === _.gM.CARD_CAROUSEL_SECOND_ROW || x === _.gM.CARD_CAROUSEL_THIRD_ROW,
        w = (0, b.Z)(),
        [k, L] = (0, g.cv)(null != s && n ? [s] : []),
        { easterEggLevel: B, isEasterEggTriggered: M, onHover: U, onUnhover: V } = (0, f.Z)(5),
        G = (0, a.debounce)(() => {
            p.default.track(j.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, { card_type: (0, a.snakeCase)(t) });
        }, 800),
        F = (0, a.debounce)(() => {
            null != E &&
                p.default.track(j.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, a.snakeCase)(t),
                    function_name: (0, a.snakeCase)(E.name)
                });
        }, 800);
    e = T(v({ onMouseEnter: G }, e), {
        onCtaClick:
            null != E
                ? () => {
                      (null == E || E(), F());
                  }
                : void 0
    });
    let H = k !== s || null == s || R;
    return (r.useEffect(() => {
        y && A && (D(!0), p.default.track(j.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != s && L(C.L.TAKE_ACTION));
    }, [y, A, s, t, L]),
    (0, m.Z)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t }
    }),
    n)
        ? t === b.I.UPCOMING_DROP_UNTIMED
            ? (0, i.jsx)('div', {
                  className: S.hoverWrapper,
                  onMouseEnter: U,
                  onFocus: U,
                  onMouseLeave: V,
                  onBlur: V,
                  children: (0, i.jsx)('div', {
                      className: l()(S.flipCardContainer, { [S.forceShadow]: h }),
                      children: (0, i.jsxs)('div', {
                          className: l()(S.flipCard, {
                              [S.partialFlipCard]: !M,
                              [S.ultraFlipCard]: M,
                              [S.rotateCard]: M && 3 === B,
                              [S.reducedMotion]: y
                          }),
                          children: [
                              (0, i.jsx)('div', {
                                  className: S.flipCardFront,
                                  children: (0, i.jsx)(N, T(v({}, e), { className: S.topCover }))
                              }),
                              (0, i.jsx)('div', {
                                  className: S.flipCardBack,
                                  children: (0, i.jsx)(N, T(v({}, e), { className: S.topCover }))
                              })
                          ]
                      })
                  })
              })
            : H
              ? (0, i.jsx)('div', {
                    className: S.hoverWrapper,
                    children: (0, i.jsx)('div', {
                        className: l()({
                            [S.noFlipCardContainer]: !Z,
                            [S.noFlipCardContainerCarousel]: Z,
                            [S.forceShadow]: h,
                            [S.reducedMotion]: y
                        }),
                        children: (0, i.jsx)(N, v({}, e))
                    })
                })
              : (0, i.jsx)('div', {
                    className: S.hoverWrapper,
                    children: (0, i.jsx)('div', {
                        className: l()(S.flipCardContainer, { [S.forceShadow]: h }),
                        children: (0, i.jsxs)(d.P3F, {
                            onClick: () => P(!0),
                            className: l()(S.flipCard, S.clickable, {
                                [S.flipped]: A,
                                [S.partialFlipCard]: !R && !A,
                                [S.reducedMotion]: y
                            }),
                            onTransitionEnd: (e) => {
                                A && 'transform' === e.propertyName && e.target.classList.contains(S.flipCard) && (D(!0), p.default.track(j.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != s && L(C.L.TAKE_ACTION));
                            },
                            children: [
                                (0, i.jsx)('div', {
                                    className: S.flipCardHidden,
                                    'aria-hidden': !0,
                                    children: (0, i.jsx)(N, v({}, e))
                                }),
                                (0, i.jsx)('div', {
                                    className: S.flipCardFront,
                                    children: (0, i.jsx)(N, T(v({}, w.upcomingDropUntimed), { pillText: '' }))
                                }),
                                (0, i.jsx)('div', {
                                    className: S.flipCardBack,
                                    children: (0, i.jsx)(N, T(v({}, e), { description: '' }))
                                }),
                                (0, i.jsx)('div', {
                                    className: S.flipCardButtonContainer,
                                    children: (0, i.jsx)(d.zxk, {
                                        onClick: () => P(!0),
                                        children: O.intl.string(O.t.dcztdX)
                                    })
                                })
                            ]
                        })
                    })
                })
        : (0, i.jsx)(I, T(v({}, w.upcomingDropUntimed), { forceShadow: h }));
});
I.displayName = 'PremiumPerkCard';
let N = r.forwardRef((e, t) => {
    var n;
    let { title: r, titleClassName: s = '', subtitle: a = '', description: o = '', descriptionCta: c = '', isPremiumGetCta: u, onCtaClick: m, onMouseEnter: g, className: p, perkComponent: f, cardVariant: b, cardType: j, onClick: C, backgroundImage: O, pillText: v, perkImage: T, imageOverlayText: I, hasNitroGradientBackground: N } = e,
        y = j === _.gM.CARD_CAROUSEL_FIRST_ROW || j === _.gM.CARD_CAROUSEL_SECOND_ROW || j === _.gM.CARD_CAROUSEL_THIRD_ROW,
        A = '' !== o || '' !== c || ('' !== a && b === _.zW.REWARD),
        P = (0, h._)(b);
    return (0, i.jsxs)(d.P3F, {
        className: l()(S.card, p, null == (n = P.cardContainer) ? void 0 : n.className, {
            [S.clickable]: null != C,
            [S.hideOverflow]: y,
            [S.nitroGradientBackground]: N
        }),
        onMouseEnter: g,
        style: { backgroundImage: null != O ? 'url('.concat(O, ')') : void 0 },
        onClick: C,
        children: [
            null != v &&
                (0, i.jsx)(d.Text, {
                    variant: 'text-xs/semibold',
                    className: S.pill,
                    children: v
                }),
            (0, i.jsx)('div', { ref: t }),
            (0, i.jsx)(x.Z, {
                title: r,
                titleClassName: s,
                subtitle: a,
                perkImage: T,
                isCarousel: y,
                descriptionCta: c,
                onCtaClick: m,
                perkComponent: f,
                subtitleClassName: S.cardSubtitle,
                cardVariant: b,
                imageOverlayText: I
            }),
            A &&
                (0, i.jsx)(E.Z, {
                    title: r,
                    titleClassName: s,
                    subtitle: a,
                    description: o,
                    descriptionCta: c,
                    isPremiumGetCta: u,
                    onCtaClick: m,
                    cardVariant: b,
                    perkComponent: f
                }),
            (0, i.jsx)('div', {
                className: l()(S.cover, S.above),
                ref: t
            })
        ]
    });
});
N.displayName = 'PerkCardContent';
let y = I;
