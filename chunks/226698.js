"use strict";
n.d(t, { A: () => s });
var r = n(562465),
    a = n(652215);
let s = {
    resolveFlag: (e) => r.Bo.post({ url: a.Rsh.MODERATOR_REPORT_CLOSE(e), body: {}, rejectWithError: !0 }),
    reopenModReport: (e) => r.Bo.put({ url: a.Rsh.REPORT_TO_MOD_REOPEN(e), rejectWithError: !0 }),
};
