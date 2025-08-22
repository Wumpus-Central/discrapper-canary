n.d(t, {
    PD: () => A,
    ZP: () => M,
    aR: () => R,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(202841),
    s = n(91192),
    c = n(442837),
    u = n(704215),
    d = n(477690),
    p = n(481060),
    h = n(239091),
    f = n(100527),
    g = n(243778),
    m = n(538445),
    b = n(151494),
    O = n(496675),
    y = n(259580),
    _ = n(267642),
    j = n(624138),
    v = n(667815),
    x = n(531572),
    C = n(18857),
    E = n(981631),
    S = n(921944),
    P = n(388032),
    I = n(989308),
    N = n(210418);
function w(e) {
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
function Z(e, t) {
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
let T = (0, j.Mg)(d.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    A = 57,
    R = 57 + T,
    D = {
        tension: 180,
        friction: 80,
    },
    M = i.memo((e) => {
        let { guild: t, tooltipTypes: l, withMargin: d } = e,
            j = (0, _.Jh)(t.id),
            T = (0, b.Z)(t.id),
            A = (0, _.FZ)(j),
            R = null == A,
            M = null != A ? A : j,
            L = (0, c.e7)([x.Z], () => {
                var e;
                return null != (e = x.Z.getCountForGuild(t.id)) ? e : 0;
            }),
            k = (0, c.e7)([O.Z], () => O.Z.can(E.Plq.MANAGE_GUILD, t));
        i.useEffect(() => {
            L !== T && (0, v.v)(t.id, T);
        }, [t.id, L, T]);
        let U = R ? "100%" : "".concat(Math.min(100, (T / E.oCV[M]) * 100), "%"),
            { current: G } = i.useRef(U),
            [B] = (0, p.q_F)(
                () => ({
                    from: { width: L === T ? G : "0%" },
                    to: { width: U },
                    config: D,
                }),
                "respect-motion-settings",
                [L, T, G, U],
            ),
            F = t.premiumTier < M && L >= E.oCV[M],
            V = (0, C.Z)(t, f.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY),
            H = P.intl.formatToPlainString(P.t["2oNfMT"], { levelName: (0, _.e9)(M) }),
            z = P.intl.format(P.t.dhKnYm, {
                numBoosts: T,
                numTotal: E.oCV[M],
            });
        R && ((H = (0, _.e9)(M)), (z = P.intl.format(P.t.B2byER, { numBoosts: T }))), (H = H.toLocaleLowerCase());
        let W = (0, s.JA)("boosts-".concat(t.id)),
            K = i.useRef(null),
            [Y, q] = (0, g.US)(l),
            X = () =>
                Y === u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK
                    ? (0, r.jsx)(m.Z, {
                          guild: t,
                          markAsDismissed: q,
                      })
                    : null,
            Q = (e, i) =>
                (0, r.jsxs)(
                    p.P3F,
                    Z(w({}, W, e, i), {
                        "aria-label": void 0,
                        role: "button",
                        focusProps: {
                            offset: {
                                left: 10,
                                right: 4,
                            },
                        },
                        onClick: () => {
                            var t, n;
                            null == e || null == (t = e.onClick) || t.call(e),
                                null == i || null == (n = i.onClick) || n.call(i),
                                V();
                        },
                        className: o()(N.container, { [N.containerWithMargin]: d }),
                        onContextMenu: (e) => {
                            k &&
                                (0, h.jW)(e, async () => {
                                    let { default: e } = await n.e("8570").then(n.bind(n, 651138));
                                    return (n) => (0, r.jsx)(e, Z(w({}, n), { guild: t }));
                                });
                        },
                        children: [
                            (0, r.jsx)(p.nn4, { children: e["aria-label"] }),
                            (0, r.jsxs)("div", {
                                className: N.textArea,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: N.goalTextContainer,
                                        children: (0, r.jsx)(p.Text, {
                                            className: N.goalText,
                                            color: "none",
                                            variant: "text-sm/medium",
                                            lineClamp: 1,
                                            children: H,
                                        }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: N.progressFraction,
                                        children: [
                                            (0, r.jsx)(p.Text, {
                                                color: "none",
                                                variant: "text-sm/medium",
                                                className: N.progressText,
                                                lineClamp: 1,
                                                children: z,
                                            }),
                                            (0, r.jsx)(y.Z, {
                                                className: N.count,
                                                height: 16,
                                                width: 16,
                                                direction: y.Z.Directions.RIGHT,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: o()(N.progressBarContainer, { [N.progressBarContainerComplete]: R }),
                                children: [
                                    (0, r.jsx)(a.animated.div, {
                                        className: N.progressBar,
                                        style: B,
                                    }),
                                    R
                                        ? (0, r.jsx)("span", {
                                              "aria-label": P.intl.string(P.t["7iL1q6"]),
                                              role: "img",
                                              className: N.tadaIcon,
                                              children: "\uD83C\uDF89",
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                );
        return (0, r.jsx)("li", {
            children: (0, r.jsx)(p.ua7, {
                text: F
                    ? P.intl.formatToPlainString(I.default["9CtPjo"], { perk: (0, _.nW)(M) })
                    : R
                      ? P.intl.string(P.t["Y+V9go"])
                      : P.intl.formatToPlainString(P.t.UyDKl5, { levelName: (0, _.nW)(M) }),
                position: "top",
                delay: 200,
                hideOnClick: !0,
                children: (e) =>
                    null != Y
                        ? (0, r.jsx)(p.yRy, {
                              targetElementRef: K,
                              renderPopout: X,
                              position: "right",
                              align: "top",
                              shouldShow: !0,
                              closeOnScroll: !0,
                              onRequestClose: () => q(S.L.INDIRECT_ACTION),
                              animation: p.yRy.Animation.TRANSLATE,
                              children: (t) =>
                                  (0, r.jsx)("div", {
                                      ref: K,
                                      children: Q(e, t),
                                  }),
                          })
                        : Q(e),
            }),
        });
    });
