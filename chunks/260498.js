(n.d(t, { Ay: () => R, H_: () => c, PV: () => l, jf: () => d }), n(321073));
var i = n(17928),
    r = n(73153),
    a = n(287809),
    s = n(951178);
function l(e) {
    return e.owner_user_id === a.default.getCurrentUser()?.id;
}
function o(e) {
    return (0, s.pL)(e) && null != e.guild_id;
}
function d(e) {
    return l(e) || o(e);
}
function c(e) {
    return l(e) || o(e) || (0, s.XE)(e);
}
let u = new Map(),
    _ = new Map(),
    E = new Map(),
    A = null,
    h = new Map(),
    f = new Set(),
    I = new Set(),
    p = !1,
    T = null,
    m = !1,
    g = null,
    S = new Set(),
    N = new Map(),
    C = "unattempted";
class O extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default);
    }
    getOwnedProjects() {
        return Array.from(u.values()).filter(l);
    }
    hasFetchedOwnedProjects() {
        return p;
    }
    getMaxProjects() {
        return T;
    }
    hasFetchedProjectLimit() {
        return m;
    }
    getProject(e) {
        return u.get(e) ?? null;
    }
    findProjectByApplicationId(e) {
        for (let t of u.values()) if (t.application_id === e || t.preview_application_id === e) return t;
        return null;
    }
    getSharedProjects(e) {
        let t = [];
        for (let n of u.values()) l(n) || n.guild_id !== e || t.push(n);
        return t;
    }
    getIntegrationStatus(e) {
        return _.get(e) ?? null;
    }
    isProjectDeleting(e) {
        return f.has(e);
    }
    getSelectedProjectId(e) {
        return E.get(e) ?? null;
    }
    getGlobalSelectedProjectId() {
        return A;
    }
    getProjectLoadStatus(e) {
        return h.get(e) ?? null;
    }
    getProjectsFetchState() {
        return g;
    }
    hasFetchedGuildProjects(e) {
        return S.has(e);
    }
    getGuildProjectsFetchState(e) {
        return N.get(e) ?? "unattempted";
    }
    getOwnedProjectsFetchState() {
        return C;
    }
    isConjureProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
let R = new O(r.h, {
    LOGOUT: function () {
        if (
            0 === u.size &&
            0 === _.size &&
            0 === E.size &&
            null == A &&
            0 === h.size &&
            0 === f.size &&
            0 === S.size &&
            null == g &&
            null == T &&
            !m
        )
            return !1;
        (u.clear(),
            _.clear(),
            E.clear(),
            (A = null),
            h.clear(),
            f.clear(),
            I.clear(),
            S.clear(),
            N.clear(),
            (g = null),
            (p = !1),
            (C = "unattempted"),
            (T = null),
            (m = !1));
    },
    CONJURE_PROJECTS_FETCH_START: function (e) {
        let { guildId: t } = e;
        (null != t ? N.set(t, "loading") : (C = "loading"), (g = { type: "loading" }));
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            i = t.filter((e) => !0 !== e.view_only),
            r = new Set(i.map((e) => e.id));
        for (let [e, t] of u) !(r.has(e) || I.has(e)) && (l(t) || (null != n && t.guild_id === n)) && u.delete(e);
        for (let e of i) (u.set(e.id, e), I.delete(e.id));
        for (let e of (null != n && (S.add(n), N.set(n, "success")), _.keys())) u.has(e) || _.delete(e);
        for (let [e, t] of E) u.has(t) || E.delete(e);
        ((p = !0), (C = "success"), (g = { type: "success", fetchedAt: Date.now() }));
    },
    CONJURE_PROJECTS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        (null != t ? N.set(t, "error") : (C = "error"), (g = { type: "error", fetchedAt: Date.now() }));
    },
    CONJURE_PROJECT_LIMIT_FETCH_SETTLE: function (e) {
        let { maxProjects: t } = e;
        ((T = t), (m = !0));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        (u.set(t.id, t), I.add(t.id));
    },
    CONJURE_PROJECT_UPDATE_SUCCESS: function (e) {
        let { project: t } = e;
        u.set(t.id, t);
    },
    CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        _.set(t, n);
    },
    CONJURE_PROJECT_DELETE_START: function (e) {
        let { projectId: t } = e;
        f.add(t);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (f.delete(t), u.delete(t), I.delete(t), _.delete(t), E)) n === t && E.delete(e);
        (A === t && (A = null), h.delete(t));
    },
    CONJURE_PROJECT_DELETE_FAIL: function (e) {
        let { projectId: t } = e;
        return f.delete(t);
    },
    CONJURE_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((E.get(t) ?? null) === n) return !1;
        null == n ? E.delete(t) : E.set(t, n);
    },
    CONJURE_PROJECT_GLOBAL_SELECT: function (e) {
        let { projectId: t } = e;
        if (A === t) return !1;
        A = t;
    },
    CONJURE_PROJECT_GLOBAL_CLEAR: function (e) {
        let { projectId: t } = e;
        if (A !== t) return !1;
        A = null;
    },
    CONJURE_PROJECT_LOAD_STATUS: function (e) {
        let { projectId: t, status: n } = e;
        if ((h.get(t) ?? null) === n) return !1;
        null == n ? h.delete(t) : h.set(t, n);
    },
});
