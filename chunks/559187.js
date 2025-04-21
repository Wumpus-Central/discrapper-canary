n.d(t, { Z: () => a });
var l = n(626135),
    r = n(981631);
function a(e) {
    let { problem: t, feedback: n, reportType: a, reportId: o = null, rating: i = null, dontShowAgain: s } = e;
    l.default.track(r.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: a,
        report_id: o,
        rating: i,
        feedback: n,
        dont_show_again: s
    });
}
