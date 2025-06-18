n.d(t, { Z: () => j }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(524979),
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
    y = n(447908),
    O = n(93841),
    _ = n(388032),
    v = n(27053);
function C(e) {
    let { guild: t, withMargin: l } = e,
        C = i.useMemo(() => (0, y.Z)(t), [t]),
        j = (0, m.Z)(t.id),
        S = i.useCallback(() => {
            (0, b.Z)(t.id, h.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        x = (0, c.e7)([f.Z], () => {
            var e;
            return null != (e = f.Z.getCountForGuild(t.id)) ? e : 0;
        });
    i.useEffect(() => {
        x !== t.premiumSubscriberCount && (0, p.v)(t.id, t.premiumSubscriberCount);
    }, [t.id, x, t.premiumSubscriberCount]);
    let E = Math.min((x / C) * 100, 100),
        [P, I] = (0, u.q_F)(
            () => ({
                width: x === t.premiumSubscriberCount ? ''.concat(E, '%') : '0%',
                config: {
                    tension: 285,
                    damping: 10,
                    mass: 1
                }
            }),
            'respect-motion-settings',
            [x, t.premiumSubscriberCount]
        );
    i.useEffect(() => {
        I({ width: ''.concat(E, '%') });
    }, [E, I]);
    let N = x >= C;
    return (0, r.jsx)(u.P3F, {
        'aria-label': void 0,
        role: 'button',
        focusProps: {
            offset: {
                left: 10,
                right: 4
            }
        },
        onClick: S,
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
                        className: o()(v.progress, { [v.progressLow]: E <= 5 }),
                        style: P
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
                                    children: _.intl.string(O.default.NI6IhY)
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
                                        ? _.intl.formatToPlainString(O.default['Ehpq+/'], { appliedBoostCount: x })
                                        : _.intl.formatToPlainString(O.default['/rbPDg'], {
                                              appliedBoostCount: x,
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
