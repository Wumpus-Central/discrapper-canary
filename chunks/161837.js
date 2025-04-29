n.d(t, { s: () => o });
var r = n(73800),
    i = n(557702);
function o(e, t, n) {
    var o = (0, r.useMemo)(
        function () {
            return new i.O(e, t, n);
        },
        [t, n]
    );
    return (
        (0, r.useEffect)(
            function () {
                o.spec = e;
            },
            [e]
        ),
        o
    );
}
