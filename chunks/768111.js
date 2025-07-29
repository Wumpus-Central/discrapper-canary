(n.d(t, { Z: () => d }), n(539854));
var r = n(447448),
    o = n(585305),
    i = n(806729),
    a = n(708108),
    l = n(146078),
    c = n(228168),
    s = n(388032);
function d(e) {
    let { user: t, currentUser: n } = e,
        { mutualFriendsCount: d, mutualGuilds: u } = (0, i.Z)(t),
        m = null == u ? void 0 : u.length,
        f = (0, o.Z)(t),
        p = (0, r.k)({ location: 'useUserProfileModalV2TabBarItems' }),
        g = [];
    return (
        p &&
            g.push({
                text: s.intl.string(s.t.laViw8),
                section: c.oh.WIDGETS,
                subsection: void 0
            }),
        g.push({
            text: s.intl.string(s.t.chq59f),
            section: c.oh.ACTIVITY,
            subsection: void 0
        }),
        t.id !== (null == n ? void 0 : n.id) &&
            f &&
            (g.push({
                text: (0, a.Z)(d),
                section: c.oh.MUTUAL_FRIENDS,
                subsection: void 0
            }),
            g.push({
                text: (0, l.Z)(m),
                section: c.oh.MUTUAL_GUILDS,
                subsection: void 0
            })),
        g
    );
}
