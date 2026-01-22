t.d(l, {
    A: () => x,
}),
    t(321073);
var n = t(777480),
    i = t(107563),
    r = t(994500),
    s = t(622543),
    a = t(570287),
    o = t(646444),
    d = t(913453),
    c = t(667049),
    u = t(837531),
    f = t(186272),
    p = t(518477),
    m = t(985018);

function x(e) {
    let { user: l, currentUser: t } = e,
        { mutualFriendsCount: x, mutualGuilds: A } = (0, d.A)(l),
        j = null == A ? void 0 : A.length,
        h = (0, o.A)(l),
        g = (0, c.A)(l.id),
        v = (0, a.A)(l.id),
        b = [],
        I = l.id === (null == t ? void 0 : t.id),
        y = s.A.getFirstWishlistId(l.id),
        O = null != y,
        N = O ? s.A.getWishlistSettings(l.id, y) : null,
        E = (O ? i.A.getWishlistItems(y) : []).length > 0,
        _ = g.length > 0;
    (I || _) &&
        b.push({
            text: m.intl.string(m.t.laViwx),
            section: p.RP.WIDGETS,
        }),
        b.push({
            text: m.intl.string(m.t.chq59f),
            section: p.RP.ACTIVITY,
        });
    let T = !1 === l.nsfwAllowed,
        P = r.A.isFriend(l.id),
        S = (null == N ? void 0 : N.visibility) === n.a.PUBLIC;
    return (
        (I || (!I && E && S && v && (!T || (T && P)))) &&
            b.push({
                text: m.intl.string(m.t["7lZ31J"]),
                section: p.RP.WISHLIST,
            }),
        l.id !== (null == t ? void 0 : t.id) &&
            h &&
            (b.push({
                text: (0, u.A)(x),
                section: p.RP.MUTUAL_FRIENDS,
            }),
            b.push({
                text: (0, f.A)(j),
                section: p.RP.MUTUAL_GUILDS,
            })),
        b
    );
}
