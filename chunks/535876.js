n.d(t, { A: () => l });
var i = n(846922);
function l(e) {
    let t = (0, i.y)((t) => t.editStateIdsForGroup[e]),
        n = (0, i.y)((e) => e.listings);
    if (null == t) return !1;
    let l = Object.keys(n),
        s = t.every((e) => l.includes(e)),
        r = Object.entries(n)
            .filter((e) => {
                let [n] = e;
                return t?.includes(n);
            })
            .flatMap((e) => null == e[1] || Object.values(e[1]).every((e) => null == e || "" === e));
    return !s || r.includes(!0);
}
