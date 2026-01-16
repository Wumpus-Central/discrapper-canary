n.d(t, { Z: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(81239),
    s = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    p = n(100527),
    f = n(667815),
    h = n(531572),
    g = n(259580),
    m = n(639777),
    b = n(495804),
    y = n(441536),
    v = n(556970),
    O = n(388032),
    j = n(915241);
function x(e) {
    let { guild: t, withMargin: l } = e,
        x = (0, b.Z)(t),
        C = (0, m.Z)(t.id),
        E = i.useCallback(() => {
            (0, y.Z)(t.id, p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        S = (0, c.e7)([h.Z], () => {
            var e;
            return null != (e = h.Z.getCountForGuild(t.id)) ? e : 0;
        });
    i.useEffect(() => {
        S !== t.premiumSubscriberCount && (0, f.v)(t.id, t.premiumSubscriberCount);
    }, [t.id, S, t.premiumSubscriberCount]);
    let _ = Math.min((S / x) * 100, 100),
        [I, P] = (0, u.q_F)(
            () => ({
                width: S === t.premiumSubscriberCount ? "calc(".concat(_, "% - 4px)") : "0%",
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
        P({ width: "calc(".concat(_, "% - 4px)") });
    }, [_, P]);
    let Z = S >= x;
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
            E();
        },
        className: a()(j.container, { [j.containerWithMargin]: l }),
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
            className: j.contentContainer,
            children: [
                (0, r.jsx)("div", { className: j.progressContainer }),
                (0, r.jsx)(o.animated.div, {
                    className: a()(j.progress, { [j.progressLow]: _ <= 5 }),
                    style: I,
                }),
                (0, r.jsxs)("div", {
                    className: j.textContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: j.textContentContainer,
                            children: [
                                (0, r.jsx)(s.xvT, {
                                    className: j.text,
                                    variant: "text-xs/semibold",
                                    children: O.intl.string(v.default.NI6Ihe),
                                }),
                                t.premiumSubscriberCount >= x &&
                                    (0, r.jsx)(s.xvT, {
                                        className: j.text,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: j.textContentContainer,
                            children: [
                                (0, r.jsx)(s.xvT, {
                                    className: a()(j.text, j.boostCountText),
                                    variant: "text-xs/semibold",
                                    children: Z
                                        ? O.intl.formatToPlainString(v.default["Ehpq+7"], { appliedBoostCount: S })
                                        : O.intl.formatToPlainString(v.default["/rbPDs"], {
                                              appliedBoostCount: S,
                                              maxBoostCount: x,
                                          }),
                                }),
                                (0, r.jsx)(g.Z, {
                                    width: 12,
                                    height: 12,
                                    direction: g.Z.Directions.RIGHT,
                                    className: a()(j.text, j.boostCountText),
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
    return (0, r.jsx)(x, {
        guild: t,
        withMargin: n,
    });
}
