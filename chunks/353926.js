n.d(t, {
    V: () => ed,
    Z: () => eh
}),
    n(47120),
    n(789020),
    n(411104),
    n(757143);
var i = n(392711),
    r = n.n(i),
    a = n(108131),
    s = n.n(a),
    o = n(433517),
    l = n(570140),
    u = n(865427),
    c = n(710845),
    d = n(314897),
    f = n(412788),
    _ = n(626135),
    p = n(360359),
    h = n(987338),
    m = n(981631);
function g(e, t, n) {
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
let E = 'scientist:triggered',
    v = 'exerimentOverrides',
    y = 'userExperimentOverrides',
    I = 'guildExperimentOverrides',
    T = 1,
    b = new c.Z('ExperimentStore'),
    S = !1,
    A = {},
    N = new Map(),
    C = {},
    R = {
        rawUserExperiments: [],
        rawGuildExperiments: []
    },
    O = {},
    D = {},
    L = {},
    x = {},
    w = {},
    P = 'staging' === window.GLOBAL_ENV.RELEASE_CHANNEL,
    M = {};
function k(e) {
    let t = M[e];
    if (void 0 !== t) return t;
    {
        let t = s().v3(e);
        return (M[e] = t), t;
    }
}
let U = h.qO.map((e) => k(e)),
    G = 604800000;
function B(e, t) {
    return e || U.includes(t);
}
function Z(e) {
    var t;
    return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & m.xW$.STAFF) === m.xW$.STAFF || null != e.personal_connection_id;
}
function F(e, t, n, i) {
    let r = ''.concat(t.type, '|').concat(e),
        a = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    if (t.type === h.xY.USER) return a && ((r += '|'.concat(n)), i && (r += '|triggerDebugging')), r;
    if (t.type === h.xY.GUILD) return (r += '|'.concat(t.guildId)), a && ((r += '|'.concat(n)), i && (r += '|triggerDebugging')), r;
    throw Error();
}
function V(e) {
    if (e.type === h.xY.USER) return k(''.concat(e.bucket, '|').concat(e.revision));
    if (e.type === h.xY.GUILD) return k(''.concat(e.bucket, '|').concat(e.revision, '|').concat(e.guildId));
    throw Error();
}
let j = Date.now(),
    H = !1;
