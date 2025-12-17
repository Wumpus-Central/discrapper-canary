a.d(t, { Z: () => r });
var n = a(626135),
    o = a(981631);
function r(e) {
    let { problem: t, feedback: a, reportType: r, reportId: c = null, rating: d = null, dontShowAgain: l } = e;
    n.default.track(o.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: r,
        report_id: c,
        rating: d,
        feedback: a,
        dont_show_again: l,
    });
}
