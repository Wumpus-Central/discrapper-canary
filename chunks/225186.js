E.d(e, { S: () => i });
var I = E(636537),
    A = E(73153),
    a = E(652215);
async function i() {
    A.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
    try {
        let t = await I.Bo.get({
            url: a.Rsh.APPLICATIONS,
            query: { with_team_applications: !0 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        A.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_SUCCESS", applicationIds: t.body.map((t) => t.id) });
    } catch (t) {
        A.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_FAIL" });
    }
}
