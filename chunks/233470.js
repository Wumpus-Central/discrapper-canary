(n.d(t, {
    Ni: () => D,
    A5: () => en,
    gA: () => ee,
    iR: () => et,
    xx: () => ec,
    K: () => eu,
    l5: () => ed,
    $N: () => ea,
    b8: () => z,
    U1: () => J,
    su: () => K,
    listProjects: () => M,
    tF: () => $,
    tf: () => Z,
    hy: () => U,
    GO: () => e_,
    _b: () => es,
    M7: () => eo,
    dm: () => eE,
    CG: () => Q,
    CW: () => el,
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
    h = n(975189),
    f = n(639519),
    I = n(754027),
    p = n(869018),
    m = n(326843),
    g = n(457827),
    T = n(964404),
    S = n(153207),
    N = n(260498),
    C = n(951178),
    O = n(426035),
    R = n(652215),
    L = n(790782);
function y(e, t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: e, integrationStatus: t });
}
function D(e, t) {
    let { project: n, hasActivity: i, integrationInstalled: r, botPermissionsChanged: a } = t;
    l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n });
    let s = N.Ay.getIntegrationStatus(e) ?? S.A.getIntegrationStatus(e);
    y(e, {
        owner_authorization_revoked: s?.owner_authorization_revoked ?? !1,
        ...(s?.preview_app_channels != null ? { preview_app_channels: s.preview_app_channels } : {}),
        preview_ready: !0,
        has_activity: i,
        integration_installed: r,
        bot_permissions_changed: a,
    });
}
let b = null,
    v = null,
    P = !1;
async function M(e) {
    let t = e ?? null;
    if (N.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != t && t !== b ? (v = t) : null == t && null != b && (P = !0));
    ((b = t), l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await a.Bo.get({
            url: R.Rsh.CONJURE_PROJECTS,
            query: null != e ? { guild_id: e } : { include_shared: !0 },
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }),
            w(n.map((e) => e.id)),
            (P = !1),
            (async function () {
                let e = G(),
                    { userId: t } = e;
                if (null != t && N.Ay.getMissingProjectsCheckedUserId() !== t)
                    for (let n of (l.h.dispatch({ type: "CONJURE_MISSING_PROJECTS_CHECK_START", userId: t }),
                    u.Ay.getResourceIds(L.P.CONJURING_PROJECT))) {
                        if (null != N.Ay.getProject(n)) continue;
                        if (!(0, E.tz)(n)) {
                            k(n);
                            continue;
                        }
                        if ((await (0, s.yy)(5e3 * Math.random()), !x(e))) return;
                        if (null != N.Ay.getProject(n)) continue;
                        let t = null;
                        try {
                            await J(n, void 0, e);
                        } catch (e) {
                            t = (0, f.$k)(e);
                        }
                        if (!x(e)) return;
                        null == t ? w([n]) : (403 === t || 404 === t) && k(n);
                    }
            })());
    } catch {
        l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = v;
    ((v = null),
        N.Ay.isReconnectListPending()
            ? ((P = !1), null != n && n !== t && (v = n), M())
            : null != n && n !== t
              ? M(n)
              : P && ((P = !1), M()));
}
function U() {
    N.Ay.isReconnectListPending() && N.Ay.getProjectsFetchState()?.type !== "loading" && M();
}
function w(e) {
    let t = new Set(u.Ay.getResourceIds(L.P.CONJURING_PROJECT)),
        n = e.filter((e) => t.has(e));
    n.length > 0 && l.h.dispatch({ type: "CONJURE_PARTICIPATING_PROJECTS_MARK", projectIds: n });
}
function G() {
    return { userId: _.default.getCurrentUser()?.id ?? null, generation: N.Ay.getSessionGeneration() };
}
function x(e) {
    return e.generation === N.Ay.getSessionGeneration() && e.userId === (_.default.getCurrentUser()?.id ?? null);
}
function k(e) {
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e });
}
let F = new i.A(3e4, 3e5),
    B = null,
    V = new Set(),
    H = new Set(),
    j = new Set(),
    W = !1,
    Y = null;
