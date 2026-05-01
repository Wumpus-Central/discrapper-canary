n.d(t, { Cd: () => d, Wp: () => c, Yq: () => o });
var i = n(636537),
    a = n(228366),
    r = n(319317),
    s = n(371794),
    l = n(652215);
async function o() {
    try {
        let e = await (0, s.aP)({ url: l.Rsh.LIBRARY, oldFormErrors: !0, rejectWithError: !1 }, !1);
        a.h.dispatch({ type: "LIBRARY_FETCH_SUCCESS", libraryApplications: e.body });
    } catch (e) {
        a.h.dispatch({ type: "LIBRARY_FETCH_FAIL", error: e });
    }
}
async function d(e) {
    let t = e.primarySkuId;
    if (null == t) return;
    let n = (
        await i.Bo.get({ url: l.Rsh.APPLICATION_BRANCH_LIST(e.id), oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => e.body,
        )
    ).map((n) => r.A.createForTestMode({ id: e.id, skuId: t, branch: n }));
    a.h.dispatch({ type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED", libraryApplications: n });
}
function c(e, t, n) {
    a.h.dispatch({
        type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
        applicationId: e,
        branchId: t,
        launchOptionId: n,
    });
}
