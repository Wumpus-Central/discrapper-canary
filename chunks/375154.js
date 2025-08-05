t.d(r, { W: () => i });
var e = t(73800),
    o = t(153002);
function i(n, r) {
    var t = (0, e.useMemo)(
        function () {
            return new o.e(n, r);
        },
        [r]
    );
    return (
        (0, e.useEffect)(
            function () {
                t.spec = n;
            },
            [n]
        ),
        t
    );
}
