n.d(t, {
    $: () => u,
});
var r = n(64700),
    i = n(803306),
    l = n(141468),
    s = n(963852),
    a = n(427157),
    c = n(652215),
    o = n(985018),
    d = n(144273);

function u(e) {
    return r.useMemo(() => {
        var t, n;
        let r = (0, l.rh)(
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {},
                    (0, s.Ay)({
                        channelId: "1337",
                        content: e,
                    }),
                )),
                (n = n =
                    {
                        state: c.cmJ.SENT,
                        id: "31337",
                    }),
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
                t),
            ),
            u = new a.A({
                id: "313337",
                username: o.intl.string(o.t.cqpybK),
                discriminator: "0000",
                bot: !1,
            });
        r.author = u;
        let f = i.nj(u);
        return null != f && ((r.author = f), (r.author.getAvatarURL = () => d.A)), r;
    }, [e]);
}
