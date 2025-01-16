n.d(t, {
    Z: function () {
        return o;
    }
});
var l = n(626135),
    a = n(981631);
function o(e) {
    let { problem: t, feedback: n, reportType: o, reportId: r = null, rating: i = null, dontShowAgain: s } = e;
    l.default.track(a.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: o,
        report_id: r,
        rating: i,
        feedback: n,
        dont_show_again: s
    });
}
