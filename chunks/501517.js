i.d(n, { Z: () => r });
var e = i(544891),
    l = i(981631);
let r = {
    resolveFlag: (t) =>
        e.tn.post({
            url: l.ANM.MODERATOR_REPORT_CLOSE(t),
            body: {},
            rejectWithError: !0,
        }),
    reopenModReport: (t) =>
        e.tn.put({
            url: l.ANM.REPORT_TO_MOD_REOPEN(t),
            rejectWithError: !0,
        }),
};
