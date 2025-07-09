n.d(t, { Z: () => d });
var r,
    i = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(114959),
    c = (((r = c || {})[(r.ACCEPT = 0)] = 'ACCEPT'), (r[(r.DENY = 1)] = 'DENY'), (r[(r.DEFAULT = 2)] = 'DEFAULT'), r);
function u(e) {
    let { icon: t, tooltip: n, onClick: r, actionType: l = 2, shouldHighlight: c } = e;
    return (0, i.jsx)(o.ua7, {
        text: n,
        children: (e) => {
            var u, d;
            return (0, i.jsx)(
                o.P3F,
                ((u = (function (e) {
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
                })({}, e)),
                (d = d =
                    {
                        'aria-label': n,
                        onClick: r,
                        className: a()(s.actionButton, {
                            [s.actionAccept]: 0 === l,
                            [s.actionDeny]: 1 === l,
                            [s.highlight]: c
                        }),
                        children: (0, i.jsx)(t, {
                            className: s.icon,
                            color: 'currentColor'
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(d))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(d)).forEach(function (e) {
                          Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(d, e));
                      }),
                u)
            );
        }
    });
}
u.ActionTypes = c;
let d = u;
