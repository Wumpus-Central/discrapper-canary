"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(17928),
    s = n(545868),
    a = n(642133);
let o = {};
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (0, r.bG)([a.A], () => a.A.getRoleMemberCount(e));
    return (
        i.useEffect(() => {
            if (null == e) return;
            let n = o[e];
            (null != n && t > 0 && Date.now() - n < t) || ((o[e] = Date.now()), s.L(e));
        }, [e, t]),
        n
    );
}
