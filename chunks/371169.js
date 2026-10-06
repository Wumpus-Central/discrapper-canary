(n.d(e, {
    BD: () => O,
    CW: () => k,
    GG: () => M,
    HV: () => W,
    I$: () => v,
    Is: () => C,
    K: () => B,
    Lw: () => G,
    M7: () => j,
    Ru: () => D,
    U1: () => S,
    Zq: () => H,
    b8: () => J,
    dm: () => b,
    gA: () => w,
    hF: () => A,
    oB: () => g,
    tZ: () => F,
    xx: () => m,
}),
    n(938796));
var i = n(636537),
    r = n(499979),
    _ = n(73153),
    o = n(382483),
    a = n(627363),
    l = n(573163),
    u = n(287809),
    c = n(164892),
    E = n(639519),
    s = n(385081),
    p = n(89505),
    d = n(260498),
    R = n(652215),
    h = n(790782);
function C(t, e, n) {
    (0, s.Hy)(t, {
        location: "publish",
        code: s.xf.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: e,
        isPreview: n,
    });
}
function T(t) {
    p.A.reloadAppFrames(t);
}
function O(t) {
    let e = d.Ay.getProject(t);
    null != e && (T(e.application_id), T(e.preview_application_id ?? null));
}
let y = null,
    f = null;
async function A(t) {
    let e = t ?? null;
    if (d.Ay.getProjectsFetchState()?.type === "loading") {
        null != e && e !== y && (f = e);
        return;
    }
    ((y = e), _.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: e }));
    try {
        let { body: n } = await i.Bo.get({
            url: R.Rsh.CONJURE_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        (_.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e }), U());
    } catch {
        _.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: e });
    }
    let n = f;
    ((f = null), null != n && n !== e && A(n));
}
let I = !1;
async function U() {
    if (!I) {
        for (let t of ((I = !0), l.Ay.getResourceIds(h.P.CONJURING_PROJECT)))
            if (null == d.Ay.getProject(t)) {
                if (0 === l.Ay.getMentionCount(t, h.P.CONJURING_PROJECT)) {
                    N(t);
                    continue;
                }
                if ((await (0, r.yy)(5e3 * Math.random()), null == d.Ay.getProject(t)))
                    try {
                        await S(t);
                    } catch (n) {
                        let e = (0, E.$k)(n);
                        (403 === e || 404 === e) && N(t);
                    }
            }
    }
}
function N(t) {
    _.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: t });
}
let P = null;
async function J() {
    let t = u.default.getCurrentUser()?.id ?? null;
    if (null == t || P === t || d.Ay.hasFetchedProjectLimit()) return;
    P = t;
    let e = null;
    try {
        let { body: t } = await i.Bo.get({ url: R.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        e = t.max_projects;
    } catch {}
    (P === t && (P = null),
        u.default.getCurrentUser()?.id === t &&
            _.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: e }));
}
async function S(t, e) {
    let n = await i.Bo.get({ url: R.Rsh.CONJURE_PROJECT(t), rejectWithError: !1, signal: e });
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
async function w(t) {
    let e,
        n = (t.flags ?? c.Zh.PUBLIC) | ("guild" === t.install_scope ? c.Zh.NATIVE_APP_CHANNELS : 0);
    try {
        let { body: r } = await i.Bo.post({
            url: R.Rsh.CONJURE_PROJECTS,
            body: { ...t, flags: n },
            rejectWithError: !1,
        });
        e = r;
    } catch (t) {
        throw new E.DS((0, E.hj)(t), (0, E.$k)(t));
    }
    return (_.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: e }), e.id);
}
async function L(t, e) {
    let n = await i.Bo.patch({ url: R.Rsh.CONJURE_PROJECT(t), body: e, rejectWithError: !1 });
    return (n.ok && _.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
function g(t, e) {
    return L(t, { name: e });
}
function k(t, e) {
    return L(t, e);
}
async function D(t, e) {
    let n = await L(t, { icon: e });
    if (n.ok) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, a.TA)(t);
            } catch {}
    }
    return n;
}
function j(t, e) {
    return L(t, e);
}
async function m(t) {
    let e;
    _.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: t });
    try {
        e = await i.Bo.del({ url: R.Rsh.CONJURE_PROJECT(t), rejectWithError: !1 });
    } catch (e) {
        throw (_.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e);
    }
    return (
        _.h.dispatch({ type: e.ok ? "CONJURE_PROJECT_DELETE_SUCCESS" : "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e
    );
}
function B(t, e) {
    m(t).then((t) => {
        t.ok || e();
    }, e);
}
function b(t, e) {
    _.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: t, projectId: e });
}
async function F(t, e) {
    let { isPreview: n } = e,
        { bot_permissions_changed: i, integration_installed: r, project: _ } = (await S(t)).body,
        l = n ? _.preview_application_id : _.application_id;
    (null != l && (await (0, a.TA)(l), await (0, o.un)(l, { force: !0 }).catch(() => {}), (n && (!r || i)) || T(l)),
        (0, s.w2)(t, { isPreview: n }));
}
function v(t, e) {
    _.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e });
}
function H(t) {
    _.h.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width: t });
}
function W(t) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function M(t) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
function G(t) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: t });
}
