n.d(t, { A: () => p }), n(321073);
var i = n(777480),
    s = n(107563),
    l = n(994500),
    a = n(622543),
    r = n(570287),
    d = n(646444),
    o = n(913453),
    c = n(667049),
    u = n(837531),
    A = n(186272),
    x = n(518477),
    m = n(985018);
function p(e) {
    let { user: t, currentUser: n } = e,
        { mutualFriendsCount: p, mutualGuilds: h } = (0, o.A)(t),
        f = h?.length,
        g = (0, d.A)(t),
        I = (0, c.A)(t.id),
        j = (0, r.A)(t.id),
        _ = [],
        N = t.id === n?.id,
        v = a.A.getFirstWishlistId(t.id),
        b = null != v,
        T = b ? a.A.getWishlistSettings(t.id, v) : null,
        E = (b ? s.A.getWishlistItems(v) : []).length > 0,
        y = I.length > 0;
    (N || y) && _.push({ text: m.intl.string(m.t.laViwx), section: x.RP.WIDGETS }),
        _.push({ text: m.intl.string(m.t.chq59f), section: x.RP.ACTIVITY });
    let C = !1 === t.nsfwAllowed,
        P = l.A.isFriend(t.id),
        L = T?.visibility === i.a.PUBLIC;
    return (
        (N || (!N && E && L && j && (!C || (C && P)))) &&
            _.push({ text: m.intl.string(m.t["7lZ31J"]), section: x.RP.WISHLIST }),
        t.id !== n?.id &&
            g &&
            (_.push({ text: (0, u.A)(p), section: x.RP.MUTUAL_FRIENDS }),
            _.push({ text: (0, A.A)(f), section: x.RP.MUTUAL_GUILDS })),
        _
    );
}
