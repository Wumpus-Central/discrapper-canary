_.d(t, { A: () => r });
var o = _(954571),
    n = _(652215);
function r(e) {
    let { problem: t, feedback: _, reportType: r, reportId: c = null, rating: a = null, dontShowAgain: l } = e;
    o.default.track(n.HAw.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: r,
        report_id: c,
        rating: a,
        feedback: _,
        dont_show_again: l,
    });
}
