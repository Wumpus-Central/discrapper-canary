n.d(t, { A: () => P }), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(110259),
    c = n(417597),
    u = n(397927),
    d = n(775602),
    f = n(139286),
    p = n(160761),
    _ = n(954571),
    h = n(543233),
    m = n(29570),
    g = n(975662),
    E = n(322631),
    b = n(784356),
    y = n(452910),
    O = n(652215),
    A = n(49999),
    v = n(985018),
    S = n(296388);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
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
        I = (0, c.bG)([d.A], () => d.A.useReducedMotion),
        [C, P] = i.useState(!1),
        [D, x] = i.useState(!1),
        L =
            b === E.cJ.CARD_CAROUSEL_FIRST_ROW ||
            b === E.cJ.CARD_CAROUSEL_SECOND_ROW ||
            b === E.cJ.CARD_CAROUSEL_THIRD_ROW,
        j = (0, g.A)(),
        [M, k] = (0, p.DP)(null != a && n ? [a] : []),
        { easterEggLevel: U, isEasterEggTriggered: G, onHover: V, onUnhover: F } = (0, m.A)(5),
        B = i.useMemo(
            () =>
                (0, o.debounce)(() => {
                    _.default.track(O.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, o.snakeCase)(t),
                    });
                }, 800),
            [t],
        ),
        H = i.useMemo(
            () =>
                (0, o.debounce)(() => {
                    null != y &&
                        _.default.track(O.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                            card_type: (0, o.snakeCase)(t),
                            function_name: (0, o.snakeCase)(y.name),
                        });
                }, 800),
            [t, y],
        ),
        Y = () => {
            null == y || y(), H();
        };
    e = N(T({ onMouseEnter: B }, e), { onCtaClick: null != y ? Y : void 0 });
    let W = M !== a || null == a || D,
        K = (e) => {
            C &&
                "transform" === e.propertyName &&
                e.target.classList.contains(S.Ci) &&
                (x(!0),
                _.default.track(O.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }),
                null != a && k(A.i.TAKE_ACTION));
        };
    return (i.useEffect(() => {
        I &&
            C &&
            (x(!0),
            _.default.track(O.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }),
            null != a && k(A.i.TAKE_ACTION));
    }, [I, C, a, t, k]),
    (0, f.A)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t },
    }),
    n)
        ? t === g.U.UPCOMING_DROP_UNTIMED
            ? (0, r.jsx)("div", {
                  className: S.iQ,
                  onMouseEnter: V,
                  onFocus: V,
                  onMouseLeave: F,
                  onBlur: F,
                  children: (0, r.jsx)("div", {
                      className: s()(S.Rz, { [S.sT]: h }),
                      children: (0, r.jsxs)("div", {
                          className: s()(S.Ci, {
                              [S.BX]: !G,
                              [S.yg]: G,
                              [S.Ud]: G && 3 === U,
                              [S.VN]: I,
                          }),
                          children: [
                              (0, r.jsx)("div", {
                                  className: S.He,
                                  children: (0, r.jsx)(w, N(T({}, e), { className: S.Du })),
                              }),
                              (0, r.jsx)("div", {
                                  className: S.ll,
                                  children: (0, r.jsx)(w, N(T({}, e), { className: S.Du })),
                              }),
                          ],
                      }),
                  }),
              })
            : W
              ? (0, r.jsx)("div", {
                    className: S.iQ,
                    children: (0, r.jsx)("div", {
                        className: s()({
                            [S.u9]: !L,
                            [S.E$]: L,
                            [S.sT]: h,
                            [S.VN]: I,
                        }),
                        children: (0, r.jsx)(w, T({}, e)),
                    }),
                })
              : (0, r.jsx)("div", {
                    className: S.iQ,
                    children: (0, r.jsx)("div", {
                        className: s()(S.Rz, { [S.sT]: h }),
                        children: (0, r.jsxs)(u.DUT, {
                            onClick: () => P(!0),
                            className: s()(S.Ci, S.vk, {
                                [S.zq]: C,
                                [S.BX]: !D && !C,
                                [S.VN]: I,
                            }),
                            onTransitionEnd: K,
                            children: [
                                (0, r.jsx)("div", {
                                    className: S.UF,
                                    "aria-hidden": !0,
                                    children: (0, r.jsx)(w, T({}, e)),
                                }),
                                (0, r.jsx)("div", {
                                    className: S.He,
                                    children: (0, r.jsx)(w, N(T({}, j.upcomingDropUntimed), { pillText: "" })),
                                }),
                                (0, r.jsx)("div", {
                                    className: S.ll,
                                    children: (0, r.jsx)(w, N(T({}, e), { description: "" })),
                                }),
                                (0, r.jsx)("div", {
                                    className: S.Z7,
                                    children: (0, r.jsx)(u.Button, {
                                        variant: "primary",
                                        text: v.intl.string(v.t.dcztdU),
                                        onClick: () => P(!0),
                                    }),
                                }),
                            ],
                        }),
                    }),
                })
        : (0, r.jsx)(R, N(T({}, j.upcomingDropUntimed), { forceShadow: h }));
});
R.displayName = "PremiumPerkCard";
let w = i.forwardRef((e, t) => {
    var n;
    let {
            title: i,
            titleClassName: a = "",
            subtitle: o = "",
            description: l = "",
            descriptionCta: c = "",
            customContent: d,
            isPremiumGetCta: f,
            onCtaClick: p,
            onMouseEnter: _,
            className: m,
            perkComponent: g,
            cardVariant: O,
            cardType: A,
            onClick: v,
            backgroundImage: I,
            pillText: T,
            perkImage: C,
            imageOverlayText: N,
            hasNitroGradientBackground: R,
        } = e,
        w =
            A === E.cJ.CARD_CAROUSEL_FIRST_ROW ||
            A === E.cJ.CARD_CAROUSEL_SECOND_ROW ||
            A === E.cJ.CARD_CAROUSEL_THIRD_ROW,
        P = "" !== l || "" !== c || ("" !== o && O === E.PJ.REWARD),
        D = (0, h.Q)(O);
    return (0, r.jsxs)(u.DUT, {
        className: s()(S.Nr, m, null == (n = D.cardContainer) ? void 0 : n.className, {
            [S.vk]: null != v,
            [S.JP]: w,
            [S.NT]: R,
        }),
        onMouseEnter: _,
        style: {
            backgroundImage: null != I ? "url(".concat(I, ")") : void 0,
            backgroundPosition: null != I ? "bottom right" : void 0,
            backgroundRepeat: null != I ? "no-repeat" : void 0,
        },
        onClick: v,
        children: [
            null != T &&
                (0, r.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    className: S.Io,
                    children: T,
                }),
            (0, r.jsx)("div", { ref: t }),
            (0, r.jsx)(b.A, {
                title: i,
                titleClassName: a,
                subtitle: o,
                perkImage: C,
                isCarousel: w,
                descriptionCta: c,
                customContent: d,
                onCtaClick: p,
                perkComponent: g,
                subtitleClassName: S.Dc,
                cardVariant: O,
                imageOverlayText: N,
            }),
            P &&
                (0, r.jsx)(y.A, {
                    title: i,
                    titleClassName: a,
                    subtitle: o,
                    description: l,
                    descriptionCta: c,
                    isPremiumGetCta: f,
                    onCtaClick: p,
                    cardVariant: O,
                    perkComponent: g,
                }),
            (0, r.jsx)("div", {
                className: s()(S.Iv, S.G1),
                ref: t,
            }),
        ],
    });
});
w.displayName = "PerkCardContent";
let P = R;
