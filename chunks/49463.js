"use strict";
n.d(t, { A: () => em, N: () => e_ }), n(938796);
var r = n(735438),
    i = n.n(r),
    a = n(181370),
    s = n.n(a),
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
let g = "scientist:triggered",
    E = "exerimentOverrides",
    A = "userExperimentOverrides",
    I = "guildExperimentOverrides",
    T = 1,
    y = new c.A("ExperimentStore"),
    S = !1,
    v = {},
    C = new Map(),
    b = {},
    N = { rawUserExperiments: [], rawGuildExperiments: [] },
    R = {},
    O = {},
    D = {},
    L = {},
    w = {},
    x = null,
    P = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, u.kK)(),
    M = {};
function k(e) {
    let t = M[e];
    if (void 0 !== t) return t;
    {
        let t = s().v3(e);
        return (M[e] = t), t;
    }
}
let U = h.NM.map((e) => k(e)),
    G = 6048e5;
function V(e, t) {
    return e || U.includes(t);
}
function F(e) {
    return ((e.flags ?? 0) & m.nhx.STAFF) === m.nhx.STAFF || null != e.personal_connection_id;
}
function B(e, t, n, r) {
    let i = `${t.type}|${e}`,
        a = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    if (t.type === h.Vh.USER) return a && ((i += `|${n}`), r && (i += "|triggerDebugging")), i;
    if (t.type === h.Vh.GUILD) return (i += `|${t.guildId}`), a && ((i += `|${n}`), r && (i += "|triggerDebugging")), i;
    throw Error();
}
function j(e) {
    if (e.type === h.Vh.USER) return k(`${e.bucket}|${e.revision}`);
    if (e.type === h.Vh.GUILD) return k(`${e.bucket}|${e.revision}|${e.guildId}`);
    throw Error();
}
let H = Date.now(),
    Y = !1;
