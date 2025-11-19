n.d(t, { Z: () => N });
var r = n(663042),
    l = n(690775),
    o = n(731965),
    a = n(433517),
    i = n(710845),
    u = n(626135),
    c = n(630724),
    s = n(981631);
function f(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
function _(e) {
    var t = (function (e, t) {
        if ("object" !== E(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== E(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" === E(t) ? t : String(t);
}
function E(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
let m = "UserFlowAnalyticsStore_current",
    A = "UserFlowAnalyticsStore";
function y(e) {
    if (e === c.MK.UNKNOWN) return null;
    let t = a.K.get("".concat(A, "-").concat(e));
    if (null == t) return null;
    let { version: n } = t,
        r = d(t, ["version"]);
    return 1 !== n ? null : r;
}
new i.Z("UserFlowAnalytics");
let b = (0, r.U)()(
    (0, l.XR)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            var e;
            let n = null != (e = t().currentFlow) ? e : a.K.get(m);
            if (null == n) return null;
            let { [n]: r } = t().flows,
                l = null != r ? r : y(n);
            return (null == l ? void 0 : l.currentStep) != null ? n : null;
        },
    })),
);
function g(e, t) {
    let n = b.getState().flows,
        { [e]: r } = n,
        l = d(n, [e].map(_)),
        a = null != r ? r : y(e);
    ((null == a ? void 0 : a.currentStep) == null || a.currentStep !== t) &&
        (0, o.j)(() => {
            b.setState({
                flows: p(f({}, l), {
                    [e]: {
                        type: e,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: t,
                        currentTimestamp: new Date(),
                        skipped: !1,
                    },
                }),
                currentFlow: e,
            });
        });
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = e;
    if (e === c.MK.ANY) {
        var l;
        r = null != (l = b.getState().activeFlow()) ? l : c.MK.UNKNOWN;
    }
    let a = b.getState().flows,
        { [r]: i } = a,
        u = d(a, [r].map(_)),
        s = null != i ? i : y(r);
    null != s &&
        null != s.currentStep &&
        s.currentStep !== t &&
        (0, o.j)(() => {
            b.setState({
                flows: p(f({}, u), {
                    [r]: p(f({}, s), {
                        lastStep: s.currentStep,
                        lastTimestamp: s.currentTimestamp,
                        currentStep: t,
                        currentTimestamp: new Date(),
                        ended: n,
                    }),
                }),
                currentFlow: r,
            });
        });
}
function O() {
    return null != b.getState().activeFlow();
}
b.subscribe(
    (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
    (e) => {
        var t;
        if (
            null != e &&
            (!(function (e) {
                if (e.type === c.MK.UNKNOWN) return;
                let t = "".concat(A, "-").concat(e.type);
                e.ended
                    ? (a.K.remove(t), a.K.remove(m))
                    : (a.K.set("".concat(A, "-").concat(e.type), p(f({}, e), { version: 1 })), a.K.set(m, e.type));
            })(e),
            u.default.track(
                s.rMx.NUO_TRANSITION,
                {
                    flow_type: e.type,
                    from_step: e.lastStep,
                    to_step: e.currentStep,
                    seconds_on_from_step:
                        "function" != typeof (null == (t = e.lastTimestamp) ? void 0 : t.getTime)
                            ? 0
                            : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1000,
                },
                { flush: !0 },
            ),
            e.ended)
        ) {
            let t = f({}, b.getState().flows);
            delete t[e.type],
                (0, o.j)(() => {
                    b.setState({
                        flows: t,
                        currentFlow: null,
                    });
                });
        }
    },
);
let N = {
    flowStart: g,
    flowStepOrStart: function (e, t) {
        O() ? T(e, t) : g(e, t);
    },
    flowStep: T,
    hasActiveFlow: O,
};
