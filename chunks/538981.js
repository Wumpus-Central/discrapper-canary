n.d(t, { f: () => o });
var r = n(544891),
    i = n(960048),
    a = n(981631);
let o = async (e) => {
    let { campaignId: t } = e;
    try {
        return (
            await r.tn.get({
                url: a.ANM.MARKETING_CAMPAIGN_ELIGIBILITY(t),
                rejectWithError: !1
            })
        ).body.eligibility;
    } catch (e) {
        i.Z.captureException(e);
    }
};
