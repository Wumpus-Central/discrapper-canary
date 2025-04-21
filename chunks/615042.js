n.d(t, { u: () => c });
var i = n(192379),
    r = n(442837),
    s = n(78839),
    l = n(960048),
    a = n(715037),
    o = n(29920);
let c = () => {
    let {
            premiumSubscription: e,
            isEligibleForReward: t,
            isFetchingRewardEligibility: n
        } = (0, r.cj)([s.ZP], () => ({
            premiumSubscription: s.ZP.getPremiumTypeSubscription(),
            isEligibleForReward: s.ZP.getIsSubscriptionEligibleForReward(),
            isFetchingRewardEligibility: s.ZP.getIsFetchingSubscriptionRewardEligibility()
        })),
        { enabled: c } = a.Z.useExperiment({ location: 'useMaybeFetchSubscriptionRewardEligibility' });
    i.useEffect(() => {
        let i = async (e) => {
            try {
                await (0, o.b2)(e);
            } catch (e) {
                l.Z.captureException(e);
            }
        };
        c && null === t && !n && (null == e ? void 0 : e.id) != null && i(e.id);
    }, [c, null == e ? void 0 : e.id, t, n]);
};
