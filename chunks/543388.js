r.d(t, { Z: () => m });
var n = r(200651);
r(192379);
var l = r(913527),
    i = r.n(l),
    o = r(481060),
    a = r(925329),
    c = r(388032),
    s = r(965935);
function u(e) {
    let { application: t, timestamp: r } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(a.Z, {
                size: a.Z.Sizes.LARGE,
                game: t
            }),
            (0, n.jsxs)('div', {
                className: s.textContainer,
                children: [
                    (0, n.jsx)(o.Text, {
                        className: s.timestamp,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: i()(r).format('LLLL')
                    }),
                    (0, n.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'interactive-active',
                        children: c.NW.format(c.t.J3s8JC, { applicationName: t.name })
                    })
                ]
            })
        ]
    });
}
function p(e) {
    let { application: t, timestamp: r, children: l } = e;
    return (0, n.jsx)(o.ua7, {
        hideOnClick: !0,
        position: 'top',
        'aria-label': c.NW.string(c.t['5nMcv7']),
        tooltipClassName: s.gameMessageTooltip,
        tooltipContentClassName: s.gameMessageTooltipContent,
        text: (0, n.jsx)(u, {
            application: t,
            timestamp: r
        }),
        children: (e) => {
            var t, r;
            return (0, n.jsx)(
                o.P3F,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({ tag: 'span' }, e)),
                (r = r = { children: l }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t)
            );
        }
    });
}
function m(e) {
    let { application: t, timestamp: r, compact: l, children: i } = e;
    return (0, n.jsxs)(p, {
        application: t,
        timestamp: r,
        children: [
            l
                ? null
                : (0, n.jsx)(o.iWm, {
                      className: s.gameIcon,
                      size: 'custom',
                      width: 14,
                      height: 14
                  }),
            i
        ]
    });
}
