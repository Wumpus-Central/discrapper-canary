e.d(n, { Z: () => l });
var i = e(544891),
    r = e(981631);
let l = {
    resolveFlag: (t) =>
        i.tn.post({
            url: r.ANM.MODERATOR_REPORT_CLOSE(t),
            body: {},
            rejectWithError: !0
        }),
    reopenModReport: (t) =>
        i.tn.put({
            url: r.ANM.REPORT_TO_MOD_REOPEN(t),
            rejectWithError: !0
        })
};
