(n.d(t, { Z: () => G }), n(388685), n(467055));
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function v(e, t) {
    if ('object' !== T(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || 'default');
        if ('object' !== T(r)) return r;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
function I(e) {
    var t = v(e, 'string');
    return 'symbol' === T(t) ? t : String(t);
}
function T(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let S = new u.Z('ApexExperimentStore'),
    A = [p.Cm.User],
    N = {
        user: {},
        guild: {}
    },
    C = {},
    R = {},
    P = {},
    w = {},
    D = 'apexTrackedExposures',
    L = 1,
    x = 7 * _.Z.Millis.DAY,
    k = {},
    M = {};
function j(e) {
    let t = M[e];
    return (null == t && ((t = a().v3(e)), (M[e] = t)), t);
}
class U extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        (this.waitFor(d.default), null != e && 1 === e.version && ((R = e.clientOverrides), (N = e.evaluatedExperiments)));
        let t = (0, c._S)();
        for (let e in ((P = {}), t)) {
            let n = j(e);
            P[e] = {
                hashedName: n,
                variantId: t[e],
                isOverride: !0
            };
        }
        k = this.loadTrackedExposures();
    }
    getState() {
        return {
            version: 1,
            evaluatedExperiments: N,
            clientOverrides: R
        };
    }
    processExperimentsMessage(e) {
        if (null == e) return !1;
        for (let t of A) {
            let n = p.Oz[t],
                r = e.assignments[t];
            if (null == r || null == n) continue;
            let i = N[n];
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
        ((R = b(g({}, R), {
            [e.experimentName]: {
                hashedName: j(e.experimentName),
                variantId: e.variantId,
                isOverride: !0
            }
        })),
            this.trackExposureSuppression(e.experimentName, 'client_override'));
    }
    handleApexExperimentOverrideDelete(e) {
        let t = e.experimentName,
            { [t]: n } = R;
        R = y(R, [t].map(I));
    }
    handleApexExperimentsMetadataFetchSuccess(e) {
        w = g({}, w, Object.fromEntries(e.experiments.map((e) => [e.name, e])));
    }
    getExperimentsMetadata() {
        return w;
    }
    getClientOverrides() {
        return R;
    }
    getExperimentClientOverride(e) {
        return R[e];
    }
    handleLogout(e) {
        (e.isSwitchingAccount || this.clearAllServerAssignments(), s.K.remove(D), this.clearAllTrackedExposures());
    }
    registerExperiment(e) {
        ((C[e.name] = e), null != P[e.name] && this.trackExposureSuppression(e.name, 'cookie_override'));
    }
    getRegisteredExperiments() {
        return C;
    }
    getAssignment(e, t, n) {
        var r;
        let i = null != (r = R[n]) ? r : P[n];
        return null != i ? i : this.getServerAssignment(e, t, n);
    }
    getServerAssignment(e, t, n) {
        let r = j(n),
            i = N[e][t];
        if (null != i) return i.assignments[r];
    }
    getEvaluation(e, t) {
        var n;
        return null == (n = N[e][t]) ? void 0 : n.evaluationId;
    }
    getEvaluationAndAssignment(e, t, n) {
        var r;
        let i = null != (r = R[n]) ? r : P[n];
        if (null != i) return [void 0, i];
        let a = N[e][t];
        return null == a ? [void 0, void 0] : [a.evaluationId, a.assignments[j(n)]];
    }
    trackExperimentExposure(e, t, n, r, i, a) {
        let o = j(''.concat(t, '|').concat(i, '|').concat(a, '|').concat(n));
        this.shouldTrackExposure(o) &&
            'user' === r &&
            (f.default.track(h.rMx.EXPERIMENT_USER_EVALUATION_EXPOSED, {
                evaluation_id: e,
                experiment: t,
                exposure_location: n,
                unit_type: r
            }),
            (k[o] = Date.now()),
            this.saveTrackedExposures(k));
    }
    trackCommonTriggerPointExposures(e) {
        for (let t of this.evaluationIds('user')) {
            let n = j(''.concat(t, '|').concat(e));
            this.shouldTrackExposure(n) &&
                (f.default.track(h.rMx.EXPERIMENT_USER_EVALUATION_EXPOSED, {
                    evaluation_id: t,
                    exposure_location: e,
                    unit_type: 'user'
                }),
                (k[n] = Date.now()),
                this.saveTrackedExposures(k));
        }
    }
    trackExposureSuppression(e, t) {
        let n = C[e];
        null != n &&
            'user' === n.kind &&
            f.default.track(h.rMx.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, {
                experiment: e,
                unit_type: 'user',
                suppression_source: t
            });
    }
    evaluationIds(e) {
        return Object.values(N[e])
            .map((e) => e.evaluationId)
            .filter((e) => null != e);
    }
    shouldTrackExposure(e) {
        let t = k[e];
        return null == t || Date.now() - t > x;
    }
    loadTrackedExposures() {
        let e = s.K.get(D);
        if (null == e || e.version !== L) return {};
        let t = e.exposures,
            n = Date.now(),
            r = !1;
        for (let e in t) n - t[e] > x && (delete t[e], (r = !0));
        return (r && this.saveTrackedExposures(t), t);
    }
    saveTrackedExposures(e) {
        try {
            s.K.set(D, {
                version: L,
                exposures: e
            });
        } catch (e) {
            (S.error('Error saving tracked exposures', e),
                f.default.track(h.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                    module: 'discord_app',
                    call: 'ApexExperimentStore.saveTrackedExposures'
                }));
        }
    }
    clearAllServerAssignments() {
        N = {
            user: {},
            guild: {}
        };
    }
    clearAllOverrides() {
        ((R = {}), (P = {}));
    }
    clearAllTrackedExposures() {
        k = {};
    }
    getHash(e) {
        return j(e);
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
                APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS: (e) => this.handleApexExperimentsMetadataFetchSuccess(e),
                LOGOUT: (e) => this.handleLogout(e)
            },
            l.c.Early
        );
    }
}
(m(U, 'displayName', 'ApexExperimentStore'), m(U, 'persistKey', 'ApexExperimentStore'));
let G = new U();
