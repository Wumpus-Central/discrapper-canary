l.d(t, { Z: () => a });
var n = l(544891),
    r = l(981631);
let a = {
    resolveFlag: (e) =>
        n.tn.post({
            url: r.ANM.MODERATOR_REPORT_CLOSE(e),
            body: {},
            rejectWithError: !0
        }),
    reopenModReport: (e) =>
        n.tn.put({
            url: r.ANM.REPORT_TO_MOD_REOPEN(e),
            rejectWithError: !0
        })
};
