var r = a(115560),
    i = a(201779),
    s = a(719718);
function n() {
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
    sessionTimer = n();
    customizationTimer = n();
    initialize(e) {
        let { didPlayerShareDataWithDiscord: t, isForeground: a } = e;
        ((this.sessionId = (0, r.A)()),
            (this.didPlayerShareDataWithDiscord = t),
            (this.stepName = null),
            (this.isForeground = a),
            (this.isStopped = !1),
            (this.sessionTimer = n()),
            (this.customizationTimer = n()),
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
            has_personalized_data: this.didPlayerShareDataWithDiscord && null != s.A.stats,
            checkpoint_availability: s.A.availability,
            checkpoint_compact_assets: s.A.compactAssets,
            time_spent_ms: d(this.sessionTimer),
            customization_time_spent_ms: d(this.customizationTimer),
        };
    }
    updateTimers() {
        let e = !this.isStopped && this.isForeground;
        (c({ timer: this.sessionTimer, isRunning: e }),
            c({ timer: this.customizationTimer, isRunning: e && null != this.stepName && (0, i.Rq)(this.stepName) }));
    }
})();
a.d(t, {}, { A: l });
