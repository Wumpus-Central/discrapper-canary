n.d(t, { Z: () => C }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(524979),
    a = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    h = n(667815),
    p = n(531572),
    f = n(18857),
    g = n(259580),
    m = n(639777),
    b = n(447908),
    y = n(93841),
    O = n(388032),
    _ = n(27053);
function v(e) {
    let { guild: t, withMargin: l } = e,
        v = i.useMemo(() => (0, b.Z)(t), [t]),
        C = (0, m.Z)(t.id),
        j = (0, f.Z)(t),
        S = (0, c.e7)([p.Z], () => {
            var e;
            return null != (e = p.Z.getCountForGuild(t.id)) ? e : 0;
        });
    i.useEffect(() => {
        S !== t.premiumSubscriberCount && (0, h.v)(t.id, t.premiumSubscriberCount);
    }, [t.id, S, t.premiumSubscriberCount]);
    let x = Math.min((S / v) * 100, 100),
        [E, P] = (0, u.q_F)(
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
    let I = S >= v;
    return (0, r.jsx)(u.P3F, {
        'aria-label': void 0,
        role: 'button',
        focusProps: {
            offset: {
                left: 10,
                right: 4
            }
        },
        onClick: j,
        className: o()(_.container, { [_.containerWithMargin]: l }),
        onContextMenu: (e) => {
            C &&
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
            className: _.contentContainer,
            children: [
                (0, r.jsx)('div', {
                    className: _.progressContainer,
                    children: (0, r.jsx)(s.animated.div, {
                        className: o()(_.progress, { [_.progressLow]: x <= 5 }),
                        style: E
                    })
                }),
                (0, r.jsxs)('div', {
                    className: _.textContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: _.textContentContainer,
                            children: [
                                (0, r.jsx)(a.xv, {
                                    className: _.text,
                                    variant: 'text-xs/semibold',
                                    children: O.intl.string(y.default.NI6IhY)
                                }),
                                t.premiumSubscriberCount >= v &&
                                    (0, r.jsx)(a.xv, {
                                        className: _.text,
                                        variant: 'text-xs/semibold',
                                        children: '\uD83C\uDF89'
                                    })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: _.textContentContainer,
                            children: [
                                (0, r.jsx)(a.xv, {
                                    className: _.text,
                                    variant: 'text-xs/semibold',
                                    children: I
                                        ? O.intl.formatToPlainString(y.default['Ehpq+/'], { appliedBoostCount: S })
                                        : O.intl.formatToPlainString(y.default['/rbPDg'], {
                                              appliedBoostCount: S,
                                              maxBoostCount: v
                                          })
                                }),
                                (0, r.jsx)(g.Z, {
                                    width: 12,
                                    height: 12,
                                    direction: g.Z.Directions.RIGHT,
                                    className: _.text
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function C(e) {
    let { guild: t, withMargin: n } = e;
    return (0, r.jsx)(v, {
        guild: t,
        withMargin: n
    });
}
