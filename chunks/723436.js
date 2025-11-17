e.d(n, { W: () => i });
var r = e(473749),
    o = e(110087);
function i(t, n) {
    var e = (0, r.useMemo)(
        function () {
            return new o.e(t, n);
        },
        [n],
    );
    return (
        (0, r.useEffect)(
            function () {
                e.spec = t;
            },
            [t],
        ),
        e
    );
}
