r.d(t, { A: () => o });
var n = r(954571),
    a = r(652215);
function o(e) {
    let { problem: t, feedback: r, reportType: o, reportId: l = null, rating: f = null, dontShowAgain: c } = e;
    n.default.track(a.HAw.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: o,
        report_id: l,
        rating: f,
        feedback: r,
        dont_show_again: c,
    });
}
