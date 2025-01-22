r.d(n, {
    p: function () {
        return s;
    }
});
var i = r(192379),
    a = r(409813),
    o = r(882712);
function s(e, n, r) {
    i.useEffect(() => {
        null != e && e !== a.h8.AWAITING_PURCHASE_TOKEN_AUTH && n === o.I.PENDING ? r(a.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === a.h8.AWAITING_PURCHASE_TOKEN_AUTH && n === o.I.SUCCESS && r(a.h8.REVIEW);
    }, [e, n, r]);
}
