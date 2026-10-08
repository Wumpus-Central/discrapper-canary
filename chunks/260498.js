(n.d(t, { Ay: () => J, H_: () => u, PV: () => o, jf: () => c }), n(321073), n(134528), n(947204));
var i = n(17928),
    r = n(73153),
    a = n(287809),
    s = n(164892),
    l = n(746524);
function o(e) {
    return e.owner_user_id === a.default.getCurrentUser()?.id;
}
function d(e) {
    return (0, s.Hn)(e) && null != e.guild_id;
}
function c(e) {
    return o(e) || d(e);
}
function u(e) {
    return o(e) || (0, s.tr)(e) || d(e);
}
let _ = new Map(),
    E = new Map(),
    A = new Map(),
    h = new Set(),
    f = new Set(),
    I = new Map(),
    p = new Set(),
    T = !1,
    m = null,
    g = !1,
    S = null,
    N = new Set(),
    C = new Map(),
    O = "unattempted",
    R = [],
    L = new Map(),
    y = 0,
    D = new Map(),
    v = [],
    b = new Map();
function M(e, t, n) {
    let i = e.get(t);
    return (null == i && ((i = new l.g(n)), e.set(t, i)), i);
}
function P(e) {
    return e.log.seq;
}
function U(e) {
    return e.seq;
}
function w(e, t) {
    let n = t.call_seq ?? t.entry_seq;
    return e?.seq == null ? n : null == n ? e.seq : Math.min(e.seq, n);
}
function G(e) {
    return 400 + (K.get(e)?.snapshot.size ?? 0);
}
let x = new Map();
function k(e, t, n) {
    return null != t && x.get(e)?.get(t) === n;
}
function F(e, t, n) {
    if (null == t) return;
    let i = x.get(e);
    for (null == i && ((i = new Map()), x.set(e, i)), i.set(t, n); i.size > 800;) {
        let e = i.keys().next();
        if (!0 === e.done) break;
        i.delete(e.value);
    }
}
let B = { status: "idle", truncated: !1, count: 0 },
    V = new Map();
function H(e, t, n) {
    let i = V.get(e);
    (null == i && ((i = new Map()), V.set(e, i)), i.set(t, n));
}
class j extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default);
    }
    getOwnedProjects() {
        return Array.from(_.values()).filter(o);
    }
    hasFetchedOwnedProjects() {
        return T;
    }
    getMaxProjects() {
        return m;
    }
    hasFetchedProjectLimit() {
        return g;
    }
    getProject(e) {
        return _.get(e) ?? null;
    }
    findProjectByApplicationId(e) {
        for (let t of _.values()) if (t.application_id === e || t.preview_application_id === e) return t;
        return null;
    }
    getSharedProjects(e) {
        let t = [];
        for (let n of _.values()) o(n) || n.guild_id !== e || t.push(n);
        return t;
    }
    getIntegrationStatus(e) {
        return E.get(e) ?? null;
    }
    getPublishStatus(e) {
        return A.get(e) ?? null;
    }
    isProjectPublishing(e) {
        return h.has(e);
    }
    isAppChannelPending(e) {
        return f.has(e);
    }
    isProjectDeleting(e) {
        return p.has(e);
    }
    getSelectedProjectId(e) {
        return I.get(e) ?? null;
    }
    getLogs(e) {
        return L.get(e)?.snapshot() ?? R;
    }
    getUnreadLogErrorCount(e) {
        let t = L.get(e);
        if (null == t) return 0;
        let n = D.get(e) ?? 0,
            i = 0;
        for (let e of t.values()) e.key > n && "error" === e.log.level && !0 !== e.log.historical && (i += 1);
        return i;
    }
    getTrace(e) {
        return b.get(e)?.snapshot() ?? v;
    }
    getHistoryState(e, t) {
        return V.get(e)?.get(t) ?? B;
    }
    getProjectsFetchState() {
        return S;
    }
    hasFetchedGuildProjects(e) {
        return N.has(e);
    }
    getGuildProjectsFetchState(e) {
        return C.get(e) ?? "unattempted";
    }
    getOwnedProjectsFetchState() {
        return O;
    }
    isConjureProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
