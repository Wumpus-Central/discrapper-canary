n.d(e, {
    Dk: () => l,
    Ix: () => o,
    me: () => r
});
var i = n(544891),
    a = n(981631);
async function r(t, e, n, r, l) {
    return (
        await i.tn.post({
            url: a.ANM.STAGE_INSTANCES,
            body: {
                channel_id: t,
                topic: e,
                privacy_level: n,
                guild_scheduled_event_id: l,
                send_start_notification: r
            },
            rejectWithError: !1
        })
    ).body;
}
async function l(t, e, n) {
    return (
        await i.tn.patch({
            url: a.ANM.STAGE_INSTANCE(t),
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
        url: a.ANM.STAGE_INSTANCE(t),
        rejectWithError: !1
    });
}
