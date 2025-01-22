var i = r(47120);
var a = r(355467),
    o = r(496929),
    s = r(147913),
    l = r(594174),
    u = r(351402),
    c = r(78839),
    d = r(580130),
    f = r(630388),
    p = r(74538),
    h = r(474936);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class m extends s.Z {
    constructor(...e) {
        super(...e),
            _(this, 'actions', {
                POST_CONNECTION_OPEN: () => {
                    this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription();
                }
            }),
            _(this, 'maybeFetchSubscriptions', async () => {
                let e = l.default.getCurrentUser();
                if (p.ZP.isPremium(e)) {
                    !c.ZP.hasFetchedSubscriptions() && (await (0, a.jg)());
                    let e = c.ZP.getPremiumSubscription();
                    (null == e ? void 0 : e.paymentSourceId) == null && !d.Z.applicationIdsFetched.has(h.CL) && (await (0, o.yD)(h.CL));
                }
            }),
            _(this, 'maybeFetchMostRecentSubscription', () => {
                let e = l.default.getCurrentUser();
                null != e && !p.ZP.isPremium(e) && null != e.purchasedFlags && ((0, f.yE)(e.purchasedFlags, h.in.PREMIUM_TIER_1) || (0, f.yE)(e.purchasedFlags, h.in.PREMIUM_TIER_2)) && (0, a.ou)();
            }),
            _(this, 'maybeFetchCountryCode', async () => {
                let e = l.default.getCurrentUser();
                p.ZP.isPremium(e) && !u.Z.ipCountryCodeLoaded && (await this.fetchCountryCode());
            }),
            _(this, 'fetchCountryCode', async () => {
                await (0, a.GE)(), null != u.Z.ipCountryCode && (await (0, a.tZ)());
            });
    }
}
n.Z = new m();
