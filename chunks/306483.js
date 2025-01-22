var i = r(620014),
    a = r(525425),
    o = r(51431),
    s = r(36572),
    l = r(706627),
    u = r(453342),
    c = r(292065);
function d(e, n, r, f, p) {
    if (e !== n)
        o(
            n,
            function (o, u) {
                if ((p || (p = new i()), l(o))) s(e, n, u, r, d, f, p);
                else {
                    var h = f ? f(c(e, u), o, u + '', e, n, p) : void 0;
                    void 0 === h && (h = o), a(e, u, h);
                }
            },
            u
        );
}
e.exports = d;
