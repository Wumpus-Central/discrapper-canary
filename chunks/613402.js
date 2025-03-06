n.d(t, { Z: () => c }), n(47120);
var r = n(570140),
    i = n(147913),
    o = n(885110);
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
class s extends i.Z {
    constructor(...e) {
        super(...e), a(this, 'stores', new Map().set(o.Z, l));
    }
}
function l() {
    r.Z.dispatch({
        type: 'SELF_PRESENCE_STORE_UPDATE',
        status: o.Z.getStatus(),
        activities: o.Z.getActivities(!0),
        hiddenActivities: o.Z.getHiddenActivities()
    });
}
let c = new s();
