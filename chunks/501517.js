n.d(e, { Z: () => i });
var r = n(544891),
    l = n(981631);
let i = {
    resolveFlag: (t) =>
        r.tn.post({
            url: l.ANM.MODERATOR_REPORT_CLOSE(t),
            body: {},
            rejectWithError: !0,
        }),
    reopenModReport: (t) =>
        r.tn.put({
            url: l.ANM.REPORT_TO_MOD_REOPEN(t),
            rejectWithError: !0,
        }),
};
