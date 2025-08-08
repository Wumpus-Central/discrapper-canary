n.d(t, { Z: () => b });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    o = n(81897),
    a = n(906732),
    c = n(566898),
    s = n(785717),
    d = n(806729),
    u = n(857302),
    f = n(892001),
    m = n(252417),
    p = n(264481),
    g = n(714905);
function b(e) {
    let { user: t, guildId: n, channelId: b, onClose: j } = e,
        { analyticsLocations: h } = (0, a.ZP)(),
        { context: x, trackUserProfileAction: y } = (0, s.KZ)(),
        { mutualFriends: v, mutualFriendsCount: O } = (0, d.Z)(t),
        I = (0, o.Z)();
    return (
        l.useEffect(() => {
            (0, u.Z)(t.id, I);
        }, [t.id, I]),
        (0, r.jsx)(i.Ttm, {
            className: g.scroller,
            fade: !0,
            children:
                null == v
                    ? Array.from({ length: null != O ? O : 10 }).map((e, t) =>
                          (0, r.jsxs)(
                              "div",
                              {
                                  className: g.friendsLoadingItem,
                                  children: [
                                      (0, r.jsx)(c.ZT, {
                                          width: 40,
                                          opacity: 0.08,
                                      }),
                                      (0, r.jsx)(c.ZT, {
                                          width: 135,
                                          opacity: 0.08,
                                      }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === v.length
                      ? (0, r.jsx)(p.s_, {})
                      : v.map((e) => {
                            let { key: t, user: l, status: i } = e;
                            return (0, r.jsx)(
                                m.Z,
                                {
                                    user: l,
                                    status: i,
                                    guildId: n,
                                    channelId: b,
                                    onSelect: () => {
                                        var e, t;
                                        null == j || j(),
                                            y({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, f.openUserProfileModal)(
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
                                                })({}, x)),
                                                (t = t =
                                                    {
                                                        userId: l.id,
                                                        sourceAnalyticsLocations: h,
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
