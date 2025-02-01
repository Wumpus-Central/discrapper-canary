n.d(t, { Z: () => f }), n(47120);
var i = n(186102),
    r = n(873741),
    a = n(866960),
    s = n(626135),
    o = n(981631);
function l(e, t, n) {
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
let u = 0.1;
function c(e) {
    if (Math.random() > u) return;
    let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        n = (0, r.d)();
    s.default.track(o.rMx.QUEST_DECISION_ROUNDTRIP, {
        ...(0, i.Z)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: t,
        mobile_network_type: a.Z.getType(),
        ...(null != n && { mobile_signal_strength_level: n })
    });
}
class d {
    recordQuestRequestAttempt(e) {
        let t = {
            initialSendTimestamp: Date.now(),
            endpoint: e,
            apiResponseTimestamp: null,
            wasSuccessful: !1
        };
        this.pendingRequests.set(e, t),
            setTimeout(() => {
                let t = this.pendingRequests.get(e);
                null != t && (c(t), this.pendingRequests.delete(e));
            }, 30000);
    }
    recordQuestRequestApiResponse(e, t) {
        let { wasSuccessful: n } = t,
            i = this.pendingRequests.get(e);
        null != i &&
            (c({
                ...i,
                apiResponseTimestamp: Date.now(),
                wasSuccessful: n
            }),
            this.pendingRequests.delete(e));
    }
    constructor() {
        l(this, 'pendingRequests', new Map());
    }
}
let f = new d();
