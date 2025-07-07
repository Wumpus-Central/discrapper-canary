(n.d(t, { Z: () => T }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(451463),
    s = n(793030),
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
    S = n(921944),
    x = n(93841),
    I = n(388032),
    P = n(27053);
function N(e) {
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
function w(e, t) {
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
function Z(e) {
    let { guild: t, withMargin: l } = e,
        Z = i.useMemo(() => (0, E.Z)(t), [t]),
        T = (0, v.Z)(t.id),
        A = i.useCallback(() => {
            (0, j.Z)(t.id, p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        R = (0, c.e7)([m.Z], () => {
            var e;
            return null != (e = m.Z.getCountForGuild(t.id)) ? e : 0;
        });
    i.useEffect(() => {
        R !== t.premiumSubscriberCount && (0, g.v)(t.id, t.premiumSubscriberCount);
    }, [t.id, R, t.premiumSubscriberCount]);
    let D = Math.min((R / Z) * 100, 100),
        [L, M] = (0, d.q_F)(
            () => ({
                width: R === t.premiumSubscriberCount ? ''.concat(D, '%') : '0%',
                config: {
                    tension: 285,
                    damping: 10,
                    mass: 1
                }
            }),
            'respect-motion-settings',
            [R, t.premiumSubscriberCount]
        );
    i.useEffect(() => {
        M({ width: ''.concat(D, '%') });
    }, [D, M]);
    let k = R >= Z,
        U = i.useRef(null),
        G = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
        B = (0, C.Z)(null == G ? void 0 : G.id, t.id),
        F = (0, y.W)(t.id, 'GuildPowerupsSidebarDisplay'),
        V = (null == t ? void 0 : t.premiumProgressBarEnabled) === !0,
        H = [];
    B && F && V && H.push(u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK);
    let [z, W] = (0, f.US)(H);
    return (0, r.jsx)(d.yRy, {
        targetElementRef: U,
        renderPopout: () =>
            z === u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK
                ? (0, r.jsx)(O.Z, {
                      guild: t,
                      markAsDismissed: W
                  })
                : null,
        position: 'right',
        align: 'top',
        shouldShow: null != z,
        onRequestClose: () => W(S.L.INDIRECT_ACTION),
        animation: d.yRy.Animation.TRANSLATE,
        children: (e) =>
            (0, r.jsx)('div', {
                ref: U,
                children: (0, r.jsx)(
                    d.P3F,
                    w(N({}, e), {
                        'aria-label': void 0,
                        role: 'button',
                        focusProps: {
                            offset: {
                                left: 10,
                                right: 4
                            }
                        },
                        onClick: A,
                        className: o()(P.container, { [P.containerWithMargin]: l }),
                        onContextMenu: (e) => {
                            T &&
                                (0, h.jW)(e, async () => {
                                    let { default: e } = await Promise.resolve().then(n.bind(n, 651138));
                                    return (n) => (0, r.jsx)(e, w(N({}, n), { guild: t }));
                                });
                        },
                        children: (0, r.jsxs)('div', {
                            className: P.contentContainer,
                            children: [
                                (0, r.jsx)('div', {
                                    className: P.progressContainer,
                                    children: (0, r.jsx)(a.animated.div, {
                                        className: o()(P.progress, { [P.progressLow]: D <= 5 }),
                                        style: L
                                    })
                                }),
                                (0, r.jsxs)('div', {
                                    className: P.textContainer,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: P.textContentContainer,
                                            children: [
                                                (0, r.jsx)(s.xv, {
                                                    className: P.text,
                                                    variant: 'text-xs/semibold',
                                                    children: I.intl.string(x.default.NI6IhY)
                                                }),
                                                t.premiumSubscriberCount >= Z &&
                                                    (0, r.jsx)(s.xv, {
                                                        className: P.text,
                                                        variant: 'text-xs/semibold',
                                                        children: '\uD83C\uDF89'
                                                    })
                                            ]
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: P.textContentContainer,
                                            children: [
                                                (0, r.jsx)(s.xv, {
                                                    className: o()(P.text, P.boostCountText),
                                                    variant: 'text-xs/semibold',
                                                    children: k
                                                        ? I.intl.formatToPlainString(x.default['Ehpq+/'], { appliedBoostCount: R })
                                                        : I.intl.formatToPlainString(x.default['/rbPDg'], {
                                                              appliedBoostCount: R,
                                                              maxBoostCount: Z
                                                          })
                                                }),
                                                (0, r.jsx)(_.Z, {
                                                    width: 12,
                                                    height: 12,
                                                    direction: _.Z.Directions.RIGHT,
                                                    className: o()(P.text, P.boostCountText)
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
    });
}
function T(e) {
    let { guild: t, withMargin: n } = e;
    return (0, r.jsx)(Z, {
        guild: t,
        withMargin: n
    });
}
