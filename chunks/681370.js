n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(789999),
    i = n(69114),
    a = n(322683),
    s = n(544180),
    o = n(954571),
    l = n(652215);

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

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}

function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = 0.1;

function _(e) {
    if (Math.random() > p) return;
    let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        n = (0, a.O)();
    o.default.track(
        l.HAw.EARNED_DECISION_ROUNDTRIP,
        f(
            u(
                f(u({}, (0, i.A)()), {
                    endpoint: e.endpoint,
                    was_successful: e.wasSuccessful,
                    api_latency_ms: t,
                    mobile_network_type: s.A.getType(),
                }),
                null != n && {
                    mobile_signal_strength_level: n,
                },
            ),
            {
                caller_source: e.callerSource,
                request_id: e.requestId,
                fetched_at: e.fetchedAt,
                is_foregrounded: (0, r.R)(),
            },
        ),
    );
}
class h {
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
                null != t && (_(t), this.pendingRequests.delete(e));
            }, 3e4);
    }
    recordEarnedRequestApiResponse(e, t) {
        let { wasSuccessful: n, requestId: r = null, fetchedAt: i = null } = t,
            a = this.pendingRequests.get(e);
        null != a &&
            (_(
                f(u({}, a), {
                    apiResponseTimestamp: Date.now(),
                    wasSuccessful: n,
                    requestId: r,
                    fetchedAt: i,
                }),
            ),
            this.pendingRequests.delete(e));
    }
    constructor() {
        c(this, "pendingRequests", new Map());
    }
}
let m = new h();
