"use strict";
n.d(t, { V: () => a });
var i = n(636537),
    r = n(228366),
    s = n(652215);
function a(e, t, n) {
    return (
        r.h.dispatch({ type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START", applicationId: e, branchId: t, flags: n }),
        i.Bo.patch({
            url: s.Rsh.LIBRARY_APPLICATION_BRANCH(e, t),
            body: { flags: n },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => {
            r.h.dispatch({ type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS", libraryApplication: e.body });
        })
    );
}
