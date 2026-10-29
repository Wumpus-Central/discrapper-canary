l.d(e, { S: () => h });
var s = l(636537),
    a = l(73153),
    i = l(652215);
async function h() {
    a.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
    try {
        let t = await s.Bo.get({
            url: i.Rsh.APPLICATIONS,
            query: { with_team_applications: !0 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        a.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_SUCCESS", applicationIds: t.body.map((t) => t.id) });
    } catch (t) {
        a.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_FAIL" });
    }
}
