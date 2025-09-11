n.d(t, { d: () => l }), n(388685), n(457542);
var r = n(647438),
    i = n(442837),
    a = n(538981),
    o = n(654588),
    s = n(266198);
let l = () => {
    var e;
    let [t, n] = (0, r.useState)(!1),
        l = (0, i.e7)([o.Z], () => o.Z.state);
    return (
        (0, r.useEffect)(() => {
            l.shouldRefetchCampaignEligibility &&
                (n(!0),
                (0, a.f)({ campaignId: s.w_ }).finally(() => {
                    n(!1);
                }));
        }, [l.shouldRefetchCampaignEligibility]),
        {
            isEligible: null != (e = l.isEligibleForCampaign) && e,
            isLoading: t,
        }
    );
};
