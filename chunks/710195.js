"use strict";
n.d(t, { A: () => D });
var i = n(181370),
    r = n.n(i),
    s = n(17928),
    a = n(941426),
    o = n(506774),
    l = n(576908),
    u = n(818348);
let c = new a.Vy("ApexExperimentStore");
(null == window.TextEncoder || null == window.TextDecoder) && n(283346);
let d = [l.ni.User, l.ni.Installation],
    _ = { user: {}, guild: {}, installation: {} },
    f = {},
    h = {},
    p = {},
    E = {},
    m = {},
    g = new Set(),
    A = new Set(),
    I = "apexTrackedExposures",
    T = {},
    S = {};
function N(e) {
    let t = S[e];
    return null == t && ((t = r().v3(e)), (S[e] = t)), t;
}
class y extends s.Ay.PersistedStore {
    static displayName = "ApexExperimentStore";
    static persistKey = "ApexExperimentStore";
    track = () => Promise.resolve();
    surface = "unset";
    loadStoredState(e, t) {
        for (let n in (null != e && 3 === e.version
            ? ((h = e.clientOverrides), (_ = e.evaluatedExperiments))
            : null != e &&
              2 === e.version &&
              ((h = e.clientOverrides), (_ = { ...e.evaluatedExperiments, installation: {} })),
        (E = {}),
        t)) {
            let e = N(n),
                i = t[n];
            E[n] = { hashedName: e, variantId: i, isOverride: !0, exposureTrackingEnabled: !1, useAsEligibility: !1 };
        }
        T = this.loadTrackedExposures();
    }
    getState() {
        return { version: 3, evaluatedExperiments: _, clientOverrides: h };
    }
    setExperimentAssignments(e, t) {
        if (null == e && null == t) return !1;
        if ((this.clearSessionOverrides(), null != e))
            for (let t of d) {
                let n = l.ag[t],
                    i = e.assignments[t];
                if (null == i || null == n) continue;
                let r = _[n];
                for (let e in i) {
                    A.add(e);
                    let { evaluation_id: t, assignments: n } = i[e],
                        s = { evaluationId: t ?? void 0, assignments: {} };
                    for (let [t, i, a, o, u] of ((r[e] = s), n))
                        (a ??= 0),
                            (s.assignments[t] = {
                                hashedName: t,
                                variantId: i,
                                trackedVariantId: u,
                                isOverride: (a & l.fd.IsOverride) != 0,
                                revision: o,
                                exposureTrackingEnabled: (a & l.fd.ExposureTrackingEnabled) != 0,
                                useAsEligibility: (a & l.fd.UseAsEligibility) != 0,
                            });
                }
            }
        return null != t && this.setGuildExperimentAssignments(t), !0;
    }
    setGuildExperimentAssignments(e) {
        let t = _.guild;
        for (let [n, i] of Object.entries(e ?? {})) {
            let { evaluation_id: e, assignments: r } = i,
                s = { evaluationId: e ?? void 0, assignments: {} };
            for (let [e, i, a, o, u] of ((t[n] = s), r)) {
                let t = {
                    hashedName: e,
                    variantId: i,
                    trackedVariantId: u,
                    isOverride: ((a ??= 0) & l.fd.IsOverride) != 0,
                    revision: o,
                    exposureTrackingEnabled: (a & l.fd.ExposureTrackingEnabled) != 0,
                    useAsEligibility: (a & l.fd.UseAsEligibility) != 0,
                };
                s.assignments[e] = t;
            }
        }
    }
    createOverride(e, t) {
        (h = { ...h, [e]: { hashedName: N(e), variantId: t, isOverride: !0, exposureTrackingEnabled: !1 } }),
            this.trackExposureSuppression(e, "client_override");
    }
    deleteOverride(e) {
        let { [e]: t, ...n } = h;
        h = n;
    }
    createSessionOverride(e, t) {
        p = { ...p, [e]: { hashedName: N(e), variantId: t, isOverride: !0, exposureTrackingEnabled: !1 } };
    }
    deleteSessionOverride(e) {
        let { [e]: t, ...n } = p;
        p = n;
    }
    setExperimentsMetadata(e) {
        m = { ...m, ...Object.fromEntries(e.map((e) => [e.name, e])) };
    }
    getExperimentsMetadata() {
        return m;
    }
    getClientOverrides() {
        return h;
    }
    getSessionOverrides() {
        return p;
    }
    getExperimentClientOverride(e) {
        return h[e];
    }
    getExperimentSessionOverride(e) {
        return p[e];
    }
    handleLogout(e) {
        e || (this.clearUserServerAssignments(), this.clearSessionOverrides()),
            o.w.remove(I),
            this.clearAllTrackedExposures();
    }
    registerExperiment(e) {
        (f[e.name] = e), null != E[e.name] && this.trackExposureSuppression(e.name, "cookie_override");
    }
    getRegisteredExperiments() {
        return f;
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
        let [r, s] = this.getEvaluationAndAssignmentInner(e, t, n);
        if ("guild" !== e) return [r, s];
        {
            let e = i ?? l.hR,
                [t, a] = this.getEvaluationAndAssignmentInner("user", e, n);
            if (null == a) return [void 0, void 0];
            if (a.isOverride) return [r, a];
            if (!a.useAsEligibility) return [void 0, void 0];
            else if (null == s) return [void 0, void 0];
            else if (null != s.variantId) return [r, s];
            else return [void 0, void 0];
        }
    }
    trackExperimentExposure(e, t, n, i, r, s, a) {
        let o = N(`${t}|${r}|${s}|${n}|${a}|1`);
        "user" === i
            ? this.withExposureTracking(o, () =>
                  this.track(
                      u.sE.EXPERIMENT_USER_EVALUATION_EXPOSED,
                      { evaluation_id: e, experiment: t, exposure_location: n, unit_type: i, tracked_variation_id: s },
                      { flush: !0 },
                  ),
              )
            : "installation" === i
              ? this.withExposureTracking(o, () =>
                    this.track(
                        u.sE.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED,
                        {
                            evaluation_id: e,
                            installation_id: a,
                            experiment: t,
                            exposure_location: n,
                            unit_type: i,
                            tracked_variation_id: s,
                        },
                        { flush: !0 },
                    ),
                )
              : "guild" === i &&
                this.withExposureTracking(o, () =>
                    this.track(
                        u.sE.EXPERIMENT_GUILD_EVALUATION_EXPOSED,
                        {
                            evaluation_id: e,
                            guild_id: a,
                            experiment: t,
                            exposure_location: n,
                            unit_type: i,
                            tracked_variation_id: s,
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
                    u.sE.EXPERIMENT_USER_EVALUATION_EXPOSED,
                    { evaluation_id: t, exposure_location: e, unit_type: "user" },
                    { flush: !0 },
                ),
            );
        }
        for (let { evaluationId: t, unitId: n } of this.evaluationsWithUnitIds("installation")) {
            let i = N(`${t}|${e}`);
            this.withExposureTracking(i, () =>
                this.track(
                    u.sE.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED,
                    { evaluation_id: t, exposure_location: e, unit_type: "installation", installation_id: n },
                    { flush: !0 },
                ),
            );
        }
    }
    withExposureTracking(e, t) {
        this.shouldTrackExposure(e) && (t(), (T[e] = Date.now()), this.saveTrackedExposures(T));
    }
    trackExposureSuppression(e, t) {
        let n = f[e];
        if (null != n) {
            if ("user" === n.kind)
                this.track(
                    u.sE.EXPERIMENT_USER_EXPOSURE_SUPPRESSED,
                    { experiment: e, unit_type: n.kind, suppression_source: t },
                    { flush: !0 },
                );
            else if ("installation" === n.kind) {
                let i = Object.keys(_.installation)[0];
                null != i &&
                    this.track(
                        u.sE.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED,
                        { experiment: e, unit_type: n.kind, suppression_source: t, installation_id: i },
                        { flush: !0 },
                    );
            } else if ("guild" === n.kind) {
                let i = Object.keys(_.guild)[0];
                null != i &&
                    this.track(
                        u.sE.EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED,
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
        let t = T[e];
        return null == t || Date.now() - t > 6048e5;
    }
    loadTrackedExposures() {
        let e = o.w.get(I);
        if (null == e || 2 !== e.version) return {};
        let t = e.exposures,
            n = Date.now(),
            i = !1;
        for (let e in t) n - t[e] > 6048e5 && (delete t[e], (i = !0));
        return i && this.saveTrackedExposures(t), t;
    }
    saveTrackedExposures(e) {
        try {
            o.w.set(I, { version: 2, exposures: e });
        } catch (e) {
            c.error("Error saving tracked exposures", e),
                this.track(
                    u.sE.EXPERIMENT_SAVE_EXPOSURE_FAILED,
                    { module: this.surface, call: "ApexExperimentStore.saveTrackedExposures" },
                    { flush: !0 },
                );
        }
    }
    clearForTests() {
        this.clearAllServerAssignments(),
            this.clearAllOverrides(),
            this.clearAllTrackedExposures(),
            g.clear(),
            A.clear();
    }
    clearAllServerAssignments() {
        _ = { user: {}, guild: {}, installation: {} };
    }
    clearUserServerAssignments() {
        _ = { user: {}, guild: {}, installation: _.installation };
    }
    clearAllOverrides() {
        (h = {}), (p = {}), (E = {});
    }
    clearSessionOverrides() {
        p = {};
    }
    clearAllTrackedExposures() {
        T = {};
    }
    getHash(e) {
        return N(e);
    }
    handleFetchStart(e) {
        g.add(e);
    }
    handleFetchSuccess(e, t) {
        g.delete(e), A.add(e), this.setExperimentAssignments(t);
    }
    handleFetchFailure(e) {
        g.delete(e), A.add(e);
    }
    isFetching(e) {
        return g.has(e);
    }
    hasLoaded(e) {
        return A.has(e);
    }
    getOverride(e) {
        return p[e] ?? h[e] ?? E[e];
    }
}
var C = n(228366),
    v = n(380610),
    O = n(495544),
    R = n(174459),
    b = n(652215);
let D = new (class extends y {
    lastEmittedDebugVariantId;
    constructor() {
        super(
            C.h,
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
            C.A.Early,
        ),
            (this.track = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return R.default.track(...t);
            }),
            (this.surface = "discord_app"),
            this.addChangeListener(() => this.maybeEmitDebugExperimentEvent());
    }
    initialize(e) {
        this.waitFor(O.default), this.loadStoredState(e, (0, v.DI)());
    }
    maybeEmitDebugExperimentEvent() {
        let e = O.default.getId(),
            [, t] = this.getEvaluationAndAssignment("user", e, "2026-03-debug-experiment"),
            n = t?.variantId;
        if (null == n || 0 === n) {
            this.lastEmittedDebugVariantId = void 0;
            return;
        }
        n !== this.lastEmittedDebugVariantId &&
            ((this.lastEmittedDebugVariantId = n),
            R.default.track(b.HAw.EXPERIMENT_APEX_DEBUGGING_EVENT, {
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
