n.d(t, {
    A: () => y,
});
var r = n(627968);
n(64700);
var l = n(163126),
    i = n(688810),
    a = n(114212),
    s = n(345942),
    o = n(183555),
    c = n(913453),
    u = n(229187),
    d = n(657331),
    f = n(21241),
    p = n(503062),
    h = n(51943),
    b = n(946356),
    g = n(359656),
    m = n(985018),
    A = n(576968);

function y(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: y } = (0, i.Ay)(),
        { context: O } = (0, o.NJ)(),
        j = (0, l.A)(),
        { mutualFriendsCount: v, mutualFriends: x, mutualGuilds: E } = (0, c.A)(t),
        _ = !t.bot && null != v && v > 0,
        C = null != E && E.length > 0;
    return _ || C
        ? (0, r.jsxs)(b.A.Overlay, {
              className: A.Lw,
              children: [
                  C &&
                      (0, r.jsx)(g.A, {
                          section: "MUTUAL_GUILDS",
                          header: m.intl.string(m.t["4lTDZq"]),
                          listClassName: A.p_,
                          items: E.map((e) => {
                              let { guild: n, nick: l } = e;
                              return (0, r.jsx)(
                                  h.A,
                                  {
                                      user: t,
                                      guild: n,
                                      nick: l,
                                      onSelect: () => (0, s.u)(n.id),
                                  },
                                  n.id,
                              );
                          }),
                      }),
                  C &&
                      _ &&
                      (0, r.jsx)(f.A, {
                          className: A.yF,
                      }),
                  _ &&
                      (0, r.jsx)(g.A, {
                          section: "MUTUAL_FRIENDS",
                          header: m.intl.string(m.t["0mTJ3j"]),
                          listClassName: A.p_,
                          onExpand: () => (0, u.A)(t.id, j),
                          items:
                              null == x
                                  ? Array.from({
                                        length: v,
                                    }).map((e, t) =>
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: A.nC,
                                                children: [
                                                    (0, r.jsx)(a.FQ, {
                                                        width: 40,
                                                        opacity: 0.08,
                                                    }),
                                                    (0, r.jsx)(a.FQ, {
                                                        width: 135,
                                                        opacity: 0.08,
                                                    }),
                                                ],
                                            },
                                            t,
                                        ),
                                    )
                                  : x.map((e) => {
                                        let { key: t, user: l, status: i } = e;
                                        return (0, r.jsx)(
                                            p.A,
                                            {
                                                user: l,
                                                status: i,
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
                                                        })({}, O)),
                                                        (t = t =
                                                            {
                                                                userId: l.id,
                                                                sourceAnalyticsLocations: y,
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
