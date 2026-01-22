r.d(t, { A: () => o });
var n = r(64700),
    i = r(988772);
function o(e, t) {
    var r = (0, n.useMemo)(
        function () {
            return new i.r(e, t);
        },
        [t],
    );
    return (
        (0, n.useEffect)(
            function () {
                r.spec = e;
            },
            [e],
        ),
        r
    );
}
