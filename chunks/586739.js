n.d(t, { Z: () => l });
var r = n(544891),
    i = n(981631);
let l = {
    fetchTeams() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return r.tn.get({
            url: i.ANM.TEAMS,
            query: { include_payout_account_status: e },
            rejectWithError: !1
        });
    }
};
