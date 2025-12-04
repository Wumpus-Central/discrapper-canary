s.d(l, { R: () => i }), s(388685), s(642613);
var r = s(473749),
    t = s(399606),
    a = s(1870);
let n = (e, l) => {
        let s = l.get(e.skuId);
        return null == s ? 0 : null != s.expiresAt ? 1 : 2;
    },
    i = (e) => {
        let l = (0, t.e7)([a.Z], () => a.Z.purchases);
        return (0, r.useMemo)(() => [...e].sort((e, s) => n(e, l) - n(s, l)), [e, l]);
    };
