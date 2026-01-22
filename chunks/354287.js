n.d(t, {
    KL: () => l,
    gx: () => s,
    kY: () => a,
    wV: () => o,
});
var r = n(954571),
    i = n(652215),
    a = (function (e) {
        return (
            (e.VIEW = "view"),
            (e.PLAY = "play"),
            (e.CLOUD_PLAY = "cloud_play"),
            (e.JOIN = "join"),
            (e.ADD_APP = "add_app"),
            (e.JOIN_SERVER = "join_server"),
            (e.INVITE = "invite"),
            (e.SYNC = "sync"),
            (e.CONTENT = "content"),
            (e.BANNER = "banner"),
            (e.STREAM = "stream"),
            (e.CONNECT_ACCOUNT = "connect_account"),
            e
        );
    })({});
function s(e) {
    let { applicationId: t, linkType: n, area: a, referrerId: s, customId: o, isDeadEnd: l } = e;
    r.default.track(i.HAw.APP_EMBED_CLICKED, {
        application_id: t,
        link_type: n,
        area: a,
        referrer_id: s,
        custom_id: o,
        is_dead_end: l,
    });
}
function o(e) {
    let { appId: t, linkType: n, referrerId: a, customId: s, guildId: o, channelId: l, messageId: c } = e;
    r.default.track(i.HAw.APP_EMBED_VIEWED, {
        application_id: t,
        link_type: n,
        referrer_id: a,
        custom_id: s,
        guild_id: o,
        channel_id: l,
        message_id: c,
    });
}
function l(e, t, n, a) {
    r.default.track(i.HAw.APP_EMBED_LINK_SENT, {
        application_id: e,
        link_type: t,
        referrer_id: n,
        custom_id: a,
    });
}
