var i = n(15729),
    l = n(877124),
    r = n(731965),
    o = n(433517),
    a = n(710845),
    s = n(626135),
    c = n(630724),
    u = n(981631);
let d = 'UserFlowAnalyticsStore_current',
    _ = 'UserFlowAnalyticsStore';
function m(e) {
    if (e === c.MK.UNKNOWN) return null;
    let t = o.K.get(''.concat(_, '-').concat(e));
    if (null == t) return null;
    let { version: n, ...i } = t;
    return 1 !== n ? null : i;
}
new a.Z('UserFlowAnalytics');
let p = (0, i.U)()(
    (0, l.XR)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            var e;
            let n = null !== (e = t().currentFlow) && void 0 !== e ? e : o.K.get(d);
            if (null == n) return null;
            let { [n]: i } = t().flows,
                l = null != i ? i : m(n);
            return (null == l ? void 0 : l.currentStep) != null ? n : null;
        }
    }))
);
function I(e, t) {
    let { [e]: n, ...i } = p.getState().flows,
        l = null != n ? n : m(e);
    if ((null == l ? void 0 : l.currentStep) == null || l.currentStep !== t)
        (0, r.j)(() => {
            p.setState({
                flows: {
                    ...i,
                    [e]: {
                        type: e,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: t,
                        currentTimestamp: new Date(),
                        skipped: !1
                    }
                },
                currentFlow: e
            });
        });
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e;
    if (e === c.MK.ANY) {
        var l;
        i = null !== (l = p.getState().activeFlow()) && void 0 !== l ? l : c.MK.UNKNOWN;
    }
    let { [i]: o, ...a } = p.getState().flows,
        s = null != o ? o : m(i);
    if (null != s && null != s.currentStep && s.currentStep !== t)
        (0, r.j)(() => {
            p.setState({
                flows: {
                    ...a,
                    [i]: {
                        ...s,
                        lastStep: s.currentStep,
                        lastTimestamp: s.currentTimestamp,
                        currentStep: t,
                        currentTimestamp: new Date(),
                        ended: n
                    }
                },
                currentFlow: i
            });
        });
}
p.subscribe(
    (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
    (e) => {
        var t;
        if (null != e) {
            if (
                (!(function (e) {
                    if (e.type === c.MK.UNKNOWN) return;
                    let t = ''.concat(_, '-').concat(e.type);
                    e.ended
                        ? (o.K.remove(t), o.K.remove(d))
                        : (o.K.set(''.concat(_, '-').concat(e.type), {
                              ...e,
                              version: 1
                          }),
                          o.K.set(d, e.type));
                })(e),
                s.default.track(
                    u.rMx.NUO_TRANSITION,
                    {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: 'function' != typeof (null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1000
                    },
                    { flush: !0 }
                ),
                e.ended)
            ) {
                let t = { ...p.getState().flows };
                delete t[e.type],
                    (0, r.j)(() => {
                        p.setState({
                            flows: t,
                            currentFlow: null
                        });
                    });
            }
        }
    }
);
function N() {
    return null != p.getState().activeFlow();
}
t.Z = {
    flowStart: I,
    flowStepOrStart: function (e, t) {
        N() ? f(e, t) : I(e, t);
    },
    flowStep: f,
    hasActiveFlow: N
};
