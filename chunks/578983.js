n.d(t, { S: () => l });
var i = n(636537),
    r = n(73153),
    a = n(395671),
    s = n(652215);
async function l() {
    try {
        r.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await i.Bo.get({
                url: s.Rsh.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => a.Ay.createFromServer(e));
        (r.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: n, assets: e.body.assets }),
            r.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: t }));
    } catch (e) {
        r.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    }
}
