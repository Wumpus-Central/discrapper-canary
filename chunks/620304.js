n.d(t, { Z: () => N }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(803948),
    s = n(793030),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    p = n(239091),
    f = n(100527),
    h = n(243778),
    g = n(667815),
    m = n(531572),
    b = n(259580),
    O = n(538445),
    _ = n(639777),
    y = n(495804),
    v = n(441536),
    j = n(921944),
    C = n(989308),
    E = n(388032),
    x = n(931942);
function S(e) {
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
function I(e) {
    let { guild: t, tooltipTypes: l, withMargin: I } = e,
        N = (0, y.Z)(t, "GuildPowerupsProgressBar"),
        w = (0, _.Z)(t.id),
        Z = i.useCallback(() => {
            (0, v.Z)(t.id, f.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        T = (0, c.e7)([m.Z], () => {
            var e;
            return null != (e = m.Z.getCountForGuild(t.id)) ? e : 0;
        });
    i.useEffect(() => {
        T !== t.premiumSubscriberCount && (0, g.v)(t.id, t.premiumSubscriberCount);
    }, [t.id, T, t.premiumSubscriberCount]);
    let A = Math.min((T / N) * 100, 100),
        [R, D] = (0, d.q_F)(
            () => ({
                width: T === t.premiumSubscriberCount ? "calc(".concat(A, "% - 4px)") : "0%",
                config: {
                    tension: 250,
                    damping: 5,
                    mass: 1,
                },
            }),
            "respect-motion-settings",
            [T, t.premiumSubscriberCount],
        );
    i.useEffect(() => {
        D({ width: "calc(".concat(A, "% - 4px)") });
    }, [A, D]);
    let L = T >= N,
        M = i.useRef(null),
        [k, U] = (0, h.US)(l),
        G = (e) =>
            (0, r.jsx)(
                d.P3F,
                P(S({}, e), {
                    "aria-label": void 0,
                    role: "button",
                    focusProps: {
                        offset: {
                            left: 10,
                            right: 4,
                        },
                    },
                    onClick: () => {
                        var t;
                        null == e || null == (t = e.onClick) || t.call(e), Z();
                    },
                    className: o()(x.container, { [x.containerWithMargin]: I }),
                    onContextMenu: (e) => {
                        w &&
                            (0, p.jW)(e, async () => {
                                let { default: e } = await n.e("8570").then(n.bind(n, 651138));
                                return (n) => (0, r.jsx)(e, P(S({}, n), { guild: t }));
                            });
                    },
                    children: (0, r.jsxs)("div", {
                        className: x.contentContainer,
                        children: [
                            (0, r.jsx)("div", { className: x.progressContainer }),
                            (0, r.jsx)(a.animated.div, {
                                className: o()(x.progress, { [x.progressLow]: A <= 5 }),
                                style: R,
                            }),
                            (0, r.jsxs)("div", {
                                className: x.textContainer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: x.textContentContainer,
                                        children: [
                                            (0, r.jsx)(s.xv, {
                                                className: x.text,
                                                variant: "text-xs/semibold",
                                                children: E.intl.string(C.default.NI6IhY),
                                            }),
                                            t.premiumSubscriberCount >= N &&
                                                (0, r.jsx)(s.xv, {
                                                    className: x.text,
                                                    variant: "text-xs/semibold",
                                                    children: "\uD83C\uDF89",
                                                }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: x.textContentContainer,
                                        children: [
                                            (0, r.jsx)(s.xv, {
                                                className: o()(x.text, x.boostCountText),
                                                variant: "text-xs/semibold",
                                                children: L
                                                    ? E.intl.formatToPlainString(C.default["Ehpq+/"], {
                                                          appliedBoostCount: T,
                                                      })
                                                    : E.intl.formatToPlainString(C.default["/rbPDg"], {
                                                          appliedBoostCount: T,
                                                          maxBoostCount: N,
                                                      }),
                                            }),
                                            (0, r.jsx)(b.Z, {
                                                width: 12,
                                                height: 12,
                                                direction: b.Z.Directions.RIGHT,
                                                className: o()(x.text, x.boostCountText),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            );
    return null != k
        ? (0, r.jsx)(d.yRy, {
              targetElementRef: M,
              renderPopout: () =>
                  k === u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK
                      ? (0, r.jsx)(O.Z, {
                            guild: t,
                            markAsDismissed: U,
                        })
                      : null,
              position: "right",
              align: "top",
              shouldShow: !0,
              closeOnScroll: !0,
              onRequestClose: () => U(j.L.INDIRECT_ACTION),
              animation: d.yRy.Animation.TRANSLATE,
              children: (e) =>
                  (0, r.jsx)("div", {
                      ref: M,
                      children: G(e),
                  }),
          })
        : G();
}
function N(e) {
    let { guild: t, tooltipTypes: n, withMargin: i } = e;
    return (0, r.jsx)(I, {
        guild: t,
        tooltipTypes: n,
        withMargin: i,
    });
}
