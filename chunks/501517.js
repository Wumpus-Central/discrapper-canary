t.d(n, { Z: () => s });
var l = t(544891),
    r = t(981631);
let s = {
    resolveFlag: (e) =>
        l.tn.post({
            url: r.ANM.MODERATOR_REPORT_CLOSE(e),
            body: {},
            rejectWithError: !0,
        }),
    reopenModReport: (e) =>
        l.tn.put({
            url: r.ANM.REPORT_TO_MOD_REOPEN(e),
            rejectWithError: !0,
        }),
};
