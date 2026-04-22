"use strict";
n.d(t, { KL: () => u, gx: () => o, kY: () => a, wV: () => l });
var r,
    i = n(954571),
    s = n(652215),
    a =
        (((r = {}).VIEW = "view"),
        (r.PLAY = "play"),
        (r.CLOUD_PLAY = "cloud_play"),
        (r.JOIN = "join"),
        (r.ADD_APP = "add_app"),
        (r.JOIN_SERVER = "join_server"),
        (r.INVITE = "invite"),
        (r.SYNC = "sync"),
        (r.CONTENT = "content"),
        (r.BANNER = "banner"),
        (r.STREAM = "stream"),
        (r.CONNECT_ACCOUNT = "connect_account"),
        r);
function o(e) {
    let { applicationId: t, linkType: n, area: r, referrerId: a, customId: o, isDeadEnd: l } = e;
    i.default.track(s.HAw.APP_EMBED_CLICKED, {
        application_id: t,
        link_type: n,
        area: r,
        referrer_id: a,
        custom_id: o,
        is_dead_end: l,
    });
}
function l(e) {
    let { appId: t, linkType: n, referrerId: r, customId: a, guildId: o, channelId: l, messageId: u } = e;
    i.default.track(s.HAw.APP_EMBED_VIEWED, {
        application_id: t,
        link_type: n,
        referrer_id: r,
        custom_id: a,
        guild_id: o,
        channel_id: l,
        message_id: u,
    });
}
function u(e, t, n, r) {
    i.default.track(s.HAw.APP_EMBED_LINK_SENT, { application_id: e, link_type: t, referrer_id: n, custom_id: r });
}
