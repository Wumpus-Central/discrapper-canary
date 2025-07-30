n.d(t, { Z: () => p });
var i = n(255367),
    r = n(73800),
    l = n(481060),
    o = n(239091),
    a = n(911969),
    s = n(399860),
    c = n(388032),
    d = n(508815);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function p(e) {
    let { applicationIcon: t, applicationName: p, canNavigate: m, command: b, guildId: g } = e,
        f = r.useMemo(() => {
            var e;
            return 0 !== Object.keys(null != (e = b.permissions) ? e : {}).length;
        }, [b.permissions]),
        h = r.useCallback(() => {
            null != b &&
                m() &&
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('78786').then(n.bind(n, 50474));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            u(
                                {
                                    applicationIcon: t,
                                    applicationId: b.applicationId,
                                    applicationName: p,
                                    command: b,
                                    guildId: g
                                },
                                n
                            )
                        );
                });
        }, [t, p, m, b, g]),
        x = r.useCallback(
            (e) => {
                (0, o.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) => {
                        var n, r;
                        return (0, i.jsx)(
                            e,
                            ((n = u({}, t)),
                            (r = r =
                                {
                                    id: b.id,
                                    label: c.intl.string(c.t.oJ1Mu7)
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n)
                        );
                    };
                });
            },
            [b]
        ),
        j = b.type === a.yU.CHAT ? l.SsZ : l.hH0,
        v = (0, s.gw)(b.type, b.displayName);
    return (0, i.jsxs)(l.P3F, {
        onClick: h,
        className: d.item,
        onContextMenu: x,
        children: [
            (0, i.jsxs)('div', {
                className: d.identifier,
                children: [
                    (0, i.jsx)(j, {
                        className: d.icon,
                        size: 'md',
                        color: 'currentColor'
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: v
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: d.statusContainer,
                children: f
                    ? (0, i.jsxs)('div', {
                          className: d.statusLine,
                          children: [
                              (0, i.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  children: c.intl.string(c.t.jH4B9P)
                              }),
                              (0, i.jsx)(l.d3s, {
                                  size: 'sm',
                                  color: 'currentColor',
                                  className: d.statusIcon
                              })
                          ]
                      })
                    : null
            })
        ]
    });
}
