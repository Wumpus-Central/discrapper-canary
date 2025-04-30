n.d(t, { k: () => o });
var r = n(544891),
    i = n(570140),
    a = n(981631);
function o(e) {
    return (
        i.Z.dispatch({
            type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING',
            applicationId: e
        }),
        r.tn
            .get({
                url: a.ANM.STORE_LAYOUT(e),
                rejectWithError: !0
            })
            .then(
                (t) => (
                    i.Z.dispatch({
                        type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS',
                        applicationId: e,
                        layout: t.body
                    }),
                    t.body
                )
            )
            .catch(() => {
                i.Z.dispatch({
                    type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED',
                    applicationId: e
                });
            })
    );
}
