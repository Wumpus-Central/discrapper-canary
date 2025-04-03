n.d(t, { Z: () => o });
var r = n(626135),
    a = n(981631);
function o(e) {
    let { problem: t, feedback: n, reportType: o, reportId: l = null, rating: s = null, dontShowAgain: c } = e;
    r.default.track(a.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: o,
        report_id: l,
        rating: s,
        feedback: n,
        dont_show_again: c
    });
}
