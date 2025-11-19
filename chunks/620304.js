n.d(t, { Z: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(790519),
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
    _ = n(441536),
    y = n(18853),
    O = n(388032),
    v = n(931942);
function j(e) {
    let { guild: t, withMargin: l } = e,
        j = (0, b.Z)(t),
        C = (0, m.Z)(t.id),
        x = i.useCallback(() => {
            (0, _.Z)(t.id, p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        E = (0, c.e7)([f.Z], () => {
            var e;
            return null != (e = f.Z.getCountForGuild(t.id)) ? e : 0;
        });
    i.useEffect(() => {
        E !== t.premiumSubscriberCount && (0, h.v)(t.id, t.premiumSubscriberCount);
    }, [t.id, E, t.premiumSubscriberCount]);
    let S = Math.min((E / j) * 100, 100),
        [I, P] = (0, u.q_F)(
            () => ({
                width: E === t.premiumSubscriberCount ? "calc(".concat(S, "% - 4px)") : "0%",
                config: {
                    tension: 250,
                    damping: 5,
                    mass: 1,
                },
            }),
            "respect-motion-settings",
            [E, t.premiumSubscriberCount],
        );
    i.useEffect(() => {
        P({ width: "calc(".concat(S, "% - 4px)") });
    }, [S, P]);
    let N = E >= j;
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
            x();
        },
        className: o()(v.container, { [v.containerWithMargin]: l }),
        onContextMenu: (e) => {
            C &&
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
                    className: o()(v.progress, { [v.progressLow]: S <= 5 }),
                    style: I,
                }),
                (0, r.jsxs)("div", {
                    className: v.textContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: v.textContentContainer,
                            children: [
                                (0, r.jsx)(s.xvT, {
                                    className: v.text,
                                    variant: "text-xs/semibold",
                                    children: O.intl.string(y.default.NI6Ihe),
                                }),
                                t.premiumSubscriberCount >= j &&
                                    (0, r.jsx)(s.xvT, {
                                        className: v.text,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: v.textContentContainer,
                            children: [
                                (0, r.jsx)(s.xvT, {
                                    className: o()(v.text, v.boostCountText),
                                    variant: "text-xs/semibold",
                                    children: N
                                        ? O.intl.formatToPlainString(y.default["Ehpq+7"], { appliedBoostCount: E })
                                        : O.intl.formatToPlainString(y.default["/rbPDs"], {
                                              appliedBoostCount: E,
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
function C(e) {
    let { guild: t, withMargin: n } = e;
    return (0, r.jsx)(j, {
        guild: t,
        withMargin: n,
    });
}
