n.d(t, { Z: () => d });
var i = n(951288);
n(647438);
var r = n(481060),
    l = n(607187),
    a = n(112560),
    o = n(981631),
    s = n(388032),
    c = n(105740),
    u = n(800350);
function d(e) {
    let { channel: t, guild: d, width: p, inPopout: h } = e;
    return (0, i.jsx)(l.Z, {
        className: c.root,
        children: (0, i.jsx)(a.Z, {
            artURL: u,
            size: (0, a.L)(p),
            header: s.intl.string(s.t.O4FiWi),
            onCTAClick: () =>
                (0, r.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("49049"), n.e("7654"), n.e("68971")]).then(
                            n.bind(n, 560114),
                        );
                        return (n) => {
                            var r, l;
                            return (0, i.jsx)(
                                e,
                                ((r = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                (i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = i);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (l = l =
                                    {
                                        guild: d,
                                        channel: t,
                                        source: o.t4x.CHANNEL_CALL,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                r),
                            );
                        };
                    },
                    { contextKey: h ? r.u1M : r.z1l },
                ),
            callToAction: s.intl.string(s.t.VINpSK),
        }),
    });
}
