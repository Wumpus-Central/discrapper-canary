"use strict";
n.d(t, { A: () => d });
var r = n(731738),
    i = n(183636),
    a = n(831062),
    s = n(954571),
    o = n(652215);
let l = 3e4,
    u = 0.1;
class c {
    startTime = null;
    questId = null;
    timeoutTimer = null;
    clearTimeoutTimer() {
        null != this.timeoutTimer && (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    sendMetric(e, t, n) {
        Math.random() > u ||
            (a.A.distribution({ name: r.K.QUEST_BAR_RENDER_DELAY, tags: [`quest_id:${e}`, `timeout:${t}`] }, n),
            s.default.track(o.HAw.QUEST_BAR_RENDER_DELAY, { quest_id: e, timeout: t, duration: n }));
    }
    startTracking(e) {
        this.clearTracking(),
            (this.startTime = performance.now()),
            (this.questId = e),
            (this.timeoutTimer = setTimeout(() => {
                this.stopTracking(e, !0);
            }, l));
    }
    stopTracking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null !== this.startTime && this.questId === e) {
            if ("focused" === i.A.getState()) {
                let n = Math.min(t ? l : Math.round(performance.now() - this.startTime), l);
                this.sendMetric(e, t, n);
            }
            this.clearTracking();
        }
    }
    clearTracking() {
        this.clearTimeoutTimer(), (this.startTime = null), (this.questId = null);
    }
}
let d = new c();
