n.d(t, { Z: () => o });
var r = n(835449),
    i = n(571516);
let o = function (e) {
    return (0, r.Z)(function (t, n) {
        var r = -1,
            o = n.length,
            a = o > 1 ? n[o - 1] : void 0,
            s = o > 2 ? n[2] : void 0;
        for (a = e.length > 3 && 'function' == typeof a ? (o--, a) : void 0, s && (0, i.Z)(n[0], n[1], s) && ((a = o < 3 ? void 0 : a), (o = 1)), t = Object(t); ++r < o; ) {
            var l = n[r];
            l && e(t, l, r, a);
        }
        return t;
    });
};
