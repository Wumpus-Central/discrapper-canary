n.d(t, { Z: () => l });
var r = n(626135),
    a = n(981631);
function l(e) {
    let { problem: t, feedback: n, reportType: l, reportId: o = null, rating: s = null, dontShowAgain: c } = e;
    r.default.track(a.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: l,
        report_id: o,
        rating: s,
        feedback: n,
        dont_show_again: c
    });
}
