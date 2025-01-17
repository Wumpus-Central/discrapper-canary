r.d(n, {
    V: function () {
        return eh;
    }
});
var i = r(789020);
var a = r(411104);
var s = r(47120);
var o = r(757143);
var l = r(392711),
    u = r.n(l),
    c = r(108131),
    d = r.n(c),
    f = r(433517),
    _ = r(570140),
    h = r(865427),
    p = r(710845),
    m = r(314897),
    g = r(412788),
    E = r(626135),
    v = r(360359),
    I = r(987338),
    T = r(981631);
function b(e, n, r) {
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
let y = 'scientist:triggered',
    S = 'exerimentOverrides',
    A = 'userExperimentOverrides',
    N = 'guildExperimentOverrides',
    C = 1,
    R = new p.Z('ExperimentStore'),
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
let F = I.qO.map((e) => Z(e)),
    V = 604800000;
function j(e, n) {
    return e || F.includes(n);
}
function H(e) {
    var n;
    return ((null !== (n = e.flags) && void 0 !== n ? n : 0) & T.xW$.STAFF) === T.xW$.STAFF || null != e.personal_connection_id || !1;
}
function Y(e, n, r, i) {
    let a = ''.concat(n.type, '|').concat(e),
        s = n.triggerDebuggingEnabled && void 0 !== r && r.length > 0;
    if (n.type === I.xY.USER) return s && ((a += '|'.concat(r)), i && (a += '|triggerDebugging')), a;
    if (n.type === I.xY.GUILD) return (a += '|'.concat(n.guildId)), s && ((a += '|'.concat(r)), i && (a += '|triggerDebugging')), a;
    throw Error();
}
function W(e) {
    if (e.type === I.xY.USER) return Z(''.concat(e.bucket, '|').concat(e.revision));
    if (e.type === I.xY.GUILD) return Z(''.concat(e.bucket, '|').concat(e.revision, '|').concat(e.guildId));
    throw Error();
}
let K = Date.now(),
    z = !1;
function q(e, n, r, i) {
    let a = D[Y(e, n, r, i)];
    return !(null == a || (z ? a.time < K : Date.now() - a.time > V)) && a.hash === W(n);
}
function Q(e) {
    let { experimentId: n, descriptor: r, location: i, location_stack: a, context: s, fingerprint: o, excluded: l, exposureType: u } = e,
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
    let d = u === I.a0.AUTO_FALLBACK && !!r.triggerDebuggingEnabled;
    if (q(n, r, i, d)) return !1;
    if (r.type === I.xY.USER) {
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
        null != s && (e.context_guild_id = s.guildId);
        let f = d ? T.rMx.EXPERIMENT_USER_TRIGGERED_FALLBACK : T.rMx.EXPERIMENT_USER_TRIGGERED;
        if (c) {
            let n = {
                ...e,
                assignment_fingerprint: r.fingerprint,
                current_session_id: m.default.getSessionId(),
                current_fingerprint: m.default.getFingerprint(),
                current_source: x.source
            };
            E.default.track(T.rMx.EXPERIMENT_USER_TRIGGERED_IGNORED, n, {
                flush: !1,
                fingerprint: o
            });
        } else
            E.default.track(f, e, {
                flush: !0,
                fingerprint: o
            });
    } else if (r.type === I.xY.GUILD) {
        let e = d ? T.rMx.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : T.rMx.EXPERIMENT_GUILD_TRIGGERED,
            s = {
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
                ...s,
                assignment_fingerprint: r.fingerprint,
                current_session_id: m.default.getSessionId(),
                current_fingerprint: m.default.getFingerprint(),
                current_source: x.source
            };
            E.default.track(T.rMx.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, {
                flush: !1,
                fingerprint: o
            });
        } else
            E.default.track(e, s, {
                flush: !0,
                fingerprint: o
            });
    }
    !c &&
        ((D[Y(n, r, i, d)] = {
            time: Date.now(),
            hash: W(r)
        }),
        e_(D));
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
            E.default.track(T.rMx.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: x.source,
                current_snapshot_session_id: x.sessionId,
                current_snapshot_fingerprint: x.fingerprint
            }),
        (w = {}),
        (P = {}),
        (M = {});
    let i = 'CONNECTION_OPEN' === e.type || null == e.fingerprint || e.fingerprint === m.default.getFingerprint(),
        { experiments: a, guildExperiments: s } = e,
        o = 'CONNECTION_OPEN' === e.type ? 'ready_payload' : 'logged_out_api',
        l = 'sessionId' in e ? e.sessionId : null !== (n = m.default.getSessionId()) && void 0 !== n ? n : '',
        u = m.default.getFingerprint();
    i &&
        et(
            {
                rawUserExperiments: a,
                rawGuildExperiments: null != s ? s : [],
                source: o,
                sessionId: l,
                fingerprint: u
            },
            !1
        ),
        r(598984).Vx.trackExposure(),
        (O = !0);
}
function et(e) {
    let { rawUserExperiments: n, rawGuildExperiments: r, source: i, sessionId: a, fingerprint: s } = e,
        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (x = {
        rawUserExperiments: n,
        rawGuildExperiments: null != r ? r : [],
        source: i,
        sessionId: a,
        fingerprint: s
    }),
        n.forEach((e) => {
            let [n, r, l, u, c, d, f, _] = e;
            w[n] = {
                type: 'user',
                revision: r,
                population: c,
                bucket: l,
                override: 0 === u,
                hashResult: null != d ? d : -1,
                aaMode: 1 === f,
                triggerDebuggingEnabled: j(1 === _, n),
                assignmentSource: i,
                sessionId: a,
                loadedFromCache: o,
                fingerprint: s
            };
        }),
        null != r &&
            r.forEach((e) => {
                let [n, r, l, u, c, d, f, _, h, p] = e;
                P[n] = {
                    hashKey: r,
                    revision: l,
                    populations: u.map($),
                    overrides: J(c),
                    overridesFormatted: (null != d ? d : []).map((e) => e.map($)),
                    holdoutName: null != f ? f : null,
                    holdoutBucket: null != _ ? _ : null,
                    aaMode: 1 === h,
                    triggerDebuggingEnabled: j(1 === p, n),
                    assignmentSource: i,
                    sessionId: a,
                    loadedFromCache: o,
                    fingerprint: s
                };
            });
}
function en(e, n, r) {
    let i = null;
    for (let { buckets: s, filters: o } of n) {
        var a = !0;
        if (null != o) {
            for (let n of o)
                if (null != n && !n(e)) {
                    a = !1;
                    break;
                }
        }
        if (!a) continue;
        let n = s.find((e) => {
            let { positions: n } = e;
            return n.some((e) => {
                let { start: n, end: i } = e;
                return r >= n && r < i;
            });
        });
        if ((i = null != n ? n.bucket : I.NZ.CONTROL) === I.NZ.NOT_ELIGIBLE) break;
        return i;
    }
    return null;
}
let er = 10000;
function ei(e, n) {
    var r, i;
    let a = Z(n),
        s = P[''.concat(a)];
    if (null == s) return null;
    let { revision: o, aaMode: l } = s,
        u = s.overrides[e],
        c = s.triggerDebuggingEnabled;
    if (null != u)
        return u === I.NZ.NOT_ELIGIBLE
            ? null
            : {
                  type: I.xY.GUILD,
                  guildId: e,
                  revision: o,
                  bucket: u,
                  override: !0,
                  hashResult: -1,
                  triggerDebuggingEnabled: c
              };
    let d = Z(''.concat(null !== (r = s.hashKey) && void 0 !== r ? r : n, ':').concat(e)) % er,
        f = null;
    for (let n of null !== (i = s.overridesFormatted) && void 0 !== i ? i : [])
        if (null !== (f = en(e, n, d)))
            return {
                type: I.xY.GUILD,
                guildId: e,
                revision: s.revision,
                bucket: f,
                override: !0,
                hashResult: d,
                triggerDebuggingEnabled: c,
                assignmentSource: s.assignmentSource,
                sessionId: s.sessionId,
                loadedFromCache: s.loadedFromCache
            };
    if (null == (f = en(e, s.populations, d))) return null;
    if (null != s.holdoutName && null != s.holdoutBucket && s.holdoutName !== n) {
        let n = ei(e, s.holdoutName);
        if (
            (null == n ? void 0 : n.bucket) != null &&
            (!0 !== n.override &&
                Q({
                    experimentId: s.holdoutName,
                    descriptor: n
                }),
            (null == n ? void 0 : n.bucket) === s.holdoutBucket)
        )
            return null;
    }
    return {
        type: I.xY.GUILD,
        guildId: e,
        revision: s.revision,
        bucket: f,
        hashResult: d,
        aaMode: l,
        triggerDebuggingEnabled: c,
        assignmentSource: s.assignmentSource,
        sessionId: s.sessionId,
        loadedFromCache: s.loadedFromCache
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
function es(e) {
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
function eo() {
    O = !0;
}
function el(e) {
    let { isSwitchingAccount: n } = e;
    f.K.remove(y),
        !n && (f.K.remove(S), f.K.remove(A), f.K.remove(N), (k = {}), (U = {})),
        (w = {}),
        (x = {
            ...x,
            rawUserExperiments: []
        }),
        (D = {}),
        (O = !1);
}
function eu() {
    (O = !1), (D = {}), (P = {}), f.K.remove(y);
}
function ec() {
    let e = f.K.get(y);
    if (null == e || e.v !== C) return {};
    let n = e.e,
        r = Date.now(),
        i = !1;
    for (let e in n) r - n[e].time > V && (delete n[e], (i = !0));
    return i && e_(n), n;
}
function ed() {
    var e, n, r;
    let i = [null !== (e = f.K.get(S)) && void 0 !== e ? e : {}, null !== (n = f.K.get(A)) && void 0 !== n ? n : {}, null !== (r = f.K.get(N)) && void 0 !== r ? r : {}];
    (k = {}), (U = {});
    let a = !u().isEmpty(i[0]);
    for (let e of i)
        for (let n in e) {
            let r = e[n];
            null == r || (r.type !== I.xY.USER && r.type !== I.xY.GUILD) || null == r.bucket || !0 !== r.override || r.fromCookie ? (delete e[n], (a = !0)) : r.type === I.xY.USER ? (k[n] = r) : (U[n] = r);
        }
    let s = (0, h._S)();
    for (let e in s)
        (k[e] = {
            type: I.xY.USER,
            revision: 1,
            population: 0,
            override: !0,
            fromCookie: !0,
            assignmentSource: 'override',
            bucket: s[e]
        }),
            (U[e] = {
                type: I.xY.GUILD,
                revision: 1,
                override: !0,
                fromCookie: !0,
                assignmentSource: 'override',
                bucket: s[e]
            }),
            (a = !0);
    a && ef();
}
function ef() {
    try {
        f.K.set(A, k);
    } catch (e) {
        R.error('Error saving user experiment overrides, unsaved data will be lost', e),
            E.default.track(T.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
    try {
        f.K.set(N, U);
    } catch (e) {
        R.error('Error saving guild experiment overrides, unsaved data will be lost', e),
            E.default.track(T.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
}
function e_(e) {
    try {
        f.K.set(y, {
            v: C,
            e: e
        });
    } catch (e) {
        R.error('Error saving tracked exposure experiments, unsaved data will be lost', e),
            E.default.track(T.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveTrackedExposureExperiments'
            });
    }
}
function eh(e) {
    let { experimentId: n, experimentType: r, title: i, description: a, buckets: s, commonTriggerPoint: o } = e;
    L[n] = {
        type: r,
        title: i,
        description: a,
        buckets: s,
        commonTriggerPoint: o
    };
}
function ep(e) {
    var n;
    let { experimentId: r, experimentBucket: i, experimentType: a, skipCleanup: s } = e,
        o = null != a ? a : null === (n = L[r]) || void 0 === n ? void 0 : n.type;
    if (null == o) return !1;
    if (
        (null == i
            ? ((k = { ...k }), delete k[r], (U = { ...U }), delete U[r])
            : 'user' === o
              ? (k = {
                    ...k,
                    [r]: {
                        type: o,
                        revision: 1,
                        population: 0,
                        bucket: i,
                        override: !0
                    }
                })
              : (U = {
                    ...U,
                    [r]: {
                        type: o,
                        revision: 1,
                        bucket: i,
                        override: !0
                    }
                }),
        !s)
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
        let r = null != n ? n : T.lds,
            i = U[e];
        if (B && null != i) return i;
        let a = ''.concat(r, ':').concat(e);
        if (a in M) return M[a];
        let s = ei(r, e);
        return (M[a] = s), s;
    }
    getUserExperimentBucket(e) {
        let n = this.getUserExperimentDescriptor(e);
        return null != n ? n.bucket : I.NZ.NOT_ELIGIBLE;
    }
    getGuildExperimentBucket(e, n) {
        let r = this.getGuildExperimentDescriptor(e, n);
        return null != r ? r.bucket : I.NZ.NOT_ELIGIBLE;
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
                OVERLAY_INITIALIZE: es,
                EXPERIMENTS_FETCH_FAILURE: eo,
                EXPERIMENT_OVERRIDE_BUCKET: ep,
                GUILD_CREATE: em,
                GUILD_UPDATE: em
            },
            _.c.Early
        ),
            b(this, 'trackExposure', Q);
    }
}
b(eg, 'displayName', 'ExperimentStore'), b(eg, 'LATEST_SNAPSHOT_VERSION', 1), (n.Z = new eg());
