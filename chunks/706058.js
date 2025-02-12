n.d(t, {
    Dk: () => r,
    Ix: () => s,
    me: () => a
});
var i = n(544891),
    l = n(981631);
async function a(e, t, n, a, r) {
    return (
        await i.tn.post({
            url: l.ANM.STAGE_INSTANCES,
            body: {
                channel_id: e,
                topic: t,
                privacy_level: n,
                guild_scheduled_event_id: r,
                send_start_notification: a
            },
            rejectWithError: !1
        })
    ).body;
}
async function r(e, t, n) {
    return (
        await i.tn.patch({
            url: l.ANM.STAGE_INSTANCE(e),
            body: {
                topic: t,
                privacy_level: n
            },
            rejectWithError: !1
        })
    ).body;
}
function s(e) {
    return i.tn.del({
        url: l.ANM.STAGE_INSTANCE(e),
        rejectWithError: !1
    });
}
