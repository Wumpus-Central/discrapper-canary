r.d(e, { RR: () => s, RY: () => c, yG: () => E });
var i = r(562465),
    n = r(652215);
async function E(t, e, r, E, c) {
    return (
        await i.Bo.post({
            url: n.Rsh.STAGE_INSTANCES,
            body: {
                channel_id: t,
                topic: e,
                privacy_level: r,
                guild_scheduled_event_id: c,
                send_start_notification: E,
            },
            rejectWithError: !1,
        })
    ).body;
}
async function c(t, e, r) {
    return (
        await i.Bo.patch({ url: n.Rsh.STAGE_INSTANCE(t), body: { topic: e, privacy_level: r }, rejectWithError: !1 })
    ).body;
}
function s(t) {
    return i.Bo.del({ url: n.Rsh.STAGE_INSTANCE(t), rejectWithError: !1 });
}
