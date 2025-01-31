n.d(t, { h: () => s });
var i = n(544891),
    r = n(570140),
    a = n(981631);
function s(e, t, n) {
    return (
        r.Z.dispatch({
            type: 'LIBRARY_APPLICATION_FLAGS_UPDATE_START',
            applicationId: e,
            branchId: t,
            flags: n
        }),
        i.tn
            .patch({
                url: a.ANM.LIBRARY_APPLICATION_BRANCH(e, t),
                body: { flags: n },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                r.Z.dispatch({
                    type: 'LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS',
                    libraryApplication: e.body
                });
            })
    );
}
