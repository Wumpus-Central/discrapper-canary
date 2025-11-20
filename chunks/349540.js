n.d(t, { Z: () => f }), n(388685);
var r = n(147913),
    i = n(594174),
    a = n(74538);
n(367074);
var o = n(748770),
    s = n(474936),
    l = n(981631),
    c = n(231338);
function u(e, t, n) {
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
class d extends r.Z {
    async onPostConnectionOpen() {
        (0, o.Pu)(), await this.maybeFetchBogoPromotion();
    }
    onSubscriptionUpdated(e) {
        let { subscription: t } = e;
        t.type === c.NY.PREMIUM && (0, o.Pu)(!1);
    }
    onOfferUpdated() {
        (0, o.Pu)(!1);
    }
    onVCRedeemed(e) {
        let { entitlements: t } = e;
        t.some((e) => e.type === l.qc2.FRACTIONAL_REDEMPTION) && (0, o.Pu)(!1);
    }
    constructor(...e) {
        super(...e),
            u(this, "actions", {
                POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
                EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this),
                BILLING_SUBSCRIPTION_UPDATE_SUCCESS: this.onSubscriptionUpdated.bind(this),
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: this.onOfferUpdated.bind(this),
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: this.onOfferUpdated.bind(this),
                VIRTUAL_CURRENCY_REDEEM_SUCCESS: this.onVCRedeemed.bind(this),
            }),
            u(this, "maybeFetchBogoPromotion", async () => {
                let e = i.default.getCurrentUser();
                a.ZP.isPremiumExactly(e, s.PremiumTypes.TIER_2);
            });
    }
}
let f = new d();
