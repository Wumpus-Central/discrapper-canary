"use strict";
n.d(t, { Wq: () => d, i$: () => f, un: () => m });
var i = n(51906),
    r = n(636537),
    s = n(228366),
    a = n(38405),
    o = n(385113),
    l = n(652215);
async function u() {
    s.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
    try {
        let e = await r.Bo.get({ url: l.Rsh.WIDGET_CONFIGS_FEATURED, rejectWithError: !0 });
        s.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS",
            applications: e.body.applications,
            configs: e.body.configs,
        });
    } catch (e) {
        throw (s.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" }), a.A.captureException(e), e);
    }
}
let c = new i.Zy();
function d() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e || o.A.getFeaturedFetchState() !== o.e.SUCCESS ? c.one(void 0, u, { force: e }) : Promise.resolve();
}
async function _() {
    s.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START" });
    try {
        let e = await r.Bo.get({ url: l.Rsh.WIDGET_CONFIGS_DEVELOPER, rejectWithError: !0 });
        s.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS",
            applications: e.body.applications,
            configs: e.body.configs,
        });
    } catch (e) {
        throw (s.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE" }), a.A.captureException(e), e);
    }
}
let h = new i.Zy();
function f() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e || o.A.getDeveloperFetchState() !== o.e.SUCCESS ? h.one(void 0, _, { force: e }) : Promise.resolve();
}
async function p(e) {
    s.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_START", applicationId: e });
    try {
        let t = (await r.Bo.get({ url: l.Rsh.APPLICATION_WIDGET_CONFIGS(e), rejectWithError: !0 })).body;
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
            a.A.captureException(t),
            t)
        );
    }
}
let E = new i.Zy();
function m(e) {
    let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = o.A.getFetchState(e);
    return t || n !== o.e.SUCCESS ? E.one(e, () => p(e), { force: t }) : Promise.resolve();
}
