t.d(n, { Z: () => x });
var r = t(951288),
    o = t(647438),
    l = t(481060),
    i = t(81897),
    c = t(906732),
    a = t(566898),
    s = t(785717),
    d = t(806729),
    u = t(857302),
    f = t(892001),
    m = t(252417),
    p = t(264481),
    b = t(443680);
function x(e) {
    let { user: n, guildId: t, channelId: x, onClose: g } = e,
        { analyticsLocations: h } = (0, c.ZP)(),
        { context: j, trackUserProfileAction: v } = (0, s.KZ)(),
        { mutualFriends: _, mutualFriendsCount: y } = (0, d.Z)(n),
        I = (0, i.Z)();
    return (
        o.useEffect(() => {
            (0, u.Z)(n.id, I);
        }, [n.id, I]),
        (0, r.jsx)(l.Ttm, {
            className: b.scroller,
            fade: !0,
            children:
                null == _
                    ? Array.from({ length: null != y ? y : 10 }).map((e, n) =>
                          (0, r.jsxs)(
                              "div",
                              {
                                  className: b.friendsLoadingItem,
                                  children: [
                                      (0, r.jsx)(a.ZT, {
                                          width: 40,
                                          opacity: 0.08,
                                      }),
                                      (0, r.jsx)(a.ZT, {
                                          width: 135,
                                          opacity: 0.08,
                                      }),
                                  ],
                              },
                              n,
                          ),
                      )
                    : 0 === _.length
                      ? (0, r.jsx)(p.s_, {})
                      : _.map((e) => {
                            let { key: n, user: o, status: l } = e;
                            return (0, r.jsx)(
                                m.Z,
                                {
                                    user: o,
                                    status: l,
                                    guildId: t,
                                    channelId: x,
                                    onSelect: () => {
                                        var e, n;
                                        null == g || g(),
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
                                                })({}, j)),
                                                (n = n =
                                                    {
                                                        userId: o.id,
                                                        sourceAnalyticsLocations: h,
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
