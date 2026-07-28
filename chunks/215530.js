"use strict";
n.d(t, { A: () => l });
var i = n(582128),
    r = n(17928),
    a = n(885386),
    s = n(994500);
function l(e) {
    let t = a.j0.useSetting(),
        { isBlocked: n, isIgnored: l } = (0, r.cf)([s.A], () => ({
            isBlocked: s.A.isBlocked(e),
            isIgnored: s.A.isIgnored(e),
        })),
        [o, d] = (0, i.useState)(n || l);
    return (
        (0, i.useEffect)(() => d(n || l), [n, l]),
        [
            o && !(l && t),
            (0, i.useCallback)(() => {
                d(!1);
            }, []),
        ]
    );
}
