var i = r(47120);
var a = r(147913),
    o = r(2818),
    s = r(192720),
    l = r(742989);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function c() {
    if (!!(o.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).enabled || l.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).showReminders)) (0, s.sE)();
}
class d extends a.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() }),
            u(this, 'handlePostConnectionOpen', () => {
                c();
            });
    }
}
n.Z = new d();
