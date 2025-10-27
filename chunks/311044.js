n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    a = n(81897),
    l = n(906732),
    o = n(566898),
    c = n(785717),
    s = n(806729),
    u = n(857302),
    d = n(892001),
    f = n(252417),
    g = n(264481),
    p = n(661462),
    m = n(443680);
function b(e) {
    let { user: t, guildId: n, channelId: b, onClose: h } = e,
        { analyticsLocations: y } = (0, l.ZP)(),
        { context: v, trackUserProfileAction: O } = (0, c.KZ)(),
        { mutualFriends: j, mutualFriendsCount: x } = (0, s.Z)(t),
        _ = (0, a.Z)();
    return (
        i.useEffect(() => {
            (0, u.Z)(t.id, _);
        }, [t.id, _]),
        (0, r.jsx)(p.F, {
            className: m.scroller,
            children:
                null == j
                    ? Array.from({ length: null != x ? x : 10 }).map((e, t) =>
                          (0, r.jsxs)(
                              "div",
                              {
                                  className: m.friendsLoadingItem,
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
                    : 0 === j.length
                      ? (0, r.jsx)(g.s_, {})
                      : j.map((e) => {
                            let { key: t, user: i, status: a } = e;
                            return (0, r.jsx)(
                                f.Z,
                                {
                                    user: i,
                                    status: a,
                                    guildId: n,
                                    channelId: b,
                                    onSelect: () => {
                                        var e, t;
                                        null == h || h(),
                                            O({ action: "PRESS_MUTUAL_FRIEND" }),
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
                                                })({}, v)),
                                                (t = t =
                                                    {
                                                        userId: i.id,
                                                        sourceAnalyticsLocations: y,
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
