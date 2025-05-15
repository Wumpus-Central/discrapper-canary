n.d(t, { Z: () => c }), n(388685);
var r = n(147913),
    i = n(2818),
    o = n(192720);
function a(e, t, n) {
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
function s() {
    i.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).enabled && (0, o.sE)();
}
class l extends r.Z {
    constructor(...e) {
        super(...e),
            a(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() }),
            a(this, 'handlePostConnectionOpen', () => {
                s();
            });
    }
}
let c = new l();
