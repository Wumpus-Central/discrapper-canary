"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(17928),
    s = n(253932),
    a = n(994500);
function o(e) {
    let t = s.j0.useSetting(),
        { isBlocked: n, isIgnored: o } = (0, r.cf)([a.A], () => ({
            isBlocked: a.A.isBlocked(e),
            isIgnored: a.A.isIgnored(e),
        })),
        [l, d] = (0, i.useState)(n || o);
    return (
        (0, i.useEffect)(() => d(n || o), [n, o]),
        [
            l && !(o && t),
            (0, i.useCallback)(() => {
                d(!1);
            }, []),
        ]
    );
}
