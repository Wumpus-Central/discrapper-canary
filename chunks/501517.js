n.d(e, { Z: () => a });
var l = n(544891),
    i = n(981631);
let a = {
    resolveFlag: (t) =>
        l.tn.post({
            url: i.ANM.MODERATOR_REPORT_CLOSE(t),
            body: {},
            rejectWithError: !0,
        }),
    reopenModReport: (t) =>
        l.tn.put({
            url: i.ANM.REPORT_TO_MOD_REOPEN(t),
            rejectWithError: !0,
        }),
};
