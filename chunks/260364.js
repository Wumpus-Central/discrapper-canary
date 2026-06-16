"use strict";
n.d(t, { A: () => l });
var i = n(731738),
    r = n(183636),
    s = n(807393),
    a = n(174459),
    o = n(652215);
let l = new (class {
    startTime = null;
    questId = null;
    timeoutTimer = null;
    clearTimeoutTimer() {
        null != this.timeoutTimer && (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    sendMetric(e, t, n) {
        Math.random() > 0.1 ||
            (s.A.distribution({ name: i.K.QUEST_BAR_RENDER_DELAY, tags: [`quest_id:${e}`, `timeout:${t}`] }, n),
            a.default.track(o.HAw.QUEST_BAR_RENDER_DELAY, { quest_id: e, timeout: t, duration: n }));
    }
    startTracking(e) {
        this.clearTracking(),
            (this.startTime = performance.now()),
            (this.questId = e),
            (this.timeoutTimer = setTimeout(() => {
                this.stopTracking(e, !0);
            }, 3e4));
    }
    stopTracking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null !== this.startTime && this.questId === e) {
            if ("focused" === r.A.getState()) {
                let n = Math.min(t ? 3e4 : Math.round(performance.now() - this.startTime), 3e4);
                this.sendMetric(e, t, n);
            }
            this.clearTracking();
        }
    }
    clearTracking() {
        this.clearTimeoutTimer(), (this.startTime = null), (this.questId = null);
    }
})();
