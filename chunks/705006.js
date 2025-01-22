var i = r(47120);
var a = r(186102),
    o = r(873741),
    s = r(866960),
    l = r(626135),
    u = r(981631);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = 0.1;
function f(e) {
    if (Math.random() > d) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = (0, o.d)();
    l.default.track(u.rMx.QUEST_DECISION_ROUNDTRIP, {
        ...(0, a.Z)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: n,
        mobile_network_type: s.Z.getType(),
        ...(null != r && { mobile_signal_strength_level: r })
    });
}
class p {
    recordQuestRequestAttempt(e) {
        let n = {
            initialSendTimestamp: Date.now(),
            endpoint: e,
            apiResponseTimestamp: null,
            wasSuccessful: !1
        };
        this.pendingRequests.set(e, n),
            setTimeout(() => {
                let n = this.pendingRequests.get(e);
                null != n && (f(n), this.pendingRequests.delete(e));
            }, 30000);
    }
    recordQuestRequestApiResponse(e, n) {
        let { wasSuccessful: r } = n,
            i = this.pendingRequests.get(e);
        null != i &&
            (f({
                ...i,
                apiResponseTimestamp: Date.now(),
                wasSuccessful: r
            }),
            this.pendingRequests.delete(e));
    }
    constructor() {
        c(this, 'pendingRequests', new Map());
    }
}
n.Z = new p();
