n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(835245),
    i = n(439372),
    a = n(815706),
    s = n(41984),
    o = n(291869),
    l = n(652215);

function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = new Map();
class d extends i.A {
    handleTrackStateChanged(e) {
        o.A.getConfig({
            location: "tracking-manager",
        }).enabled &&
            (e.newState === s.AR.INITIALIZING && u.set(e.pid, (0, r.A)()),
            (0, a.z)(l.HAw.OVERLAY_STATE_CHANGED, {
                new_state: e.newState,
                old_state: e.oldState,
                pid: e.pid,
                init_session_id: u.get(e.pid),
                reason: e.reason,
            }),
            (e.newState === s.AR.OVERLAY_RENDERING ||
                e.newState === s.AR.OVERLAY_DISABLED ||
                e.newState === s.AR.OVERLAY_CRASHED_DISABLED ||
                e.newState === s.AR.OVERLAY_TEARING_DOWN) &&
                u.delete(e.pid));
    }
    handleRunningGamesChange(e) {
        for (let t of e.removed) u.delete(t.pid);
    }
    constructor(...e) {
        super(...e),
            c(this, "actions", {
                OVERLAY_TRACK_STATE_CHANGED: this.handleTrackStateChanged,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
            });
    }
}
let f = new d();
