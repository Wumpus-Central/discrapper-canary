"use strict";
n.d(t, { A: () => h });
var i = n(339048),
    r = n(439372),
    s = n(753390),
    a = n(287809),
    o = n(615405),
    l = n(166403),
    u = n(469778),
    c = n(474090),
    d = n(788868);
class _ extends r.A {
    actions = {
        POST_CONNECTION_OPEN: () => {
            this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription();
        },
    };
    maybeFetchSubscriptions = async () => {
        let e = a.default.getCurrentUser(),
            t = o.A.isSubscriptionFetching;
        if ((0, c.ki)(e)) {
            l.A.hasFetchedSubscriptions() || t || (await (0, s.hP)());
            let e = l.A.getPremiumSubscription();
            e?.paymentSourceId != null || u.A.applicationIdsFetched.has(d.tv) || (await (0, i.LM)(d.tv));
        }
    };
    maybeFetchMostRecentSubscription = () => {
        let e = a.default.getCurrentUser(),
            t = (0, c.cr)(e?.premiumType ?? null, d.PremiumTypes.TIER_1),
            n = l.A.getIsFetchingMostRecentSubscription();
        null != e && t && e.hasHadPremium() && !n && (0, s.I8)();
    };
    maybeFetchCountryCode = async () => {
        let e = a.default.getCurrentUser();
        (0, c.ki)(e) && !o.A.ipCountryCodeLoaded && (await this.fetchCountryCode());
    };
    fetchCountryCode = async () => {
        await (0, s.xe)(), null != o.A.ipCountryCode && (await (0, s.$o)());
    };
}
let h = new _();
