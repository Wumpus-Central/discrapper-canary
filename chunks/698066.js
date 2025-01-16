n.d(t, {
    Z: function () {
        return i;
    }
});
var l = n(626135),
    a = n(981631);
function i(e) {
    let { problem: t, stream: n, feedback: i, streamApplication: r, analyticsData: o, location: s, rating: c = null } = e;
    l.default.track(a.rMx.STREAM_REPORT_PROBLEM, {
        reason: t,
        streamer_user_id: n.ownerId,
        stream_channel_id: n.channelId,
        guild_id: n.guildId,
        application_id: null != r ? r.id : null,
        application_name: null != r ? r.name : null,
        location: s,
        rating: c,
        feedback: i,
        ...o
    });
}
