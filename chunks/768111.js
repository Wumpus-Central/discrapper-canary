t.d(n, { Z: () => f }), t(539854);
var l = t(621853),
    i = t(46841),
    r = t(477448),
    o = t(612600),
    s = t(585305),
    a = t(806729),
    c = t(517157),
    d = t(708108),
    u = t(146078),
    m = t(228168),
    p = t(388032);
function f(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: f, mutualGuilds: h } = (0, a.Z)(n),
        j = null == h ? void 0 : h.length,
        x = (0, s.Z)(n),
        v = (0, r.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        g = (0, o.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        b = (0, c.Z)(n.id),
        y = (0, i.S)({ location: "useUserProfileModalV2TabBarItems" }),
        O = [],
        I = n.id === (null == t ? void 0 : t.id),
        Z = null != l.Z.getFirstWishlistId(n.id),
        P = b.length > 0;
    return (
        ((I && v) || (P && g)) &&
            O.push({
                text: p.intl.string(p.t.laViw8),
                section: m.oh.WIDGETS,
                subsection: void 0,
            }),
        O.push({
            text: p.intl.string(p.t.chq59f),
            section: m.oh.ACTIVITY,
            subsection: void 0,
        }),
        y &&
            (Z || I) &&
            O.push({
                text: p.intl.string(p.t["7lZ31N"]),
                section: m.oh.WISHLIST,
                subsection: void 0,
            }),
        n.id !== (null == t ? void 0 : t.id) &&
            x &&
            (O.push({
                text: (0, d.Z)(f),
                section: m.oh.MUTUAL_FRIENDS,
                subsection: void 0,
            }),
            O.push({
                text: (0, u.Z)(j),
                section: m.oh.MUTUAL_GUILDS,
                subsection: void 0,
            })),
        O
    );
}
