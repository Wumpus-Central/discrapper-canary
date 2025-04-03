r.d(t, { Z: () => a });
var n = r(835449),
    o = r(571516);
let a = function (e) {
    return (0, n.Z)(function (t, r) {
        var n = -1,
            a = r.length,
            i = a > 1 ? r[a - 1] : void 0,
            l = a > 2 ? r[2] : void 0;
        for (i = e.length > 3 && 'function' == typeof i ? (a--, i) : void 0, l && (0, o.Z)(r[0], r[1], l) && ((i = a < 3 ? void 0 : i), (a = 1)), t = Object(t); ++n < a; ) {
            var s = r[n];
            s && e(t, s, n, i);
        }
        return t;
    });
};
