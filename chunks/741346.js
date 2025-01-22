var i = r(886985),
    a = r(256098),
    o = r(207536),
    s = r(695609),
    l = r(939556),
    u = r(322909),
    c = r(118666);
function d(e, n, r) {
    var d = -1;
    return (
        (n = i(n.length ? n : [c], l(a))),
        s(
            o(e, function (e, r, a) {
                return {
                    criteria: i(n, function (n) {
                        return n(e);
                    }),
                    index: ++d,
                    value: e
                };
            }),
            function (e, n) {
                return u(e, n, r);
            }
        )
    );
}
e.exports = d;
