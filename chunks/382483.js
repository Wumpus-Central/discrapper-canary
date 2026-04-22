n.d(t, { Wq: () => o, i$: () => u, un: () => c });
var r = n(562465),
    l = n(73153),
    i = n(728458),
    a = n(385113),
    s = n(652215);
async function o() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (e || (a.A.getFeaturedFetchState() !== a.e.FETCHING && a.A.getFeaturedFetchState() !== a.e.SUCCESS)) {
        l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
        try {
            let e = await r.Bo.get({ url: s.Rsh.WIDGET_CONFIGS_FEATURED, rejectWithError: !0 });
            l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS", configs: e.body.configs });
        } catch (e) {
            l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" }), i.A.captureException(e);
        }
    }
}
async function u() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (e || (a.A.getDeveloperFetchState() !== a.e.FETCHING && a.A.getDeveloperFetchState() !== a.e.SUCCESS)) {
        l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START" });
        try {
            let e = await r.Bo.get({ url: s.Rsh.WIDGET_CONFIGS_DEVELOPER, rejectWithError: !0 });
            l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS", configs: e.body.configs });
        } catch (e) {
            l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE" }), i.A.captureException(e);
        }
    }
}
async function c(e) {
    let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = a.A.getFetchState(e);
    if (t || (n !== a.e.FETCHING && n !== a.e.SUCCESS)) {
        l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_START", applicationId: e });
        try {
            let t = await r.Bo.get({ url: s.Rsh.APPLICATION_WIDGET_CONFIGS(e), rejectWithError: !0 });
            l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS", applicationId: e, configs: t.body });
        } catch (t) {
            l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE", applicationId: e }),
                i.A.captureException(t);
        }
    }
}
