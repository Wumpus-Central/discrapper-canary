"use strict";
n.d(t, { A: () => eg, N: () => eE }), n(938796);
var i = n(735438),
    r = n.n(i),
    s = n(181370),
    a = n.n(s),
    o = n(506774),
    l = n(228366),
    d = n(380610),
    _ = n(626584),
    u = n(495544),
    c = n(536802),
    E = n(954571),
    h = n(824120),
    m = n.n(h),
    f = n(17928),
    g = n(860689);
let p = {};
class A extends f.Ay.Store {
    static displayName = "AuthInviteStore";
    getGuild(e) {
        return p[e];
    }
}
let I = new A(l.h, {
    AUTH_INVITE_UPDATE: function (e) {
        let { invite: t } = e,
            n = t.guild;
        if (null == n) return !1;
        p[n.id] = (0, g.DY)(n);
    },
});
var T = n(498642),
    S = n(71393),
    N = n(927813),
    C = n(935208);
function R(e, t, n) {
    let i, r, s;
    try {
        (i = m()(e)), (r = null != t ? m()(t) : null), (s = null != n ? m()(n) : null);
    } catch {
        return !1;
    }
    return !((null != r && i.lesser(r)) || (null != s && i.greater(s)));
}
function O(e) {
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
let y = {
    [a().v3("guild_ids")]: (e) => {
        let t = [];
        for (let [n, i] of e) n === a().v3("guild_ids") && (t = i);
        return (e) => t.includes(e);
    },
    [a().v3("guild_id_range")]: (e) => {
        let { min: t, max: n } = O(e);
        return (e) => R(e, t, n);
    },
    [a().v3("guild_age_range_days")]: (e) => {
        let { min: t, max: n } = O(e);
        return (e) => R(Math.floor(C.default.age(e) / N.A.Millis.DAY), t, n);
    },
    [a().v3("guild_member_count_range")]: (e) => {
        let { min: t, max: n } = O(e);
        return (e) => {
            let i = T.A.getMemberCount(e);
            return null != i && R(i, t, n);
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
var v = n(688151),
    D = n(652215);
let L = "scientist:triggered",
    b = "exerimentOverrides",
    w = "userExperimentOverrides",
    P = "guildExperimentOverrides",
    k = new _.A("ExperimentStore"),
    M = !1,
    U = {},
    x = new Map(),
    G = {},
    V = { rawUserExperiments: [], rawGuildExperiments: [] },
    F = {},
    B = {},
    H = {},
    j = {},
    W = {},
    Y = null,
    K = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, d.kK)(),
    z = {};
function $(e) {
    let t = z[e];
    if (void 0 !== t) return t;
    {
        let t = a().v3(e);
        return (z[e] = t), t;
    }
}
function q(e) {
    return ((e.flags ?? 0) & D.nhx.STAFF) === D.nhx.STAFF || null != e.personal_connection_id;
}
function X(e, t, n, i) {
    let r = `${t.type}|${e}`,
        s = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    if (t.type === v.Vh.USER) return s && ((r += `|${n}`), i && (r += "|triggerDebugging")), r;
    if (t.type === v.Vh.GUILD) return (r += `|${t.guildId}`), s && ((r += `|${n}`), i && (r += "|triggerDebugging")), r;
    throw Error();
}
function Z(e) {
    if (e.type === v.Vh.USER) return $(`${e.bucket}|${e.revision}`);
    if (e.type === v.Vh.GUILD) return $(`${e.bucket}|${e.revision}|${e.guildId}`);
    throw Error();
}
function Q(e, t) {
    let n = U[e];
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
    let _ = l === v.vf.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
        c = X(t, n, i, _),
        h = Z(n);
    if ((d && x.get(c) === h) || Q(c, h)) return !1;
    if (n.type === v.Vh.USER) {
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
        let c = _ ? D.HAw.EXPERIMENT_USER_TRIGGERED_FALLBACK : D.HAw.EXPERIMENT_USER_TRIGGERED;
        if (d) {
            let t = {
                ...e,
                assignment_fingerprint: n.fingerprint,
                current_session_id: u.default.getSessionId(),
                current_fingerprint: u.default.getFingerprint(),
                current_source: V.source,
            };
            E.default.track(D.HAw.EXPERIMENT_USER_TRIGGERED_IGNORED, t, { flush: !1, fingerprint: a });
        } else E.default.track(c, e, { flush: !0, fingerprint: a });
    } else if (n.type === v.Vh.GUILD) {
        let e = _ ? D.HAw.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : D.HAw.EXPERIMENT_GUILD_TRIGGERED,
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
        if (d) {
            let e = {
                ...s,
                assignment_fingerprint: n.fingerprint,
                current_session_id: u.default.getSessionId(),
                current_fingerprint: u.default.getFingerprint(),
                current_source: V.source,
            };
            E.default.track(D.HAw.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, { flush: !1, fingerprint: a });
        } else E.default.track(e, s, { flush: !0, fingerprint: a });
    }
    d ? x.set(c, h) : ((U[X(t, n, i, _)] = { time: Date.now(), hash: Z(n) }), ec(U));
}
function ee(e) {
    let [t, n] = e;
    return null != y[t] ? y[t](n) : null;
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
            M &&
            "ready_payload" === V.source &&
            E.default.track(D.HAw.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: V.source,
                current_snapshot_session_id: V.sessionId,
                current_snapshot_fingerprint: V.fingerprint,
            }),
        (F = {}),
        (B = {}),
        (H = {});
    let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === u.default.getFingerprint(),
        { experiments: n, guildExperiments: i } = e,
        r = "CONNECTION_OPEN" === e.type ? "ready_payload" : "logged_out_api",
        s = "sessionId" in e ? e.sessionId : (u.default.getSessionId() ?? ""),
        a = u.default.getFingerprint();
    t && ei({ rawUserExperiments: n, rawGuildExperiments: i ?? [], source: r, sessionId: s, fingerprint: a }, !1),
        (M = !0);
}
function ei(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: i, sessionId: r, fingerprint: s } = e,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (V = { rawUserExperiments: t, rawGuildExperiments: n ?? [], source: i, sessionId: r, fingerprint: s }),
        t.forEach((e) => {
            let [t, n, o, l, d, _, u, c, E, h, m] = e;
            F[t] = {
                type: "user",
                revision: n,
                population: d,
                bucket: o,
                override: 0 === l,
                hashResult: _ ?? -1,
                aaMode: 1 === u,
                triggerDebuggingEnabled: 1 === c,
                assignmentSource: i,
                sessionId: r,
                loadedFromCache: a,
                fingerprint: s,
                holdoutName: E,
                holdoutRevision: h,
                holdoutBucket: m,
            };
        }),
        null != n &&
            n.forEach((e) => {
                let [t, n, o, l, d, _, u, c, E, h] = e;
                B[t] = {
                    hashKey: n,
                    revision: o,
                    populations: l.map(et),
                    overrides: (function (e) {
                        let t = {};
                        if (null == e) return t;
                        for (let { b: n, k: i } of e) for (let e of i) t[e] = n;
                        return t;
                    })(d),
                    overridesFormatted: (_ ?? []).map((e) => e.map(et)),
                    holdoutName: u ?? null,
                    holdoutControlBucket: c ?? null,
                    aaMode: 1 === E,
                    triggerDebuggingEnabled: 1 === h,
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
        if ((i = null != t ? t.bucket : v.RE.CONTROL) === v.RE.NOT_ELIGIBLE) break;
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
        (M = t.hasLoadedExperiments),
        (U = t.trackedExposureExperiments),
        (F = t.loadedUserExperiments),
        (j = t.userExperimentOverrides),
        (W = t.guildExperimentOverrides),
        (V = {
            ...V,
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint,
        }),
        (B = es(t.loadedGuildExperiments)),
        (H = {}),
        __OVERLAY__ && ((Y = t.cookieOverrides ?? null), e_());
}
function eo() {
    M = !0;
}
function el(e) {
    let { isSwitchingAccount: t } = e;
    o.w.remove(L),
        t || (o.w.remove(b), o.w.remove(w), o.w.remove(P), (j = {}), (W = {})),
        (F = {}),
        (V = { ...V, rawUserExperiments: [] }),
        (U = {}),
        (M = !1);
}
function ed() {
    (M = !1), (U = {}), (B = {}), o.w.remove(L);
}
function e_() {
    let e = !1,
        t = __OVERLAY__ ? Y : (0, d.DI)();
    for (let n in t)
        (j[n] = {
            type: v.Vh.USER,
            revision: 1,
            population: 0,
            override: !0,
            fromCookie: !0,
            assignmentSource: "override",
            bucket: t[n],
        }),
            (W[n] = {
                type: v.Vh.GUILD,
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
        o.w.set(w, j);
    } catch (e) {
        k.error("Error saving user experiment overrides, unsaved data will be lost", e),
            E.default.track(D.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
    try {
        o.w.set(P, W);
    } catch (e) {
        k.error("Error saving guild experiment overrides, unsaved data will be lost", e),
            E.default.track(D.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveExperimentOverrides",
            });
    }
}
function ec(e) {
    try {
        o.w.set(L, { v: 1, e: e });
    } catch (e) {
        k.error("Error saving tracked exposure experiments, unsaved data will be lost", e),
            E.default.track(D.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: "discord_app",
                call: "ExperimentStore.saveTrackedExposureExperiments",
            });
    }
}
function eE(e) {
    let { experimentId: t, experimentType: n, title: i, description: r, buckets: s, commonTriggerPoint: a } = e;
    G[t] = { type: n, title: i, description: r, buckets: s, commonTriggerPoint: a };
}
function eh(e) {
    let { experimentId: t, experimentBucket: n, experimentType: i, skipCleanup: r } = e,
        s = i ?? G[t]?.type;
    if (null == s) return !1;
    if (
        (null == n
            ? ((j = { ...j }), delete j[t], (W = { ...W }), delete W[t])
            : "user" === s
              ? (j = { ...j, [t]: { type: s, revision: 1, population: 0, bucket: n, override: !0 } })
              : (W = { ...W, [t]: { type: s, revision: 1, bucket: n, override: !0 } }),
        !r)
    )
        for (let e of [j, W]) for (let t in e) null == G[t] && delete j[t];
    eu();
}
function em(e) {
    let { guild: t } = e;
    for (let e in H) {
        let [n] = e.split(":");
        t.id === n && delete H[e];
    }
}
Date.now();
class ef extends c.A {
    static displayName = "ExperimentStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super(
            {
                LOGOUT: el,
                LOGIN_SUCCESS: ed,
                CONNECTION_OPEN: en,
                EXPERIMENTS_FETCH_SUCCESS: en,
                OVERLAY_INITIALIZE: ea,
                EXPERIMENTS_FETCH_FAILURE: eo,
                EXPERIMENT_OVERRIDE_BUCKET: eh,
                GUILD_CREATE: em,
                GUILD_UPDATE: em,
            },
            l.A.Early,
        );
    }
    trackExposure = J;
    initialize() {
        U = (function () {
            let e = o.w.get(L);
            if (null == e || 1 !== e.v) return {};
            let t = e.e,
                n = Date.now(),
                i = !1;
            for (let e in t) n - t[e].time > 6048e5 && (delete t[e], (i = !0));
            return i && ec(t), t;
        })();
        let e = [o.w.get(b) ?? {}, o.w.get(w) ?? {}, o.w.get(P) ?? {}];
        (j = {}), (W = {});
        let t = !r().isEmpty(e[0]);
        for (let n of e)
            for (let e in n) {
                let i = n[e];
                null == i ||
                (i.type !== v.Vh.USER && i.type !== v.Vh.GUILD) ||
                null == i.bucket ||
                !0 !== i.override ||
                i.fromCookie
                    ? (delete n[e], (t = !0))
                    : i.type === v.Vh.USER
                      ? (j[e] = i)
                      : (W[e] = i);
            }
        (t = e_() || t) && eu(), this.waitFor(u.default), this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(ef.LATEST_SNAPSHOT_VERSION);
        null != e &&
            ("loadedUserExperiments" in e
                ? ((F = e.loadedUserExperiments),
                  (B = es(e.loadedGuildExperiments)),
                  Object.values(F).forEach((e) => (e.loadedFromCache = !0)),
                  Object.values(B).forEach((e) => (e.loadedFromCache = !0)))
                : ei(e, !0));
    }
    takeSnapshot() {
        return { version: ef.LATEST_SNAPSHOT_VERSION, data: { ...V } };
    }
    get hasLoadedExperiments() {
        return M;
    }
    hasRegisteredExperiment(e) {
        return null != G[e];
    }
    getUserExperimentDescriptor(e) {
        if (K) {
            let t = j[e];
            if (null != t) return t;
        }
        let t = $(e);
        return F[`${t}`];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = t ?? D.dJq,
            i = W[e];
        if (K && null != i) return i;
        let r = `${n}:${e}`;
        if (r in H) return H[r];
        let s = (function e(t, n) {
            let i = $(n),
                r = B[`${i}`];
            if (null == r) return null;
            let { revision: s, aaMode: a } = r,
                o = r.overrides[t],
                l = r.triggerDebuggingEnabled;
            if (null != o)
                return o === v.RE.NOT_ELIGIBLE
                    ? null
                    : {
                          type: v.Vh.GUILD,
                          guildId: t,
                          revision: s,
                          bucket: o,
                          override: !0,
                          hashResult: -1,
                          triggerDebuggingEnabled: l,
                      };
            let d = $(`${r.hashKey ?? n}:${t}`) % 1e4,
                _ = null;
            for (let e of r.overridesFormatted ?? [])
                if (null !== (_ = er(t, e, d)))
                    return {
                        type: v.Vh.GUILD,
                        guildId: t,
                        revision: r.revision,
                        bucket: _,
                        override: !0,
                        hashResult: d,
                        triggerDebuggingEnabled: l,
                        assignmentSource: r.assignmentSource,
                        sessionId: r.sessionId,
                        loadedFromCache: r.loadedFromCache,
                    };
            if (null == (_ = er(t, r.populations, d))) return null;
            let u = null;
            return null != r.holdoutName &&
                null != r.holdoutControlBucket &&
                r.holdoutName !== n &&
                ((u = e(t, r.holdoutName)), u?.bucket != null) &&
                (!0 !== u.override && J({ experimentId: r.holdoutName, descriptor: u }),
                u?.bucket === r.holdoutControlBucket)
                ? null
                : {
                      type: v.Vh.GUILD,
                      guildId: t,
                      revision: r.revision,
                      bucket: _,
                      hashResult: d,
                      aaMode: a,
                      triggerDebuggingEnabled: l,
                      assignmentSource: r.assignmentSource,
                      sessionId: r.sessionId,
                      loadedFromCache: r.loadedFromCache,
                      holdoutName: null != u ? r.holdoutName : null,
                      holdoutRevision: u?.revision,
                      holdoutBucket: u?.bucket,
                  };
        })(n, e);
        return (H[r] = s), s;
    }
    getUserExperimentBucket(e) {
        let t = this.getUserExperimentDescriptor(e);
        return null != t ? t.bucket : v.RE.NOT_ELIGIBLE;
    }
    getGuildExperimentBucket(e, t) {
        let n = this.getGuildExperimentDescriptor(e, t);
        return null != n ? n.bucket : v.RE.NOT_ELIGIBLE;
    }
    getAllUserExperimentDescriptors() {
        return F;
    }
    getGuildExperiments() {
        return B;
    }
    getLoadedUserExperiment(e) {
        return F[$(e)];
    }
    getLoadedGuildExperiment(e) {
        return B[$(e)];
    }
    getRecentExposures(e, t) {
        let n = `${e}|${t}|`;
        return Object.entries(U)
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
        return K ? { ...j, ...W } : {};
    }
    getExperimentOverrideDescriptor(e) {
        return K ? (j[e] ?? W[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            t = {};
        for (let n in (Object.keys(G).forEach((e) => {
            t[$(`${e}`)] = e;
        }),
        F)) {
            let i = t[n];
            null != i && (e[i] = F[n].bucket);
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
            hasLoadedExperiments: M,
            trackedExposureExperiments: U,
            loadedUserExperiments: F,
            loadedGuildExperiments: e,
            userExperimentOverrides: j,
            guildExperimentOverrides: W,
            cookieOverrides: (0, d.DI)(),
            assignmentSource: V.source,
            assignmentSessionId: V.sessionId,
            assignmentFingerprint: V.fingerprint,
        };
    }
    hasExperimentTrackedExposure(e, t, n, i) {
        return Q(X(e, t, n, i), Z(t));
    }
}
let eg = new ef();
