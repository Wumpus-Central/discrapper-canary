t.d(n, { Z: () => g }), t(539854);
var l = t(370523),
    i = t(607550),
    r = t(699516),
    o = t(621853),
    s = t(567400),
    a = t(46841),
    c = t(837411),
    d = t(477448),
    u = t(612600),
    m = t(585305),
    p = t(806729),
    f = t(517157),
    h = t(708108),
    x = t(146078),
    j = t(228168),
    v = t(388032);
function g(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: g, mutualGuilds: b } = (0, p.Z)(n),
        y = null == b ? void 0 : b.length,
        I = (0, m.Z)(n),
        Z = (0, d.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        O = (0, u.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        N = (0, f.Z)(n.id),
        P = (0, s.Y)({ location: "useUserProfileModalV2TabBarItems" }),
        T = (0, a.S)({ location: "useUserProfileModalV2TabBarItems" }),
        A = (0, c.Z)(n.id),
        E = [],
        S = n.id === (null == t ? void 0 : t.id),
        C = o.Z.getFirstWishlistId(n.id),
        _ = null != C,
        w = _ ? o.Z.getWishlistSettings(n.id, C) : null,
        D = (_ ? i.Z.getWishlistItems(C) : []).length > 0,
        R = N.length > 0;
    ((S && Z) || (R && O)) &&
        E.push({
            text: v.intl.string(v.t.laViw8),
            section: j.oh.WIDGETS,
            subsection: void 0,
        }),
        E.push({
            text: v.intl.string(v.t.chq59f),
            section: j.oh.ACTIVITY,
            subsection: void 0,
        });
    let L = !1 === n.nsfwAllowed,
        M = r.Z.isFriend(n.id),
        U = (null == w ? void 0 : w.visibility) === l.f.PUBLIC;
    return (
        ((S && P) || (!S && T && D && U && A && (!L || (L && M)))) &&
            E.push({
                text: v.intl.string(v.t["7lZ31N"]),
                section: j.oh.WISHLIST,
                subsection: void 0,
            }),
        n.id !== (null == t ? void 0 : t.id) &&
            I &&
            (E.push({
                text: (0, h.Z)(g),
                section: j.oh.MUTUAL_FRIENDS,
                subsection: void 0,
            }),
            E.push({
                text: (0, x.Z)(y),
                section: j.oh.MUTUAL_GUILDS,
                subsection: void 0,
            })),
        E
    );
}
