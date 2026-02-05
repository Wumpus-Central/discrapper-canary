"use strict";
n.d(t, { A: () => r });
var s = n(562465),
    i = n(652215);
let r = {
    fetchTeams() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return s.Bo.get({ url: i.Rsh.TEAMS, query: { include_payout_account_status: e }, rejectWithError: !1 });
    },
};
