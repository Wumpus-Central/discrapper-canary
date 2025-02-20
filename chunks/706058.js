n.d(e, {
    Dk: () => l,
    Ix: () => o,
    me: () => a
});
var i = n(544891),
    r = n(981631);
async function a(t, e, n, a, l) {
    return (
        await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
                channel_id: t,
                topic: e,
                privacy_level: n,
                guild_scheduled_event_id: l,
                send_start_notification: a
            },
            rejectWithError: !1
        })
    ).body;
}
async function l(t, e, n) {
    return (
        await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(t),
            body: {
                topic: e,
                privacy_level: n
            },
            rejectWithError: !1
        })
    ).body;
}
function o(t) {
    return i.tn.del({
        url: r.ANM.STAGE_INSTANCE(t),
        rejectWithError: !1
    });
}
