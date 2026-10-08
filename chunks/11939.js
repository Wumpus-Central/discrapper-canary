n.d(t, { N: () => o, h: () => c });
var r = n(582128),
    l = n(702841),
    i = n(642639),
    s = n(202613),
    a = n(277984),
    u = n(176095);
function o(e) {
    return e.find((e) => e.source instanceof s.LQ) ?? null;
}
function c() {
    let e = (0, i.t4)((e) => e.get("checkoutPaymentSources")),
        t = r.useMemo(() => o(e)?.id, [e]);
    r.useEffect(() => {
        null != t && (0, a.YP)(t);
    }, [t]);
    let n = (0, l.bG)([u.A], () => (null != t ? u.A.getBalance(t) : null), [t]);
    return { giftCardBalance: null != n ? n.amount : null, giftCardCurrency: null != n ? n.currency : null };
}
