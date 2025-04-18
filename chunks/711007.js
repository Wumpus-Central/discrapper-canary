n.d(t, { p: () => o });
var r = n(192379),
    i = n(409813),
    a = n(882712);
function o(e, t, n) {
    r.useEffect(() => {
        null != e && e !== i.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === a.I.PENDING ? n(i.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === i.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === a.I.SUCCESS && n(i.h8.REVIEW);
    }, [e, t, n]);
}
