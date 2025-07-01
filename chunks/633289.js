(n.d(t, { Z: () => P }), n(388685));
var r,
    i = n(108131),
    a = n.n(i),
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(865427),
    u = n(710845),
    d = n(314897),
    f = n(626135),
    _ = n(70956),
    p = n(508825),
    h = n(981631);
function m(e, t, n) {
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
let g = new u.Z('ApexExperimentStore'),
    E = [p.Cm.User],
    b = {
        user: {},
        guild: {}
    },
    y = {},
    O = {},
    v = {},
    I = 'apexTrackedExposures',
    T = 1,
    S = 7 * _.Z.Millis.DAY,
    A = {},
    N = {};
function C(e) {
    let t = N[e];
    return (null == t && ((t = a().v3(e)), (N[e] = t)), t);
}
class R extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        (this.waitFor(d.default), null != e && 1 === e.version && ((O = e.clientOverrides), (b = e.evaluatedExperiments)));
        let t = (0, c._S)();
        for (let e in ((v = {}), t)) {
            let n = C(e);
            v[n] = {
                hashedName: n,
                variantId: t[e],
                isOverride: !0
            };
        }
        A = this.loadTrackedExposures();
    }
    getState() {
        return {
            version: 1,
            evaluatedExperiments: b,
            clientOverrides: O
        };
    }
    processExperimentsMessage(e) {
        if (null == e) return !1;
        for (let t of E) {
            let n = p.Oz[t],
                r = e.assignments[t];
            if (null == r || null == n) continue;
            let i = b[n];
            for (let e in r) {
                let { evaluation_id: t, assignments: n } = r[e],
                    a = {
                        evaluationId: null != t ? t : void 0,
                        assignments: {}
                    };
                for (let [t, r, o, s] of ((i[e] = a), n))
                    (null != o || (o = 0),
                        (a.assignments[t] = {
                            hashedName: t,
                            variantId: r,
                            isOverride: (o & p.V8.IsOverride) != 0,
                            revision: s
                        }));
            }
        }
    }
    handleApexExperimentOverrideCreate(e) {
        O[e.hashedName] = {
            hashedName: e.hashedName,
            variantId: e.variantId,
            isOverride: !0
        };
    }
    handleApexExperimentOverrideDelete(e) {
        delete O[e.hashedName];
    }
    handleLogout(e) {
        (e.isSwitchingAccount || this.clearAllServerAssignments(), s.K.remove(I), this.clearAllTrackedExposures());
    }
    registerExperiment(e) {
        y[e.name] = e;
    }
    getAssignment(e, t, n) {
        var r;
        let i = C(n),
            a = null != (r = O[i]) ? r : v[i];
        if (null != a) return a;
        let o = b[e][t];
        if (null != o) return o.assignments[i];
    }
    getEvaluation(e, t) {
        var n;
        return null == (n = b[e][t]) ? void 0 : n.evaluationId;
    }
    getEvaluationAndAssignment(e, t, n) {
        var r;
        let i = null != (r = O[n]) ? r : v[n];
        if (null != i) return [void 0, i];
        let a = b[e][t];
        return null == a ? [void 0, void 0] : [a.evaluationId, a.assignments[n]];
    }
    trackExperimentExposure(e, t, n, r, i, a) {
        let o = C(''.concat(t, '|').concat(i, '|').concat(a, '|').concat(n));
        this.shouldTrackExposure(o) &&
            'user' === r &&
            (f.default.track(h.rMx.EXPERIMENT_USER_EVALUATION_EXPOSED, {
                evaluation_id: e,
                experiment: t,
                exposure_location: n,
                unit_type: r
            }),
            (A[o] = Date.now()),
            this.saveTrackedExposures(A));
    }
    trackCommonTriggerPointExposures(e) {
        for (let t of this.evaluationIds('user')) {
            let n = C(''.concat(t, '|').concat(e));
            this.shouldTrackExposure(n) &&
                (f.default.track(h.rMx.EXPERIMENT_USER_EVALUATION_EXPOSED, {
                    evaluation_id: t,
                    exposure_location: e,
                    unit_type: 'user'
                }),
                (A[n] = Date.now()),
                this.saveTrackedExposures(A));
        }
    }
    evaluationIds(e) {
        return Object.values(b[e])
            .map((e) => e.evaluationId)
            .filter((e) => null != e);
    }
    shouldTrackExposure(e) {
        let t = A[e];
        return null == t || Date.now() - t > S;
    }
    loadTrackedExposures() {
        let e = s.K.get(I);
        if (null == e || e.version !== T) return {};
        let t = e.exposures,
            n = Date.now(),
            r = !1;
        for (let e in t) n - t[e] > S && (delete t[e], (r = !0));
        return (r && this.saveTrackedExposures(t), t);
    }
    saveTrackedExposures(e) {
        try {
            s.K.set(I, {
                version: T,
                exposures: e
            });
        } catch (e) {
            (g.error('Error saving tracked exposures', e),
                f.default.track(h.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                    module: 'discord_app',
                    call: 'ApexExperimentStore.saveTrackedExposures'
                }));
        }
    }
    clearAllServerAssignments() {
        b = {
            user: {},
            guild: {}
        };
    }
    clearAllOverrides() {
        ((O = {}), (v = {}));
    }
    clearAllTrackedExposures() {
        A = {};
    }
    getHash(e) {
        return C(e);
    }
    constructor() {
        super(
            l.Z,
            {
                CONNECTION_OPEN: (e) => this.processExperimentsMessage(e.apexExperiments),
                CONNECTION_OPEN_STATE_UPDATE: (e) => this.processExperimentsMessage(e.apexExperiments),
                APEX_EXPERIMENT_OVERRIDE_CREATE: (e) => this.handleApexExperimentOverrideCreate(e),
                APEX_EXPERIMENT_OVERRIDE_DELETE: (e) => this.handleApexExperimentOverrideDelete(e),
                APEX_EXPERIMENT_OVERRIDE_CLEAR: () => this.clearAllOverrides(),
                APEX_EXPERIMENT_CLEAR_SERVER_ASSIGNMENTS: () => this.clearAllServerAssignments(),
                LOGOUT: (e) => this.handleLogout(e)
            },
            l.c.Early
        );
    }
}
(m(R, 'displayName', 'ApexExperimentStore'), m(R, 'persistKey', 'ApexExperimentStore'));
let P = new R();
