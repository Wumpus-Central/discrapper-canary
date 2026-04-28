"use strict";
n.d(t, { A: () => o });
var l = n(64700),
    i = n(17928),
    s = n(545868),
    a = n(642133);
let r = {};
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (0, i.bG)([a.A], () => a.A.getRoleMemberCount(e));
    return (
        l.useEffect(() => {
            if (null == e) return;
            let n = r[e];
            (null != n && t > 0 && Date.now() - n < t) || ((r[e] = Date.now()), s.L(e));
        }, [e, t]),
        n
    );
}
