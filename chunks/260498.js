(n.d(t, { Ay: () => C, H_: () => c, PV: () => l, jf: () => d }), n(321073));
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
    A = new Set(),
    h = !1,
    f = null,
    I = !1,
    p = null,
    T = new Set(),
    m = new Map(),
    g = "unattempted";
class S extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default);
    }
    getOwnedProjects() {
        return Array.from(u.values()).filter(l);
    }
    hasFetchedOwnedProjects() {
        return h;
    }
    getMaxProjects() {
        return f;
    }
    hasFetchedProjectLimit() {
        return I;
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
        return A.has(e);
    }
    getSelectedProjectId(e) {
        return E.get(e) ?? null;
    }
    getProjectsFetchState() {
        return p;
    }
    hasFetchedGuildProjects(e) {
        return T.has(e);
    }
    getGuildProjectsFetchState(e) {
        return m.get(e) ?? "unattempted";
    }
    getOwnedProjectsFetchState() {
        return g;
    }
    isConjureProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
function N(e) {
    let { project: t } = e;
    u.set(t.id, t);
}
let C = new S(r.h, {
    LOGOUT: function () {
        if (
            0 === u.size &&
            0 === _.size &&
            0 === E.size &&
            0 === A.size &&
            0 === T.size &&
            null == p &&
            null == f &&
            !I
        )
            return !1;
        (u.clear(),
            _.clear(),
            E.clear(),
            A.clear(),
            T.clear(),
            m.clear(),
            (p = null),
            (h = !1),
            (g = "unattempted"),
            (f = null),
            (I = !1));
    },
    CONJURE_PROJECTS_FETCH_START: function (e) {
        let { guildId: t } = e;
        (null != t ? m.set(t, "loading") : (g = "loading"), (p = { type: "loading" }));
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            i = new Set(t.map((e) => e.id));
        for (let [e, t] of u) !i.has(e) && (l(t) || (null != n && t.guild_id === n)) && u.delete(e);
        for (let e of t) u.set(e.id, e);
        for (let e of (null != n && (T.add(n), m.set(n, "success")), _.keys())) u.has(e) || _.delete(e);
        for (let [e, t] of E) u.has(t) || E.delete(e);
        ((h = !0), (g = "success"), (p = { type: "success", fetchedAt: Date.now() }));
    },
    CONJURE_PROJECTS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        (null != t ? m.set(t, "error") : (g = "error"), (p = { type: "error", fetchedAt: Date.now() }));
    },
    CONJURE_PROJECT_LIMIT_FETCH_SETTLE: function (e) {
        let { maxProjects: t } = e;
        ((f = t), (I = !0));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: N,
    CONJURE_PROJECT_UPDATE_SUCCESS: N,
    CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        _.set(t, n);
    },
    CONJURE_PROJECT_DELETE_START: function (e) {
        let { projectId: t } = e;
        A.add(t);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (A.delete(t), u.delete(t), _.delete(t), E)) n === t && E.delete(e);
    },
    CONJURE_PROJECT_DELETE_FAIL: function (e) {
        let { projectId: t } = e;
        return A.delete(t);
    },
    CONJURE_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((E.get(t) ?? null) === n) return !1;
        null == n ? E.delete(t) : E.set(t, n);
    },
});
