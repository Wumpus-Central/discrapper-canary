n.d(t, { A: () => V });
var i = n(181370),
    r = n.n(i),
    a = n(855986),
    s = n(611599),
    l = n(506774),
    o = n(967648),
    d = n(818348);
let c = new s.Vy("ApexExperimentStore");
"u" > typeof window && (null == window.TextEncoder || null == window.TextDecoder) && n(283346);
let u = [o.ni.User, o.ni.Installation],
    _ = { user: {}, guild: {}, installation: {} },
    E = {},
    A = {},
    f = {},
    h = {},
    I = {},
    p = new Set(),
    m = new Set(),
    T = "apexTrackedExposures",
    g = {},
    S = {};
function N(e) {
    let t = S[e];
    return (null == t && ((t = r().v3(e)), (S[e] = t)), t);
}
class C extends a.Ay.PersistedStore {
    static displayName = "ApexExperimentStore";
    static persistKey = "ApexExperimentStore";
    track = () => Promise.resolve();
    surface = "unset";
    onAssignmentsIngested(e, t, n) {}
    resolveConfigAssignment(e, t, n) {}
    onConfigApplied(e, t, n) {}
    loadStoredState(e, t) {
        for (let n in (null != e && 3 === e.version
            ? ((A = e.clientOverrides), (_ = e.evaluatedExperiments))
            : null != e &&
              2 === e.version &&
              ((A = e.clientOverrides), (_ = { ...e.evaluatedExperiments, installation: {} })),
        (h = {}),
        t)) {
            let e = N(n),
                i = t[n];
            h[n] = {
                hashedName: e,
                variantId: i,
                isOverride: !0,
                isAppLaunch: !1,
                exposureTrackingEnabled: !1,
                useAsEligibility: !1,
            };
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
                    m.add(e);
                    let { evaluation_id: t, assignments: n } = i[e],
                        a = { evaluationId: t ?? void 0, assignments: {} };
                    for (let [t, i, s, l, d, c] of ((r[e] = a), n))
                        ((s ??= 0),
                            (a.assignments[t] = {
                                hashedName: t,
                                variantId: i,
                                trackedVariantId: d,
                                isOverride: (s & o.fd.IsOverride) != 0,
                                isAppLaunch: (s & o.fd.IsAppLaunch) != 0,
                                revision: l,
                                exposureTrackingEnabled: (s & o.fd.ExposureTrackingEnabled) != 0,
                                useAsEligibility: (s & o.fd.UseAsEligibility) != 0,
                                config: c,
                            }));
                }
            }
        if (null != e)
            for (let t of u) {
                let n = o.ag[t];
                for (let i of Object.keys(e.assignments[t] ?? {})) this.onAssignmentsIngested(n, i, _[n][i]);
            }
        return (null != t && this.setGuildExperimentAssignments(t), !0);
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
                    isAppLaunch: (s & o.fd.IsAppLaunch) != 0,
                    revision: l,
                    exposureTrackingEnabled: (s & o.fd.ExposureTrackingEnabled) != 0,
                    useAsEligibility: (s & o.fd.UseAsEligibility) != 0,
                };
                a.assignments[e] = t;
            }
            this.onAssignmentsIngested("guild", n, a);
        }
    }
    createOverride(e, t) {
        ((A = {
            ...A,
            [e]: { hashedName: N(e), variantId: t, isOverride: !0, isAppLaunch: !1, exposureTrackingEnabled: !1 },
        }),
            this.trackExposureSuppression(e, "client_override"));
    }
    deleteOverride(e) {
        let { [e]: t, ...n } = A;
        A = n;
    }
    createSessionOverride(e, t) {
        f = {
            ...f,
            [e]: { hashedName: N(e), variantId: t, isOverride: !0, isAppLaunch: !1, exposureTrackingEnabled: !1 },
        };
    }
    deleteSessionOverride(e) {
        let { [e]: t, ...n } = f;
        f = n;
    }
    setExperimentsMetadata(e) {
        I = { ...I, ...Object.fromEntries(e.map((e) => [e.name, e])) };
    }
    getExperimentsMetadata() {
        return I;
    }
    getClientOverrides() {
        return A;
    }
    getSessionOverrides() {
        return f;
    }
    getExperimentClientOverride(e) {
        return A[e];
    }
    getExperimentSessionOverride(e) {
        return f[e];
    }
    handleLogout(e) {
        (e || (this.clearUserServerAssignments(), this.clearSessionOverrides()),
            l.w.remove(T),
            this.clearAllTrackedExposures());
    }
    registerExperiment(e) {
        ((E[e.name] = e), null != h[e.name] && this.trackExposureSuppression(e.name, "cookie_override"));
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
    getConfigEvaluationAndAssignment(e, t, n, i) {
        let r = this.resolveConfigAssignment(e, t, n);
        return null != r ? [r.evaluationId, r.assignment] : this.getEvaluationAndAssignment(e, t, n, i);
    }
    getOverrides() {
        return { ...h, ...A, ...f };
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
        let e = l.w.get(T);
        if (null == e || 2 !== e.version) return {};
        let t = e.exposures,
            n = Date.now(),
            i = !1;
        for (let e in t) n - t[e] > 6048e5 && (delete t[e], (i = !0));
        return (i && this.saveTrackedExposures(t), t);
    }
    saveTrackedExposures(e) {
        try {
            l.w.set(T, { version: 2, exposures: e });
        } catch (e) {
            (c.error("Error saving tracked exposures", e),
                this.track(
                    d.sE.EXPERIMENT_SAVE_EXPOSURE_FAILED,
                    { module: this.surface, call: "ApexExperimentStore.saveTrackedExposures" },
                    { flush: !0 },
                ));
        }
    }
    clearForTests() {
        (this.clearAllServerAssignments(),
            this.clearAllOverrides(),
            this.clearAllTrackedExposures(),
            p.clear(),
            m.clear());
    }
    clearAllServerAssignments() {
        _ = { user: {}, guild: {}, installation: {} };
    }
    clearUserServerAssignments() {
        _ = { user: {}, guild: {}, installation: _.installation };
    }
    clearAllOverrides() {
        ((A = {}), (f = {}), (h = {}));
    }
    clearSessionOverrides() {
        f = {};
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
        (p.delete(e), m.add(e), this.setExperimentAssignments(t));
    }
    handleFetchFailure(e) {
        (p.delete(e), m.add(e));
    }
    isFetching(e) {
        return p.has(e);
    }
    hasLoaded(e) {
        return m.has(e);
    }
    getOverride(e) {
        return f[e] ?? A[e] ?? h[e];
    }
}
var O = n(73153),
    R = n(380610),
    L = n(46653),
    y = n(129230);
