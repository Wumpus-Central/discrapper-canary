var r = a(115560),
    i = a(719718);
let s = new (class {
    sessionId = null;
    didPlayerShareDataWithDiscord = !1;
    stepName = null;
    initialize(e) {
        ((this.sessionId = (0, r.A)()), (this.didPlayerShareDataWithDiscord = e), (this.stepName = null));
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
            checkpoint_availability: i.A.availability,
            checkpoint_compact_assets: i.A.compactAssets,
        };
    }
})();
a.d(t, {}, { A: s });
