n.d(t, {
    BD: () => E,
    CW: () => S,
    GG: () => G,
    HV: () => F,
    I$: () => W,
    Is: () => w,
    K: () => D,
    Lw: () => B,
    M7: () => j,
    Ru: () => M,
    U1: () => x,
    Zq: () => J,
    b8: () => C,
    dm: () => U,
    gA: () => O,
    hF: () => v,
    oB: () => N,
    tZ: () => L,
    xx: () => k,
});
var i = n(636537),
    r = n(499979),
    l = n(73153),
    a = n(382483),
    o = n(627363),
    u = n(573163),
    s = n(287809),
    d = n(164892),
    c = n(639519),
    f = n(385081),
    h = n(89505),
    p = n(260498),
    g = n(652215),
    m = n(790782);
function w(e, t, n) {
    (0, f.Hy)(e, {
        location: "publish",
        code: f.xf.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: t,
        isPreview: n,
    });
}
function _(e) {
    h.A.reloadAppFrames(e);
}
function E(e) {
    let t = p.Ay.getProject(e);
    null != t && (_(t.application_id), _(t.preview_application_id ?? null));
}
let y = null,
    b = null;
async function v(e) {
    let t = e ?? null;
    if (p.Ay.getProjectsFetchState()?.type === "loading") {
        null != t && t !== y && (b = t);
        return;
    }
    ((y = t), l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await i.Bo.get({
            url: g.Rsh.CONJURE_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }), A());
    } catch {
        l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = b;
    ((b = null), null != n && n !== t && v(n));
}
let I = !1;
async function A() {
    if (!I) {
        for (let e of ((I = !0), u.Ay.getResourceIds(m.P.CONJURING_PROJECT)))
            if (null == p.Ay.getProject(e)) {
                if (0 === u.Ay.getMentionCount(e, m.P.CONJURING_PROJECT)) {
                    T(e);
                    continue;
                }
                if ((await (0, r.yy)(5e3 * Math.random()), null == p.Ay.getProject(e)))
                    try {
                        await x(e);
                    } catch (n) {
                        let t = (0, c.$k)(n);
                        (403 === t || 404 === t) && T(e);
                    }
            }
    }
}
function T(e) {
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e });
}
let R = null;
async function C() {
    let e = s.default.getCurrentUser()?.id ?? null;
    if (null == e || R === e || p.Ay.hasFetchedProjectLimit()) return;
    R = e;
    let t = null;
    try {
        let { body: e } = await i.Bo.get({ url: g.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        t = e.max_projects;
    } catch {}
    (R === e && (R = null),
        s.default.getCurrentUser()?.id === e &&
            l.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t }));
}
async function x(e, t) {
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
async function O(e) {
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
async function P(e, t) {
    let n = await i.Bo.patch({ url: g.Rsh.CONJURE_PROJECT(e), body: t, rejectWithError: !1 });
    return (n.ok && l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
function N(e, t) {
    return P(e, { name: t });
}
function S(e, t) {
    return P(e, t);
}
async function M(e, t) {
    let n = await P(e, { icon: t });
    if (n.ok) {
        let e = n.body.preview_application_id;
        if (null != e)
            try {
                await (0, o.TA)(e);
            } catch {}
    }
    return n;
}
function j(e, t) {
    return P(e, t);
}
async function k(e) {
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
function D(e, t) {
    k(e).then((e) => {
        e.ok || t();
    }, t);
}
function U(e, t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: e, projectId: t });
}
async function L(e, t) {
    let { isPreview: n } = t,
        { bot_permissions_changed: i, integration_installed: r, project: l } = (await x(e)).body,
        u = n ? l.preview_application_id : l.application_id;
    (null != u && (await (0, o.TA)(u), await (0, a.un)(u, { force: !0 }).catch(() => {}), (n && (!r || i)) || _(u)),
        (0, f.w2)(e, { isPreview: n }));
}
function W(e, t) {
    l.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: e, draft: t });
}
function J(e) {
    l.h.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function F(e) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function G(e) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
function B(e) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: e });
}
