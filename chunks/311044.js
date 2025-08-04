n.d(t, { Z: () => g });
var r = n(255367),
    o = n(73800),
    i = n(481060),
    l = n(81897),
    a = n(906732),
    c = n(566898),
    s = n(785717),
    u = n(806729),
    d = n(857302),
    f = n(892001),
    p = n(252417),
    m = n(264481),
    b = n(714905);
function g(e) {
    let { user: t, guildId: n, channelId: g, onClose: y } = e,
        { analyticsLocations: j } = (0, a.ZP)(),
        { context: O, trackUserProfileAction: x } = (0, s.KZ)(),
        { mutualFriends: h, mutualFriendsCount: _ } = (0, u.Z)(t),
        v = (0, l.Z)();
    return (
        o.useEffect(() => {
            (0, d.Z)(t.id, v);
        }, [t.id, v]),
        (0, r.jsx)(i.Ttm, {
            className: b.scroller,
            fade: !0,
            children:
                null == h
                    ? Array.from({ length: null != _ ? _ : 10 }).map((e, t) =>
                          (0, r.jsxs)(
                              'div',
                              {
                                  className: b.friendsLoadingItem,
                                  children: [
                                      (0, r.jsx)(c.ZT, {
                                          width: 40,
                                          opacity: 0.08
                                      }),
                                      (0, r.jsx)(c.ZT, {
                                          width: 135,
                                          opacity: 0.08
                                      })
                                  ]
                              },
                              t
                          )
                      )
                    : 0 === h.length
                      ? (0, r.jsx)(m.s_, {})
                      : h.map((e) => {
                            let { key: t, user: o, status: i } = e;
                            return (0, r.jsx)(
                                p.Z,
                                {
                                    user: o,
                                    status: i,
                                    guildId: n,
                                    channelId: g,
                                    onSelect: () => {
                                        var e, t;
                                        (null == y || y(),
                                            x({ action: 'PRESS_MUTUAL_FRIEND' }),
                                            (0, f.openUserProfileModal)(
                                                ((e = (function (e) {
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
                                                })({}, O)),
                                                (t = t =
                                                    {
                                                        userId: o.id,
                                                        sourceAnalyticsLocations: j
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(t)).forEach(function (n) {
                                                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                                      }),
                                                e)
                                            ));
                                    }
                                },
                                t
                            );
                        })
        })
    );
}
