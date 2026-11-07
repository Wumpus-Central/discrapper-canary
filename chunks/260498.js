n(321073);
var i = n(855986),
    r = n(73153),
    a = n(287809),
    s = n(951178);
function l(e) {
    return e.owner_user_id === a.default.getCurrentUser()?.id;
}
function o(e) {
    return (0, s.pL)(e) && null != e.guild_id;
}
let d = new Map(),
    c = new Map(),
    u = new Map(),
    _ = null,
    E = new Map(),
    A = new Set(),
    f = new Set(),
    h = new Set(),
    I = new Set(),
    p = !1,
    m = null,
    T = 0,
    g = !1,
    S = null,
    N = !1,
    C = null,
    O = null,
    R = new Set(),
    L = new Map(),
    y = "unattempted",
    D = "unattempted";
class b extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default);
    }
    getOwnedProjects() {
        return Array.from(d.values()).filter(l);
    }
    getRailProjects() {
        return Array.from(d.values()).filter((e) => l(e) || h.has(e.id));
    }
    getUnloadedParticipatingProjectIds() {
        return Array.from(h).filter((e) => !d.has(e));
    }
    isProjectRunning(e) {
        return I.has(e);
    }
    hasFetchedOwnedProjects() {
        return g;
    }
    isReconnectListPending() {
        return p;
    }
    getSessionGeneration() {
        return T;
    }
    getMissingProjectsCheckedUserId() {
        return m;
    }
    getMaxProjects() {
        return S;
    }
    hasFetchedProjectLimit() {
        return N;
    }
    getProjectLimitFailureCode() {
        return C;
    }
    getProject(e) {
        return d.get(e) ?? null;
    }
    findProjectByApplicationId(e) {
        for (let t of d.values()) if (t.application_id === e || t.preview_application_id === e) return t;
        return null;
    }
    getSharedProjects(e) {
        let t = [];
        for (let n of d.values()) l(n) || n.guild_id !== e || t.push(n);
        return t;
    }
    getSharedWithMeProjects() {
        return Array.from(d.values()).filter((e) => !l(e) && o(e));
    }
    getIntegrationStatus(e) {
        return c.get(e) ?? null;
    }
    isProjectDeleting(e) {
        return A.has(e);
    }
    getSelectedProjectId(e) {
        return u.get(e) ?? null;
    }
    getGlobalSelectedProjectId() {
        return _;
    }
    getProjectLoadStatus(e) {
        return E.get(e) ?? null;
    }
    getProjectsFetchState() {
        return O;
    }
    hasFetchedGuildProjects(e) {
        return R.has(e);
    }
    getGuildProjectsFetchState(e) {
        return L.get(e) ?? "unattempted";
    }
    getOwnedProjectsFetchState() {
        return y;
    }
    getSharedWithMeProjectsFetchState() {
        return D;
    }
    isConjureProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
