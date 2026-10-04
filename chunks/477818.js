n.d(t, {
    CW: () => P,
    Eo: () => E,
    GG: () => V,
    HV: () => U,
    I$: () => L,
    Is: () => m,
    K: () => D,
    M7: () => M,
    Ru: () => k,
    U1: () => O,
    Zq: () => W,
    b8: () => S,
    dm: () => B,
    gA: () => C,
    hF: () => T,
    oB: () => x,
    tZ: () => G,
    xx: () => j,
});
var i = n(636537),
    r = n(499979),
    l = n(73153),
    a = n(382483),
    o = n(627363),
    s = n(573163),
    u = n(287809),
    d = n(164892),
    c = n(757575),
    f = n(489586),
    h = n(488671),
    p = n(26278),
    g = n(652215),
    _ = n(790782);
function m(e, t, n) {
    (0, c.Z0)(e, {
        location: "publish",
        code: c.xA.PUBLISH_FAILED,
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
let I = null,
    A = null;
async function T(e) {
    let t = e ?? null;
    if (p.Ay.getProjectsFetchState()?.type === "loading") {
        null != t && t !== I && (A = t);
        return;
    }
    ((I = t), l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await i.Bo.get({
            url: g.Rsh.VIBEGRATIONS_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }), y());
    } catch {
        l.h.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = A;
    ((A = null), null != n && n !== t && T(n));
}
let v = !1;
async function y() {
    if (!v) {
        for (let e of ((v = !0), s.Ay.getResourceIds(_.P.CONJURING_PROJECT)))
            if (null == p.Ay.getProject(e)) {
                if (0 === s.Ay.getMentionCount(e, _.P.CONJURING_PROJECT)) {
                    b(e);
                    continue;
                }
                if ((await (0, r.yy)(5e3 * Math.random()), null == p.Ay.getProject(e)))
                    try {
                        await O(e);
                    } catch (n) {
                        let t = (0, f.$k)(n);
                        (403 === t || 404 === t) && b(e);
                    }
            }
    }
}
function b(e) {
    l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: e });
}
let R = null;
async function S() {
    let e = u.default.getCurrentUser()?.id ?? null;
    if (null == e || R === e || p.Ay.hasFetchedProjectLimit()) return;
    R = e;
    let t = null;
    try {
        let { body: e } = await i.Bo.get({ url: g.Rsh.VIBEGRATIONS_PROJECT_LIMIT, rejectWithError: !0 });
        t = e.max_projects;
    } catch {}
    (R === e && (R = null),
        u.default.getCurrentUser()?.id === e &&
            l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t }));
}
async function O(e, t) {
    let n = await i.Bo.get({ url: g.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1, signal: t });
    if (t?.aborted !== !0 && n.ok) {
        var r;
        (l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (r = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            }),
            l.h.dispatch({
                type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE",
                projectId: e,
                integrationStatus: r,
            }));
    }
    return n;
}
async function C(e) {
    let t;
    try {
        let { body: n } = await i.Bo.post({
            url: g.Rsh.VIBEGRATIONS_PROJECTS,
            body: { flags: d.A2.PUBLIC, ...e },
            rejectWithError: !1,
        });
        t = n;
    } catch (e) {
        throw new f.uQ((0, f.hj)(e), (0, f.$k)(e));
    }
    return (l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: t }), t.id);
}
async function N(e, t) {
    let n = await i.Bo.patch({ url: g.Rsh.VIBEGRATIONS_PROJECT(e), body: t, rejectWithError: !1 });
    return (n.ok && l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
function x(e, t) {
    return N(e, { name: t });
}
function P(e, t) {
    return N(e, t);
}
async function k(e, t) {
    let n = await N(e, { icon: t });
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
    return N(e, t);
}
async function j(e) {
    let t;
    l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_START", projectId: e });
    try {
        t = await i.Bo.del({ url: g.Rsh.VIBEGRATIONS_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (
        l.h.dispatch({
            type: t.ok ? "VIBEGRATIONS_PROJECT_DELETE_SUCCESS" : "VIBEGRATIONS_PROJECT_DELETE_FAIL",
            projectId: e,
        }),
        t
    );
}
function D(e, t) {
    j(e).then((e) => {
        e.ok || t();
    }, t);
}
function B(e, t) {
    l.h.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId: e, projectId: t });
}
async function G(e, t) {
    let { isPreview: n } = t,
        { bot_permissions_changed: i, integration_installed: r, project: l } = (await O(e)).body,
        s = n ? l.preview_application_id : l.application_id;
    (null != s && (await (0, o.TA)(s), await (0, a.un)(s, { force: !0 }).catch(() => {}), (n && (!r || i)) || w(s)),
        (0, c.qs)(e, { isPreview: n }));
}
function L(e, t) {
    l.h.dispatch({ type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId: e, draft: t });
}
function W(e) {
    l.h.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
function U(e) {
    l.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function V(e) {
    l.h.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
