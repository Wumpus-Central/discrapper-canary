n.d(t, { A: () => l });
var i = n(562465),
    r = n(652215);
let l = {
    resolveFlag: (e) => i.Bo.post({ url: r.Rsh.MODERATOR_REPORT_CLOSE(e), body: {}, rejectWithError: !0 }),
    reopenModReport: (e) => i.Bo.put({ url: r.Rsh.REPORT_TO_MOD_REOPEN(e), rejectWithError: !0 }),
};
