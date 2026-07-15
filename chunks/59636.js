"use strict";
n.d(t, { V: () => s });
var i = n(636537),
    r = n(228366),
    a = n(652215);
function s(e, t, n) {
    return (
        r.h.dispatch({ type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START", applicationId: e, branchId: t, flags: n }),
        i.Bo.patch({
            url: a.Rsh.LIBRARY_APPLICATION_BRANCH(e, t),
            body: { flags: n },
            oldFormErrors: !0,
            rejectWithError: (0, i.fT)(),
        }).then((e) => {
            r.h.dispatch({ type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS", libraryApplication: e.body });
        })
    );
}
