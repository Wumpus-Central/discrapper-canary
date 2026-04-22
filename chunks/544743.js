"use strict";
function r(e) {
    let { muted: t, mute_config: n } = e;
    return !!t && (null == n || null == n.end_time || new Date(n.end_time) >= new Date());
}
function i(e) {
    let { muted: t, mute_config: n } = e;
    return !!t && null != n && null != n.end_time && new Date(n.end_time) >= new Date();
}
n.d(t, { Ay: () => s, tG: () => r, wG: () => i });
class s {
    timers;
    constructor() {
        this.timers = {};
    }
    reset() {
        Object.values(this.timers).forEach((e) => clearTimeout(e)), (this.timers = {});
    }
    setTimer(e, t, n) {
        if (null == e || null == t) return !1;
        let r = null == t.end_time ? null : new Date(t.end_time).getTime() - Date.now();
        return null != r && (r <= 0 || ((this.timers[e] = setTimeout(n, Math.max(0, r))), !1));
    }
    clearTimer(e) {
        null != e && e in this.timers && (clearTimeout(this.timers[e]), delete this.timers[e]);
    }
}
