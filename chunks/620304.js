(n.d(t, { Z: () => Z }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(405499),
    a = n(793030),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(239091),
    p = n(100527),
    f = n(243778),
    g = n(667815),
    m = n(531572),
    b = n(594174),
    _ = n(259580),
    O = n(538445),
    y = n(232062),
    v = n(639777),
    C = n(554549),
    j = n(441536),
    E = n(447908),
    S = n(93841),
    x = n(388032),
    I = n(27053);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function N(e, t) {
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
function w(e) {
    let { guild: t, withMargin: l } = e,
        w = i.useMemo(() => (0, E.Z)(t), [t]),
        Z = (0, v.Z)(t.id),
        T = i.useCallback(() => {
            (0, j.Z)(t.id, p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        A = (0, c.e7)([m.Z], () => {
            var e;
            return null != (e = m.Z.getCountForGuild(t.id)) ? e : 0;
        });
    i.useEffect(() => {
        A !== t.premiumSubscriberCount && (0, g.v)(t.id, t.premiumSubscriberCount);
    }, [t.id, A, t.premiumSubscriberCount]);
    let R = Math.min((A / w) * 100, 100),
        [D, L] = (0, d.q_F)(
            () => ({
                width: A === t.premiumSubscriberCount ? ''.concat(R, '%') : '0%',
                config: {
                    tension: 285,
                    damping: 10,
                    mass: 1
                }
            }),
            'respect-motion-settings',
            [A, t.premiumSubscriberCount]
        );
    i.useEffect(() => {
        L({ width: ''.concat(R, '%') });
    }, [R, L]);
    let M = A >= w,
        k = i.useRef(null),
        U = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
        G = (0, C.Z)(null == U ? void 0 : U.id, t.id),
        B = (0, y.W)(t.id, 'GuildPowerupsSidebarDisplay'),
        F = (null == t ? void 0 : t.premiumProgressBarEnabled) === !0,
        V = [];
    return (
        G && B && F && V.push(u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK),
        (0, r.jsx)(d.yRy, {
            targetElementRef: k,
            renderPopout: () =>
                (0, r.jsx)(f.ZP, {
                    contentTypes: V,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: i } = e;
                        return n === u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK
                            ? (0, r.jsx)(O.Z, {
                                  guild: t,
                                  markAsDismissed: i
                              })
                            : null;
                    }
                }),
            position: 'right',
            align: 'top',
            shouldShow: !0,
            animation: d.yRy.Animation.TRANSLATE,
            children: (e) =>
                (0, r.jsx)('div', {
                    ref: k,
                    children: (0, r.jsx)(
                        d.P3F,
                        N(P({}, e), {
                            'aria-label': void 0,
                            role: 'button',
                            focusProps: {
                                offset: {
                                    left: 10,
                                    right: 4
                                }
                            },
                            onClick: T,
                            className: o()(I.container, { [I.containerWithMargin]: l }),
                            onContextMenu: (e) => {
                                Z &&
                                    (0, h.jW)(e, async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 651138));
                                        return (n) => (0, r.jsx)(e, N(P({}, n), { guild: t }));
                                    });
                            },
                            children: (0, r.jsxs)('div', {
                                className: I.contentContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: I.progressContainer,
                                        children: (0, r.jsx)(s.animated.div, {
                                            className: o()(I.progress, { [I.progressLow]: R <= 5 }),
                                            style: D
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: I.textContainer,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: I.textContentContainer,
                                                children: [
                                                    (0, r.jsx)(a.xv, {
                                                        className: I.text,
                                                        variant: 'text-xs/semibold',
                                                        children: x.intl.string(S.default.NI6IhY)
                                                    }),
                                                    t.premiumSubscriberCount >= w &&
                                                        (0, r.jsx)(a.xv, {
                                                            className: I.text,
                                                            variant: 'text-xs/semibold',
                                                            children: '\uD83C\uDF89'
                                                        })
                                                ]
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: I.textContentContainer,
                                                children: [
                                                    (0, r.jsx)(a.xv, {
                                                        className: I.text,
                                                        variant: 'text-xs/semibold',
                                                        children: M
                                                            ? x.intl.formatToPlainString(S.default['Ehpq+/'], { appliedBoostCount: A })
                                                            : x.intl.formatToPlainString(S.default['/rbPDg'], {
                                                                  appliedBoostCount: A,
                                                                  maxBoostCount: w
                                                              })
                                                    }),
                                                    (0, r.jsx)(_.Z, {
                                                        width: 12,
                                                        height: 12,
                                                        direction: _.Z.Directions.RIGHT,
                                                        className: I.text
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    )
                })
        })
    );
}
function Z(e) {
    let { guild: t, withMargin: n } = e;
    return (0, r.jsx)(w, {
        guild: t,
        withMargin: n
    });
}
