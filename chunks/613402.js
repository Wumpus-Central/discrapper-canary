n.d(t, { Z: () => u }), n(47120);
var i = n(570140),
    r = n(147913),
    a = n(885110);
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
class o extends r.Z {
    constructor(...e) {
        super(...e), s(this, 'stores', new Map().set(a.Z, l));
    }
}
function l() {
    i.Z.dispatch({
        type: 'SELF_PRESENCE_STORE_UPDATE',
        status: a.Z.getStatus(),
        activities: a.Z.getActivities()
    });
}
let u = new o();
