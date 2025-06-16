n.d(t, { Z: () => b }), n(388685);
var r,
    i = n(108131),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(314897),
    c = n(626135),
    u = n(508825),
    d = n(981631);
function _(e, t, n) {
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
let f = [u.Cm.User],
    p = {
        user: {},
        guild: {}
    },
    h = {},
    m = {};
function g(e) {
    let t = m[e];
    return null == t && ((t = a().v3(e)), (m[e] = t)), t;
}
class E extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(l.default);
    }
    processExperimentsMessage(e) {
        if (null == e) return !1;
        for (let t of f) {
            let n = u.Oz[t],
                r = e.assignments[t];
            if (null == r || null == n) continue;
            let i = p[n];
            for (let e in r) {
                let { evaluation_id: t, assignments: n } = r[e],
                    a = {
                        evaluationId: t,
                        assignments: {}
                    };
                for (let [t, r, o] of ((i[e] = a), n))
                    null != o || (o = 0),
                        (a.assignments[t] = {
                            hashedId: t,
                            variantId: r,
                            isServerOverride: (o & u.V8.IsOverride) != 0
                        });
            }
        }
    }
    registerExperiment(e) {
        h[e.name] = e;
    }
    getAssignment(e, t, n) {
        let r = g(n),
            i = p[e][t];
        if (null != i) return i.assignments[r];
    }
    getEvaluation(e, t) {
        var n;
        return null == (n = p[e][t]) ? void 0 : n.evaluationId;
    }
    getEvaluationAndAssignment(e, t, n) {
        let r = p[e][t];
        return null == r ? [void 0, void 0] : [r.evaluationId, r.assignments[n]];
    }
    trackEvaluationExposure(e, t, n, r) {
        'user' === t &&
            c.default.track(d.rMx.EXPERIMENT_USER_EVALUATION_EXPOSED, {
                evaluation: e,
                experiment: n,
                exposure_location: r,
                unit_type: t
            });
    }
    trackCommonTriggerPointExposures(e) {
        for (let t of this.evaluationIds('user'))
            c.default.track(d.rMx.EXPERIMENT_USER_EVALUATION_EXPOSED, {
                evaluation: t,
                exposure_location: e,
                unit_type: 'user'
            });
    }
    evaluationIds(e) {
        return Object.values(p[e]).map((e) => e.evaluationId);
    }
    resetForTests() {
        p = {
            user: {},
            guild: {}
        };
    }
    constructor() {
        super(
            s.Z,
            {
                CONNECTION_OPEN: (e) => this.processExperimentsMessage(e.apexExperiments),
                CONNECTION_OPEN_STATE_UPDATE: (e) => this.processExperimentsMessage(e.apexExperiments)
            },
            s.c.Early
        ),
            _(this, 'getHash', g);
    }
}
_(E, 'displayName', 'ApexExperimentStore');
let b = new E();
