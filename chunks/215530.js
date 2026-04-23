"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(311907),
    s = n(253932),
    a = n(994500);
function o(e) {
    let t = s.j0.useSetting(),
        { isBlocked: n, isIgnored: o } = (0, i.cf)([a.A], () => ({
            isBlocked: a.A.isBlocked(e),
            isIgnored: a.A.isIgnored(e),
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
