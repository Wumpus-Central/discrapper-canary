n.d(t, { A: () => r });
var i = n(562465),
    s = n(652215);
let r = {
    fetchTeams() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return i.Bo.get({ url: s.Rsh.TEAMS, query: { include_payout_account_status: e }, rejectWithError: !1 });
    },
};
