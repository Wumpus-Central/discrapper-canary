n.d(t, {
    Dk: () => a,
    Ix: () => o,
    me: () => l
});
var r = n(544891),
    i = n(981631);
async function l(e, t, n, l, a) {
    return (
        await r.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
                channel_id: e,
                topic: t,
                privacy_level: n,
                guild_scheduled_event_id: a,
                send_start_notification: l
            },
            rejectWithError: !1
        })
    ).body;
}
async function a(e, t, n) {
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
