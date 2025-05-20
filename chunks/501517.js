n.d(t, { Z: () => l });
var r = n(544891),
    i = n(981631);
let l = {
    resolveFlag: (e) =>
        r.tn.post({
            url: i.ANM.MODERATOR_REPORT_CLOSE(e),
            body: {},
            rejectWithError: !0
        }),
    reopenModReport: (e) =>
        r.tn.put({
            url: i.ANM.REPORT_TO_MOD_REOPEN(e),
            rejectWithError: !0
        })
};
