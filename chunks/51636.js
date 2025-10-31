n.d(t, { Z: () => w }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(990547),
    c = n(399606),
    u = n(481060),
    d = n(607070),
    f = n(213609),
    _ = n(706140),
    p = n(626135),
    h = n(176782),
    m = n(238108),
    g = n(22189),
    E = n(391110),
    b = n(484239),
    y = n(658370),
    O = n(981631),
    v = n(921944),
    I = n(388032),
    T = n(505754);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = i.memo((e) => {
    let { name: t, canReveal: n = !0, dismissibleContentType: a, forceShadow: h, cardType: b } = e,
        y = null == e ? void 0 : e.onCtaClick,
        S = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
        [C, w] = i.useState(!1),
        [D, x] = i.useState(!1),
        L =
            b === E.gM.CARD_CAROUSEL_FIRST_ROW ||
            b === E.gM.CARD_CAROUSEL_SECOND_ROW ||
            b === E.gM.CARD_CAROUSEL_THIRD_ROW,
        M = (0, g.Z)(),
        [j, k] = (0, _.cv)(null != a && n ? [a] : []),
        { easterEggLevel: U, isEasterEggTriggered: G, onHover: B, onUnhover: Z } = (0, m.Z)(5),
        F = (0, s.debounce)(() => {
            p.default.track(O.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, { card_type: (0, s.snakeCase)(t) });
        }, 800),
        V = (0, s.debounce)(() => {
            null != y &&
                p.default.track(O.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, s.snakeCase)(t),
                    function_name: (0, s.snakeCase)(y.name),
                });
        }, 800),
        H = () => {
            null == y || y(), V();
        };
    e = N(A({ onMouseEnter: F }, e), { onCtaClick: null != y ? H : void 0 });
    let Y = j !== a || null == a || D,
        W = (e) => {
            C &&
                "transform" === e.propertyName &&
                e.target.classList.contains(T.flipCard) &&
                (x(!0),
                p.default.track(O.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }),
                null != a && k(v.L.TAKE_ACTION));
        };
    return (i.useEffect(() => {
        S &&
            C &&
            (x(!0),
            p.default.track(O.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }),
            null != a && k(v.L.TAKE_ACTION));
    }, [S, C, a, t, k]),
    (0, f.Z)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t },
    }),
    n)
        ? t === g.I.UPCOMING_DROP_UNTIMED
            ? (0, r.jsx)("div", {
                  className: T.hoverWrapper,
                  onMouseEnter: B,
                  onFocus: B,
                  onMouseLeave: Z,
                  onBlur: Z,
                  children: (0, r.jsx)("div", {
                      className: o()(T.flipCardContainer, { [T.forceShadow]: h }),
                      children: (0, r.jsxs)("div", {
                          className: o()(T.flipCard, {
                              [T.partialFlipCard]: !G,
                              [T.ultraFlipCard]: G,
                              [T.rotateCard]: G && 3 === U,
                              [T.reducedMotion]: S,
                          }),
                          children: [
                              (0, r.jsx)("div", {
                                  className: T.flipCardFront,
                                  children: (0, r.jsx)(P, N(A({}, e), { className: T.topCover })),
                              }),
                              (0, r.jsx)("div", {
                                  className: T.flipCardBack,
                                  children: (0, r.jsx)(P, N(A({}, e), { className: T.topCover })),
                              }),
                          ],
                      }),
                  }),
              })
            : Y
              ? (0, r.jsx)("div", {
                    className: T.hoverWrapper,
                    children: (0, r.jsx)("div", {
                        className: o()({
                            [T.noFlipCardContainer]: !L,
                            [T.noFlipCardContainerCarousel]: L,
                            [T.forceShadow]: h,
                            [T.reducedMotion]: S,
                        }),
                        children: (0, r.jsx)(P, A({}, e)),
                    }),
                })
              : (0, r.jsx)("div", {
                    className: T.hoverWrapper,
                    children: (0, r.jsx)("div", {
                        className: o()(T.flipCardContainer, { [T.forceShadow]: h }),
                        children: (0, r.jsxs)(u.P3F, {
                            onClick: () => w(!0),
                            className: o()(T.flipCard, T.clickable, {
                                [T.flipped]: C,
                                [T.partialFlipCard]: !D && !C,
                                [T.reducedMotion]: S,
                            }),
                            onTransitionEnd: W,
                            children: [
                                (0, r.jsx)("div", {
                                    className: T.flipCardHidden,
                                    "aria-hidden": !0,
                                    children: (0, r.jsx)(P, A({}, e)),
                                }),
                                (0, r.jsx)("div", {
                                    className: T.flipCardFront,
                                    children: (0, r.jsx)(P, N(A({}, M.upcomingDropUntimed), { pillText: "" })),
                                }),
                                (0, r.jsx)("div", {
                                    className: T.flipCardBack,
                                    children: (0, r.jsx)(P, N(A({}, e), { description: "" })),
                                }),
                                (0, r.jsx)("div", {
                                    className: T.flipCardButtonContainer,
                                    children: (0, r.jsx)(u.Button, {
                                        variant: "primary",
                                        text: I.intl.string(I.t.dcztdU),
                                        onClick: () => w(!0),
                                    }),
                                }),
                            ],
                        }),
                    }),
                })
        : (0, r.jsx)(R, N(A({}, M.upcomingDropUntimed), { forceShadow: h }));
});
R.displayName = "PremiumPerkCard";
let P = i.forwardRef((e, t) => {
    var n;
    let {
            title: i,
            titleClassName: a = "",
            subtitle: s = "",
            description: l = "",
            descriptionCta: c = "",
            customContent: d,
            isPremiumGetCta: f,
            onCtaClick: _,
            onMouseEnter: p,
            className: m,
            perkComponent: g,
            cardVariant: O,
            cardType: v,
            onClick: I,
            backgroundImage: S,
            pillText: A,
            perkImage: C,
            imageOverlayText: N,
            hasNitroGradientBackground: R,
        } = e,
        P =
            v === E.gM.CARD_CAROUSEL_FIRST_ROW ||
            v === E.gM.CARD_CAROUSEL_SECOND_ROW ||
            v === E.gM.CARD_CAROUSEL_THIRD_ROW,
        w = "" !== l || "" !== c || ("" !== s && O === E.zW.REWARD),
        D = (0, h._)(O);
    return (0, r.jsxs)(u.P3F, {
        className: o()(T.card, m, null == (n = D.cardContainer) ? void 0 : n.className, {
            [T.clickable]: null != I,
            [T.hideOverflow]: P,
            [T.nitroGradientBackground]: R,
        }),
        onMouseEnter: p,
        style: {
            backgroundImage: null != S ? "url(".concat(S, ")") : void 0,
            backgroundPosition: null != S ? "bottom right" : void 0,
            backgroundRepeat: null != S ? "no-repeat" : void 0,
        },
        onClick: I,
        children: [
            null != A &&
                (0, r.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    className: T.pill,
                    children: A,
                }),
            (0, r.jsx)("div", { ref: t }),
            (0, r.jsx)(b.Z, {
                title: i,
                titleClassName: a,
                subtitle: s,
                perkImage: C,
                isCarousel: P,
                descriptionCta: c,
                customContent: d,
                onCtaClick: _,
                perkComponent: g,
                subtitleClassName: T.cardSubtitle,
                cardVariant: O,
                imageOverlayText: N,
            }),
            w &&
                (0, r.jsx)(y.Z, {
                    title: i,
                    titleClassName: a,
                    subtitle: s,
                    description: l,
                    descriptionCta: c,
                    isPremiumGetCta: f,
                    onCtaClick: _,
                    cardVariant: O,
                    perkComponent: g,
                }),
            (0, r.jsx)("div", {
                className: o()(T.cover, T.above),
                ref: t,
            }),
        ],
    });
});
P.displayName = "PerkCardContent";
let w = R;
