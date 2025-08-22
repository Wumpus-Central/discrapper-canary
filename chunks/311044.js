t.d(n, { Z: () => x });
var r = t(951288),
    l = t(647438),
    o = t(481060),
    i = t(81897),
    c = t(906732),
    s = t(566898),
    a = t(785717),
    d = t(806729),
    u = t(857302),
    f = t(892001),
    m = t(252417),
    p = t(264481),
    h = t(443680);
function x(e) {
    let { user: n, guildId: t, channelId: x, onClose: b } = e,
        { analyticsLocations: j } = (0, c.ZP)(),
        { context: g, trackUserProfileAction: v } = (0, a.KZ)(),
        { mutualFriends: y, mutualFriendsCount: O } = (0, d.Z)(n),
        I = (0, i.Z)();
    return (
        l.useEffect(() => {
            (0, u.Z)(n.id, I);
        }, [n.id, I]),
        (0, r.jsx)(o.Ttm, {
            className: h.scroller,
            fade: !0,
            children:
                null == y
                    ? Array.from({ length: null != O ? O : 10 }).map((e, n) =>
                          (0, r.jsxs)(
                              "div",
                              {
                                  className: h.friendsLoadingItem,
                                  children: [
                                      (0, r.jsx)(s.ZT, {
                                          width: 40,
                                          opacity: 0.08,
                                      }),
                                      (0, r.jsx)(s.ZT, {
                                          width: 135,
                                          opacity: 0.08,
                                      }),
                                  ],
                              },
                              n,
                          ),
                      )
                    : 0 === y.length
                      ? (0, r.jsx)(p.s_, {})
                      : y.map((e) => {
                            let { key: n, user: l, status: o } = e;
                            return (0, r.jsx)(
                                m.Z,
                                {
                                    user: l,
                                    status: o,
                                    guildId: t,
                                    channelId: x,
                                    onSelect: () => {
                                        var e, n;
                                        null == b || b(),
                                            v({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, f.openUserProfileModal)(
                                                ((e = (function (e) {
                                                    for (var n = 1; n < arguments.length; n++) {
                                                        var t = null != arguments[n] ? arguments[n] : {},
                                                            r = Object.keys(t);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(t, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            r.forEach(function (n) {
                                                                var r;
                                                                (r = t[n]),
                                                                    n in e
                                                                        ? Object.defineProperty(e, n, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[n] = r);
                                                            });
                                                    }
                                                    return e;
                                                })({}, g)),
                                                (n = n =
                                                    {
                                                        userId: l.id,
                                                        sourceAnalyticsLocations: j,
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                                    : (function (e, n) {
                                                          var t = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              t.push.apply(t, r);
                                                          }
                                                          return t;
                                                      })(Object(n)).forEach(function (t) {
                                                          Object.defineProperty(
                                                              e,
                                                              t,
                                                              Object.getOwnPropertyDescriptor(n, t),
                                                          );
                                                      }),
                                                e),
                                            );
                                    },
                                },
                                n,
                            );
                        }),
        })
    );
}
