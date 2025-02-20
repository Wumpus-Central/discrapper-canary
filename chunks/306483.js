var r = n(620014),
    i = n(525425),
    o = n(51431),
    a = n(36572),
    s = n(706627),
    l = n(453342),
    c = n(292065);
function u(e, t, n, d, f) {
    e !== t &&
        o(
            t,
            function (o, l) {
                if ((f || (f = new r()), s(o))) a(e, t, l, n, u, d, f);
                else {
                    var p = d ? d(c(e, l), o, l + '', e, t, f) : void 0;
                    void 0 === p && (p = o), i(e, l, p);
                }
            },
            l
        );
}
e.exports = u;
