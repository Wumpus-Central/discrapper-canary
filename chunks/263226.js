n.d(t, { Z: () => l });
var r = n(626135),
    a = n(981631);
function l(e, t, n, l) {
    r.default.track(a.rMx.USER_REPORT_SUBMITTED, {
        report_name: 'Guild Leave',
        guild_id: e,
        reason: t,
        feedback: n,
        skipped: l
    });
}
