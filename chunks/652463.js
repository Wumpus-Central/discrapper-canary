n.d(t, { Z: () => l });
var o = n(626135),
    a = n(981631);
function l(e, t, n, l) {
    o.default.track(a.rMx.USER_REPORT_SUBMITTED, {
        report_name: 'Guild Deletion',
        guild_id: e,
        reason: t,
        feedback: n,
        skipped: l
    });
}
