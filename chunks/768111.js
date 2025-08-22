t.d(n, { Z: () => u }), t(539854);
var r = t(447448),
    o = t(585305),
    l = t(806729),
    i = t(517157),
    c = t(708108),
    a = t(146078),
    s = t(228168),
    d = t(388032);
function u(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: u, mutualGuilds: f } = (0, l.Z)(n),
        m = null == f ? void 0 : f.length,
        p = (0, o.Z)(n),
        x = (0, r.k)({ location: "useUserProfileModalV2TabBarItems" }),
        b = (0, i.Z)(n.id),
        g = [],
        h = n.id === (null == t ? void 0 : t.id),
        j = b.length > 0;
    return (
        x &&
            (j || h) &&
            g.push({
                text: d.intl.string(d.t.laViw8),
                section: s.oh.WIDGETS,
                subsection: void 0,
            }),
        g.push({
            text: d.intl.string(d.t.chq59f),
            section: s.oh.ACTIVITY,
            subsection: void 0,
        }),
        n.id !== (null == t ? void 0 : t.id) &&
            p &&
            (g.push({
                text: (0, c.Z)(u),
                section: s.oh.MUTUAL_FRIENDS,
                subsection: void 0,
            }),
            g.push({
                text: (0, a.Z)(m),
                section: s.oh.MUTUAL_GUILDS,
                subsection: void 0,
            })),
        g
    );
}
