(n.d(e, {
    CW: () => D,
    GO: () => W,
    K: () => m,
    M7: () => M,
    Ru: () => B,
    U1: () => k,
    b8: () => v,
    dm: () => x,
    gA: () => L,
    hF: () => O,
    tF: () => I,
    xx: () => G,
}),
    n(321073),
    n(938796));
var r = n(158390),
    i = n(636537),
    l = n(499979),
    u = n(73153),
    a = n(803306),
    c = n(627363),
    o = n(573163),
    d = n(287809),
    _ = n(404373),
    E = n(639519),
    s = n(260498),
    h = n(951178),
    p = n(426035),
    C = n(652215),
    R = n(790782);
let y = null,
    f = null,
    T = !1;
async function O(t) {
    let e = t ?? null;
    if (s.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != e && e !== y ? (f = e) : null == e && null != y && (T = !0));
    ((y = e), u.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: e }));
    try {
        let { body: n } = await i.Bo.get({
            url: C.Rsh.CONJURE_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        (u.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e }), (T = !1), g());
    } catch {
        u.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: e });
    }
    let n = f;
    ((f = null), null != n && n !== e ? O(n) : T && ((T = !1), O()));
}
let J = !1;
async function g() {
    if (!J) {
        for (let t of ((J = !0), o.Ay.getResourceIds(R.P.CONJURING_PROJECT)))
            if (null == s.Ay.getProject(t)) {
                if (!(0, _.tz)(t)) {
                    U(t);
                    continue;
                }
                if ((await (0, l.yy)(5e3 * Math.random()), null == s.Ay.getProject(t)))
                    try {
                        await k(t);
                    } catch (n) {
                        let e = (0, E.$k)(n);
                        (403 === e || 404 === e) && U(t);
                    }
            }
    }
}
function U(t) {
    u.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: t });
}
let A = new r.A(3e4, 3e5),
    S = null,
    P = new Set(),
    w = new Set(),
    N = !1;
function I(t) {
    let e = d.default.getCurrentUser()?.id ?? null;
    for (let n of (e !== S && ((S = e), P.clear(), w.clear(), A.cancel()), t)) P.has(n) || w.add(n);
    N || A.pending || j();
}
async function j() {
    N = !0;
    let t = [];
    for (let e of w) {
        let n;
        if ((w.delete(e), !P.has(e))) {
            if ((P.add(e), null == s.Ay.getProject(e))) {
                try {
                    let t = await k(e);
                    n = t.ok ? 200 : t.status;
                } catch (t) {
                    n = (0, E.$k)(t);
                }
                200 !== n && (403 === n || 404 === n ? U(e) : (P.delete(e), t.push(e)));
            }
        }
    }
    ((N = !1), 0 === t.length)
        ? A.succeed()
        : A.fail(() => {
              for (let e of t) w.add(e);
              N || j();
          });
}
let b = null;
async function v() {
    let t = d.default.getCurrentUser()?.id ?? null;
    if (null == t || b === t || s.Ay.hasFetchedProjectLimit()) return;
    b = t;
    let e = null;
    try {
        let { body: t } = await i.Bo.get({ url: C.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        e = t.max_projects;
    } catch {}
    (b === t && (b = null),
        d.default.getCurrentUser()?.id === t &&
            u.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: e }));
}
async function k(t, e) {
    let n = await i.Bo.get({ url: C.Rsh.CONJURE_PROJECT(t), rejectWithError: !1, signal: e });
    if (e?.aborted !== !0 && n.ok) {
        var r;
        (u.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body.project }),
            (r = {
                bot_permissions_changed: n.body.bot_permissions_changed,
                integration_installed: n.body.integration_installed,
                preview_ready: n.body.preview_ready,
                has_activity: n.body.has_activity,
                owner_authorization_revoked: n.body.owner_authorization_revoked,
            }),
            u.h.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: t, integrationStatus: r }));
    }
    return n;
}
async function L(t) {
    let e,
        n = t.flags ?? h.Zh.PUBLIC;
    try {
        let { body: r } = await i.Bo.post({
            url: C.Rsh.CONJURE_PROJECTS,
            body: { ...t, flags: n },
            rejectWithError: !1,
        });
        e = r;
    } catch (t) {
        throw new E.DS((0, E.hj)(t), (0, E.$k)(t));
    }
    return (u.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: e }), e.id);
}
async function F(t, e) {
    let n = await i.Bo.patch({ url: C.Rsh.CONJURE_PROJECT(t), body: e, rejectWithError: !1 });
    return (n.ok && u.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function D(t, e) {
    let n = await F(t, e);
    if (n.ok && (null != e.icon || null != e.description)) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, c.TA)(t);
            } catch {}
    }
    return n;
}
function B(t, e) {
    return D(t, { icon: e });
}
function M(t, e) {
    return F(t, e);
}
async function G(t) {
    let e;
    u.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: t });
    try {
        e = await i.Bo.del({ url: C.Rsh.CONJURE_PROJECT(t), rejectWithError: !1 });
    } catch (e) {
        throw (u.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e);
    }
    return (
        u.h.dispatch({ type: e.ok ? "CONJURE_PROJECT_DELETE_SUCCESS" : "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e
    );
}
function m(t, e) {
    G(t).then((t) => {
        t.ok || e();
    }, e);
}
function W(t) {
    let e = s.Ay.getProject(t);
    null != e && (k(t).catch(() => {}), (0, a.eO)((0, p.Du)(e), { withMutualGuilds: !0 }).catch(() => {}));
}
function x(t, e) {
    u.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: t, projectId: e });
}
