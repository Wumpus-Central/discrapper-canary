n.d(t, {
    A: () => ey,
    N: () => em,
}),
    n(896048),
    n(938796),
    n(65821),
    n(228524),
    n(747238),
    n(812715),
    n(457529);
var r = n(735438),
    i = n.n(r),
    a = n(181370),
    s = n.n(a),
    o = n(506774),
    l = n(73153),
    c = n(380610),
    u = n(626584),
    d = n(961350),
    f = n(536802),
    p = n(954571),
    _ = n(98801),
    h = n(688151),
    m = n(652215);

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
    A = "exerimentOverrides",
    v = "userExperimentOverrides",
    S = "guildExperimentOverrides",
    I = 1,
    T = new u.A("ExperimentStore"),
    C = !1,
    N = {},
    R = new Map(),
    w = {},
    P = {
        rawUserExperiments: [],
        rawGuildExperiments: [],
    },
    D = {},
    x = {},
    L = {},
    j = {},
    M = {},
    k = null,
    U = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, c.kK)(),
    G = {};

function V(e) {
    let t = G[e];
    if (void 0 !== t) return t;
    {
        let t = s().v3(e);
        return (G[e] = t), t;
    }
}
let F = h.NM.map((e) => V(e)),
    B = 6048e5;

function H(e, t) {
    return e || F.includes(t);
}

function Y(e) {
    var t;
    return ((null != (t = e.flags) ? t : 0) & m.nhx.STAFF) === m.nhx.STAFF || null != e.personal_connection_id;
}

function W(e, t, n, r) {
    let i = "".concat(t.type, "|").concat(e),
        a = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    if (t.type === h.Vh.USER) return a && ((i += "|".concat(n)), r && (i += "|triggerDebugging")), i;
    if (t.type === h.Vh.GUILD)
        return (i += "|".concat(t.guildId)), a && ((i += "|".concat(n)), r && (i += "|triggerDebugging")), i;
    throw Error();
}

function K(e) {
    if (e.type === h.Vh.USER) return V("".concat(e.bucket, "|").concat(e.revision));
    if (e.type === h.Vh.GUILD) return V("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
    throw Error();
}
let z = Date.now(),
    q = !1;

function X(e, t) {
    let n = N[e];
    return !(null == n || (q ? n.time < z : Date.now() - n.time > B)) && n.hash === t;
}

function Z(e, t) {
    return R.get(e) === t;
}

function Q(e) {
    let {
            experimentId: t,
            descriptor: n,
            location: r,
            location_stack: i,
            context: a,
            fingerprint: s,
            excluded: o,
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
    let u = l === h.vf.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
        f = W(t, n, r, u),
        _ = K(n);
    if ((c && Z(f, _)) || X(f, _)) return !1;
    if (n.type === h.Vh.USER) {
        let e = {
            name: t,
            revision: n.revision,
            population: n.population,
            bucket: n.bucket,
            location: r,
            location_stack: i,
            hash_result: n.hashResult,
            excluded: o,
            exposure_type: l,
            assignment_source: n.assignmentSource,
            assignment_session_id: n.sessionId,
            assignment_loaded_from_cache: n.loadedFromCache,
            holdout_name: n.holdoutName,
            holdout_revision: n.holdoutRevision,
            holdout_bucket: n.holdoutBucket,
        };
        null != a && (e.context_guild_id = a.guildId);
        let f = u ? m.HAw.EXPERIMENT_USER_TRIGGERED_FALLBACK : m.HAw.EXPERIMENT_USER_TRIGGERED;
        if (c) {
            let t = y(E({}, e), {
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: P.source,
            });
            p.default.track(m.HAw.EXPERIMENT_USER_TRIGGERED_IGNORED, t, {
                flush: !1,
                fingerprint: s,
            });
        } else
            p.default.track(f, e, {
                flush: !0,
                fingerprint: s,
            });
    } else if (n.type === h.Vh.GUILD) {
        let e = u ? m.HAw.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : m.HAw.EXPERIMENT_GUILD_TRIGGERED,
            a = {
                name: t,
                revision: n.revision,
                bucket: n.bucket,
                guild_id: n.guildId,
                location: r,
                location_stack: i,
                hash_result: n.hashResult,
                excluded: o,
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
                current_source: P.source,
            });
            p.default.track(m.HAw.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, {
                flush: !1,
                fingerprint: s,
            });
        } else
            p.default.track(e, a, {
                flush: !0,
                fingerprint: s,
            });
    }
    c
        ? R.set(f, _)
        : ((N[W(t, n, r, u)] = {
              time: Date.now(),
              hash: K(n),
          }),
          eh(N));
}

