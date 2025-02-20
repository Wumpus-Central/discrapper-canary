n.d(t, { Z: () => i }), n(47120), n(13667), n(390547);
var r = n(944537);
function i(e) {
    let t = (0, r.n)((t) => t.editStateIdsForGroup[e]),
        n = (0, r.n)((e) => e.listings);
    if (null == t) return !1;
    let i = Object.keys(n),
        s = t.every((e) => i.includes(e)),
        a = Object.entries(n)
            .filter((e) => {
                let [n] = e;
                return null == t ? void 0 : t.includes(n);
            })
            .flatMap((e) => null == e[1] || Object.values(e[1]).every((e) => null == e || '' === e));
    return !s || a.includes(!0);
}
