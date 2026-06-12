o.d(e, { A: () => s });
var t = o(636537),
    p = o(652215);
let s = {
    resolveFlag: (r) => t.Bo.post({ url: p.Rsh.MODERATOR_REPORT_CLOSE(r), body: {}, rejectWithError: !0 }),
    reopenModReport: (r) => t.Bo.put({ url: p.Rsh.REPORT_TO_MOD_REOPEN(r), rejectWithError: !0 }),
};
