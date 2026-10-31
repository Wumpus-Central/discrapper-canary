n.d(t, { h: () => u });
var l = n(582128),
    r = n(702841),
    i = n(281044),
    a = n(277984),
    s = n(176095);
function u() {
    let e = (0, i.t4)((e) => e.getGiftCardWallet()?.id);
    l.useEffect(() => {
        null != e && (0, a.YP)(e);
    }, [e]);
    let t = (0, r.bG)([s.A], () => (null != e ? s.A.getBalance(e) : null), [e]);
    return { giftCardBalance: null != t ? t.amount : null, giftCardCurrency: null != t ? t.currency : null };
}
