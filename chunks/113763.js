i.d(t, { A: () => p });
var n = i(627968),
    l = i(64700),
    s = i(163126),
    r = i(688810),
    a = i(114212),
    o = i(183555),
    d = i(913453),
    c = i(229187),
    u = i(975732),
    g = i(201934),
    m = i(782505),
    h = i(515054),
    x = i(851284);
function p(e) {
    let { user: t, guildId: i, channelId: p, onClose: f } = e,
        { analyticsLocations: j } = (0, r.Ay)(),
        { context: A, trackUserProfileAction: I } = (0, o.NJ)(),
        { mutualFriends: S, mutualFriendsCount: v } = (0, d.A)(t),
        E = (0, s.A)();
    return (
        l.useEffect(() => {
            (0, c.A)(t.id, E);
        }, [t.id, E]),
        (0, n.jsx)(h.K, {
            className: x.XG,
            children:
                null == S
                    ? Array.from({ length: v ?? 10 }).map((e, t) =>
                          (0, n.jsxs)(
                              "div",
                              {
                                  className: x.D$,
                                  children: [
                                      (0, n.jsx)(a.FQ, { width: 40, opacity: 0.08 }),
                                      (0, n.jsx)(a.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === S.length
                      ? (0, n.jsx)(m.IA, {})
                      : S.map((e) => {
                            let { key: t, user: l, status: s } = e;
                            return (0, n.jsx)(
                                g.A,
                                {
                                    user: l,
                                    status: s,
                                    guildId: i,
                                    channelId: p,
                                    onSelect: () => {
                                        f?.(),
                                            I({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, u.openUserProfileModal)({
                                                ...A,
                                                userId: l.id,
                                                sourceAnalyticsLocations: j,
                                            });
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
