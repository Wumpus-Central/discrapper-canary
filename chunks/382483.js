n.d(t, { W: () => o });
var i = n(562465),
    a = n(73153),
    l = n(728458),
    s = n(385113),
    r = n(652215);
async function o() {
    let { force: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (e || (s.A.getFeaturedFetchState() !== s.e.FETCHING && s.A.getFeaturedFetchState() !== s.e.SUCCESS)) {
        a.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
        try {
            let e = await i.Bo.get({ url: r.Rsh.WIDGET_CONFIGS_FEATURED, rejectWithError: !0 });
            a.h.dispatch({
                type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS",
                applicationIds: e.body.application_ids,
                configs: e.body.configs,
            });
        } catch (e) {
            a.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" }), l.A.captureException(e);
        }
    }
}
