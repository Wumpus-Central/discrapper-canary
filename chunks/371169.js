(n.d(e, {
    BD: () => y,
    CW: () => g,
    GG: () => W,
    HV: () => M,
    I$: () => v,
    Is: () => T,
    K: () => b,
    Lw: () => G,
    M7: () => j,
    Ru: () => D,
    U1: () => w,
    Zq: () => H,
    b8: () => J,
    dm: () => B,
    gA: () => L,
    hF: () => f,
    tZ: () => F,
    xx: () => m,
}),
    n(938796));
var i = n(636537),
    r = n(499979),
    _ = n(73153),
    a = n(382483),
    o = n(627363),
    l = n(573163),
    u = n(287809),
    c = n(164892),
    E = n(639519),
    s = n(517244),
    p = n(385081),
    d = n(89505),
    R = n(260498),
    h = n(652215),
    C = n(790782);
function T(t, e, n) {
    (0, p.Hy)(t, {
        location: "publish",
        code: p.xf.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: e,
        isPreview: n,
    });
}
function O(t) {
    d.A.reloadAppFrames(t);
}
function y(t) {
    let e = R.Ay.getProject(t);
    null != e && (O(e.application_id), O(e.preview_application_id ?? null));
}
let A = null,
    I = null;
async function f(t) {
    let e = t ?? null;
    if (R.Ay.getProjectsFetchState()?.type === "loading") {
        null != e && e !== A && (I = e);
        return;
    }
    ((A = e), _.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: e }));
    try {
        let { body: n } = await i.Bo.get({
            url: h.Rsh.CONJURE_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        (_.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e }), P());
    } catch {
        _.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: e });
    }
    let n = I;
    ((I = null), null != n && n !== e && f(n));
}
let N = !1;
async function P() {
    if (!N) {
        for (let t of ((N = !0), l.Ay.getResourceIds(C.P.CONJURING_PROJECT)))
            if (null == R.Ay.getProject(t)) {
                if (0 === l.Ay.getMentionCount(t, C.P.CONJURING_PROJECT)) {
                    U(t);
                    continue;
                }
                if ((await (0, r.yy)(5e3 * Math.random()), null == R.Ay.getProject(t)))
                    try {
                        await w(t);
                    } catch (n) {
                        let e = (0, E.$k)(n);
                        (403 === e || 404 === e) && U(t);
                    }
            }
    }
}
function U(t) {
    _.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: t });
}
let S = null;
async function J() {
    let t = u.default.getCurrentUser()?.id ?? null;
    if (null == t || S === t || R.Ay.hasFetchedProjectLimit()) return;
    S = t;
    let e = null;
    try {
        let { body: t } = await i.Bo.get({ url: h.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        e = t.max_projects;
    } catch {}
    (S === t && (S = null),
        u.default.getCurrentUser()?.id === t &&
            _.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: e }));
}
async function w(t, e) {
    let n = await i.Bo.get({ url: h.Rsh.CONJURE_PROJECT(t), rejectWithError: !1, signal: e });
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
async function L(t) {
    let e,
        n = (t.flags ?? c.Zh.PUBLIC) | ("guild" === t.install_scope ? c.Zh.NATIVE_APP_CHANNELS : 0);
    try {
        let { body: r } = await i.Bo.post({
            url: h.Rsh.CONJURE_PROJECTS,
            body: { ...t, flags: n },
            rejectWithError: !1,
        });
        e = r;
    } catch (t) {
        throw new E.DS((0, E.hj)(t), (0, E.$k)(t));
    }
    return (_.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: e }), e.id);
}
async function k(t, e) {
    let n = await i.Bo.patch({ url: h.Rsh.CONJURE_PROJECT(t), body: e, rejectWithError: !1 });
    return (n.ok && _.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
function g(t, e) {
    return k(t, e);
}
async function D(t, e) {
    let n = await k(t, { icon: e });
    if (n.ok) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, o.TA)(t);
            } catch {}
    }
    return n;
}
function j(t, e) {
    return k(t, e);
}
async function m(t) {
    let e;
    _.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: t });
    try {
        e = await i.Bo.del({ url: h.Rsh.CONJURE_PROJECT(t), rejectWithError: !1 });
    } catch (e) {
        throw (_.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e);
    }
    return (
        _.h.dispatch({ type: e.ok ? "CONJURE_PROJECT_DELETE_SUCCESS" : "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e
    );
}
function b(t, e) {
    m(t).then((t) => {
        t.ok || e();
    }, e);
}
function B(t, e) {
    _.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: t, projectId: e });
}
async function F(t, e) {
    let { isPreview: n } = e,
        { bot_permissions_changed: i, integration_installed: r, project: l } = (await w(t)).body,
        u = n ? l.preview_application_id : l.application_id;
    (null != u &&
        (_.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: u }),
        await (0, o.TA)(u),
        await (0, a.un)(u, { force: !0 }).catch(() => {}),
        n ? r && !i && (0, s.k)(u) : O(u)),
        (0, p.w2)(t, { isPreview: n }));
}
function v(t, e) {
    _.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e });
}
function H(t) {
    _.h.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function M(t) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function W(t) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
function G(t) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: t });
}
