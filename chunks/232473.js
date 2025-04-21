n.d(t, { C: () => l });
var r = n(544891),
    i = n(981631);
let l = async (e, t) =>
    (
        await r.tn.get({
            url: i.ANM.PAYMENT_PAYOUT_GROUPS(e),
            query: t,
            rejectWithError: !1
        })
    ).body;
