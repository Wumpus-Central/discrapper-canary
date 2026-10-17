(n.d(t, {
    CW: () => $,
    GO: () => ee,
    K: () => J,
    M7: () => q,
    Ni: () => S,
    Ru: () => z,
    U1: () => H,
    Vl: () => X,
    b8: () => k,
    dm: () => et,
    gA: () => j,
    gM: () => K,
    hF: () => R,
    l5: () => Z,
    tF: () => w,
    tf: () => V,
    xx: () => Q,
}),
    n(321073),
    n(938796));
var i = n(158390),
    r = n(636537),
    a = n(499979),
    s = n(73153),
    l = n(803306),
    o = n(627363),
    d = n(573163),
    c = n(287809),
    u = n(404373),
    _ = n(382541),
    E = n(975189),
    A = n(639519),
    h = n(153207),
    f = n(260498),
    I = n(951178),
    p = n(426035),
    T = n(652215),
    m = n(790782);
function g(e, t) {
    s.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: e, integrationStatus: t });
}
function S(e, t) {
    let { project: n, hasActivity: i, integrationInstalled: r, botPermissionsChanged: a } = t;
    s.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n });
    let l = f.Ay.getIntegrationStatus(e) ?? h.A.getIntegrationStatus(e);
    g(e, {
        owner_authorization_revoked: l?.owner_authorization_revoked ?? !1,
        ...(l?.preview_app_channels != null ? { preview_app_channels: l.preview_app_channels } : {}),
        preview_ready: !0,
        has_activity: i,
        integration_installed: r,
        bot_permissions_changed: a,
    });
}
let N = null,
    C = null,
    O = !1;
async function R(e) {
    let t = e ?? null;
    if (f.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != t && t !== N ? (C = t) : null == t && null != N && (O = !0));
    ((N = t), s.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await r.Bo.get({
            url: T.Rsh.CONJURE_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        (s.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }), (O = !1), y());
    } catch {
        s.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = C;
    ((C = null), null != n && n !== t ? R(n) : O && ((O = !1), R()));
}
let L = !1;
async function y() {
    if (!L) {
        for (let e of ((L = !0), d.Ay.getResourceIds(m.P.CONJURING_PROJECT)))
            if (null == f.Ay.getProject(e)) {
                if (!(0, u.tz)(e)) {
                    D(e);
                    continue;
                }
                if ((await (0, a.yy)(5e3 * Math.random()), null == f.Ay.getProject(e)))
                    try {
                        await H(e);
                    } catch (n) {
                        let t = (0, A.$k)(n);
                        (403 === t || 404 === t) && D(e);
                    }
            }
    }
}
function D(e) {
    s.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e });
}
let v = new i.A(3e4, 3e5),
    b = null,
    P = new Set(),
    M = new Set(),
    U = !1;
function w(e) {
    let t = c.default.getCurrentUser()?.id ?? null;
    for (let n of (t !== b && ((b = t), P.clear(), M.clear(), v.cancel()), e)) P.has(n) || M.add(n);
    U || v.pending || G();
}
async function G() {
    U = !0;
    let e = [];
    for (let t of M) {
        let n;
        if ((M.delete(t), !P.has(t))) {
            if ((P.add(t), null == f.Ay.getProject(t))) {
                try {
                    (await H(t), (n = 200));
                } catch (e) {
                    n = (0, A.$k)(e);
                }
                200 !== n && (403 === n || 404 === n ? D(t) : (P.delete(t), e.push(t)));
            }
        }
    }
    ((U = !1), 0 === e.length)
        ? v.succeed()
        : v.fail(() => {
              for (let t of e) M.add(t);
              U || G();
          });
}
let x = null;
async function k() {
    let e = c.default.getCurrentUser()?.id ?? null;
    if (null == e || x === e || f.Ay.hasFetchedProjectLimit()) return;
    x = e;
    let t = null;
    try {
        let { body: e } = await r.Bo.get({ url: T.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        t = e.max_projects;
    } catch {}
    (x === e && (x = null),
        c.default.getCurrentUser()?.id === e &&
            s.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t }));
}
let F = new Set(),
    B = null;
function V(e) {
    let t = c.default.getCurrentUser()?.id ?? null;
    (t !== B && ((B = t), F.clear()),
        null == (0, E.KY)(e) && (0, _.Et)(e),
        F.has(e) || null != f.Ay.getIntegrationStatus(e) || (F.add(e), H(e, void 0, t).catch(() => F.delete(e))));
}
async function H(e, t, n) {
    let i = await r.Bo.get({ url: T.Rsh.CONJURE_PROJECT(e), rejectWithError: !1, signal: t });
    return (
        (void 0 !== n && c.default.getCurrentUser()?.id !== n) ||
            (t?.aborted !== !0 &&
                (s.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
                g(e, {
                    bot_permissions_changed: i.body.bot_permissions_changed,
                    integration_installed: i.body.integration_installed,
                    preview_ready: i.body.preview_ready,
                    has_activity: i.body.has_activity,
                    owner_authorization_revoked: i.body.owner_authorization_revoked,
                    preview_app_channels: i.body.preview_app_channels,
                }))),
        i
    );
}
async function j(e) {
    let t,
        n = e.flags ?? I.Zh.GUILD_COLLABORATION;
    try {
        let {
            body: { ws_ticket: i, ...a },
        } = await r.Bo.post({ url: T.Rsh.CONJURE_PROJECTS, body: { ...e, flags: n }, rejectWithError: !1 });
        ((t = a), null != i && (0, _.vG)(t.id, i));
    } catch (e) {
        throw new A.DS((0, A.hj)(e), (0, A.$k)(e));
    }
    return (s.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: t }), t.id);
}
async function W(e, t) {
    let n = await r.Bo.patch({ url: T.Rsh.CONJURE_PROJECT(e), body: t, rejectWithError: !1 });
    return (s.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
let Y = new Map();
function K(e) {
    return Y.get(e) ?? Promise.resolve();
}
async function $(e, t) {
    let n = await W(e, t),
        i = n.body.preview_application_id;
    if (null != i && (null != t.icon || null != t.description || "cover_image" in t)) {
        let e = (0, o.TA)(i)
            .catch(() => {})
            .then(() => {
                Y.get(i) === e && Y.delete(i);
            });
        Y.set(i, e);
    }
    return n;
}
function z(e, t) {
    return $(e, { icon: t });
}
function X(e, t) {
    return $(e, { cover_image: t });
}
function q(e, t) {
    return W(e, t);
}
async function Z(e) {
    try {
        let { body: t } = await r.Bo.get({ url: T.Rsh.CONJURE_APPLICATION_CHANNELS(e), rejectWithError: !0 });
        return t;
    } catch {
        return [];
    }
}
async function Q(e) {
    let t;
    s.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: e });
    try {
        t = await r.Bo.del({ url: T.Rsh.CONJURE_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (s.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (s.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e }), t);
}
function J(e, t) {
    Q(e).then(() => void 0, t);
}
function ee(e) {
    let t = f.Ay.getProject(e);
    null != t && (H(e).catch(() => {}), (0, l.eO)((0, p.Du)(t), { withMutualGuilds: !0 }).catch(() => {}));
}
function et(e, t) {
    s.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: e, projectId: t });
}
