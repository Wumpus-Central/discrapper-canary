e.d(t, {
    Dk: () => a,
    Ix: () => s,
    me: () => r
});
var i = e(544891),
    l = e(981631);
async function r(n, t, e, r, a) {
    return (
        await i.tn.post({
            url: l.ANM.STAGE_INSTANCES,
            body: {
                channel_id: n,
                topic: t,
                privacy_level: e,
                guild_scheduled_event_id: a,
                send_start_notification: r
            },
            rejectWithError: !1
        })
    ).body;
}
async function a(n, t, e) {
    return (
        await i.tn.patch({
            url: l.ANM.STAGE_INSTANCE(n),
            body: {
                topic: t,
                privacy_level: e
            },
            rejectWithError: !1
        })
    ).body;
}
function s(n) {
    return i.tn.del({
        url: l.ANM.STAGE_INSTANCE(n),
        rejectWithError: !1
    });
}
