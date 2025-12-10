n.d(t, { Z: () => D }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(990547),
    c = n(399606),
    u = n(481060),
    d = n(607070),
    f = n(213609),
    p = n(706140),
    _ = n(626135),
    m = n(176782),
    h = n(238108),
    g = n(22189),
    E = n(391110),
    b = n(484239),
    y = n(658370),
    O = n(981631),
    v = n(921944),
    S = n(388032),
    I = n(505754);
function T(e, t, n) {
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
function C(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = i.memo((e) => {
    let { name: t, canReveal: n = !0, dismissibleContentType: a, forceShadow: m, cardType: b } = e,
        y = null == e ? void 0 : e.onCtaClick,
        T = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
        [A, D] = i.useState(!1),
        [w, x] = i.useState(!1),
        L =
            b === E.gM.CARD_CAROUSEL_FIRST_ROW ||
            b === E.gM.CARD_CAROUSEL_SECOND_ROW ||
            b === E.gM.CARD_CAROUSEL_THIRD_ROW,
        j = (0, g.Z)(),
        [M, k] = (0, p.cv)(null != a && n ? [a] : []),
        { easterEggLevel: U, isEasterEggTriggered: G, onHover: Z, onUnhover: B } = (0, h.Z)(5),
        F = i.useMemo(
            () =>
                (0, s.debounce)(() => {
                    _.default.track(O.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, s.snakeCase)(t),
                    });
                }, 800),
            [t],
        ),
        V = i.useMemo(
            () =>
                (0, s.debounce)(() => {
                    null != y &&
                        _.default.track(O.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                            card_type: (0, s.snakeCase)(t),
                            function_name: (0, s.snakeCase)(y.name),
                        });
                }, 800),
            [t, y],
        ),
        H = () => {
            null == y || y(), V();
        };
    e = N(C({ onMouseEnter: F }, e), { onCtaClick: null != y ? H : void 0 });
    let Y = M !== a || null == a || w,
        W = (e) => {
            A &&
                "transform" === e.propertyName &&
                e.target.classList.contains(I.flipCard) &&
                (x(!0),
                _.default.track(O.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }),
                null != a && k(v.L.TAKE_ACTION));
        };
    return (i.useEffect(() => {
        T &&
            A &&
            (x(!0),
            _.default.track(O.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }),
            null != a && k(v.L.TAKE_ACTION));
    }, [T, A, a, t, k]),
    (0, f.Z)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t },
    }),
    n)
        ? t === g.I.UPCOMING_DROP_UNTIMED
            ? (0, r.jsx)("div", {
                  className: I.hoverWrapper,
                  onMouseEnter: Z,
                  onFocus: Z,
                  onMouseLeave: B,
                  onBlur: B,
                  children: (0, r.jsx)("div", {
                      className: o()(I.flipCardContainer, { [I.forceShadow]: m }),
                      children: (0, r.jsxs)("div", {
                          className: o()(I.flipCard, {
                              [I.partialFlipCard]: !G,
                              [I.ultraFlipCard]: G,
                              [I.rotateCard]: G && 3 === U,
                              [I.reducedMotion]: T,
                          }),
                          children: [
                              (0, r.jsx)("div", {
                                  className: I.flipCardFront,
                                  children: (0, r.jsx)(R, N(C({}, e), { className: I.topCover })),
                              }),
                              (0, r.jsx)("div", {
                                  className: I.flipCardBack,
                                  children: (0, r.jsx)(R, N(C({}, e), { className: I.topCover })),
                              }),
                          ],
                      }),
                  }),
              })
            : Y
              ? (0, r.jsx)("div", {
                    className: I.hoverWrapper,
                    children: (0, r.jsx)("div", {
                        className: o()({
                            [I.noFlipCardContainer]: !L,
                            [I.noFlipCardContainerCarousel]: L,
                            [I.forceShadow]: m,
                            [I.reducedMotion]: T,
                        }),
                        children: (0, r.jsx)(R, C({}, e)),
                    }),
                })
              : (0, r.jsx)("div", {
                    className: I.hoverWrapper,
                    children: (0, r.jsx)("div", {
                        className: o()(I.flipCardContainer, { [I.forceShadow]: m }),
                        children: (0, r.jsxs)(u.P3F, {
                            onClick: () => D(!0),
                            className: o()(I.flipCard, I.clickable, {
                                [I.flipped]: A,
                                [I.partialFlipCard]: !w && !A,
                                [I.reducedMotion]: T,
                            }),
                            onTransitionEnd: W,
                            children: [
                                (0, r.jsx)("div", {
                                    className: I.flipCardHidden,
                                    "aria-hidden": !0,
                                    children: (0, r.jsx)(R, C({}, e)),
                                }),
                                (0, r.jsx)("div", {
                                    className: I.flipCardFront,
                                    children: (0, r.jsx)(R, N(C({}, j.upcomingDropUntimed), { pillText: "" })),
                                }),
                                (0, r.jsx)("div", {
                                    className: I.flipCardBack,
                                    children: (0, r.jsx)(R, N(C({}, e), { description: "" })),
                                }),
                                (0, r.jsx)("div", {
                                    className: I.flipCardButtonContainer,
                                    children: (0, r.jsx)(u.Button, {
                                        variant: "primary",
                                        text: S.intl.string(S.t.dcztdU),
                                        onClick: () => D(!0),
                                    }),
                                }),
                            ],
                        }),
                    }),
                })
        : (0, r.jsx)(P, N(C({}, j.upcomingDropUntimed), { forceShadow: m }));
});
P.displayName = "PremiumPerkCard";
let R = i.forwardRef((e, t) => {
    var n;
    let {
            title: i,
            titleClassName: a = "",
            subtitle: s = "",
            description: l = "",
            descriptionCta: c = "",
            customContent: d,
            isPremiumGetCta: f,
            onCtaClick: p,
            onMouseEnter: _,
            className: h,
            perkComponent: g,
            cardVariant: O,
            cardType: v,
            onClick: S,
            backgroundImage: T,
            pillText: C,
            perkImage: A,
            imageOverlayText: N,
            hasNitroGradientBackground: P,
        } = e,
        R =
            v === E.gM.CARD_CAROUSEL_FIRST_ROW ||
            v === E.gM.CARD_CAROUSEL_SECOND_ROW ||
            v === E.gM.CARD_CAROUSEL_THIRD_ROW,
        D = "" !== l || "" !== c || ("" !== s && O === E.zW.REWARD),
        w = (0, m._)(O);
    return (0, r.jsxs)(u.P3F, {
        className: o()(I.card, h, null == (n = w.cardContainer) ? void 0 : n.className, {
            [I.clickable]: null != S,
            [I.hideOverflow]: R,
            [I.nitroGradientBackground]: P,
        }),
        onMouseEnter: _,
        style: {
            backgroundImage: null != T ? "url(".concat(T, ")") : void 0,
            backgroundPosition: null != T ? "bottom right" : void 0,
            backgroundRepeat: null != T ? "no-repeat" : void 0,
        },
        onClick: S,
        children: [
            null != C &&
                (0, r.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    className: I.pill,
                    children: C,
                }),
            (0, r.jsx)("div", { ref: t }),
            (0, r.jsx)(b.Z, {
                title: i,
                titleClassName: a,
                subtitle: s,
                perkImage: A,
                isCarousel: R,
                descriptionCta: c,
                customContent: d,
                onCtaClick: p,
                perkComponent: g,
                subtitleClassName: I.cardSubtitle,
                cardVariant: O,
                imageOverlayText: N,
            }),
            D &&
                (0, r.jsx)(y.Z, {
                    title: i,
                    titleClassName: a,
                    subtitle: s,
                    description: l,
                    descriptionCta: c,
                    isPremiumGetCta: f,
                    onCtaClick: p,
                    cardVariant: O,
                    perkComponent: g,
                }),
            (0, r.jsx)("div", {
                className: o()(I.cover, I.above),
                ref: t,
            }),
        ],
    });
});
R.displayName = "PerkCardContent";
let D = P;
