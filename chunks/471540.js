var n = r(46015),
    i = r(77826),
    o = r(382698),
    a = r(497464),
    c = n(''.charAt),
    u = n(''.charCodeAt),
    s = n(''.slice),
    l = function (t) {
        return function (e, r) {
            var n,
                l,
                f = o(a(e)),
                p = i(r),
                v = f.length;
            return p < 0 || p >= v ? (t ? '' : void 0) : (n = u(f, p)) < 55296 || n > 56319 || p + 1 === v || (l = u(f, p + 1)) < 56320 || l > 57343 ? (t ? c(f, p) : n) : t ? s(f, p, p + 2) : ((n - 55296) << 10) + (l - 56320) + 65536;
        };
    };
t.exports = {
    codeAt: l(!1),
    charAt: l(!0)
};
