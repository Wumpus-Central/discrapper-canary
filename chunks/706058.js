n.d(t, {
    Dk: () => l,
    Ix: () => o,
    me: () => a
});
var r = n(544891),
    i = n(981631);
async function a(e, t, n, a, l) {
    return (
        await r.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
                channel_id: e,
                topic: t,
                privacy_level: n,
                guild_scheduled_event_id: l,
                send_start_notification: a
            },
            rejectWithError: !1
        })
    ).body;
}
async function l(e, t, n) {
    return (
        await r.tn.patch({
            url: i.ANM.STAGE_INSTANCE(e),
            body: {
                topic: t,
                privacy_level: n
            },
            rejectWithError: !1
        })
    ).body;
}
function o(e) {
    return r.tn.del({
        url: i.ANM.STAGE_INSTANCE(e),
        rejectWithError: !1
    });
}
