n.d(t, { Z: () => M }), n(388685), n(467055);
var r,
    i = n(108131),
    a = n.n(i),
    o = n(442837),
    s = n(579092),
    l = n(433517),
    c = n(341691),
    u = n(231338);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e, t) {
    if ("object" !== b(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" !== b(r)) return r;
        throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
}
function E(e) {
    var t = g(e, "string");
    return "symbol" === b(t) ? t : String(t);
}
function b(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
let y = new s.Yd("ApexExperimentStore");
(null == window.TextEncoder || null == window.TextDecoder) && n(251171);
let O = [c.Cm.User],
    v = {
        user: {},
        guild: {},
    },
    S = {},
    I = {},
    T = {},
    C = {},
    A = new Set(),
    N = new Set(),
    P = "apexTrackedExposures",
    R = 2,
    D = 604800000,
    w = {},
    x = 2,
    L = {};
function j(e) {
    let t = L[e];
    return null == t && ((t = a().v3(e)), (L[e] = t)), t;
}
class M extends (r = o.ZP.PersistedStore) {
    loadStoredState(e, t) {
        for (let n in (null != e && e.version === x && ((I = e.clientOverrides), (v = e.evaluatedExperiments)),
        (T = {}),
        t)) {
            let e = j(n),
                r = t[n];
            T[n] = {
                hashedName: e,
                variantId: r,
                isOverride: !0,
                exposureTrackingEnabled: !1,
            };
        }
        w = this.loadTrackedExposures();
    }
    getState() {
        return {
            version: x,
            evaluatedExperiments: v,
            clientOverrides: I,
        };
    }
    setExperimentAssignments(e) {
        if (null == e) return !1;
        for (let t of O) {
            let n = c.Oz[t],
                r = e.assignments[t];
            if (null == r || null == n) continue;
            let i = v[n];
            for (let e in r) {
                N.add(e);
                let { evaluation_id: t, assignments: n } = r[e],
                    a = {
                        evaluationId: null != t ? t : void 0,
                        assignments: {},
                    };
                for (let [t, r, o, s, l] of ((i[e] = a), n))
                    null != o || (o = 0),
                        (a.assignments[t] = {
                            hashedName: t,
                            variantId: r,
                            trackedVariantId: l,
                            isOverride: (o & c.V8.IsOverride) != 0,
                            revision: s,
                            exposureTrackingEnabled: (o & c.V8.ExposureTrackingEnabled) != 0,
                        });
            }
        }
        return !0;
    }
    createOverride(e, t) {
        (I = _(f({}, I), {
            [e]: {
                hashedName: j(e),
                variantId: t,
                isOverride: !0,
                exposureTrackingEnabled: !1,
            },
        })),
            this.trackExposureSuppression(e, "client_override");
    }
    deleteOverride(e) {
        let { [e]: t } = I;
        I = m(I, [e].map(E));
    }
    setExperimentsMetadata(e) {
        C = f({}, C, Object.fromEntries(e.map((e) => [e.name, e])));
    }
    getExperimentsMetadata() {
        return C;
    }
    getClientOverrides() {
        return I;
    }
    getExperimentClientOverride(e) {
        return I[e];
    }
    handleLogout(e) {
        e || this.clearAllServerAssignments(), l.K.remove(P), this.clearAllTrackedExposures();
    }
    registerExperiment(e) {
        (S[e.name] = e), null != T[e.name] && this.trackExposureSuppression(e.name, "cookie_override");
    }
    getRegisteredExperiments() {
        return S;
    }
    getAssignment(e, t, n) {
        var r;
        let i = null != (r = I[n]) ? r : T[n];
        return null != i ? i : this.getServerAssignment(e, t, n);
    }
    getServerAssignment(e, t, n) {
        let r = j(n),
            i = v[e][t];
        if (null != i) return i.assignments[r];
    }
    getEvaluation(e, t) {
        var n;
        return null == (n = v[e][t]) ? void 0 : n.evaluationId;
    }
    getEvaluationAndAssignment(e, t, n) {
        var r;
        let i = null != (r = I[n]) ? r : T[n];
        if (null != i) return [void 0, i];
        let a = v[e][t];
        return null == a ? [void 0, void 0] : [a.evaluationId, a.assignments[j(n)]];
    }
    trackExperimentExposure(e, t, n, r, i, a) {
        let o = j("".concat(t, "|").concat(i, "|").concat(a, "|").concat(n));
        this.shouldTrackExposure(o) &&
            "user" === r &&
            (this.track(
                u.j_.EXPERIMENT_USER_EVALUATION_EXPOSED,
                {
                    evaluation_id: e,
                    experiment: t,
                    exposure_location: n,
                    unit_type: r,
                    tracked_variation_id: a,
                },
                { flush: !0 },
            ),
            (w[o] = Date.now()),
            this.saveTrackedExposures(w));
    }
    trackCommonTriggerPointExposures(e) {
        for (let t of this.evaluationIds("user")) {
            let n = j("".concat(t, "|").concat(e));
            this.shouldTrackExposure(n) &&
                (this.track(
                    u.j_.EXPERIMENT_USER_EVALUATION_EXPOSED,
                    {
                        evaluation_id: t,
                        exposure_location: e,
                        unit_type: "user",
                    },
                    { flush: !0 },
                ),
                (w[n] = Date.now()),
                this.saveTrackedExposures(w));
        }
    }
    trackExposureSuppression(e, t) {
        let n = S[e];
        null != n &&
            "user" === n.kind &&
            this.track(
                u.j_.EXPERIMENT_USER_EXPOSURE_SUPPRESSED,
                {
                    experiment: e,
                    unit_type: "user",
                    suppression_source: t,
                },
                { flush: !0 },
            );
    }
    evaluationIds(e) {
        return Object.values(v[e])
            .map((e) => e.evaluationId)
            .filter((e) => null != e);
    }
    shouldTrackExposure(e) {
        let t = w[e];
        return null == t || Date.now() - t > D;
    }
    loadTrackedExposures() {
        let e = l.K.get(P);
        if (null == e || e.version !== R) return {};
        let t = e.exposures,
            n = Date.now(),
            r = !1;
        for (let e in t) n - t[e] > D && (delete t[e], (r = !0));
        return r && this.saveTrackedExposures(t), t;
    }
    saveTrackedExposures(e) {
        try {
            l.K.set(P, {
                version: R,
                exposures: e,
            });
        } catch (e) {
            y.error("Error saving tracked exposures", e),
                this.track(
                    u.j_.EXPERIMENT_SAVE_EXPOSURE_FAILED,
                    {
                        module: this.surface,
                        call: "ApexExperimentStore.saveTrackedExposures",
                    },
                    { flush: !0 },
                );
        }
    }
    clearForTests() {
        this.clearAllServerAssignments(),
            this.clearAllOverrides(),
            this.clearAllTrackedExposures(),
            A.clear(),
            N.clear();
    }
    clearAllServerAssignments() {
        v = {
            user: {},
            guild: {},
        };
    }
    clearAllOverrides() {
        (I = {}), (T = {});
    }
    clearAllTrackedExposures() {
        w = {};
    }
    getHash(e) {
        return j(e);
    }
    handleFetchStart(e) {
        A.add(e);
    }
    handleFetchSuccess(e, t) {
        A.delete(e), N.add(e), this.setExperimentAssignments(t);
    }
    handleFetchFailure(e) {
        A.delete(e), N.add(e);
    }
    isFetching(e) {
        return A.has(e);
    }
    hasLoaded(e) {
        return N.has(e);
    }
    constructor(...e) {
        super(...e), d(this, "track", () => Promise.resolve()), d(this, "surface", "unset");
    }
}
d(M, "displayName", "ApexExperimentStore"), d(M, "persistKey", "ApexExperimentStore");
