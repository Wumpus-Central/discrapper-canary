n.d(t, {
    A: () => j,
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
    b = n(322631),
    h = n(784356),
    E = n(452910),
    O = n(652215),
    C = n(49999),
    x = n(985018),
    S = n(296388);

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

function I(e, t) {
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
let y = i.memo((e) => {
    let { name: t, canReveal: n = !0, dismissibleContentType: l, forceShadow: g, cardType: h } = e,
        E = null == e ? void 0 : e.onCtaClick,
        j = (0, c.bG)([u.A], () => u.A.useReducedMotion),
        [v, P] = i.useState(!1),
        [R, D] = i.useState(!1),
        L =
            h === b.cJ.CARD_CAROUSEL_FIRST_ROW ||
            h === b.cJ.CARD_CAROUSEL_SECOND_ROW ||
            h === b.cJ.CARD_CAROUSEL_THIRD_ROW,
        w = (0, f.A)(),
        [M, G] = (0, p.DP)(null != l && n ? [l] : []),
        { easterEggLevel: U, isEasterEggTriggered: k, onHover: B, onUnhover: H } = (0, A.A)(5),
        V = i.useMemo(
            () =>
                (0, a.debounce)(() => {
                    m.default.track(O.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, a.snakeCase)(t),
                    });
                }, 800),
            [t],
        ),
        F = i.useMemo(
            () =>
                (0, a.debounce)(() => {
                    null != E &&
                        m.default.track(O.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                            card_type: (0, a.snakeCase)(t),
                            function_name: (0, a.snakeCase)(E.name),
                        });
                }, 800),
            [t, E],
        );
    e = I(
        T(
            {
                onMouseEnter: V,
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
        j &&
            v &&
            (D(!0),
            m.default.track(O.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
                card_type: t,
            }),
            null != l && G(C.i.TAKE_ACTION));
    }, [j, v, l, t, G]),
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
                  className: S.iQ,
                  onMouseEnter: B,
                  onFocus: B,
                  onMouseLeave: H,
                  onBlur: H,
                  children: (0, r.jsx)("div", {
                      className: s()(S.Rz, {
                          [S.sT]: g,
                      }),
                      children: (0, r.jsxs)("div", {
                          className: s()(S.Ci, {
                              [S.BX]: !k,
                              [S.yg]: k,
                              [S.Ud]: k && 3 === U,
                              [S.VN]: j,
                          }),
                          children: [
                              (0, r.jsx)("div", {
                                  className: S.He,
                                  children: (0, r.jsx)(
                                      N,
                                      I(T({}, e), {
                                          className: S.Du,
                                      }),
                                  ),
                              }),
                              (0, r.jsx)("div", {
                                  className: S.ll,
                                  children: (0, r.jsx)(
                                      N,
                                      I(T({}, e), {
                                          className: S.Du,
                                      }),
                                  ),
                              }),
                          ],
                      }),
                  }),
              })
            : Y
              ? (0, r.jsx)("div", {
                    className: S.iQ,
                    children: (0, r.jsx)("div", {
                        className: s()({
                            [S.u9]: !L,
                            [S.E$]: L,
                            [S.sT]: g,
                            [S.VN]: j,
                        }),
                        children: (0, r.jsx)(N, T({}, e)),
                    }),
                })
              : (0, r.jsx)("div", {
                    className: S.iQ,
                    children: (0, r.jsx)("div", {
                        className: s()(S.Rz, {
                            [S.sT]: g,
                        }),
                        children: (0, r.jsxs)(d.DUT, {
                            onClick: () => P(!0),
                            className: s()(S.Ci, S.vk, {
                                [S.zq]: v,
                                [S.BX]: !R && !v,
                                [S.VN]: j,
                            }),
                            onTransitionEnd: (e) => {
                                v &&
                                    "transform" === e.propertyName &&
                                    e.target.classList.contains(S.Ci) &&
                                    (D(!0),
                                    m.default.track(O.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
                                        card_type: t,
                                    }),
                                    null != l && G(C.i.TAKE_ACTION));
                            },
                            children: [
                                (0, r.jsx)("div", {
                                    className: S.UF,
                                    "aria-hidden": !0,
                                    children: (0, r.jsx)(N, T({}, e)),
                                }),
                                (0, r.jsx)("div", {
                                    className: S.He,
                                    children: (0, r.jsx)(
                                        N,
                                        I(T({}, w.upcomingDropUntimed), {
                                            pillText: "",
                                        }),
                                    ),
                                }),
                                (0, r.jsx)("div", {
                                    className: S.ll,
                                    children: (0, r.jsx)(
                                        N,
                                        I(T({}, e), {
                                            description: null,
                                        }),
                                    ),
                                }),
                                (0, r.jsx)("div", {
                                    className: S.Z7,
                                    children: (0, r.jsx)(d.Button, {
                                        variant: "primary",
                                        text: x.intl.string(x.t.dcztdU),
                                        onClick: () => P(!0),
                                    }),
                                }),
                            ],
                        }),
                    }),
                })
        : (0, r.jsx)(
              y,
              I(T({}, w.upcomingDropUntimed), {
                  forceShadow: g,
              }),
          );
});
y.displayName = "PremiumPerkCard";
let N = i.forwardRef((e, t) => {
    var n;
    let {
            title: i,
            titleClassName: l,
            subtitle: a,
            description: o,
            descriptionCta: c,
            customContent: u,
            isPremiumGetCta: _,
            onCtaClick: p,
            onMouseEnter: m,
            className: A,
            perkComponent: f,
            cardVariant: O,
            cardType: C,
            onClick: x,
            backgroundImage: T,
            pillText: I,
            perkImage: y,
            imageOverlayText: N,
            hasNitroGradientBackground: j,
        } = e,
        v =
            C === b.cJ.CARD_CAROUSEL_FIRST_ROW ||
            C === b.cJ.CARD_CAROUSEL_SECOND_ROW ||
            C === b.cJ.CARD_CAROUSEL_THIRD_ROW,
        P = null != o || null != c,
        R = (0, g.Q)(O);
    return (0, r.jsxs)(d.DUT, {
        className: s()(S.Nr, A, null == (n = R.cardContainer) ? void 0 : n.className, {
            [S.vk]: null != x,
            [S.JP]: v,
            [S.NT]: j,
        }),
        onMouseEnter: m,
        style: {
            backgroundImage: null != T ? "url(".concat(T, ")") : void 0,
            backgroundPosition: null != T ? "bottom right" : void 0,
            backgroundRepeat: null != T ? "no-repeat" : void 0,
        },
        onClick: x,
        children: [
            null != I &&
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/semibold",
                    className: S.Io,
                    children: I,
                }),
            (0, r.jsx)("div", {
                ref: t,
            }),
            (0, r.jsx)(h.A, {
                title: i,
                titleClassName: l,
                subtitle: a,
                perkImage: y,
                isCarousel: v,
                descriptionCta: c,
                customContent: u,
                onCtaClick: p,
                perkComponent: f,
                subtitleClassName: S.Dc,
                cardVariant: O,
                imageOverlayText: N,
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
                    cardVariant: O,
                    perkComponent: f,
                }),
            (0, r.jsx)("div", {
                className: s()(S.Iv, S.G1),
                ref: t,
            }),
        ],
    });
});
N.displayName = "PerkCardContent";
let j = y;
