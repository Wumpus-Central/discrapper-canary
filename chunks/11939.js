n.d(t, { h: () => u });
var r = n(582128),
    l = n(702841),
    i = n(123816),
    s = n(277984),
    a = n(176095);
function u() {
    let e = (0, i.t4)((e) => e.getGiftCardWallet()?.id);
    r.useEffect(() => {
        null != e && (0, s.YP)(e);
    }, [e]);
    let t = (0, l.bG)([a.A], () => (null != e ? a.A.getBalance(e) : null), [e]);
    return { giftCardBalance: null != t ? t.amount : null, giftCardCurrency: null != t ? t.currency : null };
}
