(n.d(e, {
    BD: () => y,
    CW: () => j,
    GG: () => K,
    GO: () => H,
    HV: () => x,
    I$: () => W,
    Is: () => A,
    K: () => B,
    Lw: () => $,
    M7: () => v,
    Ru: () => m,
    U1: () => L,
    YI: () => F,
    Zq: () => V,
    b8: () => w,
    dm: () => M,
    gA: () => k,
    hF: () => P,
    tZ: () => G,
    xx: () => b,
}),
    n(938796));
var i = n(636537),
    r = n(499979),
    _ = n(73153),
    l = n(803306),
    u = n(382483),
    o = n(627363),
    a = n(573163),
    c = n(287809),
    E = n(164892),
    s = n(639519),
    p = n(517244),
    d = n(385081),
    R = n(89505),
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
    N = null;
async function P(t) {
    let e = t ?? null;
    if (h.Ay.getProjectsFetchState()?.type === "loading") {
        null != e && e !== I && (N = e);
        return;
    }
    ((I = e), _.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: e }));
    try {
        let { body: n } = await i.Bo.get({
            url: O.Rsh.CONJURE_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        (_.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e }), S());
    } catch {
        _.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: e });
    }
    let n = N;
    ((N = null), null != n && n !== e && P(n));
}
let U = !1;
async function S() {
    if (!U) {
        for (let t of ((U = !0), a.Ay.getResourceIds(T.P.CONJURING_PROJECT)))
            if (null == h.Ay.getProject(t)) {
                if (0 === a.Ay.getMentionCount(t, T.P.CONJURING_PROJECT)) {
                    J(t);
                    continue;
                }
                if ((await (0, r.yy)(5e3 * Math.random()), null == h.Ay.getProject(t)))
                    try {
                        await L(t);
                    } catch (n) {
                        let e = (0, s.$k)(n);
                        (403 === e || 404 === e) && J(t);
                    }
            }
    }
}
function J(t) {
    _.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: t });
}
let g = null;
async function w() {
    let t = c.default.getCurrentUser()?.id ?? null;
    if (null == t || g === t || h.Ay.hasFetchedProjectLimit()) return;
    g = t;
    let e = null;
    try {
        let { body: t } = await i.Bo.get({ url: O.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        e = t.max_projects;
    } catch {}
    (g === t && (g = null),
        c.default.getCurrentUser()?.id === t &&
            _.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: e }));
}
async function L(t, e) {
    let n = await i.Bo.get({ url: O.Rsh.CONJURE_PROJECT(t), rejectWithError: !1, signal: e });
    if (e?.aborted !== !0 && n.ok) {
        var r;
        (_.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (r = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            }),
            _.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: t, integrationStatus: r }));
    }
    return n;
}
async function k(t) {
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
    return (_.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: e }), e.id);
}
async function D(t, e) {
    let n = await i.Bo.patch({ url: O.Rsh.CONJURE_PROJECT(t), body: e, rejectWithError: !1 });
    return (n.ok && _.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
function j(t, e) {
    return D(t, e);
}
async function m(t, e) {
    let n = await D(t, { icon: e });
    if (n.ok) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, o.TA)(t);
            } catch {}
    }
    return n;
}
function v(t, e) {
    return D(t, e);
}
async function b(t) {
    let e;
    _.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: t });
    try {
        e = await i.Bo.del({ url: O.Rsh.CONJURE_PROJECT(t), rejectWithError: !1 });
    } catch (e) {
        throw (_.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e);
    }
    return (
        _.h.dispatch({ type: e.ok ? "CONJURE_PROJECT_DELETE_SUCCESS" : "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e
    );
}
function B(t, e) {
    b(t).then((t) => {
        t.ok || e();
    }, e);
}
async function F(t, e) {
    let { alsoRemovePreviewBot: n } = e;
    try {
        return await i.Bo.post({
            url: O.Rsh.CONJURE_PROJECT_UNPUBLISH(t),
            body: { also_remove_preview_bot: n },
            rejectWithError: !1,
        });
    } finally {
        H(t);
    }
}
function H(t) {
    let e = h.Ay.getProject(t);
    null != e && (L(t).catch(() => {}), (0, l.eO)((0, C.Du)(e), { withMutualGuilds: !0 }).catch(() => {}));
}
function M(t, e) {
    _.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: t, projectId: e });
}
async function G(t, e) {
    let { isPreview: n } = e,
        { bot_permissions_changed: i, integration_installed: r, project: l } = (await L(t)).body,
        a = n ? l.preview_application_id : l.application_id;
    (null != a &&
        (_.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: a }),
        await (0, o.TA)(a),
        await (0, u.un)(a, { force: !0 }).catch(() => {}),
        n ? r && !i && (0, p.k)(a) : f(a)),
        (0, d.w2)(t, { isPreview: n }));
}
function W(t, e) {
    _.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e });
}
function V(t) {
    _.h.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function x(t) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function K(t) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
function $(t) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: t });
}
