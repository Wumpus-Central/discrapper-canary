var i = a(115560),
    r = a(719718);
let s = new (class {
    sessionId = null;
    didPlayerShareDataWithDiscord = !1;
    stepName = null;
    initialize(e) {
        ((this.sessionId = (0, i.A)()), (this.didPlayerShareDataWithDiscord = e), (this.stepName = null));
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
            has_personalized_data: this.didPlayerShareDataWithDiscord && null != r.A.stats,
        };
    }
})();
a.d(t, {}, { A: s });
