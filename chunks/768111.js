t.d(n, { Z: () => j }), t(539854);
var l = t(370523),
    i = t(607550),
    o = t(699516),
    r = t(621853),
    a = t(567400),
    c = t(46841),
    s = t(837411),
    d = t(477448),
    u = t(612600),
    f = t(585305),
    m = t(806729),
    p = t(517157),
    x = t(708108),
    h = t(146078),
    v = t(228168),
    b = t(388032);
function j(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: j, mutualGuilds: g } = (0, m.Z)(n),
        I = null == g ? void 0 : g.length,
        y = (0, f.Z)(n),
        Z = (0, d.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        O = (0, u.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        T = (0, p.Z)(n.id),
        N = (0, a.Y)({ location: "useUserProfileModalV2TabBarItems" }),
        A = (0, c.S)({ location: "useUserProfileModalV2TabBarItems" }),
        P = (0, s.Z)(n.id),
        E = [],
        _ = n.id === (null == t ? void 0 : t.id),
        C = r.Z.getFirstWishlistId(n.id),
        S = null != C,
        w = S ? r.Z.getWishlistSettings(n.id, C) : null,
        D = (S ? i.Z.getWishlistItems(C) : []).length > 0,
        L = T.length > 0;
    ((_ && Z) || (L && O)) &&
        E.push({
            text: b.intl.string(b.t.laViwx),
            section: v.oh.WIDGETS,
        }),
        E.push({
            text: b.intl.string(b.t.chq59f),
            section: v.oh.ACTIVITY,
        });
    let R = !1 === n.nsfwAllowed,
        M = o.Z.isFriend(n.id),
        B = (null == w ? void 0 : w.visibility) === l.f.PUBLIC;
    return (
        ((_ && N) || (!_ && A && D && B && P && (!R || (R && M)))) &&
            E.push({
                text: b.intl.string(b.t["7lZ31J"]),
                section: v.oh.WISHLIST,
            }),
        n.id !== (null == t ? void 0 : t.id) &&
            y &&
            (E.push({
                text: (0, x.Z)(j),
                section: v.oh.MUTUAL_FRIENDS,
            }),
            E.push({
                text: (0, h.Z)(I),
                section: v.oh.MUTUAL_GUILDS,
            })),
        E
    );
}
