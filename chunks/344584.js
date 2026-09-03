n.d(t, { A: () => E });
var i = n(339048),
    r = n(439372),
    a = n(277984),
    s = n(287809),
    l = n(615405),
    o = n(166403),
    d = n(469778),
    c = n(474090),
    u = n(202541);
class _ extends r.A {
    actions = {
        POST_CONNECTION_OPEN: () => {
            this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription();
        },
    };
    maybeFetchSubscriptions = async () => {
        let e = s.default.getCurrentUser(),
            t = l.A.isSubscriptionFetching;
        if ((0, c.ki)(e)) {
            o.A.hasFetchedSubscriptions() || t || (await (0, a.hP)());
            let e = o.A.getPremiumSubscription();
            e?.paymentSourceId != null || d.A.applicationIdsFetched.has(u.tv) || (await (0, i.LM)(u.tv));
        }
    };
    maybeFetchMostRecentSubscription = () => {
        let e = s.default.getCurrentUser(),
            t = (0, c.cr)(e?.premiumType ?? null, u.PremiumTypes.TIER_1),
            n = o.A.getIsFetchingMostRecentSubscription();
        null != e && t && e.hasHadPremium() && !n && (0, a.I8)();
    };
    maybeFetchCountryCode = async () => {
        let e = s.default.getCurrentUser();
        (0, c.ki)(e) && !l.A.ipCountryCodeLoaded && (await this.fetchCountryCode());
    };
    fetchCountryCode = async () => {
        await (0, a.xe)(), null != l.A.ipCountryCode && (await (0, a.$o)());
    };
}
let E = new _();
