"use strict";
n.d(t, { A: () => ei, N: () => ee }), n(938796);
var r = n(735438),
    i = n.n(r),
    s = n(181370),
    a = n.n(s),
    o = n(506774),
    l = n(73153),
    u = n(380610),
    d = n(626584),
    c = n(961350),
    _ = n(536802),
    f = n(954571),
    E = n(98801),
    h = n(688151),
    p = n(652215);
let m = "scientist:triggered",
    g = "exerimentOverrides",
    A = "userExperimentOverrides",
    I = "guildExperimentOverrides",
    T = new d.A("ExperimentStore"),
    S = !1,
    y = {},
    N = new Map(),
    O = {},
    R = { rawUserExperiments: [], rawGuildExperiments: [] },
    v = {},
    C = {},
    b = {},
    D = {},
    L = {},
    w = null,
    M = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, u.kK)(),
    P = {};
function U(e) {
    let t = P[e];
    if (void 0 !== t) return t;
    {
        let t = a().v3(e);
        return (P[e] = t), t;
    }
}
function k(e) {
    return ((e.flags ?? 0) & p.nhx.STAFF) === p.nhx.STAFF || null != e.personal_connection_id;
}
function x(e, t, n, r) {
    let i = `${t.type}|${e}`,
        s = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    if (t.type === h.Vh.USER) return s && ((i += `|${n}`), r && (i += "|triggerDebugging")), i;
    if (t.type === h.Vh.GUILD) return (i += `|${t.guildId}`), s && ((i += `|${n}`), r && (i += "|triggerDebugging")), i;
    throw Error();
}
function G(e) {
    if (e.type === h.Vh.USER) return U(`${e.bucket}|${e.revision}`);
    if (e.type === h.Vh.GUILD) return U(`${e.bucket}|${e.revision}|${e.guildId}`);
    throw Error();
}
function V(e, t) {
    let n = y[e];
    return !(null == n || Date.now() - n.time > 6048e5) && n.hash === t;
}
function F(e) {
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
            n.sessionId !== c.default.getSessionId() && (u = !0);
            break;
        case "logged_out_api":
            n.fingerprint !== c.default.getFingerprint() && (u = !0);
            break;
        default:
            u = !0;
    }
    if (n.override) return !1;
    let d = l === h.vf.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
        _ = x(t, n, r, d),
        E = G(n);
    if ((u && N.get(_) === E) || V(_, E)) return !1;
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
        let _ = d ? p.HAw.EXPERIMENT_USER_TRIGGERED_FALLBACK : p.HAw.EXPERIMENT_USER_TRIGGERED;
        if (u) {
            let t = {
                ...e,
                assignment_fingerprint: n.fingerprint,
                current_session_id: c.default.getSessionId(),
                current_fingerprint: c.default.getFingerprint(),
                current_source: R.source,
            };
            f.default.track(p.HAw.EXPERIMENT_USER_TRIGGERED_IGNORED, t, { flush: !1, fingerprint: a });
        } else f.default.track(_, e, { flush: !0, fingerprint: a });
    } else if (n.type === h.Vh.GUILD) {
        let e = d ? p.HAw.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : p.HAw.EXPERIMENT_GUILD_TRIGGERED,
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
                current_session_id: c.default.getSessionId(),
                current_fingerprint: c.default.getFingerprint(),
                current_source: R.source,
            };
            f.default.track(p.HAw.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, { flush: !1, fingerprint: a });
        } else f.default.track(e, s, { flush: !0, fingerprint: a });
    }
    u ? N.set(_, E) : ((y[x(t, n, r, d)] = { time: Date.now(), hash: G(n) }), Z(y));
}
function B(e) {
    let [t, n] = e;
    return null != E.k[t] ? E.k[t](n) : null;
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
function Y(e) {
    !M && "CONNECTION_OPEN" === e.type && k(e.user) && (M = !0),
        "EXPERIMENTS_FETCH_SUCCESS" === e.type &&
            S &&
            "ready_payload" === R.source &&
            f.default.track(p.HAw.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: R.source,
                current_snapshot_session_id: R.sessionId,
                current_snapshot_fingerprint: R.fingerprint,
            }),
        (v = {}),
        (C = {}),
        (b = {});
    let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === c.default.getFingerprint(),
        { experiments: n, guildExperiments: r } = e,
        i = "CONNECTION_OPEN" === e.type ? "ready_payload" : "logged_out_api",
        s = "sessionId" in e ? e.sessionId : (c.default.getSessionId() ?? ""),
        a = c.default.getFingerprint();
    t && W({ rawUserExperiments: n, rawGuildExperiments: r ?? [], source: i, sessionId: s, fingerprint: a }, !1),
        (S = !0);
}
function W(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: r, sessionId: i, fingerprint: s } = e,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (R = { rawUserExperiments: t, rawGuildExperiments: n ?? [], source: r, sessionId: i, fingerprint: s }),
        t.forEach((e) => {
            let [t, n, o, l, u, d, c, _, f, E, h] = e;
            v[t] = {
                type: "user",
                revision: n,
                population: u,
                bucket: o,
                override: 0 === l,
                hashResult: d ?? -1,
                aaMode: 1 === c,
                triggerDebuggingEnabled: 1 === _,
                assignmentSource: r,
                sessionId: i,
                loadedFromCache: a,
                fingerprint: s,
                holdoutName: f,
                holdoutRevision: E,
                holdoutBucket: h,
            };
        }),
        null != n &&
            n.forEach((e) => {
                let [t, n, o, l, u, d, c, _, f, E] = e;
                C[t] = {
                    hashKey: n,
                    revision: o,
                    populations: l.map(H),
                    overrides: (function (e) {
                        let t = {};
                        if (null == e) return t;
                        for (let { b: n, k: r } of e) for (let e of r) t[e] = n;
                        return t;
                    })(u),
                    overridesFormatted: (d ?? []).map((e) => e.map(H)),
                    holdoutName: c ?? null,
                    holdoutControlBucket: _ ?? null,
                    aaMode: 1 === f,
                    triggerDebuggingEnabled: 1 === E,
                    assignmentSource: r,
                    sessionId: i,
                    loadedFromCache: a,
                    fingerprint: s,
                };
            });
}
function j(e, t, n) {
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
        (v = t.loadedUserExperiments),
        (D = t.userExperimentOverrides),
        (L = t.guildExperimentOverrides),
        (R = {
            ...R,
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint,
        }),
        (C = K(t.loadedGuildExperiments)),
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
        (v = {}),
        (R = { ...R, rawUserExperiments: [] }),
        (y = {}),
        (S = !1);
}
function X() {
    (S = !1), (y = {}), (C = {}), o.w.remove(m);
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
function J() {
    try {
        o.w.set(A, D);
    } catch (e) {
        T.error("Error saving user experiment overrides, unsaved data will be lost", e),
            f.default.track(p.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
    try {
        o.w.set(I, L);
    } catch (e) {
        T.error("Error saving guild experiment overrides, unsaved data will be lost", e),
            f.default.track(p.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
}
function Z(e) {
    try {
        o.w.set(m, { v: 1, e: e });
    } catch (e) {
        T.error("Error saving tracked exposure experiments, unsaved data will be lost", e),
            f.default.track(p.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveTrackedExposureExperiments",
            });
    }
}
function ee(e) {
    let { experimentId: t, experimentType: n, title: r, description: i, buckets: s, commonTriggerPoint: a } = e;
    O[t] = { type: n, title: r, description: i, buckets: s, commonTriggerPoint: a };
}
function et(e) {
    let { experimentId: t, experimentBucket: n, experimentType: r, skipCleanup: i } = e,
        s = r ?? O[t]?.type;
    if (null == s) return !1;
    if (
        (null == n
            ? ((D = { ...D }), delete D[t], (L = { ...L }), delete L[t])
            : "user" === s
              ? (D = { ...D, [t]: { type: s, revision: 1, population: 0, bucket: n, override: !0 } })
              : (L = { ...L, [t]: { type: s, revision: 1, bucket: n, override: !0 } }),
        !i)
    )
        for (let e of [D, L]) for (let t in e) null == O[t] && delete D[t];
    J();
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
                CONNECTION_OPEN: Y,
                EXPERIMENTS_FETCH_SUCCESS: Y,
                OVERLAY_INITIALIZE: $,
                EXPERIMENTS_FETCH_FAILURE: z,
                EXPERIMENT_OVERRIDE_BUCKET: et,
                GUILD_CREATE: en,
                GUILD_UPDATE: en,
            },
            l.A.Early,
        );
    }
    trackExposure = F;
    initialize() {
        y = (function () {
            let e = o.w.get(m);
            if (null == e || 1 !== e.v) return {};
            let t = e.e,
                n = Date.now(),
                r = !1;
            for (let e in t) n - t[e].time > 6048e5 && (delete t[e], (r = !0));
            return r && Z(t), t;
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
        (t = Q() || t) && J(), this.waitFor(c.default), this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(er.LATEST_SNAPSHOT_VERSION);
        null != e &&
            ("loadedUserExperiments" in e
                ? ((v = e.loadedUserExperiments),
                  (C = K(e.loadedGuildExperiments)),
                  Object.values(v).forEach((e) => (e.loadedFromCache = !0)),
                  Object.values(C).forEach((e) => (e.loadedFromCache = !0)))
                : W(e, !0));
    }
    takeSnapshot() {
        return { version: er.LATEST_SNAPSHOT_VERSION, data: { ...R } };
    }
    get hasLoadedExperiments() {
        return S;
    }
    hasRegisteredExperiment(e) {
        return null != O[e];
    }
    getUserExperimentDescriptor(e) {
        if (M) {
            let t = D[e];
            if (null != t) return t;
        }
        let t = U(e);
        return v[`${t}`];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = t ?? p.dJq,
            r = L[e];
        if (M && null != r) return r;
        let i = `${n}:${e}`;
        if (i in b) return b[i];
        let s = (function e(t, n) {
            let r = U(n),
                i = C[`${r}`];
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
            let u = U(`${i.hashKey ?? n}:${t}`) % 1e4,
                d = null;
            for (let e of i.overridesFormatted ?? [])
                if (null !== (d = j(t, e, u)))
                    return {
                        type: h.Vh.GUILD,
                        guildId: t,
                        revision: i.revision,
                        bucket: d,
                        override: !0,
                        hashResult: u,
                        triggerDebuggingEnabled: l,
                        assignmentSource: i.assignmentSource,
                        sessionId: i.sessionId,
                        loadedFromCache: i.loadedFromCache,
                    };
            if (null == (d = j(t, i.populations, u))) return null;
            let c = null;
            return null != i.holdoutName &&
                null != i.holdoutControlBucket &&
                i.holdoutName !== n &&
                ((c = e(t, i.holdoutName)), c?.bucket != null) &&
                (!0 !== c.override && F({ experimentId: i.holdoutName, descriptor: c }),
                c?.bucket === i.holdoutControlBucket)
                ? null
                : {
                      type: h.Vh.GUILD,
                      guildId: t,
                      revision: i.revision,
                      bucket: d,
                      hashResult: u,
                      aaMode: a,
                      triggerDebuggingEnabled: l,
                      assignmentSource: i.assignmentSource,
                      sessionId: i.sessionId,
                      loadedFromCache: i.loadedFromCache,
                      holdoutName: null != c ? i.holdoutName : null,
                      holdoutRevision: c?.revision,
                      holdoutBucket: c?.bucket,
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
        return v;
    }
    getGuildExperiments() {
        return C;
    }
    getLoadedUserExperiment(e) {
        return v[U(e)];
    }
    getLoadedGuildExperiment(e) {
        return C[U(e)];
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
        return O;
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
        for (let n in (Object.keys(O).forEach((e) => {
            t[U(`${e}`)] = e;
        }),
        v)) {
            let r = t[n];
            null != r && (e[r] = v[n].bucket);
        }
        for (let t in b) {
            let n = b[t];
            null != n && (e[t] = n.bucket);
        }
        return e;
    }
    getSerializedState() {
        let e = {};
        for (let t in C) for (let n of ((e[t] = JSON.parse(JSON.stringify(C[t]))), e[t].populations)) n.filters = [];
        return {
            hasLoadedExperiments: S,
            trackedExposureExperiments: y,
            loadedUserExperiments: v,
            loadedGuildExperiments: e,
            userExperimentOverrides: D,
            guildExperimentOverrides: L,
            cookieOverrides: (0, u.DI)(),
            assignmentSource: R.source,
            assignmentSessionId: R.sessionId,
            assignmentFingerprint: R.fingerprint,
        };
    }
    hasExperimentTrackedExposure(e, t, n, r) {
        return V(x(e, t, n, r), G(t));
    }
}
let ei = new er();
