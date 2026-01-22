n.d(t, { A: () => i }), n(896048), n(114821), n(339614);
var r = n(846922);
function i(e) {
    let t = (0, r.y)((t) => t.editStateIdsForGroup[e]),
        n = (0, r.y)((e) => e.listings);
    if (null == t) return !1;
    let i = Object.keys(n),
        l = t.every((e) => i.includes(e)),
        s = Object.entries(n)
            .filter((e) => {
                let [n] = e;
                return null == t ? void 0 : t.includes(n);
            })
            .flatMap((e) => null == e[1] || Object.values(e[1]).every((e) => null == e || "" === e));
    return !l || s.includes(!0);
}
