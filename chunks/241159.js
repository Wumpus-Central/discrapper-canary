r.d(n, {
    k: function () {
        return s;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(981631);
function s(e) {
    return (
        a.Z.dispatch({
            type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING',
            applicationId: e
        }),
        i.tn
            .get({
                url: o.ANM.STORE_LAYOUT(e),
                rejectWithError: !0
            })
            .then(
                (n) => (
                    a.Z.dispatch({
                        type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS',
                        applicationId: e,
                        layout: n.body
                    }),
                    n.body
                )
            )
            .catch(() => {
                a.Z.dispatch({
                    type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED',
                    applicationId: e
                });
            })
    );
}
