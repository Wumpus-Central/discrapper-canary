"use strict";
n.d(t, { RR: () => l, RY: () => s, yG: () => a });
var i = n(636537),
    r = n(652215);
async function a(e, t, n, a, s) {
    return (
        await i.Bo.post({
            url: r.Rsh.STAGE_INSTANCES,
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
        await i.Bo.patch({ url: r.Rsh.STAGE_INSTANCE(e), body: { topic: t, privacy_level: n }, rejectWithError: !1 })
    ).body;
}
function l(e) {
    return i.Bo.del({ url: r.Rsh.STAGE_INSTANCE(e), rejectWithError: !1 });
}
