n.d(t, { Z: () => j }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(695469),
    a = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    h = n(100527),
    p = n(667815),
    f = n(531572),
    g = n(259580),
    m = n(639777),
    b = n(441536),
    _ = n(447908),
    O = n(93841),
    y = n(388032),
    v = n(27053);
function C(e) {
    let { guild: t, withMargin: l } = e,
        C = i.useMemo(() => (0, _.Z)(t), [t]),
        j = (0, m.Z)(t.id),
        E = i.useCallback(() => {
            (0, b.Z)(t.id, h.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        S = (0, c.e7)([f.Z], () => {
            var e;
            return null != (e = f.Z.getCountForGuild(t.id)) ? e : 0;
        });
    i.useEffect(() => {
        S !== t.premiumSubscriberCount && (0, p.v)(t.id, t.premiumSubscriberCount);
    }, [t.id, S, t.premiumSubscriberCount]);
    let x = Math.min((S / C) * 100, 100),
        [I, P] = (0, u.q_F)(
            () => ({
                width: S === t.premiumSubscriberCount ? ''.concat(x, '%') : '0%',
                config: {
                    tension: 285,
                    damping: 10,
                    mass: 1
                }
            }),
            'respect-motion-settings',
            [S, t.premiumSubscriberCount]
        );
    i.useEffect(() => {
        P({ width: ''.concat(x, '%') });
    }, [x, P]);
    let N = S >= C;
    return (0, r.jsx)(u.P3F, {
        'aria-label': void 0,
        role: 'button',
        focusProps: {
            offset: {
                left: 10,
                right: 4
            }
        },
        onClick: E,
        className: o()(v.container, { [v.containerWithMargin]: l }),
        onContextMenu: (e) => {
            j &&
                (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 651138));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
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
                            i)
                        );
                    };
                });
        },
        children: (0, r.jsxs)('div', {
            className: v.contentContainer,
            children: [
                (0, r.jsx)('div', {
                    className: v.progressContainer,
                    children: (0, r.jsx)(s.animated.div, {
                        className: o()(v.progress, { [v.progressLow]: x <= 5 }),
                        style: I
                    })
                }),
                (0, r.jsxs)('div', {
                    className: v.textContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: v.textContentContainer,
                            children: [
                                (0, r.jsx)(a.xv, {
                                    className: v.text,
                                    variant: 'text-xs/semibold',
                                    children: y.intl.string(O.default.NI6IhY)
                                }),
                                t.premiumSubscriberCount >= C &&
                                    (0, r.jsx)(a.xv, {
                                        className: v.text,
                                        variant: 'text-xs/semibold',
                                        children: '\uD83C\uDF89'
                                    })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: v.textContentContainer,
                            children: [
                                (0, r.jsx)(a.xv, {
                                    className: v.text,
                                    variant: 'text-xs/semibold',
                                    children: N
                                        ? y.intl.formatToPlainString(O.default['Ehpq+/'], { appliedBoostCount: S })
                                        : y.intl.formatToPlainString(O.default['/rbPDg'], {
                                              appliedBoostCount: S,
                                              maxBoostCount: C
                                          })
                                }),
                                (0, r.jsx)(g.Z, {
                                    width: 12,
                                    height: 12,
                                    direction: g.Z.Directions.RIGHT,
                                    className: v.text
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function j(e) {
    let { guild: t, withMargin: n } = e;
    return (0, r.jsx)(C, {
        guild: t,
        withMargin: n
    });
}
