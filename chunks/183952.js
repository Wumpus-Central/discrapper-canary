n.d(t, { Z: () => o });
var r = n(844511),
    i = n(364555);
let o = function (e, t, n, o) {
    var a = !n;
    n || (n = {});
    for (var s = -1, l = t.length; ++s < l; ) {
        var c = t[s],
            u = o ? o(n[c], e[c], c, n, e) : void 0;
        void 0 === u && (u = e[c]), a ? (0, i.Z)(n, c, u) : (0, r.Z)(n, c, u);
    }
    return n;
};
