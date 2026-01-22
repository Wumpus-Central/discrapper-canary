n.d(t, {
    V: () => p,
});
var r = n(989349),
    i = n.n(r),
    a = n(311907),
    s = n(554146),
    o = n(826673),
    l = n(166403),
    c = n(635431),
    u = n(49999);
let d = 12096e5,
    f = i()("2025-11-10 10:00:00-08:00").toDate(),
    p = () => {
        let { enabled: e, forceNotice: t } = c.l.useExperiment({
                location: "useShouldShowPriceDecreaseNotice",
            }),
            n = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription());
        if (
            (0, o.JZ)(s.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE) ||
            (new Date() < f && !t) ||
            null == n ||
            (null != n.createdAt && n.createdAt > f && !t)
        )
            return !1;
        let r = n.currentPeriodStart,
            i = n.currentPeriodEnd,
            p = i <= new Date(Date.now() + d) && i > new Date();
        return r > f
            ? ((0, o.Dr)(s.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
                  dismissAction: u.i.AUTO_DISMISS,
              }),
              !1)
            : !!p && e;
    };
