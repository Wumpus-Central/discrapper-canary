"use strict";
n.d(t, { Wq: () => A, i$: () => f, un: () => m });
var i = n(158390),
    r = n(51906),
    a = n(562465),
    s = n(228366),
    l = n(927813),
    o = n(38405),
    d = n(385113),
    c = n(652215);
let u = new r.Zy(),
    _ = new i.A(l.A.Millis.SECOND, l.A.Millis.MINUTE, !0);
async function E() {
    s.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
    try {
        let e = await a.Bo.get({ url: c.Rsh.WIDGET_CONFIGS_FEATURED, rejectWithError: !0 });
        s.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS",
            applications: e.body.applications,
            configs: e.body.configs,
        }),
            _.succeed();
    } catch (e) {
        throw (
            (s.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" }),
            _.pending ||
                _.fail(() => {
                    u.one(void 0, E).catch(() => {});
                }),
            o.A.captureException(e),
            e)
        );
    }
}
function A() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (e) _.succeed();
    else if (d.A.getFeaturedFetchState() === d.e.SUCCESS || _.pending) return Promise.resolve();
    return u.one(void 0, E, { force: e });
}
async function h() {
    s.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START" });
    try {
        let e = await a.Bo.get({ url: c.Rsh.WIDGET_CONFIGS_DEVELOPER, rejectWithError: !0 });
        s.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS",
            applications: e.body.applications,
            configs: e.body.configs,
        });
    } catch (e) {
        throw (s.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE" }), o.A.captureException(e), e);
    }
}
s.h.subscribe("LOGOUT", () => _.succeed());
let I = new r.Zy();
function f() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e || d.A.getDeveloperFetchState() !== d.e.SUCCESS ? I.one(void 0, h, { force: e }) : Promise.resolve();
}
async function p(e) {
    s.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_START", applicationId: e });
    try {
        let t = (await a.Bo.get({ url: c.Rsh.APPLICATION_WIDGET_CONFIGS(e), rejectWithError: !0 })).body;
        s.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS",
            applicationId: e,
            applications: (function (e) {
                let t = new Map();
                for (let n of e) null != n.application && t.set(n.application.id, n.application);
                return Array.from(t.values());
            })(t),
            configs: t,
        });
    } catch (t) {
        throw (
            (s.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE", applicationId: e }),
            o.A.captureException(t),
            t)
        );
    }
}
let T = new r.Zy();
function m(e) {
    let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = d.A.getFetchState(e);
    return t || n !== d.e.SUCCESS ? T.one(e, () => p(e), { force: t }) : Promise.resolve();
}
