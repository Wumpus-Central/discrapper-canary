"use strict";
n.d(t, { Cd: () => u, Wp: () => c, Yq: () => l });
var i = n(636537),
    r = n(228366),
    s = n(319317),
    a = n(371794),
    o = n(652215);
async function l() {
    try {
        let e = await (0, a.aP)({ url: o.Rsh.LIBRARY, oldFormErrors: !0, rejectWithError: !1 }, !1);
        r.h.dispatch({ type: "LIBRARY_FETCH_SUCCESS", libraryApplications: e.body });
    } catch (e) {
        r.h.dispatch({ type: "LIBRARY_FETCH_FAIL", error: e });
    }
}
async function u(e) {
    let t = e.primarySkuId;
    if (null == t) return;
    let n = (
        await i.Bo.get({ url: o.Rsh.APPLICATION_BRANCH_LIST(e.id), oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => e.body,
        )
    ).map((n) => s.A.createForTestMode({ id: e.id, skuId: t, branch: n }));
    r.h.dispatch({ type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED", libraryApplications: n });
}
function c(e, t, n) {
    r.h.dispatch({
        type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
        applicationId: e,
        branchId: t,
        launchOptionId: n,
    });
}
