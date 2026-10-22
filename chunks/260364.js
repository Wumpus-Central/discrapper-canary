n.d(t, { A: () => d });
var i = n(323889),
    r = n(731738),
    a = n(183636),
    s = n(807393),
    l = n(174459),
    o = n(652215);
let d = new (class {
    startTime = null;
    adCreativeId = null;
    adCreativeType = null;
    timeoutTimer = null;
    clearTimeoutTimer() {
        null != this.timeoutTimer && (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    sendMetric(e, t, n, a) {
        Math.random() > 0.1 ||
            (s.A.distribution(
                {
                    name: r.K.QUEST_BAR_RENDER_DELAY,
                    tags: [`ad_creative_id:${e}`, `ad_creative_type:${i.p[t]}`, `timeout:${n}`],
                },
                a,
            ),
            l.default.track(o.HAw.QUEST_BAR_RENDER_DELAY, {
                ad_creative_id: e,
                ad_creative_type: t,
                timeout: n,
                duration: a,
            }));
    }
    startTracking(e, t) {
        (this.clearTracking(),
            (this.startTime = performance.now()),
            (this.adCreativeId = e),
            (this.adCreativeType = t),
            (this.timeoutTimer = setTimeout(() => {
                this.stopTracking(e, !0);
            }, 3e4)));
    }
    stopTracking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null !== this.startTime && this.adCreativeId === e && null !== this.adCreativeType) {
            if ("focused" === a.A.getState()) {
                let n = Math.min(t ? 3e4 : Math.round(performance.now() - this.startTime), 3e4);
                this.sendMetric(e, this.adCreativeType, t, n);
            }
            this.clearTracking();
        }
    }
    clearTracking() {
        (this.clearTimeoutTimer(), (this.startTime = null), (this.adCreativeId = null), (this.adCreativeType = null));
    }
})();
