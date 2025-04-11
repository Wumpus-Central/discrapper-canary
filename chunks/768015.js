n.d(t, { Z: () => l });
var a = n(626135),
    i = n(981631);
function l(e) {
    let { problem: t, channel: n, embeddedActivityLocation: l, feedback: o, activityApplication: c, analyticsData: s = {}, location: r, rating: d = null } = e;
    a.default.track(i.rMx.ACTIVITY_REPORT_PROBLEM, {
        reason: t,
        guild_id: null == n ? void 0 : n.getGuildId(),
        channel_id: null == n ? void 0 : n.id,
        application_id: null == c ? void 0 : c.id,
        application_name: null == c ? void 0 : c.name,
        location: r,
        rating: d,
        feedback: o,
        embedded_activity_location_kind: l.kind,
        rtc_connection_id: s.rtc_connection_id,
        media_session_id: s.media_session_id
    });
}
