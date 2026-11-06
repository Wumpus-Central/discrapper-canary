(n.d(t, {
    Ni: () => v,
    A5: () => er,
    gA: () => en,
    iR: () => ei,
    gg: () => k,
    xx: () => eE,
    K: () => eA,
    l5: () => e_,
    $N: () => el,
    b8: () => Q,
    U1: () => et,
    su: () => X,
    a3: () => F,
    listProjects: () => w,
    tF: () => z,
    tf: () => J,
    hy: () => G,
    GO: () => ef,
    _b: () => eo,
    M7: () => eu,
    dm: () => eh,
    fh: () => ec,
    CG: () => ee,
    CW: () => ed,
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
    g = n(964404);
function S(e) {
    for (let t of (0, I.Mm)(e)) (0, m.A)(t, g.Ay) || (0, T.r)(t.id);
}
var N = n(153207),
    C = n(260498),
    O = n(951178),
    R = n(426035),
    L = n(714020),
    y = n(652215),
    D = n(790782);
function b(e, t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: e, integrationStatus: t });
}
function v(e, t) {
    let { project: n, hasActivity: i, integrationInstalled: r, botPermissionsChanged: a } = t;
    l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n });
    let s = C.Ay.getIntegrationStatus(e) ?? N.A.getIntegrationStatus(e);
    b(e, {
        owner_authorization_revoked: s?.owner_authorization_revoked ?? !1,
        ...(s?.preview_app_channels != null ? { preview_app_channels: s.preview_app_channels } : {}),
        preview_ready: !0,
        has_activity: i,
        integration_installed: r,
        bot_permissions_changed: a,
    });
}
let P = null,
    M = null,
    U = !1;
async function w(e) {
    let t = e ?? null;
    if (C.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != t && t !== P ? (M = t) : null == t && null != P && (U = !0));
    ((P = t), l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await a.Bo.get({
            url: y.Rsh.CONJURE_PROJECTS,
            query: null != e ? { guild_id: e } : { include_shared: !0 },
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }),
            x(n.map((e) => e.id)),
            (U = !1),
            (async function () {
                let e = k(),
                    { userId: t } = e;
                if (null != t && C.Ay.getMissingProjectsCheckedUserId() !== t)
                    for (let n of (l.h.dispatch({ type: "CONJURE_MISSING_PROJECTS_CHECK_START", userId: t }),
                    u.Ay.getResourceIds(D.P.CONJURING_PROJECT))) {
                        if (null != C.Ay.getProject(n)) continue;
                        if (!(0, E.tz)(n)) {
                            B(n);
                            continue;
                        }
                        if ((await (0, s.yy)(5e3 * Math.random()), !F(e))) return;
                        if (null != C.Ay.getProject(n)) continue;
                        let t = null;
                        try {
                            await et(n, void 0, e);
                        } catch (e) {
                            t = (0, h.$k)(e);
                        }
                        if (!F(e)) return;
                        null == t ? x([n]) : (403 === t || 404 === t) && B(n);
                    }
            })());
    } catch {
        l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = M;
    ((M = null),
        C.Ay.isReconnectListPending()
            ? ((U = !1), null != n && n !== t && (M = n), w())
            : null != n && n !== t
              ? w(n)
              : U && ((U = !1), w()));
}
function G() {
    C.Ay.isReconnectListPending() && C.Ay.getProjectsFetchState()?.type !== "loading" && w();
}
function x(e) {
    let t = new Set(u.Ay.getResourceIds(D.P.CONJURING_PROJECT)),
        n = e.filter((e) => t.has(e));
    n.length > 0 && l.h.dispatch({ type: "CONJURE_PARTICIPATING_PROJECTS_MARK", projectIds: n });
}
function k() {
    return { userId: _.default.getCurrentUser()?.id ?? null, generation: C.Ay.getSessionGeneration() };
}
function F(e) {
    return e.generation === C.Ay.getSessionGeneration() && e.userId === (_.default.getCurrentUser()?.id ?? null);
}
function B(e) {
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e });
}
let V = new i.A(3e4, 3e5),
    H = null,
    j = new Set(),
    W = new Set(),
    Y = new Set(),
    K = !1,
    $ = null;