function $(e) {
    let [t, n] = e;
    return null != _.k[t] ? _.k[t](n) : null;
}

function J(e) {
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
        filters: n.map($),
        rawFilterData: n,
    };
}

function et(e) {
    var t;
    !U && "CONNECTION_OPEN" === e.type && Y(e.user) && (U = !0),
        "EXPERIMENTS_FETCH_SUCCESS" === e.type &&
            C &&
            "ready_payload" === P.source &&
            p.default.track(m.HAw.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: P.source,
                current_snapshot_session_id: P.sessionId,
                current_snapshot_fingerprint: P.fingerprint,
            }),
        (D = {}),
        (x = {}),
        (L = {});
    let n = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
        { experiments: r, guildExperiments: i } = e,
        a = "CONNECTION_OPEN" === e.type ? "ready_payload" : "logged_out_api",
        s = "sessionId" in e ? e.sessionId : null != (t = d.default.getSessionId()) ? t : "",
        o = d.default.getFingerprint();
    n &&
        en(
            {
                rawUserExperiments: r,
                rawGuildExperiments: null != i ? i : [],
                source: a,
                sessionId: s,
                fingerprint: o,
            },
            !1,
        ),
        (C = !0);
}

function en(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: r, sessionId: i, fingerprint: a } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (P = {
        rawUserExperiments: t,
        rawGuildExperiments: null != n ? n : [],
        source: r,
        sessionId: i,
        fingerprint: a,
    }),
        t.forEach((e) => {
            let [t, n, o, l, c, u, d, f, p, _, h] = e;
            D[t] = {
                type: "user",
                revision: n,
                population: c,
                bucket: o,
                override: 0 === l,
                hashResult: null != u ? u : -1,
                aaMode: 1 === d,
                triggerDebuggingEnabled: H(1 === f, t),
                assignmentSource: r,
                sessionId: i,
                loadedFromCache: s,
                fingerprint: a,
                holdoutName: p,
                holdoutRevision: _,
                holdoutBucket: h,
            };
        }),
        null != n &&
            n.forEach((e) => {
                let [t, n, o, l, c, u, d, f, p, _] = e;
                x[t] = {
                    hashKey: n,
                    revision: o,
                    populations: l.map(ee),
                    overrides: J(c),
                    overridesFormatted: (null != u ? u : []).map((e) => e.map(ee)),
                    holdoutName: null != d ? d : null,
                    holdoutControlBucket: null != f ? f : null,
                    aaMode: 1 === p,
                    triggerDebuggingEnabled: H(1 === _, t),
                    assignmentSource: r,
                    sessionId: i,
                    loadedFromCache: s,
                    fingerprint: a,
                };
            });
}

