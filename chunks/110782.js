n.d(t, { Cd: () => o, Wp: () => E, Yq: () => l });
var i = n(636537),
    r = n(228366),
    a = n(319317),
    s = n(371794),
    _ = n(652215);
async function l() {
    try {
        let e = await (0, s.aP)({ url: _.Rsh.LIBRARY, oldFormErrors: !0, rejectWithError: !1 }, !1);
        r.h.dispatch({ type: "LIBRARY_FETCH_SUCCESS", libraryApplications: e.body });
    } catch (e) {
        r.h.dispatch({ type: "LIBRARY_FETCH_FAIL", error: e });
    }
}
async function o(e) {
    let t = e.primarySkuId;
    if (null == t) return;
    let n = (
        await i.Bo.get({ url: _.Rsh.APPLICATION_BRANCH_LIST(e.id), oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => e.body,
        )
    ).map((n) => a.A.createForTestMode({ id: e.id, skuId: t, branch: n }));
    r.h.dispatch({ type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED", libraryApplications: n });
}
function E(e, t, n) {
    r.h.dispatch({
        type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
        applicationId: e,
        branchId: t,
        launchOptionId: n,
    });
}
