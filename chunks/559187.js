n.d(t, { Z: () => r });
var l = n(626135),
    a = n(981631);
function r(e) {
    let { problem: t, feedback: n, reportType: r, reportId: i = null, rating: s = null, dontShowAgain: c } = e;
    l.default.track(a.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: r,
        report_id: i,
        rating: s,
        feedback: n,
        dont_show_again: c
    });
}
