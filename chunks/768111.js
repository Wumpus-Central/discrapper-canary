(n.d(t, { Z: () => d }), n(539854));
var r = n(447448),
    o = n(585305),
    i = n(806729),
    l = n(517157),
    a = n(708108),
    c = n(146078),
    s = n(228168),
    u = n(388032);
function d(e) {
    let { user: t, currentUser: n } = e,
        { mutualFriendsCount: d, mutualGuilds: f } = (0, i.Z)(t),
        p = null == f ? void 0 : f.length,
        m = (0, o.Z)(t),
        b = (0, r.k)({ location: 'useUserProfileModalV2TabBarItems' }),
        g = (0, l.Z)(),
        y = [],
        j = t.id === (null == n ? void 0 : n.id),
        O = g.length > 0;
    return (
        b &&
            (O || j) &&
            y.push({
                text: u.intl.string(u.t.laViw8),
                section: s.oh.WIDGETS,
                subsection: void 0
            }),
        y.push({
            text: u.intl.string(u.t.chq59f),
            section: s.oh.ACTIVITY,
            subsection: void 0
        }),
        t.id !== (null == n ? void 0 : n.id) &&
            m &&
            (y.push({
                text: (0, a.Z)(d),
                section: s.oh.MUTUAL_FRIENDS,
                subsection: void 0
            }),
            y.push({
                text: (0, c.Z)(p),
                section: s.oh.MUTUAL_GUILDS,
                subsection: void 0
            })),
        y
    );
}
