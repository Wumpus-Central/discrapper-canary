n.d(t, { Z: () => a });
var i = n(626135),
    l = n(981631);
function a(e) {
    let { problem: t, channel: n, feedback: a, activityApplication: s, analyticsData: c, location: o, rating: r = null } = e;
    i.default.track(l.rMx.ACTIVITY_REPORT_PROBLEM, {
        reason: t,
        guild_id: n.getGuildId(),
        channel_id: n.id,
        application_id: null == s ? void 0 : s.id,
        application_name: null == s ? void 0 : s.name,
        location: o,
        rating: r,
        feedback: a,
        ...c
    });
}
