"use strict";
n.d(t, { A: () => f });
var i = n(17928),
    r = n(228366),
    s = n(572009),
    a = n(71393),
    o = n(287809),
    l = n(688151),
    u = n(115093);
let c = "production" === u.B.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === u.B.STAGING;
function d() {
    c = (0, s.I9)(o.default.getCurrentUser());
}
class _ extends i.Ay.Store {
    static displayName = "DeveloperExperimentStore";
    isDeveloper = !1;
    initialize() {
        this.waitFor(o.default, a.A),
            Object.defineProperties(this, { isDeveloper: { configurable: !1, get: () => c, set: () => {} } }),
            d(),
            setTimeout(() => Object.freeze(this));
    }
    getExperimentDescriptor() {
        return c
            ? { type: "developer", name: "discord_dev_testing", revision: 1, override: !0, bucket: l.RE.TREATMENT_1 }
            : null;
    }
}
let f = new _(r.h, { CONNECTION_OPEN: d, OVERLAY_INITIALIZE: d, CURRENT_USER_UPDATE: d });
