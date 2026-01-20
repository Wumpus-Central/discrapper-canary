t.d(n, { Z: () => x }), t(539854);
var l = t(370523),
    i = t(607550),
    o = t(699516),
    r = t(621853),
    a = t(837411),
    c = t(585305),
    s = t(806729),
    d = t(517157),
    u = t(708108),
    f = t(146078),
    m = t(228168),
    p = t(388032);
function x(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: x, mutualGuilds: h } = (0, s.Z)(n),
        j = null == h ? void 0 : h.length,
        v = (0, c.Z)(n),
        b = (0, d.Z)(n.id),
        g = (0, a.Z)(n.id),
        I = [],
        y = n.id === (null == t ? void 0 : t.id),
        Z = r.Z.getFirstWishlistId(n.id),
        O = null != Z,
        N = O ? r.Z.getWishlistSettings(n.id, Z) : null,
        T = (O ? i.Z.getWishlistItems(Z) : []).length > 0,
        A = b.length > 0;
    (y || A) &&
        I.push({
            text: p.intl.string(p.t.laViwx),
            section: m.oh.WIDGETS,
        }),
        I.push({
            text: p.intl.string(p.t.chq59f),
            section: m.oh.ACTIVITY,
        });
    let P = !1 === n.nsfwAllowed,
        E = o.Z.isFriend(n.id),
        _ = (null == N ? void 0 : N.visibility) === l.f.PUBLIC;
    return (
        (y || (!y && T && _ && g && (!P || (P && E)))) &&
            I.push({
                text: p.intl.string(p.t["7lZ31J"]),
                section: m.oh.WISHLIST,
            }),
        n.id !== (null == t ? void 0 : t.id) &&
            v &&
            (I.push({
                text: (0, u.Z)(x),
                section: m.oh.MUTUAL_FRIENDS,
            }),
            I.push({
                text: (0, f.Z)(j),
                section: m.oh.MUTUAL_GUILDS,
            })),
        I
    );
}