let v = new b(r.h, {
    LOGOUT: function () {
        if (
            (T++,
            0 === d.size &&
                0 === c.size &&
                0 === u.size &&
                null == _ &&
                0 === E.size &&
                0 === A.size &&
                0 === h.size &&
                0 === I.size &&
                !p &&
                null == m &&
                0 === R.size &&
                null == O &&
                null == S &&
                !N)
        )
            return !1;
        (d.clear(),
            c.clear(),
            u.clear(),
            (_ = null),
            E.clear(),
            A.clear(),
            f.clear(),
            h.clear(),
            I.clear(),
            (p = !1),
            (m = null),
            R.clear(),
            L.clear(),
            (O = null),
            (g = !1),
            (y = "unattempted"),
            (D = "unattempted"),
            (S = null),
            (N = !1),
            (C = null));
    },
    CONJURE_PROJECTS_FETCH_START: function (e) {
        let { guildId: t } = e;
        (null != t ? L.set(t, "loading") : ((y = "loading"), (D = "loading"), (p = !1)), (O = { type: "loading" }));
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            i = t.filter((e) => !0 !== e.view_only),
            r = new Set(i.map((e) => e.id));
        for (let [e, t] of d)
            !(r.has(e) || f.has(e)) && (l(t) || (null != n && t.guild_id === n)) && (d.delete(e), I.delete(e));
        for (let e of i) (d.set(e.id, e), f.delete(e.id));
        for (let e of ((function (e) {
            for (let t of e) !0 === t.running ? I.add(t.id) : I.delete(t.id);
        })(i),
        null != n ? (R.add(n), L.set(n, "success")) : (D = "success"),
        c.keys()))
            d.has(e) || c.delete(e);
        for (let [e, t] of u) d.has(t) || u.delete(e);
        ((g = !0), (y = "success"), (O = { type: "success", fetchedAt: Date.now() }));
    },
    CONJURE_PROJECTS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        (null != t ? L.set(t, "error") : ((y = "error"), (D = "error")),
            (O = { type: "error", fetchedAt: Date.now() }));
    },
    CONJURE_PARTICIPATING_PROJECTS_MARK: function (e) {
        let { projectIds: t } = e,
            n = !1;
        for (let e of t) {
            let t = d.get(e);
            null == t || l(t) || h.has(e) || (h.add(e), (n = !0));
        }
        return n;
    },
    CONJURE_MISSING_PROJECTS_CHECK_START: function (e) {
        let { userId: t } = e;
        if (m === t) return !1;
        m = t;
    },
    CONJURE_PROJECT_RUNNING_UPDATE: function (e) {
        let { projectId: t, running: n } = e;
        if (h.has(t) && I.has(t) === n) return !1;
        (h.add(t), n ? I.add(t) : I.delete(t));
    },
    CONJURE_TURN_SETTLED: function (e) {
        let { projectId: t } = e;
        if (h.has(t)) return !1;
        h.add(t);
    },
    CONNECTION_OPEN: function () {
        if (0 === I.size) return !1;
        (I.clear(), g && (p = !0));
    },
    CONJURE_PROJECT_LIMIT_FETCH_SETTLE: function (e) {
        let { maxProjects: t, failureCode: n } = e;
        ((S = t), (N = !0), (C = n));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        (d.set(t.id, t), f.add(t.id));
    },
    CONJURE_PROJECT_UPDATE_SUCCESS: function (e) {
        let { project: t } = e;
        d.set(t.id, t);
    },
    CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        c.set(t, n);
    },
    CONJURE_PROJECT_DELETE_START: function (e) {
        let { projectId: t } = e;
        A.add(t);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (A.delete(t), d.delete(t), f.delete(t), c.delete(t), u)) n === t && u.delete(e);
        (_ === t && (_ = null), E.delete(t), h.delete(t), I.delete(t));
    },
    CONJURE_PROJECT_DELETE_FAIL: function (e) {
        let { projectId: t } = e;
        return A.delete(t);
    },
    CONJURE_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((u.get(t) ?? null) === n) return !1;
        null == n ? u.delete(t) : u.set(t, n);
    },
    CONJURE_PROJECT_GLOBAL_SELECT: function (e) {
        let { projectId: t } = e;
        if (_ === t) return !1;
        _ = t;
    },
    CONJURE_PROJECT_GLOBAL_CLEAR: function (e) {
        let { projectId: t } = e;
        if (_ !== t) return !1;
        _ = null;
    },
    CONJURE_PROJECT_LOAD_STATUS: function (e) {
        let { projectId: t, status: n } = e;
        if ((E.get(t) ?? null) === n) return !1;
        null == n ? E.delete(t) : E.set(t, n);
    },
});
n.d(
    t,
    {},
    {
        Ay: v,
        H_: function (e) {
            return l(e) || o(e) || (0, s.XE)(e);
        },
        PV: l,
        jf: function (e) {
            return l(e) || o(e);
        },
    },
);
