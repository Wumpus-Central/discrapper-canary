(n.d(t, {
    $N: () => ea,
    A5: () => en,
    CG: () => Q,
    CW: () => el,
    GO: () => e_,
    K: () => eu,
    M7: () => eo,
    Ni: () => R,
    U1: () => J,
    _b: () => es,
    b8: () => X,
    dm: () => eE,
    gA: () => ee,
    hy: () => v,
    iR: () => et,
    l5: () => ed,
    listProjects: () => b,
    su: () => W,
    tF: () => Y,
    tf: () => Z,
    xx: () => ec,
}),
    n(321073),
    n(134528),
    n(947204),
    n(938796));
var i = n(158390),
    r = n(991690),
    a = n(636537),
    s = n(499979),
    l = n(73153),
    o = n(803306),
    d = n(730602),
    c = n(627363),
    u = n(573163),
    _ = n(287809),
    E = n(404373),
    A = n(642785),
    h = n(975189),
    f = n(639519),
    I = n(754027),
    p = n(869018),
    m = n(153207),
    T = n(260498),
    g = n(951178),
    S = n(426035),
    N = n(652215),
    C = n(790782);
function O(e, t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: e, integrationStatus: t });
}
function R(e, t) {
    let { project: n, hasActivity: i, integrationInstalled: r, botPermissionsChanged: a } = t;
    l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n });
    let s = T.Ay.getIntegrationStatus(e) ?? m.A.getIntegrationStatus(e);
    O(e, {
        owner_authorization_revoked: s?.owner_authorization_revoked ?? !1,
        ...(s?.preview_app_channels != null ? { preview_app_channels: s.preview_app_channels } : {}),
        preview_ready: !0,
        has_activity: i,
        integration_installed: r,
        bot_permissions_changed: a,
    });
}
let L = null,
    y = null,
    D = !1;
async function b(e) {
    let t = e ?? null;
    if (T.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != t && t !== L ? (y = t) : null == t && null != L && (D = !0));
    ((L = t), l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await a.Bo.get({
            url: N.Rsh.CONJURE_PROJECTS,
            query: null != e ? { guild_id: e } : { include_shared: !0 },
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }),
            P(n.map((e) => e.id)),
            (D = !1),
            M());
    } catch {
        l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = y;
    ((y = null),
        T.Ay.isReconnectListPending()
            ? ((D = !1), null != n && n !== t && (y = n), b())
            : null != n && n !== t
              ? b(n)
              : D && ((D = !1), b()));
}
function v() {
    T.Ay.isReconnectListPending() && T.Ay.getProjectsFetchState()?.type !== "loading" && b();
}
function P(e) {
    let t = new Set(u.Ay.getResourceIds(C.P.CONJURING_PROJECT)),
        n = e.filter((e) => t.has(e));
    n.length > 0 && l.h.dispatch({ type: "CONJURE_PARTICIPATING_PROJECTS_MARK", projectIds: n });
}
async function M() {
    let e = U(),
        { userId: t } = e;
    if (null != t && T.Ay.getMissingProjectsCheckedUserId() !== t)
        for (let n of (l.h.dispatch({ type: "CONJURE_MISSING_PROJECTS_CHECK_START", userId: t }),
        u.Ay.getResourceIds(C.P.CONJURING_PROJECT))) {
            if (null != T.Ay.getProject(n)) continue;
            if (!(0, E.tz)(n)) {
                G(n);
                continue;
            }
            if ((await (0, s.yy)(5e3 * Math.random()), !w(e))) return;
            if (null != T.Ay.getProject(n)) continue;
            let t = null;
            try {
                await J(n, void 0, e);
            } catch (e) {
                t = (0, f.$k)(e);
            }
            if (!w(e)) return;
            null == t ? P([n]) : (403 === t || 404 === t) && G(n);
        }
}
function U() {
    return { userId: _.default.getCurrentUser()?.id ?? null, generation: T.Ay.getSessionGeneration() };
}
function w(e) {
    return e.generation === T.Ay.getSessionGeneration() && e.userId === (_.default.getCurrentUser()?.id ?? null);
}
function G(e) {
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e });
}
let x = new i.A(3e4, 3e5),
    k = null,
    F = new Set(),
    B = new Set(),
    V = new Set(),
    H = !1,
    j = null;
