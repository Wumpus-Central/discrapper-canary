n.d(t, {
    $: function () {
        return s;
    }
});
var i = n(544891),
    r = n(570140),
    l = n(34756),
    a = n(981631);
async function s(e) {
    r.Z.dispatch({
        type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_START',
        applicationId: e
    });
    try {
        let t = (
            await i.tn.get({
                url: a.ANM.APPLICATION_ACTIVITY_STATISTICS(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body;
        return (
            r.Z.dispatch({
                type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS',
                statistics: t,
                applicationId: e
            }),
            t
        );
    } catch (t) {
        throw (
            (r.Z.dispatch({
                type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL',
                applicationId: e
            }),
            new l.Z(t))
        );
    }
}
