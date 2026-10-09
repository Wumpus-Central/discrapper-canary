(n.d(e, {
    BD: () => y,
    CW: () => j,
    GG: () => $,
    GO: () => M,
    HV: () => K,
    I$: () => V,
    Is: () => T,
    K: () => F,
    Lw: () => z,
    M7: () => B,
    Ru: () => m,
    U1: () => k,
    YI: () => H,
    Zq: () => x,
    b8: () => L,
    dm: () => G,
    gA: () => D,
    hF: () => P,
    tZ: () => W,
    xx: () => b,
}),
    n(938796));
var i = n(636537),
    r = n(499979),
    l = n(73153),
    _ = n(803306),
    u = n(382483),
    a = n(627363),
    o = n(573163),
    c = n(287809),
    E = n(164892),
    s = n(639519),
    p = n(517244),
    d = n(385081),
    R = n(28480),
    h = n(260498),
    C = n(426035),
    A = n(652215),
    O = n(790782);
function T(t, e, n) {
    (0, d.Hy)(t, {
        location: "publish",
        code: d.xf.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: e,
        isPreview: n,
    });
}
function f(t) {
    R.A.reloadAppFrames(t);
}
function y(t) {
    let e = h.Ay.getProject(t);
    null != e && (f(e.application_id), (0, E.Fl)(e) || f(e.preview_application_id ?? null));
}
let I = null,
    U = null,
    N = !1;
async function P(t) {
    let e = t ?? null;
    if (h.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != e && e !== I ? (U = e) : null == e && null != I && (N = !0));
    ((I = e), l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: e }));
    try {
        let { body: n } = await i.Bo.get({
            url: A.Rsh.CONJURE_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e }), (N = !1), S());
    } catch {
        l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: e });
    }
    let n = U;
    ((U = null), null != n && n !== e ? P(n) : N && ((N = !1), P()));
}
let g = !1;
async function S() {
    if (!g) {
        for (let t of ((g = !0), o.Ay.getResourceIds(O.P.CONJURING_PROJECT)))
            if (null == h.Ay.getProject(t)) {
                if (0 === o.Ay.getMentionCount(t, O.P.CONJURING_PROJECT)) {
                    J(t);
                    continue;
                }
                if ((await (0, r.yy)(5e3 * Math.random()), null == h.Ay.getProject(t)))
                    try {
                        await k(t);
                    } catch (n) {
                        let e = (0, s.$k)(n);
                        (403 === e || 404 === e) && J(t);
                    }
            }
    }
}
function J(t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: t });
}
let w = null;
async function L() {
    let t = c.default.getCurrentUser()?.id ?? null;
    if (null == t || w === t || h.Ay.hasFetchedProjectLimit()) return;
    w = t;
    let e = null;
    try {
        let { body: t } = await i.Bo.get({ url: A.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        e = t.max_projects;
    } catch {}
    (w === t && (w = null),
        c.default.getCurrentUser()?.id === t &&
            l.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: e }));
}
async function k(t, e) {
    let n = await i.Bo.get({ url: A.Rsh.CONJURE_PROJECT(t), rejectWithError: !1, signal: e });
    if (e?.aborted !== !0 && n.ok) {
        var r;
        (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (r = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            }),
            l.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: t, integrationStatus: r }));
    }
    return n;
}
async function D(t) {
    let e,
        n = t.flags ?? E.Zh.PUBLIC;
    try {
        let { body: r } = await i.Bo.post({
            url: A.Rsh.CONJURE_PROJECTS,
            body: { ...t, flags: n },
            rejectWithError: !1,
        });
        e = r;
    } catch (t) {
        throw new s.DS((0, s.hj)(t), (0, s.$k)(t));
    }
    return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: e }), e.id);
}
async function v(t, e) {
    let n = await i.Bo.patch({ url: A.Rsh.CONJURE_PROJECT(t), body: e, rejectWithError: !1 });
    return (n.ok && l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
function j(t, e) {
    return v(t, e);
}
async function m(t, e) {
    let n = await v(t, { icon: e });
    if (n.ok) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, a.TA)(t);
            } catch {}
    }
    return n;
}
function B(t, e) {
    return v(t, e);
}
async function b(t) {
    let e;
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: t });
    try {
        e = await i.Bo.del({ url: A.Rsh.CONJURE_PROJECT(t), rejectWithError: !1 });
    } catch (e) {
        throw (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e);
    }
    return (
        l.h.dispatch({ type: e.ok ? "CONJURE_PROJECT_DELETE_SUCCESS" : "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e
    );
}
function F(t, e) {
    b(t).then((t) => {
        t.ok || e();
    }, e);
}
async function H(t, e) {
    let { guildId: n, alsoRemovePreviewBot: r } = e;
    try {
        return await i.Bo.post({
            url: A.Rsh.CONJURE_PROJECT_UNPUBLISH(t),
            body: { guild_id: n, also_remove_preview_bot: r },
            rejectWithError: !1,
        });
    } finally {
        M(t);
    }
}
function M(t) {
    let e = h.Ay.getProject(t);
    null != e && (k(t).catch(() => {}), (0, _.eO)((0, C.Du)(e), { withMutualGuilds: !0 }).catch(() => {}));
}
function G(t, e) {
    l.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: t, projectId: e });
}
async function W(t, e) {
    let { isPreview: n } = e,
        { bot_permissions_changed: i, integration_installed: r, project: _ } = (await k(t)).body,
        o = n ? _.preview_application_id : _.application_id;
    (null != o &&
        (l.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: o }),
        await (0, a.TA)(o),
        await (0, u.un)(o, { force: !0 }).catch(() => {}),
        n ? r && !i && (0, p.k)(o) : f(o)),
        (0, d.w2)(t, { isPreview: n }));
}
function V(t, e) {
    l.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e });
}
function x(t) {
    l.h.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function K(t) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function $(t) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
function z(t) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: t });
}
