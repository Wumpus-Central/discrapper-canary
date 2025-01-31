n.d(t, { Z: () => o });
var l = n(626135),
    a = n(981631);
function o(e, t, n, o) {
    l.default.track(a.rMx.USER_REPORT_SUBMITTED, {
        report_name: 'Guild Leave',
        guild_id: e,
        reason: t,
        feedback: n,
        skipped: o
    });
}
