"use strict";
n.d(t, { KL: () => u, gx: () => o, kY: () => a, wV: () => l });
var i,
    r = n(174459),
    s = n(652215),
    a =
        (((i = {}).VIEW = "view"),
        (i.PLAY = "play"),
        (i.CLOUD_PLAY = "cloud_play"),
        (i.JOIN = "join"),
        (i.ADD_APP = "add_app"),
        (i.JOIN_SERVER = "join_server"),
        (i.INVITE = "invite"),
        (i.SYNC = "sync"),
        (i.CONTENT = "content"),
        (i.BANNER = "banner"),
        (i.STREAM = "stream"),
        (i.CONNECT_ACCOUNT = "connect_account"),
        i);
function o(e) {
    let { applicationId: t, linkType: n, area: i, referrerId: a, customId: o, isDeadEnd: l } = e;
    r.default.track(s.HAw.APP_EMBED_CLICKED, {
        application_id: t,
        link_type: n,
        area: i,
        referrer_id: a,
        custom_id: o,
        is_dead_end: l,
    });
}
function l(e) {
    let { appId: t, linkType: n, referrerId: i, customId: a, guildId: o, channelId: l, messageId: u } = e;
    r.default.track(s.HAw.APP_EMBED_VIEWED, {
        application_id: t,
        link_type: n,
        referrer_id: i,
        custom_id: a,
        guild_id: o,
        channel_id: l,
        message_id: u,
    });
}
function u(e, t, n, i) {
    r.default.track(s.HAw.APP_EMBED_LINK_SENT, { application_id: e, link_type: t, referrer_id: n, custom_id: i });
}
