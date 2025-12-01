n.d(t, { Z: () => E }), n(388685);
var r = n(186102),
    i = n(873741),
    a = n(866960),
    o = n(626135),
    s = n(616022),
    l = n(704161),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = 0.1;
function m(e, t) {
    let n = (e) => (null == e ? "null" : null == e.questId ? "no_serve" : "quest"),
        r = n(e),
        i = n(t);
    return "quest" !== r || "quest" !== i
        ? "".concat(r, "_to_").concat(i)
        : (null == e ? void 0 : e.questId) === (null == t ? void 0 : t.questId)
          ? "same_quest"
          : "different_quest";
}
function h(e, t, n) {
    var s, l, u, f;
    if (Math.random() > _) return;
    let m = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        h = (0, i.d)();
    o.default.track(
        c.rMx.QUEST_DECISION_ROUNDTRIP,
        p(
            d(
                p(d({}, (0, r.Z)()), {
                    endpoint: e.endpoint,
                    was_successful: e.wasSuccessful,
                    api_latency_ms: m,
                    mobile_network_type: a.Z.getType(),
                }),
                null != h && { mobile_signal_strength_level: h },
            ),
            {
                caller_source: e.callerSource,
                ad_request_id: e.adRequestId,
                fetched_at: n,
                previous_ad_request_id:
                    null != (u = null == (s = e.previousAdDecision) ? void 0 : s.adRequestId) ? u : null,
                previous_fetched_at: null != (f = null == (l = e.previousAdDecision) ? void 0 : l.fetchedAt) ? f : null,
                transition_case: t,
            },
        ),
    );
}
class g {
    recordQuestRequestAttempt(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            { enableNewRequestBehavior: i } = l.Z.getConfig({ location: "recordQuestRequestAttempt" }),
            a = i && null != r && null != (n = s.Z.questAdDecisionByPlacement.get(r)) ? n : null,
            o = {
                initialSendTimestamp: Date.now(),
                endpoint: e,
                apiResponseTimestamp: null,
                wasSuccessful: !1,
                callerSource: t,
                adRequestId: null,
                previousAdDecision: a,
                placement: r,
            };
        this.pendingRequests.set(e, o),
            setTimeout(() => {
                let t = this.pendingRequests.get(e);
                null != t && (h(t, "timeout", null), this.pendingRequests.delete(e));
            }, 30000);
    }
    recordQuestRequestApiResponse(e, t) {
        let { wasSuccessful: n, adRequestId: r = null, currentQuestId: i = null, currentFetchedAt: a = null } = t,
            o = this.pendingRequests.get(e);
        if (null != o) {
            let t,
                s,
                { enableNewRequestBehavior: c } = l.Z.getConfig({ location: "recordQuestRequestApiResponse" });
            if (c) {
                let e =
                    null !== a
                        ? {
                              questId: i,
                              fetchedAt: a,
                              ttlMillis: 0,
                              adSetId: null,
                              adRequestId: r,
                          }
                        : null;
                (t = m(o.previousAdDecision, e)), (s = a);
            } else (t = "legacy"), (s = null);
            h(
                p(d({}, o), {
                    apiResponseTimestamp: Date.now(),
                    wasSuccessful: n,
                    adRequestId: r,
                }),
                t,
                s,
            ),
                this.pendingRequests.delete(e);
        }
    }
    constructor() {
        u(this, "pendingRequests", new Map());
    }
}
let E = new g();
