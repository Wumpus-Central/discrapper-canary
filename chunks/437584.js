n.d(t, { Z: () => d }), n(388685);
var r = n(147913),
    i = n(594174),
    a = n(70956),
    o = n(111361),
    s = n(588956),
    l = n(468208);
function c(e, t, n) {
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
class u extends r.Z {
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0));
    }
    constructor(...e) {
        super(...e),
            c(this, "intervalId", void 0),
            c(this, "actions", {
                POST_CONNECTION_OPEN: () => {
                    (0, s.Z)(),
                        null != this.intervalId && clearInterval(this.intervalId),
                        (this.intervalId = setInterval(() => {
                            (0, s.Z)();
                        }, a.Z.Millis.HOUR));
                },
                BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => this._handleUserStateUpdate(),
                CURRENT_USER_UPDATE: () => this._handleUserStateUpdate(),
            }),
            c(this, "_handleUserStateUpdate", () => {
                l.Z.isInProperTreatments() && (0, o.I5)(i.default.getCurrentUser()) && (0, s.K)();
            });
    }
}
let d = new u();
