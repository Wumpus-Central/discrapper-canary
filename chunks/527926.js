a.d(t, { A: () => r });
var s = a(132500),
    i = a(719718);
let r = new (class {
    sessionId = null;
    didPlayerShareDataWithDiscord = !1;
    stepName = null;
    initialize(e) {
        ((this.sessionId = (0, s.A)()), (this.didPlayerShareDataWithDiscord = e), (this.stepName = null));
    }
    setStepName(e) {
        this.stepName = e;
    }
    getStepName() {
        return this.stepName;
    }
    getAnalyticsProperties() {
        return {
            checkpoint_session_id: this.sessionId,
            has_personalized_data: this.didPlayerShareDataWithDiscord && null != i.A.stats,
        };
    }
})();
