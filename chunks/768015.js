a.d(e, { Z: () => c });
var n = a(626135),
    i = a(981631);
function c(t) {
    let {
        problem: e,
        channel: a,
        embeddedActivityLocation: c,
        feedback: o,
        activityApplication: d,
        analyticsData: l = {},
        location: r,
        rating: b = null,
    } = t;
    n.default.track(i.rMx.ACTIVITY_REPORT_PROBLEM, {
        reason: e,
        guild_id: null == a ? void 0 : a.getGuildId(),
        channel_id: null == a ? void 0 : a.id,
        application_id: null == d ? void 0 : d.id,
        application_name: null == d ? void 0 : d.name,
        location: r,
        rating: b,
        feedback: o,
        embedded_activity_location_kind: c.kind,
        rtc_connection_id: l.rtc_connection_id,
        media_session_id: l.media_session_id,
    });
}
