"use strict";
n.d(t, { A: () => em, N: () => eh }), n(938796);
var i = n(735438),
    r = n.n(i),
    s = n(181370),
    a = n.n(s),
    o = n(506774),
    l = n(228366),
    u = n(380610),
    c = n(626584),
    d = n(495544),
    _ = n(536802),
    h = n(174459),
    f = n(824120),
    p = n.n(f),
    E = n(17928),
    m = n(860689);
let g = {};
class A extends E.Ay.Store {
    static displayName = "AuthInviteStore";
    getGuild(e) {
        return g[e];
    }
}
let I = new A(l.h, {
    AUTH_INVITE_UPDATE: function (e) {
        let { invite: t } = e,
            n = t.guild;
        if (null == n) return !1;
        g[n.id] = (0, m.DY)(n);
    },
});
var T = n(498642),
    S = n(71393),
    y = n(927813),
    C = n(935208);
function N(e, t, n) {
    let i, r, s;
    try {
        (i = p()(e)), (r = null != t ? p()(t) : null), (s = null != n ? p()(n) : null);
    } catch {
        return !1;
    }
    return !((null != r && i.lesser(r)) || (null != s && i.greater(s)));
}
function v(e) {
    let t, n;
    for (let [i, r] of e)
        switch (i) {
            case a().v3("min_id"):
                t = r;
                break;
            case a().v3("max_id"):
                n = r;
        }
    return { min: t, max: n };
}
let R = {
    [a().v3("guild_ids")]: (e) => {
        let t = [];
        for (let [n, i] of e) n === a().v3("guild_ids") && (t = i);
        return (e) => t.includes(e);
    },
    [a().v3("guild_id_range")]: (e) => {
        let { min: t, max: n } = v(e);
        return (e) => N(e, t, n);
    },
    [a().v3("guild_age_range_days")]: (e) => {
        let { min: t, max: n } = v(e);
        return (e) => N(Math.floor(C.default.age(e) / y.A.Millis.DAY), t, n);
    },
    [a().v3("guild_member_count_range")]: (e) => {
        let { min: t, max: n } = v(e);
        return (e) => {
            let i = T.A.getMemberCount(e);
            return null != i && N(i, t, n);
        };
    },
    [a().v3("guild_has_feature")]: (e) => {
        let [[, t]] = e;
        return (e) => {
            let n = S.A.getGuild(e) ?? I.getGuild(e);
            return null != n && t.some((e) => n.features.has(e));
        };
    },
    [a().v3("guild_hub_types")]: (e) => {
        let [[, t]] = e;
        return (e) => {
            let n = S.A.getGuild(e) ?? I.getGuild(e);
            return null != n && "number" == typeof n.hubType && t.some((e) => n.hubType === e);
        };
    },
    [a().v3("guild_has_vanity_url")]: (e) => {
        let [[, t]] = e;
        return (e) => {
            let n = S.A.getGuild(e) ?? I.getGuild(e);
            return null != n && t === (null != n.vanityURLCode);
        };
    },
    [a().v3("guild_in_range_by_hash")]: (e) => {
        let t, n;
        for (let [i, r] of e)
            switch (i) {
                case a().v3("hash_key"):
                    t = r;
                    break;
                case a().v3("target"):
                    n = parseInt(r) ?? 0;
            }
        return (e) => {
            let i = a().v3(`${t}:${e}`);
            return (i > 0 ? i + i : i >>> 0) % 1e4 < n;
        };
    },
};
var O = n(688151),
    b = n(652215);
let D = "scientist:triggered",
    L = "exerimentOverrides",
    w = "userExperimentOverrides",
    M = "guildExperimentOverrides",
    P = new c.A("ExperimentStore"),
    x = !1,
    k = {},
    U = new Map(),
    G = {},
    F = { rawUserExperiments: [], rawGuildExperiments: [] },
    V = {},
    B = {},
    j = {},
    H = {},
    Y = {},
    W = null,
    K = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, u.kK)(),
    $ = {};
