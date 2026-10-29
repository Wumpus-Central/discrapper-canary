(n.d(t, { Ay: () => y, H_: () => c, PV: () => l, jf: () => d }), n(321073));
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
    I = !1,
    p = null,
    T = !1,
    m = null,
    g = new Set(),
    S = new Map(),
    N = new Map(),
    C = [],
    O = "unattempted";
class R extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default);
    }
    getOwnedProjects() {
        return Array.from(u.values()).filter(l);
    }
    hasFetchedOwnedProjects() {
        return I;
    }
    getMaxProjects() {
        return p;
    }
    hasFetchedProjectLimit() {
        return T;
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
    getViewOnlyProjects(e) {
        return N.get(e) ?? C;
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
        return m;
    }
    hasFetchedGuildProjects(e) {
        return g.has(e);
    }
    getGuildProjectsFetchState(e) {
        return S.get(e) ?? "unattempted";
    }
    getOwnedProjectsFetchState() {
        return O;
    }
    isConjureProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
function L(e) {
    let { project: t } = e;
    u.set(t.id, t);
}
let y = new R(r.h, {
    LOGOUT: function () {
        if (
            0 === u.size &&
            0 === _.size &&
            0 === E.size &&
            null == A &&
            0 === h.size &&
            0 === f.size &&
            0 === g.size &&
            0 === N.size &&
            null == m &&
            null == p &&
            !T
        )
            return !1;
        (u.clear(),
            _.clear(),
            E.clear(),
            (A = null),
            h.clear(),
            f.clear(),
            g.clear(),
            S.clear(),
            N.clear(),
            (m = null),
            (I = !1),
            (O = "unattempted"),
            (p = null),
            (T = !1));
    },
    CONJURE_PROJECTS_FETCH_START: function (e) {
        let { guildId: t } = e;
        (null != t ? S.set(t, "loading") : (O = "loading"), (m = { type: "loading" }));
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            i = t.filter((e) => !0 !== e.view_only),
            r = new Set(i.map((e) => e.id));
        for (let [e, t] of u) !r.has(e) && (l(t) || (null != n && t.guild_id === n)) && u.delete(e);
        for (let e of i) u.set(e.id, e);
        for (let e of (null != n &&
            (g.add(n),
            S.set(n, "success"),
            N.set(
                n,
                t.filter((e) => !0 === e.view_only),
            )),
        _.keys()))
            u.has(e) || _.delete(e);
        for (let [e, t] of E) u.has(t) || E.delete(e);
        ((I = !0), (O = "success"), (m = { type: "success", fetchedAt: Date.now() }));
    },
    CONJURE_PROJECTS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        (null != t ? S.set(t, "error") : (O = "error"), (m = { type: "error", fetchedAt: Date.now() }));
    },
    CONJURE_PROJECT_LIMIT_FETCH_SETTLE: function (e) {
        let { maxProjects: t } = e;
        ((p = t), (T = !0));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: L,
    CONJURE_PROJECT_UPDATE_SUCCESS: L,
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
        for (let [e, n] of (f.delete(t), u.delete(t), _.delete(t), E)) n === t && E.delete(e);
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
