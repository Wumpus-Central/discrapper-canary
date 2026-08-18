"use strict";
n.d(t, { A: () => o });
var l = n(582128),
    i = n(17928),
    s = n(545868),
    r = n(642133);
let a = {};
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (0, i.bG)([r.A], () => r.A.getRoleMemberCount(e));
    return (
        l.useEffect(() => {
            if (null == e) return;
            let n = a[e];
            (null != n && t > 0 && Date.now() - n < t) || ((a[e] = Date.now()), s.L(e));
        }, [e, t]),
        n
    );
}
