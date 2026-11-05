(n.d(t, {
    Ni: () => b,
    A5: () => ei,
    gA: () => et,
    iR: () => en,
    gg: () => x,
    xx: () => eu,
    K: () => e_,
    l5: () => ec,
    $N: () => es,
    b8: () => q,
    U1: () => ee,
    su: () => $,
    a3: () => k,
    listProjects: () => U,
    tF: () => X,
    tf: () => Z,
    hy: () => w,
    GO: () => eE,
    _b: () => el,
    M7: () => ed,
    dm: () => eA,
    CG: () => J,
    CW: () => eo,
}),
    n(321073),
    n(134528),
    n(947204),
    n(938796));
var i = n(158390),
    r = n(991690),
    a = n(620632),
    s = n(499979),
    l = n(73153),
    o = n(803306),
    d = n(730602),
    c = n(627363),
    u = n(218461),
    _ = n(287809),
    E = n(404373),
    A = n(472119),
    f = n(975189),
    h = n(639519),
    I = n(754027),
    p = n(869018),
    m = n(326843),
    T = n(457827),
    g = n(964404),
    S = n(153207),
    N = n(260498),
    C = n(951178),
    O = n(426035),
    R = n(714020),
    L = n(652215),
    y = n(790782);
function D(e, t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: e, integrationStatus: t });
}
function b(e, t) {
    let { project: n, hasActivity: i, integrationInstalled: r, botPermissionsChanged: a } = t;
    l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n });
    let s = N.Ay.getIntegrationStatus(e) ?? S.A.getIntegrationStatus(e);
    D(e, {
        owner_authorization_revoked: s?.owner_authorization_revoked ?? !1,
        ...(s?.preview_app_channels != null ? { preview_app_channels: s.preview_app_channels } : {}),
        preview_ready: !0,
        has_activity: i,
        integration_installed: r,
        bot_permissions_changed: a,
    });
}
let v = null,
    P = null,
    M = !1;
async function U(e) {
    let t = e ?? null;
    if (N.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != t && t !== v ? (P = t) : null == t && null != v && (M = !0));
    ((v = t), l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await a.Bo.get({
            url: L.Rsh.CONJURE_PROJECTS,
            query: null != e ? { guild_id: e } : { include_shared: !0 },
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }),
            G(n.map((e) => e.id)),
            (M = !1),
            (async function () {
                let e = x(),
                    { userId: t } = e;
                if (null != t && N.Ay.getMissingProjectsCheckedUserId() !== t)
                    for (let n of (l.h.dispatch({ type: "CONJURE_MISSING_PROJECTS_CHECK_START", userId: t }),
                    u.Ay.getResourceIds(y.P.CONJURING_PROJECT))) {
                        if (null != N.Ay.getProject(n)) continue;
                        if (!(0, E.tz)(n)) {
                            F(n);
                            continue;
                        }
                        if ((await (0, s.yy)(5e3 * Math.random()), !k(e))) return;
                        if (null != N.Ay.getProject(n)) continue;
                        let t = null;
                        try {
                            await ee(n, void 0, e);
                        } catch (e) {
                            t = (0, h.$k)(e);
                        }
                        if (!k(e)) return;
                        null == t ? G([n]) : (403 === t || 404 === t) && F(n);
                    }
            })());
    } catch {
        l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = P;
    ((P = null),
        N.Ay.isReconnectListPending()
            ? ((M = !1), null != n && n !== t && (P = n), U())
            : null != n && n !== t
              ? U(n)
              : M && ((M = !1), U()));
}
function w() {
    N.Ay.isReconnectListPending() && N.Ay.getProjectsFetchState()?.type !== "loading" && U();
}
function G(e) {
    let t = new Set(u.Ay.getResourceIds(y.P.CONJURING_PROJECT)),
        n = e.filter((e) => t.has(e));
    n.length > 0 && l.h.dispatch({ type: "CONJURE_PARTICIPATING_PROJECTS_MARK", projectIds: n });
}
function x() {
    return { userId: _.default.getCurrentUser()?.id ?? null, generation: N.Ay.getSessionGeneration() };
}
function k(e) {
    return e.generation === N.Ay.getSessionGeneration() && e.userId === (_.default.getCurrentUser()?.id ?? null);
}
function F(e) {
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e });
}
let B = new i.A(3e4, 3e5),
    V = null,
    H = new Set(),
    j = new Set(),
    W = new Set(),
    Y = !1,
    K = null;
