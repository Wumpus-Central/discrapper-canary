(n.d(e, {
    BD: () => I,
    CW: () => m,
    GG: () => z,
    GO: () => G,
    HV: () => $,
    I$: () => x,
    Is: () => T,
    K: () => H,
    Lw: () => Y,
    M7: () => b,
    Ru: () => B,
    U1: () => D,
    YI: () => M,
    Zq: () => K,
    b8: () => k,
    dm: () => W,
    gA: () => v,
    hF: () => S,
    tZ: () => V,
    xx: () => F,
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
    s = n(404373),
    p = n(639519),
    d = n(517244),
    R = n(385081),
    h = n(28480),
    C = n(42766),
    A = n(426035),
    f = n(652215),
    O = n(790782);
function T(t, e, n) {
    (0, R.Hy)(t, {
        location: "publish",
        code: R.xf.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: e,
        isPreview: n,
    });
}
function y(t) {
    h.A.reloadAppFrames(t);
}
function I(t) {
    let e = C.Ay.getProject(t);
    null != e && (y(e.application_id), (0, E.Fl)(e) || y(e.preview_application_id ?? null));
}
let U = null,
    N = null,
    P = !1;
async function S(t) {
    let e = t ?? null;
    if (C.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != e && e !== U ? (N = e) : null == e && null != U && (P = !0));
    ((U = e), l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: e }));
    try {
        let { body: n } = await i.Bo.get({
            url: f.Rsh.CONJURE_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e }), (P = !1), w());
    } catch {
        l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: e });
    }
    let n = N;
    ((N = null), null != n && n !== e ? S(n) : P && ((P = !1), S()));
}
let g = !1;
async function w() {
    if (!g) {
        for (let t of ((g = !0), o.Ay.getResourceIds(O.P.CONJURING_PROJECT)))
            if (null == C.Ay.getProject(t)) {
                if (!(0, s.tz)(t)) {
                    J(t);
                    continue;
                }
                if ((await (0, r.yy)(5e3 * Math.random()), null == C.Ay.getProject(t)))
                    try {
                        await D(t);
                    } catch (n) {
                        let e = (0, p.$k)(n);
                        (403 === e || 404 === e) && J(t);
                    }
            }
    }
}
function J(t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: t });
}
let L = null;
async function k() {
    let t = c.default.getCurrentUser()?.id ?? null;
    if (null == t || L === t || C.Ay.hasFetchedProjectLimit()) return;
    L = t;
    let e = null;
    try {
        let { body: t } = await i.Bo.get({ url: f.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        e = t.max_projects;
    } catch {}
    (L === t && (L = null),
        c.default.getCurrentUser()?.id === t &&
            l.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: e }));
}
async function D(t, e) {
    let n = await i.Bo.get({ url: f.Rsh.CONJURE_PROJECT(t), rejectWithError: !1, signal: e });
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
async function v(t) {
    let e,
        n = t.flags ?? E.Zh.PUBLIC;
    try {
        let { body: r } = await i.Bo.post({
            url: f.Rsh.CONJURE_PROJECTS,
            body: { ...t, flags: n },
            rejectWithError: !1,
        });
        e = r;
    } catch (t) {
        throw new p.DS((0, p.hj)(t), (0, p.$k)(t));
    }
    return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: e }), e.id);
}
async function j(t, e) {
    let n = await i.Bo.patch({ url: f.Rsh.CONJURE_PROJECT(t), body: e, rejectWithError: !1 });
    return (n.ok && l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function m(t, e) {
    let n = await j(t, e);
    if (n.ok && (null != e.icon || null != e.description)) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, a.TA)(t);
            } catch {}
    }
    return n;
}
function B(t, e) {
    return m(t, { icon: e });
}
function b(t, e) {
    return j(t, e);
}
async function F(t) {
    let e;
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: t });
    try {
        e = await i.Bo.del({ url: f.Rsh.CONJURE_PROJECT(t), rejectWithError: !1 });
    } catch (e) {
        throw (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e);
    }
    return (
        l.h.dispatch({ type: e.ok ? "CONJURE_PROJECT_DELETE_SUCCESS" : "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e
    );
}
function H(t, e) {
    F(t).then((t) => {
        t.ok || e();
    }, e);
}
async function M(t, e) {
    let { guildId: n, alsoRemovePreviewBot: r } = e;
    try {
        return await i.Bo.post({
            url: f.Rsh.CONJURE_PROJECT_UNPUBLISH(t),
            body: { guild_id: n, also_remove_preview_bot: r },
            rejectWithError: !1,
        });
    } finally {
        G(t);
    }
}
function G(t) {
    let e = C.Ay.getProject(t);
    null != e && (D(t).catch(() => {}), (0, _.eO)((0, A.Du)(e), { withMutualGuilds: !0 }).catch(() => {}));
}
function W(t, e) {
    l.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: t, projectId: e });
}
async function V(t, e) {
    let { isPreview: n } = e,
        { bot_permissions_changed: i, integration_installed: r, project: _ } = (await D(t)).body,
        o = n ? _.preview_application_id : _.application_id;
    (null != o &&
        (l.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: o }),
        await (0, a.TA)(o),
        await (0, u.un)(o, { force: !0 }).catch(() => {}),
        n ? r && !i && (0, d.k)(o) : y(o)),
        (0, R.w2)(t, { isPreview: n }));
}
function x(t, e) {
    l.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e });
}
function K(t) {
    l.h.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function $(t) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function z(t) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
function Y(t) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: t });
}
