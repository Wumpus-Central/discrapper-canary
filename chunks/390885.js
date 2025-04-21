n.d(t, { Z: () => I });
var r = n(290486),
    i = n(291476),
    l = n(731965),
    s = n(433517),
    o = n(710845),
    a = n(626135),
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
function g(e, t) {
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
function p(e) {
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
function x(e) {
    if (e === c.MK.UNKNOWN) return null;
    let t = s.K.get(''.concat(_, '-').concat(e));
    if (null == t) return null;
    let { version: n } = t,
        r = g(t, ['version']);
    return 1 !== n ? null : r;
}
new o.Z('UserFlowAnalytics');
let b = (0, r.U)()(
    (0, i.XR)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            var e;
            let n = null != (e = t().currentFlow) ? e : s.K.get(f);
            if (null == n) return null;
            let { [n]: r } = t().flows,
                i = null != r ? r : x(n);
            return (null == i ? void 0 : i.currentStep) != null ? n : null;
        }
    }))
);
function E(e, t) {
    let n = b.getState().flows,
        { [e]: r } = n,
        i = g(n, [e].map(p)),
        s = null != r ? r : x(e);
    ((null == s ? void 0 : s.currentStep) == null || s.currentStep !== t) &&
        (0, l.j)(() => {
            b.setState({
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
        r = null != (i = b.getState().activeFlow()) ? i : c.MK.UNKNOWN;
    }
    let s = b.getState().flows,
        { [r]: o } = s,
        a = g(s, [r].map(p)),
        u = null != o ? o : x(r);
    null != u &&
        null != u.currentStep &&
        u.currentStep !== t &&
        (0, l.j)(() => {
            b.setState({
                flows: h(d({}, a), {
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
function j() {
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
                let t = ''.concat(_, '-').concat(e.type);
                e.ended ? (s.K.remove(t), s.K.remove(f)) : (s.K.set(''.concat(_, '-').concat(e.type), h(d({}, e), { version: 1 })), s.K.set(f, e.type));
            })(e),
            a.default.track(
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
            let t = d({}, b.getState().flows);
            delete t[e.type],
                (0, l.j)(() => {
                    b.setState({
                        flows: t,
                        currentFlow: null
                    });
                });
        }
    }
);
let I = {
    flowStart: E,
    flowStepOrStart: function (e, t) {
        j() ? v(e, t) : E(e, t);
    },
    flowStep: v,
    hasActiveFlow: j
};
