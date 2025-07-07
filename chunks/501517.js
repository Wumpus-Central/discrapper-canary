l.d(t, { Z: () => r });
var n = l(544891),
    o = l(981631);
let r = {
    resolveFlag: (e) =>
        n.tn.post({
            url: o.ANM.MODERATOR_REPORT_CLOSE(e),
            body: {},
            rejectWithError: !0
        }),
    reopenModReport: (e) =>
        n.tn.put({
            url: o.ANM.REPORT_TO_MOD_REOPEN(e),
            rejectWithError: !0
        })
};
