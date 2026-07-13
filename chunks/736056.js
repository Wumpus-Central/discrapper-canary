"use strict";
n.d(t, { A: () => ef, N: () => eE }), n(938796);
var i = n(735438),
    r = n.n(i),
    a = n(181370),
    s = n.n(a),
    l = n(506774),
    o = n(228366),
    d = n(380610),
    c = n(626584),
    u = n(280450),
    _ = n(536802),
    E = n(174459),
    A = n(824120),
    h = n.n(A),
    I = n(17928),
    f = n(860689);
let p = {};
class T extends I.Ay.Store {
    static displayName = "AuthInviteStore";
    getGuild(e) {
        return p[e];
    }
}
let m = new T(o.h, {
    AUTH_INVITE_UPDATE: function (e) {
        let { invite: t } = e,
            n = t.guild;
        if (null == n) return !1;
        p[n.id] = (0, f.DY)(n);
    },
});
var g = n(498642),
    S = n(71393),
    N = n(927813),
    C = n(935208);
function O(e, t, n) {
    let i, r, a;
    try {
        (i = h()(e)), (r = null != t ? h()(t) : null), (a = null != n ? h()(n) : null);
    } catch {
        return !1;
    }
    return !((null != r && i.lesser(r)) || (null != a && i.greater(a)));
}
function R(e) {
    let t, n;
    for (let [i, r] of e)
        switch (i) {
            case s().v3("min_id"):
                t = r;
                break;
            case s().v3("max_id"):
                n = r;
        }
    return { min: t, max: n };
}
let L = {
    [s().v3("guild_ids")]: (e) => {
        let t = [];
        for (let [n, i] of e) n === s().v3("guild_ids") && (t = i);
        return (e) => t.includes(e);
    },
    [s().v3("guild_id_range")]: (e) => {
        let { min: t, max: n } = R(e);
        return (e) => O(e, t, n);
    },
    [s().v3("guild_age_range_days")]: (e) => {
        let { min: t, max: n } = R(e);
        return (e) => O(Math.floor(C.default.age(e) / N.A.Millis.DAY), t, n);
    },
    [s().v3("guild_member_count_range")]: (e) => {
        let { min: t, max: n } = R(e);
        return (e) => {
            let i = g.A.getMemberCount(e);
            return null != i && O(i, t, n);
        };
    },
    [s().v3("guild_has_feature")]: (e) => {
        let [[, t]] = e;
        return (e) => {
            let n = S.A.getGuild(e) ?? m.getGuild(e);
            return null != n && t.some((e) => n.features.has(e));
        };
    },
    [s().v3("guild_hub_types")]: (e) => {
        let [[, t]] = e;
        return (e) => {
            let n = S.A.getGuild(e) ?? m.getGuild(e);
            return null != n && "number" == typeof n.hubType && t.some((e) => n.hubType === e);
        };
    },
    [s().v3("guild_has_vanity_url")]: (e) => {
        let [[, t]] = e;
        return (e) => {
            let n = S.A.getGuild(e) ?? m.getGuild(e);
            return null != n && t === (null != n.vanityURLCode);
        };
    },
    [s().v3("guild_in_range_by_hash")]: (e) => {
        let t, n;
        for (let [i, r] of e)
            switch (i) {
                case s().v3("hash_key"):
                    t = r;
                    break;
                case s().v3("target"):
                    n = parseInt(r) ?? 0;
            }
        return (e) => {
            let i = s().v3(`${t}:${e}`);
            return (i > 0 ? i + i : i >>> 0) % 1e4 < n;
        };
    },
};
var D = n(688151),
    y = n(652215);
let v = "scientist:triggered",
    b = "exerimentOverrides",
    M = "userExperimentOverrides",
    P = "guildExperimentOverrides",
    U = new c.A("ExperimentStore"),
    w = !1,
    G = {},
    x = new Map(),
    k = {},
    F = { rawUserExperiments: [], rawGuildExperiments: [] },
    V = {},
    B = {},
    H = {},
    j = {},
    W = {},
    Y = null,
    K = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, d.kK)(),
    $ = {};
