n.d(t, { Z: () => g });
var l = n(15729),
    i = n(877124),
    s = n(731965),
    a = n(433517),
    r = n(710845),
    o = n(626135),
    c = n(630724),
    d = n(981631);
let u = 'UserFlowAnalyticsStore_current',
    m = 'UserFlowAnalyticsStore';
function x(e) {
    if (e === c.MK.UNKNOWN) return null;
    let t = a.K.get(''.concat(m, '-').concat(e));
    if (null == t) return null;
    let { version: n, ...l } = t;
    return 1 !== n ? null : l;
}
new r.Z('UserFlowAnalytics');
let h = (0, l.U)()(
    (0, i.XR)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            var e;
            let n = null !== (e = t().currentFlow) && void 0 !== e ? e : a.K.get(u);
            if (null == n) return null;
            let { [n]: l } = t().flows,
                i = null != l ? l : x(n);
            return (null == i ? void 0 : i.currentStep) != null ? n : null;
        }
    }))
);
function v(e, t) {
    let { [e]: n, ...l } = h.getState().flows,
        i = null != n ? n : x(e);
    ((null == i ? void 0 : i.currentStep) == null || i.currentStep !== t) &&
        (0, s.j)(() => {
            h.setState({
                flows: {
                    ...l,
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
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = e;
    if (e === c.MK.ANY) {
        var i;
        l = null !== (i = h.getState().activeFlow()) && void 0 !== i ? i : c.MK.UNKNOWN;
    }
    let { [l]: a, ...r } = h.getState().flows,
        o = null != a ? a : x(l);
    null != o &&
        null != o.currentStep &&
        o.currentStep !== t &&
        (0, s.j)(() => {
            h.setState({
                flows: {
                    ...r,
                    [l]: {
                        ...o,
                        lastStep: o.currentStep,
                        lastTimestamp: o.currentTimestamp,
                        currentStep: t,
                        currentTimestamp: new Date(),
                        ended: n
                    }
                },
                currentFlow: l
            });
        });
}
function _() {
    return null != h.getState().activeFlow();
}
h.subscribe(
    (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
    (e) => {
        var t;
        if (
            null != e &&
            (!(function (e) {
                if (e.type === c.MK.UNKNOWN) return;
                let t = ''.concat(m, '-').concat(e.type);
                e.ended
                    ? (a.K.remove(t), a.K.remove(u))
                    : (a.K.set(''.concat(m, '-').concat(e.type), {
                          ...e,
                          version: 1
                      }),
                      a.K.set(u, e.type));
            })(e),
            o.default.track(
                d.rMx.NUO_TRANSITION,
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
            let t = { ...h.getState().flows };
            delete t[e.type],
                (0, s.j)(() => {
                    h.setState({
                        flows: t,
                        currentFlow: null
                    });
                });
        }
    }
);
let g = {
    flowStart: v,
    flowStepOrStart: function (e, t) {
        _() ? N(e, t) : v(e, t);
    },
    flowStep: N,
    hasActiveFlow: _
};
