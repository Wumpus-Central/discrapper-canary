n.d(t, { Z: () => a });
var o = n(626135),
    r = n(981631);
function a(e) {
    let { problem: t, feedback: n, reportType: a, reportId: c = null, rating: l = null, dontShowAgain: i } = e;
    o.default.track(r.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: a,
        report_id: c,
        rating: l,
        feedback: n,
        dont_show_again: i,
    });
}
