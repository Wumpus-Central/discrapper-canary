(n.d(t, {
    Ni: () => M,
    A5: () => ed,
    gA: () => el,
    iR: () => eo,
    gg: () => B,
    xx: () => ep,
    K: () => em,
    l5: () => eI,
    $N: () => e_,
    b8: () => J,
    U1: () => ei,
    lZ: () => eg,
    su: () => q,
    a3: () => V,
    listProjects: () => x,
    tF: () => Q,
    kY: () => eT,
    tf: () => et,
    hy: () => k,
    GO: () => eS,
    _b: () => eE,
    M7: () => eh,
    dm: () => eN,
    fh: () => ef,
    CG: () => en,
    CW: () => eA,
}),
    n(321073),
    n(134528),
    n(947204),
    n(938796));
var i = n(158390),
    r = n(991690),
    a = n(620632),
    s = n(611599),
    l = n(499979),
    o = n(73153),
    d = n(803306),
    c = n(730602),
    u = n(627363),
    _ = n(218461),
    E = n(287809),
    A = n(404373),
    f = n(382541),
    h = n(975189),
    I = n(639519),
    p = n(754027),
    m = n(869018),
    T = n(326843),
    g = n(457827),
    S = n(964404);
function N(e) {
    for (let t of (0, p.Mm)(e)) (0, T.A)(t, S.Ay) || (0, g.r)(t.id);
}
var C = n(153207),
    O = n(260498),
    R = n(951178),
    L = n(426035),
    y = n(714020),
    D = n(652215),
    b = n(790782);
let v = new s.Vy("ConjureActionCreators");
function P(e, t) {
    o.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: e, integrationStatus: t });
}
function M(e, t) {
    let { project: n, hasActivity: i, integrationInstalled: r, botPermissionsChanged: a } = t;
    o.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n });
    let s = O.Ay.getIntegrationStatus(e) ?? C.A.getIntegrationStatus(e);
    P(e, {
        owner_authorization_revoked: s?.owner_authorization_revoked ?? !1,
        ...(s?.preview_app_channels != null ? { preview_app_channels: s.preview_app_channels } : {}),
        preview_ready: !0,
        has_activity: i,
        integration_installed: r,
        bot_permissions_changed: a,
    });
}
let U = null,
    w = null,
    G = !1;
async function x(e) {
    let t = e ?? null;
    if (O.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != t && t !== U ? (w = t) : null == t && null != U && (G = !0));
    ((U = t), o.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await a.Bo.get({
            url: D.Rsh.CONJURE_PROJECTS,
            query: null != e ? { guild_id: e } : { include_shared: !0 },
            rejectWithError: !0,
        });
        (o.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }),
            F(n.map((e) => e.id)),
            (G = !1),
            (async function () {
                let e = B(),
                    { userId: t } = e;
                if (null != t && O.Ay.getMissingProjectsCheckedUserId() !== t)
                    for (let n of (o.h.dispatch({ type: "CONJURE_MISSING_PROJECTS_CHECK_START", userId: t }),
                    _.Ay.getResourceIds(b.P.CONJURING_PROJECT))) {
                        if (null != O.Ay.getProject(n)) continue;
                        if (!(0, A.tz)(n)) {
                            H(n);
                            continue;
                        }
                        if ((await (0, l.yy)(5e3 * Math.random()), !V(e))) return;
                        if (null != O.Ay.getProject(n)) continue;
                        let t = null;
                        try {
                            await ei(n, void 0, e);
                        } catch (e) {
                            t = (0, I.$k)(e);
                        }
                        if (!V(e)) return;
                        null == t ? F([n]) : (403 === t || 404 === t) && H(n);
                    }
            })());
    } catch {
        o.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = w;
    ((w = null),
        O.Ay.isReconnectListPending()
            ? ((G = !1), null != n && n !== t && (w = n), x())
            : null != n && n !== t
              ? x(n)
              : G && ((G = !1), x()));
}
function k() {
    O.Ay.isReconnectListPending() && O.Ay.getProjectsFetchState()?.type !== "loading" && x();
}
function F(e) {
    let t = new Set(_.Ay.getResourceIds(b.P.CONJURING_PROJECT)),
        n = e.filter((e) => t.has(e));
    n.length > 0 && o.h.dispatch({ type: "CONJURE_PARTICIPATING_PROJECTS_MARK", projectIds: n });
}
function B() {
    return { userId: E.default.getCurrentUser()?.id ?? null, generation: O.Ay.getSessionGeneration() };
}
function V(e) {
    return e.generation === O.Ay.getSessionGeneration() && e.userId === (E.default.getCurrentUser()?.id ?? null);
}
function H(e) {
    o.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e });
}
let j = new i.A(3e4, 3e5),
    W = null,
    Y = new Set(),
    K = new Set(),
    $ = new Set(),
    X = !1,
    z = null;
