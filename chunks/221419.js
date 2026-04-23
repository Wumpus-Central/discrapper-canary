"use strict";
n.d(t, { A: () => d });
var r = n(835245),
    i = n(439372),
    s = n(815706),
    a = n(41984),
    o = n(291869),
    l = n(652215);
let u = new Map();
class c extends i.A {
    actions = {
        OVERLAY_TRACK_STATE_CHANGED: this.handleTrackStateChanged,
        RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
    };
    handleTrackStateChanged(e) {
        o.A.getConfig({ location: "tracking-manager" }).enabled &&
            (e.newState === a.AR.INITIALIZING && u.set(e.pid, (0, r.A)()),
            (0, s.z)(l.HAw.OVERLAY_STATE_CHANGED, {
                new_state: e.newState,
                old_state: e.oldState,
                pid: e.pid,
                init_session_id: u.get(e.pid),
                reason: e.reason,
            }),
            (e.newState === a.AR.OVERLAY_RENDERING ||
                e.newState === a.AR.OVERLAY_DISABLED ||
                e.newState === a.AR.OVERLAY_CRASHED_DISABLED ||
                e.newState === a.AR.OVERLAY_TEARING_DOWN) &&
                u.delete(e.pid));
    }
    handleRunningGamesChange(e) {
        for (let t of e.removed) u.delete(t.pid);
    }
}
let d = new c();
