e.d(n, { s: () => i });
var r = e(473749),
    o = e(823304);
function i(t, n, e) {
    var i = (0, r.useMemo)(
        function () {
            return new o.O(t, n, e);
        },
        [n, e],
    );
    return (
        (0, r.useEffect)(
            function () {
                i.spec = t;
            },
            [t],
        ),
        i
    );
}
