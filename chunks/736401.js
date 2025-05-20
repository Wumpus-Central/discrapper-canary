n.d(t, { Z: () => g }), n(388685);
var r = n(433517),
    i = n(147913),
    o = n(594174),
    a = n(918505),
    s = n(548161),
    l = n(347649),
    c = n(801461);
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
let d = 604800000,
    f = 'lastSawPomelo',
    _ = 'lastSawPomeloMigration';
function p() {
    r.K.set(f, Date.now());
}
function h() {
    if (!a.w8.getCurrentConfig({ location: 'b9eb97_1' }, { autoTrackExposure: !1 }).enabled) return !1;
    let e = o.default.getCurrentUser();
    if (null == e || e.isPomelo() || !e.hasVerifiedEmailOrPhone()) return !1;
    let t = (0, l.ov)() ? _ : f,
        n = r.K.get(t);
    return !(null != n && Date.now() - n < d);
}
class m extends i.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', { POST_CONNECTION_OPEN: () => this.onPostConnectionOpen() }),
            u(this, 'onPostConnectionOpen', () => {
                h() && (0, s.a)(c.Kq.APP_START, !0, !1) && p();
            });
    }
}
let g = new m();
