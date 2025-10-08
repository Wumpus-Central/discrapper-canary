t.d(n, { Z: () => v }), t(539854);
var l = t(370523),
    i = t(607550),
    r = t(699516),
    o = t(621853),
    s = t(46841),
    a = t(837411),
    c = t(477448),
    d = t(612600),
    u = t(585305),
    m = t(806729),
    p = t(517157),
    f = t(708108),
    h = t(146078),
    x = t(228168),
    j = t(388032);
function v(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: v, mutualGuilds: g } = (0, m.Z)(n),
        b = null == g ? void 0 : g.length,
        y = (0, u.Z)(n),
        I = (0, c.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        Z = (0, d.Z)({ location: "useUserProfileModalV2TabBarItems" }),
        O = (0, p.Z)(n.id),
        N = (0, s.S)({ location: "useUserProfileModalV2TabBarItems" }),
        P = (0, a.Z)(n.id),
        T = [],
        A = n.id === (null == t ? void 0 : t.id),
        E = o.Z.getFirstWishlistId(n.id),
        S = null != E,
        C = S ? o.Z.getWishlistSettings(n.id, E) : null,
        _ = (S ? i.Z.getWishlistItems(E) : []).length > 0,
        w = O.length > 0;
    ((A && I) || (w && Z)) &&
        T.push({
            text: j.intl.string(j.t.laViw8),
            section: x.oh.WIDGETS,
            subsection: void 0,
        }),
        T.push({
            text: j.intl.string(j.t.chq59f),
            section: x.oh.ACTIVITY,
            subsection: void 0,
        });
    let D = !1 === n.nsfwAllowed,
        R = r.Z.isFriend(n.id),
        L = (null == C ? void 0 : C.visibility) === l.f.PUBLIC;
    return (
        N &&
            (A || (_ && L && P && (!D || (D && R)))) &&
            T.push({
                text: j.intl.string(j.t["7lZ31N"]),
                section: x.oh.WISHLIST,
                subsection: void 0,
            }),
        n.id !== (null == t ? void 0 : t.id) &&
            y &&
            (T.push({
                text: (0, f.Z)(v),
                section: x.oh.MUTUAL_FRIENDS,
                subsection: void 0,
            }),
            T.push({
                text: (0, h.Z)(b),
                section: x.oh.MUTUAL_GUILDS,
                subsection: void 0,
            })),
        T
    );
}
