n.d(t, { Z: () => d }), n(47120);
var i = n(147913),
    r = n(594174),
    a = n(74538),
    s = n(163684),
    o = n(748770),
    l = n(474936);
function u(e, t, n) {
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
class c extends i.Z {
    onPostConnectionOpen() {
        this.maybeFetchActiveOutboundPromotions();
    }
    maybeFetchActiveOutboundPromotions() {
        let e = r.default.getCurrentUser(),
            t = a.ZP.isPremiumExactly(e, l.p9.TIER_2),
            n = s.g.getCurrentConfig(
                { location: 'maybeFetchActiveOutboundPromotions' },
                {
                    autoTrackExposure: !1,
                    disable: t
                }
            ).enabled;
        (t || n) && (0, o.vM)();
    }
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
                EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this)
            });
    }
}
let d = new c();
