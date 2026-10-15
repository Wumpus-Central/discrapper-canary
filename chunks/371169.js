(n.d(e, {
    CW: () => F,
    GO: () => H,
    K: () => x,
    M7: () => M,
    Ru: () => B,
    U1: () => b,
    Vl: () => m,
    b8: () => L,
    dm: () => z,
    gA: () => k,
    hF: () => T,
    l5: () => G,
    tF: () => I,
    xx: () => W,
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
    h = n(260498),
    s = n(951178),
    C = n(426035),
    p = n(652215),
    R = n(790782);
let y = null,
    f = null,
    O = !1;
async function T(t) {
    let e = t ?? null;
    if (h.Ay.getProjectsFetchState()?.type === "loading")
        return void (null != e && e !== y ? (f = e) : null == e && null != y && (O = !0));
    ((y = e), u.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_START", guildId: e }));
    try {
        let { body: n } = await i.Bo.get({
            url: p.Rsh.CONJURE_PROJECTS,
            query: null != t ? { guild_id: t } : void 0,
            rejectWithError: !0,
        });
        (u.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: n, guildId: e }), (O = !1), g());
    } catch {
        u.h.dispatch({ type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: e });
    }
    let n = f;
    ((f = null), null != n && n !== e ? T(n) : O && ((O = !1), T()));
}
let J = !1;
async function g() {
    if (!J) {
        for (let t of ((J = !0), o.Ay.getResourceIds(R.P.CONJURING_PROJECT)))
            if (null == h.Ay.getProject(t)) {
                if (!(0, _.tz)(t)) {
                    U(t);
                    continue;
                }
                if ((await (0, l.yy)(5e3 * Math.random()), null == h.Ay.getProject(t)))
                    try {
                        await b(t);
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
    N = new Set(),
    w = !1;
function I(t) {
    let e = d.default.getCurrentUser()?.id ?? null;
    for (let n of (e !== S && ((S = e), P.clear(), N.clear(), A.cancel()), t)) P.has(n) || N.add(n);
    w || A.pending || j();
}
async function j() {
    w = !0;
    let t = [];
    for (let e of N) {
        let n;
        if ((N.delete(e), !P.has(e))) {
            if ((P.add(e), null == h.Ay.getProject(e))) {
                try {
                    let t = await b(e);
                    n = t.ok ? 200 : t.status;
                } catch (t) {
                    n = (0, E.$k)(t);
                }
                200 !== n && (403 === n || 404 === n ? U(e) : (P.delete(e), t.push(e)));
            }
        }
    }
    ((w = !1), 0 === t.length)
        ? A.succeed()
        : A.fail(() => {
              for (let e of t) N.add(e);
              w || j();
          });
}
let v = null;
async function L() {
    let t = d.default.getCurrentUser()?.id ?? null;
    if (null == t || v === t || h.Ay.hasFetchedProjectLimit()) return;
    v = t;
    let e = null;
    try {
        let { body: t } = await i.Bo.get({ url: p.Rsh.CONJURE_PROJECT_LIMIT, rejectWithError: !0 });
        e = t.max_projects;
    } catch {}
    (v === t && (v = null),
        d.default.getCurrentUser()?.id === t &&
            u.h.dispatch({ type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: e }));
}
async function b(t, e) {
    let n = await i.Bo.get({ url: p.Rsh.CONJURE_PROJECT(t), rejectWithError: !1, signal: e });
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
async function k(t) {
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
    return (u.h.dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: e }), e.id);
}
async function D(t, e) {
    let n = await i.Bo.patch({ url: p.Rsh.CONJURE_PROJECT(t), body: e, rejectWithError: !1 });
    return (n.ok && u.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body }), n);
}
async function F(t, e) {
    let n = await D(t, e);
    if (n.ok && (null != e.icon || null != e.description || "cover_image" in e)) {
        let t = n.body.preview_application_id;
        if (null != t)
            try {
                await (0, c.TA)(t);
            } catch {}
    }
    return n;
}
function B(t, e) {
    return F(t, { icon: e });
}
function m(t, e) {
    return F(t, { cover_image: e });
}
function M(t, e) {
    return D(t, e);
}
async function G(t) {
    try {
        let { body: e } = await i.Bo.get({ url: p.Rsh.CONJURE_APPLICATION_CHANNELS(t), rejectWithError: !0 });
        return e;
    } catch {
        return [];
    }
}
async function W(t) {
    let e;
    u.h.dispatch({ type: "CONJURE_PROJECT_DELETE_START", projectId: t });
    try {
        e = await i.Bo.del({ url: p.Rsh.CONJURE_PROJECT(t), rejectWithError: !1 });
    } catch (e) {
        throw (u.h.dispatch({ type: "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e);
    }
    return (
        u.h.dispatch({ type: e.ok ? "CONJURE_PROJECT_DELETE_SUCCESS" : "CONJURE_PROJECT_DELETE_FAIL", projectId: t }), e
    );
}
function x(t, e) {
    W(t).then((t) => {
        t.ok || e();
    }, e);
}
function H(t) {
    let e = h.Ay.getProject(t);
    null != e && (b(t).catch(() => {}), (0, a.eO)((0, C.Du)(e), { withMutualGuilds: !0 }).catch(() => {}));
}
function z(t, e) {
    u.h.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId: t, projectId: e });
}
