n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(163126),
    r = n(688810),
    s = n(114212),
    o = n(183555),
    d = n(913453),
    c = n(229187),
    u = n(657331),
    g = n(503062),
    m = n(782505),
    x = n(515054),
    f = n(828151);
function h(e) {
    let { user: t, guildId: n, channelId: h, onClose: p } = e,
        { analyticsLocations: _ } = (0, r.Ay)(),
        { context: A, trackUserProfileAction: I } = (0, o.NJ)(),
        { mutualFriends: j, mutualFriendsCount: v } = (0, d.A)(t),
        T = (0, a.A)();
    return (
        l.useEffect(() => {
            (0, c.A)(t.id, T);
        }, [t.id, T]),
        (0, i.jsx)(x.K, {
            className: f.XG,
            children:
                null == j
                    ? Array.from({ length: v ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: f.D$,
                                  children: [
                                      (0, i.jsx)(s.FQ, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(s.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === j.length
                      ? (0, i.jsx)(m.IA, {})
                      : j.map((e) => {
                            let { key: t, user: l, status: a } = e;
                            return (0, i.jsx)(
                                g.A,
                                {
                                    user: l,
                                    status: a,
                                    guildId: n,
                                    channelId: h,
                                    onSelect: () => {
                                        p?.(),
                                            I({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, u.openUserProfileModal)({
                                                ...A,
                                                userId: l.id,
                                                sourceAnalyticsLocations: _,
                                            });
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
