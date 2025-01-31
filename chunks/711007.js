n.d(t, { p: () => s });
var i = n(192379),
    r = n(409813),
    a = n(882712);
function s(e, t, n) {
    i.useEffect(() => {
        null != e && e !== r.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === a.I.PENDING ? n(r.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === r.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === a.I.SUCCESS && n(r.h8.REVIEW);
    }, [e, t, n]);
}
