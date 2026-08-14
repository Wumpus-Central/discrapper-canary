i.d(t, { Wq: () => T, i$: () => R, un: () => P });
var E = i(158390),
    s = i(51906),
    n = i(636537),
    r = i(228366),
    l = i(927813),
    a = i(38405),
    _ = i(385113),
    S = i(652215);
let A = new s.Zy(),
    c = new E.A(l.A.Millis.SECOND, l.A.Millis.MINUTE, !0);
async function o() {
    r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
    try {
        let e = await n.Bo.get({ url: S.Rsh.WIDGET_CONFIGS_FEATURED, rejectWithError: !0 });
        r.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS",
            applications: e.body.applications,
            configs: e.body.configs,
        }),
            c.succeed();
    } catch (e) {
        throw (
            (r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" }),
            c.pending ||
                c.fail(() => {
                    A.one(void 0, o).catch(() => {});
                }),
            a.A.captureException(e),
            e)
        );
    }
}
function T() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (e) c.succeed();
    else if (_.A.getFeaturedFetchState() === _.e.SUCCESS || c.pending) return Promise.resolve();
    return A.one(void 0, o, { force: e });
}
async function I() {
    r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START" });
    try {
        let e = await n.Bo.get({ url: S.Rsh.WIDGET_CONFIGS_DEVELOPER, rejectWithError: !0 });
        r.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS",
            applications: e.body.applications,
            configs: e.body.configs,
        });
    } catch (e) {
        throw (r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE" }), a.A.captureException(e), e);
    }
}
r.h.subscribe("LOGOUT", () => c.succeed());
let d = new s.Zy();
function R() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e || _.A.getDeveloperFetchState() !== _.e.SUCCESS ? d.one(void 0, I, { force: e }) : Promise.resolve();
}
async function N(e) {
    r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_START", applicationId: e });
    try {
        let t = (await n.Bo.get({ url: S.Rsh.APPLICATION_WIDGET_CONFIGS(e), rejectWithError: !0 })).body;
        r.h.dispatch({
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
            (r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE", applicationId: e }),
            a.A.captureException(t),
            t)
        );
    }
}
let u = new s.Zy();
function P(e) {
    let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = _.A.getFetchState(e);
    return t || i !== _.e.SUCCESS ? u.one(e, () => N(e), { force: t }) : Promise.resolve();
}
