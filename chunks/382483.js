n.d(t, { Wq: () => o, i$: () => d, un: () => u });
var i = n(636537),
    l = n(228366),
    a = n(38405),
    r = n(385113),
    s = n(652215);
async function o() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (e || (r.A.getFeaturedFetchState() !== r.e.FETCHING && r.A.getFeaturedFetchState() !== r.e.SUCCESS)) {
        l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
        try {
            let e = await i.Bo.get({ url: s.Rsh.WIDGET_CONFIGS_FEATURED, rejectWithError: !0 });
            l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS", configs: e.body.configs });
        } catch (e) {
            l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" }), a.A.captureException(e);
        }
    }
}
async function d() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (e || (r.A.getDeveloperFetchState() !== r.e.FETCHING && r.A.getDeveloperFetchState() !== r.e.SUCCESS)) {
        l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START" });
        try {
            let e = await i.Bo.get({ url: s.Rsh.WIDGET_CONFIGS_DEVELOPER, rejectWithError: !0 });
            l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS", configs: e.body.configs });
        } catch (e) {
            l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE" }), a.A.captureException(e);
        }
    }
}
async function u(e) {
    let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = r.A.getFetchState(e);
    if (t || (n !== r.e.FETCHING && n !== r.e.SUCCESS)) {
        l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_START", applicationId: e });
        try {
            let t = await i.Bo.get({ url: s.Rsh.APPLICATION_WIDGET_CONFIGS(e), rejectWithError: !0 });
            l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS", applicationId: e, configs: t.body });
        } catch (t) {
            l.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE", applicationId: e }),
                a.A.captureException(t);
        }
    }
}
