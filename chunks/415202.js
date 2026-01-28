n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(239266),
    i = n(439372),
    a = n(927813),
    o = n(961250),
    s = n(895944),
    l = n(649032);

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
class u extends i.A {
    _initializeProgramRewards() {
        let e = s.A.getRewardForProgram(l.W.NITRO),
            t = null == e ? void 0 : e.next_reward_date;
        null == e || (null != t && (0, r.A)(new Date(t))) ? (0, o.uM)() : (0, o.Ay)(),
            null != this.intervalId && clearInterval(this.intervalId),
            (this.intervalId = setInterval(() => {
                (0, o.Ay)();
            }, a.A.Millis.HOUR));
    }
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0));
    }
    constructor(...e) {
        super(...e),
            c(this, "intervalId", void 0),
            c(this, "actions", {
                POST_CONNECTION_OPEN: () => this._initializeProgramRewards(),
                BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => (0, o.uM)(),
                CURRENT_USER_UPDATE: () => (0, o.uM)(),
                VIRTUAL_CURRENCY_BALANCE_UPDATE: () => (0, o.uM)(),
            });
    }
}
let d = new u();
