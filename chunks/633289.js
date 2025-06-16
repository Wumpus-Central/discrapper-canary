n.d(t, { Z: () => v }), n(388685);
var r,
    i = n(108131),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(865427),
    c = n(314897),
    u = n(626135),
    d = n(508825),
    f = n(981631);
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
let p = [d.Cm.User],
    h = {
        user: {},
        guild: {}
    },
    m = {},
    g = {},
    E = {},
    b = {};
function y(e) {
    let t = b[e];
    return null == t && ((t = a().v3(e)), (b[e] = t)), t;
}
class O extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(c.default), null != e && 1 === e.version && ((g = e.clientOverrides), (h = e.evaluatedExperiments));
        let t = (0, l._S)();
        for (let e in ((E = {}), t)) {
            let n = y(e);
            E[n] = {
                hashedId: n,
                variantId: t[e],
                isOverride: !0
            };
        }
    }
    getState() {
        return {
            version: 1,
            evaluatedExperiments: h,
            clientOverrides: g
        };
    }
    processExperimentsMessage(e) {
        if (null == e) return !1;
        for (let t of p) {
            let n = d.Oz[t],
                r = e.assignments[t];
            if (null == r || null == n) continue;
            let i = h[n];
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
                            isOverride: (o & d.V8.IsOverride) != 0
                        });
            }
        }
    }
    handleApexExperimentOverrideCreate(e) {
        g[e.hashedId] = {
            hashedId: e.hashedId,
            variantId: e.variantId,
            isOverride: !0
        };
    }
    handleApexExperimentOverrideDelete(e) {
        delete g[e.hashedId];
    }
    handleLogout(e) {
        e.isSwitchingAccount || this.clearAllServerAssignments();
    }
    registerExperiment(e) {
        m[e.name] = e;
    }
    getAssignment(e, t, n) {
        var r;
        let i = y(n),
            a = null != (r = g[i]) ? r : E[i];
        if (null != a) return a;
        let o = h[e][t];
        if (null != o) return o.assignments[i];
    }
    getEvaluation(e, t) {
        var n;
        return null == (n = h[e][t]) ? void 0 : n.evaluationId;
    }
    getEvaluationAndAssignment(e, t, n) {
        var r;
        let i = null != (r = g[n]) ? r : E[n];
        if (null != i) return [void 0, i];
        let a = h[e][t];
        return null == a ? [void 0, void 0] : [a.evaluationId, a.assignments[n]];
    }
    trackEvaluationExposure(e, t, n, r) {
        'user' === t &&
            u.default.track(f.rMx.EXPERIMENT_USER_EVALUATION_EXPOSED, {
                evaluation: e,
                experiment: n,
                exposure_location: r,
                unit_type: t
            });
    }
    trackCommonTriggerPointExposures(e) {
        for (let t of this.evaluationIds('user'))
            u.default.track(f.rMx.EXPERIMENT_USER_EVALUATION_EXPOSED, {
                evaluation: t,
                exposure_location: e,
                unit_type: 'user'
            });
    }
    evaluationIds(e) {
        return Object.values(h[e]).map((e) => e.evaluationId);
    }
    clearAllServerAssignments() {
        h = {
            user: {},
            guild: {}
        };
    }
    clearAllOverrides() {
        (g = {}), (E = {});
    }
    constructor() {
        super(
            s.Z,
            {
                CONNECTION_OPEN: (e) => this.processExperimentsMessage(e.apexExperiments),
                CONNECTION_OPEN_STATE_UPDATE: (e) => this.processExperimentsMessage(e.apexExperiments),
                APEX_EXPERIMENT_OVERRIDE_CREATE: (e) => this.handleApexExperimentOverrideCreate(e),
                APEX_EXPERIMENT_OVERRIDE_DELETE: (e) => this.handleApexExperimentOverrideDelete(e),
                APEX_EXPERIMENT_OVERRIDE_CLEAR: () => this.clearAllOverrides(),
                APEX_EXPERIMENT_CLEAR_SERVER_ASSIGNMENTS: () => this.clearAllServerAssignments(),
                LOGOUT: (e) => this.handleLogout(e)
            },
            s.c.Early
        ),
            _(this, 'getHash', y);
    }
}
_(O, 'displayName', 'ApexExperimentStore'), _(O, 'persistKey', 'ApexExperimentStore');
let v = new O();
