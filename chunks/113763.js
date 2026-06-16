i.d(t, { A: () => p });
var n = i(627968),
    l = i(64700),
    s = i(163126),
    a = i(688810),
    r = i(114212),
    d = i(183555),
    o = i(913453),
    c = i(229187),
    u = i(975732),
    g = i(201934),
    m = i(782505),
    h = i(515054),
    x = i(851284);
function p(e) {
    let { user: t, guildId: i, channelId: p, onClose: j } = e,
        { analyticsLocations: f } = (0, a.Ay)(),
        { context: A, trackUserProfileAction: I } = (0, d.NJ)(),
        { mutualFriends: v, mutualFriendsCount: S } = (0, o.A)(t),
        b = (0, s.A)();
    return (
        l.useEffect(() => {
            (0, c.A)(t.id, b);
        }, [t.id, b]),
        (0, n.jsx)(h.K, {
            className: x.XG,
            children:
                null == v
                    ? Array.from({ length: S ?? 10 }).map((e, t) =>
                          (0, n.jsxs)(
                              "div",
                              {
                                  className: x.D$,
                                  children: [
                                      (0, n.jsx)(r.FQ, { width: 40, opacity: 0.08 }),
                                      (0, n.jsx)(r.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === v.length
                      ? (0, n.jsx)(m.IA, {})
                      : v.map((e) => {
                            let { key: t, user: l, status: s } = e;
                            return (0, n.jsx)(
                                g.A,
                                {
                                    user: l,
                                    status: s,
                                    guildId: i,
                                    channelId: p,
                                    onSelect: () => {
                                        j?.(),
                                            I({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, u.openUserProfileModal)({
                                                ...A,
                                                userId: l.id,
                                                sourceAnalyticsLocations: f,
                                            });
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
