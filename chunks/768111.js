t.d(n, { Z: () => v }), t(539854);
var l = t(370523),
    i = t(607550),
    o = t(699516),
    r = t(621853),
    a = t(567400),
    c = t(837411),
    s = t(477448),
    d = t(612600),
    u = t(585305),
    f = t(806729),
    m = t(517157),
    p = t(708108),
    x = t(146078),
    h = t(228168),
    j = t(388032);
function v(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: v, mutualGuilds: b } = (0, f.Z)(n),
        g = null == b ? void 0 : b.length,
        I = (0, u.Z)(n),
        y = (0, s.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        Z = (0, d.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        O = (0, m.Z)(n.id),
        T = (0, a.Y)({ location: "useUserProfileModalV2TabBarItems" }),
        N = (0, c.Z)(n.id),
        A = [],
        P = n.id === (null == t ? void 0 : t.id),
        E = r.Z.getFirstWishlistId(n.id),
        _ = null != E,
        C = _ ? r.Z.getWishlistSettings(n.id, E) : null,
        S = (_ ? i.Z.getWishlistItems(E) : []).length > 0,
        w = O.length > 0;
    ((P && y) || (w && Z)) &&
        A.push({
            text: j.intl.string(j.t.laViwx),
            section: h.oh.WIDGETS,
        }),
        A.push({
            text: j.intl.string(j.t.chq59f),
            section: h.oh.ACTIVITY,
        });
    let D = !1 === n.nsfwAllowed,
        L = o.Z.isFriend(n.id),
        R = (null == C ? void 0 : C.visibility) === l.f.PUBLIC;
    return (
        ((P && T) || (!P && S && R && N && (!D || (D && L)))) &&
            A.push({
                text: j.intl.string(j.t["7lZ31J"]),
                section: h.oh.WISHLIST,
            }),
        n.id !== (null == t ? void 0 : t.id) &&
            I &&
            (A.push({
                text: (0, p.Z)(v),
                section: h.oh.MUTUAL_FRIENDS,
            }),
            A.push({
                text: (0, x.Z)(g),
                section: h.oh.MUTUAL_GUILDS,
            })),
        A
    );
}
