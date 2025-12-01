n.d(t, { Z: () => m }), n(388685);
var r = n(433517),
    i = n(147913),
    a = n(594174),
    o = n(918505),
    s = n(548161),
    l = n(801461);
function c(e, t, n) {
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
let u = 604800000,
    d = "lastSawPomelo";
function f() {
    r.K.set(d, Date.now());
}
function p() {
    if (!o.w8.getCurrentConfig({ location: "b9eb97_1" }, { autoTrackExposure: !1 }).enabled) return !1;
    let e = a.default.getCurrentUser();
    if (null == e || e.hasUniqueUsername() || !e.hasVerifiedEmailOrPhone()) return !1;
    let t = d,
        n = r.K.get(t);
    return !(null != n && Date.now() - n < u);
}
class _ extends i.Z {
    constructor(...e) {
        super(...e),
            c(this, "actions", { POST_CONNECTION_OPEN: () => this.onPostConnectionOpen() }),
            c(this, "onPostConnectionOpen", () => {
                p() && (0, s.a)(l.Kq.APP_START, !0, !1) && f();
            });
    }
}
let m = new _();
