l.d(s, {
    m: () => r,
}),
    l(896048),
    l(638769);
var t = l(64700),
    a = l(417597),
    i = l(4227);
let d = (e, s) => {
        let l = s.get(e.skuId);
        return null == l ? 0 : null != l.expiresAt ? 1 : 2;
    },
    r = (e) => {
        let s = (0, a.bG)([i.A], () => i.A.purchases);
        return (0, t.useMemo)(() => [...e].sort((e, l) => d(e, s) - d(l, s)), [e, s]);
    };
