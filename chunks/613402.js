n.d(t, { Z: () => c }), n(388685);
var r = n(570140),
    i = n(147913),
    a = n(885110);
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
class s extends i.Z {
    constructor(...e) {
        super(...e), o(this, 'stores', new Map().set(a.Z, l));
    }
}
function l() {
    r.Z.dispatch({
        type: 'SELF_PRESENCE_STORE_UPDATE',
        status: a.Z.getStatus(),
        activities: a.Z.getActivities(!0),
        hiddenActivities: a.Z.getHiddenActivities()
    });
}
let c = new s();
