n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(439372),
    i = n(287809),
    a = n(927578);
n(40185);
var s = n(597758),
    o = n(788868),
    l = n(652215),
    c = n(818348);

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
class d extends r.A {
    async onPostConnectionOpen() {
        (0, s.BE)(), await this.maybeFetchBogoPromotion();
    }
    onSubscriptionUpdated(e) {
        let { subscription: t } = e;
        t.type === c.rz.PREMIUM && (0, s.BE)(!1);
    }
    onOfferUpdated() {
        (0, s.BE)(!1);
    }
    onVCRedeemed(e) {
        let { entitlements: t } = e;
        t.some((e) => e.type === l.zF_.FRACTIONAL_REDEMPTION) && (0, s.BE)(!1);
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
                a.Ay.isPremiumExactly(e, o.PremiumTypes.TIER_2);
            });
    }
}
let f = new d();