function X(e) {
    return W.has(e) && null == C.Ay.getProject(e);
}
function z(e) {
    for (let t of ((null != H && F(H)) || ((H = k()), j.clear(), W.clear(), Y.clear(), V.cancel()), e))
        (j.has(t) && !W.has(t) && $ !== t && null == C.Ay.getProject(t) && j.delete(t), j.has(t) || Y.add(t));
    K ||
        V.pending ||
        (async function e() {
            K = !0;
            let t = [];
            for (let e of Y)
                (Y.delete(e),
                    !j.has(e) &&
                        (j.add(e),
                        null == C.Ay.getProject(e) &&
                            (await (async function (e) {
                                let t,
                                    n = k();
                                $ = e;
                                try {
                                    (await et(e, void 0, n), (t = 200));
                                } catch (e) {
                                    t = (0, h.$k)(e);
                                }
                                return (
                                    ($ = null),
                                    200 !== t &&
                                        !!F(n) &&
                                        (403 === t || 404 === t ? (W.add(e), B(e), !1) : (j.delete(e), !0))
                                );
                            })(e)) &&
                            t.push(e)));
            ((K = !1), 0 === t.length)
                ? V.succeed()
                : V.fail(() => {
                      for (let e of t) Y.add(e);
                      K || e();
                  });
        })();
}
let q = null;
function Q() {
    let e = _.default.getCurrentUser()?.id ?? null;
    if (null == e || C.Ay.hasFetchedProjectLimit()) return Promise.resolve();
    if (q?.userId === e) return q.settled;
    let t = (async function (e) {
        let t = null,
            n = null;
        try {
            let { body: e } = await a.Bo.get({ url: y.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
            t = e.max_projects;
        } catch (e) {
            n = (0, L.A)(e);
        }
        (q?.userId === e && (q = null),
            _.default.getCurrentUser()?.id === e &&
                l.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t, failureCode: n }));
    })(e);
    return ((q = { userId: e, settled: t }), t);
}
let Z = new Map();
function J(e) {
    null == (0, f.KY)(e) && (0, A.Et)(e);
    let t = k(),
        n = et(e, void 0, t);
    (n.catch(() => void 0), Z.set(e, { read: n, at: Date.now(), session: t }), (0, p.V)(e));
}
function ee(e) {
    let t = Z.get(e);
    return (Z.delete(e), null != t && F(t.session) && Date.now() - t.at < 5e3) ? t.read : null;
}
async function et(e, t, n) {
    let i = await a.Bo.get({ url: y.Rsh.CONJURE_PROJECT(e), rejectWithError: !1, signal: t });
    return (
        (null == n || F(n)) &&
            t?.aborted !== !0 &&
            (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
            b(e, {
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
async function en(e) {
    let { ws_ticket: t, remix_preview: n, ...i } = await ea(e);
    return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: i }), i.id);
}
async function ei(e) {
    let t = await ea(e),
        { ws_ticket: n, remix_preview: i, ...r } = t;
    return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: r }), t);
}
function er(e, t) {
    (l.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: t.application, isHydrated: !0 }),
        null != t.proxy_ticket && (0, d.WL)(t.proxy_ticket, t.application.id, "0", r.U.APP_CHANNEL),
        b(e, {
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
async function ea(e) {
    try {
        let { body: t } = await a.Bo.post({
            url: y.Rsh.CONJURE_PROJECTS,
            body: { ...e, flags: e.flags ?? O.Zh.GUILD_COLLABORATION | O.Zh.PUBLIC },
            rejectWithError: !1,
        });
        return (null != t.ws_ticket && (0, A.vG)(t.id, t.ws_ticket), t);
    } catch (e) {
        throw new h.DS((0, h.hj)(e), (0, h.$k)(e));
    }
}
async function es(e, t) {
    let n = await a.Bo.patch({ url: y.Rsh.CONJURE_PROJECT(e), body: t, rejectWithError: !1 });
    return (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function el(e) {
    let { bot: t } = await (0, c.TA)(e);
    null != t && l.h.dispatch({ type: "USER_UPDATE", user: t });
}
async function eo(e) {
    let t = C.Ay.getProject(e)?.preview_application_id;
    null != t && (await el(t));
}
async function ed(e, t) {
    let n = C.Ay.getProject(e)?.preview_application_id,
        i = await es(e, t),
        r = i.body.preview_application_id;
    return (
        null != n && n !== r && S(n),
        null != r &&
            (null != t.name ||
                null != t.icon ||
                null != t.description ||
                "cover_image" in t ||
                null != t.uses_preview_app) &&
            el(r).catch(() => {}),
        i
    );
}
async function ec(e, t) {
    let n = C.Ay.getProject(e)?.preview_application_id,
        { body: i } = await a.Bo.put({
            url: `${y.Rsh.CONJURE_PROJECT(e)}/server`,
            body: { guild_id: t, uses_preview_app: !0 },
            rejectWithError: !0,
        });
    (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: i }), ef(e));
    let r = i.preview_application_id;
    if ((null != n && n !== r && S(n), null != r))
        try {
            await el(r);
        } catch {}
}
function eu(e, t) {
    return es(e, t);
}
async function e_(e) {
    try {
        let { body: t } = await a.Bo.get({ url: y.Rsh.CONJURE_APPLICATION_CHANNELS(e), rejectWithError: !0 });
        return t;
    } catch {
        return [];
    }
}
async function eE(e) {
    let t;
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: e });
    try {
        t = await a.Bo.del({ url: y.Rsh.CONJURE_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e }), t);
}
function eA(e, t) {
    eE(e).then(() => void 0, t);
}
function ef(e) {
    let t = C.Ay.getProject(e);
    null != t && (et(e).catch(() => {}), (0, o.eO)((0, R.Du)(t), { withMutualGuilds: !0 }).catch(() => {}));
}
function eh(e, t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: e, projectId: t });
}
