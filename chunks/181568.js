r.d(t, {
    Z: function () {
        return s;
    }
});
var a = r(665352),
    n = r(37484),
    o = r(94367);
function s(e) {
    if (Array.isArray(e)) return e.map(s);
    if (!e) throw TypeError('Empty color reference');
    (0, n.HD)(e) && (e = (0, o.Z)(e));
    let t = e.space || e.spaceId;
    return !(t instanceof a.Z) && (e.space = a.Z.get(t)), void 0 === e.alpha && (e.alpha = 1), e;
}
