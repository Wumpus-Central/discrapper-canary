n.d(e, { A: () => u });
var i = n(777480),
    l = n(17928),
    s = n(107563),
    r = n(994500),
    a = n(321191),
    d = n(570287);
function u(t) {
    let e = (0, d.A)(t.id);
    return (0, l.bG)(
        [a.A, s.A, r.A],
        () => {
            let n = a.A.getFirstWishlistId(t.id);
            if (null == n) return !1;
            let l = a.A.getWishlistSettings(t.id, n),
                d = l?.visibility === i.a.PUBLIC,
                u = s.A.getWishlistItems(n).length > 0,
                o = !1 === t.nsfwAllowed,
                c = o && r.A.isFriend(t.id);
            return u && d && e && (!o || c);
        },
        [t, e],
    );
}
