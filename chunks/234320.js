"use strict";
n.d(t, { N: () => u, h: () => c });
var i = n(64700),
    r = n(702841),
    s = n(426398),
    a = n(202613),
    o = n(753390),
    l = n(176095);
function u(e) {
    return e.find((e) => e.source instanceof a.LQ) ?? null;
}
function c() {
    let e = (0, s.kc)(),
        t = i.useMemo(() => u(e)?.id, [e]);
    i.useEffect(() => {
        null != t && (0, o.YP)(t);
    }, [t]);
    let n = (0, r.bG)([l.A], () => (null != t ? l.A.getBalance(t) : null), [t]);
    return { giftCardBalance: null != n ? n.amount : null, giftCardCurrency: null != n ? n.currency : null };
}
