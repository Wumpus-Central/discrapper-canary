"use strict";
n.d(t, { A: () => v });
var i = n(181370),
    r = n.n(i),
    a = n(17928),
    s = n(941426),
    l = n(506774),
    o = n(576908),
    d = n(818348);
let c = new s.Vy("ApexExperimentStore");
"u" > typeof window && (null == window.TextEncoder || null == window.TextDecoder) && n(283346);
let u = [o.ni.User, o.ni.Installation],
    _ = { user: {}, guild: {}, installation: {} },
    E = {},
    A = {},
    h = {},
    I = {},
    f = {},
    p = new Set(),
    T = new Set(),
    m = "apexTrackedExposures",
    g = {},
    S = {};
function N(e) {
    let t = S[e];
    return null == t && ((t = r().v3(e)), (S[e] = t)), t;
}
class C extends a.Ay.PersistedStore {
    static displayName = "ApexExperimentStore";
    static persistKey = "ApexExperimentStore";
    track = () => Promise.resolve();
    surface = "unset";
    loadStoredState(e, t) {
        for (let n in (null != e && 3 === e.version
            ? ((A = e.clientOverrides), (_ = e.evaluatedExperiments))
            : null != e &&
              2 === e.version &&
              ((A = e.clientOverrides), (_ = { ...e.evaluatedExperiments, installation: {} })),
        (I = {}),
        t)) {
            let e = N(n),
                i = t[n];
            I[n] = { hashedName: e, variantId: i, isOverride: !0, exposureTrackingEnabled: !1, useAsEligibility: !1 };
        }
        g = this.loadTrackedExposures();
    }
    getState() {
        return { version: 3, evaluatedExperiments: _, clientOverrides: A };
    }
    setExperimentAssignments(e, t) {
        if (null == e && null == t) return !1;
        if ((this.clearSessionOverrides(), null != e))
            for (let t of u) {
                let n = o.ag[t],
                    i = e.assignments[t];
                if (null == i || null == n) continue;
                let r = _[n];
                for (let e in i) {
                    T.add(e);
                    let { evaluation_id: t, assignments: n } = i[e],
                        a = { evaluationId: t ?? void 0, assignments: {} };
                    for (let [t, i, s, l, d, c] of ((r[e] = a), n))
                        (s ??= 0),
                            (a.assignments[t] = {
                                hashedName: t,
                                variantId: i,
                                trackedVariantId: d,
                                isOverride: (s & o.fd.IsOverride) != 0,
                                revision: l,
                                exposureTrackingEnabled: (s & o.fd.ExposureTrackingEnabled) != 0,
                                useAsEligibility: (s & o.fd.UseAsEligibility) != 0,
                                config: c,
                            });
                }
            }
        return null != t && this.setGuildExperimentAssignments(t), !0;
    }
    setGuildExperimentAssignments(e) {
        let t = _.guild;
        for (let [n, i] of Object.entries(e ?? {})) {
            let { evaluation_id: e, assignments: r } = i,
                a = { evaluationId: e ?? void 0, assignments: {} };
            for (let [e, i, s, l, d] of ((t[n] = a), r)) {
                let t = {
                    hashedName: e,
                    variantId: i,
                    trackedVariantId: d,
                    isOverride: ((s ??= 0) & o.fd.IsOverride) != 0,
                    revision: l,
                    exposureTrackingEnabled: (s & o.fd.ExposureTrackingEnabled) != 0,
                    useAsEligibility: (s & o.fd.UseAsEligibility) != 0,
                };
                a.assignments[e] = t;
            }
        }
    }
    createOverride(e, t) {
        (A = { ...A, [e]: { hashedName: N(e), variantId: t, isOverride: !0, exposureTrackingEnabled: !1 } }),
            this.trackExposureSuppression(e, "client_override");
    }
    deleteOverride(e) {
        let { [e]: t, ...n } = A;
        A = n;
    }
    createSessionOverride(e, t) {
        h = { ...h, [e]: { hashedName: N(e), variantId: t, isOverride: !0, exposureTrackingEnabled: !1 } };
    }
    deleteSessionOverride(e) {
        let { [e]: t, ...n } = h;
        h = n;
    }
    setExperimentsMetadata(e) {
        f = { ...f, ...Object.fromEntries(e.map((e) => [e.name, e])) };
    }
    getExperimentsMetadata() {
        return f;
    }
    getClientOverrides() {
        return A;
    }
    getSessionOverrides() {
        return h;
    }
    getExperimentClientOverride(e) {
        return A[e];
    }
    getExperimentSessionOverride(e) {
        return h[e];
    }
    handleLogout(e) {
        e || (this.clearUserServerAssignments(), this.clearSessionOverrides()),
            l.w.remove(m),
            this.clearAllTrackedExposures();
    }
    registerExperiment(e) {
        (E[e.name] = e), null != I[e.name] && this.trackExposureSuppression(e.name, "cookie_override");
    }
    getRegisteredExperiments() {
        return E;
    }
    getAssignment(e, t, n) {
        let i = this.getOverride(n);
        return null != i ? i : this.getServerAssignment(e, t, n);
    }
    getServerAssignment(e, t, n) {
        let i = N(n),
            r = _[e][t];
        if (null != r) return r.assignments[i];
    }
    getEvaluation(e, t) {
        return _[e][t]?.evaluationId;
    }
    getEvaluationAndAssignmentInner(e, t, n) {
        let i = this.getOverride(n);
        if (null != i) return [void 0, i];
        let r = _[e][t];
        return null == r ? [void 0, void 0] : [r.evaluationId, r.assignments[N(n)]];
    }
    getEvaluationAndAssignment(e, t, n, i) {
        let [r, a] = this.getEvaluationAndAssignmentInner(e, t, n);
        if ("guild" !== e) return [r, a];
        {
            let e = i ?? o.hR,
                [t, s] = this.getEvaluationAndAssignmentInner("user", e, n);
            if (null == s) return [void 0, void 0];
            if (s.isOverride) return [r, s];
            if (!s.useAsEligibility) return [void 0, void 0];
            else if (null == a) return [void 0, void 0];
            else if (null != a.variantId) return [r, a];
            else return [void 0, void 0];
        }
    }
    trackExperimentExposure(e, t, n, i, r, a, s) {
        let l = N(`${t}|${r}|${a}|${n}|${s}|1`);
        "user" === i
            ? this.withExposureTracking(l, () =>
                  this.track(
                      d.sE.EXPERIMENT_USER_EVALUATION_EXPOSED,
                      { evaluation_id: e, experiment: t, exposure_location: n, unit_type: i, tracked_variation_id: a },
                      { flush: !0 },
                  ),
              )
            : "installation" === i
              ? this.withExposureTracking(l, () =>
                    this.track(
                        d.sE.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED,
                        {
                            evaluation_id: e,
                            installation_id: s,
                            experiment: t,
                            exposure_location: n,
                            unit_type: i,
                            tracked_variation_id: a,
                        },
                        { flush: !0 },
                    ),
                )
              : "guild" === i &&
                this.withExposureTracking(l, () =>
                    this.track(
                        d.sE.EXPERIMENT_GUILD_EVALUATION_EXPOSED,
                        {
                            evaluation_id: e,
                            guild_id: s,
                            experiment: t,
                            exposure_location: n,
                            unit_type: i,
                            tracked_variation_id: a,
                            revision: r,
                        },
                        { flush: !0 },
                    ),
                );
    }
    trackCommonTriggerPointExposures(e) {
        for (let { evaluationId: t } of this.evaluationsWithUnitIds("user")) {
            let n = N(`${t}|${e}`);
            this.withExposureTracking(n, () =>
                this.track(
                    d.sE.EXPERIMENT_USER_EVALUATION_EXPOSED,
                    { evaluation_id: t, exposure_location: e, unit_type: "user" },
                    { flush: !0 },
                ),
            );
        }
        for (let { evaluationId: t, unitId: n } of this.evaluationsWithUnitIds("installation")) {
            let i = N(`${t}|${e}`);
            this.withExposureTracking(i, () =>
                this.track(
                    d.sE.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED,
                    { evaluation_id: t, exposure_location: e, unit_type: "installation", installation_id: n },
                    { flush: !0 },
                ),
            );
        }
    }
    withExposureTracking(e, t) {
        this.shouldTrackExposure(e) && (t(), (g[e] = Date.now()), this.saveTrackedExposures(g));
    }
    trackExposureSuppression(e, t) {
        let n = E[e];
        if (null != n) {
            if ("user" === n.kind)
                this.track(
                    d.sE.EXPERIMENT_USER_EXPOSURE_SUPPRESSED,
                    { experiment: e, unit_type: n.kind, suppression_source: t },
                    { flush: !0 },
                );
            else if ("installation" === n.kind) {
                let i = Object.keys(_.installation)[0];
                null != i &&
                    this.track(
                        d.sE.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED,
                        { experiment: e, unit_type: n.kind, suppression_source: t, installation_id: i },
                        { flush: !0 },
                    );
            } else if ("guild" === n.kind) {
                let i = Object.keys(_.guild)[0];
                null != i &&
                    this.track(
                        d.sE.EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED,
                        { experiment: e, unit_type: n.kind, suppression_source: t, guild_id: i },
                        { flush: !0 },
                    );
            }
        }
    }
    evaluationIds(e) {
        return Object.values(_[e])
            .map((e) => e.evaluationId)
            .filter((e) => null != e);
    }
    evaluationsWithUnitIds(e) {
        return Object.entries(_[e])
            .filter((e) => {
                let [t, n] = e;
                return null != n.evaluationId;
            })
            .map((e) => {
                let [t, n] = e;
                return { evaluationId: n.evaluationId, unitId: t };
            });
    }
    shouldTrackExposure(e) {
        let t = g[e];
        return null == t || Date.now() - t > 6048e5;
    }
    loadTrackedExposures() {
        let e = l.w.get(m);
        if (null == e || 2 !== e.version) return {};
        let t = e.exposures,
            n = Date.now(),
            i = !1;
        for (let e in t) n - t[e] > 6048e5 && (delete t[e], (i = !0));
        return i && this.saveTrackedExposures(t), t;
    }
    saveTrackedExposures(e) {
        try {
            l.w.set(m, { version: 2, exposures: e });
        } catch (e) {
            c.error("Error saving tracked exposures", e),
                this.track(
                    d.sE.EXPERIMENT_SAVE_EXPOSURE_FAILED,
                    { module: this.surface, call: "ApexExperimentStore.saveTrackedExposures" },
                    { flush: !0 },
                );
        }
    }
    clearForTests() {
        this.clearAllServerAssignments(),
            this.clearAllOverrides(),
            this.clearAllTrackedExposures(),
            p.clear(),
            T.clear();
    }
    clearAllServerAssignments() {
        _ = { user: {}, guild: {}, installation: {} };
    }
    clearUserServerAssignments() {
        _ = { user: {}, guild: {}, installation: _.installation };
    }
    clearAllOverrides() {
        (A = {}), (h = {}), (I = {});
    }
    clearSessionOverrides() {
        h = {};
    }
    clearAllTrackedExposures() {
        g = {};
    }
    getHash(e) {
        return N(e);
    }
    handleFetchStart(e) {
        p.add(e);
    }
    handleFetchSuccess(e, t) {
        p.delete(e), T.add(e), this.setExperimentAssignments(t);
    }
    handleFetchFailure(e) {
        p.delete(e), T.add(e);
    }
    isFetching(e) {
        return p.has(e);
    }
    hasLoaded(e) {
        return T.has(e);
    }
    getOverride(e) {
        return h[e] ?? A[e] ?? I[e];
    }
}
var O = n(228366),
    R = n(380610),
    L = n(280450),
    y = n(174459),
    D = n(652215);
