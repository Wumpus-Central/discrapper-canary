(n.d(t, {
    CW: () => F,
    GO: () => K,
    K: () => Y,
    M7: () => H,
    Ni: () => T,
    Ru: () => B,
    U1: () => G,
    Vl: () => V,
    b8: () => w,
    dm: () => $,
    gA: () => x,
    hF: () => N,
    l5: () => j,
    tF: () => P,
    xx: () => W,
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
    _ = n(639519),
    E = n(260498),
    A = n(951178),
    h = n(426035),
    f = n(652215),
    I = n(790782);
function p(e, t) {
    s.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: e, integrationStatus: t });
}
function T(e, t) {
    let { project: n, hasActivity: i, integrationInstalled: r, botPermissionsChanged: a } = t;
    (s.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n }),
        p(e, {
            owner_authorization_revoked: E.Ay.getIntegrationStatus(e)?.owner_authorization_revoked ?? !1,
            preview_ready: !0,
            has_activity: i,
            integration_installed: r,
            bot_permissions_changed: a,
        }));
}
let m = null,
    g = null,
    S = !1;
async function N(e) {
    let t = e ?? null;
    if (E.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != t && t !== m ? (g = t) : null == t && null != m && (S = !0));
    ((m = t), s.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: t }));
    try {
        let { body: n } = await r.Bo.get({
            url: f.Rsh.CONJURE_PROJECTS,
            query: null != e ? { guild_id: e } : void 0,
            rejectWithError: !0,
        });
        (s.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: t }), (S = !1), O());
    } catch {
        s.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: t });
    }
    let n = g;
    ((g = null), null != n && n !== t ? N(n) : S && ((S = !1), N()));
}
let C = !1;
async function O() {
    if (!C) {
        for (let e of ((C = !0), d.Ay.getResourceIds(I.P.CONJURING_PROJECT)))
            if (null == E.Ay.getProject(e)) {
                if (!(0, u.tz)(e)) {
                    R(e);
                    continue;
                }
                if ((await (0, a.yy)(5e3 * Math.random()), null == E.Ay.getProject(e)))
                    try {
                        await G(e);
                    } catch (n) {
                        let t = (0, _.$k)(n);
                        (403 === t || 404 === t) && R(e);
                    }
            }
    }
}
function R(e) {
    s.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e });
}
let L = new i.A(3e4, 3e5),
    y = null,
    D = new Set(),
    v = new Set(),
    b = !1;
function P(e) {
    let t = c.default.getCurrentUser()?.id ?? null;
    for (let n of (t !== y && ((y = t), D.clear(), v.clear(), L.cancel()), e)) D.has(n) || v.add(n);
    b || L.pending || M();
}
async function M() {
    b = !0;
    let e = [];
    for (let t of v) {
        let n;
        if ((v.delete(t), !D.has(t))) {
            if ((D.add(t), null == E.Ay.getProject(t))) {
                try {
                    (await G(t), (n = 200));
                } catch (e) {
                    n = (0, _.$k)(e);
                }
                200 !== n && (403 === n || 404 === n ? R(t) : (D.delete(t), e.push(t)));
            }
        }
    }
    ((b = !1), 0 === e.length)
        ? L.succeed()
        : L.fail(() => {
              for (let t of e) v.add(t);
              b || M();
          });
}
let U = null;
async function w() {
    let e = c.default.getCurrentUser()?.id ?? null;
    if (null == e || U === e || E.Ay.hasFetchedProjectLimit()) return;
    U = e;
    let t = null;
    try {
        let { body: e } = await r.Bo.get({ url: f.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        t = e.max_projects;
    } catch {}
    (U === e && (U = null),
        c.default.getCurrentUser()?.id === e &&
            s.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: t }));
}
async function G(e, t) {
    let n = await r.Bo.get({ url: f.Rsh.CONJURE_PROJECT(e), rejectWithError: !1, signal: t });
    return (
        t?.aborted !== !0 &&
            (s.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            p(e, {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            })),
        n
    );
}
async function x(e) {
    let t,
        n = e.flags ?? A.Zh.GUILD_COLLABORATION;
    try {
        let { body: i } = await r.Bo.post({
            url: f.Rsh.CONJURE_PROJECTS,
            body: { ...e, flags: n },
            rejectWithError: !1,
        });
        t = i;
    } catch (e) {
        throw new _.DS((0, _.hj)(e), (0, _.$k)(e));
    }
    return (s.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: t }), t.id);
}
async function k(e, t) {
    let n = await r.Bo.patch({ url: f.Rsh.CONJURE_PROJECT(e), body: t, rejectWithError: !1 });
    return (s.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function F(e, t) {
    let n = await k(e, t);
    if (null != t.icon || null != t.description || "cover_image" in t) {
        let e = n.body.preview_application_id;
        if (null != e)
            try {
                await (0, o.TA)(e);
            } catch {}
    }
    return n;
}
function B(e, t) {
    return F(e, { icon: t });
}
function V(e, t) {
    return F(e, { cover_image: t });
}
function H(e, t) {
    return k(e, t);
}
async function j(e) {
    try {
        let { body: t } = await r.Bo.get({ url: f.Rsh.CONJURE_APPLICATION_CHANNELS(e), rejectWithError: !0 });
        return t;
    } catch {
        return [];
    }
}
async function W(e) {
    let t;
    s.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: e });
    try {
        t = await r.Bo.del({ url: f.Rsh.CONJURE_PROJECT(e), rejectWithError: !1 });
    } catch (t) {
        throw (s.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: e }), t);
    }
    return (s.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: e }), t);
}
function Y(e, t) {
    W(e).then(() => void 0, t);
}
function K(e) {
    let t = E.Ay.getProject(e);
    null != t && (G(e).catch(() => {}), (0, l.eO)((0, h.Du)(t), { withMutualGuilds: !0 }).catch(() => {}));
}
function $(e, t) {
    s.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: e, projectId: t });
}
