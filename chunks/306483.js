var i = n(620014),
    r = n(525425),
    a = n(51431),
    s = n(36572),
    o = n(706627),
    l = n(453342),
    u = n(292065);
function c(e, t, n, d, f) {
    e !== t &&
        a(
            t,
            function (a, l) {
                if ((f || (f = new i()), o(a))) s(e, t, l, n, c, d, f);
                else {
                    var _ = d ? d(u(e, l), a, l + '', e, t, f) : void 0;
                    void 0 === _ && (_ = a), r(e, l, _);
                }
            },
            l
        );
}
e.exports = c;
