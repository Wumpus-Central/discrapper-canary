n.d(t, { Z: () => O });
var r = n(54381);
n(473749);
var i = n(81897),
    l = n(906732),
    a = n(566898),
    s = n(769654),
    o = n(785717),
    c = n(806729),
    d = n(857302),
    u = n(892001),
    p = n(483517),
    h = n(252417),
    f = n(821179),
    g = n(502762),
    m = n(686625),
    b = n(388032),
    y = n(3311);
function O(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: O } = (0, l.ZP)(),
        { context: j } = (0, o.KZ)(),
        x = (0, i.Z)(),
        { mutualFriendsCount: v, mutualFriends: C, mutualGuilds: I } = (0, c.Z)(t),
        _ = !t.bot && null != v && v > 0,
        S = null != I && I.length > 0;
    return _ || S
        ? (0, r.jsxs)(g.Z.Overlay, {
              className: y.overlay,
              children: [
                  S &&
                      (0, r.jsx)(m.Z, {
                          section: "MUTUAL_GUILDS",
                          header: b.intl.string(b.t["4lTDZq"]),
                          listClassName: y.list,
                          items: I.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, r.jsx)(
                                  f.Z,
                                  {
                                      user: t,
                                      guild: n,
                                      nick: i,
                                      onSelect: () => (0, s.X)(n.id),
                                  },
                                  n.id,
                              );
                          }),
                      }),
                  S && _ && (0, r.jsx)(p.Z, { className: y.divider }),
                  _ &&
                      (0, r.jsx)(m.Z, {
                          section: "MUTUAL_FRIENDS",
                          header: b.intl.string(b.t["0mTJ3j"]),
                          listClassName: y.list,
                          onExpand: () => (0, d.Z)(t.id, x),
                          items:
                              null == C
                                  ? Array.from({ length: v }).map((e, t) =>
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: y.loadingMutualFriend,
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
                                            t,
                                        ),
                                    )
                                  : C.map((e) => {
                                        let { key: t, user: i, status: l } = e;
                                        return (0, r.jsx)(
                                            h.Z,
                                            {
                                                user: i,
                                                status: l,
                                                channelId: n,
                                                onSelect: () => {
                                                    var e, t;
                                                    (0, u.openUserProfileModal)(
                                                        ((e = (function (e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var n = null != arguments[t] ? arguments[t] : {},
                                                                    r = Object.keys(n);
                                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                                    (r = r.concat(
                                                                        Object.getOwnPropertySymbols(n).filter(
                                                                            function (e) {
                                                                                return Object.getOwnPropertyDescriptor(
                                                                                    n,
                                                                                    e,
                                                                                ).enumerable;
                                                                            },
                                                                        ),
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
                                                                userId: i.id,
                                                                sourceAnalyticsLocations: O,
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  e,
                                                                  Object.getOwnPropertyDescriptors(t),
                                                              )
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
                      }),
              ],
          })
        : null;
}
