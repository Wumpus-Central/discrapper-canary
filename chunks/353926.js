n.d(t, {
    V: () => eh,
    Z: () => ey,
}),
    n(388685),
    n(997841),
    n(415506),
    n(953529),
    n(35282),
    n(704826),
    n(49124);
var r = n(392711),
    i = n.n(r),
    a = n(108131),
    o = n.n(a),
    s = n(433517),
    l = n(570140),
    c = n(865427),
    u = n(710845),
    d = n(314897),
    f = n(750041),
    p = n(626135),
    _ = n(360359),
    m = n(987338),
    h = n(981631);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = "scientist:triggered",
    v = "exerimentOverrides",
    S = "userExperimentOverrides",
    I = "guildExperimentOverrides",
    T = 1,
    C = new u.Z("ExperimentStore"),
    A = !1,
    N = {},
    P = new Map(),
    R = {},
    D = {
        rawUserExperiments: [],
        rawGuildExperiments: [],
    },
    w = {},
    x = {},
    L = {},
    j = {},
    M = {},
    k = null,
    U = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, c.fD)(),
    G = {};
function Z(e) {
    let t = G[e];
    if (void 0 !== t) return t;
    {
        let t = o().v3(e);
        return (G[e] = t), t;
    }
}
let B = m.qO.map((e) => Z(e)),
    F = 604800000;
