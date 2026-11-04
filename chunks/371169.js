(n(321073), n(134528), n(947204), n(938796));
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
    f = n(639519);
n(754027);
var I = n(869018),
    p = n(153207),
    m = n(260498),
    T = n(951178),
    g = n(426035),
    S = n(652215),
    N = n(790782);
function C(e, t) {
    l.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: e, integrationStatus: t });
}
let O = null,
    R = null,
    L = !1;
async function y(e) {
    let t = e ?? null;
    if (m.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != t && t !== O ? (R = t) : null == t && null != O && (L = !0));
    ((O = t), l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await a.Bo.get({
            url: S.Rsh.CONJURE_PROJECTS,
            query: null != e ? { guild_id: e } : { include_shared: !0 },
            rejectWithError: !0,
        });
        (l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }),
            D(n.map((e) => e.id)),
            (L = !1),
            (async function () {
                let e = b(),
                    { userId: t } = e;
                if (null != t && m.Ay.getMissingProjectsCheckedUserId() !== t)
                    for (let n of (l.h.dispatch({ type: "CONJURE_MISSING_PROJECTS_CHECK_START", userId: t }),
                    u.Ay.getResourceIds(N.P.CONJURING_PROJECT))) {
                        if (null != m.Ay.getProject(n)) continue;
                        if (!(0, E.tz)(n)) {
                            P(n);
                            continue;
                        }
                        if ((await (0, s.yy)(5e3 * Math.random()), !v(e))) return;
                        if (null != m.Ay.getProject(n)) continue;
                        let t = null;
                        try {
                            await H(n, void 0, e);
                        } catch (e) {
                            t = (0, f.$k)(e);
                        }
                        if (!v(e)) return;
                        null == t ? D([n]) : (403 === t || 404 === t) && P(n);
                    }
            })());
    } catch {
        l.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = R;
    ((R = null),
        m.Ay.isReconnectListPending()
            ? ((L = !1), null != n && n !== t && (R = n), y())
            : null != n && n !== t
              ? y(n)
              : L && ((L = !1), y()));
}
function D(e) {
    let t = new Set(u.Ay.getResourceIds(N.P.CONJURING_PROJECT)),
        n = e.filter((e) => t.has(e));
    n.length > 0 && l.h.dispatch({ type: "CONJURE_PARTICIPATING_PROJECTS_MARK", projectIds: n });
}
function b() {
    return { userId: _.default.getCurrentUser()?.id ?? null, generation: m.Ay.getSessionGeneration() };
}
function v(e) {
    return e.generation === m.Ay.getSessionGeneration() && e.userId === (_.default.getCurrentUser()?.id ?? null);
}
function P(e) {
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e });
}
let M = new i.A(3e4, 3e5),
    U = null,
    w = new Set(),
    G = new Set(),
    x = new Set(),
    k = !1,
    F = null,
    B = null,
    V = new Map();
