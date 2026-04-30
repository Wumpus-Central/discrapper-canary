"use strict";
function i(e) {
    let { muted: t, mute_config: n } = e;
    return !!t && (null == n || null == n.end_time || new Date(n.end_time) >= new Date());
}
function r(e) {
    let { muted: t, mute_config: n } = e;
    return !!t && null != n && null != n.end_time && new Date(n.end_time) >= new Date();
}
n.d(t, { Ay: () => s, tG: () => i, wG: () => r });
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
        let i = null == t.end_time ? null : new Date(t.end_time).getTime() - Date.now();
        return null != i && (i <= 0 || ((this.timers[e] = setTimeout(n, Math.max(0, i))), !1));
    }
    clearTimer(e) {
        null != e && e in this.timers && (clearTimeout(this.timers[e]), delete this.timers[e]);
    }
}
