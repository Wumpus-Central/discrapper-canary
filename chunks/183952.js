var i = r(844511),
    a = r(364555);
function o(e, n, r, o) {
    var s = !r;
    r || (r = {});
    for (var l = -1, u = n.length; ++l < u; ) {
        var c = n[l],
            d = o ? o(r[c], e[c], c, r, e) : void 0;
        void 0 === d && (d = e[c]), s ? (0, a.Z)(r, c, d) : (0, i.Z)(r, c, d);
    }
    return r;
}
n.Z = o;
