"use strict";
n.d(t, { A: () => ep, N: () => ed }), n(938796);
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
    h = n(98801),
    p = n(688151),
    g = n(652215);
let E = "scientist:triggered",
    A = "exerimentOverrides",
    I = "userExperimentOverrides",
    T = "guildExperimentOverrides",
    y = 1,
    S = new c.A("ExperimentStore"),
    v = !1,
    C = {},
    b = new Map(),
    N = {},
    R = { rawUserExperiments: [], rawGuildExperiments: [] },
    O = {},
    D = {},
    L = {},
    w = {},
    x = {},
    P = null,
    M = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, u.kK)(),
    k = {};
function U(e) {
    let t = k[e];
    if (void 0 !== t) return t;
    {
        let t = s().v3(e);
        return (k[e] = t), t;
    }
}
let G = 6048e5;
function F(e) {
    return ((e.flags ?? 0) & g.nhx.STAFF) === g.nhx.STAFF || null != e.personal_connection_id;
}
function V(e, t, n, r) {
    let i = `${t.type}|${e}`,
        a = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    if (t.type === p.Vh.USER) return a && ((i += `|${n}`), r && (i += "|triggerDebugging")), i;
    if (t.type === p.Vh.GUILD) return (i += `|${t.guildId}`), a && ((i += `|${n}`), r && (i += "|triggerDebugging")), i;
    throw Error();
}
function B(e) {
    if (e.type === p.Vh.USER) return U(`${e.bucket}|${e.revision}`);
    if (e.type === p.Vh.GUILD) return U(`${e.bucket}|${e.revision}|${e.guildId}`);
    throw Error();
}
let j = Date.now(),
    H = !1;
