t.d(n, { A: () => f }), t(321073);
var l = t(777480),
    i = t(107563),
    r = t(994500),
    a = t(622543),
    s = t(570287),
    o = t(646444),
    d = t(913453),
    u = t(667049),
    c = t(837531),
    g = t(186272),
    A = t(518477),
    m = t(985018);
function f(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: f, mutualGuilds: p } = (0, d.A)(n),
        x = p?.length,
        h = (0, o.A)(n),
        v = (0, u.A)(n.id),
        j = (0, s.A)(n.id),
        I = [],
        b = n.id === t?.id,
        C = a.A.getFirstWishlistId(n.id),
        N = null != C,
        y = N ? a.A.getWishlistSettings(n.id, C) : null,
        E = (N ? i.A.getWishlistItems(C) : []).length > 0,
        P = v.length > 0;
    (b || P) && I.push({ text: m.intl.string(m.t.laViwx), section: A.RP.WIDGETS }),
        I.push({ text: m.intl.string(m.t.chq59f), section: A.RP.ACTIVITY });
    let R = !1 === n.nsfwAllowed,
        O = r.A.isFriend(n.id),
        T = y?.visibility === l.a.PUBLIC;
    return (
        (b || (!b && E && T && j && (!R || (R && O)))) &&
            I.push({ text: m.intl.string(m.t["7lZ31J"]), section: A.RP.WISHLIST }),
        n.id !== t?.id &&
            h &&
            (I.push({ text: (0, c.A)(f), section: A.RP.MUTUAL_FRIENDS }),
            I.push({ text: (0, g.A)(x), section: A.RP.MUTUAL_GUILDS })),
        I
    );
}
