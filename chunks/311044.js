n.d(t, { Z: () => x });
var o = n(255367),
    r = n(73800),
    i = n(481060),
    c = n(81897),
    l = n(906732),
    a = n(566898),
    s = n(785717),
    d = n(806729),
    u = n(857302),
    f = n(892001),
    p = n(252417),
    m = n(264481),
    b = n(714905);
function x(e) {
    let { user: t, guildId: n, channelId: x, onClose: y } = e,
        { analyticsLocations: _ } = (0, l.ZP)(),
        { context: h, trackUserProfileAction: g } = (0, s.KZ)(),
        { mutualFriends: j, mutualFriendsCount: I } = (0, d.Z)(t),
        v = (0, c.Z)();
    return (
        r.useEffect(() => {
            (0, u.Z)(t.id, v);
        }, [t.id, v]),
        (0, o.jsx)(i.Ttm, {
            className: b.scroller,
            fade: !0,
            children:
                null == j
                    ? Array.from({ length: null != I ? I : 10 }).map((e, t) =>
                          (0, o.jsxs)(
                              'div',
                              {
                                  className: b.friendsLoadingItem,
                                  children: [
                                      (0, o.jsx)(a.ZT, {
                                          width: 40,
                                          opacity: 0.08
                                      }),
                                      (0, o.jsx)(a.ZT, {
                                          width: 135,
                                          opacity: 0.08
                                      })
                                  ]
                              },
                              t
                          )
                      )
                    : 0 === j.length
                      ? (0, o.jsx)(m.s_, {})
                      : j.map((e) => {
                            let { key: t, user: r, status: i } = e;
                            return (0, o.jsx)(
                                p.Z,
                                {
                                    user: r,
                                    status: i,
                                    guildId: n,
                                    channelId: x,
                                    onSelect: () => {
                                        var e, t;
                                        (null == y || y(),
                                            g({ action: 'PRESS_MUTUAL_FRIEND' }),
                                            (0, f.openUserProfileModal)(
                                                ((e = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            o = Object.keys(n);
                                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                                            (o = o.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                })
                                                            )),
                                                            o.forEach(function (t) {
                                                                var o;
                                                                ((o = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: o,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = o));
                                                            }));
                                                    }
                                                    return e;
                                                })({}, h)),
                                                (t = t =
                                                    {
                                                        userId: r.id,
                                                        sourceAnalyticsLocations: _
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var o = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, o);
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
