n.d(t, { k: () => s });
var i = n(544891),
    r = n(570140),
    a = n(981631);
function s(e) {
    return (
        r.Z.dispatch({
            type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING',
            applicationId: e
        }),
        i.tn
            .get({
                url: a.ANM.STORE_LAYOUT(e),
                rejectWithError: !0
            })
            .then(
                (t) => (
                    r.Z.dispatch({
                        type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS',
                        applicationId: e,
                        layout: t.body
                    }),
                    t.body
                )
            )
            .catch(() => {
                r.Z.dispatch({
                    type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED',
                    applicationId: e
                });
            })
    );
}
