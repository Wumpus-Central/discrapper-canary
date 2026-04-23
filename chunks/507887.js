r.d(t, { A: () => n });
var o = r(954571),
    a = r(652215);
function n(e) {
    let { problem: t, feedback: r, reportType: n, reportId: l = null, rating: i = null, dontShowAgain: d } = e;
    o.default.track(a.HAw.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: n,
        report_id: l,
        rating: i,
        feedback: r,
        dont_show_again: d,
    });
}
