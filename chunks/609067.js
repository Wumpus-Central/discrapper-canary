r.d(t, {
    Z: function () {
        return o;
    }
});
var a = r(181568),
    n = r(925092);
function o(e, t) {
    (e = (0, a.Z)(e)), (t = (0, a.Z)(t));
    let r = Math.max((0, n.H3)(e), 0),
        o = Math.max((0, n.H3)(t), 0);
    return o > r && ([r, o] = [o, r]), (r + 0.05) / (o + 0.05);
}
