var o = n(15729),
    l = n(877124),
    s = n(731965),
    r = n(433517),
    i = n(710845),
    a = n(626135),
    c = n(630724),
    u = n(981631);
let d = 'UserFlowAnalyticsStore_current',
    m = 'UserFlowAnalyticsStore';
function f(t) {
    if (t === c.MK.UNKNOWN) return null;
    let e = r.K.get(''.concat(m, '-').concat(t));
    if (null == e) return null;
    let { version: n, ...o } = e;
    return 1 !== n ? null : o;
}
new i.Z('UserFlowAnalytics');
let _ = (0, o.U)()(
    (0, l.XR)((t, e) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            var t;
            let n = null !== (t = e().currentFlow) && void 0 !== t ? t : r.K.get(d);
            if (null == n) return null;
            let { [n]: o } = e().flows,
                l = null != o ? o : f(n);
            return (null == l ? void 0 : l.currentStep) != null ? n : null;
        }
    }))
);
function p(t, e) {
    let { [t]: n, ...o } = _.getState().flows,
        l = null != n ? n : f(t);
    if ((null == l ? void 0 : l.currentStep) == null || l.currentStep !== e)
        (0, s.j)(() => {
            _.setState({
                flows: {
                    ...o,
                    [t]: {
                        type: t,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: e,
                        currentTimestamp: new Date(),
                        skipped: !1
                    }
                },
                currentFlow: t
            });
        });
}
function g(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = t;
    if (t === c.MK.ANY) {
        var l;
        o = null !== (l = _.getState().activeFlow()) && void 0 !== l ? l : c.MK.UNKNOWN;
    }
    let { [o]: r, ...i } = _.getState().flows,
        a = null != r ? r : f(o);
    if (null != a && null != a.currentStep && a.currentStep !== e)
        (0, s.j)(() => {
            _.setState({
                flows: {
                    ...i,
                    [o]: {
                        ...a,
                        lastStep: a.currentStep,
                        lastTimestamp: a.currentTimestamp,
                        currentStep: e,
                        currentTimestamp: new Date(),
                        ended: n
                    }
                },
                currentFlow: o
            });
        });
}
_.subscribe(
    (t) => (null != t.currentFlow ? t.flows[t.currentFlow] : void 0),
    (t) => {
        var e;
        if (null != t) {
            if (
                (!(function (t) {
                    if (t.type === c.MK.UNKNOWN) return;
                    let e = ''.concat(m, '-').concat(t.type);
                    t.ended
                        ? (r.K.remove(e), r.K.remove(d))
                        : (r.K.set(''.concat(m, '-').concat(t.type), {
                              ...t,
                              version: 1
                          }),
                          r.K.set(d, t.type));
                })(t),
                a.default.track(
                    u.rMx.NUO_TRANSITION,
                    {
                        flow_type: t.type,
                        from_step: t.lastStep,
                        to_step: t.currentStep,
                        seconds_on_from_step: 'function' != typeof (null === (e = t.lastTimestamp) || void 0 === e ? void 0 : e.getTime) ? 0 : (t.currentTimestamp.getTime() - t.lastTimestamp.getTime()) / 1000
                    },
                    { flush: !0 }
                ),
                t.ended)
            ) {
                let e = { ..._.getState().flows };
                delete e[t.type],
                    (0, s.j)(() => {
                        _.setState({
                            flows: e,
                            currentFlow: null
                        });
                    });
            }
        }
    }
);
function N() {
    return null != _.getState().activeFlow();
}
e.Z = {
    flowStart: p,
    flowStepOrStart: function (t, e) {
        N() ? g(t, e) : p(t, e);
    },
    flowStep: g,
    hasActiveFlow: N
};