function z(e) {
    let t = $[e];
    if (void 0 !== t) return t;
    {
        let t = a().v3(e);
        return ($[e] = t), t;
    }
}
function q(e) {
    return ((e.flags ?? 0) & b.nhx.STAFF) === b.nhx.STAFF || null != e.personal_connection_id;
}
function Z(e, t, n, i) {
    let r = `${t.type}|${e}`,
        s = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    switch (t.type) {
        case O.Vh.USER:
            return s && ((r += `|${n}`), i && (r += "|triggerDebugging")), r;
        case O.Vh.GUILD:
            return (r += `|${t.guildId}`), s && ((r += `|${n}`), i && (r += "|triggerDebugging")), r;
        default:
            throw Error(`Unknown experiment type: ${t}`);
    }
}
function X(e) {
    switch (e.type) {
        case O.Vh.USER:
            return z(`${e.bucket}|${e.revision}`);
        case O.Vh.GUILD:
            return z(`${e.bucket}|${e.revision}|${e.guildId}`);
        default:
            throw Error(`Unknown experiment type: ${e}`);
    }
}
function Q(e, t) {
    let n = k[e];
    return !(null == n || Date.now() - n.time > 6048e5) && n.hash === t;
}
function J(e) {
    let {
            experimentId: t,
            descriptor: n,
            location: i,
            location_stack: r,
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
    let c = l === O.vf.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
        _ = Z(t, n, i, c),
        f = X(n);
    if ((u && U.get(_) === f) || Q(_, f)) return !1;
    switch (n.type) {
        case O.Vh.USER: {
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
                assignment_loaded_from_cache: n.loadedFromCache,
                holdout_name: n.holdoutName,
                holdout_revision: n.holdoutRevision,
                holdout_bucket: n.holdoutBucket,
            };
            null != s && (e.context_guild_id = s.guildId);
            let _ = c ? b.HAw.EXPERIMENT_USER_TRIGGERED_FALLBACK : b.HAw.EXPERIMENT_USER_TRIGGERED;
            if (u) {
                let t = {
                    ...e,
                    assignment_fingerprint: n.fingerprint,
                    current_session_id: d.default.getSessionId(),
                    current_fingerprint: d.default.getFingerprint(),
                    current_source: F.source,
                };
                h.default.track(b.HAw.EXPERIMENT_USER_TRIGGERED_IGNORED, t, { flush: !1, fingerprint: a });
            } else h.default.track(_, e, { flush: !0, fingerprint: a });
            break;
        }
        case O.Vh.GUILD: {
            let e = c ? b.HAw.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : b.HAw.EXPERIMENT_GUILD_TRIGGERED,
                s = {
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
                    current_source: F.source,
                };
                h.default.track(b.HAw.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, { flush: !1, fingerprint: a });
            } else h.default.track(e, s, { flush: !0, fingerprint: a });
        }
    }
    u ? U.set(_, f) : ((k[Z(t, n, i, c)] = { time: Date.now(), hash: X(n) }), e_(k));
}
function ee(e) {
    let [t, n] = e;
    return null != R[t] ? R[t](n) : null;
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
            x &&
            "ready_payload" === F.source &&
            h.default.track(b.HAw.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: F.source,
                current_snapshot_session_id: F.sessionId,
                current_snapshot_fingerprint: F.fingerprint,
            }),
        (V = {}),
        (B = {}),
        (j = {});
    let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
        { experiments: n, guildExperiments: i } = e,
        r = "CONNECTION_OPEN" === e.type ? "ready_payload" : "logged_out_api",
        s = "sessionId" in e ? e.sessionId : (d.default.getSessionId() ?? ""),
        a = d.default.getFingerprint();
    t && ei({ rawUserExperiments: n, rawGuildExperiments: i ?? [], source: r, sessionId: s, fingerprint: a }, !1),
        (x = !0);
}
function ei(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: i, sessionId: r, fingerprint: s } = e,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (F = { rawUserExperiments: t, rawGuildExperiments: n ?? [], source: i, sessionId: r, fingerprint: s }),
        t.forEach((e) => {
            let [t, n, o, l, u, c, d, _, h, f, p] = e;
            V[t] = {
                type: "user",
                revision: n,
                population: u,
                bucket: o,
                override: 0 === l,
                hashResult: c ?? -1,
                aaMode: 1 === d,
                triggerDebuggingEnabled: 1 === _,
                assignmentSource: i,
                sessionId: r,
                loadedFromCache: a,
                fingerprint: s,
                holdoutName: h,
                holdoutRevision: f,
                holdoutBucket: p,
            };
        }),
        null != n &&
            n.forEach((e) => {
                let [t, n, o, l, u, c, d, _, h, f] = e;
                B[t] = {
                    hashKey: n,
                    revision: o,
                    populations: l.map(et),
                    overrides: (function (e) {
                        let t = {};
                        if (null == e) return t;
                        for (let { b: n, k: i } of e) for (let e of i) t[e] = n;
                        return t;
                    })(u),
                    overridesFormatted: (c ?? []).map((e) => e.map(et)),
                    holdoutName: d ?? null,
                    holdoutControlBucket: _ ?? null,
                    aaMode: 1 === h,
                    triggerDebuggingEnabled: 1 === f,
                    assignmentSource: i,
                    sessionId: r,
                    loadedFromCache: a,
                    fingerprint: s,
                };
            });
}
function er(e, t, n) {
    let i = null;
    for (let { buckets: s, filters: a } of t) {
        var r = !0;
        if (null != a) {
            for (let t of a)
                if (null != t && !t(e)) {
                    r = !1;
                    break;
                }
        }
        if (!r) continue;
        let t = s.find((e) => {
            let { positions: t } = e;
            return t.some((e) => {
                let { start: t, end: i } = e;
                return n >= t && n < i;
            });
        });
        if ((i = null != t ? t.bucket : O.RE.CONTROL) === O.RE.NOT_ELIGIBLE) break;
        return i;
    }
    return null;
}
function es(e) {
    let t = {};
    for (let n in e) {
        let i = e[n];
        for (let e of ((t[n] = { ...i }), t[n].populations)) e.filters = e.rawFilterData.map(ee);
        for (let e of t[n].overridesFormatted ?? []) for (let t of e) t.filters = t.rawFilterData.map(ee);
    }
    return t;
}
function ea(e) {
    let { serializedExperimentStore: t, user: n } = e;
    !K && q(n) && (K = !0),
        (x = t.hasLoadedExperiments),
        (k = t.trackedExposureExperiments),
        (V = t.loadedUserExperiments),
        (H = t.userExperimentOverrides),
        (Y = t.guildExperimentOverrides),
        (F = {
            ...F,
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint,
        }),
        (B = es(t.loadedGuildExperiments)),
        (j = {}),
        __OVERLAY__ && ((W = t.cookieOverrides ?? null), ec());
}
function eo() {
    x = !0;
}
function el(e) {
    let { isSwitchingAccount: t } = e;
    o.w.remove(D),
        t || (o.w.remove(L), o.w.remove(w), o.w.remove(M), (H = {}), (Y = {})),
        (V = {}),
        (F = { ...F, rawUserExperiments: [] }),
        (k = {}),
        (x = !1);
}
function eu() {
    (x = !1), (k = {}), (B = {}), o.w.remove(D);
}
function ec() {
    let e = !1,
        t = __OVERLAY__ ? W : (0, u.DI)();
    for (let n in t)
        (H[n] = {
            type: O.Vh.USER,
            revision: 1,
            population: 0,
            override: !0,
            fromCookie: !0,
            assignmentSource: "override",
            bucket: t[n],
        }),
            (Y[n] = {
                type: O.Vh.GUILD,
                revision: 1,
                override: !0,
                fromCookie: !0,
                assignmentSource: "override",
                bucket: t[n],
            }),
            (e = !0);
    return e;
}
function ed() {
    try {
        o.w.set(w, H);
    } catch (e) {
        P.error("Error saving user experiment overrides, unsaved data will be lost", e),
            h.default.track(b.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
    try {
        o.w.set(M, Y);
    } catch (e) {
        P.error("Error saving guild experiment overrides, unsaved data will be lost", e),
            h.default.track(b.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
}
function e_(e) {
    try {
        o.w.set(D, { v: 1, e: e });
    } catch (e) {
        P.error("Error saving tracked exposure experiments, unsaved data will be lost", e),
            h.default.track(b.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveTrackedExposureExperiments",
            });
    }
}
function eh(e) {
    let { experimentId: t, experimentType: n, title: i, description: r, buckets: s, commonTriggerPoint: a } = e;
    G[t] = { type: n, title: i, description: r, buckets: s, commonTriggerPoint: a };
}
function ef(e) {
    let { experimentId: t, experimentBucket: n, experimentType: i, skipCleanup: r } = e,
        s = i ?? G[t]?.type;
    if (null == s) return !1;
    if (
        (null == n
            ? ((H = { ...H }), delete H[t], (Y = { ...Y }), delete Y[t])
            : "user" === s
              ? (H = { ...H, [t]: { type: s, revision: 1, population: 0, bucket: n, override: !0 } })
              : (Y = { ...Y, [t]: { type: s, revision: 1, bucket: n, override: !0 } }),
        !r)
    )
        for (let e of [H, Y]) for (let t in e) null == G[t] && delete H[t];
    ed();
}
function ep(e) {
    let { guild: t } = e;
    for (let e in j) {
        let [n] = e.split(":");
        t.id === n && delete j[e];
    }
}
Date.now();
class eE extends _.A {
    static displayName = "ExperimentStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super(
            {
                LOGOUT: el,
                LOGIN_SUCCESS: eu,
                CONNECTION_OPEN: en,
                EXPERIMENTS_FETCH_SUCCESS: en,
                OVERLAY_INITIALIZE: ea,
                EXPERIMENTS_FETCH_FAILURE: eo,
                EXPERIMENT_OVERRIDE_BUCKET: ef,
                GUILD_CREATE: ep,
                GUILD_UPDATE: ep,
            },
            l.A.Early,
        );
    }
    trackExposure = J;
    initialize() {
        k = (function () {
            let e = o.w.get(D);
            if (null == e || 1 !== e.v) return {};
            let t = e.e,
                n = Date.now(),
                i = !1;
            for (let e in t) n - t[e].time > 6048e5 && (delete t[e], (i = !0));
            return i && e_(t), t;
        })();
        let e = [o.w.get(L) ?? {}, o.w.get(w) ?? {}, o.w.get(M) ?? {}];
        (H = {}), (Y = {});
        let t = !r().isEmpty(e[0]);
        for (let n of e)
            for (let e in n) {
                let i = n[e];
                null == i ||
                (i.type !== O.Vh.USER && i.type !== O.Vh.GUILD) ||
                null == i.bucket ||
                !0 !== i.override ||
                i.fromCookie
                    ? (delete n[e], (t = !0))
                    : i.type === O.Vh.USER
                      ? (H[e] = i)
                      : (Y[e] = i);
            }
        (t = ec() || t) && ed(), this.waitFor(d.default), this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(eE.LATEST_SNAPSHOT_VERSION);
        null != e &&
            ("loadedUserExperiments" in e
                ? ((V = e.loadedUserExperiments),
                  (B = es(e.loadedGuildExperiments)),
                  Object.values(V).forEach((e) => (e.loadedFromCache = !0)),
                  Object.values(B).forEach((e) => (e.loadedFromCache = !0)))
                : ei(e, !0));
    }
    takeSnapshot() {
        return { version: eE.LATEST_SNAPSHOT_VERSION, data: { ...F } };
    }
    get hasLoadedExperiments() {
        return x;
    }
    hasRegisteredExperiment(e) {
        return null != G[e];
    }
    getUserExperimentDescriptor(e) {
        if (K) {
            let t = H[e];
            if (null != t) return t;
        }
        let t = z(e);
        return V[`${t}`];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = t ?? b.dJq,
            i = Y[e];
        if (K && null != i) return i;
        let r = `${n}:${e}`;
        if (r in j) return j[r];
        let s = (function e(t, n) {
            let i = z(n),
                r = B[`${i}`];
            if (null == r) return null;
            let { revision: s, aaMode: a } = r,
                o = r.overrides[t],
                l = r.triggerDebuggingEnabled;
            if (null != o)
                return o === O.RE.NOT_ELIGIBLE
                    ? null
                    : {
                          type: O.Vh.GUILD,
                          guildId: t,
                          revision: s,
                          bucket: o,
                          override: !0,
                          hashResult: -1,
                          triggerDebuggingEnabled: l,
                      };
            let u = z(`${r.hashKey ?? n}:${t}`) % 1e4,
                c = null;
            for (let e of r.overridesFormatted ?? [])
                if (null !== (c = er(t, e, u)))
                    return {
                        type: O.Vh.GUILD,
                        guildId: t,
                        revision: r.revision,
                        bucket: c,
                        override: !0,
                        hashResult: u,
                        triggerDebuggingEnabled: l,
                        assignmentSource: r.assignmentSource,
                        sessionId: r.sessionId,
                        loadedFromCache: r.loadedFromCache,
                    };
            if (null == (c = er(t, r.populations, u))) return null;
            let d = null;
            return null != r.holdoutName &&
                null != r.holdoutControlBucket &&
                r.holdoutName !== n &&
                ((d = e(t, r.holdoutName)), d?.bucket != null) &&
                (!0 !== d.override && J({ experimentId: r.holdoutName, descriptor: d }),
                d?.bucket === r.holdoutControlBucket)
                ? null
                : {
                      type: O.Vh.GUILD,
                      guildId: t,
                      revision: r.revision,
                      bucket: c,
                      hashResult: u,
                      aaMode: a,
                      triggerDebuggingEnabled: l,
                      assignmentSource: r.assignmentSource,
                      sessionId: r.sessionId,
                      loadedFromCache: r.loadedFromCache,
                      holdoutName: null != d ? r.holdoutName : null,
                      holdoutRevision: d?.revision,
                      holdoutBucket: d?.bucket,
                  };
        })(n, e);
        return (j[r] = s), s;
    }
    getUserExperimentBucket(e) {
        let t = this.getUserExperimentDescriptor(e);
        return null != t ? t.bucket : O.RE.NOT_ELIGIBLE;
    }
    getGuildExperimentBucket(e, t) {
        let n = this.getGuildExperimentDescriptor(e, t);
        return null != n ? n.bucket : O.RE.NOT_ELIGIBLE;
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
        return Object.entries(k)
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
        return G;
    }
    getAllExperimentOverrideDescriptors() {
        return K ? { ...H, ...Y } : {};
    }
    getExperimentOverrideDescriptor(e) {
        return K ? (H[e] ?? Y[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            t = {};
        for (let n in (Object.keys(G).forEach((e) => {
            t[z(`${e}`)] = e;
        }),
        V)) {
            let i = t[n];
            null != i && (e[i] = V[n].bucket);
        }
        for (let t in j) {
            let n = j[t];
            null != n && (e[t] = n.bucket);
        }
        return e;
    }
    getSerializedState() {
        let e = {};
        for (let t in B) for (let n of ((e[t] = JSON.parse(JSON.stringify(B[t]))), e[t].populations)) n.filters = [];
        return {
            hasLoadedExperiments: x,
            trackedExposureExperiments: k,
            loadedUserExperiments: V,
            loadedGuildExperiments: e,
            userExperimentOverrides: H,
            guildExperimentOverrides: Y,
            cookieOverrides: (0, u.DI)(),
            assignmentSource: F.source,
            assignmentSessionId: F.sessionId,
            assignmentFingerprint: F.fingerprint,
        };
    }
    hasExperimentTrackedExposure(e, t, n, i) {
        return Q(Z(e, t, n, i), X(t));
    }
}
let em = new eE();
