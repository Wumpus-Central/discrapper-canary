t.d(n, {
    Dk: () => a,
    Ix: () => s,
    me: () => r
});
var l = t(544891),
    i = t(981631);
async function r(e, n, t, r, a) {
    return (
        await l.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
                channel_id: e,
                topic: n,
                privacy_level: t,
                guild_scheduled_event_id: a,
                send_start_notification: r
            },
            rejectWithError: !1
        })
    ).body;
}
async function a(e, n, t) {
    return (
        await l.tn.patch({
            url: i.ANM.STAGE_INSTANCE(e),
            body: {
                topic: n,
                privacy_level: t
            },
            rejectWithError: !1
        })
    ).body;
}
function s(e) {
    return l.tn.del({
        url: i.ANM.STAGE_INSTANCE(e),
        rejectWithError: !1
    });
}
