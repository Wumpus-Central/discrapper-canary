n.d(t, { Z: () => E }), n(47120);
var r = n(433517),
    i = n(147913),
    o = n(594174),
    a = n(918505),
    s = n(548161),
    l = n(347649),
    c = n(776319),
    u = n(801461);
function d(e, t, n) {
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
let f = 604800000,
    _ = 'lastSawPomelo',
    p = 'lastSawPomeloMigration';
function h() {
    r.K.set(_, Date.now());
}
function m() {
    if (!a.w8.getCurrentConfig({ location: 'b9eb97_1' }, { autoTrackExposure: !1 }).enabled) return !1;
    let e = o.default.getCurrentUser();
    if (null == e || e.isPomelo() || !e.hasVerifiedEmailOrPhone()) return !1;
    let t = (0, l.ov)() ? p : _,
        n = r.K.get(t);
    return !(null != n && Date.now() - n < f);
}
class g extends i.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', { POST_CONNECTION_OPEN: () => this.onPostConnectionOpen() }),
            d(this, 'onPostConnectionOpen', () => {
                if (m()) {
                    let e = c.Z.getCurrentConfig({ location: 'uu_one_click' }, { autoTrackExposure: !1 }).enabled;
                    (0, s.a)(u.Kq.APP_START, e, !1) && h();
                }
            });
    }
}
let E = new g();
