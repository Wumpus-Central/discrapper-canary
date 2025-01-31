n.d(t, { Z: () => l });
var i = n(544891),
    r = n(981631);
let l = {
    fetchTeams() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return i.tn.get({
            url: r.ANM.TEAMS,
            query: { include_payout_account_status: e },
            rejectWithError: !1
        });
    }
};
