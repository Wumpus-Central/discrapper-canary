n.d(t, { Z: () => l }), n(388685);
var r = n(147913),
    i = n(588956),
    a = n(468208);
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
class s extends r.Z {
    constructor(...e) {
        super(...e),
            o(this, "actions", {
                POST_CONNECTION_OPEN: () => (0, i.Z)(),
                BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => {
                    a.Z.isInProperTreatments() && (0, i.K)();
                },
            });
    }
}
let l = new s();
