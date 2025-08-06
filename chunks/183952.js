r.d(t, { Z: () => a });
var n = r(844511),
    o = r(364555);
let a = function (e, t, r, a) {
    var i = !r;
    r || (r = {});
    for (var l = -1, s = t.length; ++l < s; ) {
        var u = t[l],
            c = a ? a(r[u], e[u], u, r, e) : void 0;
        void 0 === c && (c = e[u]), i ? (0, o.Z)(r, u, c) : (0, n.Z)(r, u, c);
    }
    return r;
};
