n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120),
    n(390547);
var i = n(944537);
function r(e) {
    let t = (0, i.n)((t) => t.editStateIdsForGroup[e]),
        n = (0, i.n)((e) => e.listings);
    if (null == t) return !1;
    let r = Object.keys(n),
        l = t.every((e) => r.includes(e)),
        s = Object.entries(n)
            .filter((e) => {
                let [n] = e;
                return null == t ? void 0 : t.includes(n);
            })
            .flatMap((e) => null == e[1] || Object.values(e[1]).every((e) => null == e || '' === e));
    return !l || s.includes(!0);
}
