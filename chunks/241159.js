n.d(t, { k: () => a });
var r = n(544891),
    i = n(570140),
    o = n(981631);
function a(e) {
    return (
        i.Z.dispatch({
            type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING',
            applicationId: e
        }),
        r.tn
            .get({
                url: o.ANM.STORE_LAYOUT(e),
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
