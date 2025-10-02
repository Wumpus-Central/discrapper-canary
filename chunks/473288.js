n.d(t, { Z: () => l }), n(388685);
var r = n(147913),
    i = n(929677);
function a(e, t, n) {
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
function o(e) {
    i.O.refetch(e.user_id);
}
class s extends r.Z {
    constructor(...e) {
        super(...e),
            a(this, "actions", {
                USER_APPLICATION_IDENTITY_UPDATE: o,
                USER_APPLICATION_IDENTITY_REMOVE: o,
            });
    }
}
let l = new s();
