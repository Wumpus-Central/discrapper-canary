n.d(t, { C: () => s });
var r = n(544891),
    i = n(981631);
let s = async (e, t) =>
    (
        await r.tn.get({
            url: i.ANM.PAYMENT_PAYOUT_GROUPS(e),
            query: t,
            rejectWithError: !1
        })
    ).body;
