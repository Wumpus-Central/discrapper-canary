n.d(t, { A: () => l }), n(896048);
var r = n(439372),
    i = n(177658),
    a = n(142120);
function s(e, t, n) {
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
class o extends r.A {
    handleCheckExperiments() {
        let { enabled: e } = i.P.getCurrentConfig({ location: "gateway" }, { autoTrackExposure: !0 });
        a.A.getSocket().dispatcher.toggleRequestIdleCallback(e);
    }
    constructor(...e) {
        super(...e),
            s(this, "actions", {
                EXPERIMENT_OVERRIDE_BUCKET: this.handleCheckExperiments,
                LOGIN_SUCCESS: this.handleCheckExperiments,
                EXPERIMENTS_FETCH_SUCCESS: this.handleCheckExperiments,
                POST_CONNECTION_OPEN: this.handleCheckExperiments,
                CACHE_LOADED: this.handleCheckExperiments,
            });
    }
}
let l = new o();
