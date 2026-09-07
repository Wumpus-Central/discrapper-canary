l.d(e, { A: () => a });
var i = l(777480),
    n = l(17928),
    r = l(107563),
    s = l(994500),
    u = l(321191),
    d = l(570287);
function a(t) {
    let e = (0, d.A)(t.id);
    return (0, n.bG)([u.A, r.A, s.A], () => {
        let l = u.A.getFirstWishlistId(t.id);
        if (null == l) return !1;
        let n = u.A.getWishlistSettings(t.id, l),
            d = n?.visibility === i.a.PUBLIC,
            a = r.A.getWishlistItems(l).length > 0,
            A = !1 === t.nsfwAllowed,
            f = A && s.A.isFriend(t.id);
        return a && d && e && (!A || f);
    }, [t, e]);
}
