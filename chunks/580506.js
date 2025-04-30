n.d(t, { Z: () => u }), n(388685);
var r = n(147913),
    i = n(2818),
    a = n(192720),
    o = n(742989);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l() {
    (i.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).enabled || o.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).showReminders) && (0, a.sE)();
}
class c extends r.Z {
    constructor(...e) {
        super(...e),
            s(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() }),
            s(this, 'handlePostConnectionOpen', () => {
                l();
            });
    }
}
let u = new c();
