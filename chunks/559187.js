n.d(t, { Z: () => c });
var o = n(626135),
    r = n(981631);
function c(e) {
    let { problem: t, feedback: n, reportType: c, reportId: l = null, rating: a = null, dontShowAgain: i } = e;
    o.default.track(r.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: c,
        report_id: l,
        rating: a,
        feedback: n,
        dont_show_again: i
    });
}
