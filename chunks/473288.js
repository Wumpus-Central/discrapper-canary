n.d(t, { Z: () => c }), n(388685);
var r = n(442837),
    i = n(147913),
    a = n(981631);
function o(e, t, n) {
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
function s(e) {
    (0, r.Xf)(a.McO.USER_APPLICATION_IDENTITIES(e.user_id));
}
class l extends i.Z {
    constructor(...e) {
        super(...e),
            o(this, "actions", {
                USER_APPLICATION_IDENTITY_UPDATE: s,
                USER_APPLICATION_IDENTITY_REMOVE: s,
            });
    }
}
let c = new l();
