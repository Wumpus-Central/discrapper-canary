n.d(t, { Z: () => a });
var i = n(626135),
    l = n(981631);
function a(e) {
    let { problem: t, channel: n, embeddedActivityLocation: a, feedback: r, activityApplication: o, analyticsData: c = {}, location: s, rating: u = null } = e;
    i.default.track(l.rMx.ACTIVITY_REPORT_PROBLEM, {
        reason: t,
        guild_id: null == n ? void 0 : n.getGuildId(),
        channel_id: null == n ? void 0 : n.id,
        application_id: null == o ? void 0 : o.id,
        application_name: null == o ? void 0 : o.name,
        location: s,
        rating: u,
        feedback: r,
        embedded_activity_location_kind: a.kind,
        rtc_connection_id: c.rtc_connection_id,
        media_session_id: c.media_session_id
    });
}
