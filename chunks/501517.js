t.d(n, { Z: () => l });
var r = t(544891),
    i = t(981631);
let l = {
    resolveFlag: (e) =>
        r.tn.post({
            url: i.ANM.MODERATOR_REPORT_CLOSE(e),
            body: {},
            rejectWithError: !0,
        }),
    reopenModReport: (e) =>
        r.tn.put({
            url: i.ANM.REPORT_TO_MOD_REOPEN(e),
            rejectWithError: !0,
        }),
};
