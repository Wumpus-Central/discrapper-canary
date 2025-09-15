n.d(t, { d: () => c });
var r = n(647438),
    i = n(442837),
    a = n(538981),
    o = n(654588),
    s = n(266198),
    l = n(781110);
let c = () => {
    var e;
    let t = (0, i.e7)([o.Z], () => o.Z.state),
        { enabled: n } = l.X.useConfig({ location: "useIsMarketingCampaignEligible" });
    return (
        (0, r.useEffect)(() => {
            t.shouldRefetchCampaignEligibility &&
                !t.isFetchingCampaignEligibility &&
                n &&
                (0, a.f)({ campaignId: s.w_ });
        }, [t.shouldRefetchCampaignEligibility, t.isFetchingCampaignEligibility, n]),
        {
            isEligible: null != (e = t.isEligibleForCampaign) && e,
            isLoading: t.isFetchingCampaignEligibility,
        }
    );
};
