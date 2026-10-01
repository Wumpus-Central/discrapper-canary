n.d(e, { A: () => o });
var i = n(777480),
    l = n(17928),
    s = n(107563),
    r = n(994500),
    a = n(321191),
    d = n(570287);
function o(t) {
    let e = (0, d.A)(t.id);
    return (0, l.bG)(
        [a.A, s.A, r.A],
        () => {
            let n = a.A.getFirstWishlistId(t.id);
            if (null == n) return !1;
            let l = a.A.getWishlistSettings(t.id, n),
                d = l?.visibility === i.a.PUBLIC,
                o = s.A.getWishlistItems(n).length > 0,
                u = !1 === t.nsfwAllowed,
                c = u && r.A.isFriend(t.id);
            return o && d && e && (!u || c);
        },
        [t, e],
    );
}
