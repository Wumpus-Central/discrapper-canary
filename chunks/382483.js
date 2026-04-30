"use strict";
n.d(t, { Wq: () => l, i$: () => u, un: () => c });
var i = n(636537),
    r = n(228366),
    s = n(38405),
    a = n(385113),
    o = n(652215);
async function l() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (e || (a.A.getFeaturedFetchState() !== a.e.FETCHING && a.A.getFeaturedFetchState() !== a.e.SUCCESS)) {
        r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
        try {
            let e = await i.Bo.get({ url: o.Rsh.WIDGET_CONFIGS_FEATURED, rejectWithError: !0 });
            r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS", configs: e.body.configs });
        } catch (e) {
            r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" }), s.A.captureException(e);
        }
    }
}
async function u() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (e || (a.A.getDeveloperFetchState() !== a.e.FETCHING && a.A.getDeveloperFetchState() !== a.e.SUCCESS)) {
        r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START" });
        try {
            let e = await i.Bo.get({ url: o.Rsh.WIDGET_CONFIGS_DEVELOPER, rejectWithError: !0 });
            r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS", configs: e.body.configs });
        } catch (e) {
            r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE" }), s.A.captureException(e);
        }
    }
}
async function c(e) {
    let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = a.A.getFetchState(e);
    if (t || (n !== a.e.FETCHING && n !== a.e.SUCCESS)) {
        r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_START", applicationId: e });
        try {
            let t = await i.Bo.get({ url: o.Rsh.APPLICATION_WIDGET_CONFIGS(e), rejectWithError: !0 });
            r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS", applicationId: e, configs: t.body });
        } catch (t) {
            r.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE", applicationId: e }),
                s.A.captureException(t);
        }
    }
}
