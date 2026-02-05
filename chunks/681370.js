"use strict";
n.d(t, { A: () => _ });
var r = n(789999),
    i = n(69114),
    a = n(322683),
    s = n(544180),
    o = n(954571),
    l = n(652215);
let u = 0.1;
function c(e) {
    if (Math.random() > u) return;
    let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        n = (0, a.O)();
    o.default.track(l.HAw.EARNED_DECISION_ROUNDTRIP, {
        ...(0, i.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: t,
        mobile_network_type: s.A.getType(),
        ...(null != n && { mobile_signal_strength_level: n }),
        caller_source: e.callerSource,
        request_id: e.requestId,
        fetched_at: e.fetchedAt,
        is_foregrounded: (0, r.R)(),
    });
}
class d {
    pendingRequests = new Map();
    recordEarnedRequestAttempt(e, t) {
        let n = {
            initialSendTimestamp: Date.now(),
            endpoint: "/quests/earned-decision",
            apiResponseTimestamp: null,
            wasSuccessful: !1,
            callerSource: t,
            requestId: null,
            fetchedAt: null,
        };
        this.pendingRequests.set(e, n),
            setTimeout(() => {
                let t = this.pendingRequests.get(e);
                null != t && (c(t), this.pendingRequests.delete(e));
            }, 3e4);
    }
    recordEarnedRequestApiResponse(e, t) {
        let { wasSuccessful: n, requestId: r = null, fetchedAt: i = null } = t,
            a = this.pendingRequests.get(e);
        null != a &&
            (c({ ...a, apiResponseTimestamp: Date.now(), wasSuccessful: n, requestId: r, fetchedAt: i }),
            this.pendingRequests.delete(e));
    }
}
let _ = new d();
