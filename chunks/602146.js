n.d(e, { RR: () => s, RY: () => a, yG: () => r });
var i = n(636537),
    l = n(652215);
async function r(t, e, n, r, a) {
    return (
        await i.Bo.post({
            url: l.Rsh.STAGE_INSTANCES,
            body: {
                channel_id: t,
                topic: e,
                privacy_level: n,
                guild_scheduled_event_id: a,
                send_start_notification: r,
            },
            rejectWithError: (0, i.fT)(),
        })
    ).body;
}
async function a(t, e, n) {
    return (
        await i.Bo.patch({
            url: l.Rsh.STAGE_INSTANCE(t),
            body: { topic: e, privacy_level: n },
            rejectWithError: (0, i.fT)(),
        })
    ).body;
}
function s(t) {
    return i.Bo.del({ url: l.Rsh.STAGE_INSTANCE(t), rejectWithError: (0, i.fT)() });
}
