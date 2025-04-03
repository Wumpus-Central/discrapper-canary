n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(239091),
    a = n(911969),
    s = n(399860),
    c = n(388032),
    d = n(508815);
function u(e) {
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
}
function p(e) {
    let { applicationIcon: t, applicationName: p, canNavigate: m, command: b, guildId: g } = e,
        f = i.useMemo(() => {
            var e;
            return 0 !== Object.keys(null != (e = b.permissions) ? e : {}).length;
        }, [b.permissions]),
        h = i.useCallback(() => {
            null != b &&
                m() &&
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('78786').then(n.bind(n, 50474));
                    return (n) =>
                        (0, r.jsx)(
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
        x = i.useCallback(
            (e) => {
                (0, o.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) => {
                        var n, i;
                        return (0, r.jsx)(
                            e,
                            ((n = u({}, t)),
                            (i = i =
                                {
                                    id: b.id,
                                    label: c.NW.string(c.t.oJ1Mu7)
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n)
                        );
                    };
                });
            },
            [b]
        ),
        j = b.type === a.yU.CHAT ? l.SsZ : l.hH0,
        N = (0, s.gw)(b.type, b.displayName);
    return (0, r.jsxs)(l.P3F, {
        onClick: h,
        className: d.item,
        onContextMenu: x,
        children: [
            (0, r.jsxs)('div', {
                className: d.identifier,
                children: [
                    (0, r.jsx)(j, {
                        className: d.icon,
                        size: 'md',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: N
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.statusContainer,
                children: f
                    ? (0, r.jsxs)('div', {
                          className: d.statusLine,
                          children: [
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  children: c.NW.string(c.t.jH4B9P)
                              }),
                              (0, r.jsx)(l.d3s, {
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
