var i = n(96403),
    r = n(338752),
    a = n(342545),
    s = n(463374),
    o = i(''.charAt),
    l = i(''.charCodeAt),
    u = i(''.slice),
    c = function (e) {
        return function (t, n) {
            var i,
                c,
                d = a(s(t)),
                f = r(n),
                _ = d.length;
            return f < 0 || f >= _ ? (e ? '' : void 0) : (i = l(d, f)) < 55296 || i > 56319 || f + 1 === _ || (c = l(d, f + 1)) < 56320 || c > 57343 ? (e ? o(d, f) : i) : e ? u(d, f, f + 2) : ((i - 55296) << 10) + (c - 56320) + 65536;
        };
    };
e.exports = {
    codeAt: c(!1),
    charAt: c(!0)
};
