t.d(n, {
    Dk: () => o,
    Ix: () => a,
    me: () => l
});
var r = t(544891),
    i = t(981631);
async function l(e, n, t, l, o) {
    return (
        await r.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
                channel_id: e,
                topic: n,
                privacy_level: t,
                guild_scheduled_event_id: o,
                send_start_notification: l
            },
            rejectWithError: !1
        })
    ).body;
}
async function o(e, n, t) {
    return (
        await r.tn.patch({
            url: i.ANM.STAGE_INSTANCE(e),
            body: {
                topic: n,
                privacy_level: t
            },
            rejectWithError: !1
        })
    ).body;
}
function a(e) {
    return r.tn.del({
        url: i.ANM.STAGE_INSTANCE(e),
        rejectWithError: !1
    });
}
