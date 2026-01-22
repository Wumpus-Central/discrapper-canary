n.d(e, { A: () => l });
var r = n(562465),
    i = n(652215);
let l = {
    resolveFlag: (t) =>
        r.Bo.post({
            url: i.Rsh.MODERATOR_REPORT_CLOSE(t),
            body: {},
            rejectWithError: !0,
        }),
    reopenModReport: (t) =>
        r.Bo.put({
            url: i.Rsh.REPORT_TO_MOD_REOPEN(t),
            rejectWithError: !0,
        }),
};
