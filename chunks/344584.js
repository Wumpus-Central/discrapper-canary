n.d(t, { A: () => _ }), n(896048);
var r = n(384904),
    i = n(339048),
    a = n(439372),
    s = n(287809),
    o = n(615405),
    l = n(166403),
    c = n(469778),
    u = n(474090),
    d = n(788868);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class p extends a.A {
    constructor(...e) {
        super(...e),
            f(this, "actions", {
                POST_CONNECTION_OPEN: () => {
                    this.maybeFetchSubscriptions(),
                        this.maybeFetchCountryCode(),
                        this.maybeFetchMostRecentSubscription();
                },
            }),
            f(this, "maybeFetchSubscriptions", async () => {
                let e = s.default.getCurrentUser(),
                    t = o.A.isSubscriptionFetching;
                if ((0, u.ki)(e)) {
                    l.A.hasFetchedSubscriptions() || t || (await (0, r.hP)());
                    let e = l.A.getPremiumSubscription();
                    (null == e ? void 0 : e.paymentSourceId) != null ||
                        c.A.applicationIdsFetched.has(d.tv) ||
                        (await (0, i.LM)(d.tv));
                }
            }),
            f(this, "maybeFetchMostRecentSubscription", () => {
                var e;
                let t = s.default.getCurrentUser(),
                    n = (0, u.cr)(null != (e = null == t ? void 0 : t.premiumType) ? e : null, d.PremiumTypes.TIER_1),
                    i = l.A.getIsFetchingMostRecentSubscription();
                null != t && n && t.hasHadPremium() && !i && (0, r.I8)();
            }),
            f(this, "maybeFetchCountryCode", async () => {
                let e = s.default.getCurrentUser();
                (0, u.ki)(e) && !o.A.ipCountryCodeLoaded && (await this.fetchCountryCode());
            }),
            f(this, "fetchCountryCode", async () => {
                await (0, r.xe)(), null != o.A.ipCountryCode && (await (0, r.$o)());
            });
    }
}
let _ = new p();
