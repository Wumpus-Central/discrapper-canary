n.d(t, { Z: () => a });
var i = n(844511),
    r = n(364555);
let a = function (e, t, n, a) {
    var s = !n;
    n || (n = {});
    for (var o = -1, l = t.length; ++o < l; ) {
        var u = t[o],
            c = a ? a(n[u], e[u], u, n, e) : void 0;
        void 0 === c && (c = e[u]), s ? (0, r.Z)(n, u, c) : (0, i.Z)(n, u, c);
    }
    return n;
};
