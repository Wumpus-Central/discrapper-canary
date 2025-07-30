(n.d(t, { Z: () => u }), n(539854));
var r = n(447448),
    o = n(585305),
    i = n(806729),
    a = n(517157),
    l = n(708108),
    c = n(146078),
    s = n(228168),
    d = n(388032);
function u(e) {
    let { user: t, currentUser: n } = e,
        { mutualFriendsCount: u, mutualGuilds: f } = (0, i.Z)(t),
        m = null == f ? void 0 : f.length,
        p = (0, o.Z)(t),
        g = (0, r.k)({ location: 'useUserProfileModalV2TabBarItems' }),
        x = (0, a.Z)(),
        b = [],
        _ = t.id === (null == n ? void 0 : n.id),
        h = x.length > 0;
    return (
        g &&
            (h || _) &&
            b.push({
                text: d.intl.string(d.t.laViw8),
                section: s.oh.WIDGETS,
                subsection: void 0
            }),
        b.push({
            text: d.intl.string(d.t.chq59f),
            section: s.oh.ACTIVITY,
            subsection: void 0
        }),
        t.id !== (null == n ? void 0 : n.id) &&
            p &&
            (b.push({
                text: (0, l.Z)(u),
                section: s.oh.MUTUAL_FRIENDS,
                subsection: void 0
            }),
            b.push({
                text: (0, c.Z)(m),
                section: s.oh.MUTUAL_GUILDS,
                subsection: void 0
            })),
        b
    );
}