function z(e) {
    let t = $[e];
    if (void 0 !== t) return t;
    {
        let t = s().v3(e);
        return ($[e] = t), t;
    }
}
function q(e) {
    return ((e.flags ?? 0) & y.nhx.STAFF) === y.nhx.STAFF || null != e.personal_connection_id;
}
function Z(e, t, n, i) {
    let r = `${t.type}|${e}`,
        a = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    switch (t.type) {
        case D.Vh.USER:
            return a && ((r += `|${n}`), i && (r += "|triggerDebugging")), r;
        case D.Vh.GUILD:
            return (r += `|${t.guildId}`), a && ((r += `|${n}`), i && (r += "|triggerDebugging")), r;
        default:
            throw Error(`Unknown experiment type: ${t}`);
    }
}
function X(e) {
    switch (e.type) {
        case D.Vh.USER:
            return z(`${e.bucket}|${e.revision}`);
        case D.Vh.GUILD:
            return z(`${e.bucket}|${e.revision}|${e.guildId}`);
        default:
            throw Error(`Unknown experiment type: ${e}`);
    }
}
function Q(e, t) {
    let n = G[e];
    return !(null == n || Date.now() - n.time > 6048e5) && n.hash === t;
}
function J(e) {
    let {
            experimentId: t,
            descriptor: n,
            location: i,
            location_stack: r,
            context: a,
            fingerprint: s,
            excluded: l,
            exposureType: o,
        } = e,
        d = !1;
    switch (n.assignmentSource) {
        case "override":
            return !1;
        case "ready_payload":
            n.sessionId !== u.default.getSessionId() && (d = !0);
            break;
        case "logged_out_api":
            n.fingerprint !== u.default.getFingerprint() && (d = !0);
            break;
        default:
            d = !0;
    }
    if (n.override) return !1;
    let c = o === D.vf.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
        _ = Z(t, n, i, c),
        A = X(n);
    if ((d && x.get(_) === A) || Q(_, A)) return !1;
    switch (n.type) {
        case D.Vh.USER: {
            let e = {
                name: t,
                revision: n.revision,
                population: n.population,
                bucket: n.bucket,
                location: i,
                location_stack: r,
                hash_result: n.hashResult,
                excluded: l,
                exposure_type: o,
                assignment_source: n.assignmentSource,
                assignment_session_id: n.sessionId,
                assignment_loaded_from_cache: n.loadedFromCache,
                holdout_name: n.holdoutName,
                holdout_revision: n.holdoutRevision,
                holdout_bucket: n.holdoutBucket,
            };
            null != a && (e.context_guild_id = a.guildId);
            let _ = c ? y.HAw.EXPERIMENT_USER_TRIGGERED_FALLBACK : y.HAw.EXPERIMENT_USER_TRIGGERED;
            if (d) {
                let t = {
                    ...e,
                    assignment_fingerprint: n.fingerprint,
                    current_session_id: u.default.getSessionId(),
                    current_fingerprint: u.default.getFingerprint(),
                    current_source: F.source,
                };
                E.default.track(y.HAw.EXPERIMENT_USER_TRIGGERED_IGNORED, t, { flush: !1, fingerprint: s });
            } else E.default.track(_, e, { flush: !0, fingerprint: s });
            break;
        }
        case D.Vh.GUILD: {
            let e = c ? y.HAw.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : y.HAw.EXPERIMENT_GUILD_TRIGGERED,
                a = {
                    name: t,
                    revision: n.revision,
                    bucket: n.bucket,
                    guild_id: n.guildId,
                    location: i,
                    location_stack: r,
                    hash_result: n.hashResult,
                    excluded: l,
                    exposure_type: o,
                    assignment_source: n.assignmentSource,
                    assignment_session_id: n.sessionId,
                    assignment_loaded_from_cache: n.loadedFromCache,
                    holdout_name: n.holdoutName,
                    holdout_revision: n.holdoutRevision,
                    holdout_bucket: n.holdoutBucket,
                };
            if (d) {
                let e = {
                    ...a,
                    assignment_fingerprint: n.fingerprint,
                    current_session_id: u.default.getSessionId(),
                    current_fingerprint: u.default.getFingerprint(),
                    current_source: F.source,
                };
                E.default.track(y.HAw.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, { flush: !1, fingerprint: s });
            } else E.default.track(e, a, { flush: !0, fingerprint: s });
        }
    }
    d ? x.set(_, A) : ((G[Z(t, n, i, c)] = { time: Date.now(), hash: X(n) }), e_(G));
}
function ee(e) {
    let [t, n] = e;
    return null != L[t] ? L[t](n) : null;
}
function et(e) {
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
        filters: n.map(ee),
        rawFilterData: n,
    };
}
function en(e) {
    !K && "CONNECTION_OPEN" === e.type && q(e.user) && (K = !0),
        "EXPERIMENTS_FETCH_SUCCESS" === e.type &&
            w &&
            "ready_payload" === F.source &&
            E.default.track(y.HAw.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: F.source,
                current_snapshot_session_id: F.sessionId,
                current_snapshot_fingerprint: F.fingerprint,
            }),
        (V = {}),
        (B = {}),
        (H = {});
    let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === u.default.getFingerprint(),
        { experiments: n, guildExperiments: i } = e,
        r = "CONNECTION_OPEN" === e.type ? "ready_payload" : "logged_out_api",
        a = "sessionId" in e ? e.sessionId : (u.default.getSessionId() ?? ""),
        s = u.default.getFingerprint();
    t && ei({ rawUserExperiments: n, rawGuildExperiments: i ?? [], source: r, sessionId: a, fingerprint: s }, !1),
        (w = !0);
}
function ei(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: i, sessionId: r, fingerprint: a } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (F = { rawUserExperiments: t, rawGuildExperiments: n ?? [], source: i, sessionId: r, fingerprint: a }),
        t.forEach((e) => {
            let [t, n, l, o, d, c, u, _, E, A, h] = e;
            V[t] = {
                type: "user",
                revision: n,
                population: d,
                bucket: l,
                override: 0 === o,
                hashResult: c ?? -1,
                aaMode: 1 === u,
                triggerDebuggingEnabled: 1 === _,
                assignmentSource: i,
                sessionId: r,
                loadedFromCache: s,
                fingerprint: a,
                holdoutName: E,
                holdoutRevision: A,
                holdoutBucket: h,
            };
        }),
        null != n &&
            n.forEach((e) => {
                let [t, n, l, o, d, c, u, _, E, A] = e;
                B[t] = {
                    hashKey: n,
                    revision: l,
                    populations: o.map(et),
                    overrides: (function (e) {
                        let t = {};
                        if (null == e) return t;
                        for (let { b: n, k: i } of e) for (let e of i) t[e] = n;
                        return t;
                    })(d),
                    overridesFormatted: (c ?? []).map((e) => e.map(et)),
                    holdoutName: u ?? null,
                    holdoutControlBucket: _ ?? null,
                    aaMode: 1 === E,
                    triggerDebuggingEnabled: 1 === A,
                    assignmentSource: i,
                    sessionId: r,
                    loadedFromCache: s,
                    fingerprint: a,
                };
            });
}
function er(e, t, n) {
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
        if ((i = null != t ? t.bucket : D.RE.CONTROL) === D.RE.NOT_ELIGIBLE) break;
        return i;
    }
    return null;
}
function ea(e) {
    let t = {};
    for (let n in e) {
        let i = e[n];
        for (let e of ((t[n] = { ...i }), t[n].populations)) e.filters = e.rawFilterData.map(ee);
        for (let e of t[n].overridesFormatted ?? []) for (let t of e) t.filters = t.rawFilterData.map(ee);
    }
    return t;
}
function es(e) {
    let { serializedExperimentStore: t, user: n } = e;
    !K && q(n) && (K = !0),
        (w = t.hasLoadedExperiments),
        (G = t.trackedExposureExperiments),
        (V = t.loadedUserExperiments),
        (j = t.userExperimentOverrides),
        (W = t.guildExperimentOverrides),
        (F = {
            ...F,
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint,
        }),
        (B = ea(t.loadedGuildExperiments)),
        (H = {}),
        __OVERLAY__ && ((Y = t.cookieOverrides ?? null), ec());
}
function el() {
    w = !0;
}
function eo(e) {
    let { isSwitchingAccount: t } = e;
    l.w.remove(v),
        t || (l.w.remove(b), l.w.remove(M), l.w.remove(P), (j = {}), (W = {})),
        (V = {}),
        (F = { ...F, rawUserExperiments: [] }),
        (G = {}),
        (w = !1);
}
function ed() {
    (w = !1), (G = {}), (B = {}), l.w.remove(v);
}
function ec() {
    let e = !1,
        t = __OVERLAY__ ? Y : (0, d.DI)();
    for (let n in t)
        (j[n] = {
            type: D.Vh.USER,
            revision: 1,
            population: 0,
            override: !0,
            fromCookie: !0,
            assignmentSource: "override",
            bucket: t[n],
        }),
            (W[n] = {
                type: D.Vh.GUILD,
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
    try {
        l.w.set(M, j);
    } catch (e) {
        U.error("Error saving user experiment overrides, unsaved data will be lost", e),
            E.default.track(y.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
    try {
        l.w.set(P, W);
    } catch (e) {
        U.error("Error saving guild experiment overrides, unsaved data will be lost", e),
            E.default.track(y.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
}
function e_(e) {
    try {
        l.w.set(v, { v: 1, e: e });
    } catch (e) {
        U.error("Error saving tracked exposure experiments, unsaved data will be lost", e),
            E.default.track(y.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveTrackedExposureExperiments",
            });
    }
}
function eE(e) {
    let { experimentId: t, experimentType: n, title: i, description: r, buckets: a, commonTriggerPoint: s } = e;
    k[t] = { type: n, title: i, description: r, buckets: a, commonTriggerPoint: s };
}
function eA(e) {
    let { experimentId: t, experimentBucket: n, experimentType: i, skipCleanup: r } = e,
        a = i ?? k[t]?.type;
    if (null == a) return !1;
    if (
        (null == n
            ? ((j = { ...j }), delete j[t], (W = { ...W }), delete W[t])
            : "user" === a
              ? (j = { ...j, [t]: { type: a, revision: 1, population: 0, bucket: n, override: !0 } })
              : (W = { ...W, [t]: { type: a, revision: 1, bucket: n, override: !0 } }),
        !r)
    )
        for (let e of [j, W]) for (let t in e) null == k[t] && delete j[t];
    eu();
}
function eh(e) {
    let { guild: t } = e;
    for (let e in H) {
        let [n] = e.split(":");
        t.id === n && delete H[e];
    }
}
Date.now();
class eI extends _.A {
    static displayName = "ExperimentStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super(
            {
                LOGOUT: eo,
                LOGIN_SUCCESS: ed,
                CONNECTION_OPEN: en,
                EXPERIMENTS_FETCH_SUCCESS: en,
                OVERLAY_INITIALIZE: es,
                EXPERIMENTS_FETCH_FAILURE: el,
                EXPERIMENT_OVERRIDE_BUCKET: eA,
                GUILD_CREATE: eh,
                GUILD_UPDATE: eh,
            },
            o.A.Early,
        );
    }
    trackExposure = J;
    initialize() {
        G = (function () {
            let e = l.w.get(v);
            if (null == e || 1 !== e.v) return {};
            let t = e.e,
                n = Date.now(),
                i = !1;
            for (let e in t) n - t[e].time > 6048e5 && (delete t[e], (i = !0));
            return i && e_(t), t;
        })();
        let e = [l.w.get(b) ?? {}, l.w.get(M) ?? {}, l.w.get(P) ?? {}];
        (j = {}), (W = {});
        let t = !r().isEmpty(e[0]);
        for (let n of e)
            for (let e in n) {
                let i = n[e];
                if (null == i || null == i.bucket || !0 !== i.override || i.fromCookie) {
                    delete n[e], (t = !0);
                    continue;
                }
                switch (i.type) {
                    case D.Vh.USER:
                        j[e] = i;
                        break;
                    case D.Vh.GUILD:
                        W[e] = i;
                        break;
                    default:
                        delete n[e], (t = !0);
                }
            }
        (t = ec() || t) && eu(), this.waitFor(u.default), this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(eI.LATEST_SNAPSHOT_VERSION);
        null != e &&
            ("loadedUserExperiments" in e
                ? ((V = e.loadedUserExperiments),
                  (B = ea(e.loadedGuildExperiments)),
                  Object.values(V).forEach((e) => (e.loadedFromCache = !0)),
                  Object.values(B).forEach((e) => (e.loadedFromCache = !0)))
                : ei(e, !0));
    }
    takeSnapshot() {
        return { version: eI.LATEST_SNAPSHOT_VERSION, data: { ...F } };
    }
    get hasLoadedExperiments() {
        return w;
    }
    hasRegisteredExperiment(e) {
        return null != k[e];
    }
    getUserExperimentDescriptor(e) {
        if (K) {
            let t = j[e];
            if (null != t) return t;
        }
        let t = z(e);
        return V[`${t}`];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = t ?? y.dJq,
            i = W[e];
        if (K && null != i) return i;
        let r = `${n}:${e}`;
        if (r in H) return H[r];
        let a = (function e(t, n) {
            let i = z(n),
                r = B[`${i}`];
            if (null == r) return null;
            let { revision: a, aaMode: s } = r,
                l = r.overrides[t],
                o = r.triggerDebuggingEnabled;
            if (null != l)
                return l === D.RE.NOT_ELIGIBLE
                    ? null
                    : {
                          type: D.Vh.GUILD,
                          guildId: t,
                          revision: a,
                          bucket: l,
                          override: !0,
                          hashResult: -1,
                          triggerDebuggingEnabled: o,
                      };
            let d = z(`${r.hashKey ?? n}:${t}`) % 1e4,
                c = null;
            for (let e of r.overridesFormatted ?? [])
                if (null !== (c = er(t, e, d)))
                    return {
                        type: D.Vh.GUILD,
                        guildId: t,
                        revision: r.revision,
                        bucket: c,
                        override: !0,
                        hashResult: d,
                        triggerDebuggingEnabled: o,
                        assignmentSource: r.assignmentSource,
                        sessionId: r.sessionId,
                        loadedFromCache: r.loadedFromCache,
                    };
            if (null == (c = er(t, r.populations, d))) return null;
            let u = null;
            return null != r.holdoutName &&
                null != r.holdoutControlBucket &&
                r.holdoutName !== n &&
                ((u = e(t, r.holdoutName)), u?.bucket != null) &&
                (!0 !== u.override && J({ experimentId: r.holdoutName, descriptor: u }),
                u?.bucket === r.holdoutControlBucket)
                ? null
                : {
                      type: D.Vh.GUILD,
                      guildId: t,
                      revision: r.revision,
                      bucket: c,
                      hashResult: d,
                      aaMode: s,
                      triggerDebuggingEnabled: o,
                      assignmentSource: r.assignmentSource,
                      sessionId: r.sessionId,
                      loadedFromCache: r.loadedFromCache,
                      holdoutName: null != u ? r.holdoutName : null,
                      holdoutRevision: u?.revision,
                      holdoutBucket: u?.bucket,
                  };
        })(n, e);
        return (H[r] = a), a;
    }
    getUserExperimentBucket(e) {
        let t = this.getUserExperimentDescriptor(e);
        return null != t ? t.bucket : D.RE.NOT_ELIGIBLE;
    }
    getGuildExperimentBucket(e, t) {
        let n = this.getGuildExperimentDescriptor(e, t);
        return null != n ? n.bucket : D.RE.NOT_ELIGIBLE;
    }
    getAllUserExperimentDescriptors() {
        return V;
    }
    getGuildExperiments() {
        return B;
    }
    getLoadedUserExperiment(e) {
        return V[z(e)];
    }
    getLoadedGuildExperiment(e) {
        return B[z(e)];
    }
    getRecentExposures(e, t) {
        let n = `${e}|${t}|`;
        return Object.entries(G)
            .filter((e) => {
                let [t] = e;
                return t.startsWith(n);
            })
            .map((e) => {
                let [t, { time: i }] = e;
                return [t.replace(n, ""), i];
            });
    }
    getRegisteredExperiments() {
        return k;
    }
    getAllExperimentOverrideDescriptors() {
        return K ? { ...j, ...W } : {};
    }
    getExperimentOverrideDescriptor(e) {
        return K ? (j[e] ?? W[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            t = {};
        for (let n in (Object.keys(k).forEach((e) => {
            t[z(`${e}`)] = e;
        }),
        V)) {
            let i = t[n];
            null != i && (e[i] = V[n].bucket);
        }
        for (let t in H) {
            let n = H[t];
            null != n && (e[t] = n.bucket);
        }
        return e;
    }
    getSerializedState() {
        let e = {};
        for (let t in B) for (let n of ((e[t] = JSON.parse(JSON.stringify(B[t]))), e[t].populations)) n.filters = [];
        return {
            hasLoadedExperiments: w,
            trackedExposureExperiments: G,
            loadedUserExperiments: V,
            loadedGuildExperiments: e,
            userExperimentOverrides: j,
            guildExperimentOverrides: W,
            cookieOverrides: (0, d.DI)(),
            assignmentSource: F.source,
            assignmentSessionId: F.sessionId,
            assignmentFingerprint: F.fingerprint,
        };
    }
    hasExperimentTrackedExposure(e, t, n, i) {
        return Q(Z(e, t, n, i), X(t));
    }
}
let ef = new eI();
