n.d(t, { s: () => o });
var r = n(192379),
    i = n(738113);
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
