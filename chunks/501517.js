r.d(t, { Z: () => l });
var n = r(544891),
    o = r(981631);
let l = {
    resolveFlag: (e) =>
        n.tn.post({
            url: o.ANM.MODERATOR_REPORT_CLOSE(e),
            body: {},
            rejectWithError: !0,
        }),
    reopenModReport: (e) =>
        n.tn.put({
            url: o.ANM.REPORT_TO_MOD_REOPEN(e),
            rejectWithError: !0,
        }),
};
