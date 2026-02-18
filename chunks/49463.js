"use strict";
n.d(t, { A: () => ep, N: () => ec }), n(938796);
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
    m = n(652215);
let E = "scientist:triggered",
    g = "exerimentOverrides",
    A = "userExperimentOverrides",
    I = "guildExperimentOverrides",
    T = 1,
    S = new c.A("ExperimentStore"),
    y = !1,
    v = {},
    N = new Map(),
    C = {},
    b = { rawUserExperiments: [], rawGuildExperiments: [] },
    R = {},
    O = {},
    D = {},
    L = {},
    w = {},
    x = null,
    M = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, u.kK)(),
    P = {};
function k(e) {
    let t = P[e];
    if (void 0 !== t) return t;
    {
        let t = a().v3(e);
        return (P[e] = t), t;
    }
}
let U = 6048e5;
function G(e) {
    return ((e.flags ?? 0) & m.nhx.STAFF) === m.nhx.STAFF || null != e.personal_connection_id;
}
function F(e, t, n, r) {
    let i = `${t.type}|${e}`,
        s = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    if (t.type === h.Vh.USER) return s && ((i += `|${n}`), r && (i += "|triggerDebugging")), i;
    if (t.type === h.Vh.GUILD) return (i += `|${t.guildId}`), s && ((i += `|${n}`), r && (i += "|triggerDebugging")), i;
    throw Error();
}
function V(e) {
    if (e.type === h.Vh.USER) return k(`${e.bucket}|${e.revision}`);
    if (e.type === h.Vh.GUILD) return k(`${e.bucket}|${e.revision}|${e.guildId}`);
    throw Error();
}
let B = Date.now(),
    H = !1;
