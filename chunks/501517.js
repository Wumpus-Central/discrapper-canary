n.d(t, { Z: () => r });
var i = n(544891),
    l = n(981631);
let r = {
    resolveFlag: (e) =>
        i.tn.post({
            url: l.ANM.MODERATOR_REPORT_CLOSE(e),
            body: {},
            rejectWithError: !0
        }),
    reopenModReport: (e) =>
        i.tn.put({
            url: l.ANM.REPORT_TO_MOD_REOPEN(e),
            rejectWithError: !0
        })
};
