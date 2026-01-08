n.d(t, { Z: () => s }), n(388685);
var r = n(147913),
    i = n(588956);
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
n(468208);
class o extends r.Z {
    constructor(...e) {
        super(...e),
            a(this, "actions", {
                POST_CONNECTION_OPEN: () => (0, i.Z)(),
                BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => (0, i.Z)(!0),
            });
    }
}
let s = new o();
