var i = r(96403),
    a = r(338752),
    o = r(342545),
    s = r(463374),
    l = i(''.charAt),
    u = i(''.charCodeAt),
    c = i(''.slice),
    d = function (e) {
        return function (n, r) {
            var i,
                d,
                f = o(s(n)),
                p = a(r),
                h = f.length;
            return p < 0 || p >= h ? (e ? '' : void 0) : (i = u(f, p)) < 55296 || i > 56319 || p + 1 === h || (d = u(f, p + 1)) < 56320 || d > 57343 ? (e ? l(f, p) : i) : e ? c(f, p, p + 2) : ((i - 55296) << 10) + (d - 56320) + 65536;
        };
    };
e.exports = {
    codeAt: d(!1),
    charAt: d(!0)
};
