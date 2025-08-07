n.d(t, { Z: () => x });
var r = n(255367);
n(73800);
var i = n(81897),
    l = n(906732),
    a = n(566898),
    s = n(769654),
    o = n(785717),
    c = n(806729),
    u = n(857302),
    d = n(892001),
    h = n(483517),
    p = n(252417),
    f = n(821179),
    g = n(502762),
    m = n(686625),
    b = n(388032),
    y = n(954767);
function x(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: x } = (0, l.ZP)(),
        { context: _ } = (0, o.KZ)(),
        j = (0, i.Z)(),
        { mutualFriendsCount: O, mutualFriends: v, mutualGuilds: C } = (0, c.Z)(t),
        E = !t.bot && null != O && O > 0,
        S = null != C && C.length > 0;
    return E || S
        ? (0, r.jsxs)(g.Z.Overlay, {
              className: y.overlay,
              children: [
                  S &&
                      (0, r.jsx)(m.Z, {
                          section: "MUTUAL_GUILDS",
                          header: b.intl.string(b.t["4lTDZm"]),
                          listClassName: y.list,
                          items: C.map((e) => {
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
                  S && E && (0, r.jsx)(h.Z, { className: y.divider }),
                  E &&
                      (0, r.jsx)(m.Z, {
                          section: "MUTUAL_FRIENDS",
                          header: b.intl.string(b.t["0mTJ3t"]),
                          listClassName: y.list,
                          onExpand: () => (0, u.Z)(t.id, j),
                          items:
                              null == v
                                  ? Array.from({ length: O }).map((e, t) =>
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
                                  : v.map((e) => {
                                        let { key: t, user: i, status: l } = e;
                                        return (0, r.jsx)(
                                            p.Z,
                                            {
                                                user: i,
                                                status: l,
                                                channelId: n,
                                                onSelect: () => {
                                                    var e, t;
                                                    (0, d.openUserProfileModal)(
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
                                                        })({}, _)),
                                                        (t = t =
                                                            {
                                                                userId: i.id,
                                                                sourceAnalyticsLocations: x,
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
