t.d(n, {
    Dk: function () {
        return a;
    },
    Ix: function () {
        return s;
    },
    me: function () {
        return r;
    }
});
var i = t(544891),
    l = t(981631);
async function r(e, n, t, r, a) {
    return (
        await i.tn.post({
            url: l.ANM.STAGE_INSTANCES,
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
        await i.tn.patch({
            url: l.ANM.STAGE_INSTANCE(e),
            body: {
                topic: n,
                privacy_level: t
            },
            rejectWithError: !1
        })
    ).body;
}
function s(e) {
    return i.tn.del({
        url: l.ANM.STAGE_INSTANCE(e),
        rejectWithError: !1
    });
}
