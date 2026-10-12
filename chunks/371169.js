(n.d(e, {
    CW: () => M,
    GO: () => x,
    K: () => F,
    M7: () => B,
    Ru: () => L,
    U1: () => v,
    b8: () => k,
    dm: () => W,
    gA: () => G,
    hF: () => J,
    tF: () => w,
    xx: () => D,
}),
    n(321073),
    n(938796));
var r = n(158390),
    i = n(636537),
    l = n(499979),
    u = n(73153),
    o = n(803306),
    a = n(627363),
    c = n(573163),
    s = n(287809),
    d = n(404373),
    _ = n(639519),
    E = n(260498),
    C = n(951178),
    h = n(426035),
    f = n(652215),
    p = n(790782);
let R = null,
    y = null,
    O = !1;
async function J(t) {
    let e = t ?? null;
    if (E.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != e && e !== R ? (y = e) : null == e && null != R && (O = !0));
    ((R = e), u.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: e }));
    try {
        let { body: n } = await i.Bo.get({
            url: f.Rsh.CONJURE_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        (u.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e }), (O = !1), g());
    } catch {
        u.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: e });
    }
    let n = y;
    ((y = null), null != n && n !== e ? J(n) : O && ((O = !1), J()));
}
let T = !1;
async function g() {
    if (!T) {
        for (let t of ((T = !0), c.Ay.getResourceIds(p.P.CONJURING_PROJECT)))
            if (null == E.Ay.getProject(t)) {
                if (!(0, d.tz)(t)) {
                    A(t);
                    continue;
                }
                if ((await (0, l.yy)(5e3 * Math.random()), null == E.Ay.getProject(t)))
                    try {
                        await v(t);
                    } catch (n) {
                        let e = (0, _.$k)(n);
                        (403 === e || 404 === e) && A(t);
                    }
            }
    }
}
function A(t) {
    u.h.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: t });
}
let P = new r.A(3e4, 3e5),
    U = null,
    N = new Set(),
    S = new Set(),
    I = !1;
function w(t) {
    let e = s.default.getCurrentUser()?.id ?? null;
    for (let n of (e !== U && ((U = e), N.clear(), S.clear(), P.cancel()), t)) N.has(n) || S.add(n);
    I || P.pending || j();
}
async function j() {
    I = !0;
    let t = [];
    for (let e of S) {
        let n;
        if ((S.delete(e), !N.has(e))) {
            if ((N.add(e), null == E.Ay.getProject(e))) {
                try {
                    let t = await v(e);
                    n = t.ok ? 200 : t.status;
                } catch (t) {
                    n = (0, _.$k)(t);
                }
                200 !== n && (403 === n || 404 === n ? A(e) : (N.delete(e), t.push(e)));
            }
        }
    }
    ((I = !1), 0 === t.length)
        ? P.succeed()
        : P.fail(() => {
              for (let e of t) S.add(e);
              I || j();
          });
}
let b = null;
async function k() {
    let t = s.default.getCurrentUser()?.id ?? null;
    if (null == t || b === t || E.Ay.hasFetchedProjectLimit()) return;
    b = t;
    let e = null;
    try {
        let { body: t } = await i.Bo.get({ url: f.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        e = t.max_projects;
    } catch {}
    (b === t && (b = null),
        s.default.getCurrentUser()?.id === t &&
            u.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: e }));
}
async function v(t, e) {
    let n = await i.Bo.get({ url: f.Rsh.CONJURE_PROJECT(t), rejectWithError: !1, signal: e });
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
async function G(t) {
    let e,
        n = t.flags ?? C.Zh.PUBLIC;
    try {
        let { body: r } = await i.Bo.post({
            url: f.Rsh.CONJURE_PROJECTS,
            body: { ...t, flags: n },
            rejectWithError: !1,
        });
        e = r;
    } catch (t) {
        throw new _.DS((0, _.hj)(t), (0, _.$k)(t));
    }
    return (u.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: e }), e.id);
}
async function m(t, e) {
    let n = await i.Bo.patch({ url: f.Rsh.CONJURE_PROJECT(t), body: e, rejectWithError: !1 });
    return (n.ok && u.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function M(t, e) {
    let n = await m(t, e);
    if (n.ok && (null != e.icon || null != e.description)) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, a.TA)(t);
            } catch {}
    }
    return n;
}
function L(t, e) {
    return M(t, { icon: e });
}
function B(t, e) {
    return m(t, e);
}
async function D(t) {
    let e;
    u.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: t });
    try {
        e = await i.Bo.del({ url: f.Rsh.CONJURE_PROJECT(t), rejectWithError: !1 });
    } catch (e) {
        throw (u.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e);
    }
    return (
        u.h.dispatch({ type: e.ok ? "CONJURE_PROJECT_DELETE_SUCCESS" : "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e
    );
}
function F(t, e) {
    D(t).then((t) => {
        t.ok || e();
    }, e);
}
function x(t) {
    let e = E.Ay.getProject(t);
    null != e && (v(t).catch(() => {}), (0, o.eO)((0, h.Du)(e), { withMutualGuilds: !0 }).catch(() => {}));
}
function W(t, e) {
    u.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: t, projectId: e });
}
