n.d(t, {
    BD: () => E,
    CW: () => P,
    GG: () => H,
    HV: () => F,
    I$: () => J,
    Is: () => m,
    K: () => j,
    M7: () => M,
    Ru: () => k,
    U1: () => O,
    Zq: () => W,
    b8: () => R,
    dm: () => D,
    gA: () => N,
    hF: () => y,
    oB: () => x,
    tZ: () => L,
    xx: () => U,
});
var i = n(636537),
    r = n(499979),
    l = n(73153),
    a = n(382483),
    o = n(627363),
    s = n(573163),
    u = n(287809),
    d = n(164892),
    c = n(639519),
    f = n(385081),
    h = n(645070),
    p = n(260498),
    g = n(652215),
    _ = n(790782);
function m(e, t, n) {
    (0, f.Hy)(e, {
        location: "publish",
        code: f.xf.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: t,
        isPreview: n,
    });
}
function w(e) {
    h.A.reloadAppFrames(e);
}
function E(e) {
    let t = p.Ay.getProject(e);
    null != t && (w(t.application_id), w(t.preview_application_id ?? null));
}
let A = null,
    v = null;
async function y(e) {
    let t = e ?? null;
    if (p.Ay.getProjectsFetchState()?.type === "loading") {
        null != t && t !== A && (v = t);
        return;
    }
    ((A = t), l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await i.Bo.get({
            url: g.Rsh.CONJURE_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }), C());
    } catch {
        l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = v;
    ((v = null), null != n && n !== t && y(n));
}
let T = !1;
async function C() {
    if (!T) {
        for (let e of ((T = !0), s.Ay.getResourceIds(_.P.CONJURING_PROJECT)))
            if (null == p.Ay.getProject(e)) {
                if (0 === s.Ay.getMentionCount(e, _.P.CONJURING_PROJECT)) {
                    b(e);
                    continue;
                }
                if ((await (0, r.yy)(5e3 * Math.random()), null == p.Ay.getProject(e)))
                    try {
                        await O(e);
                    } catch (n) {
                        let t = (0, c.$k)(n);
                        (403 === t || 404 === t) && b(e);
                    }
            }
    }
}
function b(e) {
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e });
}
let I = null;
async function R() {
    let e = u.default.getCurrentUser()?.id ?? null;
    if (null == e || I === e || p.Ay.hasFetchedProjectLimit()) return;
    I = e;
    let t = null;
    try {
        let { body: e } = await i.Bo.get({ url: g.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        t = e.max_projects;
    } catch {}
    (I === e && (I = null),
        u.default.getCurrentUser()?.id === e &&
            l.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t }));
}
async function O(e, t) {
    let n = await i.Bo.get({ url: g.Rsh.CONJURE_PROJECT(e), rejectWithError: !1, signal: t });
    if (t?.aborted !== !0 && n.ok) {
        var r;
        (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (r = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            }),
            l.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: e, integrationStatus: r }));
    }
    return n;
}
async function N(e) {
    let t;
    try {
        let { body: n } = await i.Bo.post({
            url: g.Rsh.CONJURE_PROJECTS,
            body: { flags: d.Zh.PUBLIC, ...e },
            rejectWithError: !1,
        });
        t = n;
    } catch (e) {
        throw new c.DS((0, c.hj)(e), (0, c.$k)(e));
    }
    return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: t }), t.id);
}
async function S(e, t) {
    let n = await i.Bo.patch({ url: g.Rsh.CONJURE_PROJECT(e), body: t, rejectWithError: !1 });
    return (n.ok && l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
function x(e, t) {
    return S(e, { name: t });
}
function P(e, t) {
    return S(e, t);
}
async function k(e, t) {
    let n = await S(e, { icon: t });
    if (n.ok) {
        let e = n.body.preview_application_id;
        if (null != e)
            try {
                await (0, o.TA)(e);
            } catch {}
    }
    return n;
}
function M(e, t) {
    return S(e, t);
}
async function U(e) {
    let t;
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: e });
    try {
        t = await i.Bo.del({ url: g.Rsh.CONJURE_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (
        l.h.dispatch({ type: t.ok ? "CONJURE_PROJECT_DELETE_SUCCESS" : "CONJURE_PROJECT_DELETE_FAIL", projectId: e }), t
    );
}
function j(e, t) {
    U(e).then((e) => {
        e.ok || t();
    }, t);
}
function D(e, t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: e, projectId: t });
}
async function L(e, t) {
    let { isPreview: n } = t,
        { bot_permissions_changed: i, integration_installed: r, project: l } = (await O(e)).body,
        s = n ? l.preview_application_id : l.application_id;
    (null != s && (await (0, o.TA)(s), await (0, a.un)(s, { force: !0 }).catch(() => {}), (n && (!r || i)) || w(s)),
        (0, f.w2)(e, { isPreview: n }));
}
function J(e, t) {
    l.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: e, draft: t });
}
function W(e) {
    l.h.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function F(e) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function H(e) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
