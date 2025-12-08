t.d(n, { Z: () => g }), t(539854);
var l = t(370523),
    i = t(607550),
    o = t(699516),
    r = t(621853),
    s = t(567400),
    a = t(46841),
    c = t(837411),
    d = t(477448),
    u = t(612600),
    m = t(585305),
    p = t(806729),
    f = t(517157),
    x = t(708108),
    h = t(146078),
    v = t(228168),
    j = t(388032);
function g(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: g, mutualGuilds: b } = (0, p.Z)(n),
        I = null == b ? void 0 : b.length,
        y = (0, m.Z)(n),
        Z = (0, d.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        _ = (0, u.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        O = (0, f.Z)(n.id),
        N = (0, s.Y)({ location: "useUserProfileModalV2TabBarItems" }),
        T = (0, a.S)({ location: "useUserProfileModalV2TabBarItems" }),
        A = (0, c.Z)(n.id),
        P = [],
        E = n.id === (null == t ? void 0 : t.id),
        C = r.Z.getFirstWishlistId(n.id),
        S = null != C,
        w = S ? r.Z.getWishlistSettings(n.id, C) : null,
        D = (S ? i.Z.getWishlistItems(C) : []).length > 0,
        R = O.length > 0;
    ((E && Z) || (R && _)) &&
        P.push({
            text: j.intl.string(j.t.laViwx),
            section: v.oh.WIDGETS,
            subsection: void 0,
        }),
        P.push({
            text: j.intl.string(j.t.chq59f),
            section: v.oh.ACTIVITY,
            subsection: void 0,
        });
    let L = !1 === n.nsfwAllowed,
        M = o.Z.isFriend(n.id),
        B = (null == w ? void 0 : w.visibility) === l.f.PUBLIC;
    return (
        ((E && N) || (!E && T && D && B && A && (!L || (L && M)))) &&
            P.push({
                text: j.intl.string(j.t["7lZ31J"]),
                section: v.oh.WISHLIST,
                subsection: void 0,
            }),
        n.id !== (null == t ? void 0 : t.id) &&
            y &&
            (P.push({
                text: (0, x.Z)(g),
                section: v.oh.MUTUAL_FRIENDS,
                subsection: void 0,
            }),
            P.push({
                text: (0, h.Z)(I),
                section: v.oh.MUTUAL_GUILDS,
                subsection: void 0,
            })),
        P
    );
}
