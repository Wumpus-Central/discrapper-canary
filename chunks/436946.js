n.d(t, {
    n: () => s,
});
var r = n(562465),
    i = n(73153),
    l = n(178253),
    a = n(652215);
async function s(e) {
    i.h.dispatch({
        type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_START",
        applicationId: e,
    });
    try {
        let t = (
            await r.Bo.get({
                url: a.Rsh.APPLICATION_ACTIVITY_STATISTICS(e),
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
        return (
            i.h.dispatch({
                type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS",
                statistics: t,
                applicationId: e,
            }),
            t
        );
    } catch (t) {
        throw (
            (i.h.dispatch({
                type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL",
                applicationId: e,
            }),
            new l.A(t))
        );
    }
}
