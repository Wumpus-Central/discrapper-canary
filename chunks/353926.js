r.d(n, {
    V: function () {
        return eh;
    }
});
var i = r(789020);
var a = r(411104);
var o = r(47120);
var s = r(757143);
var l = r(392711),
    u = r.n(l),
    c = r(108131),
    d = r.n(c),
    f = r(433517),
    p = r(570140),
    h = r(865427),
    _ = r(710845),
    m = r(314897),
    g = r(412788),
    E = r(626135),
    v = r(360359),
    y = r(987338),
    b = r(981631);
function I(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let T = 'scientist:triggered',
    S = 'exerimentOverrides',
    A = 'userExperimentOverrides',
    C = 'guildExperimentOverrides',
    N = 1,
    R = new _.Z('ExperimentStore'),
    O = !1,
    D = {},
    L = {},
    x = {
        rawUserExperiments: [],
        rawGuildExperiments: []
    },
    w = {},
    P = {},
    M = {},
    k = {},
    U = {},
    B = 'staging' === window.GLOBAL_ENV.RELEASE_CHANNEL,
    G = {};
function Z(e) {
    let n = G[e];
    if (void 0 !== n) return n;
    {
        let n = d().v3(e);
        return (G[e] = n), n;
    }
}
let F = y.qO.map((e) => Z(e)),
    V = 604800000;
function j(e, n) {
    return e || F.includes(n);
}
function H(e) {
    var n;
    return ((null !== (n = e.flags) && void 0 !== n ? n : 0) & b.xW$.STAFF) === b.xW$.STAFF || null != e.personal_connection_id || !1;
}
function Y(e, n, r, i) {
    let a = ''.concat(n.type, '|').concat(e),
        o = n.triggerDebuggingEnabled && void 0 !== r && r.length > 0;
    if (n.type === y.xY.USER) return o && ((a += '|'.concat(r)), i && (a += '|triggerDebugging')), a;
    if (n.type === y.xY.GUILD) return (a += '|'.concat(n.guildId)), o && ((a += '|'.concat(r)), i && (a += '|triggerDebugging')), a;
    throw Error();
}
function W(e) {
    if (e.type === y.xY.USER) return Z(''.concat(e.bucket, '|').concat(e.revision));
    if (e.type === y.xY.GUILD) return Z(''.concat(e.bucket, '|').concat(e.revision, '|').concat(e.guildId));
    throw Error();
}
let K = Date.now(),
    z = !1;
function q(e, n, r, i) {
    let a = D[Y(e, n, r, i)];
    return !(null == a || (z ? a.time < K : Date.now() - a.time > V)) && a.hash === W(n);
}
function Q(e) {
    let { experimentId: n, descriptor: r, location: i, location_stack: a, context: o, fingerprint: s, excluded: l, exposureType: u } = e,
        c = !1;
    switch (r.assignmentSource) {
        case 'override':
            return !1;
        case 'ready_payload':
            r.sessionId !== m.default.getSessionId() && (c = !0);
            break;
        case 'logged_out_api':
            r.fingerprint !== m.default.getFingerprint() && (c = !0);
            break;
        default:
            c = !0;
    }
    if (r.override) return !1;
    let d = u === y.a0.AUTO_FALLBACK && !!r.triggerDebuggingEnabled;
    if (q(n, r, i, d)) return !1;
    if (r.type === y.xY.USER) {
        let e = {
            name: n,
            revision: r.revision,
            population: r.population,
            bucket: r.bucket,
            location: i,
            location_stack: a,
            hash_result: r.hashResult,
            excluded: l,
            exposure_type: u,
            assignment_source: r.assignmentSource,
            assignment_session_id: r.sessionId,
            assignment_loaded_from_cache: r.loadedFromCache
        };
        null != o && (e.context_guild_id = o.guildId);
        let f = d ? b.rMx.EXPERIMENT_USER_TRIGGERED_FALLBACK : b.rMx.EXPERIMENT_USER_TRIGGERED;
        if (c) {
            let n = {
                ...e,
                assignment_fingerprint: r.fingerprint,
                current_session_id: m.default.getSessionId(),
                current_fingerprint: m.default.getFingerprint(),
                current_source: x.source
            };
            E.default.track(b.rMx.EXPERIMENT_USER_TRIGGERED_IGNORED, n, {
                flush: !1,
                fingerprint: s
            });
        } else
            E.default.track(f, e, {
                flush: !0,
                fingerprint: s
            });
    } else if (r.type === y.xY.GUILD) {
        let e = d ? b.rMx.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : b.rMx.EXPERIMENT_GUILD_TRIGGERED,
            o = {
                name: n,
                revision: r.revision,
                bucket: r.bucket,
                guild_id: r.guildId,
                location: i,
                location_stack: a,
                hash_result: r.hashResult,
                excluded: l,
                exposure_type: u,
                assignment_source: r.assignmentSource,
                assignment_session_id: r.sessionId,
                assignment_loaded_from_cache: r.loadedFromCache
            };
        if (c) {
            let e = {
                ...o,
                assignment_fingerprint: r.fingerprint,
                current_session_id: m.default.getSessionId(),
                current_fingerprint: m.default.getFingerprint(),
                current_source: x.source
            };
            E.default.track(b.rMx.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, {
                flush: !1,
                fingerprint: s
            });
        } else
            E.default.track(e, o, {
                flush: !0,
                fingerprint: s
            });
    }
    !c &&
        ((D[Y(n, r, i, d)] = {
            time: Date.now(),
            hash: W(r)
        }),
        ep(D));
}
function X(e) {
    let [n, r] = e;
    return null != v.Z[n] ? v.Z[n](r) : null;
}
function J(e) {
    let n = {};
    if (null == e) return n;
    for (let { b: r, k: i } of e) for (let e of i) n[e] = r;
    return n;
}
function $(e) {
    let [n, r] = e;
    return {
        buckets: n.map((e) => {
            let [n, r] = e;
            return {
                bucket: n,
                positions: r.map((e) => {
                    let { s: n, e: r } = e;
                    return {
                        start: n,
                        end: r
                    };
                })
            };
        }),
        filters: r.map(X),
        rawFilterData: r
    };
}
function ee(e) {
    var n;
    !B && 'CONNECTION_OPEN' === e.type && H(e.user) && (B = !0),
        'EXPERIMENTS_FETCH_SUCCESS' === e.type &&
            O &&
            'ready_payload' === x.source &&
            E.default.track(b.rMx.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: x.source,
                current_snapshot_session_id: x.sessionId,
                current_snapshot_fingerprint: x.fingerprint
            }),
        (w = {}),
        (P = {}),
        (M = {});
    let i = 'CONNECTION_OPEN' === e.type || null == e.fingerprint || e.fingerprint === m.default.getFingerprint(),
        { experiments: a, guildExperiments: o } = e,
        s = 'CONNECTION_OPEN' === e.type ? 'ready_payload' : 'logged_out_api',
        l = 'sessionId' in e ? e.sessionId : null !== (n = m.default.getSessionId()) && void 0 !== n ? n : '',
        u = m.default.getFingerprint();
    i &&
        et(
            {
                rawUserExperiments: a,
                rawGuildExperiments: null != o ? o : [],
                source: s,
                sessionId: l,
                fingerprint: u
            },
            !1
        ),
        r(598984).Vx.trackExposure(),
        (O = !0);
}
function et(e) {
    let { rawUserExperiments: n, rawGuildExperiments: r, source: i, sessionId: a, fingerprint: o } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (x = {
        rawUserExperiments: n,
        rawGuildExperiments: null != r ? r : [],
        source: i,
        sessionId: a,
        fingerprint: o
    }),
        n.forEach((e) => {
            let [n, r, l, u, c, d, f, p] = e;
            w[n] = {
                type: 'user',
                revision: r,
                population: c,
                bucket: l,
                override: 0 === u,
                hashResult: null != d ? d : -1,
                aaMode: 1 === f,
                triggerDebuggingEnabled: j(1 === p, n),
                assignmentSource: i,
                sessionId: a,
                loadedFromCache: s,
                fingerprint: o
            };
        }),
        null != r &&
            r.forEach((e) => {
                let [n, r, l, u, c, d, f, p, h, _] = e;
                P[n] = {
                    hashKey: r,
                    revision: l,
                    populations: u.map($),
                    overrides: J(c),
                    overridesFormatted: (null != d ? d : []).map((e) => e.map($)),
                    holdoutName: null != f ? f : null,
                    holdoutBucket: null != p ? p : null,
                    aaMode: 1 === h,
                    triggerDebuggingEnabled: j(1 === _, n),
                    assignmentSource: i,
                    sessionId: a,
                    loadedFromCache: s,
                    fingerprint: o
                };
            });
}
function en(e, n, r) {
    let i = null;
    for (let { buckets: o, filters: s } of n) {
        var a = !0;
        if (null != s) {
            for (let n of s)
                if (null != n && !n(e)) {
                    a = !1;
                    break;
                }
        }
        if (!a) continue;
        let n = o.find((e) => {
            let { positions: n } = e;
            return n.some((e) => {
                let { start: n, end: i } = e;
                return r >= n && r < i;
            });
        });
        if ((i = null != n ? n.bucket : y.NZ.CONTROL) === y.NZ.NOT_ELIGIBLE) break;
        return i;
    }
    return null;
}
let er = 10000;
function ei(e, n) {
    var r, i;
    let a = Z(n),
        o = P[''.concat(a)];
    if (null == o) return null;
    let { revision: s, aaMode: l } = o,
        u = o.overrides[e],
        c = o.triggerDebuggingEnabled;
    if (null != u)
        return u === y.NZ.NOT_ELIGIBLE
            ? null
            : {
                  type: y.xY.GUILD,
                  guildId: e,
                  revision: s,
                  bucket: u,
                  override: !0,
                  hashResult: -1,
                  triggerDebuggingEnabled: c
              };
    let d = Z(''.concat(null !== (r = o.hashKey) && void 0 !== r ? r : n, ':').concat(e)) % er,
        f = null;
    for (let n of null !== (i = o.overridesFormatted) && void 0 !== i ? i : [])
        if (null !== (f = en(e, n, d)))
            return {
                type: y.xY.GUILD,
                guildId: e,
                revision: o.revision,
                bucket: f,
                override: !0,
                hashResult: d,
                triggerDebuggingEnabled: c,
                assignmentSource: o.assignmentSource,
                sessionId: o.sessionId,
                loadedFromCache: o.loadedFromCache
            };
    if (null == (f = en(e, o.populations, d))) return null;
    if (null != o.holdoutName && null != o.holdoutBucket && o.holdoutName !== n) {
        let n = ei(e, o.holdoutName);
        if (
            (null == n ? void 0 : n.bucket) != null &&
            (!0 !== n.override &&
                Q({
                    experimentId: o.holdoutName,
                    descriptor: n
                }),
            (null == n ? void 0 : n.bucket) === o.holdoutBucket)
        )
            return null;
    }
    return {
        type: y.xY.GUILD,
        guildId: e,
        revision: o.revision,
        bucket: f,
        hashResult: d,
        aaMode: l,
        triggerDebuggingEnabled: c,
        assignmentSource: o.assignmentSource,
        sessionId: o.sessionId,
        loadedFromCache: o.loadedFromCache
    };
}
function ea(e) {
    let n = {};
    for (let i in e) {
        var r;
        let a = e[i];
        for (let e of ((n[i] = { ...a }), n[i].populations)) e.filters = e.rawFilterData.map(X);
        for (let e of null !== (r = n[i].overridesFormatted) && void 0 !== r ? r : []) for (let n of e) n.filters = n.rawFilterData.map(X);
    }
    return n;
}
function eo(e) {
    let { serializedExperimentStore: n, user: r } = e;
    !B && H(r) && (B = !0),
        (O = n.hasLoadedExperiments),
        (D = n.trackedExposureExperiments),
        (w = n.loadedUserExperiments),
        (k = n.userExperimentOverrides),
        (U = n.guildExperimentOverrides),
        (x = {
            ...x,
            source: n.assignmentSource,
            sessionId: n.assignmentSessionId,
            fingerprint: n.assignmentFingerprint
        }),
        (P = ea(n.loadedGuildExperiments)),
        (M = {});
}
function es() {
    O = !0;
}
function el(e) {
    let { isSwitchingAccount: n } = e;
    f.K.remove(T),
        !n && (f.K.remove(S), f.K.remove(A), f.K.remove(C), (k = {}), (U = {})),
        (w = {}),
        (x = {
            ...x,
            rawUserExperiments: []
        }),
        (D = {}),
        (O = !1);
}
function eu() {
    (O = !1), (D = {}), (P = {}), f.K.remove(T);
}
function ec() {
    let e = f.K.get(T);
    if (null == e || e.v !== N) return {};
    let n = e.e,
        r = Date.now(),
        i = !1;
    for (let e in n) r - n[e].time > V && (delete n[e], (i = !0));
    return i && ep(n), n;
}
function ed() {
    var e, n, r;
    let i = [null !== (e = f.K.get(S)) && void 0 !== e ? e : {}, null !== (n = f.K.get(A)) && void 0 !== n ? n : {}, null !== (r = f.K.get(C)) && void 0 !== r ? r : {}];
    (k = {}), (U = {});
    let a = !u().isEmpty(i[0]);
    for (let e of i)
        for (let n in e) {
            let r = e[n];
            null == r || (r.type !== y.xY.USER && r.type !== y.xY.GUILD) || null == r.bucket || !0 !== r.override || r.fromCookie ? (delete e[n], (a = !0)) : r.type === y.xY.USER ? (k[n] = r) : (U[n] = r);
        }
    let o = (0, h._S)();
    for (let e in o)
        (k[e] = {
            type: y.xY.USER,
            revision: 1,
            population: 0,
            override: !0,
            fromCookie: !0,
            assignmentSource: 'override',
            bucket: o[e]
        }),
            (U[e] = {
                type: y.xY.GUILD,
                revision: 1,
                override: !0,
                fromCookie: !0,
                assignmentSource: 'override',
                bucket: o[e]
            }),
            (a = !0);
    a && ef();
}
function ef() {
    try {
        f.K.set(A, k);
    } catch (e) {
        R.error('Error saving user experiment overrides, unsaved data will be lost', e),
            E.default.track(b.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
    try {
        f.K.set(C, U);
    } catch (e) {
        R.error('Error saving guild experiment overrides, unsaved data will be lost', e),
            E.default.track(b.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
}
function ep(e) {
    try {
        f.K.set(T, {
            v: N,
            e: e
        });
    } catch (e) {
        R.error('Error saving tracked exposure experiments, unsaved data will be lost', e),
            E.default.track(b.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveTrackedExposureExperiments'
            });
    }
}
function eh(e) {
    let { experimentId: n, experimentType: r, title: i, description: a, buckets: o, commonTriggerPoint: s } = e;
    L[n] = {
        type: r,
        title: i,
        description: a,
        buckets: o,
        commonTriggerPoint: s
    };
}
function e_(e) {
    var n;
    let { experimentId: r, experimentBucket: i, experimentType: a, skipCleanup: o } = e,
        s = null != a ? a : null === (n = L[r]) || void 0 === n ? void 0 : n.type;
    if (null == s) return !1;
    if (
        (null == i
            ? ((k = { ...k }), delete k[r], (U = { ...U }), delete U[r])
            : 'user' === s
              ? (k = {
                    ...k,
                    [r]: {
                        type: s,
                        revision: 1,
                        population: 0,
                        bucket: i,
                        override: !0
                    }
                })
              : (U = {
                    ...U,
                    [r]: {
                        type: s,
                        revision: 1,
                        bucket: i,
                        override: !0
                    }
                }),
        !o)
    )
        for (let e of [k, U]) for (let n in e) null == L[n] && delete k[n];
    ef();
}
function em(e) {
    let { guild: n } = e;
    for (let e in M) {
        let [r] = e.split(':');
        n.id === r && delete M[e];
    }
}
class eg extends g.Z {
    initialize() {
        (D = ec()), ed(), this.waitFor(m.default), this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(eg.LATEST_SNAPSHOT_VERSION);
        null != e && ('loadedUserExperiments' in e ? ((w = e.loadedUserExperiments), (P = ea(e.loadedGuildExperiments)), Object.values(w).forEach((e) => (e.loadedFromCache = !0)), Object.values(P).forEach((e) => (e.loadedFromCache = !0))) : et(e, !0));
    }
    takeSnapshot() {
        return {
            version: eg.LATEST_SNAPSHOT_VERSION,
            data: { ...x }
        };
    }
    get hasLoadedExperiments() {
        return O;
    }
    hasRegisteredExperiment(e) {
        return null != L[e];
    }
    getUserExperimentDescriptor(e) {
        if (B) {
            let n = k[e];
            if (null != n) return n;
        }
        let n = Z(e);
        return w[''.concat(n)];
    }
    getGuildExperimentDescriptor(e, n) {
        let r = null != n ? n : b.lds,
            i = U[e];
        if (B && null != i) return i;
        let a = ''.concat(r, ':').concat(e);
        if (a in M) return M[a];
        let o = ei(r, e);
        return (M[a] = o), o;
    }
    getUserExperimentBucket(e) {
        let n = this.getUserExperimentDescriptor(e);
        return null != n ? n.bucket : y.NZ.NOT_ELIGIBLE;
    }
    getGuildExperimentBucket(e, n) {
        let r = this.getGuildExperimentDescriptor(e, n);
        return null != r ? r.bucket : y.NZ.NOT_ELIGIBLE;
    }
    getAllUserExperimentDescriptors() {
        return w;
    }
    getGuildExperiments() {
        return P;
    }
    getLoadedUserExperiment(e) {
        return w[Z(e)];
    }
    getLoadedGuildExperiment(e) {
        return P[Z(e)];
    }
    getRecentExposures(e, n) {
        let r = ''.concat(e, '|').concat(n, '|');
        return Object.entries(D)
            .filter((e) => {
                let [n] = e;
                return n.startsWith(r);
            })
            .map((e) => {
                let [n, { time: i }] = e;
                return [n.replace(r, ''), i];
            });
    }
    getRegisteredExperiments() {
        return L;
    }
    getAllExperimentOverrideDescriptors() {
        return B
            ? {
                  ...k,
                  ...U
              }
            : {};
    }
    getExperimentOverrideDescriptor(e) {
        var n;
        return B ? (null !== (n = k[e]) && void 0 !== n ? n : U[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            n = {};
        for (let r in (Object.keys(L).forEach((e) => {
            n[Z(''.concat(e))] = e;
        }),
        w)) {
            let i = n[r];
            null != i && (e[i] = w[r].bucket);
        }
        for (let n in M) {
            let r = M[n];
            null != r && (e[n] = r.bucket);
        }
        return e;
    }
    getSerializedState() {
        let e = {};
        for (let n in P) for (let r of ((e[n] = JSON.parse(JSON.stringify(P[n]))), e[n].populations)) r.filters = [];
        return {
            hasLoadedExperiments: O,
            trackedExposureExperiments: D,
            loadedUserExperiments: w,
            loadedGuildExperiments: e,
            userExperimentOverrides: k,
            guildExperimentOverrides: U,
            assignmentSource: x.source,
            assignmentSessionId: x.sessionId,
            assignmentFingerprint: x.fingerprint
        };
    }
    hasExperimentTrackedExposure(e, n, r, i) {
        return q(e, n, r, i);
    }
    constructor() {
        super(
            {
                LOGOUT: el,
                LOGIN_SUCCESS: eu,
                CONNECTION_OPEN: ee,
                EXPERIMENTS_FETCH_SUCCESS: ee,
                OVERLAY_INITIALIZE: eo,
                EXPERIMENTS_FETCH_FAILURE: es,
                EXPERIMENT_OVERRIDE_BUCKET: e_,
                GUILD_CREATE: em,
                GUILD_UPDATE: em
            },
            p.c.Early
        ),
            I(this, 'trackExposure', Q);
    }
}
I(eg, 'displayName', 'ExperimentStore'), I(eg, 'LATEST_SNAPSHOT_VERSION', 1), (n.Z = new eg());
