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
    h = new Set(),
    f = new Set(),
    I = new Set(),
    p = !1,
    m = null,
    T = 0,
    g = !1,
    S = null,
    N = !1,
    C = null,
    O = new Set(),
    R = new Map(),
    L = "unattempted";
class y extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default);
    }
    getOwnedProjects() {
        return Array.from(d.values()).filter(l);
    }
    getRailProjects() {
        return Array.from(d.values()).filter((e) => l(e) || f.has(e.id));
    }
    getUnloadedParticipatingProjectIds() {
        return Array.from(f).filter((e) => !d.has(e));
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
        return C;
    }
    hasFetchedGuildProjects(e) {
        return O.has(e);
    }
    getGuildProjectsFetchState(e) {
        return R.get(e) ?? "unattempted";
    }
    getOwnedProjectsFetchState() {
        return L;
    }
    isConjureProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
let D = new y(r.h, {
    LOGOUT: function () {
        if (
            (T++,
            0 === d.size &&
                0 === c.size &&
                0 === u.size &&
                null == _ &&
                0 === E.size &&
                0 === A.size &&
                0 === f.size &&
                0 === I.size &&
                !p &&
                null == m &&
                0 === O.size &&
                null == C &&
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
            h.clear(),
            f.clear(),
            I.clear(),
            (p = !1),
            (m = null),
            O.clear(),
            R.clear(),
            (C = null),
            (g = !1),
            (L = "unattempted"),
            (S = null),
            (N = !1));
    },
    CONJURE_PROJECTS_FETCH_START: function (e) {
        let { guildId: t } = e;
        (null != t ? R.set(t, "loading") : ((L = "loading"), (p = !1)), (C = { type: "loading" }));
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            i = t.filter((e) => !0 !== e.view_only),
            r = new Set(i.map((e) => e.id));
        for (let [e, t] of d)
            !(r.has(e) || h.has(e)) && (l(t) || (null != n && t.guild_id === n)) && (d.delete(e), I.delete(e));
        for (let e of i) (d.set(e.id, e), h.delete(e.id));
        for (let e of ((function (e) {
            for (let t of e) !0 === t.running ? I.add(t.id) : I.delete(t.id);
        })(i),
        null != n && (O.add(n), R.set(n, "success")),
        c.keys()))
            d.has(e) || c.delete(e);
        for (let [e, t] of u) d.has(t) || u.delete(e);
        ((g = !0), (L = "success"), (C = { type: "success", fetchedAt: Date.now() }));
    },
    CONJURE_PROJECTS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        (null != t ? R.set(t, "error") : (L = "error"), (C = { type: "error", fetchedAt: Date.now() }));
    },
    CONJURE_PARTICIPATING_PROJECTS_MARK: function (e) {
        let { projectIds: t } = e,
            n = !1;
        for (let e of t) {
            let t = d.get(e);
            null == t || l(t) || f.has(e) || (f.add(e), (n = !0));
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
        if (f.has(t) && I.has(t) === n) return !1;
        (f.add(t), n ? I.add(t) : I.delete(t));
    },
    CONJURE_TURN_SETTLED: function (e) {
        let { projectId: t } = e;
        if (f.has(t)) return !1;
        f.add(t);
    },
    CONNECTION_OPEN: function () {
        if (0 === I.size) return !1;
        (I.clear(), g && (p = !0));
    },
    CONJURE_PROJECT_LIMIT_FETCH_SETTLE: function (e) {
        let { maxProjects: t } = e;
        ((S = t), (N = !0));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        (d.set(t.id, t), h.add(t.id));
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
        for (let [e, n] of (A.delete(t), d.delete(t), h.delete(t), c.delete(t), u)) n === t && u.delete(e);
        (_ === t && (_ = null), E.delete(t), f.delete(t), I.delete(t));
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
        Ay: D,
        H_: function (e) {
            return l(e) || o(e) || (0, s.XE)(e);
        },
        PV: l,
        jf: function (e) {
            return l(e) || o(e);
        },
    },
);