n(321073);
var D = n(319771);
let b = { writer: !0, reads: !1, exposures: !1, suppressions: !1 },
    v = {
        kind: "installation",
        name: "2026-11-apex-launch-latch",
        defaultConfig: b,
        variations: {
            0: b,
            1: { ...b, writer: !1 },
            2: { ...b, reads: !0 },
            3: { ...b, reads: !0, exposures: !0 },
            4: { ...b, reads: !0, exposures: !0, suppressions: !0 },
            5: { ...b, suppressions: !0 },
        },
    },
    P = "apexLaunchLatch",
    M = new s.Vy("ApexLaunchLatch");
function U(e) {
    return JSON.parse(JSON.stringify(e));
}
function w(e) {
    return JSON.stringify([e.kind, e.unitId, e.experimentName]);
}
function G(e, t) {
    let n = !1;
    for (let i of (t.applied && !e.applied && ((e.applied = !0), (n = !0)), t.locations))
        e.locations.includes(i) || (e.locations.push(i), (n = !0));
    return n;
}
class x {
    receipts = [];
    recordedReceipts = new Map();
    load() {
        try {
            let e = l.w.get(P);
            if (e?.schemaVersion === 1 && e.units?.user != null && e.units?.installation != null) return e;
        } catch (e) {
            M.error("Unable to load launch latch", e);
        }
    }
    save(e) {
        try {
            l.w.set(P, e);
        } catch (e) {
            M.error("Unable to save launch latch", e);
        }
    }
    recordReceipt(e) {
        let t = w(e),
            n = this.recordedReceipts.get(t);
        if (null == n) ((n = U(e)), this.recordedReceipts.set(t, n));
        else if (!G(n, e)) return;
        this.receipts.includes(n) || this.receipts.push(n);
    }
    drainReceipts(e) {
        let t = this.receipts.filter((t) => t.kind === e);
        return ((this.receipts = this.receipts.filter((t) => t.kind !== e)), t);
    }
}
class k {
    backend;
    active;
    pending;
    frozen = new Map();
    launchUserId;
    launchUserEvaluation;
    constructor(e = new x()) {
        ((this.backend = e),
            (this.pending = U(
                e.load() ?? { schemaVersion: 1, activeUserId: null, units: { user: {}, installation: {} } },
            )),
            (this.active = U(this.pending)),
            (this.launchUserId = this.active.activeUserId));
        let t = null == this.launchUserId ? void 0 : this.active.units.user[this.launchUserId];
        this.launchUserEvaluation = null == t ? void 0 : U(t);
    }
    write(e, t, n, i) {
        if ("user" === e && (null == i || t !== i)) return;
        let r = Object.fromEntries(
                Object.entries(n.assignments).filter((e) => {
                    let [, t] = e;
                    return t.isAppLaunch;
                }),
            ),
            a = Object.values(r).some((e) => !e.isOverride) ? n.evaluationId : void 0;
        ((this.pending = {
            ...this.pending,
            activeUserId: i,
            units: {
                ...this.pending.units,
                [e]: { ...this.pending.units[e], [t]: U({ evaluationId: a, assignments: r }) },
            },
        }),
            this.backend.save(U(this.pending)));
    }
    logout(e) {
        let t = { ...this.pending.units.user };
        (e || null == this.pending.activeUserId || delete t[this.pending.activeUserId],
            (this.pending = { ...this.pending, activeUserId: null, units: { ...this.pending.units, user: t } }),
            this.backend.save(U(this.pending)));
    }
    hasAssignment(e, t, n) {
        let i = "user" === e ? this.launchUserEvaluation : this.active.units.installation[t];
        return this.frozen.has(`${e}:${n}`) || i?.assignments[r().v3(n)] != null;
    }
    read(e, t, n, i, a) {
        let s = "user" === e && (null == t || "" === t),
            l = `${e}:${n}`,
            o = this.frozen.get(l),
            d = !1;
        if (null == o) {
            let a = "user" === e ? this.launchUserId : t,
                c = "user" === e ? this.launchUserEvaluation : null == a ? void 0 : this.active.units.installation[a],
                u = c?.assignments[r().v3(n)],
                _ = null == a || "" === a ? "latch_no_unit" : null == u ? "latch_no_record" : void 0;
            ((o = {
                kind: e,
                unitId: a,
                experimentName: n,
                evaluationId: null == _ && u?.isOverride !== !0 ? c?.evaluationId : void 0,
                assignment: null == _ ? u : void 0,
                locations: [],
                applied: i && (s || t === a) && null == _ && u?.isOverride !== !0,
                suppression: _,
            }),
                this.frozen.set(l, o),
                (d = !0));
        }
        let c = s || t === o.unitId;
        return (
            null != a && c && !o.locations.includes(a) && (o.locations.push(a), (d = !0)),
            i && c && !o.applied && null != o.assignment && !o.assignment.isOverride && ((o.applied = !0), (d = !0)),
            d && this.backend.recordReceipt(o),
            o
        );
    }
    appliedUsers() {
        return [...this.frozen.values()].filter((e) => "user" === e.kind && e.applied);
    }
    drainReceipts(e) {
        return this.backend.drainReceipts(e);
    }
}
class F {
    host;
    track;
    getLaunchLatchFlags;
    latch;
    latchUserId = null;
    latchInstallationId = null;
    lastLatchUserId = null;
    appliedLatchUsers = new Map();
    authenticatedUsers = new Set();
    accountSwitchSuppressions = new Set();
    receiptStates = new Map();
    constructor(
        e,
        t,
        n,
        i = () =>
            (function (e) {
                let t = (0, D.c)("installation", { location: "apex_launch_latch_flags" });
                if ("" === t) return v.defaultConfig;
                let n = e.getAssignment("installation", t, v.name),
                    i = null == n ? void 0 : v.variations[n.variantId];
                return null != i && "function" != typeof i ? i : v.defaultConfig;
            })(e),
    ) {
        ((this.host = e), (this.track = t), (this.getLaunchLatchFlags = i), (this.latch = new k(n)));
    }
    updateUnits() {
        let e = (0, D.c)("installation", { location: "apex_launch_latch" });
        this.setUnits(L.default.isAuthenticated() ? L.default.getId() : null, "" === e ? null : e);
    }
    setUnits(e, t) {
        if (
            (null != e && this.authenticatedUsers.add(e),
            null != e &&
                null != this.lastLatchUserId &&
                e !== this.lastLatchUserId &&
                (this.accountSwitchSuppressions.clear(), this.getLaunchLatchFlags().suppressions))
        ) {
            let e = new Map(this.appliedLatchUsers);
            for (let t of this.latch.appliedUsers()) e.set(t.experimentName, t);
            for (let t of e.values()) this.trackAccountSwitchSuppression(t.experimentName, t.unitId);
        }
        (null != e && (this.lastLatchUserId = e), (this.latchUserId = e), (this.latchInstallationId = t));
    }
    drainReceipts(e) {
        if (null == e) {
            (this.drainReceipts("user"), this.drainReceipts("installation"));
            return;
        }
        if ("user" === e && null == this.latchUserId) return;
        let t = this.getLaunchLatchFlags(),
            n = new Map();
        for (let t of this.latch.drainReceipts(e)) {
            let e = w(t),
                i = this.receiptStates.get(e);
            (null == i
                ? ((i = { receipt: U(t), exposedLocations: new Set() }), this.receiptStates.set(e, i))
                : G(i.receipt, t),
                n.set(e, i));
        }
        for (let i of n.values()) {
            if ("suppressed" === i.outcome || "ignored" === i.outcome) continue;
            let n = i.receipt;
            if (n.assignment?.isOverride) {
                i.outcome = "ignored";
                continue;
            }
            let r = "user" === e ? this.latchUserId : this.latchInstallationId;
            "user" === n.kind && n.applied && this.appliedLatchUsers.set(n.experimentName, n);
            let a =
                n.suppression ??
                (null == r || "" === r
                    ? "latch_no_unit"
                    : n.unitId !== r
                      ? "user" === n.kind && null != n.unitId && this.authenticatedUsers.has(n.unitId)
                          ? "latch_account_switched"
                          : "latch_unit_mismatch"
                      : null == n.assignment
                        ? "latch_no_record"
                        : void 0);
            if (null != a) {
                if ("exposed" === i.outcome) continue;
                ((i.outcome = "suppressed"),
                    "latch_account_switched" === a
                        ? this.trackAccountSwitchSuppression(n.experimentName, n.unitId)
                        : t.suppressions && this.trackExposureSuppression(n.experimentName, a, n.kind, r));
                continue;
            }
            if (!n.applied) continue;
            let s = n.assignment;
            if (
                !t.exposures ||
                null == n.evaluationId ||
                null == s ||
                !s.exposureTrackingEnabled ||
                s.useAsEligibility ||
                null == s.revision ||
                null == r
            ) {
                i.outcome ??= "ignored";
                continue;
            }
            for (let t of ((i.outcome = "exposed"), new Set(["app_launch", ...n.locations])))
                i.exposedLocations.has(t) ||
                    (i.exposedLocations.add(t),
                    this.host.trackExperimentExposure(
                        n.evaluationId,
                        n.experimentName,
                        t,
                        e,
                        s.revision,
                        s.trackedVariantId ?? s.variantId,
                        r,
                    ));
        }
    }
    onAssignmentsIngested(e, t, n) {
        if ("guild" !== e && this.getLaunchLatchFlags().writer) {
            let i = { ...n.assignments };
            for (let [e, t] of Object.entries(this.host.getOverrides())) {
                let n = this.host.getHash(e);
                i[n]?.isAppLaunch && (i[n] = { ...t, isAppLaunch: !0 });
            }
            this.latch.write(e, t, { ...n, assignments: i }, this.latchUserId);
        }
    }
    resolveConfigAssignment(e, t, n) {
        if (
            "guild" === e ||
            !(this.host.getServerAssignment(e, t, n)?.isAppLaunch || this.latch.hasAssignment(e, t, n))
        )
            return;
        let i = this.getLaunchLatchFlags();
        if (i.writer || i.reads) {
            let r = this.latch.read(e, null == t || "" === t ? null : t, n, !1);
            if ((this.drainReceipts(e), i.reads)) {
                let i = r.unitId === t && ("user" !== e || t === this.latchUserId);
                return (
                    "user" === e &&
                        !i &&
                        null != r.assignment &&
                        !r.assignment.isOverride &&
                        null != r.unitId &&
                        null != this.latchUserId &&
                        this.latchUserId !== r.unitId &&
                        this.authenticatedUsers.has(r.unitId) &&
                        this.trackAccountSwitchSuppression(n, r.unitId),
                    { evaluationId: i ? r.evaluationId : void 0, assignment: r.assignment }
                );
            }
        }
    }
    onConfigApplied(e, t, n) {
        if (
            "guild" !== e &&
            this.getLaunchLatchFlags().reads &&
            (this.latch.hasAssignment(e, t, n) || this.host.getServerAssignment(e, t, n)?.isAppLaunch)
        ) {
            if (
                "user" !== e ||
                null == this.latchUserId ||
                this.latch.read(e, null == t || "" === t ? null : t, n, !1).unitId === this.latchUserId
            )
                (this.latch.read(e, null == t || "" === t ? null : t, n, !0), this.drainReceipts(e));
        }
    }
    logout(e) {
        (this.latch.logout(e), (this.latchUserId = null));
    }
    trackAccountSwitchSuppression(e, t) {
        !this.getLaunchLatchFlags().suppressions ||
            this.accountSwitchSuppressions.has(e) ||
            (this.trackExposureSuppression(e, "latch_account_switched", "user", t),
            this.accountSwitchSuppressions.add(e));
    }
    trackExposureSuppression(e, t, n, i) {
        if ("user" === n)
            this.track(
                d.sE.EXPERIMENT_USER_EXPOSURE_SUPPRESSED,
                { experiment: e, unit_type: n, suppression_source: t },
                { flush: !0 },
            );
        else {
            let r = i ?? Object.keys(this.host.getState().evaluatedExperiments.installation)[0];
            this.track(
                d.sE.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED,
                { experiment: e, unit_type: n, suppression_source: t, installation_id: r },
                { flush: !0 },
            );
        }
    }
}
var B = n(652215);
let V = new (class extends C {
    launchLatch;
    lastEmittedDebugVariantId;
    constructor() {
        (super(
            O.h,
            {
                CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                CONNECTION_OPEN_STATE_UPDATE: (e) => {
                    this.updateLaunchLatchUnits();
                    let t = this.setExperimentAssignments(e.apexExperiments);
                    return (null != e.apexExperiments && this.drainLaunchLatchReceipts(), t);
                },
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
                APEX_EXPERIMENTS_FETCH_SUCCESS: (e) => {
                    (this.updateLaunchLatchUnits(),
                        this.handleFetchSuccess(e.unitId, e.experiments),
                        null != e.experiments && this.drainLaunchLatchReceipts());
                },
                APEX_EXPERIMENTS_FETCH_FAILURE: (e) => this.handleFetchFailure(e.unitId),
                LOGOUT: (e) => this.handleLogout(e.isSwitchingAccount),
            },
            O.A.Early,
        ),
            this.registerExperiment(v),
            (this.track = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return y.default.track(...t);
            }),
            (this.surface = "discord_app"),
            this.addChangeListener(() => this.maybeEmitDebugExperimentEvent()));
    }
    initialize(e) {
        (this.waitFor(L.default),
            this.loadStoredState(e, (0, R.DI)()),
            this.initializeLaunchLatch(),
            this.updateLaunchLatchUnits());
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
            y.default.track(B.HAw.EXPERIMENT_APEX_DEBUGGING_EVENT, {
                experiment: "2026-03-debug-experiment",
                apex_debug_variant: n,
                experiment_location: "apex_assignments_received",
            }));
    }
    initializeLaunchLatch() {
        this.launchLatch = new F(this, this.track);
    }
    updateLaunchLatchUnits() {
        this.launchLatch?.updateUnits();
    }
    onAssignmentsIngested(e, t, n) {
        this.launchLatch?.onAssignmentsIngested(e, t, n);
    }
    resolveConfigAssignment(e, t, n) {
        return this.launchLatch?.resolveConfigAssignment(e, t, n);
    }
    onConfigApplied(e, t, n) {
        this.launchLatch?.onConfigApplied(e, t, n);
    }
    drainLaunchLatchReceipts(e) {
        this.launchLatch?.drainReceipts(e);
    }
    handleLogout(e) {
        (this.launchLatch?.logout(!0 === e), super.handleLogout(e));
    }
    clearForTests() {
        (super.clearForTests(), this.initializeLaunchLatch());
    }
    handleConnectionOpen(e) {
        this.updateLaunchLatchUnits();
        let t = e.guilds.reduce((e, t) => (null != t.experiments && (e[t.id] = t.experiments), e), {}),
            n = this.setExperimentAssignments(e.apexExperiments, t);
        return (null != e.apexExperiments && this.drainLaunchLatchReceipts(), n);
    }
    handleGuildCreate(e) {
        let t = e.guild.experiments;
        if (null == t) return !0;
        let n = { [e.guild.id]: t };
        return this.setGuildExperimentAssignments(n);
    }
})();
