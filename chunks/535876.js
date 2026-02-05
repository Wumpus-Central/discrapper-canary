"use strict";
n.d(t, { A: () => s });
var i = n(846922);
function s(e) {
    let t = (0, i.y)((t) => t.editStateIdsForGroup[e]),
        n = (0, i.y)((e) => e.listings);
    if (null == t) return !1;
    let s = Object.keys(n),
        l = t.every((e) => s.includes(e)),
        r = Object.entries(n)
            .filter((e) => {
                let [n] = e;
                return t?.includes(n);
            })
            .flatMap((e) => null == e[1] || Object.values(e[1]).every((e) => null == e || "" === e));
    return !l || r.includes(!0);
}
