t.d(n, { Z: () => m }), t(539854);
var l = t(46841),
    i = t(477448),
    r = t(612600),
    o = t(585305),
    s = t(806729),
    a = t(517157),
    c = t(708108),
    d = t(146078),
    u = t(228168),
    f = t(388032);
function m(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: m, mutualGuilds: p } = (0, s.Z)(n),
        h = null == p ? void 0 : p.length,
        j = (0, o.Z)(n),
        x = (0, i.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        v = (0, r.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        g = (0, a.Z)(n.id),
        b = (0, l.S)({ location: "useUserProfileModalV2TabBarItems" }),
        y = [],
        O = n.id === (null == t ? void 0 : t.id),
        I = g.length > 0;
    return (
        ((O && x) || (I && v)) &&
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
        b &&
            y.push({
                text: f.intl.string(f.t["7lZ31N"]),
                section: u.oh.WISHLIST,
                subsection: void 0,
            }),
        n.id !== (null == t ? void 0 : t.id) &&
            j &&
            (y.push({
                text: (0, c.Z)(m),
                section: u.oh.MUTUAL_FRIENDS,
                subsection: void 0,
            }),
            y.push({
                text: (0, d.Z)(h),
                section: u.oh.MUTUAL_GUILDS,
                subsection: void 0,
            })),
        y
    );
}
