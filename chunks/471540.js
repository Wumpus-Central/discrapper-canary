var n = r(46015),
    i = r(77826),
    s = r(382698),
    a = r(497464),
    o = n(''.charAt),
    u = n(''.charCodeAt),
    h = n(''.slice),
    c = function (t) {
        return function (e, r) {
            var n,
                c,
                f = s(a(e)),
                l = i(r),
                p = f.length;
            return l < 0 || l >= p ? (t ? '' : void 0) : (n = u(f, l)) < 55296 || n > 56319 || l + 1 === p || (c = u(f, l + 1)) < 56320 || c > 57343 ? (t ? o(f, l) : n) : t ? h(f, l, l + 2) : ((n - 55296) << 10) + (c - 56320) + 65536;
        };
    };
t.exports = {
    codeAt: c(!1),
    charAt: c(!0)
};
