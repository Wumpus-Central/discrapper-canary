n.d(t, {
    A: () => N,
}),
    n(896048),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    o = n(110259),
    c = n(417597),
    d = n(397927),
    u = n(775602),
    _ = n(139286),
    p = n(160761),
    m = n(954571),
    g = n(543233),
    A = n(29570),
    f = n(975662),
    h = n(322631),
    b = n(784356),
    E = n(452910),
    x = n(652215),
    O = n(49999),
    C = n(985018),
    I = n(296388);

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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function S(e, t) {
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
let j = i.memo((e) => {
    let { name: t, canReveal: n = !0, dismissibleContentType: l, forceShadow: g, cardType: b } = e,
        E = null == e ? void 0 : e.onCtaClick,
        N = (0, c.bG)([u.A], () => u.A.useReducedMotion),
        [y, P] = i.useState(!1),
        [R, D] = i.useState(!1),
        w =
            b === h.cJ.CARD_CAROUSEL_FIRST_ROW ||
            b === h.cJ.CARD_CAROUSEL_SECOND_ROW ||
            b === h.cJ.CARD_CAROUSEL_THIRD_ROW,
        L = (0, f.A)(),
        [M, U] = (0, p.DP)(null != l && n ? [l] : []),
        { easterEggLevel: G, isEasterEggTriggered: k, onHover: V, onUnhover: H } = (0, A.A)(5),
        B = i.useMemo(
            () =>
                (0, a.debounce)(() => {
                    m.default.track(x.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, a.snakeCase)(t),
                    });
                }, 800),
            [t],
        ),
        F = i.useMemo(
            () =>
                (0, a.debounce)(() => {
                    null != E &&
                        m.default.track(x.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                            card_type: (0, a.snakeCase)(t),
                            function_name: (0, a.snakeCase)(E.name),
                        });
                }, 800),
            [t, E],
        );
    e = S(
        T(
            {
                onMouseEnter: B,
            },
            e,
        ),
        {
            onCtaClick:
                null != E
                    ? () => {
                          null == E || E(), F();
                      }
                    : void 0,
        },
    );
    let Y = M !== l || null == l || R;
    return (i.useEffect(() => {
        N &&
            y &&
            (D(!0),
            m.default.track(x.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
                card_type: t,
            }),
            null != l && U(O.i.TAKE_ACTION));
    }, [N, y, l, t, U]),
    (0, _.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t,
        },
    }),
    n)
        ? t === f.U.UPCOMING_DROP_UNTIMED
            ? (0, r.jsx)("div", {
                  className: I.iQ,
                  onMouseEnter: V,
                  onFocus: V,
                  onMouseLeave: H,
                  onBlur: H,
                  children: (0, r.jsx)("div", {
                      className: s()(I.Rz, {
                          [I.sT]: g,
                      }),
                      children: (0, r.jsxs)("div", {
                          className: s()(I.Ci, {
                              [I.BX]: !k,
                              [I.yg]: k,
                              [I.Ud]: k && 3 === G,
                              [I.VN]: N,
                          }),
                          children: [
                              (0, r.jsx)("div", {
                                  className: I.He,
                                  children: (0, r.jsx)(
                                      v,
                                      S(T({}, e), {
                                          className: I.Du,
                                      }),
                                  ),
                              }),
                              (0, r.jsx)("div", {
                                  className: I.ll,
                                  children: (0, r.jsx)(
                                      v,
                                      S(T({}, e), {
                                          className: I.Du,
                                      }),
                                  ),
                              }),
                          ],
                      }),
                  }),
              })
            : Y
              ? (0, r.jsx)("div", {
                    className: I.iQ,
                    children: (0, r.jsx)("div", {
                        className: s()({
                            [I.u9]: !w,
                            [I.E$]: w,
                            [I.sT]: g,
                            [I.VN]: N,
                        }),
                        children: (0, r.jsx)(v, T({}, e)),
                    }),
                })
              : (0, r.jsx)("div", {
                    className: I.iQ,
                    children: (0, r.jsx)("div", {
                        className: s()(I.Rz, {
                            [I.sT]: g,
                        }),
                        children: (0, r.jsxs)(d.DUT, {
                            onClick: () => P(!0),
                            className: s()(I.Ci, I.vk, {
                                [I.zq]: y,
                                [I.BX]: !R && !y,
                                [I.VN]: N,
                            }),
                            onTransitionEnd: (e) => {
                                y &&
                                    "transform" === e.propertyName &&
                                    e.target.classList.contains(I.Ci) &&
                                    (D(!0),
                                    m.default.track(x.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
                                        card_type: t,
                                    }),
                                    null != l && U(O.i.TAKE_ACTION));
                            },
                            children: [
                                (0, r.jsx)("div", {
                                    className: I.UF,
                                    "aria-hidden": !0,
                                    children: (0, r.jsx)(v, T({}, e)),
                                }),
                                (0, r.jsx)("div", {
                                    className: I.He,
                                    children: (0, r.jsx)(
                                        v,
                                        S(T({}, L.upcomingDropUntimed), {
                                            pillText: "",
                                        }),
                                    ),
                                }),
                                (0, r.jsx)("div", {
                                    className: I.ll,
                                    children: (0, r.jsx)(
                                        v,
                                        S(T({}, e), {
                                            description: "",
                                        }),
                                    ),
                                }),
                                (0, r.jsx)("div", {
                                    className: I.Z7,
                                    children: (0, r.jsx)(d.Button, {
                                        variant: "primary",
                                        text: C.intl.string(C.t.dcztdU),
                                        onClick: () => P(!0),
                                    }),
                                }),
                            ],
                        }),
                    }),
                })
        : (0, r.jsx)(
              j,
              S(T({}, L.upcomingDropUntimed), {
                  forceShadow: g,
              }),
          );
});
j.displayName = "PremiumPerkCard";
let v = i.forwardRef((e, t) => {
    var n;
    let {
            title: i,
            titleClassName: l = "",
            subtitle: a = "",
            description: o = "",
            descriptionCta: c = "",
            customContent: u,
            isPremiumGetCta: _,
            onCtaClick: p,
            onMouseEnter: m,
            className: A,
            perkComponent: f,
            cardVariant: x,
            cardType: O,
            onClick: C,
            backgroundImage: T,
            pillText: S,
            perkImage: j,
            imageOverlayText: v,
            hasNitroGradientBackground: N,
        } = e,
        y =
            O === h.cJ.CARD_CAROUSEL_FIRST_ROW ||
            O === h.cJ.CARD_CAROUSEL_SECOND_ROW ||
            O === h.cJ.CARD_CAROUSEL_THIRD_ROW,
        P = "" !== o || "" !== c || ("" !== a && x === h.PJ.REWARD),
        R = (0, g.Q)(x);
    return (0, r.jsxs)(d.DUT, {
        className: s()(I.Nr, A, null == (n = R.cardContainer) ? void 0 : n.className, {
            [I.vk]: null != C,
            [I.JP]: y,
            [I.NT]: N,
        }),
        onMouseEnter: m,
        style: {
            backgroundImage: null != T ? "url(".concat(T, ")") : void 0,
            backgroundPosition: null != T ? "bottom right" : void 0,
            backgroundRepeat: null != T ? "no-repeat" : void 0,
        },
        onClick: C,
        children: [
            null != S &&
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/semibold",
                    className: I.Io,
                    children: S,
                }),
            (0, r.jsx)("div", {
                ref: t,
            }),
            (0, r.jsx)(b.A, {
                title: i,
                titleClassName: l,
                subtitle: a,
                perkImage: j,
                isCarousel: y,
                descriptionCta: c,
                customContent: u,
                onCtaClick: p,
                perkComponent: f,
                subtitleClassName: I.Dc,
                cardVariant: x,
                imageOverlayText: v,
            }),
            P &&
                (0, r.jsx)(E.A, {
                    title: i,
                    titleClassName: l,
                    subtitle: a,
                    description: o,
                    descriptionCta: c,
                    isPremiumGetCta: _,
                    onCtaClick: p,
                    cardVariant: x,
                    perkComponent: f,
                }),
            (0, r.jsx)("div", {
                className: s()(I.Iv, I.G1),
                ref: t,
            }),
        ],
    });
});
v.displayName = "PerkCardContent";
let N = j;
