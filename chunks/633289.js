n(388685);
var r,
    i = n(108131),
    l = n.n(i),
    a = n(442837),
    o = n(570140),
    s = n(314897),
    c = n(626135),
    u = n(508825),
    d = n(981631);
function p(e, t, n) {
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
let h = [u.Cm.User],
    f = {
        user: {},
        guild: {}
    },
    g = {},
    m = {};
function b(e) {
    let t = m[e];
    return null == t && ((t = l().v3(e)), (m[e] = t)), t;
}
class _ extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(s.default);
    }
    processExperimentsMessage(e) {
        if (null == e) return !1;
        for (let t of h) {
            let n = u.Oz[t],
                r = e.assignments[t];
            if (null == r || null == n) continue;
            let i = f[n];
            for (let e in r) {
                let { evaluation_id: t, assignments: n } = r[e],
                    l = {
                        evaluationId: t,
                        assignments: {}
                    };
                for (let [t, r, a] of ((i[e] = l), n))
                    null != a || (a = 0),
                        (l.assignments[t] = {
                            hashedId: t,
                            variantId: r,
                            isServerOverride: (a & u.V8.IsOverride) != 0
                        });
            }
        }
    }
    registerExperiment(e) {
        g[e.name] = e;
    }
    getAssignment(e, t, n) {
        let r = b(n),
            i = f[e][t];
        if (null != i) return i.assignments[r];
    }
    getEvaluation(e, t) {
        var n;
        return null == (n = f[e][t]) ? void 0 : n.evaluationId;
    }
    getEvaluationAndAssignment(e, t, n) {
        let r = f[e][t];
        return null == r ? [void 0, void 0] : [r.evaluationId, r.assignments[n]];
    }
    trackEvaluationExposure(e, t, n, r) {
        c.default.track(d.rMx.EXPERIMENT_USER_EVALUATION_EXPOSED, {
            evaluation: e,
            experiment: n,
            exposure_location: r,
            unit_type: t
        });
    }
    resetForTests() {
        f = {
            user: {},
            guild: {}
        };
    }
    constructor() {
        super(
            o.Z,
            {
                CONNECTION_OPEN: (e) => this.processExperimentsMessage(e.apexExperiments),
                CONNECTION_OPEN_STATE_UPDATE: (e) => this.processExperimentsMessage(e.apexExperiments)
            },
            o.c.Early
        ),
            p(this, 'getHash', b);
    }
}
p(_, 'displayName', 'ApexExperimentStore'), new _();