function V(e, t) {
    return e || B.includes(t);
}
function H(e) {
    var t;
    return ((null != (t = e.flags) ? t : 0) & h.xW$.STAFF) === h.xW$.STAFF || null != e.personal_connection_id;
}
function Y(e, t, n, r) {
    let i = "".concat(t.type, "|").concat(e),
        a = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    if (t.type === m.xY.USER) return a && ((i += "|".concat(n)), r && (i += "|triggerDebugging")), i;
    if (t.type === m.xY.GUILD)
        return (i += "|".concat(t.guildId)), a && ((i += "|".concat(n)), r && (i += "|triggerDebugging")), i;
    throw Error();
}
function W(e) {
    if (e.type === m.xY.USER) return Z("".concat(e.bucket, "|").concat(e.revision));
    if (e.type === m.xY.GUILD) return Z("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
    throw Error();
}
let K = Date.now(),
    z = !1;
function q(e, t) {
    let n = N[e];
    return !(null == n || (z ? n.time < K : Date.now() - n.time > F)) && n.hash === t;
}
function Q(e, t) {
    return P.get(e) === t;
}
function X(e) {
    let {
            experimentId: t,
            descriptor: n,
            location: r,
            location_stack: i,
            context: a,
            fingerprint: o,
            excluded: s,
            exposureType: l,
        } = e,
        c = !1;
    switch (n.assignmentSource) {
        case "override":
            return !1;
        case "ready_payload":
            n.sessionId !== d.default.getSessionId() && (c = !0);
            break;
        case "logged_out_api":
            n.fingerprint !== d.default.getFingerprint() && (c = !0);
            break;
        default:
            c = !0;
    }
    if (n.override) return !1;
    let u = l === m.a0.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
        f = Y(t, n, r, u),
        _ = W(n);
    if ((c && Q(f, _)) || q(f, _)) return !1;
    if (n.type === m.xY.USER) {
        let e = {
            name: t,
            revision: n.revision,
            population: n.population,
            bucket: n.bucket,
            location: r,
            location_stack: i,
            hash_result: n.hashResult,
            excluded: s,
            exposure_type: l,
            assignment_source: n.assignmentSource,
            assignment_session_id: n.sessionId,
            assignment_loaded_from_cache: n.loadedFromCache,
            holdout_name: n.holdoutName,
            holdout_revision: n.holdoutRevision,
            holdout_bucket: n.holdoutBucket,
        };
        null != a && (e.context_guild_id = a.guildId);
        let f = u ? h.rMx.EXPERIMENT_USER_TRIGGERED_FALLBACK : h.rMx.EXPERIMENT_USER_TRIGGERED;
        if (c) {
            let t = y(E({}, e), {
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: D.source,
            });
            p.default.track(h.rMx.EXPERIMENT_USER_TRIGGERED_IGNORED, t, {
                flush: !1,
                fingerprint: o,
            });
        } else
            p.default.track(f, e, {
                flush: !0,
                fingerprint: o,
            });
    } else if (n.type === m.xY.GUILD) {
        let e = u ? h.rMx.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : h.rMx.EXPERIMENT_GUILD_TRIGGERED,
            a = {
                name: t,
                revision: n.revision,
                bucket: n.bucket,
                guild_id: n.guildId,
                location: r,
                location_stack: i,
                hash_result: n.hashResult,
                excluded: s,
                exposure_type: l,
                assignment_source: n.assignmentSource,
                assignment_session_id: n.sessionId,
                assignment_loaded_from_cache: n.loadedFromCache,
                holdout_name: n.holdoutName,
                holdout_revision: n.holdoutRevision,
                holdout_bucket: n.holdoutBucket,
            };
        if (c) {
            let e = y(E({}, a), {
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: D.source,
            });
            p.default.track(h.rMx.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, {
                flush: !1,
                fingerprint: o,
            });
        } else
            p.default.track(e, a, {
                flush: !0,
                fingerprint: o,
            });
    }
    c
        ? P.set(f, _)
        : ((N[Y(t, n, r, u)] = {
              time: Date.now(),
              hash: W(n),
          }),
          em(N));
}
function J(e) {
    let [t, n] = e;
    return null != _.Z[t] ? _.Z[t](n) : null;
}
function $(e) {
    let t = {};
    if (null == e) return t;
    for (let { b: n, k: r } of e) for (let e of r) t[e] = n;
    return t;
}
function ee(e) {
    let [t, n] = e;
    return {
        buckets: t.map((e) => {
            let [t, n] = e;
            return {
                bucket: t,
                positions: n.map((e) => {
                    let { s: t, e: n } = e;
                    return {
                        start: t,
                        end: n,
                    };
                }),
            };
        }),
        filters: n.map(J),
        rawFilterData: n,
    };
}
function et(e) {
    var t;
    !U && "CONNECTION_OPEN" === e.type && H(e.user) && (U = !0),
        "EXPERIMENTS_FETCH_SUCCESS" === e.type &&
            A &&
            "ready_payload" === D.source &&
            p.default.track(h.rMx.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: D.source,
                current_snapshot_session_id: D.sessionId,
                current_snapshot_fingerprint: D.fingerprint,
            }),
        (w = {}),
        (x = {}),
        (L = {});
    let r = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
        { experiments: i, guildExperiments: a } = e,
        o = "CONNECTION_OPEN" === e.type ? "ready_payload" : "logged_out_api",
        s = "sessionId" in e ? e.sessionId : null != (t = d.default.getSessionId()) ? t : "",
        l = d.default.getFingerprint();
    r &&
        en(
            {
                rawUserExperiments: i,
                rawGuildExperiments: null != a ? a : [],
                source: o,
                sessionId: s,
                fingerprint: l,
            },
            !1,
        ),
        n(598984).Vx.trackExposure(),
        (A = !0);
}
function en(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: r, sessionId: i, fingerprint: a } = e,
        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (D = {
        rawUserExperiments: t,
        rawGuildExperiments: null != n ? n : [],
        source: r,
        sessionId: i,
        fingerprint: a,
    }),
        t.forEach((e) => {
            let [t, n, s, l, c, u, d, f, p, _, m] = e;
            w[t] = {
                type: "user",
                revision: n,
                population: c,
                bucket: s,
                override: 0 === l,
                hashResult: null != u ? u : -1,
                aaMode: 1 === d,
                triggerDebuggingEnabled: V(1 === f, t),
                assignmentSource: r,
                sessionId: i,
                loadedFromCache: o,
                fingerprint: a,
                holdoutName: p,
                holdoutRevision: _,
                holdoutBucket: m,
            };
        }),
        null != n &&
            n.forEach((e) => {
                let [t, n, s, l, c, u, d, f, p, _] = e;
                x[t] = {
                    hashKey: n,
                    revision: s,
                    populations: l.map(ee),
                    overrides: $(c),
                    overridesFormatted: (null != u ? u : []).map((e) => e.map(ee)),
                    holdoutName: null != d ? d : null,
                    holdoutControlBucket: null != f ? f : null,
                    aaMode: 1 === p,
                    triggerDebuggingEnabled: V(1 === _, t),
                    assignmentSource: r,
                    sessionId: i,
                    loadedFromCache: o,
                    fingerprint: a,
                };
            });
}
function er(e, t, n) {
    let r = null;
    for (let { buckets: a, filters: o } of t) {
        var i = !0;
        if (null != o) {
            for (let t of o)
                if (null != t && !t(e)) {
                    i = !1;
                    break;
                }
        }
        if (!i) continue;
        let t = a.find((e) => {
            let { positions: t } = e;
            return t.some((e) => {
                let { start: t, end: r } = e;
                return n >= t && n < r;
            });
        });
        if ((r = null != t ? t.bucket : m.NZ.CONTROL) === m.NZ.NOT_ELIGIBLE) break;
        return r;
    }
    return null;
}
let ei = 10000;
function ea(e, t) {
    var n, r;
    let i = Z(t),
        a = x["".concat(i)];
    if (null == a) return null;
    let { revision: o, aaMode: s } = a,
        l = a.overrides[e],
        c = a.triggerDebuggingEnabled;
    if (null != l)
        return l === m.NZ.NOT_ELIGIBLE
            ? null
            : {
                  type: m.xY.GUILD,
                  guildId: e,
                  revision: o,
                  bucket: l,
                  override: !0,
                  hashResult: -1,
                  triggerDebuggingEnabled: c,
              };
    let u = Z("".concat(null != (n = a.hashKey) ? n : t, ":").concat(e)) % ei,
        d = null;
    for (let t of null != (r = a.overridesFormatted) ? r : [])
        if (null !== (d = er(e, t, u)))
            return {
                type: m.xY.GUILD,
                guildId: e,
                revision: a.revision,
                bucket: d,
                override: !0,
                hashResult: u,
                triggerDebuggingEnabled: c,
                assignmentSource: a.assignmentSource,
                sessionId: a.sessionId,
                loadedFromCache: a.loadedFromCache,
            };
    if (null == (d = er(e, a.populations, u))) return null;
    let f = null;
    return null != a.holdoutName &&
        null != a.holdoutControlBucket &&
        a.holdoutName !== t &&
        (null == (f = ea(e, a.holdoutName)) ? void 0 : f.bucket) != null &&
        (!0 !== f.override &&
            X({
                experimentId: a.holdoutName,
                descriptor: f,
            }),
        (null == f ? void 0 : f.bucket) === a.holdoutControlBucket)
        ? null
        : {
              type: m.xY.GUILD,
              guildId: e,
              revision: a.revision,
              bucket: d,
              hashResult: u,
              aaMode: s,
              triggerDebuggingEnabled: c,
              assignmentSource: a.assignmentSource,
              sessionId: a.sessionId,
              loadedFromCache: a.loadedFromCache,
              holdoutName: null != f ? a.holdoutName : null,
              holdoutRevision: null == f ? void 0 : f.revision,
              holdoutBucket: null == f ? void 0 : f.bucket,
          };
}
function eo(e) {
    let t = {};
    for (let r in e) {
        var n;
        let i = e[r];
        for (let e of ((t[r] = E({}, i)), t[r].populations)) e.filters = e.rawFilterData.map(J);
        for (let e of null != (n = t[r].overridesFormatted) ? n : [])
            for (let t of e) t.filters = t.rawFilterData.map(J);
    }
    return t;
}
function es(e) {
    let { serializedExperimentStore: t, user: n } = e;
    if (
        (!U && H(n) && (U = !0),
        (A = t.hasLoadedExperiments),
        (N = t.trackedExposureExperiments),
        (w = t.loadedUserExperiments),
        (j = t.userExperimentOverrides),
        (M = t.guildExperimentOverrides),
        (D = y(E({}, D), {
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint,
        })),
        (x = eo(t.loadedGuildExperiments)),
        (L = {}),
        __OVERLAY__)
    ) {
        var r;
        (k = null != (r = t.cookieOverrides) ? r : null), ef();
    }
}
function el() {
    A = !0;
}
function ec(e) {
    let { isSwitchingAccount: t } = e;
    s.K.remove(O),
        t || (s.K.remove(v), s.K.remove(S), s.K.remove(I), (j = {}), (M = {})),
        (w = {}),
        (D = y(E({}, D), { rawUserExperiments: [] })),
        (N = {}),
        (A = !1);
}
function eu() {
    (A = !1), (N = {}), (x = {}), s.K.remove(O);
}
function ed() {
    let e = s.K.get(O);
    if (null == e || e.v !== T) return {};
    let t = e.e,
        n = Date.now(),
        r = !1;
    for (let e in t) n - t[e].time > F && (delete t[e], (r = !0));
    return r && em(t), t;
}
function ef() {
    let e = !1,
        t = __OVERLAY__ ? k : (0, c._S)();
    for (let n in t)
        (j[n] = {
            type: m.xY.USER,
            revision: 1,
            population: 0,
            override: !0,
            fromCookie: !0,
            assignmentSource: "override",
            bucket: t[n],
        }),
            (M[n] = {
                type: m.xY.GUILD,
                revision: 1,
                override: !0,
                fromCookie: !0,
                assignmentSource: "override",
                bucket: t[n],
            }),
            (e = !0);
    return e;
}
function ep() {
    var e, t, n;
    let r = [null != (e = s.K.get(v)) ? e : {}, null != (t = s.K.get(S)) ? t : {}, null != (n = s.K.get(I)) ? n : {}];
    (j = {}), (M = {});
    let a = !i().isEmpty(r[0]);
    for (let e of r)
        for (let t in e) {
            let n = e[t];
            null == n ||
            (n.type !== m.xY.USER && n.type !== m.xY.GUILD) ||
            null == n.bucket ||
            !0 !== n.override ||
            n.fromCookie
                ? (delete e[t], (a = !0))
                : n.type === m.xY.USER
                  ? (j[t] = n)
                  : (M[t] = n);
        }
    (a = ef() || a) && e_();
}
function e_() {
    try {
        s.K.set(S, j);
    } catch (e) {
        C.error("Error saving user experiment overrides, unsaved data will be lost", e),
            p.default.track(h.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
    try {
        s.K.set(I, M);
    } catch (e) {
        C.error("Error saving guild experiment overrides, unsaved data will be lost", e),
            p.default.track(h.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
}
function em(e) {
    try {
        s.K.set(O, {
            v: T,
            e: e,
        });
    } catch (e) {
        C.error("Error saving tracked exposure experiments, unsaved data will be lost", e),
            p.default.track(h.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveTrackedExposureExperiments",
            });
    }
}
function eh(e) {
    let { experimentId: t, experimentType: n, title: r, description: i, buckets: a, commonTriggerPoint: o } = e;
    R[t] = {
        type: n,
        title: r,
        description: i,
        buckets: a,
        commonTriggerPoint: o,
    };
}
function eg(e) {
    var t;
    let { experimentId: n, experimentBucket: r, experimentType: i, skipCleanup: a } = e,
        o = null != i ? i : null == (t = R[n]) ? void 0 : t.type;
    if (null == o) return !1;
    if (
        (null == r
            ? ((j = E({}, j)), delete j[n], (M = E({}, M)), delete M[n])
            : "user" === o
              ? (j = y(E({}, j), {
                    [n]: {
                        type: o,
                        revision: 1,
                        population: 0,
                        bucket: r,
                        override: !0,
                    },
                }))
              : (M = y(E({}, M), {
                    [n]: {
                        type: o,
                        revision: 1,
                        bucket: r,
                        override: !0,
                    },
                })),
        !a)
    )
        for (let e of [j, M]) for (let t in e) null == R[t] && delete j[t];
    e_();
}
function eE(e) {
    let { guild: t } = e;
    for (let e in L) {
        let [n] = e.split(":");
        t.id === n && delete L[e];
    }
}
class eb extends f.Z {
    initialize() {
        (N = ed()), ep(), this.waitFor(d.default), this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(eb.LATEST_SNAPSHOT_VERSION);
        null != e &&
            ("loadedUserExperiments" in e
                ? ((w = e.loadedUserExperiments),
                  (x = eo(e.loadedGuildExperiments)),
                  Object.values(w).forEach((e) => (e.loadedFromCache = !0)),
                  Object.values(x).forEach((e) => (e.loadedFromCache = !0)))
                : en(e, !0));
    }
    takeSnapshot() {
        return {
            version: eb.LATEST_SNAPSHOT_VERSION,
            data: E({}, D),
        };
    }
    get hasLoadedExperiments() {
        return A;
    }
    hasRegisteredExperiment(e) {
        return null != R[e];
    }
    getUserExperimentDescriptor(e) {
        if (U) {
            let t = j[e];
            if (null != t) return t;
        }
        let t = Z(e);
        return w["".concat(t)];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = null != t ? t : h.lds,
            r = M[e];
        if (U && null != r) return r;
        let i = "".concat(n, ":").concat(e);
        if (i in L) return L[i];
        let a = ea(n, e);
        return (L[i] = a), a;
    }
    getUserExperimentBucket(e) {
        let t = this.getUserExperimentDescriptor(e);
        return null != t ? t.bucket : m.NZ.NOT_ELIGIBLE;
    }
    getGuildExperimentBucket(e, t) {
        let n = this.getGuildExperimentDescriptor(e, t);
        return null != n ? n.bucket : m.NZ.NOT_ELIGIBLE;
    }
    getAllUserExperimentDescriptors() {
        return w;
    }
    getGuildExperiments() {
        return x;
    }
    getLoadedUserExperiment(e) {
        return w[Z(e)];
    }
    getLoadedGuildExperiment(e) {
        return x[Z(e)];
    }
    getRecentExposures(e, t) {
        let n = "".concat(e, "|").concat(t, "|");
        return Object.entries(N)
            .filter((e) => {
                let [t] = e;
                return t.startsWith(n);
            })
            .map((e) => {
                let [t, { time: r }] = e;
                return [t.replace(n, ""), r];
            });
    }
    getRegisteredExperiments() {
        return R;
    }
    getAllExperimentOverrideDescriptors() {
        return U ? E({}, j, M) : {};
    }
    getExperimentOverrideDescriptor(e) {
        var t;
        return U ? (null != (t = j[e]) ? t : M[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            t = {};
        for (let n in (Object.keys(R).forEach((e) => {
            t[Z("".concat(e))] = e;
        }),
        w)) {
            let r = t[n];
            null != r && (e[r] = w[n].bucket);
        }
        for (let t in L) {
            let n = L[t];
            null != n && (e[t] = n.bucket);
        }
        return e;
    }
    getSerializedState() {
        let e = {};
        for (let t in x) for (let n of ((e[t] = JSON.parse(JSON.stringify(x[t]))), e[t].populations)) n.filters = [];
        return {
            hasLoadedExperiments: A,
            trackedExposureExperiments: N,
            loadedUserExperiments: w,
            loadedGuildExperiments: e,
            userExperimentOverrides: j,
            guildExperimentOverrides: M,
            cookieOverrides: (0, c._S)(),
            assignmentSource: D.source,
            assignmentSessionId: D.sessionId,
            assignmentFingerprint: D.fingerprint,
        };
    }
    hasExperimentTrackedExposure(e, t, n, r) {
        return q(Y(e, t, n, r), W(t));
    }
    constructor() {
        super(
            {
                LOGOUT: ec,
                LOGIN_SUCCESS: eu,
                CONNECTION_OPEN: et,
                EXPERIMENTS_FETCH_SUCCESS: et,
                OVERLAY_INITIALIZE: es,
                EXPERIMENTS_FETCH_FAILURE: el,
                EXPERIMENT_OVERRIDE_BUCKET: eg,
                GUILD_CREATE: eE,
                GUILD_UPDATE: eE,
            },
            l.c.Early,
        ),
            g(this, "trackExposure", X);
    }
}
g(eb, "displayName", "ExperimentStore"), g(eb, "LATEST_SNAPSHOT_VERSION", 1);
let ey = new eb();
