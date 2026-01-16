t.d(n, { Z: () => h }), t(539854);
var l = t(370523),
    i = t(607550),
    o = t(699516),
    r = t(621853),
    a = t(837411),
    c = t(477448),
    s = t(585305),
    d = t(806729),
    u = t(517157),
    f = t(708108),
    m = t(146078),
    p = t(228168),
    x = t(388032);
function h(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: h, mutualGuilds: j } = (0, d.Z)(n),
        v = null == j ? void 0 : j.length,
        b = (0, s.Z)(n),
        g = (0, c.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        I = (0, u.Z)(n.id),
        y = (0, a.Z)(n.id),
        Z = [],
        O = n.id === (null == t ? void 0 : t.id),
        N = r.Z.getFirstWishlistId(n.id),
        T = null != N,
        A = T ? r.Z.getWishlistSettings(n.id, N) : null,
        P = (T ? i.Z.getWishlistItems(N) : []).length > 0,
        E = I.length > 0;
    ((O && g) || E) &&
        Z.push({
            text: x.intl.string(x.t.laViwx),
            section: p.oh.WIDGETS,
        }),
        Z.push({
            text: x.intl.string(x.t.chq59f),
            section: p.oh.ACTIVITY,
        });
    let _ = !1 === n.nsfwAllowed,
        C = o.Z.isFriend(n.id),
        S = (null == A ? void 0 : A.visibility) === l.f.PUBLIC;
    return (
        (O || (!O && P && S && y && (!_ || (_ && C)))) &&
            Z.push({
                text: x.intl.string(x.t["7lZ31J"]),
                section: p.oh.WISHLIST,
            }),
        n.id !== (null == t ? void 0 : t.id) &&
            b &&
            (Z.push({
                text: (0, f.Z)(h),
                section: p.oh.MUTUAL_FRIENDS,
            }),
            Z.push({
                text: (0, m.Z)(v),
                section: p.oh.MUTUAL_GUILDS,
            })),
        Z
    );
}
