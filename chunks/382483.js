E.d(e, { Wq: () => a, i$: () => O, un: () => N });
var i = E(158390),
    n = E(51906),
    C = E(636537),
    I = E(73153),
    _ = E(927813),
    T = E(38405),
    c = E(385113),
    o = E(652215);
let r = new n.Zy(),
    A = new i.A(_.A.Millis.SECOND, _.A.Millis.MINUTE, !0);
async function F() {
    I.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
    try {
        let t = await C.Bo.get({ url: o.Rsh.WIDGET_CONFIGS_FEATURED, rejectWithError: !0 });
        (I.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS",
            applications: t.body.applications,
            configs: t.body.configs,
        }),
            A.succeed());
    } catch (t) {
        throw (
            I.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" }),
            A.pending ||
                A.fail(() => {
                    r.one(void 0, F).catch(() => {});
                }),
            T.A.captureException(t),
            t
        );
    }
}
function a() {
    let { force: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (t) A.succeed();
    else if (c.A.getFeaturedFetchState() === c.e.SUCCESS || A.pending) return Promise.resolve();
    return r.one(void 0, F, { force: t });
}
async function p() {
    I.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START" });
    try {
        let t = await C.Bo.get({ url: o.Rsh.WIDGET_CONFIGS_DEVELOPER, rejectWithError: !0 });
        I.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS",
            applications: t.body.applications,
            configs: t.body.configs,
        });
    } catch (t) {
        throw (I.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE" }), T.A.captureException(t), t);
    }
}
I.h.subscribe("LOGOUT", () => A.succeed());
let s = new n.Zy();
function O() {
    let { force: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return t || c.A.getDeveloperFetchState() !== c.e.SUCCESS ? s.one(void 0, p, { force: t }) : Promise.resolve();
}
async function S(t) {
    I.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_START", applicationId: t });
    try {
        let e = (await C.Bo.get({ url: o.Rsh.APPLICATION_WIDGET_CONFIGS(t), rejectWithError: !0 })).body;
        I.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS",
            applicationId: t,
            applications: (function (t) {
                let e = new Map();
                for (let E of t) null != E.application && e.set(E.application.id, E.application);
                return Array.from(e.values());
            })(e),
            configs: e,
        });
    } catch (e) {
        throw (
            I.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE", applicationId: t }),
            T.A.captureException(e),
            e
        );
    }
}
let l = new n.Zy();
function N(t) {
    let { force: e = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        E = c.A.getFetchState(t);
    return e || E !== c.e.SUCCESS ? l.one(t, () => S(t), { force: e }) : Promise.resolve();
}
