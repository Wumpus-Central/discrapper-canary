var i = n(886985),
    r = n(256098),
    a = n(207536),
    s = n(695609),
    o = n(939556),
    l = n(322909),
    u = n(118666);
function c(e, t, n) {
    var c = -1;
    return (
        (t = i(t.length ? t : [u], o(r))),
        s(
            a(e, function (e, n, r) {
                return {
                    criteria: i(t, function (t) {
                        return t(e);
                    }),
                    index: ++c,
                    value: e
                };
            }),
            function (e, t) {
                return l(e, t, n);
            }
        )
    );
}
e.exports = c;
