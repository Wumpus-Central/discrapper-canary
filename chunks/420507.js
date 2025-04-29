n.d(t, { s: () => l });
var r = n(73800),
    i = n(820282),
    a = n.n(i),
    o = n(166842),
    s = n(50039);
function l(e) {
    var t = e.children,
        n = e.innerRef,
        i = r.useContext(o.mq),
        l = r.useCallback(
            function (e) {
                (0, s.k$)(n, e), (0, s.DL)(i, e);
            },
            [n, i]
        );
    return (
        r.useEffect(function () {
            return function () {
                return (0, s.k$)(n, null);
            };
        }, []),
        r.useEffect(
            function () {
                a()(!!i, '`Reference` should not be used outside of a `Manager` component.');
            },
            [i]
        ),
        (0, s.$p)(t)({ ref: l })
    );
}
