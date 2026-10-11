(n.d(e, {
    CW: () => N,
    GO: () => v,
    K: () => k,
    M7: () => j,
    Ru: () => b,
    U1: () => A,
    b8: () => S,
    dm: () => m,
    gA: () => P,
    hF: () => T,
    xx: () => I,
}),
    n(938796));
var r = n(636537),
    i = n(499979),
    l = n(73153),
    u = n(803306),
    a = n(627363),
    o = n(573163),
    c = n(287809),
    s = n(404373),
    _ = n(639519),
    d = n(260498),
    E = n(951178),
    h = n(426035),
    p = n(652215),
    C = n(790782);
let R = null,
    f = null,
    y = !1;
async function T(t) {
    let e = t ?? null;
    if (d.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != e && e !== R ? (f = e) : null == e && null != R && (y = !0));
    ((R = e), l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: e }));
    try {
        let { body: n } = await r.Bo.get({
            url: p.Rsh.CONJURE_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e }), (y = !1), J());
    } catch {
        l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: e });
    }
    let n = f;
    ((f = null), null != n && n !== e ? T(n) : y && ((y = !1), T()));
}
let O = !1;
async function J() {
    if (!O) {
        for (let t of ((O = !0), o.Ay.getResourceIds(C.P.CONJURING_PROJECT)))
            if (null == d.Ay.getProject(t)) {
                if (!(0, s.tz)(t)) {
                    g(t);
                    continue;
                }
                if ((await (0, i.yy)(5e3 * Math.random()), null == d.Ay.getProject(t)))
                    try {
                        await A(t);
                    } catch (n) {
                        let e = (0, _.$k)(n);
                        (403 === e || 404 === e) && g(t);
                    }
            }
    }
}
function g(t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: t });
}
let U = null;
async function S() {
    let t = c.default.getCurrentUser()?.id ?? null;
    if (null == t || U === t || d.Ay.hasFetchedProjectLimit()) return;
    U = t;
    let e = null;
    try {
        let { body: t } = await r.Bo.get({ url: p.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        e = t.max_projects;
    } catch {}
    (U === t && (U = null),
        c.default.getCurrentUser()?.id === t &&
            l.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: e }));
}
async function A(t, e) {
    let n = await r.Bo.get({ url: p.Rsh.CONJURE_PROJECT(t), rejectWithError: !1, signal: e });
    if (e?.aborted !== !0 && n.ok) {
        var i;
        (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (i = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            }),
            l.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: t, integrationStatus: i }));
    }
    return n;
}
async function P(t) {
    let e,
        n = t.flags ?? E.Zh.PUBLIC;
    try {
        let { body: i } = await r.Bo.post({
            url: p.Rsh.CONJURE_PROJECTS,
            body: { ...t, flags: n },
            rejectWithError: !1,
        });
        e = i;
    } catch (t) {
        throw new _.DS((0, _.hj)(t), (0, _.$k)(t));
    }
    return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: e }), e.id);
}
async function w(t, e) {
    let n = await r.Bo.patch({ url: p.Rsh.CONJURE_PROJECT(t), body: e, rejectWithError: !1 });
    return (n.ok && l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function N(t, e) {
    let n = await w(t, e);
    if (n.ok && (null != e.icon || null != e.description)) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, a.TA)(t);
            } catch {}
    }
    return n;
}
function b(t, e) {
    return N(t, { icon: e });
}
function j(t, e) {
    return w(t, e);
}
async function I(t) {
    let e;
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: t });
    try {
        e = await r.Bo.del({ url: p.Rsh.CONJURE_PROJECT(t), rejectWithError: !1 });
    } catch (e) {
        throw (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e);
    }
    return (
        l.h.dispatch({ type: e.ok ? "CONJURE_PROJECT_DELETE_SUCCESS" : "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e
    );
}
function k(t, e) {
    I(t).then((t) => {
        t.ok || e();
    }, e);
}
function v(t) {
    let e = d.Ay.getProject(t);
    null != e && (A(t).catch(() => {}), (0, u.eO)((0, h.Du)(e), { withMutualGuilds: !0 }).catch(() => {}));
}
function m(t, e) {
    l.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: t, projectId: e });
}