function Y(e, t) {
    let n = C[e];
    return !(null == n || (H ? n.time < j : Date.now() - n.time > G)) && n.hash === t;
}
function W(e, t) {
    return b.get(e) === t;
}
function K(e) {
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
    let c = l === p.vf.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
        _ = V(t, n, r, c),
        h = B(n);
    if ((u && W(_, h)) || Y(_, h)) return !1;
    if (n.type === p.Vh.USER) {
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
        let _ = c ? g.HAw.EXPERIMENT_USER_TRIGGERED_FALLBACK : g.HAw.EXPERIMENT_USER_TRIGGERED;
        if (u) {
            let t = {
                ...e,
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: R.source,
            };
            f.default.track(g.HAw.EXPERIMENT_USER_TRIGGERED_IGNORED, t, { flush: !1, fingerprint: s });
        } else f.default.track(_, e, { flush: !0, fingerprint: s });
    } else if (n.type === p.Vh.GUILD) {
        let e = c ? g.HAw.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : g.HAw.EXPERIMENT_GUILD_TRIGGERED,
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
                current_source: R.source,
            };
            f.default.track(g.HAw.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, { flush: !1, fingerprint: s });
        } else f.default.track(e, a, { flush: !0, fingerprint: s });
    }
    u ? b.set(_, h) : ((C[V(t, n, r, c)] = { time: Date.now(), hash: B(n) }), ec(C));
}
function $(e) {
    let [t, n] = e;
    return null != h.k[t] ? h.k[t](n) : null;
}
function z(e) {
    let t = {};
    if (null == e) return t;
    for (let { b: n, k: r } of e) for (let e of r) t[e] = n;
    return t;
}
function q(e) {
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
function X(e) {
    !M && "CONNECTION_OPEN" === e.type && F(e.user) && (M = !0),
        "EXPERIMENTS_FETCH_SUCCESS" === e.type &&
            v &&
            "ready_payload" === R.source &&
            f.default.track(g.HAw.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: R.source,
                current_snapshot_session_id: R.sessionId,
                current_snapshot_fingerprint: R.fingerprint,
            }),
        (O = {}),
        (D = {}),
        (L = {});
    let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
        { experiments: n, guildExperiments: r } = e,
        i = "CONNECTION_OPEN" === e.type ? "ready_payload" : "logged_out_api",
        a = "sessionId" in e ? e.sessionId : (d.default.getSessionId() ?? ""),
        s = d.default.getFingerprint();
    t && Z({ rawUserExperiments: n, rawGuildExperiments: r ?? [], source: i, sessionId: a, fingerprint: s }, !1),
        (v = !0);
}
function Z(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: r, sessionId: i, fingerprint: a } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (R = { rawUserExperiments: t, rawGuildExperiments: n ?? [], source: r, sessionId: i, fingerprint: a }),
        t.forEach((e) => {
            let [t, n, o, l, u, c, d, _, f, h, p] = e;
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
                loadedFromCache: s,
                fingerprint: a,
                holdoutName: f,
                holdoutRevision: h,
                holdoutBucket: p,
            };
        }),
        null != n &&
            n.forEach((e) => {
                let [t, n, o, l, u, c, d, _, f, h] = e;
                D[t] = {
                    hashKey: n,
                    revision: o,
                    populations: l.map(q),
                    overrides: z(u),
                    overridesFormatted: (c ?? []).map((e) => e.map(q)),
                    holdoutName: d ?? null,
                    holdoutControlBucket: _ ?? null,
                    aaMode: 1 === f,
                    triggerDebuggingEnabled: 1 === h,
                    assignmentSource: r,
                    sessionId: i,
                    loadedFromCache: s,
                    fingerprint: a,
                };
            });
}
function Q(e, t, n) {
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
        if ((r = null != t ? t.bucket : p.RE.CONTROL) === p.RE.NOT_ELIGIBLE) break;
        return r;
    }
    return null;
}
let J = 1e4;
function ee(e, t) {
    let n = U(t),
        r = D[`${n}`];
    if (null == r) return null;
    let { revision: i, aaMode: a } = r,
        s = r.overrides[e],
        o = r.triggerDebuggingEnabled;
    if (null != s)
        return s === p.RE.NOT_ELIGIBLE
            ? null
            : {
                  type: p.Vh.GUILD,
                  guildId: e,
                  revision: i,
                  bucket: s,
                  override: !0,
                  hashResult: -1,
                  triggerDebuggingEnabled: o,
              };
    let l = U(`${r.hashKey ?? t}:${e}`) % J,
        u = null;
    for (let t of r.overridesFormatted ?? [])
        if (null !== (u = Q(e, t, l)))
            return {
                type: p.Vh.GUILD,
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
    if (null == (u = Q(e, r.populations, l))) return null;
    let c = null;
    return null != r.holdoutName &&
        null != r.holdoutControlBucket &&
        r.holdoutName !== t &&
        ((c = ee(e, r.holdoutName)), c?.bucket != null) &&
        (!0 !== c.override && K({ experimentId: r.holdoutName, descriptor: c }), c?.bucket === r.holdoutControlBucket)
        ? null
        : {
              type: p.Vh.GUILD,
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
function et(e) {
    let t = {};
    for (let n in e) {
        let r = e[n];
        for (let e of ((t[n] = { ...r }), t[n].populations)) e.filters = e.rawFilterData.map($);
        for (let e of t[n].overridesFormatted ?? []) for (let t of e) t.filters = t.rawFilterData.map($);
    }
    return t;
}
function en(e) {
    let { serializedExperimentStore: t, user: n } = e;
    !M && F(n) && (M = !0),
        (v = t.hasLoadedExperiments),
        (C = t.trackedExposureExperiments),
        (O = t.loadedUserExperiments),
        (w = t.userExperimentOverrides),
        (x = t.guildExperimentOverrides),
        (R = {
            ...R,
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint,
        }),
        (D = et(t.loadedGuildExperiments)),
        (L = {}),
        __OVERLAY__ && ((P = t.cookieOverrides ?? null), eo());
}
function er() {
    v = !0;
}
function ei(e) {
    let { isSwitchingAccount: t } = e;
    o.w.remove(E),
        t || (o.w.remove(A), o.w.remove(I), o.w.remove(T), (w = {}), (x = {})),
        (O = {}),
        (R = { ...R, rawUserExperiments: [] }),
        (C = {}),
        (v = !1);
}
function ea() {
    (v = !1), (C = {}), (D = {}), o.w.remove(E);
}
function es() {
    let e = o.w.get(E);
    if (null == e || e.v !== y) return {};
    let t = e.e,
        n = Date.now(),
        r = !1;
    for (let e in t) n - t[e].time > G && (delete t[e], (r = !0));
    return r && ec(t), t;
}
function eo() {
    let e = !1,
        t = __OVERLAY__ ? P : (0, u.DI)();
    for (let n in t)
        (w[n] = {
            type: p.Vh.USER,
            revision: 1,
            population: 0,
            override: !0,
            fromCookie: !0,
            assignmentSource: "override",
            bucket: t[n],
        }),
            (x[n] = {
                type: p.Vh.GUILD,
                revision: 1,
                override: !0,
                fromCookie: !0,
                assignmentSource: "override",
                bucket: t[n],
            }),
            (e = !0);
    return e;
}
function el() {
    let e = [o.w.get(A) ?? {}, o.w.get(I) ?? {}, o.w.get(T) ?? {}];
    (w = {}), (x = {});
    let t = !i().isEmpty(e[0]);
    for (let n of e)
        for (let e in n) {
            let r = n[e];
            null == r ||
            (r.type !== p.Vh.USER && r.type !== p.Vh.GUILD) ||
            null == r.bucket ||
            !0 !== r.override ||
            r.fromCookie
                ? (delete n[e], (t = !0))
                : r.type === p.Vh.USER
                  ? (w[e] = r)
                  : (x[e] = r);
        }
    (t = eo() || t) && eu();
}
function eu() {
    try {
        o.w.set(I, w);
    } catch (e) {
        S.error("Error saving user experiment overrides, unsaved data will be lost", e),
            f.default.track(g.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
    try {
        o.w.set(T, x);
    } catch (e) {
        S.error("Error saving guild experiment overrides, unsaved data will be lost", e),
            f.default.track(g.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
}
function ec(e) {
    try {
        o.w.set(E, { v: y, e: e });
    } catch (e) {
        S.error("Error saving tracked exposure experiments, unsaved data will be lost", e),
            f.default.track(g.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveTrackedExposureExperiments",
            });
    }
}
function ed(e) {
    let { experimentId: t, experimentType: n, title: r, description: i, buckets: a, commonTriggerPoint: s } = e;
    N[t] = { type: n, title: r, description: i, buckets: a, commonTriggerPoint: s };
}
function e_(e) {
    let { experimentId: t, experimentBucket: n, experimentType: r, skipCleanup: i } = e,
        a = r ?? N[t]?.type;
    if (null == a) return !1;
    if (
        (null == n
            ? ((w = { ...w }), delete w[t], (x = { ...x }), delete x[t])
            : "user" === a
              ? (w = { ...w, [t]: { type: a, revision: 1, population: 0, bucket: n, override: !0 } })
              : (x = { ...x, [t]: { type: a, revision: 1, bucket: n, override: !0 } }),
        !i)
    )
        for (let e of [w, x]) for (let t in e) null == N[t] && delete w[t];
    eu();
}
function ef(e) {
    let { guild: t } = e;
    for (let e in L) {
        let [n] = e.split(":");
        t.id === n && delete L[e];
    }
}
class eh extends _.A {
    static displayName = "ExperimentStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super(
            {
                LOGOUT: ei,
                LOGIN_SUCCESS: ea,
                CONNECTION_OPEN: X,
                EXPERIMENTS_FETCH_SUCCESS: X,
                OVERLAY_INITIALIZE: en,
                EXPERIMENTS_FETCH_FAILURE: er,
                EXPERIMENT_OVERRIDE_BUCKET: e_,
                GUILD_CREATE: ef,
                GUILD_UPDATE: ef,
            },
            l.A.Early,
        );
    }
    trackExposure = K;
    initialize() {
        (C = es()), el(), this.waitFor(d.default), this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(eh.LATEST_SNAPSHOT_VERSION);
        null != e &&
            ("loadedUserExperiments" in e
                ? ((O = e.loadedUserExperiments),
                  (D = et(e.loadedGuildExperiments)),
                  Object.values(O).forEach((e) => (e.loadedFromCache = !0)),
                  Object.values(D).forEach((e) => (e.loadedFromCache = !0)))
                : Z(e, !0));
    }
    takeSnapshot() {
        return { version: eh.LATEST_SNAPSHOT_VERSION, data: { ...R } };
    }
    get hasLoadedExperiments() {
        return v;
    }
    hasRegisteredExperiment(e) {
        return null != N[e];
    }
    getUserExperimentDescriptor(e) {
        if (M) {
            let t = w[e];
            if (null != t) return t;
        }
        let t = U(e);
        return O[`${t}`];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = t ?? g.dJq,
            r = x[e];
        if (M && null != r) return r;
        let i = `${n}:${e}`;
        if (i in L) return L[i];
        let a = ee(n, e);
        return (L[i] = a), a;
    }
    getUserExperimentBucket(e) {
        let t = this.getUserExperimentDescriptor(e);
        return null != t ? t.bucket : p.RE.NOT_ELIGIBLE;
    }
    getGuildExperimentBucket(e, t) {
        let n = this.getGuildExperimentDescriptor(e, t);
        return null != n ? n.bucket : p.RE.NOT_ELIGIBLE;
    }
    getAllUserExperimentDescriptors() {
        return O;
    }
    getGuildExperiments() {
        return D;
    }
    getLoadedUserExperiment(e) {
        return O[U(e)];
    }
    getLoadedGuildExperiment(e) {
        return D[U(e)];
    }
    getRecentExposures(e, t) {
        let n = `${e}|${t}|`;
        return Object.entries(C)
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
        return N;
    }
    getAllExperimentOverrideDescriptors() {
        return M ? { ...w, ...x } : {};
    }
    getExperimentOverrideDescriptor(e) {
        return M ? (w[e] ?? x[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            t = {};
        for (let n in (Object.keys(N).forEach((e) => {
            t[U(`${e}`)] = e;
        }),
        O)) {
            let r = t[n];
            null != r && (e[r] = O[n].bucket);
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
            hasLoadedExperiments: v,
            trackedExposureExperiments: C,
            loadedUserExperiments: O,
            loadedGuildExperiments: e,
            userExperimentOverrides: w,
            guildExperimentOverrides: x,
            cookieOverrides: (0, u.DI)(),
            assignmentSource: R.source,
            assignmentSessionId: R.sessionId,
            assignmentFingerprint: R.fingerprint,
        };
    }
    hasExperimentTrackedExposure(e, t, n, r) {
        return Y(V(e, t, n, r), B(t));
    }
}
let ep = new eh();
