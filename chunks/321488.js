n.d(t, { Z: () => p });
var r,
    i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    o = n(873546),
    s = n(481060),
    c = n(114959),
    u = (((r = u || {})[(r.ACCEPT = 0)] = 'ACCEPT'), (r[(r.DENY = 1)] = 'DENY'), (r[(r.DEFAULT = 2)] = 'DEFAULT'), r);
function d(e) {
    let { icon: t, tooltip: n, onClick: r, actionType: l = 2, shouldHighlight: u } = e;
    return (0, i.jsx)(s.ua7, {
        text: n,
        children: (e) => {
            var d, p;
            return (0, i.jsx)(
                s.P3F,
                ((d = (function (e) {
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
                })({}, e)),
                (p = p =
                    {
                        'aria-label': n,
                        onClick: r,
                        className: a()(c.actionButton, {
                            [c.actionAccept]: 0 === l,
                            [c.actionDeny]: 1 === l,
                            [c.highlight]: u,
                            [c.actionButtonMobile]: o.tq
                        }),
                        children: (0, i.jsx)(t, {
                            className: c.icon,
                            color: 'currentColor'
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(p))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(p)).forEach(function (e) {
                          Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(p, e));
                      }),
                d)
            );
        }
    });
}
d.ActionTypes = u;
let p = d;
