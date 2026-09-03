n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    a = n(572009),
    s = n(71393),
    l = n(287809),
    o = n(688151),
    d = n(115093);
let c = "production" === d.B.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === d.B.STAGING;
function u() {
    c = (0, a.I9)(l.default.getCurrentUser());
}
class _ extends i.Ay.Store {
    static displayName = "DeveloperExperimentStore";
    initialize() {
        this.waitFor(l.default, s.A),
            Object.defineProperties(this, { isDeveloper: { configurable: !1, get: () => c, set: () => {} } }),
            u(),
            setTimeout(() => Object.freeze(this));
    }
    getExperimentDescriptor() {
        return c
            ? { type: "developer", name: "discord_dev_testing", revision: 1, override: !0, bucket: o.RE.TREATMENT_1 }
            : null;
    }
}
let E = new _(r.h, { CONNECTION_OPEN: u, OVERLAY_INITIALIZE: u, CURRENT_USER_UPDATE: u });
