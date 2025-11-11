n.d(t, { Z: () => f }), n(388685);
var r = n(772848),
    i = n(147913),
    a = n(318885),
    o = n(837268),
    s = n(397156),
    l = n(981631);
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
class d extends i.Z {
    handleTrackStateChanged(e) {
        s.Z.getConfig({ location: "tracking-manager" }).enabled &&
            (e.newState === o.mM.INITIALIZING && u.set(e.pid, (0, r.Z)()),
            (0, a.Q)(l.rMx.OVERLAY_STATE_CHANGED, {
                new_state: e.newState,
                old_state: e.oldState,
                pid: e.pid,
                init_session_id: u.get(e.pid),
            }),
            (e.newState === o.mM.OVERLAY_RENDERING ||
                e.newState === o.mM.OVERLAY_DISABLED ||
                e.newState === o.mM.OVERLAY_CRASHED_DISABLED ||
                e.newState === o.mM.OVERLAY_TEARING_DOWN) &&
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
