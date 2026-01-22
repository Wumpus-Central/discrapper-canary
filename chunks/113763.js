n.d(t, { A: () => m });
var r = n(627968),
    l = n(64700),
    i = n(163126),
    a = n(688810),
    s = n(114212),
    o = n(183555),
    c = n(913453),
    u = n(229187),
    d = n(657331),
    f = n(503062),
    p = n(782505),
    b = n(515054),
    g = n(828151);
function m(e) {
    let { user: t, guildId: n, channelId: m, onClose: y } = e,
        { analyticsLocations: O } = (0, a.Ay)(),
        { context: j, trackUserProfileAction: x } = (0, o.NJ)(),
        { mutualFriends: h, mutualFriendsCount: v } = (0, c.A)(t),
        A = (0, i.A)();
    return (
        l.useEffect(() => {
            (0, u.A)(t.id, A);
        }, [t.id, A]),
        (0, r.jsx)(b.K, {
            className: g.XG,
            children:
                null == h
                    ? Array.from({ length: null != v ? v : 10 }).map((e, t) =>
                          (0, r.jsxs)(
                              "div",
                              {
                                  className: g.D$,
                                  children: [
                                      (0, r.jsx)(s.FQ, {
                                          width: 40,
                                          opacity: 0.08,
                                      }),
                                      (0, r.jsx)(s.FQ, {
                                          width: 135,
                                          opacity: 0.08,
                                      }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === h.length
                      ? (0, r.jsx)(p.IA, {})
                      : h.map((e) => {
                            let { key: t, user: l, status: i } = e;
                            return (0, r.jsx)(
                                f.A,
                                {
                                    user: l,
                                    status: i,
                                    guildId: n,
                                    channelId: m,
                                    onSelect: () => {
                                        var e, t;
                                        null == y || y(),
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
                                                })({}, j)),
                                                (t = t =
                                                    {
                                                        userId: l.id,
                                                        sourceAnalyticsLocations: O,
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
