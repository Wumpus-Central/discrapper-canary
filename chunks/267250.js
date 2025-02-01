n.d(t, { Z: () => a });
var i = n(835449),
    r = n(571516);
let a = function (e) {
    return (0, i.Z)(function (t, n) {
        var i = -1,
            a = n.length,
            s = a > 1 ? n[a - 1] : void 0,
            o = a > 2 ? n[2] : void 0;
        for (s = e.length > 3 && 'function' == typeof s ? (a--, s) : void 0, o && (0, r.Z)(n[0], n[1], o) && ((s = a < 3 ? void 0 : s), (a = 1)), t = Object(t); ++i < a; ) {
            var l = n[i];
            l && e(t, l, i, s);
        }
        return t;
    });
};
