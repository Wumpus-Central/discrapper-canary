n.d(t, { Z: () => d }), n(47120);
var r = n(147913),
    i = n(594174),
    o = n(74538),
    a = n(163684),
    s = n(748770),
    l = n(474936);
function c(e, t, n) {
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
class u extends r.Z {
    onPostConnectionOpen() {
        this.maybeFetchActiveOutboundPromotions();
    }
    maybeFetchActiveOutboundPromotions() {
        let e = i.default.getCurrentUser(),
            t = o.ZP.isPremiumExactly(e, l.p9.TIER_2),
            n = a.g.getCurrentConfig(
                { location: 'maybeFetchActiveOutboundPromotions' },
                {
                    autoTrackExposure: !1,
                    disable: t
                }
            ).enabled;
        (t || n) && (0, s.vM)();
    }
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
                EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this)
            });
    }
}
let d = new u();
