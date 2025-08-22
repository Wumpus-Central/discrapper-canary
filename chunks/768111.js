t.d(n, { Z: () => u }), t(539854);
var r = t(447448),
    l = t(585305),
    o = t(806729),
    i = t(517157),
    c = t(708108),
    s = t(146078),
    a = t(228168),
    d = t(388032);
function u(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: u, mutualGuilds: f } = (0, o.Z)(n),
        m = null == f ? void 0 : f.length,
        p = (0, l.Z)(n),
        h = (0, r.k)({ location: "useUserProfileModalV2TabBarItems" }),
        x = (0, i.Z)(n.id),
        b = [],
        j = n.id === (null == t ? void 0 : t.id),
        g = x.length > 0;
    return (
        h &&
            (g || j) &&
            b.push({
                text: d.intl.string(d.t.laViw8),
                section: a.oh.WIDGETS,
                subsection: void 0,
            }),
        b.push({
            text: d.intl.string(d.t.chq59f),
            section: a.oh.ACTIVITY,
            subsection: void 0,
        }),
        n.id !== (null == t ? void 0 : t.id) &&
            p &&
            (b.push({
                text: (0, c.Z)(u),
                section: a.oh.MUTUAL_FRIENDS,
                subsection: void 0,
            }),
            b.push({
                text: (0, s.Z)(m),
                section: a.oh.MUTUAL_GUILDS,
                subsection: void 0,
            })),
        b
    );
}
