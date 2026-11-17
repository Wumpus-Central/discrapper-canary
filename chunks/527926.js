var i = a(115560),
    r = a(201779),
    n = a(719718);
function s() {
    return { completedMs: 0, startedAt: null };
}
function c(e) {
    let { timer: t, isRunning: a } = e;
    a && null == t.startedAt
        ? (t.startedAt = Date.now())
        : a || null == t.startedAt || ((t.completedMs += Date.now() - t.startedAt), (t.startedAt = null));
}
function d(e) {
    return null != e.startedAt ? e.completedMs + Date.now() - e.startedAt : e.completedMs;
}
let l = new (class {
    sessionId = null;
    didPlayerShareDataWithDiscord = !1;
    stepName = null;
    isForeground = !0;
    isStopped = !0;
    sessionTimer = s();
    customizationTimer = s();
    initialize(e) {
        let { didPlayerShareDataWithDiscord: t, isForeground: a } = e;
        ((this.sessionId = (0, i.A)()),
            (this.didPlayerShareDataWithDiscord = t),
            (this.stepName = null),
            (this.isForeground = a),
            (this.isStopped = !1),
            (this.sessionTimer = s()),
            (this.customizationTimer = s()),
            this.updateTimers());
    }
    setStepName(e) {
        ((this.stepName = e), this.updateTimers());
    }
    getStepName() {
        return this.stepName;
    }
    setForeground(e) {
        ((this.isForeground = e), this.updateTimers());
    }
    stop() {
        ((this.isStopped = !0), this.updateTimers());
    }
    getAnalyticsProperties() {
        return {
            checkpoint_session_id: this.sessionId,
            has_personalized_data: this.didPlayerShareDataWithDiscord && null != n.A.stats,
            checkpoint_availability: n.A.availability,
            checkpoint_compact_assets: n.A.compactAssets,
            time_spent_ms: d(this.sessionTimer),
            customization_time_spent_ms: d(this.customizationTimer),
        };
    }
    updateTimers() {
        let e = !this.isStopped && this.isForeground;
        (c({ timer: this.sessionTimer, isRunning: e }),
            c({ timer: this.customizationTimer, isRunning: e && null != this.stepName && (0, r.Rq)(this.stepName) }));
    }
})();
a.d(t, {}, { A: l });
