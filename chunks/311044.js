n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    l = n(81897),
    a = n(906732),
    o = n(566898),
    s = n(785717),
    c = n(806729),
    u = n(857302),
    d = n(892001),
    p = n(252417),
    f = n(264481),
    h = n(661462),
    g = n(443680);
function m(e) {
    let { user: t, guildId: n, channelId: m, onClose: b } = e,
        { analyticsLocations: _ } = (0, a.ZP)(),
        { context: O, trackUserProfileAction: E } = (0, s.KZ)(),
        { mutualFriends: y, mutualFriendsCount: v } = (0, c.Z)(t),
        I = (0, l.Z)();
    return (
        i.useEffect(() => {
            (0, u.Z)(t.id, I);
        }, [t.id, I]),
        (0, r.jsx)(h.F, {
            className: g.scroller,
            children:
                null == y
                    ? Array.from({ length: null != v ? v : 10 }).map((e, t) =>
                          (0, r.jsxs)(
                              "div",
                              {
                                  className: g.friendsLoadingItem,
                                  children: [
                                      (0, r.jsx)(o.ZT, {
                                          width: 40,
                                          opacity: 0.08,
                                      }),
                                      (0, r.jsx)(o.ZT, {
                                          width: 135,
                                          opacity: 0.08,
                                      }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === y.length
                      ? (0, r.jsx)(f.s_, {})
                      : y.map((e) => {
                            let { key: t, user: i, status: l } = e;
                            return (0, r.jsx)(
                                p.Z,
                                {
                                    user: i,
                                    status: l,
                                    guildId: n,
                                    channelId: m,
                                    onSelect: () => {
                                        var e, t;
                                        null == b || b(),
                                            E({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, d.openUserProfileModal)(
                                                ((e = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
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
                                                })({}, O)),
                                                (t = t =
                                                    {
                                                        userId: i.id,
                                                        sourceAnalyticsLocations: _,
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
                                                          Object.defineProperty(
                                                              e,
                                                              n,
                                                              Object.getOwnPropertyDescriptor(t, n),
                                                          );
                                                      }),
                                                e),
                                            );
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
