n.d(t, { A: () => d });
var i = n(777480),
    l = n(17928),
    s = n(107563),
    r = n(994500),
    a = n(321191),
    o = n(570287);
function d(e) {
    let t = (0, o.A)(e.id);
    return (0, l.bG)([a.A, s.A, r.A], () => {
        let n = a.A.getFirstWishlistId(e.id);
        if (null == n) return !1;
        let l = a.A.getWishlistSettings(e.id, n),
            o = l?.visibility === i.a.PUBLIC,
            d = s.A.getWishlistItems(n).length > 0,
            u = !1 === e.nsfwAllowed,
            c = u && r.A.isFriend(e.id);
        return d && o && t && (!u || c);
    }, [e, t]);
}
