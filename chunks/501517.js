n.d(t, { Z: () => l });
var i = n(544891),
    r = n(981631);
let l = {
    resolveFlag: (e) =>
        i.tn.post({
            url: r.ANM.MODERATOR_REPORT_CLOSE(e),
            body: {},
            rejectWithError: !0
        }),
    reopenModReport: (e) =>
        i.tn.put({
            url: r.ANM.REPORT_TO_MOD_REOPEN(e),
            rejectWithError: !0
        })
};
