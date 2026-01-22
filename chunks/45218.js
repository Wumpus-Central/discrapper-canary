var r = n(587779),
    i = n(876666),
    a = n(89613),
    s = n(617470),
    o = n(517688),
    l = n(560475),
    c = n(93521);
e.exports = function (e, t, n) {
    var u = -1;
    return (
        (t = r(t.length ? t : [c], o(i))),
        s(
            a(e, function (e, n, i) {
                return {
                    criteria: r(t, function (t) {
                        return t(e);
                    }),
                    index: ++u,
                    value: e,
                };
            }),
            function (e, t) {
                return l(e, t, n);
            },
        )
    );
};
