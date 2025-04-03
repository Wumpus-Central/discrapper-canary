n.d(t, { Z: () => I });
var l = n(230383),
    r = n(781930),
    i = n(731965),
    s = n(433517),
    a = n(710845),
    o = n(626135),
    c = n(630724),
    d = n(981631);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        l,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                i = Object.keys(e);
            for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
function x(e) {
    var t = (function (e, t) {
        if ('object' !== h(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var l = n.call(e, t || 'default');
            if ('object' !== h(l)) return l;
            throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' === h(t) ? t : String(t);
}
function h(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let _ = 'UserFlowAnalyticsStore_current',
    g = 'UserFlowAnalyticsStore';
function f(e) {
    if (e === c.MK.UNKNOWN) return null;
    let t = s.K.get(''.concat(g, '-').concat(e));
    if (null == t) return null;
    let { version: n } = t,
        l = N(t, ['version']);
    return 1 !== n ? null : l;
}
new a.Z('UserFlowAnalytics');
let v = (0, l.U)()(
    (0, r.XR)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            var e;
            let n = null != (e = t().currentFlow) ? e : s.K.get(_);
            if (null == n) return null;
            let { [n]: l } = t().flows,
                r = null != l ? l : f(n);
            return (null == r ? void 0 : r.currentStep) != null ? n : null;
        }
    }))
);
function p(e, t) {
    let n = v.getState().flows,
        { [e]: l } = n,
        r = N(n, [e].map(x)),
        s = null != l ? l : f(e);
    ((null == s ? void 0 : s.currentStep) == null || s.currentStep !== t) &&
        (0, i.j)(() => {
            v.setState({
                flows: m(u({}, r), {
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
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = e;
    if (e === c.MK.ANY) {
        var r;
        l = null != (r = v.getState().activeFlow()) ? r : c.MK.UNKNOWN;
    }
    let s = v.getState().flows,
        { [l]: a } = s,
        o = N(s, [l].map(x)),
        d = null != a ? a : f(l);
    null != d &&
        null != d.currentStep &&
        d.currentStep !== t &&
        (0, i.j)(() => {
            v.setState({
                flows: m(u({}, o), {
                    [l]: m(u({}, d), {
                        lastStep: d.currentStep,
                        lastTimestamp: d.currentTimestamp,
                        currentStep: t,
                        currentTimestamp: new Date(),
                        ended: n
                    })
                }),
                currentFlow: l
            });
        });
}
function S() {
    return null != v.getState().activeFlow();
}
v.subscribe(
    (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
    (e) => {
        var t;
        if (
            null != e &&
            (!(function (e) {
                if (e.type === c.MK.UNKNOWN) return;
                let t = ''.concat(g, '-').concat(e.type);
                e.ended ? (s.K.remove(t), s.K.remove(_)) : (s.K.set(''.concat(g, '-').concat(e.type), m(u({}, e), { version: 1 })), s.K.set(_, e.type));
            })(e),
            o.default.track(
                d.rMx.NUO_TRANSITION,
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
            let t = u({}, v.getState().flows);
            delete t[e.type],
                (0, i.j)(() => {
                    v.setState({
                        flows: t,
                        currentFlow: null
                    });
                });
        }
    }
);
let I = {
    flowStart: p,
    flowStepOrStart: function (e, t) {
        S() ? E(e, t) : p(e, t);
    },
    flowStep: E,
    hasActiveFlow: S
};
