n.d(t, { W: () => o });
var r = n(73800),
    i = n(153002);
function o(e, t) {
    var n = (0, r.useMemo)(
        function () {
            return new i.e(e, t);
        },
        [t]
    );
    return (
        (0, r.useEffect)(
            function () {
                n.spec = e;
            },
            [e]
        ),
        n
    );
}
