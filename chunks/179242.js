n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var l = n(163126),
    s = n(688810),
    a = n(114212),
    r = n(345942),
    o = n(183555),
    d = n(913453),
    c = n(229187),
    u = n(657331),
    h = n(21241),
    A = n(503062),
    g = n(51943),
    m = n(946356),
    p = n(359656),
    _ = n(985018),
    x = n(576968);
function f(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: f } = (0, s.Ay)(),
        { context: E } = (0, o.NJ)(),
        C = (0, l.A)(),
        { mutualFriendsCount: I, mutualFriends: S, mutualGuilds: b } = (0, d.A)(t),
        N = !t.bot && null != I && I > 0,
        T = null != b && b.length > 0;
    return N || T
        ? (0, i.jsxs)(m.A.Overlay, {
              className: x.Lw,
              children: [
                  T &&
                      (0, i.jsx)(p.A, {
                          section: "MUTUAL_GUILDS",
                          header: _.intl.string(_.t["4lTDZq"]),
                          listClassName: x.p_,
                          items: b.map((e) => {
                              let { guild: n, nick: l } = e;
                              return (0, i.jsx)(
                                  g.A,
                                  { user: t, guild: n, nick: l, onSelect: () => (0, r.u)(n.id) },
                                  n.id,
                              );
                          }),
                      }),
                  T && N && (0, i.jsx)(h.A, { className: x.yF }),
                  N &&
                      (0, i.jsx)(p.A, {
                          section: "MUTUAL_FRIENDS",
                          header: _.intl.string(_.t["0mTJ3j"]),
                          listClassName: x.p_,
                          onExpand: () => (0, c.A)(t.id, C),
                          items:
                              null == S
                                  ? Array.from({ length: I }).map((e, t) =>
                                        (0, i.jsxs)(
                                            "div",
                                            {
                                                className: x.nC,
                                                children: [
                                                    (0, i.jsx)(a.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, i.jsx)(a.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    )
                                  : S.map((e) => {
                                        let { key: t, user: l, status: s } = e;
                                        return (0, i.jsx)(
                                            A.A,
                                            {
                                                user: l,
                                                status: s,
                                                channelId: n,
                                                onSelect: () => {
                                                    (0, u.openUserProfileModal)({
                                                        ...E,
                                                        userId: l.id,
                                                        sourceAnalyticsLocations: f,
                                                    });
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
