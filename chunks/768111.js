t.d(n, { Z: () => p }), t(539854);
var o = t(447448),
    r = t(461133),
    l = t(46841),
    i = t(585305),
    c = t(806729),
    a = t(517157),
    s = t(708108),
    d = t(146078),
    u = t(228168),
    f = t(388032);
function p(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: p, mutualGuilds: m } = (0, c.Z)(n),
        x = null == m ? void 0 : m.length,
        b = (0, i.Z)(n),
        h = (0, o.k)({ location: "useUserProfileModalV2TabBarItems" }),
        g = (0, r.P)({ location: "useUserProfileModalV2TabBarItems" }),
        j = (0, a.Z)(n.id),
        v = (0, l.S)({ location: "useUserProfileModalV2TabBarItems" }),
        y = [],
        _ = n.id === (null == t ? void 0 : t.id),
        I = j.length > 0;
    return (
        ((_ && h) || (I && g)) &&
            y.push({
                text: f.intl.string(f.t.laViw8),
                section: u.oh.WIDGETS,
                subsection: void 0,
            }),
        y.push({
            text: f.intl.string(f.t.chq59f),
            section: u.oh.ACTIVITY,
            subsection: void 0,
        }),
        v &&
            y.push({
                text: f.intl.string(f.t["7lZ31N"]),
                section: u.oh.WISHLIST,
                subsection: void 0,
            }),
        n.id !== (null == t ? void 0 : t.id) &&
            b &&
            (y.push({
                text: (0, s.Z)(p),
                section: u.oh.MUTUAL_FRIENDS,
                subsection: void 0,
            }),
            y.push({
                text: (0, d.Z)(x),
                section: u.oh.MUTUAL_GUILDS,
                subsection: void 0,
            })),
        y
    );
}
