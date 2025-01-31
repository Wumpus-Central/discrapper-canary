n.d(t, { W: () => o });
var r = n(192379),
    i = n(189909);
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
