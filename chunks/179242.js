n.d(t, { A: () => E });
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
    _ = n(51943),
    m = n(946356),
    p = n(359656),
    g = n(985018),
    f = n(54557);
function E(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: E } = (0, s.Ay)(),
        { context: x } = (0, o.NJ)(),
        I = (0, l.A)(),
        { mutualFriendsCount: C, mutualFriends: N, mutualGuilds: T } = (0, d.A)(t),
        S = !t.bot && null != C && C > 0,
        b = null != T && T.length > 0;
    return S || b
        ? (0, i.jsxs)(m.A.Overlay, {
              className: f.Lw,
              children: [
                  b &&
                      (0, i.jsx)(p.A, {
                          section: "MUTUAL_GUILDS",
                          header: g.intl.string(g.t["4lTDZq"]),
                          listClassName: f.p_,
                          items: T.map((e) => {
                              let { guild: n, nick: l } = e;
                              return (0, i.jsx)(
                                  _.A,
                                  { user: t, guild: n, nick: l, onSelect: () => (0, r.u)(n.id) },
                                  n.id,
                              );
                          }),
                      }),
                  b && S && (0, i.jsx)(h.A, { className: f.yF }),
                  S &&
                      (0, i.jsx)(p.A, {
                          section: "MUTUAL_FRIENDS",
                          header: g.intl.string(g.t["0mTJ3j"]),
                          listClassName: f.p_,
                          onExpand: () => (0, c.A)(t.id, I),
                          items:
                              null == N
                                  ? Array.from({ length: C }).map((e, t) =>
                                        (0, i.jsxs)(
                                            "div",
                                            {
                                                className: f.nC,
                                                children: [
                                                    (0, i.jsx)(a.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, i.jsx)(a.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    )
                                  : N.map((e) => {
                                        let { key: t, user: l, status: s } = e;
                                        return (0, i.jsx)(
                                            A.A,
                                            {
                                                user: l,
                                                status: s,
                                                channelId: n,
                                                onSelect: () => {
                                                    (0, u.openUserProfileModal)({
                                                        ...x,
                                                        userId: l.id,
                                                        sourceAnalyticsLocations: E,
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
