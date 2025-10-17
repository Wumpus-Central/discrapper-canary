n.d(t, { Z: () => f }), n(388685);
var r = n(147913),
    i = n(594174),
    a = n(74538);
n(367074);
var o = n(163684),
    s = n(312973),
    l = n(748770),
    c = n(474936);
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
        this.maybeFetchActiveOutboundPromotions(), await this.maybeFetchBogoPromotion();
    }
    maybeFetchActiveOutboundPromotions() {
        let e = i.default.getCurrentUser(),
            t = a.ZP.isPremiumExactly(e, c.PremiumTypes.TIER_2),
            n = (0, s.$)({ location: "maybeFetchActiveOutboundPromotions" }),
            r = o.g.getCurrentConfig(
                { location: "maybeFetchActiveOutboundPromotions" },
                {
                    autoTrackExposure: !1,
                    disable: t,
                },
            ).enabled;
        (n || t || r) && (0, l.vM)();
    }
    constructor(...e) {
        super(...e),
            u(this, "actions", {
                POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
                EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this),
            }),
            u(this, "maybeFetchBogoPromotion", async () => {
                let e = i.default.getCurrentUser();
                a.ZP.isPremiumExactly(e, c.PremiumTypes.TIER_2);
            });
    }
}
let f = new d();
