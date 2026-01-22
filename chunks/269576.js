n.d(t, { b: () => l });
var r = n(562465),
    i = n(652215);
let l = async (e, t) =>
    (
        await r.Bo.get({
            url: i.Rsh.PAYMENT_PAYOUT_GROUPS(e),
            query: t,
            rejectWithError: !1,
        })
    ).body;
