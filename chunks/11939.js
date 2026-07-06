n.d(t, { N: () => u, h: () => c });
var l = n(64700),
    i = n(702841),
    r = n(426398),
    a = n(202613),
    s = n(277984),
    o = n(176095);
function u(e) {
    return e.find((e) => e.source instanceof a.LQ) ?? null;
}
function c() {
    let e = (0, r.kc)(),
        t = l.useMemo(() => u(e)?.id, [e]);
    l.useEffect(() => {
        null != t && (0, s.YP)(t);
    }, [t]);
    let n = (0, i.bG)([o.A], () => (null != t ? o.A.getBalance(t) : null), [t]);
    return { giftCardBalance: null != n ? n.amount : null, giftCardCurrency: null != n ? n.currency : null };
}
