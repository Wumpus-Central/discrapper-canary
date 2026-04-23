n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    l = n(572009),
    a = n(71393),
    s = n(287809),
    o = n(688151),
    d = n(115093);
let u = "production" === d.B.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === d.B.STAGING;
function c() {
    u = (0, l.I9)(s.default.getCurrentUser());
}
class h extends i.Ay.Store {
    static displayName = "DeveloperExperimentStore";
    isDeveloper = !1;
    initialize() {
        this.waitFor(s.default, a.A),
            Object.defineProperties(this, { isDeveloper: { configurable: !1, get: () => u, set: () => {} } }),
            c(),
            setTimeout(() => Object.freeze(this));
    }
    getExperimentDescriptor() {
        return u
            ? { type: "developer", name: "discord_dev_testing", revision: 1, override: !0, bucket: o.RE.TREATMENT_1 }
            : null;
    }
}
let E = new h(r.h, { CONNECTION_OPEN: c, OVERLAY_INITIALIZE: c, CURRENT_USER_UPDATE: c });
