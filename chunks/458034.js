n.d(t, {
    Am: () => u,
    ZP: () => d,
    s$: () => l
});
var r = n(200651);
n(192379);
var o = n(442837),
    a = n(481060),
    i = n(430824),
    s = n(275759),
    c = n(388032);
let l = 'guild-connection-roles';
function u(e) {
    (0, a.ZDy)(
        async () => {
            let { default: t } = await n.e('40897').then(n.bind(n, 507294));
            return (n) => {
                var o, a;
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
                    (a = a = { guildId: e }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    o)
                );
            };
        },
        {
            modalKey: l,
            contextKey: a.z1l,
            onCloseRequest: () => {
                (0, a.Mr3)(l, a.z1l);
            }
        }
    );
}
function d(e) {
    return (0, o.e7)([i.Z], () => (0, s.kQ)(e, i.Z.getRoles(e.id)), [e])
        ? (0, r.jsx)(a.sNh, {
              id: 'guild-connection-roles',
              label: c.NW.string(c.t.ghtnsr),
              icon: a.xPt,
              action: () => u(e.id)
          })
        : null;
}