async function H(e, t, n) {
    let i = await a.Bo.get({ url: S.Rsh.CONJURE_PROJECT(e), rejectWithError: !1, signal: t });
    return (
        (null == n || v(n)) &&
            t?.aborted !== !0 &&
            (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: i.body.project }),
            C(e, {
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
async function j(e) {
    try {
        let { body: t } = await a.Bo.post({
            url: S.Rsh.CONJURE_PROJECTS,
            body: { ...e, flags: e.flags ?? T.Zh.GUILD_COLLABORATION | T.Zh.PUBLIC },
            rejectWithError: !1,
        });
        return (null != t.ws_ticket && (0, A.vG)(t.id, t.ws_ticket), t);
    } catch (e) {
        throw new f.DS((0, f.hj)(e), (0, f.$k)(e));
    }
}
async function W(e, t) {
    let n = await a.Bo.patch({ url: S.Rsh.CONJURE_PROJECT(e), body: t, rejectWithError: !1 });
    return (l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function Y(e) {
    let { bot: t } = await (0, c.TA)(e);
    null != t && l.h.dispatch({ type: "USER_UPDATE", user: t });
}
async function K(e) {
    let t;
    l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: e });
    try {
        t = await a.Bo.del({ url: S.Rsh.CONJURE_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (l.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e }), t);
}
n.d(
    t,
    {},
    {
        $N: Y,
        A5: function (e, t) {
            (l.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: t.application, isHydrated: !0 }),
                null != t.proxy_ticket && (0, d.WL)(t.proxy_ticket, t.application.id, "0", r.U.APP_CHANNEL),
                C(e, {
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
        },
        CG: function (e) {
            let t = V.get(e);
            return (V.delete(e), null != t && v(t.session) && Date.now() - t.at < 5e3) ? t.read : null;
        },
        CW: async function (e, t) {
            let n = await W(e, t),
                i = n.body.preview_application_id;
            return (
                null != i &&
                    (null != t.name || null != t.icon || null != t.description || "cover_image" in t) &&
                    Y(i).catch(() => {}),
                n
            );
        },
        GO: function (e) {
            let t = m.Ay.getProject(e);
            null != t && (H(e).catch(() => {}), (0, o.eO)((0, g.Du)(t), { withMutualGuilds: !0 }).catch(() => {}));
        },
        K: function (e, t) {
            K(e).then(() => void 0, t);
        },
        M7: function (e, t) {
            return W(e, t);
        },
        Ni: function (e, t) {
            let { project: n, hasActivity: i, integrationInstalled: r, botPermissionsChanged: a } = t;
            l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n });
            let s = m.Ay.getIntegrationStatus(e) ?? p.A.getIntegrationStatus(e);
            C(e, {
                owner_authorization_revoked: s?.owner_authorization_revoked ?? !1,
                ...(s?.preview_app_channels != null ? { preview_app_channels: s.preview_app_channels } : {}),
                preview_ready: !0,
                has_activity: i,
                integration_installed: r,
                bot_permissions_changed: a,
            });
        },
        U1: H,
        _b: async function (e) {
            let t = m.Ay.getProject(e)?.preview_application_id;
            null != t && (await Y(t));
        },
        b8: async function () {
            let e = _.default.getCurrentUser()?.id ?? null;
            if (null == e || B === e || m.Ay.hasFetchedProjectLimit()) return;
            B = e;
            let t = null;
            try {
                let { body: e } = await a.Bo.get({ url: S.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
                t = e.max_projects;
            } catch {}
            (B === e && (B = null),
                _.default.getCurrentUser()?.id === e &&
                    l.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t }));
        },
        dm: function (e, t) {
            l.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: e, projectId: t });
        },
        gA: async function (e) {
            let { ws_ticket: t, remix_preview: n, ...i } = await j(e);
            return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: i }), i.id);
        },
        hy: function () {
            m.Ay.isReconnectListPending() && m.Ay.getProjectsFetchState()?.type !== "loading" && y();
        },
        iR: async function (e) {
            let t = await j(e),
                { ws_ticket: n, remix_preview: i, ...r } = t;
            return (l.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: r }), t);
        },
        l5: async function (e) {
            try {
                let { body: t } = await a.Bo.get({ url: S.Rsh.CONJURE_APPLICATION_CHANNELS(e), rejectWithError: !0 });
                return t;
            } catch {
                return [];
            }
        },
        listProjects: y,
        su: function (e) {
            return G.has(e) && null == m.Ay.getProject(e);
        },
        tF: function (e) {
            for (let t of ((null != U && v(U)) || ((U = b()), w.clear(), G.clear(), x.clear(), M.cancel()), e))
                (w.has(t) && !G.has(t) && F !== t && null == m.Ay.getProject(t) && w.delete(t), w.has(t) || x.add(t));
            k ||
                M.pending ||
                (async function e() {
                    k = !0;
                    let t = [];
                    for (let e of x)
                        (x.delete(e),
                            !w.has(e) &&
                                (w.add(e),
                                null == m.Ay.getProject(e) &&
                                    (await (async function (e) {
                                        let t,
                                            n = b();
                                        F = e;
                                        try {
                                            (await H(e, void 0, n), (t = 200));
                                        } catch (e) {
                                            t = (0, f.$k)(e);
                                        }
                                        return (
                                            (F = null),
                                            200 !== t &&
                                                !!v(n) &&
                                                (403 === t || 404 === t ? (G.add(e), P(e), !1) : (w.delete(e), !0))
                                        );
                                    })(e)) &&
                                    t.push(e)));
                    ((k = !1), 0 === t.length)
                        ? M.succeed()
                        : M.fail(() => {
                              for (let e of t) x.add(e);
                              k || e();
                          });
                })();
        },
        tf: function (e) {
            null == (0, h.KY)(e) && (0, A.Et)(e);
            let t = b(),
                n = H(e, void 0, t);
            (n.catch(() => void 0), V.set(e, { read: n, at: Date.now(), session: t }), (0, I.V)(e));
        },
        xx: K,
    },
);
