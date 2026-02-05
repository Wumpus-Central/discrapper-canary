l.d(s, { m: () => n });
var t = l(64700),
    a = l(417597),
    r = l(4227);
let i = (e, s) => {
        let l = s.get(e.skuId);
        return null == l ? 0 : null != l.expiresAt ? 1 : 2;
    },
    n = (e) => {
        let s = (0, a.bG)([r.A], () => r.A.purchases);
        return (0, t.useMemo)(() => [...e].sort((e, l) => i(e, s) - i(l, s)), [e, s]);
    };
