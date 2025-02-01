var e = r(581031),
    i = r(339718),
    o = Math.floor,
    u = e(''.charAt),
    a = e(''.replace),
    c = e(''.slice),
    s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    f = /\$([$&'`]|\d{1,2})/g;
n.exports = function (n, t, r, e, l, h) {
    var v = r + n.length,
        p = e.length,
        d = f;
    return (
        void 0 !== l && ((l = i(l)), (d = s)),
        a(h, d, function (i, a) {
            var s;
            switch (u(a, 0)) {
                case '$':
                    return '$';
                case '&':
                    return n;
                case '`':
                    return c(t, 0, r);
                case "'":
                    return c(t, v);
                case '<':
                    s = l[c(a, 1, -1)];
                    break;
                default:
                    var f = +a;
                    if (0 === f) return i;
                    if (f > p) {
                        var h = o(f / 10);
                        if (0 === h) return i;
                        if (h <= p) return void 0 === e[h - 1] ? u(a, 1) : e[h - 1] + u(a, 1);
                        return i;
                    }
                    s = e[f - 1];
            }
            return void 0 === s ? '' : s;
        })
    );
};
