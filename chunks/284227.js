"use strict";
n.d(t, { A: () => u });
var i = n(132500),
    r = n(439372),
    s = n(815706),
    a = n(41984);
let o = (0, n(945810).mj)({
    kind: "user",
    name: "2025-09-overlay-state-tracking",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var l = n(652215);
let d = new Map();
class _ extends r.A {
    actions = {
        OVERLAY_TRACK_STATE_CHANGED: this.handleTrackStateChanged,
        RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
    };
    handleTrackStateChanged(e) {
        o.getConfig({ location: "tracking-manager" }).enabled &&
            (e.newState === a.AR.INITIALIZING && d.set(e.pid, (0, i.A)()),
            (0, s.z)(l.HAw.OVERLAY_STATE_CHANGED, {
                new_state: e.newState,
                old_state: e.oldState,
                pid: e.pid,
                init_session_id: d.get(e.pid),
                reason: e.reason,
            }),
            (e.newState === a.AR.OVERLAY_RENDERING ||
                e.newState === a.AR.OVERLAY_DISABLED ||
                e.newState === a.AR.OVERLAY_CRASHED_DISABLED ||
                e.newState === a.AR.OVERLAY_TEARING_DOWN) &&
                d.delete(e.pid));
    }
    handleRunningGamesChange(e) {
        for (let t of e.removed) d.delete(t.pid);
    }
}
let u = new _();
