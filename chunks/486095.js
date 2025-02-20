var r = n(96403),
    i = n(338752),
    o = n(342545),
    a = n(463374),
    s = r(''.charAt),
    l = r(''.charCodeAt),
    c = r(''.slice),
    u = function (e) {
        return function (t, n) {
            var r,
                u,
                d = o(a(t)),
                f = i(n),
                p = d.length;
            return f < 0 || f >= p ? (e ? '' : void 0) : (r = l(d, f)) < 55296 || r > 56319 || f + 1 === p || (u = l(d, f + 1)) < 56320 || u > 57343 ? (e ? s(d, f) : r) : e ? c(d, f, f + 2) : ((r - 55296) << 10) + (u - 56320) + 65536;
        };
    };
e.exports = {
    codeAt: u(!1),
    charAt: u(!0)
};
