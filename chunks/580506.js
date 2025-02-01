n.d(t, { Z: () => c }), n(47120);
var i = n(147913),
    r = n(2818),
    a = n(192720),
    s = n(742989);
function o(e, t, n) {
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
    (r.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).enabled || s.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).showReminders) && (0, a.sE)();
}
class u extends i.Z {
    constructor(...e) {
        super(...e),
            o(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() }),
            o(this, 'handlePostConnectionOpen', () => {
                l();
            });
    }
}
let c = new u();
