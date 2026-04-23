"use strict";
n.d(t, { A: () => ei, N: () => ee }), n(938796);
var r = n(735438),
    i = n.n(r),
    s = n(181370),
    a = n.n(s),
    o = n(506774),
    l = n(73153),
    u = n(380610),
    c = n(626584),
    d = n(961350),
    _ = n(536802),
    f = n(954571),
    p = n(98801),
    h = n(688151),
    E = n(652215);
let m = "scientist:triggered",
    g = "exerimentOverrides",
    A = "userExperimentOverrides",
    I = "guildExperimentOverrides",
    T = new c.A("ExperimentStore"),
    S = !1,
    y = {},
    N = new Map(),
    v = {},
    C = { rawUserExperiments: [], rawGuildExperiments: [] },
    O = {},
    R = {},
    b = {},
    D = {},
    L = {},
    w = null,
    M = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, u.kK)(),
    P = {};
function x(e) {
    let t = P[e];
    if (void 0 !== t) return t;
    {
        let t = a().v3(e);
        return (P[e] = t), t;
    }
}
function k(e) {
    return ((e.flags ?? 0) & E.nhx.STAFF) === E.nhx.STAFF || null != e.personal_connection_id;
}
function U(e, t, n, r) {
    let i = `${t.type}|${e}`,
        s = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    if (t.type === h.Vh.USER) return s && ((i += `|${n}`), r && (i += "|triggerDebugging")), i;
    if (t.type === h.Vh.GUILD) return (i += `|${t.guildId}`), s && ((i += `|${n}`), r && (i += "|triggerDebugging")), i;
    throw Error();
}
function G(e) {
    if (e.type === h.Vh.USER) return x(`${e.bucket}|${e.revision}`);
    if (e.type === h.Vh.GUILD) return x(`${e.bucket}|${e.revision}|${e.guildId}`);
    throw Error();
}
function F(e, t) {
    let n = y[e];
    return !(null == n || Date.now() - n.time > 6048e5) && n.hash === t;
}
function V(e) {
    let {
            experimentId: t,
            descriptor: n,
            location: r,
            location_stack: i,
            context: s,
            fingerprint: a,
            excluded: o,
            exposureType: l,
        } = e,
        u = !1;
    switch (n.assignmentSource) {
        case "override":
            return !1;
        case "ready_payload":
            n.sessionId !== d.default.getSessionId() && (u = !0);
            break;
        case "logged_out_api":
            n.fingerprint !== d.default.getFingerprint() && (u = !0);
            break;
        default:
            u = !0;
    }
    if (n.override) return !1;
    let c = l === h.vf.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
        _ = U(t, n, r, c),
        p = G(n);
    if ((u && N.get(_) === p) || F(_, p)) return !1;
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
        null != s && (e.context_guild_id = s.guildId);
        let _ = c ? E.HAw.EXPERIMENT_USER_TRIGGERED_FALLBACK : E.HAw.EXPERIMENT_USER_TRIGGERED;
        if (u) {
            let t = {
                ...e,
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: C.source,
            };
            f.default.track(E.HAw.EXPERIMENT_USER_TRIGGERED_IGNORED, t, { flush: !1, fingerprint: a });
        } else f.default.track(_, e, { flush: !0, fingerprint: a });
    } else if (n.type === h.Vh.GUILD) {
        let e = c ? E.HAw.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : E.HAw.EXPERIMENT_GUILD_TRIGGERED,
            s = {
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
        if (u) {
            let e = {
                ...s,
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: C.source,
            };
            f.default.track(E.HAw.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, { flush: !1, fingerprint: a });
        } else f.default.track(e, s, { flush: !0, fingerprint: a });
    }
    u ? N.set(_, p) : ((y[U(t, n, r, c)] = { time: Date.now(), hash: G(n) }), J(y));
}
function B(e) {
    let [t, n] = e;
    return null != p.k[t] ? p.k[t](n) : null;
}
function H(e) {
    let [t, n] = e;
    return {
        buckets: t.map((e) => {
            let [t, n] = e;
            return {
                bucket: t,
                positions: n.map((e) => {
                    let { s: t, e: n } = e;
                    return { start: t, end: n };
                }),
            };
        }),
        filters: n.map(B),
        rawFilterData: n,
    };
}
function j(e) {
    !M && "CONNECTION_OPEN" === e.type && k(e.user) && (M = !0),
        "EXPERIMENTS_FETCH_SUCCESS" === e.type &&
            S &&
            "ready_payload" === C.source &&
            f.default.track(E.HAw.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: C.source,
                current_snapshot_session_id: C.sessionId,
                current_snapshot_fingerprint: C.fingerprint,
            }),
        (O = {}),
        (R = {}),
        (b = {});
    let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
        { experiments: n, guildExperiments: r } = e,
        i = "CONNECTION_OPEN" === e.type ? "ready_payload" : "logged_out_api",
        s = "sessionId" in e ? e.sessionId : (d.default.getSessionId() ?? ""),
        a = d.default.getFingerprint();
    t && Y({ rawUserExperiments: n, rawGuildExperiments: r ?? [], source: i, sessionId: s, fingerprint: a }, !1),
        (S = !0);
}
function Y(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: r, sessionId: i, fingerprint: s } = e,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (C = { rawUserExperiments: t, rawGuildExperiments: n ?? [], source: r, sessionId: i, fingerprint: s }),
        t.forEach((e) => {
            let [t, n, o, l, u, c, d, _, f, p, h] = e;
            O[t] = {
                type: "user",
                revision: n,
                population: u,
                bucket: o,
                override: 0 === l,
                hashResult: c ?? -1,
                aaMode: 1 === d,
                triggerDebuggingEnabled: 1 === _,
                assignmentSource: r,
                sessionId: i,
                loadedFromCache: a,
                fingerprint: s,
                holdoutName: f,
                holdoutRevision: p,
                holdoutBucket: h,
            };
        }),
        null != n &&
            n.forEach((e) => {
                let [t, n, o, l, u, c, d, _, f, p] = e;
                R[t] = {
                    hashKey: n,
                    revision: o,
                    populations: l.map(H),
                    overrides: (function (e) {
                        let t = {};
                        if (null == e) return t;
                        for (let { b: n, k: r } of e) for (let e of r) t[e] = n;
                        return t;
                    })(u),
                    overridesFormatted: (c ?? []).map((e) => e.map(H)),
                    holdoutName: d ?? null,
                    holdoutControlBucket: _ ?? null,
                    aaMode: 1 === f,
                    triggerDebuggingEnabled: 1 === p,
                    assignmentSource: r,
                    sessionId: i,
                    loadedFromCache: a,
                    fingerprint: s,
                };
            });
}
function W(e, t, n) {
    let r = null;
    for (let { buckets: s, filters: a } of t) {
        var i = !0;
        if (null != a) {
            for (let t of a)
                if (null != t && !t(e)) {
                    i = !1;
                    break;
                }
        }
        if (!i) continue;
        let t = s.find((e) => {
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
function K(e) {
    let t = {};
    for (let n in e) {
        let r = e[n];
        for (let e of ((t[n] = { ...r }), t[n].populations)) e.filters = e.rawFilterData.map(B);
        for (let e of t[n].overridesFormatted ?? []) for (let t of e) t.filters = t.rawFilterData.map(B);
    }
    return t;
}
function $(e) {
    let { serializedExperimentStore: t, user: n } = e;
    !M && k(n) && (M = !0),
        (S = t.hasLoadedExperiments),
        (y = t.trackedExposureExperiments),
        (O = t.loadedUserExperiments),
        (D = t.userExperimentOverrides),
        (L = t.guildExperimentOverrides),
        (C = {
            ...C,
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint,
        }),
        (R = K(t.loadedGuildExperiments)),
        (b = {}),
        __OVERLAY__ && ((w = t.cookieOverrides ?? null), Q());
}
function z() {
    S = !0;
}
function q(e) {
    let { isSwitchingAccount: t } = e;
    o.w.remove(m),
        t || (o.w.remove(g), o.w.remove(A), o.w.remove(I), (D = {}), (L = {})),
        (O = {}),
        (C = { ...C, rawUserExperiments: [] }),
        (y = {}),
        (S = !1);
}
function X() {
    (S = !1), (y = {}), (R = {}), o.w.remove(m);
}
function Q() {
    let e = !1,
        t = __OVERLAY__ ? w : (0, u.DI)();
    for (let n in t)
        (D[n] = {
            type: h.Vh.USER,
            revision: 1,
            population: 0,
            override: !0,
            fromCookie: !0,
            assignmentSource: "override",
            bucket: t[n],
        }),
            (L[n] = {
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
function Z() {
    try {
        o.w.set(A, D);
    } catch (e) {
        T.error("Error saving user experiment overrides, unsaved data will be lost", e),
            f.default.track(E.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
    try {
        o.w.set(I, L);
    } catch (e) {
        T.error("Error saving guild experiment overrides, unsaved data will be lost", e),
            f.default.track(E.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
}
function J(e) {
    try {
        o.w.set(m, { v: 1, e: e });
    } catch (e) {
        T.error("Error saving tracked exposure experiments, unsaved data will be lost", e),
            f.default.track(E.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveTrackedExposureExperiments",
            });
    }
}
function ee(e) {
    let { experimentId: t, experimentType: n, title: r, description: i, buckets: s, commonTriggerPoint: a } = e;
    v[t] = { type: n, title: r, description: i, buckets: s, commonTriggerPoint: a };
}
function et(e) {
    let { experimentId: t, experimentBucket: n, experimentType: r, skipCleanup: i } = e,
        s = r ?? v[t]?.type;
    if (null == s) return !1;
    if (
        (null == n
            ? ((D = { ...D }), delete D[t], (L = { ...L }), delete L[t])
            : "user" === s
              ? (D = { ...D, [t]: { type: s, revision: 1, population: 0, bucket: n, override: !0 } })
              : (L = { ...L, [t]: { type: s, revision: 1, bucket: n, override: !0 } }),
        !i)
    )
        for (let e of [D, L]) for (let t in e) null == v[t] && delete D[t];
    Z();
}
function en(e) {
    let { guild: t } = e;
    for (let e in b) {
        let [n] = e.split(":");
        t.id === n && delete b[e];
    }
}
Date.now();
class er extends _.A {
    static displayName = "ExperimentStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super(
            {
                LOGOUT: q,
                LOGIN_SUCCESS: X,
                CONNECTION_OPEN: j,
                EXPERIMENTS_FETCH_SUCCESS: j,
                OVERLAY_INITIALIZE: $,
                EXPERIMENTS_FETCH_FAILURE: z,
                EXPERIMENT_OVERRIDE_BUCKET: et,
                GUILD_CREATE: en,
                GUILD_UPDATE: en,
            },
            l.A.Early,
        );
    }
    trackExposure = V;
    initialize() {
        y = (function () {
            let e = o.w.get(m);
            if (null == e || 1 !== e.v) return {};
            let t = e.e,
                n = Date.now(),
                r = !1;
            for (let e in t) n - t[e].time > 6048e5 && (delete t[e], (r = !0));
            return r && J(t), t;
        })();
        let e = [o.w.get(g) ?? {}, o.w.get(A) ?? {}, o.w.get(I) ?? {}];
        (D = {}), (L = {});
        let t = !i().isEmpty(e[0]);
        for (let n of e)
            for (let e in n) {
                let r = n[e];
                null == r ||
                (r.type !== h.Vh.USER && r.type !== h.Vh.GUILD) ||
                null == r.bucket ||
                !0 !== r.override ||
                r.fromCookie
                    ? (delete n[e], (t = !0))
                    : r.type === h.Vh.USER
                      ? (D[e] = r)
                      : (L[e] = r);
            }
        (t = Q() || t) && Z(), this.waitFor(d.default), this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(er.LATEST_SNAPSHOT_VERSION);
        null != e &&
            ("loadedUserExperiments" in e
                ? ((O = e.loadedUserExperiments),
                  (R = K(e.loadedGuildExperiments)),
                  Object.values(O).forEach((e) => (e.loadedFromCache = !0)),
                  Object.values(R).forEach((e) => (e.loadedFromCache = !0)))
                : Y(e, !0));
    }
    takeSnapshot() {
        return { version: er.LATEST_SNAPSHOT_VERSION, data: { ...C } };
    }
    get hasLoadedExperiments() {
        return S;
    }
    hasRegisteredExperiment(e) {
        return null != v[e];
    }
    getUserExperimentDescriptor(e) {
        if (M) {
            let t = D[e];
            if (null != t) return t;
        }
        let t = x(e);
        return O[`${t}`];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = t ?? E.dJq,
            r = L[e];
        if (M && null != r) return r;
        let i = `${n}:${e}`;
        if (i in b) return b[i];
        let s = (function e(t, n) {
            let r = x(n),
                i = R[`${r}`];
            if (null == i) return null;
            let { revision: s, aaMode: a } = i,
                o = i.overrides[t],
                l = i.triggerDebuggingEnabled;
            if (null != o)
                return o === h.RE.NOT_ELIGIBLE
                    ? null
                    : {
                          type: h.Vh.GUILD,
                          guildId: t,
                          revision: s,
                          bucket: o,
                          override: !0,
                          hashResult: -1,
                          triggerDebuggingEnabled: l,
                      };
            let u = x(`${i.hashKey ?? n}:${t}`) % 1e4,
                c = null;
            for (let e of i.overridesFormatted ?? [])
                if (null !== (c = W(t, e, u)))
                    return {
                        type: h.Vh.GUILD,
                        guildId: t,
                        revision: i.revision,
                        bucket: c,
                        override: !0,
                        hashResult: u,
                        triggerDebuggingEnabled: l,
                        assignmentSource: i.assignmentSource,
                        sessionId: i.sessionId,
                        loadedFromCache: i.loadedFromCache,
                    };
            if (null == (c = W(t, i.populations, u))) return null;
            let d = null;
            return null != i.holdoutName &&
                null != i.holdoutControlBucket &&
                i.holdoutName !== n &&
                ((d = e(t, i.holdoutName)), d?.bucket != null) &&
                (!0 !== d.override && V({ experimentId: i.holdoutName, descriptor: d }),
                d?.bucket === i.holdoutControlBucket)
                ? null
                : {
                      type: h.Vh.GUILD,
                      guildId: t,
                      revision: i.revision,
                      bucket: c,
                      hashResult: u,
                      aaMode: a,
                      triggerDebuggingEnabled: l,
                      assignmentSource: i.assignmentSource,
                      sessionId: i.sessionId,
                      loadedFromCache: i.loadedFromCache,
                      holdoutName: null != d ? i.holdoutName : null,
                      holdoutRevision: d?.revision,
                      holdoutBucket: d?.bucket,
                  };
        })(n, e);
        return (b[i] = s), s;
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
        return O;
    }
    getGuildExperiments() {
        return R;
    }
    getLoadedUserExperiment(e) {
        return O[x(e)];
    }
    getLoadedGuildExperiment(e) {
        return R[x(e)];
    }
    getRecentExposures(e, t) {
        let n = `${e}|${t}|`;
        return Object.entries(y)
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
        return v;
    }
    getAllExperimentOverrideDescriptors() {
        return M ? { ...D, ...L } : {};
    }
    getExperimentOverrideDescriptor(e) {
        return M ? (D[e] ?? L[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            t = {};
        for (let n in (Object.keys(v).forEach((e) => {
            t[x(`${e}`)] = e;
        }),
        O)) {
            let r = t[n];
            null != r && (e[r] = O[n].bucket);
        }
        for (let t in b) {
            let n = b[t];
            null != n && (e[t] = n.bucket);
        }
        return e;
    }
    getSerializedState() {
        let e = {};
        for (let t in R) for (let n of ((e[t] = JSON.parse(JSON.stringify(R[t]))), e[t].populations)) n.filters = [];
        return {
            hasLoadedExperiments: S,
            trackedExposureExperiments: y,
            loadedUserExperiments: O,
            loadedGuildExperiments: e,
            userExperimentOverrides: D,
            guildExperimentOverrides: L,
            cookieOverrides: (0, u.DI)(),
            assignmentSource: C.source,
            assignmentSessionId: C.sessionId,
            assignmentFingerprint: C.fingerprint,
        };
    }
    hasExperimentTrackedExposure(e, t, n, r) {
        return F(U(e, t, n, r), G(t));
    }
}
let ei = new er();
