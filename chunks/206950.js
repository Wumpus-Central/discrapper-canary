n.d(t, { F: () => u });
var r = n(73800),
    i = n(232567),
    l = n(786761),
    s = n(3148),
    a = n(598077),
    o = n(981631),
    c = n(388032),
    d = n(540167);
function u(e) {
    return r.useMemo(() => {
        var t, n;
        let r = (0, l.e5)(
                ((t = (function (e) {
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
                })(
                    {},
                    (0, s.ZP)({
                        channelId: '1337',
                        content: e
                    })
                )),
                (n = n =
                    {
                        state: o.yb.SENT,
                        id: '31337'
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
                t)
            ),
            u = new a.Z({
                id: '313337',
                username: c.intl.string(c.t.cqpybG),
                discriminator: '0000',
                bot: !1
            });
        r.author = u;
        let m = i.$k(u);
        return (null != m && ((r.author = m), (r.author.getAvatarURL = () => d.Z)), r);
    }, [e]);
}
