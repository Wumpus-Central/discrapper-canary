i.d(e, { A: () => o });
var n = i(777480),
    l = i(17928),
    s = i(107563),
    r = i(994500),
    a = i(321191),
    d = i(570287);
function o(t) {
    let e = (0, d.A)(t.id);
    return (0, l.bG)(
        [a.A, s.A, r.A],
        () => {
            let i = a.A.getFirstWishlistId(t.id);
            if (null == i) return !1;
            let l = a.A.getWishlistSettings(t.id, i),
                d = l?.visibility === n.a.PUBLIC,
                o = s.A.getWishlistItems(i).length > 0,
                u = !1 === t.nsfwAllowed,
                c = u && r.A.isFriend(t.id);
            return o && d && e && (!u || c);
        },
        [t, e],
    );
}
