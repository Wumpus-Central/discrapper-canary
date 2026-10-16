(n.d(e, {
    CW: () => B,
    GO: () => K,
    K: () => z,
    M7: () => W,
    Ni: () => f,
    Ru: () => M,
    U1: () => D,
    Vl: () => G,
    b8: () => k,
    dm: () => $,
    gA: () => F,
    hF: () => J,
    l5: () => x,
    tF: () => j,
    xx: () => H,
}),
    n(321073),
    n(938796));
var r = n(158390),
    i = n(636537),
    l = n(499979),
    a = n(73153),
    o = n(803306),
    u = n(627363),
    c = n(573163),
    _ = n(287809),
    d = n(404373),
    E = n(639519),
    h = n(260498),
    s = n(951178),
    C = n(426035),
    p = n(652215),
    y = n(790782);
function R(t, e) {
    a.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: t, integrationStatus: e });
}
function f(t, e) {
    let { project: n, hasActivity: r, integrationInstalled: i, botPermissionsChanged: l } = e;
    (a.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n }),
        R(t, {
            owner_authorization_revoked: h.Ay.getIntegrationStatus(t)?.owner_authorization_revoked ?? !1,
            preview_ready: !0,
            has_activity: r,
            integration_installed: i,
            bot_permissions_changed: l,
        }));
}
let O = null,
    T = null,
    g = !1;
async function J(t) {
    let e = t ?? null;
    if (h.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != e && e !== O ? (T = e) : null == e && null != O && (g = !0));
    ((O = e), a.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: e }));
    try {
        let { body: n } = await i.Bo.get({
            url: p.Rsh.CONJURE_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        (a.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e }), (g = !1), A());
    } catch {
        a.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: e });
    }
    let n = T;
    ((T = null), null != n && n !== e ? J(n) : g && ((g = !1), J()));
}
let U = !1;
async function A() {
    if (!U) {
        for (let t of ((U = !0), c.Ay.getResourceIds(y.P.CONJURING_PROJECT)))
            if (null == h.Ay.getProject(t)) {
                if (!(0, d.tz)(t)) {
                    S(t);
                    continue;
                }
                if ((await (0, l.yy)(5e3 * Math.random()), null == h.Ay.getProject(t)))
                    try {
                        await D(t);
                    } catch (n) {
                        let e = (0, E.$k)(n);
                        (403 === e || 404 === e) && S(t);
                    }
            }
    }
}
function S(t) {
    a.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: t });
}
let P = new r.A(3e4, 3e5),
    N = null,
    w = new Set(),
    I = new Set(),
    v = !1;
function j(t) {
    let e = _.default.getCurrentUser()?.id ?? null;
    for (let n of (e !== N && ((N = e), w.clear(), I.clear(), P.cancel()), t)) w.has(n) || I.add(n);
    v || P.pending || L();
}
async function L() {
    v = !0;
    let t = [];
    for (let e of I) {
        let n;
        if ((I.delete(e), !w.has(e))) {
            if ((w.add(e), null == h.Ay.getProject(e))) {
                try {
                    let t = await D(e);
                    n = t.ok ? 200 : t.status;
                } catch (t) {
                    n = (0, E.$k)(t);
                }
                200 !== n && (403 === n || 404 === n ? S(e) : (w.delete(e), t.push(e)));
            }
        }
    }
    ((v = !1), 0 === t.length)
        ? P.succeed()
        : P.fail(() => {
              for (let e of t) I.add(e);
              v || L();
          });
}
let b = null;
async function k() {
    let t = _.default.getCurrentUser()?.id ?? null;
    if (null == t || b === t || h.Ay.hasFetchedProjectLimit()) return;
    b = t;
    let e = null;
    try {
        let { body: t } = await i.Bo.get({ url: p.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        e = t.max_projects;
    } catch {}
    (b === t && (b = null),
        _.default.getCurrentUser()?.id === t &&
            a.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: e }));
}
async function D(t, e) {
    let n = await i.Bo.get({ url: p.Rsh.CONJURE_PROJECT(t), rejectWithError: !1, signal: e });
    return (
        e?.aborted !== !0 &&
            n.ok &&
            (a.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            R(t, {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            })),
        n
    );
}
async function F(t) {
    let e,
        n = t.flags ?? s.Zh.GUILD_COLLABORATION;
    try {
        let { body: r } = await i.Bo.post({
            url: p.Rsh.CONJURE_PROJECTS,
            body: { ...t, flags: n },
            rejectWithError: !1,
        });
        e = r;
    } catch (t) {
        throw new E.DS((0, E.hj)(t), (0, E.$k)(t));
    }
    return (a.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: e }), e.id);
}
async function m(t, e) {
    let n = await i.Bo.patch({ url: p.Rsh.CONJURE_PROJECT(t), body: e, rejectWithError: !1 });
    return (n.ok && a.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function B(t, e) {
    let n = await m(t, e);
    if (n.ok && (null != e.icon || null != e.description || "cover_image" in e)) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, u.TA)(t);
            } catch {}
    }
    return n;
}
function M(t, e) {
    return B(t, { icon: e });
}
function G(t, e) {
    return B(t, { cover_image: e });
}
function W(t, e) {
    return m(t, e);
}
async function x(t) {
    try {
        let { body: e } = await i.Bo.get({ url: p.Rsh.CONJURE_APPLICATION_CHANNELS(t), rejectWithError: !0 });
        return e;
    } catch {
        return [];
    }
}
async function H(t) {
    let e;
    a.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: t });
    try {
        e = await i.Bo.del({ url: p.Rsh.CONJURE_PROJECT(t), rejectWithError: !1 });
    } catch (e) {
        throw (a.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e);
    }
    return (
        a.h.dispatch({ type: e.ok ? "CONJURE_PROJECT_DELETE_SUCCESS" : "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e
    );
}
function z(t, e) {
    H(t).then((t) => {
        t.ok || e();
    }, e);
}
function K(t) {
    let e = h.Ay.getProject(t);
    null != e && (D(t).catch(() => {}), (0, o.eO)((0, C.Du)(e), { withMutualGuilds: !0 }).catch(() => {}));
}
function $(t, e) {
    a.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: t, projectId: e });
}
