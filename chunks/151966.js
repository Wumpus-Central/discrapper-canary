var n = r(655405),
    o = r(337273),
    a = r(354981),
    i = r(217548),
    l = r(509185),
    s = r(925269),
    u = r(9226);
e.exports = function e(t, r, p, c, f) {
    t !== r &&
        a(
            r,
            function (a, s) {
                if ((f || (f = new n()), l(a))) i(t, r, s, p, e, c, f);
                else {
                    var d = c ? c(u(t, s), a, s + "", t, r, f) : void 0;
                    void 0 === d && (d = a), o(t, s, d);
                }
            },
            s,
        );
};
