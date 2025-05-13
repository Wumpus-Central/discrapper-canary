n.d(t, { Z: () => l });
var r = n(626135),
    o = n(981631);
function l(e) {
    let { problem: t, feedback: n, reportType: l, reportId: a = null, rating: i = null, dontShowAgain: c } = e;
    r.default.track(o.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: l,
        report_id: a,
        rating: i,
        feedback: n,
        dont_show_again: c
    });
}
