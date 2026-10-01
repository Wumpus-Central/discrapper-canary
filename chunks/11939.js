n.d(t, { N: () => c, h: () => o });
var l = n(582128),
    r = n(702841),
    i = n(263532),
    s = n(202613),
    a = n(277984),
    u = n(176095);
function c(e) {
    return e.find((e) => e.source instanceof s.LQ) ?? null;
}
function o() {
    let e = (0, i.t4)((e) => e.get("checkoutPaymentSources")),
        t = l.useMemo(() => c(e)?.id, [e]);
    l.useEffect(() => {
        null != t && (0, a.YP)(t);
    }, [t]);
    let n = (0, r.bG)([u.A], () => (null != t ? u.A.getBalance(t) : null), [t]);
    return { giftCardBalance: null != n ? n.amount : null, giftCardCurrency: null != n ? n.currency : null };
}
