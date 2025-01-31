n.d(t, { Z: () => a });
var l = n(626135),
    i = n(981631);
function a(e) {
    let { problem: t, stream: n, feedback: a, streamApplication: r, analyticsData: s, location: c, rating: o = null } = e;
    l.default.track(i.rMx.STREAM_REPORT_PROBLEM, {
        reason: t,
        streamer_user_id: n.ownerId,
        stream_channel_id: n.channelId,
        guild_id: n.guildId,
        application_id: null != r ? r.id : null,
        application_name: null != r ? r.name : null,
        location: c,
        rating: o,
        feedback: a,
        ...s
    });
}
