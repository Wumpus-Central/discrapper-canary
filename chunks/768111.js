t.d(n, { Z: () => f }), t(539854);
var r = t(447448),
    l = t(461133),
    o = t(585305),
    i = t(806729),
    c = t(517157),
    s = t(708108),
    a = t(146078),
    d = t(228168),
    u = t(388032);
function f(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: f, mutualGuilds: m } = (0, i.Z)(n),
        p = null == m ? void 0 : m.length,
        h = (0, o.Z)(n),
        x = (0, r.k)({ location: "useUserProfileModalV2TabBarItems" }),
        b = (0, l.P)({ location: "useUserProfileModalV2TabBarItems" }),
        j = (0, c.Z)(n.id),
        g = [],
        v = n.id === (null == t ? void 0 : t.id),
        y = j.length > 0;
    return (
        ((v && x) || (y && b)) &&
            g.push({
                text: u.intl.string(u.t.laViw8),
                section: d.oh.WIDGETS,
                subsection: void 0,
            }),
        g.push({
            text: u.intl.string(u.t.chq59f),
            section: d.oh.ACTIVITY,
            subsection: void 0,
        }),
        n.id !== (null == t ? void 0 : t.id) &&
            h &&
            (g.push({
                text: (0, s.Z)(f),
                section: d.oh.MUTUAL_FRIENDS,
                subsection: void 0,
            }),
            g.push({
                text: (0, a.Z)(p),
                section: d.oh.MUTUAL_GUILDS,
                subsection: void 0,
            })),
        g
    );
}
