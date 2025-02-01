var e = r(581031),
    i = r(959318),
    o = r(714050),
    u = r(676125),
    a = e(''.charAt),
    c = e(''.charCodeAt),
    s = e(''.slice),
    f = function (n) {
        return function (t, r) {
            var e,
                f,
                l = o(u(t)),
                h = i(r),
                v = l.length;
            return h < 0 || h >= v ? (n ? '' : void 0) : (e = c(l, h)) < 55296 || e > 56319 || h + 1 === v || (f = c(l, h + 1)) < 56320 || f > 57343 ? (n ? a(l, h) : e) : n ? s(l, h, h + 2) : ((e - 55296) << 10) + (f - 56320) + 65536;
        };
    };
n.exports = {
    codeAt: f(!1),
    charAt: f(!0)
};
