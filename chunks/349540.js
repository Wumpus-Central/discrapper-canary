var i = r(47120);
var a = r(147913),
    o = r(594174),
    s = r(74538),
    l = r(163684),
    u = r(748770),
    c = r(474936);
function d(e, n, r) {
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
class f extends a.Z {
    onPostConnectionOpen() {
        this.maybeFetchActiveOutboundPromotions();
    }
    maybeFetchActiveOutboundPromotions() {
        let e = o.default.getCurrentUser(),
            n = s.ZP.isPremiumExactly(e, c.p9.TIER_2),
            r = l.g.getCurrentConfig(
                { location: 'maybeFetchActiveOutboundPromotions' },
                {
                    autoTrackExposure: !1,
                    disable: n
                }
            ).enabled;
        (n || r) && (0, u.vM)();
    }
    constructor(...e) {
        super(...e),
            d(this, 'actions', {
                POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
                EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this)
            });
    }
}
n.Z = new f();