function er(e, t, n) {
    let r = null;
    for (let { buckets: a, filters: s } of t) {
        var i = !0;
        if (null != s) {
            for (let t of s)
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
        if ((r = null != t ? t.bucket : h.RE.CONTROL) === h.RE.NOT_ELIGIBLE) break;
        return r;
    }
    return null;
}
let ei = 1e4;

function ea(e, t) {
    var n, r;
    let i = V(t),
        a = x["".concat(i)];
    if (null == a) return null;
    let { revision: s, aaMode: o } = a,
        l = a.overrides[e],
        c = a.triggerDebuggingEnabled;
    if (null != l)
        return l === h.RE.NOT_ELIGIBLE
            ? null
            : {
                  type: h.Vh.GUILD,
                  guildId: e,
                  revision: s,
                  bucket: l,
                  override: !0,
                  hashResult: -1,
                  triggerDebuggingEnabled: c,
              };
    let u = V("".concat(null != (n = a.hashKey) ? n : t, ":").concat(e)) % ei,
        d = null;
    for (let t of null != (r = a.overridesFormatted) ? r : [])
        if (null !== (d = er(e, t, u)))
            return {
                type: h.Vh.GUILD,
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
            Q({
                experimentId: a.holdoutName,
                descriptor: f,
            }),
        (null == f ? void 0 : f.bucket) === a.holdoutControlBucket)
        ? null
        : {
              type: h.Vh.GUILD,
              guildId: e,
              revision: a.revision,
              bucket: d,
              hashResult: u,
              aaMode: o,
              triggerDebuggingEnabled: c,
              assignmentSource: a.assignmentSource,
              sessionId: a.sessionId,
              loadedFromCache: a.loadedFromCache,
              holdoutName: null != f ? a.holdoutName : null,
              holdoutRevision: null == f ? void 0 : f.revision,
              holdoutBucket: null == f ? void 0 : f.bucket,
          };
}

function es(e) {
    let t = {};
    for (let r in e) {
        var n;
        let i = e[r];
        for (let e of ((t[r] = E({}, i)), t[r].populations)) e.filters = e.rawFilterData.map($);
        for (let e of null != (n = t[r].overridesFormatted) ? n : [])
            for (let t of e) t.filters = t.rawFilterData.map($);
    }
    return t;
}

function eo(e) {
    let { serializedExperimentStore: t, user: n } = e;
    if (
        (!U && Y(n) && (U = !0),
        (C = t.hasLoadedExperiments),
        (N = t.trackedExposureExperiments),
        (D = t.loadedUserExperiments),
        (j = t.userExperimentOverrides),
        (M = t.guildExperimentOverrides),
        (P = y(E({}, P), {
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint,
        })),
        (x = es(t.loadedGuildExperiments)),
        (L = {}),
        __OVERLAY__)
    ) {
        var r;
        (k = null != (r = t.cookieOverrides) ? r : null), ef();
    }
}

function el() {
    C = !0;
}

function ec(e) {
    let { isSwitchingAccount: t } = e;
    o.w.remove(O),
        t || (o.w.remove(A), o.w.remove(v), o.w.remove(S), (j = {}), (M = {})),
        (D = {}),
        (P = y(E({}, P), {
            rawUserExperiments: [],
        })),
        (N = {}),
        (C = !1);
}

function eu() {
    (C = !1), (N = {}), (x = {}), o.w.remove(O);
}

function ed() {
    let e = o.w.get(O);
    if (null == e || e.v !== I) return {};
    let t = e.e,
        n = Date.now(),
        r = !1;
    for (let e in t) n - t[e].time > B && (delete t[e], (r = !0));
    return r && eh(t), t;
}

function ef() {
    let e = !1,
        t = __OVERLAY__ ? k : (0, c.DI)();
    for (let n in t)
        (j[n] = {
            type: h.Vh.USER,
            revision: 1,
            population: 0,
            override: !0,
            fromCookie: !0,
            assignmentSource: "override",
            bucket: t[n],
        }),
            (M[n] = {
                type: h.Vh.GUILD,
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
    let r = [null != (e = o.w.get(A)) ? e : {}, null != (t = o.w.get(v)) ? t : {}, null != (n = o.w.get(S)) ? n : {}];
    (j = {}), (M = {});
    let a = !i().isEmpty(r[0]);
    for (let e of r)
        for (let t in e) {
            let n = e[t];
            null == n ||
            (n.type !== h.Vh.USER && n.type !== h.Vh.GUILD) ||
            null == n.bucket ||
            !0 !== n.override ||
            n.fromCookie
                ? (delete e[t], (a = !0))
                : n.type === h.Vh.USER
                  ? (j[t] = n)
                  : (M[t] = n);
        }
    (a = ef() || a) && e_();
}

function e_() {
    try {
        o.w.set(v, j);
    } catch (e) {
        T.error("Error saving user experiment overrides, unsaved data will be lost", e),
            p.default.track(m.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
    try {
        o.w.set(S, M);
    } catch (e) {
        T.error("Error saving guild experiment overrides, unsaved data will be lost", e),
            p.default.track(m.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
}

function eh(e) {
    try {
        o.w.set(O, {
            v: I,
            e: e,
        });
    } catch (e) {
        T.error("Error saving tracked exposure experiments, unsaved data will be lost", e),
            p.default.track(m.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveTrackedExposureExperiments",
            });
    }
}

function em(e) {
    let { experimentId: t, experimentType: n, title: r, description: i, buckets: a, commonTriggerPoint: s } = e;
    w[t] = {
        type: n,
        title: r,
        description: i,
        buckets: a,
        commonTriggerPoint: s,
    };
}

function eg(e) {
    var t;
    let { experimentId: n, experimentBucket: r, experimentType: i, skipCleanup: a } = e,
        s = null != i ? i : null == (t = w[n]) ? void 0 : t.type;
    if (null == s) return !1;
    if (
        (null == r
            ? ((j = E({}, j)), delete j[n], (M = E({}, M)), delete M[n])
            : "user" === s
              ? (j = y(E({}, j), {
                    [n]: {
                        type: s,
                        revision: 1,
                        population: 0,
                        bucket: r,
                        override: !0,
                    },
                }))
              : (M = y(E({}, M), {
                    [n]: {
                        type: s,
                        revision: 1,
                        bucket: r,
                        override: !0,
                    },
                })),
        !a)
    )
        for (let e of [j, M]) for (let t in e) null == w[t] && delete j[t];
    e_();
}

function eE(e) {
    let { guild: t } = e;
    for (let e in L) {
        let [n] = e.split(":");
        t.id === n && delete L[e];
    }
}
class eb extends f.A {
    initialize() {
        (N = ed()), ep(), this.waitFor(d.default), this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(eb.LATEST_SNAPSHOT_VERSION);
        null != e &&
            ("loadedUserExperiments" in e
                ? ((D = e.loadedUserExperiments),
                  (x = es(e.loadedGuildExperiments)),
                  Object.values(D).forEach((e) => (e.loadedFromCache = !0)),
                  Object.values(x).forEach((e) => (e.loadedFromCache = !0)))
                : en(e, !0));
    }
    takeSnapshot() {
        return {
            version: eb.LATEST_SNAPSHOT_VERSION,
            data: E({}, P),
        };
    }
    get hasLoadedExperiments() {
        return C;
    }
    hasRegisteredExperiment(e) {
        return null != w[e];
    }
    getUserExperimentDescriptor(e) {
        if (U) {
            let t = j[e];
            if (null != t) return t;
        }
        let t = V(e);
        return D["".concat(t)];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = null != t ? t : m.dJq,
            r = M[e];
        if (U && null != r) return r;
        let i = "".concat(n, ":").concat(e);
        if (i in L) return L[i];
        let a = ea(n, e);
        return (L[i] = a), a;
    }
    getUserExperimentBucket(e) {
        let t = this.getUserExperimentDescriptor(e);
        return null != t ? t.bucket : h.RE.NOT_ELIGIBLE;
    }
    getGuildExperimentBucket(e, t) {
        let n = this.getGuildExperimentDescriptor(e, t);
        return null != n ? n.bucket : h.RE.NOT_ELIGIBLE;
    }
    getAllUserExperimentDescriptors() {
        return D;
    }
    getGuildExperiments() {
        return x;
    }
    getLoadedUserExperiment(e) {
        return D[V(e)];
    }
    getLoadedGuildExperiment(e) {
        return x[V(e)];
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
        return w;
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
        for (let n in (Object.keys(w).forEach((e) => {
            t[V("".concat(e))] = e;
        }),
        D)) {
            let r = t[n];
            null != r && (e[r] = D[n].bucket);
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
            hasLoadedExperiments: C,
            trackedExposureExperiments: N,
            loadedUserExperiments: D,
            loadedGuildExperiments: e,
            userExperimentOverrides: j,
            guildExperimentOverrides: M,
            cookieOverrides: (0, c.DI)(),
            assignmentSource: P.source,
            assignmentSessionId: P.sessionId,
            assignmentFingerprint: P.fingerprint,
        };
    }
    hasExperimentTrackedExposure(e, t, n, r) {
        return X(W(e, t, n, r), K(t));
    }
    constructor() {
        super(
            {
                LOGOUT: ec,
                LOGIN_SUCCESS: eu,
                CONNECTION_OPEN: et,
                EXPERIMENTS_FETCH_SUCCESS: et,
                OVERLAY_INITIALIZE: eo,
                EXPERIMENTS_FETCH_FAILURE: el,
                EXPERIMENT_OVERRIDE_BUCKET: eg,
                GUILD_CREATE: eE,
                GUILD_UPDATE: eE,
            },
            l.A.Early,
        ),
            g(this, "trackExposure", Q);
    }
}
g(eb, "displayName", "ExperimentStore"), g(eb, "LATEST_SNAPSHOT_VERSION", 1);
let ey = new eb();