function W(e, t) {
    let n = v[e];
    return !(null == n || (Y ? n.time < H : Date.now() - n.time > G)) && n.hash === t;
}
function K(e, t) {
    return C.get(e) === t;
}
function z(e) {
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
        _ = B(t, n, r, c),
        p = j(n);
    if ((u && K(_, p)) || W(_, p)) return !1;
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
        let _ = c ? m.HAw.EXPERIMENT_USER_TRIGGERED_FALLBACK : m.HAw.EXPERIMENT_USER_TRIGGERED;
        if (u) {
            let t = {
                ...e,
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: N.source,
            };
            f.default.track(m.HAw.EXPERIMENT_USER_TRIGGERED_IGNORED, t, { flush: !1, fingerprint: s });
        } else f.default.track(_, e, { flush: !0, fingerprint: s });
    } else if (n.type === h.Vh.GUILD) {
        let e = c ? m.HAw.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : m.HAw.EXPERIMENT_GUILD_TRIGGERED,
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
        if (u) {
            let e = {
                ...a,
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: N.source,
            };
            f.default.track(m.HAw.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, { flush: !1, fingerprint: s });
        } else f.default.track(e, a, { flush: !0, fingerprint: s });
    }
    u ? C.set(_, p) : ((v[B(t, n, r, c)] = { time: Date.now(), hash: j(n) }), ed(v));
}
function $(e) {
    let [t, n] = e;
    return null != p.k[t] ? p.k[t](n) : null;
}
function q(e) {
    let t = {};
    if (null == e) return t;
    for (let { b: n, k: r } of e) for (let e of r) t[e] = n;
    return t;
}
function Z(e) {
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
        filters: n.map($),
        rawFilterData: n,
    };
}
function Q(e) {
    !P && "CONNECTION_OPEN" === e.type && F(e.user) && (P = !0),
        "EXPERIMENTS_FETCH_SUCCESS" === e.type &&
            S &&
            "ready_payload" === N.source &&
            f.default.track(m.HAw.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: N.source,
                current_snapshot_session_id: N.sessionId,
                current_snapshot_fingerprint: N.fingerprint,
            }),
        (R = {}),
        (O = {}),
        (D = {});
    let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
        { experiments: n, guildExperiments: r } = e,
        i = "CONNECTION_OPEN" === e.type ? "ready_payload" : "logged_out_api",
        a = "sessionId" in e ? e.sessionId : (d.default.getSessionId() ?? ""),
        s = d.default.getFingerprint();
    t && X({ rawUserExperiments: n, rawGuildExperiments: r ?? [], source: i, sessionId: a, fingerprint: s }, !1),
        (S = !0);
}
function X(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: r, sessionId: i, fingerprint: a } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (N = { rawUserExperiments: t, rawGuildExperiments: n ?? [], source: r, sessionId: i, fingerprint: a }),
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
                triggerDebuggingEnabled: V(1 === _, t),
                assignmentSource: r,
                sessionId: i,
                loadedFromCache: s,
                fingerprint: a,
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
                    populations: l.map(Z),
                    overrides: q(u),
                    overridesFormatted: (c ?? []).map((e) => e.map(Z)),
                    holdoutName: d ?? null,
                    holdoutControlBucket: _ ?? null,
                    aaMode: 1 === f,
                    triggerDebuggingEnabled: V(1 === p, t),
                    assignmentSource: r,
                    sessionId: i,
                    loadedFromCache: s,
                    fingerprint: a,
                };
            });
}
function J(e, t, n) {
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
let ee = 1e4;
function et(e, t) {
    let n = k(t),
        r = O[`${n}`];
    if (null == r) return null;
    let { revision: i, aaMode: a } = r,
        s = r.overrides[e],
        o = r.triggerDebuggingEnabled;
    if (null != s)
        return s === h.RE.NOT_ELIGIBLE
            ? null
            : {
                  type: h.Vh.GUILD,
                  guildId: e,
                  revision: i,
                  bucket: s,
                  override: !0,
                  hashResult: -1,
                  triggerDebuggingEnabled: o,
              };
    let l = k(`${r.hashKey ?? t}:${e}`) % ee,
        u = null;
    for (let t of r.overridesFormatted ?? [])
        if (null !== (u = J(e, t, l)))
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
    if (null == (u = J(e, r.populations, l))) return null;
    let c = null;
    return null != r.holdoutName &&
        null != r.holdoutControlBucket &&
        r.holdoutName !== t &&
        ((c = et(e, r.holdoutName)), c?.bucket != null) &&
        (!0 !== c.override && z({ experimentId: r.holdoutName, descriptor: c }), c?.bucket === r.holdoutControlBucket)
        ? null
        : {
              type: h.Vh.GUILD,
              guildId: e,
              revision: r.revision,
              bucket: u,
              hashResult: l,
              aaMode: a,
              triggerDebuggingEnabled: o,
              assignmentSource: r.assignmentSource,
              sessionId: r.sessionId,
              loadedFromCache: r.loadedFromCache,
              holdoutName: null != c ? r.holdoutName : null,
              holdoutRevision: c?.revision,
              holdoutBucket: c?.bucket,
          };
}
function en(e) {
    let t = {};
    for (let n in e) {
        let r = e[n];
        for (let e of ((t[n] = { ...r }), t[n].populations)) e.filters = e.rawFilterData.map($);
        for (let e of t[n].overridesFormatted ?? []) for (let t of e) t.filters = t.rawFilterData.map($);
    }
    return t;
}
function er(e) {
    let { serializedExperimentStore: t, user: n } = e;
    !P && F(n) && (P = !0),
        (S = t.hasLoadedExperiments),
        (v = t.trackedExposureExperiments),
        (R = t.loadedUserExperiments),
        (L = t.userExperimentOverrides),
        (w = t.guildExperimentOverrides),
        (N = {
            ...N,
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint,
        }),
        (O = en(t.loadedGuildExperiments)),
        (D = {}),
        __OVERLAY__ && ((x = t.cookieOverrides ?? null), el());
}
function ei() {
    S = !0;
}
function ea(e) {
    let { isSwitchingAccount: t } = e;
    o.w.remove(g),
        t || (o.w.remove(E), o.w.remove(A), o.w.remove(I), (L = {}), (w = {})),
        (R = {}),
        (N = { ...N, rawUserExperiments: [] }),
        (v = {}),
        (S = !1);
}
function es() {
    (S = !1), (v = {}), (O = {}), o.w.remove(g);
}
function eo() {
    let e = o.w.get(g);
    if (null == e || e.v !== T) return {};
    let t = e.e,
        n = Date.now(),
        r = !1;
    for (let e in t) n - t[e].time > G && (delete t[e], (r = !0));
    return r && ed(t), t;
}
function el() {
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
function eu() {
    let e = [o.w.get(E) ?? {}, o.w.get(A) ?? {}, o.w.get(I) ?? {}];
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
    (t = el() || t) && ec();
}
function ec() {
    try {
        o.w.set(A, L);
    } catch (e) {
        y.error("Error saving user experiment overrides, unsaved data will be lost", e),
            f.default.track(m.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
    try {
        o.w.set(I, w);
    } catch (e) {
        y.error("Error saving guild experiment overrides, unsaved data will be lost", e),
            f.default.track(m.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
}
function ed(e) {
    try {
        o.w.set(g, { v: T, e: e });
    } catch (e) {
        y.error("Error saving tracked exposure experiments, unsaved data will be lost", e),
            f.default.track(m.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveTrackedExposureExperiments",
            });
    }
}
function e_(e) {
    let { experimentId: t, experimentType: n, title: r, description: i, buckets: a, commonTriggerPoint: s } = e;
    b[t] = { type: n, title: r, description: i, buckets: a, commonTriggerPoint: s };
}
function ef(e) {
    let { experimentId: t, experimentBucket: n, experimentType: r, skipCleanup: i } = e,
        a = r ?? b[t]?.type;
    if (null == a) return !1;
    if (
        (null == n
            ? ((L = { ...L }), delete L[t], (w = { ...w }), delete w[t])
            : "user" === a
              ? (L = { ...L, [t]: { type: a, revision: 1, population: 0, bucket: n, override: !0 } })
              : (w = { ...w, [t]: { type: a, revision: 1, bucket: n, override: !0 } }),
        !i)
    )
        for (let e of [L, w]) for (let t in e) null == b[t] && delete L[t];
    ec();
}
function ep(e) {
    let { guild: t } = e;
    for (let e in D) {
        let [n] = e.split(":");
        t.id === n && delete D[e];
    }
}
class eh extends _.A {
    static displayName = "ExperimentStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super(
            {
                LOGOUT: ea,
                LOGIN_SUCCESS: es,
                CONNECTION_OPEN: Q,
                EXPERIMENTS_FETCH_SUCCESS: Q,
                OVERLAY_INITIALIZE: er,
                EXPERIMENTS_FETCH_FAILURE: ei,
                EXPERIMENT_OVERRIDE_BUCKET: ef,
                GUILD_CREATE: ep,
                GUILD_UPDATE: ep,
            },
            l.A.Early,
        );
    }
    trackExposure = z;
    initialize() {
        (v = eo()), eu(), this.waitFor(d.default), this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(eh.LATEST_SNAPSHOT_VERSION);
        null != e &&
            ("loadedUserExperiments" in e
                ? ((R = e.loadedUserExperiments),
                  (O = en(e.loadedGuildExperiments)),
                  Object.values(R).forEach((e) => (e.loadedFromCache = !0)),
                  Object.values(O).forEach((e) => (e.loadedFromCache = !0)))
                : X(e, !0));
    }
    takeSnapshot() {
        return { version: eh.LATEST_SNAPSHOT_VERSION, data: { ...N } };
    }
    get hasLoadedExperiments() {
        return S;
    }
    hasRegisteredExperiment(e) {
        return null != b[e];
    }
    getUserExperimentDescriptor(e) {
        if (P) {
            let t = L[e];
            if (null != t) return t;
        }
        let t = k(e);
        return R[`${t}`];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = t ?? m.dJq,
            r = w[e];
        if (P && null != r) return r;
        let i = `${n}:${e}`;
        if (i in D) return D[i];
        let a = et(n, e);
        return (D[i] = a), a;
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
        return b;
    }
    getAllExperimentOverrideDescriptors() {
        return P ? { ...L, ...w } : {};
    }
    getExperimentOverrideDescriptor(e) {
        return P ? (L[e] ?? w[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            t = {};
        for (let n in (Object.keys(b).forEach((e) => {
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
            hasLoadedExperiments: S,
            trackedExposureExperiments: v,
            loadedUserExperiments: R,
            loadedGuildExperiments: e,
            userExperimentOverrides: L,
            guildExperimentOverrides: w,
            cookieOverrides: (0, u.DI)(),
            assignmentSource: N.source,
            assignmentSessionId: N.sessionId,
            assignmentFingerprint: N.fingerprint,
        };
    }
    hasExperimentTrackedExposure(e, t, n, r) {
        return W(B(e, t, n, r), j(t));
    }
}
let em = new eh();
