n.d(t, { C: () => l });
var i = n(544891),
    r = n(981631);
let l = async (e, t) =>
    (
        await i.tn.get({
            url: r.ANM.PAYMENT_PAYOUT_GROUPS(e),
            query: t,
            rejectWithError: !1
        })
    ).body;
