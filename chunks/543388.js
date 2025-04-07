n.d(t, { Z: () => m });
var a = n(200651);
n(192379);
var r = n(913527),
    l = n.n(r),
    i = n(481060),
    s = n(925329),
    o = n(388032),
    c = n(965935);
function u(e) {
    let { application: t, timestamp: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.Z, {
                size: s.Z.Sizes.LARGE,
                game: t
            }),
            (0, a.jsxs)('div', {
                className: c.textContainer,
                children: [
                    (0, a.jsx)(i.Text, {
                        className: c.timestamp,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: l()(n).format('LLLL')
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'interactive-active',
                        children: o.NW.format(o.t.J3s8JC, { applicationName: t.name })
                    })
                ]
            })
        ]
    });
}
function d(e) {
    let { application: t, timestamp: n, children: r } = e;
    return (0, a.jsx)(i.ua7, {
        hideOnClick: !0,
        position: 'top',
        'aria-label': o.NW.string(o.t['5nMcv7']),
        tooltipClassName: c.gameMessageTooltip,
        tooltipContentClassName: c.gameMessageTooltipContent,
        text: (0, a.jsx)(u, {
            application: t,
            timestamp: n
        }),
        children: (e) => {
            var t, n;
            return (0, a.jsx)(
                i.P3F,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            a.forEach(function (t) {
                                var a;
                                (a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = a);
                            });
                    }
                    return e;
                })({ tag: 'span' }, e)),
                (n = n = { children: r }),
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
    let { application: t, timestamp: n, compact: r, children: l } = e;
    return (0, a.jsxs)(d, {
        application: t,
        timestamp: n,
        children: [
            r
                ? null
                : (0, a.jsx)(i.iWm, {
                      className: c.gameIcon,
                      size: 'custom',
                      width: 14,
                      height: 14
                  }),
            l
        ]
    });
}
