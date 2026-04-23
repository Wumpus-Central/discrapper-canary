"use strict";
n.d(t, { V: () => a });
var r = n(562465),
    i = n(73153),
    s = n(652215);
function a(e, t, n) {
    return (
        i.h.dispatch({ type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START", applicationId: e, branchId: t, flags: n }),
        r.Bo.patch({
            url: s.Rsh.LIBRARY_APPLICATION_BRANCH(e, t),
            body: { flags: n },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => {
            i.h.dispatch({ type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS", libraryApplication: e.body });
        })
    );
}
