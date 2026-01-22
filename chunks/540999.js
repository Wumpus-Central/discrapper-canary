n.d(t, { A: () => h }), n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(572009),
    o = n(71393),
    l = n(287809),
    c = n(688151),
    u = n(115093);
function d(e, t, n) {
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
let f = "production" === u.B.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === u.B.STAGING;
function p() {
    f = (0, s.I9)(l.default.getCurrentUser());
}
class _ extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(l.default, o.A),
            Object.defineProperties(this, {
                isDeveloper: {
                    configurable: !1,
                    get: () => f,
                    set: () => {},
                },
            }),
            p(),
            setTimeout(() => Object.freeze(this));
    }
    getExperimentDescriptor() {
        return f
            ? {
                  type: "developer",
                  name: "discord_dev_testing",
                  revision: 1,
                  override: !0,
                  bucket: c.RE.TREATMENT_1,
              }
            : null;
    }
    constructor(...e) {
        super(...e), d(this, "isDeveloper", !1);
    }
}
d(_, "displayName", "DeveloperExperimentStore");
let h = new _(a.h, {
    CONNECTION_OPEN: p,
    OVERLAY_INITIALIZE: p,
    CURRENT_USER_UPDATE: p,
});
