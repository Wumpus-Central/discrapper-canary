var l = a(620632),
    s = a(73153),
    n = a(652215);
a.d(
    t,
    {},
    {
        S: async function () {
            s.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
            try {
                let e = await l.Bo.get({
                    url: n.Rsh.APPLICATIONS,
                    query: { with_team_applications: !0 },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                s.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_SUCCESS", applicationIds: e.body.map((e) => e.id) });
            } catch (e) {
                s.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_FAIL" });
            }
        },
    },
);
