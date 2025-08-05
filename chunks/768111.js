(n.d(t, { Z: () => u }), n(539854));
var r = n(447448),
    o = n(585305),
    l = n(806729),
    i = n(517157),
    a = n(708108),
    c = n(146078),
    s = n(228168),
    d = n(388032);
function u(e) {
    let { user: t, currentUser: n } = e,
        { mutualFriendsCount: u, mutualGuilds: f } = (0, l.Z)(t),
        p = null == f ? void 0 : f.length,
        m = (0, o.Z)(t),
        b = (0, r.k)({ location: 'useUserProfileModalV2TabBarItems' }),
        g = (0, i.Z)(),
        y = [],
        O = t.id === (null == n ? void 0 : n.id),
        j = g.length > 0;
    return (
        b &&
            (j || O) &&
            y.push({
                text: d.intl.string(d.t.laViw8),
                section: s.oh.WIDGETS,
                subsection: void 0
            }),
        y.push({
            text: d.intl.string(d.t.chq59f),
            section: s.oh.ACTIVITY,
            subsection: void 0
        }),
        t.id !== (null == n ? void 0 : n.id) &&
            m &&
            (y.push({
                text: (0, a.Z)(u),
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
