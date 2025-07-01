n.d(t, { Z: () => i });
var r = n(544891),
    s = n(981631);
let i = {
    fetchTeams() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return r.tn.get({
            url: s.ANM.TEAMS,
            query: { include_payout_account_status: e },
            rejectWithError: !1
        });
    }
};
