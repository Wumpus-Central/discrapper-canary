n.d(t, { Z: () => c }), n(388685);
var r = n(147913),
    i = n(70956),
    a = n(588956),
    o = n(468208);
function s(e, t, n) {
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
class l extends r.Z {
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0));
    }
    constructor(...e) {
        super(...e),
            s(this, "intervalId", void 0),
            s(this, "actions", {
                POST_CONNECTION_OPEN: () => {
                    (0, a.Z)(),
                        null != this.intervalId && clearInterval(this.intervalId),
                        (this.intervalId = setInterval(() => {
                            (0, a.Z)();
                        }, i.Z.Millis.HOUR));
                },
                BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => this._handleUserStateUpdate(),
                CURRENT_USER_UPDATE: () => this._handleUserStateUpdate(),
            }),
            s(this, "_handleUserStateUpdate", () => {
                o.Z.isInProperTreatments() && o.Z.hasNecessaryPremiumSubscriptionStatus() && (0, a.K)();
            });
    }
}
let c = new l();
