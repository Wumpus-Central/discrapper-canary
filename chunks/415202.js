n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(439372),
    i = n(927813),
    a = n(961250),
    s = n(895944);

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
class l extends r.A {
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0));
    }
    constructor(...e) {
        super(...e),
            o(this, "intervalId", void 0),
            o(this, "actions", {
                POST_CONNECTION_OPEN: () => {
                    (0, a.A)(),
                        null != this.intervalId && clearInterval(this.intervalId),
                        (this.intervalId = setInterval(() => {
                            (0, a.A)();
                        }, i.A.Millis.HOUR));
                },
                BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => this._handleUserStateUpdate(),
                CURRENT_USER_UPDATE: () => this._handleUserStateUpdate(),
            }),
            o(this, "_handleUserStateUpdate", () => {
                s.A.isInProperTreatments() && s.A.hasNecessaryPremiumSubscriptionStatus() && (0, a.t)();
            });
    }
}
let c = new l();
