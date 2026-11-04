var r = n(620632),
    i = n(652215);
n.d(
    e,
    {},
    {
        A: {
            fetchTeams() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return r.Bo.get({ url: i.Rsh.TEAMS, query: { include_payout_account_status: t }, rejectWithError: !1 });
            },
        },
    },
);
