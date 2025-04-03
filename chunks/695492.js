n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(607187),
    o = n(112560),
    a = n(981631),
    s = n(388032),
    c = n(91490),
    u = n(800350);
function d(e) {
    let { channel: t, guild: d, width: p, inPopout: h } = e;
    return (0, r.jsx)(l.Z, {
        className: c.root,
        children: (0, r.jsx)(o.Z, {
            artURL: u,
            size: (0, o.L)(p),
            header: s.NW.string(s.t.O4FiWl),
            onCTAClick: () =>
                (0, i.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('96814')]).then(n.bind(n, 560114));
                        return (n) => {
                            var i, l;
                            return (0, r.jsx)(
                                e,
                                ((i = (function (e) {
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
                                (l = l =
                                    {
                                        guild: d,
                                        channel: t,
                                        source: a.t4x.CHANNEL_CALL
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                i)
                            );
                        };
                    },
                    { contextKey: h ? i.u1M : i.z1l }
                ),
            callToAction: s.NW.string(s.t.VINpSE)
        })
    });
}
