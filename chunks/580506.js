n.d(t, { Z: () => u }), n(47120);
var r = n(147913),
    i = n(2818),
    o = n(192720),
    a = n(742989);
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
    (i.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).enabled || a.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).showReminders) && (0, o.sE)();
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