function K(e) {
    return H.has(e) && null == N.Ay.getProject(e);
}
function $(e) {
    for (let t of ((null != B && x(B)) || ((B = G()), V.clear(), H.clear(), j.clear(), F.cancel()), e))
        (V.has(t) && !H.has(t) && Y !== t && null == N.Ay.getProject(t) && V.delete(t), V.has(t) || j.add(t));
    W ||
        F.pending ||
        (async function e() {
            W = !0;
            let t = [];
            for (let e of j)
                (j.delete(e),
                    !V.has(e) &&
                        (V.add(e),
                        null == N.Ay.getProject(e) &&
                            (await (async function (e) {
                                let t,
                                    n = G();
                                Y = e;
                                try {
                                    (await J(e, void 0, n), (t = 200));
                                } catch (e) {
                                    t = (0, f.$k)(e);
                                }
                                return (
                                    (Y = null),
                                    200 !== t &&
                                        !!x(n) &&
                                        (403 === t || 404 === t ? (H.add(e), k(e), !1) : (V.delete(e), !0))
                                );
                            })(e)) &&
                            t.push(e)));
            ((W = !1), 0 === t.length)
                ? F.succeed()
                : F.fail(() => {
                      for (let e of t) j.add(e);
                      W || e();
                  });
        })();
}
let X = null;
async function z() {
    let e = _.default.getCurrentUser()?.id ?? null;
    if (null == e || X === e || N.Ay.hasFetchedProjectLimit()) return;
    X = e;
    let t = null;
    try {
        let { body: e } = await a.Bo.get({ url: R.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        t = e.max_projects;
    } catch {}
    (X === e && (X = null),
        _.default.getCurrentUser()?.id === e &&
            l.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t }));
}
let q = new Map();
function Z(e) {
    null == (0, h.KY)(e) && (0, A.Et)(e);
    let t = G(),
        n = J(e, void 0, t);
    (n.catch(() => void 0), q.set(e, { read: n, at: Date.now(), session: t }), (0, p.V)(e));
}
function Q(e) {
    let t = q.get(e);
    return (q.delete(e), null != t && x(t.session) && Date.now() - t.at < 5e3) ? t.read : null;
}
async function J(e, t, n) {
    let i = await a.Bo.get({ url: R.Rsh.CONJURE_PROJECT(e), rejectWithError: !1, signal: t });
    return (
        (null == n || x(n)) &&
            t?.aborted !== !0 &&
            (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
            y(e, {
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
        null != t.proxy_ticket && (0, d.WL)(t.proxy_ticket, t.application.id, "0", r.U.APP_CHANNEL),
        y(e, {
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
            url: R.Rsh.CONJURE_PROJECTS,
            body: { ...e, flags: e.flags ?? C.Zh.GUILD_COLLABORATION | C.Zh.PUBLIC },
            rejectWithError: !1,
        });
        return (null != t.ws_ticket && (0, A.vG)(t.id, t.ws_ticket), t);
    } catch (e) {
        throw new f.DS((0, f.hj)(e), (0, f.$k)(e));
    }
}
async function er(e, t) {
    let n = await a.Bo.patch({ url: R.Rsh.CONJURE_PROJECT(e), body: t, rejectWithError: !1 });
    return (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function ea(e) {
    let { bot: t } = await (0, c.TA)(e);
    null != t && l.h.dispatch({ type: "USER_UPDATE", user: t });
}
async function es(e) {
    let t = N.Ay.getProject(e)?.preview_application_id;
    null != t && (await ea(t));
}
async function el(e, t) {
    let n = N.Ay.getProject(e)?.preview_application_id,
        i = await er(e, t),
        r = i.body.preview_application_id;
    return (
        null != n &&
            n !== r &&
            (function (e) {
                for (let t of (0, I.Mm)(e)) (0, m.A)(t, T.Ay) || (0, g.r)(t.id);
            })(n),
        null != r &&
            (null != t.name ||
                null != t.icon ||
                null != t.description ||
                "cover_image" in t ||
                null != t.uses_preview_app) &&
            ea(r).catch(() => {}),
        i
    );
}
function eo(e, t) {
    return er(e, t);
}
async function ed(e) {
    try {
        let { body: t } = await a.Bo.get({ url: R.Rsh.CONJURE_APPLICATION_CHANNELS(e), rejectWithError: !0 });
        return t;
    } catch {
        return [];
    }
}
async function ec(e) {
    let t;
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: e });
    try {
        t = await a.Bo.del({ url: R.Rsh.CONJURE_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e }), t);
}
function eu(e, t) {
    ec(e).then(() => void 0, t);
}
function e_(e) {
    let t = N.Ay.getProject(e);
    null != t && (J(e).catch(() => {}), (0, o.eO)((0, O.Du)(t), { withMutualGuilds: !0 }).catch(() => {}));
}
function eE(e, t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: e, projectId: t });
}
