n.d(t, {
    Cd: () => c,
    Wp: () => u,
    Yq: () => l,
});
var r = n(562465),
    i = n(73153),
    a = n(319317),
    s = n(371794),
    o = n(652215);
async function l() {
    try {
        let e = await (0, s.aP)(
            {
                url: o.Rsh.LIBRARY,
                oldFormErrors: !0,
                rejectWithError: !1,
            },
            !1,
        );
        i.h.dispatch({
            type: "LIBRARY_FETCH_SUCCESS",
            libraryApplications: e.body,
        });
    } catch (e) {
        i.h.dispatch({
            type: "LIBRARY_FETCH_FAIL",
            error: e,
        });
    }
}
async function c(e) {
    let t = e.primarySkuId;
    if (null == t) return;
    let n = (
        await r.Bo.get({
            url: o.Rsh.APPLICATION_BRANCH_LIST(e.id),
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => e.body)
    ).map((n) =>
        a.A.createForTestMode({
            id: e.id,
            skuId: t,
            branch: n,
        }),
    );
    i.h.dispatch({
        type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
        libraryApplications: n,
    });
}

function u(e, t, n) {
    i.h.dispatch({
        type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
        applicationId: e,
        branchId: t,
        launchOptionId: n,
    });
}
