(n.d(t, {
    $N: () => et,
    A5: () => Q,
    CG: () => z,
    CW: () => ei,
    GO: () => eo,
    K: () => el,
    M7: () => er,
    Ni: () => R,
    U1: () => X,
    _b: () => en,
    b8: () => Y,
    dm: () => ed,
    gA: () => q,
    hF: () => v,
    iR: () => Z,
    l5: () => ea,
    su: () => V,
    tF: () => H,
    tf: () => $,
    xx: () => es,
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
    p = n(691344),
    T = n(153207),
    m = n(260498),
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
    let s = m.Ay.getIntegrationStatus(e) ?? T.A.getIntegrationStatus(e);
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
async function v(e) {
    let t = e ?? null;
    if (m.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != t && t !== L ? (y = t) : null == t && null != L && (D = !0));
    ((L = t), l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await a.Bo.get({
            url: N.Rsh.CONJURE_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }), (D = !1), M());
    } catch {
        l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = y;
    ((y = null), null != n && n !== t ? v(n) : D && ((D = !1), v()));
}
let b = !1;
async function M() {
    if (!b) {
        for (let e of ((b = !0), u.Ay.getResourceIds(C.P.CONJURING_PROJECT)))
            if (null == m.Ay.getProject(e)) {
                if (!(0, E.tz)(e)) {
                    P(e);
                    continue;
                }
                if ((await (0, s.yy)(5e3 * Math.random()), null == m.Ay.getProject(e)))
                    try {
                        await X(e);
                    } catch (n) {
                        let t = (0, f.$k)(n);
                        (403 === t || 404 === t) && P(e);
                    }
            }
    }
}
function P(e) {
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e });
}
let U = new i.A(3e4, 3e5),
    w = null,
    G = new Set(),
    x = new Set(),
    k = new Set(),
    F = !1,
    B = null;
function V(e) {
    return x.has(e) && null == m.Ay.getProject(e);
}
function H(e) {
    let t = _.default.getCurrentUser()?.id ?? null;
    for (let n of (t !== w && ((w = t), G.clear(), x.clear(), k.clear(), U.cancel()), e))
        (G.has(n) && !x.has(n) && B !== n && null == m.Ay.getProject(n) && G.delete(n), G.has(n) || k.add(n));
    F || U.pending || j();
}
async function j() {
    F = !0;
    let e = [];
    for (let t of k) {
        let n;
        if ((k.delete(t), !G.has(t))) {
            if ((G.add(t), null == m.Ay.getProject(t))) {
                B = t;
                try {
                    (await X(t), (n = 200));
                } catch (e) {
                    n = (0, f.$k)(e);
                }
                ((B = null), 200 !== n && (403 === n || 404 === n ? (x.add(t), P(t)) : (G.delete(t), e.push(t))));
            }
        }
    }
    ((F = !1), 0 === e.length)
        ? U.succeed()
        : U.fail(() => {
              for (let t of e) k.add(t);
              F || j();
          });
}
let W = null;
async function Y() {
    let e = _.default.getCurrentUser()?.id ?? null;
    if (null == e || W === e || m.Ay.hasFetchedProjectLimit()) return;
    W = e;
    let t = null;
    try {
        let { body: e } = await a.Bo.get({ url: N.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        t = e.max_projects;
    } catch {}
    (W === e && (W = null),
        _.default.getCurrentUser()?.id === e &&
            l.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t }));
}
let K = new Map();
function $(e) {
    null == (0, h.KY)(e) && (0, A.Et)(e);
    let t = _.default.getCurrentUser()?.id ?? null,
        n = X(e, void 0, t);
    (n.catch(() => void 0), K.set(e, { read: n, at: Date.now(), userId: t }), (0, p.K)(e));
}
function z(e) {
    let t = K.get(e);
    return (K.delete(e), null == t || t.userId !== (_.default.getCurrentUser()?.id ?? null))
        ? null
        : Date.now() - t.at < 5e3
          ? t.read
          : null;
}
async function X(e, t, n) {
    let i = await a.Bo.get({ url: N.Rsh.CONJURE_PROJECT(e), rejectWithError: !1, signal: t });
    return (
        (void 0 !== n && _.default.getCurrentUser()?.id !== n) ||
            (t?.aborted !== !0 &&
                (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
                O(e, {
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
async function q(e) {
    let { ws_ticket: t, remix_preview: n, ...i } = await J(e);
    return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: i }), i.id);
}
async function Z(e) {
    let t = await J(e),
        { ws_ticket: n, remix_preview: i, ...r } = t;
    return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: r }), t);
}
function Q(e, t) {
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
async function J(e) {
    try {
        let { body: t } = await a.Bo.post({
            url: N.Rsh.CONJURE_PROJECTS,
            body: { ...e, flags: e.flags ?? g.Zh.GUILD_COLLABORATION },
            rejectWithError: !1,
        });
        return (null != t.ws_ticket && (0, A.vG)(t.id, t.ws_ticket), t);
    } catch (e) {
        throw new f.DS((0, f.hj)(e), (0, f.$k)(e));
    }
}
async function ee(e, t) {
    let n = await a.Bo.patch({ url: N.Rsh.CONJURE_PROJECT(e), body: t, rejectWithError: !1 });
    return (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function et(e) {
    let { bot: t } = await (0, c.TA)(e);
    null != t && l.h.dispatch({ type: "USER_UPDATE", user: t });
}
async function en(e) {
    let t = m.Ay.getProject(e)?.preview_application_id;
    null != t && (await et(t));
}
async function ei(e, t) {
    let n = await ee(e, t),
        i = n.body.preview_application_id;
    return (
        null != i &&
            (null != t.name || null != t.icon || null != t.description || "cover_image" in t) &&
            et(i).catch(() => {}),
        n
    );
}
function er(e, t) {
    return ee(e, t);
}
async function ea(e) {
    try {
        let { body: t } = await a.Bo.get({ url: N.Rsh.CONJURE_APPLICATION_CHANNELS(e), rejectWithError: !0 });
        return t;
    } catch {
        return [];
    }
}
async function es(e) {
    let t;
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: e });
    try {
        t = await a.Bo.del({ url: N.Rsh.CONJURE_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e }), t);
}
function el(e, t) {
    es(e).then(() => void 0, t);
}
function eo(e) {
    let t = m.Ay.getProject(e);
    null != t && (X(e).catch(() => {}), (0, o.eO)((0, S.Du)(t), { withMutualGuilds: !0 }).catch(() => {}));
}
function ed(e, t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: e, projectId: t });
}