function Y(e, t) {
    let n = A[e];
    return !(null == n || (H ? n.time < j : Date.now() - n.time > G)) && n.hash === t;
}
function W(e, t) {
    return N.get(e) === t;
}
function K(e) {
    let { experimentId: t, descriptor: n, location: i, location_stack: r, context: a, fingerprint: s, excluded: o, exposureType: l } = e,
        u = !1;
    switch (n.assignmentSource) {
        case 'override':
            return !1;
        case 'ready_payload':
            n.sessionId !== d.default.getSessionId() && (u = !0);
            break;
        case 'logged_out_api':
            n.fingerprint !== d.default.getFingerprint() && (u = !0);
            break;
        default:
            u = !0;
    }
    if (n.override) return !1;
    let c = l === h.a0.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
        f = F(t, n, i, c),
        p = V(n);
    if ((u && W(f, p)) || Y(f, p)) return !1;
    if (n.type === h.xY.USER) {
        let e = {
            name: t,
            revision: n.revision,
            population: n.population,
            bucket: n.bucket,
            location: i,
            location_stack: r,
            hash_result: n.hashResult,
            excluded: o,
            exposure_type: l,
            assignment_source: n.assignmentSource,
            assignment_session_id: n.sessionId,
            assignment_loaded_from_cache: n.loadedFromCache
        };
        null != a && (e.context_guild_id = a.guildId);
        let f = c ? m.rMx.EXPERIMENT_USER_TRIGGERED_FALLBACK : m.rMx.EXPERIMENT_USER_TRIGGERED;
        if (u) {
            let t = {
                ...e,
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: R.source
            };
            _.default.track(m.rMx.EXPERIMENT_USER_TRIGGERED_IGNORED, t, {
                flush: !1,
                fingerprint: s
            });
        } else
            _.default.track(f, e, {
                flush: !0,
                fingerprint: s
            });
    } else if (n.type === h.xY.GUILD) {
        let e = c ? m.rMx.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : m.rMx.EXPERIMENT_GUILD_TRIGGERED,
            a = {
                name: t,
                revision: n.revision,
                bucket: n.bucket,
                guild_id: n.guildId,
                location: i,
                location_stack: r,
                hash_result: n.hashResult,
                excluded: o,
                exposure_type: l,
                assignment_source: n.assignmentSource,
                assignment_session_id: n.sessionId,
                assignment_loaded_from_cache: n.loadedFromCache
            };
        if (u) {
            let e = {
                ...a,
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: R.source
            };
            _.default.track(m.rMx.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, {
                flush: !1,
                fingerprint: s
            });
        } else
            _.default.track(e, a, {
                flush: !0,
                fingerprint: s
            });
    }
    u
        ? N.set(f, p)
        : ((A[F(t, n, i, c)] = {
              time: Date.now(),
              hash: V(n)
          }),
          ec(A));
}
function z(e) {
    let [t, n] = e;
    return null != p.Z[t] ? p.Z[t](n) : null;
}
function q(e) {
    let t = {};
    if (null == e) return t;
    for (let { b: n, k: i } of e) for (let e of i) t[e] = n;
    return t;
}
function Q(e) {
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
                        end: n
                    };
                })
            };
        }),
        filters: n.map(z),
        rawFilterData: n
    };
}
function X(e) {
    var t;
    !P && 'CONNECTION_OPEN' === e.type && Z(e.user) && (P = !0),
        'EXPERIMENTS_FETCH_SUCCESS' === e.type &&
            S &&
            'ready_payload' === R.source &&
            _.default.track(m.rMx.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: R.source,
                current_snapshot_session_id: R.sessionId,
                current_snapshot_fingerprint: R.fingerprint
            }),
        (O = {}),
        (D = {}),
        (L = {});
    let i = 'CONNECTION_OPEN' === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
        { experiments: r, guildExperiments: a } = e,
        s = 'CONNECTION_OPEN' === e.type ? 'ready_payload' : 'logged_out_api',
        o = 'sessionId' in e ? e.sessionId : null !== (t = d.default.getSessionId()) && void 0 !== t ? t : '',
        l = d.default.getFingerprint();
    i &&
        J(
            {
                rawUserExperiments: r,
                rawGuildExperiments: null != a ? a : [],
                source: s,
                sessionId: o,
                fingerprint: l
            },
            !1
        ),
        n(598984).Vx.trackExposure(),
        (S = !0);
}
function J(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: i, sessionId: r, fingerprint: a } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (R = {
        rawUserExperiments: t,
        rawGuildExperiments: null != n ? n : [],
        source: i,
        sessionId: r,
        fingerprint: a
    }),
        t.forEach((e) => {
            let [t, n, o, l, u, c, d, f] = e;
            O[t] = {
                type: 'user',
                revision: n,
                population: u,
                bucket: o,
                override: 0 === l,
                hashResult: null != c ? c : -1,
                aaMode: 1 === d,
                triggerDebuggingEnabled: B(1 === f, t),
                assignmentSource: i,
                sessionId: r,
                loadedFromCache: s,
                fingerprint: a
            };
        }),
        null != n &&
            n.forEach((e) => {
                let [t, n, o, l, u, c, d, f, _, p] = e;
                D[t] = {
                    hashKey: n,
                    revision: o,
                    populations: l.map(Q),
                    overrides: q(u),
                    overridesFormatted: (null != c ? c : []).map((e) => e.map(Q)),
                    holdoutName: null != d ? d : null,
                    holdoutBucket: null != f ? f : null,
                    aaMode: 1 === _,
                    triggerDebuggingEnabled: B(1 === p, t),
                    assignmentSource: i,
                    sessionId: r,
                    loadedFromCache: s,
                    fingerprint: a
                };
            });
}
function $(e, t, n) {
    let i = null;
    for (let { buckets: a, filters: s } of t) {
        var r = !0;
        if (null != s) {
            for (let t of s)
                if (null != t && !t(e)) {
                    r = !1;
                    break;
                }
        }
        if (!r) continue;
        let t = a.find((e) => {
            let { positions: t } = e;
            return t.some((e) => {
                let { start: t, end: i } = e;
                return n >= t && n < i;
            });
        });
        if ((i = null != t ? t.bucket : h.NZ.CONTROL) === h.NZ.NOT_ELIGIBLE) break;
        return i;
    }
    return null;
}
let ee = 10000;
function et(e, t) {
    var n, i;
    let r = k(t),
        a = D[''.concat(r)];
    if (null == a) return null;
    let { revision: s, aaMode: o } = a,
        l = a.overrides[e],
        u = a.triggerDebuggingEnabled;
    if (null != l)
        return l === h.NZ.NOT_ELIGIBLE
            ? null
            : {
                  type: h.xY.GUILD,
                  guildId: e,
                  revision: s,
                  bucket: l,
                  override: !0,
                  hashResult: -1,
                  triggerDebuggingEnabled: u
              };
    let c = k(''.concat(null !== (n = a.hashKey) && void 0 !== n ? n : t, ':').concat(e)) % ee,
        d = null;
    for (let t of null !== (i = a.overridesFormatted) && void 0 !== i ? i : [])
        if (null !== (d = $(e, t, c)))
            return {
                type: h.xY.GUILD,
                guildId: e,
                revision: a.revision,
                bucket: d,
                override: !0,
                hashResult: c,
                triggerDebuggingEnabled: u,
                assignmentSource: a.assignmentSource,
                sessionId: a.sessionId,
                loadedFromCache: a.loadedFromCache
            };
    if (null == (d = $(e, a.populations, c))) return null;
    if (null != a.holdoutName && null != a.holdoutBucket && a.holdoutName !== t) {
        let t = et(e, a.holdoutName);
        if (
            (null == t ? void 0 : t.bucket) != null &&
            (!0 !== t.override &&
                K({
                    experimentId: a.holdoutName,
                    descriptor: t
                }),
            (null == t ? void 0 : t.bucket) === a.holdoutBucket)
        )
            return null;
    }
    return {
        type: h.xY.GUILD,
        guildId: e,
        revision: a.revision,
        bucket: d,
        hashResult: c,
        aaMode: o,
        triggerDebuggingEnabled: u,
        assignmentSource: a.assignmentSource,
        sessionId: a.sessionId,
        loadedFromCache: a.loadedFromCache
    };
}
function en(e) {
    let t = {};
    for (let i in e) {
        var n;
        let r = e[i];
        for (let e of ((t[i] = { ...r }), t[i].populations)) e.filters = e.rawFilterData.map(z);
        for (let e of null !== (n = t[i].overridesFormatted) && void 0 !== n ? n : []) for (let t of e) t.filters = t.rawFilterData.map(z);
    }
    return t;
}
function ei(e) {
    let { serializedExperimentStore: t, user: n } = e;
    !P && Z(n) && (P = !0),
        (S = t.hasLoadedExperiments),
        (A = t.trackedExposureExperiments),
        (O = t.loadedUserExperiments),
        (x = t.userExperimentOverrides),
        (w = t.guildExperimentOverrides),
        (R = {
            ...R,
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint
        }),
        (D = en(t.loadedGuildExperiments)),
        (L = {});
}
function er() {
    S = !0;
}
function ea(e) {
    let { isSwitchingAccount: t } = e;
    o.K.remove(E),
        t || (o.K.remove(v), o.K.remove(y), o.K.remove(I), (x = {}), (w = {})),
        (O = {}),
        (R = {
            ...R,
            rawUserExperiments: []
        }),
        (A = {}),
        (S = !1);
}
function es() {
    (S = !1), (A = {}), (D = {}), o.K.remove(E);
}
function eo() {
    let e = o.K.get(E);
    if (null == e || e.v !== T) return {};
    let t = e.e,
        n = Date.now(),
        i = !1;
    for (let e in t) n - t[e].time > G && (delete t[e], (i = !0));
    return i && ec(t), t;
}
function el() {
    var e, t, n;
    let i = [null !== (e = o.K.get(v)) && void 0 !== e ? e : {}, null !== (t = o.K.get(y)) && void 0 !== t ? t : {}, null !== (n = o.K.get(I)) && void 0 !== n ? n : {}];
    (x = {}), (w = {});
    let a = !r().isEmpty(i[0]);
    for (let e of i)
        for (let t in e) {
            let n = e[t];
            null == n || (n.type !== h.xY.USER && n.type !== h.xY.GUILD) || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], (a = !0)) : n.type === h.xY.USER ? (x[t] = n) : (w[t] = n);
        }
    let s = (0, u._S)();
    for (let e in s)
        (x[e] = {
            type: h.xY.USER,
            revision: 1,
            population: 0,
            override: !0,
            fromCookie: !0,
            assignmentSource: 'override',
            bucket: s[e]
        }),
            (w[e] = {
                type: h.xY.GUILD,
                revision: 1,
                override: !0,
                fromCookie: !0,
                assignmentSource: 'override',
                bucket: s[e]
            }),
            (a = !0);
    a && eu();
}
function eu() {
    try {
        o.K.set(y, x);
    } catch (e) {
        b.error('Error saving user experiment overrides, unsaved data will be lost', e),
            _.default.track(m.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
    try {
        o.K.set(I, w);
    } catch (e) {
        b.error('Error saving guild experiment overrides, unsaved data will be lost', e),
            _.default.track(m.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
}
function ec(e) {
    try {
        o.K.set(E, {
            v: T,
            e: e
        });
    } catch (e) {
        b.error('Error saving tracked exposure experiments, unsaved data will be lost', e),
            _.default.track(m.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveTrackedExposureExperiments'
            });
    }
}
function ed(e) {
    let { experimentId: t, experimentType: n, title: i, description: r, buckets: a, commonTriggerPoint: s } = e;
    C[t] = {
        type: n,
        title: i,
        description: r,
        buckets: a,
        commonTriggerPoint: s
    };
}
function ef(e) {
    var t;
    let { experimentId: n, experimentBucket: i, experimentType: r, skipCleanup: a } = e,
        s = null != r ? r : null === (t = C[n]) || void 0 === t ? void 0 : t.type;
    if (null == s) return !1;
    if (
        (null == i
            ? ((x = { ...x }), delete x[n], (w = { ...w }), delete w[n])
            : 'user' === s
              ? (x = {
                    ...x,
                    [n]: {
                        type: s,
                        revision: 1,
                        population: 0,
                        bucket: i,
                        override: !0
                    }
                })
              : (w = {
                    ...w,
                    [n]: {
                        type: s,
                        revision: 1,
                        bucket: i,
                        override: !0
                    }
                }),
        !a)
    )
        for (let e of [x, w]) for (let t in e) null == C[t] && delete x[t];
    eu();
}
function e_(e) {
    let { guild: t } = e;
    for (let e in L) {
        let [n] = e.split(':');
        t.id === n && delete L[e];
    }
}
class ep extends f.Z {
    initialize() {
        (A = eo()), el(), this.waitFor(d.default), this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(ep.LATEST_SNAPSHOT_VERSION);
        null != e && ('loadedUserExperiments' in e ? ((O = e.loadedUserExperiments), (D = en(e.loadedGuildExperiments)), Object.values(O).forEach((e) => (e.loadedFromCache = !0)), Object.values(D).forEach((e) => (e.loadedFromCache = !0))) : J(e, !0));
    }
    takeSnapshot() {
        return {
            version: ep.LATEST_SNAPSHOT_VERSION,
            data: { ...R }
        };
    }
    get hasLoadedExperiments() {
        return S;
    }
    hasRegisteredExperiment(e) {
        return null != C[e];
    }
    getUserExperimentDescriptor(e) {
        if (P) {
            let t = x[e];
            if (null != t) return t;
        }
        let t = k(e);
        return O[''.concat(t)];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = null != t ? t : m.lds,
            i = w[e];
        if (P && null != i) return i;
        let r = ''.concat(n, ':').concat(e);
        if (r in L) return L[r];
        let a = et(n, e);
        return (L[r] = a), a;
    }
    getUserExperimentBucket(e) {
        let t = this.getUserExperimentDescriptor(e);
        return null != t ? t.bucket : h.NZ.NOT_ELIGIBLE;
    }
    getGuildExperimentBucket(e, t) {
        let n = this.getGuildExperimentDescriptor(e, t);
        return null != n ? n.bucket : h.NZ.NOT_ELIGIBLE;
    }
    getAllUserExperimentDescriptors() {
        return O;
    }
    getGuildExperiments() {
        return D;
    }
    getLoadedUserExperiment(e) {
        return O[k(e)];
    }
    getLoadedGuildExperiment(e) {
        return D[k(e)];
    }
    getRecentExposures(e, t) {
        let n = ''.concat(e, '|').concat(t, '|');
        return Object.entries(A)
            .filter((e) => {
                let [t] = e;
                return t.startsWith(n);
            })
            .map((e) => {
                let [t, { time: i }] = e;
                return [t.replace(n, ''), i];
            });
    }
    getRegisteredExperiments() {
        return C;
    }
    getAllExperimentOverrideDescriptors() {
        return P
            ? {
                  ...x,
                  ...w
              }
            : {};
    }
    getExperimentOverrideDescriptor(e) {
        var t;
        return P ? (null !== (t = x[e]) && void 0 !== t ? t : w[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            t = {};
        for (let n in (Object.keys(C).forEach((e) => {
            t[k(''.concat(e))] = e;
        }),
        O)) {
            let i = t[n];
            null != i && (e[i] = O[n].bucket);
        }
        for (let t in L) {
            let n = L[t];
            null != n && (e[t] = n.bucket);
        }
        return e;
    }
    getSerializedState() {
        let e = {};
        for (let t in D) for (let n of ((e[t] = JSON.parse(JSON.stringify(D[t]))), e[t].populations)) n.filters = [];
        return {
            hasLoadedExperiments: S,
            trackedExposureExperiments: A,
            loadedUserExperiments: O,
            loadedGuildExperiments: e,
            userExperimentOverrides: x,
            guildExperimentOverrides: w,
            assignmentSource: R.source,
            assignmentSessionId: R.sessionId,
            assignmentFingerprint: R.fingerprint
        };
    }
    hasExperimentTrackedExposure(e, t, n, i) {
        return Y(F(e, t, n, i), V(t));
    }
    constructor() {
        super(
            {
                LOGOUT: ea,
                LOGIN_SUCCESS: es,
                CONNECTION_OPEN: X,
                EXPERIMENTS_FETCH_SUCCESS: X,
                OVERLAY_INITIALIZE: ei,
                EXPERIMENTS_FETCH_FAILURE: er,
                EXPERIMENT_OVERRIDE_BUCKET: ef,
                GUILD_CREATE: e_,
                GUILD_UPDATE: e_
            },
            l.c.Early
        ),
            g(this, 'trackExposure', K);
    }
}
g(ep, 'displayName', 'ExperimentStore'), g(ep, 'LATEST_SNAPSHOT_VERSION', 1);
let eh = new ep();
