n.d(t, { Wq: () => u, i$: () => h, un: () => N });
var i = n(158390),
    s = n(51906),
    a = n(636537),
    l = n(228366),
    r = n(927813),
    E = n(38405),
    o = n(385113),
    c = n(652215);
let d = new s.Zy(),
    _ = new i.A(r.A.Millis.SECOND, r.A.Millis.MINUTE, !0);
async function S() {
    l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
    try {
        let e = await a.Bo.get({ url: c.Rsh.WIDGET_CONFIGS_FEATURED, rejectWithError: !0 });
        l.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS",
            applications: e.body.applications,
            configs: e.body.configs,
        }),
            _.succeed();
    } catch (e) {
        throw (
            (l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" }),
            _.pending ||
                _.fail(() => {
                    d.one(void 0, S).catch(() => {});
                }),
            E.A.captureException(e),
            e)
        );
    }
}
function u() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (e) _.succeed();
    else if (o.A.getFeaturedFetchState() === o.e.SUCCESS || _.pending) return Promise.resolve();
    return d.one(void 0, S, { force: e });
}
async function A() {
    l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START" });
    try {
        let e = await a.Bo.get({ url: c.Rsh.WIDGET_CONFIGS_DEVELOPER, rejectWithError: !0 });
        l.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS",
            applications: e.body.applications,
            configs: e.body.configs,
        });
    } catch (e) {
        throw (l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE" }), E.A.captureException(e), e);
    }
}
l.h.subscribe("LOGOUT", () => _.succeed());
let I = new s.Zy();
function h() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e || o.A.getDeveloperFetchState() !== o.e.SUCCESS ? I.one(void 0, A, { force: e }) : Promise.resolve();
}
async function T(e) {
    l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_START", applicationId: e });
    try {
        let t = (await a.Bo.get({ url: c.Rsh.APPLICATION_WIDGET_CONFIGS(e), rejectWithError: !0 })).body;
        l.h.dispatch({
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
            (l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE", applicationId: e }),
            E.A.captureException(t),
            t)
        );
    }
}
let R = new s.Zy();
function N(e) {
    let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = o.A.getFetchState(e);
    return t || n !== o.e.SUCCESS ? R.one(e, () => T(e), { force: t }) : Promise.resolve();
}