let v = new (class extends C {
    lastEmittedDebugVariantId;
    constructor() {
        super(
            O.h,
            {
                CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                CONNECTION_OPEN_STATE_UPDATE: (e) => this.setExperimentAssignments(e.apexExperiments),
                GUILD_CREATE: (e) => this.handleGuildCreate(e),
                APEX_EXPERIMENT_OVERRIDE_CREATE: (e) => this.createOverride(e.experimentName, e.variantId),
                APEX_EXPERIMENT_OVERRIDE_DELETE: (e) => this.deleteOverride(e.experimentName),
                APEX_EXPERIMENT_OVERRIDE_CLEAR: () => this.clearAllOverrides(),
                APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE: (e) =>
                    this.createSessionOverride(e.experimentName, e.variantId),
                APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE: (e) => this.deleteSessionOverride(e.experimentName),
                APEX_EXPERIMENT_CLEAR_FOR_TESTS: () => this.clearForTests(),
                APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS: (e) => this.setExperimentsMetadata(e.experiments),
                APEX_EXPERIMENTS_FETCH_START: (e) => this.handleFetchStart(e.unitId),
                APEX_EXPERIMENTS_FETCH_SUCCESS: (e) => this.handleFetchSuccess(e.unitId, e.experiments),
                APEX_EXPERIMENTS_FETCH_FAILURE: (e) => this.handleFetchFailure(e.unitId),
                LOGOUT: (e) => this.handleLogout(e.isSwitchingAccount),
            },
            O.A.Early,
        ),
            (this.track = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return y.default.track(...t);
            }),
            (this.surface = "discord_app"),
            this.addChangeListener(() => this.maybeEmitDebugExperimentEvent());
    }
    initialize(e) {
        this.waitFor(L.default), this.loadStoredState(e, (0, R.DI)());
    }
    maybeEmitDebugExperimentEvent() {
        let e = L.default.getId(),
            [, t] = this.getEvaluationAndAssignment("user", e, "2026-03-debug-experiment"),
            n = t?.variantId;
        if (null == n || 0 === n) {
            this.lastEmittedDebugVariantId = void 0;
            return;
        }
        n !== this.lastEmittedDebugVariantId &&
            ((this.lastEmittedDebugVariantId = n),
            y.default.track(D.HAw.EXPERIMENT_APEX_DEBUGGING_EVENT, {
                experiment: "2026-03-debug-experiment",
                apex_debug_variant: n,
                experiment_location: "apex_assignments_received",
            }));
    }
    handleConnectionOpen(e) {
        let t = e.guilds.reduce((e, t) => (null != t.experiments && (e[t.id] = t.experiments), e), {});
        return this.setExperimentAssignments(e.apexExperiments, t);
    }
    handleGuildCreate(e) {
        let t = e.guild.experiments;
        if (null == t) return !0;
        let n = { [e.guild.id]: t };
        return this.setGuildExperimentAssignments(n);
    }
})();