function $(e) {
    return j.has(e) && null == N.Ay.getProject(e);
}
function X(e) {
    for (let t of ((null != V && k(V)) || ((V = x()), H.clear(), j.clear(), W.clear(), B.cancel()), e))
        (H.has(t) && !j.has(t) && K !== t && null == N.Ay.getProject(t) && H.delete(t), H.has(t) || W.add(t));
    Y ||
        B.pending ||
        (async function e() {
            Y = !0;
            let t = [];
            for (let e of W)
                (W.delete(e),
                    !H.has(e) &&
                        (H.add(e),
                        null == N.Ay.getProject(e) &&
                            (await (async function (e) {
                                let t,
                                    n = x();
                                K = e;
                                try {
                                    (await ee(e, void 0, n), (t = 200));
                                } catch (e) {
                                    t = (0, h.$k)(e);
                                }
                                return (
                                    (K = null),
                                    200 !== t &&
                                        !!k(n) &&
                                        (403 === t || 404 === t ? (j.add(e), F(e), !1) : (H.delete(e), !0))
                                );
                            })(e)) &&
                            t.push(e)));
            ((Y = !1), 0 === t.length)
                ? B.succeed()
                : B.fail(() => {
                      for (let e of t) W.add(e);
                      Y || e();
                  });
        })();
}
let z = null;
function q() {
    let e = _.default.getCurrentUser()?.id ?? null;
    if (null == e || N.Ay.hasFetchedProjectLimit()) return Promise.resolve();
    if (z?.userId === e) return z.settled;
    let t = (async function (e) {
        let t = null,
            n = null;
        try {
            let { body: e } = await a.Bo.get({ url: L.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
            t = e.max_projects;
        } catch (e) {
            n = (0, R.A)(e);
        }
        (z?.userId === e && (z = null),
            _.default.getCurrentUser()?.id === e &&
                l.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t, failureCode: n }));
    })(e);
    return ((z = { userId: e, settled: t }), t);
}
let Q = new Map();
function Z(e) {
    null == (0, f.KY)(e) && (0, A.Et)(e);
    let t = x(),
        n = ee(e, void 0, t);
    (n.catch(() => void 0), Q.set(e, { read: n, at: Date.now(), session: t }), (0, p.V)(e));
}
function J(e) {
    let t = Q.get(e);
    return (Q.delete(e), null != t && k(t.session) && Date.now() - t.at < 5e3) ? t.read : null;
}
async function ee(e, t, n) {
    let i = await a.Bo.get({ url: L.Rsh.CONJURE_PROJECT(e), rejectWithError: !1, signal: t });
    return (
        (null == n || k(n)) &&
            t?.aborted !== !0 &&
            (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
            D(e, {
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
async function et(e) {
    let { ws_ticket: t, remix_preview: n, ...i } = await er(e);
    return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: i }), i.id);
}
async function en(e) {
    let t = await er(e),
        { ws_ticket: n, remix_preview: i, ...r } = t;
    return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: r }), t);
}
function ei(e, t) {
    (l.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: t.application, isHydrated: !0 }),
        null != t.proxy_ticket && (0, d.WL)(t.proxy_ticket, t.application.id, "0", r.U.APP_CHANNEL),
        D(e, {
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
async function er(e) {
    try {
        let { body: t } = await a.Bo.post({
            url: L.Rsh.CONJURE_PROJECTS,
            body: { ...e, flags: e.flags ?? C.Zh.GUILD_COLLABORATION | C.Zh.PUBLIC },
            rejectWithError: !1,
        });
        return (null != t.ws_ticket && (0, A.vG)(t.id, t.ws_ticket), t);
    } catch (e) {
        throw new h.DS((0, h.hj)(e), (0, h.$k)(e));
    }
}
async function ea(e, t) {
    let n = await a.Bo.patch({ url: L.Rsh.CONJURE_PROJECT(e), body: t, rejectWithError: !1 });
    return (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function es(e) {
    let { bot: t } = await (0, c.TA)(e);
    null != t && l.h.dispatch({ type: "USER_UPDATE", user: t });
}
async function el(e) {
    let t = N.Ay.getProject(e)?.preview_application_id;
    null != t && (await es(t));
}
async function eo(e, t) {
    let n = N.Ay.getProject(e)?.preview_application_id,
        i = await ea(e, t),
        r = i.body.preview_application_id;
    return (
        null != n &&
            n !== r &&
            (function (e) {
                for (let t of (0, I.Mm)(e)) (0, m.A)(t, g.Ay) || (0, T.r)(t.id);
            })(n),
        null != r &&
            (null != t.name ||
                null != t.icon ||
                null != t.description ||
                "cover_image" in t ||
                null != t.uses_preview_app) &&
            es(r).catch(() => {}),
        i
    );
}
function ed(e, t) {
    return ea(e, t);
}
async function ec(e) {
    try {
        let { body: t } = await a.Bo.get({ url: L.Rsh.CONJURE_APPLICATION_CHANNELS(e), rejectWithError: !0 });
        return t;
    } catch {
        return [];
    }
}
async function eu(e) {
    let t;
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: e });
    try {
        t = await a.Bo.del({ url: L.Rsh.CONJURE_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e }), t);
}
function e_(e, t) {
    eu(e).then(() => void 0, t);
}
function eE(e) {
    let t = N.Ay.getProject(e);
    null != t && (ee(e).catch(() => {}), (0, o.eO)((0, O.Du)(t), { withMutualGuilds: !0 }).catch(() => {}));
}
function eA(e, t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: e, projectId: t });
}
