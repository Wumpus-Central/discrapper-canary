l.d(e, { Z: () => a });
var n = l(544891),
    s = l(981631);
let a = {
    resolveFlag: (t) =>
        n.tn.post({
            url: s.ANM.MODERATOR_REPORT_CLOSE(t),
            body: {},
            rejectWithError: !0,
        }),
    reopenModReport: (t) =>
        n.tn.put({
            url: s.ANM.REPORT_TO_MOD_REOPEN(t),
            rejectWithError: !0,
        }),
};
