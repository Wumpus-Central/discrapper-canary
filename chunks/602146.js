n.d(t, {
    RR: () => o,
    RY: () => s,
    yG: () => a,
});
var r = n(562465),
    i = n(652215);
async function a(e, t, n, a, s) {
    return (
        await r.Bo.post({
            url: i.Rsh.STAGE_INSTANCES,
            body: {
                channel_id: e,
                topic: t,
                privacy_level: n,
                guild_scheduled_event_id: s,
                send_start_notification: a,
            },
            rejectWithError: !1,
        })
    ).body;
}
async function s(e, t, n) {
    return (
        await r.Bo.patch({
            url: i.Rsh.STAGE_INSTANCE(e),
            body: {
                topic: t,
                privacy_level: n,
            },
            rejectWithError: !1,
        })
    ).body;
}

function o(e) {
    return r.Bo.del({
        url: i.Rsh.STAGE_INSTANCE(e),
        rejectWithError: !1,
    });
}
