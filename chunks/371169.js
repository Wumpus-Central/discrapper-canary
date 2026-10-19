(n.d(t, {
    $N: () => K,
    CG: () => H,
    CW: () => z,
    GO: () => J,
    K: () => Q,
    M7: () => X,
    Ni: () => N,
    U1: () => j,
    _b: () => $,
    b8: () => F,
    dm: () => ee,
    gA: () => W,
    hF: () => L,
    l5: () => q,
    tF: () => G,
    tf: () => V,
    xx: () => Z,
}),
    n(321073),
    n(134528),
    n(947204),
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
    h = n(691344),
    f = n(153207),
    I = n(260498),
    p = n(951178),
    T = n(426035),
    m = n(652215),
    g = n(790782);
function S(e, t) {
    s.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: e, integrationStatus: t });
}
function N(e, t) {
    let { project: n, hasActivity: i, integrationInstalled: r, botPermissionsChanged: a } = t;
    s.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n });
    let l = I.Ay.getIntegrationStatus(e) ?? f.A.getIntegrationStatus(e);
    S(e, {
        owner_authorization_revoked: l?.owner_authorization_revoked ?? !1,
        ...(l?.preview_app_channels != null ? { preview_app_channels: l.preview_app_channels } : {}),
        preview_ready: !0,
        has_activity: i,
        integration_installed: r,
        bot_permissions_changed: a,
    });
}
let C = null,
    O = null,
    R = !1;
async function L(e) {
    let t = e ?? null;
    if (I.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != t && t !== C ? (O = t) : null == t && null != C && (R = !0));
    ((C = t), s.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await r.Bo.get({
            url: m.Rsh.CONJURE_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        (s.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }), (R = !1), D());
    } catch {
        s.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = O;
    ((O = null), null != n && n !== t ? L(n) : R && ((R = !1), L()));
}
let y = !1;
async function D() {
    if (!y) {
        for (let e of ((y = !0), d.Ay.getResourceIds(g.P.CONJURING_PROJECT)))
            if (null == I.Ay.getProject(e)) {
                if (!(0, u.tz)(e)) {
                    v(e);
                    continue;
                }
                if ((await (0, a.yy)(5e3 * Math.random()), null == I.Ay.getProject(e)))
                    try {
                        await j(e);
                    } catch (n) {
                        let t = (0, A.$k)(n);
                        (403 === t || 404 === t) && v(e);
                    }
            }
    }
}
function v(e) {
    s.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e });
}
let b = new i.A(3e4, 3e5),
    M = null,
    P = new Set(),
    U = new Set(),
    w = !1;
function G(e) {
    let t = c.default.getCurrentUser()?.id ?? null;
    for (let n of (t !== M && ((M = t), P.clear(), U.clear(), b.cancel()), e)) P.has(n) || U.add(n);
    w || b.pending || x();
}
async function x() {
    w = !0;
    let e = [];
    for (let t of U) {
        let n;
        if ((U.delete(t), !P.has(t))) {
            if ((P.add(t), null == I.Ay.getProject(t))) {
                try {
                    (await j(t), (n = 200));
                } catch (e) {
                    n = (0, A.$k)(e);
                }
                200 !== n && (403 === n || 404 === n ? v(t) : (P.delete(t), e.push(t)));
            }
        }
    }
    ((w = !1), 0 === e.length)
        ? b.succeed()
        : b.fail(() => {
              for (let t of e) U.add(t);
              w || x();
          });
}
let k = null;
async function F() {
    let e = c.default.getCurrentUser()?.id ?? null;
    if (null == e || k === e || I.Ay.hasFetchedProjectLimit()) return;
    k = e;
    let t = null;
    try {
        let { body: e } = await r.Bo.get({ url: m.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        t = e.max_projects;
    } catch {}
    (k === e && (k = null),
        c.default.getCurrentUser()?.id === e &&
            s.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t }));
}
let B = new Map();
function V(e) {
    null == (0, E.KY)(e) && (0, _.Et)(e);
    let t = c.default.getCurrentUser()?.id ?? null,
        n = j(e, void 0, t);
    (n.catch(() => void 0), B.set(e, { read: n, at: Date.now(), userId: t }), (0, h.K)(e));
}
function H(e) {
    let t = B.get(e);
    return (B.delete(e), null == t || t.userId !== (c.default.getCurrentUser()?.id ?? null))
        ? null
        : Date.now() - t.at < 5e3
          ? t.read
          : null;
}
async function j(e, t, n) {
    let i = await r.Bo.get({ url: m.Rsh.CONJURE_PROJECT(e), rejectWithError: !1, signal: t });
    return (
        (void 0 !== n && c.default.getCurrentUser()?.id !== n) ||
            (t?.aborted !== !0 &&
                (s.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
                S(e, {
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
async function W(e) {
    let t,
        n = e.flags ?? p.Zh.GUILD_COLLABORATION;
    try {
        let {
            body: { ws_ticket: i, ...a },
        } = await r.Bo.post({ url: m.Rsh.CONJURE_PROJECTS, body: { ...e, flags: n }, rejectWithError: !1 });
        ((t = a), null != i && (0, _.vG)(t.id, i));
    } catch (e) {
        throw new A.DS((0, A.hj)(e), (0, A.$k)(e));
    }
    return (s.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: t }), t.id);
}
async function Y(e, t) {
    let n = await r.Bo.patch({ url: m.Rsh.CONJURE_PROJECT(e), body: t, rejectWithError: !1 });
    return (s.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function K(e) {
    let { bot: t } = await (0, o.TA)(e);
    null != t && s.h.dispatch({ type: "USER_UPDATE", user: t });
}
async function $(e) {
    let t = I.Ay.getProject(e)?.preview_application_id;
    null != t && (await K(t));
}
async function z(e, t) {
    let n = await Y(e, t),
        i = n.body.preview_application_id;
    return (
        null != i &&
            (null != t.name || null != t.icon || null != t.description || "cover_image" in t) &&
            K(i).catch(() => {}),
        n
    );
}
function X(e, t) {
    return Y(e, t);
}
async function q(e) {
    try {
        let { body: t } = await r.Bo.get({ url: m.Rsh.CONJURE_APPLICATION_CHANNELS(e), rejectWithError: !0 });
        return t;
    } catch {
        return [];
    }
}
async function Z(e) {
    let t;
    s.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: e });
    try {
        t = await r.Bo.del({ url: m.Rsh.CONJURE_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (s.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (s.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e }), t);
}
function Q(e, t) {
    Z(e).then(() => void 0, t);
}
function J(e) {
    let t = I.Ay.getProject(e);
    null != t && (j(e).catch(() => {}), (0, l.eO)((0, T.Du)(t), { withMutualGuilds: !0 }).catch(() => {}));
}
function ee(e, t) {
    s.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: e, projectId: t });
}
