(n.d(t, { PV: () => o, Ay: () => k, jf: () => c, H_: () => u }), n(321073));
var i = n(17928),
    r = n(73153),
    a = n(287809),
    s = n(164892);
(n(134528), n(947204));
class l {
    seqOf;
    items = [];
    cached = null;
    constructor(e) {
        this.seqOf = e;
    }
    at(e) {
        return this.items.at(e);
    }
    findIndex(e) {
        return this.items.findIndex(e);
    }
    indexOfSeq(e) {
        let t = 0,
            n = this.items.length - 1;
        for (; t <= n;) {
            let i = (t + n) >> 1,
                r = this.keyOf(this.items[i]);
            if (r === e) return i;
            r < e ? (t = i + 1) : (n = i - 1);
        }
        return -1;
    }
    insert(e) {
        let t = this.keyOf(e),
            n = this.items.length;
        for (; n > 0 && this.keyOf(this.items[n - 1]) > t;) n--;
        (this.items.splice(n, 0, e), (this.cached = null));
    }
    replace(e, t) {
        if (this.keyOf(this.items[e]) === this.keyOf(t)) {
            ((this.items[e] = t), (this.cached = null));
            return;
        }
        (this.items.splice(e, 1), this.insert(t));
    }
    retain(e) {
        let t = this.items.filter(e);
        t.length !== this.items.length && ((this.items = t), (this.cached = null));
    }
    trim(e) {
        this.items.length <= e || (this.items.splice(0, this.items.length - e), (this.cached = null));
    }
    values() {
        return this.items;
    }
    snapshot() {
        return ((this.cached ??= this.items.slice()), this.cached);
    }
    keyOf(e) {
        return this.seqOf(e) ?? 1 / 0;
    }
}
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
    D = new Map();
function v(e) {
    return e.log.seq;
}
let b = { status: "idle", truncated: !1, count: 0 },
    M = new Map();
function P(e, t, n) {
    let i = M.get(e);
    (null == i && ((i = new Map()), M.set(e, i)), i.set(t, n));
}
class U extends i.Ay.Store {
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
    getHistoryState(e, t) {
        return M.get(e)?.get(t) ?? b;
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
function w(e) {
    let { project: t } = e;
    _.set(t.id, t);
}
function G(e) {
    let t,
        { projectId: n, log: i } = e,
        r = (null == (t = L.get(n)) && ((t = new l(v)), L.set(n, t)), t);
    if (null != i.seq && -1 !== r.indexOfSeq(i.seq)) return !1;
    (r.insert({ key: ++y, log: i }), r.trim(500));
}
function x(e) {
    let { projectId: t, scope: n, status: i, count: r, truncated: a } = e;
    if ("failed" === i) {
        let e = M.get(t)?.get(n);
        P(t, n, { status: "failed", truncated: e?.truncated ?? !1, count: e?.count ?? 0 });
        return;
    }
    P(t, n, { status: "loaded", truncated: a, count: r });
}
let k = new U(r.h, {
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
            0 === M.size &&
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
            M.clear(),
            (S = null),
            (T = !1),
            (O = "unattempted"),
            (m = null),
            (g = !1));
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
    CONJURE_PROJECT_CREATE_SUCCESS: w,
    CONJURE_PROJECT_UPDATE_SUCCESS: w,
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
        M.delete(t),
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
    CONJURE_HISTORY_LOAD_SETTLE: x,
    CONJURE_DEBUG_BACKLOG: function (e) {
        let { projectId: t, backlog: n } = e;
        for (let e of n.logs) G({ type: "CONJURE_LOG_APPEND", projectId: t, log: e });
        for (let e of n.states)
            x({
                type: "CONJURE_HISTORY_LOAD_SETTLE",
                projectId: t,
                scope: e.scope,
                status: e.status,
                count: e.count,
                truncated: !0 === e.truncated,
            });
    },
    CONJURE_LOG_APPEND: G,
    CONJURE_LOGS_SEEN: function (e) {
        let { projectId: t } = e,
            n = 0;
        for (let e of L.get(t)?.values() ?? R) n = Math.max(n, e.key);
        if ((D.get(t) ?? 0) >= n) return !1;
        D.set(t, n);
    },
});
