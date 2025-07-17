n.d(t, { Z: () => o });
var i = n(626135),
    a = n(981631);
function o(e) {
    let { problem: t, channel: n, embeddedActivityLocation: o, feedback: l, activityApplication: c, analyticsData: r = {}, location: _, rating: d = null } = e;
    i.default.track(a.rMx.ACTIVITY_REPORT_PROBLEM, {
        reason: t,
        guild_id: null == n ? void 0 : n.getGuildId(),
        channel_id: null == n ? void 0 : n.id,
        application_id: null == c ? void 0 : c.id,
        application_name: null == c ? void 0 : c.name,
        location: _,
        rating: d,
        feedback: l,
        embedded_activity_location_kind: o.kind,
        rtc_connection_id: r.rtc_connection_id,
        media_session_id: r.media_session_id
    });
}
