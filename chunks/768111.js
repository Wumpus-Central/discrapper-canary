t.d(n, { Z: () => x }), t(539854);
var l = t(607550),
    i = t(699516),
    r = t(621853),
    o = t(46841),
    s = t(837411),
    a = t(477448),
    c = t(612600),
    d = t(585305),
    u = t(806729),
    m = t(517157),
    p = t(708108),
    f = t(146078),
    h = t(228168),
    j = t(388032);
function x(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: x, mutualGuilds: v } = (0, u.Z)(n),
        g = null == v ? void 0 : v.length,
        b = (0, d.Z)(n),
        y = (0, a.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        O = (0, c.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        I = (0, m.Z)(n.id),
        Z = (0, o.S)({ location: "useUserProfileModalV2TabBarItems" }),
        P = (0, s.Z)(n.id),
        N = [],
        T = n.id === (null == t ? void 0 : t.id),
        E = r.Z.getFirstWishlistId(n.id),
        A = (null != E ? l.Z.getWishlistItems(E) : []).length > 0,
        S = I.length > 0;
    ((T && y) || (S && O)) &&
        N.push({
            text: j.intl.string(j.t.laViw8),
            section: h.oh.WIDGETS,
            subsection: void 0,
        }),
        N.push({
            text: j.intl.string(j.t.chq59f),
            section: h.oh.ACTIVITY,
            subsection: void 0,
        });
    let C = !1 === n.nsfwAllowed,
        w = i.Z.isFriend(n.id);
    return (
        Z &&
            (T || (A && P && (!C || (C && w)))) &&
            N.push({
                text: j.intl.string(j.t["7lZ31N"]),
                section: h.oh.WISHLIST,
                subsection: void 0,
            }),
        n.id !== (null == t ? void 0 : t.id) &&
            b &&
            (N.push({
                text: (0, p.Z)(x),
                section: h.oh.MUTUAL_FRIENDS,
                subsection: void 0,
            }),
            N.push({
                text: (0, f.Z)(g),
                section: h.oh.MUTUAL_GUILDS,
                subsection: void 0,
            })),
        N
    );
}
