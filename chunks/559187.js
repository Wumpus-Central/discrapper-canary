n.d(t, { Z: () => c });
var o = n(626135),
    r = n(981631);
function c(e) {
    let { problem: t, feedback: n, reportType: c, reportId: a = null, rating: l = null, dontShowAgain: i } = e;
    o.default.track(r.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: c,
        report_id: a,
        rating: l,
        feedback: n,
        dont_show_again: i
    });
}
