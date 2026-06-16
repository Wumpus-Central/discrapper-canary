i.d(n, { A: () => l });
var e = i(636537),
    r = i(652215);
let l = {
    fetchTeams() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e.Bo.get({ url: r.Rsh.TEAMS, query: { include_payout_account_status: t }, rejectWithError: !1 });
    },
};
