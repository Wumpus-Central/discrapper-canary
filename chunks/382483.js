i.d(t, { Wq: () => x, i$: () => m, un: () => g });
var s = i(158390),
    n = i(51906),
    r = i(636537),
    a = i(228366),
    l = i(927813),
    c = i(38405),
    o = i(385113),
    d = i(652215);
let h = new n.Zy(),
    u = new s.A(l.A.Millis.SECOND, l.A.Millis.MINUTE, !0);
async function j() {
    a.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
    try {
        let e = await r.Bo.get({ url: d.Rsh.WIDGET_CONFIGS_FEATURED, rejectWithError: !0 });
        a.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS",
            applications: e.body.applications,
            configs: e.body.configs,
        }),
            u.succeed();
    } catch (e) {
        throw (
            (a.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" }),
            u.pending ||
                u.fail(() => {
                    h.one(void 0, j).catch(() => {});
                }),
            c.A.captureException(e),
            e)
        );
    }
}
function x() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (e) u.succeed();
    else if (o.A.getFeaturedFetchState() === o.e.SUCCESS || u.pending) return Promise.resolve();
    return h.one(void 0, j, { force: e });
}
async function v() {
    a.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START" });
    try {
        let e = await r.Bo.get({ url: d.Rsh.WIDGET_CONFIGS_DEVELOPER, rejectWithError: !0 });
        a.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS",
            applications: e.body.applications,
            configs: e.body.configs,
        });
    } catch (e) {
        throw (a.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE" }), c.A.captureException(e), e);
    }
}
a.h.subscribe("LOGOUT", () => u.succeed());
let f = new n.Zy();
function m() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e || o.A.getDeveloperFetchState() !== o.e.SUCCESS ? f.one(void 0, v, { force: e }) : Promise.resolve();
}
async function A(e) {
    a.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_START", applicationId: e });
    try {
        let t = (await r.Bo.get({ url: d.Rsh.APPLICATION_WIDGET_CONFIGS(e), rejectWithError: !0 })).body;
        a.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS",
            applicationId: e,
            applications: (function (e) {
                let t = new Map();
                for (let i of e) null != i.application && t.set(i.application.id, i.application);
                return Array.from(t.values());
            })(t),
            configs: t,
        });
    } catch (t) {
        throw (
            (a.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE", applicationId: e }),
            c.A.captureException(t),
            t)
        );
    }
}
let N = new n.Zy();
function g(e) {
    let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = o.A.getFetchState(e);
    return t || i !== o.e.SUCCESS ? N.one(e, () => A(e), { force: t }) : Promise.resolve();
}
