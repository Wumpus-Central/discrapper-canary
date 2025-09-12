n.d(t, { d: () => l });
var r = n(647438),
    i = n(442837),
    a = n(538981),
    o = n(654588),
    s = n(266198);
let l = () => {
    var e;
    let t = (0, i.e7)([o.Z], () => o.Z.state);
    return (
        (0, r.useEffect)(() => {
            t.shouldRefetchCampaignEligibility && !t.isFetchingCampaignEligibility && (0, a.f)({ campaignId: s.w_ });
        }, [t.shouldRefetchCampaignEligibility, t.isFetchingCampaignEligibility]),
        {
            isEligible: null != (e = t.isEligibleForCampaign) && e,
            isLoading: t.isFetchingCampaignEligibility,
        }
    );
};
