(n.d(e, {
    BD: () => y,
    CW: () => m,
    GG: () => $,
    GO: () => M,
    HV: () => K,
    I$: () => V,
    Is: () => A,
    K: () => F,
    Lw: () => Z,
    M7: () => b,
    Ru: () => v,
    U1: () => k,
    YI: () => H,
    Zq: () => x,
    b8: () => L,
    dm: () => G,
    gA: () => D,
    hF: () => U,
    tZ: () => W,
    xx: () => B,
}),
    n(938796));
var i = n(636537),
    r = n(499979),
    l = n(73153),
    _ = n(803306),
    u = n(382483),
    o = n(627363),
    a = n(573163),
    c = n(287809),
    E = n(164892),
    s = n(639519),
    p = n(517244),
    d = n(385081),
    R = n(868695),
    h = n(260498),
    C = n(426035),
    O = n(652215),
    T = n(790782);
function A(t, e, n) {
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
    null != e && (f(e.application_id), f(e.preview_application_id ?? null));
}
let I = null,
    N = null,
    P = !1;
async function U(t) {
    let e = t ?? null;
    if (h.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != e && e !== I ? (N = e) : null == e && null != I && (P = !0));
    ((I = e), l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: e }));
    try {
        let { body: n } = await i.Bo.get({
            url: O.Rsh.CONJURE_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e }), (P = !1), J());
    } catch {
        l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: e });
    }
    let n = N;
    ((N = null), null != n && n !== e ? U(n) : P && ((P = !1), U()));
}
let S = !1;
async function J() {
    if (!S) {
        for (let t of ((S = !0), a.Ay.getResourceIds(T.P.CONJURING_PROJECT)))
            if (null == h.Ay.getProject(t)) {
                if (0 === a.Ay.getMentionCount(t, T.P.CONJURING_PROJECT)) {
                    g(t);
                    continue;
                }
                if ((await (0, r.yy)(5e3 * Math.random()), null == h.Ay.getProject(t)))
                    try {
                        await k(t);
                    } catch (n) {
                        let e = (0, s.$k)(n);
                        (403 === e || 404 === e) && g(t);
                    }
            }
    }
}
function g(t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: t });
}
let w = null;
async function L() {
    let t = c.default.getCurrentUser()?.id ?? null;
    if (null == t || w === t || h.Ay.hasFetchedProjectLimit()) return;
    w = t;
    let e = null;
    try {
        let { body: t } = await i.Bo.get({ url: O.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        e = t.max_projects;
    } catch {}
    (w === t && (w = null),
        c.default.getCurrentUser()?.id === t &&
            l.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: e }));
}
async function k(t, e) {
    let n = await i.Bo.get({ url: O.Rsh.CONJURE_PROJECT(t), rejectWithError: !1, signal: e });
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
        n = (t.flags ?? E.Zh.PUBLIC) | ("guild" === t.install_scope ? E.Zh.NATIVE_APP_CHANNELS : 0);
    try {
        let { body: r } = await i.Bo.post({
            url: O.Rsh.CONJURE_PROJECTS,
            body: { ...t, flags: n },
            rejectWithError: !1,
        });
        e = r;
    } catch (t) {
        throw new s.DS((0, s.hj)(t), (0, s.$k)(t));
    }
    return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: e }), e.id);
}
async function j(t, e) {
    let n = await i.Bo.patch({ url: O.Rsh.CONJURE_PROJECT(t), body: e, rejectWithError: !1 });
    return (n.ok && l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
function m(t, e) {
    return j(t, e);
}
async function v(t, e) {
    let n = await j(t, { icon: e });
    if (n.ok) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, o.TA)(t);
            } catch {}
    }
    return n;
}
function b(t, e) {
    return j(t, e);
}
async function B(t) {
    let e;
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: t });
    try {
        e = await i.Bo.del({ url: O.Rsh.CONJURE_PROJECT(t), rejectWithError: !1 });
    } catch (e) {
        throw (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e);
    }
    return (
        l.h.dispatch({ type: e.ok ? "CONJURE_PROJECT_DELETE_SUCCESS" : "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e
    );
}
function F(t, e) {
    B(t).then((t) => {
        t.ok || e();
    }, e);
}
async function H(t, e) {
    let { alsoRemovePreviewBot: n } = e;
    try {
        return await i.Bo.post({
            url: O.Rsh.CONJURE_PROJECT_UNPUBLISH(t),
            body: { also_remove_preview_bot: n },
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
        a = n ? _.preview_application_id : _.application_id;
    (null != a &&
        (l.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: a }),
        await (0, o.TA)(a),
        await (0, u.un)(a, { force: !0 }).catch(() => {}),
        n ? r && !i && (0, p.k)(a) : f(a)),
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
function Z(t) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: t });
}
