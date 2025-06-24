n.d(t, { Z: () => O });
var r = n(97519),
    i = n(296574),
    l = n(731965),
    a = n(433517),
    o = n(710845),
    s = n(626135),
    c = n(630724),
    u = n(981631);
function d(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function h(e, t) {
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e) {
    var t = (function (e, t) {
        if ('object' !== m(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== m(r)) return r;
            throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' === m(t) ? t : String(t);
}
function m(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let f = 'UserFlowAnalyticsStore_current',
    _ = 'UserFlowAnalyticsStore';
function E(e) {
    if (e === c.MK.UNKNOWN) return null;
    let t = a.K.get(''.concat(_, '-').concat(e));
    if (null == t) return null;
    let { version: n } = t,
        r = p(t, ['version']);
    return 1 !== n ? null : r;
}
new o.Z('UserFlowAnalytics');
let x = (0, r.U)()(
    (0, i.XR)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            var e;
            let n = null != (e = t().currentFlow) ? e : a.K.get(f);
            if (null == n) return null;
            let { [n]: r } = t().flows,
                i = null != r ? r : E(n);
            return (null == i ? void 0 : i.currentStep) != null ? n : null;
        }
    }))
);
function b(e, t) {
    let n = x.getState().flows,
        { [e]: r } = n,
        i = p(n, [e].map(g)),
        a = null != r ? r : E(e);
    ((null == a ? void 0 : a.currentStep) == null || a.currentStep !== t) &&
        (0, l.j)(() => {
            x.setState({
                flows: h(d({}, i), {
                    [e]: {
                        type: e,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: t,
                        currentTimestamp: new Date(),
                        skipped: !1
                    }
                }),
                currentFlow: e
            });
        });
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = e;
    if (e === c.MK.ANY) {
        var i;
        r = null != (i = x.getState().activeFlow()) ? i : c.MK.UNKNOWN;
    }
    let a = x.getState().flows,
        { [r]: o } = a,
        s = p(a, [r].map(g)),
        u = null != o ? o : E(r);
    null != u &&
        null != u.currentStep &&
        u.currentStep !== t &&
        (0, l.j)(() => {
            x.setState({
                flows: h(d({}, s), {
                    [r]: h(d({}, u), {
                        lastStep: u.currentStep,
                        lastTimestamp: u.currentTimestamp,
                        currentStep: t,
                        currentTimestamp: new Date(),
                        ended: n
                    })
                }),
                currentFlow: r
            });
        });
}
function I() {
    return null != x.getState().activeFlow();
}
x.subscribe(
    (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
    (e) => {
        var t;
        if (
            null != e &&
            (!(function (e) {
                if (e.type === c.MK.UNKNOWN) return;
                let t = ''.concat(_, '-').concat(e.type);
                e.ended ? (a.K.remove(t), a.K.remove(f)) : (a.K.set(''.concat(_, '-').concat(e.type), h(d({}, e), { version: 1 })), a.K.set(f, e.type));
            })(e),
            s.default.track(
                u.rMx.NUO_TRANSITION,
                {
                    flow_type: e.type,
                    from_step: e.lastStep,
                    to_step: e.currentStep,
                    seconds_on_from_step: 'function' != typeof (null == (t = e.lastTimestamp) ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1000
                },
                { flush: !0 }
            ),
            e.ended)
        ) {
            let t = d({}, x.getState().flows);
            delete t[e.type],
                (0, l.j)(() => {
                    x.setState({
                        flows: t,
                        currentFlow: null
                    });
                });
        }
    }
);
let O = {
    flowStart: b,
    flowStepOrStart: function (e, t) {
        I() ? v(e, t) : b(e, t);
    },
    flowStep: v,
    hasActiveFlow: I
};
