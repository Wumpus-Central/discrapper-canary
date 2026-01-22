var r = n(410323),
    i = n(250594),
    a = Math.floor,
    s = r("".charAt),
    o = r("".replace),
    l = r("".slice),
    c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    u = /\$([$&'`]|\d{1,2})/g;
e.exports = function (e, t, n, r, d, f) {
    var p = n + e.length,
        _ = r.length,
        h = u;
    return (
        void 0 !== d && ((d = i(d)), (h = c)),
        o(f, h, function (i, o) {
            var c;
            switch (s(o, 0)) {
                case "$":
                    return "$";
                case "&":
                    return e;
                case "`":
                    return l(t, 0, n);
                case "'":
                    return l(t, p);
                case "<":
                    c = d[l(o, 1, -1)];
                    break;
                default:
                    var u = +o;
                    if (0 === u) return i;
                    if (u > _) {
                        var f = a(u / 10);
                        if (0 === f) return i;
                        if (f <= _) return void 0 === r[f - 1] ? s(o, 1) : r[f - 1] + s(o, 1);
                        return i;
                    }
                    c = r[u - 1];
            }
            return void 0 === c ? "" : c;
        })
    );
};
