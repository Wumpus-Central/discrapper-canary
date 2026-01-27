n.d(t, {
    V: () => _,
});
var r = n(989349),
    i = n.n(r),
    l = n(311907),
    s = n(554146),
    a = n(826673),
    o = n(166403),
    c = n(635431),
    d = n(49999);
let u = i()("2025-11-10 10:00:00-08:00").toDate(),
    _ = () => {
        let { enabled: e, forceNotice: t } = c.l.useExperiment({
                location: "useShouldShowPriceDecreaseNotice",
            }),
            n = (0, l.bG)([o.A], () => o.A.getPremiumTypeSubscription());
        if (
            (0, a.JZ)(s.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE) ||
            (new Date() < u && !t) ||
            null == n ||
            (null != n.createdAt && n.createdAt > u && !t)
        )
            return !1;
        let r = n.currentPeriodStart,
            i = n.currentPeriodEnd,
            _ = i <= new Date(Date.now() + 12096e5) && i > new Date();
        return r > u
            ? ((0, a.Dr)(s.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
                  dismissAction: d.i.AUTO_DISMISS,
              }),
              !1)
            : !!_ && e;
    };
