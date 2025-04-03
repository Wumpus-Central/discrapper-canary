n.d(t, { $: () => o });
var r = n(544891),
    i = n(570140),
    l = n(34756),
    a = n(981631);
async function o(e) {
    i.Z.dispatch({
        type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_START',
        applicationId: e
    });
    try {
        let t = (
            await r.tn.get({
                url: a.ANM.APPLICATION_ACTIVITY_STATISTICS(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body;
        return (
            i.Z.dispatch({
                type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS',
                statistics: t,
                applicationId: e
            }),
            t
        );
    } catch (t) {
        throw (
            (i.Z.dispatch({
                type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL',
                applicationId: e
            }),
            new l.Z(t))
        );
    }
}
