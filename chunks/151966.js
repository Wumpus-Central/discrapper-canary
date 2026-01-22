var n = r(655405),
    o = r(337273),
    a = r(354981),
    i = r(217548),
    l = r(509185),
    s = r(925269),
    u = r(9226);
e.exports = function e(t, r, c, p, d) {
    t !== r &&
        a(
            r,
            function (a, s) {
                if ((d || (d = new n()), l(a))) i(t, r, s, c, e, p, d);
                else {
                    var f = p ? p(u(t, s), a, s + "", t, r, d) : void 0;
                    void 0 === f && (f = a), o(t, s, f);
                }
            },
            s,
        );
};