function j(e, t) {
    let n = v[e];
    return !(null == n || (H ? n.time < B : Date.now() - n.time > U)) && n.hash === t;
}
function Y(e, t) {
    return N.get(e) === t;
}
function W(e) {
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
        _ = F(t, n, r, c),
        p = V(n);
    if ((u && Y(_, p)) || j(_, p)) return !1;
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
        let _ = c ? m.HAw.EXPERIMENT_USER_TRIGGERED_FALLBACK : m.HAw.EXPERIMENT_USER_TRIGGERED;
        if (u) {
            let t = {
                ...e,
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: b.source,
            };
            f.default.track(m.HAw.EXPERIMENT_USER_TRIGGERED_IGNORED, t, { flush: !1, fingerprint: a });
        } else f.default.track(_, e, { flush: !0, fingerprint: a });
    } else if (n.type === h.Vh.GUILD) {
        let e = c ? m.HAw.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : m.HAw.EXPERIMENT_GUILD_TRIGGERED,
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
                current_source: b.source,
            };
            f.default.track(m.HAw.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, { flush: !1, fingerprint: a });
        } else f.default.track(e, s, { flush: !0, fingerprint: a });
    }
    u ? N.set(_, p) : ((v[F(t, n, r, c)] = { time: Date.now(), hash: V(n) }), eu(v));
}
function K(e) {
    let [t, n] = e;
    return null != p.k[t] ? p.k[t](n) : null;
}
function z(e) {
    let t = {};
    if (null == e) return t;
    for (let { b: n, k: r } of e) for (let e of r) t[e] = n;
    return t;
}
function $(e) {
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
        filters: n.map(K),
        rawFilterData: n,
    };
}
function q(e) {
    !M && "CONNECTION_OPEN" === e.type && G(e.user) && (M = !0),
        "EXPERIMENTS_FETCH_SUCCESS" === e.type &&
            y &&
            "ready_payload" === b.source &&
            f.default.track(m.HAw.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: b.source,
                current_snapshot_session_id: b.sessionId,
                current_snapshot_fingerprint: b.fingerprint,
            }),
        (R = {}),
        (O = {}),
        (D = {});
    let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
        { experiments: n, guildExperiments: r } = e,
        i = "CONNECTION_OPEN" === e.type ? "ready_payload" : "logged_out_api",
        s = "sessionId" in e ? e.sessionId : (d.default.getSessionId() ?? ""),
        a = d.default.getFingerprint();
    t && Z({ rawUserExperiments: n, rawGuildExperiments: r ?? [], source: i, sessionId: s, fingerprint: a }, !1),
        (y = !0);
}
function Z(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: r, sessionId: i, fingerprint: s } = e,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (b = { rawUserExperiments: t, rawGuildExperiments: n ?? [], source: r, sessionId: i, fingerprint: s }),
        t.forEach((e) => {
            let [t, n, o, l, u, c, d, _, f, p, h] = e;
            R[t] = {
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
                O[t] = {
                    hashKey: n,
                    revision: o,
                    populations: l.map($),
                    overrides: z(u),
                    overridesFormatted: (c ?? []).map((e) => e.map($)),
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
function X(e, t, n) {
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
let Q = 1e4;
function J(e, t) {
    let n = k(t),
        r = O[`${n}`];
    if (null == r) return null;
    let { revision: i, aaMode: s } = r,
        a = r.overrides[e],
        o = r.triggerDebuggingEnabled;
    if (null != a)
        return a === h.RE.NOT_ELIGIBLE
            ? null
            : {
                  type: h.Vh.GUILD,
                  guildId: e,
                  revision: i,
                  bucket: a,
                  override: !0,
                  hashResult: -1,
                  triggerDebuggingEnabled: o,
              };
    let l = k(`${r.hashKey ?? t}:${e}`) % Q,
        u = null;
    for (let t of r.overridesFormatted ?? [])
        if (null !== (u = X(e, t, l)))
            return {
                type: h.Vh.GUILD,
                guildId: e,
                revision: r.revision,
                bucket: u,
                override: !0,
                hashResult: l,
                triggerDebuggingEnabled: o,
                assignmentSource: r.assignmentSource,
                sessionId: r.sessionId,
                loadedFromCache: r.loadedFromCache,
            };
    if (null == (u = X(e, r.populations, l))) return null;
    let c = null;
    return null != r.holdoutName &&
        null != r.holdoutControlBucket &&
        r.holdoutName !== t &&
        ((c = J(e, r.holdoutName)), c?.bucket != null) &&
        (!0 !== c.override && W({ experimentId: r.holdoutName, descriptor: c }), c?.bucket === r.holdoutControlBucket)
        ? null
        : {
              type: h.Vh.GUILD,
              guildId: e,
              revision: r.revision,
              bucket: u,
              hashResult: l,
              aaMode: s,
              triggerDebuggingEnabled: o,
              assignmentSource: r.assignmentSource,
              sessionId: r.sessionId,
              loadedFromCache: r.loadedFromCache,
              holdoutName: null != c ? r.holdoutName : null,
              holdoutRevision: c?.revision,
              holdoutBucket: c?.bucket,
          };
}
function ee(e) {
    let t = {};
    for (let n in e) {
        let r = e[n];
        for (let e of ((t[n] = { ...r }), t[n].populations)) e.filters = e.rawFilterData.map(K);
        for (let e of t[n].overridesFormatted ?? []) for (let t of e) t.filters = t.rawFilterData.map(K);
    }
    return t;
}
function et(e) {
    let { serializedExperimentStore: t, user: n } = e;
    !M && G(n) && (M = !0),
        (y = t.hasLoadedExperiments),
        (v = t.trackedExposureExperiments),
        (R = t.loadedUserExperiments),
        (L = t.userExperimentOverrides),
        (w = t.guildExperimentOverrides),
        (b = {
            ...b,
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint,
        }),
        (O = ee(t.loadedGuildExperiments)),
        (D = {}),
        __OVERLAY__ && ((x = t.cookieOverrides ?? null), ea());
}
function en() {
    y = !0;
}
function er(e) {
    let { isSwitchingAccount: t } = e;
    o.w.remove(E),
        t || (o.w.remove(g), o.w.remove(A), o.w.remove(I), (L = {}), (w = {})),
        (R = {}),
        (b = { ...b, rawUserExperiments: [] }),
        (v = {}),
        (y = !1);
}
function ei() {
    (y = !1), (v = {}), (O = {}), o.w.remove(E);
}
function es() {
    let e = o.w.get(E);
    if (null == e || e.v !== T) return {};
    let t = e.e,
        n = Date.now(),
        r = !1;
    for (let e in t) n - t[e].time > U && (delete t[e], (r = !0));
    return r && eu(t), t;
}
function ea() {
    let e = !1,
        t = __OVERLAY__ ? x : (0, u.DI)();
    for (let n in t)
        (L[n] = {
            type: h.Vh.USER,
            revision: 1,
            population: 0,
            override: !0,
            fromCookie: !0,
            assignmentSource: "override",
            bucket: t[n],
        }),
            (w[n] = {
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
function eo() {
    let e = [o.w.get(g) ?? {}, o.w.get(A) ?? {}, o.w.get(I) ?? {}];
    (L = {}), (w = {});
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
                  ? (L[e] = r)
                  : (w[e] = r);
        }
    (t = ea() || t) && el();
}
function el() {
    try {
        o.w.set(A, L);
    } catch (e) {
        S.error("Error saving user experiment overrides, unsaved data will be lost", e),
            f.default.track(m.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
    try {
        o.w.set(I, w);
    } catch (e) {
        S.error("Error saving guild experiment overrides, unsaved data will be lost", e),
            f.default.track(m.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
}
function eu(e) {
    try {
        o.w.set(E, { v: T, e: e });
    } catch (e) {
        S.error("Error saving tracked exposure experiments, unsaved data will be lost", e),
            f.default.track(m.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveTrackedExposureExperiments",
            });
    }
}
function ec(e) {
    let { experimentId: t, experimentType: n, title: r, description: i, buckets: s, commonTriggerPoint: a } = e;
    C[t] = { type: n, title: r, description: i, buckets: s, commonTriggerPoint: a };
}
function ed(e) {
    let { experimentId: t, experimentBucket: n, experimentType: r, skipCleanup: i } = e,
        s = r ?? C[t]?.type;
    if (null == s) return !1;
    if (
        (null == n
            ? ((L = { ...L }), delete L[t], (w = { ...w }), delete w[t])
            : "user" === s
              ? (L = { ...L, [t]: { type: s, revision: 1, population: 0, bucket: n, override: !0 } })
              : (w = { ...w, [t]: { type: s, revision: 1, bucket: n, override: !0 } }),
        !i)
    )
        for (let e of [L, w]) for (let t in e) null == C[t] && delete L[t];
    el();
}
function e_(e) {
    let { guild: t } = e;
    for (let e in D) {
        let [n] = e.split(":");
        t.id === n && delete D[e];
    }
}
class ef extends _.A {
    static displayName = "ExperimentStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super(
            {
                LOGOUT: er,
                LOGIN_SUCCESS: ei,
                CONNECTION_OPEN: q,
                EXPERIMENTS_FETCH_SUCCESS: q,
                OVERLAY_INITIALIZE: et,
                EXPERIMENTS_FETCH_FAILURE: en,
                EXPERIMENT_OVERRIDE_BUCKET: ed,
                GUILD_CREATE: e_,
                GUILD_UPDATE: e_,
            },
            l.A.Early,
        );
    }
    trackExposure = W;
    initialize() {
        (v = es()), eo(), this.waitFor(d.default), this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(ef.LATEST_SNAPSHOT_VERSION);
        null != e &&
            ("loadedUserExperiments" in e
                ? ((R = e.loadedUserExperiments),
                  (O = ee(e.loadedGuildExperiments)),
                  Object.values(R).forEach((e) => (e.loadedFromCache = !0)),
                  Object.values(O).forEach((e) => (e.loadedFromCache = !0)))
                : Z(e, !0));
    }
    takeSnapshot() {
        return { version: ef.LATEST_SNAPSHOT_VERSION, data: { ...b } };
    }
    get hasLoadedExperiments() {
        return y;
    }
    hasRegisteredExperiment(e) {
        return null != C[e];
    }
    getUserExperimentDescriptor(e) {
        if (M) {
            let t = L[e];
            if (null != t) return t;
        }
        let t = k(e);
        return R[`${t}`];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = t ?? m.dJq,
            r = w[e];
        if (M && null != r) return r;
        let i = `${n}:${e}`;
        if (i in D) return D[i];
        let s = J(n, e);
        return (D[i] = s), s;
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
        return R;
    }
    getGuildExperiments() {
        return O;
    }
    getLoadedUserExperiment(e) {
        return R[k(e)];
    }
    getLoadedGuildExperiment(e) {
        return O[k(e)];
    }
    getRecentExposures(e, t) {
        let n = `${e}|${t}|`;
        return Object.entries(v)
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
        return C;
    }
    getAllExperimentOverrideDescriptors() {
        return M ? { ...L, ...w } : {};
    }
    getExperimentOverrideDescriptor(e) {
        return M ? (L[e] ?? w[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            t = {};
        for (let n in (Object.keys(C).forEach((e) => {
            t[k(`${e}`)] = e;
        }),
        R)) {
            let r = t[n];
            null != r && (e[r] = R[n].bucket);
        }
        for (let t in D) {
            let n = D[t];
            null != n && (e[t] = n.bucket);
        }
        return e;
    }
    getSerializedState() {
        let e = {};
        for (let t in O) for (let n of ((e[t] = JSON.parse(JSON.stringify(O[t]))), e[t].populations)) n.filters = [];
        return {
            hasLoadedExperiments: y,
            trackedExposureExperiments: v,
            loadedUserExperiments: R,
            loadedGuildExperiments: e,
            userExperimentOverrides: L,
            guildExperimentOverrides: w,
            cookieOverrides: (0, u.DI)(),
            assignmentSource: b.source,
            assignmentSessionId: b.sessionId,
            assignmentFingerprint: b.fingerprint,
        };
    }
    hasExperimentTrackedExposure(e, t, n, r) {
        return j(F(e, t, n, r), V(t));
    }
}
let ep = new ef();