function q(e) {
    return K.has(e) && null == O.Ay.getProject(e);
}
function Q(e) {
    for (let t of ((null != W && V(W)) || ((W = B()), Y.clear(), K.clear(), $.clear(), j.cancel()), e))
        (Y.has(t) && !K.has(t) && z !== t && null == O.Ay.getProject(t) && Y.delete(t), Y.has(t) || $.add(t));
    X ||
        j.pending ||
        (async function e() {
            X = !0;
            let t = [];
            for (let e of $)
                ($.delete(e),
                    !Y.has(e) &&
                        (Y.add(e),
                        null == O.Ay.getProject(e) &&
                            (await (async function (e) {
                                let t,
                                    n = B();
                                z = e;
                                try {
                                    (await ei(e, void 0, n), (t = 200));
                                } catch (e) {
                                    t = (0, I.$k)(e);
                                }
                                return (
                                    (z = null),
                                    200 !== t &&
                                        !!V(n) &&
                                        (403 === t || 404 === t ? (K.add(e), H(e), !1) : (Y.delete(e), !0))
                                );
                            })(e)) &&
                            t.push(e)));
            ((X = !1), 0 === t.length)
                ? j.succeed()
                : j.fail(() => {
                      for (let e of t) $.add(e);
                      X || e();
                  });
        })();
}
let Z = null;
function J() {
    let e = E.default.getCurrentUser()?.id ?? null;
    if (null == e || O.Ay.hasFetchedProjectLimit()) return Promise.resolve();
    if (Z?.userId === e) return Z.settled;
    let t = (async function (e) {
        let t = null,
            n = null;
        try {
            let { body: e } = await a.Bo.get({ url: D.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
            t = e.max_projects;
        } catch (e) {
            n = (0, y.A)(e);
        }
        (Z?.userId === e && (Z = null),
            E.default.getCurrentUser()?.id === e &&
                o.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t, failureCode: n }));
    })(e);
    return ((Z = { userId: e, settled: t }), t);
}
let ee = new Map();
function et(e) {
    null == (0, h.KY)(e) && (0, f.Et)(e);
    let t = B(),
        n = ei(e, void 0, t);
    (n.catch(() => void 0), ee.set(e, { read: n, at: Date.now(), session: t }), (0, m.V)(e));
}
function en(e) {
    let t = ee.get(e);
    return (ee.delete(e), null != t && V(t.session) && Date.now() - t.at < 5e3) ? t.read : null;
}
async function ei(e, t, n, i) {
    let r = ea(e),
        s = await a.Bo.get({
            url: D.Rsh.CONJURE_PROJECT(e),
            query: null != i ? { ticket: i } : void 0,
            rejectWithError: !1,
            signal: t,
        });
    return ((null == n || V(n)) && t?.aborted !== !0 && es(e, s.body, r), s);
}
let er = new Map();
function ea(e) {
    let t = er.get(e) ?? { started: 0, applied: 0 };
    return ((t.started += 1), er.set(e, t), t.started);
}
function es(e, t, n) {
    let i = er.get(e);
    null == i ||
        n < i.applied ||
        ((i.applied = n),
        o.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: t.project }),
        P(e, {
            bot_permissions_changed: t.bot_permissions_changed,
            integration_installed: t.integration_installed,
            preview_ready: t.preview_ready,
            has_activity: t.has_activity,
            owner_authorization_revoked: t.owner_authorization_revoked,
            preview_app_channels: t.preview_app_channels,
        }));
}
async function el(e) {
    let { ws_ticket: t, remix_preview: n, ...i } = await ec(e);
    return (o.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: i }), i.id);
}
async function eo(e) {
    let t = await ec(e),
        { ws_ticket: n, remix_preview: i, ...r } = t;
    return (o.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: r }), t);
}
function ed(e, t) {
    (o.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: t.application, isHydrated: !0 }),
        null != t.proxy_ticket && (0, c.WL)(t.proxy_ticket, t.application.id, "0", r.U.APP_CHANNEL),
        P(e, {
            preview_ready: !0,
            has_activity: t.has_activity,
            preview_app_channels: t.preview_app_channels,
            integration_installed: !1,
            bot_permissions_changed: !1,
            owner_authorization_revoked: !1,
        }),
        o.h.dispatch({
            type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
            projectId: e,
            publishState: "not_live",
            surface: t.has_activity ? "activity" : null,
            previewAppChannels: t.preview_app_channels,
        }));
}
async function ec(e) {
    try {
        let { body: t } = await a.Bo.post({
            url: D.Rsh.CONJURE_PROJECTS,
            body: { ...e, flags: e.flags ?? R.Zh.GUILD_COLLABORATION | R.Zh.PUBLIC },
            rejectWithError: !1,
        });
        return (null != t.ws_ticket && (0, f.vG)(t.id, t.ws_ticket), t);
    } catch (e) {
        throw new I.DS((0, I.hj)(e), (0, I.$k)(e));
    }
}
async function eu(e, t) {
    let n = await a.Bo.patch({ url: D.Rsh.CONJURE_PROJECT(e), body: t, rejectWithError: !1 });
    return (o.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function e_(e) {
    let { bot: t } = await (0, u.TA)(e);
    null != t && o.h.dispatch({ type: "USER_UPDATE", user: t });
}
async function eE(e) {
    let t = O.Ay.getProject(e)?.preview_application_id;
    null != t && (await e_(t));
}
async function eA(e, t) {
    let n = O.Ay.getProject(e)?.preview_application_id,
        i = await eu(e, t),
        r = i.body.preview_application_id;
    return (
        null != n && n !== r && N(n),
        null != r &&
            (null != t.name ||
                null != t.icon ||
                null != t.description ||
                "cover_image" in t ||
                null != t.uses_preview_app) &&
            e_(r).catch(() => {}),
        i
    );
}
async function ef(e, t) {
    let n = O.Ay.getProject(e)?.preview_application_id,
        { body: i } = await a.Bo.put({
            url: `${D.Rsh.CONJURE_PROJECT(e)}/server`,
            body: { guild_id: t, uses_preview_app: !0 },
            rejectWithError: !0,
        });
    (o.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: i }),
        eS(e),
        null != n && n !== i.preview_application_id && N(n));
}
function eh(e, t) {
    return eu(e, t);
}
async function eI(e) {
    try {
        let { body: t } = await a.Bo.get({ url: D.Rsh.CONJURE_APPLICATION_CHANNELS(e), rejectWithError: !0 });
        return t;
    } catch {
        return [];
    }
}
async function ep(e) {
    let t;
    o.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: e });
    try {
        t = await a.Bo.del({ url: D.Rsh.CONJURE_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (o.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (o.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e }), t);
}
function em(e, t) {
    ep(e).then(() => void 0, t);
}
async function eT(e) {
    let t = O.Ay.getProject(e)?.preview_application_id,
        { body: n } = await a.Bo.del({ url: `${D.Rsh.CONJURE_PROJECT(e)}/server`, rejectWithError: !0 });
    (es(e, n, ea(e)), null != t && t !== n.project.preview_application_id && N(t));
}
async function eg(e) {
    let { body: t } = await a.Bo.put({ url: `${D.Rsh.CONJURE_PROJECT(e)}/owner-install`, rejectWithError: !0 });
    es(e, t, ea(e));
}
function eS(e) {
    let t = O.Ay.getProject(e);
    null != t &&
        (ei(e).catch((t) => v.warn("project refresh failed", { projectId: e, err: t })),
        (0, d.eO)((0, L.Du)(t), { withMutualGuilds: !0 }).catch((t) =>
            v.warn("bot server list refresh failed", { projectId: e, err: t }),
        ));
}
function eN(e, t) {
    o.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: e, projectId: t });
}
