n.d(t, { Z: () => m });
var a = n(255367);
n(73800);
var i = n(913527),
    o = n.n(i),
    r = n(481060),
    c = n(925329),
    l = n(388032),
    s = n(965935);
function u(e) {
    let { application: t, timestamp: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Z, {
                size: c.Z.Sizes.LARGE,
                game: t
            }),
            (0, a.jsxs)('div', {
                className: s.textContainer,
                children: [
                    (0, a.jsx)(r.Text, {
                        className: s.timestamp,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: o()(n).format('LLLL')
                    }),
                    (0, a.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'interactive-active',
                        children: l.intl.format(l.t.J3s8JC, { applicationName: t.name })
                    })
                ]
            })
        ]
    });
}
function d(e) {
    let { application: t, timestamp: n, children: i } = e;
    return (0, a.jsx)(r.ua7, {
        hideOnClick: !0,
        position: 'top',
        'aria-label': l.intl.string(l.t['5nMcv7']),
        tooltipClassName: s.gameMessageTooltip,
        tooltipContentClassName: s.gameMessageTooltipContent,
        text: (0, a.jsx)(u, {
            application: t,
            timestamp: n
        }),
        children: (e) => {
            var t, n;
            return (0, a.jsx)(
                r.P3F,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            a.forEach(function (t) {
                                var a;
                                ((a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = a));
                            }));
                    }
                    return e;
                })({ tag: 'span' }, e)),
                (n = n = { children: i }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            );
        }
    });
}
function m(e) {
    let { application: t, timestamp: n, compact: i, children: o } = e;
    return (0, a.jsxs)(d, {
        application: t,
        timestamp: n,
        children: [
            i
                ? null
                : (0, a.jsx)(r.iWm, {
                      className: s.gameIcon,
                      size: 'custom',
                      width: 14,
                      height: 14
                  }),
            o
        ]
    });
}
