n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    l = n(81897),
    a = n(906732),
    o = n(566898),
    c = n(785717),
    s = n(806729),
    u = n(857302),
    d = n(892001),
    f = n(252417),
    g = n(264481),
    b = n(661462),
    p = n(443680);
function m(e) {
    let { user: t, guildId: n, channelId: m, onClose: O } = e,
        { analyticsLocations: j } = (0, a.ZP)(),
        { context: y, trackUserProfileAction: x } = (0, c.KZ)(),
        { mutualFriends: v, mutualFriendsCount: h } = (0, s.Z)(t),
        _ = (0, l.Z)();
    return (
        i.useEffect(() => {
            (0, u.Z)(t.id, _);
        }, [t.id, _]),
        (0, r.jsx)(b.F, {
            className: p.scroller,
            children:
                null == v
                    ? Array.from({ length: null != h ? h : 10 }).map((e, t) =>
                          (0, r.jsxs)(
                              "div",
                              {
                                  className: p.friendsLoadingItem,
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
                    : 0 === v.length
                      ? (0, r.jsx)(g.s_, {})
                      : v.map((e) => {
                            let { key: t, user: i, status: l } = e;
                            return (0, r.jsx)(
                                f.Z,
                                {
                                    user: i,
                                    status: l,
                                    guildId: n,
                                    channelId: m,
                                    onSelect: () => {
                                        var e, t;
                                        null == O || O(),
                                            x({ action: "PRESS_MUTUAL_FRIEND" }),
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
                                                })({}, y)),
                                                (t = t =
                                                    {
                                                        userId: i.id,
                                                        sourceAnalyticsLocations: j,
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
