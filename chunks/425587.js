n.d(t, { A: () => a });
var r = n(562465),
    i = n(652215);
let a = {
    fetchTeams() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return r.Bo.get({
            url: i.Rsh.TEAMS,
            query: { include_payout_account_status: e },
            rejectWithError: !1,
        });
    },
};
