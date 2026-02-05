"use strict";
n.d(t, { A: () => o });
var r = n(439372),
    i = n(177658),
    a = n(142120);
class s extends r.A {
    actions = {
        EXPERIMENT_OVERRIDE_BUCKET: this.handleCheckExperiments,
        LOGIN_SUCCESS: this.handleCheckExperiments,
        EXPERIMENTS_FETCH_SUCCESS: this.handleCheckExperiments,
        POST_CONNECTION_OPEN: this.handleCheckExperiments,
        CACHE_LOADED: this.handleCheckExperiments,
    };
    handleCheckExperiments() {
        let { enabled: e } = i.P.getCurrentConfig({ location: "gateway" }, { autoTrackExposure: !0 });
        a.A.getSocket().dispatcher.toggleRequestIdleCallback(e);
    }
}
let o = new s();
