n.d(t, { Z: () => h }), n(47120);
var r = n(355467),
    i = n(496929),
    o = n(147913),
    a = n(594174),
    s = n(351402),
    l = n(78839),
    c = n(580130),
    u = n(630388),
    d = n(74538),
    f = n(474936);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class _ extends o.Z {
    constructor(...e) {
        super(...e),
            p(this, 'actions', {
                POST_CONNECTION_OPEN: () => {
                    this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription();
                }
            }),
            p(this, 'maybeFetchSubscriptions', async () => {
                let e = a.default.getCurrentUser();
                if (d.ZP.isPremium(e)) {
                    l.ZP.hasFetchedSubscriptions() || (await (0, r.jg)());
                    let e = l.ZP.getPremiumSubscription();
                    (null == e ? void 0 : e.paymentSourceId) != null || c.Z.applicationIdsFetched.has(f.CL) || (await (0, i.yD)(f.CL));
                }
            }),
            p(this, 'maybeFetchMostRecentSubscription', () => {
                let e = a.default.getCurrentUser();
                null != e && !d.ZP.isPremium(e) && null != e.purchasedFlags && ((0, u.yE)(e.purchasedFlags, f.in.PREMIUM_TIER_1) || (0, u.yE)(e.purchasedFlags, f.in.PREMIUM_TIER_2)) && (0, r.ou)();
            }),
            p(this, 'maybeFetchCountryCode', async () => {
                let e = a.default.getCurrentUser();
                d.ZP.isPremium(e) && !s.Z.ipCountryCodeLoaded && (await this.fetchCountryCode());
            }),
            p(this, 'fetchCountryCode', async () => {
                await (0, r.GE)(), null != s.Z.ipCountryCode && (await (0, r.tZ)());
            });
    }
}
let h = new _();
