"use strict";
n.d(t, { O: () => l });
var r = n(64700),
    i = n(916822),
    s = n.n(i),
    a = n(554352),
    o = n(418034);
function l(e) {
    var t = e.children,
        n = e.innerRef,
        i = r.useContext(a.$$),
        l = r.useCallback(
            function (e) {
                (0, o.cZ)(n, e), (0, o.oV)(i, e);
            },
            [n, i],
        );
    return (
        r.useEffect(function () {
            return function () {
                return (0, o.cZ)(n, null);
            };
        }, []),
        r.useEffect(
            function () {
                s()(!!i, "`Reference` should not be used outside of a `Manager` component.");
            },
            [i],
        ),
        (0, o.vq)(t)({ ref: l })
    );
}
