t.d(n, { Z: () => j }), t(539854);
var l = t(370523),
    i = t(607550),
    o = t(699516),
    r = t(621853),
    a = t(837411),
    c = t(477448),
    s = t(612600),
    d = t(585305),
    u = t(806729),
    f = t(517157),
    m = t(708108),
    p = t(146078),
    x = t(228168),
    h = t(388032);
function j(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: j, mutualGuilds: v } = (0, u.Z)(n),
        b = null == v ? void 0 : v.length,
        g = (0, d.Z)(n),
        I = (0, c.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        y = (0, s.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        Z = (0, f.Z)(n.id),
        O = (0, a.Z)(n.id),
        N = [],
        T = n.id === (null == t ? void 0 : t.id),
        A = r.Z.getFirstWishlistId(n.id),
        P = null != A,
        E = P ? r.Z.getWishlistSettings(n.id, A) : null,
        C = (P ? i.Z.getWishlistItems(A) : []).length > 0,
        _ = Z.length > 0;
    ((T && I) || (_ && y)) &&
        N.push({
            text: h.intl.string(h.t.laViwx),
            section: x.oh.WIDGETS,
        }),
        N.push({
            text: h.intl.string(h.t.chq59f),
            section: x.oh.ACTIVITY,
        });
    let S = !1 === n.nsfwAllowed,
        w = o.Z.isFriend(n.id),
        D = (null == E ? void 0 : E.visibility) === l.f.PUBLIC;
    return (
        (T || (!T && C && D && O && (!S || (S && w)))) &&
            N.push({
                text: h.intl.string(h.t["7lZ31J"]),
                section: x.oh.WISHLIST,
            }),
        n.id !== (null == t ? void 0 : t.id) &&
            g &&
            (N.push({
                text: (0, m.Z)(j),
                section: x.oh.MUTUAL_FRIENDS,
            }),
            N.push({
                text: (0, p.Z)(b),
                section: x.oh.MUTUAL_GUILDS,
            })),
        N
    );
}
