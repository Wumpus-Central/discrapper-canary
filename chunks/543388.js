n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var o = n(913527),
    l = n.n(o),
    i = n(481060),
    a = n(925329),
    c = n(388032),
    s = n(965935);
function u(e) {
    let { application: t, timestamp: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Z, {
                size: a.Z.Sizes.LARGE,
                game: t
            }),
            (0, r.jsxs)('div', {
                className: s.textContainer,
                children: [
                    (0, r.jsx)(i.Text, {
                        className: s.timestamp,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: l()(n).format('LLLL')
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'interactive-active',
                        children: c.NW.format(c.t.J3s8JC, { applicationName: t.name })
                    })
                ]
            })
        ]
    });
}
function m(e) {
    let { application: t, timestamp: n, children: o } = e;
    return (0, r.jsx)(i.ua7, {
        hideOnClick: !0,
        position: 'top',
        'aria-label': c.NW.string(c.t['5nMcv7']),
        tooltipClassName: s.gameMessageTooltip,
        tooltipContentClassName: s.gameMessageTooltipContent,
        text: (0, r.jsx)(u, {
            application: t,
            timestamp: n
        }),
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                i.P3F,
                ((t = (function (e) {
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
                })({ tag: 'span' }, e)),
                (n = n = { children: o }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
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
function p(e) {
    let { application: t, timestamp: n, compact: o, children: l } = e;
    return (0, r.jsxs)(m, {
        application: t,
        timestamp: n,
        children: [
            o
                ? null
                : (0, r.jsx)(i.iWm, {
                      className: s.gameIcon,
                      size: 'custom',
                      width: 14,
                      height: 14
                  }),
            l
        ]
    });
}
