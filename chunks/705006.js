n.d(t, { Z: () => h }), n(47120);
var r = n(186102),
    i = n(873741),
    o = n(866960),
    a = n(626135),
    s = n(981631);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = 0.1;
function _(e) {
    if (Math.random() > f) return;
    let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        n = (0, i.d)();
    a.default.track(
        s.rMx.QUEST_DECISION_ROUNDTRIP,
        c(
            d(c({}, (0, r.Z)()), {
                endpoint: e.endpoint,
                was_successful: e.wasSuccessful,
                api_latency_ms: t,
                mobile_network_type: o.Z.getType()
            }),
            null != n && { mobile_signal_strength_level: n }
        )
    );
}
class p {
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
                null != t && (_(t), this.pendingRequests.delete(e));
            }, 30000);
    }
    recordQuestRequestApiResponse(e, t) {
        let { wasSuccessful: n } = t,
            r = this.pendingRequests.get(e);
        null != r &&
            (_(
                d(c({}, r), {
                    apiResponseTimestamp: Date.now(),
                    wasSuccessful: n
                })
            ),
            this.pendingRequests.delete(e));
    }
    constructor() {
        l(this, 'pendingRequests', new Map());
    }
}
let h = new p();
