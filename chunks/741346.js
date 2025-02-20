var r = n(886985),
    i = n(256098),
    o = n(207536),
    a = n(695609),
    s = n(939556),
    l = n(322909),
    c = n(118666);
function u(e, t, n) {
    var u = -1;
    return (
        (t = r(t.length ? t : [c], s(i))),
        a(
            o(e, function (e, n, i) {
                return {
                    criteria: r(t, function (t) {
                        return t(e);
                    }),
                    index: ++u,
                    value: e
                };
            }),
            function (e, t) {
                return l(e, t, n);
            }
        )
    );
}
e.exports = u;
