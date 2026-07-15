var n = r(72408),
    o = r(593206),
    a = r(266944),
    i = r(371817),
    u = r(980320),
    l = r(234820),
    s = r(476615);
e.exports = function e(t, r, p, c, f) {
    t !== r &&
        a(
            r,
            function (a, l) {
                if ((f || (f = new n()), u(a))) i(t, r, l, p, e, c, f);
                else {
                    var d = c ? c(s(t, l), a, l + "", t, r, f) : void 0;
                    void 0 === d && (d = a), o(t, l, d);
                }
            },
            l,
        );
};
