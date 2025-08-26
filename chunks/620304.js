n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(202841),
    s = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    p = n(100527),
    h = n(667815),
    f = n(531572),
    g = n(259580),
    m = n(639777),
    b = n(495804),
    O = n(441536),
    y = n(989308),
    _ = n(388032),
    v = n(931942);
function j(e) {
    let { guild: t, withMargin: l } = e,
        j = (0, b.Z)(t, "GuildPowerupsProgressBar"),
        x = (0, m.Z)(t.id),
        C = i.useCallback(() => {
            (0, O.Z)(t.id, p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        S = (0, c.e7)([f.Z], () => {
            var e;
            return null != (e = f.Z.getCountForGuild(t.id)) ? e : 0;
        });
    i.useEffect(() => {
        S !== t.premiumSubscriberCount && (0, h.v)(t.id, t.premiumSubscriberCount);
    }, [t.id, S, t.premiumSubscriberCount]);
    let E = Math.min((S / j) * 100, 100),
        [P, I] = (0, u.q_F)(
            () => ({
                width: S === t.premiumSubscriberCount ? "calc(".concat(E, "% - 4px)") : "0%",
                config: {
                    tension: 250,
                    damping: 5,
                    mass: 1,
                },
            }),
            "respect-motion-settings",
            [S, t.premiumSubscriberCount],
        );
    i.useEffect(() => {
        I({ width: "calc(".concat(E, "% - 4px)") });
    }, [E, I]);
    let N = S >= j;
    return (0, r.jsx)(u.P3F, {
        "aria-label": void 0,
        role: "button",
        focusProps: {
            offset: {
                left: 10,
                right: 4,
            },
        },
        onClick: () => {
            C();
        },
        className: o()(v.container, { [v.containerWithMargin]: l }),
        onContextMenu: (e) => {
            x &&
                (0, d.jW)(e, async () => {
                    let { default: e } = await n.e("8570").then(n.bind(n, 651138));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
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
                            })({}, n)),
                            (l = l = { guild: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i),
                        );
                    };
                });
        },
        children: (0, r.jsxs)("div", {
            className: v.contentContainer,
            children: [
                (0, r.jsx)("div", { className: v.progressContainer }),
                (0, r.jsx)(a.animated.div, {
                    className: o()(v.progress, { [v.progressLow]: E <= 5 }),
                    style: P,
                }),
                (0, r.jsxs)("div", {
                    className: v.textContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: v.textContentContainer,
                            children: [
                                (0, r.jsx)(s.xv, {
                                    className: v.text,
                                    variant: "text-xs/semibold",
                                    children: _.intl.string(y.default.NI6IhY),
                                }),
                                t.premiumSubscriberCount >= j &&
                                    (0, r.jsx)(s.xv, {
                                        className: v.text,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: v.textContentContainer,
                            children: [
                                (0, r.jsx)(s.xv, {
                                    className: o()(v.text, v.boostCountText),
                                    variant: "text-xs/semibold",
                                    children: N
                                        ? _.intl.formatToPlainString(y.default["Ehpq+/"], { appliedBoostCount: S })
                                        : _.intl.formatToPlainString(y.default["/rbPDg"], {
                                              appliedBoostCount: S,
                                              maxBoostCount: j,
                                          }),
                                }),
                                (0, r.jsx)(g.Z, {
                                    width: 12,
                                    height: 12,
                                    direction: g.Z.Directions.RIGHT,
                                    className: o()(v.text, v.boostCountText),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function x(e) {
    let { guild: t, withMargin: n } = e;
    return (0, r.jsx)(j, {
        guild: t,
        withMargin: n,
    });
}
