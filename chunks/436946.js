n.d(t, { n: () => s });
var i = n(562465),
    r = n(73153),
    a = n(178253),
    l = n(652215);
async function s(e) {
    r.h.dispatch({ type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_START", applicationId: e });
    try {
        let t = (
            await i.Bo.get({ url: l.Rsh.APPLICATION_ACTIVITY_STATISTICS(e), oldFormErrors: !0, rejectWithError: !1 })
        ).body;
        return (
            r.h.dispatch({ type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS", statistics: t, applicationId: e }), t
        );
    } catch (t) {
        throw (r.h.dispatch({ type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL", applicationId: e }), new a.A(t));
    }
}