function W(e) {
    return B.has(e) && null == T.Ay.getProject(e);
}
function Y(e) {
    for (let t of ((null != k && w(k)) || ((k = U()), F.clear(), B.clear(), V.clear(), x.cancel()), e))
        (F.has(t) && !B.has(t) && j !== t && null == T.Ay.getProject(t) && F.delete(t), F.has(t) || V.add(t));
    H || x.pending || $();
}
async function K(e) {
    let t,
        n = U();
    j = e;
    try {
        (await J(e, void 0, n), (t = 200));
    } catch (e) {
        t = (0, f.$k)(e);
    }
    return ((j = null), 200 !== t && !!w(n) && (403 === t || 404 === t ? (B.add(e), G(e), !1) : (F.delete(e), !0)));
}
async function $() {
    H = !0;
    let e = [];
    for (let t of V) (V.delete(t), !F.has(t) && (F.add(t), null == T.Ay.getProject(t) && (await K(t)) && e.push(t)));
    ((H = !1), 0 === e.length)
        ? x.succeed()
        : x.fail(() => {
              for (let t of e) V.add(t);
              H || $();
          });
}
let z = null;
async function X() {
    let e = _.default.getCurrentUser()?.id ?? null;
    if (null == e || z === e || T.Ay.hasFetchedProjectLimit()) return;
    z = e;
    let t = null;
    try {
        let { body: e } = await a.Bo.get({ url: N.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        t = e.max_projects;
    } catch {}
    (z === e && (z = null),
        _.default.getCurrentUser()?.id === e &&
            l.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t }));
}
let q = new Map();
function Z(e) {
    null == (0, h.KY)(e) && (0, A.Et)(e);
    let t = U(),
        n = J(e, void 0, t);
    (n.catch(() => void 0), q.set(e, { read: n, at: Date.now(), session: t }), (0, p.V)(e));
}
function Q(e) {
    let t = q.get(e);
    return (q.delete(e), null != t && w(t.session) && Date.now() - t.at < 5e3) ? t.read : null;
}
async function J(e, t, n) {
    let i = await a.Bo.get({ url: N.Rsh.CONJURE_PROJECT(e), rejectWithError: !1, signal: t });
    return (
        (null == n || w(n)) &&
            t?.aborted !== !0 &&
            (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
            O(e, {
                bot_permissions_changed: i.body.bot_permissions_changed,
                integration_installed: i.body.integration_installed,
                preview_ready: i.body.preview_ready,
                has_activity: i.body.has_activity,
                owner_authorization_revoked: i.body.owner_authorization_revoked,
                preview_app_channels: i.body.preview_app_channels,
            })),
        i
    );
}
async function ee(e) {
    let { ws_ticket: t, remix_preview: n, ...i } = await ei(e);
    return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: i }), i.id);
}
async function et(e) {
    let t = await ei(e),
        { ws_ticket: n, remix_preview: i, ...r } = t;
    return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: r }), t);
}
function en(e, t) {
    (l.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: t.application, isHydrated: !0 }),
        null != t.proxy_ticket && (0, d.WL)(t.proxy_ticket, t.application.id, I.kG, r.U.APP_CHANNEL),
        O(e, {
            preview_ready: !0,
            has_activity: t.has_activity,
            preview_app_channels: t.preview_app_channels,
            integration_installed: !1,
            bot_permissions_changed: !1,
            owner_authorization_revoked: !1,
        }),
        l.h.dispatch({
            type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
            projectId: e,
            publishState: "not_live",
            surface: t.has_activity ? "activity" : null,
            previewAppChannels: t.preview_app_channels,
        }));
}
async function ei(e) {
    try {
        let { body: t } = await a.Bo.post({
            url: N.Rsh.CONJURE_PROJECTS,
            body: { ...e, flags: e.flags ?? g.Zh.GUILD_COLLABORATION | g.Zh.PUBLIC },
            rejectWithError: !1,
        });
        return (null != t.ws_ticket && (0, A.vG)(t.id, t.ws_ticket), t);
    } catch (e) {
        throw new f.DS((0, f.hj)(e), (0, f.$k)(e));
    }
}
async function er(e, t) {
    let n = await a.Bo.patch({ url: N.Rsh.CONJURE_PROJECT(e), body: t, rejectWithError: !1 });
    return (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function ea(e) {
    let { bot: t } = await (0, c.TA)(e);
    null != t && l.h.dispatch({ type: "USER_UPDATE", user: t });
}
async function es(e) {
    let t = T.Ay.getProject(e)?.preview_application_id;
    null != t && (await ea(t));
}
async function el(e, t) {
    let n = await er(e, t),
        i = n.body.preview_application_id;
    return (
        null != i &&
            (null != t.name || null != t.icon || null != t.description || "cover_image" in t) &&
            ea(i).catch(() => {}),
        n
    );
}
function eo(e, t) {
    return er(e, t);
}
async function ed(e) {
    try {
        let { body: t } = await a.Bo.get({ url: N.Rsh.CONJURE_APPLICATION_CHANNELS(e), rejectWithError: !0 });
        return t;
    } catch {
        return [];
    }
}
async function ec(e) {
    let t;
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: e });
    try {
        t = await a.Bo.del({ url: N.Rsh.CONJURE_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e }), t);
}
function eu(e, t) {
    ec(e).then(() => void 0, t);
}
function e_(e) {
    let t = T.Ay.getProject(e);
    null != t && (J(e).catch(() => {}), (0, o.eO)((0, S.Du)(t), { withMutualGuilds: !0 }).catch(() => {}));
}
function eE(e, t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: e, projectId: t });
}
