n.d(t, {
    V: () => s,
});
var r = n(562465),
    i = n(73153),
    a = n(652215);

function s(e, t, n) {
    return (
        i.h.dispatch({
            type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
            applicationId: e,
            branchId: t,
            flags: n,
        }),
        r.Bo.patch({
            url: a.Rsh.LIBRARY_APPLICATION_BRANCH(e, t),
            body: {
                flags: n,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => {
            i.h.dispatch({
                type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS",
                libraryApplication: e.body,
            });
        })
    );
}
