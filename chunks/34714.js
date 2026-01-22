var n = e(675879),
    o = e(918078),
    s = e(57284),
    i = e(693755),
    u = n("".charAt),
    c = n("".charCodeAt),
    a = n("".slice),
    f = function (t) {
        return function (r, e) {
            var n,
                f,
                p = s(i(r)),
                l = o(e),
                v = p.length;
            return l < 0 || l >= v
                ? t
                    ? ""
                    : void 0
                : (n = c(p, l)) < 55296 || n > 56319 || l + 1 === v || (f = c(p, l + 1)) < 56320 || f > 57343
                  ? t
                      ? u(p, l)
                      : n
                  : t
                    ? a(p, l, l + 2)
                    : ((n - 55296) << 10) + (f - 56320) + 65536;
        };
    };
t.exports = {
    codeAt: f(!1),
    charAt: f(!0),
};
