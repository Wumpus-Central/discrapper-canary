"use strict";
n.d(t, { RR: () => o, RY: () => a, yG: () => s });
var i = n(636537),
    r = n(652215);
async function s(e, t, n, s, a) {
    return (
        await i.Bo.post({
            url: r.Rsh.STAGE_INSTANCES,
            body: {
                channel_id: e,
                topic: t,
                privacy_level: n,
                guild_scheduled_event_id: a,
                send_start_notification: s,
            },
            rejectWithError: !1,
        })
    ).body;
}
async function a(e, t, n) {
    return (
        await i.Bo.patch({ url: r.Rsh.STAGE_INSTANCE(e), body: { topic: t, privacy_level: n }, rejectWithError: !1 })
    ).body;
}
function o(e) {
    return i.Bo.del({ url: r.Rsh.STAGE_INSTANCE(e), rejectWithError: !1 });
}
