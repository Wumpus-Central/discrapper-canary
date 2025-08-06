t.d(r, { s: () => i });
var e = t(73800),
    o = t(557702);
function i(n, r, t) {
    var i = (0, e.useMemo)(
        function () {
            return new o.O(n, r, t);
        },
        [r, t],
    );
    return (
        (0, e.useEffect)(
            function () {
                i.spec = n;
            },
            [n],
        ),
        i
    );
}
