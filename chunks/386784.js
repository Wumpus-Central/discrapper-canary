"use strict";
n.d(t, { A: () => o });
var i = n(582128),
    r = n(17928),
    a = n(545868),
    s = n(642133);
let l = {};
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (0, r.bG)([s.A], () => s.A.getRoleMemberCount(e));
    return (
        i.useEffect(() => {
            if (null == e) return;
            let n = l[e];
            (null != n && t > 0 && Date.now() - n < t) || ((l[e] = Date.now()), a.L(e));
        }, [e, t]),
        n
    );
}