function W(e) {
    let { project: t } = e;
    _.set(t.id, t);
}
function Y(e) {
    let { projectId: t, log: n } = e,
        i = M(L, t, P);
    if (null != n.seq && -1 !== i.indexOfSeq(n.seq)) return !1;
    (i.insert({ key: ++y, log: n }), i.trim(500));
}
let K = new Map();
function $(e, t) {
    return `${e}:${t}`;
}
function z(e, t, n) {
    K.get(e)?.touched.add($(t, n));
}
function X(e) {
    let { projectId: t, scope: n, status: i, count: r, truncated: a } = e,
        s = "trace" === n ? K.get(t) : void 0;
    "trace" === n && K.delete(t);
    let l = "trace" === n ? b.get(t) : void 0;
    if ("failed" === i) {
        l?.trim(400);
        let e = V.get(t)?.get(n);
        H(t, n, { status: "failed", truncated: e?.truncated ?? !1, count: e?.count ?? 0 });
        return;
    }
    (null != s && l?.retain((e) => !s.snapshot.has($(e.kind, e.id)) || s.touched.has($(e.kind, e.id))),
        l?.trim(400),
        H(t, n, { status: "loaded", truncated: a, count: r }));
}
function Z(e, t, n) {
    return e.findIndex((e) => e.kind === t && e.id === n);
}
function q(e) {
    let { projectId: t, modelCall: n } = e;
    if ((z(t, "model", n.id), k(t, n.entry_id, n.status))) return !1;
    let i = M(b, t, U),
        r = Z(i, "model", n.id),
        a = -1 === r ? null : i.at(r),
        s = w(a, n),
        l = {
            kind: "model",
            id: n.id,
            ...(null != s ? { seq: s } : {}),
            ...((n.turn_id ?? a?.turnId) != null ? { turnId: n.turn_id ?? a?.turnId } : {}),
            agent: n.agent,
            model: n.model,
            status: n.status,
            ...(function (e, t) {
                let n = {};
                for (let [i, r] of Object.entries(t)) {
                    let t = r ?? e?.[i];
                    "number" == typeof t && (n[i] = t);
                }
                return n;
            })(a, {
                promptTokens: n.prompt_tokens,
                systemTokens: n.system_tokens,
                toolsTokens: n.tools_tokens,
                messagesTokens: n.messages_tokens,
                tools: n.tools,
                messages: n.messages,
                durationMs: n.duration_ms,
                inputTokens: n.input_tokens,
                outputTokens: n.output_tokens,
                cacheReadTokens: n.cache_read_tokens,
                cacheWriteTokens: n.cache_write_tokens,
                costUsd: n.cost_usd,
            }),
            ...((n.estimated ?? a?.estimated) === !0 ? { estimated: !0 } : {}),
            ...(null != n.stop_reason ? { stopReason: n.stop_reason } : {}),
            ...(null != n.error ? { error: n.error } : {}),
            startedAt: a?.startedAt ?? n.ts,
        };
    (F(t, n.entry_id, n.status), null != a ? i.replace(r, l) : i.insert(l), i.trim(G(t)));
}
function Q(e) {
    let { projectId: t, toolCall: n } = e;
    if ((z(t, "tool", n.id), k(t, n.entry_id, n.status))) return !1;
    let i = M(b, t, U),
        r = Z(i, "tool", n.id),
        a = -1 === r ? null : i.at(r),
        s = n.summary ?? a?.summary,
        l = n.fields ?? a?.fields,
        o = n.schema ?? a?.schema,
        d = n.detail_id ?? a?.detailId,
        c = n.turn_id ?? a?.turnId,
        u = n.parent_id ?? a?.parentId,
        _ = w(a, n),
        E = {
            kind: "tool",
            id: n.id,
            ...(null != _ ? { seq: _ } : {}),
            ...(null != c ? { turnId: c } : {}),
            ...(null != u ? { parentId: u } : {}),
            agent: n.agent,
            tool: n.tool,
            status: n.status,
            ...(null != s ? { summary: s } : {}),
            ...(null != l ? { fields: l } : {}),
            ...(null != o ? { schema: o } : {}),
            ...(null != d ? { detailId: d } : {}),
            ...(null != n.duration_ms ? { durationMs: n.duration_ms } : {}),
            ...(null != n.result_chars ? { resultChars: n.result_chars } : {}),
            ...(!0 === n.result_truncated ? { resultTruncated: !0 } : {}),
            ...(null != n.result_added ? { resultAdded: n.result_added } : {}),
            ...(null != n.result_removed ? { resultRemoved: n.result_removed } : {}),
            ...(null != n.error ? { error: n.error } : {}),
            startedAt: a?.startedAt ?? n.ts,
        };
    (F(t, n.entry_id, n.status), null != a ? i.replace(r, E) : i.insert(E), i.trim(G(t)));
}
let J = new j(r.h, {
    LOGOUT: function () {
        if (
            0 === _.size &&
            0 === E.size &&
            0 === A.size &&
            0 === h.size &&
            0 === f.size &&
            0 === I.size &&
            0 === p.size &&
            0 === L.size &&
            0 === N.size &&
            0 === b.size &&
            0 === V.size &&
            0 === x.size &&
            null == S &&
            null == m &&
            !g
        )
            return !1;
        (_.clear(),
            E.clear(),
            A.clear(),
            h.clear(),
            f.clear(),
            I.clear(),
            p.clear(),
            L.clear(),
            N.clear(),
            C.clear(),
            D.clear(),
            b.clear(),
            V.clear(),
            x.clear(),
            (S = null),
            (T = !1),
            (O = "unattempted"),
            (m = null),
            (g = !1),
            K.clear());
    },
    CONJURE_PROJECTS_FETCH_START: function (e) {
        let { guildId: t } = e;
        (null != t ? C.set(t, "loading") : (O = "loading"), (S = { type: "loading" }));
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            i = new Set(t.map((e) => e.id));
        for (let [e, t] of _) !i.has(e) && (o(t) || (null != n && t.guild_id === n)) && _.delete(e);
        for (let e of t) _.set(e.id, e);
        for (let e of (null != n && (N.add(n), C.set(n, "success")), E.keys())) _.has(e) || E.delete(e);
        for (let e of A.keys()) _.has(e) || A.delete(e);
        for (let [e, t] of I) _.has(t) || I.delete(e);
        ((T = !0), (O = "success"), (S = { type: "success", fetchedAt: Date.now() }));
    },
    CONJURE_PROJECTS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        (null != t ? C.set(t, "error") : (O = "error"), (S = { type: "error", fetchedAt: Date.now() }));
    },
    CONJURE_PROJECT_LIMIT_FETCH_SETTLE: function (e) {
        let { maxProjects: t } = e;
        ((m = t), (g = !0));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: W,
    CONJURE_PROJECT_UPDATE_SUCCESS: W,
    CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        E.set(t, n);
    },
    CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
        let { projectId: t, published: n, hasUnpublishedChanges: i, surface: r } = e,
            a = n ? (i ? "changes" : "up_to_date") : "unpublished",
            s = A.get(t);
        if (s?.state === a && s.surface === r) return !1;
        A.set(t, { state: a, surface: r });
    },
    CONJURE_PROJECT_PUBLISH_START: function (e) {
        let { projectId: t } = e;
        h.add(t);
    },
    CONJURE_PROJECT_PUBLISH_SETTLE: function (e) {
        let { projectId: t } = e;
        return h.delete(t);
    },
    CONJURE_PROJECT_APP_CHANNEL_PENDING: function (e) {
        let { projectId: t, pending: n } = e;
        if (f.has(t) === n) return !1;
        n ? f.add(t) : f.delete(t);
    },
    CONJURE_PROJECT_DELETE_START: function (e) {
        let { projectId: t } = e;
        p.add(t);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (p.delete(t),
        _.delete(t),
        E.delete(t),
        A.delete(t),
        h.delete(t),
        f.delete(t),
        L.delete(t),
        D.delete(t),
        b.delete(t),
        V.delete(t),
        x.delete(t),
        I))
            n === t && I.delete(e);
    },
    CONJURE_PROJECT_DELETE_FAIL: function (e) {
        let { projectId: t } = e;
        return p.delete(t);
    },
    CONJURE_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((I.get(t) ?? null) === n) return !1;
        null == n ? I.delete(t) : I.set(t, n);
    },
    CONJURE_TRACE_REPLAY_STARTING: function (e) {
        let { projectId: t } = e;
        K.set(t, { snapshot: new Set((b.get(t)?.values() ?? v).map((e) => $(e.kind, e.id))), touched: new Set() });
    },
    CONJURE_HISTORY_LOAD_SETTLE: X,
    CONJURE_DEBUG_BACKLOG: function (e) {
        let { projectId: t, backlog: n } = e;
        for (let e of n.logs) Y({ type: "CONJURE_LOG_APPEND", projectId: t, log: e });
        for (let e of n.trace)
            "debug_model_call" === e.type
                ? q({ type: "CONJURE_MODEL_CALL_APPEND", projectId: t, modelCall: e })
                : Q({ type: "CONJURE_TOOL_CALL_APPEND", projectId: t, toolCall: e });
        for (let e of n.states)
            X({
                type: "CONJURE_HISTORY_LOAD_SETTLE",
                projectId: t,
                scope: e.scope,
                status: e.status,
                count: e.count,
                truncated: !0 === e.truncated,
            });
    },
    CONJURE_LOG_APPEND: Y,
    CONJURE_LOGS_SEEN: function (e) {
        let { projectId: t } = e,
            n = 0;
        for (let e of L.get(t)?.values() ?? R) n = Math.max(n, e.key);
        if ((D.get(t) ?? 0) >= n) return !1;
        D.set(t, n);
    },
    CONJURE_TOOL_CALL_APPEND: Q,
    CONJURE_MODEL_CALL_APPEND: q,
});
