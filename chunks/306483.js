var n = r(620014),
    o = r(525425),
    a = r(51431),
    i = r(36572),
    l = r(706627),
    s = r(453342),
    u = r(292065);
e.exports = function e(t, r, c, p, f) {
    t !== r &&
        a(
            r,
            function (a, s) {
                if ((f || (f = new n()), l(a))) i(t, r, s, c, e, p, f);
                else {
                    var d = p ? p(u(t, s), a, s + '', t, r, f) : void 0;
                    void 0 === d && (d = a), o(t, s, d);
                }
            },
            s
        );
};
