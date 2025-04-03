n.d(t, { u: () => c });
var r = n(192379),
    i = n(442837),
    s = n(78839),
    a = n(960048),
    l = n(715037),
    o = n(29920);
let c = () => {
    let {
            premiumSubscription: e,
            isEligibleForReward: t,
            isFetchingRewardEligibility: n
        } = (0, i.cj)([s.ZP], () => ({
            premiumSubscription: s.ZP.getPremiumTypeSubscription(),
            isEligibleForReward: s.ZP.getIsSubscriptionEligibleForReward(),
            isFetchingRewardEligibility: s.ZP.getIsFetchingSubscriptionRewardEligibility()
        })),
        { enabled: c } = l.Z.useExperiment({ location: 'useMaybeFetchSubscriptionRewardEligibility' });
    r.useEffect(() => {
        let r = async (e) => {
            try {
                await (0, o.b2)(e);
            } catch (e) {
                a.Z.captureException(e);
            }
        };
        c && null === t && !n && (null == e ? void 0 : e.id) != null && r(e.id);
    }, [c, null == e ? void 0 : e.id, t, n]);
};
