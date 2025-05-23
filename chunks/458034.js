n.d(t, {
    Am: () => u,
    ZP: () => d,
    s$: () => c
});
var r = n(255367);
n(73800);
var o = n(442837),
    l = n(481060),
    i = n(430824),
    s = n(275759),
    a = n(388032);
let c = 'guild-connection-roles';
function u(e) {
    (0, l.ZDy)(
        async () => {
            let { default: t } = await n.e('40897').then(n.bind(n, 507294));
            return (n) => {
                var o, l;
                return (0, r.jsx)(
                    t,
                    ((o = (function (e) {
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
                    (l = l = { guildId: e }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    o)
                );
            };
        },
        {
            modalKey: c,
            contextKey: l.z1l,
            onCloseRequest: () => {
                (0, l.Mr3)(c, l.z1l);
            }
        }
    );
}
function d(e) {
    return (0, o.e7)([i.Z], () => (0, s.kQ)(e, i.Z.getRoles(e.id)), [e])
        ? (0, r.jsx)(l.sNh, {
              id: 'guild-connection-roles',
              label: a.intl.string(a.t.ghtnsr),
              icon: l.xPt,
              action: () => u(e.id)
          })
        : null;
}
