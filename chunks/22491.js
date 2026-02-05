"use strict";
n.d(t, { A: () => r });
var i = n(64700),
    s = n(599941),
    l = n(386784);
function r(e) {
    let t = (0, s.uP)(e),
        n = (0, l.A)(e);
    return i.useMemo(() => {
        let e = 0;
        for (let i of t) {
            let t = i?.role_id;
            if (null != t) {
                let i = n?.[t];
                null != i && (e += i);
            }
        }
        return e;
    }, [t, n]);
}
