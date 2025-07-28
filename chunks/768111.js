(n.d(t, { Z: () => d }), n(539854));
var r = n(447448),
    o = n(585305),
    i = n(806729),
    c = n(708108),
    l = n(146078),
    a = n(228168),
    s = n(388032);
function d(e) {
    let { user: t, currentUser: n } = e,
        { mutualFriendsCount: d, mutualGuilds: u } = (0, i.Z)(t),
        f = null == u ? void 0 : u.length,
        m = (0, o.Z)(t),
        p = (0, r.k)({ location: 'useUserProfileModalV2TabBarItems' }),
        b = [];
    return (
        p &&
            b.push({
                text: s.intl.string(s.t.laViw8),
                section: a.oh.WIDGETS,
                subsection: void 0
            }),
        b.push({
            text: s.intl.string(s.t.chq59f),
            section: a.oh.ACTIVITY,
            subsection: void 0
        }),
        t.id !== (null == n ? void 0 : n.id) &&
            m &&
            (b.push({
                text: (0, c.Z)(d),
                section: a.oh.MUTUAL_FRIENDS,
                subsection: void 0
            }),
            b.push({
                text: (0, l.Z)(f),
                section: a.oh.MUTUAL_GUILDS,
                subsection: void 0
            })),
        b
    );
}
