n.d(t, { Z: () => h }), n(47120);
var i = n(355467),
    r = n(496929),
    a = n(147913),
    s = n(594174),
    o = n(351402),
    l = n(78839),
    u = n(580130),
    c = n(630388),
    d = n(74538),
    f = n(474936);
function _(e, t, n) {
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
class p extends a.Z {
    constructor(...e) {
        super(...e),
            _(this, 'actions', {
                POST_CONNECTION_OPEN: () => {
                    this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription();
                }
            }),
            _(this, 'maybeFetchSubscriptions', async () => {
                let e = s.default.getCurrentUser();
                if (d.ZP.isPremium(e)) {
                    l.ZP.hasFetchedSubscriptions() || (await (0, i.jg)());
                    let e = l.ZP.getPremiumSubscription();
                    (null == e ? void 0 : e.paymentSourceId) != null || u.Z.applicationIdsFetched.has(f.CL) || (await (0, r.yD)(f.CL));
                }
            }),
            _(this, 'maybeFetchMostRecentSubscription', () => {
                let e = s.default.getCurrentUser();
                null != e && !d.ZP.isPremium(e) && null != e.purchasedFlags && ((0, c.yE)(e.purchasedFlags, f.in.PREMIUM_TIER_1) || (0, c.yE)(e.purchasedFlags, f.in.PREMIUM_TIER_2)) && (0, i.ou)();
            }),
            _(this, 'maybeFetchCountryCode', async () => {
                let e = s.default.getCurrentUser();
                d.ZP.isPremium(e) && !o.Z.ipCountryCodeLoaded && (await this.fetchCountryCode());
            }),
            _(this, 'fetchCountryCode', async () => {
                await (0, i.GE)(), null != o.Z.ipCountryCode && (await (0, i.tZ)());
            });
    }
}
let h = new p();
