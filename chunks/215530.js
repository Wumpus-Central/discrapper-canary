"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(311907),
    a = n(253932),
    s = n(994500);
function o(e) {
    let t = a.j0.useSetting(),
        { isBlocked: n, isIgnored: o } = (0, i.cf)([s.A], () => ({
            isBlocked: s.A.isBlocked(e),
            isIgnored: s.A.isIgnored(e),
        })),
        [l, u] = (0, r.useState)(n || o);
    return (
        (0, r.useEffect)(() => u(n || o), [n, o]),
        [
            l && !(o && t),
            (0, r.useCallback)(() => {
                u(!1);
            }, []),
        ]
    );
}
